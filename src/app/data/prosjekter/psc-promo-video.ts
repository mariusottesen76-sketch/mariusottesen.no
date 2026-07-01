import { PSC_APP_URL } from "../../lib/psc-brand";
import { prosjektKontaktLenke } from "../../lib/prosjekt-lenker";
import type { ProsjektType } from "./predictive-sales-coach";

const linkClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";
const pscLink = `<a href="${PSC_APP_URL}" target="_blank" rel="noopener noreferrer" class="${linkClass}">The Predictive Sales Coach</a>`;
const mocLink = `<a href="/consulting" aria-label="Gå til Marius Ottesen Consulting" class="${linkClass}">Marius Ottesen Consulting</a>`;
const mocLinkEn = `<a href="/consulting" aria-label="Go to Marius Ottesen Consulting" class="${linkClass}">Marius Ottesen Consulting</a>`;

/** Promovideo fra lokal fil i public/images. */
export const pscPromoVideo: ProsjektType = {
  id: "psc-promo-video-moc-2026",
  tittel: {
    no: "Promovideo: The Predictive Sales Coach og Marius Ottesen Consulting",
    en: "Promo video: The Predictive Sales Coach and Marius Ottesen Consulting",
  },
  teaser: {
    no: "PSCv2.0, DISC og strukturert salgstrening, formidlet gjennom min første AI-genererte reklamefilm. Prosjektet viser både hvordan AI kan brukes i salgstrening, og hvordan generativ AI kan brukes til visuell konseptformidling og kommersiell posisjonering.",
    en: "PSCv2.0, DISC and structured sales training, conveyed through my first AI-generated commercial. The project shows both how AI can be used in sales training and how generative AI can be used for visual concept communication and commercial positioning.",
  },
  bildeUrl: "/images/psc-promo-video-poster.png",
  dato: "2026-05-06",
  visningsDato: "06.05.26",
  videoUrl: "/images/promovideo-final.mov",
  videoFormat: "portrait",
  bildeHint: {
    no: "Klikk på bildet for å starte avspilling av promovideo.",
    en: "Click the image to start playing the promo video.",
  },
  innhold: {
    no: `<strong>Hva prosjektet er</strong>

Dette er en promovideo for ${pscLink} (PSCv2.0) og ${mocLink}. Videoen viser hvordan AI, DISC-inspirert kundepsykologi og strukturert salgstrening kan gjøre møteforberedelser mer presise, relevante og målbare.

Videoen markerer også min første AI-genererte reklamefilm, der video, lyd og visuelt innhold er utviklet ved hjelp av generativ AI.

<strong>Problemet prosjektet adresserer</strong>

Mange AI-prosjekter blir vanskelige å forstå fordi de beskrives teknisk eller abstrakt. For å skape interesse, tillit og kommersiell relevans må løsninger også kunne forklares visuelt, enkelt og troverdig.

<strong>Hva som er bygget eller utviklet</strong>

Det er utviklet en AI-generert promovideo som viser hvordan PSCv2.0 kan brukes til møteforberedelse, DISC-inspirert kundetilpasning, strukturert salgstrening og bedre gjennomføring i B2B-salg.

Videoen ble produsert i Higgsfield, med modellen Seedance 2.0 brukt til å generere scenene. Redigering, color grading og ferdigstillelse ble gjort i DaVinci Resolve Studio, mens lyd og musikk er hentet fra Pixabay.

<strong>Hvordan det fungerer</strong>

Filmen viser hvordan en selger og salgssjef kan bruke PSCv2.0 til å forberede et realistisk kundemøtescenario, forstå kundens personprofil, trene på ulike salgsfaser og gå inn i møtet med større trygghet.

I selve løsningen setter brukeren opp salgssituasjon, kundetype, mål og salgsfase. Deretter kan selgeren trene på realistiske kundedialoger med innvendinger, responsmønstre og fasebasert evaluering.

<strong>Hvorfor dette er relevant</strong>

Prosjektet viser to ting samtidig: hvordan AI kan brukes til salgstrening, og hvordan AI kan brukes til å formidle komplekse løsninger på en enkel og kommersiell måte.

For arbeidsgivere viser prosjektet praktisk erfaring med AI-basert produktkommunikasjon, salgstrening og kommersiell posisjonering. Prosjektet viser hvordan AI kan gjøre opplæring, møteforberedelse og salgsutvikling mer målrettet.

<strong>Status og modenhet</strong>

Ferdig produsert promovideo og kommunikasjonsartefakt. Videoen støtter posisjoneringen av PSCv2.0 og Marius Ottesen Consulting.

<strong>Mulig videreutvikling</strong>

Videoformatet kan videreutvikles til demoer, korte forklaringsfilmer, salgsopplæring, onboarding, workshop-materiell og presentasjoner for ledere og kommersielle team.

<strong>Videre relevans og mulig anvendelse</strong>

Se videoen for å forstå hvordan PSCv2.0 kan brukes i praktisk salgstrening, eller ${prosjektKontaktLenke("no")} for en gjennomgang av løsningen.`,
    en: `<strong>What the project is</strong>

This is a promotional video for ${pscLink} (PSCv2.0) and ${mocLinkEn}. The video shows how AI, DISC-inspired customer psychology and structured sales training can make meeting preparation more precise, relevant and measurable.

The video also marks my first AI-generated commercial, where video, audio and visuals were produced using generative AI.

<strong>The problem the project addresses</strong>

Many AI projects are hard to understand because they are described in technical or abstract terms. To create interest, trust and commercial relevance, solutions must also be explainable in a visual, simple and credible way.

<strong>What has been built or developed</strong>

An AI-generated promotional video was developed showing how PSCv2.0 can be used for meeting preparation, DISC-inspired customer adaptation, structured sales training and better execution in B2B sales.

The video was produced in Higgsfield, with the Seedance 2.0 model used to generate the scenes. Editing, colour grading and finishing were done in DaVinci Resolve Studio, while audio and music were sourced from Pixabay.

<strong>How it works</strong>

The film shows how a salesperson and sales manager can use PSCv2.0 to prepare for a realistic customer-meeting scenario, understand the customer's profile, practise different sales phases and enter the meeting with greater confidence.

In the solution itself, the user sets up the sales situation, customer type, objectives and sales phase. The seller can then practise realistic customer dialogues with objections, response patterns and phase-based evaluation.

<strong>Why this is relevant</strong>

The project demonstrates two things at once: how AI can be used for sales training, and how AI can be used to communicate complex solutions in a simple and commercial way.

For employers, the project shows practical experience with AI-based product communication, sales training and commercial positioning. The project shows how AI can make training, meeting preparation and sales development more targeted.

<strong>Status and maturity</strong>

Completed promotional video and communication artefact. The video supports the positioning of PSCv2.0 and Marius Ottesen Consulting.

<strong>Possible further development</strong>

The video format can be developed into demos, short explainer films, sales training, onboarding, workshop material and presentations for leaders and commercial teams.

<strong>Further relevance and possible application</strong>

Watch the video to understand how PSCv2.0 can be used in practical sales training, or ${prosjektKontaktLenke("en")} for a walkthrough of the solution.`,
  },
};
