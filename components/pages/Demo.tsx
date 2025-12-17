'use client';

import { useEffect, useRef } from 'react';
import { FiClock, FiCalendar, FiCheck, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function DemoPage() {
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
      className="relative min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950 pt-32 pb-24"
    >
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="demo-hexagons"
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
          <rect width="100%" height="100%" fill="url(#demo-hexagons)" />
        </svg>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Back Button */}
        <Link
          href="/"
          className="animate-on-scroll inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-12 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          

          <h1 className="animate-on-scroll text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">See </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              AI in Action
            </span>
          </h1>

          <p className="animate-on-scroll text-xl text-slate-300 max-w-2xl mx-auto">
            No pressure, just a conversation about your needs and a live demonstration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="animate-on-scroll bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-8">What to Expect</h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-500/50">
                    <FiClock className="text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">15-Minute Intro</div>
                    <p className="text-sm text-slate-400">
                      Quick chat to understand your bottlenecks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-600 to-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-pink-500/50">
                    <FiCalendar className="text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">Live Demo</div>
                    <p className="text-sm text-slate-400">
                      We&apos;ll call the AI live so you can hear it work.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/50">
                    <FiCheck className="text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">Onboarding Plan</div>
                    <p className="text-sm text-slate-400">
                      Simple steps to get you started same-day.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-purple-500/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-slate-400">Free Demo</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">15min</div>
                    <div className="text-xs text-slate-400">Quick Call</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Column */}
          <div className="lg:col-span-2">
            <div className="animate-on-scroll bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
              {/* Calendar Header */}
              <div className="p-6 border-b border-purple-500/20 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-900/50">
                <div className="font-bold text-white text-lg">Select Date & Time</div>
                <div className="text-sm text-slate-400">
                  <span className="text-purple-400"></span> Eastern Time (US & Canada)
                </div>
              </div>

              <div className="flex-grow flex flex-col md:flex-row">
                {/* Date Side */}
                <div className="w-full md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-purple-500/20">
                  <div className="mb-6 text-center">
                    <div className="text-lg font-semibold text-white mb-2">December 2025</div>
                    <div className="text-sm text-slate-400">Select a date</div>
                  </div>

                  <div className="grid grid-cols-7 gap-2 text-center text-xs mb-4">
                    <span className="text-slate-500 font-semibold">S</span>
                    <span className="text-slate-500 font-semibold">M</span>
                    <span className="text-slate-500 font-semibold">T</span>
                    <span className="text-slate-500 font-semibold">W</span>
                    <span className="text-slate-500 font-semibold">T</span>
                    <span className="text-slate-500 font-semibold">F</span>
                    <span className="text-slate-500 font-semibold">S</span>
                  </div>

                  <div className="grid grid-cols-7 gap-2 text-center text-sm">
                    {[...Array(31)].map((_, i) => (
                      <button
                        key={i}
                        className={`
                          w-10 h-10 rounded-lg flex items-center justify-center transition-all
                          ${
                            i === 15
                              ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                              : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                          }
                        `}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Side */}
                <div className="w-full md:w-1/2 p-6 overflow-y-auto max-h-[500px]">
                  <div className="mb-4">
                    <div className="text-white font-semibold mb-1">Monday, Dec 16</div>
                    <div className="text-sm text-slate-400">Available time slots</div>
                  </div>

                  <div className="space-y-3">
                    {[
                      '9:00 AM',
                      '9:30 AM',
                      '10:00 AM',
                      '11:00 AM',
                      '1:00 PM',
                      '2:30 PM',
                      '4:00 PM',
                    ].map((time) => (
                      <button
                        key={time}
                        className="w-full py-4 rounded-lg border-2 border-purple-500/30 bg-slate-800/50 text-purple-400 font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-500 mt-4">
               Secure booking powered by CalendarTech
            </p>
          </div>
        </div>
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