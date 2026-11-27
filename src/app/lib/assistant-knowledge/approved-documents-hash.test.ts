import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import {
  APPROVED_CV_PDF_SHA256,
  APPROVED_OPEN_APPLICATION_PDF_SHA256,
  APPROVED_DOCUMENTS,
} from "../../data/approved-documents-meta";
import { CV_PDF_VERSJON } from "../../data/dokumentasjon";

const repoRoot = join(process.cwd());

function sha256File(relPath: string): string {
  const buf = readFileSync(join(repoRoot, relPath));
  return createHash("sha256").update(buf).digest("hex").toUpperCase();
}

describe("approved public PDF hashes (08E)", () => {
  it("cv.pdf matches registered sha256 — bump meta + career-facts when file changes", () => {
    const hash = sha256File("public/pdf/cv.pdf");
    assert.equal(hash, APPROVED_CV_PDF_SHA256);
    assert.equal(APPROVED_DOCUMENTS.cvPdf.version, CV_PDF_VERSJON);
  });

  it("soknad.pdf matches registered sha256", () => {
    const hash = sha256File("public/pdf/soknad.pdf");
    assert.equal(hash, APPROVED_OPEN_APPLICATION_PDF_SHA256);
  });

  it("career registry is indexed in manifest", async () => {
    const { lookupKnowledgeSource } = await import("./lookup");
    const res = lookupKnowledgeSource("career:cv-registry:no", "no");
    assert.equal(res.ok, true);
    if (!res.ok) return;
    assert.match(res.excerpt.text.toLowerCase(), /mundipharma/);
    assert.match(res.excerpt.text.toLowerCase(), /pelagia/);
    assert.match(res.excerpt.text.toLowerCase(), /hydro texaco/);
  });
});