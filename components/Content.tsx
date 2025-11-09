import React from 'react';
import NavBox from './NavBox';
import { CompassIcon, GridIcon, SparklesIcon, BotIcon } from './Icons';

interface ContentProps {
    setActiveView: (view: 'content' | 'tools' | 'apps' | 'chat' | 'explore') => void;
}

const Content: React.FC<ContentProps> = ({ setActiveView }) => {
    return (
        <article className="max-w-none">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Why educators and academics should start making apps with vibecoding</h1>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    AI-assisted coding is transforming how we create and learn. This guide explores its immense potential in education, showing how you can build powerful, intuitive apps to explain even the most difficult concepts. It's a journey into a new pedagogy where creation and understanding go hand-in-hand.
                </p>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    This site and many of the apps within were vibecoded by Dominik Lukeš using Google AI Studio.
                </p>
            </div>

            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <NavBox
                    title="Explore Vibecoding"
                    description="Dive into hands-on tasks and activities to start building your own educational apps."
                    icon={<CompassIcon />}
                    onClick={() => setActiveView('explore')}
                />
                 <NavBox
                    title="Vibecoding Tools"
                    description="Discover a curated gallery of tools, from chatbots to agentic builders."
                    icon={<GridIcon />}
                    onClick={() => setActiveView('tools')}
                />
                <NavBox
                    title="Eduapps Gallery"
                    description="See what's possible! Browse a collection of educational apps built with these tools."
                    icon={<SparklesIcon />}
                    onClick={() => setActiveView('apps')}
                />
                <NavBox
                    title="Ask Gemini"
                    description="Have a question? Chat with a Gemini-powered bot trained on all the content from this site."
                    icon={<BotIcon />}
                    onClick={() => setActiveView('chat')}
                />
            </div>
        </article>
    );
};

export default Content;