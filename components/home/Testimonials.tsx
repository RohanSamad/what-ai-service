'use client';

import { useEffect, useRef } from 'react';
import GlassCard from '@/components/shared/GlassCard';
import { FiStar } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const testimonials = [
    {
        quote: "I was skeptical about AI, but this service changed everything. It's like having a top-tier executive assistant who never sleeps.",
        author: "Sarah J.",
        role: "Startup Founder",
        stars: 5
    },
    {
        quote: "The response time is instant. My calendar is messy, and the AI organizes it perfectly. It's worth every penny.",
        author: "Michael T.",
        role: "VP of Sales",
        stars: 5
    },
    {
        quote: "We replaced our traditional call center with What AI Services. Customer satisfaction went up, and costs went down by 70%.",
        author: "David R.",
        role: "Operations Director",
        stars: 5
    }
];

export default function Testimonials() {
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
        <section ref={sectionRef} className="py-24 bg-white/5 dark:bg-black/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="gsap-reveal translate-y-8 text-3xl md:text-4xl">Trusted by Innovators</h2>
                    <p className="gsap-reveal translate-y-8 max-w-2xl mx-auto text-[var(--muted-text)]">
                        See what others are saying about switching to AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <GlassCard key={index} animate={false} className="gsap-reveal translate-y-8 flex flex-col">
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(t.stars)].map((_, i) => (
                                    <FiStar key={i} fill="currentColor" />
                                ))}
                            </div>
                            <p className="italic text-[var(--muted-text)] mb-6 flex-grow">"{t.quote}"</p>
                            <div>
                                <p className="font-bold">{t.author}</p>
                                <p className="text-sm text-[var(--muted-text)] opacity-80">{t.role}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
