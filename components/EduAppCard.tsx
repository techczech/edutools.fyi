
import React from 'react';
import { EduApp, EduAppCategory } from '../types';
import { LinkIcon, BookmarkIcon, BookmarkBorderIcon } from './Icons';

interface EduAppCardProps {
    app: EduApp;
    onToolClick: (toolName: string) => void;
    onImageClick: (src: string, alt: string) => void;
    isBookmarked: boolean;
    onToggleBookmark: (appName: string) => void;
}

export const categoryColors: Record<EduAppCategory, string> = {
    'concept-explorer': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
    'text-analysis': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
    'interactive-guide': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300',
    'creator-tool': 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300',
    'language-learning': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
};

const EduAppCard: React.FC<EduAppCardProps> = ({ app, onToolClick, onImageClick, isBookmarked, onToggleBookmark }) => {
    const screenshotUrl = app.screenshot ? `/screenshots/${app.screenshot}` : '';

    return (
        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
            {app.screenshot && (
                <div 
                    className="relative group cursor-pointer"
                    onClick={() => onImageClick(screenshotUrl, `${app.name} screenshot`)}
                    role="button"
                    aria-label={`View screenshot for ${app.name}`}
                >
                    <img 
                        src={screenshotUrl} 
                        alt={`${app.name} screenshot`} 
                        className="w-full object-cover aspect-video bg-gray-100 dark:bg-gray-700" 
                        // In case of a missing image, this will show a broken image icon but not a jarring alt text box
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold text-lg pointer-events-none">View Screenshot</span>
                    </div>
                </div>
            )}
            <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mr-2 flex-1">{app.name}</h3>
                    <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize flex-shrink-0 ${categoryColors[app.category]}`}>
                            {app.category.replace(/-/g, ' ')}
                        </span>
                        <button
                            onClick={() => onToggleBookmark(app.name)}
                            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
                            title={isBookmarked ? "Remove from saved" : "Save for later"}
                            aria-label={isBookmarked ? "Remove from saved" : "Save for later"}
                        >
                            {isBookmarked ? (
                                <BookmarkIcon className="text-pink-600 dark:text-pink-400" />
                            ) : (
                                <BookmarkBorderIcon className="text-gray-400 dark:text-gray-500 hover:text-pink-600 dark:hover:text-pink-400" />
                            )}
                        </button>
                    </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm italic">"{app.tagline}"</p>
                
                <div className="mt-4 space-y-4 text-sm text-gray-700 dark:text-gray-300 flex-grow">
                    <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">What it does</h4>
                        <p>{app.description}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Key Features</h4>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                            {app.keyFeatures.map((feature, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: feature.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Ideal for</h4>
                        <p>{app.idealFor}</p>
                    </div>
                </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 rounded-b-lg flex justify-between items-center mt-auto">
                <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-semibold text-sm group"
                >
                    Visit App
                    <LinkIcon className="text-base transition-transform group-hover:translate-x-1" />
                </a>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                    Made with: {app.madeWith.map((tool, index) => (
                        <React.Fragment key={tool}>
                            <button 
                                onClick={() => onToolClick(tool)}
                                className="font-semibold text-pink-600 dark:text-pink-400 hover:underline focus:outline-none"
                            >
                                {tool}
                            </button>
                            {index < app.madeWith.length - 1 && ', '}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EduAppCard;