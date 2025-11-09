import React from 'react';

interface NavBoxProps {
    title: string;
    description: string;
    // FIX: Updated the 'icon' prop type to be more specific. React.cloneElement requires a more specific type than React.ReactElement to pass props like className. By specifying that the element's props can include a className, we resolve the TypeScript error.
    icon: React.ReactElement<{ className?: string }>;
    onClick: () => void;
}

const NavBox: React.FC<NavBoxProps> = ({ title, description, icon, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className="group cursor-pointer bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col p-6 text-center items-center"
        >
            <div className="text-pink-500 dark:text-pink-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {React.cloneElement(icon, { className: "text-5xl" })}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">{description}</p>
            <span className="mt-4 text-pink-600 dark:text-pink-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Go to section &rarr;
            </span>
        </div>
    );
};

export default NavBox;