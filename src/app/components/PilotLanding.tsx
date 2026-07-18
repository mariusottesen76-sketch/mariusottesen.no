"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LanguageProvider, LanguageToggle, useLanguage } from "../LanguageContext";
import { getPilotSide, t, type PilotSide } from "../data/pilot-pages";
import {
  blockTitleClass,
  cardTitleClass,
  pageTitleClass,
  sectionHeadingClass,
  sectionHeadingWrapClass,
  sectionTitleClass,
} from "../lib/typography";
import NumberedStepGrid from "./strategic-platform/NumberedStepGrid";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const bodyTextClass = "text-base leading-relaxed font-light w-full min-w-0 max-w-none";

function TilbakeKnapp() {
  const { lang } = useLanguage();
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined" && window.history.length > 1) {
          router.back();
        } else {
          router.push("/prosjekter");
        }
      }}
      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-300 transition-colors mb-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 rounded-sm"
      aria-label={lang === "no" ? "Gå tilbake til forrige side" : "Go back to previous page"}
    >
      <ChevronLeft size={14} aria-hidden="true" />
      {lang === "no" ? "Tilbake" : "Back"}
    </button>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className={sectionHeadingWrapClass}>
      <h2 id={id} className={sectionHeadingClass}>
        {children}
      </h2>
    </div>
  );
}

