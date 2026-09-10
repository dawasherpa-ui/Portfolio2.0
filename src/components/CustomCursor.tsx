"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHover, setIsProjectHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide cursor on touch/coarse devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Center elements perfectly with GSAP xPercent/yPercent so transforms never offset
    gsap.set([cursor, follower], {
      xPercent: -50,
      yPercent: -50,
      pointerEvents: "none",
    });

    // Fast, crisp follower interpolation
    const xFollowerTo = gsap.quickTo(follower, "x", { duration: 0.12, ease: "power2.out" });
    const yFollowerTo = gsap.quickTo(follower, "y", { duration: 0.12, ease: "power2.out" });

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      // Dot follows pointer with zero latency
      gsap.set(cursor, { x: e.clientX, y: e.clientY });

      // Follower tracks quickly and smoothly
      xFollowerTo(e.clientX);
      yFollowerTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest("[data-cursor='view']");
      const interactiveEl = target.closest("button, a, input, textarea, [role='button'], .cursor-pointer");

      if (projectEl) {
        setIsProjectHover(true);
        setCursorText("EXPLORE");
        setIsHovered(true);
        gsap.to(follower, {
          width: 80,
          height: 80,
          duration: 0.2,
          ease: "power2.out",
        });
      } else if (interactiveEl) {
        setIsProjectHover(false);
        setCursorText("");
        setIsHovered(true);
        gsap.to(follower, {
          width: 48,
          height: 48,
          duration: 0.2,
          ease: "power2.out",
        });
      } else {
        setIsProjectHover(false);
        setCursorText("");
        setIsHovered(false);
        gsap.to(follower, {
          width: 32,
          height: 32,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    const onMouseDown = () => {
      gsap.to(follower, { scale: 0.8, duration: 0.15 });
    };

    const onMouseUp = () => {
      gsap.to(follower, { scale: 1, duration: 0.15 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Central dot - sticks directly to pointer coordinates */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-50 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
      />

      {/* Trailing follower circle - perfectly centered */}
      <div
        ref={followerRef}
        style={{ width: 32, height: 32 }}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none z-40 flex items-center justify-center transition-colors duration-200 ${
          isProjectHover
            ? "bg-primary/20 backdrop-blur-sm border-primary text-primary shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            : isHovered
            ? "bg-primary/10 border-primary/50"
            : "border-foreground/30 bg-transparent"
        }`}
      >
        {isProjectHover && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-foreground select-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
