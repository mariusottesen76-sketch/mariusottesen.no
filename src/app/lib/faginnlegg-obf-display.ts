import type { Lang } from "../LanguageContext";

const OBF_2026_ID_PREFIX = "obf-2026-";

export function isObf2026Faginnlegg(innleggId: string): boolean {
  return innleggId.startsWith(OBF_2026_ID_PREFIX);
}

/** Kort kontekst om arrangementet — vises på OBF 2026-artikkel-detaljsider. */
export function obf2026EventContextHtml(lang: Lang): string {
  const linkClass =
    "text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors";
  if (lang === "en") {
    return `<p><strong><a href="https://www.obforum.com/" target="_blank" rel="noopener noreferrer" class="${linkClass}">Oslo Business Forum</a> (OBF)</strong> is a two-day leadership conference in Oslo for executives and key professionals. These articles are reflections from <strong>OBF 2026</strong>, themed <em>The Human Edge</em>.</p>`;
  }
  return `<p><strong><a href="https://www.obforum.com/" target="_blank" rel="noopener noreferrer" class="${linkClass}">Oslo Business Forum</a> (OBF)</strong> er en todagers lederkonferanse i Oslo for toppledere og nøkkelpersoner i næringslivet. Innleggene her er refleksjoner fra <strong>OBF 2026</strong> med temaet <em>The Human Edge</em>.</p>`;
}
