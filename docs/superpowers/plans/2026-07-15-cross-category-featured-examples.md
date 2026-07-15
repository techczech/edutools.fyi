# Cross-category Featured Examples Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the desktop-only featured section with twelve Markdown-selected examples: three from each catalogue category.

**Architecture:** Keep selection and destinations in project/skill Markdown. Build four ordered groups from `contentRepository.catalogue`, render one three-card row per category, and reuse the existing screenshot/workflow renderer. Keep public section wording in `content/site.md`.

**Tech Stack:** React 19, TypeScript, Vite, React Testing Library, Vitest, Markdown/YAML content repository, CSS.

---

### Task 1: Pin the featured selection and destinations in Markdown

**Files:**
- Modify: `tests/content.test.ts`
- Modify: `content/projects/above-the-line.md`
- Modify: `content/projects/corpus-for-non-linguists.md`
- Modify: `content/projects/10weekai.md`
- Modify: `content/projects/instructional-videos-framework.md`
- Modify: `content/projects/building-your-language-muscle.md`
- Modify: `content/projects/deliberate-practice-guide.md`
- Modify: `content/projects/writeflex-desktop.md`
- Modify: `content/projects/highlight-scout.md`
- Modify: `content/projects/talk-weaver.md`
- Modify: `content/projects/slidewell.md`
- Modify: `content/skills/canvas-course-manager.md`
- Modify: `content/skills/ppt2handoutskill.md`
- Modify: `content/skills/research-translation.md`

- [ ] **Step 1: Write the failing selection test**

Add this test to `tests/content.test.ts`:

```ts
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
```

- [ ] **Step 2: Run the test and confirm the current desktop-only selection fails**

Run:

```bash
npm test -- --run tests/content.test.ts
```

Expected: FAIL because only four desktop projects are currently featured.

- [ ] **Step 3: Apply the approved Markdown selection**

Set these exact fields in the owning files. Preserve all other frontmatter and body copy.

```yaml
# content/projects/above-the-line.md
featured: true
featured_order: 1

# content/projects/corpus-for-non-linguists.md
featured: true
featured_order: 2
link_status: public
links:
  - label: "Open project"
    url: "https://github.com/techczech/corpus-for-non-linguists"

# content/projects/10weekai.md
category: "interactive-learning-objects"
featured: true
featured_order: 3

# content/projects/instructional-videos-framework.md
featured: true
featured_order: 1

# content/projects/building-your-language-muscle.md
featured: true
featured_order: 2

# content/projects/deliberate-practice-guide.md
featured: true
featured_order: 3

# content/projects/writeflex-desktop.md
featured: true
featured_order: 1
link_status: public
links:
  - label: "Open project"
    url: "https://github.com/techczech/writeflex-desktop"

# content/projects/highlight-scout.md
featured: true
featured_order: 2

# content/projects/talk-weaver.md
featured: true
featured_order: 3
link_status: public
links:
  - label: "Download TalkWeaver"
    url: "https://github.com/techczech/talk-weaver/releases/latest"

# content/projects/slidewell.md
featured: false

# content/skills/canvas-course-manager.md
featured: true
featured_order: 1

# content/skills/ppt2handoutskill.md
featured: true
featured_order: 2

# content/skills/research-translation.md
featured: true
featured_order: 3
availability: "Public now"
source_url: "https://github.com/techczech/research-translation-skill/tree/main/research-translation"
```

Remove the obsolete publication-warning blockquote from `content/skills/research-translation.md` after adding the working public source URL.

Missing `featured` fields continue to mean false. Existing project files already marked `featured: false` remain unchanged.

- [ ] **Step 4: Update the pending-link assertion**

Change the expected list in `tracks the catalogue entries still waiting for public URLs` to:

```ts
expect(pending).toEqual([
  'codex-lens',
  'keymaster',
  'rodney-brooks-prediction-tracker',
]);
```

- [ ] **Step 5: Run the content tests**

Run:

```bash
npm test -- --run tests/content.test.ts
```

Expected: PASS.

- [ ] **Step 6: Commit the Markdown selection**

```bash
git add tests/content.test.ts content/projects/above-the-line.md content/projects/corpus-for-non-linguists.md content/projects/10weekai.md content/projects/instructional-videos-framework.md content/projects/building-your-language-muscle.md content/projects/deliberate-practice-guide.md content/projects/writeflex-desktop.md content/projects/highlight-scout.md content/projects/talk-weaver.md content/projects/slidewell.md content/skills/canvas-course-manager.md content/skills/ppt2handoutskill.md content/skills/research-translation.md
git commit -m "Feature examples from every catalogue category" -m "Co-Authored-By: Codex <noreply@openai.com>"
```

### Task 2: Render four three-card featured rows

