"use client";
import React from "react";
import Image from "next/image";
import { FileText, Download, Linkedin, ChevronRight } from "lucide-react";
import { getDokumentasjonData, linkedinUrl } from "./data/dokumentasjon";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";

export default function Dokumentasjon() {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const dokumentasjonData = getDokumentasjonData(lang);

  return (
    <div className="py-4 text-left w-full overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-60 shrink-0">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
            <Image src="/images/cv-header.png" alt="CV og åpen søknad — Marius Ottesen" width={240} height={320} className="w-full h-auto" />
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
              {tr("dok.title.1")} <span className="text-indigo-500">{tr("dok.title.2")}</span>
            </h1>
            <p className="text-lg text-indigo-400 font-black uppercase tracking-widest italic">
              {dokumentasjonData.tittel}
            </p>
          </div>

          <div className="text-lg text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed">
            {dokumentasjonData.intro}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <a href="/pdf/cv.pdf" target="_blank" rel="noopener noreferrer" className="group p-8 bg-slate-900/40 border border-slate-800 rounded-2xl shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-4 text-center">
              <FileText size={40} className="text-indigo-500" />
              <h3 className="text-white font-black text-xl uppercase italic">{tr("dok.cv")}</h3>
              <p className="text-slate-400 text-sm italic font-medium">{tr("dok.cv.desc")}</p>
              <span className="flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-widest mt-2 group-hover:text-white transition-colors">
                <Download size={16} /> {tr("dok.cv.btn")}
              </span>
            </a>

            <a href="/pdf/soknad.pdf" target="_blank" rel="noopener noreferrer" className="group p-8 bg-slate-900/40 border border-slate-800 rounded-2xl shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-4 text-center">
              <FileText size={40} className="text-indigo-500" />
              <h3 className="text-white font-black text-xl uppercase italic">{tr("dok.soknad")}</h3>
              <p className="text-slate-400 text-sm italic font-medium">{tr("dok.soknad.desc")}</p>
              <span className="flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-widest mt-2 group-hover:text-white transition-colors">
                <Download size={16} /> {tr("dok.cv.btn")}
              </span>
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-slate-400 italic font-medium text-sm">{dokumentasjonData.linkedinTekst}</p>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-slate-900/60 transition-all group">
              <div className="flex items-center gap-4">
                <Linkedin className="text-indigo-500" size={24} />
                <span className="text-white font-bold uppercase tracking-widest text-sm">{tr("dok.linkedin")}</span>
              </div>
              <ChevronRight className="text-slate-600 group-hover:text-indigo-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
