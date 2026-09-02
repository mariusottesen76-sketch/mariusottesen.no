import type { Lang } from "../LanguageContext";
import type { LESESTI_ARTICLE_IDS } from "./faginnlegg-authority";

export type LeseStiKey = keyof typeof LESESTI_ARTICLE_IDS;

type LocalizedDisplayTitle = { no: string; en: string };

/** Display labels kun for lesestier — artikkel-H1/tittel i source of truth er urørt. */
const LESESTI_DISPLAY_TITLES: Record<LeseStiKey, Record<string, LocalizedDisplayTitle>> = {
  rekrutterere: {
    "salgsledelse-i-praksis-2026-08": {
      no: "Salgsledelse i praksis – fra aktivitet til læring, prioritering og resultater",
      en: "Sales leadership in practice – from activity to learning, prioritisation and results",
    },
    "fra-strategi-til-gjennomforing-2026-09": {
      no: "Fra strategi til gjennomføring – fra beslutning til arbeidshverdag",
      en: "From strategy to execution – from decision to everyday work",
    },
    "psykologisk-trygghet-krav-2026-01": {
      no: "Psykologisk trygghet er ikke fravær av krav – trygghet med tydelige forventninger",
      en: "Psychological safety is not the absence of demands – safety with clear expectations",
    },
    "ai-needs-first-tannklinikk-case-01": {
      no: "De fleste starter feil med AI – start med behovet, ikke teknologien",
      en: "Most people start wrong with AI – start with the need, not the technology",
    },
  },
  ledereKommersielle: {
    "fra-data-til-beslutning-2026-09": {
      no: "Fra data til beslutning – fra signaler til handling",
      en: "From data to decision – from signals to action",
    },
    "salgsledelse-i-praksis-2026-08": {
      no: "Salgsledelse i praksis – fra aktivitet til læring, prioritering og resultater",
      en: "Sales leadership in practice – from activity to learning, prioritisation and results",
    },
    "crm-mer-enn-et-systemprosjekt-2026-09": {
      no: "CRM er mer enn et systemprosjekt – fra system til felles arbeidspraksis",
      en: "CRM is more than a system project – from system to shared working practice",
    },
    "fra-strategi-til-gjennomforing-2026-09": {
      no: "Fra strategi til gjennomføring – fra beslutning til arbeidshverdag",
      en: "From strategy to execution – from decision to everyday work",
    },
    "control-tower-verdikjede-ledelse-2026-08": {
      no: "Når du ikke eier hele verdikjeden – gjennomføring på tvers av salg og drift",
      en: "When you don't own the whole value chain – execution across sales and operations",
    },
  },
  aiInteresserte: {
    "ai-needs-first-tannklinikk-case-01": {
      no: "De fleste starter feil med AI – start med behovet, ikke teknologien",
      en: "Most people start wrong with AI – start with the need, not the technology",
    },
    "praktisk-oppskrift-skalering-01": {
      no: "Fra pilot til skalering – fra utprøving til varig verdi",
      en: "From pilot to scaling – from experimentation to lasting value",
    },
    "ai-governance-i-praksis-01": {
      no: "AI-governance i praksis – styring, ansvar og kontroll",
      en: "AI governance in practice – steering, accountability and control",
    },
    "crm-mer-enn-et-systemprosjekt-2026-09": {
      no: "CRM er mer enn et systemprosjekt – fra system til felles arbeidspraksis",
      en: "CRM is more than a system project – from system to shared working practice",
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
