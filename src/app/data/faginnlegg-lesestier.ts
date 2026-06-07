import { Lang } from "../LanguageContext";

export type LeseStiSubtemaRef = {
  subtemaId: string;
};

export type LeseSti = {
  title: { no: string; en: string };
  intro: { no: string; en: string };
  subtemaRefs: LeseStiSubtemaRef[];
};

const lesestier: LeseSti[] = [
  {
    title: {
      no: "For rekrutterere og arbeidsgivere",
      en: "For recruiters and employers",
    },
    intro: {
      no: "Få et helhetlig bilde av lederprofil, kommersiell erfaring, gjennomføring og AI-perspektiv — tema for tema, ikke tre tilfeldige innlegg.",
      en: "Get a full picture of leadership profile, commercial experience, execution and AI perspective — topic by topic, not three random posts.",
    },
    subtemaRefs: [
      { subtemaId: "ledelse-strategi" },
      { subtemaId: "ledelse-endring" },
      { subtemaId: "ledelse-kommersiell" },
      { subtemaId: "ledelse-kultur" },
      { subtemaId: "ai-grunnlag" },
    ],
  },
  {
    title: {
      no: "For ledere og kommersielle team",
      en: "For leaders and commercial teams",
    },
    intro: {
      no: "Følg hele sporet fra strategi og transformasjon til kultur, endring og kommersiell praksis — slik innleggene faktisk er gruppert.",
      en: "Follow the full arc from strategy and transformation to culture, change and commercial practice — as the articles are actually grouped.",
    },
    subtemaRefs: [
      { subtemaId: "ledelse-strategi" },
      { subtemaId: "ledelse-endring" },
      { subtemaId: "ledelse-kultur" },
      { subtemaId: "ledelse-kommersiell" },
    ],
  },
  {
    title: {
      no: "For AI-interesserte arbeidsgivere og kunder",
      en: "For AI-interested employers and clients",
    },
    intro: {
      no: "Gå systematisk fra grunnlag og arbeidsflyt til data, governance og praktiske prosjekter — fem AI-temaer som dekker hele feltet.",
      en: "Move systematically from foundations and workflow to data, governance and practical projects — five AI topics covering the full field.",
    },
    subtemaRefs: [
      { subtemaId: "ai-grunnlag" },
      { subtemaId: "ai-arbeidsflyt" },
      { subtemaId: "ai-data-crm" },
      { subtemaId: "ai-governance" },
      { subtemaId: "ai-praksis" },
    ],
  },
];

export function getFaginnleggLeseStier(_lang: Lang): LeseSti[] {
  return lesestier;
}
