"use client";

import type { Lang } from "../../LanguageContext";
import type { ProjectV2Record } from "../../data/projects-v2/types";
import { buildProjectCta } from "../../data/projects-v2/cta";
import { t } from "../../data/projects-v2/registry";
import Link from "next/link";
import { ProjectOverviewMetadataRow } from "./ProjectDateMetadata";
import { blockTitleClass, prosjektTeaserClass } from "../../lib/typography";
import { formatProsjektPlain } from "../../lib/product-brand";
import ProjectOverviewImage from "./ProjectOverviewImage";
import ProjectInformationGrid from "./ProjectInformationGrid";
import ProjectCTAGroup from "./ProjectCTAGroup";

const fagPerspektivLinkClass =
  "text-indigo-300 text-sm underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

type ProjectOverviewV2Props = {
  project: ProjectV2Record;
  lang: Lang;
  onImageClick: (src: string, alt: string) => void;
  onOpenVideo?: (payload: { src: string; poster: string; title: string }) => void;
  bildeHint: string;
  /** Semantisk nivå for prosjekttittel — H3 når kortet ligger under kategori-H2. */
  titleHeadingLevel?: 2 | 3;
  /** Kort kategori-etikett for metadatarekken (kun på /prosjekter). */
  metadataCategoryLabel?: string;
};

export default function ProjectOverviewV2({
  project,
  lang,
  onImageClick,
  onOpenVideo,
  bildeHint,
  titleHeadingLevel = 2,
  metadataCategoryLabel,
}: ProjectOverviewV2Props) {
  const cta = buildProjectCta(project);
  const title = t(project.title, lang);
  const TitleTag = titleHeadingLevel === 3 ? "h3" : "h2";
  const metadataStatus = project.maturityLevel
    ? t(project.maturityLevel, lang)
    : t(project.statusLabel, lang);
  const subtitle = t(project.subtitle, lang).trim();
  const intro = t(project.overviewIntroduction, lang).trim();
  const showSubtitle =
    subtitle.length > 0 && subtitle !== metadataStatus && subtitle !== intro;

  const handleImageClick = () => {
    if (project.playbackVideo && onOpenVideo) {
      onOpenVideo({
        src: project.playbackVideo.src,
        poster: project.playbackVideo.poster,
        title,
      });
      return;
    }
    onImageClick(project.overviewImage, t(project.altText, lang));
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-start p-2.5 md:p-3 min-w-0">
      <ProjectOverviewImage
        src={project.overviewImage}
        alt={t(project.altText, lang)}
        bildeHint={bildeHint}
        onImageClick={handleImageClick}
        imageFormat={project.overviewImageFormat}
        backgroundSrc={project.overviewImageBackground}
        empty={project.overviewImageMissing}
      />

      <div className="flex-1 min-w-0 flex flex-col justify-start overflow-hidden space-y-3">
        {metadataCategoryLabel ? (
          <ProjectOverviewMetadataRow
            project={project}
            categoryLabel={metadataCategoryLabel}
            lang={lang}
          />
        ) : (
          <ProjectOverviewMetadataRow project={project} lang={lang} />
        )}

        <div className="space-y-1">
          <TitleTag
            className={`${blockTitleClass} text-xl md:text-2xl break-words [overflow-wrap:anywhere]`}
            dangerouslySetInnerHTML={{
              __html: formatProsjektPlain(t(project.title, lang), project.id),
            }}
          />
          {showSubtitle ? (
            <p className="text-sm text-indigo-300/90 font-medium italic">{subtitle}</p>
          ) : null}
        </div>

        <p className={`${prosjektTeaserClass} text-base w-full min-w-0 max-w-none`}>{t(project.overviewIntroduction, lang)}</p>

        <ProjectInformationGrid
          overview={project.overview}
          lang={lang}
          editorialReviewRequired={project.editorialReviewRequired}
        />

        {project.fagPerspektivLink ? (
          <p>
            <Link href={project.fagPerspektivLink.href} className={fagPerspektivLinkClass}>
              {t(project.fagPerspektivLink.label, lang)}
            </Link>
          </p>
        ) : null}

        <ProjectCTAGroup lang={lang} config={cta} onOpenVideo={onOpenVideo} videoModalTitle={title} />
      </div>
    </div>
  );
}
