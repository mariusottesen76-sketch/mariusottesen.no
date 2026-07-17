import { Lang } from "../LanguageContext";
import { controlTower } from "./prosjekter/control-tower";
import { aiTransformationValueRealization } from "./prosjekter/ai-transformation-value-realization";
import { aiReadinessScan } from "./prosjekter/ai-readiness-scan";
import { flowSignal } from "./prosjekter/flowsignal";
import { predictiveSalesCoach } from "./prosjekter/predictive-sales-coach";
import { smbSalgsflytSjekken } from "./prosjekter/smb-salgsflyt-sjekken";
import { pscPromoVideo } from "./prosjekter/psc-promo-video";
import { prosjektoppgaveStrategiskImplementering } from "./prosjekter/prosjektoppgave-strategisk-implementering";
import { skoyenasenTannklinikk } from "./prosjekter/skoyenasen-tannklinikk";
import { aiAssistertInnsiktsagent } from "./prosjekter/ai-assistert-innsiktsagent";
import { aiAssistertInnsiktsOgInnholdsagent } from "./prosjekter/ai-assistert-innsikts-og-innholdsagent";
import { aiArkitekturBeslutningsstotte } from "./prosjekter/ai-arkitektur-beslutningsstotte";
import { aiValueLabOslo } from "./prosjekter/ai-value-lab-oslo";
import { aiFaginnleggHub } from "./prosjekter/ai-faginnlegg-hub";
import { mariusottesenNettside } from "./prosjekter/mariusottesen-nettside";

export type ProsjektHurtigLenke = {
  prosjektId: string;
  /** Nøkkel under prosjekter.intro.punkt.{introSlug}.label / .desc */
  introSlug: string;
  label: { no: string; en: string };
};

export type ProsjektHurtigKategori = {
  title: { no: string; en: string };
  description?: { no: string; en: string };
  /** Behold eksplisitt rekkefølge når true — ellers sorteres lenker etter dato. */
  fixedOrder?: boolean;
  lenker: ProsjektHurtigLenke[];
};

const kategorier: ProsjektHurtigKategori[] = [
  {
    title: { no: "Strategiske plattformer", en: "Strategic platforms" },
    description: {
      no: "Lederorienterte plattformer for prioritering, transformasjon, beslutningsstøtte og gjennomføring.",
      en: "Leadership-oriented platforms for prioritisation, transformation, decision support and execution.",
    },
    fixedOrder: true,
    lenker: [
      {
        prosjektId: "ai-transformation-value-realization",
        introSlug: "ai-transformation",
        label: { no: "AI Transformation & Value Realization", en: "AI Transformation & Value Realization" },
      },
      {
        prosjektId: "control-tower",
        introSlug: "control-tower",
        label: { no: "Control Tower", en: "Control Tower" },
      },
    ],
  },
  {
    title: { no: "Apper og prototyper", en: "Apps and prototypes" },
    description: {
      no: "Funksjonelle AI-løsninger for salgstrening, teamutvikling, AI-beredskap og kommersiell forbedring.",
      en: "Functional AI solutions for sales training, team development, AI readiness and commercial improvement.",
    },
    fixedOrder: true,
    lenker: [
      {
        prosjektId: "predictive-sales-coach-2026",
        introSlug: "psc",
        label: { no: "The Predictive Sales Coach v2.0", en: "The Predictive Sales Coach v2.0" },
      },
      { prosjektId: "flowsignal-2026-05", introSlug: "flowsignal", label: { no: "FlowSignal", en: "FlowSignal" } },
      {
        prosjektId: "ai-readiness-scan-2026-06",
        introSlug: "readiness-scan",
        label: { no: "AI Readiness Scan", en: "AI Readiness Scan" },
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
        prosjektId: "mariusottesen-no-2025",
        introSlug: "nettside",
        label: { no: "Nettside for mariusottesen.no", en: "Website for mariusottesen.no" },
      },
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

const prosjektDatoById = Object.fromEntries(
  [
    aiTransformationValueRealization,
    controlTower,
    aiReadinessScan,
    flowSignal,
    predictiveSalesCoach,
    smbSalgsflytSjekken,
    pscPromoVideo,
    prosjektoppgaveStrategiskImplementering,
    skoyenasenTannklinikk,
    aiAssistertInnsiktsagent,
    aiAssistertInnsiktsOgInnholdsagent,
    aiArkitekturBeslutningsstotte,
    aiValueLabOslo,
    aiFaginnleggHub,
    mariusottesenNettside,
  ].map((prosjekt) => [prosjekt.id, prosjekt.dato])
);

function sortLenkerEtterDato(lenker: ProsjektHurtigLenke[]): ProsjektHurtigLenke[] {
  return [...lenker].sort(
    (a, b) =>
      new Date(prosjektDatoById[b.prosjektId]).getTime() - new Date(prosjektDatoById[a.prosjektId]).getTime()
  );
}

export function getProsjektHurtigoversikt(_lang: Lang): ProsjektHurtigKategori[] {
  return kategorier.map((kategori) => ({
    ...kategori,
    lenker: kategori.fixedOrder ? kategori.lenker : sortLenkerEtterDato(kategori.lenker),
  }));
}
