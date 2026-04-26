export interface ProsjektType {
  id: string;
  tittel: { no: string; en: string };
  teaser: { no: string; en: string };
  bildeUrl: string;
  dato: string;
  visningsDato: string;
  innhold: { no: string; en: string };
  /** Kort undertekst under prosjektbildet (språkversjoner). */
  bildeHint?: { no: string; en: string };
  /** Valgfrie ekstra bilder som vises under teksten i kortet. */
  ekstraBilder?: { src: string; alt: { no: string; en: string } }[];
  /** Valgfri knapp som bytter til en hovedfane (SPA), f.eks. Faginnlegg. */
  navigasjonsCta?: { tab: string; label: { no: string; en: string } };
}

export const predictiveSalesCoach: ProsjektType = {
  id: "predictive-sales-coach-2026",
  tittel: {
    no: "The Predictive Sales Coach",
    en: "The Predictive Sales Coach",
  },
  teaser: {
    no: "Et AI-basert trenings- og beslutningsstøtteverktøy for strukturert salgstrening, realistisk kundesimulering og raskere kompetanseutvikling i B2B-salgsorganisasjoner.",
    en: "An AI-powered training and decision-support tool for structured sales practice, realistic customer simulation, and faster capability building in B2B sales organisations.",
  },
  bildeUrl: "/images/sales-coach-new2.jpg",
  dato: "2026-02-26",
  visningsDato: "26.02.2026",
  bildeHint: {
    no: "Klikk på bildet for å se The Predictive Sales Coach i større format.",
    en: "Click the image to view The Predictive Sales Coach in a larger format.",
  },
  innhold: {
    no: `The Predictive Sales Coach er et konkret AI-basert trenings- og beslutningsstøtteverktøy for B2B-salg, bygget for å trene selgere i realistiske kundesituasjoner før de møter kunden i virkeligheten. Løsningen kombinerer DISC-psykologi med et strukturert fire-fasers salgsrammeverk, og lar brukeren simulere krevende kundemøter med ulik motstand, vanskelighetsgrad og fokusfase.

Etter hver simulering får brukeren fasebasert evaluering, tydelig score breakdown og konkrete forbedringspunkter. Videreutviklingen har også hatt fokus på progresjon over tid, slik at både selger og leder kan se mønstre, identifisere hvor det trenes for lite og styrke kvaliteten i kundeaktiviteten.

Løsningen er særlig relevant for onboarding, møteforberedelse, salgsledelse og løpende kapabilitetsutvikling i team.`,
    en: `The Predictive Sales Coach is a practical AI-based training and decision-support tool for B2B sales, built to train sales professionals in realistic customer situations before they meet real clients. The solution combines DISC psychology with a structured four-phase sales framework and lets users simulate demanding customer meetings with varying resistance, difficulty, and focus phases.

After each simulation, users receive phase-based feedback, objective scoring with a clear score breakdown, and concrete improvement actions. The V3 logic is further developed with history and an analytics dashboard, enabling both sales reps and leaders to track progress over time, identify patterns, and see which sales phases and customer types require more training.

The solution is especially relevant for onboarding, meeting preparation, sales leadership, and continuous team capability development. The result is reduced time-to-competence, higher quality customer dialogues, and a stronger foundation for improving win-rate over time.

The underlying logic can also be extended to adjacent training and simulation scenarios, such as negotiation training, role-reversal for better counterpart understanding, and more advanced team insight for sales leaders.`,
  },
};
