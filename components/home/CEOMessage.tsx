'use client';

import { useEffect, useRef } from 'react';
import CTAButton from '@/components/shared/CTAButton';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CEOMessage() {
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
        <section ref={sectionRef} className="py-24 relative overflow-hidden border-y border-white/5 bg-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="gsap-reveal translate-y-8 text-2xl md:text-3xl font-bold mb-8">A Message from our CEO</h2>

                    <blockquote className="gsap-reveal translate-y-8 text-xl md:text-2xl italic mb-8 leading-relaxed font-light">
                        "We built What AI Services because we saw brilliant people drowning in busy work.
                        AI isn't about replacing humans—it's about removing the friction that stops humans from being great."
                    </blockquote>

                    <div className="gsap-reveal translate-y-8 flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-blue to-deep-space border-2 border-neon-cyan/50 mb-2">
                            {/* Placeholder for CEO Image */}
                        </div>
                        <div>
                            <div className="font-bold text-lg">Founder Name</div>
                            <div className="text-sm text-neon-cyan">CEO, What AI Services</div>
                        </div>

                        <Link href="/ceo" className="mt-6 text-neon-cyan hover:text-glowing-aqua transition-colors underline underline-offset-4">
                            Read full vision
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
