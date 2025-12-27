
import React from 'react';
import { ClipboardIcon, CanvasIcon, DevicePhoneMobileIcon, CodeWindowIcon } from './Icons';

const levels = [
    {
        icon: <ClipboardIcon />,
        title: 'Snippets',
        whatItCanDo: 'Copy/paste code from chatbot',
        whatYouNeedToKnow: 'Knowledge about what to do with code'
    },
    {
        icon: <CanvasIcon />,
        title: 'Artifacts / Canvas',
        whatItCanDo: 'Chatbot writes code that runs directly',
        whatYouNeedToKnow: 'No knowledge required'
    },
    {
        icon: <DevicePhoneMobileIcon />,
        title: 'Agentic App Builder',
        whatItCanDo: 'AI builds & deploys the application',
        whatYouNeedToKnow: 'Knowledge needs increase with complexity'
    },
    {
        icon: <CodeWindowIcon />,
        title: 'Agentic IDE',
        whatItCanDo: 'Programmer tools write full applications',
        whatYouNeedToKnow: 'Knowledge about running code is needed'
    }
];

interface FourLevelsGraphicProps {
    onLevelClick?: (levelIndex: number) => void;
}

const FourLevelsGraphic: React.FC<FourLevelsGraphicProps> = ({ onLevelClick }) => {
    return (
        <div className="space-y-4">
            {/* Header for larger screens */}
            <div className="hidden md:grid md:grid-cols-[1fr,1fr,1fr] lg:grid-cols-[2fr,2fr,3fr] gap-6 px-4 py-2 text-left">
                <h3 className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-sm">Level</h3>
                <h3 className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-sm">What it can do</h3>
                <h3 className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-sm">What you need to know</h3>
            </div>
            
            <div className="space-y-4">
                {levels.map((level, index) => (
                    <div 
                        key={level.title} 
                        onClick={() => onLevelClick && onLevelClick(index)}
                        className={`bg-gray-200/50 dark:bg-gray-700/50 p-4 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-[1fr,1fr,1fr] lg:grid-cols-[2fr,2fr,3fr] gap-4 md:gap-6 items-start md:items-center transition-all duration-200 ${onLevelClick ? 'cursor-pointer hover:ring-2 hover:ring-pink-500 hover:bg-gray-200 dark:hover:bg-gray-700' : ''}`}
                    >
                        {/* Column 1: Level */}
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0 text-gray-800 dark:text-gray-200">
                                {level.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                {level.title}
                            </h4>
                        </div>
                        {/* Column 2: What it can do */}
                        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                            {level.whatItCanDo}
                        </p>
                        {/* Column 3: What you need to know */}
                        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                            {level.whatYouNeedToKnow}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FourLevelsGraphic;
