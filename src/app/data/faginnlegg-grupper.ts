import { Lang } from "../LanguageContext";
import { FaginnleggPost, erAiInnlegg, erLedelseInnlegg } from "../lib/faginnlegg-data";

export type FaginnleggSortMode = "nyeste" | "eldste" | "alfabetisk";

export type FaginnleggSubtema = {
  id: string;
  label: { no: string; en: string };
  /** Eksplisitt id-liste for AI; ledelse bruker kategori i stedet. */
  innleggIds?: string[];
  /** For ledelse: matcher `kategori` på innlegget. */
  ledelseKategori?: string;
};

export const FAGINNLEGG_SORT_OPTIONS: { value: FaginnleggSortMode; label: { no: string; en: string } }[] = [
  { value: "nyeste", label: { no: "Nyeste først", en: "Newest first" } },
  { value: "eldste", label: { no: "Eldste først", en: "Oldest first" } },
  { value: "alfabetisk", label: { no: "Alfabetisk (A–Å)", en: "Alphabetical (A–Z)" } },
];

/**
 * Ledelse-innlegg gruppert etter helhetlig tematikk (id-lister, ikke enkeltord).
 * Rekkefølge: bred strategi → gjennomføring → kultur → smal kommersiell kjerne.
 */
export const LEDELSE_SUBTEMA: FaginnleggSubtema[] = [
  {
    id: "ledelse-strategi",
    label: { no: "Strategi og virksomhetsutvikling", en: "Strategy and business development" },
    innleggIds: [
      "gronne-exceltall-transformasjon-2026-05",
      "alle-enige-ingen-gjor-noe-01",
      "to-parallelle-spor-ledelse-ai-01",
      "obf-klar-2025-01",
      "obf-2025-big-shift-01",
      "landet-rikt-01",
      "norge-virksomhet-01",
      "skalering-01",
      "tennis-01",
      "econa-innovasjon-ideer-verdi-01",
    ],
  },
  {
    id: "ledelse-endring",
    label: { no: "Endring og gjennomføring", en: "Change and execution" },
    innleggIds: [
      "tillit-endring-gjennomforing-2025-01",
      "trykk-prestasjon-kommersiell-ledelse-2026-05",
    ],
  },
  {
    id: "ledelse-kultur",
    label: { no: "Lederstil, kultur og team", en: "Leadership style, culture and teams" },
    innleggIds: [
      "verdier-kultur-kommersiell-ledelse-2026-06",
      "psykologisk-trygghet-krav-2026-01",
      "kjeft-psykologisk-trygghet-01",
      "pappa-forst-trener-etterpa-2026-01",
      "hva-motiverer-kunnskapsarbeid-2026-01",
      "brains-not-included-01",
      "attitude-2016-01",
      "kapasitet-maraton-01",
    ],
  },
  {
    id: "ledelse-kommersiell",
    label: { no: "Kommersiell ledelse og salg", en: "Commercial leadership and sales" },
    innleggIds: [
      "frastotende-salg-2026-01",
      "videre-franzefoss-2026-01",
      "visindi-rekruttering-2024-01",
    ],
  },
];

/**
 * AI-innlegg gruppert etter hovedtema (tittel vektlegges ved flere temaer).
 * Møtedeltakelse, frokoster, samlinger og fagmiljø → ai-utdanning.
 */
export const AI_SUBTEMA: FaginnleggSubtema[] = [
  {
    id: "ai-grunnlag",
    label: { no: "Grunnlag og perspektiv", en: "Foundation and perspective" },
    innleggIds: [
      "alle-snakker-ai-01",
      "ai-foles-nytt-01",
      "ai-ikke-intelligent-01",
      "ai-debatten-hype-vs-frykt-01",
      "access-til-agents-01",
      "ki-norsk-virksomheter-01",
    ],
  },
  {
    id: "ai-arbeidsflyt",
    label: { no: "Arbeidsflyt, skalering og implementering", en: "Workflow, scaling and implementation" },
    innleggIds: [
      "fra-verktoy-til-system-01",
      "fra-pilot-til-skalering-01",
      "praktisk-oppskrift-skalering-01",
      "ai-ready-virksomhet-01",
      "ai-prosjekt-forretningsproblem-tegneserie-2026-05",
      "ai-needs-first-tannklinikk-case-01",
      "econa-ai-kundereise-arbeidsflyt-01",
    ],
  },
  {
    id: "ai-data-crm",
    label: { no: "Data, CRM og beslutningsstøtte", en: "Data, CRM and decision support" },
    innleggIds: [
      "data-kontekst-rag-01",
      "rag-innsikt-handling-01",
      "crm-genai-medspiller-knowit-2026-06",
      "ai-arkitektur-beslutningsstotte-01",
      "ai-dommekraft-bias-01",
      "ai-dommekraft-kontekst-01",
    ],
  },
  {
    id: "ai-agenter",
    label: { no: "Agenter og agentisk arbeid", en: "Agents and agentic work" },
    innleggIds: ["ai-agenter-hva-01", "ai-agenter-feil-01", "ai-agenter-praksis-01"],
  },
  {
    id: "ai-governance",
    label: { no: "Governance, etikk og kompetanse", en: "Governance, ethics and competence" },
    innleggIds: [
      "ai-governance-01",
      "ai-governance-i-praksis-01",
      "ai-etikk-norden-01",
      "ai-kompetanse-2030-01",
      "ai-gap-kompetanse-stokke-digi-2026-05",
      "april-ai-kompetanse-praksis-01",
    ],
  },
  {
    id: "ai-utdanning",
    label: { no: "Utdanning, strategi og fagmiljø", en: "Education, strategy and community" },
    innleggIds: [
      "tilskuere-ror-genai-master-bi-2026-06",
      "bi-master-oppstart-01",
      "strategi-ai-master-01",
      "bi-generative-ai-for-business-2026-01",
      "bi-genai-avslutning-master-2026-06",
      "ai-agent-007-master-bi-2026-06",
      "ai-learning-google-skills-01",
      "sopra-steria-produktutvikling-ai-2026-06",
      "rocket-verdilekkasje-ai-kommersiell-2026-06",
      "ai-kompetanse-tech-frokost-telenor-2026-05",
      "nova-frokost-ai-kjernekompetanse-2026-05",
      "iteam-operativ-modell-2026-01",
      "ai-tech-frokost-rebel-01",
      "nova-day-data-forst-01",
      "ai-value-lab-munch-kickoff-01",
    ],
  },
  {
    id: "ai-praksis",
    label: { no: "Praksis, lab og prosjekter", en: "Practice, lab and projects" },
    innleggIds: [
      "ai-value-lab-01",
      "ai-value-lab-smb-praksis-2026-06",
      "genai-foerste-reklamefilm-psc-2026-05",
      "predictive-sales-coach-01",
      "nettside-lansering-2026-01",
    ],
  },
];

