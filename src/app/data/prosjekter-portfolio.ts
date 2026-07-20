import type { Lang } from "../LanguageContext";
import { controlTower } from "./prosjekter/control-tower";
import { aiTransformationValueRealization } from "./prosjekter/ai-transformation-value-realization";
import { aiReadinessScan } from "./prosjekter/ai-readiness-scan";
import { flowSignal } from "./prosjekter/flowsignal";
import { predictiveSalesCoach, type ProsjektType } from "./prosjekter/predictive-sales-coach";
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

export type ProsjektPortfolioEntry = {
  id: string;
  introSlug: string;
};

export type ProsjektPortfolioKategori = {
  anchorId: string;
  legacyAnchorIds?: string[];
  title: { no: string; en: string };
  /** Kort intro i hurtigoversikten øverst på siden. */
  overviewDescription?: { no: string; en: string };
  /** Kort intro over prosjektkortene i kategoriseksjonen. */
  listDescription: { no: string; en: string };
  /** Kort etikett i metadatarekken på prosjektkort. */
  metadataLabel: { no: string; en: string };
  projects: ProsjektPortfolioEntry[];
};

/** Tidligere kategori-ankere → nåværende anchorId (for eksterne lenker). */
export const PROSJEKT_KATEGORI_LEGACY_ANCHORS: Record<string, string> = {
  "fag-og-samarbeid": "fag-samarbeid-og-formidling",
  "modell-og-arbeidsflyt": "modeller-og-arbeidsflyter",
};

export const PROSJEKT_PORTFOLIO_KATEGORIER: ProsjektPortfolioKategori[] = [
  {
    anchorId: "strategiske-plattformer",
    title: { no: "Strategiske plattformer", en: "Strategic platforms" },
    overviewDescription: {
      no: "Lederorienterte plattformer for prioritering, transformasjon, beslutningsstøtte og gjennomføring.",
      en: "Leadership-oriented platforms for prioritisation, transformation, decision support and execution.",
    },
    listDescription: {
      no: "Lederorienterte plattformer som viser hvordan AI, transformasjon, prioritering, beslutningsstøtte og praktisk gjennomføring kan kobles sammen.",
      en: "Leadership-oriented platforms showing how AI, transformation, prioritisation, decision support and practical execution can be connected.",
    },
    metadataLabel: { no: "Strategisk plattform", en: "Strategic platform" },
    projects: [
      { id: "ai-transformation-value-realization", introSlug: "ai-transformation" },
      { id: "control-tower", introSlug: "control-tower" },
    ],
  },
  {
    anchorId: "apper-og-prototyper",
    title: { no: "Apper og prototyper", en: "Apps and prototypes" },
    overviewDescription: {
      no: "Funksjonelle AI-løsninger for salgstrening, teamutvikling, AI-beredskap og kommersiell forbedring.",
      en: "Functional AI solutions for sales training, team development, AI readiness and commercial improvement.",
    },
    listDescription: {
      no: "Funksjonelle og testbare løsninger som viser produktutvikling, brukerflyt og praktisk bruk av AI innen salg, teamutvikling, AI-beredskap og kommersiell forbedring.",
      en: "Functional, testable solutions showing product development, user flow and practical use of AI in sales, team development, AI readiness and commercial improvement.",
    },
    metadataLabel: { no: "App og prototype", en: "App and prototype" },
    projects: [
      { id: "predictive-sales-coach-2026", introSlug: "psc" },
      { id: "flowsignal-2026-05", introSlug: "flowsignal" },
      { id: "ai-readiness-scan-2026-06", introSlug: "readiness-scan" },
      { id: "smb-salgsflyt-sjekken-2026", introSlug: "salgsflyt" },
    ],
  },
  {
    anchorId: "case-og-implementering",
    title: { no: "Case og implementering", en: "Case and implementation" },
    listDescription: {
      no: "Prosjekter som dokumenterer hvordan AI, digital utvikling og implementeringslogikk kan omsettes fra behov og metode til konkret anvendelse.",
      en: "Projects documenting how AI, digital development and implementation logic can be translated from needs and method into concrete application.",
    },
    metadataLabel: { no: "Case og implementering", en: "Case and implementation" },
    projects: [
      { id: "prosjektoppgave-strategisk-implementering-2026", introSlug: "strategisk" },
      { id: "skoyenasen-tannklinikk-2026", introSlug: "tannklinikk" },
      { id: "mariusottesen-no-2025", introSlug: "nettside" },
    ],
  },
  {
    anchorId: "modeller-og-arbeidsflyter",
    legacyAnchorIds: ["modell-og-arbeidsflyt"],
    title: { no: "Modeller og arbeidsflyter", en: "Models and workflows" },
    listDescription: {
      no: "Modeller og arbeidsflyter for beslutningsstøtte, kunnskapsarbeid, kommunikasjon, prioritering og neste beste handling.",
      en: "Models and workflows for decision support, knowledge work, communication, prioritisation and next best action.",
    },
    metadataLabel: { no: "Modell og arbeidsflyt", en: "Model and workflow" },
    projects: [
      { id: "ai-assistert-innsikts-og-opportunity-agent-2026", introSlug: "agent" },
      { id: "ai-assistert-innsikts-og-innholdsagent-2026", introSlug: "innhold" },
      { id: "ai-arkitektur-beslutningsstotte-2026", introSlug: "beslutning" },
    ],
  },
  {
    anchorId: "fag-samarbeid-og-formidling",
    legacyAnchorIds: ["fag-og-samarbeid"],
    title: { no: "Fag, samarbeid og formidling", en: "Knowledge, collaboration and communication" },
    overviewDescription: {
      no: "Faglige initiativer og formater for læring, samarbeid, formidling og praktisk deling av AI-erfaringer.",
      en: "Professional initiatives and formats for learning, collaboration, communication and practical sharing of AI experience.",
    },
    listDescription: {
      no: "Faglige initiativer og formater for læring, samarbeid, formidling og praktisk deling av AI-erfaringer.",
      en: "Professional initiatives and formats for learning, collaboration, communication and practical sharing of AI experience.",
    },
    metadataLabel: { no: "Faglig initiativ", en: "Professional initiative" },
    projects: [
      { id: "ai-value-lab-oslo-2026", introSlug: "value-lab" },
      { id: "ai-faginnlegg-serie-2026", introSlug: "faginnlegg" },
      { id: "psc-promo-video-moc-2026", introSlug: "psc-video" },
    ],
  },
];

