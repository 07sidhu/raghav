import CircuitBackground from "@/components/CircuitBackground";
import { Check, ArrowRight, Zap, TrendingUp, Crown, Terminal, Settings, ShieldCheck, LifeBuoy } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: "4,999",
      desc: "Simple, fast websites for individuals, freelancers, or small businesses.",
      icon: <Zap size={24} className="text-accent" />,
      stack: ["Next.js 15", "Tailwind v4", "TypeScript"],
      features: ["Up to 5 Pages", "Fully Responsive Design", "Contact Form (Resend)", "SEO-Ready (Meta/OG)", "Vercel Deployment", "1 Round of Revisions"]
    },
    {
      name: "Growth",
      price: "12,999",
      desc: "Full-stack web apps with database, auth, and real features.",
      icon: <TrendingUp size={24} className="text-accent" />,
      popular: true,
      stack: ["Next.js 15", "Tailwind v4", "TypeScript", "MongoDB", "Mongoose", "NextAuth.js", "Vercel"],
      features: ["Everything in Starter", "User Auth (Login/Signup)", "MongoDB Atlas Integration", "REST API Routes", "User Dashboard", "Up to 10 Pages", "2 Rounds of Revisions"]
    },
    {
      name: "Pro",
      price: "24,999",
      desc: "Complex platforms, multi-role systems, and third-party integrations.",
      icon: <Crown size={24} className="text-accent" />,
      stack: ["Next.js 15", "Tailwind v4", "TypeScript", "MongoDB Atlas", "Mongoose", "NextAuth.js", "Razorpay", "Cloudinary", "Vercel"],
      features: ["Everything in Growth", "Multi-role Auth (Admin/User)", "Razorpay Integration", "File Uploads (Cloudinary)", "Admin CRUD Dashboard", "Unlimited Pages", "3 Rounds + 2 Weeks Support"]
    }
  ];

  return (
    <main className="relative min-h-screen bg-background text-white pb-32 overflow-x-hidden">
      <CircuitBackground />
      
      {/* --- HEADER --- */}
      <section className="relative z-10 pt-48 pb-20 px-6 max-w-7xl mx-auto text-center">
        <FadeIn delay={0.2}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 mb-6">
            <Terminal size={12} className="text-accent" />
            <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase">Investment Protocols</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none mb-6">
            CHOOSE YOUR <span className="text-accent">PLAN.</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Scalable pricing models for high-performance digital systems. 
            All plans include research-grade architecture.
          </p>
        </FadeIn>
      </section>

      {/* --- PRICING GRID --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier, index) => (
          <div 
            key={tier.name} 
            className={`group relative p-8 md:p-10 rounded-[48px] border flex flex-col transition-all duration-700 ${
              tier.popular ? 'bg-secondary/60 border-accent/40 shadow-indigo-glow scale-[1.02] z-20' : 'bg-secondary/30 border-white/5 hover:border-white/10 z-10'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-accent text-white text-[10px] font-black tracking-widest rounded-full uppercase shadow-lg">
                Most Popular
              </div>
            )}

            {/* Title & Price */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-white/5 rounded-2xl text-accent">{tier.icon}</div>
                <div className="text-right">
                   <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Protocol_{index + 1}</p>
                   <h3 className="text-2xl font-black tracking-tight uppercase italic">{tier.name}</h3>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-8 h-12 font-medium">{tier.desc}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-muted text-2xl font-bold">₹</span>
                <span className="text-6xl font-black tracking-tighter">{tier.price}</span>
                <span className="text-muted text-[10px] font-black tracking-widest uppercase">/ Project</span>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-10">
               <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">Core_Stack</p>
               <div className="flex flex-wrap gap-2">
                  {tier.stack.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-bold text-white/60 tracking-tight uppercase">
                      {tech}
                    </span>
                  ))}
               </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-12 flex-1">
              <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">Mission_Specs</p>
              {tier.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 text-xs font-bold text-white/80">
                  <Check size={14} className="text-accent mt-0.5 shrink-0" />
                  <span className="leading-tight tracking-tight">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              href="/contact" 
              className={`group/btn relative w-full py-5 rounded-2xl font-black text-[11px] tracking-[0.3em] transition-all uppercase overflow-hidden flex items-center justify-center gap-2 ${
                tier.popular ? 'bg-accent text-white shadow-xl hover:scale-105' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <span className="relative z-10">Initialize Plan</span>
              <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              {tier.popular && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />}
            </Link>
          </div>
        ))}
      </section>
           {/* --- MAINTENANCE ADD-ON SECTION --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-10">
        <div className="bg-secondary/40 backdrop-blur-3xl border border-accent/20 rounded-[48px] p-10 md:p-16 relative overflow-hidden group shadow-2xl">
           <div className="absolute -right-20 -top-20 w-80 h-80 bg-accent/5 blur-[100px] rounded-full group-hover:bg-accent/10 transition-all duration-700" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-accent/10 rounded-2xl text-accent"><Settings className="animate-spin-slow" size={24} /></div>
                    <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">System Maintenance</h3>
                 </div>
                 <p className="text-muted text-lg font-medium leading-relaxed max-w-md">
                    Ensure your digital infrastructure remains optimized, secure, and updated with our monthly management protocol.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                   { name: "Core Support", price: "1,499", icon: <LifeBuoy size={18}/>, features: ["Hosting Mgmt", "Weekly Backups"] },
                   { name: "Elite Support", price: "2,999", icon: <ShieldCheck size={18}/>, features: ["Performance Audits", "2hrs Dev Support"] }
                 ].map((plan) => (
                   <div key={plan.name} className="p-8 rounded-[32px] bg-black/40 border border-white/5 hover:border-accent/30 transition-all">
                      <div className="flex items-center gap-2 text-accent mb-4">
                         {plan.icon}
                         <span className="text-[10px] font-black uppercase tracking-widest">{plan.name}</span>
                      </div>
                      <div className="flex items-baseline gap-1 mb-6">
                         <span className="text-white text-3xl font-black">₹{plan.price}</span>
                         <span className="text-muted text-[10px] font-black uppercase tracking-widest">/ month</span>
                      </div>
                      <div className="space-y-3">
                         {plan.features.map(f => (
                           <div key={f} className="text-[11px] font-bold text-white/50 flex items-center gap-2">
                             <div className="w-1 h-1 bg-accent rounded-full" /> {f}
                           </div>
                         ))}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* FOOTER TEXT */}
      <div className="mt-24 text-center opacity-20">
         <p className="text-[9px] font-black tracking-[0.5em] uppercase italic">
           All systems deployed via secure Vercel Edge Node // Transaction Protocol: Razorpay Supported
         </p>
      </div>
    </main>
  );
}

// Add this helper for the header animation
function FadeIn({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000" style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}>
      {children}
    </div>
  );
}