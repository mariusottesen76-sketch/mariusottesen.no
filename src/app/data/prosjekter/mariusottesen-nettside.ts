import { prosjektKontaktLenke } from "../../lib/prosjekt-lenker";
import { prosjektVidereutviklingTekst } from "../prosjekt-videreutvikling";
import { type ProsjektType } from "./predictive-sales-coach";

const siteLinkNo =
  '<a href="https://www.mariusottesen.no" target="_blank" rel="noopener noreferrer" aria-label="Åpne mariusottesen.no">mariusottesen.no</a>';
const siteLinkEn =
  '<a href="https://www.mariusottesen.no" target="_blank" rel="noopener noreferrer" aria-label="Open mariusottesen.no">mariusottesen.no</a>';

export const mariusottesenNettside: ProsjektType = {
  id: "mariusottesen-no-2025",
  tittel: {
    no: "Nettside for lederprofil, portefølje og AI-demonstratorer (mariusottesen.no)",
    en: "Website for leadership profile, portfolio and AI demonstrators (mariusottesen.no)",
  },
  teaser: {
    no: "Nettside for mariusottesen.no — lederprofil, dokumenterte resultater, faginnlegg, AI-prosjekter og tilgangsstyrte demonstratorer, bygget med Next.js og praktisk AI i hele arbeidsflyten siden slutten av 2025.",
    en: "Website for mariusottesen.no — leadership profile, documented results, articles, AI projects and access-controlled demonstrators, built with Next.js and practical AI across the workflow since late 2025.",
  },
  bildeUrl: "/images/profil.jpg",
  bildeRamme: "natural",
  dato: "2025-11-15",
  visningsDato: "15.11.25",
  bildeHint: {
    no: "Klikk på bildet for å se mariusottesen.no i større format.",
    en: "Click the image to view mariusottesen.no in a larger format.",
  },
  innhold: {
    no: `<strong>Hva prosjektet er</strong>

${siteLinkNo} er nettsiden jeg har bygget siden slutten av 2025 — en profesjonell porteføljeplattform for arbeidsgivere, rekrutterere og beslutningstakere som ønsker å forstå erfaring, resultater, faglig tyngde og praktisk AI-kompetanse i én sammenheng.

<strong>Problemet prosjektet adresserer</strong>

En lederprofil med mye erfaring, dokumenterte resultater, faginnlegg og egne AI-prosjekter blir fort fragmentert på tvers av LinkedIn, CV, presentasjoner og enkeltstående demoer. Det gir et ufullstendig bilde av både kommersiell ledelse og praktisk AI-forståelse.

<strong>Hva som er bygget eller utviklet</strong>

• Publisert nettside på ${siteLinkNo} med norsk og engelsk innhold
• Lederprofil, erfaring, dokumenterte resultater, referanser, faginnlegg, AI-prosjekter, consulting-oversikt, CV og kontakt
• Faginnlegg med anbefalte lesestier, innholdsfortegnelse, kortoversikt og modal for hele innlegg
• AI-prosjektside med portefølje, hurtigoversikt og detaljerte prosjektbeskrivelser
• Tilgangsstyrte AI-demonstratorer integrert i porteføljen: AI Readiness Scan, FlowSignal, The Predictive Sales Coach v2.0 og SMB Salgsflyt-sjekken
• Egne landingssider og merkevareprofiler for utvalgte løsninger, inkludert /psc, /flowsignal og /salgsflyt-sjekken
• Kontaktskjema med e-postintegrasjon for faglig dialog og henvendelser
• SEO, Open Graph, JSON-LD, sitemap og språkvelger for profesjonell synlighet
• Responsivt design med mobilnavigasjon og gjennomgående visuell profil

<strong>Hvordan det fungerer</strong>

Nettsiden fungerer som en samlet profesjonell flate: først profil og dokumentert leveranseevne, deretter faglig dybde gjennom innlegg, og til slutt konkrete AI-prosjekter og demonstratorer som viser hva som faktisk er bygget.

AI er brukt både i innholdsproduksjon, strukturering, prototyping og videreutvikling av egne løsninger — ikke bare som tema, men som arbeidsmetode i hele prosjektet.

<strong>Hvorfor dette er relevant</strong>

Prosjektet viser hvordan en kommersiell leder kan kombinere dokumentert resultathistorikk, tydelig formidling og praktisk AI-utvikling i én troverdig portefølje.

Det er relevant for arbeidsgivere og rekrutterere som vil vurdere både ledererfaring og digital gjennomføringsevne, og for faglige samarbeidspartnere som ønsker å se hvordan AI kan brukes i reell profilering, produktutvikling og kommunikasjon.

<strong>Status og modenhet</strong>

Publisert og løpende videreutviklet siden slutten av 2025. Nettsiden er live, fungerer som hovedportefølje og oppdateres etter hvert som nye prosjekter, innlegg og løsninger modnes.

<strong>Mulig videreutvikling</strong>

${prosjektVidereutviklingTekst("mariusottesen-no-2025", "no")}

<strong>Videre relevans og mulig anvendelse</strong>

${prosjektKontaktLenke("no", "Ta kontakt for faglig dialog")} dersom du ønsker å diskutere nettsiden, porteføljen eller hvordan lignende løsninger kan brukes i egen profilering eller kommersiell utvikling.`,
    en: `<strong>What the project is</strong>

${siteLinkEn} is the website I have built since late 2025 — a professional portfolio platform for employers, recruiters and decision-makers who want to understand experience, results, subject expertise and practical AI competence in one place.

<strong>The problem the project addresses</strong>

A leadership profile with extensive experience, documented results, articles and own AI projects easily becomes fragmented across LinkedIn, CV, presentations and one-off demos. That gives an incomplete picture of both commercial leadership and practical AI understanding.

<strong>What has been built or developed</strong>

• Published website at ${siteLinkEn} with Norwegian and English content
• Leadership profile, experience, documented results, references, articles, AI projects, consulting overview, CV and contact
• Articles section with recommended reading paths, table of contents, card overview and modal for full posts
• AI projects page with portfolio, quick overview and detailed project descriptions
• Access-controlled AI demonstrators integrated in the portfolio: AI Readiness Scan, FlowSignal, The Predictive Sales Coach v2.0 and SMB Sales Flow Check
• Dedicated landing pages and brand profiles for selected solutions, including /psc, /flowsignal and /salgsflyt-sjekken
• Contact form with email integration for professional dialogue and inquiries
• SEO, Open Graph, JSON-LD, sitemap and language toggle for professional visibility
• Responsive design with mobile navigation and consistent visual profile

<strong>How it works</strong>

The website functions as a unified professional surface: first profile and documented delivery capability, then subject depth through articles, and finally concrete AI projects and demonstrators showing what has actually been built.

AI is used in content production, structuring, prototyping and further development of my own solutions — not only as a topic, but as a working method across the project.

<strong>Why this is relevant</strong>

The project shows how a commercial leader can combine documented results history, clear communication and practical AI development in one credible portfolio.

It is relevant for employers and recruiters assessing both leadership experience and digital execution capability, and for professional partners who want to see how AI can be used in real profiling, product development and communication.

<strong>Status and maturity</strong>

Published and under continuous development since late 2025. The site is live, serves as the main portfolio and is updated as new projects, articles and solutions mature.

<strong>Possible further development</strong>

${prosjektVidereutviklingTekst("mariusottesen-no-2025", "en")}

<strong>Further relevance and possible application</strong>

${prosjektKontaktLenke("en", "Get in touch for a professional conversation")} if you want to discuss the website, the portfolio or how similar solutions can be used in your own profiling or commercial development.`,
  },
};
