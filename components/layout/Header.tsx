'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import clsx from 'clsx';
import Image from 'next/image';

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'mt-4 mx-4 md:mx-10' : 'mt-0 mx-0'
      )}
    >
      <div
        className={clsx(
          'transition-all duration-300 backdrop-blur-md',
          isScrolled
            ? 'bg-slate-900/80 border border-purple-500/30 rounded-2xl shadow-xl shadow-purple-500/10  overflow-hidden'
            : 'bg-slate-950/80 border-b border-purple-500/20'
        )}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center ">
            <Image
              src="/log.png"
              alt="What AI Logo"
              width={40}
              height={40}
              className=""
            />
            <span className="ml-3 text-xl font-bold text-white">What AI Service</span>  
            
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm font-medium transition-all relative group',
                  pathname === link.href
                    ? 'text-purple-400'
                    : 'text-white hover:text-purple-400'
                )}
              >
                {link.name}
                {/* Active Indicator */}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                )}
                {/* Hover Indicator */}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}

            {/* Divider */}
            <div className="w-px h-6 bg-purple-500/30" />


            {/* CTA Button */}
            <Link
              href="/demo"
              className="group relative px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700  font-semibold text-sm shadow-lg shadow-purple-500/30 transition-all overflow-hidden"
            >
              <span className="relative z-10 text-white ">Get Started</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/50 border border-purple-500/30 hover:border-purple-500/50 text-white transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden  border-t border-purple-500/20 bg-slate-900/95 backdrop-blur-md">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={clsx(
                    'text-lg font-medium py-2 px-4 rounded-lg transition-all',
                    pathname === link.href
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-slate-300 hover:text-purple-400 hover:bg-slate-800/50'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg mt-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}