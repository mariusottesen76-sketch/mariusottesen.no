export interface ProsjektType {
  id: string;
  tittel: string;
  teaser: string;
  bildeUrl: string;
  dato: string;
  visningsDato: string;
  innhold: string;
  /** Kort undertekst under prosjektbildet (språkversjoner). */
  bildeHint?: { no: string; en: string };
  /** Valgfrie ekstra bilder som vises under teksten i kortet. */
  ekstraBilder?: { src: string; alt: string }[];
  /** Valgfri knapp som bytter til en hovedfane (SPA), f.eks. Faginnlegg. */
  navigasjonsCta?: { tab: string; label: { no: string; en: string } };
}

export const predictiveSalesCoach: ProsjektType = {
  id: "predictive-sales-coach-2026",
  tittel: "The Predictive Sales Coach",
  teaser:
    "AI-app som tar gjettingen ut av kundemøtene ved å la deg trene målrettet mot en dynamisk, virtuell kunde. Kompetanseutvikling satt i system.",
  bildeUrl: "/images/predictive.png",
  dato: "2026-02-26",
  visningsDato: "26.02.2026",
  bildeHint: {
    no: "Klikk på bildet for å se The Predictive Sales Coach i større format.",
    en: "Click the image to view The Predictive Sales Coach in a larger format.",
  },
  innhold: `The Predictive Sales Coach tar gjettingen ut av kundemøtene dine ved å la deg trene målrettet mot en dynamisk, virtuell kunde. Du setter premissene og konfigurerer «motstanderen» for neste rollespill basert på anerkjent DISC-psykologi, spesifikke salgsfaser og reelle salgsscenarier.

Mens du gjennomfører samtalen, håndterer appen den tunge, objektive analysen i bakgrunnen. Den gir deg presise scorer på valgte parametere, samt konkrete tips for videreutvikling. Dette er kompetanseutvikling satt i system, slik at du kan fokusere utelukkende på å tette egne blindsoner.

Du går inn i den virkelige selger–kunde-settingen med krystallklar innsikt – fullt forberedt på å øke din win-rate radikalt.`,
};
