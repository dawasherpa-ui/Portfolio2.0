"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { Cpu, Zap, Code2, Sparkles, CheckCircle2 } from "lucide-react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...SKILLS.map((s) => s.category)];

  const displayedSkills =
    activeCategory === "All"
      ? SKILLS.flatMap((s) => s.items)
      : SKILLS.find((s) => s.category === activeCategory)?.items || [];

  return (
    <section id="skills" className="py-28 bg-secondary/15 relative overflow-hidden border-t border-border/50">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-black text-foreground mb-6">
            Core <span className="text-primary italic">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A battle-tested technology arsenal spanning modern full-stack frameworks, AI/LLM architectures, and cloud infrastructure.
          </p>
        </div>

        {/* Superpower / Core Strength Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-primary/20 p-8 sm:p-12 text-center group hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500">
            <div className="relative z-10 flex flex-col items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary font-mono font-bold tracking-wide uppercase text-xs">
                <Zap className="w-3.5 h-3.5" /> Unlocked Ability
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold font-serif text-foreground">
                Rapid Tech Adaptation
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                My primary competitive edge is the <span className="text-foreground font-semibold">speed of comprehension</span>. 
                Whether it&apos;s an undocumented machine learning model, a new distributed database, or an unfamiliar language, I deconstruct architecture and ship production systems exponentially faster than industry norms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-105"
                  : "bg-background border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Skill Grid */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-16"
        >
          <AnimatePresence>
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill + index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-background/90 border border-border/80 hover:border-primary/60 hover:bg-primary/5 hover:text-primary text-foreground font-medium text-sm transition-all duration-300 shadow-sm hover:scale-105 cursor-default"
              >
                <img
                  src={`https://cdn.simpleicons.org/${skill
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .replace(".", "dot")
                    .replace("(", "")
                    .replace(")", "")}/000000`}
                  className="w-4 h-4 dark:invert opacity-70 group-hover:opacity-100 transition-opacity"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                  alt=""
                />
                <span>{skill}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Continuous Smooth Infinite Marquee */}
        <div className="relative flex flex-col gap-6 overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee Row */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-4 whitespace-nowrap"
              animate={{ x: "-50%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            >
              {[
                ...SKILLS.flatMap((s) => s.items),
                ...SKILLS.flatMap((s) => s.items),
              ].map((skill, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-background border border-border text-foreground/90 font-mono text-sm shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
