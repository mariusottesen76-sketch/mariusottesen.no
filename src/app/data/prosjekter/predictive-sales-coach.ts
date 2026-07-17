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

/** Kort metadata for /prosjekter — full dokumentasjon på /psc */
export const predictiveSalesCoach: ProsjektType = {
  id: "predictive-sales-coach-2026",
  tittel: {
    no: "The Predictive Sales Coach v2.0: AI-basert salgstrening og møteforberedelse",
    en: "The Predictive Sales Coach v2.0: AI-based sales training and meeting preparation",
  },
  teaser: {
    no: "Lukket pilot og tilgangsstyrt trenings-, evaluerings- og lederinnsiktsplattform — dokumentert på egen prosjektside.",
    en: "Closed pilot and access-controlled training, evaluation and leadership insight platform — documented on a dedicated project page.",
  },
  bildeUrl: "/images/psc2.png",
  bildeRamme: "natural",
  dato: "2026-06-19",
  visningsDato: "25.05.26",
  bildeHint: {
    no: "Klikk på bildet for å se The Predictive Sales Coach i større format.",
    en: "Click the image to view The Predictive Sales Coach in a larger format.",
  },
  innhold: { no: "", en: "" },
};
