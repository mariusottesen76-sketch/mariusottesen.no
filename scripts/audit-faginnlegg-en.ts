import { getAlleFaginnlegg } from "../src/app/lib/faginnlegg-data";
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

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
  innlegg: { innhold?: { no: string; en?: string }; teaser: { no: string; en: string } },
  lang: "no" | "en"
) {
  if (innlegg.innhold) {
    const raw = innlegg.innhold[lang];
    if (!raw?.trim()) return innlegg.teaser[lang];
    return raw;
  }
  return innlegg.teaser[lang];
}

type Status = "FULL_EN_BODY" | "PARTIAL_EN" | "NO_EN_BODY";

function classify(innlegg: ReturnType<typeof getAlleFaginnlegg>[number]): Status {
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

const articles = getAlleFaginnlegg();
const counts = { FULL_EN_BODY: 0, PARTIAL_EN: 0, NO_EN_BODY: 0 };
const byStatus: Record<Status, { id: string; noLen: number; enLen: number; ratio: string }[]> = {
  FULL_EN_BODY: [],
  PARTIAL_EN: [],
  NO_EN_BODY: [],
};

for (const a of articles) {
  const status = classify(a);
  counts[status]++;
  const noLen = stripText(resolveBody(a, "no")).length;
  const enLen = stripText(resolveBody(a, "en")).length;
  byStatus[status].push({
    id: a.id,
    noLen,
    enLen,
    ratio: noLen ? (enLen / noLen).toFixed(2) : "n/a",
  });
}

const out = { total: articles.length, counts, byStatus };
writeFileSync(path.join(root, "scripts", "_faginnlegg-audit-result.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify({ total: out.total, counts: out.counts }, null, 2));
console.log("NO_EN_BODY:", byStatus.NO_EN_BODY.map((x) => x.id).join(", ") || "(none)");
console.log("PARTIAL_EN:", byStatus.PARTIAL_EN.map((x) => x.id).join(", ") || "(none)");
