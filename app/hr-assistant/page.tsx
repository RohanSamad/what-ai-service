'use client';

import CTAButton from '@/components/shared/CTAButton';
import GlassCard from '@/components/shared/GlassCard';
import { FiUsers, FiFileText, FiMessageCircle } from 'react-icons/fi';
import SectionReveal from '@/components/animations/SectionReveal';
import GSAPProvider from '@/components/animations/GSAPProvider';

export default function HRAssistant() {
    return (
        <GSAPProvider>
            <SectionReveal className="min-h-screen pt-20 pb-24 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="gsap-reveal translate-y-8 inline-block px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan font-medium text-sm tracking-wide mb-8">
                        COMING SOON
                    </div>

                    <h1 className="gsap-reveal translate-y-8 text-5xl md:text-7xl font-bold mb-6">
                        The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-glowing-aqua">HR Ops</span>
                    </h1>

                    <p className="gsap-reveal translate-y-8 text-xl text-steel-gray dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        Imagine an HR department that answers employee questions instantly, 24/7, and handles the repetitive onboarding paperwork for you.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
                        <GlassCard animate={false} className="gsap-reveal translate-y-8 flex flex-col gap-4">
                            <FiUsers className="w-8 h-8 text-neon-cyan" />
                            <h3 className="font-bold text-lg">Instant Screening</h3>
                            <p className="text-sm text-gray-400">Automatically filter candidates and schedule interviews with top talent.</p>
                        </GlassCard>

                        <GlassCard animate={false} className="gsap-reveal translate-y-8 flex flex-col gap-4">
                            <FiFileText className="w-8 h-8 text-cyber-blue" />
                            <h3 className="font-bold text-lg">Paperwork Auto-Pilot</h3>
                            <p className="text-sm text-gray-400">Send, track, and file onboarding documents without lifting a finger.</p>
                        </GlassCard>

                        <GlassCard animate={false} className="gsap-reveal translate-y-8 flex flex-col gap-4">
                            <FiMessageCircle className="w-8 h-8 text-glowing-aqua" />
                            <h3 className="font-bold text-lg">24/7 Employee Support</h3>
                            <p className="text-sm text-gray-400">Answer 90% of internal queries about benefits and policy instantly.</p>
                        </GlassCard>
                    </div>

                    <div className="gsap-reveal translate-y-8 p-8 rounded-2xl bg-white/5 border border-white/10 max-w-xl mx-auto backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-2">Get Early Access</h3>
                        <p className="text-gray-400 mb-6">Be the first to know when the HR Assistant launches.</p>
                        <CTAButton href="/demo">
                            Join the Waitlist
                        </CTAButton>
                    </div>
                </div>
            </SectionReveal>
        </GSAPProvider>
    );
}
