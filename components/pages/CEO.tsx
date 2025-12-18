'use client';

import { useEffect, useRef } from 'react';
import CTAButton from '@/components/shared/CTAButton';
import Link from 'next/link';
import { FiArrowLeft, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export default function CEOPage() {
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
              id="ceo-hexagons"
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
          <rect width="100%" height="100%" fill="url(#ceo-hexagons)" />
        </svg>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Back Button */}
        <Link
          href="/"
          className="animate-on-scroll inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-12 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-medium text-purple-300">
              CEO&apos;s Vision
            </span>
          </div>

          <h1 className="animate-on-scroll text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Built for the </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Builders
            </span>
          </h1>

          <p className="animate-on-scroll text-xl md:text-2xl text-slate-300 leading-relaxed">
            Why we started What AI Services and where we&apos;re going.
          </p>
        </header>

        {/* Article Content */}
        <article className="space-y-8">
          {/* Lead Paragraph */}
          <p className="animate-on-scroll text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
            The modern professional is overwhelmed. We have more tools than
            ever, yet less time. The promise of technology was supposed to be
            liberation, but for many, it&apos;s become a second job of managing
            notifications, calendars, and dashboards.
          </p>

          {/* Divider */}
          <div className="animate-on-scroll h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full my-12" />

          {/* Section 1 */}
          <section className="space-y-6">
            <h2 className="animate-on-scroll text-3xl font-bold text-white">
              The Efficiency Paradox
            </h2>

            <p className="animate-on-scroll text-lg text-slate-300 leading-relaxed">
              I founded What AI Services with a simple premise:{' '}
              <strong className="text-white">
                Human intelligence is too valuable to be spent on admin.
              </strong>
            </p>

            <p className="animate-on-scroll text-lg text-slate-300 leading-relaxed">
              Every hour a founder spends scheduling a meeting is an hour not
              spent on strategy. Every hour a recruiter spends screening spam
              calls is an hour not spent finding talent. We are building the
              infrastructure to give that time back.
            </p>
          </section>

          {/* Mission Card */}
          <div className="animate-on-scroll my-12 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-purple-950/50 via-pink-950/30 to-blue-950/50 backdrop-blur-sm border border-purple-500/30 shadow-2xl shadow-purple-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed italic border-l-4 border-purple-500 pl-6">
              &quot;To democratize executive-level support for every professional,
              making 24/7 productivity accessible to everyone, not just the
              Fortune 500.&quot;
            </blockquote>
          </div>

          {/* Section 2 */}
          <section className="space-y-6">
            <h2 className="animate-on-scroll text-3xl font-bold text-white">
              Why AI? Why Now?
            </h2>

            <p className="animate-on-scroll text-lg text-slate-300 leading-relaxed">
              Until recently, having a truly capable assistant meant a
              significant salary overhead. It was a luxury. Large Language
              Models (LLMs) have changed the economic equation. We can now offer
              24/7, consistent, intelligent support for a fraction of the cost
              of a traditional hire.
            </p>

            <p className="animate-on-scroll text-lg text-slate-300 leading-relaxed">
              This isn&apos;t about replacing humans. It&apos;s about empowering them.
              When you entrust the tactical work to AI, you free yourself to do
              the strategic work that only you can do.
            </p>
          </section>

          {/* Stats Section */}
          <div className="animate-on-scroll grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="text-center p-6 rounded-xl bg-slate-900/50 border border-purple-500/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-sm text-slate-400">Cost Reduction</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-slate-900/50 border border-purple-500/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm text-slate-400">Always Available</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-slate-900/50 border border-purple-500/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                10x
              </div>
              <div className="text-sm text-slate-400">Productivity Boost</div>
            </div>
          </div>

          {/* Author Info */}
          <div className="animate-on-scroll flex items-start gap-6 p-8 rounded-2xl bg-slate-900/50 border border-purple-500/20 my-12">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-2xl shrink-0">
              CEO
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">
                Jeremy Mills
              </h3>
              <p className="text-purple-400 mb-3">CEO & Founder</p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-purple-600 border border-purple-500/30 hover:border-purple-500 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="text-sm" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-purple-600 border border-purple-500/30 hover:border-purple-500 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  aria-label="Twitter"
                >
                  <FiTwitter className="text-sm" />
                </a>
                <a
                  href="mailto:founder@whataiservices.com"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-purple-600 border border-purple-500/30 hover:border-purple-500 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  aria-label="Email"
                >
                  <FiMail className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-on-scroll text-center pt-12 border-t border-purple-500/20 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Ready to reclaim your time?
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Join hundreds of professionals who have already made the switch to
              AI-powered productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo">
                <CTAButton
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <span className="relative z-10">Book a Demo</span>
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
        </article>
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