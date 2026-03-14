"use client";

import { CldUploadWidget, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { useState } from "react";
import { UploadCloud, Check, AlertCircle } from "lucide-react";

// Define interface for the widget's render properties to stay type-safe
interface CldRenderProps {
  open: () => void;
}

interface CldUploadProps {
  onSuccess: (url: string) => void;
}

export default function CldUpload({ onSuccess }: CldUploadProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  return (
    <div className="w-full">
      <CldUploadWidget
        uploadPreset="portfolio_unsigned" // Use the exact name from Phase 1
        onSuccess={(results: CloudinaryUploadWidgetResults) => {
          if (results.info && typeof results.info !== "string") {
            onSuccess(results.info.secure_url);
            setStatus("success");
          }
        }}
        onError={() => setStatus("error")}
      >
        {({ open }: CldRenderProps) => {
          return (
            <button
              type="button"
              onClick={() => open()}
              className={`w-full py-10 border-2 border-dashed rounded-[32px] transition-all flex flex-col items-center gap-4 bg-secondary/20 backdrop-blur-xl ${
                status === "success" 
                ? "border-emerald-500/40 text-emerald-500" 
                : status === "error"
                ? "border-red-500/40 text-red-500"
                : "border-white/10 text-muted hover:border-accent/40"
              }`}
            >
              {status === "success" ? (
                <>
                  <Check size={32} className="animate-in zoom-in" />
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase">Asset_Linked_Successfully</span>
                </>
              ) : status === "error" ? (
                <>
                  <AlertCircle size={32} />
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-red-400">Connection_Failed</span>
                </>
              ) : (
                <>
                  <UploadCloud size={32} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  <div className="text-center">
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase block mb-2">Initialize_Media_Upload</span>
                    <span className="text-[8px] opacity-30 uppercase tracking-widest">Supports: WebP, PNG, JPG (Max 5MB)</span>
                  </div>
                </>
              )}
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}