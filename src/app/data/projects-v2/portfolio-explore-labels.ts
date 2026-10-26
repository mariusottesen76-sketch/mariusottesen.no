import type { LocalizedString } from "./types";
import type { ProjectV2Record } from "./types";

/**
 * Primær-CTA på /prosjekter → alltid detaljside.
 * Konvensjon: «Utforsk» for løsninger, plattformer, apper og modeller;
 * «Les om» for case og dokumenterte leveranser; «Se» kun der innholdet er video/visning uten vanlig detaljside-flyt.
 */
export const PORTFOLIO_OVERVIEW_PRIMARY_LABEL: Record<ProjectV2Record["slug"], LocalizedString> = {
  "ai-transformation-value-realization": {
    no: "Utforsk AI Transformation",
    en: "Explore AI Transformation",
  },
  "control-tower": { no: "Utforsk Control Tower", en: "Explore Control Tower" },
  "predictive-sales-coach": {
    no: "Utforsk Predictive Sales Coach",
    en: "Explore Predictive Sales Coach",
  },
  flowsignal: { no: "Utforsk FlowSignal", en: "Explore FlowSignal" },
  "ai-readiness-scan": { no: "Utforsk AI Readiness Scan", en: "Explore AI Readiness Scan" },
  "salgsflyt-sjekken": {
    no: "Utforsk SMB Salgsflyt-sjekken",
    en: "Explore SMB Sales Flow Check",
  },
  "event-planner": { no: "Utforsk Event Planner", en: "Explore Event Planner" },
  bilagsassistent: { no: "Utforsk Bilagsassistent", en: "Explore Receipt Assistant" },
  "strategisk-ai-implementering": {
    no: "Les om BI-masterprosjektet",
    en: "Read about the BI master's project",
  },
  "skoyenasen-tannklinikk": {
    no: "Les om Skøyenåsen-caset",
    en: "Read about the Skøyenåsen case",
  },
  "mariusottesen-nettside": {
    no: "Utforsk nettsideprosjektet",
    en: "Explore the website project",
  },
  "row-solutions": { no: "Utforsk Row Solutions", en: "Explore Row Solutions" },
  "agentisk-arbeidsflyt": {
    no: "Utforsk agentisk arbeidsflyt",
    en: "Explore agentic workflow",
  },
  "ai-innsikts-og-innholdsmotor": {
    no: "Utforsk innsikts- og innholdsmotoren",
    en: "Explore the insight and content engine",
  },
  "ai-arkitektur-beslutningsstotte": {
    no: "Utforsk AI-arkitekturmodellen",
    en: "Explore the AI architecture model",
  },
  "ai-value-lab-oslo": { no: "Utforsk AI Value Lab Oslo", en: "Explore AI Value Lab Oslo" },
  "ai-faginnlegg-hub": { no: "Utforsk faginnlegg", en: "Explore articles" },
  "psc-promo-video": { no: "Se PSC-promovideo", en: "Watch PSC promo video" },
};

export function portfolioOverviewPrimaryLabel(slug: string): LocalizedString | undefined {
  return PORTFOLIO_OVERVIEW_PRIMARY_LABEL[slug as ProjectV2Record["slug"]];
}

/** Sekundær CTA på kort — når ikke overstyrt i prosjektrekorden. */
/** Handlingsorienterte primær-CTA-er på detaljsider (når ikke overstyrt i prosjektrekorden). */
export const PORTFOLIO_DETAIL_PRIMARY_LABEL: Partial<
  Record<ProjectV2Record["slug"], LocalizedString>
> = {
  "ai-readiness-scan": { no: "Åpne AI Readiness Scan", en: "Open AI Readiness Scan" },
  "salgsflyt-sjekken": { no: "Åpne Salgsflyt-sjekken", en: "Open Sales Flow Check" },
  "predictive-sales-coach": { no: "Åpne Predictive Sales Coach", en: "Open Predictive Sales Coach" },
  flowsignal: { no: "Åpne FlowSignal", en: "Open FlowSignal" },
  "event-planner": { no: "Prøv Event Planner-demoen", en: "Try the Event Planner demo" },
  "control-tower": { no: "Se Control Tower-demoen", en: "View the Control Tower demo" },
  "ai-transformation-value-realization": {
    no: "Se AI Transformation-demoen",
    en: "View the AI Transformation demo",
  },
  "mariusottesen-nettside": { no: "Åpne nettsiden", en: "Open the website" },
  "row-solutions": { no: "Se Row Solutions", en: "View Row Solutions" },
  "ai-faginnlegg-hub": { no: "Gå til faginnlegg", en: "Go to articles" },
  "psc-promo-video": { no: "Se promovideoen", en: "Watch the promo video" },
  bilagsassistent: { no: "Be om demonstrasjon", en: "Request a demonstration" },
  "skoyenasen-tannklinikk": { no: "Diskuter caset", en: "Discuss the case" },
  "strategisk-ai-implementering": { no: "Diskuter implementering", en: "Discuss implementation" },
  "agentisk-arbeidsflyt": { no: "Se modellen", en: "View the model" },
  "ai-innsikts-og-innholdsmotor": { no: "Se demonstratoren", en: "View the demonstration" },
  "ai-arkitektur-beslutningsstotte": { no: "Se arkitekturmodellen", en: "View the architecture model" },
  "ai-value-lab-oslo": { no: "Ta kontakt om labben", en: "Contact about the lab" },
};

export function portfolioDetailPrimaryLabel(slug: string): LocalizedString | undefined {
  return PORTFOLIO_DETAIL_PRIMARY_LABEL[slug as ProjectV2Record["slug"]];
}

export function portfolioOverviewSecondaryLabel(project: ProjectV2Record): LocalizedString | undefined {
  if (project.ctaLabels?.overviewSecondary) return undefined;

  switch (project.slug) {
    case "event-planner":
      return { no: "Prøv demo uten innlogging", en: "Try demo without login" };
    case "ai-value-lab-oslo":
    case "ai-faginnlegg-hub":
    case "psc-promo-video":
      return { no: "Ta kontakt", en: "Contact" };
    case "skoyenasen-tannklinikk":
    case "strategisk-ai-implementering":
    case "mariusottesen-nettside":
    case "row-solutions":
      return { no: "Diskuter mulig anvendelse", en: "Discuss potential use" };
    case "bilagsassistent":
      return { no: "Ta kontakt om MVP", en: "Contact about MVP" };
    default:
      if (project.accessMode === "access_code") {
        return { no: "Be om tilgangskode", en: "Request access code" };
      }
      if (project.accessMode === "closed_demo") {
        return { no: "Be om demo", en: "Request a demo" };
      }
      if (project.category === "strategic_platform" && project.accessMode === "public") {
        return undefined;
      }
      return { no: "Diskuter mulig anvendelse", en: "Discuss potential use" };
  }
}
