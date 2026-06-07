/** Maks lengde for teaser på Faginnlegg-kort – full setning, uten «…». */
export const KORT_TEASER_MAKS_LENGDE = 220;

const stripHtmlPlain = (html: string) =>
  html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

/**
 * Standard kort-teaser: én sammenhengende tekst som vises i sin helhet på kortet.
 * Lengre tekster kortes ved setning- eller ordgrense – aldri med utelatelsestegn.
 */
export function normaliserKortTeaser(tekst: string, maxLen = KORT_TEASER_MAKS_LENGDE): string {
  const plain = stripHtmlPlain(tekst);
  if (plain.length <= maxLen) return plain;

  const snippet = plain.slice(0, maxLen);
  const setningsSlutt = Math.max(
    snippet.lastIndexOf(". "),
    snippet.lastIndexOf("! "),
    snippet.lastIndexOf("? "),
    snippet.endsWith(".") ? snippet.length - 1 : -1,
    snippet.endsWith("!") ? snippet.length - 1 : -1,
    snippet.endsWith("?") ? snippet.length - 1 : -1
  );

  if (setningsSlutt >= maxLen * 0.45) {
    return snippet.slice(0, setningsSlutt + 1).trim();
  }

  const ordSlutt = snippet.lastIndexOf(" ");
  if (ordSlutt >= maxLen * 0.55) {
    return snippet.slice(0, ordSlutt).trim();
  }

  return snippet.trim();
}