/** Flat redaksjonell rekkefølge — avledet fra kategoriporteføljen. */
export const PROSJEKT_PORTFOLIO_ORDER: string[] = PROSJEKT_PORTFOLIO_KATEGORIER.flatMap(
  (kategori) => kategori.projects.map((prosjekt) => prosjekt.id)
);

const legacyProsjekter: ProsjektType[] = [
  aiTransformationValueRealization,
  controlTower,
  predictiveSalesCoach,
  flowSignal,
  aiReadinessScan,
  smbSalgsflytSjekken,
  pscPromoVideo,
  mariusottesenNettside,
  prosjektoppgaveStrategiskImplementering,
  skoyenasenTannklinikk,
  aiAssistertInnsiktsagent,
  aiAssistertInnsiktsOgInnholdsagent,
  aiArkitekturBeslutningsstotte,
  aiValueLabOslo,
  aiFaginnleggHub,
];

const legacyProsjektById = Object.fromEntries(legacyProsjekter.map((prosjekt) => [prosjekt.id, prosjekt])) as Record<
  string,
  ProsjektType
>;

export function getLegacyProsjektById(prosjektId: string): ProsjektType | undefined {
  return legacyProsjektById[prosjektId];
}

export function sortProsjekterByPortfolioOrder<T extends { id: string }>(projects: T[]): T[] {
  const order = new Map(PROSJEKT_PORTFOLIO_ORDER.map((id, index) => [id, index]));
  return [...projects].sort(
    (a, b) => (order.get(a.id) ?? PROSJEKT_PORTFOLIO_ORDER.length) - (order.get(b.id) ?? PROSJEKT_PORTFOLIO_ORDER.length)
  );
}

export type ProsjektHurtigLenke = ProsjektPortfolioEntry;

export type ProsjektHurtigKategori = {
  title: { no: string; en: string };
  description?: { no: string; en: string };
  anchorId: string;
  legacyAnchorIds?: string[];
  lenker: ProsjektHurtigLenke[];
};

export function getProsjektHurtigoversikt(_lang: Lang): ProsjektHurtigKategori[] {
  return PROSJEKT_PORTFOLIO_KATEGORIER.map((kategori) => ({
    title: kategori.title,
    description: kategori.overviewDescription,
    anchorId: kategori.anchorId,
    legacyAnchorIds: kategori.legacyAnchorIds,
    lenker: kategori.projects,
  }));
}

export function getProsjektPortfolioKategoriMetadataLabel(kategori: ProsjektPortfolioKategori, lang: Lang): string {
  return kategori.metadataLabel[lang];
}

/** Løser hash til gyldig anker — støtter legacy kategori-ankere og prosjekt-ID-er. */
export function resolveProsjektPageHash(hash: string): string {
  if (!hash) return hash;
  if (PROSJEKT_KATEGORI_LEGACY_ANCHORS[hash]) return PROSJEKT_KATEGORI_LEGACY_ANCHORS[hash];
  for (const kategori of PROSJEKT_PORTFOLIO_KATEGORIER) {
    if (kategori.legacyAnchorIds?.includes(hash)) return kategori.anchorId;
  }
  return hash;
}
