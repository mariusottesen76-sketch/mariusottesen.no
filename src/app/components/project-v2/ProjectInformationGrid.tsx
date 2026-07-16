"use client";

import type { Lang } from "../../LanguageContext";
import type { ProjectOverviewContent } from "../../data/projects-v2/types";
import { OVERVIEW_BOX_LABELS, OVERVIEW_BOX_ORDER } from "../../data/projects-v2/overview-labels";
import ProjectInformationCard from "./ProjectInformationCard";

type ProjectInformationGridProps = {
  overview: ProjectOverviewContent;
  lang: Lang;
  editorialReviewRequired?: (keyof ProjectOverviewContent | "overviewIntroduction")[];
};

export default function ProjectInformationGrid({
  overview,
  lang,
  editorialReviewRequired,
}: ProjectInformationGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 auto-rows-fr">
      {OVERVIEW_BOX_ORDER.map((key) => (
        <ProjectInformationCard
          key={key}
          label={OVERVIEW_BOX_LABELS[key]}
          text={overview[key]}
          lang={lang}
          needsReview={editorialReviewRequired?.includes(key as keyof ProjectOverviewContent)}
        />
      ))}
    </div>
  );
}
