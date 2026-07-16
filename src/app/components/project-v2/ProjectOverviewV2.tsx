"use client";

import type { Lang } from "../../LanguageContext";
import type { ProjectV2Record } from "../../data/projects-v2/types";
import { buildProjectCta } from "../../data/projects-v2/cta";
import { t } from "../../data/projects-v2/registry";
import { blockTitleClass, prosjektTeaserClass } from "../../lib/typography";
import { formatProsjektPlain } from "../../lib/product-brand";
import ProjectOverviewImage from "./ProjectOverviewImage";
import ProjectInformationGrid from "./ProjectInformationGrid";
import ProjectCTAGroup from "./ProjectCTAGroup";

type ProjectOverviewV2Props = {
  project: ProjectV2Record;
  lang: Lang;
  onImageClick: (src: string, alt: string) => void;
  bildeHint: string;
};

export default function ProjectOverviewV2({ project, lang, onImageClick, bildeHint }: ProjectOverviewV2Props) {
  const cta = buildProjectCta(project);

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-start p-2.5 md:p-3 min-w-0">
      <ProjectOverviewImage
        src={project.overviewImage}
        alt={t(project.altText, lang)}
        bildeHint={bildeHint}
        onImageClick={onImageClick}
        imageFormat={project.overviewImageFormat}
        backgroundSrc={project.overviewImageBackground}
      />

      <div className="flex-1 min-w-0 flex flex-col justify-start overflow-hidden space-y-3">
        <span className="text-[10px] font-mono uppercase tracking-widest font-bold block leading-none text-indigo-400">
          {t(project.displayDate, lang)}
        </span>

        <div className="space-y-1">
          <h2
            className={`${blockTitleClass} text-xl md:text-2xl break-words [overflow-wrap:anywhere]`}
            dangerouslySetInnerHTML={{
              __html: formatProsjektPlain(t(project.title, lang), project.id),
            }}
          />
          <p className="text-sm text-indigo-300/90 font-medium italic">{t(project.subtitle, lang)}</p>
        </div>

        <p className={`${prosjektTeaserClass} text-base`}>{t(project.overviewIntroduction, lang)}</p>

        <ProjectInformationGrid
          overview={project.overview}
          lang={lang}
          editorialReviewRequired={project.editorialReviewRequired}
        />

        <ProjectCTAGroup lang={lang} config={cta} />
      </div>
    </div>
  );
}
