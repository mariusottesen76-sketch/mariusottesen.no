/** Felles datamodell for faginnlegg — id brukes som stabil URL-slug. */
export interface FaginnleggInnlegg {
  id: string;
  tittel: { no: string; en: string };
  /** Valgfri undertittel rett under H1 på detaljsiden — ikke dupliser i brødtekst. */
  undertittel?: { no: string; en: string };
  teaser: { no: string; en: string };
  /** Valgfri meta description — faller tilbake til teaser. */
  metaDescription?: { no: string; en: string };
  bildeUrl?: string;
  /** Valgfri alt-tekst for bilde — faller tilbake til tittel. */
  bildeAlt?: { no: string; en: string };
  dato: string;
  visningsDato: string;
  kategori: string;
  link: string;
  innhold?: { no: string; en?: string };
  karusellBilder?: { src: string; alt?: { no: string; en: string } }[];
  karusellPdfUrl?: string;
  bildeFit?: "cover" | "contain";
  bildeUrlKort?: string;
  bildeModalBred?: boolean;
  bildeVersjon?: string;
  bildeKortFokus?: string;
  bildeKortZoom?: number;
  bildeKortRamme?: "nettsted";
}

export function faginnleggSlug(innlegg: Pick<FaginnleggInnlegg, "id">): string {
  return innlegg.id;
}

export function faginnleggDetailPath(slug: string): string {
  return `/faginnlegg/${slug}`;
}

export function bildeCacheVersion(innlegg: FaginnleggInnlegg): string {
  return innlegg.bildeVersjon ?? innlegg.dato;
}
