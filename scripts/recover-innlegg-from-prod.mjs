import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const chunk = fs.readFileSync(path.join(__dirname, "prod-chunk.js"), "utf8");

function parseJs(expr) {
  return Function(`return ${expr}`)();
}

const tennisRawMarker = '}},q=[{id:"trykk-prestasjon-kommersiell-ledelse-2026-05"';
const tennisRawStart = chunk.indexOf(tennisRawMarker);
const tennisRawEnd = chunk.indexOf("].map(e=>({...e,tittel:K(W(e.tittel)", tennisRawStart);
const tennisRaw = parseJs(chunk.slice(tennisRawStart + "}},q=".length, tennisRawEnd + 1));

const tennisEnStart = chunk.indexOf('U={"trykk-prestasjon-kommersiell-ledelse-2026-05"');
const tennisEnEnd = chunk.indexOf('}},q=[{id:"trykk-prestasjon-kommersiell-ledelse-2026-05"', tennisEnStart);
const tennisEn = parseJs(chunk.slice(tennisEnStart + 2, tennisEnEnd + 2));

const aiRawStart = chunk.indexOf('_=[{id:"ai-gap-kompetanse-stokke-digi-2026-05"');
const aiRawEnd = chunk.indexOf('}],J={"ai-gap-kompetanse-stokke-digi-2026-05"', aiRawStart);
const aiRaw = parseJs(chunk.slice(aiRawStart + 2, aiRawEnd + 2));

const aiEnStart = chunk.indexOf('J={"ai-gap-kompetanse-stokke-digi-2026-05"');
const aiEnEnd = chunk.indexOf("}},$=_.map", aiEnStart);
const aiEn = parseJs(chunk.slice(aiEnStart + 2, aiEnEnd + 2));

function jsString(value) {
  return JSON.stringify(value ?? "");
}

function jsTemplate(value) {
  if (value == null) return "``";
  return "`" + String(value).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`";
}

function normalize(s) {
  return (s || "")
    .toLowerCase()
    .replace(/<[^>]+>/g, " ")
    .replace(/[\u2013\u2014\u2212\-–—]/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripLeadingDuplicateTitle(innhold, tittel) {
  const paragraphs = (innhold || "").split("\n\n").map((p) => p.trim()).filter(Boolean);
  if (!paragraphs.length) return innhold || "";
  const titleNorm = normalize(tittel);
  const firstNorm = normalize(paragraphs[0].replace(/<[^>]+>/g, " "));
  if (titleNorm && firstNorm === titleNorm) {
    return paragraphs.slice(1).join("\n\n");
  }
  const firstLine = paragraphs[0].split("\n")[0]?.trim() || "";
  if (titleNorm && normalize(firstLine.replace(/<[^>]+>/g, " ")) === titleNorm) {
    const rest = paragraphs[0].split("\n").slice(1).join("\n").trim();
    const tail = paragraphs.slice(1);
    return [rest, ...tail].filter(Boolean).join("\n\n");
  }
  return innhold;
}

function cleanLocalized(raw, enMap) {
  const cleanedRaw = raw.map((item) => ({
    ...item,
    innhold: stripLeadingDuplicateTitle(item.innhold, item.tittel),
  }));
  const cleanedEn = Object.fromEntries(
    Object.entries(enMap).map(([id, item]) => [
      id,
      {
        ...item,
        innhold: stripLeadingDuplicateTitle(item.innhold, item.tittel),
      },
    ])
  );
  return { cleanedRaw, cleanedEn };
}

function emitTennisLedelse(raw, enMap) {
  const rawBlocks = raw
    .map((item) => {
      const tittelField =
        item.tittel.includes("\n") || item.tittel.includes("`")
          ? jsTemplate(item.tittel)
          : jsString(item.tittel);
      return `    {
      id: ${jsString(item.id)},
      tittel: ${tittelField},
      teaser:
        ${jsString(item.teaser)},
      bildeUrl: ${jsString(item.bildeUrl)},
      dato: ${jsString(item.dato)},
      visningsDato: ${jsString(item.visningsDato)},
      kategori: ${jsString(item.kategori)},
      link: ${jsString(item.link)},
      innhold: ${jsTemplate(item.innhold)},
    }`;
    })
    .join(",\n");

  const enBlocks = Object.entries(enMap)
    .map(
      ([id, item]) => `  ${jsString(id)}: {
    tittel: ${item.tittel.includes("\n") ? jsTemplate(item.tittel) : jsString(item.tittel)},
    teaser: ${jsString(item.teaser)},
    innhold: ${jsTemplate(item.innhold)},
  }`
    )
    .join(",\n");

  return `import { normalizeDisplayText } from "../../lib/normalize-display-text";

type LocalizedText = {
  no: string;
  en: string;
};

type LocalizedTextMap = {
  tittel: string;
  teaser: string;
  innhold: string;
};

const localize = (no: string, en: string = no): LocalizedText => ({ no, en });

const tennisLedelseRaw = [
${rawBlocks}
];

const tennisLedelseEn: Record<string, LocalizedTextMap> = {
${enBlocks}
};

export const tennisLedelse = tennisLedelseRaw.map((innlegg) => ({
  ...innlegg,
  tittel: localize(
    normalizeDisplayText(innlegg.tittel),
    normalizeDisplayText(tennisLedelseEn[innlegg.id]?.tittel ?? innlegg.tittel)
  ),
  teaser: localize(innlegg.teaser, tennisLedelseEn[innlegg.id].teaser),
  innhold: localize(innlegg.innhold, tennisLedelseEn[innlegg.id].innhold),
}));
`;
}

