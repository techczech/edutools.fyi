# Full Markdown Site and WriteFlex Review Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Build the complete approved EduTools 2026 website from Markdown, preserve the 2025 site under `/archive/2025/`, and let local reviewers open every source-backed block in WriteFlex with its Markdown file focused.

**Architecture:** Vite imports all public Markdown files eagerly as raw text, parses YAML frontmatter into a validated content repository, and renders React components that contain layout logic but no editorial copy. A development-only Vite middleware accepts repository-relative Markdown paths, confines them to `content/`, and launches `/Applications/WriteFlex.app` through macOS; production builds omit the review controls and expose no local paths. The old application is captured before replacement as a static archive built with `/archive/2025/` as its base.

**Tech Stack:** React 19, TypeScript, Vite 6, YAML, react-markdown, Lucide React, Vitest, Testing Library, CSS, Cloudflare Pages static output.

---

## File map

- `lib/content.ts` — frontmatter parsing, controlled-vocabulary validation and content-repository assembly.
- `lib/writeflex.ts` — browser client for the local WriteFlex review endpoint.
- `vite/writeflex-plugin.ts` — localhost-only, repository-confined file opener.
- `components/SourceEditable.tsx` — hover/focus edit affordance attached to a Markdown source file.
- `components/Markdown.tsx` — safe React rendering of Markdown bodies.
- `components/SiteHeader.tsx`, `Hero.tsx`, `Possibilities.tsx`, `Relationships.tsx`, `Catalogue.tsx`, `DesktopShowcase.tsx`, `GettingStarted.tsx`, `Journey.tsx`, `SiteFooter.tsx` — approved homepage sections.
- `components/SettingsDialog.tsx`, `HelpDialog.tsx` — searchable display settings, setting-change history and keyboard reference.
- `styles.css` — the locked warm-paper editorial system, responsive layout, dark option and reduced-motion treatment.
- `tests/content.test.ts`, `tests/writeflex-plugin.test.ts`, `tests/App.test.tsx` — content, security and rendered-interaction coverage.
- `public/archive/2025/` — read-only static build of the old site.
- `public/screenshots/` — local copies of the four flagship desktop-app images.

### Task 1: Establish tests and capture the historical site

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Create: `tests/setup.ts`
- Create: `public/archive/2025/**`

- [x] Install runtime and test dependencies with the repository’s npm release-age policy:

