'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import clsx from 'clsx';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'CEO', href: '/ceo' },
    { name: 'Book a Demo', href: '/demo' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-deep-space/80 backdrop-blur-md shadow-lg py-4',
                        
            )}
        >
            
            <div 
                    className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-cyber-blue flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-neon-cyan/50 transition-all">
                        AI
                    </div>
                    <span className="font-bold text-xl tracking-tight text-deep-space dark:text-white">
                        What AI Services
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                'text-sm font-medium transition-colors hover:text-neon-cyan',
                                pathname === link.href
                                    ? 'text-neon-cyan font-semibold'
                                    : 'text-steel-gray dark:text-gray-300'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="border-l border-gray-300 dark:border-gray-700 h-6 mx-2" />
                    <ThemeToggle />
                    <Link
                        href="/demo"
                        className="px-5 py-2.5 rounded-full bg-deep-space dark:bg-white text-white dark:text-deep-space font-semibold text-sm hover:shadow-lg hover:shadow-neon-cyan/30 transition-all transform hover:-translate-y-0.5"
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-deep-space dark:text-white p-2"
                    >
                        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-deep-space border-b border-gray-200 dark:border-gray-800 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={clsx(
                                'text-lg font-medium py-2',
                                pathname === link.href
                                    ? 'text-neon-cyan'
                                    : 'text-deep-space dark:text-white'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/demo"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full text-center py-3 rounded-xl bg-neon-cyan text-white font-bold shadow-lg"
                    >
                        Book a Demo
                    </Link>
                </div>
            )}
        </header>
    );
}
