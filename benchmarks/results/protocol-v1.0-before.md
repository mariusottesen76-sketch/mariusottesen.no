# External Search & LLM Baseline Protocol v1.0 (BEFORE)

**Benchmark:** Master Search & LLM Benchmark v1.0 (LOCKED)  
**Query version:** v1.0  
**Site baseline:** Core Authority Set = 9 (no article #10)  
**Phase:** 5B.0 pilot → 5B.0b manual pilot pack → 5B full Core 40 (after GO)

---

## 0. Baseline scope — what counts

**INCLUDED in BEFORE baseline scores (Google, ChatGPT, Gemini, Perplexity only):**

- `benchmarks/results/manual-pilot-v1.0-before.tsv` (after manual fill)
- `benchmarks/results/external-baseline-v1.0-before.tsv` (full Core 40 × 4, after manual fill)

**EXCLUDED from all baseline scores:**

| Source | Label | Purpose |
|---|---|---|
| Cursor WebSearch (5B.0) | `PROTOCOL_VALIDATION / PROXY ONLY` | Schema/workflow validation |
| `external-baseline-v1.0-before-pilot.tsv` (proxy rows) | Diagnostic appendix | Early signal only — **not** Google/ChatGPT/Gemini/Perplexity |
| Google AI Overview | Supplemental (future) | Separate observation — **not** mixed into organic score |

Proxy data may be kept in `external-baseline-v1.0-before-pilot.*` for reference but must **never** be aggregated into engine scores or BEFORE totals.

---

## 1. Scope

| Layer | Count | Status |
|---|---:|---|
| Core prompts | 40 | Locked |
| Extended prompts | 60 | Locked — run after Core analysis |
| Engines (target) | 4 | Google, ChatGPT, Gemini, Perplexity |
| Max Core observations | 160 | 40 × 4 |

**Rule:** Use question text **verbatim** from `master-search-llm-benchmark-v1.0.ts`. No edits, no added "Marius Ottesen" unless already in prompt.

---

## 2. Engine capability (Cursor runtime)

| Engine | Cursor can test? | Pilot status | Notes |
|---|---|---|---|
| **Google Search (organic)** | **NO** | NOT_RUN | No SERP API / logged-in browser in agent runtime |
| **Google AI Overview** | **NO** | NOT_RUN | Separate observation type when tested manually |
| **ChatGPT** | **NO** | NOT_RUN | No API/session access |
| **Gemini** | **NO** | NOT_RUN | No API/session access |
| **Perplexity** | **NO** | NOT_RUN | No API/session access |
| **Cursor WebSearch (proxy)** | **YES** | PROTOCOL_VALIDATION ONLY | **Excluded from baseline scores** — see §0 |

**Pilot used Cursor WebSearch only** to validate data schema and workflow. Those observations are **PROXY ONLY** and do **not** count toward Google, ChatGPT, Gemini, Perplexity, or any BEFORE aggregate score. Full baseline requires **manual runs** of the four target engines using `manual-pilot-v1.0-before.tsv` and `external-baseline-v1.0-before.tsv`.

---

## 3. Test conditions template (per engine run)

```
ENGINE
ENGINE_MODE          e.g. organic | web_search | chat_with_browsing | ai_overview
TEST_DATE
TEST_TIME            ISO 8601 + timezone
LANGUAGE             no
MARKET/LOCATION      e.g. Norway / no-NO
LOGGED_IN_OR_OUT     logged_out | logged_in | unknown
FRESH_SESSION        yes | no | unknown
WEB_SEARCH_ENABLED   yes | no | n/a
PERSONALIZATION_STATE off | on | unknown
NOTES
QUERY_VERSION        v1.0
```

---

## 4. Observation fields (per engine × prompt)

### Core fields

| Field | Values / type |
|---|---|
| `observation_id` | e.g. PILOT-Q01-GOOGLE |
| `prompt_id` | Q01–Q100 |
| `query_text` | Verbatim from locked benchmark |
| `query_version` | v1.0 |
| `engine` | GOOGLE \| CHATGPT \| GEMINI \| PERPLEXITY |
| `engine_mode` | See §3 |
| `run_status` | RUN \| NOT_RUN \| PARTIAL |
| `expected_primary` | From locked benchmark |
| `expected_primary_url` | Normalized URL if applicable |

### Visibility & match

| Field | Values |
|---|---|
| `domain_visibility` | PRIMARY_FOUND \| DOMAIN_SUPPORT_FOUND \| MARIUS_WITHOUT_DOMAIN \| DOMAIN_NOT_FOUND \| NOT_RUN |
| `domain_found` | true \| false |
| `marius_mentioned` | true \| false \| n/a |
| `cited_url` | Full URL or empty |
| `found_urls` | Pipe-separated list |
| `search_position` | Integer organic position or empty |
| `expected_primary_match` | EXACT \| SUPPORTING \| NO_MATCH |
| `expected_primary_match_bool` | true \| false (legacy) |
| `source_type_used` | cornerstone \| support \| project \| main_page \| consulting \| external \| none |

### Scoring (external — separate from internal coverage)

| Field | Range |
|---|---|
| `answer_relevance` | 0–5 |
| `source_quality` | 0–5 |

### Recruitment extras (when `recruit=true`)

| Field | Values |
|---|---|
| `role_fit_recognized` | true \| false \| n/a |
| `proof_used` | true \| false \| n/a |
| `ai_differentiation_recognized` | true \| false \| n/a |

### Data→decision flag

| Field | Values |
|---|---|
| `data_decision_flag` | true for Q65, Q66, Q67, Q68, Q69 |

### Raw & notes

| Field | Purpose |
|---|---|
| `raw_snippet` | First relevant excerpt |
| `notes_external` | Method issues, wrong person, no browsing, etc. |

---

## 5. Expected primary match levels

| Level | Definition |
|---|---|
| **EXACT** | Cited/found URL = expected primary page (or canonical article URL) |
| **SUPPORTING** | Relevant mariusottesen.no page, not expected primary |
| **NO_MATCH** | Expected primary or relevant domain source not used |

---

## 6. Domain visibility classes

| Class | Definition |
|---|---|
| **A. PRIMARY_FOUND** | Expected primary found/used |
| **B. DOMAIN_SUPPORT_FOUND** | Other relevant mariusottesen.no page |
| **C. MARIUS_WITHOUT_DOMAIN** | Marius mentioned; site not cited |
| **D. DOMAIN_NOT_FOUND** | Neither Marius nor domain in results |
| **E. NOT_RUN** | Engine not actually tested |

---

## 7. Google-specific rules

- Exact benchmark query only
- Record organic positions separately from AI Overview
- Do not count ads
- If AI Overview present: second row with `engine_mode=ai_overview`

---

## 8. LLM-specific rules (ChatGPT / Gemini / Perplexity)

- Fresh session, no pre-loading mariusottesen.no
- Enable web/search mode when testing citation behaviour
- Document if answer is generic without search
- Wrong Marius/person = failure (`answer_relevance` ≤ 1)

---

## 8. File outputs

| File | Purpose |
|---|---|
| `external-baseline-v1.0-before-pilot.tsv` | Pilot observations |
| `external-baseline-v1.0-before-pilot.json` | Pilot JSON |
| `external-baseline-v1.0-before.tsv` | Full Core 40 × 4 (after GO) |
| `external-baseline-v1.0-before.json` | Full JSON |

**Do not write external results into locked benchmark TS/TSV.**

---

## 9. Pilot prompts (5)

| ID | Cluster | Expected primary |
|---|---|---|
| Q01 | Lederprofil | / |
| Q31 | Salgsledelse | Salgsledelse i praksis (CAS) |
| Q53 | Strategi | Fra strategi til gjennomføring (CAS) |
| Q69 | Data→beslutning (GAP) | — (GAP) |
| Q77 | AI | De fleste starter feil med AI (CAS) |

---

## 10. Lock reminder

After 5B.0 GO: do not change Q01–Q100 text, Core/Extended tier, or Expected Primary without versioning (v1.1+).
