"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import { predictiveSalesCoach, type ProsjektType } from "./data/prosjekter/predictive-sales-coach";

const alleProsjekter: ProsjektType[] = [predictiveSalesCoach].sort(
  (a, b) => new Date(b.dato).getTime() - new Date(a.dato).getTime()
);

export default function Prosjekter({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const [activeImage, setActiveImage] = useState<ProsjektType | null>(null);

  return (
    <div className="py-4 text-left w-full overflow-x-hidden min-w-0">
      {/* HERO SEKSJON */}
      <div className="flex flex-col md:flex-row gap-6 items-start border-b border-slate-800/40 pb-6 min-w-0">
        <div className="w-full md:w-[400px] shrink-0 min-w-0">
          <Image
            src="/images/prosjekt-bilde.jpg"
            alt="AI-prosjekter og utvikling — Marius Ottesen"
            width={400}
            height={500}
            className="w-full h-auto rounded-2xl shadow-xl border border-slate-800 object-cover max-w-full"
          />
        </div>
        <div className="flex-1 min-w-0 pt-2 overflow-hidden">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-6 tracking-tighter leading-tight text-white uppercase italic break-words [overflow-wrap:anywhere]">
            {tr("prosjekter.title.1")} <br />
            <span className="text-indigo-500">{tr("prosjekter.title.2")}</span>
          </h1>
          <div className="max-w-3xl min-w-0">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-4 break-words">
              {tr("prosjekter.intro.1")}
            </p>
            <p className="text-lg md:text-xl text-slate-400 italic leading-relaxed font-light break-words">
              {tr("prosjekter.intro.2")}
            </p>
            <p className="mt-3 text-sm text-slate-500">
              {tr("prosjekter.bilde.hint")}
            </p>
          </div>
        </div>
      </div>

      {/* PROSJEKTLISTE – smalere bilde, tekst innenfor ramme */}
      <div className="mt-8 space-y-8 min-w-0">
        {alleProsjekter.map((prosjekt) => (
          <article
            key={prosjekt.id}
            className="bg-slate-900/40 rounded-2xl border border-indigo-500/20 overflow-hidden shadow-xl min-w-0"
          >
            <div className="flex flex-col md:flex-row gap-0 min-w-0">
              {/* Smalere bildekolonne – predictive / predictive-sales-coach */}
              <div className="w-full md:w-[220px] lg:w-[260px] shrink-0 md:min-h-[260px] flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveImage(prosjekt)}
                  className="w-full h-48 md:h-full relative bg-slate-800 overflow-hidden group cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-lg border border-slate-700/60"
                  aria-label={tr("prosjekter.bilde.hint")}
                >
                  <Image
                    src={prosjekt.bildeUrl}
                    alt={prosjekt.tittel}
                    fill
                    className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 260px"
                  />
                </button>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black text-center px-1">
                  {tr("prosjekter.bilde.hint")}
                </p>
              </div>
              <div className="flex-1 min-w-0 p-6 md:p-8 flex flex-col justify-center overflow-hidden">
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold block mb-2">
                  {prosjekt.visningsDato}
                </span>
                <h2 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight uppercase italic mb-4 break-words [overflow-wrap:anywhere]">
                  {prosjekt.tittel}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light break-words">
                  {prosjekt.teaser}
                </p>
                <div className="text-slate-300 text-base leading-relaxed space-y-3 font-light break-words overflow-hidden">
                  {prosjekt.innhold.split("\n\n").map((avsnitt, i) => (
                    <p key={i} className="min-w-0">{avsnitt.trim()}</p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-[96vw] max-h-[96vh] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-slate-900/80 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
            >
              Lukk
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center p-4 overflow-auto">
              <Image
                src={activeImage.bildeUrl}
                alt={activeImage.tittel}
                width={1400}
                height={900}
                className="max-w-[1400px] max-h-[90vh] w-auto h-auto object-contain mx-auto"
              />
              <p className="mt-3 text-xs text-slate-400 uppercase tracking-widest font-black text-center">
                {activeImage.tittel}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
