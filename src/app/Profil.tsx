"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Zap, Star, Brain, Globe, Target, ArrowRight } from "lucide-react";
import { getProfilData } from "./data/profil";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";

const richTextClass =
  "text-lg text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed";

const boxTextClass = "text-slate-400 text-sm font-medium italic leading-relaxed whitespace-pre-line";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const sectionTitleClass = "text-white font-black flex items-center gap-3 text-lg italic";

function NavLink({
  href,
  tab,
  onNavigate,
  children,
  ariaLabel,
}: {
  href: string;
  tab?: string;
  onNavigate?: (tab: string) => void;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  if (onNavigate && tab) {
    return (
      <button
        type="button"
        onClick={() => onNavigate(tab)}
        className={`${linkClass} bg-transparent border-0 p-0 cursor-pointer font-medium`}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }
  return (
    <Link href={href} className={linkClass} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

export default function Profil({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const d = getProfilData(lang);

  return (
    <div className="py-4 relative overflow-x-hidden w-full">
      <div className="absolute -right-4 -top-12 w-[300px] md:w-[450px] h-[300px] md:h-[450px] opacity-[0.25] pointer-events-none select-none blur-[0.5px]">
        <Image
          src="/images/fingerprint.png.png"
          alt=""
          width={450}
          height={450}
          className="w-full h-full object-contain"
          aria-hidden="true"
          priority={false}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start text-left relative z-10">
        <div className="w-full md:w-60 shrink-0">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
            <Image
              src="/images/profil.jpg"
              alt="Marius Ottesen — Kommersiell leder"
              width={240}
              height={320}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-6">
          <header className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter uppercase italic break-words max-w-full [overflow-wrap:anywhere]">
              Marius <span className="text-indigo-500">Ottesen</span>
            </h1>
            <p className="text-lg text-indigo-400 font-black uppercase tracking-widest italic">
              {tr("profil.tittel")}
            </p>
            <p className="text-xl md:text-2xl text-white font-bold leading-snug tracking-tight">
              {d.ingress}
            </p>
          </header>

          <div className={richTextClass}>
            <p>{d.intro}</p>
            <p className="mt-4 text-base text-slate-400 not-italic">{d.aiKort}</p>
          </div>

          <section aria-labelledby="profil-roller-heading" className="space-y-3">
            <h2 id="profil-roller-heading" className={sectionTitleClass}>
              {tr("profil.roller.title")}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {d.roller.map((rolle) => (
                <li
                  key={rolle}
                  className="px-3 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-sm text-indigo-200"
                >
                  {rolle}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="profil-proof-heading" className="space-y-3">
            <h2 id="profil-proof-heading" className={sectionTitleClass}>
              {tr("profil.proof.title")}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {d.proofPoints.map((punkt) => (
                <li
                  key={punkt}
                  className="flex items-start gap-2 p-3 bg-slate-900/40 rounded-xl border border-slate-800 text-sm text-slate-300 leading-snug"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" aria-hidden="true" />
                  {punkt}
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="profil-ai-heading"
            className="p-6 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-3"
          >
            <h2 id="profil-ai-heading" className={sectionTitleClass}>
              <Brain className="text-indigo-500 shrink-0" size={24} aria-hidden="true" />
              {tr("profil.ai.title")}
            </h2>
            <p className={boxTextClass}>{d.aiSeksjon}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm not-italic">
              <Link href="/prosjekter" className={linkClass} aria-label="Gå til AI-prosjekter">
                {tr("profil.ai.link.prosjekter")}
              </Link>
              <NavLink
                href="/consulting"
                tab="Consulting"
                onNavigate={onNavigate}
                ariaLabel="Gå til consulting"
              >
                {tr("profil.ai.link.consulting")}
              </NavLink>
              <NavLink
                href="/faginnlegg"
                tab="Faginnlegg"
                onNavigate={onNavigate}
                ariaLabel="Gå til faginnlegg"
              >
                {tr("profil.ai.link.faginnlegg")}
              </NavLink>
            </div>
          </section>

          <div className="grid gap-5">
            <div className="p-6 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-3">
              <h2 className={sectionTitleClass}>
                <ShieldCheck className="text-indigo-500 shrink-0" size={24} aria-hidden="true" />
                {tr("profil.operativ.title")}
              </h2>
              <div className={boxTextClass}>{d.lederskap}</div>
            </div>

            <div className="p-6 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-3">
              <h2 className={sectionTitleClass}>
                <Globe className="text-indigo-500 shrink-0" size={24} aria-hidden="true" />
                {tr("profil.bransje.title")}
              </h2>
              <div className={boxTextClass}>{d.bransje}</div>
            </div>

            <div className="p-6 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-3">
              <h2 className={sectionTitleClass}>
                <Zap className="text-indigo-500 shrink-0" size={24} aria-hidden="true" />
                {tr("profil.utdanning.title")}
              </h2>
              <div
                className={boxTextClass}
                dangerouslySetInnerHTML={{
                  __html: d.utdanning.replace(
                    /\*(.*?)\*/g,
                    '<em class="text-indigo-400 italic">$1</em>'
                  ),
                }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-6 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-3">
                <h2 className={sectionTitleClass}>
                  <Target className="text-indigo-500 shrink-0" size={24} aria-hidden="true" />
                  {tr("profil.kompetanse.title")}
                </h2>
                <ul className="space-y-2 text-left">
                  {d.kompetanse.map((item) => (
                    <li key={item} className="text-slate-400 text-sm font-medium italic flex items-start gap-2">
                      <span className="text-indigo-500 text-lg leading-none" aria-hidden="true">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-3">
                <h2 className={sectionTitleClass}>
                  <Star className="text-indigo-500 shrink-0" size={24} aria-hidden="true" />
                  {tr("profil.styrker.title")}
                </h2>
                <p className="text-[10px] text-slate-500 italic mb-2">{tr("profil.styrker.sub")}</p>
                <ul className="space-y-2 text-left">
                  {d.styrker.map((item) => (
                    <li key={item} className="text-slate-400 text-sm font-medium italic flex items-start gap-2">
                      <span className="text-indigo-500 text-lg leading-none" aria-hidden="true">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-900/25 backdrop-blur-sm border border-indigo-500/20 rounded-2xl shadow-xl space-y-3">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-700/50 p-1 shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/moc.logo.png"
                  alt="MOC"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-white font-black text-xl italic tracking-tight">
                  Marius Ottesen Consulting
                </h2>
                <p className="text-slate-500 text-[11px] font-bold tracking-widest mt-1">
                  Org. nr. 937 102 801
                </p>
              </div>
            </div>
            <p className="text-slate-300 text-sm font-medium italic leading-relaxed">
              {tr("profil.selskap.desc")}
            </p>
            <NavLink
              href="/consulting"
              tab="Consulting"
              onNavigate={onNavigate}
              ariaLabel="Gå til fullstendig tjenestetilbud"
            >
              <span className="inline-flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-widest hover:text-white transition-all group/link not-italic no-underline">
                {tr("profil.cta.tjenester")}
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </span>
            </NavLink>
          </div>

          <section
            aria-labelledby="profil-videre-heading"
            className="p-6 bg-slate-900/40 rounded-2xl border border-indigo-500/20 shadow-xl space-y-3"
          >
            <h2 id="profil-videre-heading" className={sectionTitleClass}>
              {tr("profil.videre.title")}
            </h2>
            <p className="text-sm text-slate-400 italic">{tr("profil.videre.text")}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm not-italic">
              <Link href="/resultater" className={linkClass} aria-label="Gå til resultater">
                {tr("profil.videre.resultater")}
              </Link>
              <Link href="/erfaring" className={linkClass} aria-label="Gå til erfaring">
                {tr("profil.videre.erfaring")}
              </Link>
              <Link href="/prosjekter" className={linkClass} aria-label="Gå til AI-prosjekter">
                {tr("profil.videre.prosjekter")}
              </Link>
              <NavLink href="/consulting" tab="Consulting" onNavigate={onNavigate} ariaLabel="Gå til consulting">
                {tr("profil.videre.consulting")}
              </NavLink>
              <Link href="/cv" className={linkClass} aria-label="Gå til CV og åpen søknad">
                {tr("profil.videre.cv")}
              </Link>
              <Link href="/kontakt" className={linkClass} aria-label="Gå til kontakt">
                {tr("profil.videre.kontakt")}
              </Link>
            </div>
          </section>

          <div className="pt-2 space-y-5">
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3">
                {tr("profil.logoer.erfaring")}
              </p>
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {[
                  { src: "/images/moc-avlang.png", alt: "Marius Ottesen Consulting", h: "max-h-[29px]", pad: "p-1" },
                  { src: "/images/Franzefoss.png", alt: "Franzefoss", h: "max-h-[26px]" },
                  { src: "/images/Norengros.png", alt: "Norengros", h: "max-h-[30px]" },
                  { src: "/images/Nilfisk.png", alt: "Nilfisk", h: "max-h-[42px]" },
                  { src: "/images/Pelagia.png", alt: "Pelagia", h: "max-h-[32px]" },
                  { src: "/images/Falck%20Nutec.png", alt: "Falck Nutec", h: "max-h-[42px]" },
                  { src: "/images/Assessit.png", alt: "Assessit", h: "max-h-[32px]" },
                  { src: "/images/Mundipharma.png", alt: "Mundipharma", h: "max-h-[26px]" },
                  { src: "/images/meddrop-logo.png", alt: "MedDrop", h: "max-h-[32px]" },
                ].map((logo) => (
                  <div
                    key={logo.alt}
                    className={`flex-1 min-w-[80px] h-[44px] flex items-center justify-center bg-white rounded-lg shrink-0 ${logo.pad ?? "p-1.5"}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={`${logo.alt} logo`}
                      width={100}
                      height={44}
                      className={`${logo.h} max-w-full w-auto h-auto object-contain`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3">
                {tr("profil.logoer.utdanning")}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { src: "/images/BI.png", alt: "BI Norwegian Business School" },
                  { src: "/images/UofU.png", alt: "University of Utah" },
                  { src: "/images/Uio.png", alt: "Universitetet i Oslo" },
                ].map((logo) => (
                  <div
                    key={logo.alt}
                    className="w-[120px] h-[48px] flex items-center justify-center bg-white rounded-lg p-2"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={`${logo.alt} logo`}
                      width={100}
                      height={28}
                      className="max-h-[28px] max-w-[100px] w-auto h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
