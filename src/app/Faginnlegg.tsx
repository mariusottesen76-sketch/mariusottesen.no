"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './data/translations';
import { normalizeDisplayText } from './lib/normalize-display-text';
import { applyProductNameItalicsPlain, formatInnleggHtml, formatInnleggTittelHtml } from './lib/product-brand';
import { getFaginnleggLeseStier } from './data/faginnlegg-lesestier';
import {
  FAGINNLEGG_SORT_OPTIONS,
  FaginnleggSortMode,
  grupperAiInnlegg,
  grupperLedelseInnlegg,
  sorterFaginnlegg,
  sporOverskriftMedTelling,
  subtemaOverskriftMedTelling,
  tellMedSuffix,
} from './data/faginnlegg-grupper';
import {
  erAiInnlegg,
  erLedelseInnlegg,
  FAGINNLEGG_AI_ANKER,
  FAGINNLEGG_LEDELSE_ANKER,
  getAlleFaginnlegg,
  getFaginnleggTelling,
} from './lib/faginnlegg-data';

interface InnleggType {
  id: string;
  tittel: { no: string; en: string };
  teaser: { no: string; en: string };
  bildeUrl: string;
  dato: string;
  visningsDato: string;
  kategori: string;
  link: string;
  innhold?: { no: string; en: string };
  /** Valgfri bildekarusell (f.eks. tegneserie-paneler). */
  karusellBilder?: { src: string; alt?: { no: string; en: string } }[];
  karusellPdfUrl?: string;
  /** cover = fyll ruten (foto). contain = hele bildet sentrert (grafikk/tekst). */
  bildeFit?: "cover" | "contain";
  /** Valgfritt kortbilde i listen. Modal bruker bildeUrl. */
  bildeUrlKort?: string;
  /** Bredt hovedbilde i modal (f.eks. landscape-banner). */
  bildeModalBred?: boolean;
  /** Tvinger ny bildeversjon ved oppdatering av samme filnavn. */
  bildeVersjon?: string;
  /** object-position for kortminiatyr (f.eks. "center 30%"). Modal uendret. */
  bildeKortFokus?: string;
  /** Zoom inn på kortminiatyr for å kutte innbygget kant/letterboxing (f.eks. 1.12). */
  bildeKortZoom?: number;
}

const bildeCacheVersion = (innlegg: InnleggType) => innlegg.bildeVersjon ?? innlegg.dato;

const bildeFitClass = (innlegg: InnleggType) =>
  innlegg.bildeFit === "contain" ? "object-contain object-center" : "object-cover object-center";

const kortBildeSrc = (innlegg: InnleggType) =>
  innlegg.bildeUrlKort ?? innlegg.karusellBilder?.[0]?.src ?? innlegg.bildeUrl;

const kortBildeStil = (innlegg: InnleggType): React.CSSProperties => ({
  objectPosition: innlegg.bildeKortFokus ?? "center",
  ...(innlegg.bildeKortZoom ? { transform: `scale(${innlegg.bildeKortZoom})` } : {}),
});

/** Felles kortdimensjoner – én regel for alle innlegg */
const KORT_BILDE_BREDDE = 122;
const KORT_BILDE_HOYDE = 186;
const KORT_TITTEL_HOYDE = "2.875rem"; // 2 linjer text-lg leading-tight

/** Modal – minimumsstandard for liggende hovedbilde */
const MODAL_LANDSCAPE_KLASSE =
  "w-full max-w-[min(100%,754px)] mx-auto h-auto min-h-[286px] md:min-h-[325px] max-h-[59vh] md:max-h-[65vh] object-contain rounded-lg";
const MODAL_PORTRAIT_KLASSE =
  "w-auto max-w-[min(100%,480px)] md:max-w-[560px] max-h-[68vh] md:max-h-[72vh] h-auto object-contain rounded-lg mx-auto";
const MODAL_LANDSCAPE_ASPECT = 16 / 9;
const MODAL_PORTRAIT_ASPECT = 5 / 7;

const erLandscapeProporsjon = (w: number, h: number) => w > h * 1.08;

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const subtemaOverskriftKlasse =
  "scroll-mt-28 text-sm md:text-base font-bold text-indigo-300 uppercase tracking-wide border-l-[3px] border-indigo-500 pl-3 py-1.5 bg-indigo-500/10 rounded-r-lg";

