"use client";

import { ChevronDown } from "lucide-react";
import BokOmslagImage from "./BokOmslagImage";
import VerdisKiftetTitle from "./VerdisKiftetTitle";
import { BookRichText } from "./book-rich-text";
import LocaleLink from "../LocaleLink";
import {
  BOK_PROSJEKT_COPY,
  BOK_TESTLESER_MAILTO,
} from "../../data/bok-prosjekt-innhold";
import { useLanguage } from "../../LanguageContext";
import { bookFlowTextClass, pageIntroClass, pageTitleClass } from "../../lib/typography";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const bookReadColumnClass = "w-full min-w-0 max-w-[42rem]";
const bodyClass = `text-base md:text-lg text-slate-300/95 leading-[1.65] font-light ${bookFlowTextClass}`;
const bookH1Class = `${pageTitleClass} mb-3 ${bookFlowTextClass} break-normal [overflow-wrap:normal]`;
const bookSectionTitleClass =
  "text-lg md:text-xl font-bold text-white tracking-tight leading-snug mb-5 pt-0.5 border-b border-slate-800/60 pb-3";
const bookParagraphClass = `${bodyClass} mb-6 last:mb-0`;

const ctaButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-5 py-3 text-sm font-bold uppercase tracking-widest text-indigo-200 hover:bg-indigo-500/20 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const detailsSummaryClass =
  "cursor-pointer list-none flex items-start justify-between gap-3 text-sm font-medium text-slate-200 hover:text-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 rounded py-3 [&::-webkit-details-marker]:hidden";

