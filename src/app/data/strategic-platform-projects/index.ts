import type { StrategicPlatformProject, StrategicPlatformSlug } from "./types";
import { controlTowerPlatform } from "./control-tower-platform";
import { aiTransformationPlatform } from "./ai-transformation-platform";

export type { StrategicPlatformProject, StrategicPlatformSlug } from "./types";
export { t } from "./i18n";

const strategicPlatforms: StrategicPlatformProject[] = [
  controlTowerPlatform,
  aiTransformationPlatform,
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