function emitAiGovernance(raw, enMap) {
  const rawBlocks = raw
    .map((item) => {
      let extra = "";
      if (item.karusellBilder || /tegneserie/i.test(item.bildeUrl || "")) {
        extra = `,
      karusellBilder: tegneserieKarusellBilder`;
      }
      if (item.karusellPdfUrl) {
        extra += `,
      karusellPdfUrl: ${jsString(item.karusellPdfUrl)}`;
      }
      return `    {
      id: ${jsString(item.id)},
      tittel: ${jsString(item.tittel)},
      teaser:
        ${jsString(item.teaser)},
      bildeUrl: ${jsString(item.bildeUrl)},
      dato: ${jsString(item.dato)},
      visningsDato: ${jsString(item.visningsDato)},
      kategori: ${jsString(item.kategori)},
      link: ${jsString(item.link)},
      innhold: ${jsTemplate(item.innhold)}${extra}
    }`;
    })
    .join(",\n");

  const enBlocks = Object.entries(enMap)
    .map(
      ([id, item]) => `  ${jsString(id)}: {
    tittel: ${jsString(item.tittel)},
    teaser: ${jsString(item.teaser)},
    innhold: ${jsTemplate(item.innhold)},
  }`
    )
    .join(",\n");

  return `import { normalizeDisplayText } from "../../lib/normalize-display-text";

type LocalizedText = {
  no: string;
  en: string;
};

type LocalizedTextMap = {
  tittel: string;
  teaser: string;
  innhold: string;
};

const localize = (no: string, en: string = no): LocalizedText => ({ no, en });

const tegneserieKarusellBilder = Array.from({ length: 9 }, (_, i) => ({
  src: \`/images/tegneserie\${i + 1}.png\`,
  alt: {
    no: \`Tegneserie – panel \${i + 1} av 9\`,
    en: \`Comic – panel \${i + 1} of 9\`,
  },
}));

const aiGovernanceRaw = [
${rawBlocks}
];

const aiGovernanceEn: Record<string, LocalizedTextMap> = {
${enBlocks}
};

export const aiGovernance = aiGovernanceRaw.map((innlegg) => ({
  ...innlegg,
  tittel: localize(
    normalizeDisplayText(innlegg.tittel),
    normalizeDisplayText(aiGovernanceEn[innlegg.id]?.tittel ?? innlegg.tittel)
  ),
  teaser: localize(innlegg.teaser, aiGovernanceEn[innlegg.id].teaser),
  innhold: localize(innlegg.innhold, aiGovernanceEn[innlegg.id].innhold),
}));
`;
}

const tennis = cleanLocalized(tennisRaw, tennisEn);
const ai = cleanLocalized(aiRaw, aiEn);

console.log(`Recovered tennis raw: ${tennis.cleanedRaw.length}, en: ${Object.keys(tennis.cleanedEn).length}`);
console.log(`Recovered ai raw: ${ai.cleanedRaw.length}, en: ${Object.keys(ai.cleanedEn).length}`);

fs.writeFileSync(
  path.join(root, "src/app/data/innlegg/tennis-ledelse.ts"),
  emitTennisLedelse(tennis.cleanedRaw, tennis.cleanedEn),
  "utf8"
);
fs.writeFileSync(
  path.join(root, "src/app/data/innlegg/ai-governance.ts"),
  emitAiGovernance(ai.cleanedRaw, ai.cleanedEn),
  "utf8"
);

console.log("Wrote recovered innlegg files with duplicate titles removed from body.");
