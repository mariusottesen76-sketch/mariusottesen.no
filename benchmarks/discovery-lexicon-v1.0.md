# Discovery Lexicon v1.0 — External Discovery Benchmark

**Audit date:** 2026-09-02  
**Freeze:** 5C.3 (2026-09-02) — role fit, evidence strength, and discovery difficulty are annotated **separately** in prompt records.  
**Basis:** Production content `/`, `/cv`, `/erfaring`, `/resultater`, `/referanser`, `/consulting`, `/prosjekter`, faginnlegg (read-only).

## Classification key

| Class | Meaning |
|---|---|
| **PRIMARY FIT** | Explicit title, chip, or repeated documented experience |
| **ADJACENT FIT** | Strong semantic equivalent or clear transferable leadership scope |
| **STRETCH** | Partial overlap; discovery may fail without stronger site signals |
| **NON-MATCH** | Outside documented profile; boundary test |
| **WEBSITE GAP** | Person may fit role; site evidence too weak for discovery (not competence gap) |

---

## SALGSLEDELSE / SALES LEADERSHIP

| Term (NO/EN) | Class | Evidence |
|---|---|---|
| salgssjef | PRIMARY | Norengros, Nilfisk (`erfaringInnhold.ts`) |
| salgsleder | ADJACENT | Referanser (Ramo: «salgsleder»); not own job title |
| salgsdirektør | PRIMARY | `aktuell-for-roller.ts` chip |
| nasjonal salgssjef / National Sales Director | PRIMARY | Franzefoss title |
| Head of Sales | ADJACENT | Semantic → Nasjonal Salgssjef / Sales Manager |
| Sales Director | ADJACENT | Chip «Sales director»; historical Sales Manager |
| National Sales Manager | ADJACENT | Franzefoss EN title |
| VP Sales | STRETCH | Not documented; team scale 10–20 not 80+ |
| sales leader | ADJACENT | Profile + references |

## KOMMERSIELL LEDELSE / COMMERCIAL LEADERSHIP

| Term | Class | Evidence |
|---|---|---|
| kommersiell leder | PRIMARY | `profil.ts` hero + intro |
| kommersiell direktør | STRETCH | Not exact title on site |
| Commercial Director | ADJACENT | Semantic → commercial leader |
| CCO / Chief Commercial Officer | ADJACENT | Chip in `aktuell-for-roller.ts` |
| commercial leader | PRIMARY | EN profile |
| Chief Revenue Officer (large SaaS) | NON-MATCH | Scale/model mismatch |

## GENERAL MANAGEMENT

| Term | Class | Evidence |
|---|---|---|
| daglig leder SMB | ADJACENT | Chip only; no retail GM depth |
| administrerende leder | STRETCH | Not used on site |
| General Manager | ADJACENT | Semantic BUM / division P/L |
| Managing Director SMB | ADJACENT | Chip «Managing director SMB» |
| Country Manager | STRETCH | Nasjonal scope yes; title not used |
| Business Unit Manager | PRIMARY | Mundipharma |
| Business Unit Director | ADJACENT | Semantic BUM |

## STRATEGI / UTVIKLING / TRANSFORMATION

| Term | Class | Evidence |
|---|---|---|
| Director of Strategy | STRETCH | EMOM strategy; no Director title |
| Strategy Director | STRETCH | Education + execution, not strategy office |
| Director Strategy & Business Development | STRETCH | Partial via commercial + BI |
| Business Development Director | STRETCH | Commercial breadth; BD not titled |
| Commercial Excellence Director | STRETCH | Sales/process yes; «Excellence» not named |
| Sales Excellence | STRETCH | Consulting themes; not titled |
| Transformation Director | ADJACENT | Transformasjon chip + Franzefoss/Norengros |
| Commercial Transformation Director | ADJACENT | Chip «Kommersiell transformasjon» |
| Chief Growth Officer | STRETCH | Growth yes; CGO not documented |
| corporate strategy / M&A | NON-MATCH | Not documented |

## OPERATIONS / OTHER FUNCTIONS

| Term | Class | Evidence |
|---|---|---|
| COO (commercial + ops mandate) | ADJACENT | Salg+drift operasjonell erfaring |
| COO (production/manufacturing only) | NON-MATCH | Not documented |
| CMO / marketing-only | NON-MATCH | Salg/marked yes; not pure marketing |
| CTO / pure IT | NON-MATCH | AI practical yes; not CTO |
| Customer Director | STRETCH | KAM/customer yes; title not used |
| RevOps Director | STRETCH | CRM/KPI adjacent; RevOps not named |

