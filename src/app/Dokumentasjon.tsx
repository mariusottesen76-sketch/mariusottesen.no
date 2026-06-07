"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Download, Linkedin, ChevronRight } from "lucide-react";
import { getDokumentasjonData, linkedinUrl } from "./data/dokumentasjon";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const sectionTitleClass = "text-xl md:text-2xl font-black text-white italic tracking-tight";

export default function Dokumentasjon() {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const d = getDokumentasjonData(lang);

  return (
    <div className="py-4 text-left w-full overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-60 shrink-0">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
            <Image
              src="/images/cv-header.png"
              alt="CV og åpen søknad — Marius Ottesen"
              width={240}
              height={320}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-6">
          <header className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter italic break-words max-w-full [overflow-wrap:anywhere]">
              {lang === "no" ? (
                <>
                  CV &amp; <span className="text-indigo-500">åpen søknad</span>
                </>
              ) : (
                <>
                  CV &amp; <span className="text-indigo-500">open application</span>
                </>
              )}
            </h1>
            <p className="text-lg text-indigo-400 font-black uppercase tracking-widest italic">
              {d.heroSub}
            </p>
          </header>

          <p className="text-lg text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed">
            {d.intro}
          </p>

          <section aria-labelledby="cv-kortversjon-heading" className="space-y-3">
            <h2 id="cv-kortversjon-heading" className={sectionTitleClass}>
              {d.kortversjonTitle}
            </h2>
            <div className="space-y-3 text-slate-300 text-base leading-relaxed">
              {d.kortversjon.map((avsnitt) => (
                <p key={avsnitt.slice(0, 40)}>{avsnitt}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="cv-roller-heading" className="space-y-3">
            <h2 id="cv-roller-heading" className={sectionTitleClass}>
              {d.rollerTitle}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {d.roller.map((rolle) => (
                <li
                  key={rolle}
                  className="px-3 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-sm text-indigo-200"
                >
                  {rolle}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="cv-resultater-heading" className="space-y-3">
            <h2 id="cv-resultater-heading" className={sectionTitleClass}>
              {d.resultaterTitle}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {d.resultater.map((punkt) => (
                <li
                  key={punkt}
                  className="p-4 bg-slate-900/40 rounded-xl border border-slate-800 text-sm text-slate-300 leading-snug"
                >
                  {punkt}
                </li>
              ))}
            </ul>
            <p>
              <Link href="/resultater" className={linkClass} aria-label="Gå til resultater">
                {d.resultaterLink}
              </Link>
            </p>
          </section>

          <section aria-labelledby="cv-kompetanse-heading" className="space-y-3">
            <h2 id="cv-kompetanse-heading" className={sectionTitleClass}>
              {d.kompetanseTitle}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {d.kompetanse.map((punkt) => (
                <li
                  key={punkt}
                  className="flex items-start gap-2 text-sm text-slate-300 leading-snug"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" aria-hidden="true" />
                  {punkt}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="cv-ai-heading" className="space-y-3">
            <h2 id="cv-ai-heading" className={sectionTitleClass}>
              {d.aiTitle}
            </h2>
            <div className="space-y-3 text-slate-300 text-base leading-relaxed">
              {d.aiText.map((avsnitt) => (
                <p key={avsnitt.slice(0, 40)}>{avsnitt}</p>
              ))}
            </div>
            <p>
              <Link href="/prosjekter" className={linkClass} aria-label="Gå til AI-prosjekter">
                {d.aiLink}
              </Link>
            </p>
          </section>

          <section aria-labelledby="cv-pdf-heading" className="space-y-4">
            <h2 id="cv-pdf-heading" className={sectionTitleClass}>
              {d.pdfTitle}
            </h2>
            <p className="text-sm text-slate-400 italic">{d.pdfIntro}</p>
            <div className="grid md:grid-cols-2 gap-5">
              <a
                href="/pdf/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-slate-900/40 border border-slate-800 rounded-2xl shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-4 text-center"
              >
                <FileText size={40} className="text-indigo-500" aria-hidden="true" />
                <h3 className="text-white font-black text-xl italic">{tr("dok.cv")}</h3>
                <p className="text-slate-400 text-sm italic font-medium">{tr("dok.cv.desc")}</p>
                <span className="flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-widest mt-2 group-hover:text-white transition-colors">
                  <Download size={16} aria-hidden="true" /> {tr("dok.cv.btn")}
                </span>
              </a>

              <a
                href="/pdf/soknad.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-slate-900/40 border border-slate-800 rounded-2xl shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-4 text-center"
              >
                <FileText size={40} className="text-indigo-500" aria-hidden="true" />
                <h3 className="text-white font-black text-xl italic">{tr("dok.soknad")}</h3>
                <p className="text-slate-400 text-sm italic font-medium">{tr("dok.soknad.desc")}</p>
                <span className="flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-widest mt-2 group-hover:text-white transition-colors">
                  <Download size={16} aria-hidden="true" /> {tr("dok.cv.btn")}
                </span>
              </a>
            </div>
          </section>

          <div className="space-y-4">
            <p className="text-slate-400 italic font-medium text-sm">{d.linkedinTekst}</p>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-slate-900/60 transition-all group"
            >
              <div className="flex items-center gap-4">
                <Linkedin className="text-indigo-500" size={24} aria-hidden="true" />
                <span className="text-white font-bold uppercase tracking-widest text-sm">
                  {tr("dok.linkedin")}
                </span>
              </div>
              <ChevronRight
                className="text-slate-600 group-hover:text-indigo-500 transition-colors"
                aria-hidden="true"
              />
            </a>
          </div>

          <section
            aria-labelledby="cv-cta-heading"
            className="p-8 bg-slate-900/40 rounded-2xl border border-indigo-500/20 shadow-xl space-y-4"
          >
            <h2 id="cv-cta-heading" className={sectionTitleClass}>
              {d.ctaTitle}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">{d.ctaText}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <Link href="/erfaring" className={linkClass} aria-label="Gå til erfaring">
                {d.ctaErfaring}
              </Link>
              <Link href="/resultater" className={linkClass} aria-label="Gå til resultater">
                {d.ctaResultater}
              </Link>
              <Link href="/kontakt" className={linkClass} aria-label="Gå til kontaktsiden">
                {d.ctaKontakt}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
