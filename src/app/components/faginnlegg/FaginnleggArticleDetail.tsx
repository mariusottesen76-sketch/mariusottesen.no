"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Lang } from "../../LanguageContext";
import { LanguageProvider, LanguageToggle, useLanguage } from "../../LanguageContext";
import { getTranslation } from "../../data/translations";
import type { FaginnleggInnlegg } from "../../lib/faginnlegg-types";
import { bildeCacheVersion } from "../../lib/faginnlegg-types";
import { formatFaginnleggBodyHtml, resolveFaginnleggBody } from "../../lib/faginnlegg-innhold";
import { applyProductNameItalicsPlain, formatInnleggTittelHtml } from "../../lib/product-brand";
import { getRelevantVidereLinks, labelForLang } from "../../lib/faginnlegg-relevant-videre";
import { getFaginnleggLinkedInCta } from "../../lib/faginnlegg-linkedin-cta";
import { blockTitleClass } from "../../lib/typography";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const MODAL_LANDSCAPE_KLASSE =
  "w-full max-w-[min(100%,754px)] mx-auto h-auto min-h-[286px] md:min-h-[325px] max-h-[59vh] md:max-h-[65vh] object-contain rounded-lg";
const MODAL_PORTRAIT_KLASSE =
  "w-auto max-w-[min(100%,480px)] md:max-w-[560px] max-h-[68vh] md:max-h-[72vh] h-auto object-contain rounded-lg mx-auto";

const erLandscapeProporsjon = (w: number, h: number) => w > h * 1.08;

function FaginnleggKarusell({
  slides,
  lang,
  cacheVersion,
  pdfUrl,
}: {
  slides: { src: string; alt?: { no: string; en: string } }[];
  lang: Lang;
  cacheVersion: string;
  pdfUrl?: string;
}) {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

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
}

function FaginnleggArticleMedia({
  innlegg,
  lang,
  cacheVersion,
}: {
  innlegg: FaginnleggInnlegg;
  lang: Lang;
  cacheVersion: string;
}) {
  const [erLandscape, setErLandscape] = useState(Boolean(innlegg.bildeModalBred));
  const hasKarusell = Boolean(innlegg.karusellBilder && innlegg.karusellBilder.length > 0);
  const hasBilde = Boolean(innlegg.bildeUrl?.trim());

  if (!hasKarusell && !hasBilde) return null;

  const isVideo = Boolean(
    innlegg.bildeUrl &&
      (innlegg.bildeUrl.toLowerCase().endsWith(".mp4") ||
        innlegg.bildeUrl.toLowerCase().endsWith(".webm") ||
        innlegg.bildeUrl.toLowerCase().endsWith(".mov"))
  );

  const oppdaterProporsjon = (w: number, h: number) => {
    if (innlegg.bildeModalBred) {
      setErLandscape(true);
      return;
    }
    setErLandscape(erLandscapeProporsjon(w, h));
  };

  const mediaKlasse = erLandscape ? MODAL_LANDSCAPE_KLASSE : MODAL_PORTRAIT_KLASSE;

  return (
    <figure className={`w-full flex justify-center bg-slate-900/50 ${erLandscape ? "px-2 sm:px-3 pt-2 pb-4" : "p-4 sm:p-6"} rounded-xl border border-slate-800/60 mb-8`}>
      {hasKarusell ? (
        <FaginnleggKarusell
          key={innlegg.id}
          slides={innlegg.karusellBilder!}
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
          alt={innlegg.bildeAlt?.[lang] ?? innlegg.tittel[lang]}
          width={erLandscape ? 960 : 720}
          height={erLandscape ? 540 : 720}
          className={mediaKlasse}
          onLoadingComplete={(img) => oppdaterProporsjon(img.naturalWidth, img.naturalHeight)}
          unoptimized
        />
      )}
    </figure>
  );
}

