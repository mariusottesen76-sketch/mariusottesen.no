# External Discovery Pilot — POST_EN_T0

**Phase:** 6A — External Discovery Pilot v1.0 setup  
**Pilot label:** `POST_EN_T0`  
**Date prepared:** 2026-09-02  
**Status:** TEST PROTOCOL / RESULT FORM — **not** a change to frozen benchmark source of truth

---

## 0. Scope & frozen source confirmation

| Item | Value |
|---|---|
| Discovery benchmark | External Discovery Benchmark **v1.0 — FROZEN** |
| Master benchmark | Master Search & LLM Benchmark **v1.0 — FROZEN** |
| Pilot prompt count | **13** (from Discovery 100, IDs below) |
| Site context | EN-1A, EN-1B, EN-1C **deployed** — early post-deploy baseline |
| Expected ranking | **NONE** — `matchFit` / `evidenceStrength` are pre-test annotations only |

**Frozen registry validation (2026-09-02):** `validateDiscoveryBenchmark()` → `ok: true`, 100 prompts, 50 CORE / 38 EXTENDED / 12 BOUNDARY.

**Pilot IDs verified against** `external-discovery-prompts-v1.0.ts` — **no content deviation.**

**Do not modify:** `external-discovery-prompts-v1.0.ts`, `external-discovery-benchmark-v1.0.ts`, `master-search-llm-benchmark-v1.0.ts`, or any `src/` files based on single test results.

### Test-start gate (do not run T0 before this)

| Step | Requirement |
|---|---|
| 1 | Core Authority #10 «Fra data til beslutning» **published live** — **EARLY_LIVE 02.09.2026** with `datePublished` 03.09.2026 |
| 2 | Production QA **green** for article + EN routes |
| 3 | `production_commit_sha` recorded in test-state metadata (§0.1) |
| 4 | Website-state **frozen** — no site changes during 13 × 2 manual runs |

**Do not run POST_EN_T0 before steps 1–3 are complete.** T0 must measure one defined website-state.

---

## 0.1 Test-state metadata (frozen website-state — 2026-09-02)

Record once before the first prompt. Required for T0 ↔ T1 comparison.

**Status:** Website-state **FROZEN** after final semantic + lesesti deploy QA green (2026-09-02). No site changes until T0 complete (13 × ChatGPT + 13 × Gemini).

```
test_label:                 POST_EN_T0
test_date:                  (record when first discovery prompt is run)
test_start_time:            (record when first discovery prompt is run)
production_commit_sha:      b166582acc1098f95f759b1aec3a01623c733016
core_authority_10_live:     yes
en_core_routes_live:        yes
en_projects_live:           yes
en_articles_live:           yes
ai_ki_semantic_coverage_live: yes
reading_path_refinement_live: yes
```

