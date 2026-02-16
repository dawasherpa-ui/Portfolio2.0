"use client";

import { motion } from "framer-motion";
import { VENTURES } from "@/lib/data";
import { Globe, Lightbulb, User, ArrowUpRight, Icon, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export function Ventures() {
  return (
    <section id="ventures" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <div className="col-span-full mb-12 lg:mb-0 lg:col-span-full lg:w-xl">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
              My <span className="text-primary italic">Ventures</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I don't just build apps—I build <span className="text-foreground font-medium">audiences</span>. These are the digital brands and communities I <strong>own and operate</strong>, proving my ability to generate traffic and sustain engagement across diverse niches.
            </p>
          </div>

          {VENTURES.map((venture, index) => (
            <motion.a
              key={index}
              href={venture.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="group relative bg-secondary/30 py-4 px-8 rounded-2xl border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 block h-full flex justify-between"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-accent" />
              </div>

              <div className="">
                <h3 className="text-xl font-bold font-serif text-foreground mb-2 group-hover:text-accent transition-colors">
                  {venture.name}
                </h3>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest text-[10px]">
                  {venture.role}
              </p>
              </div>
              {venture.link.startsWith("https://www.facebook.com")? <Facebook className="w-5 h-5 text-accent justify-end self-end"/> : <Instagram className="w-5 h-5 text-purple-600 justify-end self-end"/>}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
