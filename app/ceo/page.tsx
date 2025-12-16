'use client';

import CTAButton from '@/components/shared/CTAButton';
import SectionReveal from '@/components/animations/SectionReveal';
import GSAPProvider from '@/components/animations/GSAPProvider';

export default function CEOPage() {
    return (
        <GSAPProvider>
            <SectionReveal className="min-h-screen pt-20 pb-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <header className="mb-16 text-center">
                        <h1 className="gsap-reveal translate-y-8 text-4xl md:text-5xl font-bold mb-6">Built for the Builders</h1>
                        <p className="gsap-reveal translate-y-8 text-xl text-steel-gray dark:text-gray-400">
                            Why we started What AI Services and where we're going.
                        </p>
                    </header>

                    <article className="prose prose-lg dark:prose-invert mx-auto">
                        <p className="gsap-reveal translate-y-8 lead text-2xl font-light leading-relaxed mb-8">
                            The modern professional is overwhelmed. We have more tools than ever, yet less time. The promise of technology was supposed to be liberation, but for many, it's become a second job of managing notifications, calendars, and dashboards.
                        </p>

                        <h2 className="gsap-reveal translate-y-8 text-2xl font-bold mt-12 mb-4">The Efficiency Paradox</h2>
                        <p className="gsap-reveal translate-y-8 mb-6 text-steel-gray dark:text-gray-300 leading-relaxed">
                            I founded What AI Services with a simple premise: <strong>Human intelligence is too valuable to be spent on admin.</strong>
                        </p>
                        <p className="gsap-reveal translate-y-8 mb-6 text-steel-gray dark:text-gray-300 leading-relaxed">
                            Every hour a founder spends scheduling a meeting is an hour not spent on strategy. Every hour a recruiter spends screening spam calls is an hour not spent finding talent. We are building the infrastructure to give that time back.
                        </p>

                        <div className="gsap-reveal translate-y-8 my-12 p-8 rounded-2xl bg-gradient-to-br from-teal-blue/20 to-deep-space border border-neon-cyan/20">
                            <h3 className="text-xl font-bold mb-4 text-neon-cyan">Our Mission</h3>
                            <p className="text-xl text-white italic">
                                "To democratize executive-level support for every professional, making 24/7 productivity accessible to everyone, not just the Fortune 500."
                            </p>
                        </div>

                        <h2 className="gsap-reveal translate-y-8 text-2xl font-bold mt-12 mb-4">Why AI? Why Now?</h2>
                        <p className="gsap-reveal translate-y-8 mb-6 text-steel-gray dark:text-gray-300 leading-relaxed">
                            Until recently, having a truly capable assistant meant a significant salary overhead. It was a luxury. Large Language Models (LLMs) have changed the economic equation. We can now offer 24/7, consistent, intelligent support for a fraction of the cost of a traditional hire.
                        </p>

                        <p className="gsap-reveal translate-y-8 mb-12 text-steel-gray dark:text-gray-300 leading-relaxed">
                            This isn't about replacing humans. It's about empowering them. When you entrust the tactical work to AI, you free yourself to do the strategic work that only you can do.
                        </p>

                        <div className="gsap-reveal translate-y-8 text-center pt-8 border-t border-white/10">
                            <p className="mb-8 font-medium">Ready to reclaim your time?</p>
                            <CTAButton href="/demo">
                                Book a Demo
                            </CTAButton>
                        </div>
                    </article>
                </div>
            </SectionReveal>
        </GSAPProvider>
    );
}