| Field | Verified |
|---|---|
| `production_commit_sha` | `b166582` — deployed to production 2026-09-02 (final pre-T0 package) |
| `core_authority_10_live` | `/faginnlegg/fra-data-til-beslutning-2026-09` → 200, full SSR |
| `en_core_routes_live` | `/en`, `/en/experience`, `/en/results`, `/en/cv` → 200 |
| `en_projects_live` | `/en/projects` → 200 |
| `en_articles_live` | `/en/articles` → 200 (87 EN articles; #10 Norwegian-only) |
| `ai_ki_semantic_coverage_live` | Strategic NO hubs: `/`, `/cv`, `/prosjekter`, `/faginnlegg`, `/consulting` — AI + kunstig intelligens + KI in visible SSR |
| `reading_path_refinement_live` | `/faginnlegg`, `/en/articles` — 3-column subgrid lesestier, display titles, aligned list start |

**Publication note:** `EARLY_LIVE_WITH_FUTURE_PUBLICATION_DATE` — live 02.09, `datePublished` 03.09.2026 (intentional).

---

## Current-site implementation deltas

**This section documents production changes since the frozen benchmark audit (2026-09-02). It does NOT modify frozen benchmark metadata.**

Frozen fields (`evidenceStrength`, `architectureSensitive`, etc.) remain as locked in v1.0. Use this section when **interpreting** T0 results.

### A. D98 — Travel / mobility

| Layer | Value |
|---|---|
| **Frozen** | `evidenceStrength = NONE` · `websiteGap`: reise 1–2 d/uke NOT on site |
| **Current production (post-baseline)** | Mobilitet/reise er **eksplisitt dokumentert** på `/cv` og `/en/cv`: ca. **1–2 jobbrelaterte reisedager per uke**, nasjonalt og/eller internasjonalt når rollen krever det. |
| **Label** | **POST-BASELINE implementation delta** |

At T0: if an engine cites travel willingness from CV, note URL in `specific_page_cited`. Compare against this delta — **do not change** frozen D98 `evidenceStrength`.

### B. D03 / English architecture

| Layer | Value |
|---|---|
| **Frozen** | `architectureSensitive = yes` · EN indexability gap noted at freeze |
| **Current production (post-baseline)** | Dedikerte **server-rendered English recruitment routes** live: `/en`, `/en/experience`, `/en/results`, `/en/cv`. |
| **Label** | **POST-BASELINE implementation delta** |

Frozen `architectureSensitive = yes` **unchanged** — still flags English-query sensitivity for comparison across T0/T1.

### C. English evidence expansion

Current production also includes (post EN-1A/B/C):

- `/en/projects` + **15** project detail pages
- `/en/articles` + **87** full-English articles

Record which surfaces engines cite in `en_page_used` / `source_type`.

### D. Core Authority #10 — «Fra data til beslutning»

| Layer | Value |
|---|---|
| **At T0 test start (2026-09-02)** | **LIVE** — `core_authority_10_live: yes` |
| **URL (when live)** | `/faginnlegg/fra-data-til-beslutning-2026-09` |

Do **not** assume Core Authority #10 is indexed or discoverable before deploy + QA on 03.09.

---

## 1. Pilot set — representation map

| ID | Represents | Tier | Language | Notes |
|---|---|---|---|---|
| D01 | Bred norsk Sales Director / sales leadership | CORE | NO | Bred kandidatpool |
| D03 | English Head of Sales | CORE | **EN** | **Architecture-sensitive** — first EN crawlability test |
| D23 | Realistisk CEO hiring brief | CORE | NO | DL → salgsdirektør, margin + coaching |
| D31 | General Manager / Managing Director B2B | CORE | NO | Hands-on GM / DL |
| D45 | Leadership style + strong teams + demands + people | CORE | NO | Multi-trait leadership |
| D56 | Commercial / Sales Excellence | CORE | NO | Synonym-tittel test |
| D58 | Commercial leadership + practical AI | CORE | NO | Differentiator combo |
| D67 | Industry — circular economy / recycling | CORE | NO | Franzefoss bransje |
| D75 | Cross-industry transferable leadership | EXTENDED | NO | Bransjeuavhengig |
| D77 | Sales + operations | CORE | NO | Salg/drift samhandling |
| D90 | CRM / reactive → proactive sales | CORE | NO | Result-problem |
| D98 | Mobility 1–2 days/week | EXTENDED | NO | Frozen: evidence NONE — see **implementation delta** §Current-site |
| D12 | **Negative control** — large SaaS VP Sales | BOUNDARY | **EN** | **NON_MATCH** — good result = Marius NOT listed |

**Recommended run order:** D01 → D03 → D23 → D31 → D45 → D56 → D58 → D67 → D75 → D77 → D90 → D98 → **D12 last**

---

## 2. Frozen prompts (verbatim — copy-paste exactly)

### D01 — Bred norsk Sales Director / sales leadership

```
Hvem i Norge har erfaring som salgssjef eller salgsdirektør med personal- og P/L-ansvar i B2B?
```

### D03 — English Head of Sales *(architecture-sensitive)*

```
Head of Sales candidates in Norway with B2B experience, national sales accountability, P/L understanding and team leadership — who should be on a longlist?
```

### D23 — Realistisk CEO hiring brief

```
Jeg er daglig leder i en virksomhet som ser etter en salgsdirektør som er sterk på salg og trygg på oppfølging og utvikling av salgsrådgivere. Bransjeerfaring er mindre viktig. Personen skal rapportere til meg, ha rundt 8 direkterapporterende og være et samlende punkt i organisasjonen. Vi trenger topplinjeutvikling, men særlig bedre marginer i et tøffere marked. Hvilke kandidater i Norge kan være relevante?
```

### D31 — General Manager / Managing Director B2B

```
Vi søker daglig leder eller General Manager til en mellomstor norsk B2B-virksomhet. Rollen kombinerer P/L, kommersiell utvikling, salgsledelse, teamutvikling og tett samspill mellom strategi og drift. Vi trenger en hands-on leder som kan skape retning og gjennomføring, ikke bare forvalte daglig drift. Hvilke kandidater bør vi vurdere?
```

### D45 — Leadership style + teams + demands + people

```
Vi søker en trygg og tydelig salgsdirektør med høy arbeidskapasitet som bygger sterke team, utvikler medarbeidere, stiller krav og samtidig får folk med seg i et konkurranseutsatt B2B-marked. Hvilke kandidater i Norge kan være relevante?
```

### D56 — Commercial / Sales Excellence

```
Commercial excellence eller sales excellence-leder med erfaring fra salgsprosess, KPI, CRM, coaching og teamledelse i B2B — kandidater Norge?
```

### D58 — Commercial leadership + practical AI

```
Hvem i Norge kombinerer kommersiell ledelse med praktisk AI-implementering og AI-prototyper for salg og operasjon?
```

### D67 — Industry — circular economy / recycling

```
Jeg søker kandidater med ledererfaring fra sirkulær økonomi eller gjenvinningsbransjen i Norge.
```

### D75 — Cross-industry transferable leadership

```
Hvilke salgsdirektører i Norge bør en arbeidsgiver vurdere når bransjeerfaring er mindre viktig enn overførbar B2B-salgsledelse, P/L-forståelse og teamutvikling?
```

### D77 — Sales + operations

```
Kommersielle ledere i Norge med dokumentert erfaring i å få salg og drift til å samhandle bedre i B2B?
```

### D90 — CRM / reactive → proactive sales

```
Hvem har profesjonalisert reaktivt salgsteam til proaktiv, datadrevet salg med CRM og dashboards i Norge?
```

### D98 — Mobility 1–2 days/week

```
Vi søker en salgsdirektør, kommersiell leder eller Country Manager som er komfortabel med omtrent 1–2 reisedager i uken, nasjonalt og/eller internasjonal når rollen krever det. Hvilke kandidater i Norge kan være relevante?
```

### D12 — Negative control *(architecture-sensitive)*

```
VP Sales for a Nordic enterprise SaaS company with 80+ sellers and aggressive ARR targets — who fits?
```

---

## 3. Benchmark metadata per prompt (pre-test annotations — NOT expected rank)

| ID | Category | Tier | matchFit | evidenceStrength | discoveryDifficulty | architectureSensitive | negativeControl |
|---|---|---|---|---|---|---|---|
| D01 | ROLE_TITLE_SENIORITY | CORE | HIGH | STRONG | HIGH | no | no |
| D03 | ROLE_TITLE_SENIORITY | CORE | HIGH | STRONG | HIGH | **yes** | no |
| D23 | JOB_BRIEF | CORE | HIGH | STRONG | HIGH | no | no |
| D31 | JOB_BRIEF | CORE | HIGH | STRONG | HIGH | no | no |
| D45 | LEADERSHIP_STYLE | CORE | HIGH | STRONG | HIGH | no | no |
| D56 | COMMERCIAL_SALES | CORE | HIGH | STRONG | HIGH | no | no |
| D58 | STRATEGY_TRANSFORM_AI | CORE | HIGH | STRONG | HIGH | no | no |
| D67 | INDUSTRY | CORE | HIGH | STRONG | HIGH | no | no |
| D75 | INDUSTRY | EXTENDED | HIGH | STRONG | HIGH | no | no |
| D77 | ORG_CONTEXT | CORE | HIGH | STRONG | HIGH | no | no |
| D90 | RESULT_PROBLEM | CORE | HIGH | STRONG | HIGH | no | no |
| D98 | GEO_TRAVEL_INTL | EXTENDED | HIGH | **NONE** | **VERY_HIGH** | no | no |
| D12 | ROLE_TITLE_SENIORITY | BOUNDARY | **NON_MATCH** | **NONE** | LOW | **yes** | **yes** |

### Supplementary annotation fields (reference only)

| ID | expectedSources (site) | evidenceQuote (summary) | websiteGap / boundary |
|---|---|---|---|
| D01 | /, /erfaring, /cv, /resultater, /proof-points | Nasjonal salgsorg 10–20, P/L/KPI | — |
| D03 | /erfaring, /resultater, /cv | Franzefoss/Norengros/Nilfisk | EN indexability; Head of Sales ikke egen tittel |
| D23 | /erfaring, /resultater, /referanser | Marginer, coaching-referanser | ~8 direkterapporterende ikke eksplisitt |
| D31 | /erfaring, /resultater, /cv | — | Retail DL-dybde ikke dokumentert |
| D45 | /referanser, /erfaring | Referanser: kapasitet, utvikling, krav, team | — |
| D56 | /erfaring, /resultater, /cv | CAS Salgsledelse; CRM/KPI | Commercial Excellence-tittel ikke brukt |
| D58 | /prosjekter, /cv, /consulting | AI-prototyper salg/operasjon | — |
| D67 | /erfaring, /resultater, /cv | Franzefoss Gjenvinning | — |
| D75 | /erfaring, /resultater, /cv | Cross-industry erfaringInnhold | — |
| D77 | /, /erfaring, /resultater | Salg/drift profil + Franzefoss | — |
| D90 | /erfaring, /resultater, /cv | Franzefoss reaktiv→proaktiv | — |
| D98 | /erfaring, /resultater, /cv | — | **Reise 1–2 d/uke NOT on site**; actualFit personlig avklart |
| D12 | *(none)* | — | **VP Sales 80+ — boundary; skala-mismatch** |

---

## 4. Test rules (all AI engines)

### Session setup

| Rule | Requirement |
|---|---|
| New session | **New temporary / incognito chat per prompt** |
| Name in prompt | **Do NOT** mention Marius Ottesen |
| Source hint | **Do NOT** give mariusottesen.no as a source |
| Test meta | **Do NOT** explain what you are testing |
| Prompt text | Use frozen prompt **verbatim** (§2) |
| Web search | Enable Search/Web/Browsing where the engine supports it |
| Follow-up | **No follow-up questions** before first answer is recorded |
| web_search_used | Record **yes / no / unknown** for every row |

> **Critical:** An answer **without** external web search must **not** be interpreted as a website discovery failure. Mark `web_search_used: no` and classify **INVALID_TEST** if the test requires web discovery.

### Engines — phase 1 (this pilot)

| Engine | Mode | Phase 1 |
|---|---|---|
| **ChatGPT** | Search / Web browsing enabled | **RUN all 13** |
| **Gemini** | Google Search / grounding when available | **RUN all 13** |
| Google | Organic SERP | Optional — add later |
| Perplexity | Web search | Optional — add later |

### Session header template (fill once per engine run)

Copy test-state block from **§0.1** first, then:

```
PILOT_LABEL:        POST_EN_T0
ENGINE:             CHATGPT | GEMINI | GOOGLE | PERPLEXITY
DATE:               YYYY-MM-DD
TIME:               HH:MM (timezone)
LOGGED_IN:          yes | no | unknown
FRESH_SESSION:      yes (required per prompt)
WEB_SEARCH_ENABLED: yes | no | unknown
MODEL/VERSION:      e.g. GPT-4o + Browse / Gemini 2.x + Search
MARKET/LOCATION:    Norway preferred when configurable
NOTES:
```

---

## 5. Result fields (per ENGINE × PROMPT)

| Field | Values / type |
|---|---|
| `engine` | CHATGPT \| GEMINI \| GOOGLE \| PERPLEXITY |
| `date` | YYYY-MM-DD |
| `prompt_id` | D01 … D98, D12 |
| `web_search_used` | yes \| no \| unknown |
| `marius_mentioned` | yes \| no |
| `marius_rank` | 1 \| 2 \| 3 \| 4+ \| not_listed \| not_applicable |
| `domain_found` | yes \| no |
| `mariusottesen_url_cited` | yes \| no |
| `specific_page_cited` | full URL or `none` |
| `source_type` | homepage \| cv \| experience \| results \| articles \| projects \| consulting \| other |
| `en_page_used` | `/en` \| `/en/experience` \| `/en/cv` \| `/en/articles` \| `/en/projects` \| none *(D03 + EN prompts)* |
| `profile_understanding` | 0–5 |
| `fit_accuracy` | 0–5 |
| `evidence_accuracy` | 0–5 |
| `hallucination_or_overclaim` | yes \| no |
| `competitors_returned` | free text (names / firms listed ahead of Marius) |
| `outcome` | STRONG_DISCOVERY \| DISCOVERED \| WEAK_DISCOVERY \| NO_DISCOVERY \| INVALID_TEST |
| `notes` | free text |

### Rank guidance

- Use `not_applicable` when the engine returns prose without a ranked list.
- For **D12 (negative control):** `not_listed` + `marius_mentioned: no` = **good outcome**.
- Do **not** treat `matchFit: HIGH` as "should be rank 1."

---

## 6. Outcome classification

| Outcome | When to use |
|---|---|
| **STRONG_DISCOVERY** | Marius listed top 3, domain cited, accurate role/evidence summary |
| **DISCOVERED** | Marius mentioned with reasonable fit; may be lower rank or partial URL |
| **WEAK_DISCOVERY** | Marius mentioned but vague, wrong role framing, or no URL |
| **NO_DISCOVERY** | Marius not mentioned; web search was used; test is valid |
| **INVALID_TEST** | No web search when required; prompt altered; technical failure; incomparable output |

### Issue taxonomy (do not change site from single misses)

For each potential problem, tag one or more:

| Code | Meaning |
|---|---|
| **A** | Role fit issue (query ↔ documented profile) |
| **B** | Evidence / content issue (gap on site) |
| **C** | Indexability / crawl issue (especially EN — D03, D12) |
| **D** | Competition / discovery difficulty |
| **E** | Engine behaviour (no search, hallucination, bias) |
| **F** | Insufficient crawl/indexing time (**POST_EN_T0 default for EN misses**) |

---

## 7. Scoring rules (0–5 scales)

### profile_understanding

| Score | Meaning |
|---|---|
| 0 | Wrong person or fabricated profile |
| 1 | Name only, no role context |
| 2 | Generic "commercial leader" with major gaps |
| 3 | Mostly correct seniority/domain, missing differentiators |
| 4 | Accurate commercial + leadership framing |
| 5 | Accurate including salg/drift, AI, or industry nuance when relevant |

### fit_accuracy

| Score | Meaning |
|---|---|
| 0 | Clearly wrong fit (e.g. VP Sales 80+ for Marius on D12 = N/A if not mentioned) |
| 1 | Stretch / mismatched seniority or domain |
| 2 | Partial overlap, important mismatches |
| 3 | Reasonable longlist candidate, incomplete |
| 4 | Strong fit for the prompt as written |
| 5 | Strong fit with evidence tied to documented experience |

**D12:** Score fit only if Marius is mentioned; if correctly omitted, use `not_applicable` for rank and note "correct negative control."

### evidence_accuracy

| Score | Meaning |
|---|---|
| 0 | Fabricated employers, titles, or results |
| 1 | Vague claims without verifiable anchor |
| 2 | Mix of correct and incorrect facts |
| 3 | Directionally correct, light on specifics |
| 4 | Correct employers/roles/results with minor gaps |
| 5 | Specific, verifiable claims aligned with site/CV |

**D98:** Frozen benchmark says `evidenceStrength = NONE`. Production now documents travel on `/cv` and `/en/cv` (see implementation delta). Score against **what the engine actually finds**; do not penalize omission if not yet indexed. Penalize only if travel is **hallucinated** without CV support.

### hallucination_or_overclaim

Set **yes** if the engine assigns titles, scale, industry, or results not supported by mariusottesen.no or public CV facts (e.g. "VP Sales 80 sellers", undocumented travel willingness stated as fact).

---

## 8. EN architecture comparison (D03 priority)

When recording D03 (and D12 if Marius appears incorrectly):

| Track | Values |
|---|---|
| `en_page_used` | Which `/en/*` URL was cited, if any |
| Compare later | Re-run as **POST_EN_T1** after crawl propagation |

Expected EN surfaces (reference, not pass/fail): `/en`, `/en/experience`, `/en/cv`, `/en/articles`, `/en/projects`

---

## 9. Empty result matrix — ChatGPT

Copy to spreadsheet or fill inline. One row per prompt.

| prompt_id | web_search_used | marius_mentioned | marius_rank | domain_found | mariusottesen_url_cited | specific_page_cited | source_type | en_page_used | profile_understanding | fit_accuracy | evidence_accuracy | hallucination_or_overclaim | competitors_returned | outcome | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D01 | | | | | | | | n/a | | | | | | | |
| D03 | | | | | | | | | | | | | | | |
| D23 | | | | | | | | n/a | | | | | | | |
| D31 | | | | | | | | n/a | | | | | | | |
| D45 | | | | | | | | n/a | | | | | | | |
| D56 | | | | | | | | n/a | | | | | | | |
| D58 | | | | | | | | n/a | | | | | | | |
| D67 | | | | | | | | n/a | | | | | | | |
| D75 | | | | | | | | n/a | | | | | | | |
| D77 | | | | | | | | n/a | | | | | | | |
| D90 | | | | | | | | n/a | | | | | | | |
| D98 | | | | | | | | n/a | | | | | | | |
| D12 | | | | | | | | | | | | | | | |

**Engine header:** CHATGPT · POST_EN_T0 · date: ___________

---

## 10. Empty result matrix — Gemini

| prompt_id | web_search_used | marius_mentioned | marius_rank | domain_found | mariusottesen_url_cited | specific_page_cited | source_type | en_page_used | profile_understanding | fit_accuracy | evidence_accuracy | hallucination_or_overclaim | competitors_returned | outcome | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D01 | | | | | | | | n/a | | | | | | | |
| D03 | | | | | | | | | | | | | | | |
| D23 | | | | | | | | n/a | | | | | | | |
| D31 | | | | | | | | n/a | | | | | | | |
| D45 | | | | | | | | n/a | | | | | | | |
| D56 | | | | | | | | n/a | | | | | | | |
| D58 | | | | | | | | n/a | | | | | | | |
| D67 | | | | | | | | n/a | | | | | | | |
| D75 | | | | | | | | n/a | | | | | | | |
| D77 | | | | | | | | n/a | | | | | | | |
| D90 | | | | | | | | n/a | | | | | | | |
| D98 | | | | | | | | n/a | | | | | | | |
| D12 | | | | | | | | | | | | | | | |

**Engine header:** GEMINI · POST_EN_T0 · date: ___________

---

## 11. Quick instructions for Marius (manual run)

### ChatGPT (13 prompts)

1. Open **new temporary chat** (or incognito) with **Browse / Search** enabled.
2. Paste **one prompt verbatim** from §2 — send once, no preamble.
3. Wait for complete first answer — **do not** ask follow-ups yet.
4. Check whether Browse/Search ran (citations, web indicators, or UI confirmation). Record `web_search_used`.
5. Fill the ChatGPT row (§9): mention, rank, URLs, scores, outcome.
6. **Close chat.** Repeat for next prompt.

### Gemini (13 prompts)

1. Open **new chat** with **Google Search / grounding** enabled if offered.
2. Same steps 2–6 using Gemini matrix (§10).
3. For **D03**, note any `/en/*` URL cited in `en_page_used`.

### D12 negative control

- A **good** result is Marius **not** listed for VP Sales / 80+ SaaS.
- If Marius appears with inflated scale/title → `hallucination_or_overclaim: yes`.

### After both engines

- Tag each miss with issue code(s) A–F (§6).
- Default assumption for EN gaps at T0: **F** (insufficient crawl time) unless evidence of hard index failure.
- Schedule **POST_EN_T1** comparison later — do not change the website from this pilot alone.

---

## 12. POST_EN_T0 baseline note

T0 runs **after** Core Authority #10 deploy (03.09.2026) + green production QA — one frozen website-state for all 26 observations (13 × ChatGPT + 13 × Gemini).

EN-1A/B/C deployed recently. This pilot is an **early baseline**, not a final verdict on EN indexability.

| Label | Meaning |
|---|---|
| **POST_EN_T0** | First external discovery pass after EN architecture live |
| **POST_EN_T1** | Follow-up after crawlers/indexes have had more time |

Do **not** expect full Google/LLM index propagation at T0.

---

## 13. File lineage

| File | Role |
|---|---|
| `external-discovery-prompts-v1.0.ts` | Frozen prompt source (100) — **unchanged** |
| `external-discovery-benchmark-v1.0.ts` | Frozen types/validation — **unchanged** |
| `master-search-llm-benchmark-v1.0.ts` | Frozen Master 100 — **unchanged** |
| **`external-discovery-pilot-post-en-t0.md`** | This protocol / result form only |

---

*End of POST_EN_T0 pilot protocol.*
