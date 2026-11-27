import type { KnowledgeLang } from "./types";

/**
 * Versionerte, statiske utdrag fra rowsolutions.no — ikke hentet ved hvert spørsmål.
 * Oppdateres ved publisering sammen med nettsted/Row-innhold.
 */
export type RowExternalSourceKey =
  | "home"
  | "tjenester"
  | "metoder"
  | "fra-innsikt-til-resultater"
  | "ai-discovery"
  | "smb-salgsflyt-sjekken"
  | "ai-readiness-scan"
  | "predictive-sales-coach";

export type RowExternalSourceDef = {
  key: RowExternalSourceKey;
  url: string;
  title: Record<KnowledgeLang, string>;
  description: Record<KnowledgeLang, string>;
  excerpt: Record<KnowledgeLang, string>;
};

export const ROW_EXTERNAL_SOURCES: RowExternalSourceDef[] = [
  {
    key: "home",
    url: "https://rowsolutions.no/",
    title: {
      no: "Row Solutions — kommersielt rådgivningssamarbeid",
      en: "Row Solutions — commercial advisory collaboration",
    },
    description: {
      no: "Offentlig nettsted for Row Solutions — aktivt SMB-rådgivningssamarbeid.",
      en: "Public website for Row Solutions — active SMB advisory collaboration.",
    },
    excerpt: {
      no: "Row Solutions – bedre kommersiell flyt fra synlighet til salg og oppfølging. Aktivt SMB-rådgivningssamarbeid (rowsolutions.no). Fire tjenesteområder: synlighet og posisjonering; salg og kundeoppfølging; arbeidsflyt og praktisk AI; forretningsutvikling og gjennomføring. Row er felles markedsnavn, ikke eget registrert AS — adskilt fra MOC.",
      en: "Row Solutions – better commercial flow from visibility to sales and follow-up. Active SME advisory collaboration (rowsolutions.no). Four service areas: visibility and positioning; sales and customer follow-up; workflow and practical AI; business development and execution. Row is a shared brand name, not a separately registered company — separate from MOC.",
    },
  },
  {
    key: "tjenester",
    url: "https://rowsolutions.no/tjenester",
    title: {
      no: "Tjenester — Row Solutions",
      en: "Services — Row Solutions",
    },
    description: {
      no: "Leveranseformer og tjenesteområder hos Row Solutions.",
      en: "Delivery formats and service areas at Row Solutions.",
    },
    excerpt: {
      no: "Row Solutions leverer kartlegging, workshops, ledersparring, kurs og webinarer, praktisk AI-trening, sprint/pilot og implementering — i tråd med tjenestestrukturen på rowsolutions.no.",
      en: "Row Solutions delivers mapping, workshops, leadership sparring, courses and webinars, practical AI training, sprint/pilot and implementation — aligned with the service structure on rowsolutions.no.",
    },
  },
  {
    key: "metoder",
    url: "https://rowsolutions.no/metoder",
    title: {
      no: "Metoder og verktøy — Row Solutions",
      en: "Methods and tools — Row Solutions",
    },
    description: {
      no: "Oversikt over Row Solutions' metoder og digitale verktøy.",
      en: "Overview of Row Solutions methods and digital tools.",
    },
    excerpt: {
      no: "Row Solutions tilbyr rådgivningsrammeverk og digitale kartleggings- og treningsverktøy. Noen verktøy er utviklet og eid av Marius Ottesen Consulting (MOC) og kan benyttes i Row-rådgivning uten at eierskap overføres.",
      en: "Row Solutions offers advisory frameworks and digital mapping and training tools. Some tools are developed and owned by Marius Ottesen Consulting (MOC) and may be used in Row advisory work without transferring ownership.",
    },
  },
  {
    key: "fra-innsikt-til-resultater",
    url: "https://rowsolutions.no/metoder/fra-innsikt-til-resultater",
    title: {
      no: "Fra innsikt til resultater — Row Solutions",
      en: "From insight to results — Row Solutions",
    },
    description: {
      no: "Row Solutions' rådgivningsrammeverk.",
      en: "Row Solutions advisory framework.",
    },
    excerpt: {
      no: "«Fra innsikt til resultater» er Row Solutions' praktiske rådgivningsrammeverk — en felles tilnærming i Row, ikke identisk med boka VerdisKIftet. Rammeverket kobler forståelse, prioritering og gjennomføring.",
      en: "“From insight to results” is Row Solutions' practical advisory framework — a shared approach within Row, not identical to the book VerdisKIftet. The framework links understanding, prioritisation and execution.",
    },
  },
  {
    key: "ai-discovery",
    url: "https://rowsolutions.no/metoder/ai-discovery",
    title: {
      no: "AI Discovery — Row Solutions",
      en: "AI Discovery — Row Solutions",
    },
    description: {
      no: "AI Discovery-metode tilbudt gjennom Row Solutions.",
      en: "AI Discovery method offered through Row Solutions.",
    },
    excerpt: {
      no: "AI Discovery er analysemetode og verktøy for synlighet i AI-drevne kundereiser. Metoden og verktøyet er utviklet av Thomas Holm — ikke av Marius Ottesen eller MOC som utvikler/eier.",
      en: "AI Discovery is an analysis method and toolkit for visibility in AI-driven customer journeys. The method and tool were developed by Thomas Holm — not developed or owned by Marius Ottesen or MOC.",
    },
  },
  {
    key: "smb-salgsflyt-sjekken",
    url: "https://rowsolutions.no/metoder/smb-salgsflyt-sjekken",
    title: {
      no: "SMB Salgsflyt-sjekken — Row Solutions",
      en: "SMB Sales Flow Check — Row Solutions",
    },
    description: {
      no: "Salgsflyt-kartlegging via Row Solutions.",
      en: "Sales flow assessment via Row Solutions.",
    },
    excerpt: {
      no: "SMB Salgsflyt-sjekken er utviklet av Marius Ottesen Consulting (MOC). Row kan bruke metoden i rådgivning; eierskapet ligger hos MOC, ikke hos Row Solutions.",
      en: "The SMB Sales Flow Check was developed by Marius Ottesen Consulting (MOC). Row may use the method in advisory work; ownership is with MOC, not Row Solutions.",
    },
  },
  {
    key: "ai-readiness-scan",
    url: "https://rowsolutions.no/metoder/ai-readiness-scan",
    title: {
      no: "AI Readiness Scan — Row Solutions",
      en: "AI Readiness Scan — Row Solutions",
    },
    description: {
      no: "AI-modenhetskartlegging tilbudt gjennom Row.",
      en: "AI maturity mapping offered through Row.",
    },
    excerpt: {
      no: "AI Readiness Scan er utviklet som del av Marius Ottesens egne prosjekter (MOC). Verktøyet kan tilbys gjennom Row Solutions uten at Row eier det.",
      en: "AI Readiness Scan was developed as part of Marius Ottesen's own projects (MOC). The tool may be offered through Row Solutions without Row owning it.",
    },
  },
  {
    key: "predictive-sales-coach",
    url: "https://rowsolutions.no/metoder/predictive-sales-coach",
    title: {
      no: "Predictive Sales Coach — Row Solutions",
      en: "Predictive Sales Coach — Row Solutions",
    },
    description: {
      no: "PSC tilbudt gjennom Row Solutions.",
      en: "PSC offered through Row Solutions.",
    },
    excerpt: {
      no: "Predictive Sales Coach er utviklet av Marius Ottesen gjennom MOC — AI-basert salgstrening, simulering og møteforberedelse, ikke CRM, prognoseverktøy eller autonom salgsagent.",
      en: "Predictive Sales Coach was developed by Marius Ottesen through MOC — AI-based sales training, simulation and meeting preparation, not CRM, forecasting or an autonomous sales agent.",
    },
  },
];

export function getRowExternalSourceByKey(key: RowExternalSourceKey): RowExternalSourceDef | undefined {
  return ROW_EXTERNAL_SOURCES.find((s) => s.key === key);
}

export function rowExternalManifestId(key: RowExternalSourceKey, lang: KnowledgeLang): string {
  return `external:rowsolutions:${key}:${lang}`;
}