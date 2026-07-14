import YAML from 'yaml';

export const CATEGORY_IDS = ['interactive-learning-objects','content-distribution','agent-skills','desktop-apps'] as const;
export const RELATIONSHIP_IDS = ['built-by-ai','powered-by-ai','delegated-to-ai'] as const;

export type ContentData = Record<string, any>;
export interface ContentDocument<T extends ContentData = ContentData> { sourcePath: string; data: T; body: string }
export interface ContentRepository {
  documents: ContentDocument[];
  site: ContentDocument;
  homepage: ContentDocument;
  categories: ContentDocument[];
  relationships: ContentDocument[];
  projects: ContentDocument[];
  skills: ContentDocument[];
  catalogue: ContentDocument[];
  gettingStarted: ContentDocument[];
  journey: ContentDocument[];
  collections: ContentDocument[];
}

export function parseDocument(sourcePath: string, raw: string): ContentDocument {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*(?:\n|$)([\s\S]*)$/);
  if (!match) throw new Error(`Missing YAML frontmatter in ${sourcePath}`);
  const data = YAML.parse(match[1]);
  if (!data || typeof data !== 'object') throw new Error(`Invalid YAML frontmatter in ${sourcePath}`);
  return { sourcePath: sourcePath.replace(/^\//, ''), data, body: match[2].trim() };
}

function byOrder(a: ContentDocument, b: ContentDocument) {
  return (Number(a.data.order) || 999) - (Number(b.data.order) || 999) || String(a.data.title).localeCompare(String(b.data.title));
}

export function buildContentRepository(modules: Record<string, string>): ContentRepository {
  const documents = Object.entries(modules)
    .filter(([path, raw]) => !path.includes('/_editorial/') && path.endsWith('.md') && /^---/.test(raw))
    .map(([path, raw]) => parseDocument(path, raw));
  const exact = (path: string) => documents.find((item) => item.sourcePath === path);
  const site = exact('content/site.md');
  const homepage = exact('content/homepage.md') ?? site;
  if (!site || !homepage) throw new Error('content/site.md and content/homepage.md are required');
  const inFolder = (folder: string) => documents.filter((item) => item.sourcePath.startsWith(`content/${folder}/`)).sort(byOrder);
  const projects = inFolder('projects');
  const skills = inFolder('skills');
  for (const item of [...projects, ...skills]) {
    if (!CATEGORY_IDS.includes(item.data.category)) throw new Error(`Unsupported category in ${item.sourcePath}`);
    for (const relationship of item.data.relationships ?? []) {
      if (!RELATIONSHIP_IDS.includes(relationship)) throw new Error(`Unsupported relationship in ${item.sourcePath}`);
    }
  }
  const ids = [...projects, ...skills].map((item) => item.data.id);
  if (new Set(ids).size !== ids.length) throw new Error('Catalogue IDs must be unique');
  return {
    documents, site, homepage,
    categories: inFolder('categories'), relationships: inFolder('relationships'), projects, skills,
    catalogue: [...projects, ...skills].sort(byOrder), gettingStarted: inFolder('getting-started'),
    journey: inFolder('journey'), collections: inFolder('collections'),
  };
}

const publicModules = import.meta.glob('/content/**/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
export const contentRepository = buildContentRepository(publicModules);
