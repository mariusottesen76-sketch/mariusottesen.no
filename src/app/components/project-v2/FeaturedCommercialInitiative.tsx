"use client";

import Image from "next/image";
import type { Lang } from "../../LanguageContext";
import { ROW_SOLUTIONS_OVERVIEW_IMAGE } from "../../lib/row-solutions-brand";
import { PROJECT_PORTFOLIO_OVERVIEW_IMAGE } from "../../lib/project-v2-image";
import { getTranslation } from "../../data/translations";
import { sectionTitleClass } from "../../lib/typography";
import { getProjectV2ById } from "../../data/projects-v2/registry";
import { buildProjectCta } from "../../data/projects-v2/cta";
import ProjectCTAGroup from "./ProjectCTAGroup";
import ProjectInformationCard from "./ProjectInformationCard";
import translations from "../../data/translations";
import {
  ROW_FEATURED_BOX_KEYS,
  rowFeaturedBoxTranslationKey,
} from "../../data/row-featured-boxes";

export default function FeaturedCommercialInitiative({
  lang,
  onImageClick,
}: {
  lang: Lang;
  onImageClick?: (src: string, alt: string) => void;
}) {
  const tr = (key: string) => getTranslation(key, lang);
  const rowProject = getProjectV2ById("row-solutions-2026");
  const rowCta = rowProject ? buildProjectCta(rowProject) : null;
  const src = ROW_SOLUTIONS_OVERVIEW_IMAGE;
  const alt = tr("prosjekter.featured.row.imageAlt");
  const imgWidth = PROJECT_PORTFOLIO_OVERVIEW_IMAGE.desktopWidthPx;
  const imgHeight = PROJECT_PORTFOLIO_OVERVIEW_IMAGE.desktopHeightPx;

  return (
    <section
      id="kommersielle-initiativer"
      aria-labelledby="prosjekter-featured-commercial-heading"
      className="scroll-mt-24 mt-6 mb-2 min-w-0"
    >
      <h2 id="prosjekter-featured-commercial-heading" className={`${sectionTitleClass} mb-3`}>
        {tr("prosjekter.featured.commercial.heading")}
      </h2>
      <article className="bg-slate-900/50 rounded-2xl border border-indigo-500/30 shadow-xl min-w-0 p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
        <button
          type="button"
          onClick={() => onImageClick?.(src, alt)}
          className="w-full max-w-[220px] md:w-[190px] lg:w-[200px] shrink-0 self-center md:self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 rounded-lg border border-slate-700/60 bg-slate-900/60 overflow-hidden flex items-center justify-center"
          style={{
            aspectRatio: PROJECT_PORTFOLIO_OVERVIEW_IMAGE.aspectRatio,
            maxHeight: `${imgHeight}px`,
          }}
          aria-label={alt}
        >
          <Image
            src={src}
            alt={alt}
            width={imgWidth}
            height={imgHeight}
            className="w-full h-full object-contain"
            sizes="(max-width: 768px) 220px, 198px"
            priority
          />
        </button>
        <div className="flex-1 min-w-0 flex flex-col justify-start overflow-hidden">
          <h3 className="text-lg md:text-xl font-black text-slate-100 italic tracking-tight leading-snug">
            {tr("prosjekter.featured.row.title")}
          </h3>
          <p className="text-sm md:text-base text-indigo-300/90 font-medium italic leading-snug mt-2">
            {tr("prosjekter.featured.row.subtitle")}
          </p>
          <p className="text-sm md:text-base text-slate-300/95 leading-relaxed font-light mt-4 mb-4 w-full min-w-0 max-w-none">
            {tr("prosjekter.featured.row.intro")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-start min-w-0 mb-4">
            {ROW_FEATURED_BOX_KEYS.map((boxKey) => {
              const labelKey = rowFeaturedBoxTranslationKey(boxKey, "label");
              const bodyKey = rowFeaturedBoxTranslationKey(boxKey, "body");
              const label = translations[labelKey];
              const body = translations[bodyKey];
              if (!label || !body) return null;
              return (
                <ProjectInformationCard
                  key={boxKey}
                  label={label}
                  text={body}
                  lang={lang}
                  variant="portfolio"
                />
              );
            })}
          </div>
          {rowCta && (
            <div className="mt-3 min-w-0">
              <ProjectCTAGroup lang={lang} config={{ ...rowCta, tertiary: undefined, note: undefined }} />
            </div>
          )}
        </div>
      </article>
    </section>
  );
}