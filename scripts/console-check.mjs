import { chromium, devices } from "playwright";

const routes = [
  "/",
  "/prosjekter",
  "/psc",
  "/flowsignal",
  "/ai-readiness-scan",
  "/control-tower",
  "/consulting?tema=tilgangskode&prosjekt=predictive-sales-coach",
];

const viewports = [
  { name: "desktop", context: {} },
  { name: "mobile", context: { ...devices["iPhone 13"] } },
];

const allErrors = [];

for (const vp of viewports) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext(vp.context);
  for (const route of routes) {
    const page = await context.newPage();
    const errors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));
    try {
      await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle", timeout: 45000 });
      await page.waitForTimeout(1200);
    } catch (e) {
      errors.push(`NAV: ${e.message}`);
    }
    if (errors.length) allErrors.push({ viewport: vp.name, route, errors });
    await page.close();
  }
  await browser.close();
}

if (allErrors.length === 0) {
  console.log(`CONSOLE: no errors on ${routes.length} routes x ${viewports.length} viewports`);
} else {
  console.log("CONSOLE ERRORS:");
  for (const { viewport, route, errors } of allErrors) {
    console.log(`${viewport} ${route}`);
    for (const e of errors) console.log(`  - ${e}`);
  }
  process.exit(1);
}
