"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS, Project } from "@/lib/data";
import { ExternalLink, Github, Sparkles, CheckCircle2, ArrowRight, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Filter only featured flagship projects
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  useGSAP(
    () => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      const getScrollDistance = () => {
        return track.scrollWidth - window.innerWidth;
      };

      const scrollDistance = getScrollDistance();
      if (scrollDistance <= 0) return;

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        invalidateOnRefresh: true,
      });

      const st = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => `+=${Math.max(getScrollDistance() + 100, 1200)}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleX(${self.progress})`;
          }
        },
      });

      // Refresh ScrollTrigger after elements/images settle
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 350);

      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", handleResize);
        st.kill();
        tween.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="featured-works"
      className="relative w-full h-screen bg-background text-foreground overflow-hidden py-8 md:py-12 flex flex-col justify-between border-t border-border/60 z-10"
    >
      {/* Background ambient radial lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-end justify-between flex-shrink-0">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Flagship Engineering
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-foreground">
            Featured <span className="text-primary italic">Creations</span>
          </h2>
        </div>

        <div className="hidden md:flex flex-col items-end gap-2 text-right">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Scroll to explore flagship systems
          </span>
          <div className="w-48 h-1 bg-border/60 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-primary origin-left transition-transform duration-75"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>

      {/* Horizontal Pinned Track Container */}
      <div className="w-full flex-grow flex items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-nowrap gap-6 md:gap-10 px-4 sm:px-8 will-change-transform py-2 items-center"
        >
          {featuredProjects.map((project, index) => (
            <FeaturedCard
              key={project.title}
              project={project}
              index={index}
              total={featuredProjects.length}
            />
          ))}
        </div>
      </div>

      {/* Footer hint */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 flex items-center justify-between text-xs text-muted-foreground font-mono flex-shrink-0">
        <span className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-primary" />
          <span>{featuredProjects.length} Flagship Systems in Production</span>
        </span>
        <span className="hidden sm:inline">
          Explore complete archive below ↓
        </span>
      </div>
    </section>
  );
}

function FeaturedCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const indexStr = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  return (
    <div
      data-cursor="view"
      className="flex-shrink-0 w-[88vw] sm:w-[78vw] md:w-[68vw] lg:w-[58vw] max-w-4xl rounded-3xl bg-secondary/30 border border-border/80 hover:border-primary/50 backdrop-blur-xl p-5 md:p-8 shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
    >
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-border/60">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            {indexStr} / {totalStr}
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {project.category}
          </span>
        </div>

        {project.metrics && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {project.metrics}
          </span>
        )}
      </div>

      {/* Main Grid: Content + Device Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-4 items-center flex-grow">
        {/* Left Column: Details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          <div>
            <h3 className="text-xl md:text-3xl font-serif font-black text-foreground group-hover:text-primary transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Key highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-1.5 py-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/80 block">
                Architecture Highlights:
              </span>
              <ul className="space-y-1">
                {project.highlights.slice(0, 2).map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-1.5 text-xs text-foreground/90"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1 pt-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-background/80 border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-3 border-t border-border/40">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background font-semibold text-xs hover:bg-primary hover:text-white transition-all shadow-md group/btn"
            >
              <span>Live System</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>

            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-border bg-background/50 hover:border-primary/50 text-foreground text-xs font-medium transition-all"
                title="View Source Code"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Code</span>
              </Link>
            )}
          </div>
        </div>

        {/* Right Column: Browser Mockup Preview */}
        <div className="lg:col-span-7 relative h-48 sm:h-64 md:h-72 rounded-2xl overflow-hidden border border-border/80 bg-background/80 shadow-lg flex flex-col group/mockup">
          {/* Browser Top Window Bar */}
          <div className="h-7 bg-secondary/80 border-b border-border flex items-center px-3 justify-between select-none flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/70 inline-block" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/70 inline-block" />
              <span className="w-2 h-2 rounded-full bg-green-500/70 inline-block" />
            </div>
            <div className="px-2.5 py-0.5 rounded-full bg-background/70 border border-border/50 text-[9px] font-mono text-muted-foreground truncate max-w-[160px] sm:max-w-xs">
              {project.link.replace("https://", "")}
            </div>
            <ExternalLink className="w-3 h-3 text-muted-foreground group-hover/mockup:text-primary transition-colors" />
          </div>

          {/* Mockup Image Container */}
          <div className="relative flex-grow w-full overflow-hidden bg-muted/30">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover/mockup:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
