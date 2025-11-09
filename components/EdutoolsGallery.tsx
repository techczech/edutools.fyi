import React, { useState, useMemo } from 'react';
import { vibecodingTools } from '../data/tools';
import VibecodingToolCard from './ToolCard';
import { VibecodingTool, VibecodingToolType } from '../types';

const toolTypes: VibecodingToolType[] = ['chatbot', 'agentic-builder', 'llm-provider', 'coding-environment', 'orchestration'];

const VibecodingToolsGallery: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState<VibecodingToolType | 'all'>('all');

    const filteredTools = useMemo(() => {
        return vibecodingTools.filter(tool => {
            const matchesType = selectedType === 'all' || tool.type === selectedType;
            const matchesSearch = searchTerm.trim() === '' ||
                tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            
            return matchesType && matchesSearch;
        });
    }, [searchTerm, selectedType]);

    return (
        <section>
            <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Vibecoding Tools Gallery</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    A curated list of tools for creating AI-powered educational applications.
                </p>
                <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <input
                        type="search"
                        placeholder="Search tools..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-grow w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value as VibecodingToolType | 'all')}
                        className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                        <option value="all">All Types</option>
                        {toolTypes.map(type => (
                            <option key={type} value={type} className="capitalize">
                                {type.replace(/-/g, ' ')}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredTools.map(tool => (
                        <VibecodingToolCard key={tool.name} tool={tool} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 px-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No tools found</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">Try adjusting your search or filters.</p>
                </div>
            )}
        </section>
    );
};

export default VibecodingToolsGallery;