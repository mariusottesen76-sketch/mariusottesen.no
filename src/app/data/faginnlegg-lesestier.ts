import { Lang } from "../LanguageContext";
import { LESESTI_ARTICLE_IDS } from "./faginnlegg-authority";

export type LeseSti = {
  title: { no: string; en: string };
  intro: { no: string; en: string };
  /** Direkte anbefalte artikler — slug-id i prioritert rekkefølge. */
  articleIds: readonly string[];
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
    articleIds: LESESTI_ARTICLE_IDS.rekrutterere,
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
    articleIds: LESESTI_ARTICLE_IDS.ledereKommersielle,
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
    articleIds: LESESTI_ARTICLE_IDS.aiInteresserte,
  },
];

export function getFaginnleggLeseStier(_lang: Lang): LeseSti[] {
  return lesestier;
}
