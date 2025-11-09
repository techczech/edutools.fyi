
export interface Message {
  sender: 'user' | 'bot';
  text: string;
}

// Types for Vibecoding Tools Gallery
export type VibecodingToolType = 'chatbot' | 'agentic-builder' | 'llm-provider' | 'coding-environment' | 'orchestration';

export interface VibecodingTool {
  name: string;
  description: string;
  type: VibecodingToolType;
  link: string;
  tags: string[];
}

// Types for Eduapps Gallery
export type EduAppCategory = 'content-browser' | 'simulation' | 'productivity' | 'llm-powered-app';

export interface RelatedApp {
    name: string;
    type: 'expanded-into' | 'expansion-of';
}

export interface EduApp {
    name: string;
    description: string;
    category: EduAppCategory;
    link: string;
    madeWith: string[];
    relatedApps?: RelatedApp[];
    tags: string[];
}