## ADVISORY / ENGAGEMENT

| Term | Class | Evidence |
|---|---|---|
| kommersiell rådgiver / consultant | ADJACENT | MOC + `/consulting` |
| seniorrådgiver | STRETCH | Not titled |
| salgscoach / sales coach | ADJACENT | `consulting.ts` package |
| CRM-rådgiver | ADJACENT | Consulting CRM package |
| interim salgsdirektør | STRETCH | Not documented as offering |
| fractional CRO | NON-MATCH | Permanent roles stated on profile |
| executive search partner | NON-MATCH | Assessit advisory only |
| workshop / fasilitering ledergruppe | ADJACENT | `consulting-foredrag.ts` |

## INTERNATIONAL / TRAVEL / LANGUAGE

| Signal | Class | Evidence |
|---|---|---|
| Internasjonalt salg (Pelagia) | PLAUSIBLE WEAK | One line `erfaringInnhold others` |
| Internasjonale strategigrupper | ADJACENT | Mundipharma |
| Europa / USA / Asia | WEAK | Pelagia line only |
| **Reisevilje 1–2 dager/uke (jobbrelatert)** | **ACTUAL FIT SUPPORTED (5C.2)** | **Personlig avklart — SITE NOT DOCUMENTED** |
| Reisevilje 50 %+ / høy belastning | NOT DOCUMENTED | Boundary — ikke inferert fra 1–2 dager/uke |
| Norsk + engelsk profesjonelt | ADJACENT | Bilingual site; EN references; USA degree |
| International work environment | ADJACENT | Mundipharma, Christian EN ref |

### Travel fact (5C.2 — benchmark metadata only)

| Field | Value |
|---|---|
| ACTUAL FIT | SUPPORTED — ca. 1–2 dagers jobbrelatert reise per uke, nasjonal og/eller internasjonal når rollen tilsier det |
| WEBSITE EVIDENCE | NOT DOCUMENTED |
| WEBSITE GAP | YES |

**Do not** convert to «50 % travel» in prompts. Use approved wording «1–2 dagers jobbrelatert reise per uke» where relevant (D98).

## Role recalibration (5C.2)

| Role | Fit | Notes |
|---|---|---|
| Head of Sales | **HIGH** | Nasjonal Salgssjef + salgssjef + nasjonalt ansvar + 10–20 |
| Sales Director | **HIGH** | Chip + historikk |
| Commercial Director | **HIGH** | When role = commercial leadership + sales + P/L + team |
| CCO (B2B, not marketing-only) | **HIGH** | Chip; lower for marketing-only |
| BUM / BUD | **HIGH** | Mundipharma |
| Country Manager / GM | **MEDIUM** | When sales + commercial ops + P/L dominate |
| Director of Business Development | **MEDIUM** | GTM, kundeutvikling, implementering |
| Director of Strategy (execution) | **MEDIUM** | Not pure strategy office |
| Director of Strategy (M&A) | **LOW / NON-MATCH** | D66 |
| Transformation Director | **MEDIUM–HIGH** | Strategy→implementation |
| Commercial/Sales Excellence | **MEDIUM** | Via CRM, KPI, coaching — not STRETCH |

---

## Personal traits (third-party documented — `/referanser`)

| Trait | Source | Strength |
|---|---|---|
| Høy arbeidskapasitet | Ramo, Pål, Christian, Tina | STRONG |
| Engasjement / dedikasjon | Ramo, Agnese, Tina | STRONG |
| Motiverende | Thomas, Christian, Tina | STRONG |
| Utvikler medarbeidere | Thomas, Agnese, Christian, Tina | STRONG |
| Tydelig / klar leder | Pål, Ramo, Agnese | STRONG |
| Stiller krav | Ramo, Pål | STRONG |
| Robust under press | Pål, Ramo («stormen») | STRONG |
| Relasjonssterk / sosial | Christian, profil | STRONG |
| Teamorientert | Christian | STRONG |
| Strukturert / høy kvalitet | Christian, Magnus (student) | ADEQUATE |
| Tilpasningsdyktig | Christian | STRONG |
| Inspirerende | Agnese, Christian | STRONG |
| Ærlig / profesjonell | Christian | STRONG |
| Konkurranseinstinkt | Christian | ADEQUATE |
| Lytter til innspill | Thomas | ADEQUATE |
| Går foran | Ramo | STRONG |

**NOT third-party documented:** «hardtarbeidende» alone without role context; generic «best leader in Norway».
