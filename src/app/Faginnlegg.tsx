"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './data/translations';
import {
  blockTitleClass,
  pageIntroClass,
  pageTitleClass,
  sectionTitleClass,
} from './lib/typography';
import { applyProductNameItalicsPlain, formatInnleggTittelHtml } from './lib/product-brand';
import { getFaginnleggLeseStier } from './data/faginnlegg-lesestier';
import {
  FAGINNLEGG_SORT_OPTIONS,
  FaginnleggSortMode,
  grupperAiInnlegg,
  grupperLedelseInnlegg,
  sorterFaginnlegg,
  sporOverskriftMedTelling,
  subtemaOverskriftMedTelling,
} from './data/faginnlegg-grupper';
import {
  erAiInnlegg,
  erLedelseInnlegg,
  FAGINNLEGG_AI_ANKER,
  FAGINNLEGG_LEDELSE_ANKER,
  getAlleFaginnlegg,
  getFaginnleggTelling,
  type FaginnleggInnlegg,
} from './lib/faginnlegg-data';
import { bildeCacheVersion, faginnleggDetailPath } from './lib/faginnlegg-types';
import { getFaginnleggLinkedInCta } from './lib/faginnlegg-linkedin-cta';

const bildeFitClass = (innlegg: FaginnleggInnlegg) =>
  innlegg.bildeFit === "contain" ? "object-contain object-center" : "object-cover object-center";

const kortBildeSrc = (innlegg: FaginnleggInnlegg) => {
  const src = innlegg.bildeUrlKort ?? innlegg.karusellBilder?.[0]?.src ?? innlegg.bildeUrl;
  return src?.trim() ? src : null;
};

const kortBildeStil = (innlegg: FaginnleggInnlegg): React.CSSProperties => ({
  objectPosition: innlegg.bildeKortFokus ?? "center",
  ...(innlegg.bildeKortZoom ? { transform: `scale(${innlegg.bildeKortZoom})` } : {}),
});

/** Felles kortdimensjoner – én regel for alle innlegg */
const KORT_BILDE_BREDDE = 122;
const KORT_BILDE_HOYDE = 186;
const KORT_TITTEL_HOYDE = "2.875rem"; // 2 linjer text-lg leading-tight

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const subtemaOverskriftKlasse =
  "scroll-mt-28 text-sm md:text-base font-bold text-indigo-300 tracking-wide border-l-[3px] border-indigo-500 pl-3 py-1.5 bg-indigo-500/10 rounded-r-lg";

const sporKolonneOverskriftKlasse =
  "font-black text-white italic tracking-tight leading-tight hyphens-none [overflow-wrap:normal]";

/** Kolonneoverskrift over innleggskort — mindre enn innholdsfortegnelsen over. */
const fagKortKolonneOverskriftKlasse =
  "font-black text-white italic tracking-tight leading-tight hyphens-none [overflow-wrap:normal] text-base md:text-lg border-b border-indigo-500/30 pb-1.5 mb-4";

function FaginnleggTocLink({ innlegg, lang }: { innlegg: FaginnleggInnlegg; lang: "no" | "en" }) {
  return (
    <Link href={faginnleggDetailPath(innlegg.id)} className="block hover:text-indigo-300">
      <span className="block">{innlegg.tittel[lang]}</span>
      {innlegg.undertittel?.[lang] && (
        <span className="block mt-0.5 text-xs text-slate-500 font-light italic leading-snug">
          {innlegg.undertittel[lang]}
        </span>
      )}
    </Link>
  );
}