```bash
npm install yaml react-markdown lucide-react
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

- [x] Add scripts `test`, `test:watch`, and `typecheck` to `package.json` and configure Vitest for jsdom plus `tests/setup.ts`.
- [x] Build the untouched old site with `npx vite build --base=/archive/2025/ --outDir=/tmp/edutools-archive-2025`, verify that the output contains no non-empty Gemini key, then copy the generated static files into `public/archive/2025/`.
- [x] Run `npm test -- --run` and confirm the empty test suite starts successfully.

### Task 2: Parse and validate Markdown content test-first

**Files:**
- Create: `tests/content.test.ts`
- Create: `lib/content.ts`
- Modify: `types.ts`
- Modify: `content/site.md`

- [x] Write tests that call `parseDocument()` and `buildContentRepository()` and assert: frontmatter/body/source path survive parsing; `_editorial` files are excluded; 42 projects and 15 skills load; IDs are unique; only four categories and three relationships are accepted; the UI label dictionary is loaded from `content/site.md`.
- [x] Run `npm test -- --run tests/content.test.ts` and confirm failure because `lib/content.ts` does not exist.
- [x] Implement frontmatter splitting with `YAML.parse`, explicit runtime assertions, stable ordering and `import.meta.glob(['/content/**/*.md', '!/content/_editorial/**'], { eager: true, query: '?raw', import: 'default' })`.
- [x] Add every structural UI label, placeholder, aria label, empty message, settings label and keyboard-help label under `ui:` in `content/site.md`.
- [x] Rerun the focused test and confirm it passes.

### Task 3: Build the confined WriteFlex bridge test-first

**Files:**
- Create: `tests/writeflex-plugin.test.ts`
- Create: `vite/writeflex-plugin.ts`
- Create: `lib/writeflex.ts`
- Modify: `vite.config.ts`

- [x] Write tests for `resolveEditableSource(root, source)` proving that `content/homepage.md` resolves, while traversal, absolute paths, non-Markdown files and paths outside `content/` are rejected.
- [x] Write a middleware test with an injected opener proving `POST /__writeflex/open` opens the resolved file and returns JSON, while a rejected path never calls the opener.
- [x] Run the focused test and confirm it fails because the bridge does not exist.
- [x] Implement the plugin with `execFile('open', ['-a', 'WriteFlex', absolutePath])`, a JSON health route, a 16 KiB request-body limit, content-root confinement and human-readable error JSON.
- [x] Register the plugin in `vite.config.ts`; keep it server-only and expose no absolute paths to browser code.
- [x] Implement `openInWriteFlex(source)` in `lib/writeflex.ts` using the relative source path only.
- [x] Rerun the focused test and confirm it passes.

### Task 4: Build the full Markdown-driven page test-first

**Files:**
- Create: `tests/App.test.tsx`
- Replace: `App.tsx`
- Replace: `index.tsx`
- Replace: `index.html`
- Create: `components/SourceEditable.tsx`
- Create: `components/Markdown.tsx`
- Create: `components/SiteHeader.tsx`
- Create: `components/Hero.tsx`
- Create: `components/Possibilities.tsx`
- Create: `components/Relationships.tsx`
- Create: `components/Catalogue.tsx`
- Create: `components/DesktopShowcase.tsx`
- Create: `components/GettingStarted.tsx`
- Create: `components/Journey.tsx`
- Create: `components/SiteFooter.tsx`

- [x] Write rendered tests asserting that the homepage uses Markdown values, all four categories appear, all three relationships appear, 57 catalogue records are reachable, WriteFlex is both powered and delegated, search narrows records, category filters and title/order sorting work, and edit buttons appear only when review mode is enabled.
- [x] Run the focused test and confirm it fails against the old application.
- [x] Implement the section components with source-path ownership and no embedded editorial strings. Use `react-markdown` for bodies and Lucide icons for controls.
- [x] Implement the catalogue as a searchable, sortable, filterable list. Keep every card keyboard reachable and give every edit control an accessible label from Markdown.
- [x] Rerun the focused test and confirm it passes.

### Task 5: Apply the locked visual system and complete interaction quality

**Files:**
- Create: `styles.css`
- Create: `components/SettingsDialog.tsx`
- Create: `components/HelpDialog.tsx`
- Modify: `App.tsx`
- Modify: `content/site.md`
- Create: `public/screenshots/highlight-scout.png`
- Create: `public/screenshots/slidewell.png`
- Create: `public/screenshots/talk-weaver.png`
- Create: `public/screenshots/writeflex.png`

- [x] Copy local screenshots for the four flagship desktop applications; do not use remote runtime image URLs.
- [x] Implement the approved paper/ink/acid/pink/blue/coral composition, large editorial type, ruled catalogue and responsive one-column mobile layout.
- [x] Add restrained hero entrance, section reveal and catalogue transition motion, with `prefers-reduced-motion` disabling all non-essential motion.
- [x] Add Settings with light identity, dark/system options, searchable controls, local change history and per-entry reset. Add `?` keyboard help covering search, settings, escape, filter navigation and edit controls.
- [x] Ensure every pointer action is a native button/link with Tab/Enter access and visible focus treatment.
- [x] Run tests, `npm run typecheck` and `npm run build`.

### Task 6: Verify the real review workflow and production boundary

**Files:**
- Modify as required only when verification finds a failing behaviour.

- [x] Run the development server and use Playwright to verify desktop and mobile layouts, project search/filter/sort, dialogs, keyboard shortcuts, archive navigation and zero console errors.
- [x] Click the edit control on the hero and confirm WriteFlex opens the repository workspace with `content/homepage.md` focused.
- [x] Click a project card edit control and confirm WriteFlex focuses its individual project Markdown file.
- [x] Build production and inspect `dist/` to confirm it includes the 2025 archive but contains neither `/Users/dominiklukes`, `__writeflex/open`, nor visible edit controls.
- [x] Run the complete verification set: `npm test -- --run`, `npm run typecheck`, `npm run build`, and `git diff --check`.

## Self-review

- Spec coverage: Markdown-only editorial copy, four categories, three AI relationships, 42 projects, 15 skills, flagship desktop apps, Getting Started, 2025 archive, local WriteFlex editing, Settings, keyboard help, responsive review and production safety are each assigned to a task.
- Placeholder scan: the plan contains no deferred implementation placeholder.
- Type consistency: `sourcePath` is the repository-relative Markdown path throughout parsing, rendering and the WriteFlex bridge; `ContentRepository` is the single data boundary used by App and tests.
