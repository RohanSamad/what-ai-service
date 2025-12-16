'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import GlassCard from '@/components/shared/GlassCard';
import { FiArrowRight } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
    {
        title: "Executive Assistant",
        description: "The core service. Email, calendar, calls, and travel. Your personal productivity multiplier.",
        status: "Available Now",
        link: "/demo"
    },
    {
        title: "HR Assistant",
        description: "Automate screening, scheduling interviews, and answering common employee questions.",
        status: "Coming Soon",
        link: "/hr-assistant"
    },
    {
        title: "Manager Assistant",
        description: "Team coordination, standup updates, and project tracking automation for busy managers.",
        status: "Coming Soon",
        link: "/manager-assistant"
    }
];

export default function Services() {
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
                    <h2 className="gsap-reveal translate-y-8 text-3xl md:text-4xl">Expand Your Workforce</h2>
                    <p className="gsap-reveal translate-y-8 max-w-2xl mx-auto font-medium text-lg">
                        Start with an Executive Assistant, then scale across your entire organization.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link href={service.link} key={index} className="block group w-full h-full">
                            <GlassCard
                                hoverEffect={true}
                                animate={false}
                                className="gsap-reveal translate-y-8 h-full flex flex-col relative overflow-hidden"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl">{service.title}</h3>
                                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full border ${service.status === 'Available Now'
                                            ? 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30'
                                            : 'bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-gray-400 border-slate-300 dark:border-white/10'
                                        }`}>
                                        {service.status}
                                    </span>
                                </div>

                                <p className="text-sm mb-6 flex-grow">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-neon-cyan font-semibold text-sm group-hover:gap-2 transition-all">
                                    Learn more <FiArrowRight className="ml-1" />
                                </div>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
