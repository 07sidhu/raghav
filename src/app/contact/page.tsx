"use client";
import { useState } from "react";
import CircuitBackground from "@/components/CircuitBackground";
import { Send, Terminal, Globe, Mail, Github } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // ... (Your fetch logic to /api/contact)
    setTimeout(() => setStatus("success"), 2000); // Simulated
  }

  return (
    <main className="relative min-h-screen pt-40 pb-20 bg-background overflow-hidden">
      <CircuitBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Connection Info */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6 text-accent">
            <Terminal size={18} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase">Secure Link Established</span>
          </div>
          <h1 className="text-7xl font-black text-white tracking-tighter leading-none mb-8 uppercase italic">
            Ready to <br/><span className="text-accent">Connect?</span>
          </h1>
          <p className="text-muted text-lg mb-12 max-w-md font-medium">
            Initiate the project protocol. My systems are ready for your mission requirements.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-secondary/50 rounded-xl border border-white/5 text-accent group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-muted uppercase tracking-widest">Direct Channel</p>
                <p className="text-white font-bold tracking-tight">hello@devstudio.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-secondary/50 rounded-xl border border-white/5 text-accent group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all">
                <Globe size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-muted uppercase tracking-widest">Timezone</p>
                <p className="text-white font-bold tracking-tight">IST (UTC +5:30) // Global Remote</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Terminal Form */}
        <div className="bg-secondary/30 border border-white/10 p-10 rounded-[40px] backdrop-blur-3xl shadow-2xl relative">
          <div className="absolute top-0 right-10 w-20 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          
          {status === "success" ? (
            <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
               <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-6 shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                  <Send size={32} />
               </div>
               <h3 className="text-2xl font-black text-white tracking-tight uppercase">Transmission Received</h3>
               <p className="text-muted text-sm mt-2">Stand by for response within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black text-accent uppercase tracking-[0.3em] ml-2">Identity</label>
                <input name="name" required placeholder="YOUR NAME" className="w-full bg-black/40 border border-white/5 p-5 rounded-2xl text-white text-xs font-bold outline-none focus:border-accent transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-accent uppercase tracking-[0.3em] ml-2">Comm-Link</label>
                <input name="email" type="email" required placeholder="EMAIL ADDRESS" className="w-full bg-black/40 border border-white/5 p-5 rounded-2xl text-white text-xs font-bold outline-none focus:border-accent transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-accent uppercase tracking-[0.3em] ml-2">Mission Briefing</label>
                <textarea name="message" required rows={4} placeholder="TELL ME ABOUT YOUR PROJECT..." className="w-full bg-black/40 border border-white/5 p-5 rounded-2xl text-white text-xs font-bold outline-none focus:border-accent transition-all" />
              </div>

              <button disabled={status === "sending"} className="w-full py-5 bg-accent text-white font-black tracking-[0.4em] text-xs rounded-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-3">
                {status === "sending" ? "TRANSMITTING..." : "INITIALIZE CONNECTION"}
                <Send size={16} />
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}