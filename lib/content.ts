import YAML from 'yaml';

export const CATEGORY_IDS = ['interactive-learning-objects','content-distribution','agent-skills','desktop-apps'] as const;
export const RELATIONSHIP_IDS = ['built-by-ai','powered-by-ai','delegated-to-ai'] as const;

export type ContentData = Record<string, any>;
export interface ContentDocument<T extends ContentData = ContentData> { sourcePath: string; data: T; body: string }
export interface HeadingSection { title: string; value: string }
export interface HeadingDocument { title: string; fields: Record<string, string>; sections: HeadingSection[] }
export interface InterfaceCopy {
  title: string;
  documentTitle: string;
  tagline: string;
  description: string;
  navigation: Array<{ label: string; href: string }>;
  footerLinks: Array<{ label: string; href: string }>;
  footerDescription: string;
  ui: Record<string, any>;
}
export interface ContentRepository {
  documents: ContentDocument[];
  site: ContentDocument;
  homepage: ContentDocument;
  interface: ContentDocument[];
  interfaceCopy: InterfaceCopy;
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
  const body = match[2].trim();
  const markdownTitle = body.match(/^# (.+)$/m)?.[1].trim();
  if (!data.title && markdownTitle) data.title = markdownTitle;
  return { sourcePath: sourcePath.replace(/^\//, ''), data, body };
}

function headingKey(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

export function parseHeadingDocument(document: ContentDocument): HeadingDocument {
  const title = document.body.match(/^# (.+)$/m)?.[1].trim();
  if (!title) throw new Error(`Missing level-one heading in ${document.sourcePath}`);

  const sections: HeadingSection[] = [];
  const matches = [...document.body.matchAll(/^## (.+)$/gm)];
  for (const [index, match] of matches.entries()) {
    const start = (match.index ?? 0) + match[0].length;
    const end = matches[index + 1]?.index ?? document.body.length;
    sections.push({ title: match[1].trim(), value: document.body.slice(start, end).trim() });
  }

  return {
    title,
    fields: Object.fromEntries(sections.map((section) => [headingKey(section.title), section.value])),
    sections,
  };
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

  const interfaceDocuments = inFolder('interface');
  const interfaceDocument = (id: string) => {
    const document = interfaceDocuments.find((item) => item.data.id === id);
    if (!document) throw new Error(`Missing content/interface document: ${id}`);
    return parseHeadingDocument(document);
  };
  const interfaceById = Object.fromEntries(interfaceDocuments.map((item) => [item.data.id, item]));
  const siteCopy = interfaceDocument('site');
  const navigationCopy = interfaceDocument('navigation');
  const footerCopy = interfaceDocument('footer');
  const aiCopy = interfaceDocument('ai-involvement');
  const featuredCopy = interfaceDocument('featured');
  const catalogueCopy = interfaceDocument('catalogue');
  const gettingStartedCopy = interfaceDocument('getting-started');
  const reviewCopy = interfaceDocument('review');
  const settingsCopy = interfaceDocument('settings');
  const shortcutsCopy = interfaceDocument('shortcuts');
  const ui = {
    ...siteCopy.fields,
    ...aiCopy.fields,
    ...featuredCopy.fields,
    ...catalogueCopy.fields,
    ...reviewCopy.fields,
    ...settingsCopy.fields,
    ai_involvement_divider: aiCopy.title,
    featured_title: featuredCopy.title,
    catalogue_title: catalogueCopy.title,
    getting_started_intro: gettingStartedCopy.title,
    local_review_title: reviewCopy.title,
    settings: settingsCopy.title,
    keyboard_help: shortcutsCopy.title,
    shortcuts: shortcutsCopy.sections.map(({ title: label, value: keys }) => ({ keys, label })),
  };
  const interfaceCopy: InterfaceCopy = {
    title: siteCopy.title,
    documentTitle: siteCopy.fields.document_title,
    tagline: siteCopy.fields.tagline,
    description: siteCopy.fields.description,
    navigation: navigationCopy.sections.map(({ title: label, value: href }) => ({ label, href })),
    footerLinks: footerCopy.sections.filter((section) => headingKey(section.title) !== 'description').map(({ title: label, value: href }) => ({ label, href })),
    footerDescription: footerCopy.fields.description,
    ui,
  };
  return {
    documents, site, homepage, interface: Object.values(interfaceById), interfaceCopy,
    categories: inFolder('categories'), relationships: inFolder('relationships'), projects, skills,
    catalogue: [...projects, ...skills].sort(byOrder), gettingStarted: inFolder('getting-started'),
    journey: inFolder('journey'), collections: inFolder('collections'),
  };
}

const publicModules = import.meta.glob('/content/**/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
export const contentRepository = buildContentRepository(publicModules);
