

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

export interface EduApp {
    name: string;
    tagline: string;
    description: string;
    keyFeatures: string[];
    idealFor: string;
    category: EduAppCategory;
    url: string;
    madeWith: string[];
    tags: string[];
}