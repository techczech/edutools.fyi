
import React, { useState, useMemo, useEffect } from 'react';
import { eduapps } from '../data/eduapps';
import EduAppCard, { categoryColors } from './EduAppCard';
import { EduApp, EduAppCategory } from '../types';
import ScreenshotModal from './ScreenshotModal';
import { useBookmarks } from '../hooks/useBookmarks';
import { BookmarkIcon, BookmarkBorderIcon } from './Icons';
import OrganiseAndExport from './OrganiseAndExport';

const appCategories: EduAppCategory[] = ['concept-explorer', 'text-analysis', 'interactive-guide', 'creator-tool', 'language-learning'];

interface EduappsGalleryProps {
    onToolClick: (toolName: string) => void;
    initialSearchTerm?: string;
}

const EduappsGallery: React.FC<EduappsGalleryProps> = ({ onToolClick, initialSearchTerm = '' }) => {
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
    const [selectedCategories, setSelectedCategories] = useState<EduAppCategory[]>([]);
    const [selectedTool, setSelectedTool] = useState<string | 'all'>('all');
    const [modalImage, setModalImage] = useState<{src: string, alt: string} | null>(null);
    const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
    
    const { bookmarks, toggleBookmark, isBookmarked, reorderBookmarks } = useBookmarks();

    useEffect(() => {
        setSearchTerm(initialSearchTerm);
    }, [initialSearchTerm]);

    // Derive the list of actual EduApp objects from the bookmarks list to maintain order
    const bookmarkedApps = useMemo(() => {
        return bookmarks
            .map(name => eduapps.find(app => app.name === name))
            .filter((app): app is EduApp => !!app);
    }, [bookmarks]);

    const codingTools = useMemo(() => {
        const allTools = eduapps.flatMap(app => app.madeWith);
        return [...new Set(allTools)].sort();
    }, []);

    // Calculate counts for filters based on search and tool selection (ignoring category selection)
    const categoryCounts = useMemo(() => {
        const sourceApps = showBookmarkedOnly ? bookmarkedApps : eduapps;
        const counts: Record<string, number> = { all: 0 };
        appCategories.forEach(cat => counts[cat] = 0);

        sourceApps.forEach(app => {
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

            if (matchesTool && matchesSearch) {
                counts.all += 1;
                if (counts[app.category] !== undefined) {
                    counts[app.category] += 1;
                }
            }
        });

        return counts;
    }, [searchTerm, selectedTool, showBookmarkedOnly, bookmarkedApps]);

    const filteredApps = useMemo(() => {
        // If showing bookmarked only, we use the ordered bookmarkedApps as the source.
        // Otherwise, we use the default eduapps list.
        const sourceApps = showBookmarkedOnly ? bookmarkedApps : eduapps;

        return sourceApps.filter(app => {
            // OR logic: If no categories selected, show all. Otherwise show if app matches any selected category.
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(app.category);
            const matchesTool = selectedTool === 'all' || app.madeWith.includes(selectedTool);
            // If we are not in 'Saved' mode, we still need to filter if showBookmarkedOnly was somehow set (redundant check but safe)
            // If showBookmarkedOnly is true, sourceApps contains ONLY bookmarked apps, so isBookmarked check is implicit.
            // If showBookmarkedOnly is false, we don't filter by bookmark here.
            
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
    }, [searchTerm, selectedCategories, selectedTool, showBookmarkedOnly, bookmarkedApps]);
    
    const handleImageClick = (src: string, alt: string) => {
        setModalImage({ src, alt });
    };

    const handleCloseModal = () => {
        setModalImage(null);
    };

    const toggleCategory = (category: EduAppCategory) => {
        setSelectedCategories(prev => {
            if (prev.includes(category)) {
                return prev.filter(c => c !== category);
            } else {
                return [...prev, category];
            }
        });
    };

    return (
        <section>
            <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Eduapps Gallery</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    A gallery of example educational apps built with vibecoding tools.
                </p>
                
                <div className="flex flex-col gap-6">
                    {/* Top Row: Search, Tool Filter, and Bookmark Toggle */}
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex flex-col sm:flex-row gap-4 flex-grow">
                            <input
                                type="search"
                                placeholder="Search apps, tags, or tools..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="flex-grow w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm"
                            />
                            <select
                                value={selectedTool}
                                onChange={(e) => setSelectedTool(e.target.value)}
                                className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm sm:w-64"
                            >
                                <option value="all">All Tools</option>
                                {codingTools.map(tool => (
                                    <option key={tool} value={tool}>{tool}</option>
                                ))}
                            </select>
                        </div>
                        
                        <button
                            onClick={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
                            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm whitespace-nowrap ${
                                showBookmarkedOnly
                                    ? 'bg-pink-600 text-white hover:bg-pink-700'
                                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                            }`}
                        >
                            {showBookmarkedOnly ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                            <span>Saved ({bookmarks.length})</span>
                        </button>
                    </div>

                    {/* Bottom Row: Category Pills */}
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
                                All Categories <span className="ml-1 opacity-75 text-xs">({categoryCounts.all})</span>
                            </button>
                            {appCategories.map(cat => {
                                const isSelected = selectedCategories.includes(cat);
                                const count = categoryCounts[cat] || 0;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => toggleCategory(cat)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                                            isSelected
                                                ? `${categoryColors[cat]} border-transparent ring-2 ring-offset-1 dark:ring-offset-gray-800 ring-current shadow-sm`
                                                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600'
                                        } ${count === 0 ? 'opacity-50' : ''}`}
                                    >
                                        {cat.replace(/-/g, ' ')} <span className="ml-1 opacity-75 text-xs">({count})</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredApps.map(app => (
                        <EduAppCard 
                            key={app.name} 
                            app={app} 
                            onToolClick={onToolClick} 
                            onImageClick={handleImageClick}
                            isBookmarked={isBookmarked(app.name)}
                            onToggleBookmark={toggleBookmark}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 px-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No apps found</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">Try adjusting your search or filters.</p>
                </div>
            )}

            {/* Organise and Export Section - Only visible when Saved filter is active */}
            {showBookmarkedOnly && bookmarks.length > 0 && (
                <OrganiseAndExport 
                    apps={bookmarkedApps} 
                    onReorder={reorderBookmarks} 
                />
            )}
            
            {modalImage && (
                <ScreenshotModal 
                    src={modalImage.src} 
                    alt={modalImage.alt} 
                    onClose={handleCloseModal} 
                />
            )}
        </section>
    );
};

export default EduappsGallery;
