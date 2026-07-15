import { useEffect, useMemo, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowRight, ExternalLink, HelpCircle, Pencil, Search, Settings, X } from 'lucide-react';
import { contentRepository, type ContentDocument } from './lib/content';
import { openInWriteFlex } from './lib/writeflex';

type AppProps = { reviewEnabled?: boolean };
const repo = contentRepository;

function SourceEditable({ document, enabled, children, className = '' }: { document: ContentDocument; enabled: boolean; children: React.ReactNode; className?: string }) {
  const ui = repo.site.data.ui;
  const [state, setState] = useState<'idle'|'success'|'error'>('idle');
  return <div className={`source-editable ${className}`} data-source={document.sourcePath}>
    {enabled && <button className="edit-source" aria-label={`${ui.edit_in_writeflex}: ${document.data.title}`} title={state === 'success' ? ui.edit_success : state === 'error' ? ui.edit_error : ui.edit_in_writeflex} onClick={async () => {
      try { await openInWriteFlex(document.sourcePath); setState('success'); } catch { setState('error'); }
    }}><Pencil size={15}/></button>}
    {children}
  </div>;
}

function Markdown({ children }: { children: string }) { return <div className="markdown"><ReactMarkdown>{children}</ReactMarkdown></div> }

function homepageSections() {
  return repo.homepage.body.split(/^## /m).filter(Boolean).map((part) => {
    const [title, ...body] = part.trim().split('\n');
    return { title, body: body.join('\n').trim() };
  });
}

