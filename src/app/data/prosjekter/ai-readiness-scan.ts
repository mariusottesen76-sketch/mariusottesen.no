import { AI_READINESS_SCAN_APP_URL } from "../../lib/ai-readiness-scan-brand";
import { prosjektKontaktLenke, prosjektKontaktDialogTekst, prosjektTilgangStandard } from "../../lib/prosjekt-lenker";
import { type ProsjektType } from "./predictive-sales-coach";

const readinessAppLink = `<a href="${AI_READINESS_SCAN_APP_URL}" target="_blank" rel="noopener noreferrer" aria-label="Åpne AI Readiness Scan" class="text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">AI Readiness Scan</a>`;

export const aiReadinessScan: ProsjektType = {
  id: "ai-readiness-scan-2026-06",
  tittel: {
    no: "AI Readiness Scan: Kartlegging av AI-beredskap og gjennomføringsevne",
    en: "AI Readiness Scan: Mapping AI readiness and execution capability",
  },
  teaser: {
    no: "En tilgangsstyrt diagnoseapp som gir virksomheter et strukturert bilde av AI-modenhet, prioriterte utviklingsområder og grunnlag for neste steg.",
    en: "An access-controlled diagnostic app that gives organisations a structured picture of AI maturity, prioritised development areas and a basis for next steps.",
  },
  bildeUrl: "/images/ai-ready-scan-nettside1.png?v=20260625",
  bildeRamme: "natural",
  dato: "2026-06-25",
  visningsDato: "25.06.26",
  bildeHint: {
    no: "Klikk på bildet for å se AI Readiness Scan i større format.",
    en: "Click the image to view AI Readiness Scan in a larger format.",
  },
  bilderUnderHovedbilde: [
    {
      src: "/images/ai-ready-scan-nettside2.png?v=20260627",
      alt: {
        no: "AI Readiness Scan — kartlegg, prioriter og kom i gang",
        en: "AI Readiness Scan — map, prioritise and get started",
      },
    },
  ],
  innhold: {
    no: `<strong>Hva prosjektet er</strong>

AI Readiness Scan er et tilgangsstyrt kartleggingsverktøy for ledere og virksomheter som vil avklare AI-modenhet, prioriteringer og neste steg — fra strategi og kompetanse til data, arbeidsprosesser og ansvarlig bruk.

Administrasjonsflaten gir oversikt over besvarelser, mønstre og aktuelle prioriteringer. Virksomheten får et konkret grunnlag for videre AI-arbeid, prioritering og strukturert oppfølging.

<strong>Problemet prosjektet adresserer</strong>

Mange virksomheter ønsker å ta i bruk AI, men mangler felles bilde av nåsituasjonen og hva som bør komme først. Utfordringen er å skape struktur før man investerer i større initiativer, piloter eller teknologi.

<strong>Hva som er bygget eller utviklet</strong>

En tilgangsstyrt diagnoseapp med strukturert spørsmålsflyt, sikker innlogging, tilgangskoder og administrativ oppfølging av virksomheter og kartlegginger.

<strong>Hvordan det fungerer</strong>

Kartleggingen gjennomføres i fire steg:

<div class="prosjekt-steg-liste"><blockquote class="prosjekt-innrykk"><strong>1. Tilgang</strong> — Virksomheten får tilgang gjennom unik tilgangskode eller sikker innlogging.</blockquote><blockquote class="prosjekt-innrykk"><strong>2. Kartlegging</strong> — Deltakeren svarer på spørsmål om strategi, kompetanse, prosesser, data, risiko og ansvarlig bruk.</blockquote><blockquote class="prosjekt-innrykk"><strong>3. Oppslag</strong> — Besvarelser samles og er tilgjengelige for oppfølging i administrasjonsflaten.</blockquote><blockquote class="prosjekt-innrykk"><strong>4. Prioritering</strong> — Resultatet brukes som grunnlag for dialog om neste steg og mulige forbedringsområder.</blockquote></div>

<strong>Hvorfor dette er relevant</strong>

Prosjektet viser hvordan strukturert kartlegging kan gi bedre prioritering og forberedelse — før virksomheten investerer bredt i AI.

<strong>Status og modenhet</strong>

Bygget som tilgangsstyrt kartleggingsverktøy med modenhet for avgrenset testing og videre utvikling.

<strong>Mulig videreutvikling</strong>

AI-generert oppsummering, modenhetsprofil, bransjetilpassede spørsmål og integrasjon mot praktiske læringsarenaer og videre faglig utvikling.

<strong>Videre relevans og mulig anvendelse</strong>

${prosjektTilgangStandard.no} ${prosjektKontaktLenke("no", "Ta gjerne kontakt")} ${prosjektKontaktDialogTekst.no}. ${readinessAppLink} åpner den tilgangsstyrte løsningen.`,
    en: `<strong>What the project is</strong>

AI Readiness Scan is an access-controlled mapping tool for leaders and organisations that want to clarify AI maturity, priorities and next steps — from strategy and competence to data, work processes and responsible use.

The admin environment provides overview of responses, patterns and current priorities. The organisation gets a concrete basis for further AI work, prioritisation and structured follow-up.

<strong>The problem the project addresses</strong>

Many organisations want to adopt AI, but lack a shared picture of the current situation and what should come first. The challenge is to create structure before investing in larger initiatives, pilots or technology.

<strong>What has been built or developed</strong>

An access-controlled diagnostic app with structured question flow, secure login, access codes and administrative follow-up of organisations and assessments.

<strong>How it works</strong>

The assessment runs in four steps:

<div class="prosjekt-steg-liste"><blockquote class="prosjekt-innrykk"><strong>1. Access</strong> — The organisation gains access through a unique access code or secure login.</blockquote><blockquote class="prosjekt-innrykk"><strong>2. Assessment</strong> — The participant answers questions on strategy, competence, processes, data, risk and responsible use.</blockquote><blockquote class="prosjekt-innrykk"><strong>3. Overview</strong> — Responses are collected and available for follow-up in the admin environment.</blockquote><blockquote class="prosjekt-innrykk"><strong>4. Prioritisation</strong> — The result is used as a basis for dialogue on next steps and possible improvement areas.</blockquote></div>

<strong>Why this is relevant</strong>

The project shows how structured mapping can improve prioritisation and advisory preparation — before the organisation invests broadly in AI.

<strong>Status and maturity</strong>

Built as an access-controlled mapping tool with maturity for limited testing and further development.

<strong>Possible further development</strong>

AI-generated summary, maturity profile, industry-specific questions and integration with practical learning arenas and further professional development.

<strong>Further relevance and possible application</strong>

${prosjektTilgangStandard.en} ${prosjektKontaktLenke("en", "Feel free to get in touch")} ${prosjektKontaktDialogTekst.en}. ${readinessAppLink} opens the access-controlled solution.`,
  },
};
