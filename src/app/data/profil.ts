import { Lang } from "../LanguageContext";
import { getProfilProofPoints } from "./proof-points";
import { AKTUELL_FOR_ROLLER } from "./aktuell-for-roller";

export type ProfilData = {
  ingress: string;
  intro: string;
  aiKort: string;
  roller: string[];
  proofPoints: string[];
  aiSeksjon: string;
  lederskap: string;
  bransje: string;
  utdanning: string;
  kompetanse: string[];
  styrker: string[];
};

const data: Record<Lang, ProfilData> = {
  no: {
    ingress:
      "Jeg hjelper virksomheter med å skape retning, vekst og gjennomføring i skjæringspunktet mellom kommersiell ledelse, salgsutvikling, transformasjon og praktisk bruk av AI.",

    intro:
      "Jeg er en kommersiell leder med lang erfaring fra å bygge vekst, styrke lønnsomhet og utvikle team i komplekse B2B-virksomheter. Jeg har ledet salg, marked og kommersiell utvikling med personal- og P/L-ansvar, og trives best når strategi skal omsettes til tydelig retning, sterk gjennomføring og målbare resultater.",

    aiKort:
      "Jeg arbeider også med hvordan AI, data og nye arbeidsformer kan styrke beslutninger, effektivisere arbeidsprosesser og utvikle nye kommersielle muligheter. For meg handler AI ikke først og fremst om verktøy, men om arbeidsflyt, prioritering og gjennomføring.",

    roller: AKTUELL_FOR_ROLLER.no,

    proofPoints: getProfilProofPoints("no"),

    aiSeksjon:
      "Jeg bruker AI som et praktisk leder- og forretningsverktøy for å forstå arbeidsflyt, prioritere bedre, strukturere innsikt og forbedre kommersiell gjennomføring. Dette arbeidet vises mer konkret gjennom egne AI-prosjekter, consulting og faginnlegg.",

    lederskap: `Jeg tror på styrkebasert ledelse, tydelige forventninger og nær oppfølging. Lederstilen er tydelig, involverende og relasjonssterk — med trygghet, eierskap og gjennomføring som fellesnevner.

Trives i hybride lederroller som kombinerer strategisk ansvar med operativ tilstedeværelse.`,

    bransje:
      "Har erfaring fra komplekse B2B-virksomheter innen blant annet sirkulær økonomi, life science, industri, teknologi og retail/grossist. Fellesnevneren er kommersiell ledelse, endringsarbeid og evnen til å skape struktur, retning og resultater på tvers av fagmiljøer og lokasjoner.",

    utdanning: `Gjennom masterkurset *Generative AI for Business* ved Handelshøyskolen BI har jeg utviklet strategisk AI-kompetanse med fokus på lederverktøy for beslutningsstøtte, effektiv dokumentasjon og økt kommersiell effektivitet.

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
      "I help organisations create direction, growth and execution at the intersection of commercial leadership, sales development, transformation and practical use of AI.",

    intro:
      "I am a commercial leader with extensive experience building growth, strengthening profitability and developing teams in complex B2B organisations. I have led sales, marketing and commercial development with people and P&L accountability, and thrive when strategy must translate into clear direction, strong execution and measurable results.",

    aiKort:
      "I also work on how AI, data and new ways of working can strengthen decisions, streamline workflows and develop new commercial opportunities. For me, AI is not primarily about tools, but about workflow, prioritisation and execution.",

    roller: AKTUELL_FOR_ROLLER.en,

    proofPoints: getProfilProofPoints("en"),

    aiSeksjon:
      "I use AI as a practical leadership and business tool to understand workflows, prioritise better, structure insight and improve commercial execution. This work is shown more concretely through my AI projects, consulting and articles.",

    lederskap: `I believe in strengths-based leadership, clear expectations and close follow-up. My style is clear, engaging and relationship-oriented — with psychological safety, ownership and disciplined execution as the common thread.

I thrive in hybrid leadership roles that combine strategic responsibility with operational presence.`,

    bransje:
      "Experience from complex B2B organisations in areas including circular economy, life science, industry, technology and retail/wholesale. The common thread is commercial leadership, change work and the ability to create structure, direction and results across disciplines and locations.",

    utdanning: `Through the master's course *Generative AI for Business* at BI Norwegian Business School, I have developed strategic AI competence focused on leadership tools for decision support, efficient documentation and enhanced commercial effectiveness.

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
