'use client';

import { useEffect, useRef } from 'react';
import { FiClock, FiSmartphone, FiLayout, FiShield, FiZap, FiUserCheck } from 'react-icons/fi';
import GlassCard from '@/components/shared/GlassCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const solutions = [
    {
        icon: <FiClock />,
        title: "24/7 Availability",
        description: "Your AI never sleeps, calls in sick, or takes a holiday. Always on, always ready."
    },
    {
        icon: <FiSmartphone />,
        title: "Phone Handling",
        description: "Natural voice conversations that sound human. Screens spam, books appointments, and takes messages."
    },
    {
        icon: <FiLayout />,
        title: "Calendar Management",
        description: "Seamlessly manages your schedule, prevents double-booking, and handles rescheduling automatically."
    },
    {
        icon: <FiShield />,
        title: "Private & Secure",
        description: "Enterprise-grade security ensuring your data and conversations remain strictly confidential."
    },
    {
        icon: <FiZap />,
        title: "Instant Setup",
        description: "No weeks of training. Your AI is ready to work from Day 1 with your specific knowledge base."
    },
    {
        icon: <FiUserCheck />,
        title: "Human-Like Interaction",
        description: "So natural that most callers won't even realize they're speaking to an AI assistant."
    }
];

export default function Solutions() {
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
        <section ref={sectionRef} id="how-it-works" className="py-24 bg-gradient-to-b from-transparent to-teal-blue/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="gsap-reveal translate-y-8 text-3xl md:text-4xl">
                        Your New Superpower
                    </h2>
                    <p className="gsap-reveal translate-y-8 max-w-2xl mx-auto font-medium text-lg">
                        Everything you expect from a top-tier Executive Assistant, at a fraction of the cost and with infinite scalability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => (
                        <GlassCard
                            key={index}
                            hoverEffect={true}
                            animate={false}
                            className="gsap-reveal translate-y-8 flex flex-col items-start text-left"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-cyber-blue flex items-center justify-center text-white text-xl mb-4 shadow-lg shadow-neon-cyan/20 group-hover:scale-110 transition-transform">
                                {solution.icon}
                            </div>
                            <h3 className="text-xl mb-2">{solution.title}</h3>
                            <p className="text-sm">
                                {solution.description}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
