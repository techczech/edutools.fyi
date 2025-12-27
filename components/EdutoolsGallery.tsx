
import React, { useState, useMemo, useEffect } from 'react';
import { vibecodingTools, toolCategories } from '../data/tools';
import VibecodingToolCard, { toolCategoryColors } from './ToolCard';

interface VibecodingToolsGalleryProps {
    initialSearchTerm?: string;
}

const VibecodingToolsGallery: React.FC<VibecodingToolsGalleryProps> = ({ initialSearchTerm = '' }) => {
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    useEffect(() => {
        setSearchTerm(initialSearchTerm);
    }, [initialSearchTerm]);

    const filteredTools = useMemo(() => {
        return vibecodingTools.filter(tool => {
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tool.category);
            const matchesSearch = searchTerm.trim() === '' ||
                tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            
            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, selectedCategories]);

    // Helper to find category object for a tool
    const getCategoryForTool = (categoryId: string) => {
        return toolCategories.find(c => c.id === categoryId);
    };

    const toggleCategory = (categoryId: string) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    return (
        <section>
            <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Vibecoding Tools Gallery</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    A curated list of tools for creating AI-powered educational applications.
                </p>
                <div className="flex flex-col gap-6">
                    {/* Search Bar */}
                    <input
                        type="search"
                        placeholder="Search tools, pricing, or features..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm"
                    />
                    
                    {/* Category Pills */}
                    <div>
                         <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Filter by Category</h3>
                         <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedCategories([])}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                                    selectedCategories.length === 0
                                        ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 border-transparent shadow-md'
                                        : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600'
                                }`}
                            >
                                All Categories
                            </button>
                            {toolCategories.map(cat => {
                                const isSelected = selectedCategories.includes(cat.id);
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => toggleCategory(cat.id)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                                            isSelected
                                                ? `${toolCategoryColors[cat.id]} border-transparent ring-2 ring-offset-1 dark:ring-offset-gray-800 ring-current shadow-sm`
                                                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600'
                                        }`}
                                    >
                                        {cat.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredTools.map(tool => (
                        <VibecodingToolCard 
                            key={tool.name} 
                            tool={tool} 
                            category={getCategoryForTool(tool.category)}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 px-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No tools found</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">Try adjusting your search or category filter.</p>
                </div>
            )}
        </section>
    );
};

export default VibecodingToolsGallery;
