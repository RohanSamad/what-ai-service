import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-white dark:bg-deep-space border-t border-gray-200 dark:border-white/10 pt-16 pb-8 overflow-hidden z-10">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-glowing-aqua/5 rounded-full blur-3xl translate-y-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-cyber-blue flex items-center justify-center text-white font-bold shadow-lg">
                                AI
                            </div>
                            <span className="font-bold text-xl tracking-tight text-deep-space dark:text-white">
                                What AI Services
                            </span>
                        </Link>
                        <p className="text-steel-gray dark:text-gray-400 text-sm leading-relaxed mb-6">
                            Empowering busy professionals with 24/7 AI-driven executive assistants. Reclaim your time and focus on what matters.
                        </p>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h3 className="font-bold text-deep-space dark:text-white mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-steel-gray dark:text-gray-400 hover:text-neon-cyan text-sm transition-colors">
                                    AI Executive Assistant
                                </Link>
                            </li>
                            <li>
                                <Link href="/hr-assistant" className="text-steel-gray dark:text-gray-400 hover:text-neon-cyan text-sm transition-colors flex items-center gap-2">
                                    HR Assistant <span className="text-[10px] bg-neon-cyan/10 text-neon-cyan px-2 py-0.5 rounded-full border border-neon-cyan/20">Soon</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/manager-assistant" className="text-steel-gray dark:text-gray-400 hover:text-neon-cyan text-sm transition-colors flex items-center gap-2">
                                    Manager Assistant <span className="text-[10px] bg-neon-cyan/10 text-neon-cyan px-2 py-0.5 rounded-full border border-neon-cyan/20">Soon</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-bold text-deep-space dark:text-white mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/ceo" className="text-steel-gray dark:text-gray-400 hover:text-neon-cyan text-sm transition-colors">
                                    Meet the CEO
                                </Link>
                            </li>
                            <li>
                                <Link href="/demo" className="text-steel-gray dark:text-gray-400 hover:text-neon-cyan text-sm transition-colors">
                                    Book a Demo
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-steel-gray dark:text-gray-400 hover:text-neon-cyan text-sm transition-colors">
                                    Contact Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="font-bold text-deep-space dark:text-white mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-steel-gray dark:text-gray-400 hover:text-neon-cyan text-sm transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-steel-gray dark:text-gray-400 hover:text-neon-cyan text-sm transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-steel-gray dark:text-gray-500">
                        © {currentYear} What AI Services. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Social icons can go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
