import { Lang } from "../LanguageContext";
import { getProfilProofPoints } from "./proof-points";
import { AKTUELL_FOR_ROLLER } from "./aktuell-for-roller";
import { getRekruttererVerdiData } from "./rekrutterer-verdi";

export type ProfilKort = {
  title: string;
  text: string;
};

export type ProfilData = {
  ingress: string;
  intro: string;
  roller: string[];
  proofPoints: string[];
  verdiSituasjoner: ReturnType<typeof getRekruttererVerdiData>["verdiSituasjoner"];
  lederprofil: ProfilKort[];
  aiSeksjon: string;
  aiSeksjonAiLaget: { before: string; after: string };
  utdanning: string;
  kompetanse: string[];
  styrker: string[];
};

const data: Record<Lang, ProfilData> = {
  no: {
    ingress:
      "Kommersiell leder med dokumentert vekst — salgsledelse, P/L-ansvar, personalansvar, transformasjon og praktisk AI i samme bilde.",

    intro:
      "Jeg har lang erfaring med å bygge vekst, styrke lønnsomhet og utvikle team i komplekse B2B-miljøer, med salg, marked og kommersiell utvikling under personal- og resultatansvar. Jeg er aktuell for faste lederroller der virksomheten trenger tydelig kommersiell retning og gjennomføring på tvers av strategi, salg, drift og teknologi.",

    roller: AKTUELL_FOR_ROLLER.no,

    proofPoints: getProfilProofPoints("no"),

    verdiSituasjoner: getRekruttererVerdiData("no").verdiSituasjoner,

    lederprofil: [
      {
        title: "Ledelse og gjennomføring",
        text: "Tydelig, involverende og relasjonssterk lederstil med vekt på retning, forventninger, eierskap og gjennomføring.",
      },
      {
        title: "Kommersiell bredde",
        text: "Erfaring fra komplekse B2B-miljøer der salg, drift, marked, teknologi og kundeverdi må henge sammen.",
      },
      {
        title: "Strategisk utvikling og AI",
        text: "Utdanning og praktiske AI-prosjekter brukes til å styrke beslutningsstøtte, arbeidsflyt og kommersiell gjennomføring.",
      },
    ],

    aiSeksjon:
      "Jeg bruker AI (KI), data og nye arbeidsformer som lederverktøy for innsikt, arbeidsflyt og kommersiell gjennomføring. Porteføljen på denne siden — blant annet AI Transformation & Value Realization, Control Tower, Event Planner og Bilagsassistent — viser hvordan det kan se ut i praksis, også der salg og drift må henge sammen.",
    aiSeksjonAiLaget: {
      before:
        "Jeg har også tatt initiativ til AI Value Lab Oslo, en arena for praktisk AI-læring, og deltar faglig i ",
      after:
        ", som kombinerer erfaringsdeling med podcasten «AI-laget – AI for folk flest».",
    },

    utdanning: `Gjennom det fullførte masterkurset *Generative AI for Business* ved Handelshøyskolen BI har jeg utviklet strategisk AI-kompetanse med fokus på lederverktøy for beslutningsstøtte, effektiv dokumentasjon og økt kommersiell effektivitet. Initiativtaker til *AI Value Lab Oslo*, et tverrfaglig initiativ for AI-læring, erfaringsutveksling og utforsking av praktiske problemstillinger i skjæringspunktet mellom teknologi, forretning og organisasjon.

Jeg er utdannet *Master of Science in Business Administration (Siviløkonom)* fra USA, og har en *Executive Master of Management* fra BI med spesialisering i strategi, kommunikasjon og AI.`,

    kompetanse: [
      "Kommersiell ledelse, salgsledelse & salgsstrategi",
      "Resultatansvar (P/L), KPI, lønnsomhet & verdiskaping",
      "Endringsledelse, coaching & team-/organisasjonsutvikling",
      "Samspill mellom strategi, salg, drift & gjennomføring",
      "CRM, salgsprosesser & datadrevet salgsledelse",
      "Kunde-, marked- & interessenthåndtering",
      "Digital transformasjon, AI/KI & nye arbeidsformer",
    ],

    styrker: [
      "Gjennomføringskraft",
      "Strategisk og kommersiell drivkraft",
      "Motiverer og utvikler mennesker",
      "Tydelighet og forventningskraft",
      "Relasjons- og samarbeidsevne",
      "Endrings- og omstillingsevne",
      "Struktur og læringskraft",
    ],
  },
  en: {
    ingress:
      "Commercial leader with documented growth — sales leadership, P&L accountability, people leadership, transformation and practical AI in one profile.",

    intro:
      "I have extensive experience building growth, profitability and teams in complex B2B environments, leading sales, marketing and commercial development with people and P&L accountability. I am relevant for permanent leadership roles where the organisation needs clear commercial direction and execution across strategy, sales, operations and technology.",

    roller: AKTUELL_FOR_ROLLER.en,

    proofPoints: getProfilProofPoints("en"),

    verdiSituasjoner: getRekruttererVerdiData("en").verdiSituasjoner,

    lederprofil: [
      {
        title: "Leadership and execution",
        text: "A clear, engaging and relationship-oriented leadership style focused on direction, expectations, ownership and delivery.",
      },
      {
        title: "Commercial breadth",
        text: "Experience from complex B2B environments where sales, operations, marketing, technology and customer value must align.",
      },
      {
        title: "Strategic development and AI",
        text: "Education and practical AI projects are used to strengthen decision support, workflow and commercial execution.",
      },
    ],

    aiSeksjon:
      "I use AI, data and new ways of working as leadership tools for insight, workflow and commercial execution. The portfolio on this site — including AI Transformation & Value Realization, Control Tower, Event Planner and Receipt Assistant — shows what that can look like in practice, including where sales and operations must align.",
    aiSeksjonAiLaget: {
      before:
        "I have also initiated AI Value Lab Oslo, an arena for practical AI learning, and take part professionally in ",
      after:
        ", which combines experience sharing with the podcast «AI-laget – AI for folk flest».",
    },

    utdanning: `Through the completed master's course *Generative AI for Business* at BI Norwegian Business School, I have developed strategic AI competence focused on leadership tools for decision support, efficient documentation and enhanced commercial effectiveness. Initiator of *AI Value Lab Oslo*, a cross-disciplinary initiative for AI learning, experience sharing and exploration of practical issues at the intersection of technology, business and organisation.

I hold a *Master of Science in Business Administration* from the USA, and an *Executive Master of Management* from BI specialising in strategy, communication and AI.`,

    kompetanse: [
      "Commercial leadership, sales leadership & sales strategy",
      "P&L accountability, KPIs, profitability & value creation",
      "Change leadership, coaching & team/organisational development",
      "Alignment between strategy, sales, operations & execution",
      "CRM, sales processes & data-driven sales leadership",
      "Customer, market & stakeholder engagement",
      "Digital transformation, AI & new ways of working",
    ],

    styrker: [
      "Execution power",
      "Strategic and commercial drive",
      "Motivates and develops people",
      "Clarity and expectation-setting",
      "Relationship and collaboration skills",
      "Change and adaptability",
      "Structure and learning agility",
    ],
  },
};

export function getProfilData(lang: Lang): ProfilData {
  return data[lang];
}

/** @deprecated Bruk getProfilData(lang) */
export const profilData = data.no;
