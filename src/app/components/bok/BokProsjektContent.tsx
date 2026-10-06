"use client";

import BokOmslagImage from "./BokOmslagImage";
import LocaleLink from "../LocaleLink";
import { BOK_PROSJEKT_COPY } from "../../data/bok-prosjekt-innhold";
import { useLanguage } from "../../LanguageContext";
import { blockTitleClass, pageIntroClass, pageTitleClass, sectionTitleClass } from "../../lib/typography";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const bodyClass = "text-base md:text-lg text-slate-400 leading-relaxed font-light";

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

      <header className="border-b border-slate-800/40 pb-10 mb-12 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12 lg:items-start">
        <div className="min-w-0 mb-8 lg:mb-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-4">
            {copy.eyebrow}
          </p>
          <h1 className={`${pageTitleClass} mb-4 max-w-prose [overflow-wrap:anywhere]`}>{copy.h1}</h1>
          <p className={`${pageIntroClass} mb-3 max-w-prose`}>{copy.subtitle}</p>
          <p className="text-xs text-slate-500 font-medium tracking-wide mb-5">{copy.coverNote}</p>
          <p className={`${bodyClass} max-w-prose`}>{copy.heroIntro}</p>
        </div>
        <BokOmslagImage
          variant="forside"
          lang={lang}
          className="shrink-0 mx-auto lg:mx-0 lg:sticky lg:top-28"
        />
      </header>

      <div
        className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start justify-center sm:justify-start gap-8 sm:gap-10 mb-14 pb-14 border-b border-slate-800/40"
        aria-label={lang === "no" ? "Foreløpig bakomslag" : "Provisional back cover"}
      >
        <BokOmslagImage variant="bakside" lang={lang} />
      </div>

      <div className="space-y-14 md:space-y-16 max-w-3xl">
        <section aria-labelledby="bok-om" className="min-w-0">
          <h2 id="bok-om" className={`${sectionTitleClass} mb-5`}>
            {copy.aboutTitle}
          </h2>
          {copy.aboutParagraphs.map((p, i) => (
            <p key={i} className={`${bodyClass} mb-4 last:mb-0 ${p === copy.aboutParagraphs[1] ? "text-slate-300" : ""}`}>
              {p}
            </p>
          ))}
        </section>

        <section aria-labelledby="bok-reise" className="min-w-0">
          <h2 id="bok-reise" className={`${sectionTitleClass} mb-5`}>
            {copy.journeyTitle}
          </h2>
          <p className={`${bodyClass} mb-8 max-w-prose`}>{copy.journeyIntro}</p>
          <div
            className="overflow-x-auto pb-2 -mx-1 px-1 [scrollbar-width:thin]"
            role="img"
            aria-label={
              lang === "no"
                ? "Lesebevegelse: se, velge, mobilisere, skape verdi, endre, forsterke, lære"
                : "Reading movement: see, choose, mobilise, create value, change, reinforce, learn"
            }
          >
            <ol className="flex flex-nowrap items-center gap-2 sm:gap-3 list-none p-0 m-0 min-w-max">
              {copy.journeySteps.map((step, i) => (
                <li key={step} className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-indigo-300/90 px-2.5 py-1.5 rounded-lg border border-indigo-500/25 bg-slate-950/50">
                    {step}
                  </span>
                  {i < copy.journeySteps.length - 1 ? (
                    <span className="text-slate-600 text-sm font-light select-none" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
          <p className={`${bodyClass} text-sm md:text-base mt-6 text-slate-500 max-w-prose`}>{copy.journeyFootnote}</p>
        </section>

        <section aria-labelledby="bok-struktur" className="min-w-0">
          <h2 id="bok-struktur" className={`${sectionTitleClass} mb-5`}>
            {copy.structureTitle}
          </h2>
          {copy.structureParagraphs.map((p, i) => (
            <p key={i} className={`${bodyClass} mb-6 max-w-prose`}>
              {p}
            </p>
          ))}
          <ol className="space-y-3 list-none p-0 m-0 mb-6">
            {copy.structureParts.map((part) => (
              <li
                key={part.num}
                className="flex gap-4 text-base md:text-lg text-slate-400 font-light border-l-2 border-indigo-500/30 pl-4 py-0.5"
              >
                <span className="text-indigo-400/80 font-semibold tabular-nums shrink-0 w-5">{part.num}.</span>
                <span>{part.title}</span>
              </li>
            ))}
          </ol>
          <p className={`${bodyClass} text-sm md:text-base text-slate-500 max-w-prose`}>{copy.structureNote}</p>
        </section>

        <section aria-labelledby="bok-evidens" className="min-w-0">
          <h2 id="bok-evidens" className={`${sectionTitleClass} mb-5`}>
            {copy.evidenceTitle}
          </h2>
          <p className={`${bodyClass} mb-8 max-w-prose`}>{copy.evidenceIntro}</p>
          <ul className="space-y-6 list-none p-0 m-0">
            {copy.evidenceCards.map((card) => (
              <li key={card.title} className="min-w-0">
                <h3 className="text-white font-semibold text-base mb-2 tracking-tight">{card.title}</h3>
                <p className={`${bodyClass} text-base max-w-prose`}>{card.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="bok-malgruppe" className="min-w-0">
          <h2 id="bok-malgruppe" className={`${sectionTitleClass} mb-5`}>
            {copy.audienceTitle}
          </h2>
          <p className={`${bodyClass} mb-6 max-w-prose`}>{copy.audienceParagraph}</p>
          <p className="text-sm text-slate-500 font-medium mb-3">
            {lang === "no" ? "Særlig relevant for personer som arbeider med:" : "Especially relevant for people working with:"}
          </p>
          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
            {copy.audienceBullets.map((item) => (
              <li
                key={item}
                className="text-sm text-slate-300 font-light px-3 py-1.5 rounded-full border border-slate-700/80 bg-slate-950/30"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="bok-status" className="min-w-0 pt-2 border-t border-slate-800/40">
          <h2 id="bok-status" className={`${sectionTitleClass} mb-5`}>
            {copy.statusTitle}
          </h2>
          {copy.statusParagraphs.map((p, i) => (
            <p key={i} className={`${bodyClass} mb-4 last:mb-6 max-w-prose`}>
              {p}
            </p>
          ))}
          <dl className="flex flex-wrap gap-4 list-none p-0 m-0">
            {copy.statusMarkers.map((marker) => (
              <div
                key={marker.label}
                className="rounded-xl border border-slate-800/80 bg-slate-950/40 px-4 py-3 min-w-[8rem]"
              >
                <dt className="text-indigo-300 font-bold text-lg tabular-nums tracking-tight">{marker.value}</dt>
                <dd className="text-slate-400 text-sm font-light mt-0.5 leading-snug">{marker.label}</dd>
              </div>
            ))}
          </dl>
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
