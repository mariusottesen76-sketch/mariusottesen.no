import { Lang } from "../LanguageContext";
import { LESESTI_ARTICLE_IDS } from "./faginnlegg-authority";
import type { LeseStiKey } from "./faginnlegg-lesesti-display-titles";

export type LeseSti = {
  id: LeseStiKey;
  title: { no: string; en: string };
  intro: { no: string; en: string };
  /** Direkte anbefalte artikler — slug-id i prioritert rekkefølge. */
  articleIds: readonly string[];
};

const lesestier: LeseSti[] = [
  {
    id: "rekrutterere",
    title: {
      no: "For rekrutterere og arbeidsgivere",
      en: "For recruiters and employers",
    },
    intro: {
      no: "Få et raskt innblikk i lederprofil, kommersiell erfaring, teamutvikling, gjennomføringsevne og hvordan jeg kombinerer ledelse, transformasjon og praktisk AI.",
      en: "Get a quick view of leadership profile, commercial experience, team development, execution capability and how I combine leadership, transformation and practical AI.",
    },
    articleIds: LESESTI_ARTICLE_IDS.rekrutterere,
  },
  {
    id: "ledereKommersielle",
    title: {
      no: "For ledere og kommersielle team",
      en: "For leaders and commercial teams",
    },
    intro: {
      no: "Les om hvordan data, salgsledelse, CRM, strategi og samspill mellom salg og drift kan omsettes til bedre prioriteringer og gjennomføring.",
      en: "Read about how data, sales leadership, CRM, strategy and the interplay between sales and operations can translate into better prioritisation and execution.",
    },
    articleIds: LESESTI_ARTICLE_IDS.ledereKommersielle,
  },
  {
    id: "aiInteresserte",
    title: {
      no: "For arbeidsgivere og kunder som vil bruke AI",
      en: "For employers and clients looking to use AI",
    },
    intro: {
      no: "Se hvordan AI kan brukes i praksis på reelle forretningsbehov, skalering, governance og CRM – med fokus på verdi, ansvar og gjennomføring.",
      en: "Explore how AI can be applied to real business needs, scaling, governance and CRM – with a focus on value, accountability and execution.",
    },
    articleIds: LESESTI_ARTICLE_IDS.aiInteresserte,
  },
];

export function getFaginnleggLeseStier(_lang: Lang): LeseSti[] {
  return lesestier;
}
