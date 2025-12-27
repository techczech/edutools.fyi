
import React, { useState } from 'react';
import { VibecodingTask } from '../types';
import { CheckIcon } from './Icons';

interface TaskCardProps {
    task: VibecodingTask;
    id?: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, id }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <div id={id} className={`p-6 rounded-xl border transition-all duration-300 ${isCompleted ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg'}`}>
            <div className="flex justify-between items-start gap-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        {task.title}
                        {isCompleted && <span className="text-xs bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-0.5 rounded-full">Completed</span>}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{task.description}</p>
                    
                    <div className="mb-4">
                        <strong className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Recommended Tools</strong>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {task.tools.map(tool => (
                                <span key={tool} className="text-xs font-medium px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {task.tips && (
                         <div className="bg-yellow-50 dark:bg-yellow-900/10 p-3 rounded-lg border border-yellow-100 dark:border-yellow-900/20 text-sm text-yellow-800 dark:text-yellow-200">
                            <strong>Tip:</strong> {task.tips[0]}
                         </div>
                    )}
                </div>

                <button 
                    onClick={() => setIsCompleted(!isCompleted)}
                    className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 ${isCompleted ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 dark:border-gray-600 text-transparent hover:border-green-500'}`}
                    aria-label={isCompleted ? "Mark task as incomplete" : "Mark task as complete"}
                >
                    <CheckIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
