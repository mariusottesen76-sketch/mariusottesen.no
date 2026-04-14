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
    "Et AI-basert trenings- og beslutningsstøtteverktøy for strukturert salgstrening, realistisk kundesimulering og raskere kompetanseutvikling i B2B-salgsorganisasjoner.",
  bildeUrl: "/images/sales-coach-new2.jpg",
  dato: "2026-02-26",
  visningsDato: "26.02.2026",
  bildeHint: {
    no: "Klikk på bildet for å se The Predictive Sales Coach i større format.",
    en: "Click the image to view The Predictive Sales Coach in a larger format.",
  },
  innhold: `The Predictive Sales Coach er et konkret AI-basert trenings- og beslutningsstøtteverktøy for B2B-salg, bygget for å trene selgere i realistiske kundesituasjoner før de møter kunden i virkeligheten. Løsningen kombinerer DISC-psykologi med et strukturert fire-fasers salgsrammeverk, og lar brukeren simulere krevende kundemøter med ulik motstand, vanskelighetsgrad og fokusfase.

Etter hver simulering får brukeren fasebasert evaluering, objektiv scoring med tydelig score breakdown og konkrete forbedringspunkter. V3-logikken er videreutviklet med historikk og analytics-dashboard, slik at både selger og leder kan følge progresjon over tid, identifisere mønstre og se hvilke salgsfaser og kundetyper som bør trenes mer på.

Løsningen er særlig relevant for onboarding, møteforberedelse, salgsledelse og løpende kompetanseutvikling i team. Resultatet er redusert time-to-competence, høyere kvalitet i kundedialoger og et bedre grunnlag for økt win-rate over tid.

Den underliggende logikken kan også videreutvikles til nærliggende trenings- og simuleringssituasjoner, som forhandlingstrening, rollebytte for bedre motpartsforståelse og mer avansert teaminnsikt for salgsledere.`,
};
