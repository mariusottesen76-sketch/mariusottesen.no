/** Interne lenker i prosjektinnhold – relative paths, uten synlig URL i teksten. */

import {
  FAGINNLEGG_AI_ANKER,
  FAGINNLEGG_LEDELSE_ANKER,
  getFaginnleggTelling,
} from "./faginnlegg-data";

type Lang = "no" | "en";

const aria = {
  kontakt: { no: "Gå til kontaktsiden", en: "Go to the contact page" },
  faginnlegg: { no: "Gå til faginnlegg", en: "Go to articles" },
} as const;

const faginnleggKategoriNavn = {
  ledelse: {
    no: "Strategisk ledelse & transformasjon",
    en: "Strategic leadership & transformation",
  },
  ai: {
    no: "AI & fremtidens teknologiledelse",
    en: "AI & next-generation technology leadership",
  },
} as const;

export function prosjektKontaktLenke(lang: Lang, label?: string): string {
  const text = label ?? (lang === "no" ? "Ta kontakt" : "Get in touch");
  return `<a href="/kontakt" aria-label="${aria.kontakt[lang]}">${text}</a>`;
}

export function prosjektFaginnleggLenke(lang: Lang, label?: string): string {
  const text =
    label ??
    (lang === "no" ? "Åpne alle innlegg under Faginnlegg" : "Open all posts under Articles");
  return `<a href="/faginnlegg" aria-label="${aria.faginnlegg[lang]}">${text}</a>`;
}

function prosjektFaginnleggKategoriLenke(
  lang: Lang,
  kategori: "ledelse" | "ai"
): string {
  const { ledelse, ai } = getFaginnleggTelling();
  const antall = kategori === "ledelse" ? ledelse : ai;
  const navn = faginnleggKategoriNavn[kategori][lang];
  const anker = kategori === "ledelse" ? FAGINNLEGG_LEDELSE_ANKER : FAGINNLEGG_AI_ANKER;
  const antallTekst =
    lang === "no"
      ? `${antall} stk`
      : `${antall} ${antall === 1 ? "post" : "posts"}`;
  const label = `«${navn}» (${antallTekst})`;
  const ariaLabel =
    lang === "no"
      ? `Gå til ${navn} under Faginnlegg`
      : `Go to ${navn} under Articles`;

  return `<a href="/faginnlegg#${anker}" aria-label="${ariaLabel}">${label}</a>`;
}

/** Én setning med to kort kategorilenker og dynamisk telling. */
export function prosjektFaginnleggNesteStegLenker(lang: Lang): string {
  const ledelse = prosjektFaginnleggKategoriLenke(lang, "ledelse");
  const ai = prosjektFaginnleggKategoriLenke(lang, "ai");

  return lang === "no"
    ? `Under fanen Faginnlegg finner du mine egenforfattede innlegg innen ${ledelse} og ${ai}.`
    : `Under the Articles tab you will find my authored posts in ${ledelse} and ${ai}.`;
}

/**
 * Standard seksjonsskjelett for AI-prosjekter (brukes i innhold som HTML-strong-headings):
 * 1. Teaser (eget felt)
 * 2. Hva prosjektet er
 * 3. Problemet prosjektet adresserer
 * 4. Hva som er bygget eller utviklet
 * 5. Hvordan det fungerer (nummererte steg i .prosjekt-steg-liste / .prosjekt-innrykk)
 * 6. Hvorfor dette er relevant
 * 7. Status og modenhet
 * 8. Mulig videreutvikling
 * 9. Neste steg
 */
