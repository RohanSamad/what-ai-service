'use client';

import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem('theme');

        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    if (!mounted) {
        return (
            <button className="p-2 rounded-full bg-white/10 opacity-0">
                <FiSun className="w-5 h-5" />
            </button>
        ); // Avoid hydration mismatch
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass-button text-steel-gray dark:text-glowing-aqua transition-transform hover:scale-110 active:scale-95"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <FiSun className="w-5 h-5" />
            ) : (
                <FiMoon className="w-5 h-5" />
            )}
        </button>
    );
}
