import CircuitBackground from "@/components/CircuitBackground";
import { ArrowRight, Zap, Cpu, Globe, Sparkles, Terminal, Code2, Database , Layers, Cpu as Processor, Smartphone, Binary, Braces, Search, BarChart3, Cloud } from "lucide-react";
import { connectDB } from "@/lib/mongodb";
import Project, { IProject } from "@/models/Project";
import BrowserFrame from "@/components/BrowserFrame";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import React from "react";



export default async function Home() {
  await connectDB();
  const projects = await Project.find({}).sort({ createdAt: -1 }) as unknown as IProject[];

  return (
    <main className="relative min-h-screen">
      <CircuitBackground />

      {/* --- HERO SECTION: CIRCULAR SPLIT LAYOUT --- */}
<section className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 md:pt-56">
  <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
    
    {/* LEFT SIDE: CIRCULAR PHOTO BOX */}
    <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
      <FadeIn delay={0.1}>
        <div className="relative group">
          
          {/* 1. AMBIENT GLOW BEHIND PHOTO */}
          <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full animate-pulse group-hover:bg-accent/30 transition-colors" />
          
          {/* 2. THE OUTER RADAR RING (Rotating) */}
          <div className="absolute -inset-4 border border-dashed border-accent/20 rounded-full animate-[spin_20s_linear_infinite] opacity-40" />
          
          {/* 3. THE INNER PULSING RING */}
          <div className="absolute -inset-2 border border-accent/10 rounded-full animate-[ping_4s_linear_infinite] opacity-20" />

          {/* 4. THE MAIN PHOTO CIRCLE */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 p-2 bg-secondary/20 backdrop-blur-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:border-accent/40 group-hover:scale-[1.02]">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image 
                src="/profile.jpeg" // Place your photo in public/profile.jpg
                alt="Raghav"
                fill
                priority
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
            </div>

            {/* Scanning Line Overlay */}
            <div className="absolute top-0 left-0 w-full h-1 bg-accent/20 blur-sm animate-[scan_4s_linear_infinite] opacity-0 group-hover:opacity-100" />
          </div>

          {/* 5. FLOATING STATUS TAG */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">System Online</span>
             </div>
          </div>

        </div>
      </FadeIn>
    </div>

    {/* RIGHT SIDE: DETAILS (Same as before, perfectly aligned) */}
    <div className="w-full lg:w-2/3 text-center lg:text-left">
      <FadeIn delay={0.2}>
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
          <Terminal size={14} className="text-accent" />
          <span className="text-[10px] font-black tracking-[0.4em] text-accent uppercase">
            OPERATOR IDENTIFIED: RAGHAV
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-[0.8] mb-10 text-white italic">
          RAGHAV <br />
          <span className="bg-gradient-to-b from-white via-white to-accent bg-clip-text text-transparent opacity-90 text-glow not-italic uppercase">
            Digital Architect.
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.6}>
        <p className="text-muted text-lg md:text-xl max-w-2xl mb-12 font-medium leading-relaxed mx-auto lg:mx-0">
          University of Delhi Computer Science researcher. I engineer high-stakes 
          web applications using <span className="text-white">Next.js 15</span> and 
          <span className="text-white"> Machine Intelligence</span> to solve complex digital challenges.
        </p>
      </FadeIn>

      <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start relative z-20">
        <Link 
          href="/pricing" 
          className="group relative px-10 py-4 bg-accent text-white font-black tracking-[0.2em] rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] flex items-center gap-3 border border-white/10 text-xs"
        >
          <span className="relative z-10 uppercase">Initialize Project</span>
          <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </Link>

        <Link 
          href="/#projects" 
          className="px-10 py-4 bg-secondary/80 border border-white/10 text-white font-black tracking-[0.2em] text-xs rounded-2xl hover:bg-white/5 hover:border-accent/30 transition-all backdrop-blur-sm shadow-xl"
        >
          VIEW ARCHIVE
        </Link>
      </div>
    </div>
  </div>
</section>




{/* --- TECHNICAL FOUNDATION: THE BALANCED GRID --- */}
<section className="relative z-10 max-w-7xl mx-auto px-6 py-40">
  
  {/* Section Header */}
  <div className="mb-20">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-12 bg-accent/40" />
      <h2 className="text-sm font-black text-accent tracking-[0.5em] uppercase">Technical Foundation</h2>
    </div>
    <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase italic">
      THE CORE <span className="text-accent/50 not-italic">BLUEPRINT.</span>
    </h3>
  </div>

  {/* MAIN GRID: 2 Columns for everything to ensure perfect alignment */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
    
    {/* Education Card */}
      <div className="group relative p-8 rounded-[40px] border border-white/5 bg-secondary/20 backdrop-blur-md transition-all duration-500 hover:border-accent/30 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <Terminal size={24} className="text-accent" />
          <div className="text-right">
             <p className="text-accent font-black text-[10px] tracking-widest uppercase">Academic Protocol</p>
             <p className="text-white/20 font-mono text-[9px]">REF: DU_CS_2026</p>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-white/40 font-bold text-[10px] tracking-widest mb-1 uppercase">University of Delhi</p>
          <h4 className="text-white font-black text-2xl uppercase tracking-tight">B.Sc Computer Science</h4>
        </div>
        
        <div className="space-y-3 mb-8">
          {[
            { label: "Algorithms & Complexity", icon: <Binary size={12}/> },
            { label: "Data mining", icon: <Code2 size={12}/> },
            { label: "Artificial Intelligence", icon: <Cpu size={12}/> },
            { label: "Android development", icon: <Zap size={12}/> },
            { label: "Database management system", icon: <Layers size={12}/> }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 py-2 border-b border-white/5 group/item">
              <span className="text-accent">{item.icon}</span>
              <span className="text-muted text-xs font-medium group-hover/item:text-white transition-colors">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
           <span className="text-[9px] font-black text-white/20 tracking-widest uppercase">Status: 7.3 CGPA</span>
           <div className="flex gap-1">
              {[1,2,3,4].map(i => <div key={i} className="w-1 h-1 bg-accent rounded-full animate-pulse" style={{animationDelay: `${i*0.2}s`}} />)}
           </div>
        </div>
      </div>

    {/* 2. INDUSTRY PROTOCOL */}
    <div className="group relative p-10 rounded-[48px] border border-white/10 bg-secondary/60 backdrop-blur-3xl transition-all duration-500 hover:border-accent/40 shadow-2xl flex flex-col justify-between overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-white group-hover:text-accent transition-colors">
        <Code2 size={140} />
      </div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-10">
          <span className="px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent font-black text-[10px] tracking-widest uppercase">Protocol: Industry</span>
          <p className="text-white/20 font-mono text-[10px]">REF // AG_DS_2024</p>
        </div>
        <h4 className="text-white font-black text-4xl uppercase tracking-tight mb-2 leading-none">Acme Grade</h4>
        <p className="text-accent font-bold text-lg mb-10 italic">Data Science Intern</p>
        <div className="space-y-6">
          {[
            { label: "Recommendation Engines", level: 90 },
            { label: "Predictive Analysis", level: 94 },
            { label: "Data Clustering", level: 89 }
          ].map((item, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                <span className="text-muted">{item.label}</span>
                <span className="text-accent">{item.level}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-accent/40 group-hover:bg-accent transition-all duration-1000" style={{ width: `${item.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 mt-12 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-black text-white/20 uppercase tracking-widest">
         <span>Noida Sector 62-- Q3</span>
         <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-accent animate-[shimmer_2s_infinite]" />
         </div>
      </div>
    </div>

    {/* --- SKILLS START HERE (Now the same size as Protocol cards) --- */}

    {/* 3. FRONTEND ARCHITECTURE */}
    <div className="group relative p-10 rounded-[48px] border border-white/10 bg-secondary/50 backdrop-blur-3xl hover:border-accent/30 transition-all shadow-xl overflow-hidden">
       <div className="absolute -right-6 -bottom-6 opacity-[0.03] text-white group-hover:text-accent group-hover:opacity-[0.08] transition-all">
         <Cpu size={200} />
       </div>
       <div className="relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-accent/10 rounded-2xl text-accent"><Cpu size={28} /></div>
            <h4 className="text-white font-black text-2xl uppercase tracking-tight italic">Frontend Architecture</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[ { n: "Next.js 15", l: 98 }, { n: "TypeScript", l: 95 }, { n: "Tailwind v4", l: 100 }, { n: "Framer Motion", l: 90 } ].map((s, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-muted">
                  <span>{s.n}</span>
                  <span className="text-accent">{s.l}%</span>
                </div>
                <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent group-hover:bg-accent transition-all duration-1000" style={{ width: `${s.l}%` }} />
                </div>
              </div>
            ))}
          </div>
       </div>
    </div>

    {/* 4. INTELLIGENCE SYSTEMS */}
    <div className="group relative p-10 rounded-[48px] border border-white/10 bg-secondary/50 backdrop-blur-3xl hover:border-accent/30 transition-all shadow-xl overflow-hidden">
       <div className="absolute -right-6 -bottom-6 opacity-[0.03] text-white group-hover:text-accent group-hover:opacity-[0.08] transition-all">
         <Sparkles size={200} />
       </div>
       <div className="relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-accent/10 rounded-2xl text-accent"><Sparkles size={28} /></div>
            <h4 className="text-white font-black text-2xl uppercase tracking-tight italic">Intelligence Systems</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[ { n: "Python", l: 92 }, { n: "TensorFlow", l: 85 }, { n: "Scikit-learn", l: 94 }, { n: "NumPy/Pandas", l: 96 } ].map((s, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-muted">
                  <span>{s.n}</span>
                  <span className="text-accent">{s.l}%</span>
                </div>
                <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent group-hover:bg-accent transition-all duration-1000" style={{ width: `${s.l}%` }} />
                </div>
              </div>
            ))}
          </div>
       </div>
    </div>

    {/* 5. BACKEND LOGIC */}
    <div className="group relative p-10 rounded-[48px] border border-white/10 bg-secondary/50 backdrop-blur-3xl hover:border-accent/30 transition-all shadow-xl overflow-hidden">
       <div className="absolute -right-6 -bottom-6 opacity-[0.03] text-white group-hover:text-accent group-hover:opacity-[0.08] transition-all">
         <Database size={200} />
       </div>
       <div className="relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-accent/10 rounded-2xl text-accent"><Database size={28} /></div>
            <h4 className="text-white font-black text-2xl uppercase tracking-tight italic">Backend Logic</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[ { n: "Node.js", l: 94 }, { n: "MongoDB", l: 96 }, { n: "REST APIs", l: 98 }, { n: "PostgreSQL", l: 82 } ].map((s, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-muted">
                  <span>{s.n}</span>
                  <span className="text-accent">{s.l}%</span>
                </div>
                <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent group-hover:bg-accent transition-all duration-1000" style={{ width: `${s.l}%` }} />
                </div>
              </div>
            ))}
          </div>
       </div>
    </div>

    {/* 6. MOBILE ECOSYSTEM */}
    <div className="group relative p-10 rounded-[48px] border border-white/10 bg-secondary/50 backdrop-blur-3xl hover:border-accent/30 transition-all shadow-xl overflow-hidden">
       <div className="absolute -right-6 -bottom-6 opacity-[0.03] text-white group-hover:text-accent group-hover:opacity-[0.08] transition-all">
         <Smartphone size={200} />
       </div>
       <div className="relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-accent/10 rounded-2xl text-accent"><Smartphone size={28} /></div>
            <h4 className="text-white font-black text-2xl uppercase tracking-tight italic">Mobile Ecosystem</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[ { n: "Kotlin Native", l: 82 }, { n: "Android SDK", l: 85 }, { n: "MVVM Pattern", l: 90 }, { n: "Firebase", l: 93 } ].map((s, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-muted">
                  <span>{s.n}</span>
                  <span className="text-accent">{s.l}%</span>
                </div>
                <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent group-hover:bg-accent transition-all duration-1000" style={{ width: `${s.l}%` }} />
                </div>
              </div>
            ))}
          </div>
       </div>
    </div>

  </div>
</section>



      {/* --- SELECTED WORKS --- */}
      <section id="projects" className="relative z-10 max-w-6xl mx-auto px-6 py-40">
        <div className="absolute -top-20 left-0 text-[18vw] font-black text-white/[0.01] select-none pointer-events-none tracking-tighter uppercase italic">
          Selected
        </div>

        <h2 className="text-3xl font-black text-white mb-24 tracking-tighter uppercase underline decoration-accent/30 underline-offset-8">
          02 // Featured Operations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {projects.length === 0 ? (
             <p className="text-muted italic">Waiting for project synchronization...</p>
          ) : (
            projects.map((project: IProject, index: number ) => (
              <FadeIn key={project.title} delay={index * 0.1}>
                <div className="group relative flex flex-col gap-10">
                  <div className="transform transition-all duration-700 ease-out group-hover:-translate-y-4 shadow-premium group-hover:shadow-indigo-glow rounded-3xl">
                    <BrowserFrame>
                      <Image 
                        src={project.image || "/placeholder.jpg"} 
                        alt={project.title}
                        fill
                        className="object-cover grayscale-[30%] group-hover:grayscale-0 scale-[1.01] group-hover:scale-110 transition-all duration-[1.5s]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </BrowserFrame>
                  </div>

                  <div className="px-2 transition-all duration-500 group-hover:translate-x-2">
                    <div className="flex items-center gap-6 mb-6">
                      <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic group-hover:text-accent transition-colors">{project.title}</h3>
                      <div className="h-px flex-1 bg-white/5 group-hover:bg-accent/30 transition-all" />
                    </div>
                    
                    <p className="text-muted text-sm mb-8 leading-relaxed max-w-md italic font-medium">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.techStack?.map((tech: string) => (
                        <span key={tech} className="text-[10px] font-black text-accent bg-accent/5 px-4 py-1.5 border border-accent/10 rounded-full tracking-widest uppercase shadow-[0_0_15px_rgba(99,102,241,0.05)]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link 
                      href={project.link || "#"} 
                      target="_blank"
                      className="inline-flex items-center gap-3 text-white text-[11px] font-black tracking-[0.4em] uppercase group-hover:text-accent transition-all"
                    >
                      DECRYPT SYSTEM <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))
          )}
        </div>
      </section>
    </main>
  );
}