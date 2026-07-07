"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, type Lang } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import { blockTitleClass, getProsjektInnholdProseClass, pageIntroClass, pageTitleClass, prosjektTeaserClass, sectionTitleClass } from "./lib/typography";
import { getProsjektHurtigoversikt } from "./data/prosjekter-hurtigoversikt";
import { predictiveSalesCoach, type ProsjektType } from "./data/prosjekter/predictive-sales-coach";
import { pscPromoVideo } from "./data/prosjekter/psc-promo-video";
import { aiValueLabOslo } from "./data/prosjekter/ai-value-lab-oslo";
import { skoyenasenTannklinikk } from "./data/prosjekter/skoyenasen-tannklinikk";
import { aiArkitekturBeslutningsstotte } from "./data/prosjekter/ai-arkitektur-beslutningsstotte";
import { aiFaginnleggHub } from "./data/prosjekter/ai-faginnlegg-hub";
import { aiAssistertInnsiktsagent } from "./data/prosjekter/ai-assistert-innsiktsagent";
import { aiAssistertInnsiktsOgInnholdsagent } from "./data/prosjekter/ai-assistert-innsikts-og-innholdsagent";
import { prosjektoppgaveStrategiskImplementering } from "./data/prosjekter/prosjektoppgave-strategisk-implementering";
import { flowSignal } from "./data/prosjekter/flowsignal";
import { smbSalgsflytSjekken } from "./data/prosjekter/smb-salgsflyt-sjekken";
import { controlTower } from "./data/prosjekter/control-tower";
import { aiReadinessScan } from "./data/prosjekter/ai-readiness-scan";
import { mariusottesenNettside } from "./data/prosjekter/mariusottesen-nettside";
import { isFlowSignalProsjekt } from "./lib/flowsignal-brand";
import { isPscProsjekt } from "./lib/psc-brand";
import { isSmbSalgsflytProsjekt } from "./lib/smb-salgsflyt-brand";
import { isAiReadinessScanProsjekt } from "./lib/ai-readiness-scan-brand";
import { formatProsjektHtml, formatProsjektPlain } from "./lib/product-brand";
import ProsjektPilotBlokk from "./components/ProsjektPilotBlokk";

const prosjektKort: ProsjektType[] = [controlTower, mariusottesenNettside, aiReadinessScan, smbSalgsflytSjekken, flowSignal, prosjektoppgaveStrategiskImplementering, pscPromoVideo, aiAssistertInnsiktsagent, aiAssistertInnsiktsOgInnholdsagent, predictiveSalesCoach, aiValueLabOslo, skoyenasenTannklinikk, aiArkitekturBeslutningsstotte].sort(
  (a, b) => new Date(b.dato).getTime() - new Date(a.dato).getTime()
);

// Legges bevisst nederst: dette er mer en løpende innsiktshub enn et konkret prosjekt.
const alleProsjekter: ProsjektType[] = [...prosjektKort, aiFaginnleggHub];

function getProsjektBildeHint(prosjekt: ProsjektType, lang: Lang) {
  const custom = prosjekt.bildeHint?.[lang];
  if (custom) return custom;
  return lang === "no"
    ? `Klikk på bildet for å se ${prosjekt.tittel.no} i større format.`
    : `Click the image to view ${prosjekt.tittel.en} in a larger format.`;
}

function getProsjektBildeRamme(prosjekt: ProsjektType): "natural" | "cover" {
  if (prosjekt.bildeRamme) return prosjekt.bildeRamme;
  if (prosjekt.bildePortrett) return "natural";
  return "natural";
}

function getVideoAspectClass(prosjekt: ProsjektType): string {
  return prosjekt.videoFormat === "landscape" ? "aspect-video" : "aspect-[9/16]";
}

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const prosjektIntroLinkClass =
  "text-indigo-300 text-base font-medium underline underline-offset-2 decoration-indigo-500/60 hover:text-indigo-100 hover:decoration-indigo-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 rounded-sm";

