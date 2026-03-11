export default function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      w-full rounded-2xl overflow-hidden 
      /* The Shadow Layering */
      shadow-premium group-hover:shadow-indigo-glow
      /* The High-End Border Logic */
      border border-white/5 group-hover:border-accent/30
      /* The Top Light Highlight */
      before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
      relative bg-secondary/80 backdrop-blur-xl
      shadow-transition
    ">
      {/* Browser Header */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors duration-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors duration-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors duration-500" />
        </div>
        
        <div className="ml-4 flex-1 h-5 bg-black/20 rounded-lg border border-white/5 flex items-center px-3">
          <div className="w-20 h-1 bg-white/10 rounded-full" />
        </div>
      </div>

      {/* The Content (The Image) */}
      <div className="relative aspect-video overflow-hidden">
        {children}
      </div>
    </div>
  );
}