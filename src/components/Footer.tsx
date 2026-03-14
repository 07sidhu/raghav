"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, MessageSquare, Cpu, ShieldCheck, Activity } from "lucide-react";

export default function Footer() {
  const [latency, setLatency] = useState<number>(0);
  const [time, setTime] = useState<string>("");
  const [uptime, setUptime] = useState<string>("99.98");

  useEffect(() => {
    // 1. Live Latency Ping Logic
    const checkLatency = async () => {
      const start = Date.now();
      try {
        await fetch("/api/heartbeat");
        const end = Date.now();
        setLatency(end - start);
      } catch (e) {
        setLatency(0);
      }
    };

    // 2. Real-time IST Clock
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-IN", { 
        timeZone: "Asia/Kolkata", 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };

    // 3. Fake "Stability Pulse" (fluctuates slightly for realism)
    const updateUptime = () => {
      const base = 99.98;
      const flux = (Math.random() * 0.01).toFixed(2);
      setUptime((base + parseFloat(flux)).toString());
    };

    const interval = setInterval(() => {
      checkLatency();
      updateClock();
      if(Math.random() > 0.8) updateUptime();
    }, 3000);

    updateClock();
    checkLatency();

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative z-10 pt-40 pb-10 border-t border-white/5 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-black text-sm shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                {">_"}
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white uppercase italic leading-none">RAGHAV</span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-accent/60 uppercase">Digital Architect</span>
              </div>
            </div>
            <p className="text-muted text-sm max-w-xs leading-relaxed font-medium">
              Architecting high-performance digital systems with research-grade precision and algorithmic efficiency.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-black text-[10px] tracking-[0.4em] uppercase mb-8 opacity-50">System_Links</h4>
            <ul className="space-y-4">
              {["Expertise", "Portfolio", "Process", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href={`/#${item.toLowerCase()}`} className="text-muted text-xs font-bold hover:text-accent transition-colors uppercase tracking-widest">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connection */}
          <div>
            <h4 className="text-white font-black text-[10px] tracking-[0.4em] uppercase mb-8 opacity-50">External_Nodes</h4>
            <div className="space-y-4 flex flex-col">
              <a href="https://github.com/07sidhu" target="_blank" className="text-muted text-xs font-bold hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2">
                <Github size={14} /> GitHub
              </a>
              <a href="https://wa.me/919027025792" target="_blank" className="text-muted text-xs font-bold hover:text-[#25D366] transition-colors uppercase tracking-widest flex items-center gap-2">
                <MessageSquare size={14} /> WhatsApp
              </a>
              <Link href="/contact" className="text-accent text-xs font-black uppercase tracking-widest underline underline-offset-8 decoration-accent/20">
                Initialize_Connection
              </Link>
            </div>
          </div>
        </div>

        {/* --- DYNAMIC METRIC BAR --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full md:w-auto">
            <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">
              © 2026 // RAGHAV_SYSTEMS // {time} IST
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 min-w-[100px]">
                <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
                <span className="text-[8px] font-black text-white/30 uppercase tracking-widest">Stability: {uptime}%</span>
              </div>
              <div className="flex items-center gap-2 min-w-[80px]">
                <div className={`w-1 h-1 rounded-full animate-pulse shadow-lg ${latency < 100 ? 'bg-accent shadow-[#6366f1]' : 'bg-yellow-500 shadow-yellow-500'}`} />
                <span className="text-[8px] font-black text-white/30 uppercase tracking-widest">Ping: {latency}ms</span>
              </div>
            </div>
          </div>

          {/* Infrastructure Badge */}
          <div className="flex items-center gap-4 py-2 px-4 rounded-full bg-white/5 border border-white/5 opacity-50 hover:opacity-100 transition-opacity">
             <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Infra: Vercel_Edge</span>
             <div className="flex gap-3 text-accent">
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