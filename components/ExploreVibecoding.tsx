
import React, { useState, useEffect } from 'react';
import * as Icons from './Icons';
import FourLevelsGraphic from './FourLevelsGraphic';
import PromptBlock from './PromptBlock';
import TaskCard from './TaskCard';
import { exploreIntro, vibecodingLevels } from '../data/explore';
import { GridIcon, SparklesIcon, AcademicCapIcon, ArrowDownIcon, LinkIcon, CheckIcon } from './Icons';

// Helper to resolve icon components dynamically
const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent /> : null;
};

interface ExploreVibecodingProps {
    onToolClick?: (toolName: string) => void;
    onAppClick?: (appName: string) => void;
}

const ExploreVibecoding: React.FC<ExploreVibecodingProps> = ({ onToolClick, onAppClick }) => {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    // Scroll to section on mount if hash is present
    useEffect(() => {
        if (window.location.hash) {
            // Remove the '#' to get the ID
            const id = window.location.hash.substring(1);
            // Delay slightly to ensure DOM is fully rendered
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Add a temporary highlight
                    element.classList.add('ring-2', 'ring-pink-500', 'rounded-xl');
                    setTimeout(() => element.classList.remove('ring-2', 'ring-pink-500', 'rounded-xl'), 2000);
                }
            }, 100);
        }
    }, []);

    const handleShareClick = (id: string) => {
        const url = `${window.location.origin}${window.location.pathname}#${id}`;
        navigator.clipboard.writeText(url).then(() => {
            setCopiedId(id);
            // Update URL without reloading
            window.history.pushState(null, '', `#${id}`);
            setTimeout(() => setCopiedId(null), 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const handleLevelClick = (levelIndex: number) => {
        const targetId = `level-${levelIndex + 1}`;
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            element.classList.add('ring-2', 'ring-pink-500');
            setTimeout(() => element.classList.remove('ring-2', 'ring-pink-500'), 1500);
        }
    };

    return (
        <article className="max-w-none">
            
            {/* Intro Section */}
            <div id="intro" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6 group">
                     <h2 className="text-3xl font-bold flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-300 dark:to-pink-400">
                        {getIcon(exploreIntro.iconName)}
                        <span>{exploreIntro.title}</span>
                    </h2>
                     <button
                        onClick={() => handleShareClick('intro')}
                        className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-pink-500"
                        title="Copy link to this section"
                        aria-label="Copy link to intro section"
                    >
                        {copiedId === 'intro' ? <CheckIcon className="text-green-500 w-5 h-5" /> : <LinkIcon className="w-5 h-5" />}
                    </button>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    {exploreIntro.blocks.map((block, idx) => (
                        <div key={idx}>
                             {block.type === 'text' && typeof block.content === 'string' && (
                                <p className="mb-8">{block.content}</p>
                            )}
                             {block.type === 'component' && block.componentName === 'FourLevelsGraphic' && (
                                <div className="not-prose my-8">
                                    <FourLevelsGraphic onLevelClick={handleLevelClick} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Levels Detail View */}
            <div className="space-y-24">
                {vibecodingLevels.map((level) => {
                    const sectionId = `level-${level.id}`;
                    return (
                        <section key={level.id} id={sectionId} className="scroll-mt-24 border-t border-gray-200 dark:border-gray-700 pt-12">
                            {/* Level Header */}
                            <div className="flex items-start md:items-center gap-4 mb-6 group">
                                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-xl shadow-sm flex-shrink-0">
                                    {React.cloneElement(getIcon(level.iconName) as React.ReactElement<{ className?: string }>, { className: "text-3xl" })}
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{level.title}</h3>
                                        <button
                                            onClick={() => handleShareClick(sectionId)}
                                            className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-pink-500"
                                            title="Copy link to this level"
                                            aria-label={`Copy link to ${level.title}`}
                                        >
                                            {copiedId === sectionId ? <CheckIcon className="text-green-500 w-5 h-5" /> : <LinkIcon className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">{level.summary}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                
                                {/* Left Column: Guide & Knowledge */}
                                <div className="lg:col-span-2 space-y-8">
                                    <div className="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                        <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                                            <ArrowDownIcon /> Guide
                                        </h4>
                                        {level.guide.map((block, i) => (
                                            <div key={i}>
                                                {block.type === 'text' && <p>{block.content}</p>}
                                                {block.type === 'prompt' && <PromptBlock>{block.content}</PromptBlock>}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/20">
                                        <h4 className="text-lg font-bold mb-3 text-blue-800 dark:text-blue-300 flex items-center gap-2">
                                            <AcademicCapIcon className="text-xl" />
                                            Knowledge Required
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {level.knowledgeRequired.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-blue-900 dark:text-blue-200">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-400 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {/* Activities */}
                                    <div>
                                         <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Hands-on Activity</h4>
                                         <div className="grid gap-4">
                                            {level.activities.map(task => (
                                                <TaskCard key={task.id} task={task} id={task.id} />
                                            ))}
                                         </div>
                                    </div>
                                </div>

                                {/* Right Column: Tools & Examples */}
                                <div className="space-y-6">
                                    {/* Tools */}
                                    <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
                                            <GridIcon className="text-lg" /> Recommended Tools
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {level.linkedTools.map(tool => (
                                                <button 
                                                    key={tool}
                                                    onClick={() => onToolClick && onToolClick(tool)}
                                                    className="px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-left"
                                                >
                                                    {tool}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Examples */}
                                    <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
                                            <SparklesIcon className="text-lg" /> Gallery Examples
                                        </h4>
                                        <div className="space-y-3">
                                            {level.linkedApps.length > 0 ? level.linkedApps.map(app => (
                                                <button 
                                                    key={app}
                                                    onClick={() => onAppClick && onAppClick(app)}
                                                    className="block w-full text-left p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md hover:border-pink-300 dark:hover:border-pink-700 transition-all group"
                                                >
                                                    <div className="font-medium text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 text-sm">
                                                        {app}
                                                    </div>
                                                </button>
                                            )) : (
                                                <p className="text-sm text-gray-500 italic">No specific gallery examples yet.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    );
                })}
            </div>
        </article>
    );
};

export default ExploreVibecoding;
