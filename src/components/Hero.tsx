"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown, Cpu, Sparkles, Layers, Terminal, ArrowUpRight, Zap } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { PROJECTS } from "@/lib/data";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  // GSAP kinetic entrance
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-badge", {
        y: -30,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          titleRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          descRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          metricsRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  const flagshipReel = PROJECTS.filter((p) => p.featured);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-center items-center bg-background overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 pb-16"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute top-2/3 right-10 w-[450px] h-[450px] bg-accent/10 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 flex-grow flex flex-col justify-center items-center">
        {/* Availability Badge */}
        <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs uppercase tracking-widest shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          AI Architect & Software Engineer
        </div>

        {/* Main Name Headline */}
        <div>
          <h1
            ref={titleRef}
            className="text-7xl sm:text-8xl md:text-9xl font-serif font-black tracking-tighter text-foreground leading-none"
          >
            Dawa<span className="text-primary">.</span>
          </h1>

          <div
            ref={subtitleRef}
            className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground"
          >
            <span>Autonomous AI Systems</span>
            <span className="text-primary/40">•</span>
            <span>Full-Stack Architect</span>
            <span className="text-primary/40">•</span>
            <span>Engineering Leadership</span>
          </div>
        </div>

        {/* Pitch Paragraph */}
        <p
          ref={descRef}
          className="text-base sm:text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-2xl mx-auto"
        >
          Specialized in turning intricate models and complex logic into{" "}
          <span className="text-foreground font-semibold">
            high-performance digital products
          </span>
          . Fast, scalable, and obsessively engineered for real-world impact.
        </p>

        {/* Primary CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full max-w-md"
        >
          <ScrollLink
            to="featured-works"
            smooth={true}
            duration={600}
            className="w-full sm:w-auto cursor-pointer px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-xl hover:shadow-primary/25 flex items-center justify-center gap-2 text-sm md:text-base group"
          >
            <Sparkles className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
            <span>Explore Flagship Works</span>
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            className="w-full sm:w-auto cursor-pointer px-8 py-4 border border-input bg-background/60 backdrop-blur text-foreground font-medium rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <Zap className="w-4 h-4" />
            <span>Let&apos;s Connect</span>
          </ScrollLink>
        </div>

        {/* Selected Works Live Ribbon Reel */}
        <div className="w-full max-w-4xl pt-6">
          <div className="flex items-center justify-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-muted-foreground/80">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Recent Flagship Deployments:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {flagshipReel.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/40 border border-border/80 hover:border-primary/50 hover:bg-primary/5 text-xs font-medium text-foreground transition-all duration-300"
              >
                <span>{item.title}</span>
                <span className="text-[10px] text-muted-foreground font-mono">
                  ({item.category})
                </span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Metrics Strip */}
        <div
          ref={metricsRef}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-border/50 text-center"
        >
          <div className="p-3">
            <div className="text-3xl md:text-4xl font-black font-serif text-foreground">
              13<span className="text-primary">+</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
              Shipped Systems
            </div>
          </div>

          <div className="p-3">
            <div className="text-3xl md:text-4xl font-black font-serif text-foreground">
              8<span className="text-primary">+</span> yrs
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
              Engineering Depth
            </div>
          </div>

          <div className="p-3">
            <div className="text-3xl md:text-4xl font-black font-serif text-foreground">
              AI<span className="text-primary">&</span>Web3
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
              Domain Mastery
            </div>
          </div>

          <div className="p-3">
            <div className="text-3xl md:text-4xl font-black font-serif text-foreground">
              100<span className="text-primary">%</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
              Production Grade
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="pt-8 text-muted-foreground animate-bounce cursor-pointer">
        <ScrollLink to="featured-works" smooth={true} duration={500}>
          <ArrowDown className="w-5 h-5 hover:text-primary transition-colors" />
        </ScrollLink>
      </div>
    </section>
  );
}
