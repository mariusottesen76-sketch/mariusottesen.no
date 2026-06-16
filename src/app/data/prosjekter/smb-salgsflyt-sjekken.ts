import { SMB_SALGSFLYT_APP_URL } from "../../lib/smb-salgsflyt-brand";
import { prosjektKontaktLenke } from "../../lib/prosjekt-lenker";
import { type ProsjektType } from "./predictive-sales-coach";

const smbAppLink = `<a href="${SMB_SALGSFLYT_APP_URL}" target="_blank" rel="noopener noreferrer" aria-label="Åpne SMB Salgsflyt-sjekken" class="text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">SMB Salgsflyt-sjekken</a>`;

export const smbSalgsflytSjekken: ProsjektType = {
  id: "smb-salgsflyt-sjekken-2026",
  tittel: {
    no: "SMB Salgsflyt-sjekken: Interaktiv diagnose og AI-rapportering",
    en: "SMB Sales Flow Check: Interactive diagnosis and AI reporting",
  },
  teaser: {
    no: "Diagnoseverktøy som kartlegger salgsfriksjon på tvers av ti kommersielle dimensjoner — med kunderapport og AI-generert innsikt for oppfølging.",
    en: "A diagnostic tool that maps sales friction across ten commercial dimensions — with a customer report and AI-generated insight for follow-up.",
  },
  bildeUrl: "/images/smb-salgsflyt-sjekken.png?v=2026061612",
  bildeRamme: "natural",
  dato: "2026-06-16",
  visningsDato: "16.06.26",
  bildeHint: {
    no: "Klikk på bildet for å se SMB Salgsflyt-sjekken i større format.",
    en: "Click the image to view SMB Sales Flow Check in a larger format.",
  },
  innhold: {
    no: `<strong>Hva prosjektet er</strong>

SMB Salgsflyt-sjekken er et interaktivt diagnoseverktøy for ledere som kartlegger friksjon og flaskehalser på tvers av ti kommersielle dimensjoner — fra leadfangst og CRM-bruk til oppfølging, tilbudsprosesser og AI-modenhet. Verktøyet er særlig relevant for SMB, men kan tilpasses andre kommersielle miljøer.

Kunden får en skreddersydd PDF-rapport med konkrete tiltak sendt med en gang diagnosen er fullført. Rådgiveren får parallelt AI-generert innsikt for oppfølging og salgskvalifisering.

<strong>Problemet prosjektet adresserer</strong>

Mange virksomheter har usynlig friksjon i salgsleddet: ubrukte CRM-systemer, ustrukturerte tilbudsprosesser og svak leadoppfølging. Utfordringen er å avdekke rotårsakene systematisk og kvalifisere potensielle kunder uten lange kartleggingsmøter.

<strong>Hva som er bygget eller utviklet</strong>

En tilgangsstyrt diagnoseapp med strukturert spørsmålsflyt, automatisk scoring, dypdykk i svake områder og AI-generering av både kunderapport og intern salgsvurdering — med adminkonsoll for oppfølging.

<strong>Hvordan det fungerer</strong>

Diagnosen gjennomføres i fire steg:

<div class="prosjekt-steg-liste"><blockquote class="prosjekt-innrykk"><strong>1. Hovedkartlegging</strong> — 20 flervalgsspørsmål fordelt på ti dimensjoner gir dimensjons- og totalscore.</blockquote><blockquote class="prosjekt-innrykk"><strong>2. Dypdykk</strong> — De svakeste områdene utløser oppfølgingsspørsmål om rotårsaker, varighet og historiske feilskjær.</blockquote><blockquote class="prosjekt-innrykk"><strong>3. AI-analyse</strong> — Gemini tolker scores og fritekst og genererer kunderapport og intern salgsvurdering parallelt. Kunden får en skreddersydd PDF-rapport sendt med en gang besvarelsen er fullført.</blockquote><blockquote class="prosjekt-innrykk"><strong>4. Adminkonsoll</strong> — Besvarelser samles med kontaktinfo, score, lead-kvalitet og anbefalt oppfølging.</blockquote></div>

<strong>Hvorfor dette er relevant</strong>

Prosjektet viser hvordan AI kan automatisere kvalifisering og rådgivningsforberedelse — og samtidig levere umiddelbar verdi til respondenten.

<strong>Status og modenhet</strong>

Tilgangsstyrt diagnose- og kvalifiseringsverktøy i pilot- og salgsløp. Hele prosessen tar under ti minutter.

<strong>Mulig videreutvikling</strong>

CRM-integrasjon, bransjetilpassede spørsmålssett og utvidet pipeline-styring i adminkonsollet.

<strong>Neste steg</strong>

Spørreundersøkelsen er tilgangsstyrt og krever avtalt tilgangskode. ${prosjektKontaktLenke("no")} dersom du ønsker tilgang eller vil diskutere en mulig pilot. Når tilgang er avtalt, kan ${smbAppLink} brukes som del av diagnose-, kvalifiserings- eller rådgivningsløp.`,
    en: `<strong>What the project is</strong>

SMB Sales Flow Check is an interactive diagnostic tool for leaders that maps friction and bottlenecks across ten commercial dimensions — from lead capture and CRM use to follow-up, proposal processes and AI maturity. The tool is especially relevant for SMBs, but can be adapted to other commercial environments.

The customer receives a tailored PDF report with concrete actions as soon as the diagnosis is complete. The advisor gets parallel AI-generated insight for follow-up and sales qualification.

<strong>The problem the project addresses</strong>

Many organisations have invisible friction in their sales function: unused CRM systems, unstructured proposal processes and weak lead follow-up. The challenge is to uncover root causes systematically and qualify potential clients without long discovery meetings.

<strong>What has been built or developed</strong>

An access-controlled diagnostic app with structured question flow, automatic scoring, deep dives into weak areas and AI generation of both customer report and internal sales assessment — with an admin console for follow-up.

<strong>How it works</strong>

The diagnosis runs in four steps:

<div class="prosjekt-steg-liste"><blockquote class="prosjekt-innrykk"><strong>1. Main assessment</strong> — 20 multiple-choice questions across ten dimensions produce dimension and total scores.</blockquote><blockquote class="prosjekt-innrykk"><strong>2. Deep dive</strong> — The weakest areas trigger follow-up questions on root causes, duration and historical missteps.</blockquote><blockquote class="prosjekt-innrykk"><strong>3. AI analysis</strong> — Gemini interprets scores and free text and generates customer report and internal sales assessment in parallel. The customer receives a tailored PDF report as soon as the survey is complete.</blockquote><blockquote class="prosjekt-innrykk"><strong>4. Admin console</strong> — Responses are collected with contact details, score, lead quality and recommended follow-up.</blockquote></div>

<strong>Why this is relevant</strong>

The project shows how AI can automate qualification and advisory preparation — while still delivering immediate value to the respondent.

<strong>Status and maturity</strong>

Access-controlled diagnostic and qualification tool in pilot and sales engagements. The full process takes under ten minutes.

<strong>Possible further development</strong>

CRM integration, industry-specific question sets and extended pipeline management in the admin console.

<strong>Next steps</strong>

The survey is access-controlled and requires an agreed access code. ${prosjektKontaktLenke("en")} if you want access or to discuss a possible pilot. Once access is agreed, ${smbAppLink} can be used as part of diagnostic, qualification or advisory engagements.`,
  },
};
