import type { Lang } from "../LanguageContext";

/** Godkjent åpen søknad PDF (nov. 2026) — lederfilosofi, ikke full stillingshistorikk. */
export const OPEN_APPLICATION_SOURCE_ID = "approved-open-application-2026-11-04";

/** C — aktuelle lederroller (fra åpen søknad; supplerer AKTUELL_FOR_ROLLER på profil). */
export const OPEN_APPLICATION_TARGET_ROLES: Record<Lang, string[]> = {
  no: [
    "Daglig leder / Managing Director",
    "Kommersiell leder / CCO",
    "Salgsdirektør / Head of Sales",
    "Regionsjef",
    "Forretningsområdeleder / Business Unit Manager",
    "Lederroller innen vekst, lønnsomhet og transformasjon",
  ],
  en: [
    "Managing Director / General Manager",
    "Commercial Director / CCO",
    "Sales Director / Head of Sales",
    "Regional Director",
    "Business Unit Manager / Director",
    "Leadership roles in growth, profitability and transformation",
  ],
};

export const LEADERSHIP_PHILOSOPHY: Record<Lang, string[]> = {
  no: [
    "Først forstå problemstillingen — tall, kunder, medarbeidere og drift",
    "Velge tydelig retning og prioritere for fremdrift",
    "Mobilisere mennesker: strategi må bli mål, ansvar og handling",
    "Skape kundeverdi og langsiktige relasjoner",
    "Lære av erfaring og resultater underveis",
    "Forståelse → valg → praksis → læring",
  ],
  en: [
    "First understand the challenge — numbers, customers, people and operations",
    "Choose clear direction and priorities for momentum",
    "Mobilise people: strategy must become goals, accountability and action",
    "Create customer value and long-term relationships",
    "Learn from experience and results along the way",
    "Understanding → choices → practice → learning",
  ],
};

export const LEADERSHIP_STYLE: Record<Lang, string[]> = {
  no: [
    "Tydelig og involverende",
    "Relasjonsorientert",
    "Klare forventninger og ansvar",
    "Coaching og medarbeiderutvikling",
    "Styrkebasert ledelse",
    "Tverrfunksjonelt samarbeid mellom salg, drift, marked og ledelse",
  ],
  en: [
    "Clear and engaging",
    "Relationship-oriented",
    "Clear expectations and accountability",
    "Coaching and people development",
    "Strengths-based leadership",
    "Cross-functional collaboration across sales, operations, marketing and leadership",
  ],
};

export const VALUE_CREATION_THEMES: Record<Lang, string[]> = {
  no: [
    "Omsette strategi til konkrete kommersielle resultater",
    "Vekst og lønnsomhet gjennom salgsledelse og kundeutvikling",
    "KPI, CRM og kommersiell styring",
    "Organisasjons- og kompetanseutvikling",
    "Samspill mellom salg, marked, drift og ledelse",
    "Praktisk AI, teknologi og arbeidsflyt for beslutninger og gjennomføring",
  ],
  en: [
    "Turn strategy into tangible commercial results",
    "Growth and profitability through sales leadership and customer development",
    "KPIs, CRM and commercial governance",
    "Organisation and capability development",
    "Alignment across sales, marketing, operations and leadership",
    "Practical AI, technology and workflow for decisions and execution",
  ],
};

export const MOTIVATION_AND_FIT: Record<Lang, { motivation: string; bestFit: string }> = {
  no: {
    motivation:
      "Varig verdi skapes ikke bare gjennom gode beslutninger, men gjennom evnen til å omsette dem til praksis, se konsekvensene og lære underveis.",
    bestFit:
      "Virksomheter som trenger tydelig kommersiell retning, sterkere gjennomføring og utvikling av mennesker, kunder og arbeidsmåter.",
  },
  en: {
    motivation:
      "Lasting value is not created by good decisions alone, but by the ability to turn them into practice, see the consequences and learn along the way.",
    bestFit:
      "Organisations that need clear commercial direction, stronger execution and development of people, customers and ways of working.",
  },
};

export function formatOpenApplicationExcerpt(lang: Lang): string {
  const phil = LEADERSHIP_PHILOSOPHY[lang].join(" • ");
  const style = LEADERSHIP_STYLE[lang].join(" • ");
  const value = VALUE_CREATION_THEMES[lang].join(" • ");
  const roles = OPEN_APPLICATION_TARGET_ROLES[lang].join(", ");
  const { motivation, bestFit } = MOTIVATION_AND_FIT[lang];
  return [
    lang === "no" ? "Åpen søknad (godkjent PDF):" : "Open application (approved PDF):",
    lang === "no" ? `Lederfilosofi: ${phil}` : `Leadership philosophy: ${phil}`,
    lang === "no" ? `Lederstil: ${style}` : `Leadership style: ${style}`,
    lang === "no" ? `Verdiskaping: ${value}` : `Value creation: ${value}`,
    motivation,
    lang === "no" ? `Passer best: ${bestFit}` : `Best fit: ${bestFit}`,
    lang === "no" ? `Aktuelle roller: ${roles}` : `Target roles: ${roles}`,
  ].join("\n\n");
}