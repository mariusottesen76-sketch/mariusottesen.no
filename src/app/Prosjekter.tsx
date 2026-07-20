"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage, type Lang } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import { pageIntroClass, pageTitleClass, sectionTitleClass } from "./lib/typography";
import { getProsjektHurtigoversikt, resolveProsjektPageHash } from "./data/prosjekter-hurtigoversikt";
import {
  getLegacyProsjektById,
  PROSJEKT_PORTFOLIO_KATEGORIER,
  getProsjektPortfolioKategoriMetadataLabel,
} from "./data/prosjekter-portfolio";
import { type ProsjektType } from "./data/prosjekter/predictive-sales-coach";
import { isPscProsjekt } from "./lib/psc-brand";
import { getProjectV2ById } from "./data/projects-v2/registry";
import ProjectOverviewV2 from "./components/project-v2/ProjectOverviewV2";
import ProjectCategorySection from "./components/project-v2/ProjectCategorySection";
import ProjectImageModal from "./components/project-v2/ProjectImageModal";
import ProjectVideoModal from "./components/project-v2/ProjectVideoModal";

function getProsjektBildeHint(prosjekt: ProsjektType, lang: Lang) {
  const custom = prosjekt.bildeHint?.[lang];
  if (custom) return custom;
  return lang === "no"
    ? `Klikk på bildet for å se ${prosjekt.tittel.no} i større format.`
    : `Click the image to view ${prosjekt.tittel.en} in a larger format.`;
}

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const prosjektIntroLinkClass =
  "text-indigo-300 text-base font-medium underline underline-offset-2 decoration-indigo-500/60 hover:text-indigo-100 hover:decoration-indigo-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 rounded-sm";

const kategoriNavLinkClass =
  "text-indigo-400 underline-offset-2 decoration-indigo-500/60 hover:text-indigo-200 hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 rounded-sm";

type ActiveVideo = {
  src: string;
  poster: string;
  title: string;
};

export default function Prosjekter({ onNavigate: _onNavigate }: { onNavigate?: (tab: string) => void }) {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const hurtigoversikt = getProsjektHurtigoversikt(lang);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null);

  const closeVideo = useCallback(() => setActiveVideo(null), []);

  useEffect(() => {
    const scrollTilProsjekt = () => {
      const rawHash = window.location.hash.slice(1);
      if (!rawHash) return;
      const hash = resolveProsjektPageHash(rawHash);
      if (hash !== rawHash) {
        window.history.replaceState(null, "", `#${hash}`);
      }
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
      <div className="flex flex-col md:flex-row gap-6 items-start border-b border-slate-800/40 pb-6 min-w-0">
        <div className="w-full md:w-[400px] shrink-0 min-w-0">
          <Image
            src="/images/etikk.jfif"
            alt="AI-prosjekter, apper og virksomhetsnære AI-modeller utviklet av Marius Ottesen"
            width={400}
            height={500}
            priority
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
              key={kategori.anchorId}
              className="p-4 md:p-5 bg-slate-900/40 rounded-xl border border-slate-800 space-y-3 min-w-0"
            >
              <h3 className="text-base font-black text-indigo-400 italic tracking-tight">
                <a href={`#${kategori.anchorId}`} className={kategoriNavLinkClass}>
                  {kategori.title[lang]}
                </a>
              </h3>
              {kategori.description && (
                <p className="text-sm text-slate-400 leading-snug font-light">{kategori.description[lang]}</p>
              )}
              <ul className="space-y-3">
                {kategori.lenker.map((lenke) => (
                  <li key={lenke.id} className="space-y-1">
                    <a href={`#${lenke.id}`} className={prosjektIntroLinkClass}>
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

      <section
        id="prosjekter-detalj"
        aria-labelledby="prosjekter-kort-heading"
        className="scroll-mt-24 mt-8 pt-6 border-t border-slate-800/60 min-w-0"
      >
        <h2 id="prosjekter-kort-heading" className={`${sectionTitleClass} mb-2`}>
          {tr("prosjekter.kort.seksjon.title")}
        </h2>
        <p className="text-sm text-slate-400 leading-snug mb-7 w-full min-w-0 max-w-none">
          {tr("prosjekter.kort.seksjon.intro")}
        </p>

        <div className="min-w-0">
          {PROSJEKT_PORTFOLIO_KATEGORIER.map((kategori, kategoriIndex) => {
            const headingId = `${kategori.anchorId}-heading`;
            const metadataLabel = getProsjektPortfolioKategoriMetadataLabel(kategori, lang);

            return (
              <ProjectCategorySection
                key={kategori.anchorId}
                id={kategori.anchorId}
                headingId={headingId}
                title={kategori.title[lang]}
                description={kategori.listDescription[lang]}
                isFirst={kategoriIndex === 0}
              >
                {kategori.projects.map((entry) => {
                  const projectV2 = getProjectV2ById(entry.id);
                  const legacyProsjekt = getLegacyProsjektById(entry.id);
                  if (!projectV2 || !legacyProsjekt) return null;

                  const bildeHintKort = getProsjektBildeHint(legacyProsjekt, lang);
                  const erPsc = isPscProsjekt(entry.id);

                  return (
                    <article
                      key={entry.id}
                      id={entry.id}
                      className={`scroll-mt-24 ${
                        erPsc
                          ? "bg-[#0B1120] rounded-2xl border border-slate-800/80 overflow-hidden shadow-xl min-w-0"
                          : "bg-slate-900/40 rounded-2xl border border-indigo-500/20 overflow-hidden shadow-xl min-w-0"
                      }`}
                    >
                      <ProjectOverviewV2
                        project={projectV2}
                        lang={lang}
                        onImageClick={(src, alt) => setActiveImage({ src, alt })}
                        onOpenVideo={(payload) => setActiveVideo(payload)}
                        bildeHint={bildeHintKort}
                        titleHeadingLevel={3}
                        metadataCategoryLabel={metadataLabel}
                      />
                    </article>
                  );
                })}
              </ProjectCategorySection>
            );
          })}
        </div>
      </section>

      {activeImage && (
        <ProjectImageModal
          src={activeImage.src}
          alt={activeImage.alt}
          lang={lang}
          onClose={() => setActiveImage(null)}
        />
      )}

      {activeVideo && (
        <ProjectVideoModal
          src={activeVideo.src}
          poster={activeVideo.poster}
          title={activeVideo.title}
          lang={lang}
          onClose={closeVideo}
        />
      )}
    </div>
  );
}
