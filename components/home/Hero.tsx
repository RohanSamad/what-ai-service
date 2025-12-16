'use client';

import { useEffect, useRef } from 'react';
import gsap from '@/lib/gsap';
import CTAButton from '@/components/shared/CTAButton';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.to('.gsap-reveal', {
                autoAlpha: 1, // Handles opacity + visibility
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            })
                .fromTo('.hero-orb',
                    { scale: 0.8, opacity: 0 },
                    { scale: 1, opacity: 0.5, duration: 2, ease: 'power2.out' },
                    '-=1.5'
                );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="hero-orb absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[100px] -translate-y-1/2" />
                <div className="hero-orb absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyber-blue/20 rounded-full blur-[100px] translate-y-1/3" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div ref={textRef} className="max-w-4xl mx-auto space-y-8">
                    <div className="gsap-reveal translate-y-8 inline-block px-4 py-1.5 rounded-full glass-card border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan font-medium text-sm tracking-wide">
                        ✨ The Future of Executive Assistance is Here
                    </div>

                    <h1 className="gsap-reveal translate-y-8 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-slate-900 dark:text-white">
                        Work is Changing. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-glowing-aqua">
                            Time is Your New Bottleneck.
                        </span>
                    </h1>

                    <p className="gsap-reveal translate-y-8 text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
                        Stop drowning in admin. Get an AI Executive Assistant that works 24/7, never misses a call, and integrates perfectly with your life.
                    </p>

                    <div className="gsap-reveal translate-y-8 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <CTAButton href="/demo" className="w-full sm:w-auto">
                            Book a Demo
                        </CTAButton>
                        <CTAButton href="#how-it-works" variant="secondary" className="w-full sm:w-auto" icon={false}>
                            See How It Works
                        </CTAButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
