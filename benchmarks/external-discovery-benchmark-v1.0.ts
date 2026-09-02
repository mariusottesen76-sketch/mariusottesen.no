/**
 * External Discovery Benchmark v1.0 — FROZEN
 * 100-prompt Discovery Universe. Separate from Master Search & LLM Benchmark v1.0.
 */

export type DiscoveryCategory =
  | "ROLE_TITLE_SENIORITY"
  | "ADJACENT_ENGAGEMENT"
  | "JOB_BRIEF"
  | "LEADERSHIP_STYLE"
  | "COMMERCIAL_SALES"
  | "STRATEGY_TRANSFORM_AI"
  | "INDUSTRY"
  | "ORG_CONTEXT"
  | "RESULT_PROBLEM"
  | "GEO_TRAVEL_INTL";

export type DiscoveryTier = "CORE" | "EXTENDED" | "BOUNDARY";
export type MatchFit = "HIGH" | "MEDIUM" | "LOW" | "NON_MATCH";
export type EvidenceStrength = "STRONG" | "ADEQUATE" | "WEAK" | "NONE";
export type DiscoveryDifficulty = "LOW" | "MEDIUM" | "HIGH" | "VERY_HIGH";

export type DiscoveryPrompt = {
  id: string;
  prompt: string;
  category: DiscoveryCategory;
  tier: DiscoveryTier;
  audience: string;
  roleTitleUsed: string;
  seniority: string;
  industry: string;
  leadershipTraits: string;
  competencies: string;
  organisationContext: string;
  problemOutcome: string;
  travelInternational: string;
  matchFit: MatchFit;
  expectedSources: string[];
  evidenceStrength: EvidenceStrength;
  discoveryDifficulty: DiscoveryDifficulty;
  architectureSensitive: boolean;
  negativeControl: boolean;
  evidenceQuote: string;
  websiteGap: string;
  boundaryReason: string;
  notes: string;
  /** Optional person-fact not yet on site (e.g. travel willingness). */
  actualFit?: string;
};

export const DISCOVERY_VERSION = "1.0" as const;
export const DISCOVERY_STATUS = "FROZEN" as const;
export const DISCOVERY_SITE_AUDIT = "2026-09-02" as const;
export const DISCOVERY_FROZEN_DATE = "2026-09-02" as const;

/** Personlig role-fit (5C.2/5C.3) — NOT on production site yet. */
export const ACTUAL_TRAVEL_FIT =
  "Komfortabel med ca. 1–2 dagers jobbrelatert reise per uke, nasjonalt og/eller internasjonal når rollen tilsier det." as const;
export const ACTUAL_TRAVEL_FIT_SUPPORTED = true as const;
export const TRAVEL_WEBSITE_DOCUMENTED = false as const;
export const TRAVEL_WEBSITE_GAP = true as const;

export { DISCOVERY_PROMPTS } from "./external-discovery-prompts-v1.0.ts";

import { DISCOVERY_PROMPTS } from "./external-discovery-prompts-v1.0.ts";

export const DISCOVERY_CATEGORY_COUNTS = {
  ROLE_TITLE_SENIORITY: 12,
  ADJACENT_ENGAGEMENT: 10,
  JOB_BRIEF: 12,
  LEADERSHIP_STYLE: 12,
  COMMERCIAL_SALES: 10,
  STRATEGY_TRANSFORM_AI: 10,
  INDUSTRY: 10,
  ORG_CONTEXT: 8,
  RESULT_PROBLEM: 10,
  GEO_TRAVEL_INTL: 6,
} as const;

export const CORE_50_IDS: readonly string[] = [
  "D01", "D02", "D03", "D04", "D06", "D07", "D09", "D10", "D11",
  "D13", "D14",
  "D23", "D26", "D29", "D30", "D31",
  "D35", "D36", "D37", "D38", "D39", "D40", "D41", "D42", "D45",
  "D47", "D48", "D49", "D50", "D51", "D53", "D54", "D55", "D56", "D57", "D58",
  "D65",
  "D67", "D68", "D69", "D70", "D71",
  "D77", "D78", "D79", "D80",
  "D90", "D91", "D93",
  "D96",
] as const;

