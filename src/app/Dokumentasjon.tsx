"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocaleLink from "./components/LocaleLink";
import { FileText, Linkedin, ChevronRight, ArrowDown } from "lucide-react";
import { getDokumentasjonData, linkedinUrl, cvPdfUrl, soknadPdfUrl } from "./data/dokumentasjon";
import { getRekruttererVerdiData } from "./data/rekrutterer-verdi";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import { cardSubtitleClass, pageEyebrowClass, pageTitleClass, sectionTitleClass } from "./lib/typography";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const ctaBtnClass =
  "inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-indigo-500/40 bg-indigo-500/10 text-indigo-200 text-sm font-bold hover:bg-indigo-500/20 hover:border-indigo-400/60 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const pdfFrameClass = "w-full h-[75vh] min-h-[560px] border-0";

function PdfViewerBlock({
  title,
  hint,
  viewerTitle,
  openNewTabLabel,
  placeholder,
  pdfSrc,
  visible,
}: {
  title: string;
  hint: string;
  viewerTitle: string;
  openNewTabLabel: string;
  placeholder: string;
  pdfSrc: string;
  visible: boolean;
}) {
  return (
    <div className="space-y-2 min-w-0">
      <h3 className={cardSubtitleClass}>{title}</h3>
      <p className="text-xs text-slate-500 italic">{hint}</p>
      <div className="rounded-2xl border border-slate-800 overflow-hidden bg-white shadow-xl">
        {visible ? (
          <iframe
            src={`${pdfSrc}#view=FitH&toolbar=1`}
            title={viewerTitle}
            className={pdfFrameClass}
          />
        ) : (
          <div
            className={`${pdfFrameClass} flex items-center justify-center bg-slate-100 text-slate-500 text-sm italic px-6 text-center`}
          >
            {placeholder}
          </div>
        )}
      </div>
      <p className="text-xs text-slate-500">
        <a href={pdfSrc} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {openNewTabLabel}
        </a>
      </p>
    </div>
  );
}

export default function Dokumentasjon() {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const d = getDokumentasjonData(lang);
  const rv = getRekruttererVerdiData(lang);
  const r = rv.cvRekrutterere;
  const verdi = rv.verdiSituasjoner;
  const docsRef = useRef<HTMLElement>(null);
  const [docsVisible, setDocsVisible] = useState(false);

  useEffect(() => {
    const section = docsRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setDocsVisible(true);
      },
      { rootMargin: "120px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const subLabelClass = "text-[10px] font-black uppercase tracking-widest text-indigo-400";

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
            <h1 className={pageTitleClass}>
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
            <p className={pageEyebrowClass}>
              {d.heroSub}
            </p>
          </header>

          <p className="text-lg text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed">
            {d.intro}
          </p>

          <a
            href="#cv-dokumenter"
            onClick={() => setDocsVisible(true)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-indigo-500/40 bg-indigo-500/10 text-indigo-200 font-black text-sm uppercase tracking-widest hover:bg-indigo-500/20 hover:border-indigo-400/60 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 w-full sm:w-auto justify-center"
          >
            <FileText size={18} aria-hidden="true" />
            {tr("dok.jumpToPdf")}
            <ArrowDown size={16} className="opacity-70" aria-hidden="true" />
          </a>

          <section
            aria-labelledby="cv-rekrutterere-heading"
            className="p-6 md:p-8 bg-slate-900/40 rounded-2xl border border-indigo-500/20 shadow-xl space-y-5"
          >
            <h2 id="cv-rekrutterere-heading" className={sectionTitleClass}>
              {r.title}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">{r.intro}</p>
            <div className="space-y-2">
              <p className={subLabelClass}>{r.kortVurderingLabel}</p>
              <p className="text-slate-300 text-sm leading-relaxed italic">{r.kortVurdering}</p>
              <div className="space-y-1 pt-1">
                {r.discoverySignals.map((line) => (
                  <p key={line.slice(0, 48)} className="text-slate-400 text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className={subLabelClass}>{r.rollerLabel}</p>
              <ul className="flex flex-wrap gap-2">
                {rv.roller.map((rolle) => (
                  <li
                    key={rolle}
                    className="px-3 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-sm text-indigo-200"
                  >
                    {rolle}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className={subLabelClass}>{r.matchLabel}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{r.matchText}</p>
            </div>
            <div className="space-y-2">
              <p className={subLabelClass}>{r.nesteStegLabel}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{r.nesteStegText}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <LocaleLink href="/resultater" className={ctaBtnClass} aria-label="Gå til resultater">
                {r.ctaResultater}
              </LocaleLink>
              <Link href="/referanser" className={ctaBtnClass} aria-label="Gå til referanser">
                {r.ctaReferanser}
              </Link>
              <LocaleLink href="/kontakt" className={ctaBtnClass} aria-label="Gå til kontakt">
                {r.ctaKontakt}
              </LocaleLink>
            </div>
          </section>

          <section aria-labelledby="cv-verdi-heading" className="space-y-3">
            <h2 id="cv-verdi-heading" className={sectionTitleClass}>
              {verdi.title}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">{verdi.ingress}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {verdi.kort.map((kort) => (
                <div
                  key={kort.title}
                  className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/30 space-y-2"
                >
                  <h3 className={cardSubtitleClass}>{kort.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{kort.text}</p>
                </div>
              ))}
            </div>
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
              <LocaleLink href="/resultater" className={linkClass} aria-label="Gå til resultater">
                {d.resultaterLink}
              </LocaleLink>
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
                <p key={avsnitt.slice(0, 40)} dangerouslySetInnerHTML={{ __html: avsnitt }} />
              ))}
            </div>
            <p>
              <Link href="/prosjekter" className={linkClass} aria-label="Gå til AI-prosjekter">
                {d.aiLink}
              </Link>
            </p>
          </section>

          <section
            ref={docsRef}
            id="cv-dokumenter"
            aria-labelledby="cv-pdf-heading"
            className="space-y-8 scroll-mt-24"
          >
            <p className="text-xs text-slate-500 leading-relaxed">
              <span className="text-slate-400 font-medium">{d.mobilityLabel}:</span> {d.mobilityPractical}
            </p>

            <div className="space-y-2">
              <h2 id="cv-pdf-heading" className={sectionTitleClass}>
                {d.pdfTitle}
              </h2>
              <p className="text-sm text-slate-400 italic">{d.pdfIntro}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <PdfViewerBlock
                title={tr("dok.cv")}
                hint={tr("dok.cv.viewerHint")}
                viewerTitle={tr("dok.cv.viewerTitle")}
                openNewTabLabel={tr("dok.cv.openNewTab")}
                placeholder={tr("dok.pdf.placeholder")}
                pdfSrc={cvPdfUrl}
                visible={docsVisible}
              />

              <PdfViewerBlock
                title={tr("dok.soknad")}
                hint={tr("dok.soknad.viewerHint")}
                viewerTitle={tr("dok.soknad.viewerTitle")}
                openNewTabLabel={tr("dok.soknad.openNewTab")}
                placeholder={tr("dok.pdf.placeholder")}
                pdfSrc={soknadPdfUrl}
                visible={docsVisible}
              />
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
              <LocaleLink href="/erfaring" className={linkClass} aria-label="Gå til erfaring">
                {d.ctaErfaring}
              </LocaleLink>
              <LocaleLink href="/resultater" className={linkClass} aria-label="Gå til resultater">
                {d.ctaResultater}
              </LocaleLink>
              <LocaleLink href="/kontakt" className={linkClass} aria-label="Gå til kontaktsiden">
                {d.ctaKontakt}
              </LocaleLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
