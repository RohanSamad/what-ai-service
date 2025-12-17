"use client";

import { useEffect, useRef } from "react";
import CTAButton from "@/components/shared/CTAButton";
import Link from "next/link";
import { FiArrowRight, FiLinkedin, FiTwitter } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function CEOMessage() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Badge animation
      tl.fromTo(
        ".badge-reveal",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
      )
        // Image animation - only on scroll
        .fromTo(
          imageRef.current,
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
          "-=0.3"
        )
        // Quote animation
        .fromTo(
          quoteRef.current,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
          "-=0.8"
        )
        // Stagger content inside quote
        .fromTo(
          ".content-reveal",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.5"
        );
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
              id="ceo-hexagons"
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
          <rect width="100%" height="100%" fill="url(#ceo-hexagons)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image Section */}
            <div ref={imageRef} className="relative">
              {/* Main Image Container */}
              <div className="relative">
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Image Frame */}
                  <div className="relative rounded-3xl bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 p-[6px] shadow-2xl shadow-purple-500/30">
                    <div className="rounded-3xl bg-slate-900 overflow-hidden">
                      <div className="aspect-square flex items-center justify-center bg-slate-900">
                        <Image
                          src="/ceo.png" // path to your image in public folder
                          alt="CEO"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-50" />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-50" />

                  {/* Corner Brackets */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-purple-500" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-purple-500" />
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-purple-500" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-purple-500" />
                </div>
              </div>
            </div>

            {/* Right: Content Section */}
            <div ref={quoteRef} className="space-y-8">
              {/* Title */}
              <h2 className="content-reveal text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                A Message from{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  our CEO
                </span>
              </h2>

              {/* Quote */}
              <blockquote className="content-reveal relative">
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed italic pl-8">
                  We built What AI Services because we saw brilliant people
                  drowning in busy work. AI isn't about replacing humans—it's
                  about removing the friction that stops humans from being
                  great.
                </p>
              </blockquote>

              {/* Divider */}
              <div className="content-reveal h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />

              {/* Author Info */}
              <div className="content-reveal space-y-4">
                <div>
                  <div className="text-2xl font-bold text-white">
                    Founder Name
                  </div>
                  <div className="text-lg text-purple-400">CEO & Founder</div>
                  <div className="text-sm text-slate-400">What AI Services</div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-purple-600 border border-purple-500/30 hover:border-purple-500 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  >
                    <FiLinkedin />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-purple-600 border border-purple-500/30 hover:border-purple-500 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  >
                    <FiTwitter />
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="content-reveal flex flex-wrap gap-4">
                <Link href="/ceo">
                  <CTAButton
                    variant="primary"
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Read Full Vision
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </CTAButton>
                </Link>

                <Link href="/">
                  <CTAButton
                    variant="secondary"
                    size="lg"
                    className="border-purple-500/30 hover:border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                  >
                    About Us
                  </CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
