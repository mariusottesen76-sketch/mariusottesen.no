"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useLanguage, type Lang } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import { predictiveSalesCoach, type ProsjektType } from "./data/prosjekter/predictive-sales-coach";
import { pscPromoVideo } from "./data/prosjekter/psc-promo-video";
import { aiValueLabOslo } from "./data/prosjekter/ai-value-lab-oslo";
import { skoyenasenTannklinikk } from "./data/prosjekter/skoyenasen-tannklinikk";
import { aiArkitekturBeslutningsstotte } from "./data/prosjekter/ai-arkitektur-beslutningsstotte";
import { aiFaginnleggHub } from "./data/prosjekter/ai-faginnlegg-hub";
import { aiAssistertInnsiktsagent } from "./data/prosjekter/ai-assistert-innsiktsagent";
import { aiAssistertInnsiktsOgInnholdsagent } from "./data/prosjekter/ai-assistert-innsikts-og-innholdsagent";
import { prosjektoppgaveStrategiskImplementering } from "./data/prosjekter/prosjektoppgave-strategisk-implementering";
import { applyPscBrandingHtml, applyPscBrandingPlain, isPscProsjekt } from "./lib/psc-brand";

const prosjektKort: ProsjektType[] = [prosjektoppgaveStrategiskImplementering, pscPromoVideo, aiAssistertInnsiktsagent, aiAssistertInnsiktsOgInnholdsagent, predictiveSalesCoach, aiValueLabOslo, skoyenasenTannklinikk, aiArkitekturBeslutningsstotte].sort(
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

export default function Prosjekter({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-6 tracking-tighter leading-tight text-white uppercase italic break-words [overflow-wrap:anywhere]">
            {tr("prosjekter.title.1")} <br />
            <span className="text-indigo-500">{tr("prosjekter.title.2")}</span>
          </h1>
          <div className="max-w-3xl min-w-0">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-4 break-words">
              {tr("prosjekter.intro.1")}
            </p>
            <p className="text-lg md:text-xl text-slate-400 italic leading-relaxed font-light break-words">
              {tr("prosjekter.intro.2")}
            </p>
          </div>
        </div>
      </div>

      {/* PROSJEKTLISTE – smalere bilde, tekst innenfor ramme */}
      <div className="mt-8 space-y-8 min-w-0">
        {alleProsjekter.map((prosjekt) => {
          const bildeHintKort = getProsjektBildeHint(prosjekt, lang);
          const erPsc = isPscProsjekt(prosjekt.id);
          const pscQr = prosjekt.id === "predictive-sales-coach-2026" ? prosjekt.ekstraBilder?.[0] : undefined;
          return (
          <article
            key={prosjekt.id}
            className={
              erPsc
                ? "bg-[#0B1120] rounded-2xl border border-slate-800/80 overflow-hidden shadow-xl min-w-0"
                : "bg-slate-900/40 rounded-2xl border border-indigo-500/20 overflow-hidden shadow-xl min-w-0"
            }
          >
            <div className="flex flex-col md:flex-row gap-0 min-w-0">
              {/* Smalere bildekolonne – predictive / predictive-sales-coach */}
              <div className="w-full md:w-[220px] lg:w-[260px] shrink-0 flex flex-col items-center gap-2 self-start">
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
                  <div className="w-full flex flex-col gap-2 px-1">
                    {prosjekt.bilderUnderHovedbilde.map((img) => (
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
              <div className="flex-1 min-w-0 p-6 md:p-8 flex flex-col justify-center overflow-hidden">
                {prosjekt.visningsDato?.trim() && (
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest font-bold block mb-2 ${
                      erPsc ? "text-slate-400" : "text-indigo-400"
                    }`}
                  >
                  {prosjekt.visningsDato}
                  </span>
                )}
                {erPsc ? (
                  <h2
                    className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight italic mb-4 break-words [overflow-wrap:anywhere]"
                    dangerouslySetInnerHTML={{ __html: applyPscBrandingPlain(prosjekt.tittel[lang]) }}
                  />
                ) : (
                  <h2 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight italic mb-4 break-words [overflow-wrap:anywhere]">
                    {prosjekt.tittel[lang]}
                  </h2>
                )}
                {erPsc ? (
                  <p
                    className="text-slate-300 text-sm leading-relaxed mb-4 font-light break-words"
                    dangerouslySetInnerHTML={{ __html: applyPscBrandingPlain(prosjekt.teaser[lang]) }}
                  />
                ) : (
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light break-words">
                    {prosjekt.teaser[lang]}
                  </p>
                )}
                <div className={erPsc ? "md:flex md:items-start md:gap-6" : ""}>
                  <div
                    className={
                      erPsc
                        ? `text-slate-200 text-base leading-relaxed space-y-3 font-light break-words overflow-hidden flex-1
                    [&_a]:text-[#E30613] [&_a]:underline [&_a]:underline-offset-2
                    [&_a]:decoration-[#E30613]/70 [&_a]:hover:text-white
                    [&_a]:transition-colors
                    [&_a.link-subtle]:text-slate-200 [&_a.link-subtle]:no-underline [&_a.link-subtle]:hover:text-[#E30613] [&_a.link-subtle]:hover:underline
                    [&_strong]:font-bold [&_strong]:text-white [&_em]:italic`
                        : `text-slate-300 text-base leading-relaxed space-y-3 font-light break-words overflow-hidden flex-1
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
                          __html: erPsc ? applyPscBrandingHtml(avsnitt.trim()) : avsnitt.trim(),
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
                  {pscQr && (
                    <div className="mt-5 md:mt-0 w-full max-w-[230px] md:w-[230px] shrink-0 mx-auto md:mx-0">
                      <button
                        type="button"
                        onClick={() => setActiveImage({ src: pscQr.src, alt: pscQr.alt[lang] })}
                        className="relative w-full h-[205px] rounded-lg overflow-hidden bg-slate-900/40 cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                        aria-label={pscQr.alt[lang]}
                      >
                        <Image
                          src={pscQr.src}
                          alt={pscQr.alt[lang]}
                          fill
                          className="object-contain object-center"
                          sizes="230px"
                        />
                      </button>
                    </div>
                  )}
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

