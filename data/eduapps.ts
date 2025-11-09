import { EduApp } from '../types';

export const eduapps: EduApp[] = [
    // Content browsers and study guides
    {
        name: 'Gemini Study Guide: History',
        description: 'An interactive study guide about historical events, generated with Gemini.',
        category: 'content-browser',
        link: 'https://g.co/gemini/share/299d5d540564',
        madeWith: ['Gemini'],
        tags: ['history', 'study-guide']
    },
    {
        name: 'Gemini Study Guide: Science',
        description: 'An interactive study guide about scientific concepts, generated with Gemini.',
        category: 'content-browser',
        link: 'https://g.co/gemini/share/ed368a61db47',
        madeWith: ['Gemini'],
        tags: ['science', 'study-guide']
    },
     {
        name: 'Gemini Study Guide: Literature',
        description: 'An interactive study guide exploring literary works, generated with Gemini.',
        category: 'content-browser',
        link: 'https://gemini.google.com/share/b16d06b09b66',
        madeWith: ['Gemini'],
        tags: ['literature', 'study-guide']
    },
    {
        name: 'AI News Browser',
        description: 'A content browser that fetches and displays the latest news about AI.',
        category: 'content-browser',
        link: 'https://ai-news-browser.lovable.app/update/32451669-244d-4b6b-81f1-55d89a94d5a0',
        madeWith: ['Lovable.dev'],
        tags: ['news', 'aggregator']
    },
    // Interactive materials and simulations
    {
        name: 'E=mc² Energy Simulator',
        description: 'An interactive simulation app demonstrating the relationship between energy and mass.',
        category: 'simulation',
        link: 'https://e-mc-energy-simulator-279180372926.us-west1.run.app/',
        madeWith: ['Google AI Studio'],
        tags: ['physics', 'science']
    },
    // Traditional apps personal productivity
    {
        name: 'Readabilitopia',
        description: 'A utility app to analyze text and improve its readability.',
        category: 'productivity',
        link: 'https://readabilitopia.lovable.app/',
        madeWith: ['Lovable.dev'],
        tags: ['writing', 'utility']
    },
    {
        name: 'Artifacts Gallery',
        description: 'A gallery showcasing various applications built using Claude\'s Artifacts feature.',
        category: 'productivity',
        link: 'https://techczech.github.io/artifactsgallery/',
        madeWith: ['Claude'],
        tags: ['gallery', 'portfolio']
    },
    {
        name: 'WriteTrack',
        description: 'A personal productivity app for tracking writing progress and goals.',
        category: 'productivity',
        link: 'https://writetrack.techczech.net/',
        madeWith: ['Unknown'],
        tags: ['writing', 'tracker']
    },
    // LLM-powered apps
    {
        name: 'Translanguaging Companion (Concept)',
        description: 'A conceptual app generated in Gemini Canvas to assist with translanguaging.',
        category: 'llm-powered-app',
        link: 'https://g.co/gemini/share/e1b866e30ffd',
        madeWith: ['Gemini'],
        relatedApps: [{ name: "Above the Line Translanguager's Companion", type: 'expanded-into' }],
        tags: ['language', 'education']
    },
    {
        name: "Above the Line Translanguager's Companion",
        description: 'A deployed app that helps users explore and understand text across different languages.',
        category: 'llm-powered-app',
        link: 'https://above-the-line-translanguager-s-companion-279180372926.us-west1.run.app/',
        madeWith: ['Google AI Studio'],
        relatedApps: [{ name: 'Translanguaging Companion (Concept)', type: 'expansion-of' }],
        tags: ['language', 'education', 'llm']
    },
    {
        name: 'Personal Climate Goals Explorer',
        description: 'An app to help users set and explore personal goals for climate action.',
        category: 'llm-powered-app',
        link: 'https://gemini.google.com/share/74b6e89a2bbc',
        madeWith: ['Gemini'],
        tags: ['climate', 'sustainability', 'goals']
    },
    {
        name: 'Model Context Explorer',
        description: 'An app for developers to explore and understand the context window of LLMs.',
        category: 'llm-powered-app',
        link: 'https://model-context-explorer-279180372926.us-west1.run.app/',
        madeWith: ['Google AI Studio'],
        tags: ['developer-tool', 'llm', 'context']
    },
    {
        name: 'Chatbot Logic Explorer',
        description: 'Compares a rule-based chatbot with an LLM-powered one to show differences in logic.',
        category: 'llm-powered-app',
        link: 'https://chatbot-logic-explorer-rules-vs-llm-279180372926.us-west1.run.app/',
        madeWith: ['Google AI Studio'],
        tags: ['chatbot', 'logic', 'comparison']
    },
    {
        name: 'Accessibility Statement Feedback',
        description: 'An LLM-powered tool to analyze and provide feedback on accessibility statements.',
        category: 'llm-powered-app',
        link: 'https://accessibility-statement-feedback-279180372926.us-west1.run.app/',
        madeWith: ['Google AI Studio'],
        tags: ['accessibility', 'a11y', 'feedback']
    },
    {
        name: 'Proposition Mapper',
        description: 'A tool that uses an LLM to map out and visualize propositions from a text.',
        category: 'llm-powered-app',
        link: 'https://proposition-mapper-279180372926.us-west1.run.app/',
        madeWith: ['Google AI Studio'],
        tags: ['text-analysis', 'visualization', 'logic']
    },
];
