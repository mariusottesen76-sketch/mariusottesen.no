import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { tryGroundedEducationAnswer, isEducationLookupQuestion } from "./grounded-education-answer";
import { tryGroundedPublicContactAnswer } from "./grounded-contact-answer";
import { tryGroundedCareerAnswer, isPositionsHeldQuestion } from "./grounded-career-answer";
import {
  tryGroundedProfileAnswer,
  isPersonalStrengthsQuestion,
  isCoreCompetencyQuestion,
  isPracticalAiLeadershipQuestion,
} from "./grounded-profile-answer";
import { isRowCoreQuestion, formatRowSolutionsCore } from "../../data/row-solutions-knowledge";
import { trySimpleConsultingOfferingAnswer, isSimpleConsultingOfferingQuestion } from "./simple-consulting-answer";
import { runAssistantQuery } from "./assistant-service";
import { isValueCreationQuestion } from "./information-needs";

const cfg = {
  config: { chatEnabled: false, apiKeyConfigured: false, model: "claude-haiku-4-5-20251001" as const },
};

describe("08G factual quality regression", () => {
  const educationCases = [
    "Hva har han studert?",
    "Utdanning?",
    "Utdanning utdannelse",
    "Hvilken utdanning har Marius?",
    "What education does Marius have?",
  ];

  for (const q of educationCases) {
    it(`education: ${q}`, () => {
      assert.ok(isEducationLookupQuestion(q));
      const r = tryGroundedEducationAnswer(q, "no");
      if (q.startsWith("What")) {
        const en = tryGroundedEducationAnswer(q, "en");
        assert.ok(en);
        assert.match(en!.answer, /University of Utah|BI/i);
        assert.doesNotMatch(en!.answer, /not documented|ikke tilstrekkelig/i);
        return;
      }
      assert.ok(r);
      assert.match(r!.answer, /University of Utah|Utah/i);
      assert.match(r!.answer, /BI|Generative AI/i);
      assert.match(r!.answer, /Universitetet i Oslo|Oslo/i);
      assert.doesNotMatch(r!.answer, /ikke tilstrekkelig|not documented/i);
    });
  }

  it("education: BI study vs teaching", () => {
    const study = tryGroundedEducationAnswer("Hvilken utdanning har Marius?", "no");
    const teach = tryGroundedEducationAnswer("Underviste Marius på BI?", "no");
    assert.ok(study);
    assert.equal(teach, null);
  });

  it("positions: related phrasing", () => {
    for (const q of [
      "Hvilke roller har han hatt?",
      "Hvilke stillinger har han hatt?",
      "Hva har han jobbet som?",
      "Which roles has he held?",
    ]) {
      assert.ok(isPositionsHeldQuestion(q), q);
      const r = tryGroundedCareerAnswer(q, q.includes("Which") ? "en" : "no");
      assert.ok(r);
      assert.match(r!.answer, /Franzefoss|Nasjonal|Mundipharma/i);
      assert.doesNotMatch(r!.answer, /kategori A|category A/i);
      assert.doesNotMatch(r!.answer, /dokumenterte resultater oppnådd/i);
    }
  });

  it("contact: public details NO/EN", () => {
    const no = tryGroundedPublicContactAnswer("Hvordan kontakter jeg Marius?", "no");
    const en = tryGroundedPublicContactAnswer("How can I contact Marius?", "en");
    for (const r of [no, en]) {
      assert.ok(r);
      assert.match(r!.answer, /470\s*12\s*005|\+47/i);
      assert.match(r!.answer, /marius\.ottesen\.76@gmail\.com/i);
      assert.match(r!.answer, /linkedin\.com\/in\/mariusottesen/i);
    }
  });

  it("value creation: cohesive answer", () => {
    assert.ok(isValueCreationQuestion("Hvordan skaper han verdi?"));
    const r = tryGroundedCareerAnswer("Hvordan skaper han verdi?", "no");
    assert.ok(r);
    assert.match(r!.answer, /^Marius skaper verdi gjennom å omsette strategi/i);
    assert.match(r!.answer, /salgsstruktur|vekst/i);
    assert.match(r!.answer, /operativ|KPI|CRM/i);
    assert.match(r!.answer, /salg, drift og teknologi|salg.*drift/i);
    assert.match(r!.answer, /praktisk AI|AI/i);
  });

  it("MOC offering: services not site meta only", () => {
    assert.ok(isSimpleConsultingOfferingQuestion("Hva tilbyr Marius Ottesen Consulting?"));
    const r = trySimpleConsultingOfferingAnswer("no");
    assert.ok(r);
    assert.match(r!.answer, /Verdilekkasj|CRM|kundedialog|B2B/i);
    assert.match(r!.answer, /\/consulting|consulting/i);
    assert.doesNotMatch(r!.answer, /^Consulting-siden finner du/i);
  });

  it("pipeline: short education before NOT_ON_SITE", async () => {
    const r = await runAssistantQuery({ question: "Utdanning?", lang: "no" }, cfg);
    assert.equal(r.category, "ANSWER");
    assert.match(r.answer, /BI|Utah/i);
  });

  it("pipeline: negative undocumented employer", async () => {
    const r = await runAssistantQuery({ question: "Was Marius CEO of Coca-Cola?", lang: "en" }, cfg);
    assert.ok(r.category === "NOT_ON_SITE" || r.category === "RESTRICTED");
  });

  it("profile: superstyrker NO/EN", () => {
    for (const [q, lang] of [
      ["Hva er hans superstyrker?", "no"],
      ["Superstyrker?", "no"],
      ["Sterke sider?", "no"],
      ["What are his leadership strengths?", "en"],
      ["Personal strengths?", "en"],
    ] as const) {
      assert.ok(isPersonalStrengthsQuestion(q), q);
      const r = tryGroundedProfileAnswer(q, lang);
      assert.ok(r, q);
      assert.match(r!.answer, /Gjennomføringskraft|Execution power/i);
      assert.match(r!.answer, /Strategisk|Strategic/i);
      assert.ok(r!.sourceIds.some((id) => id.includes("tab:home")));
    }
  });

  it("profile: kjernekompetanse NO/EN", () => {
    for (const [q, lang] of [
      ["Hva er hans kjernekompetanse?", "no"],
      ["Kjernekompetanse?", "no"],
      ["What is his core competency?", "en"],
    ] as const) {
      assert.ok(isCoreCompetencyQuestion(q), q);
      const r = tryGroundedProfileAnswer(q, lang);
      assert.ok(r, q);
      assert.match(r!.answer, /Kommersiell ledelse|Commercial leadership/i);
      assert.match(r!.answer, /CRM/i);
      assert.match(r!.answer, /P\/L|lønnsomhet|profitability/i);
      assert.doesNotMatch(r!.answer, /^Control Tower/i);
    }
  });

  it("profile: praktisk AI som lederverktøy", () => {
    assert.ok(isPracticalAiLeadershipQuestion("Hvordan bruker Marius AI som leder?"));
    const r = tryGroundedProfileAnswer("Hvordan bruker Marius AI som leder?", "no");
    assert.ok(r);
    assert.match(r!.answer, /beslutningsstøtte|innsikt|arbeidsflyt/i);
    assert.match(r!.answer, /prototype|løsning|konsept/i);
    assert.doesNotMatch(r!.answer, /^Se\s+prosjekter/i);
  });

  it("profile: kommersiell ledelse og AI kombinert", async () => {
    const q = "Hvordan henger kommersiell ledelse og praktisk AI sammen i Marius' profil?";
    const r = await runAssistantQuery({ question: q, lang: "no" }, cfg);
    assert.equal(r.category, "ANSWER");
    assert.match(r.answer, /kommersiell|salg|gjennomføring/i);
    assert.match(r.answer, /AI|KI|praktisk/i);
  });

  it("Row Solutions: kjernen og målgruppe", () => {
    assert.ok(isRowCoreQuestion("Hva er kjernen i Row Solutions?"));
    assert.ok(isRowCoreQuestion("Hva er Row Solutions?"));
    const core = formatRowSolutionsCore("no");
    assert.match(core, /bedre kommersiell flyt|synlighet til salg/i);
    assert.match(core, /Synlighet og posisjonering/i);
    assert.match(core, /Salg og kundeoppfølging/i);
    assert.match(core, /Arbeidsflyt og praktisk AI/i);
    assert.match(core, /Forretningsutvikling og gjennomføring/i);
    assert.match(core, /SMB/i);
    assert.match(core, /adskilt fra Row|separate from Row|MOC/i);
    const r = tryGroundedCareerAnswer("Hva er kjernen i Row Solutions?", "no");
    assert.ok(r);
    assert.match(r!.answer, /kommersiell flyt/i);
    assert.doesNotMatch(r!.answer, /^Row Solutions — kommersielt SMB-samarbeid \| Marius Ottesen finner du/i);
    assert.ok(r!.sourceIds.some((id) => id.includes("external:rowsolutions") || id.includes("project:row")));
  });

  it("pipeline: superstyrker before NOT_ON_SITE", async () => {
    const r = await runAssistantQuery({ question: "Hva er hans superstyrker?", lang: "no" }, cfg);
    assert.equal(r.category, "ANSWER");
    assert.match(r.answer, /Gjennomføringskraft/);
  });
});