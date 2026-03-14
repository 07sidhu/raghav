"use client";
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

// 1. THE STATIC COMPONENT: Wrapped in React.memo to prevent expensive re-renders
const MemoizedSVG = React.memo(() => (
  <svg 
    width="100%" 
    height="100%" 
    viewBox="0 0 3735.49 2543" 
    preserveAspectRatio="xMidYMid slice" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-accent"
    style={{ transform: 'translateZ(0)' }} // Force GPU acceleration
  >
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g filter="url(#glow)">
      {/* Primary Traces */}
      <path stroke="currentColor" strokeWidth="40" strokeMiterlimit="10" d="M 14845 8846 L 19488 8846 L 19993 9350 L 22045 9350 L 22573 8822 L 24618 8822 L 25257 8183 L 25257 3341" transform="matrix(0.1, 0, 0, -0.1, 0, 2543)"/>
      <path stroke="currentColor" strokeWidth="25" strokeMiterlimit="10" d="M 14023 8396 L 24251 8396 L 24776 7870 L 24776 4137" transform="matrix(0.1, 0, 0, -0.1, 0, 2543)"/>
      <path stroke="currentColor" strokeWidth="35" strokeMiterlimit="10" d="M 23914 7936 L 20954 7936 L 20197 7180 L 17122 7180 L 16153 6211" transform="matrix(0.1, 0, 0, -0.1, 0, 2543)"/>
      
      {/* Animated Pulse Path */}
      <path 
        className="animate-circuit" 
        stroke="currentColor" 
        strokeWidth="60" 
        strokeMiterlimit="10" 
        d="M 22780 15507 L 19400 15507 L 18765 16142 L 16863 16142 L 16123 16882 L 16123 20192" 
        transform="matrix(0.1, 0, 0, -0.1, 0, 2543)"
      />

      <path stroke="currentColor" strokeWidth="30" strokeMiterlimit="10" d="M 15090 17404 L 13834 17404 L 13141 16711 L 7478 16711" transform="matrix(0.1, 0, 0, -0.1, 0, 2543)"/>
      <path stroke="currentColor" strokeWidth="20" strokeMiterlimit="10" d="M 12639 17404 L 6756 17404 L 5972 18188 L 4174 18188" transform="matrix(0.1, 0, 0, -0.1, 0, 2543)"/>
      <path stroke="currentColor" strokeWidth="20" strokeMiterlimit="10" d="M 25443 8846 L 26121 9524 L 30048 9524 L 30736 8836 L 33840 8836" transform="matrix(0.1, 0, 0, -0.1, 0, 2543)"/>
      <path stroke="currentColor" strokeWidth="35" strokeMiterlimit="10" d="M 25905 8396 L 26454 8945 L 29642 8945 L 30346 8241" transform="matrix(0.1, 0, 0, -0.1, 0, 2543)"/>
      
      <path stroke="currentColor" strokeWidth="20" d="M 17122 16610 L 20954 16610 L 21548 17204 L 22780 17204 L 24136 18560" transform="matrix(0.1, 0, 0, -0.1, 0, 2543)"/>
      <path stroke="currentColor" strokeWidth="35" d="M 17122 17057 L 20513 17057 L 21403 17947" transform="matrix(0.1, 0, 0, -0.1, 0, 2543)"/>
      <path stroke="currentColor" strokeWidth="35" d="M 19042 7936 L 12792 7936 L 12221 7366" transform="matrix(0.1, 0, 0, -0.1, 0, 2543)"/>
      
      {/* Terminal Nodes */}
      <circle cx="2591" cy="736" r="60" fill="currentColor" fillOpacity="0.4" />
      <circle cx="3281" cy="964" r="60" fill="currentColor" fillOpacity="0.4" />
      <circle cx="1467" cy="2185" r="80" fill="currentColor" className="animate-pulse" />
      <circle cx="1557" cy="1779" r="80" fill="currentColor" className="animate-pulse" />
    </g>
  </svg>
));

// Name the memoized component for better debugging
MemoizedSVG.displayName = "MemoizedSVG";

export default function CircuitBackground() {
  // 2. Performance: Use MotionValues for mouse position
  // This bypasses React's state system and updates the DOM directly
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3. Add smooth "Luxury" springs
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  // 4. Parallax Scroll Logic
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // 5. Build the Dynamic Gradient String without re-rendering the whole component
  const backgroundGradient = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.12), transparent 80%)`
  );

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#050507] pointer-events-none">
      
      {/* DYNAMIC LAYER: The Spotlight (Moves via GPU, no React re-renders) */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{ background: backgroundGradient }}
      />

      {/* AMBIENT GLOWS: Deepest layer */}
      <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-accent/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full" />

      {/* STATIC LAYER: The Memoized SVG (Only renders once) */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] opacity-40"
      >
        <MemoizedSVG />
      </motion.div>

      {/* TEXTURE LAYER */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}