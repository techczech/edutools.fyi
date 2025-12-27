
import React, { useState } from 'react';
import { VibecodingTool, VibecodingToolCategory } from '../types';
import { LinkIcon, SparklesIcon, AcademicCapIcon, CheckIcon, CloseIcon } from './Icons';

interface VibecodingToolCardProps {
    tool: VibecodingTool;
    category?: VibecodingToolCategory;
}

export const toolCategoryColors: Record<string, string> = {
    'canvas-tools': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'agentic-builders': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    'coding-environments': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
    'advanced-tools': 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300',
};

const VibecodingToolCard: React.FC<VibecodingToolCardProps> = ({ tool, category }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Helper to render stars for non-coder rating
    const renderRating = (rating: number) => {
        return (
            <div className="flex items-center gap-0.5" title={`Ease of use: ${rating}/5`}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span 
                        key={star} 
                        className={`text-lg ${star <= rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="p-6 flex-grow">
                {/* Header */}
                <div className="flex justify-between items-start mb-2 gap-4">
                    <div>
                         <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            {tool.name}
                            {tool.pricing.education_offer && (
                                <span className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 text-[0.65rem] px-2 py-0.5 rounded-full uppercase tracking-wide font-bold flex items-center gap-1">
                                    <AcademicCapIcon className="text-sm" /> Edu Offer
                                </span>
                            )}
                        </h3>
                         {category && (
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full inline-block mt-1 ${toolCategoryColors[category.id] || 'text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700'}`}>
                                {category.name}
                            </span>
                        )}
                    </div>
                    {/* Non-coder rating */}
                    <div className="flex flex-col items-end">
                         {renderRating(tool.non_coder_rating)}
                         <span className="text-[10px] text-gray-400 uppercase tracking-wide">Ease of Use</span>
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm leading-relaxed">
                    {tool.description}
                </p>

                {/* Quick Info Grid */}
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    {/* Hosting */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Hosting</p>
                        <div className="flex items-start gap-2">
                            {tool.hosting.built_in ? (
                                <CheckIcon className="text-green-500 flex-shrink-0 mt-0.5" />
                            ) : (
                                <CloseIcon className="text-gray-400 flex-shrink-0 mt-0.5" />
                            )}
                            <span className="text-gray-700 dark:text-gray-300">
                                {tool.hosting.platform || (tool.hosting.built_in ? "Built-in" : "External required")}
                            </span>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Pricing</p>
                         <div className="flex items-start gap-2">
                            <span className={`font-medium ${tool.pricing.free_tier ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'}`}>
                                {tool.pricing.free_tier ? "Free Tier Available" : "Paid Only"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Expanded Details */}
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 text-xs font-semibold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 focus:outline-none"
                >
                    {isExpanded ? "Hide Details" : "Show Pricing & Integration Details"}
                </button>

                {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 space-y-4 text-sm animate-fade-in">
                        
                        {/* Integration Method */}
                        <div>
                             <h4 className="font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1">
                                <SparklesIcon className="text-purple-500 text-base"/> AI Integration
                             </h4>
                             <p className="text-gray-600 dark:text-gray-400 text-xs">
                                {tool.llm_integration_method}
                             </p>
                        </div>

                         {/* Education Offer */}
                        {tool.pricing.education_offer && (
                            <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded border border-pink-100 dark:border-pink-900/30">
                                <h4 className="font-semibold text-pink-800 dark:text-pink-300 mb-1 flex items-center gap-1">
                                    <AcademicCapIcon className="text-base"/> Student/Teacher Offer
                                </h4>
                                <p className="text-pink-700 dark:text-pink-400 text-xs">
                                    {tool.pricing.education_offer}
                                </p>
                            </div>
                        )}

                        {/* Paid Plans */}
                        {tool.pricing.paid_plans.length > 0 && (
                             <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Paid Plans</h4>
                                <ul className="space-y-2">
                                    {tool.pricing.paid_plans.map((plan, idx) => (
                                        <li key={idx} className="flex justify-between items-start text-xs border-b border-gray-100 dark:border-gray-700 pb-1 last:border-0">
                                            <span className="font-medium text-gray-800 dark:text-gray-200">{plan.name}</span>
                                            <div className="text-right">
                                                 <span className="block text-gray-900 dark:text-white font-semibold">{plan.price}</span>
                                                 <span className="block text-[10px] text-gray-500 dark:text-gray-500">{plan.notes}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 rounded-b-lg flex justify-between items-center">
                <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-semibold text-sm group"
                >
                    Visit Website
                    <LinkIcon className="text-base transition-transform group-hover:translate-x-1" />
                </a>
                 {/* Tags (limit to 2-3 to save space) */}
                <div className="flex gap-1.5 flex-wrap justify-end max-w-[60%]">
                    {tool.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded text-[10px]">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VibecodingToolCard;
