"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProfilData } from "./data/profil";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import {
  blockTitleClass,
  cardSubtitleClass,
  pageEyebrowClass,
  pageTitleClass,
  sectionTitleClass,
} from "./lib/typography";

const introClass = "text-lg text-slate-300 leading-relaxed";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const secondaryLinkClass =
  "text-slate-500 underline underline-offset-2 decoration-slate-600/70 hover:text-slate-300 transition-colors text-xs";

const cardClass =
  "p-5 md:p-6 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl";

const cardClassSubtle = "p-4 md:p-5 bg-slate-900/20 border border-slate-800/80 rounded-xl";

const chipClass =
  "px-3 py-1.5 rounded-full border border-slate-700/60 bg-slate-900/30 text-sm text-slate-400 italic";

function NavLink({
  href,
  tab,
  onNavigate,
  children,
  ariaLabel,
  className = linkClass,
}: {
  href: string;
  tab?: string;
  onNavigate?: (tab: string) => void;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
}) {
  if (onNavigate && tab) {
    return (
      <button
        type="button"
        onClick={() => onNavigate(tab)}
        className={`${className} bg-transparent border-0 p-0 cursor-pointer font-medium`}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }
  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

export default function Profil({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const d = getProfilData(lang);

  const videreGroups = [
    {
      title: tr("profil.videre.groupA.title"),
      intro: tr("profil.videre.groupA.intro"),
      links: [
        { href: "/cv", label: tr("profil.videre.groupA.cv"), aria: "Gå til CV og lederprofil" },
        { href: "/erfaring", label: tr("profil.videre.groupA.erfaring"), aria: "Gå til erfaring" },
        { href: "/resultater", label: tr("profil.videre.groupA.resultater"), aria: "Gå til dokumenterte resultater" },
        { href: "/referanser", label: tr("profil.videre.groupA.referanser"), aria: "Gå til referanser" },
      ],
    },
    {
      title: tr("profil.videre.groupB.title"),
      intro: tr("profil.videre.groupB.intro"),
      links: [
        { href: "/consulting", label: tr("profil.videre.groupB.consulting"), aria: "Gå til consulting" },
        { href: "/prosjekter", label: tr("profil.videre.groupB.prosjekter"), aria: "Gå til AI-prosjekter" },
        { href: "/kontakt", label: tr("profil.videre.groupB.kontakt"), aria: "Gå til kontakt" },
      ],
    },
    {
      title: tr("profil.videre.groupC.title"),
      intro: tr("profil.videre.groupC.intro"),
      links: [
        { href: "/faginnlegg", label: tr("profil.videre.groupC.faginnlegg"), aria: "Gå til faginnlegg" },
        { href: "/prosjekter", label: tr("profil.videre.groupC.prosjekter"), aria: "Gå til AI-prosjekter" },
        { href: "/kontakt", label: tr("profil.videre.groupC.kontakt"), aria: "Gå til kontakt" },
      ],
    },
  ];

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

        <div className="flex-1 min-w-0 space-y-8">
          <header className="space-y-3">
            <h1 className={pageTitleClass}>
              Marius <span className="text-indigo-500">Ottesen</span>
            </h1>
            <p className={pageEyebrowClass}>
              {tr("profil.tittel")}
            </p>
            <p className="text-xl md:text-2xl text-white font-bold leading-snug tracking-tight">
              {d.ingress}
            </p>
          </header>

          <p className={introClass + " whitespace-pre-line"}>{d.intro}</p>

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
                  className="flex items-start gap-2 px-3 py-2.5 bg-slate-900/40 rounded-xl border border-slate-800 text-sm text-slate-300 leading-snug"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" aria-hidden="true" />
                  {punkt}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="profil-verdi-heading" className="space-y-3">
            <h2 id="profil-verdi-heading" className={sectionTitleClass}>
              {d.verdiSituasjoner.title}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">{d.verdiSituasjoner.ingress}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {d.verdiSituasjoner.kort.map((kort) => (
                <div
                  key={kort.title}
                  className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/30 space-y-2"
                >
                  <h3 className={cardSubtitleClass}>{kort.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{kort.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="profil-lederprofil-heading" className="space-y-3">
            <h2 id="profil-lederprofil-heading" className={sectionTitleClass}>
              {tr("profil.lederprofil.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {d.lederprofil.map((kort) => (
                <div
                  key={kort.title}
                  className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/30 space-y-2"
                >
                  <h3 className={cardSubtitleClass}>{kort.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{kort.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="profil-kompetanse-heading" className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-3">
                <h2 id="profil-kompetanse-heading" className={sectionTitleClass}>
                  {tr("profil.kompetanse.title")}
                </h2>
                <p className="text-[10px] text-slate-500 italic">{tr("profil.kompetanse.sub")}</p>
                <ul className="flex flex-wrap gap-2">
                  {d.kompetanse.map((item) => (
                    <li key={item} className={`${chipClass} max-w-full text-xs sm:text-sm leading-snug`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className={sectionTitleClass}>{tr("profil.styrker.title")}</h2>
                <p className="text-[10px] text-slate-500 italic">{tr("profil.styrker.sub")}</p>
                <ul className="flex flex-col items-start gap-2">
                  {d.styrker.map((item) => (
                    <li key={item} className={`${chipClass} w-fit max-w-full text-xs sm:text-sm leading-snug`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="profil-ai-heading" className="space-y-3">
            <h2 id="profil-ai-heading" className={sectionTitleClass}>
              {tr("profil.ai.title")}
            </h2>
            <div className={`${cardClassSubtle} space-y-2.5`}>
              <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">{d.aiSeksjon}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm pt-1">
              <Link href="/prosjekter" className={linkClass} aria-label="Gå til AI-prosjekter og demonstratorer">
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
            </div>
          </section>

          <section aria-labelledby="profil-utdanning-heading" className="space-y-3">
            <h2 id="profil-utdanning-heading" className={sectionTitleClass}>
              {tr("profil.utdanning.title")}
            </h2>
            <div
              className={`${cardClassSubtle} text-slate-400 text-sm leading-relaxed whitespace-pre-line`}
              dangerouslySetInnerHTML={{
                __html: d.utdanning.replace(
                  /\*(.*?)\*/g,
                  '<em class="text-indigo-400 italic">$1</em>'
                ),
              }}
            />
          </section>

          <section aria-labelledby="profil-consulting-heading" className="space-y-3">
            <h2 id="profil-consulting-heading" className="sr-only">
              Marius Ottesen Consulting
            </h2>
            <div className={`${cardClassSubtle} space-y-3`}>
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-700/50 p-1 shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/moc.logo.png"
                  alt="MOC"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className={blockTitleClass}>
                  Marius Ottesen Consulting
                </h2>
                <p className="text-slate-500 text-[10px] font-bold tracking-widest mt-0.5">
                  Org. nr. 937 102 801
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{tr("profil.selskap.desc")}</p>
            <NavLink
              href="/consulting"
              tab="Consulting"
              onNavigate={onNavigate}
              ariaLabel="Gå til kompetanseområder og portefølje"
            >
              <span className="inline-flex items-center gap-2 text-indigo-400 font-bold text-sm hover:text-white transition-all group/link not-italic no-underline">
                {tr("profil.cta.tjenester")}
                <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
              </span>
            </NavLink>
            </div>
          </section>

          <section aria-labelledby="profil-videre-heading" className="space-y-4">
            <h2 id="profil-videre-heading" className={sectionTitleClass}>
              {tr("profil.videre.title")}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">{tr("profil.videre.intro")}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {videreGroups.map((group) => (
                <div
                  key={group.title}
                  className="p-4 md:p-5 rounded-xl border border-slate-800/80 bg-slate-900/30 space-y-3"
                >
                  <h3 className={cardSubtitleClass}>{group.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{group.intro}</p>
                  <ul className="space-y-2">
                    {group.links.map((item) => (
                      <li key={`${group.title}-${item.href}`}>
                        <Link
                          href={item.href}
                          className={`${linkClass} text-sm font-medium no-underline hover:underline`}
                          aria-label={item.aria}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
