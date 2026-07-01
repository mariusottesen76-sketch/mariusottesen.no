import { prosjektFaginnleggNesteStegLenker, prosjektKontaktLenke } from "../../lib/prosjekt-lenker";
import { type ProsjektType } from "./predictive-sales-coach";

/** Kuratert «hub» under AI-prosjekter som peker leseren til alle AI-innlegg under Faginnlegg. */
export const aiFaginnleggHub: ProsjektType = {
  id: "ai-faginnlegg-serie-2026",
  tittel: {
    no: "Faginnlegg: AI og fremtidens teknologiledelse",
    en: "Articles: AI and next-generation technology leadership",
  },
  teaser: {
    no: "Teori, rammeverk, masterarbeid fra BI, rapportutdrag, verktøy og praktiske erfaringer samlet i et løpende fagspor om AI, ledelse, transformasjon og kommersiell verdiskaping.",
    en: "Theory, frameworks, BI master's work, report excerpts, tools and practical experience gathered in an ongoing professional track on AI, leadership, transformation and commercial value creation.",
  },
  bildeUrl: "/images/nova-day.jpg",
  dato: "2026-04-13",
  visningsDato: "Løpende oppdatert",
  bildeHint: {
    no: "Klikk på bildet for å se illustrasjonen i større format.",
    en: "Click the image to view the illustration in a larger format.",
  },
  innhold: {
    no: `<strong>Hva prosjektet er</strong>

Dette er ikke ett enkelt produkt, men et samlet fagspor der jeg utforsker hvordan AI påvirker ledelse, kommersielle prioriteringer, transformasjon og verdiskaping.

Faginnleggene kobler teori, rammeverk, masterarbeid, rapporter, praktiske erfaringer og egne AI-prosjekter.

<strong>Problemet fagsporet adresserer</strong>

Mange ledere møter AI gjennom verktøy, trender og enkeltdemoer, men mangler et tydelig språk for hva teknologien betyr for strategi, organisasjon, arbeidsflyt, styring og kommersiell verdi.

Risikoen er at AI blir et sideprosjekt, ikke en integrert del av hvordan virksomheten skaper verdi.

<strong>Hva som er bygget eller utviklet</strong>

Fagsporet består av egenforfattede innlegg om AI, teknologiledelse, implementering, governance, produktivitet, arbeidsflyt, kommersiell utvikling og praktisk verdiskaping.

Under fanen Faginnlegg ligger innleggene i to kolonner. Alt som er merket AI og fremtidens teknologiledelse hører til denne serien.

<strong>Hvordan det fungerer</strong>

Faginnleggene fungerer som faglig arkiv og tankelederflate. De gjør det mulig for rekrutterere, arbeidsgivere, kunder og samarbeidspartnere å forstå hvordan jeg tenker om AI som ledertema, ikke bare som teknologi.

Innholdet viser hvordan AI bør kobles til strategi, prioritering, arbeidsprosesser, mennesker og gjennomføring.

<strong>Hvorfor dette er relevant</strong>

Fagsporet er relevant for arbeidsgivere som ønsker en kommersiell leder med praktisk AI-forståelse, og for kunder som ønsker å forstå hvordan AI kan brukes mer konkret i virksomheten.

Det er også relevant for samarbeidspartnere, foredragsarrangører og nettverk som ønsker perspektiver på AI, ledelse og transformasjon.

<strong>Status og modenhet</strong>

Løpende fagspor og levende kunnskapsarkiv, med kobling til LinkedIn, BI-arbeid, egne AI-prosjekter og praktiske erfaringer.

<strong>Mulig videreutvikling</strong>

Fagsporet kan videreutvikles med anbefalte lesestier for ulike målgrupper, for eksempel rekrutterere, ledere, SMB-kunder, salgsorganisasjoner og samarbeidspartnere.

<strong>Videre relevans og mulig anvendelse</strong>

${prosjektFaginnleggNesteStegLenker("no")} ${prosjektKontaktLenke("no", "Ta kontakt for faglig dialog")} om aktuell rolle, relevant problemstilling eller mulig fremtidig samarbeid.`,
    en: `<strong>What the project is</strong>

This is not a single product, but a curated professional track where I explore how AI affects leadership, commercial priorities, transformation and value creation.

The articles connect theory, frameworks, master's work, reports, practical experience and my own AI projects.

<strong>The problem the track addresses</strong>

Many leaders encounter AI through tools, trends and one-off demos, but lack a clear language for what the technology means for strategy, organisation, workflows, governance and commercial value.

The risk is that AI becomes a side project, not an integrated part of how the organisation creates value.

<strong>What has been built or developed</strong>

The track consists of authored posts on AI, technology leadership, implementation, governance, productivity, workflows, commercial development and practical value creation.

Under the Articles tab, posts are organised in two columns. Everything tagged AI and next-generation technology leadership belongs to this series.

<strong>How it works</strong>

The articles function as a professional archive and thought leadership platform. They allow recruiters, employers, customers and partners to understand how I think about AI as a leadership topic, not only as technology.

The content shows how AI should be connected to strategy, prioritisation, work processes, people and execution.

<strong>Why this is relevant</strong>

The track is relevant for employers who want a commercial leader with practical AI understanding, and for customers who want to understand how AI can be used more concretely in the organisation.

It is also relevant for partners, event organisers and networks that want perspectives on AI, leadership and transformation.

<strong>Status and maturity</strong>

Ongoing professional track and living knowledge archive, linked to LinkedIn, BI work, my own AI projects and practical experience.

<strong>Possible further development</strong>

The track can be developed with recommended reading paths for different audiences, for example recruiters, leaders, SMB customers, sales organisations and partners.

<strong>Further relevance and possible application</strong>

${prosjektFaginnleggNesteStegLenker("en")} ${prosjektKontaktLenke("en", "Get in touch for a professional conversation")} about a current role, a relevant topic or possible future collaboration.`,
  },
};
