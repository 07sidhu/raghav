"use client";
import { useEffect } from "react";
import Lenis from "lenis";

// 1. Precise Interface Protocol
export interface IScrollEngine {
  scrollTo: (target: string | number | HTMLElement, options?: {
    offset?: number;
    duration?: number;
    immediate?: boolean;
  }) => void;
  raf: (time: number) => void;
  destroy: () => void;
}

// 2. Global Declaration (Using a unique key to avoid library collision)
declare global {
  interface Window {
    scrollInstance: IScrollEngine | null;
  }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let engine: IScrollEngine | null = null;
    let rafId: number;

    const startEngine = () => {
      // 3. Initialize the Core Engine
      const instance = new Lenis({
        duration: 1.2,
        lerp: 0.08,
        smoothWheel: true,
        touchMultiplier: 1.5, // Optimized for mobile touch
      });

      // 4. Safe Bridge Cast
      engine = (instance as unknown) as IScrollEngine;
      window.scrollInstance = engine;

      // 5. High-Performance Animation Loop
      function raf(time: number) {
        instance.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
      
      console.log("🚀 SCROLL_PROTOCOL_INITIALIZED");
    };

    // 6. DEFERRED INITIALIZATION (The Mobile Speed Hack)
    // We wait for the browser to finish painting the Hero before loading Lenis
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => startEngine());
    } else {
      setTimeout(startEngine, 200);
    }

    // 7. CLEANUP PROTOCOL
    return () => {
      if (engine) {
        engine.destroy();
        window.scrollInstance = null;
      }
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
}