export default function App({ reviewEnabled = import.meta.env.DEV }: AppProps) {
  const ui = repo.site.data.ui;
  const sections = homepageSections();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [relationship, setRelationship] = useState('');
  const [sort, setSort] = useState('featured');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const storage = typeof window !== 'undefined' ? window.localStorage : undefined;
  const [theme, setTheme] = useState(() => storage?.getItem('edutools-theme') || 'light');
  const [compact, setCompact] = useState(() => storage?.getItem('edutools-compact') === 'true');
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => { document.documentElement.dataset.theme = theme; storage?.setItem('edutools-theme', theme); }, [theme]);
  useEffect(() => { document.title = repo.site.data.document_title; document.querySelector('meta[name="description"]')?.setAttribute('content', repo.site.data.description); }, []);
  useEffect(() => { storage?.setItem('edutools-compact', String(compact)); }, [compact]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === '/' && !(event.target instanceof HTMLInputElement)) { event.preventDefault(); searchRef.current?.focus(); }
      if (event.key === '?' && !(event.target instanceof HTMLInputElement)) setHelpOpen(true);
      if (event.key === ',' && !(event.target instanceof HTMLInputElement)) setSettingsOpen(true);
      if (event.key === 'Escape') { setHelpOpen(false); setSettingsOpen(false); }
    };
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
  }, []);

  const categoryMap = new Map(repo.categories.map((item) => [item.data.id, item]));
  const relationshipMap = new Map(repo.relationships.map((item) => [item.data.id, item]));
  const catalogue = useMemo(() => repo.catalogue.filter((item) => {
    const haystack = `${item.data.title} ${item.body} ${item.data.built_with ?? ''} ${item.data.educational_job ?? ''}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (!category || item.data.category === category) && (!relationship || item.data.relationships?.includes(relationship));
  }).sort((a,b) => sort === 'title' ? a.data.title.localeCompare(b.data.title) : Number(Boolean(b.data.featured)) - Number(Boolean(a.data.featured)) || (a.data.order ?? 999) - (b.data.order ?? 999)), [query, category, relationship, sort]);

  const journey = repo.journey.find((item) => item.sourcePath.endsWith('/index.md'))!;
  const archive = repo.journey.find((item) => item.data.archive_path)!;
  const gettingStarted = repo.gettingStarted.find((item) => item.sourcePath.endsWith('/index.md'))!;

  return <>
    <a className="skip-link" href="#main">{ui.skip_to_content}</a>
    <div className="topnote"><div className="wrap"><span>{repo.site.data.title} / {ui.field_guide_label}</span><span>{repo.site.data.edition}</span></div></div>
    <header className="site-header"><div className="wrap header-inner">
      <a className="brand" href="/">{repo.site.data.title.toLowerCase()}.fyi</a>
      <nav>{repo.site.data.navigation.map((link: any) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
      <div className="header-tools"><button aria-label={ui.settings} onClick={() => setSettingsOpen(true)}><Settings/></button><button aria-label={ui.keyboard_help} onClick={() => setHelpOpen(true)}><HelpCircle/></button></div>
    </div></header>
    {reviewEnabled && <aside className="review-ribbon"><Pencil size={14}/><span><strong>{ui.local_review_title}</strong> — {ui.local_review_body}</span></aside>}

    <main id="main">
      <SourceEditable document={repo.homepage} enabled={reviewEnabled} className="hero">
        <div className="wrap hero-grid"><div className="hero-copy"><div><p className="eyebrow">{repo.homepage.data.eyebrow}</p><h1>{repo.homepage.data.title}</h1><p className="lead">{repo.homepage.data.intro}</p></div><div className="hero-actions"><a className="button" href={repo.homepage.data.primary_action.href}>{repo.homepage.data.primary_action.label}<ArrowRight/></a><a className="textlink" href={repo.homepage.data.secondary_action.href}>{repo.homepage.data.secondary_action.label}</a></div></div>
          <div className="hero-side" aria-label={ui.hero_categories_label}>{repo.categories.map((item, index) => <SourceEditable key={item.data.id} document={item} enabled={reviewEnabled} className="territory"><article data-testid="category"><small>0{index + 1} / {item.data.territory_label}</small><div><h2>{item.data.title}</h2><p>{item.body}</p><p className="slug">{item.data.id}</p></div></article></SourceEditable>)}</div></div>
      </SourceEditable>

      <section id="possibilities" className="manifesto"><div className="wrap manifesto-grid"><SourceEditable document={repo.homepage} enabled={reviewEnabled} className="manifesto-side"><p className="eyebrow">{ui.relationships_eyebrow}</p><h2>{sections[0]?.title}</h2><Markdown>{sections[0]?.body ?? ''}</Markdown></SourceEditable>
        <div className="ai-modes">{repo.relationships.map((item, index) => <SourceEditable key={item.data.id} document={item} enabled={reviewEnabled} className={`ai-mode ${item.data.id === 'powered-by-ai' ? 'runtime' : ''}`}><article data-testid="relationship"><span className="num">0{index + 1}</span><h3>{item.data.title}</h3><p className="short">{item.data.short_label}</p><Markdown>{item.body}</Markdown>{item.data.warning && <p className="warning">{item.data.warning}</p>}</article></SourceEditable>)}</div></div></section>

      <section id="projects" className="catalogue-section"><div className="wrap"><div className="section-head"><div><p className="eyebrow">{ui.catalogue_eyebrow}</p><h2>{ui.catalogue_title}</h2></div><p>{ui.catalogue_intro}</p></div>
        <div className="catalogue-controls"><label><span>{ui.search_label}</span><div className="input-wrap"><Search/><input ref={searchRef} aria-label={ui.search_label} placeholder={ui.search_placeholder} value={query} onChange={(e)=>setQuery(e.target.value)}/></div></label><label><span>{ui.category_filter_label}</span><select value={category} onChange={(e)=>setCategory(e.target.value)}><option value="">{ui.all_categories}</option>{repo.categories.map(item=><option key={item.data.id} value={item.data.id}>{item.data.title}</option>)}</select></label><label><span>{ui.relationship_filter_label}</span><select value={relationship} onChange={(e)=>setRelationship(e.target.value)}><option value="">{ui.all_relationships}</option>{repo.relationships.map(item=><option key={item.data.id} value={item.data.id}>{item.data.title}</option>)}</select></label><label><span>{ui.sort_label}</span><select value={sort} onChange={(e)=>setSort(e.target.value)}><option value="featured">{ui.sort_featured}</option><option value="title">{ui.sort_title}</option></select></label></div>
        <p className="result-count" aria-live="polite">{catalogue.length} {ui.results_label}</p>
        <div data-testid="catalogue" className={`catalogue ${compact ? 'compact' : ''}`}>{catalogue.length ? catalogue.map((item) => <SourceEditable key={`${item.data.kind}-${item.data.id}`} document={item} enabled={reviewEnabled} className="catalogue-source"><article data-testid="catalogue-card" className="catalogue-card"><div className="project-top"><span className="cat">{categoryMap.get(item.data.category)?.data.title}</span><div className="chips">{item.data.relationships?.map((id:string)=><span key={id}>{relationshipMap.get(id)?.data.title}</span>)}</div></div><div><h3>{item.data.title}</h3><p>{item.body}</p></div><div className="card-foot">{item.data.built_with && <p><strong>{ui.built_with_label}:</strong> {item.data.built_with}</p>}{item.data.source_url && <a href={item.data.source_url}>{ui.view_source}<ExternalLink/></a>}{item.data.links?.[0] && <a href={item.data.links[0].url}>{ui.visit_project}<ExternalLink/></a>}</div></article></SourceEditable>) : <div className="empty"><h3>{ui.no_results_title}</h3><p>{ui.no_results_body}</p></div>}</div>
      </div></section>

      <section className="desktop"><div className="wrap"><div className="section-head"><div><p className="eyebrow">{ui.desktop_eyebrow}</p><h2>{ui.desktop_title}</h2></div><p>{ui.desktop_intro}</p></div><div className="apps">{repo.projects.filter(item=>item.data.featured).map((item)=><SourceEditable key={item.data.id} document={item} enabled={reviewEnabled} className="app"><article><div className="app-visual">{item.data.screenshot && <img src={item.data.screenshot} alt=""/>}</div><div className="app-copy"><div><h3>{item.data.title}</h3><p>{item.body}</p></div><span className="badge">{ui.built_with_label}: {item.data.built_with}</span></div></article></SourceEditable>)}</div></div></section>

      <section id="skills" className="start"><div className="wrap start-grid"><SourceEditable document={gettingStarted} enabled={reviewEnabled} className="start-intro"><p className="eyebrow">{gettingStarted.data.title}</p><h2>{ui.getting_started_intro}</h2><Markdown>{gettingStarted.body}</Markdown></SourceEditable><div className="paths">{repo.gettingStarted.filter(item=>!item.sourcePath.endsWith('/index.md')).map((item,index)=><SourceEditable key={item.sourcePath} document={item} enabled={reviewEnabled} className="path"><article><div className="path-num">0{index+1}</div><div className="path-body"><h3>{item.data.title}</h3><p>{item.data.description}</p><Markdown>{item.body}</Markdown></div></article></SourceEditable>)}</div></div></section>

      <section className="journey"><div className="wrap"><SourceEditable document={journey} enabled={reviewEnabled} className="journey-grid"><div><p className="eyebrow">{journey.data.title}</p><h2>{journey.data.description}</h2><Markdown>{journey.body}</Markdown><a className="archive" href={archive.data.archive_path}>{journey.data.archive_action.label}<ArrowRight/></a></div><a className="archive-year" href={archive.data.archive_path}><span>{ui.archive_label}</span><strong>{archive.data.year}</strong></a></SourceEditable></div></section>
    </main>

    <footer><div className="wrap footer-inner"><div><strong>{repo.site.data.title.toLowerCase()}.fyi</strong><p>{repo.site.body}</p></div><div>{repo.site.data.footer_links.map((link:any)=><a key={link.href} href={link.href}>{link.label}</a>)}</div></div></footer>
    {settingsOpen && <div className="dialog-backdrop" role="presentation"><section role="dialog" aria-modal="true" aria-label={ui.settings} className="dialog"><button className="dialog-close" aria-label={ui.close} onClick={()=>setSettingsOpen(false)}><X/></button><h2>{ui.settings}</h2><fieldset><legend>{ui.theme}</legend>{['light','dark','system'].map(value=><label key={value}><input type="radio" name="theme" value={value} checked={theme===value} onChange={()=>setTheme(value)}/>{ui[value]}</label>)}</fieldset><label><input type="checkbox" checked={compact} onChange={(e)=>setCompact(e.target.checked)}/>{ui.compact_catalogue}</label></section></div>}
    {helpOpen && <div className="dialog-backdrop" role="presentation"><section role="dialog" aria-modal="true" aria-label={ui.keyboard_help} className="dialog"><button className="dialog-close" aria-label={ui.close} onClick={()=>setHelpOpen(false)}><X/></button><h2>{ui.keyboard_help}</h2><dl>{ui.shortcuts.map((item:any)=><div key={item.keys}><dt><kbd>{item.keys}</kbd></dt><dd>{item.label}</dd></div>)}</dl></section></div>}
  </>;
}
