# T1 measurement registry — mariusottesen.no

**Prepared:** 2026-10-16  
**Status:** Ready for manual execution — **no results filled in**

## Website-state and Git SHAs

| Label | SHA | Meaning |
|---|---|---|
| **T0 website-state (frozen)** | `b166582acc1098f95f759b1aec3a01623c733016` | POST_EN_T0 freeze (2026-09-02). See `external-discovery-pilot-post-en-t0.md` §0.1 |
| **Production before this SEO round** | `f824c8fb0f46c6fd08def6fd85ad3e91bbd56ecf` | Last pushed `origin/main` at registry time |
| **Post–SEO-round deploy** | *(record after deploy)* | Commit that includes JSON-LD, contact column, `serializeJsonLd` |

**Local working tree (2026-10-16):** SEO/AEO changes + profil contact layout — **not committed**.

## T0 baseline — what is documented

| Track | Protocol | Stored results in repo |
|---|---|---|
| Master 5×4 (Q01, Q31, Q53, Q69, Q77) | `protocol-v1.0-before.md`, `manual-pilot-pack-v1.0-before.md` | **None** — `manual-pilot-v1.0-before.tsv` is an empty template |
| Core 40 × 4 | `external-baseline-v1.0-before.tsv` | **Header only** |
| POST_EN_T0 blind 13×2 | `external-discovery-pilot-post-en-t0.md` | **Empty matrices** (§9–10) |
| Cursor WebSearch proxy | `external-baseline-v1.0-before-pilot.json` | 5 rows — **excluded from baseline scores** |

**Important:** T0 is a **frozen website-state and methodology**, not a complete historical measurement score. Unless you recover external spreadsheets, **T1 will be the first fully documented measurement point** for comparable engine runs.

**Do not modify:** `master-search-llm-benchmark-v1.0.ts`, `external-discovery-prompts-v1.0.ts`, `external-discovery-benchmark-v1.0.ts`, or `external-discovery-pilot-post-en-t0.md`.

## SEO/AEO changes in this round (implementation only — not measured yet)

Implemented locally (pending deploy):

- `@graph` JSON-LD: Person (`#person`), MOC (`#consulting`, Brreg `sameAs`), WebSite (`#website`), ProfilePage on `/` and `/en` only
- Row Solutions as `affiliation` on Person (not subsidiary / not `worksFor` for Row)
- `contactPoint` on Person (email, telephone)
- `serializeJsonLd()` — escapes `<` as `\u003c` on all JSON-LD script tags touched
- Profil: direct contact under profile photo (left column); Row links in MOC section unchanged from prior round
- No change to locked benchmark prompts or cornerstone article text

## T1 capture files (fill manually)

| File | Observations | Instructions |
|---|---|---|
| `manual-pilot-v1.0-t1.tsv` | 5 prompts × 4 engines = 20 | Verbatim prompts in `manual-pilot-pack-v1.0-before.md` |
| `external-discovery-t1-results.tsv` | 13 prompts × 2 engines = 26 | Verbatim prompts + fields in `external-discovery-pilot-post-en-t0.md` §2, §5 |

### Recommended T1 test-state block (copy at start of each session)

```yaml
test_label: T1
query_version: v1.0
master_benchmark_version: v1.0
discovery_benchmark_version: v1.0
production_commit_sha: <fill>
test_date: YYYY-MM-DD
market: Norway
language: nb-NO (EN prompts as specified)
logged_in: logged_out
fresh_session: yes per prompt
personalization: off where possible
```

### Master pilot — five Google queries (included in T1)

| ID | Question (see locked benchmark) | Expected primary (v1.0) | T1 measurement note |
|---|---|---|---|
| Q01 | Hvilken type kommersiell leder er Marius Ottesen? | `/` | Name in query |
| Q31 | Hva kjennetegner god salgsledelse i praksis? | CAS Salgsledelse i praksis | Blind generic query |
| Q53 | Hvordan får ledergruppe strategi til å endre arbeidshverdagen? | CAS Fra strategi til gjennomføring | Blind generic query |
| Q69 | Fra data til beslutning — hvordan i praksis? | **Frozen GAP** | Site has `/faginnlegg/fra-data-til-beslutning-2026-09` — record actual URL found; do not change v1.0 benchmark without v1.1 |
| Q77 | De fleste starter feil med AI — hva er riktig rekkefølge? | CAS De fleiste starter feil med AI | Blind generic query |

For **Google**, also record: organic position, competing domains (top 3–5), AI Overview yes/no (separate note — not mixed into organic score per `protocol-v1.0-before.md` §7).

For **ChatGPT / Gemini / Perplexity**: require `web_search_used: yes` for valid discovery tests; answers without cited sources are **not** documented organic visibility.

### External discovery pilot (blind) — POST_EN_T1

Use the same 13 prompt IDs and run order as POST_EN_T0: D01 → D03 → D23 → D31 → D45 → D56 → D58 → D67 → D75 → D77 → D90 → D98 → **D12 last**.

Label results `POST_EN_T1` in notes; compare to T0 only if T0 rows are recovered later.

## Measurements not yet performed

- All 20 Master pilot runs on real Google, ChatGPT, Gemini, Perplexity
- All 26 POST_EN_T0/ T1 discovery runs on ChatGPT and Gemini
- Full Core 40 × 4 (160 observations)
- Google AI Overview as structured supplemental rows
- Perplexity on discovery set (optional supplement — not in original T0 comparison score)

## External validation (after deploy)

- [Schema Markup Validator](https://validator.schema.org/) — view-source JSON-LD on `/` and `/en`
- [Google Rich Results Test](https://search.google.com/test/rich-results) — home + one article
- Manual check: `https://www.mariusottesen.no/robots.txt`, `https://www.mariusottesen.no/sitemap.xml`
- hreflang: compare `/` vs `/en` link alternates in HTML

## Search Console / Bing

No `google-site-verification` or Bing meta tag found in `src/` or `public/` in this repo. **Configuration cannot be confirmed from code alone** — verify in hosting/DNS or Google/Bing accounts separately.

## Evidence storage (optional)

Store screenshots and exports under `benchmarks/results/t1-evidence/` (create when running T1; not required for deploy).
