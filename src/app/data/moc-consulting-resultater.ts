import { Lang } from "../LanguageContext";
import { getFaginnleggTelling } from "../lib/faginnlegg-data";
import { AI_READINESS_SCAN_PROSJEKT_PATH } from "../lib/ai-readiness-scan-brand";

const prosjektLenker = {
  skoyenasen: "/skoyenasen-tannklinikk",
  psc: "/psc",
  flowsignal: "/flowsignal",
  salgsflyt: "/salgsflyt-sjekken",
  readinessScan: AI_READINESS_SCAN_PROSJEKT_PATH,
  agent: "/prosjekter#ai-assistert-innsikts-og-opportunity-agent-2026",
  innhold: "/prosjekter#ai-assistert-innsikts-og-innholdsagent-2026",
  beslutning: "/prosjekter#ai-arkitektur-beslutningsstotte-2026",
  faginnlegg: "/faginnlegg",
  valueLab: "/prosjekter#ai-value-lab-oslo-2026",
  bi: "/strategisk-ai-implementering",
  nettside: "/mariusottesen-nettside",
  controlTower: "/prosjekter#control-tower",
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
      `Built ${lenke(prosjektLenker.controlTower, "Control Tower")}: decision and execution platform for operational and commercial prioritisation, action and follow-up`,
      `Developed ${lenke(prosjektLenker.readinessScan, "AI Readiness Scan")}: access-controlled mapping tool with structured assessment of AI maturity, priorities and admin insight`,
      `Built ${lenke(prosjektLenker.salgsflyt, "SMB Sales Flow Check")}: diagnosis, scoring, AI-supported analysis, reporting and follow-up logic for commercial workflows`,
      `Further developed ${lenke(prosjektLenker.flowsignal, "FlowSignal")}: AI-supported workspace for profile insight, daily form, reflection, collaboration and leadership follow-up`,
      `Built ${lenke(prosjektLenker.psc, "The Predictive Sales Coach")}: training and analysis platform for customer dialogue, meeting preparation, simulation, evaluation and sales leadership`,
      `Developed models and workflows for ${lenke(prosjektLenker.agent, "AI-assisted insight")}, ${lenke(prosjektLenker.innhold, "content")}, prioritisation and ${lenke(prosjektLenker.beslutning, "decision support")}`,
      `Built and published ${lenke(prosjektLenker.nettside, "mariusottesen.no")}: leadership profile, portfolio, articles and access-controlled AI demonstrators`,
      `${totalt} published ${lenke(prosjektLenker.faginnlegg, "articles")} on AI, leadership and commercial value creation (updated automatically)`,
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
    `Bygget ${lenke(prosjektLenker.controlTower, "Control Tower")}: beslutnings- og gjennomføringsplattform for operativ og kommersiell prioritering, tiltak og oppfølging`,
    `Utviklet ${lenke(prosjektLenker.readinessScan, "AI Readiness Scan")}: tilgangsstyrt kartleggingsverktøy med strukturert vurdering av AI-modenhet, prioriteringer og administrativ innsikt`,
    `Bygget ${lenke(prosjektLenker.salgsflyt, "SMB Salgsflyt-sjekken")}: diagnose, scoring, AI-støttet analyse, rapportering og oppfølgingslogikk for kommersielle arbeidsflyter`,
    `Videreutviklet ${lenke(prosjektLenker.flowsignal, "FlowSignal")}: AI-støttet arbeidsflate for profilinnsikt, dagsform, refleksjon, samhandling og lederoppfølging`,
    `Bygget ${lenke(prosjektLenker.psc, "The Predictive Sales Coach")}: trenings- og analyseplattform for kundedialog, møteforberedelse, simulering, evaluering og salgsledelse`,
    `Utviklet modeller og arbeidsflyter for ${lenke(prosjektLenker.agent, "AI-assistert innsikt")}, ${lenke(prosjektLenker.innhold, "innhold")}, prioritering og ${lenke(prosjektLenker.beslutning, "beslutningsstøtte")}`,
    `Bygget og publisert ${lenke(prosjektLenker.nettside, "mariusottesen.no")}: lederprofil, portefølje, faginnlegg og tilgangsstyrte AI-demonstratorer`,
    `${totalt} ${lenke(prosjektLenker.faginnlegg, "faginnlegg")} om AI, ledelse og kommersiell verdiskaping (oppdateres løpende)`,
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
