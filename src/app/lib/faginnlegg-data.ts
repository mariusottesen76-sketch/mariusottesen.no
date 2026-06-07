import { aiGovernance } from "../data/innlegg/ai-governance";
import { tennisLedelse } from "../data/innlegg/tennis-ledelse";

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

export interface FaginnleggPost {
  id: string;
  kategori: string;
  dato: string;
}

export function getAlleFaginnlegg(): FaginnleggPost[] {
  return [...tennisLedelse, ...aiGovernance].sort(
    (a, b) => new Date(b.dato).getTime() - new Date(a.dato).getTime()
  );
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
