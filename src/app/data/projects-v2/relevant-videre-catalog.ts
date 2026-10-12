import type { ProjectFagPerspektivLink, ProjectRelevantSurface } from "./types";
import { BOK_ROUTE } from "../bok-prosjekt-innhold";
import { ROW_SOLUTIONS_LIVE_URL } from "../../lib/row-solutions-brand";

type Link = ProjectFagPerspektivLink;

const detailOnly: ProjectRelevantSurface[] = ["detail"];
const overviewOnly: ProjectRelevantSurface[] = ["overview"];

function art(
  slug: string,
  label: { no: string; en: string },
  surfaces?: ProjectRelevantSurface[],
): Link {
  return { href: `/faginnlegg/${slug}`, label, surfaces };
}

function proj(
  path: string,
  label: { no: string; en: string },
  surfaces?: ProjectRelevantSurface[],
): Link {
  return { href: path, label, surfaces };
}

function ext(
  href: string,
  label: { no: string; en: string },
  surfaces?: ProjectRelevantSurface[],
): Link {
  return { href, label, external: true, surfaces };
}

function bookLink(label: { no: string; en: string }, surfaces?: ProjectRelevantSurface[]): Link {
  return { href: BOK_ROUTE.no, label, surfaces: surfaces ?? detailOnly };
}

/**
 * Redaksjonelt kuraterte «Relevant videre»-lenker per prosjektslug (v2).
 * Ved nye artikler: se .cursor/rules/relevant-videre-nye-artikler.mdc
 */
