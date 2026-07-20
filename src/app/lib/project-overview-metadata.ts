import type { Lang } from "../LanguageContext";
import type { ProjectV2Record } from "../data/projects-v2/types";
import { t } from "../data/strategic-platform-projects/i18n";
import {
  formatPublishedDateLabel,
  formatUpdatedDateLabel,
  projectLastModifiedIso,
  sitemapLastModifiedFromIso,
} from "./project-date-format";

/** @deprecated Bruk ProjectDateMetadata-komponenten — beholdt for enkel tekstfallback. */
export function formatProjectOverviewDateLabel(_project: ProjectV2Record, _lang: Lang): string | null {
  return null;
}

/** @deprecated Bruk ProjectOverviewMetadataRow — beholdt midlertidig. */
export function buildProjectOverviewMetadataLine(
  project: ProjectV2Record,
  categoryLabel: string,
  lang: Lang
): string {
  const parts: string[] = [categoryLabel];
  const statusPart = project.maturityLevel ? t(project.maturityLevel, lang) : t(project.statusLabel, lang);
  parts.push(statusPart);
  parts.push(formatPublishedDateLabel(project.publishedAt, lang));
  if (project.updatedAt && project.updatedAt !== project.publishedAt) {
    parts.push(formatUpdatedDateLabel(project.updatedAt, lang));
  }
  const editorial = t(project.displayDate, lang).trim();
  if (editorial && !/^\d{2}\.\d{2}\.\d{2}$/.test(editorial)) {
    parts.push(editorial);
  }
  return parts.join(" · ");
}

export function projectSchemaDates(project: ProjectV2Record): {
  datePublished: string;
  dateModified?: string;
} {
  const datePublished = project.publishedAt;
  const dateModified =
    project.updatedAt && project.updatedAt !== project.publishedAt ? project.updatedAt : undefined;
  return { datePublished, dateModified };
}

export function projectSitemapLastModified(project: {
  publishedAt: string;
  updatedAt?: string;
}): Date {
  return sitemapLastModifiedFromIso(projectLastModifiedIso(project));
}
