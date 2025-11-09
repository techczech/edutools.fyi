import React from 'react';
import { AcademicCapIcon, LightBulbIcon, BeakerIcon, CodeBracketIcon, VideoCameraIcon } from './Icons';
import FourLevelsGraphic from './FourLevelsGraphic';

interface SectionTitleProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ icon, children }) => (
    <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-300 dark:to-pink-400">
      {icon}
      <span>{children}</span>
    </h2>
);

const ExploreVibecoding: React.FC = () => {
    return (
        <article className="prose prose-lg max-w-none prose-a:text-pink-600 hover:prose-a:text-pink-700 dark:prose-a:text-pink-400 dark:hover:prose-a:text-pink-300 prose-code:text-cyan-700 dark:prose-code:text-cyan-300 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:p-1 prose-code:rounded-md prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:p-4 prose-pre:rounded-lg dark:prose-invert">
            
            <SectionTitle icon={<CodeBracketIcon />}>Four Levels of AI Assisted Coding</SectionTitle>
            <div className="not-prose">
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-5xl mx-auto">
                   AI-assisted coding is not a single skill but a spectrum. Understanding these four levels helps you choose the right tool for your educational goals, from simple code generation to building complex, intelligent applications.
                </p>
                <FourLevelsGraphic />
            </div>

            <SectionTitle icon={<AcademicCapIcon />}>What to Learn</SectionTitle>
            <p>You will learn how to make simple applications aided by AI tools such as:</p>
            <pre><code>Write a tool that will analyse the word frequencies in a text and display them in a graph.</code></pre>
            <p>You will learn it at four levels, from simple HTML files to complex AI-powered apps.</p>

            <SectionTitle icon={<LightBulbIcon />}>What to Do</SectionTitle>
            <p>Try making a simple app using various tools. Here are some ideas:</p>
            <pre><code>Make a calculator that will convert all numbers into words in English and in French.</code></pre>
            <pre><code>Make a simple app for tracking tasks.</code></pre>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Task 1: Ask a chatbot to generate code as HTML file</h3>
            <p>Ask any chatbot to write the code. Include "Code I can run in my browser in a single file." as part of your prompt. Copy the code into a text file, save with a .html extension, and open in your browser.</p>
            <p><strong>Tools:</strong> ChatGPT, Claude, Gemini, Qwen Chat.</p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Task 2: Use a chatbot with Canvas to write an application</h3>
            <p>Go to a chatbot with an Artifact or Canvas feature and describe the application.</p>
            <p><strong>Tools:</strong> Claude (Artifacts), Gemini (Canvas), Qwen Chat (Artifacts).</p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Task 3: Use an agentic app builder</h3>
            <p>Go to an agentic builder tool, describe the application, and use the deployment feature to make it live.</p>
            <p><strong>Tools:</strong> Lovable, DeepSite. Others: Replit, V0, Bolt.</p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Task 4: Deploying an AI-powered app</h3>
            <p>Create an app powered by a Large Language Model by thinking about features only an LLM could provide, like answering questions, and setting up a server and API access.</p>
            <p><strong>Tools:</strong> Google AI Studio is the best way to get started for free at <a href="http://ai.dev" target="_blank" rel="noopener noreferrer">ai.dev</a>.</p>

            <SectionTitle icon={<BeakerIcon />}>Tools Used</SectionTitle>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Google AI Studio:</strong> Build and deploy simple AI-powered applications and get a free API key.</li>
                <li><strong>Google Colab:</strong> An online programming notebook for experiments with code.</li>
                <li><strong>OpenRouter:</strong> A source for free or paid API keys to various LLMs.</li>
                <li><strong>Dify.ai:</strong> A tool for building more complex orchestrations.</li>
            </ul>

            <SectionTitle icon={<CodeBracketIcon />}>Example Apps to Explore</SectionTitle>
            <p>Here are some examples of what can be built:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Content browsers and study guides:</strong> Check out examples from Gemini with Canvas and Lovable.</li>
                <li><strong>Interactive materials and simulations:</strong> Like an E=mc² energy simulator.</li>
                <li><strong>Traditional personal productivity apps:</strong> Like a readability tool or a writing tracker.</li>
                <li><strong>LLM-powered apps:</strong> Explore apps built with Gemini, Canvas, and Google AI Studio that leverage the semantic power of LLMs.</li>
            </ul>
             <p className="mt-4">
                For a list of links, ask the chatbot! For example: "Can you give me the links to the Gemini with Canvas study guides?"
            </p>

            <SectionTitle icon={<VideoCameraIcon />}>Learn More about AI Engineering</SectionTitle>
            <p>This is only the starting point. Watch the video introducing the concept of AI engineering and explore expert talks to deepen your knowledge.</p>
             <p>
                <a href="https://youtu.be/PSWUr5E_OKY?si=k0129mDvAu058m7o" target="_blank" rel="noopener noreferrer">Intro to AI Engineering</a> | <a href="https://www.youtube.com/@aiDotEngineer" target="_blank" rel="noopener noreferrer">AI Engineer YouTube Channel</a>
             </p>
        </article>
    );
};

export default ExploreVibecoding;