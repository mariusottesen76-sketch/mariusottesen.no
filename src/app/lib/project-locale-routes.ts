import type { Lang } from "../LanguageContext";
import type { ProjectV2Record } from "../data/projects-v2/types";
import type { StrategicPlatformSlug } from "../data/strategic-platform-projects/types";
import { getAllProjectV2Records } from "../data/projects-v2/registry";
import { normalizePath } from "./locale-routes";

export const PROJECTS_HUB_PAIR = { no: "/prosjekter", en: "/en/projects" } as const;

const EXCLUDED_PROJECT_IDS = new Set([
  "ai-faginnlegg-serie-2026",
  "psc-promo-video-moc-2026",
]);

export function isIndexableEnProject(project: ProjectV2Record): boolean {
  if (EXCLUDED_PROJECT_IDS.has(project.id)) return false;
  const path = project.seo.canonicalPath;
  if (!path || path.startsWith("/prosjekter") || path === "/faginnlegg") return false;
  return true;
}

export function getIndexableProjectRecords(): ProjectV2Record[] {
  return getAllProjectV2Records().filter(isIndexableEnProject);
}

export function projectEnPath(project: ProjectV2Record): string {
  const segment = project.seo.canonicalPath.replace(/^\//, "");
  return `/en/${segment}`;
}

export function projectNoPath(project: ProjectV2Record): string {
  return project.seo.canonicalPath;
}

export function resolveProjectLocalePair(pathname: string): { no: string; en: string } | null {
  const normalized = normalizePath(pathname);
  if (normalized === PROJECTS_HUB_PAIR.no || normalized === PROJECTS_HUB_PAIR.en) {
    return { ...PROJECTS_HUB_PAIR };
  }
  for (const project of getIndexableProjectRecords()) {
    const noPath = projectNoPath(project);
    const enPath = projectEnPath(project);
    if (normalized === noPath || normalized === enPath) {
      return { no: noPath, en: enPath };
    }
  }
  return null;
}

export function localePathFromNoProjectPath(noPathname: string, lang: Lang): string | null {
  const normalized = normalizePath(noPathname);
  if (normalized === PROJECTS_HUB_PAIR.no) {
    return lang === "en" ? PROJECTS_HUB_PAIR.en : PROJECTS_HUB_PAIR.no;
  }
  for (const project of getIndexableProjectRecords()) {
    if (projectNoPath(project) === normalized) {
      return lang === "en" ? projectEnPath(project) : normalized;
    }
  }
  return null;
}

export function getProjectByEnSegment(segment: string): ProjectV2Record | undefined {
  return getIndexableProjectRecords().find(
    (p) => p.seo.canonicalPath.replace(/^\//, "") === segment
  );
}

export function getProjectEnStaticParams(): { projectSlug: string }[] {
  return getIndexableProjectRecords().map((p) => ({
    projectSlug: p.seo.canonicalPath.replace(/^\//, ""),
  }));
}

export function toStrategicPlatformSlug(project: ProjectV2Record): StrategicPlatformSlug {
  return project.slug as StrategicPlatformSlug;
}
