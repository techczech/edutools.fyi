
import { EduApp } from '../types';

// Note: Screenshots should be placed in the public/screenshots/ folder.
// The filename should match the 'screenshot' property for each app below.

export const eduapps: EduApp[] = [
    {
        name: 'Above The Line',
        url: 'https://abovetheline.edutools.fyi',
        tagline: 'Transform any text or video transcript into an interactive learning experience.',
        description: 'Above The Line lets users paste a text or timed-transcript and instantly generates line-by-line translations and grammatical breakdowns. It supports multiple interaction modes: a deep-read view for detailed annotations, a slideshow mode that syncs text with video or TTS audio, and a gamified study mode.',
        keyFeatures: [
            'Word-for-word and idiomatic translations with grammatical tags.',
            'Slideshow with high-quality text-to-speech if no video is provided.',
            'Export individual annotations as JSON, PDF or PNG and track study progress.'
        ],
        idealFor: 'language teachers, translators and students who want rich, interactive text analysis.',
        category: 'language-learning',
        madeWith: ['Google AI Studio'],
        tags: ['language', 'translation', 'education', 'interactive', 'text-analysis'],
        screenshot: 'above-the-line.png',
    },
    {
        name: 'Accessibility Statement Feedback',
        url: 'https://accessibilitystatementevaluator.edutools.fyi',
        tagline: 'AI-powered feedback for your site’s accessibility statement.',
        description: 'This proof-of-concept tool analyzes an accessibility statement and provides suggestions based on GOV.UK’s sample template. Users paste their statement into the left pane and click “Analyze Statement” to receive feedback.',
        keyFeatures: [
            'References the GOV.UK sample accessibility template for best-practice language.',
            'Runs on Google Gemini and clearly states that the analysis is informational, not legal advice.'
        ],
        idealFor: 'website owners, developers and organizations seeking quick insights on accessibility-statement quality.',
        category: 'text-analysis',
        madeWith: ['Google AI Studio'],
        tags: ['accessibility', 'a11y', 'feedback', 'developer-tool'],
        screenshot: 'accessibility-statement-feedback.png',
    },
    {
        name: 'Chatbot Logic Explorer',
        url: 'https://chatbotlogicexplorer.edutools.fyi',
        tagline: 'Compare a rule-based chatbot with a large language model.',
        description: 'The site opens two side-by-side chat interfaces – a simple “If/Then Bot” powered by rule-based logic and an “I Get It Bot” powered by a Gemini 2.5 Flash LLM. Users send identical prompts to both bots and observe differences in logic and responses.',
        keyFeatures: [
            'Dual-panel interface to test the same input across two bot architectures.',
            'A clear prompt bar sends messages to both bots simultaneously; a “Start over” button resets the conversation.'
        ],
        idealFor: 'educators teaching conversational AI concepts and anyone curious about the gap between rule-based scripts and LLM reasoning.',
        category: 'concept-explorer',
        madeWith: ['Google AI Studio'],
        tags: ['chatbot', 'logic', 'comparison', 'education', 'ai'],
        screenshot: 'chatbot-logic-explorer.png',
    },
    {
        name: 'Collective Climate Target Explorer',
        url: 'https://climatetargetexplorer.edutools.fyi',
        tagline: 'Visualise what a 1.5 °C lifestyle means for personal carbon footprints.',
        description: 'This tool invites users to create “explorations” to understand how individual lifestyles can align with a 1.5 °C global warming target. It shows the 1.5 °C lifestyle target of 2.5 tonnes CO₂e/year and lets users select a starting point by country to compare their footprint.',
        keyFeatures: [
            'Interactive dashboard to create and manage explorations.',
            'Ability to filter by country and compare explorations.',
            'Visual summary of the lifestyle carbon-footprint target and explanation of its significance.'
        ],
        idealFor: 'sustainability educators, climate-science communicators and individuals interested in personal carbon-budget planning.',
        category: 'concept-explorer',
        madeWith: ['Google AI Studio'],
        tags: ['climate', 'sustainability', 'visualization', 'dashboard'],
        screenshot: 'collective-climate-target-explorer.png',
    },
    {
        name: 'Energy Simulator (E = mc²)',
        url: 'https://energysimulator.edutools.fyi',
        tagline: 'Explore Einstein’s mass–energy equivalence with an interactive slider.',
        description: 'The simulator explains the famous equation and lets users select a small mass (via a slider) to see how much energy would be produced if it were converted entirely to energy. The site explains that mass and energy are two sides of the same coin and highlights why even tiny masses yield huge energy due to the squared speed of light.',
        keyFeatures: [
            'Simple slider to set the mass (in grams) and calculate energy output.',
            'Clear visual explanation of the E = mc² formula and each component (energy, mass, speed of light squared).'
        ],
        idealFor: 'physics teachers, students and anyone curious about relativity.',
        category: 'concept-explorer',
        madeWith: ['Google AI Studio'],
        tags: ['physics', 'science', 'simulation', 'einstein'],
        screenshot: 'energy-simulator.png',
    },
    {
        name: 'Metaphornik',
        url: 'https://metaphornik.edutools.fyi',
        tagline: 'Explore new perspectives through generative metaphors.',
        description: 'Inspired by the MetaphorHacker approach, Metaphornik allows users to analyze existing metaphors or generate new ones. Enter a phrase such as “AI is an intern” and click **Analyze** to see conceptual mappings; alternatively, use the **Generate Metaphors** tab to create fresh metaphors. The tool leverages Gemini 2.5 Pro and draws on cognitive-linguistics research.',
        keyFeatures: [
            'Input box for analyzing or generating metaphors with examples like “Argument is war” and “Time is money.”',
            'Options to save explorations, view principles behind the tool and import/export analyses.',
            'Link to MetaphorHacker methodology and acknowledgement of scholars such as Lakoff and Johnson.'
        ],
        idealFor: 'linguistics students, writers and thinkers exploring metaphorical reasoning.',
        category: 'text-analysis',
        madeWith: ['Google AI Studio'],
        tags: ['linguistics', 'writing', 'metaphor', 'creativity', 'ai'],
        screenshot: 'metaphornik.png',
    },
    {
        name: 'Model Context Explorer',
        url: 'https://modelcontextexplorer.edutools.fyi',
        tagline: 'Look under the hood of large language models by seeing what context they receive.',
        description: 'This tool offers four scenarios—Normal Chat, Data Analysis Chat, Search Chat and Document Library Chat. Users pick a scenario, converse with the model and then click “Show context” to inspect the actual prompt/context given to the model. It demonstrates how conversation history, tool calls (like code interpreters), web search and retrieval-augmented documents shape responses.',
        keyFeatures: [
            '**Normal Chat:** shows how previous turns become context.',
            '**Data Analysis Chat:** routes questions requiring calculations through a code-interpreter tool.',
            '**Search Chat:** uses Google Search for up-to-date information.',
            '**Document Library Chat:** illustrates retrieval-augmented generation (RAG) by adding relevant documents to the prompt.'
        ],
        idealFor: 'AI educators and developers who want to demystify prompt engineering and tool-augmented LLMs.',
        category: 'concept-explorer',
        madeWith: ['Google AI Studio'],
        tags: ['developer-tool', 'llm', 'context', 'education', 'rag', 'prompt-engineering'],
        screenshot: 'model-context-explorer.png',
    },
    {
        name: 'Proposition Mapper',
        url: 'https://propositionmapper.edutools.fyi',
        tagline: 'Turn any text into an interactive concept map.',
        description: 'Users paste a piece of text and specify approximately how many propositions they expect. The tool extracts core propositions and visualizes them as a concept map, revealing the text’s key ideas and connections.',
        keyFeatures: [
            'Accepts arbitrary text; adjustable number of propositions.',
            'Generates an interactive concept map once analysis is run (history panel stores previous maps).',
            'Powered by Gemini for proposition extraction.'
        ],
        idealFor: 'students summarizing reading materials, researchers mapping key concepts and educators creating teaching aids.',
        category: 'text-analysis',
        madeWith: ['Google AI Studio'],
        tags: ['text-analysis', 'visualization', 'logic', 'education', 'concept-map'],
        screenshot: 'proposition-mapper.png',
    },
    {
        name: 'Academic Reading Framework',
        url: 'https://academicreading.edutools.fyi',
        tagline: 'A framework for more productive academic reading.',
        description: 'Interactive guide that helps students and researchers plan and reflect on how they read academic texts. It breaks reading into key characteristics and modules such as “Beyond Decoding”, “Narrative vs Ruminative” and “Cognition Explorer” to show how strategies, tools and environments affect comprehension.',
        keyFeatures: [
            'Explains core characteristics of effective academic reading.',
            'Modules link cognitive models to practical reading strategies.',
            'Cognition Explorer visualizes the reading process to support planning and reflection.'
        ],
        idealFor: 'students and researchers who want to make their academic reading more strategic and productive.',
        category: 'interactive-guide',
        madeWith: ['Google AI Studio'],
        tags: ['reading', 'academic', 'framework', 'guide', 'education'],
        screenshot: 'academic-reading-framework.png',
    },
    {
        name: 'Advent of Czech Nostalgia Foods 2025',
        url: 'https://advent2025.czechly.com',
        tagline: 'An Advent calendar of classic Czech comfort foods.',
        description: 'Interactive Advent calendar that reveals a new nostalgic Czech food on each day in December. Entries include short descriptions and imagery, with options to mark favourites and add the series to a personal calendar or download the full set.',
        keyFeatures: [
            'Daily December calendar entries featuring Czech dishes and snacks.',
            'Option to favourite items and browse previous days.',
            'Links to download the content or add the calendar to a schedule.'
        ],
        idealFor: 'food enthusiasts, Czech learners and anyone curious about Czech cuisine and holiday traditions.',
        category: 'interactive-guide',
        madeWith: ['Google AI Studio'],
        tags: ['food', 'Czech', 'Advent', 'calendar', 'culture'],
        screenshot: 'advent-of-czech-nostalgia-foods-2025.png',
    },
    {
        name: 'AI Use Case Gallery',
        url: 'https://gallery.edutools.fyi',
        tagline: 'Browse AI-powered tools and use cases by role and task.',
        description: 'A searchable gallery of AI tools grouped by tool family and user role. Visitors can filter by provider or tags, open detail cards for each tool and build a personal shortlist of favourites.',
        keyFeatures: [
            'Search and filter tools by provider, role and tags.',
            'Tool cards summarise purpose, key features and limitations.',
            'Favourites mechanism for saving interesting entries (for logged-in users).'
        ],
        idealFor: 'educators, learning designers and professionals mapping the landscape of AI tools.',
        category: 'interactive-guide',
        madeWith: ['Google AI Studio'],
        tags: ['ai', 'directory', 'tools', 'education', 'search'],
        screenshot: 'ai-use-case-gallery.png',
    },
    {
        name: 'Building Your Language Muscle',
        url: 'https://buildingyourlanguagemuscle.edutools.fyi',
        tagline: 'A practical, interactive guide to deliberate practice for language learners.',
        description: 'Structured companion for applying deliberate practice to language learning. It combines short explanations, a self-audit, an AI coach and a goal-tuning tool to help learners design effective practice sprints.',
        keyFeatures: [
            'Explains deliberate practice principles in the context of language learning.',
            'Goal Tuner helps set concrete, measurable skill targets.',
            'AI Coach chat suggests practice activities and feedback loops.'
        ],
        idealFor: 'language learners and teachers who want to move from passive study to targeted training.',
        category: 'language-learning',
        madeWith: ['Google AI Studio'],
        tags: ['language', 'deliberate-practice', 'learning', ' coach', 'ai'],
        screenshot: 'building-your-language-muscle.png',
    },
    {
        name: 'Foundations of Readability',
        url: 'https://readability.edutools.fyi',
        tagline: 'Make documents and slides easier to read and process.',
        description: 'Concise guide to designing readable documents and presentations. It organises practical advice under five principles—Space, Chunks, Guides, Information Structure and Simple Language—and explains how real readers skim and scan.',
        keyFeatures: [
            'Five-principle framework for structuring documents and slides.',
            'Examples of how spacing, chunking and signposting support comprehension.',
            'Guidance on simplifying language for accessibility without dumbing down content.'
        ],
        idealFor: 'writers, educators and presenters improving clarity and accessibility of materials.',
        category: 'interactive-guide',
        madeWith: ['Google AI Studio'],
        tags: ['readability', 'writing', 'design', 'accessibility', 'education'],
        screenshot: 'foundations-of-readability.png',
    },
    {
        name: 'Guide to Deliberate Practice',
        url: 'https://deliberatepractice.dominiklukes.net',
        tagline: 'Understand and apply deliberate practice across any skill.',
        description: 'Self-paced guide that explains why working-memory limits make fluent performance hard and how targeted practice builds robust mental schemas. It focuses on planning practice, seeking feedback and reflecting on performance.',
        keyFeatures: [
            'Explains core concepts such as working-memory limits and mental schemas.',
            'Shows how to design practice tasks that stretch skills without overwhelming.',
            'Emphasises reflection and feedback as key ingredients of long-term expertise.'
        ],
        idealFor: 'learners, coaches and professionals who want an evidence-based approach to skill development.',
        category: 'interactive-guide',
        madeWith: ['Google AI Studio'],
        tags: ['deliberate-practice', 'learning', 'expertise', 'education', 'meta-skill'],
        screenshot: 'guide-to-deliberate-practice.png',
    },
    {
        name: 'Semantic Text Unweaver',
        url: 'https://unweaver.edutools.fyi',
        tagline: 'Analyse large text collections and suggest smart chunking strategies.',
        description: 'Users upload or paste text collections and let the app analyse their structure. It identifies genre and themes, then recommends how to “unweave” the material into manageable, meaningful chunks.',
        keyFeatures: [
            'Accepts pasted text or uploaded files such as TXT, Markdown or CSV.',
            'Uses semantic analysis to infer genre, themes and structural patterns.',
            'Proposes chunking strategies to support summarising, tagging or teaching.'
        ],
        idealFor: 'researchers, writers and educators working with long or messy text collections.',
        category: 'text-analysis',
        madeWith: ['Google AI Studio'],
        tags: ['text-analysis', 'chunking', 'research', 'education', 'ai'],
        screenshot: 'semantic-text-unweaver.png',
    },
    {
        name: "Instructional Video Guide",
        url: "https://instructionalvideos.edutools.fyi",
        tagline: "Evidence-based framework for creating effective instructional videos in higher education.",
        description: "A comprehensive, interactive guide designed for university teachers and instructional designers to bridge the gap between educational research and video production. The app operationalizes Mayer’s Principles of Multimedia Learning into six actionable tasks, answers common production questions, and provides comparative matrices for platforms and tools.",
        keyFeatures: [
            "**Six Tasks Framework:** A structured approach to video creation rooted in cognitive science.",
            "**Interactive Q&A:** Detailed answers to 15 common production questions linked to relevant learning principles.",
            "**Multimedia Principles Library:** In-depth exploration of Mayer’s 12 Principles with definitions and effect sizes.",
            "**Slide Design Simulations:** Interactive comparisons of effective vs. ineffective visual layouts.",
            "**Personalization Tools:** Global search, content bookmarking, and EPUB export for offline reading."
        ],
        idealFor: "university lecturers, educational technologists, and instructional designers seeking research-backed guidance.",
        category: "interactive-guide",
        madeWith: ["Google AI Studio"],
        tags: ["education", "instructional-design", "video-production", "e-learning", "multimedia-learning"],
        screenshot: "instructional-video-guide.png"
    },
    {
        name: 'Simulation Weaver',
        url: 'https://simulationweaver.edutools.fyi',
        tagline: 'Design and practise realistic conversational simulations.',
        description: 'Tool for building, saving and replaying conversational scenarios. Users create simulations for situations such as difficult conversations or interviews and then practise with an AI partner that follows the designed script.',
        keyFeatures: [
            'Create multi-step conversational simulations from scratch.',
            'Store and revisit simulations for repeated practice.',
            'Example scenarios to illustrate how the system can be used.'
        ],
        idealFor: 'trainers, educators and learners practising communication, coaching or interview skills.',
        category: 'creator-tool',
        madeWith: ['Google AI Studio'],
        tags: ['simulation', 'conversation', 'training', 'education', 'ai'],
        screenshot: 'simulation-weaver.png',
    },
    {
        name: "Dyslexia Awareness Guide",
        url: "https://dyslexiaguide.edutools.fyi",
        tagline: "A practical 5-lesson guide to understanding dyslexia and improving reading and writing for everyone.",
        description: "The Dyslexia Awareness Guide is an accessible, single-page educational application designed to teach users about dyslexia through a structured 5-lesson course. It features a specialized 'Dyslexia Friendly Mode' that adjusts fonts and contrast for better readability.",
        keyFeatures: [
            "**Dyslexia Friendly Mode:** Toggleable interface with Open Dyslexic font and optimized contrast.",
            "**Structured Learning Plan:** A 5-day guide designed to be consumed in 15-minute daily segments.",
            "**Smart Note-Taking:** Highlight text on the page to save to a personal notebook and export as PDF or Markdown.",
            "**Resource Browser:** Filter and explore content by Activities, Knowledge, or Reading Resources.",
            "**Bookmark System:** Save specific lessons, sections, or individual blocks for quick access."
        ],
        idealFor: "educators, content creators, and individuals looking to improve their understanding of accessibility and communication.",
        category: "interactive-guide",
        madeWith: ["Google AI Studio"],
        tags: ["accessibility", "education", "react", "dyslexia", "learning-tool"],
        screenshot: "dyslexia-guide.png"
    },
    {
        name: 'TabWeaver',
        url: 'https://tabweaver.edutools.fyi',
        tagline: 'Turn ordinary tables into semantic, interactive data views.',
        description: 'Converts pasted or uploaded tables into richer semantic tables. It can infer categories with an LLM, lets users sort and filter within cells and supports importing or exporting CSV, Markdown and JSON.',
        keyFeatures: [
            'Drag-and-drop CSV, Markdown, JSON or images of tables.',
            'Optional semantic analysis with Gemini 2.5 to infer categories or tags.',
            'Interactive sorting, grouping and basic visualisation inside the table view.'
        ],
        idealFor: 'teachers, analysts and researchers who want more insight from simple tables.',
        category: 'text-analysis',
        madeWith: ['Google AI Studio'],
        tags: ['tables', 'data', 'visualization', 'education', 'ai'],
        screenshot: 'tabweaver.png',
    },
    {
        name: 'VibeAdvent 2025',
        url: 'https://advent.edutools.fyi',
        tagline: 'Twenty-five days of AI tips, tools and festive prompts.',
        description: 'Interactive Advent calendar that reveals a new AI-related tip, tool or prompt each day of December. Users can favourite entries, add the calendar to their own system or download the whole set as a bundle.',
        keyFeatures: [
            'Daily December entries focusing on AI use, tools and prompts.',
            'Favourite and browse features for revisiting useful items.',
            'Options to integrate with a calendar or download the collection.'
        ],
        idealFor: 'AI-curious educators and professionals looking for a lightweight seasonal learning series.',
        category: 'interactive-guide',
        madeWith: ['Google AI Studio'],
        tags: ['ai', 'advent', 'tips', 'education', 'calendar'],
        screenshot: 'vibeadvent-2025.png',
    },
    {
        name: 'Workshop Weaver',
        url: 'https://workshopweaver.edutools.fyi',
        tagline: 'Transform handouts and slides into interactive workshops.',
        description: 'Platform for designing and running interactive workshops. Users can upload or paste their own materials and have an LLM propose an interactive flow, or they can choose from ready-made workshops on generative AI and advanced prompt design.',
        keyFeatures: [
            '“Weave your own workshop” from existing slides or handouts using an LLM.',
            'Library of example workshops on generative AI capabilities and prompt engineering.',
            'Import/export support for sharing workshop flows with collaborators.'
        ],
        idealFor: 'educators, facilitators and trainers who want to build interactive, AI-assisted workshops quickly.',
        category: 'creator-tool',
        madeWith: ['Google AI Studio'],
        tags: ['workshops', 'education', 'generative-ai', 'prompt-engineering', 'ai'],
        screenshot: 'workshop-weaver.png',
    },
    {
        name: 'Readabilitopia',
        url: 'https://readabilitopia.edutools.fyi',
        tagline: 'Make your writing crystal clear.',
        description: 'Readabilitopia is a readability-analysis app that helps writers elevate their content. Paste or upload text and the tool calculates industry-standard readability metrics, highlights problematic sentences (like passive voice, complex structure or wordiness) and offers concrete suggestions to improve clarity and engagement.',
        keyFeatures: [
            'Provides instant Flesch‑Kincaid, Gunning Fog and other readability scores with plain-language explanations.',
            'Highlights complex sentences, passive constructions and excessive wordiness that reduce clarity.',
            'Generates actionable improvement tips to enhance readability and audience engagement.'
        ],
        idealFor: 'writers, bloggers, educators and anyone seeking to produce clear, reader-friendly content.',
        category: 'text-analysis',
        madeWith: ['Lovable'],
        tags: ['readability', 'writing', 'analysis', 'clarity', 'engagement'],
        screenshot: 'readabilitopia.png',
    },
    {
        name: 'Interactive Conference Schedule',
        url: 'https://interactive-conference-schedule-279180372926.us-west1.run.app',
        tagline: 'Plan your conference experience with an AI‑assisted interactive schedule.',
        description: 'This web app provides an interactive agenda for the Cambridge Generative AI in Education Conference (October 27–29, 2025). Attendees can search and filter sessions by day or time, view abstracts and speaker details, save items to a personal “My Schedule,” and even ask an embedded Gemini assistant for tailored recommendations or answers about the program.',
        keyFeatures: [
            'Search bar to find sessions by keyword across the entire programme.',
            'Filter buttons to narrow sessions by day (Monday/Tuesday/Wednesday) and by time of day (morning/afternoon).',
            '“My Schedule” mode for building a personalised agenda from selected sessions.',
            'Ask Gemini feature that leverages a generative‑AI chatbot to suggest sessions or answer schedule‑related questions.',
            'Session cards with times, titles, presenters and an option to read abstracts.'
        ],
        idealFor: 'conference attendees and organisers who need an easy way to browse, customise and optimise their event schedules.',
        category: 'interactive-guide',
        madeWith: ['Google AI Studio'],
        tags: ['conference', 'schedule', 'education', 'AI', 'interactive'],
        screenshot: 'interactive-conference-schedule.png',
    },
    {
        name: "Grammatical Annotation Generator",
        url: "https://gemini.google.com/share/e1b866e30ffd",
        tagline: "Early prototype of Above the Line. ",
        description: "A tool built in Gemini's Canvas that lets users paste or load a sample text and produce a full grammatical annotation using Google Gemini. The interface provides fields for entering text, selecting original and target languages, and generating structured linguistic analysis. It supports language autodetection, sample inputs, and a one-click workflow for producing grammatical annotations.",
        keyFeatures: [
            "Text input box for pasting any content to analyse.",
            "Sample text dropdown with predefined examples.",
            "Language selection options including autodetection for the source text.",
            "Target language selector to guide the type of grammatical output.",
            "Clear button to reset all fields instantly.",
            "Generate Annotation button that produces a Gemini-powered grammatical analysis."
        ],
        idealFor: "writers, language learners, teachers, and linguists who want quick, AI-generated grammatical breakdowns of any text.",
        category: "language-learning",
        madeWith: ["Gemini Canvas"],
        tags: ["grammar", "language", "analysis", "annotation", "Gemini"],
        screenshot: "Gemini-Grammatical-Annotation-Generator.png"
    },
    {
        name: "AI Engineer World's Fair 2025 Summary",
        url: "https://gemini.google.com/share/63203b4bba8d",
        tagline: "Gemini-generated conference summary based on a transcript of a video recording of a full 8 hour day.",
        description: "This Gemini Canvas app presents an interactive overview of the keynotes and talks from the AI Engineer World’s Fair 2025. It synthesises content from the Day 1 and Day 2 livestreams, highlights major themes, and provides AI-generated insights into groundbreaking ideas presented at the event.",
        keyFeatures: [
            "Headline summary of the conference’s major ideas and innovations.",
            "Links to Day 1 and Day 2 livestream-based summaries.",
            "Gemini-powered generation of key takeaways and follow-up questions for any talk.",
            "Conference themes visualised through an interactive chart.",
            "High-level overview of topic clusters across the event."
        ],
        idealFor: "AI engineers, researchers, and conference attendees who want a structured and interactive recap of the event’s themes and talks.",
        category: "interactive-guide",
        madeWith: ["Gemini Canvas"],
        tags: ["AI", "engineering", "conference", "summary", "interactive"],
        screenshot: "ai-engineer-worlds-fair-2025.png"
    },
    {
        name: "3 Ways to Get Better at AI",
        url: "https://gemini.google.com/share/5ed31588da0d",
        tagline: "A guide based on a YouTube video transcript of The AI Daily Brief 3 Ways To Get Better At AI Right Now.",
        description: "This Gemini Canvas app functions as an interactive content browser for a hands-on guide to modern AI capabilities. It reframes AI as a strategic partner, shows how to prototype ideas through natural language, and introduces agentic workflows as the next phase of AI-driven work.",
        keyFeatures: [
            "Tabbed navigation across multiple sections including Strategic Collaborator, Creative Prototyping, and Agentic Workflows.",
            "High-level introductory overview explaining the learning gap in modern AI usage.",
            "Actionable activities summarised at a glance with clear, practical outcomes.",
            "Contextual references such as source links and supporting material.",
            "Gemini Canvas-generated structure for browsing, exploring, and understanding the content."
        ],
        idealFor: "learners, professionals, and teams who want practical methods to deepen their AI capability through hands-on experimentation.",
        category: "interactive-guide",
        madeWith: ["Gemini Canvas"],
        tags: ["AI skills", "learning", "workflows", "prototyping", "strategy"],
        screenshot: "3-ways-to-get-better-at-ai.png"
    },
    {
        name: "Conference Session Browser",
        url: "https://gemini.google.com/share/299d5d540564",
        tagline: "Interactive conference schedule made in Gemini Canvas made from a PDF to make attendance more convenient.",
        description: "This Gemini Canvas app provides a clean, scrollable view of conference sessions to complement the main schedule. Each session card displays the time, session type, title, speakers and location, with quick-access buttons to view the abstract or generate AI-powered key points.",
        keyFeatures: [
            "Scrollable list of all sessions happening in the same time slot.",
            "Session cards showing time, title, presenters, session type and room.",
            "Button to open the session abstract inside the app.",
            "Gemini-powered ‘Key Points’ button that produces an instant summary for each session.",
            "Star icon for marking or shortlisting preferred sessions.",
            "Designed as a lightweight companion tool to the main conference schedule."
        ],
        idealFor: "conference attendees who want a fast way to preview abstracts and summaries and choose between simultaneous sessions.",
        category: "interactive-guide",
        madeWith: ["Gemini Canvas"],
        tags: ["conference", "sessions", "AI", "education", "browser"],
        screenshot: "conference-session-browser.png"
    },
    {
        name: "WriteTrack",
        url: "https://writetrack.techczech.net/",
        tagline: "Track your writing and research sessions with a calendar‑based productivity dashboard.",
        description: "WriteTrack is a productivity app for writers, editors and researchers. It organises your work into activities like writing, editing, planning/outlining, process review and reading/research. The calendar‑driven dashboard shows daily entries and weekly summaries of sessions, words and time spent.",
        keyFeatures: [
            "Six activity types: Writing, Editing, Planning/Outlining, Process Review, Reading/Research and Tool Setup.",
            "Calendar view to start sessions and view daily entries.",
            "Weekly summary displaying total words, time spent and sessions.",
            "Planning Assistant and data‑management tools for goal setting and exporting data.",
            "Option to enable cloud sync for cross‑device tracking."
        ],
        idealFor: "writers, editors, students and researchers who want to monitor and improve their writing and study routines.",
        category: "creator-tool",
        madeWith: ["Google AI Studio"],
        tags: ["writing", "productivity", "tracking", "planning", "research"],
        screenshot: "writetrack.png"
    },
    {
        name: "Eras of AI History",
        url: "https://historyof.semanticmachines.fyi/",
        tagline: "An interactive timeline exploring the evolution of artificial intelligence.",
        description: "This interactive timeline guides visitors through key eras in the history of AI, from pre‑1930s philosophical roots to present‑day advances. Each era summarises influential thinkers, technologies and societal events.",
        keyFeatures: [
            "Buttons for jumping to specific eras (e.g., < 1930s, 1936–73, 1970s–90s, 1990s–00s, 2012‑17, 2017‑22, 2023+).",
            "Concise narratives for each period, highlighting seminal publications and historical context.",
            "Lists of key figures and concepts (e.g., Ada Lovelace, Turing, perceptrons) within each era.",
            "Responsive design with dark/light themes for comfortable reading.",
            "Written and curated by Dominik Lukeš."
        ],
        idealFor: "students, educators and AI enthusiasts who want a chronological overview of the field’s development.",
        category: "concept-explorer",
        madeWith: ["Google AI Studio"],
        tags: ["AI", "history", "timeline", "education", "interactive"],
        screenshot: "eras-of-ai-history.png"
    },
    {
        name: "KeyMaster",
        url: "https://keymaster.app/",
        tagline: "Master keyboard shortcuts with interactive simulators and semantic learning.",
        description: "KeyMaster is a modern, semantic database and training ground for keyboard shortcuts. Unlike static cheat sheets, it offers an interactive learning experience with a built-in text editor simulator, flashcard practice modes, and skill assessments.",
        keyFeatures: [
            "**Smart Database:** Filterable library of shortcuts for Windows and macOS with semantic categorization.",
            "**Text Editor Simulator:** A risk-free environment to practice navigation, indentation, and text manipulation shortcuts.",
            "**Skill Assessment:** Timed challenges that benchmark your speed and generate personalized learning recommendations.",
            "**Interactive Flashcards:** Practice mode with active recall and mastery tracking.",
            "**Custom Learning Plans:** Bookmark shortcuts to create personalized decks and study schedules."
        ],
        idealFor: "professionals, developers, and students who want to eliminate mouse usage and increase computer efficiency.",
        category: "interactive-guide",
        madeWith: ["Google AI Studio"],
        tags: ["productivity", "keyboard-shortcuts", "learning", "simulator", "tools"],
        screenshot: "keymaster.png"
    },
    {
        name: "Vibecoding Edutools",
        url: "https://edutools.fyi",
        tagline: "A guide to explaining difficult concepts with AI‑powered apps.",
        description: "Vibecoding Edutools is a portal that introduces the vibecoding philosophy—using AI to create interactive apps that explain complex ideas. The site offers an overview of vibecoding, a list of vibecoding tools, and an ‘Eduapps Gallery’.",
        keyFeatures: [
            "Homepage explaining vibecoding and its applications.",
            "‘Explore Vibecoding’ section detailing the methodology.",
            "‘Vibecoding Tools’ list with descriptions of available authoring tools.",
            "Eduapps Gallery with search, filter and save functions.",
            "Ask Gemini chatbot for Q&A about vibecoding and the gallery."
        ],
        idealFor: "educators, learning designers and developers looking for AI‑powered tools to build engaging learning experiences.",
        category: "interactive-guide",
        madeWith: ["Google AI Studio"],
        tags: ["education", "AI", "vibecoding", "directory", "tools"],
        screenshot: "vibecoding-edutools.png"
    },
    {
        name: "Strč prst skrz krk",
        url: "https://strcprstskrzkrk.com/",
        tagline: "Master Czech tongue twisters through practice and challenges.",
        description: "This playful language‑learning app invites users to explore the ‘weird and wonderful’ world of Czech tongue twisters. Learners can record their attempts, track progress and tackle a series of challenges.",
        keyFeatures: [
            "Interactive practice mode with audio recording for each tongue twister.",
            "Difficulty‑rated challenges (easy, medium, hard) and a progress tracker.",
            "Cards showcasing popular Czech tongue twisters with translations and cultural notes.",
            "Option to mark favourites and revisit previous attempts.",
            "Designed and conceived by Dominik Lukeš."
        ],
        idealFor: "language learners, linguists and anyone curious about Czech phonetics and pronunciation challenges.",
        category: "language-learning",
        madeWith: ["Google AI Studio"],
        tags: ["Czech", "tongue‑twister", "pronunciation", "language-learning", "fun"],
        screenshot: "strc-prst-skrz-krk.png"
    },
    {
        name: "Let’s Speak Czechly",
        url: "https://czechly.com/",
        tagline: "Resources for learning Czech language, culture and functional phrases.",
        description: "Let’s Speak Czechly is a resource hub for learners of Czech as a foreign language. The site offers pillars: an open grammar via the Czech Navigator companion, cultural ‘learn files’, and a Functional Czech database.",
        keyFeatures: [
            "Grammar section linking to Czech Navigator’s open grammar reference.",
            "Culture section with curated resources on Czech music, film and history.",
            "Functional Czech database with everyday phrases (e.g., asking for directions).",
            "Simple navigation bar and search for quick access.",
            "Friendly design with Czech greetings and motivational messages."
        ],
        idealFor: "beginners and intermediate learners of Czech seeking grammar explanations, cultural context and practical phrases.",
        category: "language-learning",
        madeWith: ["Google AI Studio"],
        tags: ["Czech", "language-learning", "grammar", "culture", "phrases"],
        screenshot: "lets-speak-czechly.png"
    },
    {
        name: "Semantic Machines FYI",
        url: "https://semanticmachines.fyi/",
        tagline: "Exploring the possibilities of language models in practice.",
        description: "Semantic Machines FYI is an educational platform that helps users develop mental models of how large language models (LLMs) work and how to use them effectively.",
        keyFeatures: [
            "Overview of the goals: developing mental models and cultivating tool fluency.",
            "Activities section with hands‑on exercises demonstrating LLM capabilities.",
            "Workshops (including Gemini 3 Pro workshops) for deeper exploration.",
            "Explainers that break down key concepts and technical foundations.",
            "Clean navigation with quick links to start a workshop or read explainers."
        ],
        idealFor: "educators, developers and curious learners wanting to demystify LLMs and experiment with AI tools.",
        category: "concept-explorer",
        madeWith: ["Google AI Studio"],
        tags: ["AI", "LLM", "education", "workshops", "explainer"],
        screenshot: "semantic-machines-fyi.png"
    },
    {
        name: "EvalPrompts",
        url: "https://evals.semanticmachines.fyi/",
        tagline: "Prompts to evaluate frontier capabilities of large language models.",
        description: "EvalPrompts is a personal model‑exploration suite curated by Dominik Lukeš. It collects prompts designed to probe the limits of new language models, providing a starting point for evaluating performance on complex tasks.",
        keyFeatures: [
            "Homepage explaining the purpose and recency of the evaluation suite.",
            "‘Browse Evals’ button leading to a catalogue of evaluation prompts grouped by category.",
            "Search function to locate specific prompts quickly.",
            "GitHub link for forking or suggesting updates under a CC BY licence.",
            "Notes on which prompts are useful only for smaller models versus frontier models."
        ],
        idealFor: "AI researchers, engineers and enthusiasts who want ready‑made prompts for benchmarking language models.",
        category: "creator-tool",
        madeWith: ["Google AI Studio"],
        tags: ["LLM", "evaluation", "prompts", "benchmarking", "AI"],
        screenshot: "eval-prompts.png"
    },
    {
        name: "Academic Productivity",
        url: "https://academicproductivity.edutools.fyi/",
        tagline: "Tools and strategies to boost academic productivity and inclusivity.",
        description: "This site serves as a comprehensive guide to improving productivity in academic work. It covers strategies for decreasing cognitive load and examines how neurodiversity creates blockers.",
        keyFeatures: [
            "Strategies section outlining four ways to reduce cognitive load: Listen, Enlarge, Outline and Dictate.",
            "Blockers & Neurodiversity section explaining how cognition and environment interact to hinder productivity.",
            "Primer on the assistive‑technology landscape, advocating for universal design.",
            "Tools & Hardware database featuring apps (e.g., Zotero, Obsidian) matched to specific needs.",
            "Navigation bar linking to home, strategies, blockers, and tools database."
        ],
        idealFor: "students, researchers and neurodiverse individuals seeking practical strategies and tools to enhance productivity.",
        category: "interactive-guide",
        madeWith: ["Google AI Studio"],
        tags: ["productivity", "academic", "neurodiversity", "assistive-tech", "tools"],
        screenshot: "academic-productivity.png"
    },
    {
        name: "Developing Competence",
        url: "https://developingcompetence.edutools.fyi/",
        tagline: "From mental maps to fluent performance: design and assess competencies with AI.",
        description: "Developing Competence is a tool for building, understanding and applying competency frameworks. Users can explore theoretical foundations, generate custom frameworks via AI, and self‑assess skill levels.",
        keyFeatures: [
            "Understanding Competence module explaining framework dimensions and levels.",
            "Framework Builder that uses AI to create custom competency frameworks.",
            "Self‑Assessment tool for evaluating current proficiency across skills.",
            "Development Plan generator for creating personalised strategies.",
            "Top navigation to theory, framework builder, assessment, and dashboard."
        ],
        idealFor: "educators, trainers and professionals designing competency frameworks and planning skill development.",
        category: "interactive-guide",
        madeWith: ["Google AI Studio"],
        tags: ["competence", "skills", "assessment", "professional-development", "AI"],
        screenshot: "developing-competence.png"
    },
    {
        name: "People & Computers: Views from History",
        url: "https://viewfromhistory.semanticmachines.fyi/",
        tagline: "Exploring historical views of computing through AI‑curated archives.",
        description: "This ad‑hoc research project uses large language models to examine how perceptions of computers have evolved. The site organises research data into an interactive timeline and curated video archives.",
        keyFeatures: [
            "Interactive timeline tracing computing sentiments from 1946 to 1983.",
            "Video archive featuring historical videos with descriptions and YouTube links.",
            "Key Quotes section highlighting significant statements about human replacement.",
            "Explanation of the research methods and capabilities of frontier LLMs.",
            "Clean layout with cards that link to each archive section."
        ],
        idealFor: "historians, educators and AI enthusiasts interested in the evolution of human–computer narratives.",
        category: "concept-explorer",
        madeWith: ["Google AI Studio"],
        tags: ["history", "computers", "AI", "archive", "timeline"],
        screenshot: "views-from-history.png"
    },
    {
        name: "LearnWeaver",
        url: "https://learnweaver.app/",
        tagline: "Create, organise and share beautiful presentations and learning content.",
        description: "LearnWeaver is a learning‑platform–cum–presentation builder. It enables users to create engaging slideshows with hierarchical sections, custom bullet points and rich media support.",
        keyFeatures: [
            "Create Presentations: build slide decks with focus mode and multimedia.",
            "Personal Dashboard: bookmark slides, track viewing history and organise content.",
            "Rich media support for images, videos and interactive elements.",
            "Free account creation with cloud‑based storage and sharing.",
            "Designed for educators and learners to build structured learning journeys."
        ],
        idealFor: "teachers, trainers and learners who want to craft polished presentations and manage their learning resources.",
        category: "creator-tool",
        madeWith: ["Lovable"],
        tags: ["presentations", "learning", "authoring", "dashboard", "education"],
        screenshot: "learnweaver.png"
    },
    {
        name: "Artifacts Gallery",
        url: "https://techczech.github.io/artifactsgallery/",
        tagline: "Organise, import and export your AI‑generated artifacts.",
        description: "Artifacts Gallery is a lightweight management tool for AI artifacts. It lets users create new artifacts, import or export collections and organise them with filters.",
        keyFeatures: [
            "Create New Artifact button to add content to the gallery.",
            "Import and Export All functions for bulk management.",
            "Filters for searching artifacts and narrowing by type, folder or tag.",
            "Sort options (e.g., by last updated) to organise lists.",
            "About page explaining the purpose of the gallery."
        ],
        idealFor: "AI content creators and educators needing a simple way to organise and share their Claude/Gemini artifacts.",
        category: "creator-tool",
        madeWith: ["Claude Desktop App (+MCP)"],
        tags: ["artifacts", "organisation", "AI", "management", "gallery"],
        screenshot: "artifacts-gallery.png"
    },
    {
        name: 'ZoteroLM',
        url: 'https://github.com/techczech/zoterolm',
        tagline: 'LLM-powered summarization and Q&A for your Zotero library.',
        description: 'A Zotero 7/8 plugin that enables LLM-powered summarization of your library items using Google Gemini or OpenAI.',
        keyFeatures: [
            '**PDF Summarization:** Extract text from PDF attachments and generate summaries.',
            '**Multiple Providers:** Support for Google Gemini and OpenAI models.',
            '**Customizable Prompts:** Create and manage prompt templates.',
            '**Collection Summaries:** Generate meta-summaries from existing item summaries.',
            '**Question Answering:** Ask questions about your documents.'
        ],
        idealFor: 'researchers and academics who want to integrate AI summarization directly into their Zotero workflow.',
        category: 'text-analysis',
        madeWith: ['Cursor'],
        tags: ['research', 'zotero', 'summarization', 'plugin', 'llm', 'open-source'],
        screenshot: 'zoterolm.png'
    },
    {
        name: 'PPT to Learning',
        url: 'https://github.com/techczech/ppt-to-learning',
        tagline: 'Transform PowerPoint presentations into interactive, semantic web-based learning content.',
        description: 'PPT to Learning extracts high-fidelity content from PowerPoint files and uses AI to transform it into structured, semantic web applications. It maps raw slide content into a hierarchical structure of sections and blocks, enhancing the material with definitions, comparisons, and sequences powered by Google Gemini.',
        keyFeatures: [
            '**High-Fidelity Extraction:** Captures text, images, tables, SmartArt, and embedded videos.',
            '**AI-Powered Enhancement:** Uses Google Gemini for semantic conversion and visual correction of extraction errors.',
            '**Interactive Web Viewer:** Modern React-based viewer with slide navigation, search, and grid views.',
            '**Library & Collections:** Organize presentations into projects with nested folders and tags.',
            '**YouTube Integration:** Automatically detects and embeds videos from presentation links.'
        ],
        idealFor: 'educators and instructional designers who want to modernize their slide decks into searchable, interactive learning resources.',
        category: 'creator-tool',
        madeWith: ['Claude Code'],
        tags: ['powerpoint', 'conversion', 'semantic', 'education', 'ai', 'open-source'],
        screenshot: 'ppt-to-learning.png'
    },
    {
        name: 'Model Vibe Check',
        url: 'https://github.com/techczech/model-vibe-check',
        tagline: 'Qualitative LLM evaluation tool to compare model outputs side-by-side.',
        description: 'Model Vibe Check is a tool for qualitative LLM evaluation. Instead of relying solely on numerical scores, it empowers users to read actual model responses side-by-side. It supports browsing by prompt, model, or category and treats evaluation runs as archives for detailed comparative study.',
        keyFeatures: [
            '**Multi-provider support:** Works with OpenAI, Google Gemini, Ollama (local), and OpenRouter.',
            '**Side-by-side comparison:** Compare outputs in parallel columns across models and iterations.',
            '**Batch execution:** Run multiple prompts against various models simultaneously.',
            '**Prompt library:** Organize prompts by category and include attachments like images or text files.',
            '**Data Export:** Download evaluation results as CSV or JSON for external analysis.'
        ],
        idealFor: 'researchers, developers and educators who need to compare LLM performance qualitatively across different models.',
        category: 'text-analysis',
        madeWith: ['Claude Desktop (MCP filesystem)'],
        tags: ['llm-evaluation', 'benchmarking', 'ai', 'comparison', 'research'],
        screenshot: 'model-vibe-check.png'
    },
    {
        name: 'TimeFlex',
        url: 'https://timeflex.app/',
        tagline: 'Flexible Interval Training: Plan it, time it, log it. Or just time it.',
        description: 'TimeFlex is a comprehensive training companion designed for high-intensity workouts and deliberate practice. It combines a precision interval timer with workout building and cycle planning features. Users can track their history, visualize progress, and manage their data via cloud sync or JSON export.',
        keyFeatures: [
            '**Precision Timer:** EMOM countdown with configurable work/rest intervals and mid-interval alerts.',
            '**Smart Sound Alerts:** Customizable sounds for transitions and checkpoints to keep you focused.',
            '**Workout Builder:** Create structured sessions with exercises, reps, and linked timer presets.',
            '**Cycle Planning:** Plan multi-week training programs and schedule workouts across days.',
            '**Visual Progress:** Real-time progress rings with color-coded phases for work and rest.',
            '**PWA Ready:** Installable on any device for reliable offline use without an app store.'
        ],
        idealFor: 'athletes, fitness enthusiasts, and professionals practicing skills that require structured timing and progression.',
        category: 'creator-tool',
        madeWith: ['Lovable'],
        tags: ['fitness', 'timer', 'productivity', 'training', 'pwa', 'health'],
        screenshot: 'timeflex.png'
    },
    {
        name: 'WriteFlex',
        url: 'https://writeflex.app/',
        tagline: 'AI-Powered Writing Coach: Track practice, understand process, and build strength.',
        description: 'WriteFlex is an AI-powered writing log and coach that serves as a more powerful evolution of WriteTrack. It helps writers track their practice, understand their unique creative process, and build consistent habits through adaptive "boot-ups" and personalized coaching insights.',
        keyFeatures: [
            '**Multi-Modal Tracking:** Log drafting, editing, planning, and research to visualize creative patterns and optimize work.',
            '**Smart AI Coaching:** Personalized insights and suggestions that adapt to your specific goals and writing style.',
            '**Zero-Friction Design:** Focus on writing with one-tap timers, AI-generated titles, and an interface with no required fields.',
            '**Adaptive Habit Building:** Sustainable practice through structured plans and flexible "boot-up" sequences.',
            '**Mobile-First Access:** Designed for writers to log progress and receive guidance anywhere, anytime.'
        ],
        idealFor: 'writers, academics, and creative professionals seeking a sustainable, AI-assisted approach to building consistent writing strength.',
        category: 'creator-tool',
        madeWith: ['Lovable'],
        tags: ['writing', 'productivity', 'coaching', 'habits', 'ai', 'tracking'],
        screenshot: 'writeflex.png'
    },
    {
        name: 'DominikLukes.net',
        url: 'https://dominiklukes.net',
        tagline: 'A modern personal portfolio and research hub built with agentic builders.',
        description: 'DominikLukes.net is a high-quality personal academic and professional portfolio. It serves as an example of using agentic builders to create a full-featured web presence that includes searchable archives, keyboard-friendly navigation, and structured galleries for writing and research projects.',
        keyFeatures: [
            '**Semantic Search:** Instant, powerful search across the entire site including blog posts and project details.',
            '**Keyboard Navigation:** Fully optimized for power users with comprehensive keyboard shortcuts and focus states.',
            '**Project Gallery:** Visually rich and filterable list of current and past professional projects.',
            '**Writing Archive:** Organized access to various publications, articles, and scholarly contributions.',
            '**Responsive Design:** Seamless experience across all device sizes, prioritizing readable academic content.'
        ],
        idealFor: 'academics, researchers, and professionals looking for inspiration on building a robust personal platform with AI tools.',
        category: 'interactive-guide',
        madeWith: ['Lovable'],
        tags: ['portfolio', 'academic', 'research', 'personal-site', 'accessibility', 'search'],
        screenshot: 'dominiklukes-net.png'
    }
];
