"use client";

import BokOmslagImage from "./BokOmslagImage";
import LocaleLink from "../LocaleLink";
import { BOK_PROSJEKT_COPY } from "../../data/bok-prosjekt-innhold";
import { useLanguage } from "../../LanguageContext";
import { blockTitleClass, pageIntroClass, pageTitleClass, sectionTitleClass } from "../../lib/typography";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

function BokProsjektInner() {
  const { lang } = useLanguage();
  const copy = BOK_PROSJEKT_COPY[lang];

  return (
    <article className="py-4 text-left w-full overflow-x-hidden">
      <p className="mb-4">
        <LocaleLink href="/faginnlegg" className={`${linkClass} text-sm font-medium`}>
          ← {copy.backToArticles}
        </LocaleLink>
      </p>

      <header className="border-b border-slate-800/40 pb-8 mb-8">
        <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-4">
          {copy.eyebrow}
        </p>
        <h1 className={`${pageTitleClass} mb-4`}>
          {copy.h1Line1} <span className="text-indigo-500">{copy.h1Line2}</span>
        </h1>
        <p className={`${pageIntroClass} mb-3 whitespace-nowrap overflow-x-auto [scrollbar-width:thin]`}>
          {copy.subtitle}
        </p>
        <p className="text-sm text-slate-500 font-medium tracking-wide">{copy.status}</p>
      </header>

      <div
        className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start justify-center sm:justify-start gap-8 sm:gap-10 mb-10 pb-10 border-b border-slate-800/40"
        aria-label={lang === "no" ? "Foreløpige omslag" : "Provisional covers"}
      >
        <BokOmslagImage variant="forside" lang={lang} />
        <BokOmslagImage variant="bakside" lang={lang} />
      </div>

      <div className="space-y-10">
        {copy.sections.map((section) => (
          <section key={section.id} aria-labelledby={`bok-${section.id}`} className="min-w-0">
            <h2 id={`bok-${section.id}`} className={`${sectionTitleClass} mb-4`}>
              {section.title}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-slate-400 leading-relaxed font-light mb-4 last:mb-0"
              >
                {p}
              </p>
            ))}
            {section.bullets?.length ? (
              <ul className="list-disc pl-6 space-y-2 text-slate-400 text-base md:text-lg font-light marker:text-indigo-400 mt-3">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <section aria-labelledby="bok-rolle" className="pt-6 border-t border-slate-800/40">
          <h2 id="bok-rolle" className={`${sectionTitleClass} mb-4`}>
            {copy.roleTitle}
          </h2>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">{copy.roleBody}</p>
        </section>

        <section
          aria-labelledby="bok-cta"
          className="p-6 bg-slate-900/40 rounded-2xl border border-indigo-500/15 space-y-3"
        >
          <h2 id="bok-cta" className={blockTitleClass}>
            {copy.exploreTitle}
          </h2>
          <ul className="space-y-2 list-none p-0 m-0">
            {copy.ctas.map((cta) => (
              <li key={cta.href}>
                <LocaleLink href={cta.href} className={`${linkClass} text-sm font-medium`}>
                  {cta.label} →
                </LocaleLink>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}

export default function BokProsjektContent() {
  return <BokProsjektInner />;
}
