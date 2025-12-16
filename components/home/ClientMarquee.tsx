'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const clients = [
    'TechCorp', 'InnovateLabs', 'FutureScalers', 'GlobalConnect', 'RapidGrowth', 'AI-First', 'NexSys'
];

export default function ClientMarquee() {
    const sectionRef = useRef<HTMLDivElement>(null);

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
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="py-12 border-b border-white/5 bg-white/5 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

            <div className="gsap-reveal translate-y-8 flex animate-scroll whitespace-nowrap">
                {/* Double the list for seamless loop */}
                {[...clients, ...clients, ...clients].map((client, i) => (
                    <div key={i} className="mx-8 md:mx-16 min-w-[120px] text-center opacity-40 hover:opacity-100 transition-opacity cursor-default">
                        <span className="text-xl md:text-2xl font-bold font-mono tracking-tighter text-steel-gray dark:text-gray-300">
                            {client}
                        </span>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
        </div>
    );
}
