/**
 * Levende innhold for bokprosjektet — oppdater seksjoner her etter hvert som manus og struktur modnes.
 */
export type BokProsjektLang = "no" | "en";

export interface BokKnowledgeCard {
  title: string;
  body: string;
}

export interface BokStructurePart {
  num: number;
  title: string;
}

export interface BokStatusMarker {
  value: string;
  label: string;
}

export interface BokProsjektCopy {
  eyebrow: string;
  h1: string;
  subtitle: string;
  coverNote: string;
  heroIntro: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  /** Kondensert tese nederst i «Hva boken handler om» — tre parallelle setninger. */
  aboutThesis: readonly [string, string, string];
  journeyTitle: string;
  journeyIntro: string;
  journeySteps: string[];
  journeyFootnote: string;
  structureTitle: string;
  structureParagraphs: string[];
  structureParts: BokStructurePart[];
  structureNote: string;
  evidenceTitle: string;
  evidenceIntro: string;
  evidenceCards: BokKnowledgeCard[];
  audienceTitle: string;
  audienceParagraph: string;
  audienceBullets: string[];
  statusTitle: string;
  statusParagraphs: string[];
  statusMarkers: BokStatusMarker[];
  exploreTitle: string;
  ctas: { href: string; label: string }[];
  backToArticles: string;
}

export const BOK_ROUTE = { no: "/bok", en: "/en/book" } as const;

/** Foreløpige omslag — filer i public/images (ikke dupliser eller gi nye navn). */
export const BOK_OMSLAG = {
  forside: {
    src: "/images/bok-forsideomslag.png",
    alt: {
      no: "Foreløpig forsideomslag for bokprosjektet til Marius Ottesen",
      en: "Provisional front cover for Marius Ottesen's book project",
    },
  },
  bakside: {
    src: "/images/bok-baksideomslag.png",
    alt: {
      no: "Foreløpig bakomslag for bokprosjektet til Marius Ottesen",
      en: "Provisional back cover for Marius Ottesen's book project",
    },
  },
} as const;

