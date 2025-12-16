'use client';

import { useEffect, useRef } from 'react';
import GlassCard from '@/components/shared/GlassCard';
import { FiCheck, FiX } from 'react-icons/fi';
import CTAButton from '@/components/shared/CTAButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CostComparison() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to('.gsap-reveal', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                },
                autoAlpha: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-blue/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="gsap-reveal translate-y-8 text-3xl md:text-4xl">Why Overpay for Overhead?</h2>
                    <p className="gsap-reveal translate-y-8 max-w-2xl mx-auto font-medium text-lg text-[var(--muted-text)]">
                        Compare the true cost of a traditional hire versus the efficiency of What AI Services.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Traditional Hire */}
                    <GlassCard animate={false} className="gsap-reveal translate-y-8 border-red-500/20 opacity-90 hover:grayscale-0 transition-all bg-white/40 dark:bg-white/5">
                        <h3 className="text-2xl font-bold mb-2">Traditional Hire</h3>
                        <div className="text-4xl font-bold mb-6 text-[var(--muted-text)] line-through decoration-red-500 decoration-2">
                            $60,000<span className="text-lg font-normal opacity-60">/yr</span>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-[var(--muted-text)]">
                                <FiX className="text-red-500 shrink-0" /> Limited to 40 hours/week
                            </li>
                            <li className="flex items-center gap-3 text-[var(--muted-text)]">
                                <FiX className="text-red-500 shrink-0" /> Sick days & holidays
                            </li>
                            <li className="flex items-center gap-3 text-[var(--muted-text)]">
                                <FiX className="text-red-500 shrink-0" /> Training required
                            </li>
                            <li className="flex items-center gap-3 text-[var(--muted-text)]">
                                <FiX className="text-red-500 shrink-0" /> Health insurance & benefits
                            </li>
                        </ul>
                    </GlassCard>

                    {/* AI Solution */}
                    <GlassCard animate={false} className="gsap-reveal translate-y-8 border-neon-cyan/50 bg-gradient-to-br from-neon-cyan/20 to-transparent relative overflow-hidden transform md:scale-105 shadow-2xl shadow-neon-cyan/10">
                        <div className="absolute top-0 right-0 bg-neon-cyan text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                            RECOMMENDED
                        </div>

                        <h3 className="text-2xl font-bold mb-2">AI Executive Assistant</h3>
                        <div className="text-4xl font-bold mb-6 text-neon-cyan">
                            Fraction of the cost
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 font-medium">
                                <FiCheck className="text-neon-cyan shrink-0" /> 24/7/365 Availability
                            </li>
                            <li className="flex items-center gap-3 font-medium">
                                <FiCheck className="text-neon-cyan shrink-0" /> Zero sick days
                            </li>
                            <li className="flex items-center gap-3 font-medium">
                                <FiCheck className="text-neon-cyan shrink-0" /> Instant knowledge
                            </li>
                            <li className="flex items-center gap-3 font-medium">
                                <FiCheck className="text-neon-cyan shrink-0" /> No overhead costs
                            </li>
                        </ul>

                        <CTAButton href="/demo" className="w-full">
                            Get Started Now
                        </CTAButton>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
