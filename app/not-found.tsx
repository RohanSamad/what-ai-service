'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import CTAButton from '@/components/shared/CTAButton';
import { FiHome, FiArrowLeft, FiSearch, FiAlertCircle } from 'react-icons/fi';

export default function NotFound() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 150);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div
      ref={pageRef}
      className="relative min-h-screen bg-gradient-to-b pt-10 from-slate-950 via-purple-950/10 to-slate-950 flex items-center justify-center overflow-hidden"
    >
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="notfound-hexagons"
              x="0"
              y="0"
              width="60"
              height="52"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="30,0 60,17.3 60,52 30,69.3 0,52 0,17.3"
                fill="none"
                stroke="rgb(168, 85, 247)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#notfound-hexagons)" />
        </svg>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center py-20">
        {/* 404 Icon */}
        <div className="animate-on-scroll mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-2xl shadow-purple-500/50 mb-8">
            <FiAlertCircle className="text-5xl text-white" />
          </div>
        </div>

        {/* 404 Number */}
        <h1 className="animate-on-scroll text-8xl md:text-9xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        {/* Main Message */}
        <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        <p className="animate-on-scroll text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Oops! The page you&apos;re looking for seems to have wandered off into
          the digital void. Don&apos;t worry, even our AI assistant gets lost
          sometimes.
        </p>

        {/* Quick Links */}
        <div className="animate-on-scroll grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          <Link href="/" className="group">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <FiHome className="text-3xl text-purple-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-white mb-1">Home</div>
              <div className="text-sm text-slate-400">
                Return to homepage
              </div>
            </div>
          </Link>

          <Link href="/demo" className="group">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <FiSearch className="text-3xl text-pink-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-white mb-1">Book Demo</div>
              <div className="text-sm text-slate-400">
                Schedule a demo
              </div>
            </div>
          </Link>

          <Link href="/ceo" className="group">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <FiArrowLeft className="text-3xl text-blue-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-white mb-1">About Us</div>
              <div className="text-sm text-slate-400">
                Learn more
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="animate-on-scroll flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <CTAButton
              variant="primary"
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FiHome />
                Back to Home
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </CTAButton>
          </Link>

          <Link href="/demo">
            <CTAButton
              variant="secondary"
              size="lg"
              className="border-purple-500/30 hover:border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
            >
              Contact Support
            </CTAButton>
          </Link>
        </div>

        {/* Error Code */}
        <p className="animate-on-scroll text-sm text-slate-500 mt-12">
          Error Code: 404 • Page Not Found
        </p>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}