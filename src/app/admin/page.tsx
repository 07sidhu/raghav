"use client";

import React, { useState, ReactNode } from "react"; // Changed imports
import CldUpload from "@/components/CldUpload";
import { Terminal, Cpu, Link as LinkIcon, Info, LucideIcon } from "lucide-react";

// --- 1. SHARED UI UTILITIES ---

const inputClasses = "w-full bg-black/40 border border-white/5 p-4 rounded-xl text-white text-xs outline-none focus:border-accent focus:bg-black/60 transition-all placeholder:text-white/10 shadow-inner";

interface FormFieldProps {
  label: string;
  icon: LucideIcon;
  children: ReactNode;
}

const FormField = ({ label, icon: Icon, children }: FormFieldProps) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black text-accent uppercase tracking-[0.3em] ml-2 flex items-center gap-2">
      <Icon size={12} />
      {label}
    </label>
    {children}
  </div>
);

export default function AdminPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  // FIX: Using React.FormEvent instead of standalone FormEvent
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageUrl) return alert("CRITICAL_ERROR: Visual asset missing.");

    setLoading(true);
    
    // We use e.currentTarget to refer specifically to the form element
    const formData = new FormData(e.currentTarget);
    
    const getVal = (key: string): string => formData.get(key)?.toString() || "";

    const projectData = {
      title: getVal("title"),
      description: getVal("description"),
      techStack: getVal("tech").split(",").map((t: string) => t.trim()),
      link: getVal("link"),
      image: imageUrl,
    };

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      });

      if (res.ok) {
        alert("✅ SYNCHRONIZATION COMPLETE: Project added to Atlas.");
        window.location.reload(); 
      } else {
        const errorData = (await res.json()) as { error: string };
        alert(`❌ SYSTEM_REJECTION: ${errorData.error}`);
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Transmission failed";
      console.error("Transmission failed:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 px-6 flex flex-col items-center bg-background">
      <div className="w-full max-w-xl space-y-12">
        
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <h1 className="text-2xl font-black text-white uppercase italic tracking-tighter shrink-0">
            Add_Operation
          </h1>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* SECTION 01: MEDIA */}
        <div className="space-y-4">
           <div className="flex items-center gap-2 ml-2">
              <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em]">01. Visual_Asset</span>
           </div>
           <CldUpload onSuccess={(url: string) => setImageUrl(url)} />
        </div>

        {/* SECTION 02: FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-secondary/50 p-10 rounded-[48px] border border-white/5 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 blur-3xl rounded-full" />
           
           <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em]">02. System_Parameters</span>
           </div>

           <FormField label="Project Identity" icon={Terminal}>
             <input name="title" placeholder="ENTER_PROJECT_TITLE" required className={inputClasses} />
           </FormField>

           <FormField label="Mission Briefing" icon={Info}>
             <textarea name="description" placeholder="DESCRIBE_THE_SYSTEM_MISSION" required rows={3} className={inputClasses} />
           </FormField>

           <FormField label="Technical Stack" icon={Cpu}>
             <input name="tech" placeholder="NEXT.JS, TYPESCRIPT, MONGODB" required className={inputClasses} />
           </FormField>

           <FormField label="Live Access Link" icon={LinkIcon}>
             <input name="link" placeholder="HTTPS://LIVE-SYSTEM.VERCEL.APP" required className={inputClasses} />
           </FormField>

           <button 
             disabled={loading || !imageUrl} 
             type="submit" 
             className="mt-4 py-5 bg-accent text-white font-black tracking-[0.4em] text-[10px] rounded-2xl hover:shadow-[0_0_40px_#6366f166] hover:scale-[1.02] transition-all disabled:opacity-20 active:scale-95"
           >
             {loading ? "TRANSMITTING_DATA..." : "PUSH_TO_ATLAS_CLOUD"}
           </button>
        </form>

        <div className="text-center">
           <p className="text-[8px] font-black text-white/10 uppercase tracking-[0.6em]">Secure_Admin_Terminal // User_Raghav</p>
        </div>
      </div>
    </main>
  );
}