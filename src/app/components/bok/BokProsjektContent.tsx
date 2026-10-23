"use client";

import BokOmslagImage from "./BokOmslagImage";
import VerdisKiftetTitle from "./VerdisKiftetTitle";
import { BookRichText } from "./book-rich-text";
import LocaleLink from "../LocaleLink";
import { BOK_PROSJEKT_COPY } from "../../data/bok-prosjekt-innhold";
import { useLanguage } from "../../LanguageContext";
import { bookFlowTextClass, pageIntroClass, pageTitleClass } from "../../lib/typography";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

/** ~70–85 tegn per linje ved md:text-lg — kun på bokdetaljsiden. */
const bookReadColumnClass = "w-full min-w-0 max-w-[42rem]";
const bodyClass = `text-base md:text-lg text-slate-300/95 leading-[1.65] font-light ${bookFlowTextClass}`;
const bookH1Class = `${pageTitleClass} mb-3 ${bookFlowTextClass} break-normal [overflow-wrap:normal]`;
const bookSectionTitleClass =
  "text-lg md:text-xl font-bold text-white tracking-tight leading-snug mb-5 pt-0.5 border-b border-slate-800/60 pb-3";
/** 24px mellom påfølgende brødtekstavsnitt — eksplisitt margin (ikke space-y + m-0). */
const bookParagraphClass = `${bodyClass} mb-6 last:mb-0`;

function BokProsjektInner() {
  const { lang } = useLanguage();
  const copy = BOK_PROSJEKT_COPY[lang];

  return (
    <article className="py-4 text-left w-full overflow-x-hidden">
      <p className={`mb-6 ${bookReadColumnClass}`}>
        <LocaleLink href="/faginnlegg" className={`${linkClass} text-sm font-medium`}>
          ← {copy.backToArticles}
        </LocaleLink>
      </p>

      <header className="border-b border-slate-800/40 pb-12 mb-14">
        <div className={bookReadColumnClass}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-4">
            {copy.eyebrow}
          </p>
          <h1 className={bookH1Class}>
            <VerdisKiftetTitle />
          </h1>
          <p className={`${pageIntroClass} mb-2.5 ${bookFlowTextClass} text-lg md:text-xl lg:text-2xl text-slate-200`}>
            {copy.subtitle}
          </p>
          <p className={`text-base md:text-lg text-slate-400 leading-relaxed font-light mb-4 ${bookFlowTextClass}`}>
            {copy.tagline}
          </p>
          <p className="text-xs text-slate-500 font-medium tracking-wide mb-0">{copy.coverNote}</p>
        </div>
        <aside
          className="mt-10 flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-10 justify-center sm:justify-start items-center sm:items-end"
          aria-label={lang === "no" ? "Foreløpige omslag" : "Provisional covers"}
        >
          <BokOmslagImage variant="forside" lang={lang} size="hero" className="mx-auto sm:mx-0" />
          <BokOmslagImage variant="bakside" lang={lang} size="hero" className="mx-auto sm:mx-0" />
        </aside>
      </header>

      <div className={`space-y-12 md:space-y-14 ${bookReadColumnClass}`}>
        <section aria-labelledby="bok-om" className="min-w-0">
          <h2 id="bok-om" className={bookSectionTitleClass}>
            {copy.aboutTitle}
          </h2>
          {copy.aboutParagraphs.map((p, i) => (
            <p key={i} className={bookParagraphClass}>
              <BookRichText text={p} />
            </p>
          ))}
        </section>

        <section aria-labelledby="bok-reise" className="min-w-0">
          <h2 id="bok-reise" className={bookSectionTitleClass}>
            {copy.journeyTitle}
          </h2>
          <div className="mb-8">
            {copy.journeyIntro.split("\n\n").map((block, index, blocks) => (
              <p
                key={block.slice(0, 24)}
                className={`${bodyClass} ${index < blocks.length - 1 ? "mb-6" : ""}`}
              >
                <BookRichText text={block} />
              </p>
            ))}
          </div>
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
        </section>

        <section aria-labelledby="bok-ki" className="min-w-0">
          <h2 id="bok-ki" className={bookSectionTitleClass}>
            {copy.aiTitle}
          </h2>
          {copy.aiParagraphs.map((p, i) => (
            <p key={i} className={bookParagraphClass}>
              <BookRichText text={p} />
            </p>
          ))}
        </section>

        <section aria-labelledby="bok-malgruppe" className="min-w-0">
          <h2 id="bok-malgruppe" className={bookSectionTitleClass}>
            {copy.audienceTitle}
          </h2>
          <div>
            {copy.audienceParagraph.split("\n\n").map((block, index, blocks) => (
              <p
                key={block.slice(0, 24)}
                className={`${bodyClass} ${index < blocks.length - 1 ? "mb-6" : ""}`}
              >
                <BookRichText text={block} />
              </p>
            ))}
          </div>
        </section>

        <section aria-labelledby="bok-evidens" className="min-w-0">
          <h2 id="bok-evidens" className={bookSectionTitleClass}>
            {copy.evidenceTitle}
          </h2>
          {copy.evidenceParagraphs.map((p, i) => (
            <p key={i} className={bookParagraphClass}>
              <BookRichText text={p} />
            </p>
          ))}
        </section>

        <section aria-labelledby="bok-forfatter" className="min-w-0">
          <h2 id="bok-forfatter" className={bookSectionTitleClass}>
            {copy.authorTitle}
          </h2>
          {copy.authorParagraphs.map((p, i) => (
            <p key={i} className={bookParagraphClass}>
              <BookRichText text={p} />
            </p>
          ))}
        </section>

        <section aria-labelledby="bok-status" className="min-w-0 pt-4 border-t border-slate-800/40">
          <h2 id="bok-status" className={bookSectionTitleClass}>
            {copy.statusTitle}
          </h2>
          {copy.statusParagraphs.map((p, i) => (
            <p key={i} className={bookParagraphClass}>
              <BookRichText text={p} />
            </p>
          ))}
          <p className="m-0 pt-1">
            <LocaleLink
              href="/faginnlegg"
              className="inline-flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-widest hover:text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              {copy.exploreArticlesLink} →
            </LocaleLink>
          </p>
        </section>
      </div>
    </article>
  );
}

export default function BokProsjektContent() {
  return <BokProsjektInner />;
}
