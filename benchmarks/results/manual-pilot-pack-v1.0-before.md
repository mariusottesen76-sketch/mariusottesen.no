# Manual Real-Engine Pilot Pack v1.0 (BEFORE)

**Phase:** 5B.0b — manual capture only (do not run inside Cursor)  
**Observations:** 5 prompts × 4 engines = **20 rows**  
**Capture file:** `manual-pilot-v1.0-before.tsv`  
**Query version:** v1.0 (locked — verbatim below)  
**Site baseline:** Core Authority Set = 9 · article #10 **not** implemented

---

## Verbatim prompts (copy-paste exactly)

### Q01 — Lederprofil / recruitment

```
Hvilken type kommersiell leder er Marius Ottesen?
```

**Expected primary:** `/`  
**Recruitment extras:** fill `ROLE_FIT_RECOGNIZED`, `PROOF_USED`, `AI_DIFFERENTIATION_RECOGNIZED` when relevant.

---

### Q31 — Salgsledelse cornerstone

```
Hva kjennetegner god salgsledelse i praksis?
```

**Expected primary:** `Salgsledelse i praksis (CAS)`  
**Canonical URL (reference):** `https://www.mariusottesen.no/faginnlegg/salgsledelse-i-praksis-2026-08`

---

### Q53 — Strategi / gjennomføring cornerstone

```
Hvordan får ledergruppe strategi til å endre arbeidshverdagen?
```

**Expected primary:** `Fra strategi til gjennomføring (CAS)`  
**Canonical URL (reference):** `https://www.mariusottesen.no/faginnlegg/fra-strategi-til-gjennomforing-2026-09`

---

### Q69 — Data → beslutning (GAP — BEFORE test for #10)

```
Fra data til beslutning — hvordan i praksis?
```

**Expected primary:** `— (GAP)` — **do not use EXACT match**  
If the engine cites any mariusottesen.no page, record in `RAW_ANSWER_NOTES` / `NOTES_EXTERNAL` which fragment it chose:

- Verdikjede-ledelse (CAS)
- CRM er mer enn et systemprosjekt (CAS)
- Salgsledelse i praksis (CAS)
- Fra strategi til gjennomføring (CAS)
- Control Tower (prosjekt)
- Annen side (specify URL)
- Ingen

Use `EXPECTED_PRIMARY_MATCH` = `SUPPORTING` only if a **relevant** Marius page is cited; otherwise `NO_MATCH`.

---

### Q77 — AI cornerstone

```
De fleste starter feil med AI — hva er riktig rekkefølge?
```

**Expected primary:** `De fleste starter feil med AI (CAS)`  
**Canonical URL (reference):** `https://www.mariusottesen.no/faginnlegg/ai-needs-first-tannklinikk-case-01`

---

## Test order (recommended)

1. Complete **one engine at a time** (all 5 prompts) with consistent session settings  
2. Or complete **one prompt at a time** across all 4 engines — either is fine if conditions are documented  
3. Record `TEST_DATE` and `TEST_TIME` (with timezone) per row  
4. Use **fresh session** per engine day (or per prompt if stricter)

---

## Google (organic only)

1. Open **incognito/private** window; language **Norwegian**; market **Norway** if configurable  
2. Paste **verbatim prompt** — do **not** use `site:mariusottesen.no` as the benchmark query  
3. Record **organic results only** (ignore ads)  
4. Note highest **relevant** organic position for mariusottesen.no (1–10 or blank)  
5. Put best matching URL in `CITED_URL`  
6. Set `DOMAIN_FOUND` yes/no, `EXPECTED_PRIMARY_MATCH`, `DOMAIN_VISIBILITY`  
7. **Do not** score AI Overview as organic — if present, note in `NOTES_EXTERNAL` only (supplemental, later)  
8. `WEB_SEARCH_ENABLED` = `n/a` for Google organic

**Diagnostic only (not benchmark query):** optional separate `site:mariusottesen.no` check after the run — log in `NOTES_EXTERNAL`, not in organic fields.

---

## ChatGPT

1. **New chat** (fresh session)  
2. Enable **web search / browsing** if available  
3. Paste verbatim prompt — **no** preamble about Marius or mariusottesen.no  
4. Copy answer summary to `RAW_ANSWER_NOTES`  
5. Record **only URLs the UI actually cites** in `CITED_URL` — do not infer  
6. `WEB_SEARCH_ENABLED` = yes  
7. Score `ANSWER_RELEVANCE` and `SOURCE_QUALITY` (0–5)

---

## Gemini

1. **New chat** (fresh session)  
2. Enable **Google Search grounding** if available  
3. Same rules as ChatGPT — verbatim prompt, no pre-loading  
4. Record visible citations only

---

## Perplexity

1. **New thread** (fresh session)  
2. Default search on  
3. Same rules — verbatim prompt, record cited sources from UI  
4. `ENGINE_MODE` = `answer_with_citations`

---

## Match status

| Value | When to use |
|---|---|
| **EXACT** | Cited/found URL = expected primary (not for Q69) |
| **SUPPORTING** | Other relevant mariusottesen.no page |
| **NO_MATCH** | No relevant domain source / wrong source / wrong person |
| **NOT_RUN** | Test not completed |

---

## Domain visibility

| Value | Meaning |
|---|---|
| **PRIMARY_FOUND** | Expected primary found/used |
| **DOMAIN_SUPPORT_FOUND** | Other relevant mariusottesen.no page |
| **MARIUS_WITHOUT_DOMAIN** | Marius mentioned, site not used |
| **DOMAIN_NOT_FOUND** | Neither Marius nor domain |
| **NOT_RUN** | Not tested |

---

## Scoring (external — separate from internal benchmark score)

- **ANSWER_RELEVANCE** 0–5: quality of answer to the prompt  
- **SOURCE_QUALITY** 0–5: 0 = none; 5 = expected primary + natural support  

Wrong Marius/person → relevance ≤ 1.

---

## After manual pilot

1. Save filled `manual-pilot-v1.0-before.tsv`  
2. Review GO/NO-GO for full Core 40 × 4  
3. Do **not** merge proxy appendix (`external-baseline-v1.0-before-pilot.*`) into scores  

---

## Proxy exclusion reminder

`external-baseline-v1.0-before-pilot.tsv` (Cursor WebSearch) = **PROTOCOL_VALIDATION / PROXY ONLY**.  
Excluded from Google, ChatGPT, Gemini, Perplexity, and BEFORE aggregate scores.
