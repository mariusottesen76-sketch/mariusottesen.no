/**
 * Illustrative Event Planner portfolio images from the public demo.
 *
 * Not literal desktop printscreens — tight crops that highlight what the app does:
 *
 * Portrait (341×1024): mobile demo view — hero, hovedhandlinger, planleggingshint.
 * Landscape (1800×600): sidebar + arrangementshero (Oversikt), uten full dashboard-rutenett.
 *
 * Output: public/images/event-planner-hjemmeside.png, event-planner-hero.png
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "../public/images");
const DEMO_URL = "https://event-planner-985835222462.europe-north2.run.app/?demo=1";

async function capture() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();

  // Prosjektside — mobil demo (illustrativt, ikke desktop-crop)
  {
    const page = await browser.newPage({ viewport: { width: 341, height: 1024 } });
    await page.goto(DEMO_URL, { waitUntil: "networkidle", timeout: 120_000 });
    await page.waitForTimeout(2500);
    await page.screenshot({
      path: path.join(OUT_DIR, "event-planner-hjemmeside.png"),
      fullPage: false,
    });
    console.log("Saved event-planner-hjemmeside.png (341×1024 mobile demo)");
  }

  // Detaljside — venstremeny + hero (Samtaler/Budsjett i menyen), ikke hele dashboardet
  {
    const page = await browser.newPage({ viewport: { width: 1800, height: 900 } });
    await page.goto(DEMO_URL, { waitUntil: "networkidle", timeout: 120_000 });
    await page.waitForTimeout(2500);
    await page.screenshot({
      path: path.join(OUT_DIR, "event-planner-hero.png"),
      clip: { x: 0, y: 0, width: 1800, height: 600 },
    });
    console.log("Saved event-planner-hero.png (1800×600 hero crop)");
  }

  await browser.close();
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
