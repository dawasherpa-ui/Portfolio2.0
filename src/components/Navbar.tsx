"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { X, Menu, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Works", to: "featured-works", highlight: true },
  { name: "Archive", to: "projects" },
  { name: "Journey", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Skills", to: "skills" },
  { name: "Ventures", to: "ventures" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Ultra-smooth physics-based scroll progress (runs on GPU, no re-renders)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-border/70 py-2.5 shadow-sm"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={600}
              className="group cursor-pointer flex items-center gap-3"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300 shadow-sm">
                <img
                  src="https://github.com/dawasherpa-ui.png"
                  alt="Dawa Sherpa"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif font-black text-xl text-foreground group-hover:text-primary transition-colors tracking-tight">
                Dawa<span className="text-primary">.</span>
              </span>
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1 sm:space-x-2">
              {NAV_ITEMS.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={600}
                  className={cn(
                    "text-xs uppercase tracking-wider font-mono px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer",
                    item.highlight
                      ? "bg-primary/10 text-primary font-bold border border-primary/20 hover:bg-primary hover:text-white"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  )}
                  activeClass="!text-primary font-bold !bg-primary/10"
                  spy={true}
                  offset={-50}
                  aria-label={`Scroll to ${item.name} section`}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>

            <div className="pl-4 border-l border-border flex items-center gap-3">
              <a
                href="https://wa.me/9779862989686"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 transition-all font-mono font-bold text-xs dark:text-emerald-400 border border-emerald-500/20"
                title="Chat on WhatsApp"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-3.5 h-3.5"
                />
                <span>DM</span>
              </a>

              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2.5">
            <a
              href="https://wa.me/9779862989686"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-mono text-xs border border-emerald-500/20"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-3.5 h-3.5"
              />
              <span>DM</span>
            </a>

            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Thin scroll progress indicator line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-border/40 overflow-hidden pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-accent to-primary origin-left will-change-transform shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          style={{ scaleX }}
        />
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border shadow-xl px-4 py-4 space-y-2"
        >
          {NAV_ITEMS.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-50}
              className="block px-3 py-2.5 rounded-lg text-sm font-mono uppercase tracking-wider text-foreground hover:bg-secondary transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
