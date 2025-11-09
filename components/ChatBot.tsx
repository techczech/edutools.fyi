import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { BotIcon, UserIcon, SendIcon } from './Icons';
import { VIBECODING_CONTEXT } from '../constants';
import { Message } from '../types';

const ChatBot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: 'bot',
            text: "Hello! I'm powered by Gemini. Ask me anything about the content in the Vibecoding workshop or other topics you're curious about."
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const initializeChat = useCallback(() => {
        try {
            if (!process.env.API_KEY) {
                setError("API_KEY environment variable is not set. This application requires an API key to function.");
                console.error("API_KEY not found.");
                return;
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const systemInstruction = `You are a helpful and friendly chatbot for the 'Vibecoding for Educators' website. Your purpose is to answer questions from educators based on the provided guide about using AI to create educational apps. Ground your answers in the following context. Do not make up information. If a question is outside this context, politely state that you are a guide for this specific content. Here is the guide content: ${VIBECODING_CONTEXT}`;
            
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: systemInstruction,
                }
            });
            setError(null);
        } catch (e) {
            console.error("Failed to initialize chat:", e);
            setError("Failed to initialize the chatbot. Please check your API key and network connection.");
        }
    }, []);

    useEffect(() => {
        initializeChat();
    }, [initializeChat]);


    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);

        if (!chatRef.current) {
            setIsLoading(false);
            setError("Chat session is not initialized. Please refresh the page.");
            return;
        }

        try {
            const result = await chatRef.current.sendMessage({ message: input });
            const botMessage: Message = { sender: 'bot', text: result.text };
            setMessages(prev => [...prev, botMessage]);
        } catch (e) {
            console.error("Error sending message to Gemini:", e);
            setError("Sorry, I encountered an error. Please try again.");
            // Re-add the user's message to the input so they don't lose it
            setInput(userMessage.text);
            setMessages(prev => prev.slice(0, -1)); // Remove the user message that was optimistically added
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col max-w-4xl mx-auto min-h-[70vh]">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white">Ask Gemini</h2>
            </div>
            
            {error && (
                <div className="p-4 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 text-center text-sm">
                    <p>{error}</p>
                    {error.includes("API_KEY") && <p className="mt-2">Please ensure the `API_KEY` environment variable is correctly configured.</p>}
                </div>
            )}

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                        {msg.sender === 'bot' && <div className="w-8 h-8 flex-shrink-0 bg-purple-500 rounded-full flex items-center justify-center text-white"><BotIcon /></div>}
                        <div className={`max-w-xs md:max-w-md p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-pink-600 text-white rounded-br-none' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}>
                            <p className="whitespace-pre-wrap">{msg.text}</p>
                        </div>
                        {msg.sender === 'user' && <div className="w-8 h-8 flex-shrink-0 bg-gray-500 dark:bg-gray-600 rounded-full flex items-center justify-center text-white"><UserIcon /></div>}
                    </div>
                ))}
                {isLoading && (
                     <div className="flex items-start gap-3">
                        <div className="w-8 h-8 flex-shrink-0 bg-purple-500 rounded-full flex items-center justify-center text-white"><BotIcon /></div>
                        <div className="max-w-xs md:max-w-md p-3 rounded-2xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none">
                            <div className="flex items-center space-x-1">
                                <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-pulse delay-75"></span>
                                <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-pulse delay-150"></span>
                                <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-pulse delay-300"></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask a question..."
                        className="flex-1 w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full py-2 px-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        disabled={isLoading || !!error}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim() || !!error}
                        className="bg-pink-600 text-white rounded-full p-3 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-pink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-pink-500"
                    >
                        <SendIcon />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatBot;