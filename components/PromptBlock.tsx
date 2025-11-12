import React, { useState } from 'react';
import { ClipboardDocumentIcon, CheckIcon } from './Icons';

const PromptBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isCopied, setIsCopied] = useState(false);
    // Ensure children are converted to a plain string for copying
    const textToCopy = React.Children.toArray(children).join('');

    const handleCopy = async () => {
        if (!navigator.clipboard) {
            // Clipboard API not available
            return;
        }
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="relative my-6 not-prose">
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 pr-16 rounded-lg overflow-x-auto text-left">
                <code className="text-cyan-700 dark:text-cyan-300 font-mono text-sm whitespace-pre-wrap">
                    {children}
                </code>
            </pre>
            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors"
                aria-label="Copy prompt to clipboard"
            >
                {isCopied ? (
                    <CheckIcon className="text-green-500 h-5 w-5" />
                ) : (
                    <ClipboardDocumentIcon className="text-gray-600 dark:text-gray-300 h-5 w-5" />
                )}
            </button>
        </div>
    );
};

export default PromptBlock;
