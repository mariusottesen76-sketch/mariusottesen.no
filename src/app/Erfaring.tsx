"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Calendar, TrendingUp, Target, Lightbulb, FileText, ChevronRight } from "lucide-react";
import { getErfaringData } from "./data/erfaringInnhold";
import { cvPdfUrl } from "./data/dokumentasjon";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import { blockTitleClass, pageTitleClass, selskapNavnClass } from "./lib/typography";

const selskapLogo: Record<string, string | null> = {
  "Marius Ottesen Consulting": "/images/moc.logo.png",
  "Marius Ottesen Consulting / Handelshøyskolen BI": "/images/moc.logo.png",
  "Marius Ottesen Consulting / BI Norwegian Business School": "/images/moc.logo.png",
  "Franzefoss Gjenvinning": "/images/Franzefoss.png",
  "Norengros Johs. Olsen": "/images/Norengros.png",
  "MedDrop": "/images/meddrop-logo.png",
  "Mundipharma": "/images/Mundipharma.png",
  "Nilfisk": "/images/Nilfisk.png",
};

const erfaringTekstLinkClass =
  "[&_a]:text-indigo-400 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-indigo-500/70 [&_a]:hover:text-indigo-200 [&_a]:transition-colors [&_a]:focus-visible:outline [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-2 [&_a]:focus-visible:outline-indigo-400";

const erfaringResultatLinkClass =
  "[&_a]:text-indigo-300 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-indigo-500/70 [&_a]:hover:text-indigo-200 [&_a]:transition-colors [&_a]:focus-visible:outline [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-2 [&_a]:focus-visible:outline-indigo-400";

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
            <Image src="/images/resultater.jpg" alt="Karriere høydepunkter og profesjonell erfaring" width={240} height={320} className="w-full h-auto" />
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-6">
          <div className="space-y-4 text-left">
            <h1 className={pageTitleClass}>
              {lang === "no" ? (
                <>
                  Erfaring og <span className="text-indigo-500">karrierehøydepunkter</span>
                </>
              ) : (
                <>
                  Experience and <span className="text-indigo-500">career highlights</span>
                </>
              )}
            </h1>
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
                        <img
                          src={selskapLogo[j.company]!}
                          alt={`${j.company} logo`}
                          width={48}
                          height={48}
                          className={`max-w-full w-auto h-auto object-contain ${
                            j.company === "Marius Ottesen Consulting" ||
                            j.company === "Marius Ottesen Consulting / Handelshøyskolen BI" ||
                            j.company === "Marius Ottesen Consulting / BI Norwegian Business School"
                              ? "max-h-[30px]"
                              : "max-h-9"
                          }`}
                        />
                      ) : (
                        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">{j.company.replace(/ .*/, "")}</span>
                      )}
                    </div>
                    <div>
                      <h3 className={`${blockTitleClass} text-xl`}>{j.title}</h3>
                      <p className={`text-indigo-400 ${selskapNavnClass} mt-2 flex items-center gap-2`}><Briefcase size={16} aria-hidden="true" />{j.company}</p>
                    </div>
                  </div>
                  <div className="text-slate-400 text-[10px] bg-slate-950 px-4 py-2 rounded-full border border-slate-800 self-start shrink-0 font-black">
                    <Calendar size={12} className="mr-1 inline" />{j.period}
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-white text-[10px] uppercase tracking-widest flex items-center gap-2 font-black"><Target size={14} className="text-indigo-500"/>{tr("erfaring.mandat")}</p>
                    <p
                      className={`text-slate-300 italic font-medium ${erfaringTekstLinkClass}`}
                      dangerouslySetInnerHTML={{ __html: j.mandate }}
                    />
                  </div>
                  <div>
                    <p className="text-white text-[10px] uppercase tracking-widest flex items-center gap-2 font-black"><Lightbulb size={14} className="text-indigo-500"/>{tr("erfaring.strategi")}</p>
                    <p
                      className={`text-slate-300 italic font-medium ${erfaringTekstLinkClass}`}
                      dangerouslySetInnerHTML={{ __html: j.strategy }}
                    />
                  </div>
                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-indigo-500 text-[10px] uppercase tracking-widest flex items-center gap-2 font-black"><TrendingUp size={14}/>{tr("erfaring.resultater")}</p>
                    <p
                      className={`text-white font-bold leading-relaxed ${erfaringResultatLinkClass}`}
                      dangerouslySetInnerHTML={{ __html: j.results }}
                    />
                  </div>
                  {j.fagPerspektivLink ? (
                    <p className="pt-3">
                      <Link href={j.fagPerspektivLink.href} className="text-indigo-300 text-sm underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                        {j.fagPerspektivLink.label}
                      </Link>
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {/* Selskapslogoer */}
          <div className="space-y-3">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{tr("profil.logoer.erfaring")}</p>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { src: "/images/moc-avlang.png", alt: "Marius Ottesen Consulting", h: "max-h-[29px]", pad: "p-1" },
                { src: "/images/Franzefoss.png", alt: "Franzefoss", h: "max-h-[26px]" },
                { src: "/images/Norengros.png", alt: "Norengros", h: "max-h-[30px]" },
                { src: "/images/Nilfisk.png", alt: "Nilfisk", h: "max-h-[42px]" },
                { src: "/images/Pelagia.png", alt: "Pelagia", h: "max-h-[32px]" },
                { src: "/images/Falck%20Nutec.png", alt: "Falck Nutec", h: "max-h-[42px]" },
                { src: "/images/Assessit.png", alt: "Assessit", h: "max-h-[32px]" },
                { src: "/images/Mundipharma.png", alt: "Mundipharma", h: "max-h-[26px]" },
                { src: "/images/meddrop-logo.png", alt: "MedDrop", h: "max-h-[32px]" },
              ].map((logo) => (
                <div key={logo.alt} className={`flex-1 min-w-[80px] h-[44px] flex items-center justify-center bg-white rounded-lg shrink-0 ${logo.pad ?? "p-1.5"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt={`${logo.alt} logo`} width={100} height={44} className={`${logo.h} max-w-full w-auto h-auto object-contain`} />
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 space-y-4 text-left font-black">
            <h4 className={blockTitleClass}>{tr("erfaring.andre")}</h4>
            <div className="grid md:grid-cols-3 gap-6 text-[11px] leading-snug">
              {CONTENT.others.map((o: any, i: number) => (
                <div key={i}>
                  <p className="text-indigo-500 italic font-black">{o.area}</p>
                  <p className="text-slate-400 italic font-bold">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <a href={cvPdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black uppercase text-sm hover:bg-indigo-500 hover:text-white transition-all italic shadow-lg cursor-pointer">
              <FileText size={20}/>{tr("erfaring.cv")}<ChevronRight size={20}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
