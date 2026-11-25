#!/usr/bin/env npx tsx
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { BASELINE_04A } from "./baseline-04a";
import { EVAL_CASES, assertEvalCaseRegistry, evalLanguageDistribution } from "./cases";
import { CONTROL_CASES } from "./cases/control";
import { formatEvalReportSummary, runEvalSuite } from "./eval-runner";

async function main() {
  assertEvalCaseRegistry();

  const report = await runEvalSuite(EVAL_CASES);
  const control = await runEvalSuite(CONTROL_CASES);
  const summary = formatEvalReportSummary(report);
  const controlSummary = formatEvalReportSummary(control);
  const dist = evalLanguageDistribution();

  const full = [
    `04A baseline was: ${BASELINE_04A.passed}/${BASELINE_04A.totalCases} pass`,
    summary,
    "",
    `Language (baseline): NO=${dist.no} EN=${dist.en}`,
    "",
    "=== Control holdout (20, new formulations) ===",
    controlSummary,
    "",
    "Acceptance snapshot:",
    `- Category (policy/deterministic/mock): target ≥95%, actual ${report.categoryAccuracy.percent}%`,
    `- Source selection target ≥95%, actual ${report.sourceSelection.percent}%`,
    `- Invalid URLs: ${report.invalidUrls} (target 0)`,
    `- Security deviations (RESTRICTED expected): ${report.securityDeviations}`,
  ].join("\n");

  console.log(full);

  const base = dirname(fileURLToPath(import.meta.url));
  const outDir = join(base, "reports");
  mkdirSync(outDir, { recursive: true });
  const stamp = report.generatedAt.replace(/[:.]/g, "-");
  const jsonPath = join(outDir, `eval-${stamp}.json`);
  const txtPath = join(outDir, `eval-latest.txt`);
  writeFileSync(jsonPath, JSON.stringify(report, null, 2));
  writeFileSync(txtPath, full);
  console.error(`Wrote ${jsonPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});