**Files:**
- Modify: `tests/App.test.tsx`
- Modify: `App.tsx:48-57`
- Modify: `App.tsx:59-96`
- Modify: `App.tsx:131`
- Modify: `content/site.md`
- Modify: `styles.css:8`
- Modify: `styles.css:11-12`

- [ ] **Step 1: Replace the desktop-only assertion with a failing cross-category test**

In the frame test, replace:

```ts
expect(document.querySelector('.desktop')).toBeInTheDocument();
```

with:

```ts
expect(screen.getByTestId('featured-showcase')).toBeInTheDocument();
```

Add this test:

```ts
it('renders three featured entries from each category', () => {
  render(<App reviewEnabled={false} />);
  const showcase = screen.getByTestId('featured-showcase');
  const groups = within(showcase).getAllByTestId('featured-category');
  const expectedCategories = contentRepository.categories.map((item) => item.data.title);

  expect(groups).toHaveLength(4);
  expect(groups.map((group) => within(group).getByRole('heading', { level: 3 }).textContent))
    .toEqual(expectedCategories);

  for (const group of groups) {
    expect(within(group).getAllByTestId('featured-card')).toHaveLength(3);
  }

  expect(within(showcase).getAllByTestId('featured-card')).toHaveLength(12);
  expect(within(showcase).getAllByTestId('workflow-graphic')).toHaveLength(3);
});
```

- [ ] **Step 2: Run the test and confirm the old section fails**

Run:

```bash
npm test -- --run tests/App.test.tsx
```

Expected: FAIL because `featured-showcase` and grouped cards do not exist.

- [ ] **Step 3: Add a focused featured-card component**

Add after `CatalogueMedia` in `App.tsx`:

```tsx
function FeaturedCard({ item, categoryTitle, reviewEnabled, ui }: {
  item: ContentDocument;
  categoryTitle: string;
  reviewEnabled: boolean;
  ui: Record<string, any>;
}) {
  const destination = item.data.links?.[0]?.url ?? item.data.source_url;
  const actionLabel = item.data.kind === 'skill' ? ui.view_source : ui.visit_project;

  return <SourceEditable document={item} enabled={reviewEnabled} className="featured-card-source">
    <article className="featured-card" data-testid="featured-card">
      <CatalogueMedia item={item} openLabel={ui.open_preview_label}/>
      <div className="featured-card-copy">
        <p className="cat">{categoryTitle}</p>
        <h4>{item.data.title}</h4>
        <p>{item.body}</p>
        <div className="featured-card-foot">
          {item.data.built_with && <span className="badge">{ui.built_with_label}: {item.data.built_with}</span>}
          <a className="featured-link" href={destination} target="_blank" rel="noreferrer">
            {actionLabel}<ExternalLink/>
          </a>
        </div>
      </div>
    </article>
  </SourceEditable>;
}
```

Task 1 guarantees that every featured entry has a destination, so no disabled card state is needed.

- [ ] **Step 4: Build ordered groups from the combined catalogue**

Add after `categoryMap` and `relationshipMap` in `App`:

```tsx
const featuredByCategory = repo.categories.map((categoryDocument) => ({
  category: categoryDocument,
  items: repo.catalogue
    .filter((item) => item.data.featured && item.data.category === categoryDocument.data.id)
    .sort((a, b) => a.data.featured_order - b.data.featured_order),
}));
```

- [ ] **Step 5: Replace the desktop-only section**

Replace the current `<section className="desktop">…</section>` with:

```tsx
<section className="featured-showcase" data-testid="featured-showcase">
  <div className="wrap">
    <div className="section-head">
      <div><p className="eyebrow">{ui.featured_eyebrow}</p><h2>{ui.featured_title}</h2></div>
      <p>{ui.featured_intro}</p>
    </div>
    <div className="featured-categories">
      {featuredByCategory.map(({ category: categoryDocument, items }, index) => <section key={categoryDocument.data.id} className="featured-category" data-testid="featured-category">
        <div className="featured-category-head"><span>0{index + 1}</span><h3>{categoryDocument.data.title}</h3></div>
        <div className="featured-grid">
          {items.map((item) => <FeaturedCard key={item.data.id} item={item} categoryTitle={categoryDocument.data.title} reviewEnabled={reviewEnabled} ui={ui}/>)}
        </div>
      </section>)}
    </div>
  </div>
</section>
```

- [ ] **Step 6: Put the approved wording in Markdown**

Replace the three `desktop_*` fields in `content/site.md` with:

```yaml
featured_eyebrow: "Featured examples"
featured_title: "Three from each type."
featured_intro: "Twelve examples: three from each of the four types."
```

- [ ] **Step 7: Replace the desktop-only CSS with grouped featured CSS**

