"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Core Technologies
        </motion.h2>
        
        {/* Superpower / Core Strength Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-primary/20 p-8 md:p-12 text-center group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                     <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold tracking-wide uppercase text-xs">
                        🚀 Unlocked Ability
                     </span>
                     <h3 className="text-3xl md:text-4xl font-bold font-serif text-foreground">
                        Rapid Tech Adaptation
                     </h3>
                     <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                        My true strength isn't just knowing code—it's the <span className="text-foreground font-semibold">speed</span> at which I master it. 
                        Whether it's a new framework, a complex AI model, or an uncharted API, I deconstruct and deploy solutions faster than the industry standard.
                     </p>
                </div>
            </div>
        </motion.div>

        <div className="relative flex flex-col gap-12 overflow-hidden py-8">
            {/* Gradient masks for smooth fade */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Marquee Row 1 */}
            <div className="flex">
                <motion.div 
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                >
                    {[...SKILLS.flatMap(s => s.items), ...SKILLS.flatMap(s => s.items)].map((skill, index) => (
                        <div 
                            key={index}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-secondary/50 border border-border text-foreground font-medium text-lg shadow-sm hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-colors min-w-[150px]"
                        >
                            {/* Try to fetch logo, fallback to text if needed. For now just text with a colored dot? Or simple icon? */}
                            {/* User asked for logo marquee. Let's try simple icons */}
                             <img 
                                src={`https://cdn.simpleicons.org/${skill.toLowerCase().replace(" ", "").replace(".", "dot").replace("(", "").replace(")", "")}/000000`} 
                                className="w-6 h-6 mr-3 dark:invert opacity-70"
                                onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                                alt=""
                             />
                            {skill}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Marquee Row 2 (Reverse) */}
             <div className="flex">
                <motion.div 
                    className="flex gap-8 whitespace-nowrap"
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                >
                    {[...SKILLS.flatMap(s => s.items).reverse(), ...SKILLS.flatMap(s => s.items).reverse()].map((skill, index) => (
                        <div 
                            key={index}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-secondary/50 border border-border text-foreground font-medium text-lg shadow-sm hover:border-accent/50 hover:bg-accent/5 hover:text-accent transition-colors min-w-[150px] "
                        >
                             <img 
                                src={`https://cdn.simpleicons.org/${skill.toLowerCase().replace(" ", "").replace(".", "dot").replace("(", "").replace(")", "")}/000000`} 
                                className="w-6 h-6 mr-3 dark:invert opacity-70"
                                onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                                alt=""
                             />
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
