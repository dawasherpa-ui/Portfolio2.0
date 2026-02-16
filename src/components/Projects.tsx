"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/10 relative">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects that demonstrate versatility, complexity, and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-background border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Project header/image placeholder */}
              {/* Project Image */}
              <div className="relative h-48 bg-muted overflow-hidden flex items-center justify-center p-6 bg-gradient-to-br from-secondary to-muted">
                 {/* Fallback Icon (visible if image fails or loading) */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-12 h-12 text-muted-foreground/30 group-hover:text-primary transition-colors duration-300" />
                 </div>

                 {/* Actual Image */}
                 <Image 
                    src={project.image} 
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className="absolute inset-0 w-full h-full object-cover object-top z-10 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                    }}
                 />
                 
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                 
                 {/* Gradient for text readability if needed, though tags have their own bg */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 z-10" />

                <div className="absolute bottom-4 right-4 flex gap-2 z-30">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="bg-background/90 backdrop-blur px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-muted-foreground rounded shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                  <Link 
                    href={project.link} 
                    className="inline-flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors group/link"
                  >
                    View Project <ArrowRight className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href="#" 
                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-all"
                    aria-label="View Source Code"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
