import { VibecodingTool } from '../types';

export const vibecodingTools: VibecodingTool[] = [
    {
        name: 'Gemini',
        description: 'A family of multimodal AI models from Google. Great for generating code, text, and has a Canvas feature for app creation.',
        type: 'chatbot',
        link: 'http://gemini.google.com',
        tags: ['google', 'multimodal', 'free', 'canvas']
    },
    {
        name: 'Claude',
        description: 'An AI assistant from Anthropic, known for its large context window and strong reasoning. Features "Artifacts" for app building.',
        type: 'chatbot',
        link: 'http://claude.ai',
        tags: ['anthropic', 'writing', 'artifacts']
    },
    {
        name: 'ChatGPT',
        description: 'A popular AI chatbot from OpenAI that can be used for a wide variety of text generation and coding tasks.',
        type: 'chatbot',
        link: 'http://chat.com',
        tags: ['openai', 'general purpose']
    },
    {
        name: 'Google AI Studio',
        description: 'A web-based tool for prototyping and running prompts with Gemini models. Allows for quick deployment of simple AI-powered apps.',
        type: 'llm-provider',
        link: 'http://ai.dev',
        tags: ['google', 'gemini', 'api', 'free', 'deploy']
    },
    {
        name: 'Lovable.dev',
        description: 'An agentic app builder that allows you to create and deploy web applications from a text prompt, with a generous free tier.',
        type: 'agentic-builder',
        link: 'http://lovable.dev',
        tags: ['no-code', 'deployment', 'free-tier']
    },
    {
        name: 'Replit',
        description: 'An online IDE with AI features that supports many programming languages and allows for easy deployment of web applications.',
        type: 'coding-environment',
        link: 'https://replit.com',
        tags: ['ide', 'collaboration', 'ai', 'hosting']
    },
    {
        name: 'Google Colab',
        description: 'A free Jupyter notebook environment that runs entirely in the cloud, perfect for experimenting with Python, AI, and data science.',
        type: 'coding-environment',
        link: 'https://colab.research.google.com/',
        tags: ['python', 'notebook', 'free', 'google']
    },
    {
        name: 'Dify.ai',
        description: 'An open-source LLM app development platform for creating and operating generative AI-native apps with complex orchestrations.',
        type: 'orchestration',
        link: 'http://dify.ai',
        tags: ['open-source', 'llmops', 'workflow']
    },
    {
        name: 'OpenRouter',
        description: 'A unified API for accessing a wide variety of large language models from different providers with a single key.',
        type: 'llm-provider',
        link: 'https://openrouter.ai/',
        tags: ['api', 'models', 'aggregator']
    }
];