/** Kolonneetikett under «Alle innlegg i detalj» – én linje når det er plass, ellers skjermbryt ved « & ». */
function KolonneSporLabel({ label, antall, lang }: { label: string; antall: number; lang: "no" | "en" }) {
  const suffix = tellMedSuffix(antall, lang);
  const deler = label.split(" & ");
  const tekstKlasse =
    "font-bold uppercase text-white tracking-tight leading-tight hyphens-none [overflow-wrap:normal]";

  if (deler.length === 2) {
    const fullLabel = (
      <>
        {deler[0]} & {deler[1]}
        {suffix}
      </>
    );

    return (
      <>
        <div className={`${tekstKlasse} text-base max-[479px]:block hidden`}>
          <span className="block">{deler[0]} &</span>
          <span className="block">
            {deler[1]}
            {suffix}
          </span>
        </div>
        <p className={`${tekstKlasse} hidden min-[480px]:block text-lg lg:text-base xl:text-lg 2xl:text-xl whitespace-nowrap`}>
          {fullLabel}
        </p>
      </>
    );
  }

  return (
    <p className={`${tekstKlasse} text-base lg:text-lg min-[480px]:whitespace-nowrap`}>
      {label}
      {suffix}
    </p>
  );
}

const Faginnlegg = ({ onNavigate }: { onNavigate?: (tab: string) => void }) => {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const [aktivtInnlegg, setAktivtInnlegg] = useState<InnleggType | null>(null);
  const [tocSort, setTocSort] = useState<FaginnleggSortMode>("nyeste");

  const alleInnlegg: InnleggType[] = getAlleFaginnlegg() as InnleggType[];
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
    "inline-flex items-center rounded-full border border-slate-700/80 bg-slate-950/60 px-2.5 py-1 text-[11px] font-medium text-slate-300 leading-none";
  const lesestiChipLinkKlasse =
    "inline-flex items-center rounded-full border border-indigo-500/25 bg-indigo-500/10 px-2.5 py-1 text-[11px] font-medium text-indigo-300 leading-none hover:border-indigo-400/50 hover:text-indigo-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

  const lukkModal = useCallback(() => setAktivtInnlegg(null), []);

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

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") lukkModal();
    };
    if (aktivtInnlegg) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [aktivtInnlegg, lukkModal]);

  return (
    <div className="py-4 text-left w-full overflow-x-hidden">
      {/* HERO SEKSJON */}
      <div className="flex flex-col md:flex-row gap-6 items-start border-b border-slate-800/40 pb-6">
        <div className="w-full md:w-[400px] shrink-0">
          <Image src="/images/blogg.jpg" alt="Innsikt og tankeledelse — Marius Ottesen" width={400} height={500} className="w-full h-auto rounded-2xl shadow-xl border border-slate-800" />
        </div>
        <div className="flex-1 min-w-0 pt-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-6 tracking-tighter leading-tight text-white uppercase italic break-words max-w-full [overflow-wrap:anywhere]">
            {tr("fag.title.1")} <br />
            <span className="text-indigo-500">{tr("fag.title.2")}</span>
          </h1>
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-4">{tr("fag.intro.1")}</p>
            <p className="text-lg md:text-xl text-slate-400 italic leading-relaxed font-light mb-4">{tr("fag.intro.why")}</p>
            <p className="text-lg md:text-xl text-slate-400 italic leading-relaxed font-light mb-4">{tr("fag.intro.why.bridge")}</p>
            <p className="text-lg md:text-xl text-slate-400 italic leading-relaxed font-light mb-4">{tr("fag.intro.2")}</p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light mb-4">
              <a href="#fag-innlegg-oversikt" className={linkClass}>
                {tr("fag.intro.scroll")}
              </a>
              {lang === "no" ? " ↓" : " ↓"}
            </p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
              {lang === "no" ? "Vil du se dette omsettes i prosjekter eller rådgivning, finner du mer under " : "To see this translated into projects or advisory work, see "}
              <Link href="/prosjekter" className={linkClass}>AI-prosjekter</Link>
              {lang === "no" ? " og " : " and "}
              {onNavigate ? (
                <button
                  type="button"
                  onClick={() => onNavigate("Consulting")}
                  className={`${linkClass} bg-transparent border-0 p-0 cursor-pointer font-light`}
                >
                  Consulting
                </button>
              ) : (
                <Link href="/consulting" className={linkClass}>Consulting</Link>
              )}
              .
            </p>
          </div>
        </div>
      </div>

      <section aria-labelledby="fag-lesestier-heading" className="mt-8 mb-10 pt-6 border-t border-slate-800/40">
        <h2 id="fag-lesestier-heading" className="text-xl md:text-2xl font-black text-white italic tracking-tight mb-2">
          {tr("fag.lesestier.title")}
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-2xl">{tr("fag.lesestier.intro")}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {lesestier.map((sti) => (
            <article
              key={sti.title.no}
              className="p-4 bg-slate-900/40 rounded-xl border border-indigo-500/15 shadow-lg space-y-3 min-w-0 flex flex-col"
            >
              <h3 className="text-sm font-semibold text-white leading-snug">{sti.title[lang]}</h3>
              <p className="text-xs text-slate-400 leading-relaxed flex-1">{sti.intro[lang]}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {sti.topics.map((topic) =>
                  topic.subtemaId ? (
                    <a key={topic.label.no} href={`#${topic.subtemaId}`} className={lesestiChipLinkKlasse}>
                      {topic.label[lang]}
                    </a>
                  ) : (
                    <span key={topic.label.no} className={lesestiChipKlasse}>
                      {topic.label[lang]}
                    </span>
                  )
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="fag-toc-heading" className="mt-2 mb-6 pt-8 border-t border-slate-800/40">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
          <h2 id="fag-toc-heading" className="text-xl md:text-2xl font-black text-white italic tracking-tight">
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
            <h3 className="text-lg font-semibold text-indigo-400 uppercase border-b border-indigo-500/30 pb-1.5">
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
                          onClick={() => setAktivtInnlegg(innlegg)}
                          className="border-b border-slate-800/40 hover:bg-slate-900/40 cursor-pointer transition-colors"
                        >
                          <td className="py-1.5 px-2 text-sm font-sans font-normal text-slate-300 hover:text-indigo-300">
                            {innlegg.tittel[lang]}
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
            <h3 className="text-lg font-semibold text-indigo-400 uppercase border-b border-indigo-500/30 pb-1.5">
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
                          onClick={() => setAktivtInnlegg(innlegg)}
                          className="border-b border-slate-800/40 hover:bg-slate-900/40 cursor-pointer transition-colors"
                        >
                          <td className="py-1.5 px-2 text-sm text-slate-300 hover:text-indigo-300">
                            {innlegg.tittel[lang]}
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
        <h2 id="fag-kort-heading" className="text-xl md:text-2xl font-black text-white italic tracking-tight mb-2">
          {tr("fag.kort.seksjon.title")}
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {tr("fag.kort.seksjon.intro.lead")}
          <span className="whitespace-nowrap">{tr("fag.kort.seksjon.intro.linkedin")}</span>
        </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <section className="flex flex-col w-full min-w-0">
          <div className="border-b-2 border-indigo-500/30 pb-3 mb-4">
            <KolonneSporLabel label={tr("fag.kat.ledelse")} antall={telling.ledelse} lang={lang} />
          </div>
          <div className="flex flex-col gap-4">
            {ledelseInnlegg.length > 0 ? (
              ledelseInnlegg.map((innlegg) => (
                <InnleggsKort key={innlegg.id} innlegg={innlegg} lang={lang} onClick={() => setAktivtInnlegg(innlegg)} lesLabel={tr("fag.les")} />
              ))
            ) : (
              <div className="p-12 rounded-2xl border border-slate-800 bg-slate-900/40 italic text-slate-500 text-center font-light">{tr("fag.nye")}</div>
            )}
          </div>
        </section>

        <section className="flex flex-col w-full min-w-0">
          <div className="border-b-2 border-indigo-500/30 pb-3 mb-4">
            <KolonneSporLabel label={tr("fag.kat.ai")} antall={telling.ai} lang={lang} />
          </div>
          <div className="flex flex-col gap-4">
            {aiInnlegg.length > 0 ? (
              aiInnlegg.map((innlegg) => (
                <InnleggsKort key={innlegg.id} innlegg={innlegg} lang={lang} onClick={() => setAktivtInnlegg(innlegg)} lesLabel={tr("fag.les")} />
              ))
            ) : (
              <div className="p-12 rounded-2xl border border-slate-800 bg-slate-900/40 italic text-slate-500 text-center font-light">{tr("fag.nye")}</div>
            )}
          </div>
        </section>
      </div>
      </section>

      {aktivtInnlegg && (
        <InnleggModal innlegg={aktivtInnlegg} lang={lang} onClose={lukkModal} onNavigate={onNavigate} linkedinLabel={tr("fag.linkedin")} ctaText={tr("fag.cta")} ctaLink={tr("fag.cta.link")} />
      )}
    </div>
  );
};

/* ——— KORT ——— */
const InnleggsKort = ({ innlegg, lang, onClick, lesLabel }: { innlegg: InnleggType; lang: "no" | "en"; onClick: () => void; lesLabel: string }) => {
  const cacheVersion = bildeCacheVersion(innlegg);
  const kortSrc = kortBildeSrc(innlegg);
  const isVideo =
    kortSrc.toLowerCase().endsWith(".mp4") ||
    kortSrc.toLowerCase().endsWith(".webm") ||
    kortSrc.toLowerCase().endsWith(".mov");
  return (
    <div
      onClick={onClick}
      className="group bg-slate-900/40 rounded-2xl border border-indigo-500/20 px-4 pt-3 pb-2.5 hover:bg-slate-900/60 transition-all duration-300 shadow-xl flex flex-row items-start gap-4 w-full text-left cursor-pointer"
    >
      <div
        className="relative shrink-0 rounded-lg overflow-hidden bg-slate-900 border border-slate-800"
        style={{ width: KORT_BILDE_BREDDE, height: KORT_BILDE_HOYDE }}
      >
        {isVideo ? (
          <video
            key={`${kortSrc}-${cacheVersion}`}
            src={`${kortSrc}?v=${cacheVersion}`}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
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
            className="object-cover transition-all duration-500"
            style={kortBildeStil(innlegg)}
            unoptimized
          />
        )}
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
        <div className="shrink-0 flex items-center gap-4 leading-none mt-auto pt-1">
          <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-indigo-400">
            {lesLabel} <span>→</span>
          </span>
          <a href={innlegg.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all">
            LinkedIn <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </div>
  );
};

/* ——— KARUSELL ——— */
const InnleggKarusell = ({
  slides,
  lang,
  cacheVersion,
  pdfUrl,
}: {
  slides: { src: string; alt?: { no: string; en: string } }[];
  lang: "no" | "en";
  cacheVersion: string;
  pdfUrl?: string;
}) => {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    setIndex(0);
  }, [slides]);

  if (total === 0) return null;

  const slide = slides[index];
  const alt = slide.alt?.[lang] ?? (lang === "no" ? `Panel ${index + 1}` : `Panel ${index + 1}`);

  return (
    <div className="w-full max-w-[520px] mx-auto">
      <div className="relative rounded-lg overflow-hidden bg-slate-900 border border-slate-700/80">
        <Image
          key={`${slide.src}-${index}`}
          src={`${slide.src}?v=${cacheVersion}`}
          alt={alt}
          width={520}
          height={720}
          className="w-full h-auto max-h-[68vh] md:max-h-[75vh] object-contain"
          unoptimized
        />
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-slate-950/80 border border-slate-600 text-slate-300 hover:text-white hover:border-indigo-400 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
              aria-label={lang === "no" ? "Forrige panel" : "Previous panel"}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-slate-950/80 border border-slate-600 text-slate-300 hover:text-white hover:border-indigo-400 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
              aria-label={lang === "no" ? "Neste panel" : "Next panel"}
            >
              <ChevronRight size={20} />
            </button>
            <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-slate-950/80 text-[10px] font-mono text-slate-400 border border-slate-700">
              {index + 1} / {total}
            </span>
          </>
        )}
      </div>
      {total > 1 && (
        <div className="flex justify-center gap-1.5 mt-3 flex-wrap">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none ${
                i === index ? "bg-indigo-400 w-5" : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={lang === "no" ? `Gå til panel ${i + 1}` : `Go to panel ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
      )}
      {pdfUrl && (
        <p className="mt-3 text-center">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-200 transition-colors"
          >
            {lang === "no" ? "Åpne hele tegneserien (PDF)" : "Open full comic (PDF)"}
          </a>
        </p>
      )}
    </div>
  );
};

/* Fjerner ledende avsnitt/linje i innhold som gjentar tittelen ord for ord */
function stripDuplicateTitle(innhold: string, tittel: string): string {
  const normalize = (s: string) =>
    normalizeDisplayText(s)
      .toLowerCase()
      .replace(/<[^>]+>/g, " ")
      .replace(/[\u2013\u2014\u2212\-–—]/g, " ")
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();

  const raw = (innhold || "").trim();
  if (!raw) return raw;

  const normalizedTitle = normalize(tittel);
  if (!normalizedTitle) return raw;

  const paragraphs = raw.split("\n\n").map((p) => p.trim()).filter(Boolean);
  if (!paragraphs.length) return raw;

  const firstParagraph = paragraphs[0];
  const firstParagraphNorm = normalize(firstParagraph.replace(/<[^>]+>/g, " "));
  if (firstParagraphNorm === normalizedTitle) {
    return paragraphs.slice(1).join("\n\n");
  }

  const lines = firstParagraph.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length > 1 && normalize(lines[0].replace(/<[^>]+>/g, " ")) === normalizedTitle) {
    const restOfFirst = lines.slice(1).join("\n").trim();
    return [restOfFirst, ...paragraphs.slice(1)].filter(Boolean).join("\n\n");
  }

  return raw;
}

const ModalInnleggsMedia = ({
  innlegg,
  lang,
  cacheVersion,
}: {
  innlegg: InnleggType;
  lang: "no" | "en";
  cacheVersion: string;
}) => {
  const [erLandscape, setErLandscape] = useState(Boolean(innlegg.bildeModalBred));
  const isVideo =
    innlegg.bildeUrl.toLowerCase().endsWith(".mp4") ||
    innlegg.bildeUrl.toLowerCase().endsWith(".webm") ||
    innlegg.bildeUrl.toLowerCase().endsWith(".mov");

  const oppdaterProporsjon = (w: number, h: number) => {
    if (innlegg.bildeModalBred) {
      setErLandscape(true);
      return;
    }
    setErLandscape(erLandscapeProporsjon(w, h));
  };

  const mediaKlasse = erLandscape ? MODAL_LANDSCAPE_KLASSE : MODAL_PORTRAIT_KLASSE;

  return (
    <div className={`w-full flex justify-center bg-slate-900/50 ${erLandscape ? "px-2 sm:px-3 pt-2 pb-4" : "p-4 sm:p-6"}`}>
      {innlegg.karusellBilder && innlegg.karusellBilder.length > 0 ? (
        <InnleggKarusell
          slides={innlegg.karusellBilder}
          lang={lang}
          cacheVersion={cacheVersion}
          pdfUrl={innlegg.karusellPdfUrl}
        />
      ) : isVideo ? (
        <video
          key={`${innlegg.bildeUrl}-${cacheVersion}`}
          src={`${innlegg.bildeUrl}?v=${cacheVersion}`}
          className={mediaKlasse}
          controls
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={(e) => oppdaterProporsjon(e.currentTarget.videoWidth, e.currentTarget.videoHeight)}
        />
      ) : (
        <Image
          key={`${innlegg.bildeUrl}-${cacheVersion}`}
          src={`${innlegg.bildeUrl}?v=${cacheVersion}`}
          alt={innlegg.tittel[lang]}
          width={erLandscape ? 960 : MODAL_PORTRAIT_ASPECT * 720}
          height={erLandscape ? 960 / MODAL_LANDSCAPE_ASPECT : 720}
          className={mediaKlasse}
          onLoadingComplete={(img) => oppdaterProporsjon(img.naturalWidth, img.naturalHeight)}
          unoptimized
        />
      )}
    </div>
  );
};

/* ——— MODAL ——— */
const InnleggModal = ({ innlegg, lang, onClose, onNavigate, linkedinLabel, ctaText, ctaLink }: { innlegg: InnleggType; lang: "no" | "en"; onClose: () => void; onNavigate?: (tab: string) => void; linkedinLabel: string; ctaText: string; ctaLink: string }) => {
  const cacheVersion = bildeCacheVersion(innlegg);
  const bodyRaw = innlegg.innhold?.[lang] || innlegg.teaser[lang];
  const bodyWithoutTitle = innlegg.innhold
    ? stripDuplicateTitle(innlegg.innhold[lang], innlegg.tittel[lang])
    : bodyRaw;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto py-8 px-2 sm:px-4 modal-enter" onClick={onClose}>
      <div className="relative w-full max-w-3xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden modal-enter" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white hover:border-indigo-500 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none" aria-label="Lukk modal">
          <X size={20} />
        </button>

        <ModalInnleggsMedia innlegg={innlegg} lang={lang} cacheVersion={cacheVersion} />

        <div className="p-8 md:p-12 space-y-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold">{innlegg.visningsDato}</span>
            <span className="text-slate-700">|</span>
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{innlegg.kategori}</span>
          </div>

          <h2
            id="modal-title"
            className="text-3xl md:text-4xl font-sans font-black text-white tracking-tight leading-tight [&_em]:italic"
            dangerouslySetInnerHTML={{ __html: formatInnleggTittelHtml(innlegg.tittel[lang]) }}
          />
          <div className="w-16 h-0.5 bg-indigo-500/40" />

          <div
            className="text-slate-300 text-base leading-relaxed space-y-0 [&_strong]:font-semibold [&_em]:italic"
            dangerouslySetInnerHTML={{
              __html: (innlegg.innhold ? bodyWithoutTitle : bodyRaw)
                .split("\n\n")
                .map((avsnitt) => {
                  const trimmed = avsnitt.trim();
                  if (!trimmed) return "";
                  const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
                  const bulletLines = lines.filter((l) => l.startsWith("•") || l.startsWith("- "));
                  if (bulletLines.length > 0 && bulletLines.length === lines.length) {
                    const punkter = bulletLines
                      .map((l) => {
                        const text = l.startsWith("•") ? l.substring(1).trim() : l.substring(2).trim();
                        return `<li>${formatInnleggHtml(text)}</li>`;
                      })
                      .join("");
                    return `<ul class="list-disc pl-6 space-y-2 my-4 text-slate-300 marker:text-indigo-400">${punkter}</ul>`;
                  }
                  if (trimmed.startsWith("•") || trimmed.startsWith("- ")) {
                    const punkter = trimmed
                      .split("\n")
                      .filter((l) => l.trim().startsWith("•") || l.trim().startsWith("- "))
                      .map((l) => {
                        const t = l.trim();
                        const text = t.startsWith("•") ? t.substring(1).trim() : t.substring(2).trim();
                        return `<li>${formatInnleggHtml(text)}</li>`;
                      })
                      .join("");
                    return `<ul class="list-disc pl-6 space-y-2 my-4 text-slate-300 marker:text-indigo-400">${punkter}</ul>`;
                  }
                  if (trimmed.startsWith("Annual net value =")) {
                    return `<p class="mb-4 rounded-xl border border-indigo-500/25 bg-indigo-500/10 px-4 py-3 text-indigo-300 font-semibold leading-snug">${formatInnleggHtml(trimmed)}</p>`;
                  }
                  return `<p class="mb-4">${formatInnleggHtml(trimmed.replace(/\n/g, "<br/>"))}</p>`;
                })
                .join(""),
            }}
          />

          <div className="pt-6 border-t border-slate-800 space-y-4">
            <a href={innlegg.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-500 text-white rounded-xl font-black uppercase tracking-widest text-sm hover:bg-indigo-400 transition-all shadow-lg">
              <ExternalLink size={16} />
              {linkedinLabel}
            </a>

            {onNavigate && (
              <div className="p-5 bg-slate-900/60 border border-indigo-500/15 rounded-xl">
                <p className="text-slate-400 text-sm italic mb-3">{ctaText}</p>
                <button
                  onClick={() => { onClose(); onNavigate("Consulting"); }}
                  className="inline-flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-widest hover:text-white transition-all group/cta"
                >
                  {ctaLink}
                  <ArrowRight size={16} className="group-hover/cta:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faginnlegg;
