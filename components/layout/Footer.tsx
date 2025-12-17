'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';

const footerData = {
  brand: {
    logo: '/log.png',
    name: 'What AI Service',
    description:
      'Empowering busy professionals with 24/7 AI-driven executive assistants. Reclaim your time and focus on what matters.',
    newsletter: {
      placeholder: 'Enter your email',
      buttonText: 'Subscribe',
    },
  },
  columns: [
    {
      title: 'Services',
      items: [
        { name: 'AI Executive Assistant', href: '/' },
        { name: 'HR Assistant', href: '/hr-assistant', badge: 'Soon' },
        { name: 'Manager Assistant', href: '/manager-assistant', badge: 'Soon' },
      ],
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', href: '/' },
        { name: 'Meet the CEO', href: '/ceo' },
        { name: 'Book a Demo', href: '/demo' },
        { name: 'Contact Support', href: '/' },
      ],
    },
    {
      title: 'Legal',
      items: [
        { name: 'Privacy Policy', href: '/' },
        { name: 'Terms of Service', href: '/' },
        { name: 'Cookie Policy', href: '/' },
      ],
    },
  ],
  socialLinks: [
    { icon: FiMail, href: 'mailto:hello@whataiservices.com', label: 'Email' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiGithub, href: '#', label: 'GitHub' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 border-t border-purple-500/20 pt-20 pb-8 overflow-hidden">
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="footer-hexagons"
              x="0"
              y="0"
              width="60"
              height="52"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="30,0 60,17.3 60,52 30,69.3 0,52 0,17.3"
                fill="none"
                stroke="rgb(168, 85, 247)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-hexagons)" />
        </svg>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src={footerData.brand.logo}
                alt={footerData.brand.name}
                width={40}
                height={40}
              />
              <span className="ml-3 text-xl font-bold text-white">
                {footerData.brand.name}
              </span>
            </Link>

            <p className="text-slate-400 mt-4 text-sm leading-relaxed mb-6 max-w-sm">
              {footerData.brand.description}
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={footerData.brand.newsletter.placeholder}
                  className="flex-1 px-4 py-2 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50 text-sm"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white font-medium text-sm transition-all">
                  {footerData.brand.newsletter.buttonText}
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Columns */}
          {footerData.columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
                {col.title}
              </h3>
              <ul className="space-y-4">
                {col.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                      {item.badge && (
                        <span className="text-[10px] bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-full border border-purple-500/20">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-slate-500">
              © {currentYear} {footerData.brand.name}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {footerData.socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-purple-600 border border-purple-500/30 hover:border-purple-500 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  aria-label={label}
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
