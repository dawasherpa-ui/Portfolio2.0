"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Terminal,
  ShieldAlert,
  Bot,
  Code,
  Cpu,
  Briefcase,
  Sparkles,
  Lock,
  GitBranch,
} from "lucide-react";
import { TIMELINE } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Terminal: Terminal,
  ShieldAlert: ShieldAlert,
  Bot: Bot,
  Code: Code,
  Cpu: Cpu,
  Briefcase: Briefcase,
  Sparkles: Sparkles,
  Lock: Lock,
};

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const line = lineRef.current;
      if (!container || !line) return;

      // Animate vertical laser beam filling as user scrolls
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        }
      );

      // Milestone cards entrance animation
      const cards = gsap.utils.toArray<HTMLElement>(".timeline-card-wrapper");
      cards.forEach((card) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-32 bg-background relative z-20 overflow-hidden border-t border-border/50"
    >
      {/* Background decoration */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            Engineering Evolution
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-black text-foreground mb-6">
            The <span className="text-primary italic">Origins</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From ethical hacking and vulnerability research at age 12 to architecting cutting-edge AI systems and scalable production backends.
          </p>
        </div>

        <div className="relative">
          {/* Static Track Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/60 md:-translate-x-1/2" />

          {/* Animated Glowing Laser Line */}
          <div
            ref={lineRef}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary shadow-[0_0_12px_rgba(59,130,246,0.8)] md:-translate-x-1/2 will-change-transform origin-top"
          />

          <div className="space-y-16 sm:space-y-20">
            {TIMELINE.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Terminal;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.year + item.title}
                  className={`timeline-card-wrapper relative flex items-start md:items-center ${
                    isLeft ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Spacer for desktop 50/50 alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Central Node Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(59,130,246,0.4)] z-20 group hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                      isLeft ? "md:pr-14 md:text-right" : "md:pl-14 md:text-left"
                    }`}
                  >
                    <div className="group relative bg-background border border-border/80 hover:border-primary/50 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                      {/* Top Bar with Year Tag */}
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isLeft ? "md:flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider border border-primary/20">
                          {item.year}
                        </span>
                        <div className="h-px flex-grow bg-border/40" />
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
