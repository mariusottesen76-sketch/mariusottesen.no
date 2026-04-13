import { type ProsjektType } from "./predictive-sales-coach";

/** Kuratert «hub» under AI-prosjekter som peker leseren til alle AI-innlegg under Faginnlegg. */
export const aiFaginnleggHub: ProsjektType = {
  id: "ai-faginnlegg-serie-2026",
  tittel: "Faginnlegg: AI & fremtidens teknologiledelse",
  teaser:
    "Teori, rammeverk og master fra BI, utdrag fra rapporter, verktøy og praksis — pluss konkrete tips fra reelle caser. Løpende oppdatert.",
  bildeUrl: "/images/nova-day.jpg",
  dato: "2026-04-13",
  visningsDato: "13.04.2026",
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
  innhold: `Dette er ikke et enkelt produkt eller en prototype, men et samlet spor av egenforfattede innlegg der jeg utforsker hva kunstig intelligens betyr i praksis for ledelse, kommersielle beslutninger og verdiskaping.

Under fanen Faginnlegg ligger innleggene i to kolonner. Alt som er merket AI & fremtidens teknologiledelse hører til denne serien. Det inkluderer teori og rammeverk (for eksempel modenhetsmodeller, governance og beslutningsstøtte), erfaring fra AI-masterstudier på BI, ulike kurs og seminarer, samt utdrag og kommentarer fra ulike rapporter og analyser som er relevante for næringsliv og offentlig sektor.

Jeg tar også inn ulike verktøy og erfaringer fra egen bruk og testing, i tillegg til konkrete, praktiske tips hentet fra virkelige caser der AI møter drift, salg, risiko og mennesker. Øvrige temaer spenner fra data og kontekst, RAG og agenter til etikk og annet som er viktig for kompetansebygging innenfor AI.

Innleggene oppdateres fortløpende. Der finner du også lenke til videre lesning på <a href="https://www.linkedin.com/in/mariusottesen/recent-activity/all/" target="_blank" rel="noopener noreferrer">LinkedIn</a> for hvert tema.`,
};
