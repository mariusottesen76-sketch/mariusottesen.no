import { Lang } from "../LanguageContext";

const data = {
  no: {
    hoved: `Kommersiell leder som skaper fremdrift, tillit og resultater — der strategi må omsettes til praksis og mennesker, drift og teknologi må fungere sammen.

Jeg har bygget og ledet nasjonale salgsorganisasjoner med helhetlig P/L-ansvar, og kombinerer i dag denne erfaringen med AI-kompetanse for å hjelpe virksomheter med å ta bedre beslutninger raskere.`,

    lederskap: `Blir ofte brukt i situasjoner der struktur, kapasitet og gjennomføringskraft er avgjørende. Bidrar til å styrke kommersiell slagkraft, forbedre samspill mellom marked, salg og drift, og bygge team som leverer over tid gjennom styrkebasert ledelse.

Lederstilen er tydelig, involverende og relasjonssterk, og kjennetegnes av trygghet, eierskap og gjennomføring – også i miljøer med høyt tempo og sterke fagmiljøer. Trives i hybride lederroller som kombinerer strategisk ansvar med operativ tilstedeværelse.`,

    bransje: `Min faglige bakgrunn er hentet fra et bredt spekter av B2B-markeder innen sirkulær økonomi, life science, teknologi, industri, retail/grossist, olje/gass og sjømat. Fellesnevneren i mitt arbeid er tydelig ledelse og kommersiell disiplin på tvers av fagfelt og lokasjoner.`,

    utdanning: `Gjennom masterkurset *Generative AI for Business* ved BI videreutvikler jeg nå min leder- og strategikompetanse, med fokus på hvordan AI fungerer som et praktisk lederverktøy for bedre beslutninger, effektiv dokumentasjon og økt kommersiell effektivitet.

Jeg er utdannet *Master of Science in Business Administration (Siviløkonom)* fra USA, og har en *Executive Master of Management* fra BI med spesialisering i strategi og kommunikasjon.`,

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
    hoved: `A commercially driven executive who builds momentum, earns trust, and delivers results — where strategy must be translated into execution and people, operations, and technology must converge.

I have built and led national sales organisations with full P&L accountability, and today combine that track record with AI expertise to help businesses make sharper decisions, faster.`,

    lederskap: `Frequently engaged in situations where organisational structure, capacity, and execution capability are paramount. I strengthen commercial firepower, improve the interplay between marketing, sales, and operations, and build high-performing teams that deliver sustained results through strengths-based leadership.

My leadership style is direct, inclusive, and relationship-oriented — characterised by psychological safety, accountability, and disciplined execution. I thrive in hybrid roles that blend strategic oversight with hands-on operational involvement, including fast-paced environments with strong specialist cultures.`,

    bransje: `My professional background spans a diverse portfolio of B2B markets — circular economy, life science, technology, industrial, retail & wholesale, oil & gas, and seafood. The unifying thread throughout my career is clear-sighted leadership and rigorous commercial discipline across sectors and geographies.`,

    utdanning: `Through the executive programme *Generative AI for Business* at BI Norwegian Business School, I am deepening my strategic competence in how AI serves as a practical leadership tool — enabling better decision-making, efficient documentation, and enhanced commercial effectiveness.

I hold a *Master of Science in Business Administration* from the University of Utah (USA), and an *Executive Master of Management* from BI Norwegian Business School, specialising in strategy and communication.`,

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

export function getProfilData(lang: Lang) {
  return data[lang];
}

// Backward compatibility
export const profilData = data.no;
