# Master Search & LLM Benchmark

## v1.0 — LOCKED (2026-09-01)

**Status:** Ready for Phase 5B external baseline against **current site + Core Authority Set (9 cornerstones)**.

### Files

| File | Purpose |
|---|---|
| `master-search-llm-benchmark-v1.0.ts` | Source of truth — 100 prompts, scores, Core 40, external schema |
| `master-search-llm-benchmark-v1.0.json` | Metadata + definitions (prompts array synced from TS) |

### Lock rules

After v1.0 approval:

- Question text (Q01–Q100) is frozen
- Core/Extended tier is frozen
- Expected Primary v1.0 is frozen
- Changes require **v1.1**, **v1.2**, etc. with changelog

### Field definitions

- **CURRENT OWNERSHIP** — internal source quality (STRONG → GAP)
- **GAP FLAG (Y/N)** — intent not adequately served today
- **GAP PRIORITY** — whether Marius *should* own it (MUST_OWN / SHOULD_OWN / OPTIONAL / INTENTIONAL_NO_OWNER)

A prompt may have `ownership=WEAK`, `gapFlag=Y`, `gapPriority=OPTIONAL` — meaning weak coverage that we do **not** plan to fix with new content.

### Phase 5B external fields (empty until tested)

`engine`, `testDate`, `queryVersion`, `domainFound`, `mariusMentioned`, `citedUrl`, `expectedPrimaryMatch`, `searchPositionIfApplicable`, `answerRelevance`, `sourceQuality`, `notesExternal`

### Phase 5B external baseline

| File | Purpose |
|---|---|
| `results/protocol-v1.0-before.md` | Reproducible test protocol |
| `results/manual-pilot-v1.0-before.tsv` | **Manual 5×4 capture sheet** (real engines — fill by hand) |
| `results/manual-pilot-pack-v1.0-before.md` | Verbatim prompts + test instructions |
| `results/external-baseline-v1.0-before-pilot.tsv` | 5B.0 proxy appendix (**excluded from baseline scores**) |
| `results/external-baseline-v1.0-before-pilot.json` | Proxy appendix JSON (**excluded from baseline scores**) |
| `results/external-baseline-v1.0-before.tsv` | Full Core 40 × 4 (empty template, fill after manual runs) |

**Target engines:** Google, ChatGPT, Gemini, Perplexity — manual/browser runs only.

**Proxy exclusion:** Cursor WebSearch rows in `*-pilot.*` are `PROTOCOL_VALIDATION / PROXY ONLY` — diagnostic appendix, not baseline data.

### Git provenance (5B.0b)

The entire `benchmarks/` tree should be committed **separately** from production site changes:

```bash
git add benchmarks/
git commit -m "Add Master Search & LLM Benchmark v1.0 (frozen source of truth)"
```

Do not mix benchmark commits with `src/`, `public/`, or deploy-related files. Optional tag: `benchmark-v1.0`.
