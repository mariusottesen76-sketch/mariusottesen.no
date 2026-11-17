"use client";

import type { Lang } from "../../LanguageContext";
import type { ProjectV2Record } from "../../data/projects-v2/types";
import { buildProjectCta, buildProjectPortfolioCta } from "../../data/projects-v2/cta";
import { t } from "../../data/projects-v2/registry";
import { ProjectOverviewMetadataRow } from "./ProjectDateMetadata";
import { blockTitleClass, prosjektTeaserClass } from "../../lib/typography";
import { formatProsjektPlain } from "../../lib/product-brand";
import ProjectOverviewImage from "./ProjectOverviewImage";
import ProjectInformationGrid from "./ProjectInformationGrid";
import { OVERVIEW_BOX_ORDER, PORTFOLIO_OVERVIEW_BOX_ORDER } from "../../data/projects-v2/overview-labels";
import ProjectCTAGroup from "./ProjectCTAGroup";
import ProjectRelevantVidere from "./ProjectRelevantVidere";
import PodcastListenSection from "../strategic-platform/PodcastListenSection";
import { AI_LAGET_PODCAST_LISTEN } from "../../data/strategic-platform-projects/ai-laget-podcast";

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
  /** Portefølje på /prosjekter — seks informasjonsbokser og smalere 1:3-bilde. */
  variant?: "full" | "portfolio";
};

export default function ProjectOverviewV2({
  project,
  lang,
  onImageClick,
  onOpenVideo,
  bildeHint,
  titleHeadingLevel = 2,
  metadataCategoryLabel,
  variant = "full",
}: ProjectOverviewV2Props) {
  const portfolio = variant === "portfolio";
  const portfolioBoxOrder = project.strategicPlatformSlug
    ? PORTFOLIO_OVERVIEW_BOX_ORDER
    : OVERVIEW_BOX_ORDER;
  const cta = portfolio ? buildProjectPortfolioCta(project) : buildProjectCta(project);
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
    <div
      className={`flex flex-col md:flex-row min-w-0 ${
        portfolio ? "gap-4 md:gap-5 p-3.5 md:p-4 items-start" : "gap-2 md:gap-3 p-2.5 md:p-3 items-start"
      }`}
    >
      <ProjectOverviewImage
        src={project.overviewImage}
        alt={t(project.altText, lang)}
        bildeHint={bildeHint}
        onImageClick={handleImageClick}
        imageFormat={project.overviewImageFormat}
        backgroundSrc={project.overviewImageBackground}
        empty={project.overviewImageMissing}
        compact={portfolio}
      />

      <div className="flex-1 min-w-0 flex flex-col justify-start overflow-hidden">
        <div className={portfolio ? "mb-3" : "mb-0"}>
          {metadataCategoryLabel ? (
            <ProjectOverviewMetadataRow
              project={project}
              categoryLabel={metadataCategoryLabel}
              lang={lang}
            />
          ) : (
            <ProjectOverviewMetadataRow project={project} lang={lang} />
          )}
        </div>

        <div className={`${portfolio ? "space-y-2 mb-4" : "space-y-1 mb-0"}`}>
          <TitleTag
            className={`${blockTitleClass} text-xl md:text-2xl break-words [overflow-wrap:anywhere]`}
            dangerouslySetInnerHTML={{
              __html: formatProsjektPlain(t(project.title, lang), project.id),
            }}
          />
          {showSubtitle ? (
            <p className="text-sm text-indigo-300/90 font-medium italic leading-snug">{subtitle}</p>
          ) : null}
        </div>

        {(() => {
          const introText = t(project.overviewIntroduction, lang).trim();
          const introClass = `${prosjektTeaserClass} w-full min-w-0 max-w-none ${
            portfolio ? "text-sm md:text-base text-slate-300 leading-relaxed" : "text-base"
          }`;
          const paragraphs = introText.split("\n\n").filter(Boolean);
          const body =
            paragraphs.length > 1 ? (
              <div className={`space-y-3 ${portfolio ? "mb-5" : "mb-3"}`}>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className={introClass}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className={`${introClass} ${portfolio ? "mb-5" : "mb-3"}`}>{introText}</p>
            );
          return body;
        })()}

        <ProjectInformationGrid
          overview={project.overview}
          lang={lang}
          editorialReviewRequired={project.editorialReviewRequired}
          boxOrder={portfolio ? portfolioBoxOrder : undefined}
          variant={portfolio ? "portfolio" : "default"}
          className={portfolio ? "mb-5" : undefined}
        />

        {portfolio && project.slug === "ai-laget" ? (
          <PodcastListenSection
            data={AI_LAGET_PODCAST_LISTEN}
            lang={lang}
            variant="compact"
            showAboutLink={false}
            showIdentityLine={false}
            headingId="ai-laget-portfolio-podcast"
          />
        ) : null}

        {!portfolio ? <ProjectRelevantVidere project={project} lang={lang} variant="overview" /> : null}

        <ProjectCTAGroup
          lang={lang}
          config={portfolio ? { ...cta, tertiary: undefined } : cta}
          onOpenVideo={onOpenVideo}
          videoModalTitle={title}
        />
      </div>
    </div>
  );
}
