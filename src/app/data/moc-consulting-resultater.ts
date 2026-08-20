import { Lang } from "../LanguageContext";
import { getFaginnleggTelling } from "../lib/faginnlegg-data";
import { AI_READINESS_SCAN_PROSJEKT_PATH } from "../lib/ai-readiness-scan-brand";
import { EVENT_PLANNER_PILOT_PATH } from "../lib/event-planner-brand";

const prosjektLenker = {
  skoyenasen: "/skoyenasen-tannklinikk",
  psc: "/psc",
  flowsignal: "/flowsignal",
  salgsflyt: "/salgsflyt-sjekken",
  readinessScan: AI_READINESS_SCAN_PROSJEKT_PATH,
  eventPlanner: EVENT_PLANNER_PILOT_PATH,
  agent: "/agentisk-arbeidsflyt",
  innhold: "/ai-innsikts-og-innholdsmotor",
  beslutning: "/ai-arkitektur-beslutningsstotte",
  faginnlegg: "/faginnlegg",
  valueLab: "/ai-value-lab-oslo",
  bi: "/strategisk-ai-implementering",
  nettside: "/mariusottesen-nettside",
  controlTower: "/prosjekter#control-tower",
  aiTransformation: "/ai-transformation-value-realization",
} as const;

function lenke(href: string, label: string): string {
  return `<a href="${href}">${label}</a>`;
}

export type MocResultatPunkt =
  | string
  | {
      tekst: string;
      underpunkter: string[];
    };

