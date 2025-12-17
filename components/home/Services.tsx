"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FiArrowRight, FiZap, FiClock, FiLock } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    title: "Executive Assistant",
    description:
      "The core service. Email, calendar, calls, and travel. Your personal productivity multiplier.",
    status: "Available Now",
    link: "/demo",
    icon: <FiZap />,
    features: [
      "Email Management",
      "Calendar Sync",
      "Call Handling",
      "Travel Booking",
    ],
    gradient: "from-purple-600 to-pink-600",
    available: true,
  },
  {
    title: "HR Assistant",
    description:
      "Automate screening, scheduling interviews, and answering common employee questions.",
    status: "Coming Soon",
    link: "/hr-assistant",
    icon: <FiClock />,
    features: [
      "Resume Screening",
      "Interview Scheduling",
      "Employee Queries",
      "Onboarding",
    ],
    gradient: "from-blue-600 to-cyan-600",
    available: false,
  },
  {
    title: "Manager Assistant",
    description:
      "Team coordination, standup updates, and project tracking automation for busy managers.",
    status: "Coming Soon",
    link: "/manager-assistant",
    icon: <FiLock />,
    features: [
      "Team Coordination",
      "Standup Updates",
      "Project Tracking",
      "Reporting",
    ],
    gradient: "from-pink-600 to-orange-600",
    available: false,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Header animation
      gsap.fromTo(
        ".header-reveal",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Service items animation
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        const icon = item.querySelector(".service-icon");
        const line = item.querySelector(".service-line");
        const content = item.querySelector(".service-content");
        const features = item.querySelectorAll(".service-feature");
        const cta = item.querySelector(".service-cta");

        tl.fromTo(
          item,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        )
          .fromTo(
            icon,
            { scale: 0, rotation: -360 },
            { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" },
            "-=0.4"
          )
          .fromTo(
            line,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.6, ease: "power2.out" },
            "-=0.5"
          )
          .fromTo(
            content,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
            "-=0.4"
          )
          .fromTo(
            features,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.3"
          )
          .fromTo(
            cta,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
            "-=0.2"
          );

        // Continuous pulse on icon
        gsap.to(icon, {
          scale: 1.1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3,
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
              id="services-hexagons"
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
          <rect width="100%" height="100%" fill="url(#services-hexagons)" />
        </svg>
      </div>

      {/* Ambient Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="header-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-medium text-purple-300">
              Our Services
            </span>
          </div>

          <h2 className="header-reveal text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Expand Your </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Workforce
            </span>
          </h2>

          <p className="header-reveal max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
            Start with an Executive Assistant, then scale across your entire
            organization.
          </p>
        </div>

        {/* Services */}
        <div className="max-w-5xl mx-auto space-y-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="block group"
              ref={(el) => {
                itemsRef.current[index] = el as any;
              }}
            >
              <div className="relative">
                {/* Connection line to next item */}
                {index < services.length - 1 && (
                  <div className="absolute left-12 md:left-16 top-full w-0.5 h-8 bg-gradient-to-b from-purple-500/50 to-transparent" />
                )}

                <div className="relative flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:bg-slate-900/70">
                  {/* Status Badge */}
                  <div className="absolute -top-3 right-6">
                    {service.available ? (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        {service.status}
                      </div>
                    ) : (
                      <div className="px-3 py-1.5 rounded-full bg-slate-800 border border-purple-500/30 text-slate-400 text-xs font-bold">
                        {service.status}
                      </div>
                    )}
                  </div>

                  {/* Left: Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`service-icon relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${service.gradient} p-[2px] shadow-2xl`}
                    >
                      <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center text-white text-3xl">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  <div className="service-line hidden md:block w-16 h-0.5 self-center bg-gradient-to-r from-purple-500/50 to-transparent origin-left" />

                  {/* Right: Content */}
                  <div className="service-content flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="service-feature flex items-center gap-2 text-sm text-slate-400"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="service-cta pt-2">
                      <div className="inline-flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
                        <span>
                          {service.available ? "Get Started" : "Learn More"}
                        </span>
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}
                  />

                  {/* Decorative Corner Brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm">
            More services coming soon. Join the waitlist to be the first to
            know.
          </p>
        </div>
      </div>
    </section>
  );
}
