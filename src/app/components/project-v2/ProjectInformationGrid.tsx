"use client";

import type { Lang } from "../../LanguageContext";
import type { ProjectOverviewContent } from "../../data/projects-v2/types";
import {
  OVERVIEW_BOX_LABELS,
  OVERVIEW_BOX_ORDER,
  PORTFOLIO_OVERVIEW_BOX_ORDER,
} from "../../data/projects-v2/overview-labels";
import ProjectInformationCard from "./ProjectInformationCard";

type ProjectInformationGridProps = {
  overview: ProjectOverviewContent;
  lang: Lang;
  editorialReviewRequired?: (keyof ProjectOverviewContent | "overviewIntroduction")[];
  /** Begrens hvilke bokser som vises — standard er alle åtte. */
  boxOrder?: (keyof ProjectOverviewContent)[];
  variant?: "default" | "portfolio";
  className?: string;
};

export default function ProjectInformationGrid({
  overview,
  lang,
  editorialReviewRequired,
  boxOrder = OVERVIEW_BOX_ORDER,
  variant = "default",
  className,
}: ProjectInformationGridProps) {
  const portfolio = variant === "portfolio";
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 min-w-0 ${portfolio ? "gap-3 items-start" : "gap-2 auto-rows-fr"} ${
        className ?? ""
      }`}
    >
      {boxOrder.map((key) => (
        <ProjectInformationCard
          key={key}
          label={OVERVIEW_BOX_LABELS[key]}
          text={overview[key]}
          lang={lang}
          needsReview={editorialReviewRequired?.includes(key as keyof ProjectOverviewContent)}
          variant={variant}
        />
      ))}
    </div>
  );
}
