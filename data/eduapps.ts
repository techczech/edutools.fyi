import { EduApp } from '../types';

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
        category: 'llm-powered-app',
        madeWith: ['Google AI Studio'],
        tags: ['language', 'translation', 'education', 'interactive', 'text-analysis']
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
        category: 'llm-powered-app',
        madeWith: ['Google AI Studio'],
        tags: ['accessibility', 'a11y', 'feedback', 'developer-tool']
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
        category: 'llm-powered-app',
        madeWith: ['Google AI Studio'],
        tags: ['chatbot', 'logic', 'comparison', 'education', 'ai']
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
        category: 'simulation',
        madeWith: ['Google AI Studio'],
        tags: ['climate', 'sustainability', 'visualization', 'dashboard']
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
        category: 'simulation',
        madeWith: ['Google AI Studio'],
        tags: ['physics', 'science', 'simulation', 'einstein']
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
        category: 'llm-powered-app',
        madeWith: ['Google AI Studio'],
        tags: ['linguistics', 'writing', 'metaphor', 'creativity', 'ai']
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
        category: 'llm-powered-app',
        madeWith: ['Google AI Studio'],
        tags: ['developer-tool', 'llm', 'context', 'education', 'rag', 'prompt-engineering']
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
        category: 'llm-powered-app',
        madeWith: ['Google AI Studio'],
        tags: ['text-analysis', 'visualization', 'logic', 'education', 'concept-map']
    },
];
