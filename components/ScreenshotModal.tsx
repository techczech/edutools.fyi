import React, { useEffect } from 'react';
// FIX: Correctly import CloseIcon from the centralized Icons component. The local definition has been removed.
import { CloseIcon } from './Icons';

interface ScreenshotModalProps {
    src: string;
    alt: string;
    onClose: () => void;
}

const ScreenshotModal: React.FC<ScreenshotModalProps> = ({ src, alt, onClose }) => {
    // Effect to handle Escape key press for closing the modal
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              onClose();
           }
        };
        window.addEventListener('keydown', handleEsc);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    // Prevents modal from closing when the image itself is clicked
    const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-8 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
        >
            <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                aria-label="Close image viewer"
            >
                <CloseIcon className="text-4xl" />
            </button>
            <div className="relative">
                <img
                    src={src}
                    alt={alt}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    onClick={handleImageClick}
                />
            </div>
        </div>
    );
};

export default ScreenshotModal;