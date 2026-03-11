import CircuitBackground from "@/components/CircuitBackground";
import { ArrowRight, Check, Zap, Shield, Crown, Terminal } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const tiers = [
    {
      id: "01",
      name: "Starter Protocol",
      price: "1,200",
      desc: "High-conversion landing pages for emerging startups.",
      features: ["Next.js 15 Static Architecture", "Tailwind CSS v4 Engine", "Core Web Vitals Optimization", "Mobile Responsive Path", "Basic SEO Injection"],
      color: "from-white/10 to-transparent"
    },
    {
      id: "02",
      name: "Professional System",
      price: "2,800",
      desc: "Full-stack integration for established businesses.",
      features: ["Everything in Starter", "MongoDB Atlas Database Integration", "Custom Admin Dashboard", "Advanced API Logic", "Payment Gateway Bridge", "30-Day Technical Support"],
      color: "from-accent/20 to-transparent",
      active: true
    },
    {
      id: "03",
      name: "Enterprise Core",
      price: "5,500",
      desc: "Custom architectural engineering for high-scale SaaS.",
      features: ["Everything in Professional", "AI Module Integration", "Custom Auth & Security Protocol", "Multi-Region Edge Deployment", "Priority 24/7 Support Channel"],
      color: "from-white/10 to-transparent"
    }
  ];

  return (
    <main className="relative min-h-screen bg-background text-white pb-32">
      <CircuitBackground />
      
      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-48 pb-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 mb-6 text-accent">
              <Terminal size={18} />
              <span className="text-xs font-black tracking-[0.5em] uppercase">Investment Matrix</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase italic">
              SERVICE <br/><span className="text-accent">TIERS.</span>
            </h1>
          </div>
          <p className="text-muted text-lg md:text-xl font-medium max-w-xs leading-relaxed border-l-2 border-accent/20 pl-8">
            Transparent pricing for precision engineering. No hidden variables, just performance.
          </p>
        </div>
      </section>

      {/* --- PRICING STACK (Vertical Design to prevent overlapping) --- */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 space-y-24">
        {tiers.map((tier) => (
          <div 
            key={tier.id} 
            className={`group relative p-12 rounded-[48px] border transition-all duration-700 ${
              tier.active ? 'border-accent/40 bg-secondary/40' : 'border-white/5 bg-secondary/20 hover:border-white/20'
            }`}
          >
            {/* Subtle Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} rounded-[48px] opacity-50`} />

            <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-16">
              {/* Info Column */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-accent font-black text-xl italic tracking-widest">{tier.id}</span>
                  <div className="h-px w-12 bg-accent/30" />
                  <h3 className="text-4xl font-black tracking-tighter uppercase italic">{tier.name}</h3>
                </div>
                <p className="text-muted text-lg mb-10 max-w-sm">{tier.desc}</p>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black tracking-tighter">${tier.price}</span>
                  <span className="text-muted text-xs font-black tracking-[0.3em] uppercase">Starting From</span>
                </div>
              </div>

              {/* Specs Column */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm font-bold text-white/70">
                    <Check size={16} className="text-accent shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Action Column */}
              <div className="flex items-center">
                <Link 
                  href="/contact" 
                  className={`px-10 py-5 rounded-2xl font-black text-xs tracking-[0.3em] transition-all uppercase shadow-2xl ${
                    tier.active ? 'bg-accent text-white hover:scale-105' : 'bg-white text-black hover:bg-accent hover:text-white'
                  }`}
                >
                  Initialize
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}