import { prosjektKontaktLenke, prosjektKontaktDialogTekst } from "../../lib/prosjekt-lenker";
import { prosjektVidereutviklingTekst } from "../prosjekt-videreutvikling";
import { type ProsjektType } from "./predictive-sales-coach";

export const aiValueLabOslo: ProsjektType = {
  id: "ai-value-lab-oslo-2026",
  tittel: {
    no: "AI Value Lab Oslo: Praktisk AI-verdi for virksomheter",
    en: "AI Value Lab Oslo: Practical AI value for organisations",
  },
  teaser: {
    no: "Tverrfaglig lærings- og utviklingsinitiativ der teknologi, forretning og praktisk utvikling møtes for å utforske ansvarlig bruk av AI gjennom reelle case.",
    en: "A cross-disciplinary learning and development initiative where technology, business and practical development meet to explore responsible use of AI through real cases.",
  },
  bildeUrl: "/images/ai-value-lab.jpeg",
  dato: "2026-03-29",
  visningsDato: "29.03.26",
  bildeHint: {
    no: "Klikk på bildet for å se AI Value Lab Oslo i større format.",
    en: "Click the image to view AI Value Lab Oslo in a larger format.",
  },
  ekstraBilder: [
    {
      src: "/images/ai-value-lab-banner.png",
      alt: { no: "AI Value Lab Oslo — deltakere", en: "AI Value Lab Oslo — participants" },
    },
    {
      src: "/images/ai-value-lab-logo.png",
      alt: { no: "AI Value Lab Oslo — logo", en: "AI Value Lab Oslo — logo" },
    },
  ],
  innhold: {
    no: `<strong>Hva prosjektet er</strong>

AI Value Lab Oslo er et tverrfaglig initiativ der teknologi, forretning og praktisk utvikling møtes. Målet er å utforske hvordan AI kan forstås, testes og brukes ansvarlig i virksomhetsnære problemstillinger.

Initiativet bruker konkrete case som læringsarena for å bygge kompetanse, prøve ut verktøy og utvikle praktisk forståelse på tvers av fagområder.

<strong>Problemet prosjektet adresserer</strong>

Mange virksomheter har interesse for AI, men mangler tid, struktur og kompetanse til å identifisere hvor teknologien faktisk kan skape verdi.

Utfordringen er ofte å gå fra generell AI-nysgjerrighet til konkrete use case, prioriterte arbeidsflyter, realistiske piloter og ansvarlig implementering.

<strong>Hva som er bygget eller utviklet</strong>

AI Value Lab Oslo er etablert som en arena for læring, sparring, praktisk testing og utvikling av AI-relaterte konsepter.

Gruppen består av Marius Ottesen, Tatiana Hanecakova og Ole Mjelde, med komplementær erfaring innen kommersiell ledelse, finans, digitalisering, innovasjon, organisasjonsutvikling og praktisk AI-bruk. Marius var initiativtaker til etableringen.

<strong>Hvordan det fungerer</strong>

Initiativet vurderer AI gjennom konkrete problemer, ikke bare verktøydemoer. Gruppen ser på hvordan AI kan skape verdi i arbeidsprosesser, kundeopplevelse, beslutningsstøtte, kommunikasjon og gjennomføring.

Kjernen er ansvarlig bruk, praktisk læring og løsninger som tåler virkeligheten.

<strong>Hvorfor dette er relevant</strong>

Prosjektet er relevant for SMB-ledere, ledergrupper, samarbeidspartnere og kunder som ønsker å forstå hvor AI faktisk kan skape verdi.

For arbeidsgivere viser initiativet evne til å bygge faglige arenaer, samle kompetanse og utvikle praktisk AI-forståelse. Prosjektet viser hvordan AI kan kobles til forretningsnære problemstillinger, ansvarlig bruk og praktisk læring.

<strong>Status og modenhet</strong>

Tverrfaglig lærings- og utviklingsinitiativ i videre utvikling, med potensial for videre faglig utvikling, praktiske læringsarenaer og relevante samarbeidsformer dersom det oppstår en passende kontekst.

<strong>Mulig videreutvikling</strong>

${prosjektVidereutviklingTekst("ai-value-lab-oslo-2026", "no")}

<strong>Videre relevans og mulig anvendelse</strong>

${prosjektKontaktLenke("no", "Ta kontakt for faglig dialog")} ${prosjektKontaktDialogTekst.no}.`,
    en: `<strong>What the project is</strong>

AI Value Lab Oslo is a cross-disciplinary initiative where technology, business and practical development meet. The goal is to explore how AI can be understood, tested and used responsibly in business-near challenges.

The initiative uses concrete cases as learning arenas to build competence, try tools and develop practical understanding across disciplines.

<strong>The problem the project addresses</strong>

Many organisations are interested in AI but lack the time, structure and competence to identify where the technology can actually create value.

The challenge is often moving from general AI curiosity to concrete use cases, prioritised workflows, realistic pilots and responsible implementation.

<strong>What has been built or developed</strong>

AI Value Lab Oslo has been established as an arena for learning, sparring, practical testing and development of AI-related concepts.

The group consists of Marius Ottesen, Tatiana Hanecakova and Ole Mjelde, with complementary experience in commercial leadership, finance, digitalisation, innovation, organisational development and practical AI use. Marius was the initiator behind establishing the group.

<strong>How it works</strong>

The initiative assesses AI through concrete problems, not only tool demos. The group looks at how AI can create value in work processes, customer experience, decision support, communication and execution.

The core is responsible use, practical learning and solutions that work in reality.

<strong>Why this is relevant</strong>

The project is relevant for SMB leaders, leadership teams, partners and customers who want to understand where AI can actually create value.

For employers, the initiative shows the ability to build professional arenas, gather competence and develop practical AI understanding. The project shows how AI can be connected to business-near challenges, responsible use and practical learning.

<strong>Status and maturity</strong>

Cross-disciplinary learning and development initiative under further development, with potential for further professional development, practical learning arenas and relevant forms of collaboration if a suitable context arises.

<strong>Possible further development</strong>

${prosjektVidereutviklingTekst("ai-value-lab-oslo-2026", "en")}

<strong>Further relevance and possible application</strong>

${prosjektKontaktLenke("en", "Get in touch for a professional conversation")} ${prosjektKontaktDialogTekst.en}.`,
  },
};
