"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { X, Menu, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Ventures", to: "ventures" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-2 shadow-sm"
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
              duration={500}
              className="group cursor-pointer flex items-center gap-3"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300 shadow-sm">
                <img 
                    src="https://github.com/dawasherpa-ui.png" 
                    alt="Dawa Sherpa" 
                    className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                Dawa<span className="text-primary">.</span>
              </span>
            </ScrollLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {NAV_ITEMS.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer dark:hover:text-white"
                  activeClass="text-primary font-semibold"
                  spy={true}
                  aria-label={`Scroll to ${item.name} section`}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
            <div className="pl-6 border-l border-border flex items-center gap-3">
              <a 
                href="https://wa.me/9779862989686"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 hover:bg-green-500/20 transition-all font-medium text-xs md:text-sm dark:text-green-400 border border-green-500/20 hover:shadow-sm hover:shadow-green-500/10"
                title="Chat on WhatsApp"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-4 h-4" />
                <span className="hidden sm:inline">DM me</span>
                <span className="sm:hidden">DM</span>
              </a>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
             <a 
                href="https://wa.me/9779862989686"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 hover:bg-green-500/20 transition-all font-medium text-xs dark:text-green-400 border border-green-500/20"
                title="Chat on WhatsApp"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-4 h-4" />
                <span>DM</span>
              </a>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted transition-colors focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
           initial={{ opacity: 0, height: 0 }}
           animate={{ opacity: 1, height: "auto" }}
           exit={{ opacity: 0, height: 0 }}
           className="md:hidden bg-background border-b border-border shadow-lg overflow-hidden"
        >
          <div className="px-4 py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
