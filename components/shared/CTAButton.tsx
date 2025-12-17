'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { FiArrowRight } from 'react-icons/fi';
import { ImSpinner2 } from 'react-icons/im';

type Variant = 'primary' | 'secondary' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: boolean;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
}

export default function CTAButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon = true,
  iconPosition = 'right',
  loading = false,
  disabled = false,
}: CTAButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95';

  const variants: Record<Variant, string> = {
    primary:
      'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-purple-400',
    secondary:
      'bg-white/10 border border-white/20 text-white hover:bg-white/20 focus:ring-white/30',
    outline:
      'border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 focus:ring-purple-500',
  };

  const sizes: Record<Size, string> = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const isDisabled = disabled || loading;

  const classes = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    isDisabled && 'opacity-60 cursor-not-allowed pointer-events-none',
    className
  );

  const content = (
    <>
      
      <span>{children}</span>
      
    </>
  );

  // 👉 Button (no navigation)
  if (!href) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={isDisabled}
        className={classes}
      >
        {content}
      </button>
    );
  }

  // 👉 Link button
  return (
    <Link href={href} className={classes} aria-disabled={isDisabled}>
      {content}
    </Link>
  );
}
