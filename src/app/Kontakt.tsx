"use client";
import React from "react";
import Image from "next/image";
import { Mail, Smartphone, Linkedin, ChevronRight, Target, Briefcase, MessageSquare, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";

export default function Kontakt() {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);

  return (
    <div className="py-4 text-left w-full overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* BILDE */}
        <div className="w-full md:w-60 shrink-0">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
            <Image src="/images/kontakt.jpg" alt="Marius Ottesen — Kontaktinformasjon" width={240} height={320} className="w-full h-auto" />
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter uppercase italic break-words max-w-full [overflow-wrap:anywhere]">{tr("kontakt.title")}</h2>
            <p className="text-lg text-indigo-400 uppercase tracking-widest font-black italic">Marius Ottesen</p>
          </div>

      <div className="w-full bg-slate-900/40 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="p-8 md:p-10 space-y-5 text-slate-300">
          <div className="space-y-2">
            <h3 className="text-indigo-500 font-black flex items-center gap-2 text-sm uppercase tracking-widest">
              <Target size={18} /> {tr("kontakt.profil")}
            </h3>
            <p className="italic font-medium text-base leading-relaxed">{tr("kontakt.profil.desc")}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-indigo-500 font-black flex items-center gap-2 text-sm uppercase tracking-widest">
              <Briefcase size={18} /> {tr("kontakt.ambisjon")}
            </h3>
            <p className="italic font-medium text-base leading-relaxed">{tr("kontakt.ambisjon.desc")}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-indigo-500 font-black flex items-center gap-2 text-sm uppercase tracking-widest">
              <MessageSquare size={18} /> {tr("kontakt.dialog")}
            </h3>
            <p className="italic font-medium text-base leading-relaxed">{tr("kontakt.dialog.desc")}</p>
          </div>
        </div>
      </div>

      <div className="text-center pt-4 max-w-3xl">
        <p className="text-white font-black text-2xl tracking-tight uppercase italic border-b-2 border-indigo-600 pb-4">
          {tr("kontakt.cta")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full min-w-0">
        <a
          href="mailto:marius.ottesen.76@gmail.com"
          className="group p-6 sm:p-8 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-3 text-center min-w-0"
        >
          <Mail size={28} className="text-indigo-500 shrink-0" />
          <p className="text-white font-black text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs whitespace-nowrap min-w-0 max-w-full">
            marius.ottesen.76@gmail.com
          </p>
        </a>
        <a
          href="https://www.mariusottesen.no"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 sm:p-8 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-3 text-center min-w-0"
        >
          <Globe size={28} className="text-indigo-500 shrink-0" />
          <p className="text-white font-black text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs whitespace-nowrap min-w-0 max-w-full">
            www.mariusottesen.no
          </p>
        </a>
        <a
          href="tel:+4747012005"
          className="group p-6 sm:p-8 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-3 text-center min-w-0"
        >
          <Smartphone size={28} className="text-indigo-500 shrink-0" />
          <p className="text-white font-black text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs whitespace-nowrap min-w-0 max-w-full">
            +47 470 12 005
          </p>
        </a>
      </div>

      <a href="https://linkedin.com/in/mariusottesen" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between p-6 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-slate-900/60 transition-all group">
        <div className="flex items-center gap-4">
          <Linkedin className="text-indigo-500" size={24} />
          <span className="text-white font-bold uppercase tracking-widest text-sm">{tr("kontakt.linkedin")}</span>
        </div>
        <ChevronRight className="text-slate-600 group-hover:text-indigo-500 transition-colors" />
      </a>
        </div>
      </div>
    </div>
  );
}