function FaginnleggArticleInner({ innlegg }: { innlegg: FaginnleggInnlegg }) {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const cacheVersion = bildeCacheVersion(innlegg);
  const body = resolveFaginnleggBody(innlegg, lang);
  const bodyHtml = formatFaginnleggBodyHtml(body);
  const relevantLinks = getRelevantVidereLinks(innlegg.kategori);

  return (
    <article className="py-4 text-left w-full overflow-x-hidden min-w-0">
      <nav className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/40 pb-4">
        <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label={lang === "no" ? "Til forsiden" : "Go to home"}>
          <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-800 shrink-0">
            <Image src="/images/ikon.png" alt="Marius Ottesen" width={36} height={36} className="w-full h-full object-cover" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 group-hover:text-indigo-300">
            Marius Ottesen Consulting
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          <Link href="/faginnlegg" className={linkClass}>
            {tr("tab.faginnlegg")}
          </Link>
          <Link href="/consulting" className={linkClass}>
            Consulting
          </Link>
          <Link href="/kontakt" className={linkClass}>
            {lang === "no" ? "Kontakt" : "Contact"}
          </Link>
          <LanguageToggle />
        </div>
      </nav>

      <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
        <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
          <li>
            <Link href="/faginnlegg" className="hover:text-indigo-300 transition-colors">
              {tr("tab.faginnlegg")}
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-600">
            →
          </li>
          <li className="text-slate-400 truncate max-w-[min(100%,20rem)]" aria-current="page">
            {innlegg.tittel[lang].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()}
          </li>
        </ol>
      </nav>

      <Link
        href="/faginnlegg"
        className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-300 transition-colors mb-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 rounded-sm"
      >
        <ChevronLeft size={14} aria-hidden="true" />
        {tr("fag.artikkel.tilbake")}
      </Link>

      <header className="border-b border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-4 flex-wrap mb-4">
          <time dateTime={innlegg.dato} className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold">
            {innlegg.visningsDato}
          </time>
          <span className="text-slate-700" aria-hidden="true">
            |
          </span>
          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{innlegg.kategori}</span>
        </div>

        <h1
          className="text-3xl md:text-4xl font-sans font-black text-white tracking-tight leading-tight [&_em]:italic"
          dangerouslySetInnerHTML={{ __html: formatInnleggTittelHtml(innlegg.tittel[lang]) }}
        />

        {innlegg.undertittel?.[lang] && (
          <p
            className="mt-2 text-lg md:text-xl text-slate-300 font-light italic leading-snug [&_em]:italic"
            dangerouslySetInnerHTML={{ __html: applyProductNameItalicsPlain(innlegg.undertittel[lang]) }}
          />
        )}

        <p
          className={`text-lg text-slate-300 leading-relaxed font-light [&_em]:italic ${innlegg.undertittel?.[lang] ? "mt-5" : "mt-4"}`}
          dangerouslySetInnerHTML={{ __html: applyProductNameItalicsPlain(innlegg.teaser[lang]) }}
        />
      </header>

      <FaginnleggArticleMedia innlegg={innlegg} lang={lang} cacheVersion={cacheVersion} />

      <div
        className="text-slate-300 text-base leading-relaxed [&_p]:mb-4 [&_p_strong]:font-semibold [&_em]:italic [&_a]:text-indigo-300 [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-4 [&_ul]:marker:text-indigo-400"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />

      <div className="pt-8 mt-8 border-t border-slate-800 space-y-4">
        <a
          href={innlegg.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-slate-400 hover:text-slate-200 transition-colors leading-relaxed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          {getFaginnleggLinkedInCta(innlegg.link, lang)}
        </a>
      </div>

      <section aria-labelledby="fag-relevant-videre" className="mt-10 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 space-y-4">
        <h2 id="fag-relevant-videre" className={blockTitleClass}>
          {tr("fag.artikkel.relevant")}
        </h2>
        <ul className="space-y-2 list-none p-0 m-0">
          {relevantLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={`${linkClass} text-sm font-medium`}>
                {labelForLang(item, lang)} →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 p-6 bg-slate-900/40 rounded-2xl border border-indigo-500/15 space-y-3">
        <p className="text-slate-400 text-sm italic">{tr("fag.cta")}</p>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-widest hover:text-white transition-all"
        >
          {tr("fag.cta.link")} →
        </Link>
      </section>

      <footer className="mt-10 pt-6 border-t border-slate-800/40 text-center">
        <p className="text-slate-600 text-[11px] font-bold tracking-wider">
          &copy; {new Date().getFullYear()} Marius Ottesen Consulting
        </p>
      </footer>
    </article>
  );
}

export default function FaginnleggArticleDetail({ innlegg }: { innlegg: FaginnleggInnlegg }) {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-slate-950 text-slate-200 px-16 sm:px-24 md:px-32 lg:px-40 xl:px-48 2xl:px-56 py-4 md:py-8 relative overflow-x-hidden w-full">
        <div className="max-w-3xl mx-auto relative z-10 w-full">
          <FaginnleggArticleInner innlegg={innlegg} />
        </div>
      </main>
    </LanguageProvider>
  );
}
