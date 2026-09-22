import { getFallbackHasTags } from "./faginnlegg-hashtag-fallback";
import type { FaginnleggInnlegg } from "./faginnlegg-types";
import { normalizeDisplayText } from "./normalize-display-text";
import { formatInnleggHtml } from "./product-brand";

/** Avsnitt som kun består av emneknagger (typisk limt inn fra LinkedIn). */
const HASHTAG_ONLY_PARAGRAPH_RE = /^(#\S+\s*)+$/;

const STANDALONE_STRONG_RE = /^<strong>([\s\S]+)<\/strong>$/i;
const H2_CLASS =
  "text-lg md:text-xl font-semibold text-white tracking-tight mt-8 md:mt-10 mb-3 leading-snug";
const H3_CLASS =
  "text-base md:text-lg font-semibold text-slate-100 tracking-tight mt-6 mb-2 leading-snug";

/** Standalone <strong>-avsnitt som seksjonsoverskrifter vs. utheving i brødtekst. */
function classifyStandaloneStrong(innerHtml: string): "h2" | "h3" | "p" {
  const text = innerHtml.replace(/<[^>]+>/g, "").trim();
  if (!text) return "p";
  if (text.endsWith(".")) return "p";
  if (text.endsWith("?")) return "p";
  if (text.includes("→")) return "p";
  if (/^[«""]/.test(text)) return "p";
  if (text.endsWith(":")) return "p";
  if (/^\d+[.)️⃣]?\s/.test(text)) return "h3";
  return "h2";
}

function formatStandaloneStrongParagraph(trimmed: string): string {
  const match = trimmed.match(STANDALONE_STRONG_RE);
  if (!match) return "";
  const inner = match[1].trim();
  const kind = classifyStandaloneStrong(inner);
  const html = formatInnleggHtml(inner);
  if (kind === "h3") return `<h3 class="${H3_CLASS}">${html}</h3>`;
  if (kind === "h2") return `<h2 class="${H2_CLASS}">${html}</h2>`;
  return `<p class="mb-4"><strong>${html}</strong></p>`;
}

/** Fjerner ledende avsnitt/linje i innhold som gjentar tittelen ord for ord. */
export function stripDuplicateTitle(innhold: string, tittel: string): string {
  const normalize = (s: string) =>
    normalizeDisplayText(s)
      .toLowerCase()
      .replace(/<[^>]+>/g, " ")
      .replace(/[\u2013\u2014\u2212\-–—]/g, " ")
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();

  const raw = (innhold || "").trim();
  if (!raw) return raw;

  const normalizedTitle = normalize(tittel);
  if (!normalizedTitle) return raw;

  const paragraphs = raw.split("\n\n").map((p) => p.trim()).filter(Boolean);
  if (!paragraphs.length) return raw;

  const firstParagraph = paragraphs[0];
  const firstParagraphNorm = normalize(firstParagraph.replace(/<[^>]+>/g, " "));
  if (firstParagraphNorm === normalizedTitle) {
    return paragraphs.slice(1).join("\n\n");
  }

  const lines = firstParagraph.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length > 1 && normalize(lines[0].replace(/<[^>]+>/g, " ")) === normalizedTitle) {
    const restOfFirst = lines.slice(1).join("\n").trim();
    return [restOfFirst, ...paragraphs.slice(1)].filter(Boolean).join("\n\n");
  }

  return raw;
}

