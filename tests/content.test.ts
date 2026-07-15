import { describe, expect, it } from 'vitest';
import { buildContentRepository, parseDocument } from '../lib/content';

const fixture = `---\nid: example\ntitle: Example\n---\n\nHello **world**.`;

describe('Markdown content repository', () => {
  it('preserves frontmatter, body and source path', () => {
    expect(parseDocument('content/projects/example.md', fixture)).toMatchObject({
      sourcePath: 'content/projects/example.md', data: { id: 'example', title: 'Example' }, body: 'Hello **world**.',
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
    expect(repository.site.data.ui.search_placeholder).toBeTruthy();
    expect(repository.projects.every((item) => !/(Vite|React|Tailwind|Electron|Tauri|TypeScript|Astro|Gemini API|monorepo)/i.test(item.data.built_with ?? ''))).toBe(true);
    expect(repository.projects.some((item) => item.data.built_with === 'Desktop agent')).toBe(true);
    expect(repository.projects.some((item) => item.data.built_with === 'Google AI Studio')).toBe(true);
    expect(repository.projects.some((item) => item.data.built_with === 'Lovable')).toBe(true);
  });

  it('rejects unsupported controlled vocabulary', () => {
    const modules = {
      '/content/site.md': `---\ntitle: Site\nui: { search_placeholder: Search }\n---`,
      '/content/projects/bad.md': `---\nid: bad\ntitle: Bad\nkind: project\ncategory: fifth-kind\nrelationships: [built-by-ai]\norder: 1\n---`,
    };
    expect(() => buildContentRepository(modules)).toThrow(/category/i);
  });
});
