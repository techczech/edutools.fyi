# ADR 0002: Heading-based interface copy

Date: 15 July 2026
Status: Accepted

## Context

The first Markdown-led build placed navigation, section titles, control labels, settings text and review text in one large YAML block in `content/site.md`. The text was technically outside the renderer, but editing a dense nested YAML document in WriteFlex was difficult and a small quoting change could prevent the site from loading.

## Decision

1. Keep `content/site.md` for structural site data only.
2. Store visitor-facing site text in small documents under `content/interface/`.
3. Use the first `#` heading as a document's visible title.
4. Use `##` headings to name editable text blocks. The text below each heading is the value rendered by the site.
5. Derive navigation and footer links from ordered `##` sections rather than YAML lists.
6. Keep YAML frontmatter only for machine structure such as stable IDs and ordering.
7. Give each major homepage section a pencil control linked to the interface document that owns its text.

## Consequences

Editors can change labels and section text as ordinary Markdown. The renderer derives its interface data from the heading tree, so no second copy is maintained. Heading names form part of the content contract and are covered by tests.