export default function Prosjekter({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const hurtigoversikt = getProsjektHurtigoversikt(lang);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  useEffect(() => {
    const scrollTilProsjekt = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };
    scrollTilProsjekt();
    window.addEventListener("hashchange", scrollTilProsjekt);
    return () => window.removeEventListener("hashchange", scrollTilProsjekt);
  }, []);

  return (
    <div className="py-4 text-left w-full overflow-x-hidden min-w-0">
      {/* HERO SEKSJON — bilde + kort intro (som faginnlegg) */}
      <div className="flex flex-col md:flex-row gap-6 items-start border-b border-slate-800/40 pb-6 min-w-0">
        <div className="w-full md:w-[400px] shrink-0 min-w-0">
          <Image
            src="/images/etikk.jfif"
            alt="Etikk og ansvarlig bruk av AI — illustrasjon"
            width={400}
            height={500}
            className="w-full h-auto rounded-2xl shadow-2xl border border-slate-800 object-cover max-w-full"
          />
        </div>
        <div className="flex-1 min-w-0 pt-2">
          <h1 className={`${pageTitleClass} mb-6`}>
            {tr("prosjekter.title.1")} <br />
            <span className="text-indigo-500">{tr("prosjekter.title.2")}</span>
          </h1>
          <div className="w-full min-w-0 max-w-none">
            <p className={`${pageIntroClass} mb-4 break-words`}>{tr("prosjekter.intro.1")}</p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
              <a href="#prosjekter-detalj" className={linkClass}>
                {tr("prosjekter.intro.scroll")}
              </a>
              {lang === "no" ? " ↓" : " ↓"}
            </p>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="prosjekter-intro-heading"
        className="mt-8 mb-10 pt-6 border-t border-slate-800/40 min-w-0"
      >
        <h2 id="prosjekter-intro-heading" className="sr-only">
          {lang === "no" ? "Om AI-prosjektene" : "About the AI projects"}
        </h2>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-4 break-words">
          {tr("prosjekter.intro.1b")}
        </p>
        <p className="text-lg md:text-xl text-slate-400 italic leading-relaxed font-light mb-6 break-words">
          {tr("prosjekter.intro.2")}
        </p>
        <section
          aria-labelledby="prosjekter-videreutdanning-heading"
          className="mb-6 pt-5 border-t border-slate-800/50 space-y-3"
        >
          <h3 id="prosjekter-videreutdanning-heading" className="text-lg md:text-xl font-black text-slate-200 italic tracking-tight">
            {tr("prosjekter.videreutdanning.title")}
          </h3>
          <div className="text-base md:text-lg text-slate-400 leading-relaxed font-light break-words space-y-4">
            <p>{tr("prosjekter.videreutdanning.para1")}</p>
            <p>{tr("prosjekter.videreutdanning.para2")}</p>
            <p>
              {tr("prosjekter.videreutdanning.para3.lead")}{" "}
              <a href="#ai-value-lab-oslo-2026" className={linkClass}>
                {tr("prosjekter.videreutdanning.valueLab")}
              </a>
              {tr("prosjekter.videreutdanning.para3.tail")}
            </p>
          </div>
        </section>
        <p className="text-base md:text-lg text-slate-400 font-medium mb-3">
          {tr("prosjekter.intro.gridLead")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {hurtigoversikt.map((kategori) => (
            <div
              key={kategori.title.no}
              className="p-4 md:p-5 bg-slate-900/40 rounded-xl border border-slate-800 space-y-3 min-w-0"
            >
              <h3 className="text-base font-black text-indigo-400 italic tracking-tight">{kategori.title[lang]}</h3>
              <ul className="space-y-3">
                {kategori.lenker.map((lenke) => (
                  <li key={lenke.prosjektId} className="space-y-1">
                    <a href={`#${lenke.prosjektId}`} className={prosjektIntroLinkClass}>
                      {tr(`prosjekter.intro.punkt.${lenke.introSlug}.label`)}
                    </a>
                    <p className="text-base text-slate-400 leading-snug font-light">
                      {tr(`prosjekter.intro.punkt.${lenke.introSlug}.desc`)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROSJEKTLISTE – smalere bilde, tekst innenfor ramme */}
      <section
        id="prosjekter-detalj"
        aria-labelledby="prosjekter-kort-heading"
        className="scroll-mt-24 mt-10 pt-8 border-t border-slate-800/60 min-w-0"
      >
        <h2 id="prosjekter-kort-heading" className={`${sectionTitleClass} mb-2`}>
          {tr("prosjekter.kort.seksjon.title")}
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {tr("prosjekter.kort.seksjon.intro")}
        </p>
        <div className="space-y-6 min-w-0">
        {alleProsjekter.map((prosjekt) => {
          const bildeHintKort = getProsjektBildeHint(prosjekt, lang);
          const erPsc = isPscProsjekt(prosjekt.id);
          const erFlowSignal = isFlowSignalProsjekt(prosjekt.id);
          const erSmbSalgsflyt = isSmbSalgsflytProsjekt(prosjekt.id);
          const erAiReadinessScan = isAiReadinessScanProsjekt(prosjekt.id);
          return (
          <article
            key={prosjekt.id}
            id={prosjekt.id}
            className={`scroll-mt-24 ${
              erPsc
                ? "bg-[#0B1120] rounded-2xl border border-slate-800/80 overflow-hidden shadow-xl min-w-0"
                : "bg-slate-900/40 rounded-2xl border border-indigo-500/20 overflow-hidden shadow-xl min-w-0"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-start p-2.5 md:p-3 min-w-0">
              {/* Smalere bildekolonne – predictive / predictive-sales-coach */}
              <div className="w-full md:w-[220px] lg:w-[260px] shrink-0 flex flex-col items-center gap-1.5 self-start">
                {prosjekt.videoEmbedUrl || prosjekt.videoUrl ? (
                  playingVideoId === prosjekt.id ? (
                    <div
                      className={`w-full ${getVideoAspectClass(prosjekt)} relative bg-slate-800 overflow-hidden rounded-lg border border-slate-700/60`}
                    >
                      {prosjekt.videoUrl ? (
                        <video
                          src={prosjekt.videoUrl}
                          className="absolute inset-0 w-full h-full object-cover"
                          controls
                          autoPlay
                          playsInline
                        />
                      ) : (
                        <iframe
                          src={prosjekt.videoEmbedUrl}
                          title={prosjekt.tittel[lang]}
                          className="absolute inset-0 w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      )}
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlayingVideoId(prosjekt.id)}
                      className={`w-full ${getVideoAspectClass(prosjekt)} relative bg-slate-800 overflow-hidden rounded-lg border border-slate-700/60 cursor-pointer group focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none`}
                      aria-label={bildeHintKort}
                    >
                      <Image
                        src={prosjekt.bildeUrl}
                        alt={prosjekt.tittel[lang]}
                        fill
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 260px"
                      />
                    </button>
                  )
                ) : getProsjektBildeRamme(prosjekt) === "cover" ? (
                  <button
                    type="button"
                    onClick={() => setActiveImage({ src: prosjekt.bildeUrl, alt: prosjekt.tittel[lang] })}
                    className="w-full aspect-[4/3] relative bg-slate-800 overflow-hidden group cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-lg border border-slate-700/60"
                    aria-label={bildeHintKort}
                  >
                    <Image
                      src={prosjekt.bildeUrl}
                      alt={prosjekt.tittel[lang]}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 260px"
                    />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveImage({ src: prosjekt.bildeUrl, alt: prosjekt.tittel[lang] })}
                    className="w-full relative bg-slate-800 overflow-hidden group cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-lg border border-slate-700/60"
                    aria-label={bildeHintKort}
                  >
                    <Image
                      src={prosjekt.bildeUrl}
                      alt={prosjekt.tittel[lang]}
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 260px"
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </button>
                )}
                {prosjekt.bilderUnderHovedbilde && prosjekt.bilderUnderHovedbilde.length > 0 && (
                  <div className="w-full flex flex-col gap-1.5">
                    {prosjekt.bilderUnderHovedbilde.map((img) => {
                      const erQr = /QR-PSC/i.test(img.src);
                      return (
                        <button
                          key={img.src}
                          type="button"
                          onClick={() => setActiveImage({ src: img.src, alt: img.alt[lang] })}
                          className={
                            erQr
                              ? "relative w-full rounded-lg overflow-hidden border border-slate-700/60 bg-slate-800 cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none leading-none p-0"
                              : "relative w-full rounded-lg overflow-hidden border border-slate-700/60 bg-slate-800 cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                          }
                          aria-label={img.alt[lang]}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt[lang]}
                            width={0}
                            height={0}
                            sizes="(max-width: 768px) 100vw, 260px"
                            className="w-full h-auto block m-0"
                            style={{ width: "100%", height: "auto", display: "block", verticalAlign: "top" }}
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
                {prosjekt.ekstraBilder &&
                  prosjekt.ekstraBilder.length > 0 &&
                  !prosjekt.bilderUnderHovedbilde?.length && (
                  <div className="w-full flex flex-col gap-2 px-1">
                    {prosjekt.ekstraBilder.map((img) => (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => setActiveImage({ src: img.src, alt: img.alt[lang] })}
                        className="relative w-full rounded-lg overflow-hidden border border-slate-700/60 bg-slate-800 cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                        aria-label={img.alt[lang]}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt[lang]}
                          width={0}
                          height={0}
                          sizes="(max-width: 768px) 100vw, 260px"
                          className="w-full h-auto"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </button>
                    ))}
                  </div>
                )}
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black text-center px-1">
                  {bildeHintKort}
                </p>
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-start overflow-hidden space-y-3">
                {prosjekt.visningsDato?.trim() && (
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest font-bold block leading-none ${
                      erPsc ? "text-slate-400" : "text-indigo-400"
                    }`}
                  >
                  {prosjekt.visningsDato}
                  </span>
                )}
                <h2
                  className={`${blockTitleClass} text-xl md:text-2xl break-words [overflow-wrap:anywhere] ${
                    erPsc ? "[&_.psc-v]:text-[#E30613]" : erFlowSignal ? "[&_.fs-v]:text-[#CDB47A]" : ""
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: formatProsjektPlain(prosjekt.tittel[lang], prosjekt.id, erPsc || erFlowSignal),
                  }}
                />
                <p
                  className={prosjektTeaserClass}
                  dangerouslySetInnerHTML={{ __html: formatProsjektPlain(prosjekt.teaser[lang], prosjekt.id) }}
                />
                {(erPsc || erFlowSignal || erSmbSalgsflyt || erAiReadinessScan) && (
                  <ProsjektPilotBlokk prosjektId={prosjekt.id} lang={lang} />
                )}
                <div>
                  <div
                    className={getProsjektInnholdProseClass(
                      erPsc ? "psc" : erFlowSignal ? "flowsignal" : "default",
                    )}
                  >
                    {prosjekt.innhold[lang].split("\n\n").map((avsnitt, i) => (
                      <div
                        key={i}
                        className="min-w-0"
                        dangerouslySetInnerHTML={{
                          __html: formatProsjektHtml(avsnitt.trim(), erPsc),
                        }}
                      />
                    ))}
                    {prosjekt.navigasjonsCta?.beskrivelse && onNavigate && (
                      <p className="min-w-0">
                        {prosjekt.navigasjonsCta.beskrivelse[lang]}{" "}
                        <button
                          type="button"
                          onClick={() => onNavigate(prosjekt.navigasjonsCta!.tab)}
                          className={
                            erPsc
                              ? "text-[#E30613] hover:text-white underline underline-offset-2 decoration-[#E30613]/70 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-sm"
                              : "text-indigo-300 hover:text-indigo-200 underline underline-offset-2 decoration-indigo-500/70 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-sm"
                          }
                        >
                          {prosjekt.navigasjonsCta.label[lang]} →
                        </button>
                      </p>
                    )}
                  </div>
                </div>
                {prosjekt.navigasjonsCta && onNavigate && !prosjekt.navigasjonsCta.beskrivelse && (
                  <button
                    type="button"
                    onClick={() => onNavigate(prosjekt.navigasjonsCta!.tab)}
                    className="group mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-500/15 border border-indigo-500/35 hover:bg-indigo-500/25 hover:border-indigo-400/50 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                  >
                    <span className="text-indigo-300 text-xs font-black uppercase tracking-widest group-hover:text-white">
                      {prosjekt.navigasjonsCta.label[lang]}
                    </span>
                    <span aria-hidden className="text-indigo-300 group-hover:text-white">
                      →
                    </span>
                  </button>
                )}
              </div>
            </div>
          </article>
          );
        })}
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-[96vw] max-h-[96vh] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-slate-900/80 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
            >
              {lang === "no" ? "Lukk" : "Close"}
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center p-4 overflow-auto">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={1400}
                height={900}
                className="max-w-[1400px] max-h-[90vh] w-auto h-auto object-contain mx-auto"
              />
              <p className="mt-3 text-xs text-slate-400 uppercase tracking-widest font-black text-center">
                {activeImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

