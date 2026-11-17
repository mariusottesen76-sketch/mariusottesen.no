/** Informasjonsboks-rekkefølge for fremhevet Row på /prosjekter. */
export const ROW_FEATURED_BOX_KEYS = [
  "what",
  "challenge",
  "areas",
  "delivery",
  "developed",
  "marius",
] as const;

export type RowFeaturedBoxKey = (typeof ROW_FEATURED_BOX_KEYS)[number];

export function rowFeaturedBoxTranslationKey(key: RowFeaturedBoxKey, part: "label" | "body"): string {
  return `prosjekter.featured.row.box.${key}.${part}`;
}