/**
 * Capture Event Planner public demo screenshots for portfolio images.
 *
 * Overview (/prosjekter): event-planner-hjemmeside.png — 341×1024 (1:3 portrait)
 *   Desktop crop: venstremeny (Samtaler + Budsjett), arrangementshero, start Arrangementsklarhet.
 *
 * Detail (/event-planner): event-planner-hero.png — 1800×600 (3:1 landscape)
 *   Oversikt med venstremeny, KPI-rad og Arrangementsklarhet inkl. Budsjett & økonomi.
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "../public/images");
const DEMO_URL = "https://event-planner-985835222462.europe-north2.run.app/?demo=1";

async function preparePage(page) {
  await page.goto(DEMO_URL, { waitUntil: "networkidle", timeout: 120_000 });
  await page.waitForTimeout(3000);
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

async function capture() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();

  // Portrait — crop from desktop layout (sidebar + hero peek + readiness start)
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 1100 } });
    await preparePage(page);
    await page.evaluate(() => window.scrollTo(0, 180));
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(OUT_DIR, "event-planner-hjemmeside.png"),
      clip: { x: 0, y: 0, width: 341, height: 1024 },
    });
    console.log("Saved event-planner-hjemmeside.png (341×1024 portrait crop)");
  }

  // Landscape hero — Oversikt med Arrangementsklarhet og Budsjett & økonomi
  {
    const page = await browser.newPage({ viewport: { width: 1800, height: 900 } });
    await preparePage(page);
    await page.evaluate(() => window.scrollTo(0, 680));
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(OUT_DIR, "event-planner-hero.png"),
      clip: { x: 0, y: 0, width: 1800, height: 600 },
    });
    console.log("Saved event-planner-hero.png (1800×600 landscape crop)");
  }

  await browser.close();
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
