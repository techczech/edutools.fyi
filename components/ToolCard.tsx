import React from 'react';
import { VibecodingTool, VibecodingToolType } from '../types';
import { LinkIcon } from './Icons';

interface VibecodingToolCardProps {
    tool: VibecodingTool;
}

const typeColors: Record<VibecodingToolType, string> = {
    'chatbot': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'agentic-builder': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    'llm-provider': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'coding-environment': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'orchestration': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
};

const VibecodingToolCard: React.FC<VibecodingToolCardProps> = ({ tool }) => {
    return (
        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{tool.name}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColors[tool.type]}`}>
                        {tool.type.replace(/-/g, ' ')}
                    </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{tool.description}</p>
            </div>
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 rounded-b-lg">
                <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-semibold text-sm group"
                >
                    Visit Tool
                    <LinkIcon className="text-base transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    );
};

export default VibecodingToolCard;