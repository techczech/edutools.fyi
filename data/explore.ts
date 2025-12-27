
import { VibecodingLevel, ExploreSection } from '../types';

export const exploreIntro: ExploreSection = {
  id: 'intro',
  title: 'The Spectrum of AI-Assisted Coding',
  iconName: 'CompassIcon',
  blocks: [
    { type: 'text', content: 'Vibecoding is not a single skill. It is a progression from using AI as a copy-paste assistant to orchestrating complex agents that build full-stack software. We have broken this journey down into four distinct levels.' },
    { type: 'component', componentName: 'FourLevelsGraphic' }
  ]
};

export const vibecodingLevels: VibecodingLevel[] = [
  {
    id: 1,
    title: 'Level 1: Snippets',
    iconName: 'ClipboardIcon',
    summary: "The entry point. You ask a chatbot for a specific piece of code, copy it, and run it locally.",
    guide: [
      { type: 'text', content: 'At this level, you treat the AI as a junior developer sitting next to you. You ask for a specific component—like a calculator or a graph—and it hands you the raw HTML/CSS/JS file. You are responsible for saving the file and opening it in your browser.' },
      { type: 'prompt', content: 'Write a single HTML file containing a Pomodoro timer with a pink theme. Include the CSS and JavaScript within the file so I can run it in my browser.' }
    ],
    knowledgeRequired: [
      'Basic file management (saving .html files)',
      'How to open a file in a browser',
      'Basic prompt engineering'
    ],
    linkedTools: ['ChatGPT Canvas', 'Claude Artifacts', 'Gemini Canvas'], 
    linkedApps: ['Proposition Mapper', 'Energy Simulator (E = mc²)'], 
    activities: [
      {
        id: 'task-1',
        title: 'Activity: The Single File App',
        description: 'Ask any chatbot to generate a self-contained HTML file. Copy the code into a text editor (like Notepad or TextEdit), save it as "index.html", and double-click to run.',
        tools: ['ChatGPT', 'Claude', 'Gemini'],
        tips: ['Always ask for "a single HTML file with no external dependencies" to ensure it runs offline.']
      }
    ]
  },
  {
    id: 2, // Keeping ID consistency
    title: 'Level 2: Artifacts / Canvas',
    iconName: 'CanvasIcon',
    summary: "Interactive previews. The AI writes the code and renders it immediately in a side panel.",
    guide: [
      { type: 'text', content: 'This is the "sweet spot" for most educators. Tools like Gemini Canvas and Claude Artifacts allow you to see the result instantly. You can iterate by simply saying "make the text bigger" or "add a quiz mode", and the AI updates the preview in real-time. No file management required.' },
      { type: 'text', content: 'These tools are perfect for creating study guides, simple interactive diagrams, and visual explanations.' }
    ],
    knowledgeRequired: [
      'Iterative prompting (refining requests)',
      'Visual design basics (to ask for better UI)',
      'How to share/publish the specific artifact',
      'What can be done with LLMs (if the tool allows this)'
    ],
    linkedTools: ['Gemini Canvas', 'Claude Artifacts'],
    linkedApps: ['Conference Session Browser', '3 Ways to Get Better at AI', 'AI Engineer World\'s Fair 2025 Summary', 'Grammatical Annotation Generator'],
    activities: [
      {
        id: 'task-2',
        title: 'Activity: Iterate on a Canvas',
        description: 'Open Gemini Canvas or Claude. Ask for a "Quiz about Solar Energy". Once generated, ask it to "Add a score counter" and "Make the background dark blue". Watch how the app evolves without you touching code.',
        tools: ['Gemini Canvas', 'Claude Artifacts']
      }
    ]
  },
  {
    id: 3,
    title: 'Level 3: Agentic App Builders',
    iconName: 'DevicePhoneMobileIcon',
    summary: "Full application generation. The AI handles the database, hosting, and deployment.",
    guide: [
      { type: 'text', content: 'Moving beyond simple UI, these tools build real web applications that can save data, handle user logins, and exist on the public internet. You describe the full app in natural language, and the "Agent" figures out the database schema, installs libraries, and deploys the site.' },
      { type: 'text', content: 'This level allows for "CRUD" apps (Create, Read, Update, Delete)—like tracking systems, galleries, or community boards.' }
    ],
    knowledgeRequired: [
      'Same as for level one',
      'Understanding when database may be needed',
      'Understanding when to "ask for refactor"',
      'Understanding difference between semantic markup'
      'Deployment basics (publishing to a URL)'
    ],
    linkedTools: ['Lovable.dev', 'Google AI Studio', 'Replit', 'Bolt.new'],
    linkedApps: ['Above The Line', 'Metaphornik', 'Semantic Text Unweaver', 'LearnWeaver', 'WriteTrack', 'Interactive Conference Schedule'],
    activities: [
      {
        id: 'task-3',
        title: 'Activity: Build a Tracker',
        description: 'Use a tool like Lovable or Google AI Studio to build a "Reading Tracker". detailed that users need to add books, rate them, and see a list of read books. Deploy it to a shareable URL.',
        tools: ['Lovable.dev', 'Google AI Studio']
      }
    ]
  },
  {
    id: 4,
    title: 'Level 4: Agentic IDE / Advanced',
    iconName: 'CodeWindowIcon',
    summary: "Professional development with AI. You work in a coding environment (IDE) with an AI partner.",
    guide: [
      { type: 'text', content: 'At this level, you are using professional tools like VS Code (via Cursor) or Replit. The AI acts as a senior engineer, refactoring code across multiple files, debugging complex errors, and managing version control. This gives you maximum control but requires the most technical knowledge.' },
      { type: 'text', content: 'This is best for highly custom apps, integrating complex APIs, or when you need total control over the source code.' }
    ],
    knowledgeRequired: [
      'Reading code structure',
      'API keys and environment variables',
      'Debugging logs and error messages',
      'Git / Version Control'
    ],
    linkedTools: ['Cursor', 'Claude Code', 'Gemini CLI'],
    linkedApps: ['ZoteroLM','Model Vibe Check','PPT to Learning'],
    activities: [
      {
        id: 'task-4',
        title: 'Activity: The API Integration',
        description: 'Use Cursor or Replit to build a simple app that uses an external API (like the NASA photo of the day). Ask the AI to "Fetch data from the NASA API and display it".',
        tools: ['Cursor', 'Replit']
      }
    ]
  }
];

// Retaining the generic array for backward compatibility if needed, but currently unused in new implementation
export const exploreSections: ExploreSection[] = [exploreIntro];
