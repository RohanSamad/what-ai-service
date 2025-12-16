'use client';

import GlassCard from '@/components/shared/GlassCard';
import { FiClock, FiCalendar, FiCheck } from 'react-icons/fi';
import SectionReveal from '@/components/animations/SectionReveal';
import GSAPProvider from '@/components/animations/GSAPProvider';

export default function DemoPage() {
    return (
        <GSAPProvider>
            <SectionReveal className="min-h-screen pt-12 pb-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <h1 className="gsap-reveal translate-y-8 text-4xl font-bold mb-4">Book Your Demo</h1>
                        <p className="gsap-reveal translate-y-8 text-steel-gray dark:text-gray-400">
                            See the AI assistant in action. No pressure, just a conversation about your needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Info Column */}
                        <div className="lg:col-span-1 space-y-6">
                            <GlassCard animate={false} className="gsap-reveal translate-y-8 h-full">
                                <h3 className="text-xl font-bold mb-6">What to expect</h3>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan shrink-0">
                                            <FiClock />
                                        </div>
                                        <div>
                                            <div className="font-bold">15-Minute Intro</div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Quick chat to understand your bottlenecks.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan shrink-0">
                                            <FiCalendar />
                                        </div>
                                        <div>
                                            <div className="font-bold">Live Demo</div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">We'll call the AI live so you can hear it work.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan shrink-0">
                                            <FiCheck />
                                        </div>
                                        <div>
                                            <div className="font-bold">Onboarding Plan</div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Simple steps to get you started same-day.</p>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>

                        {/* Calendar Column (Hardcoded Placeholder) */}
                        <div className="lg:col-span-2">
                            <div className="gsap-reveal translate-y-8 bg-white dark:bg-deep-space border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
                                <div className="p-4 border-b border-gray-200 dark:border-white/10 flex justify-between items-center bg-gray-50 dark:bg-white/5">
                                    <div className="font-bold">Select a Date & Time</div>
                                    <div className="text-sm text-gray-500">Time Zone: Eastern Time (US & Canada)</div>
                                </div>

                                <div className="flex-grow flex flex-col md:flex-row">
                                    {/* Date Side */}
                                    <div className="w-full md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/10">
                                        <div className="mb-4 font-semibold text-center">December 2025</div>
                                        <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2">
                                            <span className="text-gray-400">S</span>
                                            <span className="text-gray-400">M</span>
                                            <span className="text-gray-400">T</span>
                                            <span className="text-gray-400">W</span>
                                            <span className="text-gray-400">T</span>
                                            <span className="text-gray-400">F</span>
                                            <span className="text-gray-400">S</span>
                                        </div>
                                        <div className="grid grid-cols-7 gap-2 text-center text-sm">
                                            {[...Array(31)].map((_, i) => (
                                                <button
                                                    key={i}
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center hover:bg-neon-cyan/20 transition-colors ${i === 15 ? 'bg-neon-cyan text-white hover:bg-neon-cyan' : ''}`}
                                                >
                                                    {i + 1}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Time Side */}
                                    <div className="w-full md:w-1/2 p-6 overflow-y-auto max-h-[500px]">
                                        <div className="space-y-3">
                                            <div className="text-sm text-gray-500 mb-4">Monday, Dec 16</div>
                                            {['9:00am', '9:30am', '10:00am', '11:00am', '1:00pm', '2:30pm', '4:00pm'].map((time) => (
                                                <button
                                                    key={time}
                                                    className="w-full py-3 rounded-lg border border-neon-cyan/30 text-neon-cyan font-semibold hover:bg-neon-cyan hover:text-white transition-all duration-200"
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-xs text-gray-500 mt-4">
                                Powered by CalendarTech (Demo Mode)
                            </p>
                        </div>
                    </div>
                </div>
            </SectionReveal>
        </GSAPProvider>
    );
}
