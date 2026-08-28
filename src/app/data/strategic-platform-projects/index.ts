import type { StrategicPlatformProject, StrategicPlatformSlug } from "./types";
import { controlTowerPlatform } from "./control-tower-platform";
import { aiTransformationPlatform } from "./ai-transformation-platform";
import { predictiveSalesCoachPlatform } from "./predictive-sales-coach-platform";
import { flowSignalPlatform } from "./flowsignal-platform";
import { aiReadinessScanPlatform } from "./ai-readiness-scan-platform";
import { salgsflytSjekkenPlatform } from "./salgsflyt-sjekken-platform";
import { strategiskAiImplementeringPlatform } from "./strategisk-ai-implementering-platform";
import { skoyenasenTannklinikkPlatform } from "./skoyenasen-tannklinikk-platform";
import { mariusottesenNettsidePlatform } from "./mariusottesen-nettside-platform";
import { rowSolutionsPlatform } from "./row-solutions-platform";
import { agentiskArbeidsflytPlatform } from "./agentisk-arbeidsflyt-platform";
import { aiInnsiktsOgInnholdsmotorPlatform } from "./ai-innsikts-og-innholdsmotor-platform";
import { aiArkitekturBeslutningsstottePlatform } from "./ai-arkitektur-beslutningsstotte-platform";
import { aiValueLabOsloPlatform } from "./ai-value-lab-oslo-platform";
import { eventPlannerPlatform } from "./event-planner-platform";

export type { StrategicPlatformProject, StrategicPlatformSlug } from "./types";
export { t } from "./i18n";

const strategicPlatforms: StrategicPlatformProject[] = [
  controlTowerPlatform,
  aiTransformationPlatform,
  predictiveSalesCoachPlatform,
  flowSignalPlatform,
  aiReadinessScanPlatform,
  salgsflytSjekkenPlatform,
  strategiskAiImplementeringPlatform,
  skoyenasenTannklinikkPlatform,
  mariusottesenNettsidePlatform,
  rowSolutionsPlatform,
  agentiskArbeidsflytPlatform,
  aiInnsiktsOgInnholdsmotorPlatform,
  aiArkitekturBeslutningsstottePlatform,
  aiValueLabOsloPlatform,
  eventPlannerPlatform,
];

const bySlug = Object.fromEntries(
  strategicPlatforms.map((p) => [p.slug, p])
) as Record<StrategicPlatformSlug, StrategicPlatformProject>;

const byProsjektId = Object.fromEntries(
  strategicPlatforms.map((p) => [p.prosjektId, p])
) as Record<string, StrategicPlatformProject>;

export const STRATEGIC_PLATFORM_PROSJEKT_IDS = new Set(
  strategicPlatforms.map((p) => p.prosjektId)
);

export function isStrategicPlatformProsjekt(prosjektId: string): boolean {
  return STRATEGIC_PLATFORM_PROSJEKT_IDS.has(prosjektId);
}

export function getStrategicPlatformBySlug(slug: StrategicPlatformSlug): StrategicPlatformProject {
  return bySlug[slug];
}

export function getStrategicPlatformByProsjektId(
  prosjektId: string
): StrategicPlatformProject | undefined {
  return byProsjektId[prosjektId];
}

export function getAllStrategicPlatforms(): StrategicPlatformProject[] {
  return strategicPlatforms;
}
