
import { toolCategories, vibecodingTools } from './data/tools';
import { eduapps } from './data/eduapps';
import { exploreSections } from './data/explore';

function generateContext(): string {
  let context = "# Vibecoding for Educators: Explaining Difficult Concepts with Apps\n\n";
  context += "This is a guide for a workshop at the AI in Education Conference at Cambridge 2025.\n\n";

  // Add Explore Content
  exploreSections.forEach(section => {
    context += `## ${section.title}\n`;
    section.blocks.forEach(block => {
      if (block.type === 'text' && typeof block.content === 'string') context += `${block.content}\n\n`;
      if (block.type === 'prompt' && typeof block.content === 'string') context += `Prompt: ${block.content}\n\n`;
      if (block.type === 'list' && Array.isArray(block.content)) {
        block.content.forEach(item => context += `- ${item}\n`);
        context += '\n';
      }
    });
    if (section.tasks) {
      section.tasks.forEach(task => {
        context += `### ${task.title}\n`;
        context += `${task.description}\n`;
        context += `Tools: ${task.tools.join(', ')}\n\n`;
      });
    }
  });

  // Add Tools
  context += "\n## Vibecoding Tools\n";
  toolCategories.forEach(cat => {
    context += `### ${cat.name}\n${cat.description}\n`;
    const tools = vibecodingTools.filter(t => t.category === cat.id);
    tools.forEach(tool => {
      context += `- **${tool.name}**: ${tool.description} (Rating: ${tool.non_coder_rating}/5)\n`;
    });
    context += "\n";
  });

  // Add Apps
  context += "\n## Example EduApps\n";
  eduapps.forEach(app => {
    context += `- **${app.name}** (${app.category}): ${app.description}\n`;
  });

  return context;
}

export const VIBECODING_CONTEXT = generateContext();
