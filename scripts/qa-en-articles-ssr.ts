import { getIndexableEnArticleSlugs } from "../src/app/lib/faginnlegg-locale-routes";

const BASE = process.env.QA_BASE ?? "http://localhost:3000";
const GOOGLEBOT =
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

type Fail = { path: string; reason: string };

function checkHtml(path: string, html: string): Fail | null {
  if (!html.includes('lang="en"')) {
    return { path, reason: 'missing lang="en"' };
  }
  if (/noindex/i.test(html)) {
    return { path, reason: "contains noindex" };
  }
  const canonicalMatch = html.match(
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i
  );
  if (!canonicalMatch) {
    return { path, reason: "missing canonical" };
  }
  const canonical = canonicalMatch[1];
  const slug = path.split("/").pop() ?? "";
  const canonicalSlug = decodeURIComponent(canonical.split("/").pop() ?? "");
  if (decodeURIComponent(slug) !== canonicalSlug && !canonical.includes(encodeURIComponent(decodeURIComponent(slug)))) {
    return { path, reason: `canonical mismatch: ${canonical}` };
  }
  if (!/hreflang=["']en["']/i.test(html) || !/hreflang=["']no["']/i.test(html)) {
    return { path, reason: "missing hreflang en/no" };
  }
  if (path.startsWith("/en/articles/") && !html.includes("BlogPosting")) {
    return { path, reason: "missing BlogPosting JSON-LD" };
  }
  return null;
}

async function fetchPath(path: string): Promise<{ status: number; html: string }> {
  const segments = path.split("/");
  const encodedPath = segments.map((seg, i) => (i === 0 || !seg ? seg : encodeURIComponent(decodeURIComponent(seg)))).join("/");
  const res = await fetch(`${BASE}${encodedPath}`, {
    headers: { "User-Agent": GOOGLEBOT },
    redirect: "manual",
  });
  const html = await res.text();
  return { status: res.status, html };
}

async function main() {
  const slugs = getIndexableEnArticleSlugs();
  const paths = ["/en/articles", ...slugs.map((s) => `/en/articles/${s}`)];
  const fails: Fail[] = [];
  let pass = 0;

  for (const path of paths) {
    const { status, html } = await fetchPath(path);
    if (status !== 200) {
      fails.push({ path, reason: `HTTP ${status}` });
      continue;
    }
    const fail = checkHtml(path, html);
    if (fail) fails.push(fail);
    else pass++;
  }

  const incomplete = [
    "fra-strategi-til-gjennomforing-2026-09",
    "bi-generative-ai-for-business-2026-01",
    "hva-motiverer-kunnskapsarbeid-2026-01",
    "visindi-rekruttering-2024-01",
  ];
  for (const slug of incomplete) {
    const { status } = await fetchPath(`/en/articles/${slug}`);
    if (status !== 404) {
      fails.push({ path: `/en/articles/${slug}`, reason: `expected 404, got ${status}` });
    } else {
      pass++;
    }
  }

  console.log(
    JSON.stringify(
      {
        TOTAL_TESTED: paths.length + incomplete.length,
        PASS: pass,
        FAIL: fails.length,
        EN_ARTICLE_ROUTES: slugs.length,
      },
      null,
      2
    )
  );
  if (fails.length) {
    console.log("FAILURES:");
    for (const f of fails) console.log(`  ${f.path}: ${f.reason}`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
