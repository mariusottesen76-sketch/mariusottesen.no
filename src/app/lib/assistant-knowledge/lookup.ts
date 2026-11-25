import type { KnowledgeLang, KnowledgeLookupResult } from "./types";
import { assessGroundingFromExcerpt } from "./grounding";
import { getKnowledgeManifestEntryById } from "./manifest";
import { buildExcerptForContentRef } from "./excerpts";

export function lookupKnowledgeSource(sourceId: string, preferredLang?: KnowledgeLang): KnowledgeLookupResult {
  const entry = getKnowledgeManifestEntryById(sourceId.trim());
  if (!entry) {
    return {
      ok: false,
      code: "unknown_id",
      message: "Source id is not in the approved knowledge manifest.",
    };
  }

  const lang: KnowledgeLang = preferredLang ?? entry.lang;
  if (lang !== entry.lang) {
    if (entry.alternateSourceId) {
      const alt = getKnowledgeManifestEntryById(entry.alternateSourceId);
      if (alt && alt.lang === lang) {
        return lookupKnowledgeSource(alt.id, lang);
      }
    }
    return {
      ok: false,
      code: "lang_unavailable",
      message:
        lang === "en"
          ? "No indexed English version exists for this source."
          : "Ingen indeksert norsk versjon finnes for denne kilden.",
    };
  }

  const excerpt = buildExcerptForContentRef(
    entry.contentRef,
    entry.lang,
    entry.id,
    entry.description
  );

  const grounding = assessGroundingFromExcerpt(entry, excerpt);

  return { ok: true, entry, excerpt, grounding };
}