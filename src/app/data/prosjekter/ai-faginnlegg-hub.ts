import { type ProsjektType } from "./predictive-sales-coach";

/** Kuratert «hub» under AI-prosjekter som peker leseren til alle AI-innlegg under Faginnlegg. */
export const aiFaginnleggHub: ProsjektType = {
  id: "ai-faginnlegg-serie-2026",
  tittel: {
    no: "Faginnlegg: AI & fremtidens teknologiledelse",
    en: "Articles: AI & Next-Generation Technology Leadership",
  },
  teaser: {
    no: "Teori, rammeverk, masterarbeid fra BI, rapportutdrag, verktøy og praktiske erfaringer – løpende oppdatert.",
    en: "Theory, frameworks, BI master's insights, report excerpts, tools, and hands-on practice — plus concrete tips from real cases. Continuously updated.",
  },
  bildeUrl: "/images/nova-day.jpg",
  dato: "2026-04-13",
  visningsDato: "",
  bildeHint: {
    no: "Klikk på bildet for å se illustrasjonen i større format.",
    en: "Click the image to view the illustration in a larger format.",
  },
  navigasjonsCta: {
    tab: "Faginnlegg",
    label: {
      no: "Åpne alle innlegg under Faginnlegg",
      en: "Open all posts under Articles",
    },
  },
  innhold: {
    no: `Dette er ikke ett enkelt produkt, men et samlet spor av egenforfattede innlegg der jeg utforsker hva AI betyr i praksis for ledelse, kommersielle prioriteringer, transformasjon og verdiskaping.

Under fanen Faginnlegg ligger innleggene i to kolonner. Alt som er merket AI & fremtidens teknologiledelse hører til denne serien. Her kobler jeg teori og rammeverk med egne erfaringer, rapporter, kurs, masterarbeid og reelle case.

Målet er ikke bare å forklare teknologien, men å gjøre den mer relevant for ledere som skal prioritere, gjennomføre og skape effekt.`,
    en: `This is not a single product or prototype, but a curated track of authored posts where I explore what artificial intelligence means in practice for leadership, commercial decision-making, and value creation.

Under the Articles tab, the posts are organised in two columns. Everything tagged AI & Next-Generation Technology Leadership belongs to this series. It includes theory and frameworks (for example maturity models, governance, and decision support), experience from AI master's studies at BI, various courses and seminars, and selected excerpts and commentary from reports and analyses relevant to both private and public sectors.

I also include tools and lessons from my own use and testing, in addition to practical tips from real-world cases where AI meets operations, sales, risk, and people. Other themes range from data and context, RAG and agents, to ethics and other topics that matter for building AI capability.

The series is updated continuously. You will also find links to further reading on <a href="https://www.linkedin.com/in/mariusottesen/recent-activity/all/" target="_blank" rel="noopener noreferrer">LinkedIn</a> for each topic.`,
  },
};

