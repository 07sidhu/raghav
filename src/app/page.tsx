import CircuitBackground from "@/components/CircuitBackground";
import { ArrowRight, Zap } from "lucide-react";
import { connectDB } from "@/lib/mongodb";
import Project, { IProject } from "@/models/Project";
import BrowserFrame from "@/components/BrowserFrame";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";


export default async function Home() {
  await connectDB();
  const projects = await Project.find({}).sort({ createdAt: -1 }) as unknown as IProject[];

  return (
    <main className="relative min-h-screen">
      <CircuitBackground />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-48 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <FadeIn delay={0.2}>
        <div className="px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-xl mb-12 shadow-[0_0_20px_rgba(99,102,241,0.1)] flex items-center gap-2">
          <Zap size={14} className="text-accent fill-accent animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
            System Protocol 2026.v1
          </span>
        </div>
        </FadeIn>

        {/* Titanium Gradient Heading */}
        <FadeIn delay={0.4}>
        <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.85] mb-10 text-white">
          CRAFTING <br />
          <span className="bg-gradient-to-b from-white via-white to-accent bg-clip-text text-transparent opacity-90">
            DIGITAL EDGE
          </span>
        </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-muted text-lg md:text-xl max-w-2xl mb-14 font-medium leading-relaxed">
          High-performance fullstack development focused on 
          <span className="text-white font-semibold"> architectural precision </span> 
          and minimalist design. Build your personal brand and fill your pipeline.
        </p>
        </FadeIn>

        {/* --- BUTTONS SECTION (Indigo Outwrite Style) --- */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
              {/* Link to Pricing Page */}
              <Link 
                href="/pricing" 
                className="group relative px-10 py-4 bg-gradient-to-r from-accent to-[#4f46e5] text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] flex items-center gap-2 overflow-hidden border border-white/10"
              >
                <span className="relative z-10">Initialize Project</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>

              {/* Link to Portfolio/Projects Section */}
              <Link 
                href="/#projects" 
                className="px-10 py-4 bg-[#0a0a0c] border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 hover:border-accent/30 transition-all backdrop-blur-sm shadow-xl"
              >
                View Gallery
              </Link>
            </div>
        {/* --- MINI STATS --- */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.25em] text-muted/60">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            <span>3x Performance boost</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            <span>SEO Optimized</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            <span>Scalable Architecture</span>
          </div>
        </div>
      </section>

      {/* --- EXPERTISE / SERVICES SECTION --- */}
<section id="services" className="relative z-10 max-w-7xl mx-auto px-6 py-32">
  <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full">
    
    {/* Large Feature Card */}
    <div className="md:col-span-2 md:row-span-2 p-10 rounded-[32px] border border-white/5 bg-secondary/30 backdrop-blur-3xl relative overflow-hidden group">
      <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-accent/10 blur-[80px] rounded-full group-hover:bg-accent/20 transition-colors" />
      <Zap className="text-accent mb-8" size={40} />
      <h3 className="text-4xl font-black text-white tracking-tighter mb-4">FULLSTACK <br/>ARCHITECTURE</h3>
      <p className="text-muted text-lg max-w-xs leading-relaxed">
        Building robust, scalable systems using the latest Next.js 15 features and high-performance databases.
      </p>
    </div>

    {/* Speed Card */}
    <div className="md:col-span-2 p-8 rounded-[32px] border border-white/5 bg-secondary/30 backdrop-blur-xl flex flex-col justify-between group hover:border-accent/20 transition-all">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-white tracking-tight">Performance First</h3>
        <ArrowRight className="text-accent -rotate-45 group-hover:rotate-0 transition-transform" />
      </div>
      <p className="text-muted text-sm mt-4">99+ Lighthouse scores. I ensure your site loads instantly, anywhere in the world.</p>
    </div>

    {/* Tool Card 1 */}
    <div className="p-8 rounded-[32px] border border-white/5 bg-secondary/30 backdrop-blur-xl flex flex-col items-center justify-center text-center group hover:bg-accent/5 transition-all">
      <code className="text-accent font-bold mb-2">TypeScript</code>
      <p className="text-[10px] text-muted uppercase tracking-widest font-black">Type Safety</p>
    </div>

    {/* Tool Card 2 */}
    <div className="p-8 rounded-[32px] border border-white/5 bg-secondary/30 backdrop-blur-xl flex flex-col items-center justify-center text-center group hover:bg-accent/5 transition-all">
      <code className="text-accent font-bold mb-2">MongoDB</code>
      <p className="text-[10px] text-muted uppercase tracking-widest font-black">Cloud Data</p>
    </div>

  </div>
</section>


      {/* --- DYNAMIC PROJECTS SECTION --- */}
      <section id="projects" className="relative z-10 max-w-6xl mx-auto px-6 py-40">
        <h2 className="text-3xl font-black text-white mb-20 tracking-tighter uppercase underline decoration-accent/30 underline-offset-8">
          Selected Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.length === 0 ? (
             <p className="text-muted italic">No projects found in Atlas database...</p>
          ) : (
            projects.map((project: IProject, index: number ) => (
 <div key={project.title} className="group relative flex flex-col gap-8">
  
  {/* The Lift Effect: Card moves up 8px on hover */}
  <div className="transform transition-all duration-500 ease-out group-hover:-translate-y-2">
    <BrowserFrame>
      <Image 
        src={project.image} 
        alt={project.title}
        fill
        className="object-cover grayscale-[30%] group-hover:grayscale-0 scale-[1.01] group-hover:scale-105 transition-all duration-1000"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={index === 0}
      />
      {/* Subtle Indigo Tint on Hover */}
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </BrowserFrame>
  </div>

  {/* Info Section - Slightly offset for a modern look */}
  <div className="px-1 transform transition-all duration-500 group-hover:translate-x-1">
    <div className="flex items-center gap-3 mb-4">
      <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{project.title}</h3>
      <div className="h-px flex-1 bg-white/5" /> {/* Technical Divider Line */}
    </div>
    
    <div className="flex flex-wrap gap-2 mb-6">
      {project.techStack?.map((tech: string) => (
        <span key={tech} className="text-[9px] font-black text-accent bg-accent/5 px-3 py-1 border border-accent/10 rounded-full tracking-[0.1em]">
          {tech}
        </span>
      ))}
    </div>

    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-white text-[11px] font-black tracking-[0.3em] uppercase group-hover:text-accent transition-colors">
      DECRYPT SYSTEM <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
</div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}