import { getAlleFaginnlegg, type FaginnleggPost } from "../../lib/faginnlegg-data";
import type { ProjectV2BaseRecord, ProjectV2Record } from "./types";

const FAGINNLEGG_HUB_ID = "ai-faginnlegg-serie-2026";
const SITE_PROJECT_ID = "mariusottesen-no-2025";

function sortIsoDates(dates: string[]): string[] {
  return dates.filter(Boolean).sort();
}

export function resolveFaginnleggHubUpdatedAt(publishedAt: string): string | undefined {
  const dates = sortIsoDates(getAlleFaginnlegg().map((article) => article.dato));
  const latest = dates.at(-1);
  if (!latest || latest <= publishedAt) {
    return undefined;
  }
  return latest;
}

export function resolveSiteUpdatedAt(
  projects: Pick<ProjectV2Record, "id" | "publishedAt" | "updatedAt">[],
  articles: Pick<FaginnleggPost, "dato">[],
  manualSiteUpdatedAt?: string,
  sitePublishedAt?: string
): string | undefined {
  const projectDates = projects
    .filter((project) => project.id !== SITE_PROJECT_ID)
    .flatMap((project) => [project.publishedAt, project.updatedAt].filter(Boolean) as string[]);

  const articleDates = articles.map((article) => article.dato).filter(Boolean);

  const candidates = sortIsoDates([...projectDates, ...articleDates, manualSiteUpdatedAt].filter(Boolean) as string[]);
  const latest = candidates.at(-1);

  if (!latest) return undefined;
  if (sitePublishedAt && latest <= sitePublishedAt) {
    return undefined;
  }
  return latest;
}

export function resolveProjectDates(baseRecords: ProjectV2BaseRecord[]): ProjectV2Record[] {
  const articles = getAlleFaginnlegg();

  const pass1: ProjectV2Record[] = baseRecords.map((record) => {
    let updatedAt = record.updatedAt;

    if (record.id === FAGINNLEGG_HUB_ID) {
      updatedAt = resolveFaginnleggHubUpdatedAt(record.publishedAt);
    }

    return { ...record, updatedAt };
  });

  return pass1.map((record) => {
    if (record.id !== SITE_PROJECT_ID) {
      return record;
    }

    const siteUpdatedAt = resolveSiteUpdatedAt(pass1, articles, record.manualSiteUpdatedAt, record.publishedAt);

    return {
      ...record,
      updatedAt: siteUpdatedAt,
    };
  });
}