function formatParagraphHtml(trimmed: string): string {
  if (/^<h2[\s>]/i.test(trimmed)) {
    const inner = trimmed.replace(/^<h2[^>]*>/i, "").replace(/<\/h2>$/i, "").trim();
    return `<h2 class="${H2_CLASS}">${formatInnleggHtml(inner)}</h2>`;
  }
  if (/^<h3[\s>]/i.test(trimmed)) {
    const inner = trimmed.replace(/^<h3[^>]*>/i, "").replace(/<\/h3>$/i, "").trim();
    return `<h3 class="${H3_CLASS}">${formatInnleggHtml(inner)}</h3>`;
  }
  if (STANDALONE_STRONG_RE.test(trimmed)) {
    return formatStandaloneStrongParagraph(trimmed);
  }
  const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
  const bulletLines = lines.filter((l) => l.startsWith("•") || l.startsWith("- "));
  if (bulletLines.length > 0 && bulletLines.length === lines.length) {
    const punkter = bulletLines
      .map((l) => {
        const text = l.startsWith("•") ? l.substring(1).trim() : l.substring(2).trim();
        return `<li>${formatInnleggHtml(text)}</li>`;
      })
      .join("");
    return `<ul class="list-disc pl-6 space-y-2 my-4 text-slate-300 marker:text-indigo-400">${punkter}</ul>`;
  }
  if (trimmed.startsWith("•") || trimmed.startsWith("- ")) {
    const punkter = trimmed
      .split("\n")
      .filter((l) => l.trim().startsWith("•") || l.trim().startsWith("- "))
      .map((l) => {
        const t = l.trim();
        const text = t.startsWith("•") ? t.substring(1).trim() : t.substring(2).trim();
        return `<li>${formatInnleggHtml(text)}</li>`;
      })
      .join("");
    return `<ul class="list-disc pl-6 space-y-2 my-4 text-slate-300 marker:text-indigo-400">${punkter}</ul>`;
  }
  if (trimmed.startsWith("Annual net value =")) {
    return `<p class="mb-4 rounded-xl border border-indigo-500/25 bg-indigo-500/10 px-4 py-3 text-indigo-300 font-semibold leading-snug">${formatInnleggHtml(trimmed)}</p>`;
  }
  if (/^(#\S+\s*)+$/.test(trimmed)) {
    return `<p class="mb-4 mt-8 pt-6 border-t border-slate-800/80 text-sm text-slate-400 leading-relaxed">${formatInnleggHtml(trimmed)}</p>`;
  }
  return `<p class="mb-4">${formatInnleggHtml(trimmed.replace(/\n/g, "<br/>"))}</p>`;
}

/** Konverterer faginnlegg-brødtekst til HTML for detaljside/modal. */
export function formatFaginnleggBodyHtml(body: string): string {
  return body
    .split("\n\n")
    .map((avsnitt) => {
      const trimmed = avsnitt.trim();
      if (!trimmed) return "";
      return formatParagraphHtml(trimmed);
    })
    .join("");
}

export function resolveFaginnleggBody(innlegg: {
  innhold?: { no: string; en?: string };
  teaser: { no: string; en: string };
  tittel: { no: string; en: string };
}, lang: "no" | "en"): string {
  const bodyRaw = innlegg.innhold?.[lang] || innlegg.teaser[lang];
  if (innlegg.innhold) {
    const raw = innlegg.innhold[lang];
    if (!raw?.trim()) return innlegg.teaser[lang];
    return stripDuplicateTitle(raw, innlegg.tittel[lang]);
  }
  return bodyRaw;
}

export function stripHtmlForMeta(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Trekker ut siste avsnitt med kun hashtags, slik at de kan vises i dedikert UI. */
export function splitTrailingHasTags(body: string): { body: string; hasTagsLine?: string } {
  const raw = (body || "").trimEnd();
  if (!raw) return { body: body || "" };

  const paragraphs = raw.split("\n\n");
  const last = paragraphs[paragraphs.length - 1]?.trim() ?? "";
  if (!last || !HASHTAG_ONLY_PARAGRAPH_RE.test(last)) {
    return { body: raw };
  }

  paragraphs.pop();
  return {
    body: paragraphs.join("\n\n").trimEnd(),
    hasTagsLine: last.replace(/\s+/g, " ").trim(),
  };
}

/** Bevarer eksplisitt hasTags; ellers hentes hashtags fra slutten av brødtekst (NO/EN). */
export function enrichFaginnleggHasTags(innlegg: FaginnleggInnlegg): FaginnleggInnlegg {
  const explicitNo = innlegg.hasTags?.no?.trim();
  const explicitEn = innlegg.hasTags?.en?.trim();
  if (explicitNo && explicitEn) return innlegg;

  if (!innlegg.innhold?.no?.trim()) {
    if (explicitNo || explicitEn) return innlegg;
    return innlegg;
  }

  const splitNo = splitTrailingHasTags(innlegg.innhold.no);
  const enRaw = innlegg.innhold.en?.trim() ? innlegg.innhold.en : undefined;
  const splitEn = enRaw ? splitTrailingHasTags(enRaw) : undefined;

  let hasTagsNo = explicitNo || splitNo.hasTagsLine;
  let hasTagsEn =
    explicitEn || splitEn?.hasTagsLine || (explicitNo ? undefined : splitNo.hasTagsLine);

  if (!hasTagsNo && !hasTagsEn) {
    const fallback = getFallbackHasTags(innlegg);
    if (fallback) {
      hasTagsNo = fallback.no;
      hasTagsEn = fallback.en;
    }
  }

  const nextHasTags =
    hasTagsNo || hasTagsEn
      ? {
          no: hasTagsNo ?? hasTagsEn ?? "",
          en: hasTagsEn ?? hasTagsNo ?? "",
        }
      : undefined;

  const innholdChanged =
    splitNo.body !== innlegg.innhold.no || (enRaw && splitEn && splitEn.body !== enRaw);

  if (!nextHasTags && !innholdChanged) return innlegg;

  return {
    ...innlegg,
    ...(nextHasTags ? { hasTags: nextHasTags } : {}),
    ...(innholdChanged
      ? {
          innhold: {
            no: splitNo.body,
            ...(enRaw !== undefined
              ? { en: splitEn ? splitEn.body : innlegg.innhold.en }
              : innlegg.innhold.en !== undefined
                ? { en: innlegg.innhold.en }
                : {}),
          },
        }
      : {}),
  };
}
