import type { AccessMode } from "../../data/projects-v2/types";
import type { ProjectV2Record } from "../../data/projects-v2/types";
import type { Lang } from "../../LanguageContext";

/**
 * access_code / closed_demo / concept / no_live_solution: public landing pages stay in
 * the manifest, but excerpt scope is limited to approved overview fields (no operational how-to).
 */
const LIMITED_EXCERPT_ACCESS: ReadonlySet<AccessMode> = new Set([
  "access_code",
  "closed_demo",
  "concept",
  "no_live_solution",
]);

export function usesLimitedProjectExcerpt(accessMode: AccessMode): boolean {
  return LIMITED_EXCERPT_ACCESS.has(accessMode);
}

export function buildPublicProjectExcerptChunks(project: ProjectV2Record, lang: Lang): string[] {
  const description = project.seo.description[lang];
  const what = project.overview.what[lang];
  if (usesLimitedProjectExcerpt(project.accessMode)) {
    return [description, what];
  }
  return [description, what, project.overview.challenge[lang]];
}