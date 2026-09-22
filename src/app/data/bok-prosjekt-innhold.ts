/**
 * Levende innhold for bokprosjektet — oppdater seksjoner her etter hvert som manus og struktur modnes.
 */
export type BokProsjektLang = "no" | "en";

export interface BokProsjektSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BokProsjektCopy {
  eyebrow: string;
  h1Line1: string;
  h1Line2: string;
  subtitle: string;
  status: string;
  sections: BokProsjektSection[];
  roleTitle: string;
  roleBody: string;
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
    h1Line1: "Fra praksis, forskning og 100+ faginnlegg",
    h1Line2: "til bok",
    subtitle:
      "Bygget på 25+ års kommersiell ledererfaring, rundt 20 egne AI-prosjekter og fire egne masteroppgaver.",
    status: "Under utvikling · 2026",
    sections: [
      {
        id: "om",
        title: "Om bokprosjektet",
        paragraphs: [
          "Bokprosjektet er større enn fagarkivet. Jeg jobber videre med å finne en tydelig struktur der faginnlegg, egne masteroppgaver, egne AI-prosjekter, ledererfaring og fagkilder henger sammen — som én bok om ledelse, kommersiell utvikling, gjennomføring, transformasjon, læring og praktisk AI.",
        ],
      },
      {
        id: "grunnlag",
        title: "Kunnskapsgrunnlaget",
        paragraphs: [
          "Arbeidet bygger på flere lag av erfaring og faglige kilder. Dette er råmaterialet boken utvikles fra — ikke en automatisk kapittelliste.",
        ],
        bullets: [
          "100+ faginnlegg",
          "Rundt 20 egne AI-prosjekter, prototyper og implementeringscase",
          "Fire egne masteroppgaver",
          "Forskning, teori, modeller og rammeverk",
          "Salgsledelse og utvikling av mennesker og team",
          "Erfaringer fra transformasjon, strategi og endringsarbeid",
          "Over 25 års kommersiell og operativ ledererfaring",
        ],
      },
      {
        id: "tema",
        title: "Hva boka undersøker",
        paragraphs: [
          "Foreløpig tematisk retning — ikke endelig innholdsfortegnelse:",
        ],
        bullets: [
          "Ledelse og gjennomføring",
          "Kommersiell utvikling og kundeverdi",
          "Mennesker, motivasjon, kultur og læring",
          "Strategi, endring og transformasjon",
          "Teknologi og praktisk AI",
          "Hvordan virksomheter oppdager, lærer og justerer raskere",
        ],
      },
      {
        id: "redaksjon",
        title: "Fra enkeltinnlegg til sammenheng",
        paragraphs: [
          "Faginnleggene brukes som råmateriale, ikke som ferdige bokkapitler. Ideer, erfaringer og perspektiver kan bygges videre på, kombineres med andre kilder, utfordres eller flyttes inn i nye sammenhenger.",
        ],
      },
      {
        id: "levende",
        title: "Et levende prosjekt",
        paragraphs: [
          "Prosjektet utvikles løpende. Nye faginnlegg, erfaringer og case kan inngå i kunnskapsgrunnlaget, samtidig som bokstrukturen gradvis strammes inn. Denne siden oppdateres etter hvert som arbeidet går fra utkast og struktur mot ferdige kapitler og manus.",
        ],
      },
    ],
    roleTitle: "Om min rolle",
    roleBody:
      "Jeg utvikler bokprosjektet som forfatter og faglig redaktør, med utgangspunkt i egen ledererfaring, tidligere akademisk arbeid, praktiske prosjekter og løpende faglig utforskning.",
    exploreTitle: "Utforsk videre",
    ctas: [
      { href: "/faginnlegg", label: "Faginnlegg" },
      { href: "/erfaring", label: "Erfaring og lederprofil" },
      { href: "/resultater", label: "Dokumenterte resultater" },
      { href: "/prosjekter", label: "AI-prosjekter" },
      { href: "/cv", label: "CV og lederprofil" },
    ],
    backToArticles: "Tilbake til Faginnlegg",
  },
  en: {
    eyebrow: "Book project · work in progress",
    h1Line1: "From practice, research and 100+ articles",
    h1Line2: "to book",
    subtitle:
      "Built on 25+ years of commercial leadership experience, around 20 self-developed AI projects and four master’s theses of my own.",
    status: "Work in progress · 2026",
    sections: [
      {
        id: "om",
        title: "About the book project",
        paragraphs: [
          "The book project is larger than the article archive. I keep working towards a clear structure where posts, my own master’s theses, my own AI projects, leadership experience and academic sources fit together — as one book on leadership, commercial development, execution, transformation, learning and practical AI.",
        ],
      },
      {
        id: "grunnlag",
        title: "Knowledge base",
        paragraphs: [
          "The work draws on several layers of experience and sources. This is the raw material the book is developed from — not an automatic chapter list.",
        ],
        bullets: [
          "100+ articles",
          "Around 20 self-developed AI projects, prototypes and implementation cases",
          "Four own master’s theses",
          "Research, theory, models and frameworks",
          "Sales leadership and development of people and teams",
          "Experience from transformation, strategy and change work",
          "Over 25 years of commercial and operational leadership experience",
        ],
      },
      {
        id: "tema",
        title: "What the book explores",
        paragraphs: ["Provisional thematic direction — not a final table of contents:"],
        bullets: [
          "Leadership and execution",
          "Commercial development and customer value",
          "People, motivation, culture and learning",
          "Strategy, change and transformation",
          "Technology and practical AI",
          "How organisations discover, learn and adjust faster",
        ],
      },
      {
        id: "redaksjon",
        title: "From single posts to coherence",
        paragraphs: [
          "Articles are used as raw material, not as finished book chapters. Ideas, experience and perspectives can be developed further, combined with other sources, challenged or placed in new contexts.",
        ],
      },
      {
        id: "levende",
        title: "A living project",
        paragraphs: [
          "The project evolves continuously. New articles, experience and cases may enter the knowledge base while the book structure is gradually tightened. This page is updated as the work moves from drafts and structure towards finished chapters and manuscript.",
        ],
      },
    ],
    roleTitle: "My role",
    roleBody:
      "I develop the book project as author and editorial lead, drawing on my own leadership experience, prior academic work, practical projects and ongoing professional exploration.",
    exploreTitle: "Explore further",
    ctas: [
      { href: "/faginnlegg", label: "Articles" },
      { href: "/erfaring", label: "Experience and leadership profile" },
      { href: "/resultater", label: "Documented results" },
      { href: "/prosjekter", label: "AI projects" },
      { href: "/cv", label: "CV and leadership profile" },
    ],
    backToArticles: "Back to Articles",
  },
};
