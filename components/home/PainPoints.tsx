'use client';

import { useEffect, useRef } from 'react';
import { FiPhoneMissed, FiCalendar, FiInbox } from 'react-icons/fi';
import GlassCard from '@/components/shared/GlassCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const points = [
    {
        icon: <FiPhoneMissed className="w-8 h-8 text-red-400" />,
        title: "Missed Calls",
        description: "Every missed call is a missed opportunity. Our AI handles calls instantly, 24/7, so you never lose a lead."
    },
    {
        icon: <FiCalendar className="w-8 h-8 text-orange-400" />,
        title: "Scheduling Chaos",
        description: "Back-and-forth emails to find a time? History. Your AI negotiates slots and books meetings directly to your calendar."
    },
    {
        icon: <FiInbox className="w-8 h-8 text-yellow-400" />,
        title: "Admin Overload",
        description: "Drowning in paperwork and routine tasks? reclaim 10+ hours a week by offloading the busy work."
    }
];

export default function PainPoints() {
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
        <section ref={sectionRef} className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="gsap-reveal translate-y-8 text-3xl md:text-4xl">The Old Way is Broken</h2>
                    <p className="gsap-reveal translate-y-8 max-w-2xl mx-auto font-medium text-lg text-[var(--muted-text)]">
                        You didn't start your business to be a receptionist. Stop letting low-leverage tasks kill your productivity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {points.map((point, index) => (
                        <GlassCard
                            key={index}
                            hoverEffect={true}
                            animate={false}
                            className="gsap-reveal translate-y-8 text-center group"
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan/20 to-teal-blue/20 border border-white/10 mx-auto flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-neon-cyan/30 transition-all duration-300">
                                {point.icon}
                            </div>
                            <h3 className="text-xl mb-3">{point.title}</h3>
                            <p className="leading-relaxed text-[var(--muted-text)]">
                                {point.description}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