export const BOK_PROSJEKT_COPY: Record<BokProsjektLang, BokProsjektCopy> = {
  no: {
    eyebrow: "Bokprosjekt · under utvikling",
    h1: "Læring, ledelse og AI i praksis",
    subtitle: "Hvordan mennesker, teknologi og gjennomføring skaper varig verdi",
    coverNote: "Arbeidstittel og foreløpig omslag",
    heroIntro:
      "Boken utvikles som én sammenhengende fagbok for ledere og nøkkelpersoner som skal omsette retning til resultater — gjennom mennesker, kunder, arbeidsflyt og teknologi.",
    aboutTitle: "Hva boken handler om",
    aboutParagraphs: [
      "Mange virksomheter er gode til å analysere, planlegge og formulere ambisjoner. Den vanskeligere delen er å omsette dette til varig praksis i hverdagen.",
      "Boken undersøker hvordan virksomheter kan forstå hva som faktisk skjer, prioritere det som betyr mest, mobilisere mennesker, skape kundeverdi, endre arbeidsmåter og bruke teknologi på en måte som forsterker det virksomheten prøver å oppnå.",
      "Teknologi og AI får en tydelig plass, men behandles som virkemidler. Utgangspunktet er virksomhetens behov, arbeidsmåter, mennesker og ønskede effekt.",
    ],
    aboutThesis: [
      "Forståelse må bli valg.",
      "Valg må bli praksis.",
      "Erfaring må bli læring.",
    ],
    journeyTitle: "Fra forståelse til varig verdi",
    journeyIntro:
      "Boken følger en bevegelse fra å se og forstå virksomheten, til å gjøre tydelige valg, mobilisere mennesker og omsette prioriteringene til praksis. Derfra flyttes oppmerksomheten mot kundeverdi, endring, teknologi som forsterker og organisasjonens evne til å lære.",
    journeySteps: ["SE", "VELGE", "MOBILISERE", "SKAPE VERDI", "ENDRE", "FORSTERKE", "LÆRE"],
    journeyFootnote:
      "Dette er bokas dramaturgiske bevegelse, ikke en metode som skal presses inn i alle situasjoner.",
    structureTitle: "17 kapitler i syv deler",
    structureParagraphs: [
      "Gjeldende bokarkitektur består av 17 kapitler fordelt på syv deler. Hvert kapittel skal gjøre en egen faglig jobb, føre hovedargumentet videre og skape behov for det som følger.",
    ],
    structureParts: [
      { num: 1, title: "Se og forstå" },
      { num: 2, title: "Velge" },
      { num: 3, title: "Mobilisere" },
      { num: 4, title: "Skape verdi" },
      { num: 5, title: "Endre" },
      { num: 6, title: "Forsterke med teknologi" },
      { num: 7, title: "Lære og fornye" },
    ],
    structureNote: "Strukturen er under redaksjonell utvikling og kan justeres før ferdigstillelse.",
    evidenceTitle: "Bygget på flere lag av erfaring og evidens",
    evidenceIntro: "Boken kombinerer egne erfaringer med forskning og dokumenterte faglige perspektiver.",
    evidenceCards: [
      {
        title: "Faginnlegg",
        body: "Mer enn 100 faglige tekster og refleksjoner skrevet over tid.",
      },
      {
        title: "Leder- og arbeidserfaring",
        body: "Mer enn 25 års erfaring fra kommersiell ledelse, salg, industri, rådgivning og organisasjonsutvikling.",
      },
      {
        title: "Prosjekter og løsninger",
        body: "Praktiske utviklingsprosjekter innen blant annet kommersiell utvikling, arbeidsflyt, digitalisering og AI.",
      },
      {
        title: "Master- og prosjektarbeid",
        body: "Fire større arbeider innen motivasjon og belønning, intensjon og atferd, strategiske valg og outsourcing, samt Generative AI for Business.",
      },
      {
        title: "Ekstern forskning",
        body: "Fagfellevurdert forskning, etablerte modeller og nyere litteratur brukes for å støtte, nyansere og utfordre egne erfaringer.",
      },
    ],
    audienceTitle: "For ledere som skal få ting til å skje",
    audienceParagraph:
      "Boken er skrevet for ledere og nøkkelpersoner som skal omsette retning til resultater gjennom mennesker, kunder, arbeidsflyt og teknologi.",
    audienceBullets: [
      "ledelse og kommersiell utvikling",
      "strategi og gjennomføring",
      "salg og kundeutvikling",
      "organisasjons- og arbeidsflyt",
      "digital transformasjon",
      "AI og ny teknologi",
    ],
    statusTitle: "Under utvikling",
    statusParagraphs: [
      "Manus, struktur og kildegrunnlag utvikles fortløpende. Flere kapitler er allerede skrevet og testet redaksjonelt, mens andre fortsatt er under utvikling.",
      "Målet er ikke å samle tidligere tekster mellom to permer, men å utvikle én fagbok med tydelig argument, sammenheng og leseflyt.",
    ],
    statusMarkers: [
      { value: "17", label: "kapitler" },
      { value: "7", label: "deler" },
      { value: "100+", label: "faglige tekster som råmateriale" },
    ],
    exploreTitle: "Utforsk videre",
    ctas: [
      { href: "/faginnlegg", label: "Faginnlegg" },
      { href: "/erfaring", label: "Erfaring og lederprofil" },
      { href: "/resultater", label: "Dokumenterte resultater" },
      { href: "/prosjekter", label: "Utviklingsprosjekter" },
      { href: "/cv", label: "CV og lederprofil" },
    ],
    backToArticles: "Tilbake til Faginnlegg",
  },
  en: {
    eyebrow: "Book project · work in progress",
    h1: "Learning, leadership and AI in practice",
    subtitle: "How people, technology and execution create lasting value",
    coverNote: "Working title and provisional cover",
    heroIntro:
      "The book is being developed as one coherent professional work for leaders and key people who must turn direction into results — through people, customers, workflows and technology.",
    aboutTitle: "What the book is about",
    aboutParagraphs: [
      "Many organisations are good at analysing, planning and stating ambition. The harder part is turning that into lasting practice in everyday work.",
      "It examines how organisations can understand what is actually happening, prioritise what matters most, mobilise people, create customer value, change ways of working and use technology in ways that strengthen what the organisation is trying to achieve.",
      "Technology and AI have a clear place, but are treated as means. The starting point is the organisation’s needs, ways of working, people and desired effects.",
    ],
    aboutThesis: [
      "Understanding must become choice.",
      "Choice must become practice.",
      "Experience must become learning.",
    ],
    journeyTitle: "From understanding to lasting value",
    journeyIntro:
      "The book follows a movement from seeing and understanding the organisation, to making clear choices, mobilising people and turning priorities into practice. From there the focus shifts to customer value, change, technology as reinforcement and the organisation’s ability to learn.",
    journeySteps: ["SEE", "CHOOSE", "MOBILISE", "CREATE VALUE", "CHANGE", "REINFORCE", "LEARN"],
    journeyFootnote:
      "This is the book’s narrative movement, not a method to be forced into every situation.",
    structureTitle: "17 chapters in seven parts",
    structureParagraphs: [
      "The current book architecture consists of 17 chapters across seven parts. Each chapter should do a distinct job, advance the main argument and create a need for what follows.",
    ],
    structureParts: [
      { num: 1, title: "See and understand" },
      { num: 2, title: "Choose" },
      { num: 3, title: "Mobilise" },
      { num: 4, title: "Create value" },
      { num: 5, title: "Change" },
      { num: 6, title: "Reinforce with technology" },
      { num: 7, title: "Learn and renew" },
    ],
    structureNote: "The structure is under editorial development and may change before completion.",
    evidenceTitle: "Built on several layers of experience and evidence",
    evidenceIntro: "The book combines my own experience with research and documented professional perspectives.",
    evidenceCards: [
      {
        title: "Articles",
        body: "More than 100 professional texts and reflections written over time.",
      },
      {
        title: "Leadership and work experience",
        body: "More than 25 years from commercial leadership, sales, industry, consulting and organisational development.",
      },
      {
        title: "Projects and solutions",
        body: "Practical development work in commercial development, workflows, digitalisation and AI, among other areas.",
      },
      {
        title: "Master’s and project work",
        body: "Four major works on motivation and reward, intention and behaviour, strategic choices and outsourcing, and Generative AI for Business.",
      },
      {
        title: "External research",
        body: "Peer-reviewed research, established models and recent literature are used to support, nuance and challenge my own experience.",
      },
    ],
    audienceTitle: "For leaders who need to make things happen",
    audienceParagraph:
      "The book is written for leaders and key people who must turn direction into results through people, customers, workflows and technology.",
    audienceBullets: [
      "leadership and commercial development",
      "strategy and execution",
      "sales and customer development",
      "organisation and workflows",
      "digital transformation",
      "AI and new technology",
    ],
    statusTitle: "Work in progress",
    statusParagraphs: [
      "Manuscript, structure and sources are developed continuously. Several chapters are already written and editorially tested; others are still in development.",
      "The aim is not to bind past texts between two covers, but to develop one professional book with a clear argument, coherence and reading flow.",
    ],
    statusMarkers: [
      { value: "17", label: "chapters" },
      { value: "7", label: "parts" },
      { value: "100+", label: "professional texts as raw material" },
    ],
    exploreTitle: "Explore further",
    ctas: [
      { href: "/faginnlegg", label: "Articles" },
      { href: "/erfaring", label: "Experience and leadership profile" },
      { href: "/resultater", label: "Documented results" },
      { href: "/prosjekter", label: "Development projects" },
      { href: "/cv", label: "CV and leadership profile" },
    ],
    backToArticles: "Back to Articles",
  },
};
