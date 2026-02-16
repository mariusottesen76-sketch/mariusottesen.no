"use client";
import React from "react";
import Image from "next/image";
import { ShieldCheck, Zap, Globe, Target, Star, Brain, Users, ArrowRight } from "lucide-react";
import { getProfilData } from "./data/profil";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function Profil({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const profilData = getProfilData(lang);

  return (
    <div className="py-4 relative overflow-x-hidden w-full">
      {/* FINGERMERKE – diffust bakgrunnselement */}
      <div className="absolute -right-4 -top-12 w-[300px] md:w-[450px] h-[300px] md:h-[450px] opacity-[0.25] pointer-events-none select-none blur-[0.5px]">
        <Image
          src="/images/fingerprint.png.png"
          alt=""
          width={450}
          height={450}
          className="w-full h-full object-contain"
          aria-hidden="true"
          priority={false}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start text-left relative z-10">

        {/* BILDE */}
        <div className="w-full md:w-60 shrink-0">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
            <Image
              src="/images/profil.jpg"
              alt="Marius Ottesen — Kommersiell Leder & AI-Strateg"
              width={240}
              height={320}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* INNHOLD */}
        <div className="flex-1 min-w-0 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter uppercase italic break-words max-w-full [overflow-wrap:anywhere]">
              Marius <span className="text-indigo-500">Ottesen</span>
            </h1>
            <p className="text-lg text-indigo-400 font-black uppercase tracking-widest italic">
              {tr("profil.tittel")}
            </p>
          </div>

          {/* VALUE PROPOSITION – 5 sekunder */}
          <div className="p-6 bg-indigo-500/5 border border-indigo-500/15 rounded-2xl">
            <p className="text-xl md:text-2xl text-white font-bold leading-snug tracking-tight">
              {tr("profil.vp.headline")}
            </p>
            <p className="text-lg text-slate-400 mt-2 italic">
              {tr("profil.vp.sub")}
            </p>
          </div>

          <div className="text-lg text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed whitespace-pre-line">
            {profilData.hoved}
          </div>

          {/* SELSKAP */}
          <div className="p-8 bg-slate-900/25 backdrop-blur-sm border border-indigo-500/20 rounded-2xl shadow-xl space-y-5">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-700/50 p-1 shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/moc.logo.png" alt="MOC" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-white font-black text-xl uppercase italic tracking-tight">
                  Marius Ottesen Consulting
                </h3>
                <p className="text-slate-500 text-[11px] font-bold tracking-widest mt-1">
                  Org. nr. 937 102 801
                </p>
              </div>
            </div>
            <p className="text-slate-300 text-sm font-medium italic leading-relaxed">
              {tr("profil.selskap.desc")}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              <span className="flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[8px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-tight sm:tracking-wider lg:tracking-widest text-center min-w-0 overflow-hidden">
                <Brain size={11} className="sm:size-[12] lg:size-[13px] shrink-0 flex-shrink-0" />
                <span className="break-words break-all leading-tight" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{tr("profil.chip.ai")}</span>
              </span>
              <span className="flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[8px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-tight sm:tracking-wider lg:tracking-widest text-center min-w-0 overflow-hidden">
                <Zap size={11} className="sm:size-[12] lg:size-[13px] shrink-0 flex-shrink-0" />
                <span className="break-words break-all leading-tight" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{tr("profil.chip.prosess")}</span>
              </span>
              <span className="flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[8px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-tight sm:tracking-wider lg:tracking-widest text-center min-w-0 overflow-hidden">
                <Globe size={11} className="sm:size-[12] lg:size-[13px] shrink-0 flex-shrink-0" />
                <span className="break-words break-all leading-tight" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{tr("profil.chip.digital")}</span>
              </span>
              <span className="flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[8px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-tight sm:tracking-wider lg:tracking-widest text-center min-w-0 overflow-hidden">
                <Users size={11} className="sm:size-[12] lg:size-[13px] shrink-0 flex-shrink-0" />
                <span className="break-words break-all leading-tight" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{tr("profil.chip.workshops")}</span>
              </span>
            </div>
            {onNavigate && (
              <button
                onClick={() => onNavigate("Consulting")}
                className="inline-flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-widest hover:text-white transition-all group/link"
              >
                {tr("profil.cta.tjenester")}
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          <div className="grid gap-5">
            <div className="p-8 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-4">
              <h3 className="text-white font-black flex items-center gap-3 text-lg uppercase italic">
                <ShieldCheck className="text-indigo-500" size={24} /> {tr("profil.operativ.title")}
              </h3>
              <div className="text-slate-400 text-sm font-medium italic leading-relaxed whitespace-pre-line">
                {profilData.lederskap}
              </div>
            </div>

            <div className="p-8 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-4">
              <h3 className="text-white font-black flex items-center gap-3 text-lg uppercase italic">
                <Globe className="text-indigo-500" size={24} /> {tr("profil.bransje.title")}
              </h3>
              <div className="text-slate-400 text-sm font-medium italic leading-relaxed">
                {profilData.bransje}
              </div>
            </div>

            <div className="p-8 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-4">
              <h3 className="text-white font-black flex items-center gap-3 text-lg uppercase italic">
                <Zap className="text-indigo-500" size={24} /> {tr("profil.utdanning.title")}
              </h3>
              <div
                className="text-slate-400 text-sm font-medium italic leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: profilData.utdanning.replace(/\*(.*?)\*/g, '<em class="text-indigo-400 not-italic font-black">$1</em>'),
                }}
              />
            </div>

            {/* KOMPETANSE OG STYRKER */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-8 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-4">
                <h3 className="text-white font-black flex items-center gap-3 text-lg uppercase italic break-words max-w-full min-w-0 [overflow-wrap:anywhere]">
                  <Target className="text-indigo-500 shrink-0" size={24} /> <span className="min-w-0">{tr("profil.kompetanse.title.1")}<br className="sm:hidden" />{tr("profil.kompetanse.title.2")}</span>
                </h3>
                <ul className="space-y-2 text-left">
                  {profilData.kompetanse.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm font-medium italic flex items-start gap-2">
                      <span className="text-indigo-500 text-lg leading-none">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-4">
                <h3 className="text-white font-black flex items-center gap-3 text-lg uppercase italic">
                  <Star className="text-indigo-500" size={24} /> {tr("profil.styrker.title")}
                </h3>
                <p className="text-[10px] text-slate-500 italic mb-2">{tr("profil.styrker.sub")}</p>
                <ul className="space-y-2 text-left">
                  {profilData.styrker.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm font-medium italic flex items-start gap-2">
                      <span className="text-indigo-500 text-lg leading-none">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* LOGOVEGG – Sosial bevisførsel */}
          <div className="pt-4 space-y-5">
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3">{tr("profil.logoer.erfaring")}</p>
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {[
                  { src: "/images/Franzefoss.png", alt: "Franzefoss", h: "max-h-[26px]" },
                  { src: "/images/Norengros.png", alt: "Norengros", h: "max-h-[30px]" },
                  { src: "/images/Nilfisk.png", alt: "Nilfisk", h: "max-h-[42px]" },
                  { src: "/images/Pelagia.png", alt: "Pelagia", h: "max-h-[32px]" },
                  { src: "/images/Falck%20Nutec.png", alt: "Falck Nutec", h: "max-h-[42px]" },
                  { src: "/images/Assessit.png", alt: "Assessit", h: "max-h-[32px]" },
                  { src: "/images/Mundipharma.png", alt: "Mundipharma", h: "max-h-[26px]" },
                  { src: "/images/meddrop-logo.png", alt: "MedDrop", h: "max-h-[32px]" },
                ].map((logo) => (
                  <div key={logo.alt} className="flex-1 min-w-[80px] h-[44px] flex items-center justify-center bg-white rounded-lg p-1.5 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={`${logo.alt} logo`} width={100} height={44} className={`${logo.h} max-w-full w-auto h-auto object-contain`} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3">{tr("profil.logoer.utdanning")}</p>
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { src: "/images/BI.png", alt: "BI Norwegian Business School" },
                  { src: "/images/UofU.png", alt: "University of Utah" },
                  { src: "/images/Uio.png", alt: "Universitetet i Oslo" },
                ].map((logo) => (
                  <div key={logo.alt} className="w-[120px] h-[48px] flex items-center justify-center bg-white rounded-lg p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={`${logo.alt} logo`} width={100} height={28} className="max-h-[28px] max-w-[100px] w-auto h-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
