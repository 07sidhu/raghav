"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Terminal, Menu, X, Github } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // 1. Handle Scroll Effect (Shrinking Navbar)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. SMART SCROLL LOGIC
  // This ensures links work from BOTH the home page and the pricing page
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        // We are already home, just scroll
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // We are on another page, navigate to home + anchor
        // Next.js handles the scroll automatically if href is "/#id"
      }
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Expertise", href: "/#services" },
    { name: "Portfolio", href: "/#projects" },
    { name: "Pricing", href: "/pricing" }, 
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "pt-2" : "pt-6"}`}>
      <div className={`max-w-5xl mx-auto px-6 transition-all duration-500 ${scrolled ? "scale-95" : "scale-100"}`}>
        <div className={`
          relative flex items-center justify-between px-6 py-4 rounded-2xl border transition-all duration-500
          ${scrolled 
            ? "bg-secondary/60 backdrop-blur-xl border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border-transparent"}
        `}>
          
          {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* The Icon Box */}
              <div className="relative w-9 h-9 flex items-center justify-center bg-accent rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <span className="text-white font-black text-sm tracking-tighter">{">_"}</span>
                
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 rounded-xl border border-white/20" />
              </div>

              {/* The Text */}
              <div className="flex flex-col">
                <span className="text-[11px] font-black tracking-[0.3em] uppercase text-white leading-none mb-1">DevStudio</span>
                <span className="text-[8px] font-bold tracking-[0.1em] uppercase text-accent/60 leading-none">Architecture</span>
              </div>
            </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href.replace("/", ""))}
                className="group relative text-[10px] font-black uppercase tracking-[0.2em] text-muted hover:text-white transition-colors"
              >
                {link.name}
                {/* Hover Underline Glow */}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#6366f1]" />
              </Link>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="hidden md:flex items-center gap-5">
            <a href="https://github.com/07sidhu" target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors">
              <Github size={20} />
            </a>
            <Link 
              href="/pricing" 
              className="px-6 py-2 bg-white text-black text-[10px] font-black tracking-[0.2em] uppercase rounded-xl hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 active:scale-95 shadow-xl"
            >
              Hire Me
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="absolute top-24 left-6 right-6 bg-secondary/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-5 shadow-2xl">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href.replace("/", ""))}
                className="text-lg font-black uppercase tracking-widest text-white border-b border-white/5 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/pricing" 
              onClick={() => setIsOpen(false)}
              className="w-full py-5 bg-accent text-white text-center text-sm font-black tracking-[0.3em] rounded-2xl uppercase shadow-lg shadow-accent/20"
            >
              Start Mission
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}