/**
 * Master Search & LLM Benchmark v1.0 — LOCKED
 * Read-only benchmark registry. Do not edit without versioning (v1.1+).
 * External baseline fields are empty until Phase 5B.
 */

export type Ownership = "STRONG" | "ADEQUATE" | "FRAGMENTED" | "WEAK" | "GAP";
export type GapPriority =
  | "MUST_OWN"
  | "SHOULD_OWN"
  | "OPTIONAL"
  | "INTENTIONAL_NO_OWNER"
  | "N_A";
export type BenchmarkTier = "CORE" | "EXTENDED";
export type IntentType = "INFO" | "REC" | "COM" | "AUTH" | "INFO+REC" | "INFO+COM" | "AUTH+REC" | "AUTH+COM" | "REC+COM";

export type BenchmarkPrompt = {
  id: string;
  question: string;
  cluster: string;
  tier: BenchmarkTier;
  audience: string;
  intent: IntentType;
  primary: string;
  support1: string;
  support2: string;
  ownership: Ownership;
  competing: string;
  recruit: boolean;
  commercial: boolean;
  problemLanguage: boolean;
  llmPotential: "H" | "M" | "L";
  gapFlag: boolean;
  gapPriority: GapPriority;
  score: number;
  notes: string;
  external: {
    engine: string;
    testDate: string;
    queryVersion: string;
    domainFound: string;
    mariusMentioned: string;
    citedUrl: string;
    expectedPrimaryMatch: string;
    searchPositionIfApplicable: string;
    answerRelevance: string;
    sourceQuality: string;
    notesExternal: string;
  };
};

const emptyExternal = {
  engine: "",
  testDate: "",
  queryVersion: "",
  domainFound: "",
  mariusMentioned: "",
  citedUrl: "",
  expectedPrimaryMatch: "",
  searchPositionIfApplicable: "",
  answerRelevance: "",
  sourceQuality: "",
  notesExternal: "",
};

export const BENCHMARK_VERSION = "1.0" as const;
export const BENCHMARK_LOCKED = "2026-09-01" as const;

export const CORE_40_IDS: readonly string[] = [
  "Q01", "Q02", "Q06", "Q09",
  "Q11", "Q12", "Q13", "Q14",
  "Q23", "Q26", "Q28", "Q29",
  "Q31", "Q32", "Q34", "Q36", "Q41",
  "Q43", "Q44", "Q48", "Q50",
  "Q53", "Q54", "Q55", "Q56", "Q62",
  "Q65", "Q66", "Q69", "Q70", "Q71",
  "Q77", "Q78", "Q79", "Q80", "Q85",
  "Q91", "Q95",
  "Q97", "Q98",
] as const;

