
import React from 'react';
import { EduApp } from '../types';
import { ArrowUpIcon, ArrowDownIcon, DownloadIcon } from './Icons';

interface OrganiseAndExportProps {
    apps: EduApp[];
    onReorder: (newOrder: string[]) => void;
}

const OrganiseAndExport: React.FC<OrganiseAndExportProps> = ({ apps, onReorder }) => {

    const moveApp = (index: number, direction: 'up' | 'down') => {
        if (
            (direction === 'up' && index === 0) ||
            (direction === 'down' && index === apps.length - 1)
        ) {
            return;
        }

        const newApps = [...apps];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        
        // Swap
        [newApps[index], newApps[targetIndex]] = [newApps[targetIndex], newApps[index]];
        
        // Extract just the names to update the bookmark state
        onReorder(newApps.map(app => app.name));
    };

    const handleExport = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(apps, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "vibecoding_saved_apps.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    if (apps.length === 0) return null;

    return (
        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 border-pink-100 dark:border-pink-900/30">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Organise & Export Saved Apps</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Reorder your collection or download it as a JSON file.
                    </p>
                </div>
                <button
                    onClick={handleExport}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-sm"
                >
                    <DownloadIcon />
                    Export JSON
                </button>
            </div>

            <div className="space-y-2">
                {apps.map((app, index) => (
                    <div 
                        key={app.name}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-pink-800 transition-colors"
                    >
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300">
                            {index + 1}
                        </span>
                        <div className="flex-grow min-w-0">
                            <h4 className="font-semibold text-gray-900 dark:text-white truncate">{app.name}</h4>
                        </div>
                        
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => moveApp(index, 'up')}
                                disabled={index === 0}
                                className="p-1.5 rounded hover:bg-white dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                title="Move up"
                            >
                                <ArrowUpIcon className="text-lg" />
                            </button>
                            <button
                                onClick={() => moveApp(index, 'down')}
                                disabled={index === apps.length - 1}
                                className="p-1.5 rounded hover:bg-white dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                title="Move down"
                            >
                                <ArrowDownIcon className="text-lg" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrganiseAndExport;
