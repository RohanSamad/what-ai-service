'use client';

import { ReactNode, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

interface SectionRevealProps {
    children: ReactNode;
    className?: string; // Allow passing standard className (e.g. padding, relative)
    id?: string;
}

export default function SectionReveal({ children, className, id }: SectionRevealProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            // Select all elements with .gsap-reveal within this section
            const targets = gsap.utils.toArray('.gsap-reveal');

            if (targets.length > 0) {
                gsap.to(targets, {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%', // Trigger when top of section is 75% down viewport
                        toggleActions: 'play none none reverse'
                    },
                    y: 0,
                    autoAlpha: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                    overwrite: 'auto'
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id={id} className={clsx('relative', className)}>
            {children}
        </section>
    );
}
