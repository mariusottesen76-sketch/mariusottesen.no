"use client";
import React from "react";
import Image from "next/image";
import { Briefcase, Calendar, TrendingUp, Target, Lightbulb, FileText, ChevronRight } from "lucide-react";
import { getErfaringData } from "./data/erfaringInnhold";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";

const selskapLogo: Record<string, string | null> = {
  "Franzefoss Gjenvinning": "/images/Franzefoss.png",
  "Norengros Johs. Olsen": "/images/Norengros.png",
  "MedDrop": null,
  "Mundipharma": "/images/Mundipharma.png",
  "Nilfisk": "/images/Nilfisk.png",
};

export default function Erfaring() {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const CONTENT = getErfaringData(lang);

  return (
    <div className="py-4 text-left w-full overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* BILDE */}
        <div className="w-full md:w-60 shrink-0">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
            <Image src="/images/resultater.jpg" alt="Karrierehøydepunkter og profesjonell erfaring" width={240} height={320} className="w-full h-auto" />
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-6">
          <div className="space-y-4 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter uppercase italic break-words max-w-full [overflow-wrap:anywhere]">
              {lang === "no" ? (<>Karriere<br className="sm:hidden" /><span className="text-indigo-500">høydepunkter</span></>) : (<>Career<br className="sm:hidden" /> <span className="text-indigo-500">Highlights</span></>)}
            </h2>
            <div className="text-lg text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed">
              {CONTENT.intro}
            </div>
          </div>

          <div className="space-y-5">
            {CONTENT.jobs.map((j: any, i: number) => (
              <div key={i} className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl shadow-xl text-left">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shrink-0">
                      {selskapLogo[j.company] ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={selskapLogo[j.company]!} alt={`${j.company} logo`} width={48} height={48} className="max-h-9 max-w-full w-auto h-auto object-contain" />
                      ) : (
                        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">{j.company.replace(/ .*/, "")}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white uppercase italic leading-tight tracking-tight">{j.title}</h3>
                      <p className="text-indigo-400 uppercase text-sm mt-2 italic font-black flex items-center gap-2"><Briefcase size={14}/>{j.company}</p>
                    </div>
                  </div>
                  <div className="text-slate-400 text-[10px] bg-slate-950 px-4 py-2 rounded-full border border-slate-800 self-start shrink-0 font-black">
                    <Calendar size={12} className="mr-1 inline" />{j.period}
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-white text-[10px] uppercase tracking-widest flex items-center gap-2 font-black"><Target size={14} className="text-indigo-500"/>{tr("erfaring.mandat")}</p>
                    <p className="text-slate-300 italic font-medium">{j.mandate}</p>
                  </div>
                  <div>
                    <p className="text-white text-[10px] uppercase tracking-widest flex items-center gap-2 font-black"><Lightbulb size={14} className="text-indigo-500"/>{tr("erfaring.strategi")}</p>
                    <p className="text-slate-300 italic font-medium">{j.strategy}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-indigo-500 text-[10px] uppercase tracking-widest flex items-center gap-2 font-black"><TrendingUp size={14}/>{tr("erfaring.resultater")}</p>
                    <p className="text-white font-bold leading-relaxed">{j.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selskapslogoer */}
          <div className="space-y-3">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{tr("profil.logoer.erfaring")}</p>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { src: "/images/Franzefoss.png", alt: "Franzefoss", h: "max-h-[26px]" },
                { src: "/images/Norengros.png", alt: "Norengros", h: "max-h-[30px]" },
                { src: "/images/Nilfisk.png", alt: "Nilfisk", h: "max-h-[42px]" },
                { src: "/images/Pelagia.png", alt: "Pelagia", h: "max-h-[32px]" },
                { src: "/images/Falck%20Nutec.png", alt: "Falck Nutec", h: "max-h-[42px]" },
                { src: "/images/Assessit.png", alt: "Assessit", h: "max-h-[32px]" },
                { src: "/images/Mundipharma.png", alt: "Mundipharma", h: "max-h-[26px]" },
                { alt: "MedDrop", placeholder: true as const },
              ].map((logo) =>
                "placeholder" in logo && logo.placeholder ? (
                  <div key={logo.alt} className="min-w-[80px] h-[44px] flex items-center justify-center bg-slate-800/60 border border-slate-700 rounded-lg px-3 shrink-0">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{logo.alt}</span>
                  </div>
                ) : (
                  <div key={(logo as { src: string; alt: string; h: string }).alt} className="flex-1 min-w-[80px] h-[44px] flex items-center justify-center bg-white rounded-lg p-1.5 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={(logo as { src: string; alt: string; h: string }).src} alt={`${(logo as { src: string; alt: string; h: string }).alt} logo`} width={100} height={44} className={`${(logo as { src: string; alt: string; h: string }).h} max-w-full w-auto h-auto object-contain`} />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 space-y-4 text-left font-black">
            <h4 className="text-white text-xl uppercase italic">{tr("erfaring.andre")}</h4>
            <div className="grid md:grid-cols-3 gap-6 text-[11px] leading-snug">
              {CONTENT.others.map((o: any, i: number) => (
                <div key={i}>
                  <p className="text-indigo-500 uppercase italic">{o.area}</p>
                  <p className="text-slate-400 italic font-bold">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <a href="/pdf/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black uppercase text-sm hover:bg-indigo-500 hover:text-white transition-all italic shadow-lg cursor-pointer">
              <FileText size={20}/>{tr("erfaring.cv")}<ChevronRight size={20}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
