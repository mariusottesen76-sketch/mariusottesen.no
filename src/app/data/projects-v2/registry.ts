import type { ProjectV2Record } from "./types";
import { controlTowerV2 } from "./projects/control-tower";
import { aiTransformationV2 } from "./projects/ai-transformation-value-realization";

export { t } from "../strategic-platform-projects/i18n";

const projectV2Records: ProjectV2Record[] = [controlTowerV2, aiTransformationV2];

const byId = Object.fromEntries(projectV2Records.map((p) => [p.id, p])) as Record<string, ProjectV2Record>;

export const PROJECT_V2_IDS = new Set(projectV2Records.map((p) => p.id));

export function isProjectV2(prosjektId: string): boolean {
  return PROJECT_V2_IDS.has(prosjektId);
}

export function getProjectV2ById(prosjektId: string): ProjectV2Record | undefined {
  return byId[prosjektId];
}

export function getAllProjectV2Records(): ProjectV2Record[] {
  return projectV2Records;
}

export function buildProjectV2Metadata(project: ProjectV2Record, lang: "no" | "en" = "no") {
  const SITE = "https://www.mariusottesen.no";
  const title = project.seo.title[lang];
  const description = project.seo.description[lang];
  const url = `${SITE}${project.seo.canonicalPath}`;
  const ogImage = project.seo.ogImage.startsWith("http") ? project.seo.ogImage : `${SITE}${project.seo.ogImage}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website" as const,
      siteName: "Marius Ottesen",
      images: [{ url: ogImage, width: 1200, height: 400, alt: title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [ogImage],
    },
  };
}
