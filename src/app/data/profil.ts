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
  utdanning: string;
  kompetanse: string[];
  styrker: string[];
};

const data: Record<Lang, ProfilData> = {
  no: {
    ingress:
      "Jeg har erfaring med å skape retning, vekst og gjennomføring i skjæringspunktet mellom kommersiell ledelse, salgsutvikling, transformasjon og praktisk bruk av AI.",

    intro:
      "Jeg er en kommersiell leder med lang erfaring fra å bygge vekst, styrke lønnsomhet og utvikle team i komplekse B2B-virksomheter. Jeg har ledet salg, marked og kommersiell utvikling med personal- og P/L-ansvar, og trives best når strategi skal omsettes til tydelig retning, sterk gjennomføring og målbare resultater.\n\nJeg er aktuell for faste lederroller der virksomheten trenger tydelig retning, sterkere gjennomføring og bedre samspill mellom strategi, salg, drift og teknologi.",

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
      "Jeg bruker AI, data og nye arbeidsformer som lederverktøy for å strukturere innsikt, forbedre arbeidsflyt og styrke kommersiell gjennomføring.\n\nDe egenutviklede AI-prosjektene fungerer som en konkret portefølje, presentert på en egenutviklet og publisert nettside. De omfatter blant annet executive plattformen AI Transformation & Value Realization, Control Tower og andre demonstratorer som viser hvordan kommersiell forståelse, brukerbehov, arbeidsflyt og AI kan kombineres i praktiske løsninger.",

    utdanning: `Gjennom det fullførte masterkurset *Generative AI for Business* ved Handelshøyskolen BI har jeg utviklet strategisk AI-kompetanse med fokus på lederverktøy for beslutningsstøtte, effektiv dokumentasjon og økt kommersiell effektivitet. Initiativtaker til *AI Value Lab Oslo*, et tverrfaglig initiativ for AI-læring, erfaringsutveksling og utforsking av praktiske problemstillinger i skjæringspunktet mellom teknologi, forretning og organisasjon.

Jeg er utdannet *Master of Science in Business Administration (Siviløkonom)* fra USA, og har en *Executive Master of Management* fra BI med spesialisering i strategi, kommunikasjon og AI.`,

    kompetanse: [
      "Kommersiell ledelse & salgsstrategi",
      "Resultatansvar (P/L), lønnsomhet & verdiskaping",
      "Endringsledelse & team / organisasjonsutvikling",
      "Samspill mellom strategi, drift & gjennomføring",
      "Kunde-, marked- & interessenthåndtering",
      "Digital utvikling & AI som lederverktøy",
    ],

    styrker: [
      "Gjennomføringskraft",
      "Strategisk drivkraft",
      "Påvirkning og engasjement",
      "Relasjonsintelligens",
      "Endrings- & innovasjonskraft",
    ],
  },
  en: {
    ingress:
      "I have experience creating direction, growth and execution at the intersection of commercial leadership, sales development, transformation and practical use of AI.",

    intro:
      "I am a commercial leader with extensive experience building growth, strengthening profitability and developing teams in complex B2B organisations. I have led sales, marketing and commercial development with people and P&L accountability, and thrive best when strategy must translate into clear direction, strong execution and measurable results.\n\nI am relevant for permanent leadership roles where the organisation needs clearer direction, stronger execution and better alignment between strategy, sales, operations and technology.",

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
      "I use AI, data and new ways of working as leadership tools to structure insight, improve workflow and strengthen commercial execution.\n\nThe custom AI projects function as a concrete portfolio, presented on a custom-built and published website. They include, among others, the executive platform AI Transformation & Value Realization, Control Tower and other demonstrators that show how commercial understanding, user needs, workflow and AI can be combined in practical solutions.",

    utdanning: `Through the completed master's course *Generative AI for Business* at BI Norwegian Business School, I have developed strategic AI competence focused on leadership tools for decision support, efficient documentation and enhanced commercial effectiveness. Initiator of *AI Value Lab Oslo*, a cross-disciplinary initiative for AI learning, experience sharing and exploration of practical issues at the intersection of technology, business and organisation.

I hold a *Master of Science in Business Administration* from the USA, and an *Executive Master of Management* from BI specialising in strategy, communication and AI.`,

    kompetanse: [
      "Commercial leadership & go-to-market strategy",
      "P&L ownership, profitability & value creation",
      "Change management & organisational development",
      "Strategic alignment across operations & execution",
      "Customer, market & stakeholder engagement",
      "Digital transformation & AI as a leadership tool",
    ],

    styrker: [
      "Execution power",
      "Strategic vision & drive",
      "Influence & stakeholder engagement",
      "Relational intelligence",
      "Change & innovation leadership",
    ],
  },
};

export function getProfilData(lang: Lang): ProfilData {
  return data[lang];
}

/** @deprecated Bruk getProfilData(lang) */
export const profilData = data.no;
