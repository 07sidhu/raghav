"use client";
import { motion } from "framer-motion";
import { MessageSquareText } from "lucide-react";

export default function WhatsAppFAB() {
  const WHATSAPP_URL = "https://wa.me/919027025792?text=Initialize%20Project%20Protocol%3A%20Hello%20Raghav%2C%20I'm%20interested%20in%20starting%20a%20project.";

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] group"
    >
      {/* Pulse Effect */}
      <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl animate-pulse group-hover:bg-emerald-500/20 transition-colors" />
      
      {/* The Button */}
      <div className="relative flex items-center gap-3 bg-secondary/80 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl shadow-2xl group-hover:border-emerald-500/50 transition-all">
        <div className="w-10 h-10 bg-accent group-hover:bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg transition-colors">
          <MessageSquareText size={20} />
        </div>
        <div className="flex flex-col pr-2">
           <span className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none mb-1">Direct_Channel</span>
           <span className="text-xs font-bold text-white uppercase tracking-tight">Priority Chat</span>
        </div>
      </div>
    </motion.a>
  );
}