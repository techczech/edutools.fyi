# EduTools content contract

Every visitor-facing word on EduTools lives under `content/`. React and TypeScript may select, validate and render this material, but must not introduce labels, descriptions, links, badges, warnings or editorial prose.

Visitor-facing text is Markdown, not YAML. A document's visible title is its `#` heading. Named interface text lives below `##` headings. YAML frontmatter is reserved for machine structure such as IDs, categories, ordering and selection state.

## Collections

- `site.md` — structural site data such as the edition.
- `interface/` — small heading-based documents for site identity, navigation, footer, section introductions, controls, review text, settings and shortcuts.
- `homepage.md` — homepage sequence and framing.
- `categories/` — the four primary catalogue categories.
- `relationships/` — the three overlapping relationships with AI.
- `projects/` — one Markdown record for each selected project.
- `skills/` — one Markdown record for each selected public skill.
- `collections/` — secondary pathways such as reusable patterns.
- `getting-started/` — practical routes into Google AI Studio, Codex and desktop applications.
- `journey/` — historical context and the preserved 2025 site.
- `_editorial/` — selection state and unresolved work; excluded from the public build.

## Record rules

Frontmatter stores structured fields used for filtering and display. The Markdown body supplies visitor-facing text. Empty links are omitted by the renderer; they are never replaced with guessed URLs.

Project records use:

- `id`, `title`, `kind`, `category`, `relationships`, `featured`, `order`
- `built_with` records the original building tool; `links` records public destinations.

Skill records add:

- `educational_job`, `availability`, `related_examples`, `source_url`

The build must fail on an unknown category or relationship, a duplicate ID, missing body copy, or visitor-facing strings embedded in renderer components.
