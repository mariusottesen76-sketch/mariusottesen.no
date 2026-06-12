import { Lang } from "../LanguageContext";
import { getFaginnleggTelling } from "../lib/faginnlegg-data";

const prosjektLenker = {
  skoyenasen: "/prosjekter#skoyenasen-tannklinikk-2026",
  psc: "/psc",
  flowsignal: "/flowsignal",
  agent: "/prosjekter#ai-assistert-innsikts-og-opportunity-agent-2026",
  innhold: "/prosjekter#ai-assistert-innsikts-og-innholdsagent-2026",
  beslutning: "/prosjekter#ai-arkitektur-beslutningsstotte-2026",
  faginnlegg: "/faginnlegg",
  valueLab: "/prosjekter#ai-value-lab-oslo-2026",
  bi: "/prosjekter#prosjektoppgave-strategisk-implementering-2026",
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
        tekst: `Interim manager and advisor at ${lenke(prosjektLenker.skoyenasen, "Skøyenåsen Dental Clinic")}:`,
        underpunkter: [
          `${lenke(prosjektLenker.skoyenasen, "Project")}: patient journey, intake and booking. Relieved reception and clinical staff. Chatbot and booking in 6 languages — simpler booking for patients and more inquiries and an increase in patient numbers`,
        ],
      },
      `Developed ${lenke(prosjektLenker.psc, "The Predictive Sales Coach")}: AI-based sales training and meeting preparation for B2B sales`,
      `Developed ${lenke(prosjektLenker.flowsignal, "FlowSignal")}: AI-supported collaboration, profile insight and team development`,
      `Built ${lenke(prosjektLenker.agent, "agentic workflow")}, ${lenke(prosjektLenker.innhold, "insight and content engine")} and ${lenke(prosjektLenker.beslutning, "AI architecture for decision support")}`,
      `${totalt} published ${lenke(prosjektLenker.faginnlegg, "articles")} on AI, leadership and commercial value creation (updated automatically)`,
      `Initiated ${lenke(prosjektLenker.valueLab, "AI Value Lab Oslo")} — a cross-disciplinary learning initiative focused on practical testing, responsible AI use and real value creation through business-near cases`,
      `Completed the ${lenke(prosjektLenker.bi, "Generative AI for Business")} master's course at ${lenke(prosjektLenker.bi, "BI Norwegian Business School")}`,
    ];
  }

  return [
    {
      tekst: `Interim leder og rådgiver hos ${lenke(prosjektLenker.skoyenasen, "Skøyenåsen Tannklinikk")}:`,
      underpunkter: [
        `${lenke(prosjektLenker.skoyenasen, "Prosjekt")}: pasientreise, intake og booking. Avlastet resepsjon og klinisk team. Chatbot og booking på 6 språk — enklere booking for pasienter og flere henvendelser og økning i antall pasienter`,
      ],
    },
    `Utviklet ${lenke(prosjektLenker.psc, "The Predictive Sales Coach")}: AI-basert salgstrening og møteforberedelse for B2B-salg`,
    `Utviklet ${lenke(prosjektLenker.flowsignal, "FlowSignal")}: AI-støttet samhandling, profilinnsikt og teamutvikling`,
    `Bygget ${lenke(prosjektLenker.agent, "agentisk arbeidsflyt")}, ${lenke(prosjektLenker.innhold, "innsikts- og innholdsmotor")} og ${lenke(prosjektLenker.beslutning, "AI-arkitektur for beslutningsstøtte")}`,
    `${totalt} ${lenke(prosjektLenker.faginnlegg, "faginnlegg")} om AI, ledelse og kommersiell verdiskaping (oppdateres løpende)`,
    `Tatt initiativ til dannelsen av ${lenke(prosjektLenker.valueLab, "AI Value Lab Oslo")} — tverrfaglig lærings- og utviklingsinitiativ for praktisk testing, ansvarlig AI-bruk og reell verdiskaping gjennom virksomhetsnære case`,
    `Fullført masterkurset ${lenke(prosjektLenker.bi, "Generative AI for Business")} ved ${lenke(prosjektLenker.bi, "Handelshøyskolen BI")}`,
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
