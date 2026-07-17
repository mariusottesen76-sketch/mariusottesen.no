"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Lang } from "../../LanguageContext";

type ProjectImageModalProps = {
  src: string;
  alt: string;
  lang: Lang;
  onClose: () => void;
};

/** Viser originalbilde uten 3:1-beskjæring — brukes fra hero-banner og /prosjekter. */
export default function ProjectImageModal({ src, alt, lang, onClose }: ProjectImageModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative max-w-[96vw] max-h-[96vh] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={lang === "no" ? "Forstørret prosjektbilde" : "Enlarged project image"}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-slate-900/80 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white hover:bg-slate-800 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          {lang === "no" ? "Lukk" : "Close"}
        </button>
        <div className="w-full h-full flex flex-col items-center justify-center p-4 overflow-auto">
          <Image
            src={src}
            alt={alt}
            width={1800}
            height={1800}
            className="max-w-[1400px] max-h-[90vh] w-auto h-auto object-contain mx-auto"
          />
          <p className="mt-3 text-xs text-slate-400 uppercase tracking-widest font-black text-center">
            {alt}
          </p>
        </div>
      </div>
    </div>
  );
}
