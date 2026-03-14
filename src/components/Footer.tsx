"use client";
import Link from "next/link";
import { Github, MessageSquare, Terminal, Cpu, ShieldCheck, Activity } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { name: "Expertise", href: "/#services" },
    { name: "Process", href: "/#process" },
    { name: "Portfolio", href: "/#projects" },
    { name: "Pricing", href: "/pricing" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/07sidhu", icon: <Github size={14} /> },
    { name: "WhatsApp", href: "https://wa.me/919027025792", icon: <MessageSquare size={14} /> },
  ];

  return (
    <footer className="relative z-10 pt-40 pb-10 border-t border-white/5 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-10 h-10 flex items-center justify-center bg-accent rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.3)] group-hover:scale-110 transition-all duration-500">
                <span className="text-white font-black text-sm">{">_"}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white uppercase italic">RAGHAV</span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-accent/60 uppercase">Digital Architect</span>
              </div>
            </Link>
            <p className="text-muted text-sm max-w-xs leading-relaxed font-medium">
              Architecting high-performance digital systems with research-grade precision and algorithmic efficiency.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-black text-[10px] tracking-[0.4em] uppercase mb-8 opacity-50">Protocols</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted text-xs font-bold hover:text-accent transition-colors uppercase tracking-widest">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connection Channels */}
          <div>
            <h4 className="text-white font-black text-[10px] tracking-[0.4em] uppercase mb-8 opacity-50">Network</h4>
            <ul className="space-y-4">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a href={social.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted text-xs font-bold hover:text-white transition-colors uppercase tracking-widest">
                    <span className="text-accent">{social.icon}</span>
                    {social.name}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-accent text-xs font-black uppercase tracking-widest underline underline-offset-8 decoration-accent/20 hover:decoration-accent transition-all">
                  Initialize Mission
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM METRIC BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">
              © 2026 // RAGHAV_SYSTEMS // ALL_RIGHTS_RESERVED
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
                <span className="text-[8px] font-black text-white/30 uppercase tracking-widest">Uptime: 99.9%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full animate-pulse shadow-[0_0_8px_#6366f1]" />
                <span className="text-[8px] font-black text-white/30 uppercase tracking-widest">Latency: 14ms</span>
              </div>
            </div>
          </div>

          {/* Built with Badge */}
          <div className="flex items-center gap-4 py-2 px-4 rounded-full bg-white/5 border border-white/5">
             <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Powered_By</span>
             <div className="flex gap-3 opacity-40">
                <Cpu size={12} />
                <ShieldCheck size={12} />
                <Activity size={12} />
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
}