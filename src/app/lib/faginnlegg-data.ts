import { aiGovernance } from "../data/innlegg/ai-governance";
import { crmMerEnnEtSystemprosjekt } from "../data/innlegg/crm-mer-enn-et-systemprosjekt";
import { fraStrategiTilGjennomforing } from "../data/innlegg/fra-strategi-til-gjennomforing";
import { salgsledelseIPraksis } from "../data/innlegg/salgsledelse-i-praksis";
import { tennisLedelse } from "../data/innlegg/tennis-ledelse";
import type { FaginnleggInnlegg } from "./faginnlegg-types";

/** Samme kategorilogikk som Faginnlegg-siden. */
export const LEDELSE_KATEGORIER = new Set([
  "Strategi og virksomhetsutvikling",
  "Endring og gjennomføring",
  "Lederstil, kultur og team",
  "Kommersiell ledelse og salg",
]);

export const AI_KATEGORI = "AI / KI";

export const FAGINNLEGG_LEDELSE_ANKER = "strategisk-ledelse-transformasjon";
export const FAGINNLEGG_AI_ANKER = "ai-fremtidens-teknologiledelse";

export type { FaginnleggInnlegg } from "./faginnlegg-types";

export interface FaginnleggPost {
  id: string;
  kategori: string;
  dato: string;
}

function sortByDateDesc(a: FaginnleggInnlegg, b: FaginnleggInnlegg): number {
  return new Date(b.dato).getTime() - new Date(a.dato).getTime();
}

export function getAlleFaginnlegg(): FaginnleggInnlegg[] {
  return ([...tennisLedelse, ...aiGovernance, salgsledelseIPraksis, crmMerEnnEtSystemprosjekt, fraStrategiTilGjennomforing] as FaginnleggInnlegg[]).sort(sortByDateDesc);
}

export function getAllFaginnleggSlugs(): string[] {
  return getAlleFaginnlegg().map((innlegg) => innlegg.id);
}

export function getFaginnleggBySlug(slug: string): FaginnleggInnlegg | undefined {
  return getAlleFaginnlegg().find((innlegg) => innlegg.id === slug);
}

export function erLedelseInnlegg(kategori: string): boolean {
  return LEDELSE_KATEGORIER.has(kategori);
}

export function erAiInnlegg(kategori: string): boolean {
  return kategori === AI_KATEGORI;
}

/** Dynamisk telling – oppdateres automatisk når innlegg legges til i datafilene. */
export function getFaginnleggTelling(): { ledelse: number; ai: number; totalt: number } {
  const alle = getAlleFaginnlegg();
  const ledelse = alle.filter((i) => erLedelseInnlegg(i.kategori)).length;
  const ai = alle.filter((i) => erAiInnlegg(i.kategori)).length;
  return { ledelse, ai, totalt: alle.length };
}