Replace `.desktop`, `.apps`, `.app*` and `.desktop-link` rules with:

```css
.featured-showcase{background:#141a16;color:white;padding:95px 0 110px;border-bottom:1px solid var(--rule)}
.featured-showcase .section-head>p{color:#bdc5bf}
.featured-showcase .eyebrow{color:var(--acid)}
.featured-categories{display:grid;gap:68px}
.featured-category-head{display:flex;align-items:baseline;gap:20px;margin-bottom:20px;border-bottom:1px solid #687169;padding-bottom:14px}
.featured-category-head span{font:700 11px var(--mono);color:var(--acid)}
.featured-category-head h3{font-size:30px;line-height:1;letter-spacing:-.04em;margin:0}
.featured-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.featured-card-source{height:100%}
.featured-card{height:100%;border:1px solid #687169;background:#202722;overflow:hidden;display:flex;flex-direction:column}
.featured-card .card-preview{height:220px;min-height:220px;margin:0;border-top:0;border-color:#687169}
.featured-card-copy{padding:24px;display:flex;flex:1;flex-direction:column}
.featured-card-copy .cat{color:var(--acid);margin:0 0 24px}
.featured-card-copy h4{font-size:34px;letter-spacing:-.05em;line-height:.95;margin:0 0 12px}
.featured-card-copy>p{margin:0;color:#bdc5bf;font-size:14px}
.featured-card-foot{display:flex;gap:12px;align-items:end;justify-content:space-between;margin-top:auto;padding-top:28px}
.featured-card-foot .badge{max-width:155px;line-height:1.25}
.featured-link{display:inline-flex;align-items:center;gap:7px;background:var(--acid);color:#15201a;padding:10px 12px;font-weight:800}
.featured-link svg{width:15px}
```

Add these responsive rules:

```css
@media(max-width:980px){.featured-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:620px){.featured-grid{grid-template-columns:1fr}.featured-categories{gap:48px}.featured-card .card-preview{height:210px}.featured-card-foot{align-items:flex-start;flex-direction:column}}
```

Remove the obsolete `.apps` rules from both existing media queries.

- [ ] **Step 8: Run the focused app tests**

Run:

```bash
npm test -- --run tests/App.test.tsx
```

Expected: PASS with twelve cards, four category groups and three skill workflow graphics.

- [ ] **Step 9: Commit the renderer**

```bash
git add App.tsx styles.css content/site.md tests/App.test.tsx
git commit -m "Show featured examples across all catalogue categories" -m "Co-Authored-By: Codex <noreply@openai.com>"
```

### Task 3: Verify content, layout and links

**Files:**
- Verify: `App.tsx`
- Verify: `styles.css`
- Verify: `content/**/*.md`

- [ ] **Step 1: Run all automated checks**

```bash
npm test -- --run
npm run typecheck
npm run build
```

Expected: 3 test files pass; TypeScript exits 0; Vite production build completes.

- [ ] **Step 2: Inspect the desktop layout in the in-app browser**

Open `http://127.0.0.1:3000/`, scroll to `Featured examples`, and capture a screenshot at the current desktop width.

Check:

- four category headings in the repository category order;
- three cards directly below each heading;
- screenshots fill their frames without distortion;
- all three agent skills show the existing workflow graphic;
- card heights align within each row;
- every action is visible and opens a new tab;
- local pencil controls open each owning Markdown file.

- [ ] **Step 3: Inspect tablet and mobile layouts**

Use the in-app browser at approximately 900px and 390px widths.

Check:

- tablet uses two columns without clipped copy;
- mobile uses one column;
- category headings remain attached to their card groups;
- action links and pencil controls remain keyboard reachable;
- no horizontal scrolling.

- [ ] **Step 4: Compare the latest screenshot with the existing EduTools design**

Use `view_image` on the latest featured-section screenshot and the current approved EduTools screenshot. Compare typography, dark-section palette, card borders, spacing, media crops and action styling. Fix any visible mismatch before completion.

- [ ] **Step 5: Confirm the four newly repaired destinations**

Open these links from their featured cards:

```text
https://github.com/techczech/corpus-for-non-linguists
https://github.com/techczech/writeflex-desktop
https://github.com/techczech/talk-weaver/releases/latest
https://github.com/techczech/research-translation-skill/tree/main/research-translation
```

Expected: each opens in a new tab; no featured card lacks a destination.

- [ ] **Step 6: Commit any verification-only fixes**

If verification required changes:

```bash
git add App.tsx styles.css content/site.md content/projects content/skills tests
git commit -m "Polish cross-category featured examples" -m "Co-Authored-By: Codex <noreply@openai.com>"
```

If no changes were required, do not create an empty commit.
