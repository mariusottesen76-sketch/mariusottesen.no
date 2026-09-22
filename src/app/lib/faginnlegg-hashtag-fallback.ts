import type { FaginnleggInnlegg } from "./faginnlegg-types";

const AI_KATEGORI = "AI / KI";

const LEDELSE_KATEGORIER = new Set([
  "Strategi og virksomhetsutvikling",
  "Endring og gjennomføring",
  "Lederstil, kultur og team",
  "Kommersiell ledelse og salg",
]);

/** Opprinnelige eller tilpassede tags der brødtekst mangler hashtag-linje (f.eks. etter redaksjonell migrering). */
export const FAGINNLEGG_HASHTAG_BY_ID: Record<string, { no: string; en: string }> = {
  "bi-generative-ai-for-business-2026-01": {
    no: "#GenerativeAI #BI #Ledelse #DigitalTransformasjon #KommersiellLedelse",
    en: "#GenerativeAI #BI #Leadership #DigitalTransformation #CommercialLeadership",
  },
  "econa-ai-kundereise-arbeidsflyt-01": {
    no: "#AI #Kundereise #Arbeidsflyt #KommersiellLedelse #DigitalTransformasjon",
    en: "#AI #CustomerJourney #Workflow #CommercialLeadership #DigitalTransformation",
  },
  "ai-needs-first-tannklinikk-case-01": {
    no: "#AI #PraktiskAI #Forretningsutvikling #DigitalTransformasjon #Ledelse",
    en: "#AI #PracticalAI #BusinessDevelopment #DigitalTransformation #Leadership",
  },
  "ai-value-lab-munch-kickoff-01": {
    no: "#AIValueLabOslo #GenerativeAI #Ledelse #PraktiskAI #Innovasjon",
    en: "#AIValueLabOslo #GenerativeAI #Leadership #PracticalAI #Innovation",
  },
  "april-ai-kompetanse-praksis-01": {
    no: "#AI #AIKompetanse #Ledelse #DigitalTransformasjon #PraktiskAI",
    en: "#AI #AICompetence #Leadership #DigitalTransformation #PracticalAI",
  },
  "iteam-operativ-modell-2026-01": {
    no: "#AI #Teknologiledelse #DigitalTransformasjon #Ledelse #Innovasjon",
    en: "#AI #TechnologyLeadership #DigitalTransformation #Leadership #Innovation",
  },
  "ai-tech-frokost-rebel-01": {
    no: "#AI #AIAgenter #DigitalTransformasjon #Teknologiledelse #Innovasjon",
    en: "#AI #AIAgents #DigitalTransformation #TechnologyLeadership #Innovation",
  },
  "nova-day-data-forst-01": {
    no: "#AI #Datadrevet #DigitalTransformasjon #KommersiellLedelse #Ledelse",
    en: "#AI #DataDriven #DigitalTransformation #CommercialLeadership #Leadership",
  },
  "ai-value-lab-01": {
    no: "#AIValueLabOslo #GenerativeAI #SMB #Forretningsutvikling #Ledelse",
    en: "#AIValueLabOslo #GenerativeAI #SMB #BusinessDevelopment #Leadership",
  },
  "ai-debatten-hype-vs-frykt-01": {
    no: "#AI #Ledelse #DigitalTransformasjon #Strategi #PraktiskAI",
    en: "#AI #Leadership #DigitalTransformation #Strategy #PracticalAI",
  },
  "ai-dommekraft-bias-01": {
    no: "#AI #Dømmekraft #Ledelse #DigitalTransformasjon #Beslutningsstøtte",
    en: "#AI #Judgement #Leadership #DigitalTransformation #DecisionSupport",
  },
  "ai-ready-virksomhet-01": {
    no: "#AI #AIReady #DigitalTransformasjon #Ledelse #Strategi",
    en: "#AI #AIReady #DigitalTransformation #Leadership #Strategy",
  },
  "ai-arkitektur-beslutningsstotte-01": {
    no: "#AI #Beslutningsstøtte #Arbeidsflyt #Ledelse #DigitalTransformasjon",
    en: "#AI #DecisionSupport #Workflow #Leadership #DigitalTransformation",
  },
  "ai-dommekraft-kontekst-01": {
    no: "#AI #Dømmekraft #Ledelse #DigitalTransformasjon #PraktiskAI",
    en: "#AI #Judgement #Leadership #DigitalTransformation #PracticalAI",
  },
  "strategi-ai-master-01": {
    no: "#AI #Strategi #Ledelse #DigitalTransformasjon #Master",
    en: "#AI #Strategy #Leadership #DigitalTransformation #Masters",
  },
  "ai-learning-google-skills-01": {
    no: "#AI #AIKompetanse #DigitalTransformasjon #Læring #PraktiskAI",
    en: "#AI #AICompetence #DigitalTransformation #Learning #PracticalAI",
  },
  "ai-ikke-intelligent-01": {
    no: "#AI #Teknologiledelse #DigitalTransformasjon #Ledelse #PraktiskAI",
    en: "#AI #TechnologyLeadership #DigitalTransformation #Leadership #PracticalAI",
  },
  "alle-snakker-ai-01": {
    no: "#AI #DigitalTransformasjon #Ledelse #Strategi #PraktiskAI",
    en: "#AI #DigitalTransformation #Leadership #Strategy #PracticalAI",
  },
  "ai-foles-nytt-01": {
    no: "#AI #DigitalTransformasjon #Ledelse #Innovasjon #PraktiskAI",
    en: "#AI #DigitalTransformation #Leadership #Innovation #PracticalAI",
  },
  "access-til-agents-01": {
    no: "#AI #AIAgenter #DigitalTransformasjon #Teknologiledelse #Ledelse",
    en: "#AI #AIAgents #DigitalTransformation #TechnologyLeadership #Leadership",
  },
  "fra-verktoy-til-system-01": {
    no: "#AI #DigitalTransformasjon #Strategi #Ledelse #Skalering",
    en: "#AI #DigitalTransformation #Strategy #Leadership #Scaling",
  },
  "fra-pilot-til-skalering-01": {
    no: "#AI #Skalering #DigitalTransformasjon #Ledelse #Gjennomføring",
    en: "#AI #Scaling #DigitalTransformation #Leadership #Execution",
  },
  "praktisk-oppskrift-skalering-01": {
    no: "#AI #Skalering #AIGovernance #Ledelse #DigitalTransformasjon",
    en: "#AI #Scaling #AIGovernance #Leadership #DigitalTransformation",
  },
  "data-kontekst-rag-01": {
    no: "#AI #RAG #Data #DigitalTransformasjon #Beslutningsstøtte",
    en: "#AI #RAG #Data #DigitalTransformation #DecisionSupport",
  },
  "rag-innsikt-handling-01": {
    no: "#AI #RAG #Datadrevet #Ledelse #DigitalTransformasjon",
    en: "#AI #RAG #DataDriven #Leadership #DigitalTransformation",
  },
  "ai-agenter-hva-01": {
    no: "#AI #AIAgenter #DigitalTransformasjon #Teknologiledelse #Ledelse",
    en: "#AI #AIAgents #DigitalTransformation #TechnologyLeadership #Leadership",
  },
  "ai-agenter-feil-01": {
    no: "#AI #AIAgenter #Dømmekraft #Ledelse #DigitalTransformasjon",
    en: "#AI #AIAgents #Judgement #Leadership #DigitalTransformation",
  },
  "ai-agenter-praksis-01": {
    no: "#AI #AIAgenter #PraktiskAI #DigitalTransformasjon #Ledelse",
    en: "#AI #AIAgents #PracticalAI #DigitalTransformation #Leadership",
  },
  "ai-governance-01": {
    no: "#AI #AIGovernance #Ledelse #DigitalTransformasjon #ResponsibleAI",
    en: "#AI #AIGovernance #Leadership #DigitalTransformation #ResponsibleAI",
  },
  "ki-norsk-virksomheter-01": {
    no: "#AI #KI #DigitalTransformasjon #Ledelse #Næringsliv",
    en: "#AI #DigitalTransformation #Leadership #Business #Norway",
  },
  "ai-governance-i-praksis-01": {
    no: "#AI #AIGovernance #Ledelse #DigitalTransformasjon #PraktiskAI",
    en: "#AI #AIGovernance #Leadership #DigitalTransformation #PracticalAI",
  },
  "ai-kompetanse-2030-01": {
    no: "#AI #AIKompetanse #Ledelse #DigitalTransformasjon #Fremtid",
    en: "#AI #AICompetence #Leadership #DigitalTransformation #Future",
  },
  "bi-master-oppstart-01": {
    no: "#GenerativeAI #BI #Ledelse #DigitalTransformasjon #Læring",
    en: "#GenerativeAI #BI #Leadership #DigitalTransformation #Learning",
  },
  "predictive-sales-coach-01": {
    no: "#AI #Salgsutvikling #KommersiellLedelse #Coaching #PraktiskAI",
    en: "#AI #SalesDevelopment #CommercialLeadership #Coaching #PracticalAI",
  },
  "ai-etikk-norden-01": {
    no: "#AI #AIetikk #Ledelse #DigitalTransformasjon #ResponsibleAI",
    en: "#AI #AIEthics #Leadership #DigitalTransformation #ResponsibleAI",
  },
  "hva-motiverer-kunnskapsarbeid-2026-01": {
    no: "#Ledelse #Motivasjon #Kunnskapsarbeid #Teamutvikling #Kultur",
    en: "#Leadership #Motivation #KnowledgeWork #TeamDevelopment #Culture",
  },
  "alle-enige-ingen-gjor-noe-01": {
    no: "#Strategi #Transformasjon #Ledelse #Gjennomføring #Endringsledelse",
    en: "#Strategy #Transformation #Leadership #Execution #ChangeLeadership",
  },
  "to-parallelle-spor-ledelse-ai-01": {
    no: "#Ledelse #AI #Strategi #Transformasjon #DigitalTransformasjon",
    en: "#Leadership #AI #Strategy #Transformation #DigitalTransformation",
  },
};

