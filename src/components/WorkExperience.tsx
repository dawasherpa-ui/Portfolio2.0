"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Building2, Calendar, ShieldCheck } from "lucide-react";
import { WORK_EXPERIENCE } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function WorkExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".exp-item");
      items.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          x: -30,
          duration: 0.7,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
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
      id="experience"
      className="py-28 bg-background relative overflow-hidden border-t border-border/50"
    >
      {/* Background glow */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Production Leadership</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-black text-foreground mb-6">
            Work <span className="text-primary italic">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Engineering scalable platforms, autonomous AI pipelines, and enterprise software across high-impact teams.
          </p>
        </div>

        {/* Experience List */}
        <div className="relative border-l-2 border-border/80 ml-4 sm:ml-8 space-y-10 pb-6">
          {WORK_EXPERIENCE.map((experience, index) => {
            const isCurrent = experience.years.includes("Present");

            return (
              <div
                key={experience.company + index}
                className="exp-item relative pl-8 sm:pl-12 group"
              >
                {/* Timeline Node */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-background transition-all duration-300 ${
                    isCurrent
                      ? "bg-primary ring-4 ring-primary/20"
                      : "bg-muted-foreground/40 group-hover:bg-primary"
                  }`}
                />

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-2xl bg-secondary/20 border border-border/70 hover:border-primary/50 hover:bg-secondary/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">
                          {experience.company}
                        </h3>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-primary/15 text-primary border border-primary/25">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                            Current
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm sm:text-base font-semibold text-foreground/80 mt-1">
                        {experience.position}
                      </h4>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-background/80 border border-border/60 rounded-full text-xs font-mono text-muted-foreground self-start sm:self-auto">
                      <Calendar className="w-3 h-3 text-primary" />
                      {experience.years}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-3xl">
                    {experience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
