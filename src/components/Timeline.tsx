"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldAlert, Bot, Code, Cpu, Briefcase, Sparkles, ChevronRight, Lock } from "lucide-react";
import { TIMELINE } from "@/lib/data";

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
  return (
    <section id="about" className="py-32 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
          >
            My Path
          </motion.h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every step—from ethical hacking to AI architecture—was a lesson in solving the unsolvable.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-16">
            {TIMELINE.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Terminal;
              const isLeft = index % 2 === 0;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex items-start md:items-center ${
                    isLeft ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Spacer for desktop alignment */}
                  <div className="hidden md:block md:w-1/2" />
                  
                  {/* Icon Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[15px] md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-primary shadow-[0_0_0_4px_rgba(var(--primary),0.1)] z-20">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}>
                    <div className="group relative bg-background border border-border/50 hover:border-primary/50 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? "md:flex-row-reverse" : "flex-row"}`}>
                        <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                          {item.year}
                        </span>
                        <div className="h-px flex-grow bg-border/50" />
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
