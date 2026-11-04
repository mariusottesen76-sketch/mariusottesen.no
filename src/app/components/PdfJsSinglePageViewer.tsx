"use client";

import { useEffect, useRef, useState } from "react";

type PdfJsSinglePageViewerProps = {
  pdfUrl: string;
  title: string;
  className?: string;
  placeholder: string;
  active: boolean;
};

/** Renders page 1 scaled to container width — avoids Chrome iframe PDF zoom bugs. */
export default function PdfJsSinglePageViewer({
  pdfUrl,
  title,
  className = "",
  placeholder,
  active,
}: PdfJsSinglePageViewerProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frameWidth, setFrameWidth] = useState(0);
  const [renderError, setRenderError] = useState(false);

  useEffect(() => {
    if (!active) {
      setFrameWidth(0);
      return;
    }
    const node = wrapRef.current;
    if (!node) return;

    const update = () => {
      const w = node.clientWidth;
      if (w > 0) setFrameWidth(w);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(node);
    return () => ro.disconnect();
  }, [active]);

  useEffect(() => {
    if (!active || frameWidth <= 0) return;

    let cancelled = false;
    setRenderError(false);

    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

        const pdf = await pdfjs.getDocument(pdfUrl).promise;
        if (cancelled) return;

        const page = await pdf.getPage(1);
        if (cancelled) return;

        const canvas = canvasRef.current;
        const wrap = wrapRef.current;
        if (!canvas || !wrap) return;

        const baseViewport = page.getViewport({ scale: 1 });
        const scale = frameWidth / baseViewport.width;
        const viewport = page.getViewport({ scale });
        const outputScale = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.setTransform(outputScale, 0, 0, outputScale, 0, 0);

        await page.render({ canvasContext: ctx, viewport }).promise;
      } catch {
        if (!cancelled) setRenderError(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [active, frameWidth, pdfUrl]);

  if (!active) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-100 text-slate-500 text-sm italic px-6 text-center ${className}`}
      >
        {placeholder}
      </div>
    );
  }

  return (
    <div
      ref={wrapRef}
      className={`overflow-auto bg-slate-200/90 flex justify-center p-2 sm:p-3 ${className}`}
      aria-label={title}
    >
      {renderError ? (
        <p className="text-sm text-slate-600 italic px-4 py-8 text-center">
          Kunne ikke vise forhåndsvisning. Bruk lenken under for å åpne PDF.
        </p>
      ) : (
        <canvas ref={canvasRef} className="max-w-full h-auto bg-white shadow-sm" role="img" aria-label={title} />
      )}
    </div>
  );
}
