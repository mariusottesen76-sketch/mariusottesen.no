export interface ProsjektType {
  id: string;
  tittel: { no: string; en: string };
  teaser: { no: string; en: string };
  bildeUrl: string;
  /**
   * natural – bilde i egen høyde, minimalt med tomrom (anbefalt for landskap og høye infografikker).
   * cover – fyller rammen 4:3, kan beskjæres (kun for motiver som tåler kutt).
   * @deprecated Bruk bildeRamme; bildePortrett=true tilsvarer natural.
   */
  bildePortrett?: boolean;
  bildeRamme?: "natural" | "cover";
  dato: string;
  visningsDato: string;
  innhold: { no: string; en: string };
  /** Kort undertekst under prosjektbildet (språkversjoner). */
  bildeHint?: { no: string; en: string };
  /** Valgfrie ekstra bilder (f.eks. QR) som vises i tekstkolonnen. */
  ekstraBilder?: { src: string; alt: { no: string; en: string } }[];
  /** Bilder rett under hovedbildet i venstre kolonne (klikkbare for zoom). */
  bilderUnderHovedbilde?: { src: string; alt: { no: string; en: string } }[];
  /** Valgfri knapp som bytter til en hovedfane (SPA), f.eks. Faginnlegg. */
  navigasjonsCta?: {
    tab: string;
    label: { no: string; en: string };
    /** Valgfri tekst over knappelenken – unngår duplikat i brødtekst. */
    beskrivelse?: { no: string; en: string };
  };
  /** Innebygd video (f.eks. Google Drive /preview-URL). Når satt, vises iframe i stedet for statisk bilde i listen. */
  videoEmbedUrl?: string;
  /** Lokal videofil (f.eks. /images/clip.mp4). Når satt, spilles den av med HTML5 video. */
  videoUrl?: string;
  /** Styrer videorammens proporsjoner – portrett (9:16) fyller kolonnebredden. */
  videoFormat?: "portrait" | "landscape";
}

export const predictiveSalesCoach: ProsjektType = {
  id: "predictive-sales-coach-2026",
  tittel: {
    no: "The Predictive Sales Coach (PSCv6)",
    en: "The Predictive Sales Coach (PSCv6)",
  },
  teaser: {
    no: "Reduser usikkerhet og øk win-rate med AI-basert salgstrening gjennom realistiske simuleringer, dyp evaluering og målbar progresjon.",
    en: "An AI-powered training and decision-support tool for structured sales practice, realistic customer simulation, and faster capability building in B2B sales organisations.",
  },
  bildeUrl: "/images/sales-coach-new2.jpg",
  bildeRamme: "cover",
  dato: "2026-02-26",
  visningsDato: "26.02.2026",
  bildeHint: {
    no: "Klikk på bildet for å se The Predictive Sales Coach i større format.",
    en: "Click the image to view The Predictive Sales Coach in a larger format.",
  },
  bilderUnderHovedbilde: [
    {
      src: "/images/psc-v6-hurtigoppsett.png?v=20260519",
      alt: {
        no: "PSCv6 hurtigoppsett – DISC-profil, salgsfase, kundens holdning og vanskelighetsgrad",
        en: "PSCv6 quick setup – DISC profile, sales phase, customer attitude and difficulty level",
      },
    },
  ],
  ekstraBilder: [
    {
      src: "/images/QR-PSCv6.png?v=20260509",
      alt: {
        no: "QR-kode for tilgang til The Predictive Sales Coach (PSC)v6-appen",
        en: "QR code for access to The Predictive Sales Coach (PSC)v6 app",
      },
    },
  ],
  innhold: {
    no: `The Predictive Sales Coach er et konkret AI-basert trenings- og beslutningsstøtteverktøy for B2B-salg, bygget for å trene selgere i realistiske kundesituasjoner før de møter kunden i virkeligheten. Løsningen kombinerer DISC-psykologi med et strukturert fire-fasers salgsrammeverk, og lar brukeren simulere krevende kundemøter med ulik motstand, vanskelighetsgrad og fokusfase.

Etter hver simulering får brukeren fasebasert evaluering, tydelig score breakdown og konkrete forbedringspunkter. Videreutviklingen har også hatt fokus på progresjon over tid, slik at både selger og leder kan se mønstre, identifisere hvor det trenes for lite og styrke kvaliteten i kundeaktiviteten.

<strong>Hva er nytt i versjon 6?</strong>

Reduser usikkerhet og øk din win-rate med fremtidens AI-baserte salgstrening. PSCv6 er et kraftfullt verktøy for strategisk kompetanseutvikling som lar deg simulere virkelighetsnære kundemøter før de skjer i virkeligheten.

<strong>DISC-selvkartlegging:</strong> Start med å forstå din egen kommunikasjonsstil gjennom vår nye, integrerte DISC-baserte test.

<strong>Realistiske simuleringer:</strong> Tren på spesifikke rollespill der du møter ulike beslutningstakere og personlighetstyper. Øv på å håndtere argumenter og motstand skreddersydd til den enkelte kunden.

<strong>Dyp-evaluering og analyse:</strong> Etter hver økt får du en objektiv analyse og et scorecard. Dette gir både selger og leder et unikt datagrunnlag for å identifisere mønstre, tette blindsoner og dokumentere progresjon over tid.

PSC transformerer teoretisk salgsmetodikk til praktisk ferdighet, slik at du alltid er best forberedt når det gjelder. Løsningen er særlig relevant for onboarding, møteforberedelse, salgsledelse og løpende kapabilitetsutvikling i team.

<strong>Ønsker du tilgang til PSCv6?</strong><br/>Skann QR-koden nedenfor eller klikk på <a href="https://pscv6-744893320985.europe-west2.run.app/" target="_blank" rel="noopener noreferrer">Be om tilgang til PSC-appen</a> for å starte reisen mot smartere salg.`,
    en: `The Predictive Sales Coach is a practical AI-based training and decision-support tool for B2B sales, built to train sales professionals in realistic customer situations before they meet real clients. The solution combines DISC psychology with a structured four-phase sales framework and lets users simulate demanding customer meetings with varying resistance, difficulty, and focus phases.

After each simulation, users receive phase-based feedback, objective scoring with a clear score breakdown, and concrete improvement actions. The V3 logic is further developed with history and an analytics dashboard, enabling both sales reps and leaders to track progress over time, identify patterns, and see which sales phases and customer types require more training.

The solution is especially relevant for onboarding, meeting preparation, sales leadership, and continuous team capability development. The result is reduced time-to-competence, higher quality customer dialogues, and a stronger foundation for improving win-rate over time.

The underlying logic can also be extended to adjacent training and simulation scenarios, such as negotiation training, role-reversal for better counterpart understanding, and more advanced team insight for sales leaders.`,
  },
};
