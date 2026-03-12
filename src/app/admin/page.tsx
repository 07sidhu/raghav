"use client";
import { useState } from "react";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(e.currentTarget);
  
  const projectData = {
    title: formData.get("title"),
    description: formData.get("description"),
    challenge: formData.get("challenge"),
    solution: formData.get("solution"),
    techStack: (formData.get("tech") as string).split(",").map(t => t.trim()),
    link: formData.get("link"),
    image: formData.get("image"),
  };

  // DEBUG 1: See if the form is actually gathering data
  console.log("Client: Sending Project Data ->", projectData);

  try {
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectData),
    });

    const result = await res.json();

    if (res.ok) {
      alert("✅ TRANSMISSION SUCCESSFUL: Data saved to Atlas.");
      (e.target as HTMLFormElement).reset();
    } else {
      // DEBUG 2: See why the server rejected it
      console.error("Server Error:", result.error);
      alert(`❌ SYSTEM ERROR: ${result.error}`);
    }
  } catch (err) {
    console.error("Fetch Error:", err);
    alert("❌ CONNECTION FAILURE: Cannot reach API.");
  } finally {
    setLoading(false);
  }
};

  
  return (
    <main className="min-h-screen pt-32 px-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-secondary/50 p-10 rounded-3xl border border-white/5 backdrop-blur-xl">
        <h1 className="text-3xl font-bold mb-8 text-white">Add New Project</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input 
            name="title" placeholder="Project Title" required
            className="p-4 bg-background border border-white/10 rounded-xl focus:border-accent outline-none text-white transition-all"
          />
          <textarea 
            name="description" placeholder="Project Description" required rows={4}
            className="p-4 bg-background border border-white/10 rounded-xl focus:border-accent outline-none text-white transition-all"
          />
          <textarea 
            name="challenge" 
            placeholder="TECHNICAL CHALLENGE (What problem did this solve?)" 
            rows={3} 
            className="bg-black/50 border border-white/5 p-4 rounded-xl text-white text-xs outline-none focus:border-accent" 
          />

          <textarea 
            name="solution" 
            placeholder="ENGINEERING SOLUTION (How did you build it?)" 
            rows={3} 
            className="bg-black/50 border border-white/5 p-4 rounded-xl text-white text-xs outline-none focus:border-accent" 
          />
          <input 
            name="tech" placeholder="Tech Stack (comma separated: Next.js, Tailwind, Node)" required
            className="p-4 bg-background border border-white/10 rounded-xl focus:border-accent outline-none text-white transition-all"
          />
          <input 
            name="link" placeholder="Project URL (https://...)" 
            className="p-4 bg-background border border-white/10 rounded-xl focus:border-accent outline-none text-white transition-all"
          />
          
          <button 
            type="submit" disabled={loading}
            className="py-4 bg-accent text-white font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {loading ? "Uploading to Atlas..." : "Save Project to Database"}
          </button>
        </form>
      </div>
    </main>
  );
}