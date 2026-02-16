"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Instagram, ArrowUp, MessageCircle, Send, Gamepad2, Phone } from "lucide-react";
import { PROFILE } from "@/lib/data";

const iconMap: { [key: string]: any } = {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  Send,
  Gamepad2,
  Phone
};

export function Contact() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="relative bg-secondary/80 text-secondary-foreground pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[128px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Connect.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Ready to build the future? Reach out for collaborations in AI, Web3, or custom software solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {PROFILE.socials.map((social, index) => {
            const Icon = iconMap[social.icon] || Mail;
            return (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-16 h-16 rounded-full bg-background border border-border shadow-md hover:scale-110 hover:border-primary transition-all duration-300 relative"
                title={social.name}
              >
                <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-foreground text-background text-xs px-2 py-1 rounded">
                  {social.name}
                </div>
                <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </a>
            );
          })}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-muted-foreground/60">
          <p>© {new Date().getFullYear()} Dawa. Built with <span className="text-red-500">♥</span> and <span className="text-primary">Next.js</span>.</p>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 flex items-center gap-2 hover:text-foreground transition-colors group"
          >
            Back to top <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