function BokProsjektInner() {
  const { lang } = useLanguage();
  const copy = BOK_PROSJEKT_COPY[lang];
  const testleserHref = BOK_TESTLESER_MAILTO[lang];

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
            {copy.heroEyebrow}
          </p>
          <h1 className={bookH1Class}>
            <VerdisKiftetTitle />
          </h1>
          <p
            className={`${pageIntroClass} mb-2.5 ${bookFlowTextClass} text-lg md:text-xl lg:text-2xl text-slate-200`}
          >
            {copy.subtitle}
          </p>
          <p className={`text-base md:text-lg text-slate-400 leading-relaxed font-light mb-5 ${bookFlowTextClass}`}>
            {copy.tagline}
          </p>
          <p className={bookParagraphClass}>
            <BookRichText text={copy.heroIngress} />
          </p>
          <p className="text-sm text-slate-400 font-medium tracking-wide mb-6">{copy.statsLine}</p>
          <a href="#bok-testleser" className={`${ctaButtonClass} mb-4`}>
            {copy.heroCtaTestReader}
          </a>
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
          {copy.aboutParagraphs.map((p) => (
            <p key={p.slice(0, 32)} className={bookParagraphClass}>
              <BookRichText text={p} />
            </p>
          ))}
          <blockquote className="my-8 border-l-4 border-indigo-500/70 pl-5 pr-2 py-1 text-base md:text-lg text-slate-200 font-medium leading-relaxed not-italic">
            {copy.thesisQuote}
          </blockquote>
        </section>

        <section aria-labelledby="bok-deler" className="min-w-0">
          <h2 id="bok-deler" className={bookSectionTitleClass}>
            {copy.partsTitle}
          </h2>
          <p className={bookParagraphClass}>
            <BookRichText text={copy.partsIntro} />
          </p>
          <ol className="list-none p-0 m-0 space-y-0 border-l-2 border-indigo-500/30 ml-1">
            {copy.parts.map((part, index) => (
              <li key={part.partLabel} className="relative pl-6 pb-8 last:pb-0">
                <span
                  className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-indigo-500/50 bg-slate-950 text-[9px] font-bold text-indigo-300"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400/90 mb-1">
                  {part.partLabel} – {part.partTitle}
                </p>
                <p className={`${bodyClass} m-0`}>
                  <BookRichText text={part.journeyText} />
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="bok-kapitler" className="min-w-0">
          <h2 id="bok-kapitler" className={bookSectionTitleClass}>
            {copy.chaptersTitle}
          </h2>
          <p className="text-sm text-slate-500 mb-4">{copy.chaptersAccordionHint}</p>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 divide-y divide-slate-800/80">
            {copy.parts.map((part) => (
              <details key={`ch-${part.partLabel}`} className="group px-4 sm:px-5">
                <summary className={detailsSummaryClass}>
                  <span className="text-left min-w-0 pr-2">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-indigo-400/80 mb-0.5">
                      {part.partLabel}
                    </span>
                    <span className="text-slate-200">{part.partTitle}</span>
                  </span>
                  <ChevronDown
                    size={16}
                    className="shrink-0 mt-1 text-indigo-400/80 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <ol className="list-decimal list-inside pb-4 space-y-2 text-sm text-slate-400 font-light leading-relaxed">
                  {part.chapters.map((ch) => (
                    <li key={ch.num} value={ch.num}>
                      <span className="text-slate-300">{ch.title}</span>
                    </li>
                  ))}
                </ol>
              </details>
            ))}
          </div>
        </section>

        <section aria-labelledby="bok-drama" className="min-w-0">
          <h2 id="bok-drama" className={bookSectionTitleClass}>
            {copy.dramaTitle}
          </h2>
          {copy.dramaParagraphs.map((p) => (
            <p key={p.slice(0, 32)} className={bookParagraphClass}>
              <BookRichText text={p} />
            </p>
          ))}
        </section>

        <section aria-labelledby="bok-opprinnelse" className="min-w-0">
          <h2 id="bok-opprinnelse" className={bookSectionTitleClass}>
            {copy.originTitle}
          </h2>
          {copy.originParagraphs.map((p) => (
            <p key={p.slice(0, 32)} className={bookParagraphClass}>
              <BookRichText text={p} />
            </p>
          ))}
        </section>

        <section aria-labelledby="bok-status" className="min-w-0 pt-2 border-t border-slate-800/40">
          <h2 id="bok-status" className={bookSectionTitleClass}>
            {copy.statusTitle}
          </h2>
          {copy.statusParagraphs.map((p) => (
            <p key={p.slice(0, 32)} className={bookParagraphClass}>
              <BookRichText text={p} />
            </p>
          ))}
          <p className={`${bodyClass} text-slate-500 mb-0`}>{copy.statusDateNote}</p>
        </section>

        <section
          id="bok-testleser"
          aria-labelledby="bok-testleser-heading"
          className="min-w-0 scroll-mt-24 rounded-2xl border border-indigo-500/25 bg-indigo-500/5 p-6 md:p-8"
        >
          <h2 id="bok-testleser-heading" className={`${bookSectionTitleClass} border-indigo-500/20`}>
            {copy.testReaderTitle}
          </h2>
          {copy.testReaderParagraphs.map((p) => (
            <p key={p.slice(0, 32)} className={bookParagraphClass}>
              <BookRichText text={p} />
            </p>
          ))}
          <a href={testleserHref} className={ctaButtonClass}>
            {copy.testReaderCta}
          </a>
        </section>

        <section aria-labelledby="bok-videre" className="min-w-0 pt-4 border-t border-slate-800/40 pb-4">
          <h2 id="bok-videre" className={bookSectionTitleClass}>
            {copy.closingTitle}
          </h2>
          <p className={`${bodyClass} mb-6`}>{copy.closingIntro}</p>
          <ul className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2 list-none p-0 m-0 text-sm font-medium">
            <li>
              <LocaleLink href="/faginnlegg" className={linkClass}>
                {copy.linkArticles}
              </LocaleLink>
            </li>
            <li>
              <LocaleLink href="/prosjekter" className={linkClass}>
                {copy.linkProjects}
              </LocaleLink>
            </li>
            <li>
              <LocaleLink href="/" className={linkClass}>
                {copy.linkProfile}
              </LocaleLink>
            </li>
            <li>
              <LocaleLink href="/kontakt" className={linkClass}>
                {copy.linkContact}
              </LocaleLink>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}

export default function BokProsjektContent() {
  return <BokProsjektInner />;
}