export const RELEVANT_VIDERE_BY_PROJECT_SLUG: Record<string, Link[]> = {
  "control-tower": [
    art("control-tower-operasjon-kommers-2026-07", {
      no: "Når operasjon og kommers må styres sammen →",
      en: "When operations and commercial must be governed together →",
    }),
    art("control-tower-verdikjede-ledelse-2026-08", {
      no: "Når du som leder ikke eier hele verdikjeden →",
      en: "When you as a leader do not own the entire value chain →",
    }),
    art("fra-data-til-beslutning-2026-09", {
      no: "Fra data til beslutning →",
      en: "From data to decision →",
    }, detailOnly),
    art("det-virksomheten-enna-ikke-ser-2026-09", {
      no: "Det virksomheten ennå ikke ser →",
      en: "What the organisation has not yet seen →",
    }, detailOnly),
  ],
  "ai-transformation-value-realization": [
    art("ai-transformation-value-realization-strand-2026-07", {
      no: "Fra strandidé til AI-plattform →",
      en: "From beach idea to AI platform →",
    }),
    art("praktisk-oppskrift-skalering-01", {
      no: "Fra pilot til skalering – praktisk oppskrift for ledere →",
      en: "From pilot to scale – a practical recipe for leaders →",
    }),
    art("ai-governance-i-praksis-01", {
      no: "AI-governance i praksis →",
      en: "AI governance in practice →",
    }, detailOnly),
    proj("/ai-readiness-scan", {
      no: "AI Readiness Scan →",
      en: "AI Readiness Scan →",
    }, detailOnly),
    bookLink({
      no: "Bokprosjekt: transformasjon og verdirealisering (under utvikling) →",
      en: "Book project: transformation and value realisation (in development) →",
    }),
  ],
  psc: [
    art("salgsledelse-i-praksis-2026-08", {
      no: "Salgsledelse i praksis →",
      en: "Sales leadership in practice →",
    }),
    art("fornoyd-kunde-lojal-kunde-2026-09", {
      no: "En fornøyd kunde er ikke nødvendigvis en lojal kunde →",
      en: "A satisfied customer is not necessarily a loyal customer →",
    }),
    art("genai-foerste-reklamefilm-psc-2026-05", {
      no: "Min første reklamefilm med Generativ AI →",
      en: "My first commercial film with Generative AI →",
    }, detailOnly),
    art("de-beste-kommersielle-grepene-2026-09", {
      no: "De beste kommersielle grepene →",
      en: "The best commercial moves →",
    }, detailOnly),
  ],
  flowsignal: [
    art("psykologisk-trygghet-krav-2026-01", {
      no: "Psykologisk trygghet er ikke fravær av krav →",
      en: "Psychological safety is not the absence of demands →",
    }),
    art("du-arver-laget-landslag-2026-07", {
      no: "Du arver laget. Du eier utviklingen. →",
      en: "You inherit the team. You own the development. →",
    }),
    art("fire-egne-ai-apper-friksjon-prioritering-2026-06", {
      no: "Fire egne AI-apper – friksjon, prioritering og team →",
      en: "Four own AI apps – friction, prioritisation and teams →",
    }, detailOnly),
  ],
  "ai-readiness-scan": [
    ext("https://rowsolutions.no/innsikt/ai-konkurransekraft-smb", {
      no: "AI kan endre konkurransebildet for SMB. Hvem utnytter mulighetene først? →",
      en: "AI can change the competitive landscape for SMBs. Who captures the opportunities first? →",
    }),
    art("ai-needs-first-tannklinikk-case-01", {
      no: "De fleste starter feil med AI – behov før teknologi →",
      en: "Most people start wrong with AI – needs before technology →",
    }),
    art("ai-governance-i-praksis-01", {
      no: "AI-governance i praksis →",
      en: "AI governance in practice →",
    }, detailOnly),
    art("ki-norge-klare-data-2026-10", {
      no: "KI avslører hvor godt virksomheten egentlig forstår seg selv →",
      en: "AI reveals how well the organisation really understands itself →",
    }, detailOnly),
    art("fra-strategi-til-gjennomforing-2026-09", {
      no: "Fra strategi til gjennomføring →",
      en: "From strategy to execution →",
    }, detailOnly),
  ],
  "salgsflyt-sjekken": [
    ext("https://rowsolutions.no/innsikt/hvor-stopper-salgsflyten", {
      no: "Hvor stopper salgsflyten egentlig opp? →",
      en: "Where does the sales flow actually stop? →",
    }),
    art("crm-mer-enn-et-systemprosjekt-2026-09", {
      no: "CRM er mer enn et systemprosjekt →",
      en: "CRM is more than a system project →",
    }),
    art("salgsledelse-i-praksis-2026-08", {
      no: "Salgsledelse i praksis →",
      en: "Sales leadership in practice →",
    }, detailOnly),
  ],
  "strategisk-ai-implementering": [
    art("bi-genai-avslutning-master-2026-06", {
      no: "Ferdig, men akkurat startet – BI og Skøyenåsen-case →",
      en: "Finished, but just getting started – BI and Skøyenåsen case →",
    }),
    art("fra-strategi-til-gjennomforing-2026-09", {
      no: "Fra strategi til gjennomføring →",
      en: "From strategy to execution →",
    }),
    art("ai-needs-first-tannklinikk-case-01", {
      no: "De fleste starter feil med AI – behov før teknologi →",
      en: "Most people start wrong with AI – needs before technology →",
    }, detailOnly),
    proj("/skoyenasen-tannklinikk", {
      no: "Skøyenåsen tannklinikk – case →",
      en: "Skøyenåsen dental clinic – case →",
    }, detailOnly),
    bookLink({
      no: "Bokprosjekt: strategi og gjennomføring (under utvikling) →",
      en: "Book project: strategy and execution (in development) →",
    }),
  ],
  "skoyenasen-tannklinikk": [
    art("ai-needs-first-tannklinikk-case-01", {
      no: "De fleste starter feil med AI – behov før teknologi →",
      en: "Most people start wrong with AI – needs before technology →",
    }),
    art("bi-genai-avslutning-master-2026-06", {
      no: "Mastercase: GenAI i pasient- og kundereisen →",
      en: "Master's case: GenAI in the patient and customer journey →",
    }),
    proj("/strategisk-ai-implementering", {
      no: "Strategisk AI-implementering →",
      en: "Strategic AI implementation →",
    }, detailOnly),
  ],
  "mariusottesen-nettside": [
    art("nettside-lansering-2026-01", {
      no: "Fra koding i 1999 til AI-revolusjon i 2026 – ny hjemmeside og nytt consultingselskap! →",
      en: "From coding in 1999 to AI revolution in 2026 - new website and new consulting company! →",
    }),
    bookLink(
      {
        no: "Bokprosjektet – fra faginnlegg til fagbok under utvikling →",
        en: "The book project – from articles to a professional book in development →",
      },
      overviewOnly,
    ),
    bookLink({
      no: "Bokprosjekt: ledelse og gjennomføring (under utvikling) →",
      en: "Book project: leadership and execution (in development) →",
    }),
    proj("/prosjekter", {
      no: "Se hele AI-prosjektporteføljen →",
      en: "See the full AI project portfolio →",
    }, detailOnly),
  ],
  "row-solutions": [
    ext(ROW_SOLUTIONS_LIVE_URL, {
      no: "rowsolutions.no – live plattform →",
      en: "rowsolutions.no – live platform →",
    }),
    ext("https://rowsolutions.no/innsikt/vi-har-startet-row-solutions", {
      no: "Vi har startet Row Solutions →",
      en: "We have started Row Solutions →",
    }),
    ext("https://rowsolutions.no/innsikt/hvor-stopper-salgsflyten", {
      no: "Hvor stopper salgsflyten egentlig opp? →",
      en: "Where does the sales flow actually stop? →",
    }, detailOnly),
    ext("https://rowsolutions.no/innsikt/marketing-skaper-ikke-verdi-for-noen-folger-opp", {
      no: "Marketing skaper ikke verdi – hvis ingen følger opp →",
      en: "Marketing does not create value – if no one follows up →",
    }, detailOnly),
  ],
  "agentisk-arbeidsflyt": [
    art("forbedre-arbeidsmaten-tenke-pa-nytt-2026-10", {
      no: "Forbedre arbeidsmåten – eller tenke den på nytt? →",
      en: "Improve the way we work – or rethink it? →",
    }),
    art("ai-agenter-praksis-01", {
      no: "AI-agenter i praksis →",
      en: "AI agents in practice →",
    }),
    proj("/ai-innsikts-og-innholdsmotor", {
      no: "AI-innsikts- og innholdsmotor →",
      en: "AI insight and content engine →",
    }, detailOnly),
    art("rag-innsikt-handling-01", {
      no: "Fra RAG til innsikt og handling →",
      en: "From RAG to insight and action →",
    }, detailOnly),
  ],
  "ai-innsikts-og-innholdsmotor": [
    art("crm-genai-medspiller-knowit-2026-06", {
      no: "Når CRM blir en medspiller →",
      en: "When CRM becomes a co-player →",
    }),
    proj("/agentisk-arbeidsflyt", {
      no: "Agentisk arbeidsflyt →",
      en: "Agentic workflow →",
    }),
    art("rag-innsikt-handling-01", {
      no: "Fra RAG til innsikt og handling →",
      en: "From RAG to insight and action →",
    }, detailOnly),
  ],
  "ai-arkitektur-beslutningsstotte": [
    art("ai-arkitektur-beslutningsstotte-01", {
      no: "Jeg bygger AI-arkitektur for beslutningsstøtte →",
      en: "Building AI architecture for decision support →",
    }),
    art("fra-data-til-beslutning-2026-09", {
      no: "Fra data til beslutning →",
      en: "From data to decision →",
    }),
    proj("/control-tower", {
      no: "Control Tower →",
      en: "Control Tower →",
    }, detailOnly),
    bookLink({
      no: "Bokprosjekt: beslutninger og gjennomføring (under utvikling) →",
      en: "Book project: decisions and execution (in development) →",
    }),
  ],
  "ai-value-lab-oslo": [
    art("ai-value-lab-01", {
      no: "Vi har startet noe jeg mener flere ledere burde gjøre →",
      en: "We have started something I think more leaders should do →",
    }),
    proj("/ai-transformation-value-realization", {
      no: "AI Transformation & Value Realization →",
      en: "AI Transformation & Value Realization →",
    }),
    art("praktisk-oppskrift-skalering-01", {
      no: "Fra pilot til skalering →",
      en: "From pilot to scale →",
    }, detailOnly),
  ],
  "event-planner": [
    art("event-planner-fest-planlegging-2026-08", {
      no: "Jeg skulle bare planlegge en fest — det endte med en AI-plattform →",
      en: "I was only going to plan a party — it became an AI platform →",
    }),
    art("fra-strategi-til-gjennomforing-2026-09", {
      no: "Fra strategi til gjennomføring →",
      en: "From strategy to execution →",
    }),
  ],
  bilagsassistent: [
    art("forbedre-arbeidsmaten-tenke-pa-nytt-2026-10", {
      no: "Forbedre arbeidsmåten – eller tenke den på nytt? →",
      en: "Improve the way we work – or rethink it? →",
    }),
    art("ai-governance-i-praksis-01", {
      no: "AI-governance i praksis →",
      en: "AI governance in practice →",
    }),
    proj("/agentisk-arbeidsflyt", {
      no: "Agentisk arbeidsflyt →",
      en: "Agentic workflow →",
    }, detailOnly),
  ],
  "ai-faginnlegg-hub": [
    bookLink(
      {
        no: "Bokprosjekt: ledelse, strategi og gjennomføring (under utvikling) →",
        en: "Book project: leadership, strategy and execution (in development) →",
      },
      [],
    ),
    art("fra-strategi-til-gjennomforing-2026-09", {
      no: "Fra strategi til gjennomføring →",
      en: "From strategy to execution →",
    }),
    proj("/prosjekter", {
      no: "Se AI-prosjektporteføljen →",
      en: "See the AI project portfolio →",
    }, detailOnly),
  ],
  "psc-promo-video": [
    art("genai-foerste-reklamefilm-psc-2026-05", {
      no: "Min første reklamefilm med Generativ AI →",
      en: "My first commercial film with Generative AI →",
    }),
    proj("/psc", {
      no: "The Predictive Sales Coach →",
      en: "The Predictive Sales Coach →",
    }),
  ],
};

export function relevantVidereLinksForSlug(slug: string): Link[] {
  return RELEVANT_VIDERE_BY_PROJECT_SLUG[slug] ?? [];
}
