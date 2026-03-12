import CircuitBackground from "@/components/CircuitBackground";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import { ArrowLeft, Cpu, Zap, Database } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  await connectDB();
  const project = await Project.findById(params.id);

  if (!project) return <div className="text-white pt-40 text-center">Protocol Not Found.</div>;

  return (
    <main className="relative min-h-screen bg-background pb-32">
      <CircuitBackground />
      
      {/* 1. Header Navigation */}
      <nav className="fixed top-24 left-10 z-50">
        <Link href="/#projects" className="group flex items-center gap-3 text-muted hover:text-accent transition-all">
          <div className="p-2 bg-secondary/50 rounded-full border border-white/5 group-hover:border-accent/40">
            <ArrowLeft size={18} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Back to Archive</span>
        </Link>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative z-10 pt-48 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-1 rounded-full border border-accent/20 bg-accent/5 text-[9px] font-black text-accent uppercase tracking-[0.3em] mb-8">
           Project_Identification // {project._id.toString().slice(-6)}
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic mb-12">
          {project.title}
        </h1>
        
        <div className="relative aspect-video w-full rounded-[48px] overflow-hidden border border-white/10 shadow-2xl mb-24">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        </div>
      </section>

      {/* 3. The Technical Breakdown */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Left Column: Mission Specs */}
        <div className="space-y-12">
          <div>
            <h3 className="text-accent font-black text-[10px] tracking-widest uppercase mb-4">Core_Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t: string) => (
                <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-white font-bold">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-accent font-black text-[10px] tracking-widest uppercase mb-4">Architecture</h3>
            <div className="space-y-4">
               <div className="flex items-center gap-3 text-muted text-sm"><Cpu size={14}/> Distributed Edge</div>
               <div className="flex items-center gap-3 text-muted text-sm"><Database size={14}/> Atlas Cloud</div>
               <div className="flex items-center gap-3 text-muted text-sm"><Zap size={14}/> Vercel Runtime</div>
            </div>
          </div>
        </div>

        {/* Right Column: Case Study Text */}
        <div className="md:col-span-2 space-y-16">
          <div>
            <h2 className="text-white font-black text-2xl uppercase tracking-tight mb-6 italic">The Challenge</h2>
            <p className="text-muted text-lg leading-relaxed">{project.description}</p>
          </div>
          
          <div className="p-10 rounded-[40px] border border-accent/20 bg-accent/5 backdrop-blur-xl">
             <h2 className="text-accent font-black text-2xl uppercase tracking-tight mb-6 italic">Machine Intelligence Integration</h2>
             <p className="text-white/80 text-lg leading-relaxed italic">
                We applied advanced predictive algorithms to optimize data flow and reduce system latency by 40%.
             </p>
          </div>

          <div className="pt-10">
             <a href={project.link} target="_blank" className="px-12 py-5 bg-white text-black font-black text-xs tracking-[0.4em] rounded-2xl hover:bg-accent hover:text-white transition-all uppercase inline-block">
                Initialize Live System
             </a>
          </div>
        </div>
      </section>
    </main>
  );
}