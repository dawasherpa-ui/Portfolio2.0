"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code2,
  ArrowRight,
  Filter,
  Sparkles,
  Layers,
  X,
  CheckCircle2,
  Eye,
} from "lucide-react";
import { PROJECTS, Project } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
  "All",
  "AI & LLM",
  "SaaS & Web",
  "Deep Learning & Tools",
  "Open Source",
] as const;

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on activeCategory
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="projects"
      className="py-28 bg-background relative z-20 overflow-hidden border-t border-border/50"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Complete Portfolio Archive
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-black text-foreground mb-6">
            All Works & <span className="text-primary italic">Systems</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From autonomous AI agents and deep learning models to scalable full-stack platforms and developer libraries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {CATEGORIES.map((category) => {
            const count =
              category === "All"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === category).length;

            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "bg-background/80 border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-secondary/40"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onQuickView={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onQuickView,
}: {
  project: Project;
  index: number;
  onQuickView: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Subtle 3D tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 8;
    const rotateY = (x / rect.width) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      data-cursor="view"
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-background border border-border/80 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/50 transition-all duration-300 flex flex-col h-full transform-style-3d will-change-transform"
      >
        {/* Project Image Box */}
        <div className="relative h-52 bg-muted/40 overflow-hidden flex items-center justify-center border-b border-border/60">
          {/* Fallback Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Code2 className="w-12 h-12 text-muted-foreground/30 group-hover:text-primary transition-colors duration-300" />
          </div>

          {/* Screenshot */}
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-top z-10 transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />

          {/* Gradient for badge contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity" />

          {/* Quick View Button on Image Hover */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView();
            }}
            className="absolute z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-full bg-background/90 backdrop-blur-md text-foreground text-xs font-semibold shadow-lg hover:bg-primary hover:text-white flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Deep Dive</span>
          </button>

          {/* Category / Metric Badges */}
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center z-20">
            <span className="bg-background/90 backdrop-blur-md px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider text-muted-foreground rounded-md border border-border/50 shadow-sm">
              {project.category || "Project"}
            </span>

            {project.featured && (
              <span className="bg-primary/90 text-white backdrop-blur-md px-2 py-0.5 text-[9px] uppercase font-bold tracking-widest rounded-md shadow-sm flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> Flagship
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-xl font-bold font-serif text-foreground mb-2.5 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
              {project.description}
            </p>
          </div>

          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary/60 text-muted-foreground text-[10px] font-mono px-2 py-0.5 rounded border border-border/40"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-[10px] font-mono text-muted-foreground/80 px-1 py-0.5">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-border/60">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-foreground hover:text-primary transition-colors group/link"
              >
                <span>Live Demo</span>
                <ArrowRight className="ml-1 w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  onClick={onQuickView}
                  className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors text-xs font-mono"
                  title="Architecture Details"
                >
                  <Eye className="w-4 h-4" />
                </button>

                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                    aria-label="View Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-background/80 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-3xl bg-background border border-border rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 border border-border text-foreground hover:bg-secondary hover:text-primary transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary/90 text-white backdrop-blur-md mb-2 inline-block">
                {project.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-black text-foreground">
                {project.title}
              </h3>
            </div>

            {project.metrics && (
              <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-mono font-semibold backdrop-blur-md">
                ⚡ {project.metrics}
              </span>
            )}
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Overview
            </h4>
            <p className="text-foreground/90 text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Key Technical Architecture
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-foreground/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-secondary border border-border text-foreground font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center gap-4 pt-6 border-t border-border">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-center hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Visit Production System</span>
              <ExternalLink className="w-4 h-4" />
            </Link>

            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl border border-border hover:bg-secondary text-foreground font-medium transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">Repository</span>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
