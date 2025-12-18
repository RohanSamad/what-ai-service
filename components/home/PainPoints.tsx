'use client';

import { useEffect, useRef } from 'react';
import { FiPhoneMissed, FiCalendar, FiInbox } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const points = [
  {
    icon: <FiPhoneMissed className="w-10 h-10" />,
    title: 'Missed Calls',
    description:
      'Every missed call is a missed opportunity. Our AI handles calls instantly, 24/7, so you never lose a lead.',
    color: 'from-red-500 to-pink-500',
    shadowColor: 'shadow-red-500/50',
  },
  {
    icon: <FiCalendar className="w-10 h-10" />,
    title: 'Scheduling Chaos',
    description:
      'Back-and-forth emails to find a time? History. Your AI negotiates slots and books meetings directly to your calendar.',
    color: 'from-orange-500 to-yellow-500',
    shadowColor: 'shadow-orange-500/50',
  },
  {
    icon: <FiInbox className="w-10 h-10" />,
    title: 'Admin Overload',
    description:
      'Drowning in paperwork and routine tasks? Reclaim 10+ hours a week by offloading the busy work.',
    color: 'from-purple-500 to-pink-500',
    shadowColor: 'shadow-purple-500/50',
  },
];

export default function PainPoints() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Header animation
      gsap.fromTo(
        '.header-reveal',
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Items animation
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        const icon = item.querySelector('.pain-icon');
        const line = item.querySelector('.pain-line');
        const content = item.querySelector('.pain-content');
        const number = item.querySelector('.pain-number');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });

        tl.fromTo(
          number,
          { scale: 0, rotation: -180, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: 'back.out(2)' }
        )
          .fromTo(
            icon,
            { scale: 0, rotation: 180, opacity: 0 },
            { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' },
            '-=0.3'
          )
          .fromTo(
            line,
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.4'
          )
          .fromTo(
            content,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
            '-=0.5'
          );

        // Continuous floating animation
        gsap.to(icon, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950"
    >
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pain-hexagons"
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
          <rect width="100%" height="100%" fill="url(#pain-hexagons)" />
        </svg>
      </div>

      {/* Ambient Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="header-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-medium text-purple-300">
              Pain Points
            </span>
          </div>

          <h2 className="header-reveal text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">The Old Way is </span>
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Broken
            </span>
          </h2>

          <p className="header-reveal max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
            You didn't start your business to be a receptionist. Stop letting
            low-leverage tasks kill your productivity.
          </p>
        </div>

        {/* Pain Points */}
        <div className="max-w-4xl mx-auto space-y-16">
          {points.map((point, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="relative"
            >
              {/* Connection Line for non-first items */}
              {index > 0 && (
                <div className="absolute -top-16 left-8 md:left-12 w-0.5 h-16 bg-gradient-to-b from-purple-500/50 to-transparent" />
              )}

              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                {/* Left: Icon Section */}
                <div className="flex-shrink-0 relative">
                  {/* Number Badge */}
                  <div className="pain-number absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-sm font-bold border-2 border-slate-950 shadow-lg z-10">
                    {index + 1}
                  </div>

                  {/* Icon Container */}
                  <div
                    className={`pain-icon relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${point.color} p-[2px] ${point.shadowColor} shadow-2xl`}
                  >
                    <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center text-white">
                      {point.icon}
                    </div>
                  </div>

                  {/* Pulse Ring */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${point.color} opacity-0 animate-ping`}
                    style={{ animationDuration: '3s', animationDelay: `${index * 0.5}s` }}
                  />
                </div>

                {/* Connecting Line */}
                <div className="pain-line hidden md:block flex-shrink-0 w-16 lg:w-24 h-0.5 self-center bg-gradient-to-r from-purple-500/50 to-transparent origin-left" />

                {/* Right: Content */}
                <div className="pain-content flex-1 space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-white">
                    {point.title}
                  </h3>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                    {point.description}
                  </p>

                  {/* Decorative Bottom Line */}
                  <div className={`h-1 w-24 bg-gradient-to-r ${point.color} rounded-full`} />
                </div>
              </div>

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${point.color} opacity-0 blur-3xl pointer-events-none`}
                style={{
                  animation: `glow 4s ease-in-out infinite ${index * 0.5}s`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 0.03;
          }
        }
      `}</style>
    </section>
  );
}