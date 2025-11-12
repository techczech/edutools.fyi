import React from 'react';
import { EduApp, EduAppCategory } from '../types';
import { LinkIcon } from './Icons';

interface EduAppCardProps {
    app: EduApp;
    onToolClick: (toolName: string) => void;
}

const categoryColors: Record<EduAppCategory, string> = {
    'content-browser': 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300',
    'simulation': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
    'productivity': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300',
    'llm-powered-app': 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300',
};

const EduAppCard: React.FC<EduAppCardProps> = ({ app, onToolClick }) => {
    return (
        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{app.name}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize flex-shrink-0 ${categoryColors[app.category]}`}>
                        {app.category.replace(/-/g, ' ')}
                    </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm italic">"{app.tagline}"</p>
                
                <div className="mt-4 space-y-4 text-sm text-gray-700 dark:text-gray-300">
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
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 rounded-b-lg flex justify-between items-center">
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