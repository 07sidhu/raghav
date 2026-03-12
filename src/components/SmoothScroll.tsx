"use client";
import { useEffect } from "react";
import Lenis from "lenis";

// 1. Define the "System Protocol" for our scroll engine
// This tells TypeScript exactly which methods the object has.
interface ScrollEngine {
  scrollTo: (target: string | number | HTMLElement, options?: {
    offset?: number;
    lerp?: number;
    duration?: number;
    immediate?: boolean;
    lock?: boolean;
    force?: boolean;
  }) => void;
  raf: (time: number) => void;
  destroy: () => void;
}

// 2. Register it globally
declare global {
  interface Window {
    Lenis: ScrollEngine | null;
  }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize the library
    const instance = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      smoothWheel: true,
    });

    // 3. The "Bridge Cast"
    // We cast to 'unknown' first, then to our 'ScrollEngine' 
    // This is the standard TS way to re-type a conflicting library instance
    const engine = (instance as unknown) as ScrollEngine;

    // Assign to window
    window.Lenis = engine;

    function raf(time: number) {
      engine.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      engine.destroy();
      window.Lenis = null;
    };
  }, []);

  return <>{children}</>;
}