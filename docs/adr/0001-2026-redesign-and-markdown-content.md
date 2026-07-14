# ADR 0001: 2026 redesign and Markdown-first content

Date: 14 July 2026  
Status: Accepted

## Context

The 2025 EduTools site was framed around early vibecoding experiments and hosted through the Google-era workflow. The 2026 redesign needs to reflect a wider practice spanning learning objects, publishing, reusable agent skills and desktop applications, while keeping the earlier site available as evidence of the journey.

## Decision

1. Use four primary categories: interactive learning objects, content distribution, agent skills and desktop applications.
2. Apply three overlapping AI relationships: built by AI, powered or augmented by AI, and delegated to AI.
3. Use the approved “wider field” visual direction and task-oriented framing from the reviewed design rounds.
4. Focus Getting Started guidance on Google AI Studio and Codex. Do not promote Lovable in the current route.
5. Preserve the existing site under `/archive/2025/`.
6. Store every visitor-facing label, description, link, warning and badge in Markdown with YAML frontmatter. Rendering code contains no editorial copy.
7. Compile the Markdown into static output for Cloudflare Pages.
8. Treat reusable patterns as a secondary collection rather than a fifth primary category.
9. Publish 42 selected projects and 15 selected skills in the first edition. Keep nine undecided skills outside the public build.

## Consequences

Editors can change the site without touching React components. The renderer needs schema validation and must fail when content is missing or uses unknown vocabulary. Runtime-AI projects must communicate their continuing cost and hosting responsibilities. Research Translation is selected but cannot expose its source link until the public route is repaired.

## Rejected alternatives

- Retaining the 2025 information architecture would hide the move into skills and desktop applications.
- Making Lovable a current Getting Started route would conflict with the chosen Google AI Studio and Codex story.
- Hardcoding copy inside JSX would make the editorial structure difficult to inspect and maintain.
- Treating reusable patterns as a primary category would mix a browsing lens with the four kinds of output.
