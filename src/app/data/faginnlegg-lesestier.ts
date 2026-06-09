import { Lang } from "../LanguageContext";

export type LeseStiTopic = {
  label: { no: string; en: string };
  /** Lenker til subtema i innholdsfortegnelsen når satt. */
  subtemaId?: string;
};

export type LeseSti = {
  title: { no: string; en: string };
  intro: { no: string; en: string };
  topics: LeseStiTopic[];
};

const lesestier: LeseSti[] = [
  {
    title: {
      no: "For rekrutterere og arbeidsgivere",
      en: "For recruiters and employers",
    },
    intro: {
      no: "Få raskt innblikk i lederprofil, kommersiell erfaring, gjennomføringsevne og hvordan jeg tenker om AI som del av moderne ledelse.",
      en: "Get a quick view of leadership profile, commercial experience, execution capability and how I think about AI as part of modern leadership.",
    },
    topics: [
      { label: { no: "Lederstil", en: "Leadership style" }, subtemaId: "ledelse-kultur" },
      { label: { no: "Kommersiell ledelse", en: "Commercial leadership" }, subtemaId: "ledelse-kommersiell" },
      { label: { no: "Transformasjon", en: "Transformation" }, subtemaId: "ledelse-strategi" },
      { label: { no: "AI-perspektiv", en: "AI perspective" }, subtemaId: "ai-grunnlag" },
    ],
  },
  {
    title: {
      no: "For ledere og kommersielle team",
      en: "For leaders and commercial teams",
    },
    intro: {
      no: "Les innlegg om strategi, endring, prestasjon, salgsledelse og hvordan team kan skape bedre gjennomføring over tid.",
      en: "Read articles on strategy, change, performance, sales leadership and how teams can create better execution over time.",
    },
    topics: [
      { label: { no: "Strategi", en: "Strategy" }, subtemaId: "ledelse-strategi" },
      { label: { no: "Gjennomføring", en: "Execution" }, subtemaId: "ledelse-endring" },
      { label: { no: "Kultur", en: "Culture" }, subtemaId: "ledelse-kultur" },
      { label: { no: "Kommersiell praksis", en: "Commercial practice" }, subtemaId: "ledelse-kommersiell" },
    ],
  },
  {
    title: {
      no: "For AI-interesserte arbeidsgivere og kunder",
      en: "For AI-interested employers and clients",
    },
    intro: {
      no: "Utforsk hvordan AI kan kobles til arbeidsflyt, CRM, beslutningsstøtte, governance og praktiske prosjekter.",
      en: "Explore how AI can connect to workflow, CRM, decision support, governance and practical projects.",
    },
    topics: [
      { label: { no: "AI-verdi", en: "AI value" }, subtemaId: "ai-grunnlag" },
      { label: { no: "Arbeidsflyt", en: "Workflow" }, subtemaId: "ai-arbeidsflyt" },
      { label: { no: "Data og CRM", en: "Data and CRM" }, subtemaId: "ai-data-crm" },
      { label: { no: "Implementering", en: "Implementation" }, subtemaId: "ai-praksis" },
    ],
  },
];

export function getFaginnleggLeseStier(_lang: Lang): LeseSti[] {
  return lesestier;
}