const Faginnlegg = ({ onNavigate: _onNavigate }: { onNavigate?: (tab: string) => void } = {}) => {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const [tocSort, setTocSort] = useState<FaginnleggSortMode>("nyeste");

  const alleInnlegg: FaginnleggInnlegg[] = getAlleFaginnlegg();
  const lesestier = getFaginnleggLeseStier(lang);
  const telling = getFaginnleggTelling();
  const ledelseInnlegg = sorterFaginnlegg(
    alleInnlegg.filter((i) => erLedelseInnlegg(i.kategori)),
    tocSort,
    lang
  );
  const aiInnlegg = sorterFaginnlegg(
    alleInnlegg.filter((i) => erAiInnlegg(i.kategori)),
    tocSort,
    lang
  );
  const ledelseGrupper = grupperLedelseInnlegg(alleInnlegg, tocSort, lang);
  const aiGrupper = grupperAiInnlegg(alleInnlegg, tocSort, lang);

  const lesestiChipKlasse =
    "inline-flex items-center rounded-full border border-slate-700/80 bg-slate-950/60 px-3 py-1.5 text-xs md:text-sm font-medium text-slate-300 leading-none";
  const lesestiChipLinkKlasse =
    "inline-flex items-center rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1.5 text-xs md:text-sm font-medium text-indigo-300 leading-none hover:border-indigo-400/50 hover:text-indigo-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

  useEffect(() => {
    const scrollTilAnker = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };
    scrollTilAnker();
    window.addEventListener("hashchange", scrollTilAnker);
    return () => window.removeEventListener("hashchange", scrollTilAnker);
  }, []);

  return (
    <div className="py-4 text-left w-full overflow-x-hidden">
      {/* HERO SEKSJON */}
      <div className="flex flex-col md:flex-row gap-6 items-start border-b border-slate-800/40 pb-6">
        <div className="w-full md:w-[400px] shrink-0">
          <Image src="/images/blogg.jpg" alt="Innsikt og tankeledelse — Marius Ottesen" width={400} height={500} className="w-full h-auto rounded-2xl shadow-xl border border-slate-800" />
        </div>
        <div className="flex-1 min-w-0 pt-2">
          <h1 className={`${pageTitleClass} mb-6`}>
            {tr("fag.title.1")} <br />
            <span className="text-indigo-500">{tr("fag.title.2")}</span>
          </h1>
          <div className="w-full min-w-0 max-w-none">
            <p className={`${pageIntroClass} mb-4`}>{tr("fag.intro.1")}</p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
              <a href="#fag-innlegg-oversikt" className={linkClass}>
                {tr("fag.intro.scroll")}
              </a>
              {lang === "no" ? " ↓" : " ↓"}
            </p>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="fag-formidling-heading"
        className="mt-8 mb-10 pt-6 border-t border-slate-800/40 min-w-0"
      >
        <h2 id="fag-formidling-heading" className={`${sectionTitleClass} mb-4`}>
          {tr("fag.formidling.title")}
        </h2>
        <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light break-words whitespace-pre-line mb-4">
          {tr("fag.formidling.body")}
        </p>
        <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light break-words mb-6">
          {tr("fag.formidling.kilde.lead")}{" "}
          <Link href="/prosjekter#ai-value-lab-oslo-2026" className={linkClass}>
            {tr("fag.formidling.kilde.valueLab")}
          </Link>{" "}
          {tr("fag.formidling.kilde.mid1")}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/prosjekter" className={`${linkClass} text-sm font-medium`}>
            {tr("fag.formidling.link.prosjekter")}
          </Link>
          <Link href="/erfaring" className={`${linkClass} text-sm font-medium`}>
            {tr("fag.formidling.link.erfaring")}
          </Link>
          <Link href="/resultater" className={`${linkClass} text-sm font-medium`}>
            {tr("fag.formidling.link.resultater")}
          </Link>
        </div>
      </section>

      <section aria-labelledby="fag-lesestier-heading" className="mb-10 pt-6 border-t border-slate-800/40">
        <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light mb-5 w-full min-w-0 max-w-none">
          {tr("fag.intro.2")}
        </p>
        <h2 id="fag-lesestier-heading" className={`${sectionTitleClass} mb-2`}>
          {tr("fag.lesestier.title")}
        </h2>
        <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-5 w-full min-w-0 max-w-none">{tr("fag.lesestier.intro")}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {lesestier.map((sti) => (
            <article
              key={sti.title.no}
              className="p-5 bg-slate-900/40 rounded-xl border border-indigo-500/15 shadow-lg space-y-3 min-w-0 flex flex-col"
            >
              <h3 className={blockTitleClass}>{sti.title[lang]}</h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed flex-1">{sti.intro[lang]}</p>
              <ul className="flex flex-wrap gap-2 pt-1 list-none p-0 m-0" role="list">
                {sti.topics.map((topic) => (
                  <li key={topic.label.no} role="listitem">
                    {topic.subtemaId ? (
                      <a href={`#${topic.subtemaId}`} className={lesestiChipLinkKlasse}>
                        {topic.label[lang]}
                      </a>
                    ) : (
                      <span className={lesestiChipKlasse}>{topic.label[lang]}</span>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="fag-toc-heading" className="mt-2 mb-6 pt-8 border-t border-slate-800/40">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
          <h2 id="fag-toc-heading" className={sectionTitleClass}>
            {tr("fag.toc.title")}
          </h2>
          <label className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{tr("fag.toc.sort.label")}</span>
            <select
              value={tocSort}
              onChange={(e) => setTocSort(e.target.value as FaginnleggSortMode)}
              className="rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              {FAGINNLEGG_SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label[lang]}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div id={FAGINNLEGG_LEDELSE_ANKER} className="scroll-mt-24 space-y-6">
            <h3 className={`${sporKolonneOverskriftKlasse} text-xl xl:text-2xl border-b border-indigo-500/30 pb-1.5`}>
              {sporOverskriftMedTelling(tr("fag.kat.ledelse"), telling.ledelse, lang)}
            </h3>
            {ledelseGrupper.map(({ subtema, innlegg }) => (
              <div key={subtema.id} id={subtema.id} className="space-y-2 pt-1">
                <h4 className={subtemaOverskriftKlasse}>
                  {subtemaOverskriftMedTelling(subtema, innlegg.length, lang)}
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      {innlegg.map((innlegg) => (
                        <tr
                          key={innlegg.id}
                          className="border-b border-slate-800/40 hover:bg-slate-900/40 transition-colors"
                        >
                          <td className="py-1.5 px-2 text-sm font-sans font-normal text-slate-300 hover:text-indigo-300">
                            <FaginnleggTocLink innlegg={innlegg} lang={lang} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div id={FAGINNLEGG_AI_ANKER} className="scroll-mt-24 space-y-6">
            <h3 className={`${sporKolonneOverskriftKlasse} text-xl xl:text-2xl border-b border-indigo-500/30 pb-1.5`}>
              {sporOverskriftMedTelling(tr("fag.kat.ai"), telling.ai, lang)}
            </h3>
            {aiGrupper.map(({ subtema, innlegg }) => (
              <div key={subtema.id} id={subtema.id} className="space-y-2 pt-1">
                <h4 className={subtemaOverskriftKlasse}>
                  {subtemaOverskriftMedTelling(subtema, innlegg.length, lang)}
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      {innlegg.map((innlegg) => (
                        <tr
                          key={innlegg.id}
                          className="border-b border-slate-800/40 hover:bg-slate-900/40 transition-colors"
                        >
                          <td className="py-1.5 px-2 text-sm text-slate-300 hover:text-indigo-300">
                            <FaginnleggTocLink innlegg={innlegg} lang={lang} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KOLONNER MED INNLEGG - like høyde på header slik at første kort aligner */}
      <section id="fag-innlegg-oversikt" aria-labelledby="fag-kort-heading" className="scroll-mt-24 mt-10 pt-8 border-t border-slate-800/60">
        <h2 id="fag-kort-heading" className={`${sectionTitleClass} mb-2`}>
          {tr("fag.kort.seksjon.title")}
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {tr("fag.kort.seksjon.intro.lead")}
          <span className="whitespace-nowrap">{tr("fag.kort.seksjon.intro.linkedin")}</span>
        </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <section aria-labelledby="fag-kort-ledelse-heading" className="flex flex-col w-full min-w-0">
          <h3 id="fag-kort-ledelse-heading" className={fagKortKolonneOverskriftKlasse}>
            {tr("fag.kat.ledelse")}
          </h3>
          <div className="flex flex-col gap-4">
            {ledelseInnlegg.length > 0 ? (
              ledelseInnlegg.map((innlegg) => (
                <InnleggsKort
                  key={innlegg.id}
                  innlegg={innlegg}
                  lang={lang}
                  lesLabel={tr("fag.les")}
                />
              ))
            ) : (
              <div className="p-12 rounded-2xl border border-slate-800 bg-slate-900/40 italic text-slate-500 text-center font-light">{tr("fag.nye")}</div>
            )}
          </div>
        </section>

        <section aria-labelledby="fag-kort-ai-heading" className="flex flex-col w-full min-w-0">
          <h3 id="fag-kort-ai-heading" className={fagKortKolonneOverskriftKlasse}>
            {tr("fag.kat.ai")}
          </h3>
          <div className="flex flex-col gap-4">
            {aiInnlegg.length > 0 ? (
              aiInnlegg.map((innlegg) => (
                <InnleggsKort
                  key={innlegg.id}
                  innlegg={innlegg}
                  lang={lang}
                  lesLabel={tr("fag.les")}
                />
              ))
            ) : (
              <div className="p-12 rounded-2xl border border-slate-800 bg-slate-900/40 italic text-slate-500 text-center font-light">{tr("fag.nye")}</div>
            )}
          </div>
        </section>
      </div>
      </section>
    </div>
  );
};

/* ——— KORT ——— */
const InnleggsKort = ({
  innlegg,
  lang,
  lesLabel,
}: {
  innlegg: FaginnleggInnlegg;
  lang: "no" | "en";
  lesLabel: string;
}) => {
  const cacheVersion = bildeCacheVersion(innlegg);
  const kortSrc = kortBildeSrc(innlegg);
  const isVideo = Boolean(
    kortSrc &&
      (kortSrc.toLowerCase().endsWith(".mp4") ||
        kortSrc.toLowerCase().endsWith(".webm") ||
        kortSrc.toLowerCase().endsWith(".mov"))
  );
  return (
    <article className="group bg-slate-900/40 rounded-2xl border border-indigo-500/20 px-4 pt-3 pb-2.5 hover:bg-slate-900/60 transition-all duration-300 shadow-xl flex flex-row items-start gap-4 w-full text-left">
      <div
        className="relative shrink-0 rounded-lg overflow-hidden bg-slate-900 border border-slate-800"
        style={{ width: KORT_BILDE_BREDDE, height: KORT_BILDE_HOYDE }}
      >
        {innlegg.bildeKortRamme === "nettsted" && (
          <div
            className="absolute inset-x-0 top-0 z-10 flex h-[18px] items-center gap-1 border-b border-slate-700/80 bg-slate-800 px-1"
            aria-hidden="true"
          >
            <span className="flex shrink-0 gap-[3px]">
              <span className="h-[5px] w-[5px] rounded-full bg-slate-600" />
              <span className="h-[5px] w-[5px] rounded-full bg-slate-600" />
              <span className="h-[5px] w-[5px] rounded-full bg-slate-600" />
            </span>
            <span className="min-w-0 flex-1 truncate rounded-sm bg-slate-900/80 px-1 py-px text-center font-mono text-[5px] leading-none text-slate-500">
              mariusottesen.no
            </span>
          </div>
        )}
        <div
          className={
            innlegg.bildeKortRamme === "nettsted"
              ? "absolute inset-x-0 bottom-0 top-[18px] bg-slate-950"
              : "absolute inset-0"
          }
        >
          {kortSrc ? (
            isVideo ? (
            <video
              key={`${kortSrc}-${cacheVersion}`}
              src={`${kortSrc}?v=${cacheVersion}`}
              className={`absolute inset-0 h-full w-full transition-all duration-500 ${bildeFitClass(innlegg)}`}
              style={kortBildeStil(innlegg)}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <Image
              key={`${kortSrc}-${cacheVersion}`}
              src={`${kortSrc}?v=${cacheVersion}`}
              alt={innlegg.tittel[lang]}
              fill
              sizes={`${KORT_BILDE_BREDDE}px`}
              className={`transition-all duration-500 ${bildeFitClass(innlegg)}`}
              style={kortBildeStil(innlegg)}
              unoptimized
            />
          )
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/40"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
      <div className="flex-1 min-w-0 flex flex-col min-h-[186px]">
        <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-widest font-bold block mb-3 leading-none shrink-0">{innlegg.visningsDato}</span>
        <h3
          className="text-lg font-sans font-bold text-white leading-tight line-clamp-2 overflow-hidden shrink-0 mb-2 group-hover:text-indigo-300 transition-colors [&_em]:italic"
          style={{ height: KORT_TITTEL_HOYDE }}
          dangerouslySetInnerHTML={{ __html: formatInnleggTittelHtml(innlegg.tittel[lang]) }}
        />
        <p
          className="text-slate-400 text-sm leading-snug font-light mb-2 [&_em]:italic"
          dangerouslySetInnerHTML={{ __html: applyProductNameItalicsPlain(innlegg.teaser[lang]) }}
        />
        <div className="shrink-0 flex flex-col items-start gap-2 mt-auto pt-2">
          <Link
            href={faginnleggDetailPath(innlegg.id)}
            className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            {lesLabel}
          </Link>
          <a
            href={innlegg.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors leading-snug focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            {getFaginnleggLinkedInCta(innlegg.link, lang)}
          </a>
        </div>
      </div>
    </article>
  );
};

export default Faginnlegg;
