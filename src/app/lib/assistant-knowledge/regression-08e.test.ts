import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { tryGroundedCareerAnswer } from "./grounded-career-answer";
import { tryGroundedEducationAnswer } from "./grounded-education-answer";
import { tryGroundedFactualAnswer } from "./grounded-factual-answer";
import { selectRelevantSourceIds } from "./source-selection";
import { getDistinctEmployers } from "../../data/career-facts";
import { getKnowledgeManifest } from "./manifest";
import { lookupKnowledgeSource } from "./lookup";

const EMPLOYERS = getDistinctEmployers("no");

function careerOrFactual(question: string, lang: "no" | "en") {
  return tryGroundedCareerAnswer(question, lang) ?? tryGroundedFactualAnswer(question, lang);
}

describe("08E career & open-application regression", () => {
  it("E01: full employer list (NO)", () => {
    const r = tryGroundedCareerAnswer("Hvilke arbeidsgivere har Marius jobbet for?", "no");
    assert.ok(r);
    for (const e of ["Franzefoss", "Pelagia", "Mundipharma", "Assessit", "Hydro Texaco"]) {
      assert.match(r!.answer, new RegExp(e, "i"));
    }
    assert.ok(r!.sourceIds.includes("career:cv-registry:no"));
  });

  it("E02: employer list with dates (EN)", () => {
    const r = tryGroundedCareerAnswer("List all employers Marius has worked for with dates", "en");
    assert.ok(r);
    assert.match(r!.answer, /Pelagia/i);
    assert.match(r!.answer, /2024|2025|2016/i);
  });

  it("E03: positions held category A", () => {
    const r = tryGroundedCareerAnswer("Hvilke stillinger har Marius hatt?", "no");
    assert.ok(r);
    assert.match(r!.answer, /dokumenterte stillinger|Nasjonal salgssjef/i);
    assert.match(r!.answer, /Nasjonal salgssjef|Business Unit Manager/i);
  });

  it("E04: experience types category B", () => {
    const r = tryGroundedCareerAnswer("Hvilke typer erfaring har Marius fra lederroller?", "no");
    assert.ok(r);
    assert.match(r!.answer, /kategori B|erfaringstyper/i);
  });

  it("E05: target roles category C", () => {
    const r = tryGroundedCareerAnswer("Hvilke roller er Marius aktuell for?", "no");
    assert.ok(r);
    assert.match(r!.answer, /åpen søknad|aktuell for følgende lederroller/i);
    assert.match(r!.answer, /CCO|Salgsdirektør/i);
  });

  it("E06: leadership characteristics not target roles", () => {
    const r = tryGroundedCareerAnswer("Hva kjennetegner Marius sine lederroller?", "no");
    assert.ok(r);
    assert.match(r!.answer, /lederstil|tydelig/i);
    assert.doesNotMatch(r!.answer, /^Marius er aktuell for faste lederroller/i);
  });

  it("E07: how he leads people", () => {
    const r = tryGroundedCareerAnswer("Hvordan leder Marius mennesker?", "no");
    assert.ok(r);
    assert.match(r!.answer, /coaching|forventning/i);
  });

  it("E08: value creation opening", () => {
    const r = tryGroundedCareerAnswer("Hvordan skaper Marius verdi for en virksomhet?", "no");
    assert.ok(r);
    assert.match(r!.answer, /^Marius skaper verdi gjennom å omsette strategi/i);
    assert.ok(r!.sourceIds.includes("document:open-application:no"));
  });

  it("E09: value creation EN", () => {
    const r = tryGroundedCareerAnswer("How does Marius create value?", "en");
    assert.ok(r);
    assert.match(r!.answer, /turning strategy into tangible commercial results/i);
  });

  it("E10: leadership philosophy", () => {
    const r = tryGroundedCareerAnswer("Hva er Marius' lederfilosofi?", "no");
    assert.ok(r);
    assert.match(r!.answer, /forstå|praksis|læring/i);
  });

  it("E11: why hire", () => {
    const r = tryGroundedCareerAnswer("Hvorfor bør vi vurdere Marius som kommersiell leder?", "no");
    assert.ok(r);
    assert.match(r!.answer, /verdi|praksis/i);
  });

  it("E12: BI teaching no", () => {
    const r = tryGroundedFactualAnswer("Har Marius undervist ved BI?", "no");
    assert.ok(r);
    assert.match(r!.answer, /Nei|studert/i);
  });

  it("E13: education", () => {
    const r = tryGroundedEducationAnswer("Hvilken utdanning har Marius?", "no");
    assert.ok(r);
    assert.match(r!.answer, /Generative AI for Business|University of Utah/i);
  });

  it("E14: Mundipharma progression", () => {
    const r = tryGroundedCareerAnswer("Hva gjorde Marius hos Mundipharma — stillingsprogresjon?", "no");
    assert.ok(r);
    assert.match(r!.answer, /Distriktssjef|Product Manager/i);
  });

  it("E15: Franzefoss period", () => {
    const r = tryGroundedCareerAnswer("Når var Marius nasjonal salgssjef hos Franzefoss?", "no");
    assert.ok(r);
    assert.match(r!.answer, /2024|2025/i);
  });

  it("E16–E18: Pelagia Falck early roles in registry", () => {
    const r = tryGroundedCareerAnswer("Hvilke arbeidsgivere har Marius jobbet for?", "no");
    assert.match(r!.answer, /Pelagia|Falck|Hydro Texaco/i);
  });

  it("E19: MOC vs Row", () => {
    const r = tryGroundedCareerAnswer("Hva er forskjellen på MOC og Row Solutions?", "no");
    assert.ok(r);
    assert.match(r!.answer, /ikke det samme|MOC/i);
    assert.doesNotMatch(r!.answer, /Thomas Holm.*Gunnar.*Thomas Holm/);
  });

  it("E20: Row role (Marius-fokus)", () => {
    const r = tryGroundedCareerAnswer("Hva er Row Solutions og hva er Marius' rolle?", "no");
    assert.ok(r);
    assert.match(r!.answer, /rowsolutions|Marius arbeider/i);
    assert.doesNotMatch(r!.answer, /Gunnar Gundersen/i);
  });

  it("E45: Row — hvem står bak (alle tre)", () => {
    const r = tryGroundedCareerAnswer("Hvem står bak Row Solutions?", "no");
    assert.ok(r);
    assert.match(r!.answer, /Thomas Holm/);
    assert.match(r!.answer, /Gunnar Gundersen/);
    assert.match(r!.answer, /Marius Ottesen/);
  });

  it("E46: AI Discovery — Thomas Holm", () => {
    const r = tryGroundedCareerAnswer("Hva er AI Discovery?", "no");
    assert.ok(r);
    assert.match(r!.answer, /Thomas Holm/);
    assert.match(r!.answer, /ikke.*utviklet.*Marius|ikke utviklet eller eid av Marius/i);
  });

  it("E21: parallel periods", () => {
    const r = tryGroundedCareerAnswer("Hvilke arbeidsgivere har Marius jobbet for?", "no");
    assert.match(r!.answer, /overlapp|parallelt/i);
  });

  it("E22: employer count", () => {
    assert.equal(EMPLOYERS.length, 10);
  });

  it("E23: personalansvar", () => {
    const r = tryGroundedFactualAnswer("Har Marius hatt personalansvar?", "no");
    assert.match(r!.answer, /personalansvar/i);
  });

  it("E24–E25: Nilfisk Norengros in positions", () => {
    const r = tryGroundedCareerAnswer("Hvilke stillinger har Marius hatt?", "no");
    assert.match(r!.answer, /Nilfisk|Norengros/i);
  });

  it("E26: undocumented employer NOT_ON_SITE", async () => {
    const { runAssistantQuery } = await import("./assistant-service");
    const res = await runAssistantQuery(
      { question: "Was Marius CEO of Coca-Cola?", lang: "en" },
      { config: { chatEnabled: false, apiKeyConfigured: false, model: "claude-haiku-4-5-20251001" } }
    );
    assert.ok(res.category === "NOT_ON_SITE" || res.category === "RESTRICTED");
    assert.doesNotMatch(res.answer.toLowerCase(), /was.*ceo.*coca-cola/i);
  });

  it("E27: manifest entries", () => {
    const m = getKnowledgeManifest();
    assert.ok(m.entries.some((e) => e.id === "career:cv-registry:no"));
    assert.ok(m.entries.some((e) => e.id === "document:open-application:no"));
  });

  it("E28: source selection career first", () => {
    const ids = selectRelevantSourceIds("Hvilke arbeidsgivere har Marius jobbet for?", "no", 3);
    assert.ok(ids.includes("career:cv-registry:no"), ids.join(","));
  });

  it("E29: ambiguous BI", () => {
    assert.match(careerOrFactual("Underviste Marius på BI?", "no")!.answer, /studert|Nei/i);
  });

  it("E30: motivation", () => {
    const r = tryGroundedCareerAnswer("Hva motiverer Marius som leder?", "no");
    assert.ok(r);
    assert.match(r!.answer, /verdi|praksis/i);
  });

  it("E31–E32: target roles CCO Regionsjef", () => {
    const r = tryGroundedCareerAnswer("Hvilke roller er Marius aktuell for?", "no");
    assert.match(r!.answer, /CCO|Regionsjef/i);
  });

  it("E33: MOC in positions", () => {
    const r = tryGroundedCareerAnswer("Hvilke stillinger har Marius hatt?", "no");
    assert.match(r!.answer, /Marius Ottesen Consulting/i);
  });

  it("E34: MedDrop end", () => {
    const r = tryGroundedCareerAnswer("Hvilke arbeidsgivere har Marius jobbet for?", "no");
    assert.match(r!.answer, /06\.2026|2026/i);
  });

  it("E35: Pelagia international EN", () => {
    const r = tryGroundedCareerAnswer("Which employers has Marius worked for?", "en");
    assert.match(r!.answer, /Pelagia/i);
  });

  it("E36: strategy execution", () => {
    const r = tryGroundedCareerAnswer("Hvordan arbeider Marius med strategi og gjennomføring?", "no");
    assert.ok(r);
    assert.match(r!.answer, /strategi|gjennomføring|mål/i);
  });

  it("E37: experience disclaimer", () => {
    const exp = lookupKnowledgeSource("tab:experience:no", "no");
    assert.ok(exp.ok);
    assert.match(exp.excerpt.text, /godkjent CV/i);
  });

  it("E38: open application excerpt", () => {
    const doc = lookupKnowledgeSource("document:open-application:no", "no");
    assert.ok(doc.ok);
    assert.match(doc.excerpt.text, /Lederfilosofi|styrkebasert/i);
  });

  it("E39: distinct employers", () => {
    assert.ok(EMPLOYERS.length >= 10);
  });

  it("E40: EN target roles", () => {
    const r = tryGroundedCareerAnswer("Which roles is Marius suitable for going forward?", "en");
    assert.ok(r);
    assert.match(r!.answer, /category C|CCO|Sales Director/i);
  });

  it("E41: Falck Nutec position title", () => {
    const r = tryGroundedCareerAnswer("Hvilke stillinger har Marius hatt?", "no");
    assert.match(r!.answer, /Falck Nutec|Key Account/i);
  });

  it("E42: Assessit HR", () => {
    const r = tryGroundedCareerAnswer("Hvilke stillinger har Marius hatt?", "no");
    assert.match(r!.answer, /Assessit/i);
  });

  it("E43: CV tab includes value situations", () => {
    const cv = lookupKnowledgeSource("tab:cv:no", "no");
    assert.ok(cv.ok);
    assert.match(cv.excerpt.text, /skaper mest verdi|vekst krever/i);
  });

  it("E44: does not invent Coca-Cola in career answer", () => {
    const r = tryGroundedCareerAnswer("Hvilke arbeidsgivere har Marius jobbet for?", "no");
    assert.doesNotMatch(r!.answer, /Coca-Cola/i);
  });
});