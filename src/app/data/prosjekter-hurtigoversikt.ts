import { Lang } from "../LanguageContext";

export type ProsjektHurtigLenke = {
  prosjektId: string;
  /** Nøkkel under prosjekter.intro.punkt.{introSlug}.label / .desc */
  introSlug: string;
  label: { no: string; en: string };
};

export type ProsjektHurtigKategori = {
  title: { no: string; en: string };
  lenker: ProsjektHurtigLenke[];
};

const kategorier: ProsjektHurtigKategori[] = [
  {
    title: { no: "App og prototype", en: "App and prototype" },
    lenker: [
      { prosjektId: "flowsignal-2026-05", introSlug: "flowsignal", label: { no: "FlowSignal", en: "FlowSignal" } },
      {
        prosjektId: "predictive-sales-coach-2026",
        introSlug: "psc",
        label: { no: "The Predictive Sales Coach v6", en: "The Predictive Sales Coach v6" },
      },
      {
        prosjektId: "smb-salgsflyt-sjekken-2026",
        introSlug: "salgsflyt",
        label: { no: "SMB Salgsflyt-sjekken", en: "SMB Sales Flow Check" },
      },
      {
        prosjektId: "psc-promo-video-moc-2026",
        introSlug: "psc-video",
        label: { no: "Promovideo PSC", en: "PSC promo video" },
      },
    ],
  },
  {
    title: { no: "Case og implementering", en: "Case and implementation" },
    lenker: [
      {
        prosjektId: "prosjektoppgave-strategisk-implementering-2026",
        introSlug: "strategisk",
        label: { no: "Strategisk AI-implementering", en: "Strategic AI implementation" },
      },
      {
        prosjektId: "skoyenasen-tannklinikk-2026",
        introSlug: "tannklinikk",
        label: { no: "Skøyenåsen Tannklinikk", en: "Skøyenåsen Tannklinikk" },
      },
    ],
  },
  {
    title: { no: "Modell og arbeidsflyt", en: "Model and workflow" },
    lenker: [
      {
        prosjektId: "ai-assistert-innsikts-og-opportunity-agent-2026",
        introSlug: "agent",
        label: { no: "Agentisk arbeidsflyt", en: "Agentic workflow" },
      },
      {
        prosjektId: "ai-assistert-innsikts-og-innholdsagent-2026",
        introSlug: "innhold",
        label: {
          no: "AI-assistert innsikts- og innholdsmotor",
          en: "AI-assisted insight and content engine",
        },
      },
      {
        prosjektId: "ai-arkitektur-beslutningsstotte-2026",
        introSlug: "beslutning",
        label: {
          no: "AI-arkitektur for beslutningsstøtte",
          en: "AI architecture for decision support",
        },
      },
    ],
  },
  {
    title: { no: "Fag og samarbeid", en: "Knowledge and collaboration" },
    lenker: [
      {
        prosjektId: "ai-value-lab-oslo-2026",
        introSlug: "value-lab",
        label: { no: "AI Value Lab Oslo", en: "AI Value Lab Oslo" },
      },
      {
        prosjektId: "ai-faginnlegg-serie-2026",
        introSlug: "faginnlegg",
        label: {
          no: "Faginnlegg: AI og fremtidens teknologiledelse",
          en: "Articles: AI and next-generation technology leadership",
        },
      },
    ],
  },
];

export function getProsjektHurtigoversikt(_lang: Lang): ProsjektHurtigKategori[] {
  return kategorier;
}
