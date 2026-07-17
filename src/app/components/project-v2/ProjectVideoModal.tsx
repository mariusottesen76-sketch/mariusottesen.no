"use client";

import { useCallback, useEffect, useRef } from "react";
import type { Lang } from "../../LanguageContext";

type ProjectVideoModalProps = {
  src: string;
  poster: string;
  title: string;
  lang: Lang;
  onClose: () => void;
};

export default function ProjectVideoModal({ src, poster, title, lang, onClose }: ProjectVideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [handleClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-4xl max-h-[96vh] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-slate-900/80 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white hover:bg-slate-800 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          {lang === "no" ? "Lukk" : "Close"}
        </button>
        <div className="p-4 pt-12 flex flex-col items-center justify-center min-h-0 overflow-hidden">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="w-full max-h-[calc(96vh-6rem)] aspect-[9/16] sm:aspect-video object-contain bg-black rounded-lg"
          >
            {lang === "no"
              ? "Nettleseren din støtter ikke videoavspilling. Prøv en nyere nettleser eller be om MP4-versjon."
              : "Your browser does not support video playback. Try a newer browser or request an MP4 version."}
          </video>
          <p className="mt-3 text-xs text-slate-400 uppercase tracking-widest font-black text-center px-2">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};
