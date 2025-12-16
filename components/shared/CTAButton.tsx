import Link from 'next/link';
import clsx from 'clsx';
import { FiArrowRight } from 'react-icons/fi';

interface CTAButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    icon?: boolean;
}

export default function CTAButton({
    href,
    children,
    variant = 'primary',
    className,
    icon = true
}: CTAButtonProps) {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-sm md:text-base";

    const variants = {
        primary: "bg-gradient-to-r from-neon-cyan to-cyber-blue text-white shadow-lg shadow-neon-cyan/30 hover:shadow-neon-cyan/50 hover:translate-y-[-2px]",
        secondary: "bg-white text-deep-space hover:bg-gray-100 shadow-md",
        outline: "border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
    };

    return (
        <Link
            href={href}
            className={clsx(baseStyles, variants[variant], className)}
        >
            {children}
            {icon && <FiArrowRight className="w-4 h-4" />}
        </Link>
    );
}
