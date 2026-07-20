"use client";

import React from "react";
import type { Lang } from "../../LanguageContext";
import type { ProjectV2Record } from "../../data/projects-v2/types";
import { t } from "../../data/strategic-platform-projects/i18n";
import {
  formatPublishedDateLabel,
  formatUpdatedDateLabel,
} from "../../lib/project-date-format";

const DISPLAY_DATE_PATTERN = /^\d{2}\.\d{2}\.\d{2}$/;

type ProjectDateMetadataProps = {
  project: ProjectV2Record;
  lang: Lang;
  className?: string;
};

function editorialDateNote(project: ProjectV2Record, lang: Lang): string | null {
  const value = t(project.displayDate, lang).trim();
  if (!value || DISPLAY_DATE_PATTERN.test(value)) return null;
  return value;
}

export default function ProjectDateMetadata({ project, lang, className }: ProjectDateMetadataProps) {
  const showUpdated =
    project.updatedAt !== undefined && project.updatedAt !== project.publishedAt;
  const editorial = editorialDateNote(project, lang);

  return (
    <span className={className}>
      <time dateTime={project.publishedAt}>{formatPublishedDateLabel(project.publishedAt, lang)}</time>
      {showUpdated && project.updatedAt ? (
        <>
          <span aria-hidden="true"> · </span>
          <time dateTime={project.updatedAt}>{formatUpdatedDateLabel(project.updatedAt, lang)}</time>
        </>
      ) : null}
      {editorial ? (
        <>
          <span aria-hidden="true"> · </span>
          <span>{editorial}</span>
        </>
      ) : null}
    </span>
  );
}

export function ProjectOverviewMetadataRow({
  project,
  categoryLabel,
  lang,
}: {
  project: ProjectV2Record;
  categoryLabel?: string;
  lang: Lang;
}) {
  const statusPart = project.maturityLevel
    ? t(project.maturityLevel, lang)
    : t(project.statusLabel, lang);

  const parts: React.ReactNode[] = [];

  if (categoryLabel) {
    parts.push(<span key="cat">{categoryLabel}</span>);
  }
  parts.push(<span key="status">{statusPart}</span>);
  parts.push(<ProjectDateMetadata key="dates" project={project} lang={lang} />);

  return (
    <p className="text-[10px] font-mono uppercase tracking-widest font-bold leading-snug text-indigo-400/90 break-words">
      {parts.map((part, index) => (
        <span key={index}>
          {index > 0 ? (
            <>
              <span aria-hidden="true"> · </span>
              {part}
            </>
          ) : (
            part
          )}
        </span>
      ))}
    </p>
  );
}
