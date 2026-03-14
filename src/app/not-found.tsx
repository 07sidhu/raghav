import Link from "next/link";
import CircuitBackground from "@/components/CircuitBackground";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative h-screen w-full flex items-center justify-center bg-background overflow-hidden">
      <CircuitBackground />
      
      <div className="relative z-10 text-center px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 mb-8">
          <Terminal size={12} className="text-red-500" />
          <span className="text-[10px] font-black tracking-[0.3em] text-red-500 uppercase">
            Error_404 // Link_Severed
          </span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
          LOST IN <br/><span className="text-red-500">THE VOID.</span>
        </h1>

        <p className="text-muted text-lg max-w-md mx-auto mb-12 font-medium">
          The requested protocol does not exist or has been moved to a secure location.
        </p>

        <Link 
          href="/" 
          className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black text-[11px] tracking-[0.3em] rounded-2xl hover:bg-accent hover:text-white transition-all uppercase"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Return to Command Center
        </Link>
      </div>

      {/* Decorative Glitch Text */}
      <div className="absolute bottom-10 left-10 text-[10vw] font-black text-white/[0.02] select-none pointer-events-none">
        VOID_SYSTEM
      </div>
    </main>
  );
}