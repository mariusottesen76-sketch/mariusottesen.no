import type { ProjectV2Record } from "../types";

const PROMO_VIDEO_URL = "/images/promovideo-final.mov";

export const pscPromoVideoV2: ProjectV2Record = {
  id: "psc-promo-video-moc-2026",
  slug: "psc-promo-video",
  category: "video_communication",
  layoutVersion: "project_v2",
  accessMode: "external_destination",
  detailLevel: "external_destination",
  date: "2026-05-06",
  displayDate: { no: "06.05.26", en: "06.05.26" },
  title: {
    no: "Promovideo: The Predictive Sales Coach og Marius Ottesen Consulting",
    en: "Promo video: The Predictive Sales Coach and Marius Ottesen Consulting",
  },
  subtitle: {
    no: "Ferdigstilt promovideo og visuell produktpresentasjon utviklet som del av portefølje- og formidlingsarbeidet",
    en: "Completed promo video and visual product presentation developed as part of portfolio and communication work",
  },
  statusLabel: {
    no: "Ferdig produsert promovideo og kommunikasjonsartefakt",
    en: "Completed promotional video and communication artefact",
  },
  overviewIntroduction: {
    no: "AI-generert promovideo for The Predictive Sales Coach v2.0 og Marius Ottesen Consulting. Filmen viser hvordan AI, DISC-inspirert kundepsykologi og strukturert salgstrening kan gjøre møteforberedelser mer presise — og hvordan generativ AI kan brukes til visuell konseptformidling.",
    en: "AI-generated promo video for The Predictive Sales Coach v2.0 and Marius Ottesen Consulting. The film shows how AI, DISC-inspired customer psychology and structured sales training can make meeting preparation more precise — and how generative AI can be used for visual concept communication.",
  },
  overview: {
    what: {
      no: "En promovideo som formidler PSCv2.0 og Marius Ottesen Consulting gjennom kort, visuelt og kommersielt språk — ikke som egen programvareløsning.",
      en: "A promotional video communicating PSCv2.0 and Marius Ottesen Consulting through short, visual and commercial language — not as a standalone software product.",
    },
    challenge: {
      no: "Mange AI-prosjekter blir vanskelige å forstå fordi de beskrives teknisk eller abstrakt. For å skape interesse og tillit må løsninger også kunne forklares visuelt, enkelt og troverdig.",
      en: "Many AI projects are hard to understand because they are described in technical or abstract terms. To create interest and trust, solutions must also be explainable in a visual, simple and credible way.",
    },
    built: {
      no: "En AI-generert promovideo som viser møteforberedelse, DISC-inspirert kundetilpasning og strukturert salgstrening. Produsert i Higgsfield (Seedance 2.0), redigert i DaVinci Resolve Studio, med lyd og musikk fra Pixabay.",
      en: "An AI-generated promotional video showing meeting preparation, DISC-inspired customer adaptation and structured sales training. Produced in Higgsfield (Seedance 2.0), edited in DaVinci Resolve Studio, with audio and music from Pixabay.",
    },
    how: {
      no: "Filmen viser hvordan selger og salgssjef kan bruke PSCv2.0 til å forberede et kundemøte, forstå personprofil, trene salgsfaser og gå inn i møtet med større trygghet — som formidling, ikke produktdemo.",
      en: "The film shows how a salesperson and sales manager can use PSCv2.0 to prepare for a customer meeting, understand the person profile, practise sales phases and enter the meeting with greater confidence — as communication, not a product demo.",
    },
    relevance: {
      no: "Viser praktisk erfaring med AI-basert produktkommunikasjon, salgstrening og kommersiell posisjonering — relevant for arbeidsgivere, samarbeidspartnere og produktpresentasjon i porteføljen.",
      en: "Shows practical experience with AI-based product communication, sales training and commercial positioning — relevant for employers, partners and product presentation in the portfolio.",
    },
    status: {
      no: "Ferdigstilt promovideo og visuell produktpresentasjon utviklet som del av portefølje- og formidlingsarbeidet. Videoen støtter posisjoneringen av PSCv2.0 og Marius Ottesen Consulting.",
      en: "Completed promo video and visual product presentation developed as part of portfolio and communication work. The video supports the positioning of PSCv2.0 and Marius Ottesen Consulting.",
    },
    development: {
      no: "Videre potensial inkluderer flere produktvideoer, kortere versjoner til sosiale medier, bransje- eller målgruppetilpassede versjoner, demo- og presentasjonsmateriell og bedre kobling mellom video og detaljsider.",
      en: "Further potential includes more product videos, shorter versions for social media, industry- or audience-adapted versions, demo and presentation material and better links between video and detail pages.",
    },
    adaptation: {
      no: "Formatet kan tilpasses andre produkter, selskaper og kommersielle budskap — som kortform video, onboarding, salgsopplæring og visuell konseptformidling for ledere og kommersielle team.",
      en: "The format can be adapted for other products, organisations and commercial messages — as short-form video, onboarding, sales training and visual concept communication for leaders and commercial teams.",
    },
  },
  overviewImage: "/images/predictive-sales-coach-promovideo-hjemmeside.png?v=20260717",
  detailHeroImage: "/images/psc-promo-video-poster.png",
  detailHeroObjectPosition: "center",
  needsNewDetailHero: true,
  altText: {
    no: "Promovideo for The Predictive Sales Coach og Marius Ottesen Consulting",
    en: "Promo video for The Predictive Sales Coach and Marius Ottesen Consulting",
  },
  overviewImageFormat: "standard_1x3",
  detailHeroMissing: true,
  detailDestination: PROMO_VIDEO_URL,
  liveSolutionUrl: PROMO_VIDEO_URL,
  playbackVideo: {
    src: PROMO_VIDEO_URL,
    poster: "/images/predictive-sales-coach-promovideo-hjemmeside.png?v=20260717",
  },
  ctaLabels: {
    overviewPrimary: { no: "Se promovideoen", en: "Watch the promo video" },
    overviewSecondary: { no: "Ta kontakt om mulig samarbeid", en: "Get in touch about potential collaboration" },
  },
  seo: {
    title: {
      no: "Promovideo PSC og Marius Ottesen Consulting | Marius Ottesen",
      en: "PSC promo video and Marius Ottesen Consulting | Marius Ottesen",
    },
    description: {
      no: "AI-generert promovideo for The Predictive Sales Coach v2.0 — visuell formidling av salgstrening, møteforberedelse og kommersiell posisjonering.",
      en: "AI-generated promo video for The Predictive Sales Coach v2.0 — visual communication of sales training, meeting preparation and commercial positioning.",
    },
    ogImage: "/images/predictive-sales-coach-promovideo-hjemmeside.png?v=20260717",
    canonicalPath: "/prosjekter#psc-promo-video-moc-2026",
  },
};
