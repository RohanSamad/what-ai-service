'use client';

import { useEffect, useRef } from 'react';
import { FiCheck, FiX, FiTrendingUp, FiTrendingDown, FiDollarSign } from 'react-icons/fi';
import CTAButton from '@/components/shared/CTAButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const traditionalCosts = [
  { label: 'Base Salary', amount: 60000 },
  { label: 'Benefits & Insurance', amount: 15000 },
  { label: 'Training & Onboarding', amount: 5000 },
  { label: 'Office Space & Equipment', amount: 8000 },
  { label: 'Payroll Taxes', amount: 7000 },
];

const traditionalLimits = [
  'Limited to 40 hours/week',
  'Sick days & holidays',
  'Requires supervision',
  'Single-task focus',
  'Human error prone',
];

const aiFeatures = [
  '24/7/365 Availability',
  'Zero sick days',
  'Instant knowledge',
  'Multi-task processing',
  'Perfect accuracy',
];

export default function CostComparison() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Header animation
      gsap.fromTo(
        '.header-reveal',
        { opacity: 0, y: 50 },
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

      // Cost bars animation
      gsap.fromTo(
        '.cost-bar',
        { width: 0 },
        {
          width: '100%',
          duration: 1.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: barsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Traditional items
      gsap.fromTo(
        '.traditional-item',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.traditional-section',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // AI items
      gsap.fromTo(
        '.ai-item',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.ai-section',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Counter animation
      const counter = counterRef.current;
      if (counter) {
        gsap.fromTo(
          counter,
          { textContent: 95000 },
          {
            textContent: 0,
            duration: 2,
            ease: 'power2.inOut',
            snap: { textContent: 1000 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            onUpdate: function () {
              const value = Math.round(Number(counter.textContent));
              counter.textContent = `$${value.toLocaleString()}`;
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const totalTraditional = traditionalCosts.reduce((sum, cost) => sum + cost.amount, 0);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950"
    >
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="cost-hexagons"
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
          <rect width="100%" height="100%" fill="url(#cost-hexagons)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="header-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
            <FiDollarSign className="text-red-400" />
            <span className="text-sm font-medium text-purple-300">Cost Analysis</span>
          </div>

          <h2 className="header-reveal text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Stop Paying for </span>
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Overhead
            </span>
          </h2>

          <p className="header-reveal max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
            Traditional hires come with hidden costs. AI doesn't.
          </p>
        </div>

        {/* Cost Breakdown Bars */}
        <div ref={barsRef} className="max-w-4xl mx-auto mb-20">
          <div className="space-y-4">
            {traditionalCosts.map((cost, index) => {
              const percentage = (cost.amount / totalTraditional) * 100;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300 font-medium">{cost.label}</span>
                    <span className="text-red-400 font-mono font-bold">
                      ${cost.amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="relative h-3 bg-slate-900/50 rounded-full overflow-hidden border border-red-500/20">
                    <div
                      className="cost-bar absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              );
            })}
            
            {/* Total */}
            <div className="pt-4 border-t border-purple-500/20">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-white">Total Annual Cost</span>
                <span className="text-3xl font-bold text-red-400">
                  ${totalTraditional.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Sections */}
        <div className="  flex justify-center ">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Traditional Limitations */}
            <div className="traditional-section space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg border-2 border-red-500/30 flex items-center justify-center">
                  <FiTrendingDown className="text-2xl text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Traditional Hire</h3>
                  <p className="text-sm text-red-400">Limited & Expensive</p>
                </div>
              </div>

              <div className="space-y-4">
                {traditionalLimits.map((limit, index) => (
                  <div
                    key={index}
                    className="traditional-item flex items-start gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full border-2 border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <FiX className="text-red-400" />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-slate-300">{limit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Advantages */}
            <div className="ai-section space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <FiTrendingUp className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AI Assistant</h3>
                  <p className="text-sm text-green-400">Unlimited & Affordable</p>
                </div>
              </div>

              <div className="space-y-4">
                {aiFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="ai-item flex items-start gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheck className="text-white text-sm" />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-white font-medium">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Savings Highlight */}
        <div className="mt-20 text-center">
          <div className="inline-block space-y-4">
            <p className="text-slate-400 text-sm uppercase tracking-wider">You Save</p>
            <div
              ref={counterRef}
              className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
            >
              $95,000
            </div>
            <p className="text-slate-300 text-lg">Every Single Year</p>
            
            <div className="pt-6">
              <CTAButton
                variant="primary"
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Now
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">95%</div>
            <div className="text-sm text-slate-400">Cost Reduction</div>
          </div>
          <div className="w-px h-12 bg-purple-500/20" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-sm text-slate-400">Always Available</div>
          </div>
          <div className="w-px h-12 bg-purple-500/20" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">∞</div>
            <div className="text-sm text-slate-400">Infinite Scale</div>
          </div>
        </div>
      </div>
    </section>
  );
}