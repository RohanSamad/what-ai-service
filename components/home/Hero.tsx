'use client';

import { useEffect, useRef } from 'react';
import gsap from '@/lib/gsap';
import CTAButton from '@/components/shared/CTAButton';

export default function Hero() {
  const heroRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const rightSection = rightSectionRef.current;
    if (!canvas || !rightSection) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      connections: number[];
    }

    let nodes: Node[] = [];
    let animationFrameId: number;

    const initCanvas = () => {
      const rect = rightSection.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      nodes = [];
      const nodeCount = 60;

      // Create nodes with velocity
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: 50 + Math.random() * (canvas.width - 100),
          y: 50 + Math.random() * (canvas.height - 100),
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
        });
      }

      // Create connections
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = otherNode.x - node.x;
            const dy = otherNode.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 180 && node.connections.length < 5) {
              node.connections.push(j);
            }
          }
        });
      });
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw connections
      nodes.forEach((node) => {
        node.connections.forEach((targetIndex) => {
          const target = nodes[targetIndex];

          const gradient = ctx.createLinearGradient(
            node.x,
            node.y,
            target.x,
            target.y
          );

          gradient.addColorStop(0, 'rgba(168, 85, 247, 0.25)');
          gradient.addColorStop(0.5, 'rgba(236, 72, 153, 0.25)');
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0.25)');

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(168, 85, 247, 0.9)';
        ctx.fill();

        // Outer ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    initCanvas();
    draw();

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        '.gsap-reveal',
        {
          autoAlpha: 0,
          y: 30,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-20   flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950"
    >
      {/* Hexagon Grid Background - Always Visible */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons"
              x="0"
              y="0"
              width="60"
              height="52"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="30,0 60,17.3 60,52 30,69.3 0,52 0,17.3"
                fill="none"
                stroke="url(#hexGradient)"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="rgb(236, 72, 153)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Interactive Hexagon Grid on Hover */}
      <div className="hexagon-hover absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons-hover"
              x="0"
              y="0"
              width="60"
              height="52"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="30,0 60,17.3 60,52 30,69.3 0,52 0,17.3"
                fill="none"
                stroke="url(#hexGradientHover)"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="hexGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.5" />
              <stop offset="50%" stopColor="rgb(236, 72, 153)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons-hover)" />
        </svg>
      </div>

      {/* Ambient Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-600/15 rounded-full blur-3xl" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="gsap-reveal text-3xl md:text-5xl font-bold leading-tight">
              <span className="text-white">Work is Changing.</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Time is Your New Bottleneck.
              </span>
            </h1>

            {/* Description */}
            <p className="gsap-reveal text-lg  text-slate-300 leading-relaxed max-w-xl">
              Stop drowning in admin. Get an AI Executive Assistant that works
              24/7, never misses a call, and integrates perfectly with your
              life.
            </p>

            {/* CTA Buttons */}
            <div className="gsap-reveal flex flex-wrap gap-4">
              <CTAButton
                variant="primary"
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <span className="relative z-10">Book a Demo</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                className="border-purple-500/30 hover:border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
              >
                See How It Works →
              </CTAButton>
            </div>

            {/* Stats */}
            <div className="gsap-reveal flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-slate-400">Always Active</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-slate-400">Automated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10x</div>
                <div className="text-sm text-slate-400">Productivity</div>
              </div>
            </div>
          </div>

          {/* Right: Neural Network Canvas */}
          <div
            ref={rightSectionRef}
            className="relative w-full h-[500px] hidden lg:block"
          >
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <style jsx>{`
        .hexagon-hover:hover {
          animation: hexagonPulse 2s ease-in-out infinite;
        }

        @keyframes hexagonPulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
}