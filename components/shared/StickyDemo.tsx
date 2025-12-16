'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiCalendar } from 'react-icons/fi';

export default function StickyDemo() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <Link
            href="/demo"
            className={`fixed bottom-8 right-8 z-40 flex items-center gap-2 px-6 py-3 rounded-full bg-neon-cyan text-white shadow-lg shadow-neon-cyan/40 transition-all duration-500 transform hover:scale-105 hover:shadow-neon-cyan/60 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
                }`}
        >
            <FiCalendar className="w-5 h-5" />
            <span className="font-bold">Book Demo</span>
        </Link>
    );
}