type InnleggMedTittel = FaginnleggPost & {
  tittel: { no: string; en: string };
};

export function sorterFaginnlegg<T extends InnleggMedTittel>(innlegg: T[], mode: FaginnleggSortMode, lang: Lang): T[] {
  const kopi = [...innlegg];
  if (mode === "nyeste") {
    return kopi.sort((a, b) => new Date(b.dato).getTime() - new Date(a.dato).getTime());
  }
  if (mode === "eldste") {
    return kopi.sort((a, b) => new Date(a.dato).getTime() - new Date(b.dato).getTime());
  }
  return kopi.sort((a, b) => a.tittel[lang].localeCompare(b.tittel[lang], lang === "no" ? "nb" : "en", { sensitivity: "base" }));
}

export function grupperLedelseInnlegg<T extends InnleggMedTittel>(
  innlegg: T[],
  sortMode: FaginnleggSortMode,
  lang: Lang
): { subtema: FaginnleggSubtema; innlegg: T[] }[] {
  const ledelseInnlegg = innlegg.filter((item) => erLedelseInnlegg(item.kategori));
  const idTilInnlegg = new Map(ledelseInnlegg.map((item) => [item.id, item]));

  return LEDELSE_SUBTEMA.map((subtema) => ({
    subtema,
    innlegg: sorterFaginnlegg(
      (subtema.innleggIds ?? [])
        .map((id) => idTilInnlegg.get(id))
        .filter((item): item is T => Boolean(item)),
      sortMode,
      lang
    ),
  })).filter((gruppe) => gruppe.innlegg.length > 0);
}

export function grupperAiInnlegg<T extends InnleggMedTittel>(
  innlegg: T[],
  sortMode: FaginnleggSortMode,
  lang: Lang
): { subtema: FaginnleggSubtema; innlegg: T[] }[] {
  const aiInnlegg = innlegg.filter((item) => erAiInnlegg(item.kategori));
  const idTilInnlegg = new Map(aiInnlegg.map((item) => [item.id, item]));

  return AI_SUBTEMA.map((subtema) => ({
    subtema,
    innlegg: sorterFaginnlegg(
      (subtema.innleggIds ?? [])
        .map((id) => idTilInnlegg.get(id))
        .filter((item): item is T => Boolean(item)),
      sortMode,
      lang
    ),
  })).filter((gruppe) => gruppe.innlegg.length > 0);
}

export function tellMedSuffix(antall: number, lang: Lang): string {
  return lang === "no" ? ` (${antall} stk)` : ` (${antall})`;
}

export function sporOverskriftMedTelling(label: string, antall: number, lang: Lang): string {
  return `${label}${tellMedSuffix(antall, lang)}`;
}

export function subtemaOverskriftMedTelling(subtema: FaginnleggSubtema, antall: number, lang: Lang): string {
  return `${subtema.label[lang]}${tellMedSuffix(antall, lang)}`;
}

/** Validerer at alle AI-innlegg er mappet til et subtema (kun dev-hjelp). */
export function finnUmappedeAiInnlegg(innlegg: FaginnleggPost[]): string[] {
  const mappedeIds = new Set(AI_SUBTEMA.flatMap((s) => s.innleggIds ?? []));
  return innlegg.filter((item) => erAiInnlegg(item.kategori) && !mappedeIds.has(item.id)).map((item) => item.id);
}

/** Validerer at alle ledelse-innlegg er mappet til et subtema (kun dev-hjelp). */
export function finnUmappedeLedelseInnlegg(innlegg: FaginnleggPost[]): string[] {
  const mappedeIds = new Set(LEDELSE_SUBTEMA.flatMap((s) => s.innleggIds ?? []));
  return innlegg
    .filter((item) => erLedelseInnlegg(item.kategori) && !mappedeIds.has(item.id))
    .map((item) => item.id);
}
