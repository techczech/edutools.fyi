
export interface Message {
  sender: 'user' | 'bot';
  text: string;
}

// Types for Vibecoding Tools Gallery

export interface PricingPlan {
  name: string;
  price: string;
  notes: string;
}

export interface PricingInfo {
  free_tier: boolean;
  free_tier_details: string | null;
  paid_plans: PricingPlan[];
  education_offer?: string;
  current_promotion?: string;
  pricing_model?: string;
}

export interface HostingInfo {
  built_in: boolean;
  platform: string | null;
  url_format?: string;
  notes?: string;
}

export interface VibecodingToolCategory {
  id: string;
  name: string;
  description: string;
}

export interface VibecodingTool {
  name: string;
  description: string;
  category: string; // Corresponds to VibecodingToolCategory.id
  link: string;
  pricing: PricingInfo;
  llm_powered_apps: boolean;
  llm_integration_method: string;
  hosting: HostingInfo;
  non_coder_rating: number; // 1 to 5
  tags: string[];
}

// Types for Eduapps Gallery
export type EduAppCategory = 'concept-explorer' | 'text-analysis' | 'interactive-guide' | 'creator-tool' | 'language-learning';

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
    screenshot?: string;
}

// Types for Explore Vibecoding Content
export type BlockType = 'text' | 'prompt' | 'list' | 'component' | 'html';

export interface ContentBlock {
  type: BlockType;
  content?: string | string[]; // string for text/prompt/html, string[] for list
  componentName?: string;
}

export interface VibecodingTask {
  id: string;
  title: string;
  description: string;
  tools: string[];
  tips?: string[];
}

export interface ExploreSection {
  id: string;
  title: string;
  iconName: string;
  blocks: ContentBlock[];
  tasks?: VibecodingTask[];
}

export interface VibecodingLevel {
  id: number;
  title: string;
  iconName: string;
  summary: string;
  guide: ContentBlock[];
  knowledgeRequired: string[];
  linkedTools: string[]; // Names of tools in vibecodingTools
  linkedApps: string[]; // Names of apps in eduapps
  activities: VibecodingTask[];
}
