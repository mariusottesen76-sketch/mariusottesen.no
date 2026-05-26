import { Lang } from "../LanguageContext";

export type ProfilData = {
  intro: string;
  aiPerspektiv: string;
  aiBidrag: string;
  aiReise: string[];
  formulaHtml: string;
  aiPlattformer: string;
  lederskap: string;
  bransje: string;
  utdanning: string;
  kompetanse: string[];
  styrker: string[];
};

const data: Record<Lang, ProfilData> = {
  no: {
    intro: `Jeg er kommersiell leder med erfaring fra å bygge vekst, styrke lønnsomhet og utvikle team i komplekse B2B-virksomheter. Jeg har ledet salg, marked og kommersiell utvikling med personal- og P/L-ansvar, og trives best når strategi skal omsettes til tydelig retning, sterk gjennomføring og målbare resultater.

I dag jobber jeg videre med dette gjennom Marius Ottesen Consulting, egne utviklingsprosjekter og AI Value Lab Oslo, med fokus på kommersiell verdiskaping og gjennomførbar implementering.`,

    aiPerspektiv: `Jeg ser at AI-verdi oppstår når virksomheter går fra verktøybruk til arbeidsflytdesign. Legger vi AI oppå dagens prosesser, får vi som regel bare inkrementelle gevinster. Redesigner vi arbeidsflyt, roller og beslutningspunkter, kan gevinstene bli strukturelle. Det gjelder særlig i kommersielle prosesser der marked, salg og kundeteam ofte sitter på mye av dataene som trengs.

Typiske områder er B2B-salg og go-to-market, vekst og retention, samt service og kundebehandling. Her finnes det ofte arbeidsflyter med høy gjennomførbarhet og høy verdi. Min jobb er å koble marked, kunde, salgsprosess, organisasjon og teknologi, og vurdere realistisk hva som faktisk kan leveres.`,

    aiBidrag: `Konkret bidrar jeg med å forstå reelt forretningsbehov, analysere kunde- og arbeidsflyt, avgrense use cases, vurdere risiko og bygge implementeringsplaner som kan vurderes på ledernivå. Typiske leveranser spenner fra digital kundedialog og front-end til booking, oppfølging og automatisering av salgs- og serviceprosesser, agentløsninger og AI-assistert beslutningsstøtte.`,

    aiReise: [
      "Problemforståelse",
      "Løsningsdesign",
      "Roadmap",
      "Teknologi",
      "Governance",
      "Personvern",
      "Ansvarlig bruk",
      "Skalering",
      "Menneskelig kontroll",
    ],

    formulaHtml: `<div class="profil-formel"><p class="profil-formel-tittel">Business case-formel for AI-verdi</p><p class="profil-formel-linje">Annual net value = Baseline × AI delta × Adoption × Confidence − Build &amp; run cost</p><p class="profil-formel-forklaring">Annual net value er den årlige nettoverdien AI skaper. Baseline er utgangspunktet. AI delta er forbedringen teknologien faktisk kan gi. Adopsjon og tillit avgjør hvor mye av potensialet som realiseres. Hva det koster å bygge, drifte og skalere trekkes fra.</p></div>`,

    aiPlattformer: `Les mer om arbeidet via <a href="https://www.mariusottesen.no/consulting">Marius Ottesen Consulting</a>, <a href="/prosjekter">mine AI-prosjekter</a> og <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer">AI Value Lab Oslo</a>.`,

    lederskap: `Jeg tror på styrkebasert ledelse, tydelige forventninger og nær oppfølging. Lederstilen er tydelig, involverende og relasjonssterk, og kjennetegnes av trygghet, eierskap og gjennomføring. Det er særlig viktig i miljøer med høyt tempo og sterke fagmiljøer.

Trives i hybride lederroller som kombinerer strategisk ansvar med operativ tilstedeværelse, og i situasjoner der retning, prioritering og gjennomføring er avgjørende.`,

    bransje: `Har erfaring fra komplekse B2B-virksomheter innen blant annet sirkulær økonomi, life science, industri, teknologi og retail/grossist. Fellesnevneren er kommersiell ledelse, endringsarbeid og evnen til å skape struktur, retning og resultater på tvers av fagmiljøer og lokasjoner.`,

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
    intro: `I am a commercial leader with experience building growth, strengthening profitability, and developing teams in complex B2B organisations. I have led sales, marketing, and commercial development with people and P&L accountability, and thrive when strategy must translate into clear direction, strong execution, and measurable results.

Today I continue this work through Marius Ottesen Consulting, my own development projects, and AI Value Lab Oslo, with a focus on commercial value creation and feasible implementation.`,

    aiPerspektiv: `I see AI value emerging when organisations move from tool use to workflow design. Layer AI onto existing processes and you usually get incremental gains only. Redesign workflows, roles, and decision points, and the gains can become structural. This is especially true in commercial processes where marketing, sales, and customer teams often hold much of the data required.

Typical areas include B2B sales and go-to-market, growth and retention, and service and customer care. These are often high-feasibility, high-value workflows. My role is to connect market, customer, sales process, organisation, and technology, and assess realistically what can actually deliver.`,

    aiBidrag: `In practice I help organisations understand real business needs, analyse customer and work flows, scope use cases, assess risk, and build implementation plans that can be evaluated at leadership level. Typical deliverables range from digital customer dialogue and front-end solutions to booking, follow-up, and automation of sales and service processes, agent-based solutions, and AI-assisted decision support.`,

    aiReise: [
      "Problem understanding",
      "Solution design",
      "Roadmap",
      "Technology",
      "Governance",
      "Privacy",
      "Responsible use",
      "Scaling",
      "Human control",
    ],

    formulaHtml: `<div class="profil-formel"><p class="profil-formel-tittel">Business case formula for AI value</p><p class="profil-formel-linje">Annual net value = Baseline × AI delta × Adoption × Confidence − Build &amp; run cost</p><p class="profil-formel-forklaring">Annual net value is the annual net value AI creates. Baseline is the starting point. AI delta is the improvement the technology can actually deliver. Adoption and confidence determine how much of the potential is realised. Build &amp; run cost is subtracted.</p></div>`,

    aiPlattformer: `Read more about the work via <a href="https://www.mariusottesen.no/consulting">Marius Ottesen Consulting</a>, <a href="/prosjekter">my AI projects</a>, and <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer">AI Value Lab Oslo</a>.`,

    lederskap: `I believe in strengths-based leadership, clear expectations, and close follow-up. My leadership style is clear, engaging, and relationship-oriented, characterised by psychological safety, ownership, and disciplined execution. That matters especially in fast-paced environments with strong specialist cultures.

I thrive in hybrid leadership roles that combine strategic responsibility with operational presence, and in situations where direction, prioritisation, and execution are decisive.`,

    bransje: `I have experience from complex B2B organisations in areas including circular economy, life science, industry, technology, and retail/wholesale. The common thread is commercial leadership, change work, and the ability to create structure, direction, and results across professional environments and locations.`,

    utdanning: `Through the master's course *Generative AI for Business* at BI Norwegian Business School, I have developed strategic AI competence focused on leadership tools for decision support, efficient documentation, and enhanced commercial effectiveness.

I hold a *Master of Science in Business Administration* from the University of Utah (USA), and an *Executive Master of Management* from BI Norwegian Business School, specialising in strategy, communication, and AI.`,

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
