"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDown, Cpu, Sparkles } from "lucide-react";
import { PROFILE } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden px-4 md:px-0">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-primary rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent rounded-full blur-[128px]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Available for Global Opportunities
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
            <h1 className="text-7xl md:text-9xl font-serif font-black tracking-tighter text-foreground leading-none mb-4">
              Dawa<span className="text-primary">.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground max-w-4xl mx-auto">
              Innovative Software Engineer <span className="text-primary/50 mx-2">|</span> AI & LLM Architect <span className="text-primary/50 mx-2">|</span> Systems Creator
            </h2>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
           I build <span className="text-foreground font-medium">innovative software</span>, <span className="text-foreground font-medium">AI-powered agents</span>, and <span className="text-foreground font-medium">intelligent systems</span> that turn complex ideas into reality. 
           Fast, reliable, and scalable.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ScrollLink 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="group relative cursor-pointer px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/25 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            View Featured Work
          </ScrollLink>
          
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="group cursor-pointer px-8 py-4 border border-input bg-background/50 backdrop-blur text-foreground font-medium rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center gap-2"
          >
            <Cpu className="w-4 h-4" />
            Contact Me
          </ScrollLink>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ScrollLink to="about" smooth={true} duration={500}>
          <ArrowDown className="w-6 h-6 hover:text-primary transition-colors" />
        </ScrollLink>
      </motion.div>
    </section>
  );
}
