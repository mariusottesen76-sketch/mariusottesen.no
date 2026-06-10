"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, type Lang } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import { blockTitleClass, cardTitleClass, pageIntroClass, pageTitleClass, sectionTitleClass } from "./lib/typography";
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
import { isFlowSignalProsjekt } from "./lib/flowsignal-brand";
import { isPscProsjekt } from "./lib/psc-brand";
import { formatProsjektHtml, formatProsjektPlain } from "./lib/product-brand";
import ProsjektPilotBlokk from "./components/ProsjektPilotBlokk";

const prosjektKort: ProsjektType[] = [flowSignal, prosjektoppgaveStrategiskImplementering, pscPromoVideo, aiAssistertInnsiktsagent, aiAssistertInnsiktsOgInnholdsagent, predictiveSalesCoach, aiValueLabOslo, skoyenasenTannklinikk, aiArkitekturBeslutningsstotte].sort(
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

const anchorLinkClass =
  "text-sm text-indigo-300 hover:text-indigo-100 underline underline-offset-2 decoration-indigo-500/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

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
      {/* HERO SEKSJON */}
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
        <div className="flex-1 min-w-0 pt-2 overflow-hidden">
          <h1 className={`${pageTitleClass} mb-6`}>
            {tr("prosjekter.title.1")} <br />
            <span className="text-indigo-500">{tr("prosjekter.title.2")}</span>
          </h1>
          <div className="w-full min-w-0 max-w-none">
            <p className={`${pageIntroClass} mb-4 break-words`}>
              {tr("prosjekter.intro.1")}
            </p>
            <p className="text-lg md:text-xl text-slate-400 italic leading-relaxed font-light break-words">
              {tr("prosjekter.intro.2")}{" "}
              {onNavigate ? (
                <button
                  type="button"
                  onClick={() => onNavigate("Consulting")}
                  className={`${linkClass} bg-transparent border-0 p-0 cursor-pointer font-light italic`}
                >
                  {tr("prosjekter.intro.2.link")}
                </button>
              ) : (
                <Link href="/consulting" className={linkClass}>
                  {tr("prosjekter.intro.2.link")}
                </Link>
              )}
              .
            </p>
          </div>
        </div>
      </div>

      <section aria-labelledby="prosjekter-hurtig-heading" className="mt-6 mb-2 min-w-0">
        <h2 id="prosjekter-hurtig-heading" className={`${sectionTitleClass} mb-3`}>
          {tr("prosjekter.hurtig.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {hurtigoversikt.map((kategori) => (
            <div
              key={kategori.title.no}
              className="p-4 bg-slate-900/40 rounded-xl border border-slate-800 space-y-2 min-w-0"
            >
              <h3 className={`${cardTitleClass} text-indigo-400`}>
                {kategori.title[lang]}
              </h3>
              <ul className="space-y-1.5">
                {kategori.lenker.map((lenke) => (
                  <li key={lenke.prosjektId}>
                    <a href={`#${lenke.prosjektId}`} className={anchorLinkClass}>
                      {lenke.label[lang]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROSJEKTLISTE – smalere bilde, tekst innenfor ramme */}
      <div className="mt-8 space-y-6 min-w-0">
        {alleProsjekter.map((prosjekt) => {
          const bildeHintKort = getProsjektBildeHint(prosjekt, lang);
          const erPsc = isPscProsjekt(prosjekt.id);
          const erFlowSignal = isFlowSignalProsjekt(prosjekt.id);
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
                  className={`text-sm leading-[1.5] md:leading-[1.48] font-light break-words [&_em]:italic ${
                    erPsc ? "text-slate-300" : "text-slate-400"
                  }`}
                  dangerouslySetInnerHTML={{ __html: formatProsjektPlain(prosjekt.teaser[lang], prosjekt.id) }}
                />
                {(erPsc || erFlowSignal) && <ProsjektPilotBlokk prosjektId={prosjekt.id} lang={lang} />}
                <div>
                  <div
                    className={
                      erPsc
                        ? `text-slate-200 text-base leading-[1.55] md:leading-[1.48] space-y-2 font-light break-words overflow-hidden
                    [&_a]:text-[#E30613] [&_a]:underline [&_a]:underline-offset-2
                    [&_a]:decoration-[#E30613]/70 [&_a]:hover:text-white
                    [&_a]:transition-colors
                    [&_a.link-subtle]:text-slate-200 [&_a.link-subtle]:no-underline [&_a.link-subtle]:hover:text-[#E30613] [&_a.link-subtle]:hover:underline
                    [&_a.psc-app-link]:text-[#E30613] [&_a.psc-app-link]:font-semibold [&_a.psc-app-link]:underline [&_a.psc-app-link]:underline-offset-2
                    [&_a.psc-app-link]:decoration-[#E30613] [&_a.psc-app-link]:hover:text-white [&_a.psc-app-link]:hover:decoration-white
                    [&_a.psc-app-link]:transition-colors
                    [&_a.psc-app-link_em]:italic [&_a.psc-app-link_em]:text-[#E30613] [&_a.psc-app-link:hover_em]:text-white
                    [&_a.psc-app-link_.psc-v]:text-[#E30613] [&_a.psc-app-link:hover_.psc-v]:text-white
                    [&_strong]:font-bold [&_strong]:text-white [&_em]:italic`
                        : erFlowSignal
                          ? `text-slate-300 text-base leading-[1.55] md:leading-[1.48] space-y-2 font-light break-words overflow-hidden
                    [&_a]:text-indigo-300 [&_a]:underline [&_a]:underline-offset-2
                    [&_a]:decoration-indigo-500/70 [&_a]:hover:text-indigo-200
                    [&_a]:transition-colors
                    [&_a.fs-app-link]:text-[#CDB47A] [&_a.fs-app-link]:font-semibold [&_a.fs-app-link]:underline [&_a.fs-app-link]:underline-offset-2
                    [&_a.fs-app-link]:decoration-[#CDB47A] [&_a.fs-app-link]:hover:text-white [&_a.fs-app-link]:hover:decoration-white
                    [&_a.fs-app-link]:transition-colors
                    [&_a.fs-app-link_.fs-mark]:text-[#CDB47A] [&_a.fs-app-link:hover_.fs-mark]:text-white
                    [&_a.fs-app-link_.fs-v]:text-[#CDB47A] [&_a.fs-app-link:hover_.fs-v]:text-white
                    [&_strong]:font-semibold [&_em]:italic`
                          : `text-slate-300 text-base leading-[1.55] md:leading-[1.48] space-y-2 font-light break-words overflow-hidden
                    [&_a]:text-indigo-300 [&_a]:underline [&_a]:underline-offset-2
                    [&_a]:decoration-indigo-500/70 [&_a]:hover:text-indigo-200
                    [&_a]:transition-colors
                    [&_a.link-subtle]:text-slate-300 [&_a.link-subtle]:no-underline [&_a.link-subtle]:hover:text-indigo-300 [&_a.link-subtle]:hover:underline
                    [&_strong]:font-semibold [&_em]:italic`
                    }
                  >
                    {prosjekt.innhold[lang].split("\n\n").map((avsnitt, i) => (
                      <p
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

