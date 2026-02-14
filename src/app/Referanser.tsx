"use client";
import React from "react";
import Image from "next/image";
import { Quote, Calendar, UserCheck, Linkedin } from "lucide-react";
import { referanserData } from "./data/referanser";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";

export default function Referanser() {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);

  const sortert = [...referanserData].sort(
    (a, b) => new Date(b.sorteringsDato).getTime() - new Date(a.sorteringsDato).getTime()
  );

  return (
    <div className="py-4 text-left w-full overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-60 shrink-0">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
            <Image src="/images/referanser.jpg.jpg" alt="Referanser og anbefalinger fra kollegaer" width={240} height={320} className="w-full h-auto" />
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-6">
          <div className="space-y-2">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
              {lang === "no" ? (<>Referanser & <span className="text-indigo-500">Anbefalinger</span></>) : (<>References & <span className="text-indigo-500">Recommendations</span></>)}
            </h2>
            <p className="text-base text-indigo-400 font-black uppercase tracking-widest italic">
              {tr("ref.sub")}
            </p>
          </div>

          <div className="text-base text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed">
            {tr("ref.intro")}
          </div>

          <div className="space-y-5">
            {sortert.map((ref) => (
              <div key={ref.id} className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                    <Quote size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-black text-white uppercase italic tracking-tight">{ref.navn}</h3>
                    <p className="text-indigo-400 text-xs font-bold italic">{ref.tittel}</p>
                  </div>
                </div>

                <blockquote className="text-slate-300 text-[13px] italic font-medium leading-relaxed pl-14 border-l-2 border-indigo-500/20 ml-0 space-y-3">
                  {ref.tekst.split("\n\n").map((avsnitt, i) => (
                    <p key={i}>{i === 0 ? `\u201C${avsnitt}` : avsnitt}{i === ref.tekst.split("\n\n").length - 1 ? "\u201D" : ""}</p>
                  ))}
                </blockquote>

                <div className="flex flex-wrap items-center gap-4 mt-4 pl-14">
                  <span className="flex items-center gap-2 text-slate-500 text-[9px] font-bold uppercase tracking-widest">
                    <UserCheck size={11} /> {ref.relasjon}
                  </span>
                  <span className="text-slate-700">|</span>
                  <span className="flex items-center gap-2 text-slate-500 text-[9px] font-bold uppercase tracking-widest">
                    <Calendar size={11} /> {ref.dato}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://www.linkedin.com/in/mariusottesen/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-slate-900/60 transition-all group"
          >
            <div className="flex items-center gap-4">
              <Linkedin className="text-indigo-500" size={22} />
              <span className="text-white font-bold uppercase tracking-widest text-xs">{tr("ref.linkedin")}</span>
            </div>
            <Quote className="text-slate-600 group-hover:text-indigo-500 transition-colors" size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
