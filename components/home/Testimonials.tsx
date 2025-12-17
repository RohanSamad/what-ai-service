'use client';

import { useEffect, useRef } from 'react';
import { FiStar } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsFillChatQuoteFill } from 'react-icons/bs';

const testimonials = [
  {
    quote:
      "I was skeptical about AI, but this service changed everything. It's like having a top-tier executive assistant who never sleeps.",
    author: 'Sarah J.',
    role: 'Startup Founder',
    company: 'TechVentures',
    stars: 5,
    image: 'SJ',
    color: 'from-purple-600 to-pink-600',
  },
  {
    quote:
      "The response time is instant. My calendar is messy, and the AI organizes it perfectly. It's worth every penny.",
    author: 'Michael T.',
    role: 'VP of Sales',
    company: 'GlobalCorp',
    stars: 5,
    image: 'MT',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    quote:
      "We replaced our traditional call center with What AI Services. Customer satisfaction went up, and costs went down by 70%.",
    author: 'David R.',
    role: 'Operations Director',
    company: 'InnovateLabs',
    stars: 5,
    image: 'DR',
    color: 'from-pink-600 to-orange-600',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Header animation
      gsap.fromTo(
        '.header-reveal',
        { opacity: 0, y: 50 },
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

      // Testimonial items animation
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });

        const avatar = item.querySelector('.testimonial-avatar');
        const quote = item.querySelector('.testimonial-quote');
        const stars = item.querySelectorAll('.testimonial-star');
        const author = item.querySelector('.testimonial-author');
        const quoteIcon = item.querySelector('.quote-icon');

        tl.fromTo(
          item,
          { opacity: 0, scale: 0.8, rotateY: -20 },
          { opacity: 1, scale: 1, rotateY: 0, duration: 0.8, ease: 'back.out(1.7)' }
        )
          .fromTo(
            quoteIcon,
            { scale: 0, rotation: -180 },
            { scale: 1, rotation: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' },
            '-=0.6'
          )
          .fromTo(
            avatar,
            { scale: 0, rotation: 360 },
            { scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(2)' },
            '-=0.5'
          )
          .fromTo(
            quote,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
            '-=0.4'
          )
          .fromTo(
            stars,
            { scale: 0, rotation: -180 },
            { scale: 1, rotation: 0, duration: 0.4, stagger: 0.1, ease: 'back.out(2)' },
            '-=0.3'
          )
          .fromTo(
            author,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            '-=0.2'
          );

        // Continuous floating animation
        gsap.to(item, {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.3,
        });

        // Rotating glow effect
        gsap.to(item.querySelector('.glow-effect'), {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: 'none',
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
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="testimonial-hexagons"
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
          <rect width="100%" height="100%" fill="url(#testimonial-hexagons)" />
        </svg>
      </div>

      {/* Ambient Effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="header-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
            <FiStar className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-purple-300">
              5-Star Reviews
            </span>
          </div>

          <h2 className="header-reveal text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Trusted by </span>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              Innovators
            </span>
          </h2>

          <p className="header-reveal max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
            See what others are saying about switching to AI.
          </p>
        </div>

        {/* Testimonials - Staggered Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className="relative group"
                style={{
                  marginTop: index % 2 === 0 ? '0' : '2rem',
                }}
              >
                {/* Testimonial Container */}
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-300 overflow-hidden">
                  {/* Rotating Glow Effect */}
                  <div
                    className="glow-effect absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${testimonial.color.split(' ')[1]}, transparent)`,
                      filter: 'blur(40px)',
                    }}
                  />

                  {/* Quote Icon */}
                  <div className="quote-icon absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                    <BsFillChatQuoteFill className="text-2xl text-purple-400" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <FiStar
                          key={i}
                          className="testimonial-star w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="testimonial-quote text-slate-200 text-base md:text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Divider */}
                    <div className={`h-1 w-16 bg-gradient-to-r ${testimonial.color} rounded-full`} />

                    {/* Author Info */}
                    <div className="testimonial-author flex items-center gap-4">
                      {/* Avatar */}
                      <div
                        className={`testimonial-avatar relative w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} p-[2px] shadow-lg`}
                      >
                        <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-white font-bold">
                          {testimonial.image}
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div>
                        <p className="font-bold text-white">{testimonial.author}</p>
                        <p className="text-sm text-slate-400">{testimonial.role}</p>
                        <p className="text-xs text-purple-400">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-purple-500/40" />
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-purple-500/40" />
                </div>

                {/* Outer Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-2xl -z-10 transition-opacity duration-500`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              500+
            </div>
            <div className="text-sm text-slate-400 mt-1">Happy Clients</div>
          </div>
          <div className="w-px h-12 bg-purple-500/20" />
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              4.9/5
            </div>
            <div className="text-sm text-slate-400 mt-1">Average Rating</div>
          </div>
          <div className="w-px h-12 bg-purple-500/20" />
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              98%
            </div>
            <div className="text-sm text-slate-400 mt-1">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}