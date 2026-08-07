/**
 * Capture Event Planner portfolio screenshots.
 *
 * Portrait (/prosjekter): live public demo — 341×1024
 *   Venstremeny (Samtaler + Budsjett), arrangementshero, start på innhold.
 *
 * Landscape (/event-planner): crop from scripts/assets/event-planner-demo-reference.png — 1800×600
 *   Oversikt med venstremeny, KPI-rad og Arrangementsklarhet inkl. Budsjett & økonomi.
 *
 * Oppdater reference-bildet når demo-UI endres vesentlig, deretter kjør dette scriptet.
 */
import { spawnSync } from "node:child_process";
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public/images");
const DEMO_URL = "https://event-planner-985835222462.europe-north2.run.app/?demo=1";

async function hideDemoExplorePanel(page) {
  await page.evaluate(() => {
    for (const el of document.querySelectorAll("*")) {
      const text = el.textContent ?? "";
      if (text.includes("UTFORSK DEMOEN") && text.includes("Demo-modus") && text.length < 2500) {
        el.style.display = "none";
        break;
      }
    }
  });
  await page.waitForTimeout(400);
}

async function capturePortrait() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 1100 } });
  await page.goto(DEMO_URL, { waitUntil: "networkidle", timeout: 120_000 });
  await page.waitForTimeout(3000);
  await hideDemoExplorePanel(page);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(OUT_DIR, "event-planner-hjemmeside.png"),
    clip: { x: 0, y: 0, width: 341, height: 1024 },
  });
  await browser.close();
  console.log("Saved event-planner-hjemmeside.png (341×1024 portrait crop)");
}

function captureLandscapeFromReference() {
  const py = spawnSync("python", [path.join(__dirname, "crop-event-planner-hero-from-reference.py")], {
    cwd: ROOT,
    encoding: "utf8",
  });
  if (py.stdout) process.stdout.write(py.stdout);
  if (py.stderr) process.stderr.write(py.stderr);
  if (py.status !== 0) {
    throw new Error(py.stderr || "Failed to crop hero from reference image");
  }
}

async function capture() {
  await mkdir(OUT_DIR, { recursive: true });
  await capturePortrait();
  captureLandscapeFromReference();
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
