'use client';

import { useLayoutEffect } from 'react';
import gsap from '@/lib/gsap';

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
    useLayoutEffect(() => {
        // Ensure ScrollTrigger is refreshed on route changes/resize
        const ctx = gsap.context(() => { });
        return () => ctx.revert();
    }, []);

    return <>{children}</>;
}
