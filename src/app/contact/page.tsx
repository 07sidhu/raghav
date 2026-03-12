"use client";
import { useState } from "react";
import CircuitBackground from "@/components/CircuitBackground";
import { Send, Terminal, Globe, Mail, Github, MessageSquareText } from "lucide-react";

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
            {/* 1. EMAIL CHANNEL */}
            <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=raghavsiddhu3@gmail.com&su=Project%20Protocol%20Initiation&body=Hello%20Raghav%2C%20I%20would%20like%20to%20initialize%20a%20new%20project%20mission."
                className="flex items-center gap-4 group cursor-pointer"
            >
                <div className="p-3 bg-secondary/50 rounded-xl border border-white/5 text-accent group-hover:text-[#EA4335] group-hover:border-[#EA4335]/30 group-hover:shadow-[0_0_15px_rgba(234,67,53,0.2)] transition-all duration-300">
                <Mail size={20} />
                </div>
                <div>
                <div className="flex items-center gap-2">
                    <p className="text-[10px] font-black text-muted uppercase tracking-widest group-hover:text-[#EA4335] transition-colors">Direct Channel</p>
                    <div className="w-1 h-1 bg-[#EA4335] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
                </div>
                <p className="text-white font-bold tracking-tight">raghavsiddhu3@gmail.com</p>
                </div>
            </a>

            {/* 2. WHATSAPP PRIORITY SYNC */}
            <a 
                href="https://wa.me/919027025792?text=Protocol_Initiated%3A%20Hello%20Raghav" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
            >
                <div className="p-3 bg-secondary/50 rounded-xl border border-white/5 text-accent group-hover:text-[#25D366] group-hover:border-[#25D366]/30 group-hover:shadow-[0_0_15px_rgba(37,211,102,0.2)] transition-all duration-300">
                <svg 
                    viewBox="0 0 24 24" 
                    width="20" 
                    height="20" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                </div>
                <div>
                <div className="flex items-center gap-2">
                    <p className="text-[10px] font-black text-muted uppercase tracking-widest group-hover:text-[#25D366] transition-colors">Priority Sync</p>
                    <div className="w-1 h-1 bg-[#25D366] rounded-full animate-pulse" />
                </div>
                <p className="text-white font-bold tracking-tight">WhatsApp</p>
                </div>
            </a>

            {/* 3. TIMEZONE INFO */}
            <div className="flex items-center gap-4 group">
                <div className="p-3 bg-secondary/50 rounded-xl border border-white/5 text-accent group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all">
                <Globe size={20} />
                </div>
                <div>
                <p className="text-[10px] font-black text-muted uppercase tracking-widest">Timezone</p>
                <p className="text-white font-bold tracking-tight">IST (UTC +5:30) // New Delhi</p>
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