export const EXTENDED_38_IDS: readonly string[] = [
  "D05", "D15", "D16", "D17", "D18", "D19",
  "D24", "D25", "D27", "D28", "D33", "D34",
  "D43", "D44",
  "D59", "D60", "D61", "D62", "D63", "D64",
  "D72", "D73", "D74", "D75", "D76",
  "D81", "D82", "D83",
  "D85", "D86", "D87", "D88", "D89", "D92",
  "D95", "D97", "D98", "D100",
] as const;

/** @deprecated Use EXTENDED_38_IDS */
export const EXTENDED_35_IDS = EXTENDED_38_IDS;

export const BOUNDARY_12_IDS: readonly string[] = [
  "D08", "D12", "D20", "D21", "D22", "D32", "D46", "D52",
  "D66", "D84", "D94", "D99",
] as const;

/** @deprecated Use BOUNDARY_12_IDS */
export const BOUNDARY_15_IDS = BOUNDARY_12_IDS;

/** English-query / client-side EN indexability sensitive (5C.2b). */
export const ARCHITECTURE_SENSITIVE_IDS: readonly string[] = [
  "D03", "D10", "D12", "D43", "D52", "D60", "D65", "D73", "D82", "D94", "D97",
] as const;

/** Recommended 10-prompt first real-engine pilot (no name in prompt). */
export const RECOMMENDED_PILOT_IDS: readonly string[] = [
  "D01", "D14", "D23", "D45", "D47", "D57", "D67", "D77", "D87", "D95",
] as const;

export function validateDiscoveryBenchmark(): {
  ok: boolean;
  errors: string[];
  total: number;
  core: number;
  extended: number;
  boundary: number;
  negativeControls: number;
  architectureSensitive: number;
  categories: Record<string, number>;
  uniquePrompts: number;
} {
  const errors: string[] = [];
  const categories: Record<string, number> = {};
  const prompts = new Set<string>();

  for (const p of DISCOVERY_PROMPTS) {
    categories[p.category] = (categories[p.category] ?? 0) + 1;
    if (prompts.has(p.prompt)) errors.push(`${p.id}: duplicate prompt text`);
    prompts.add(p.prompt);

    if (p.negativeControl && p.matchFit !== "NON_MATCH") {
      errors.push(`${p.id}: negativeControl requires matchFit NON_MATCH`);
    }
    if (p.matchFit === "NON_MATCH" && !p.negativeControl) {
      errors.push(`${p.id}: NON_MATCH should set negativeControl=true`);
    }
    if (!CORE_50_IDS.includes(p.id) && !EXTENDED_38_IDS.includes(p.id) && !BOUNDARY_12_IDS.includes(p.id)) {
      errors.push(`${p.id}: not in any tier ID list`);
    }
    const listedTier = CORE_50_IDS.includes(p.id)
      ? "CORE"
      : EXTENDED_38_IDS.includes(p.id)
        ? "EXTENDED"
        : "BOUNDARY";
    if (p.tier !== listedTier) {
      errors.push(`${p.id}: tier ${p.tier} != listed ${listedTier}`);
    }
  }

  const core = DISCOVERY_PROMPTS.filter((p) => p.tier === "CORE").length;
  const extended = DISCOVERY_PROMPTS.filter((p) => p.tier === "EXTENDED").length;
  const boundary = DISCOVERY_PROMPTS.filter((p) => p.tier === "BOUNDARY").length;

  if (DISCOVERY_PROMPTS.length !== 100) errors.push(`total ${DISCOVERY_PROMPTS.length} != 100`);
  if (core !== 50) errors.push(`core ${core} != 50`);
  if (extended !== 38) errors.push(`extended ${extended} != 38`);
  if (boundary !== 12) errors.push(`boundary ${boundary} != 12`);

  for (const [cat, count] of Object.entries(DISCOVERY_CATEGORY_COUNTS)) {
    if ((categories[cat] ?? 0) !== count) {
      errors.push(`category ${cat}: ${categories[cat] ?? 0} != ${count}`);
    }
  }

  return {
    ok: errors.length === 0,
    errors,
    total: DISCOVERY_PROMPTS.length,
    core,
    extended,
    boundary,
    negativeControls: DISCOVERY_PROMPTS.filter((p) => p.negativeControl).length,
    architectureSensitive: DISCOVERY_PROMPTS.filter((p) => p.architectureSensitive).length,
    categories,
    uniquePrompts: prompts.size,
  };
}
