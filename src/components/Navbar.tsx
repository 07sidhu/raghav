"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github, } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.includes("#")) {
    const id = href.split("#")[1];
    
    if (pathname === "/") {
      e.preventDefault();
      
      // LOOK: No 'any', no casting. 
      // TypeScript now knows EXACTLY what window.lenis is.
      if (window.scrollInstance) {
        window.scrollInstance.scrollTo(`#${id}`, {
          offset: -100,
          duration: 1.5,
        });
      }
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
          
          {/* LOGO - Updated to RAGHAV */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center bg-accent rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <span className="text-white font-black text-sm tracking-tighter">{">_"}</span>
              <div className="absolute inset-0 rounded-xl border border-white/20" />
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-white leading-none mb-1">RAGHAV</span>
              <span className="text-[8px] font-bold tracking-[0.1em] uppercase text-accent/60 leading-none">Web Architect</span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative text-[10px] font-black uppercase tracking-[0.2em] text-muted hover:text-white transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#6366f1]" />
              </Link>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="hidden md:flex items-center gap-5">
            <a href="https://github.com/07sidhu" target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors">
              <Github size={25} />
            </a>
            {/* WHATSAPP NAV ICON */}
            <a 
              href="https://wa.me/919027025792?text=Protocol_Initiated%3A%20Hello%20Raghav" 
              target="_blank" 
              rel="noreferrer" 
              className="text-muted hover:text-[#25D366] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]"
              title="Direct WhatsApp"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="20" 
                height="20" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <Link 
              href="/contact" 
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
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-black uppercase tracking-widest text-white border-b border-white/5 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
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