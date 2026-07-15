# Deployment URL audit — 15 July 2026

## Method

- Compared the catalogue Markdown with the current Google Cloud Run service and custom-domain mappings in `ai-model-testing-418010`.
- Used Google Drive only to confirm the corresponding Google AI Studio projects.
- Checked public web addresses directly.
- Checked GitHub releases for desktop applications and plugins. A repository home page is not treated as a download when a release exists.

## Confirmed Cloud Run custom domains used by the catalogue

| Catalogue entry | Public address | Cloud Run service |
|---|---|---|
| Above the Line | https://abovetheline.edutools.fyi/ | `above-the-line-translanguager-s-companion` |
| Academic Productivity | https://academicproductivity.edutools.fyi/ | `academic-productivity-hub` |
| Academic Reading Framework | https://academicreading.edutools.fyi/ | `academic-reading-framework` |
| Building Your Language Muscle | https://buildingyourlanguagemuscle.edutools.fyi/ | `building-your-language-muscle` |
| Climate Target Explorer | https://climatetargetexplorer.edutools.fyi/ | `collective-climate-target-explorer` |
| Corpus for Non-Linguists | https://corpusexplorer.researchity.net/ | `corpus-explorer-learning-object` |
| Course Design Frameworks | https://coursedesignframeworks.edutools.fyi/ | `course-design-frameworks` |
| Deliberate Practice Guide | https://deliberatepractice.dominiklukes.net/ | `guide-to-deliberate-practice` |
| Developing Competence | https://developingcompetence.edutools.fyi/ | `developing-competence` |
| Dyslexia Guide | https://dyslexiaguide.edutools.fyi/ | `dyslexia-awareness-guide` |
| Instructional Videos Framework | https://instructionalvideos.edutools.fyi/ | `instructional-videos-framework` |
| KeyMaster | https://keymaster.edutools.fyi/ | `keymaster-semantic-shortcut-database` |
| Metaphornik | https://metaphornik.edutools.fyi/ | `metaphornik` |
| Model Context Explorer | https://modelcontextexplorer.edutools.fyi/ | `model-context-explorer` |
| Proposition Mapper | https://propositionmapper.edutools.fyi/ | `proposition-mapper` |
| Readability Foundations | https://readability.edutools.fyi/ | `foundations-of-readability` |
| Review Weaver | https://reviewweaver.edutools.fyi/ | `review-weaver` |
| Rodney Brooks Prediction Tracker | https://brookspredictiontracker.semanticmachines.fyi/ | `rodney-brooks-prediction-tracker` |
| Simulation Weaver | https://simulationweaver.edutools.fyi/ | `simulation-weaver` |
| Semantic Table Weaver | https://tabweaver.edutools.fyi/ | `tabweaver` |
| People and Computers: Views from History | https://viewfromhistory.semanticmachines.fyi/ | `people-and-computers-history-explorer` |
| Workshop Weaver | https://workshopweaver.edutools.fyi/ | `workshop-weaver` |

## Cloud Run without a custom domain

LinguaCheck is deployed as the Cloud Run service `contextual-verified-translate`. No custom-domain mapping was found, so the catalogue now uses:

https://contextual-verified-translate-cjmr775lua-uw.a.run.app/

## Corrected catalogue records

- Corpus for Non-Linguists: repository replaced by `https://corpusexplorer.researchity.net/`.
- KeyMaster: added `https://keymaster.edutools.fyi/`. The unrelated `keymaster.app` address is not used.
- LinguaCheck: repository replaced by its current Cloud Run deployment.
- Rodney Brooks Prediction Tracker: added `https://brookspredictiontracker.semanticmachines.fyi/`.
- SlideWell: repository replaced by `https://github.com/techczech/slidewell/releases/latest`.
- VS Code Zotero Bridge: repository replaced by `https://github.com/techczech/zotero-agent-bridge/releases/latest`.
- ZoteroLM: repository replaced by `https://github.com/techczech/zoterolm/releases/latest`.

## Items still needing a public distribution address

### Codex Lens

The registered repository is `OxfordCompetencyCenters/codex-lens`. It has a v1.2.0 release, but the repository and release return 404 to a visitor who is not signed in with access. The site needs a public release or a public download page.

### WriteFlex Desktop

The public source repository exists, but it has no GitHub release. `writeflex.app` is the earlier browser version and should not be presented as the desktop download. The site needs a desktop release or a landing page that clearly provides the desktop application.

### Typewriter Mode for VS Code

The repository is a snapshot of Mikey Lau's Typewriter Auto-scroll extension and has no release of its own. The catalogue currently links to the snapshot repository. Decide whether this should link to the original Marketplace extension or remain a source reference.

## EduTools domain cut-over

The live Google mapping still lists `edutools.fyi` against the old Cloud Run service `vibecoding-edutools-explaining-concepts-with-apps`. The 2026 site is deployed to Cloudflare Pages, but the main domain still needs to be moved from the old mapping to the Pages project.
