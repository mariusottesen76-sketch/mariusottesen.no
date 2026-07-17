import fs from "node:fs";
import path from "node:path";

const BASE = "http://localhost:3000";
const pub = path.join(process.cwd(), "public");
const failures = [];

const routes = [
  "/",
  "/prosjekter",
  "/consulting",
  "/kontakt",
  "/ai-transformation-value-realization",
  "/control-tower",
  "/psc",
  "/flowsignal",
  "/ai-readiness-scan",
  "/salgsflyt-sjekken",
  "/mariusottesen-nettside",
  "/strategisk-ai-implementering",
  "/skoyenasen-tannklinikk",
  "/agentisk-arbeidsflyt",
  "/ai-innsikts-og-innholdsmotor",
  "/ai-arkitektur-beslutningsstotte",
  "/ai-value-lab-oslo",
  "/faginnlegg",
];

const projectImages = [
  "/images/ai-transformation-value-realization-hjemmeside.png",
  "/images/ai-transformation-value-realization-hjemmeside-bak.png",
  "/images/control-tower-hjemmeside.png",
  "/images/control-tower-hjemmeside-bak.png",
  "/images/psc2.png",
  "/images/predictive-sales-coach-hero.png",
  "/images/flowsignal-hjemmeside.png",
  "/images/flowsignal-hero.png",
  "/images/ai-readiness-scan-hjemmeside.png",
  "/images/ai-readiness-scan-hero.png",
  "/images/smb-salgsflyt-sjekken-hjemmeside.png",
  "/images/salgsflyt-sjekken-hero.png",
  "/images/predictive-sales-coach-promovideo-hjemmeside.png",
  "/images/mariusottesen-nettside-hjemmeside.png",
  "/images/strategisk-ai-implementering-hjemmeside.png",
  "/images/skoyenasen-tannklinikk-hjemmeside.png",
  "/images/skoyenasen-tannklinikk-hjemmeside-bak.png",
  "/images/agentisk-arbeidsflyt-hjemmeside.png",
  "/images/ai-innsikts-og-innholdsmotor-hjemmeside.png",
  "/images/ai-arkitektur-beslutningsstotte-dashboard.jpg",
  "/images/ai-value-lab-oslo-hjemmeside.png",
  "/images/ai-faginnlegg-hjemmeside.png",
];

async function checkRoute(route) {
  const res = await fetch(BASE + route, { redirect: "follow" });
  const html = await res.text();
  return { route, status: res.status, html };
}

function diskPath(urlPath) {
  return path.join(pub, urlPath.replace(/^\//, ""));
}

console.log("=== ROUTES ===");
for (const route of routes) {
  try {
    const { status } = await checkRoute(route);
    console.log(`${status} ${route}`);
    if (status !== 200) failures.push(`ROUTE ${route} -> ${status}`);
  } catch (e) {
    failures.push(`ROUTE ${route} ERROR: ${e.message}`);
    console.log(`ERR ${route}`);
  }
}

console.log("=== PROJECT IMAGES ===");
for (const img of projectImages) {
  const disk = diskPath(img);
  const exists = fs.existsSync(disk);
  let http = "?";
  if (exists) {
    try {
      const res = await fetch(BASE + img);
      http = String(res.status);
      if (res.status !== 200) failures.push(`IMAGE HTTP ${res.status}: ${img}`);
    } catch {
      failures.push(`IMAGE fetch error: ${img}`);
      http = "ERR";
    }
  } else {
    failures.push(`IMAGE missing on disk: ${img}`);
  }
  console.log(`${exists ? "OK" : "MISSING"} HTTP ${http} ${img}`);
}

const prosjekter = await checkRoute("/prosjekter");
const html = prosjekter.html;
if (!html.includes('href="/psc"')) failures.push("CTA: /prosjekter missing PSC detail link");
if (!html.includes("tema=tilgangskode") || !html.includes("prosjekt=flowsignal")) {
  failures.push("CTA: FlowSignal access-code contact missing on /prosjekter");
}
if (!html.includes("prosjekt=ai-readiness-scan")) {
  failures.push("CTA: AI Readiness contact missing on /prosjekter");
}

const pscDetail = await checkRoute("/psc");
if (
  !pscDetail.html.includes("tema=tilgangskode") ||
  !pscDetail.html.includes("prosjekt=predictive-sales-coach")
) {
  failures.push("CTA: PSC detail missing access-code contact href");
}

const ctDetail = await checkRoute("/control-tower");
if (!ctDetail.html.includes("tema=anvendelse") || !ctDetail.html.includes("prosjekt=control-tower")) {
  failures.push("CTA: Control Tower detail missing contact href");
}

const consulting = await checkRoute("/consulting?tema=tilgangskode&prosjekt=flowsignal");
if (consulting.status !== 200) failures.push("CONTACT: consulting query route failed");
if (
  !consulting.html.includes("cons-dialog-heading") &&
  !consulting.html.toLowerCase().includes("tilgangskode")
) {
  failures.push("CONTACT: consulting page may not render access-code context");
}

console.log(`=== FAILURES === ${failures.length}`);
failures.forEach((f) => console.log("FAIL:", f));
if (failures.length === 0) console.log("ALL CHECKS PASSED");
process.exit(failures.length ? 1 : 0);
