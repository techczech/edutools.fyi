
import { VibecodingTool, VibecodingToolCategory } from '../types';

export const toolCategories: VibecodingToolCategory[] = [
    {
        id: "canvas-tools",
        name: "Chatbot Canvas / Artifact",
        description: "Building apps integrated directly into a chatbot. Ideal for beginners—describe what you want, see live results instantly."
    },
    {
        id: "agentic-builders",
        name: "Agentic App Builders",
        description: "Dedicated platforms that generate full-stack applications from natural language. Handle databases, authentication, and deployment automatically."
    },
    {
        id: "coding-environments",
        name: "Agentic IDEs",
        description: "Browser-based IDEs with AI assistance. More flexibility than canvas tools, but require some comfort with code."
    }
];

export const vibecodingTools: VibecodingTool[] = [
    {
        name: "Gemini Canvas",
        description: "Google's vibecoding canvas generates React/HTML/CSS/JavaScript apps from natural language descriptions. The standout 'Add Gemini features' button embeds AI capabilities (text generation, image processing) directly into your apps without API configuration. Apps are shared via g.co/gemini/share URLs and can be added to phone home screens.",
        category: "canvas-tools",
        link: "https://gemini.google.com",
        pricing: {
            free_tier: true,
            free_tier_details: "Full Canvas access with Gemini 2.0 Flash",
            paid_plans: [
                { name: "AI Pro", price: "$19.99/month", notes: "Gemini 2.5 Pro, 1M token context" },
                { name: "AI Ultra", price: "$249.99/month", notes: "Highest model access" }
            ],
            education_offer: "Free 1-year AI Pro for university students in US, Japan, Brazil, Indonesia, UK"
        },
        llm_powered_apps: true,
        llm_integration_method: "Built-in via 'Add Gemini features' button—no API keys needed",
        hosting: {
            built_in: true,
            platform: "Google infrastructure",
            url_format: "g.co/gemini/share/[id]"
        },
        non_coder_rating: 5,
        tags: ["google", "multimodal", "free", "canvas", "built-in-ai", "mobile-friendly"]
    },
    {
        name: "Claude Artifacts",
        description: "Anthropic's artifact system creates self-contained web apps, games, and interactive tools in a secure browser sandbox. June 2025's window.claude.complete() function lets artifacts make Claude API calls internally—viewers use their own Claude accounts, so API costs don't fall on creators. Apps publish instantly to claude.site domains. October 2025 added persistent storage and MCP integration for stateful applications.",
        category: "canvas-tools",
        link: "https://claude.ai",
        pricing: {
            free_tier: true,
            free_tier_details: "Full artifact creation, ~9 messages per 5 hours",
            paid_plans: [
                { name: "Pro", price: "$20/month ($17 annual)", notes: "MCP integration, persistent storage, 5x usage" },
                { name: "Max 5x", price: "$100/month", notes: "Limited Opus 4.1 access" },
                { name: "Max 20x", price: "$200/month", notes: "Full Opus 4.1, ~200-800 Claude Code prompts" }
            ]
        },
        llm_powered_apps: true,
        llm_integration_method: "Built-in via window.claude.complete()—viewers authenticate with own accounts",
        hosting: {
            built_in: true,
            platform: "Anthropic claude.site",
            url_format: "claude.site/artifacts/[id]"
        },
        non_coder_rating: 5,
        tags: ["anthropic", "artifacts", "persistent-storage", "mcp", "built-in-ai"]
    },
    {
        name: "ChatGPT Canvas",
        description: "OpenAI's side-by-side code editor with live preview for HTML/CSS/JavaScript and React. Python execution includes automatic bug detection with one-click 'Fix bug' buttons. Strong prototyping environment but no built-in hosting—export apps to Vercel, Replit, or similar for production deployment.",
        category: "canvas-tools",
        link: "https://chat.com",
        pricing: {
            free_tier: true,
            free_tier_details: "Limited GPT-4o, basic Canvas access",
            paid_plans: [
                { name: "Plus", price: "$20/month", notes: "GPT-5, 3,000 messages/week" },
                { name: "Pro", price: "$200/month", notes: "Unlimited, priority access" }
            ],
            education_offer: "FREE premium access for verified US K-12 teachers through June 2027 (ChatGPT for Teachers program)"
        },
        llm_powered_apps: false,
        llm_integration_method: "Must export code and add API calls externally",
        hosting: {
            built_in: false,
            platform: null,
            notes: "Prototypes only—deploy via Vercel, Replit, Netlify, etc."
        },
        non_coder_rating: 5,
        tags: ["openai", "canvas", "python", "teachers-free", "prototyping"]
    },
    {
        name: "Google AI Studio",
        description: "Google's developer-focused vibecoding platform with one-click Cloud Run deployment. Describe an app, AI generates a full React/Angular project, click the rocket icon to deploy with a stable HTTPS endpoint. Zero-configuration containerization, auto-scaling (including to zero), and server-side API key management. Annotation Mode enables point-and-click UI editing without touching code.",
        category: "agentic-builders",
        link: "https://aistudio.google.com",
        pricing: {
            free_tier: true,
            free_tier_details: "Full interface free; API free tier: 5-15 RPM depending on model",
            paid_plans: [
                { name: "Gemini 2.5 Pro API", price: "$1.25/$10 per 1M tokens (in/out)", notes: "5 RPM, 100 RPD free" },
                { name: "Gemini 2.5 Flash API", price: "$0.30/$2.50 per 1M tokens", notes: "10 RPM, 250 RPD free" },
                { name: "Cloud Run", price: "2M requests/month free", notes: "$300 credit for new GCP users" }
            ]
        },
        llm_powered_apps: true,
        llm_integration_method: "Full Gemini SDK integration with server-side API key management",
        hosting: {
            built_in: true,
            platform: "Google Cloud Run",
            url_format: "[project].run.app",
            notes: "One-click deployment, auto-scaling, 2M requests/month free"
        },
        non_coder_rating: 4,
        tags: ["google", "gemini", "api", "cloud-run", "deploy", "production-ready"]
    },
    {
        name: "Lovable.dev",
        description: "The fastest-growing agentic builder ($200M ARR, 500k+ users). Generates full-stack React/Node/Supabase apps. ' GPT-Engineer' backend handles database schema, authentication, and edge functions. One-click deploy to Netlify/Vercel. Great for CRUD apps and dashboards.",
        category: "agentic-builders",
        link: "https://lovable.dev",
        pricing: {
            free_tier: true,
            free_tier_details: "Public projects, limited generation credits",
            paid_plans: [
                { name: "Starter", price: "$20/month", notes: "Private projects, export code" },
                { name: "Pro", price: "$45/month", notes: "Higher limits, priority support" }
            ]
        },
        llm_powered_apps: true,
        llm_integration_method: "Built-in integration with Supabase Edge Functions",
        hosting: {
            built_in: true,
            platform: "Lovable Cloud (Netlify under hood)",
            url_format: "[project].lovable.app"
        },
        non_coder_rating: 4,
        tags: ["full-stack", "react", "supabase", "crud", "dashboard"]
    },
    {
        name: "Replit Agent",
        description: "An AI software developer that builds and deploys full-stack apps within the Replit IDE. Can plan complex features, install dependencies, set up databases (Postgres), and fix its own errors. Ideal for moving from prototype to production application.",
        category: "agentic-builders",
        link: "https://replit.com",
        pricing: {
            free_tier: false,
            free_tier_details: "Agent requires Replit Core subscription",
            paid_plans: [
                { name: "Core", price: "$20/month", notes: "Includes Agent access, faster machines" },
                { name: "Teams", price: "$40/user/month", notes: "Collaboration features" }
            ]
        },
        llm_powered_apps: true,
        llm_integration_method: "Standard API key integration in secrets management",
        hosting: {
            built_in: true,
            platform: "Replit Deployments",
            url_format: "[project].replit.app"
        },
        non_coder_rating: 3,
        tags: ["agent", "full-stack", "python", "node", "ide"]
    },
    {
        name: "Cursor",
        description: "A fork of VS Code with deep AI integration. 'Composer' mode (Cmd+I) lets you write multi-file features in plain English. Example: 'Refactor this component to use the new context and update all references.' Best for those who want to learn coding structure while being productive.",
        category: "coding-environments",
        link: "https://cursor.com",
        pricing: {
            free_tier: true,
            free_tier_details: "2-week Pro trial, then limited basic requests",
            paid_plans: [
                { name: "Pro", price: "$20/month", notes: "500 fast premium requests (Claude 3.5 Sonnet, GPT-4o)" },
                { name: "Business", price: "$40/user/month", notes: "Privacy controls, centralized billing" }
            ]
        },
        llm_powered_apps: true,
        llm_integration_method: "Standard coding workflow (API keys in .env)",
        hosting: {
            built_in: false,
            platform: null,
            notes: "Standard developer deployment (Vercel, Railway, etc.)"
        },
        non_coder_rating: 2,
        tags: ["vscode", "editor", "copilot", "developer-tool", "refactoring"]
    },
    {
        name: "Bolt.new",
        description: "StackBlitz's browser-based AI builder that gives you full control over the environment. Installs npm packages, runs build commands, and previews live. Great for testing libraries and rapid prototyping in a real dev environment without local setup.",
        category: "agentic-builders",
        link: "https://bolt.new",
        pricing: {
            free_tier: true,
            free_tier_details: "Free for public projects",
            paid_plans: [
                { name: "Pro", price: "$18/month", notes: "Private projects, higher limits" }
            ]
        },
        llm_powered_apps: true,
        llm_integration_method: "Standard env var configuration",
        hosting: {
            built_in: true,
            platform: "StackBlitz WebContainers",
            url_format: "bolt.new/[id]"
        },
        non_coder_rating: 3,
        tags: ["webcontainers", "browser-based", "npm", "prototyping"]
    },
    {
        name: "V0.dev",
        description: "Vercel's generative UI system. Focuses purely on the frontend layer (React/Tailwind/Shadcn UI). Copy-paste the generated code into your own project. Excellent for generating beautiful, accessible components quickly.",
        category: "agentic-builders",
        link: "https://v0.dev",
        pricing: {
            free_tier: true,
            free_tier_details: "200 credits/month",
            paid_plans: [
                { name: "Premium", price: "$20/month", notes: "5,000 credits, higher quality generation" }
            ]
        },
        llm_powered_apps: false,
        llm_integration_method: "N/A (UI generation only)",
        hosting: {
            built_in: true,
            platform: "Vercel (preview only)",
            url_format: "v0.dev/r/[id]"
        },
        non_coder_rating: 4,
        tags: ["ui", "css", "tailwind", "design", "component-library"]
    },
    // Add these to the vibecodingTools array:

{
    name: "Google Antigravity",
    description: "Google’s agentic development platform (VS Code-based) with an Agent Manager “mission control” plus an editor view. You can spawn multiple agents that plan, code, run terminal commands, and use an integrated browser to test/verify work, producing artifacts and diffs for review.",
    category: "coding-environments",
    link: "https://antigravity.google",
    pricing: {
        free_tier: true,
        free_tier_details: "No-cost public preview for personal Gmail accounts with a free quota; the free plan uses a weekly-based rate limit.",
        paid_plans: [
            { name: "Google AI Pro", price: "£18.99/month (UK)", notes: "Priority access + higher Antigravity rate limits; quotas refresh every 5 hours." },
            { name: "Google AI Ultra", price: "£234.99/month (UK)", notes: "Highest Antigravity rate limits; quotas refresh every 5 hours." }
        ]
    },
    llm_powered_apps: true,
    llm_integration_method: "Built-in agent runs across editor + terminal + browser, with configurable execution and review policies",
    hosting: {
        built_in: false,
        platform: null,
        notes: "Local IDE—deploy with your existing tooling (Vercel, Cloud Run, etc.)."
    },
    non_coder_rating: 2,
    tags: ["google", "agentic-ide", "multi-agent", "terminal", "browser-automation", "artifacts", "gemini"]
},
{
    name: "Claude Code",
    description: "Anthropic’s terminal-first agentic coding tool. It understands your repo, can make multi-file edits, run commands, and create commits. Supports MCP for pulling context from external tools (e.g., Drive/Figma/Slack).",
    category: "coding-environments",
    link: "https://code.claude.com",
    pricing: {
        free_tier: false,
        free_tier_details: "Requires Claude Pro/Max subscription (Claude.ai) or Anthropic Console API billing (pre-paid credits).",
        paid_plans: [
            { name: "Claude Pro", price: "$20/month ($17/mo annual)", notes: "Includes Claude Code on the web + in your terminal." },
            { name: "Claude Max", price: "From $100/month", notes: "Higher usage tiers; includes Claude Code." },
            { name: "Claude Console (API)", price: "Token-based", notes: "Anthropic reports avg ~$6/dev/day (90% under $12/day); ~$100–$200/dev/month with Sonnet 4.5 (varies)." }
        ]
    },
    llm_powered_apps: true,
    llm_integration_method: "Terminal agent edits files/runs commands; can connect to external systems via MCP",
    hosting: {
        built_in: false,
        platform: null,
        notes: "Local-first (CLI); can also be used in CI workflows."
    },
    non_coder_rating: 1,
    tags: ["anthropic", "claude-code", "cli", "terminal", "agentic", "mcp", "git"]
},
{
    name: "Codex CLI",
    description: "OpenAI’s terminal-based coding agent that can read, modify, and run code on your machine in a chosen directory. Supports approval modes before editing/running commands, and can be extended via MCP.",
    category: "coding-environments",
    link: "https://developers.openai.com/codex/cli/",
    pricing: {
        free_tier: false,
        free_tier_details: "Included with ChatGPT Plus/Pro/Business/Edu/Enterprise plans (or authenticate with an API key for pay-as-you-go).",
        paid_plans: [
            { name: "ChatGPT Plus", price: "$20/month", notes: "Includes Codex (CLI/IDE/web) via ChatGPT sign-in." },
            { name: "ChatGPT Pro", price: "$200/month", notes: "Includes Codex with higher limits." },
            { name: "ChatGPT Business", price: "$25/seat/mo (annual) or $30/seat/mo (monthly)", notes: "2+ users; includes Codex." },
            { name: "Enterprise/Edu", price: "Custom", notes: "Contact sales / institution pricing." }
        ]
    },
    llm_powered_apps: true,
    llm_integration_method: "Runs locally; edits files and runs commands with configurable approvals; can connect extra tools/context via MCP",
    hosting: {
        built_in: false,
        platform: null,
        notes: "Local CLI—deploy however you normally deploy."
    },
    non_coder_rating: 1,
    tags: ["openai", "codex", "cli", "terminal", "agent", "mcp", "code-review"]
},
{
    name: "Claude Desktop (MCP filesystem)",
    description: "Claude’s desktop app for macOS/Windows. Using desktop extensions / local MCP servers (e.g., filesystem), Claude can read and modify files on your machine—creating/moving/renaming/searching with explicit approval for each action.",
    category: "coding-environments",
    link: "https://claude.com/download",
    pricing: {
        free_tier: true,
        free_tier_details: "Claude desktop apps are available on all plan types (including Free). Local MCP servers add controlled access to your filesystem and other local tools.",
        paid_plans: [
            { name: "Free", price: "$0", notes: "Desktop app available; core usage limits apply." },
            { name: "Pro", price: "$20/month ($17/mo annual)", notes: "More usage; includes Claude Code and remote MCP connectors." },
            { name: "Max", price: "From $100/month", notes: "Higher usage tiers; includes Claude Code." }
        ]
    },
    llm_powered_apps: true,
    llm_integration_method: "Desktop extensions powered by MCP; filesystem server enables read/write/search with explicit user approvals",
    hosting: {
        built_in: false,
        platform: null,
        notes: "Local desktop client—edits files directly in your project folders via MCP extensions."
    },
    non_coder_rating: 3,
    tags: ["anthropic", "claude-desktop", "mcp", "filesystem", "local-tools", "windows", "macos"]
},

];