export const BENCHMARK_PROMPTS: BenchmarkPrompt[] = [
  {
    id: "Q01", question: "Hvilken type kommersiell leder er Marius Ottesen?", cluster: "1 Lederprofil / role fit", tier: "CORE",
    audience: "recruiter/headhunter", intent: "REC", primary: "/", support1: "/erfaring", support2: "/cv",
    ownership: "STRONG", competing: "/cv (rolleliste)", recruit: true, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Profil eier posisjonering tydelig.",
    external: emptyExternal,
  },
  {
    id: "Q02", question: "Passer Marius til kompleks B2B med salg, drift og transformasjon?", cluster: "1 Lederprofil / role fit", tier: "CORE",
    audience: "CEO/daglig leder", intent: "REC+INFO", primary: "/", support1: "/erfaring", support2: "/resultater",
    ownership: "STRONG", competing: "/erfaring (Franzefoss-case)", recruit: true, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Operasjonelt som tillegg, ikke hovedidentitet.",
    external: emptyExternal,
  },
  {
    id: "Q03", question: "Hva er Marius' lederstil i praksis?", cluster: "1 Lederprofil / role fit", tier: "EXTENDED",
    audience: "recruiter/headhunter", intent: "REC", primary: "/", support1: "/referanser", support2: "Psykologisk trygghet (CAS)",
    ownership: "FRAGMENTED", competing: "/referanser vs CAS-artikler", recruit: true, commercial: false, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Lederstil spredt over profil, referanser og 2–3 artikler.",
    external: emptyExternal,
  },
  {
    id: "Q04", question: "Hvor skaper Marius mest verdi som leder?", cluster: "1 Lederprofil / role fit", tier: "EXTENDED",
    audience: "CEO/styremedlem", intent: "COM+INFO", primary: "/", support1: "/consulting", support2: "/resultater",
    ownership: "ADEQUATE", competing: "/consulting (tilbud overlapper)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Verdiskaping tydelig på profil.",
    external: emptyExternal,
  },
  {
    id: "Q05", question: "Er Marius mer strategisk eller operativ som leder?", cluster: "1 Lederprofil / role fit", tier: "EXTENDED",
    audience: "recruiter/headhunter", intent: "REC", primary: "/erfaring", support1: "/", support2: "Fra strategi til gjennomføring (CAS)",
    ownership: "FRAGMENTED", competing: "/ vs /erfaring", recruit: true, commercial: false, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Balanse ikke samlet på én side.",
    external: emptyExternal,
  },
  {
    id: "Q06", question: "Kombinerer Marius kommersiell ledelse med praktisk AI?", cluster: "1 Lederprofil / role fit", tier: "CORE",
    audience: "AI-/digitalleder", intent: "AUTH+REC", primary: "/", support1: "/prosjekter", support2: "De fleste starter feil med AI (CAS)",
    ownership: "STRONG", competing: "/prosjekter (portefølje)", recruit: false, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Unikt differensiert på forsiden.",
    external: emptyExternal,
  },
  {
    id: "Q07", question: "Hvilke bransjer har Marius erfaring fra?", cluster: "1 Lederprofil / role fit", tier: "EXTENDED",
    audience: "recruiter/headhunter", intent: "REC", primary: "/erfaring", support1: "/cv", support2: "/resultater",
    ownership: "ADEQUATE", competing: "/cv (bransjeliste)", recruit: true, commercial: false, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Erfaring god; ikke samlet bransjekart.",
    external: emptyExternal,
  },
  {
    id: "Q08", question: "Hva skiller Marius fra en klassisk salgssjef?", cluster: "1 Lederprofil / role fit", tier: "EXTENDED",
    audience: "kommersiell leder", intent: "INFO+COM", primary: "/", support1: "Salgsledelse i praksis (CAS)", support2: "Verdikjede-ledelse (CAS)",
    ownership: "FRAGMENTED", competing: "Salgsledelse-artikkel", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Differensiering finnes, ikke dedikert side.",
    external: emptyExternal,
  },
  {
    id: "Q09", question: "Er Marius aktuell som fast leder, ikke bare rådgiver?", cluster: "1 Lederprofil / role fit", tier: "CORE",
    audience: "recruiter/headhunter", intent: "REC", primary: "/", support1: "/cv", support2: "/referanser",
    ownership: "STRONG", competing: "/consulting (tilbud)", recruit: true, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Fast leder eksplisitt på profil.",
    external: emptyExternal,
  },
  {
    id: "Q10", question: "Hvordan beskriver Marius seg selv som lederprofil?", cluster: "1 Lederprofil / role fit", tier: "EXTENDED",
    audience: "researcher", intent: "INFO", primary: "/referanser", support1: "/", support2: "Psykologisk trygghet (CAS)",
    ownership: "ADEQUATE", competing: "/ (egenbeskrivelse)", recruit: false, commercial: false, problemLanguage: false, llmPotential: "L",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Referanser styrker; egen stemme primært på /.",
    external: emptyExternal,
  },
  {
    id: "Q11", question: "Hvilke lederroller er Marius aktuell for?", cluster: "2 Rekruttering / C-level / P&L / erfaring", tier: "CORE",
    audience: "recruiter/headhunter", intent: "REC", primary: "/", support1: "/cv", support2: "aktuell-for-roller (data)",
    ownership: "STRONG", competing: "/cv", recruit: true, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Rolleliste tydelig.",
    external: emptyExternal,
  },
  {
    id: "Q12", question: "Kan Marius være aktuell som CCO eller salgsdirektør?", cluster: "2 Rekruttering / C-level / P&L / erfaring", tier: "CORE",
    audience: "recruiter/headhunter", intent: "REC", primary: "/cv", support1: "/", support2: "/resultater",
    ownership: "STRONG", competing: "/", recruit: true, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "CV eier spesifikke titler.",
    external: emptyExternal,
  },
  {
    id: "Q13", question: "Hvilken erfaring har Marius med P/L og personalansvar?", cluster: "2 Rekruttering / C-level / P&L / erfaring", tier: "CORE",
    audience: "recruiter/headhunter", intent: "REC", primary: "/erfaring", support1: "/resultater", support2: "/cv",
    ownership: "STRONG", competing: "/cv (kortversjon)", recruit: true, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Franzefoss + MOC dokumentert.",
    external: emptyExternal,
  },
  {
    id: "Q14", question: "Hvilke resultater har Marius dokumentert?", cluster: "2 Rekruttering / C-level / P&L / erfaring", tier: "CORE",
    audience: "recruiter/styremedlem", intent: "REC", primary: "/resultater", support1: "/erfaring", support2: "/referanser",
    ownership: "STRONG", competing: "/ (proof points)", recruit: true, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Sterk resultatside.",
    external: emptyExternal,
  },
  {
    id: "Q15", question: "Hvorfor bør en arbeidsgiver vurdere Marius?", cluster: "2 Rekruttering / C-level / P&L / erfaring", tier: "EXTENDED",
    audience: "recruiter/headhunter", intent: "REC", primary: "/cv", support1: "/", support2: "/resultater",
    ownership: "ADEQUATE", competing: "/ vs /cv", recruit: true, commercial: false, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Åpen søknad-logikk; ikke dedikert why-hire-side.",
    external: emptyExternal,
  },
  {
    id: "Q16", question: "Hva sier referanser om Marius som leder?", cluster: "2 Rekruttering / C-level / P&L / erfaring", tier: "EXTENDED",
    audience: "recruiter/headhunter", intent: "REC", primary: "/referanser", support1: "/", support2: "/resultater",
    ownership: "ADEQUATE", competing: "/ (testimonials)", recruit: true, commercial: false, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Dedikert referanse-side.",
    external: emptyExternal,
  },
  {
    id: "Q17", question: "Passer Marius til daglig leder i SMB?", cluster: "2 Rekruttering / C-level / P&L / erfaring", tier: "EXTENDED",
    audience: "SMB-eier/recruiter", intent: "REC", primary: "/", support1: "/erfaring", support2: "/consulting",
    ownership: "FRAGMENTED", competing: "/consulting (SMB-tilbud)", recruit: true, commercial: false, problemLanguage: false, llmPotential: "L",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "SMB-fit indirekte.",
    external: emptyExternal,
  },
  {
    id: "Q18", question: "Hvilken senioritet og bredde har Marius?", cluster: "2 Rekruttering / C-level / P&L / erfaring", tier: "EXTENDED",
    audience: "recruiter/headhunter", intent: "REC", primary: "/cv", support1: "/erfaring", support2: "/",
    ownership: "ADEQUATE", competing: "/ (ingress)", recruit: true, commercial: false, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "CV best; profil supplerer.",
    external: emptyExternal,
  },
  {
    id: "Q19", question: "Hvilke seniorlederroller passer Marius best til – og hvilke typer roller er mindre relevante?", cluster: "2 Rekruttering / C-level / P&L / erfaring", tier: "EXTENDED",
    audience: "recruiter/headhunter", intent: "REC", primary: "/", support1: "/cv", support2: "aktuell-for-roller (data)",
    ownership: "ADEQUATE", competing: "/cv (rolleliste)", recruit: true, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "5A.1: erstattet ladet Q19. Rollefit og avgrensning på / og /cv.",
    external: emptyExternal,
  },
  {
    id: "Q20", question: "Hvem i Norge kombinerer kommersiell ledererfaring med praktisk AI?", cluster: "2 Rekruttering / C-level / P&L / erfaring", tier: "EXTENDED",
    audience: "recruiter/styremedlem", intent: "AUTH+REC", primary: "/", support1: "/prosjekter", support2: "De fleste starter feil med AI (CAS)",
    ownership: "STRONG", competing: "/prosjekter", recruit: true, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Autoritets-intent for rekruttering.",
    external: emptyExternal,
  },
  {
    id: "Q21", question: "Hva kjennetegner god kommersiell ledelse i vekst?", cluster: "3 Kommersiell ledelse / vekst", tier: "EXTENDED",
    audience: "kommersiell leder", intent: "INFO", primary: "Salgsledelse i praksis (CAS)", support1: "Verdikjede-ledelse (CAS)", support2: "/resultater",
    ownership: "ADEQUATE", competing: "Salgsledelse (salgsfokus)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Kommersiell bredde deles med salgs-cornerstone.",
    external: emptyExternal,
  },
  {
    id: "Q22", question: "Salg og drift i ulike enheter drar hver sin vei — hvordan skaper vi felles kommersiell retning?", cluster: "3 Kommersiell ledelse / vekst", tier: "EXTENDED",
    audience: "CEO/kommersiell leder", intent: "INFO+COM", primary: "/erfaring", support1: "Verdikjede-ledelse (CAS)", support2: "Fra strategi til gjennomføring (CAS)",
    ownership: "FRAGMENTED", competing: "/erfaring vs CAS", recruit: false, commercial: true, problemLanguage: true, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "5A.1: problem-språk. Case-basert på /erfaring.",
    external: emptyExternal,
  },
  {
    id: "Q23", question: "Hvordan koble salg, drift og margin?", cluster: "3 Kommersiell ledelse / vekst", tier: "CORE",
    audience: "kommersiell leder", intent: "INFO+COM", primary: "/resultater", support1: "/erfaring", support2: "Verdikjede-ledelse (CAS)",
    ownership: "STRONG", competing: "/erfaring", recruit: false, commercial: true, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Resultater eier margin/salg/drift.",
    external: emptyExternal,
  },
  {
    id: "Q24", question: "Hva er verdilekkasjer i salg og kundedialog?", cluster: "3 Kommersiell ledelse / vekst", tier: "EXTENDED",
    audience: "kommersiell leder", intent: "COM", primary: "/consulting", support1: "Salgsledelse i praksis (CAS)", support2: "/resultater",
    ownership: "ADEQUATE", competing: "Salgsledelse (delvis)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Consulting nevner; ikke dybdeartikkel.",
    external: emptyExternal,
  },
  {
    id: "Q25", question: "Vi har selgere med lang erfaring, men salget er fortsatt personavhengig og uforutsigbart — hva gjør vi?", cluster: "3 Kommersiell ledelse / vekst", tier: "EXTENDED",
    audience: "SMB-eier/kommersiell leder", intent: "COM+REC", primary: "/erfaring", support1: "Salgsledelse i praksis (CAS)", support2: "/consulting",
    ownership: "FRAGMENTED", competing: "/consulting vs /erfaring", recruit: true, commercial: true, problemLanguage: true, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "5A.1: problem-språk.",
    external: emptyExternal,
  },
  {
    id: "Q26", question: "Hvordan drive kommersiell transformasjon med målbar effekt?", cluster: "3 Kommersiell ledelse / vekst", tier: "CORE",
    audience: "transformasjonsleder", intent: "INFO+COM", primary: "Fra strategi til gjennomføring (CAS)", support1: "/resultater", support2: "/consulting",
    ownership: "ADEQUATE", competing: "/consulting", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Strategi-artikkel + resultater som proof.",
    external: emptyExternal,
  },
  {
    id: "Q27", question: "Vi vokser på key accounts, men marginen faller — hvordan styrer vi det?", cluster: "3 Kommersiell ledelse / vekst", tier: "EXTENDED",
    audience: "kommersiell leder", intent: "COM", primary: "/resultater", support1: "Salgsledelse i praksis (CAS)", support2: "/consulting",
    ownership: "FRAGMENTED", competing: "/resultater vs consulting", recruit: false, commercial: true, problemLanguage: true, llmPotential: "L",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "5A.1: problem-språk.",
    external: emptyExternal,
  },
  {
    id: "Q28", question: "Hvordan lede uten å eie hele verdikjeden?", cluster: "3 Kommersiell ledelse / vekst", tier: "CORE",
    audience: "kommersiell leder", intent: "INFO", primary: "Verdikjede-ledelse (CAS)", support1: "/erfaring", support2: "Control Tower (prosjekt)",
    ownership: "STRONG", competing: "Control Tower prosjekt", recruit: false, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Cornerstone eier intent.",
    external: emptyExternal,
  },
  {
    id: "Q29", question: "Vi jager omsetning, men margin og kundeportefølje utvikler seg feil vei — hva gjør vi?", cluster: "3 Kommersiell ledelse / vekst", tier: "CORE",
    audience: "styre/kommersiell leder", intent: "INFO", primary: "— (GAP)", support1: "/resultater", support2: "Salgsledelse i praksis (CAS)",
    ownership: "WEAK", competing: "/resultater (omsetning)", recruit: false, commercial: true, problemLanguage: true, llmPotential: "L",
    gapFlag: true, gapPriority: "OPTIONAL", score: 2, notes: "5A.1: problem-språk. Porteføljestrategi ikke sentral posisjonering.",
    external: emptyExternal,
  },
  {
    id: "Q30", question: "Vi venter på henvendelser i stedet for å jobbe proaktivt med kunder — hvordan snur vi det?", cluster: "3 Kommersiell ledelse / vekst", tier: "EXTENDED",
    audience: "kommersiell leder", intent: "INFO", primary: "/erfaring", support1: "Salgsledelse i praksis (CAS)", support2: "/consulting",
    ownership: "ADEQUATE", competing: "Salgsledelse", recruit: false, commercial: true, problemLanguage: true, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "5A.1: problem-språk.",
    external: emptyExternal,
  },
  {
    id: "Q31", question: "Hva kjennetegner god salgsledelse i praksis?", cluster: "4 Salgsledelse / coaching / performance", tier: "CORE",
    audience: "salgsleder", intent: "INFO", primary: "Salgsledelse i praksis (CAS)", support1: "/erfaring", support2: "/resultater",
    ownership: "STRONG", competing: "/erfaring", recruit: false, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 5, notes: "Klarest eierskap på nettstedet.",
    external: emptyExternal,
  },
  {
    id: "Q32", question: "Hvordan bruke KPI uten aktivitetskontroll?", cluster: "4 Salgsledelse / coaching / performance", tier: "CORE",
    audience: "salgsleder", intent: "INFO", primary: "Salgsledelse i praksis (CAS)", support1: "Trykk-prestasjon (S)", support2: "/consulting",
    ownership: "STRONG", competing: "/consulting", recruit: false, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Kjerneintent i cornerstone.",
    external: emptyExternal,
  },
  {
    id: "Q33", question: "Hvordan gå fra pipeline-styring til coaching?", cluster: "4 Salgsledelse / coaching / performance", tier: "EXTENDED",
    audience: "salgsleder", intent: "INFO+COM", primary: "Salgsledelse i praksis (CAS)", support1: "/consulting", support2: "/psc (prosjekt)",
    ownership: "STRONG", competing: "/psc", recruit: false, commercial: true, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Artikkel + consulting + PSC.",
    external: emptyExternal,
  },
  {
    id: "Q34", question: "Salgsledere bruker mye tid på pipeline, selgerne utvikler seg lite — hva gjør vi?", cluster: "4 Salgsledelse / coaching / performance", tier: "CORE",
    audience: "salgsleder", intent: "COM+INFO", primary: "Salgsledelse i praksis (CAS)", support1: "/consulting", support2: "/erfaring",
    ownership: "ADEQUATE", competing: "/consulting", recruit: false, commercial: true, problemLanguage: true, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Problem-språk; svar i artikkel.",
    external: emptyExternal,
  },
  {
    id: "Q35", question: "Hvilken erfaring har Marius med salgsledelse?", cluster: "4 Salgsledelse / coaching / performance", tier: "EXTENDED",
    audience: "recruiter/headhunter", intent: "REC", primary: "/erfaring", support1: "/resultater", support2: "Salgsledelse i praksis (CAS)",
    ownership: "STRONG", competing: "Salgsledelse vs /erfaring", recruit: true, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Erfaring = biografi; artikkel = metode.",
    external: emptyExternal,
  },
  {
    id: "Q36", question: "Hvordan prioritere kunder og pipeline riktig?", cluster: "4 Salgsledelse / coaching / performance", tier: "CORE",
    audience: "salgsleder", intent: "INFO", primary: "Salgsledelse i praksis (CAS)", support1: "Verdikjede-ledelse (CAS)", support2: "CRM (CAS)",
    ownership: "FRAGMENTED", competing: "Verdikjede (prioritering)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Delt med data-cluster.",
    external: emptyExternal,
  },
  {
    id: "Q37", question: "Hva tilbyr Marius innen salgscoaching?", cluster: "4 Salgsledelse / coaching / performance", tier: "EXTENDED",
    audience: "salgsleder/kunde", intent: "COM", primary: "/consulting", support1: "Salgsledelse i praksis (CAS)", support2: "/psc (prosjekt)",
    ownership: "STRONG", competing: "Salgsledelse (teori)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Consulting eier tilbud.",
    external: emptyExternal,
  },
  {
    id: "Q38", question: "Hvordan kombinere prestasjon og trygghet i salgsteam?", cluster: "4 Salgsledelse / coaching / performance", tier: "EXTENDED",
    audience: "salgsleder/HR-leder", intent: "INFO", primary: "Psykologisk trygghet (CAS)", support1: "Salgsledelse i praksis (CAS)", support2: "Trykk-prestasjon (S)",
    ownership: "ADEQUATE", competing: "Psykologisk trygghet vs Salgsledelse", recruit: false, commercial: false, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "To cornerstones supplerer.",
    external: emptyExternal,
  },
  {
    id: "Q39", question: "Mer trykk gir ikke varige resultater — hva gjør en salgsleder?", cluster: "4 Salgsledelse / coaching / performance", tier: "EXTENDED",
    audience: "salgsleder", intent: "INFO+COM", primary: "Trykk-prestasjon (S)", support1: "Salgsledelse i praksis (CAS)", support2: "Psykologisk trygghet (CAS)",
    ownership: "FRAGMENTED", competing: "Support vs cornerstone", recruit: false, commercial: true, problemLanguage: true, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Problem-språk; support-artikkel primary.",
    external: emptyExternal,
  },
  {
    id: "Q40", question: "Hvordan trene selgere på kundemøter?", cluster: "4 Salgsledelse / coaching / performance", tier: "EXTENDED",
    audience: "salgsleder", intent: "COM", primary: "/psc (prosjekt)", support1: "/consulting", support2: "Salgsledelse i praksis (CAS)",
    ownership: "ADEQUATE", competing: "Salgsledelse", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "PSC eier metode.",
    external: emptyExternal,
  },
  {
    id: "Q41", question: "Forecast stemmer ikke med virkeligheten — hva mangler?", cluster: "4 Salgsledelse / coaching / performance", tier: "CORE",
    audience: "salgsleder", intent: "INFO", primary: "Salgsledelse i praksis (CAS)", support1: "CRM (CAS)", support2: "Verdikjede-ledelse (CAS)",
    ownership: "FRAGMENTED", competing: "CRM vs Salgsledelse", recruit: false, commercial: true, problemLanguage: true, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Problem-språk.",
    external: emptyExternal,
  },
  {
    id: "Q42", question: "Datadrevet salgsledelse i praksis — hva betyr det?", cluster: "4 Salgsledelse / coaching / performance", tier: "EXTENDED",
    audience: "salgsleder", intent: "INFO", primary: "Salgsledelse i praksis (CAS)", support1: "CRM (CAS)", support2: "Verdikjede-ledelse (CAS)",
    ownership: "STRONG", competing: "Bedre-data (S)", recruit: false, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Kobler til data-cluster.",
    external: emptyExternal,
  },
  {
    id: "Q43", question: "Hva er psykologisk trygghet med høye krav?", cluster: "5 Ledelse / team / kultur / medarbeiderutvikling", tier: "CORE",
    audience: "HR/salgsleder", intent: "INFO", primary: "Psykologisk trygghet (CAS)", support1: "Kjeft (S)", support2: "Du arver laget (CAS)",
    ownership: "STRONG", competing: "Kjeft (S)", recruit: false, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Cornerstone eier unikt.",
    external: emptyExternal,
  },
  {
    id: "Q44", question: "Du arver et team — hva er lederens ansvar?", cluster: "5 Ledelse / team / kultur / medarbeiderutvikling", tier: "CORE",
    audience: "kommersiell leder", intent: "INFO", primary: "Du arver laget (CAS)", support1: "Psykologisk trygghet (CAS)", support2: "/erfaring",
    ownership: "STRONG", competing: "/erfaring", recruit: false, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Cornerstone.",
    external: emptyExternal,
  },
  {
    id: "Q45", question: "Hvordan bygge teamutvikling og samhandling?", cluster: "5 Ledelse / team / kultur / medarbeiderutvikling", tier: "EXTENDED",
    audience: "HR/kommersiell leder", intent: "COM", primary: "/consulting", support1: "Du arver laget (CAS)", support2: "Psykologisk trygghet (CAS)",
    ownership: "ADEQUATE", competing: "/consulting vs CAS", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Consulting + artikler.",
    external: emptyExternal,
  },
  {
    id: "Q46", question: "Er det greit å være tydelig/kritisk som leder?", cluster: "5 Ledelse / team / kultur / medarbeiderutvikling", tier: "EXTENDED",
    audience: "kommersiell leder", intent: "INFO", primary: "Kjeft (S)", support1: "Psykologisk trygghet (CAS)", support2: "/referanser",
    ownership: "FRAGMENTED", competing: "Kjeft vs Psykologisk trygghet", recruit: false, commercial: false, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Support eier.",
    external: emptyExternal,
  },
  {
    id: "Q47", question: "Hvordan skape prestasjonskultur uten å brenne ut teamet?", cluster: "5 Ledelse / team / kultur / medarbeiderutvikling", tier: "EXTENDED",
    audience: "HR/kommersiell leder", intent: "INFO", primary: "Psykologisk trygghet (CAS)", support1: "Trykk-prestasjon (S)", support2: "Du arver laget (CAS)",
    ownership: "ADEQUATE", competing: "Trykk-prestasjon (S)", recruit: false, commercial: false, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Cornerstone + support.",
    external: emptyExternal,
  },
  {
    id: "Q48", question: "Vi er uenige i ledergruppen og beslutningene stopper opp — hva gjør vi?", cluster: "5 Ledelse / team / kultur / medarbeiderutvikling", tier: "CORE",
    audience: "CEO/transformasjonsleder", intent: "INFO", primary: "— (GAP)", support1: "Fra strategi til gjennomføring (CAS)", support2: "Psykologisk trygghet (CAS)",
    ownership: "WEAK", competing: "—", recruit: false, commercial: false, problemLanguage: true, llmPotential: "L",
    gapFlag: true, gapPriority: "OPTIONAL", score: 2, notes: "5A.1: problem-språk. Ledergruppekonflikt ikke sentral posisjonering.",
    external: emptyExternal,
  },
  {
    id: "Q49", question: "Hvordan utvikle medarbeidere i kunnskapsarbeid?", cluster: "5 Ledelse / team / kultur / medarbeiderutvikling", tier: "EXTENDED",
    audience: "HR/kommersiell leder", intent: "INFO", primary: "Du arver laget (CAS)", support1: "Salgsledelse i praksis (CAS)", support2: "/consulting",
    ownership: "FRAGMENTED", competing: "Salgsledelse (coaching)", recruit: false, commercial: false, problemLanguage: false, llmPotential: "L",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Teamutvikling delvis.",
    external: emptyExternal,
  },
  {
    id: "Q50", question: "Teamet har friksjon i prioritering — hva gjør lederen?", cluster: "5 Ledelse / team / kultur / medarbeiderutvikling", tier: "CORE",
    audience: "kommersiell leder", intent: "COM+INFO", primary: "/flowsignal (prosjekt)", support1: "Verdikjede-ledelse (CAS)", support2: "Fra strategi til gjennomføring (CAS)",
    ownership: "ADEQUATE", competing: "Verdikjede vs FlowSignal", recruit: false, commercial: true, problemLanguage: true, llmPotential: "L",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Problem-språk.",
    external: emptyExternal,
  },
  {
    id: "Q51", question: "Hvordan bygge kultur i kommersielt miljø?", cluster: "5 Ledelse / team / kultur / medarbeiderutvikling", tier: "EXTENDED",
    audience: "kommersiell leder", intent: "INFO", primary: "Verdier-kultur (S)", support1: "Psykologisk trygghet (CAS)", support2: "/erfaring",
    ownership: "FRAGMENTED", competing: "Verdier-kultur vs trygghet", recruit: false, commercial: false, problemLanguage: false, llmPotential: "L",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Support-artikkel.",
    external: emptyExternal,
  },
  {
    id: "Q52", question: "Hvordan motiverer Marius team til gjennomføring?", cluster: "5 Ledelse / team / kultur / medarbeiderutvikling", tier: "EXTENDED",
    audience: "recruiter/headhunter", intent: "REC", primary: "/referanser", support1: "/erfaring", support2: "Fra strategi til gjennomføring (CAS)",
    ownership: "ADEQUATE", competing: "/referanser vs /erfaring", recruit: true, commercial: false, problemLanguage: false, llmPotential: "L",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Rekruttering via referanser.",
    external: emptyExternal,
  },
  {
    id: "Q53", question: "Hvordan får ledergruppe strategi til å endre arbeidshverdagen?", cluster: "6 Strategi / endring / transformasjon / gjennomføring", tier: "CORE",
    audience: "CEO/transformasjonsleder", intent: "INFO", primary: "Fra strategi til gjennomføring (CAS)", support1: "Alle enige (S)", support2: "Folk motsetter seg sjelden endring (CAS)",
    ownership: "STRONG", competing: "Alle enige (S)", recruit: false, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 5, notes: "Sterkest strategi-eierskap.",
    external: emptyExternal,
  },
  {
    id: "Q54", question: "Alle er enige om retningen, ingen gjør noe — hvorfor?", cluster: "6 Strategi / endring / transformasjon / gjennomføring", tier: "CORE",
    audience: "transformasjonsleder", intent: "INFO", primary: "Alle enige (S)", support1: "Fra strategi til gjennomføring (CAS)", support2: "Folk motsetter seg sjelden endring (CAS)",
    ownership: "STRONG", competing: "Fra strategi (CAS)", recruit: false, commercial: false, problemLanguage: true, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Problem-språk; support eier FAQ-intent.",
    external: emptyExternal,
  },
  {
    id: "Q55", question: "Hvorfor møter transformasjoner motstand når folk er enige?", cluster: "6 Strategi / endring / transformasjon / gjennomføring", tier: "CORE",
    audience: "transformasjonsleder", intent: "INFO", primary: "Folk motsetter seg sjelden endring (CAS)", support1: "Fra strategi til gjennomføring (CAS)", support2: "Alle enige (S)",
    ownership: "STRONG", competing: "Fra strategi vs tillit-endring", recruit: false, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Cornerstone endring.",
    external: emptyExternal,
  },
  {
    id: "Q56", question: "Vi har strategi alle støtter, men organisasjonen fortsetter som før.", cluster: "6 Strategi / endring / transformasjon / gjennomføring", tier: "CORE",
    audience: "CEO", intent: "INFO+COM", primary: "Fra strategi til gjennomføring (CAS)", support1: "Alle enige (S)", support2: "/consulting",
    ownership: "STRONG", competing: "Alle enige (S)", recruit: false, commercial: true, problemLanguage: true, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Problem-språk; cornerstone matcher.",
    external: emptyExternal,
  },
  {
    id: "Q57", question: "Business case ser bra ut i Excel, gevinst lekker i drift.", cluster: "6 Strategi / endring / transformasjon / gjennomføring", tier: "EXTENDED",
    audience: "transformasjonsleder", intent: "INFO", primary: "Grønne Exceltall (S)", support1: "Fra strategi til gjennomføring (CAS)", support2: "/resultater",
    ownership: "ADEQUATE", competing: "Fra strategi (CAS)", recruit: false, commercial: false, problemLanguage: true, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Problem-språk; support primary.",
    external: emptyExternal,
  },
  {
    id: "Q58", question: "Hvordan bygge lederrytme og gjennomføring?", cluster: "6 Strategi / endring / transformasjon / gjennomføring", tier: "EXTENDED",
    audience: "kommersiell leder", intent: "INFO", primary: "Fra strategi til gjennomføring (CAS)", support1: "/consulting", support2: "/erfaring",
    ownership: "ADEQUATE", competing: "/consulting", recruit: false, commercial: false, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "I cornerstone.",
    external: emptyExternal,
  },
  {
    id: "Q59", question: "Hvordan kommunisere endring slik at folk faktisk endrer adferd?", cluster: "6 Strategi / endring / transformasjon / gjennomføring", tier: "EXTENDED",
    audience: "HR/transformasjonsleder", intent: "INFO", primary: "Folk motsetter seg sjelden endring (CAS)", support1: "AI-mottaker (S)", support2: "Fra strategi til gjennomføring (CAS)",
    ownership: "FRAGMENTED", competing: "Folk motsetter vs AI-mottaker", recruit: false, commercial: false, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Flere support-artikler.",
    external: emptyExternal,
  },
  {
    id: "Q60", question: "Forskjell på å sende budskap og skape mottaker?", cluster: "6 Strategi / endring / transformasjon / gjennomføring", tier: "EXTENDED",
    audience: "transformasjonsleder", intent: "INFO", primary: "AI-mottaker (S)", support1: "Folk motsetter seg sjelden endring (CAS)", support2: "Fra strategi til gjennomføring (CAS)",
    ownership: "ADEQUATE", competing: "Folk motsetter seg (CAS)", recruit: false, commercial: false, problemLanguage: false, llmPotential: "L",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Nisje-intent.",
    external: emptyExternal,
  },
  {
    id: "Q61", question: "Hvilken erfaring har Marius med transformasjon?", cluster: "6 Strategi / endring / transformasjon / gjennomføring", tier: "EXTENDED",
    audience: "recruiter/headhunter", intent: "REC", primary: "/erfaring", support1: "/resultater", support2: "Fra strategi til gjennomføring (CAS)",
    ownership: "FRAGMENTED", competing: "/ vs CAS", recruit: true, commercial: false, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Erfaring + artikler.",
    external: emptyExternal,
  },
  {
    id: "Q62", question: "Ledergruppen har for mange initiativer og lite faktisk fremdrift — hvordan prioriterer vi?", cluster: "6 Strategi / endring / transformasjon / gjennomføring", tier: "CORE",
    audience: "CEO/styremedlem", intent: "INFO", primary: "— (GAP)", support1: "Fra strategi til gjennomføring (CAS)", support2: "Verdikjede-ledelse (CAS)",
    ownership: "WEAK", competing: "Fra strategi (delvis)", recruit: false, commercial: false, problemLanguage: true, llmPotential: "L",
    gapFlag: true, gapPriority: "SHOULD_OWN", score: 2, notes: "5A.1: problem-språk. Relatert til data→prioritering.",
    external: emptyExternal,
  },
  {
    id: "Q63", question: "Strategien er vedtatt og KPI-ene er satt, men ansvar og handling henger ikke sammen — hva gjør vi?", cluster: "6 Strategi / endring / transformasjon / gjennomføring", tier: "EXTENDED",
    audience: "kommersiell leder", intent: "INFO+COM", primary: "Fra strategi til gjennomføring (CAS)", support1: "Salgsledelse i praksis (CAS)", support2: "Verdikjede-ledelse (CAS)",
    ownership: "FRAGMENTED", competing: "Salgsledelse vs strategi", recruit: false, commercial: true, problemLanguage: true, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "5A.1: problem-språk.",
    external: emptyExternal,
  },
  {
    id: "Q64", question: "Implementeringsintensjoner i praksis for ledere?", cluster: "6 Strategi / endring / transformasjon / gjennomføring", tier: "EXTENDED",
    audience: "transformasjonsleder", intent: "INFO", primary: "Alle enige (S)", support1: "Fra strategi til gjennomføring (CAS)", support2: "Folk motsetter seg sjelden endring (CAS)",
    ownership: "ADEQUATE", competing: "Fra strategi (CAS)", recruit: false, commercial: false, problemLanguage: false, llmPotential: "L",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Akademisk formulering.",
    external: emptyExternal,
  },
  {
    id: "Q65", question: "Vi har masse data, men vanskelig å prioritere — hva gjør vi?", cluster: "7 CRM / data / pipeline / arbeidsflyt / beslutningsstøtte", tier: "CORE",
    audience: "CEO/kommersiell leder", intent: "COM+INFO", primary: "— (fragmentert)", support1: "Verdikjede-ledelse (CAS)", support2: "CRM (CAS)",
    ownership: "FRAGMENTED", competing: "Verdikjede · Salgsledelse · CRM · Control Tower", recruit: false, commercial: true, problemLanguage: true, llmPotential: "M",
    gapFlag: true, gapPriority: "MUST_OWN", score: 2, notes: "Kritisk data→prioritering-gap.",
    external: emptyExternal,
  },
  {
    id: "Q66", question: "Vi følger KPI-ene, men det endrer ikke hva teamet faktisk gjør — hva mangler?", cluster: "7 CRM / data / pipeline / arbeidsflyt / beslutningsstøtte", tier: "CORE",
    audience: "salgsleder/kommersiell leder", intent: "INFO", primary: "— (fragmentert)", support1: "Salgsledelse i praksis (CAS)", support2: "Verdikjede-ledelse (CAS)",
    ownership: "FRAGMENTED", competing: "Salgsledelse vs Verdikjede", recruit: false, commercial: false, problemLanguage: true, llmPotential: "M",
    gapFlag: true, gapPriority: "MUST_OWN", score: 2, notes: "5A.1: problem-språk. KPI→handling.",
    external: emptyExternal,
  },
  {
    id: "Q67", question: "Styringsmøtene er fulle av tall, men vi vet fortsatt ikke hva vi skal prioritere — hva gjør vi?", cluster: "7 CRM / data / pipeline / arbeidsflyt / beslutningsstøtte", tier: "EXTENDED",
    audience: "kommersiell leder", intent: "INFO", primary: "— (fragmentert)", support1: "Control Tower (prosjekt)", support2: "Verdikjede-ledelse (CAS)",
    ownership: "FRAGMENTED", competing: "Control Tower vs artikkel", recruit: false, commercial: true, problemLanguage: true, llmPotential: "M",
    gapFlag: true, gapPriority: "MUST_OWN", score: 2, notes: "5A.1: problem-språk. Signal vs støy.",
    external: emptyExternal,
  },
  {
    id: "Q68", question: "Hva er neste beste handling for en leder med mye data?", cluster: "7 CRM / data / pipeline / arbeidsflyt / beslutningsstøtte", tier: "EXTENDED",
    audience: "kommersiell leder", intent: "INFO", primary: "Verdikjede-ledelse (CAS)", support1: "Salgsledelse i praksis (CAS)", support2: "CRM (CAS)",
    ownership: "FRAGMENTED", competing: "Control Tower (prosjekt)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Next best action delvis i verdikjede.",
    external: emptyExternal,
  },
  {
    id: "Q69", question: "Fra data til beslutning — hvordan i praksis?", cluster: "7 CRM / data / pipeline / arbeidsflyt / beslutningsstøtte", tier: "CORE",
    audience: "CEO/kommersiell leder", intent: "INFO", primary: "— (GAP)", support1: "Verdikjede-ledelse (CAS)", support2: "CRM (CAS)",
    ownership: "GAP", competing: "Alle data/beslutningskilder", recruit: false, commercial: true, problemLanguage: false, llmPotential: "H",
    gapFlag: true, gapPriority: "MUST_OWN", score: 2, notes: "Primært innholdshull. Kandidat #10 — ikke implementert i v1.0 baseline.",
    external: emptyExternal,
  },
  {
    id: "Q70", question: "CRM finnes, men brukes ikke godt — hva gjør vi?", cluster: "7 CRM / data / pipeline / arbeidsflyt / beslutningsstøtte", tier: "CORE",
    audience: "salgsleder/kunde", intent: "COM+INFO", primary: "CRM er mer enn et systemprosjekt (CAS)", support1: "/consulting", support2: "/erfaring",
    ownership: "STRONG", competing: "/consulting", recruit: false, commercial: true, problemLanguage: true, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Problem-språk; cornerstone.",
    external: emptyExternal,
  },
  {
    id: "Q71", question: "CRM brukes ulikt av salg og kundeservice — hva gjør vi?", cluster: "7 CRM / data / pipeline / arbeidsflyt / beslutningsstøtte", tier: "CORE",
    audience: "kommersiell leder", intent: "COM+INFO", primary: "CRM er mer enn et systemprosjekt (CAS)", support1: "Salgsledelse i praksis (CAS)", support2: "/consulting",
    ownership: "STRONG", competing: "—", recruit: false, commercial: true, problemLanguage: true, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Problem-språk; cornerstone.",
    external: emptyExternal,
  },
  {
    id: "Q72", question: "Hvordan få CRM til å støtte salgsledelse?", cluster: "7 CRM / data / pipeline / arbeidsflyt / beslutningsstøtte", tier: "EXTENDED",
    audience: "salgsleder", intent: "INFO+COM", primary: "CRM er mer enn et systemprosjekt (CAS)", support1: "Salgsledelse i praksis (CAS)", support2: "/consulting",
    ownership: "ADEQUATE", competing: "Salgsledelse (CRM-seksjon)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Koblet i authority-map.",
    external: emptyExternal,
  },
  {
    id: "Q73", question: "AI og CRM — hvordan få beslutningsstøtte i arbeidsflyt?", cluster: "7 CRM / data / pipeline / arbeidsflyt / beslutningsstøtte", tier: "EXTENDED",
    audience: "AI-/digitalleder", intent: "INFO", primary: "CRM-genAI (S)", support1: "CRM (CAS)", support2: "Fra innsikt til handling – RAG (S)",
    ownership: "FRAGMENTED", competing: "AI-artikler vs CRM", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "AI-spesifikk beslutningsstøtte.",
    external: emptyExternal,
  },
  {
    id: "Q74", question: "Hvordan kartlegge salgsmodenhet og friksjon?", cluster: "7 CRM / data / pipeline / arbeidsflyt / beslutningsstøtte", tier: "EXTENDED",
    audience: "SMB-eier/kommersiell leder", intent: "COM", primary: "/salgsflyt-sjekken (landing)", support1: "/consulting", support2: "CRM (CAS)",
    ownership: "ADEQUATE", competing: "/consulting", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Diagnostikk-landing.",
    external: emptyExternal,
  },
  {
    id: "Q75", question: "Pipeline ser sunn ut, salget følger ikke — hvorfor?", cluster: "7 CRM / data / pipeline / arbeidsflyt / beslutningsstøtte", tier: "EXTENDED",
    audience: "salgsleder", intent: "INFO", primary: "Salgsledelse i praksis (CAS)", support1: "CRM (CAS)", support2: "/erfaring",
    ownership: "FRAGMENTED", competing: "CRM vs Salgsledelse", recruit: false, commercial: true, problemLanguage: true, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Problem-språk.",
    external: emptyExternal,
  },
  {
    id: "Q76", question: "Bedre data for beslutninger — hva betyr det operativt?", cluster: "7 CRM / data / pipeline / arbeidsflyt / beslutningsstøtte", tier: "EXTENDED",
    audience: "kommersiell leder", intent: "INFO", primary: "Bedre data. Bedre beslutninger. (S)", support1: "Verdikjede-ledelse (CAS)", support2: "CRM (CAS)",
    ownership: "ADEQUATE", competing: "Bedre-data vs Verdikjede", recruit: false, commercial: false, problemLanguage: false, llmPotential: "L",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Case/event-artikkel; dokumenterer problem, ikke metode.",
    external: emptyExternal,
  },
  {
    id: "Q77", question: "De fleste starter feil med AI — hva er riktig rekkefølge?", cluster: "8 AI / implementering / governance / readiness / verdi", tier: "CORE",
    audience: "AI-/digitalleder", intent: "INFO+COM", primary: "De fleste starter feil med AI (CAS)", support1: "Fra pilot til skalering (CAS)", support2: "/consulting",
    ownership: "STRONG", competing: "Fra pilot til skalering (CAS)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "AI cornerstone entry.",
    external: emptyExternal,
  },
  {
    id: "Q78", question: "Hvordan starte AI med forretningsproblem, ikke teknologi?", cluster: "8 AI / implementering / governance / readiness / verdi", tier: "CORE",
    audience: "CEO/AI-leder", intent: "COM+INFO", primary: "De fleste starter feil med AI (CAS)", support1: "AI-prosjekt-forretningsproblem (S)", support2: "/consulting",
    ownership: "STRONG", competing: "Fra-pilot (S)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Needs-first tydelig.",
    external: emptyExternal,
  },
  {
    id: "Q79", question: "Hvordan gå fra AI-pilot til faktisk verdi?", cluster: "8 AI / implementering / governance / readiness / verdi", tier: "CORE",
    audience: "transformasjonsleder", intent: "INFO+COM", primary: "Fra pilot til skalering (CAS)", support1: "Fra-pilot (S)", support2: "/prosjekter",
    ownership: "STRONG", competing: "De fleste starter feil (CAS)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Skalering-cornerstone.",
    external: emptyExternal,
  },
  {
    id: "Q80", question: "Vi har gjennomført AI-piloter uten verdi — hvorfor?", cluster: "8 AI / implementering / governance / readiness / verdi", tier: "CORE",
    audience: "CEO", intent: "INFO+COM", primary: "Fra-pilot (S)", support1: "De fleste starter feil med AI (CAS)", support2: "Fra pilot til skalering (CAS)",
    ownership: "ADEQUATE", competing: "Fra-pilot vs skalering", recruit: false, commercial: true, problemLanguage: true, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Problem-språk.",
    external: emptyExternal,
  },
  {
    id: "Q81", question: "AI governance før skalering — hva må på plass?", cluster: "8 AI / implementering / governance / readiness / verdi", tier: "EXTENDED",
    audience: "AI-/digitalleder/styremedlem", intent: "INFO", primary: "AI-governance i praksis (S)", support1: "Fra pilot til skalering (CAS)", support2: "/consulting",
    ownership: "ADEQUATE", competing: "Fra pilot til skalering (CAS)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Core support.",
    external: emptyExternal,
  },
  {
    id: "Q82", question: "Hvordan vurdere AI-modenhet i virksomheten?", cluster: "8 AI / implementering / governance / readiness / verdi", tier: "EXTENDED",
    audience: "AI-/digitalleder", intent: "COM", primary: "/ai-readiness-scan (landing)", support1: "AI-ready (S)", support2: "/consulting",
    ownership: "FRAGMENTED", competing: "/ai-readiness vs artikler", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Landing + support.",
    external: emptyExternal,
  },
  {
    id: "Q83", question: "Ansvarlig AI i praksis for ledere?", cluster: "8 AI / implementering / governance / readiness / verdi", tier: "EXTENDED",
    audience: "styre/AI-leder", intent: "INFO", primary: "AI-governance i praksis (S)", support1: "Fra pilot til skalering (CAS)", support2: "/consulting",
    ownership: "FRAGMENTED", competing: "De fleste starter feil (CAS)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Governance support.",
    external: emptyExternal,
  },
  {
    id: "Q84", question: "Hvordan realisere AI-verdi i SMB?", cluster: "8 AI / implementering / governance / readiness / verdi", tier: "EXTENDED",
    audience: "SMB-eier", intent: "COM", primary: "/ai-value-lab-oslo (landing)", support1: "De fleste starter feil med AI (CAS)", support2: "/consulting",
    ownership: "ADEQUATE", competing: "/consulting", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Landing + consulting.",
    external: emptyExternal,
  },
  {
    id: "Q85", question: "Hva er en AI-strategi for norske B2B-selskaper?", cluster: "8 AI / implementering / governance / readiness / verdi", tier: "CORE",
    audience: "CEO/styremedlem", intent: "INFO", primary: "— (GAP)", support1: "De fleste starter feil med AI (CAS)", support2: "Fra pilot til skalering (CAS)",
    ownership: "WEAK", competing: "Needs-first vs skalering", recruit: false, commercial: true, problemLanguage: false, llmPotential: "L",
    gapFlag: true, gapPriority: "SHOULD_OWN", score: 2, notes: "Implementering ja; exec-strategi svak.",
    external: emptyExternal,
  },
  {
    id: "Q86", question: "Hvilken AI-portefølje har Marius bygget?", cluster: "8 AI / implementering / governance / readiness / verdi", tier: "EXTENDED",
    audience: "recruiter/samarbeidspartner", intent: "AUTH+REC", primary: "/prosjekter", support1: "/", support2: "De fleste starter feil med AI (CAS)",
    ownership: "FRAGMENTED", competing: "/ vs /prosjekter", recruit: true, commercial: false, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Prosjekter eier.",
    external: emptyExternal,
  },
  {
    id: "Q87", question: "AI som lederverktøy — hva betyr det konkret?", cluster: "8 AI / implementering / governance / readiness / verdi", tier: "EXTENDED",
    audience: "kommersiell leder", intent: "INFO", primary: "/", support1: "/prosjekter", support2: "De fleste starter feil med AI (CAS)",
    ownership: "ADEQUATE", competing: "/prosjekter vs /", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Profil nevner; ikke dybde-side.",
    external: emptyExternal,
  },
  {
    id: "Q88", question: "Vi har AI-verktøy i bruk, men arbeidsflyten er stort sett den samme — hva mangler?", cluster: "8 AI / implementering / governance / readiness / verdi", tier: "EXTENDED",
    audience: "transformasjonsleder", intent: "INFO", primary: "Fra pilot til skalering (CAS)", support1: "Fra innsikt til handling – RAG (S)", support2: "/prosjekter",
    ownership: "FRAGMENTED", competing: "De fleste starter feil (CAS)", recruit: false, commercial: true, problemLanguage: true, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "5A.1: problem-språk.",
    external: emptyExternal,
  },
  {
    id: "Q89", question: "Human in the loop — hva betyr det for ledere?", cluster: "8 AI / implementering / governance / readiness / verdi", tier: "EXTENDED",
    audience: "AI-/digitalleder/styremedlem", intent: "INFO", primary: "AI-governance i praksis (S)", support1: "Fra pilot til skalering (CAS)", support2: "—",
    ownership: "ADEQUATE", competing: "—", recruit: false, commercial: true, problemLanguage: false, llmPotential: "L",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Core support eier terminologi.",
    external: emptyExternal,
  },
  {
    id: "Q90", question: "Executive AI-plattform for transformasjon?", cluster: "8 AI / implementering / governance / readiness / verdi", tier: "EXTENDED",
    audience: "CEO/styremedlem", intent: "COM", primary: "/ai-transformation-value-realization (landing)", support1: "/prosjekter", support2: "/consulting",
    ownership: "FRAGMENTED", competing: "/prosjekter vs landing", recruit: false, commercial: true, problemLanguage: false, llmPotential: "L",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Kommersiell landing.",
    external: emptyExternal,
  },
  {
    id: "Q91", question: "Hva tilbyr Marius innen CRM og salgsoppfølging?", cluster: "9 Consulting / konkrete virksomhetsproblemer", tier: "CORE",
    audience: "kunde/kommersiell leder", intent: "COM", primary: "/consulting", support1: "CRM (CAS)", support2: "/salgsflyt-sjekken (landing)",
    ownership: "ADEQUATE", competing: "CRM-artikkel (metode vs tjeneste)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Consulting eier tilbud.",
    external: emptyExternal,
  },
  {
    id: "Q92", question: "Hvem kan hjelpe SMB med salg, CRM og arbeidsflyt?", cluster: "9 Consulting / konkrete virksomhetsproblemer", tier: "EXTENDED",
    audience: "SMB-eier", intent: "AUTH+COM", primary: "/consulting", support1: "/salgsflyt-sjekken (landing)", support2: "CRM (CAS)",
    ownership: "ADEQUATE", competing: "/ (profil)", recruit: false, commercial: true, problemLanguage: true, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Situasjon: SMB trenger hjelp.",
    external: emptyExternal,
  },
  {
    id: "Q93", question: "Trenger vi rådgiver eller implementeringspartner for salg?", cluster: "9 Consulting / konkrete virksomhetsproblemer", tier: "EXTENDED",
    audience: "SMB-eier/CEO", intent: "COM", primary: "/consulting", support1: "/erfaring", support2: "/prosjekter",
    ownership: "FRAGMENTED", competing: "/consulting vs /erfaring", recruit: false, commercial: true, problemLanguage: true, llmPotential: "L",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Organisatorisk dilemma.",
    external: emptyExternal,
  },
  {
    id: "Q94", question: "Hva koster consulting hos Marius?", cluster: "9 Consulting / konkrete virksomhetsproblemer", tier: "EXTENDED",
    audience: "kunde", intent: "COM", primary: "— (INTENTIONAL)", support1: "/kontakt", support2: "/consulting",
    ownership: "WEAK", competing: "—", recruit: false, commercial: true, problemLanguage: false, llmPotential: "L",
    gapFlag: true, gapPriority: "INTENTIONAL_NO_OWNER", score: 2, notes: "Pris avklares etter scope — bevisst gap.",
    external: emptyExternal,
  },
  {
    id: "Q95", question: "Tilbyr Marius workshops for ledergrupper om kommersiell utvikling, strategigjennomføring eller AI?", cluster: "9 Consulting / konkrete virksomhetsproblemer", tier: "CORE",
    audience: "CEO/kunde", intent: "COM", primary: "/consulting", support1: "consulting-foredrag (data)", support2: "Fra strategi til gjennomføring (CAS)",
    ownership: "STRONG", competing: "/faginnlegg (innhold)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "5A.1: erstattet perifert Q95. Foredrag/workshop på /consulting.",
    external: emptyExternal,
  },
  {
    id: "Q96", question: "Foredrag om kommersiell ledelse og AI?", cluster: "9 Consulting / konkrete virksomhetsproblemer", tier: "EXTENDED",
    audience: "kunde/styremedlem", intent: "COM", primary: "/consulting", support1: "consulting-foredrag (data)", support2: "/",
    ownership: "ADEQUATE", competing: "/faginnlegg", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Foredrag-seksjon.",
    external: emptyExternal,
  },
  {
    id: "Q97", question: "Hva er Control Tower og hvorfor er det relevant?", cluster: "10 Prosjekter / samarbeid / faglig authority", tier: "CORE",
    audience: "kommersiell leder/AI-leder", intent: "INFO+COM", primary: "/prosjekter#control-tower", support1: "Verdikjede-ledelse (CAS)", support2: "/control-tower (landing)",
    ownership: "FRAGMENTED", competing: "Verdikjede-artikkel vs prosjekt", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Dual ownership prosjekt + artikkel.",
    external: emptyExternal,
  },
  {
    id: "Q98", question: "Når eier lederen ikke hele verdikjeden — faglig perspektiv?", cluster: "10 Prosjekter / samarbeid / faglig authority", tier: "CORE",
    audience: "researcher/kommersiell leder", intent: "INFO", primary: "Verdikjede-ledelse (CAS)", support1: "/prosjekter", support2: "/erfaring",
    ownership: "STRONG", competing: "Control Tower prosjekt", recruit: false, commercial: false, problemLanguage: false, llmPotential: "H",
    gapFlag: false, gapPriority: "N_A", score: 4, notes: "Artikkel eier perspektiv.",
    external: emptyExternal,
  },
  {
    id: "Q99", question: "Hvilke AI-prosjekter viser Marius' metode?", cluster: "10 Prosjekter / samarbeid / faglig authority", tier: "EXTENDED",
    audience: "recruiter/samarbeidspartner", intent: "AUTH+REC", primary: "/prosjekter", support1: "/", support2: "De fleste starter feil med AI (CAS)",
    ownership: "ADEQUATE", competing: "/ (porteføljetelling)", recruit: false, commercial: true, problemLanguage: false, llmPotential: "M",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Prosjekter god.",
    external: emptyExternal,
  },
  {
    id: "Q100", question: "Kan jeg samarbeide om et av prosjektene?", cluster: "10 Prosjekter / samarbeid / faglig authority", tier: "EXTENDED",
    audience: "samarbeidspartner/kunde", intent: "COM", primary: "/kontakt", support1: "/prosjekter", support2: "/consulting",
    ownership: "FRAGMENTED", competing: "/consulting vs /kontakt", recruit: false, commercial: true, problemLanguage: false, llmPotential: "L",
    gapFlag: false, gapPriority: "N_A", score: 3, notes: "Kontakt primary.",
    external: emptyExternal,
  },
];

export function computeBenchmarkStats(prompts: BenchmarkPrompt[] = BENCHMARK_PROMPTS) {
  const totalAvg = prompts.reduce((s, p) => s + p.score, 0) / prompts.length;
  const clusters = [...new Set(prompts.map((p) => p.cluster))];
  const clusterScores = clusters.map((cluster) => {
    const items = prompts.filter((p) => p.cluster === cluster);
    return {
      cluster,
      n: items.length,
      avg: items.reduce((s, p) => s + p.score, 0) / items.length,
    };
  });
  const ownershipCounts = (["STRONG", "ADEQUATE", "FRAGMENTED", "WEAK", "GAP"] as Ownership[]).map(
    (label) => ({ label, value: prompts.filter((p) => p.ownership === label).length }),
  );
  return {
    totalAvg,
    clusterScores,
    ownershipCounts,
    gapFlags: prompts.filter((p) => p.gapFlag).length,
    problemLanguage: prompts.filter((p) => p.problemLanguage).length,
    recruitment: prompts.filter((p) => p.recruit).length,
    commercial: prompts.filter((p) => p.commercial).length,
    core: prompts.filter((p) => p.tier === "CORE").length,
    extended: prompts.filter((p) => p.tier === "EXTENDED").length,
  };
}
