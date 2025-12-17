'use client';

import { useEffect, useRef } from 'react';
import { FiClock, FiSmartphone, FiLayout, FiShield, FiZap, FiUserCheck } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const solutions = [
  {
    icon: <FiClock />,
    title: '24/7 Availability',
    description: 'Your AI never sleeps, calls in sick, or takes a holiday. Always on, always ready.',
    code: 'STATUS: ONLINE',
    terminal: '> system.uptime() → ∞',
  },
  {
    icon: <FiSmartphone />,
    title: 'Phone Handling',
    description: 'Natural voice conversations that sound human. Screens spam. ',
    code: 'VOICE: ACTIVE',
    terminal: '> voice.authenticate() → TRUE',
  },
  {
    icon: <FiLayout />,
    title: 'Calendar Management',
    description: 'Seamlessly manages your schedule, prevents double-booking.',
    code: 'SYNC: ENABLED',
    terminal: '> calendar.sync() → SUCCESS',
  },
  {
    icon: <FiShield />,
    title: 'Private & Secure',
    description: 'Enterprise-grade security ensuring your data and conversations remain strictly confidential.',
    code: 'ENCRYPTION: 256-BIT',
    terminal: '> security.check() → SECURE',
  },
  {
    icon: <FiZap />,
    title: 'Instant Setup',
    description: 'No weeks of training. Your AI is ready to work from Day 1 with your specific knowledge base.',
    code: 'SETUP: INSTANT',
    terminal: '> deploy.time() → 60s',
  },
  {
    icon: <FiUserCheck />,
    title: 'Human-Like Interaction',
    description: 'So natural that most callers won\'t even realize they\'re speaking to an AI assistant.',
    code: 'HUMAN: 98.7%',
    terminal: '> ai.naturalness() → 98.7%',
  },
];

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Header animation
      gsap.fromTo(
        '.header-reveal',
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Items animation
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        const terminal = item.querySelector('.terminal-window');
        const icon = item.querySelector('.solution-icon');
        const content = item.querySelector('.solution-content');
        const statusBar = item.querySelector('.status-bar');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });

        tl.fromTo(
          item,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        )
          .fromTo(
            terminal,
            { scaleY: 0, transformOrigin: 'top' },
            { scaleY: 1, duration: 0.4, ease: 'power2.out' },
            '-=0.3'
          )
          .fromTo(
            statusBar,
            { width: 0 },
            { width: '100%', duration: 0.5, ease: 'power2.inOut' },
            '-=0.2'
          )
          .fromTo(
            icon,
            { scale: 0, rotation: -180 },
            { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' },
            '-=0.4'
          )
          .fromTo(
            content,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' },
            '-=0.3'
          );

        // Glitch effect on hover
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            x: '+=2',
            duration: 0.1,
            yoyo: true,
            repeat: 3,
            ease: 'power1.inOut',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950"
    >
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="header-reveal inline-flex items-center gap-2 px-4 py-2 rounded bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm font-mono text-xs">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400">SYSTEM_ACTIVE</span>
            <span className="text-purple-300">|</span>
            <span className="text-purple-300">FEATURES_LOADED</span>
          </div>

          <h2 className="header-reveal text-4xl md:text-5xl lg:text-6xl font-bold ">
            <span className="text-white">&gt; Your New </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Superpower_
            </span>
          </h2>

          <p className="header-reveal max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
            Everything you expect from a top-tier Executive Assistant, at a
            fraction of the cost and with infinite scalability.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="relative group"
            >
              {/* Terminal Window */}
              <div className="terminal-window relative bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-lg overflow-hidden hover:border-purple-500/50 transition-colors">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 border-b border-purple-500/20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs font-mono text-purple-300">
                    feature_{index + 1}.sh
                  </div>
                </div>

                {/* Status Bar */}
                <div className="status-bar h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />

                {/* Terminal Content */}
                <div className="p-6 space-y-4">
                  {/* Icon */}
                  <div className="solution-icon w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-purple-500/50">
                    {solution.icon}
                  </div>

                  {/* Content */}
                  <div className="solution-content space-y-3">
                    <h3 className="text-xl font-bold text-white font-mono">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  {/* Terminal Output */}
                  <div className="mt-4 pt-4 border-t border-purple-500/20">
                    <div className="font-mono text-xs space-y-1">
                      <div className="text-green-400">{solution.code}</div>
                      <div className="text-purple-300">
                        {solution.terminal}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scan Line Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
                    style={{
                      animation: 'scan 2s linear infinite',
                    }}
                  />
                </div>

                {/* Corner Brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-purple-500/50" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-purple-500/50" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-purple-500/50" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-purple-500/50" />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-lg blur-xl transition-all duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </section>
  );
}