function PilotCtaer({
  side,
  variant = "default",
}: {
  side: PilotSide;
  variant?: "default" | "footer";
}) {
  const { lang } = useLanguage();
  const note = variant === "footer" ? side.consulting.tilgangNote : side.hero.tilgangNote;
  const primaer = variant === "footer" ? side.consulting.primaerCta : side.hero.primaerCta;
  const sekundaer = variant === "footer" ? side.consulting.sekundaerCta : side.hero.sekundaerCta;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3 items-center">
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-black uppercase text-xs hover:bg-indigo-500 hover:text-white transition-all italic shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          {t(primaer, lang)}
          <ChevronRight size={16} aria-hidden="true" />
        </Link>
        <a
          href={side.pilotAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t(sekundaer, lang)} (${lang === "no" ? "tilgangsstyrt løsning, ny fane" : "access-controlled solution, new tab"})`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black uppercase text-xs border border-slate-600/60 text-slate-400 hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all italic focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          {t(sekundaer, lang)}
        </a>
      </div>
      <p className="text-xs text-slate-500 font-light">{t(note, lang)}</p>
    </div>
  );
}

function PunktListe({ punkter }: { punkter: { no: string; en: string }[] }) {
  const { lang } = useLanguage();
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {punkter.map((punkt) => (
        <li key={punkt.no} className="flex items-start gap-2 text-sm text-slate-400 font-light leading-relaxed">
          <ChevronRight size={14} className="text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{t(punkt, lang)}</span>
        </li>
      ))}
    </ul>
  );
}

function PilotLandingInner({ slug }: { slug: PilotSide["slug"] }) {
  const { lang } = useLanguage();
  const side = getPilotSide(slug);
  const accentClass = slug === "flowsignal" ? "text-[#CDB47A]" : "text-indigo-500";

  return (
    <div className="py-4 text-left w-full overflow-x-hidden min-w-0">
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
          <Link href="/consulting" className={linkClass}>
            Consulting
          </Link>
          <Link href="/prosjekter" className={linkClass}>
            {lang === "no" ? "Prosjekter" : "Projects"}
          </Link>
          <Link href="/kontakt" className={linkClass}>
            {lang === "no" ? "Kontakt" : "Contact"}
          </Link>
          <LanguageToggle />
        </div>
      </nav>

      <TilbakeKnapp />

      <header className="border-b border-white/10 pb-8 mb-10">
        <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-3">
          {lang === "no" ? "Porteføljeprosjekt" : "Portfolio project"}
        </p>
        <h1 className={`${pageTitleClass} mb-3 flex flex-wrap items-baseline gap-x-2`}>
          <span>{t(side.hero.tittel, lang)}</span>
          <span className={accentClass}>{t(side.hero.tittelAccent, lang)}</span>
        </h1>
        <p className={`text-lg md:text-xl text-slate-300 mb-4 ${bodyTextClass}`}>{t(side.hero.undertittel, lang)}</p>
        <p className={`text-slate-400 mb-6 ${bodyTextClass}`}>{t(side.hero.tekst, lang)}</p>
        <PilotCtaer side={side} />
      </header>

      <section aria-labelledby="pilot-hvem" className="mb-10">
        <SectionHeading id="pilot-hvem">{t(side.hvem.tittel, lang)}</SectionHeading>
        <p className={`text-slate-400 mb-4 ${bodyTextClass}`}>{t(side.hvem.tekst, lang)}</p>
        <PunktListe punkter={side.hvem.punkter} />
      </section>

      <section aria-labelledby="pilot-problem" className="mb-10">
        <SectionHeading id="pilot-problem">{t(side.problem.tittel, lang)}</SectionHeading>
        <p className={`text-slate-400 mb-4 ${bodyTextClass}`}>{t(side.problem.tekst, lang)}</p>
        <PunktListe punkter={side.problem.punkter} />
      </section>

      <section aria-labelledby="pilot-gjennomforing" className="mb-10">
        <SectionHeading id="pilot-gjennomforing">{t(side.gjennomforing.tittel, lang)}</SectionHeading>
        <NumberedStepGrid steps={side.gjennomforing.steg} lang={lang} />
      </section>

      <section aria-labelledby="pilot-utvikler" className="mb-10">
        <SectionHeading id="pilot-utvikler">{t(side.utvikler.tittel, lang)}</SectionHeading>
        <PunktListe punkter={side.utvikler.punkter} />
      </section>

      <section aria-labelledby="pilot-format" className="mb-10">
        <SectionHeading id="pilot-format">{t(side.format.tittel, lang)}</SectionHeading>
        <p className={`text-slate-400 mb-4 ${bodyTextClass}`}>{t(side.format.tekst, lang)}</p>
        <PunktListe punkter={side.format.punkter} />
      </section>

      <section aria-labelledby="pilot-utbytte" className="mb-10">
        <SectionHeading id="pilot-utbytte">{t(side.utbytte.tittel, lang)}</SectionHeading>
        <PunktListe punkter={side.utbytte.punkter} />
      </section>

      {side.avgrensning && (
        <section aria-labelledby="pilot-avgrensning" className="mb-10 p-6 bg-slate-900/40 rounded-2xl border border-slate-800">
          <h2 id="pilot-avgrensning" className={`${blockTitleClass} mb-3`}>
            {t(side.avgrensning.tittel, lang)}
          </h2>
          <p className={`text-slate-400 text-sm ${bodyTextClass}`}>{t(side.avgrensning.tekst, lang)}</p>
        </section>
      )}

      <section
        aria-labelledby="pilot-consulting"
        className="p-8 bg-slate-900/40 rounded-2xl border border-indigo-500/20 shadow-xl space-y-4"
      >
        <h2 id="pilot-consulting" className={sectionTitleClass}>
          {t(side.consulting.tittel, lang)}
        </h2>
        <p className={`text-slate-300 ${bodyTextClass}`}>{t(side.consulting.tekst, lang)}</p>
        <p className="text-sm">
          <Link href="/consulting" className={linkClass}>
            {lang === "no" ? "Se kompetanseområder og portefølje" : "See competence areas and portfolio"}
          </Link>
        </p>
        <PilotCtaer side={side} variant="footer" />
      </section>

      <footer className="mt-10 pt-6 border-t border-slate-800/40 text-center">
        <p className="text-slate-600 text-[11px] font-bold tracking-wider">
          &copy; {new Date().getFullYear()} Marius Ottesen Consulting
        </p>
      </footer>
    </div>
  );
}

export default function PilotLanding({ slug }: { slug: PilotSide["slug"] }) {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-slate-950 text-slate-200 px-16 sm:px-24 md:px-32 lg:px-40 xl:px-48 2xl:px-56 py-4 md:py-8 relative overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <PilotLandingInner slug={slug} />
        </div>
      </main>
    </LanguageProvider>
  );
}
