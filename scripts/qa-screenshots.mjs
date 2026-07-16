import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "assets", "qa-pilot");
const base = process.env.QA_BASE_URL ?? "http://localhost:3000";

const shots = [
  { name: "psc-desktop", url: "/psc", viewport: { width: 1280, height: 900 } },
  { name: "psc-mobile", url: "/psc", viewport: { width: 390, height: 844 } },
  { name: "flowsignal-desktop", url: "/flowsignal", viewport: { width: 1280, height: 900 } },
  { name: "flowsignal-mobile", url: "/flowsignal", viewport: { width: 390, height: 844 } },
  { name: "prosjekter-psc", url: "/prosjekter#predictive-sales-coach-2026", viewport: { width: 1280, height: 900 } },
  { name: "prosjekter-flowsignal", url: "/prosjekter#flowsignal-2026-05", viewport: { width: 1280, height: 900 } },
  { name: "consulting-pilot", url: "/consulting", viewport: { width: 1280, height: 900 }, scrollTo: "#cons-metoder-heading" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
for (const shot of shots) {
  const page = await browser.newPage({ viewport: shot.viewport });
  await page.goto(`${base}${shot.url}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  if (shot.scrollTo) {
    await page.locator(shot.scrollTo).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
  }
  await page.screenshot({ path: path.join(outDir, `${shot.name}.png`), fullPage: shot.name.includes("mobile") });
  await page.close();
  console.log(`saved ${shot.name}.png`);
}
await browser.close();
