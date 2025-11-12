import React, { useState, useMemo } from 'react';
import { eduapps } from '../data/eduapps';
import EduAppCard from './EduAppCard';
import { EduApp, EduAppCategory } from '../types';

const appCategories: EduAppCategory[] = ['content-browser', 'simulation', 'productivity', 'llm-powered-app'];

interface EduappsGalleryProps {
    onToolClick: (toolName: string) => void;
}

const EduappsGallery: React.FC<EduappsGalleryProps> = ({ onToolClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<EduAppCategory | 'all'>('all');
    const [selectedTool, setSelectedTool] = useState<string | 'all'>('all');

    const codingTools = useMemo(() => {
        const allTools = eduapps.flatMap(app => app.madeWith);
        return [...new Set(allTools)].sort();
    }, []);

    const filteredApps = useMemo(() => {
        return eduapps.filter(app => {
            const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
            const matchesTool = selectedTool === 'all' || app.madeWith.includes(selectedTool);
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            const matchesSearch = searchTerm.trim() === '' ||
                app.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                app.tagline.toLowerCase().includes(lowerCaseSearchTerm) ||
                app.description.toLowerCase().includes(lowerCaseSearchTerm) ||
                app.idealFor.toLowerCase().includes(lowerCaseSearchTerm) ||
                app.keyFeatures.some(feature => feature.toLowerCase().includes(lowerCaseSearchTerm)) ||
                app.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm)) ||
                app.madeWith.some(tool => tool.toLowerCase().includes(lowerCaseSearchTerm));
            
            return matchesCategory && matchesSearch && matchesTool;
        });
    }, [searchTerm, selectedCategory, selectedTool]);

    return (
        <section>
            <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Eduapps Gallery</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    A gallery of example educational apps built with vibecoding tools.
                </p>
                <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <input
                        type="search"
                        placeholder="Search apps, tags, or tools..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-grow w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value as EduAppCategory | 'all')}
                        className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                        <option value="all">All Categories</option>
                        {appCategories.map(cat => (
                            <option key={cat} value={cat} className="capitalize">
                                {cat.replace(/-/g, ' ')}
                            </option>
                        ))}
                    </select>
                     <select
                        value={selectedTool}
                        onChange={(e) => setSelectedTool(e.target.value)}
                        className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                        <option value="all">All Tools</option>
                        {codingTools.map(tool => (
                            <option key={tool} value={tool}>{tool}</option>
                        ))}
                    </select>
                </div>
            </div>

            {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredApps.map(app => (
                        <EduAppCard key={app.name} app={app} onToolClick={onToolClick} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 px-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No apps found</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">Try adjusting your search or filters.</p>
                </div>
            )}
        </section>
    );
};

export default EduappsGallery;