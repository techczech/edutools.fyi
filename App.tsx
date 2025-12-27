
import React, { useState, useEffect } from 'react';
import Content from './components/Content';
import ChatBot from './components/ChatBot';
import ThemeToggle from './components/ThemeToggle';
import VibecodingToolsGallery from './components/EdutoolsGallery';
import EduappsGallery from './components/EduappsGallery';
import ExploreVibecoding from './components/ExploreVibecoding';
import About from './components/About';
import { BookOpenIcon, GridIcon, SparklesIcon, BotIcon, CompassIcon, InfoIcon } from './components/Icons';

type View = 'content' | 'tools' | 'apps' | 'chat' | 'explore' | 'about';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('content');
  const [initialToolSearch, setInitialToolSearch] = useState('');
  const [initialAppSearch, setInitialAppSearch] = useState('');

  // Handle deep linking on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && (hash.startsWith('#level-') || hash === '#intro')) {
      setActiveView('explore');
    }
  }, []);

  const handleToolLinkClick = (toolName: string) => {
    setInitialToolSearch(toolName);
    setActiveView('tools');
  };

  const handleAppLinkClick = (appName: string) => {
    setInitialAppSearch(appName);
    setActiveView('apps');
  };

  const handleToolsTabClick = () => {
    // When the user clicks the tab directly, clear any initial search.
    setInitialToolSearch('');
    setActiveView('tools');
  };

  const handleAppsTabClick = () => {
      setInitialAppSearch('');
      setActiveView('apps');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <header className="relative text-center mb-12">
          <div className="absolute top-0 right-0">
            <ThemeToggle />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            Vibecoding Edutools: Explaining Concepts with Apps
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A guide to explaining difficult concepts with AI-powered apps.
          </p>
        </header>
        
        <main>
          <div className="mb-8">
            <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
              <TabButton
                label="Home"
                icon={<BookOpenIcon />}
                isActive={activeView === 'content'}
                onClick={() => setActiveView('content')}
              />
              <TabButton
                label="Explore Vibecoding"
                icon={<CompassIcon />}
                isActive={activeView === 'explore'}
                onClick={() => setActiveView('explore')}
              />
              <TabButton
                label="Vibecoding Tools"
                icon={<GridIcon />}
                isActive={activeView === 'tools'}
                onClick={handleToolsTabClick}
              />
               <TabButton
                label="Eduapps Gallery"
                icon={<SparklesIcon />}
                isActive={activeView === 'apps'}
                onClick={handleAppsTabClick}
              />
              <TabButton
                label="Ask Gemini"
                icon={<BotIcon />}
                isActive={activeView === 'chat'}
                onClick={() => setActiveView('chat')}
              />
              <TabButton
                label="About"
                icon={<InfoIcon />}
                isActive={activeView === 'about'}
                onClick={() => setActiveView('about')}
              />
            </div>
          </div>
          
          <div className="mt-8">
            {activeView === 'content' && <Content setActiveView={setActiveView} />}
            {activeView === 'explore' && <ExploreVibecoding onToolClick={handleToolLinkClick} onAppClick={handleAppLinkClick} />}
            {activeView === 'tools' && <VibecodingToolsGallery initialSearchTerm={initialToolSearch} />}
            {activeView === 'apps' && <EduappsGallery onToolClick={handleToolLinkClick} initialSearchTerm={initialAppSearch} />}
            {activeView === 'chat' && <ChatBot />}
            {activeView === 'about' && <About />}
          </div>
        </main>
        
        <footer className="text-center mt-16 py-8 border-t border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
            <p>&copy; 2025 Dominik Lukeš. This work is licensed under a <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-500 dark:hover:text-pink-400">Creative Commons Attribution 4.0 International License</a>.</p>
            <p className="mt-2 text-sm">Created with Gemini</p>
        </footer>
      </div>
    </div>
  );
};

interface TabButtonProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, icon, isActive, onClick }) => {
  const activeClasses = 'border-pink-500 text-pink-600 dark:text-pink-400';
  const inactiveClasses = 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600';
  
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-sm transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {icon}
      {label}
    </button>
  );
};

export default App;
