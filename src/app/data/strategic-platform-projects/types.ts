export type LocalizedString = {
  no: string;
  en: string;
};

export type StrategicPlatformSlug =
  | "control-tower"
  | "ai-transformation-value-realization"
  | "predictive-sales-coach"
  | "flowsignal"
  | "ai-readiness-scan"
  | "salgsflyt-sjekken"
  | "strategisk-ai-implementering"
  | "skoyenasen-tannklinikk"
  | "mariusottesen-nettside"
  | "agentisk-arbeidsflyt"
  | "ai-innsikts-og-innholdsmotor"
  | "ai-arkitektur-beslutningsstotte"
  | "ai-value-lab-oslo"
  | "event-planner";

export type StrategicPlatformTeaserBlock = {
  utfordring: LocalizedString;
  bygget: LocalizedString;
  relevans: LocalizedString;
  status: LocalizedString;
};

export type StrategicPlatformTeaser = {
  undertittel: LocalizedString;
  intro: LocalizedString;
  blokker: StrategicPlatformTeaserBlock;
  videreutvikling: LocalizedString;
};

export type StrategicPlatformModule = {
  tittel: LocalizedString;
  beskrivelse: LocalizedString;
  /** true = bygget, false = planlagt / fremtidig */
  bygget: boolean;
  fokusomrader?: LocalizedString[];
  relevantFor?: LocalizedString;
};

export type StrategicPlatformStep = {
  tittel: LocalizedString;
  beskrivelse: LocalizedString;
};

export type StrategicPlatformScalability = {
  platform: {
    heading: LocalizedString;
    punkter: LocalizedString[];
  };
  tilpasning: {
    heading: LocalizedString;
    punkter?: LocalizedString[];
    funksjoner?: { heading: LocalizedString; punkter: LocalizedString[] };
    bransjer?: { heading: LocalizedString; punkter: LocalizedString[] };
    note?: LocalizedString;
  };
};

export type StrategicPlatformRelevansSection = {
  tittel: LocalizedString;
  tekst: LocalizedString;
};

export type StrategicPlatformUtvikler = {
  navn: LocalizedString;
  rolle: LocalizedString;
  beskrivelse: LocalizedString;
};

export type StrategicPlatformFaqItem = {
  question: LocalizedString;
  answer: LocalizedString;
};

export type StrategicPlatformMeta = {
  title: LocalizedString;
  description: LocalizedString;
  ogImage: string;
  canonicalPath: string;
};

export type StrategicPlatformGovernanceScenarioField = {
  label: LocalizedString;
  value: LocalizedString;
};

export type StrategicPlatformGovernanceScenario = {
  heading: LocalizedString;
  fields: StrategicPlatformGovernanceScenarioField[];
};

export type StrategicPlatformGovernanceScenarios = {
  heading: LocalizedString;
  disclaimer: LocalizedString;
  scenarios: StrategicPlatformGovernanceScenario[];
};

export type StrategicPlatformDemoPortfolioCategory = {
  heading: LocalizedString;
  initiatives: LocalizedString[];
};

export type StrategicPlatformDemoPortfolio = {
  heading: LocalizedString;
  intro: LocalizedString;
  closing: LocalizedString;
  disclaimer?: LocalizedString;
  categories: StrategicPlatformDemoPortfolioCategory[];
};

export type StrategicPlatformDetail = {
  statusBadge: LocalizedString;
  hero: {
    verdiforslag: LocalizedString;
    executiveSummary: LocalizedString;
    bildeAlt: LocalizedString;
  };
  /** Kompakt posisjonering — etter hero, før utvidet beskrivelse. */
  kortFortalt?: { heading: LocalizedString; body: LocalizedString };
  utfordring: { heading: LocalizedString; body: LocalizedString };
  logikk: {
    heading: LocalizedString;
    body: LocalizedString;
    steps?: StrategicPlatformStep[];
    after?: LocalizedString;
    /** Forklaring av «Predictive» — plasseres i logikk-seksjonen. */
    predictiveForklaring?: { heading: LocalizedString; body: LocalizedString };
  };
  /** Datagrunnlag og integrasjoner — avgrenser mot CRM/live-data. */
  datagrunnlag?: { heading: LocalizedString; body: LocalizedString };
  bygget: { heading: LocalizedString; body?: LocalizedString; items: LocalizedString[] };
  moduler: { heading: LocalizedString; intro?: LocalizedString; modules: StrategicPlatformModule[] };
  hvordan: {
    heading: LocalizedString;
    intro?: LocalizedString;
    steps?: StrategicPlatformStep[];
    detaljpunkter?: LocalizedString[];
  };
  relevans: {
    heading: LocalizedString;
    body?: LocalizedString;
    sections?: StrategicPlatformRelevansSection[];
  };
  /** Aktuelle effektområder — utvalgte pilotdetaljsider (PSC, FlowSignal). */
  effektomrader?: { heading: LocalizedString; punkter: LocalizedString[] };
  /** Mulig anvendelsesformat — utvalgte pilotdetaljsider. */
  anvendelsesformat?: { heading: LocalizedString; steg: StrategicPlatformStep[] };
  /** Demoportefølje — kun på utvalgte plattformdetaljsider. */
  demoPortfolio?: StrategicPlatformDemoPortfolio;
  /** Illustrative styringscenarioer — kun på utvalgte plattformdetaljsider. */
  governanceScenarios?: StrategicPlatformGovernanceScenarios;
  status: { heading: LocalizedString; body: LocalizedString };
  skalerbarhet: StrategicPlatformScalability & { heading: LocalizedString };
  /** Kompakt FAQ — semantisk details/summary, fullt lesbar uten JS. */
  faq?: { heading: LocalizedString; items: StrategicPlatformFaqItem[] };
  avslutning: { heading: LocalizedString; body: LocalizedString; secondaryLabel?: LocalizedString };
  utvikler?: StrategicPlatformUtvikler;
};

export type StrategicPlatformProject = {
  slug: StrategicPlatformSlug;
  prosjektId: string;
  detailPath: string;
  meta: StrategicPlatformMeta;
  teaser: StrategicPlatformTeaser;
  teaserCta?: { primary?: LocalizedString };
  detail: StrategicPlatformDetail;
};
