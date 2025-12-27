
import { useState, useEffect } from 'react';

export const useBookmarks = () => {
    const [bookmarks, setBookmarks] = useState<string[]>(() => {
        if (typeof window === 'undefined') return [];
        try {
            const saved = localStorage.getItem('vibecoding_bookmarks');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error("Failed to parse bookmarks:", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('vibecoding_bookmarks', JSON.stringify(bookmarks));
        } catch (error) {
            console.error("Failed to save bookmarks:", error);
        }
    }, [bookmarks]);

    const toggleBookmark = (appName: string) => {
        setBookmarks(prev => {
            if (prev.includes(appName)) {
                return prev.filter(name => name !== appName);
            } else {
                return [...prev, appName];
            }
        });
    };

    const reorderBookmarks = (newOrder: string[]) => {
        setBookmarks(newOrder);
    };

    const isBookmarked = (appName: string) => bookmarks.includes(appName);

    return { bookmarks, toggleBookmark, isBookmarked, reorderBookmarks };
};
