# Cross-category featured examples

Status: approved selection; implementation pending.

## Outcome

Replace the desktop-only featured section with a twelve-item showcase. Include three entries from each catalogue category.

## Selection

### Interactive learning objects

- Above the Line
- Corpus for Non-Linguists
- 10 Week AI

### Content distribution

- Instructional Videos Framework
- Building Your Language Muscle
- Deliberate Practice Guide

### Agent skills

- Canvas Course Manager
- PPT2Handout
- Research Translation

### Desktop applications

- WriteFlex Desktop
- Highlight Scout
- TalkWeaver

## Content model

- Set `featured: true` in the twelve owning Markdown files.
- Set `featured: false` for every other catalogue entry.
- Keep category assignments in the owning Markdown files.
- Change 10 Week AI to `interactive-learning-objects`.
- Keep Corpus for Non-Linguists as `interactive-learning-objects`.
- Keep Instructional Videos Framework and Building Your Language Muscle as `content-distribution`.
- Keep WriteFlex Desktop as `desktop-apps`; do not substitute WriteFlex web.
- Keep all section wording in `content/site.md`.

## Rendering

- Rename the dark section to `Featured examples`.
- Render from the combined project-and-skill catalogue, not projects only.
- Use four consecutive category rows in the existing category order.
- Use three equal cards per row.
- Show the category name on each row and each card.
- Use the entry screenshot when present.
- Use the existing workflow graphic when an agent skill has no screenshot.
- Keep each image, workflow graphic and project action linked to the Markdown destination in a new tab.
- Keep the owning Markdown file openable through the local WriteFlex pencil control.

## Responsive layout

- Desktop: three cards per category row.
- Tablet: two cards per row.
- Mobile: one card per row.

## Checks

- Assert exactly twelve featured entries.
- Assert three featured entries for each category.
- Assert the named selection matches the Markdown files.
- Assert skill cards receive workflow graphics when screenshots are absent.
- Verify the section in the in-app browser at desktop and mobile widths.
- Run tests, TypeScript checking and the production build.
