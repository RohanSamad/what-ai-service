'use client';

import { useEffect, useRef } from 'react';
import CTAButton from '@/components/shared/CTAButton';
import Link from 'next/link';
import { FiUsers, FiFileText, FiMessageCircle, FiArrowLeft, FiMail } from 'react-icons/fi';

export default function HRAssistant() {
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

  const features = [
    {
      icon: <FiUsers className="text-2xl" />,
      title: 'Instant Screening',
      description: 'Automatically filter candidates and schedule interviews with top talent.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: <FiFileText className="text-2xl" />,
      title: 'Paperwork Auto-Pilot',
      description: 'Send, track, and file onboarding documents without lifting a finger.',
      gradient: 'from-pink-600 to-blue-600',
    },
    {
      icon: <FiMessageCircle className="text-2xl" />,
      title: '24/7 Employee Support',
      description: 'Answer 90% of internal queries about benefits and policy instantly.',
      gradient: 'from-blue-600 to-cyan-600',
    },
  ];

  return (
    <div
      ref={pageRef}
      className="relative min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950 pt-32 pb-24 overflow-hidden"
    >
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hr-hexagons"
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
          <rect width="100%" height="100%" fill="url(#hr-hexagons)" />
        </svg>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Back Button */}
        <Link
          href="/"
          className="animate-on-scroll inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-12 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <div className="text-center">
          {/* Coming Soon Badge */}
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-medium text-purple-300 tracking-wider">
              COMING SOON
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-on-scroll text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">The Future of </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              HR Operations
            </span>
          </h1>

          {/* Description */}
          <p className="animate-on-scroll text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Imagine an HR department that answers employee questions instantly,
            24/7, and handles the repetitive onboarding paperwork for you.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all group"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="animate-on-scroll grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-purple-500/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                90%
              </div>
              <div className="text-sm text-slate-400">Queries Automated</div>
            </div>
            <div className="p-6 rounded-xl bg-slate-900/50 border border-purple-500/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm text-slate-400">Always Available</div>
            </div>
            <div className="p-6 rounded-xl bg-slate-900/50 border border-purple-500/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                80%
              </div>
              <div className="text-sm text-slate-400">Time Saved</div>
            </div>
          </div>

          {/* Waitlist CTA */}
          <div className="animate-on-scroll p-10 rounded-2xl bg-gradient-to-br from-purple-950/50 via-pink-950/30 to-blue-950/50 backdrop-blur-sm border border-purple-500/30 max-w-2xl mx-auto shadow-2xl shadow-purple-500/10">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-purple-500/50">
              <FiMail className="text-2xl" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-3">
              Get Early Access
            </h3>
            <p className="text-slate-300 mb-8 text-lg">
              Be the first to know when the HR Assistant launches. Join our
              exclusive waitlist.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <CTAButton
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <span className="relative z-10">Join the Waitlist</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </CTAButton>
              </Link>
              <Link href="/">
                <CTAButton
                  variant="secondary"
                  size="lg"
                  className="border-purple-500/30 hover:border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                >
                  Learn More
                </CTAButton>
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <p className="animate-on-scroll text-sm text-slate-500 mt-8">
            Expected launch: Q2 2026 • Limited early access available
          </p>
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