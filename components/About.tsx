import React from 'react';
import { InfoIcon, CloudIcon, SparklesIcon, CodeBracketIcon, BotIcon, DocumentTextIcon } from './Icons';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 animate-fade-in">
      {/* Header Section */}
      <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
            <InfoIcon className="text-pink-600 text-4xl" />
            About This Project
        </h2>
        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4 text-lg">
          <p>
            This website is a living demonstration of the very concept it teaches: <strong>Vibecoding</strong>.
            It explores how educators can explain difficult concepts using apps, and it was built entirely through an AI-assisted iterative process.
          </p>
          <div className="flex items-start gap-3">
             <CloudIcon className="text-blue-500 text-2xl mt-1 shrink-0" />
             <p className="leading-relaxed">
                 The entire application is built in <strong>Google AI Studio</strong> and hosted on <strong>Google Cloud Run</strong>.
                 Remarkably, this robust infrastructure is utilized completely for free, leveraging the capabilities of modern AI development tools.
             </p>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md flex flex-col">
             <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <SparklesIcon className="text-purple-500" />
                The Building Process
             </h3>
             <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The project began as a simple experiment to convert existing lecture content and presentations into a modern web format.
             </p>
             <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I asked <strong>Google AI Studio</strong> to build the site, and from there, we engaged in a "long process of iteration"—adding features like the <em>Ask Gemini</em> chatbot and refining the design, all through natural language prompts.
             </p>
             
             {/* New Dictation Note */}
             <div className="mt-auto bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg text-sm border-t border-gray-100 dark:border-gray-700">
                 <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2 mb-2">
                    <DocumentTextIcon className="text-gray-500" />
                    Note on this About Page
                 </h4>
                 <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
                    This text is based on dictated notes (using MacWhisper and the open Parakeet speech recognition model) by me, Dominik Lukeš, but drafted entirely by Gemini 3 Pro in Google AI Studio.
                 </p>
             </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
             <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <BotIcon className="text-pink-500" />
                AI Agents at Work
             </h3>
             <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                <li className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <strong className="block text-gray-900 dark:text-white mb-1">Eduapps Gallery</strong>
                    Created using an agentic workflow. I provided the <strong>ChatGPT Atlas browser in agent mode</strong> with a list of app links and instructed it to "look at each website and write a description." The results were so accurate they required only slight edits.
                </li>
                <li className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <strong className="block text-gray-900 dark:text-white mb-1">Vibecoding Tools</strong>
                    I commissioned a "research competition" between Gemini, Claude, and ChatGPT. Claude produced the best descriptions for the tools. I then fed that data back into Google AI Studio to generate the interactive gallery you see today.
                </li>
             </ul>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
         <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
            <CodeBracketIcon className="text-gray-700 dark:text-gray-300" />
            Architecture & Tech Stack
         </h3>
         <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg border-b border-gray-200 dark:border-gray-700 pb-2">Frontend Framework</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>React 19 (via AI Studio CDN)</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS for styling</li>
                    <li>Vite for build tooling</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg border-b border-gray-200 dark:border-gray-700 pb-2">AI Integration</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Google GenAI SDK (@google/genai)</li>
                    <li>Gemini 2.5 Flash Model (Chatbot)</li>
                    <li>System-prompted context awareness</li>
                </ul>
            </div>
         </div>
      </section>

      {/* Change Log Section */}
      <section className="border-t border-gray-200 dark:border-gray-700 pt-10">
        <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Change Log</h3>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent dark:before:via-gray-700">
            
            <div className="relative flex items-start group">
                <div className="absolute left-0 ml-5 -translate-x-1/2 md:hidden w-3 h-3 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="flex-1 md:w-1/2 md:pr-10 md:text-right">
                   <h4 className="font-bold text-gray-900 dark:text-white text-lg">Current Status</h4>
                   <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-mono">Continuous Integration</p>
                   <p className="text-gray-600 dark:text-gray-400">
                        New features and content are being added regularly simply by asking Google AI Studio to implement them.
                    </p>
                </div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-sm"></div>
                <div className="hidden md:block flex-1 md:w-1/2 md:pl-10"></div>
            </div>

            <div className="relative flex items-start group">
                 <div className="hidden md:block flex-1 md:w-1/2 md:pr-10"></div>
                 <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-white dark:border-gray-900 shadow-sm"></div>
                 <div className="absolute left-0 ml-5 -translate-x-1/2 md:hidden w-3 h-3 bg-pink-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                 <div className="flex-1 md:w-1/2 md:pl-10 text-left">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Galleries & Research</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-mono">v1.2</p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Added <em>Eduapps Gallery</em> using agentic web browsing for content generation.
                        Added <em>Vibecoding Tools</em> based on comparative research by AI models (Claude, Gemini, ChatGPT).
                    </p>
                 </div>
            </div>

            <div className="relative flex items-start group">
                <div className="absolute left-0 ml-5 -translate-x-1/2 md:hidden w-3 h-3 bg-pink-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="flex-1 md:w-1/2 md:pr-10 md:text-right">
                   <h4 className="font-bold text-gray-900 dark:text-white text-lg">Ask Gemini</h4>
                   <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-mono">v1.1</p>
                   <p className="text-gray-600 dark:text-gray-400">
                        Integrated the Ask Gemini chatbot feature, grounded in the specific context of this workshop.
                    </p>
                </div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-white dark:border-gray-900 shadow-sm"></div>
                <div className="hidden md:block flex-1 md:w-1/2 md:pl-10"></div>
            </div>

            <div className="relative flex items-start group">
                 <div className="hidden md:block flex-1 md:w-1/2 md:pr-10"></div>
                 <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-white dark:border-gray-900 shadow-sm"></div>
                 <div className="absolute left-0 ml-5 -translate-x-1/2 md:hidden w-3 h-3 bg-gray-400 rounded-full border-4 border-white dark:border-gray-900"></div>
                 <div className="flex-1 md:w-1/2 md:pl-10 text-left">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Initial Release</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-mono">v1.0</p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Conversion of lecture materials and presentations into a responsive web application by Google AI Studio.
                    </p>
                 </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;