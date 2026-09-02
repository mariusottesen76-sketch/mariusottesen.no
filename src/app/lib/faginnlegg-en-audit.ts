import type { FaginnleggInnlegg } from "./faginnlegg-types";

export type FaginnleggEnBodyStatus = "FULL_EN_BODY" | "PARTIAL_EN" | "NO_EN_BODY";

function stripText(s: string) {
  return (s || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeForCompare(s: string) {
  return stripText(s).toLowerCase();
}

function resolveBody(
  innlegg: Pick<FaginnleggInnlegg, "innhold" | "teaser">,
  lang: "no" | "en"
) {
  if (innlegg.innhold) {
    const raw = innlegg.innhold[lang];
    if (!raw?.trim()) return innlegg.teaser[lang];
    return raw;
  }
  return innlegg.teaser[lang];
}

export function classifyFaginnleggEnBody(innlegg: FaginnleggInnlegg): FaginnleggEnBodyStatus {
  const noBody = resolveBody(innlegg, "no");
  const enBody = resolveBody(innlegg, "en");
  const enRaw = innlegg.innhold?.en?.trim() ?? "";
  const noRaw = innlegg.innhold?.no?.trim() ?? "";
  const noLen = stripText(noBody).length;
  const enLen = stripText(enBody).length;
  const teaserEnLen = stripText(innlegg.teaser.en).length;

  if (!innlegg.innhold) return "NO_EN_BODY";
  if (!enRaw) return "NO_EN_BODY";
  if (normalizeForCompare(enRaw) === normalizeForCompare(noRaw)) return "NO_EN_BODY";
  if (normalizeForCompare(enBody) === normalizeForCompare(innlegg.teaser.en)) return "NO_EN_BODY";

  if (noLen < 80) {
    return enLen >= 40 ? "FULL_EN_BODY" : "NO_EN_BODY";
  }

  const ratio = enLen / noLen;
  if (ratio < 0.55) return "PARTIAL_EN";
  if (enLen < teaserEnLen * 1.4 && ratio < 0.75) return "PARTIAL_EN";

  return "FULL_EN_BODY";
}

export function hasFullEnFaginnleggBody(slug: string, innlegg?: FaginnleggInnlegg | null): boolean {
  if (!innlegg) return false;
  return classifyFaginnleggEnBody(innlegg) === "FULL_EN_BODY";
}
