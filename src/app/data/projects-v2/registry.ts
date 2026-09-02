import type { ProjectV2BaseRecord, ProjectV2Record } from "./types";
import { controlTowerV2 } from "./projects/control-tower";
import { aiTransformationV2 } from "./projects/ai-transformation-value-realization";
import { predictiveSalesCoachV2 } from "./projects/predictive-sales-coach";
import { flowsignalV2 } from "./projects/flowsignal";
import { aiReadinessScanV2 } from "./projects/ai-readiness-scan";
import { salgsflytSjekkenV2 } from "./projects/salgsflyt-sjekken";
import { eventPlannerV2 } from "./projects/event-planner";
import { strategiskAiImplementeringV2 } from "./projects/strategisk-ai-implementering";
import { skoyenasenTannklinikkV2 } from "./projects/skoyenasen-tannklinikk";
import { mariusottesenNettsideV2 } from "./projects/mariusottesen-nettside";
import { rowSolutionsV2 } from "./projects/row-solutions";
import { agentiskArbeidsflytV2 } from "./projects/agentisk-arbeidsflyt";
import { aiInnsiktsOgInnholdsmotorV2 } from "./projects/ai-innsikts-og-innholdsmotor";
import { aiArkitekturBeslutningsstotteV2 } from "./projects/ai-arkitektur-beslutningsstotte";
import { pscPromoVideoV2 } from "./projects/psc-promo-video";
import { aiValueLabOsloV2 } from "./projects/ai-value-lab-oslo";
import { aiFaginnleggHubV2 } from "./projects/ai-faginnlegg-hub";
import { resolveProjectDates } from "./project-date-resolvers";
import { projectSchemaDates } from "../../lib/project-overview-metadata";
import { SITE } from "../../lib/locale-routes";
import { isIndexableEnProject, projectEnPath, projectNoPath } from "../../lib/project-locale-routes";

export { t } from "../strategic-platform-projects/i18n";

const baseProjectV2Records: ProjectV2BaseRecord[] = [
  aiTransformationV2,
  controlTowerV2,
  predictiveSalesCoachV2,
  flowsignalV2,
  aiReadinessScanV2,
  salgsflytSjekkenV2,
  eventPlannerV2,
  strategiskAiImplementeringV2,
  skoyenasenTannklinikkV2,
  mariusottesenNettsideV2,
  rowSolutionsV2,
  agentiskArbeidsflytV2,
  aiInnsiktsOgInnholdsmotorV2,
  aiArkitekturBeslutningsstotteV2,
  aiValueLabOsloV2,
  aiFaginnleggHubV2,
  pscPromoVideoV2,
];

const projectV2Records: ProjectV2Record[] = resolveProjectDates(baseProjectV2Records);

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

export function getBaseProjectV2Records(): ProjectV2BaseRecord[] {
  return baseProjectV2Records;
}

export function buildProjectV2Metadata(project: ProjectV2Record, lang: "no" | "en" = "no") {
  const title = project.seo.title[lang];
  const description = project.seo.description[lang];
  const noUrl = `${SITE}${projectNoPath(project)}`;
  const hasEnRoute = isIndexableEnProject(project);
  const enUrl = hasEnRoute ? `${SITE}${projectEnPath(project)}` : null;
  const canonical = lang === "en" && enUrl ? enUrl : noUrl;
  const ogImage = project.seo.ogImage.startsWith("http") ? project.seo.ogImage : `${SITE}${project.seo.ogImage}`;
  const { datePublished, dateModified } = projectSchemaDates(project);

  return {
    title,
    description,
    metadataBase: new URL(SITE),
    alternates: {
      canonical,
      ...(hasEnRoute && enUrl
        ? {
            languages: {
              no: noUrl,
              en: enUrl,
              "x-default": noUrl,
            },
          }
        : {}),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website" as const,
      siteName: "Marius Ottesen",
      locale: lang === "en" ? "en_GB" : "nb_NO",
      alternateLocale: lang === "en" ? ["nb_NO"] : ["en_GB"],
      images: [{ url: ogImage, width: 1200, height: 400, alt: title }],
      ...(dateModified
        ? { publishedTime: datePublished, modifiedTime: dateModified }
        : { publishedTime: datePublished }),
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [ogImage],
    },
  };
}
