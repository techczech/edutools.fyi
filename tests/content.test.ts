import { describe, expect, it } from 'vitest';
import { buildContentRepository, parseDocument, parseHeadingDocument } from '../lib/content';

const fixture = `---\nid: example\ntitle: Example\n---\n\nHello **world**.`;

describe('Markdown content repository', () => {
  it('preserves frontmatter, body and source path', () => {
    expect(parseDocument('content/projects/example.md', fixture)).toMatchObject({
      sourcePath: 'content/projects/example.md', data: { id: 'example', title: 'Example' }, body: 'Hello **world**.',
    });
  });

  it('derives editable titles and named fields from Markdown headings', () => {
    const document = parseDocument('content/interface/example.md', `---\nid: example\n---\n# Visible title\n\n## Introduction\n\nEditable introduction.\n\n## Action label\n\nOpen example`);

    expect(document.data.title).toBe('Visible title');
    expect(parseHeadingDocument(document)).toEqual({
      title: 'Visible title',
      fields: {
        introduction: 'Editable introduction.',
        action_label: 'Open example',
      },
      sections: [
        { title: 'Introduction', value: 'Editable introduction.' },
        { title: 'Action label', value: 'Open example' },
      ],
    });
  });

  it('loads the complete public catalogue and excludes editorial records', () => {
    const modules = import.meta.glob('/content/**/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
    const repository = buildContentRepository(modules);
    expect(repository.projects).toHaveLength(42);
    expect(repository.skills).toHaveLength(15);
    expect(repository.documents.some((item) => item.sourcePath.includes('/_editorial/'))).toBe(false);
    expect(new Set(repository.catalogue.map((item) => item.data.id)).size).toBe(57);
    expect(repository.categories.map((item) => item.data.id)).toEqual(['interactive-learning-objects','content-distribution','agent-skills','desktop-apps']);
    expect(repository.relationships.map((item) => item.data.id)).toEqual(['built-by-ai','powered-by-ai','delegated-to-ai']);
    expect(repository.site.data).toEqual({ edition: 2026 });
    expect(repository.interface.map((item) => item.data.id)).toEqual([
      'site', 'navigation', 'footer', 'ai-involvement', 'featured', 'catalogue',
      'getting-started', 'review', 'settings', 'shortcuts',
    ]);
    expect(repository.interfaceCopy.ui.search_placeholder).toBeTruthy();
    expect(repository.interfaceCopy.navigation.map((item) => item.label)).toEqual([
      'Types of tools', 'AI involvement', 'Featured apps', 'Catalogue', 'About',
    ]);
    expect(repository.projects.every((item) => !/(Vite|React|Tailwind|Electron|Tauri|TypeScript|Astro|Gemini API|monorepo)/i.test(item.data.built_with ?? ''))).toBe(true);
    expect(repository.projects.some((item) => item.data.built_with === 'Desktop agent')).toBe(true);
    expect(repository.projects.some((item) => item.data.built_with === 'Google AI Studio')).toBe(true);
    expect(repository.projects.some((item) => item.data.built_with === 'Lovable')).toBe(true);
    const projectTools = new Map(repository.projects.map((item) => [item.data.id, item.data.built_with]));
    expect(projectTools.get('proposition-mapper')).toBe('Google AI Studio');
    expect(projectTools.get('readabilitopia')).toBe('Lovable');
    expect(projectTools.get('10weekai')).toBe('Gemini CLI');
    expect(projectTools.get('ai-in-clinical-trials')).toBe('Google Antigravity');
    expect(projectTools.get('lddnavigator-site')).toBe('Claude Code');
  });

  it('defines three featured examples for each catalogue category', () => {
    const modules = import.meta.glob('/content/**/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
    const repository = buildContentRepository(modules);
    const expected = {
      'interactive-learning-objects': ['above-the-line', 'corpus-for-non-linguists', '10weekai'],
      'content-distribution': ['instructional-videos-framework', 'building-your-language-muscle', 'deliberate-practice-guide'],
      'agent-skills': ['canvas-course-manager', 'ppt2handoutskill', 'research-translation'],
      'desktop-apps': ['writeflex-desktop', 'highlight-scout', 'talk-weaver'],
    };

    const featured = repository.catalogue.filter((item) => item.data.featured);
    expect(featured).toHaveLength(12);

    for (const [category, ids] of Object.entries(expected)) {
      expect(featured
        .filter((item) => item.data.category === category)
        .sort((a, b) => a.data.featured_order - b.data.featured_order)
        .map((item) => item.data.id)).toEqual(ids);
    }

    expect(repository.catalogue.find((item) => item.data.id === '10weekai')?.data.category)
      .toBe('interactive-learning-objects');
    expect(featured.every((item) => item.data.links?.[0]?.url || item.data.source_url)).toBe(true);
  });

  it('rejects unsupported controlled vocabulary', () => {
    const modules = {
      '/content/site.md': `---\ntitle: Site\nui: { search_placeholder: Search }\n---`,
      '/content/projects/bad.md': `---\nid: bad\ntitle: Bad\nkind: project\ncategory: fifth-kind\nrelationships: [built-by-ai]\norder: 1\n---`,
    };
    expect(() => buildContentRepository(modules)).toThrow(/category/i);
  });

  it('keeps public explanatory copy free of banned and editorial language', () => {
    const modules = import.meta.glob('/content/**/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
    const repository = buildContentRepository(modules);
    const visibleFields = repository.documents.flatMap(({ data, body }) => [
      data.title, data.description, data.tagline, data.short_label, data.territory_label, data.warning, body,
    ]);
    const siteLabels = [
      ...repository.interfaceCopy.navigation.map((item) => item.label),
      ...Object.values(repository.interfaceCopy.ui).flatMap((value) => typeof value === 'string' ? [value] : []),
    ];
    const publicCopy = [...visibleFields, ...siteLabels].filter(Boolean).join('\n');
    expect(publicCopy).not.toMatch(/\b(boundar(?:y|ies)|surfaces?|relationships?|runtime AI|human (?:purpose|judg(?:e)?ment)|good delegation|impressive first demonstration)\b/i);
  });

  it('tracks the catalogue entries still waiting for public URLs', () => {
    const modules = import.meta.glob('/content/**/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
    const repository = buildContentRepository(modules);
    const pending = repository.catalogue
      .filter((item) => !item.data.source_url && !item.data.links?.[0]?.url)
      .map((item) => item.data.id)
      .sort();
    expect(pending).toEqual([
      'codex-lens',
      'keymaster',
      'rodney-brooks-prediction-tracker',
    ]);
  });
});
