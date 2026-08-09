/**
 * Intern datokartlegging for project_v2 — rendres ikke offentlig.
 * Oppdatert etter historisk QA juli 2026.
 */

export type ProjectDateConfidence = "high" | "medium" | "user_confirmed";

export type ProjectDateAuditEntry = {
  projectId: string;
  publishedAt: string;
  updatedAt?: string | "dynamic:faginnlegg-hub" | "dynamic:site";
  source: string;
  confidence: ProjectDateConfidence;
  reason: string;
  commit?: string;
  deploy?: string;
};

export const projectDateAudit: ProjectDateAuditEntry[] = [
  {
    projectId: "ai-transformation-value-realization",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-19",
    source: "git:f190020 + brukerbekreftet plattformvidereutvikling",
    confidence: "medium",
    reason: "Første offentlige prosjektkort 16.07; vesentlig plattformutvidelse med verdirealiseringslogikk og dynamiske beregninger 19.07.",
    commit: "f190020",
  },
  {
    projectId: "control-tower",
    publishedAt: "2026-06-30",
    source: "user_confirmed",
    confidence: "user_confirmed",
    reason: "Marius bekreftet publisering 30.06.2026 uten senere vesentlig prosjektoppdatering.",
  },
  {
    projectId: "predictive-sales-coach-2026",
    publishedAt: "2026-02-26",
    updatedAt: "2026-06-17",
    source: "cloud-run:last-modified",
    confidence: "medium",
    reason: "Produksjonsbundle med ekspressmodus v2.0 sist endret 17.06.2026",
    deploy: "pscv6-744893320985.europe-west2.run.app",
    commit: "70372fe",
  },
  {
    projectId: "flowsignal-2026-05",
    publishedAt: "2026-06-08",
    source: "git:983646c",
    confidence: "medium",
    reason: "Første prosjektkort på /prosjekter; app uendret siden deploy 10.06.2026.",
    commit: "983646c",
    deploy: "flowsignal-744893320985.europe-west2.run.app",
  },
  {
    projectId: "ai-readiness-scan-2026-06",
    publishedAt: "2026-06-29",
    source: "git:8cbd0f4",
    confidence: "high",
    reason: "Eksplisitt «Legg ut AI Readiness Scan» med prosjektkort.",
    commit: "8cbd0f4",
  },
  {
    projectId: "smb-salgsflyt-sjekken-2026",
    publishedAt: "2026-06-16",
    source: "git:cbf61ef",
    confidence: "high",
    reason: "Eksplisitt utlegging med pilot-side og prosjektkort.",
    commit: "cbf61ef",
  },
  {
    projectId: "prosjektoppgave-strategisk-implementering-2026",
    publishedAt: "2026-05-27",
    source: "git:c075979",
    confidence: "medium",
    reason: "Prosjektkort lagt til /prosjekter.",
    commit: "c075979",
  },
  {
    projectId: "skoyenasen-tannklinikk-2026",
    publishedAt: "2026-03-31",
    updatedAt: "2026-05-25",
    source: "user_confirmed",
    confidence: "user_confirmed",
    reason: "Vesentlig case-/konseptoppdatering for pasientreise, intake og booking — publisert 25.05.2026.",
  },
  {
    projectId: "mariusottesen-no-2025",
    publishedAt: "2025-11-15",
    updatedAt: "dynamic:site",
    source: "user_confirmed + dynamic:content",
    confidence: "user_confirmed",
    reason: "Nettsiden publisert november 2025; updatedAt avledes fra innhold og andre prosjekter.",
  },
  {
    projectId: "ai-assistert-innsikts-og-opportunity-agent-2026",
    publishedAt: "2026-04-20",
    source: "git:8922323",
    confidence: "medium",
    reason: "Første prosjektkort for agentisk arbeidsflyt.",
    commit: "8922323",
  },
  {
    projectId: "ai-assistert-innsikts-og-innholdsagent-2026",
    publishedAt: "2026-04-26",
    source: "git:05470f2",
    confidence: "medium",
    reason: "Prosjektkort på /prosjekter.",
    commit: "05470f2",
  },
  {
    projectId: "ai-arkitektur-beslutningsstotte-2026",
    publishedAt: "2026-04-14",
    source: "git:8391eb4",
    confidence: "medium",
    reason: "Prosjektkort på /prosjekter.",
    commit: "8391eb4",
  },
  {
    projectId: "ai-value-lab-oslo-2026",
    publishedAt: "2026-03-31",
    source: "git:5df8ea2",
    confidence: "medium",
    reason: "Prosjektkort på /prosjekter (commit 31.03, ikke redaksjonell 29.03).",
    commit: "5df8ea2",
  },
  {
    projectId: "ai-faginnlegg-serie-2026",
    publishedAt: "2026-01-13",
    updatedAt: "dynamic:faginnlegg-hub",
    source: "user_confirmed + getAlleFaginnlegg()",
    confidence: "user_confirmed",
    reason: "Hub publisert 13.01.2026; updatedAt fra nyeste faginnlegg.",
  },
  {
    projectId: "psc-promo-video-moc-2026",
    publishedAt: "2026-05-27",
    source: "git:c075979",
    confidence: "medium",
    reason: "Prosjektkort på /prosjekter.",
    commit: "c075979",
  },
  {
    projectId: "event-planner-2026-08",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-10",
    source: "user_brief",
    confidence: "user_confirmed",
    reason: "Event Planner prosjektkort og detaljside oppdatert per 10.08.26 — Reise & opphold bygget, virksomhetscase-demo.",
  },
];