/** Korte resultatpunkter for MOC på Resultater-siden — samme format som øvrige selskapskort. */
export function getMocResultaterPunkter(lang: Lang): MocResultatPunkt[] {
  const { totalt } = getFaginnleggTelling();

  if (lang === "en") {
    return [
      {
        tekst: `Concrete case work at ${lenke(prosjektLenker.skoyenasen, "Skøyenåsen Dental Clinic")}:`,
        underpunkter: [
          "Patient journey, smart intake, chatbot logic and booking flow in 6 languages — developed as a case and prototype",
        ],
      },
      `Built ${lenke(prosjektLenker.aiTransformation, "AI Transformation & Value Realization")}: executive concept platform for prioritisation, transformation governance and measurable business impact from AI`,
      `Built ${lenke(prosjektLenker.controlTower, "Control Tower")}: decision and execution platform for operational and commercial prioritisation, action and follow-up`,
      `Developed ${lenke(prosjektLenker.readinessScan, "AI Readiness Scan")}: access-controlled mapping tool with structured assessment of AI maturity, priorities and admin insight`,
      `Built ${lenke(prosjektLenker.salgsflyt, "SMB Sales Flow Check")}: diagnosis, scoring, AI-supported analysis, reporting and follow-up logic for commercial workflows`,
      `Built ${lenke(prosjektLenker.flowsignal, "FlowSignal")}: AI-supported workspace for profile insight, daily form, reflection, collaboration and leadership follow-up`,
      `Built ${lenke(prosjektLenker.eventPlanner, "Event Planner")}: AI-assisted workspace for planning, participants, tasks, programme and follow-up for events`,
      `Built ${lenke(prosjektLenker.psc, "The Predictive Sales Coach")}: AI-based training and evaluation platform for B2B customer dialogue and meeting preparation`,
      `Developed models and workflows for ${lenke(prosjektLenker.agent, "AI-assisted insight")}, ${lenke(prosjektLenker.innhold, "content")}, prioritisation and ${lenke(prosjektLenker.beslutning, "decision support")}`,
      `Built and published ${lenke(prosjektLenker.nettside, "mariusottesen.no")}: leadership profile, portfolio, articles and access-controlled AI demonstrators`,
      `${totalt} published ${lenke(prosjektLenker.faginnlegg, "articles")} on AI, leadership and commercial value creation (updated automatically)`,
      "Contributed as an invited panelist in a professional HR network discussing innovation, AI, leadership responsibility and execution.",
      `Initiator of ${lenke(prosjektLenker.valueLab, "AI Value Lab Oslo")}: cross-disciplinary arena for AI learning, experience sharing and exploration of practical problem areas`,
      `Completed further education in ${lenke(prosjektLenker.bi, "Generative AI for Business")} at BI Norwegian Business School with grade A`,
    ];
  }

  return [
    {
      tekst: `Konkret casearbeid hos ${lenke(prosjektLenker.skoyenasen, "Skøyenåsen Tannklinikk")}:`,
        underpunkter: [
          "Pasientreise, smart intake, chatbot-logikk og bookingflyt på 6 språk — utviklet som case og prototype",
        ],
    },
    `Bygget ${lenke(prosjektLenker.aiTransformation, "AI Transformation & Value Realization")}: executive konseptplattform for prioritering, transformasjonsstyring og målbar forretningseffekt fra AI`,
    `Bygget ${lenke(prosjektLenker.controlTower, "Control Tower")}: beslutnings- og gjennomføringsplattform for operativ og kommersiell prioritering, tiltak og oppfølging`,
    `Utviklet ${lenke(prosjektLenker.readinessScan, "AI Readiness Scan")}: tilgangsstyrt kartleggingsverktøy med strukturert vurdering av AI-modenhet, prioriteringer og administrativ innsikt`,
    `Bygget ${lenke(prosjektLenker.salgsflyt, "SMB Salgsflyt-sjekken")}: diagnose, scoring, AI-støttet analyse, rapportering og oppfølgingslogikk for kommersielle arbeidsflyter`,
    `Bygget ${lenke(prosjektLenker.flowsignal, "FlowSignal")}: AI-støttet arbeidsflate for profilinnsikt, dagsform, refleksjon, samhandling og lederoppfølging`,
    `Bygget ${lenke(prosjektLenker.eventPlanner, "Event Planner")}: AI-assistert arbeidsflate for planlegging, deltakere, oppgaver, program og oppfølging av arrangementer`,
    `Bygget ${lenke(prosjektLenker.psc, "The Predictive Sales Coach")}: AI-basert salgstrening og møteforberedelse med kundesimulering, strukturert feedback, evaluering og salgslederinnsikt`,
    `Utviklet modeller og arbeidsflyter for ${lenke(prosjektLenker.agent, "AI-assistert innsikt")}, ${lenke(prosjektLenker.innhold, "innhold")}, prioritering og ${lenke(prosjektLenker.beslutning, "beslutningsstøtte")}`,
    `Bygget og publisert ${lenke(prosjektLenker.nettside, "mariusottesen.no")}: lederprofil, portefølje, faginnlegg og tilgangsstyrte AI-demonstratorer`,
    `${totalt} ${lenke(prosjektLenker.faginnlegg, "faginnlegg")} om AI, ledelse og kommersiell verdiskaping (oppdateres løpende)`,
    "Bidratt som invitert paneldeltaker i faglig HR-nettverk om innovasjon, AI, lederansvar og gjennomføring.",
    `Initiativtaker til ${lenke(prosjektLenker.valueLab, "AI Value Lab Oslo")}: tverrfaglig arena for AI-læring, erfaringsutveksling og utforsking av praktiske problemstillinger`,
    `Fullført videreutdanning i ${lenke(prosjektLenker.bi, "Generative AI for Business")} ved Handelshøyskolen BI med karakter A`,
  ];
}

export function erMocResultatPunktMedUnderpunkter(
  punkt: MocResultatPunkt
): punkt is { tekst: string; underpunkter: string[] } {
  return typeof punkt !== "string";
}

export function erMocSelskapsresultater(
  selskap: string,
  resultater: ReturnType<typeof getMocResultaterPunkter> | string[]
): resultater is ReturnType<typeof getMocResultaterPunkter> {
  return selskap === "Marius Ottesen Consulting";
}
