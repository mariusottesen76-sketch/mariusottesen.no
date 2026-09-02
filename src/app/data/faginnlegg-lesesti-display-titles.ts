import type { Lang } from "../LanguageContext";
import type { LESESTI_ARTICLE_IDS } from "./faginnlegg-authority";

export type LeseStiKey = keyof typeof LESESTI_ARTICLE_IDS;

type LocalizedDisplayTitle = { no: string; en: string };

/** Korte labels kun for lesestier — artikkel-H1/tittel i source of truth er urørt. */
const LESESTI_DISPLAY_TITLES: Record<LeseStiKey, Record<string, LocalizedDisplayTitle>> = {
  rekrutterere: {
    "salgsledelse-i-praksis-2026-08": {
      no: "Salgsledelse i praksis",
      en: "Sales leadership in practice",
    },
    "fra-strategi-til-gjennomforing-2026-09": {
      no: "Fra strategi til gjennomføring – fra beslutning til arbeidshverdag",
      en: "From strategy to execution – from decision to everyday work",
    },
    "psykologisk-trygghet-krav-2026-01": {
      no: "Psykologisk trygghet er ikke fravær av krav",
      en: "Psychological safety is not the absence of demands",
    },
    "ai-needs-first-tannklinikk-case-01": {
      no: "De fleste starter feil med AI",
      en: "Most people start wrong with AI",
    },
  },
  ledereKommersielle: {
    "fra-data-til-beslutning-2026-09": {
      no: "Fra data til beslutning – fra signaler til handling",
      en: "From data to decision – from signals to action",
    },
    "salgsledelse-i-praksis-2026-08": {
      no: "Salgsledelse i praksis",
      en: "Sales leadership in practice",
    },
    "crm-mer-enn-et-systemprosjekt-2026-09": {
      no: "CRM er mer enn et systemprosjekt",
      en: "CRM is more than a system project",
    },
    "fra-strategi-til-gjennomforing-2026-09": {
      no: "Fra strategi til gjennomføring – fra beslutning til arbeidshverdag",
      en: "From strategy to execution – from decision to everyday work",
    },
    "control-tower-verdikjede-ledelse-2026-08": {
      no: "Når du ikke eier hele verdikjeden",
      en: "When you don't own the whole value chain",
    },
  },
  aiInteresserte: {
    "ai-needs-first-tannklinikk-case-01": {
      no: "De fleste starter feil med AI",
      en: "Most people start wrong with AI",
    },
    "praktisk-oppskrift-skalering-01": {
      no: "Fra pilot til skalering",
      en: "From pilot to scaling",
    },
    "ai-governance-i-praksis-01": {
      no: "AI-governance i praksis",
      en: "AI governance in practice",
    },
    "crm-mer-enn-et-systemprosjekt-2026-09": {
      no: "CRM er mer enn et systemprosjekt",
      en: "CRM is more than a system project",
    },
  },
};

export function getLeseStiDisplayTitle(
  pathKey: LeseStiKey,
  articleId: string,
  lang: Lang
): string | undefined {
  return LESESTI_DISPLAY_TITLES[pathKey]?.[articleId]?.[lang];
}
