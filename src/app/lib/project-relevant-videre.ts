import type { Lang } from "../LanguageContext";
import type {
  ProjectFagPerspektivLink,
  ProjectRelevantSurface,
  ProjectV2Record,
} from "../data/projects-v2/types";
import { localizeArticleHref } from "./faginnlegg-internal-links";

export function isProjectRelevantExternal(link: ProjectFagPerspektivLink): boolean {
  return link.external ?? link.href.startsWith("http");
}

export function resolveProjectRelevantHref(link: ProjectFagPerspektivLink, lang: Lang): string {
  return isProjectRelevantExternal(link) ? link.href : localizeArticleHref(link.href, lang);
}

function linkMatchesSurface(link: ProjectFagPerspektivLink, surface: ProjectRelevantSurface): boolean {
  if (!link.surfaces?.length) return true;
  return link.surfaces.includes(surface);
}

/** Slår sammen valgfri enkeltlenke og liste — rekkefølge bevares. Filtrerer på visningsflate når angitt. */
export function getProjectRelevantVidereLinks(
  project: Pick<ProjectV2Record, "fagPerspektivLink" | "fagPerspektivLinks">,
  surface: ProjectRelevantSurface = "detail",
): ProjectFagPerspektivLink[] {
  const links: ProjectFagPerspektivLink[] = [];
  if (project.fagPerspektivLink) links.push(project.fagPerspektivLink);
  if (project.fagPerspektivLinks?.length) links.push(...project.fagPerspektivLinks);
  return links.filter((link) => linkMatchesSurface(link, surface));
}
