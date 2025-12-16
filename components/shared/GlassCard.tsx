'use client';

import clsx from 'clsx';
import { ReactNode, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
    animate?: boolean;
    delay?: number;
}

export default function GlassCard({
    children,
    className,
    hoverEffect = false,
    animate = true,
    delay = 0,
}: GlassCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!animate || !cardRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(cardRef.current,
            { autoAlpha: 0, y: 32 }, // Matches translate-y-8
            {
                autoAlpha: 1,
                y: 0,
                duration: 1.0, // Matches Hero animation duration
                delay: delay,
                ease: 'power3.out', // Matches Hero easing
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                }
            }
        );
    }, [animate, delay]);

    return (
        <div
            ref={cardRef}
            className={clsx(
                'glass-card rounded-2xl p-6 transition-all duration-300',
                animate && 'invisible',
                hoverEffect && 'hover:bg-white/40 dark:hover:bg-teal-blue/30 hover:-translate-y-1 hover:shadow-lg',
                className
            )}
        >
            {children}
        </div>
    );
}
