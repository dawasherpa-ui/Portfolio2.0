"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { WORK_EXPERIENCE } from "@/lib/data";
import { cn } from "@/lib/utils";

export function WorkExperience() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
        {/* Background Decorative Elements */}
       <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
       
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Work Experience
          </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional roles and contributions.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-border/60 ml-3 md:ml-6 space-y-12 pb-12">
          {WORK_EXPERIENCE.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div 
                className={cn(
                    "absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-background transition-colors duration-300",
                    index === 0 ? "bg-primary" : "bg-muted-foreground/30 group-hover:bg-primary"
                )}
              />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
                <div>
                   <h3 className="text-2xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">
                    {experience.company}
                  </h3>
                   <h4 className="text-lg font-medium text-foreground/80 mt-1">
                    {experience.position}
                  </h4>
                </div>
                
                 <span className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-semibold text-muted-foreground whitespace-nowrap self-start">
                  {experience.years}
                </span>
              </div>

              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