const HASHTAG_BY_KATEGORI: Record<string, { no: string; en: string }> = {
  [AI_KATEGORI]: {
    no: "#AI #Ledelse #DigitalTransformasjon #KommersiellLedelse #PraktiskAI",
    en: "#AI #Leadership #DigitalTransformation #CommercialLeadership #PracticalAI",
  },
  "Kommersiell ledelse og salg": {
    no: "#KommersiellLedelse #Salgsledelse #Ledelse #B2B #DigitalTransformasjon",
    en: "#CommercialLeadership #SalesLeadership #Leadership #B2B #DigitalTransformation",
  },
  "Strategi og virksomhetsutvikling": {
    no: "#Strategi #Ledelse #Transformasjon #Gjennomføring #Virksomhetsutvikling",
    en: "#Strategy #Leadership #Transformation #Execution #BusinessDevelopment",
  },
  "Endring og gjennomføring": {
    no: "#Endringsledelse #Ledelse #Transformasjon #Gjennomføring #Strategi",
    en: "#ChangeLeadership #Leadership #Transformation #Execution #Strategy",
  },
  "Lederstil, kultur og team": {
    no: "#Ledelse #Kultur #Teamutvikling #KommersiellLedelse #Gjennomføring",
    en: "#Leadership #Culture #TeamDevelopment #CommercialLeadership #Execution",
  },
};

export function getFallbackHasTags(innlegg: Pick<FaginnleggInnlegg, "id" | "kategori">): {
  no: string;
  en: string;
} | undefined {
  const byId = FAGINNLEGG_HASHTAG_BY_ID[innlegg.id];
  if (byId) return byId;

  if (LEDELSE_KATEGORIER.has(innlegg.kategori)) {
    return HASHTAG_BY_KATEGORI[innlegg.kategori] ?? HASHTAG_BY_KATEGORI["Strategi og virksomhetsutvikling"];
  }
  if (innlegg.kategori === AI_KATEGORI) {
    return HASHTAG_BY_KATEGORI[AI_KATEGORI];
  }
  return undefined;
}
