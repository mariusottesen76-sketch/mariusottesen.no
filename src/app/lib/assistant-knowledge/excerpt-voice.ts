import type { Lang } from "../../LanguageContext";

/** Normalize site excerpt prose for assistant (third person, less page-meta). Does not add facts. */
export function normalizeExcerptForAssistant(snippet: string, lang: Lang): string {
  let s = snippet.trim();
  if (!s) return s;

  if (lang === "no") {
    s = s.replace(/^Her finner du\s+/i, "");
    s = s.replace(/^På denne siden\s+/i, "");
    s = s.replace(/^Under følger\s+[^.?!]+[.?!]\s*/i, "");
    if (/^Jeg har\s+/i.test(s)) s = s.replace(/^Jeg har\s+/i, "Marius Ottesen har ");
    else if (/^Jeg er\s+/i.test(s)) s = s.replace(/^Jeg er\s+/i, "Marius Ottesen er ");
    else if (/^Jeg\s+/i.test(s)) s = s.replace(/^Jeg\s+/i, "Marius Ottesen ");
    s = s.replace(/^min CV,\s*/i, "CV og åpen søknad ");
    s = s.replace(/\bhvor jeg skaper\b/gi, "hvor Marius Ottesen skaper");
    s = s.replace(/\bjeg skaper\b/gi, "Marius Ottesen skaper");
    s = s.replace(/\bJeg har\b/g, "Marius Ottesen har");
    s = s.replace(/\bJeg er\b/g, "Marius Ottesen er");
    s = s.replace(/\bjeg har\b/g, "han har");
  } else {
    s = s.replace(/^Here you (can )?find\s+/i, "");
    s = s.replace(/^On this page,?\s+/i, "");
    if (/^I have\s+/i.test(s)) s = s.replace(/^I have\s+/i, "Marius Ottesen has ");
    else if (/^I am\s+/i.test(s)) s = s.replace(/^I am\s+/i, "Marius Ottesen is ");
    else if (/^I\s+/i.test(s)) s = s.replace(/^I\s+/i, "Marius Ottesen ");
  }

  s = s.trim();
  if (s.length > 0) s = s[0]!.toUpperCase() + s.slice(1);
  return s;
}