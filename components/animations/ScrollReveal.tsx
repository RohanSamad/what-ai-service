'use client';

import { ReactNode, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function ScrollReveal({
    children,
    className,
    delay = 0
}: ScrollRevealProps) {
    const elRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elRef.current) return;
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(elRef.current,
            { autoAlpha: 0, y: 32 }, // Matches translate-y-8
            {
                autoAlpha: 1,
                y: 0,
                duration: 1.0, // Matches Hero animation duration
                delay: delay,
                ease: 'power3.out', // Matches Hero easing
                scrollTrigger: {
                    trigger: elRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, [delay]);

    return (
        <div ref={elRef} className={clsx('invisible', className)}>
            {children}
        </div>
    );
}
