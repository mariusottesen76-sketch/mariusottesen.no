# External Discovery Benchmark v1.0 — FROZEN

**Status:** FROZEN (Phase 5C.3, 2026-09-02)  
**Tag:** `external-discovery-v1.0-before-en`  
**Separate from:** `master-search-llm-benchmark-v1.0.ts` (100 prompts — **do not modify**)

## Purpose

Test whether recruiter, headhunter, researcher, employer, CEO, board, customer or partner can **discover Marius Ottesen** without the name in the prompt — across the full realistic discovery universe.

External engine results (domain found, rank, cited URL) are recorded **separately** from pre-test role-fit and evidence annotations.

## Files

| File | Purpose |
|---|---|
| `external-discovery-benchmark-v1.0.ts` | Types, tier IDs, validation, pilot list |
| `external-discovery-prompts-v1.0.ts` | 100 prompts (frozen source array) |
| `external-discovery-benchmark-v1.0.tsv` | TSV export |
| `discovery-lexicon-v1.0.md` | Semantic synonym matrix |
| `human-review-pack-v1.0.md` | Full prompt review pack |

## Structure (100 prompts)

| # | Category | Count | IDs |
|---|---|---|---|
| 1 | Role / Title / Seniority | 12 | D01–D12 |
| 2 | Adjacent Role + Engagement | 10 | D13–D22 |
| 3 | Realistic Hiring Briefs | 12 | D23–D34 |
| 4 | Leadership Style / Personality | 12 | D35–D46 |
| 5 | Commercial / Sales Competence | 10 | D47–D56 |
| 6 | Strategy / Transform / AI / Data | 10 | D57–D66 |
| 7 | Industry / Domain | 10 | D67–D76 |
| 8 | Organisational Context | 8 | D77–D84 |
| 9 | Result / Business Problem | 10 | D85–D94 |
| 10 | Geography / Travel / Intl / Language | 6 | D95–D100 |

## Tiers (5C.3)

| Tier | Count | Use |
|---|---|---|
| **CORE** | 50 | Repeat testing — highest commercial discovery value |
| **EXTENDED** | 38 | Synonyms, adjacent roles, evidence-retrieval, narrow combos |
| **BOUNDARY** | 12 | Honest non-match tests (`negativeControl: true`) |

## Methodology (5C.3 — separate dimensions)

| Field | Values | Meaning |
|---|---|---|
| **matchFit** | HIGH / MEDIUM / LOW / NON_MATCH | Documented role fit (not ranking expectation) |
| **evidenceStrength** | STRONG / ADEQUATE / WEAK / NONE | Site evidence for the match |
| **discoveryDifficulty** | LOW / MEDIUM / HIGH / VERY_HIGH | Likelihood broad search surfaces Marius |
| **architectureSensitive** | boolean | English query / client-side EN indexability gap (5C.2b) |
| **negativeControl** | boolean | Expected non-match; requires `matchFit: NON_MATCH` |

**Removed:** `SHOULD_FIND` / `discoveryExpectation` as implicit ranking requirements.

## Architecture-sensitive prompts (EN indexability)

D03, D10, D12, D43, D52, D60, D65, D73, D82, D94, D97

## Validation

```bash
npx tsx -e "import { validateDiscoveryBenchmark } from './benchmarks/external-discovery-benchmark-v1.0.ts'; console.log(validateDiscoveryBenchmark());"
```

## Recommended first pilot (10 prompts)

D01, D14, D23, D45, D47, D57, D67, D77, D87, D95

## Lock rules

Prompt text and schema frozen at v1.0. Changes → v1.1+ with changelog. Do not mix commits with `src/`.
