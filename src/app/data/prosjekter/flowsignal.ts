import { FLOW_SIGNAL_APP_URL } from "../../lib/flowsignal-brand";
import { prosjektKontaktLenke, prosjektKontaktDialogTekst, prosjektTilgangStandard } from "../../lib/prosjekt-lenker";
import { prosjektVidereutviklingTekst } from "../prosjekt-videreutvikling";
import { type ProsjektType } from "./predictive-sales-coach";

const fsAppLink = `<a href="${FLOW_SIGNAL_APP_URL}" target="_blank" rel="noopener noreferrer" aria-label="Åpne FlowSignal v1.0" class="fs-app-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"><span class="fs-mark">FlowSignal</span> <span class="fs-v">v1.0</span></a>`;

/**
 * Hovedbilde: flow-signal1.png. Under: flow-signal3.png, energi-balanse.png.
 */
export const flowSignal: ProsjektType = {
  id: "flowsignal-2026-05",
  tittel: {
    no: "FlowSignal v1.0: Profilinnsikt, dagsform og samhandling",
    en: "FlowSignal v1.0: Profile insight, daily form and collaboration",
  },
  teaser: {
    no: "FlowSignal er et AI-støttet samhandlings- og utviklingsverktøy for team som ønsker å gjøre profilinnsikt, dagsform og dialog mer praktisk anvendbart i hverdagen.",
    en: "FlowSignal is an AI-supported collaboration and development tool for teams that want to make profile insight, daily form and dialogue more practically useful in everyday work.",
  },
  bildeUrl: "/images/flow-signal1.png?v=20260529",
  bildeRamme: "natural",
  dato: "2026-05-29",
  visningsDato: "29.05.26",
  bildeHint: {
    no: "Klikk på bildet for å se FlowSignal i større format.",
    en: "Click the image to view FlowSignal in a larger format.",
  },
  bilderUnderHovedbilde: [
    {
      src: "/images/flow-signal3.png?v=20260519",
      alt: {
        no: "FlowSignal – Bruk mennesker riktigere i salg, profil, samspill og trening",
        en: "FlowSignal – Use people more effectively in sales, profile, collaboration and training",
      },
    },
    {
      src: "/images/energi-balanse.png?v=2026061612",
      alt: {
        no: "FlowSignal – Energi og balanse i dagsform og handlingsrom",
        en: "FlowSignal – Energy and balance in daily form and room to act",
      },
    },
  ],
  innhold: {
    no: `<strong>Hva prosjektet er</strong>

FlowSignal er utviklet for ledere, kommersielle team og organisasjoner som ønsker bedre innsikt i hvordan mennesker skaper verdi, samarbeider og påvirkes av dagsform.

Appen samler personprofil, dagsform, dialogstøtte, samhandlingstrening, refleksjon og anbefalte neste steg i én praktisk arbeidsflate. Målet er ikke å forklare mennesker teoretisk, men å gjøre menneskelig innsikt mer handlingsbar.

<strong>Problemet prosjektet adresserer</strong>

Mange team har tilgang til personprofiler, medarbeiderinnsikt og utviklingsverktøy, men sliter med å bruke innsikten i hverdagen.

Profilrapporter blir ofte liggende statisk, mens reelle utfordringer oppstår i møter, prioriteringer, samhandling, kapasitet, rolleforståelse og krevende dialoger. FlowSignal er utviklet for å gjøre denne innsikten mer levende, praktisk og situasjonsnær.

<strong>Hva som er bygget eller utviklet</strong>

Det er utviklet en lukket pilotversjon av FlowSignal med profilgrunnlag, Talent Dynamics-inspirert flytrefleksjon, dagsformregistrering, Fyrtårnet, dialogstøtte, trening, refleksjon og anbefalte neste steg.

Brukere med formell Talent Dynamics-rapport kan bruke rapporten som profilgrunnlag. Brukere uten rapport kan starte med en enklere flytrefleksjon. Dette er en foreløpig selvkartlegging, ikke en formell Talent Dynamics-profil.

<strong>Hvordan det fungerer</strong>

FlowSignal kombinerer tre hovedspor:

<div class="prosjekt-steg-liste"><blockquote class="prosjekt-innrykk"><strong>1. Profil og arbeidsstil</strong> — Brukeren får et praktisk utgangspunkt for å reflektere over styrker, energidrivere, kommunikasjonsstil og samspill med andre.</blockquote><blockquote class="prosjekt-innrykk"><strong>2. Dagsform og handlingsrom</strong> — Fyrtårnet brukes som modell for energi, fokus, indre ro, arbeidspress, flyt i samspill og opplevd handlingsrom.</blockquote><blockquote class="prosjekt-innrykk"><strong>3. Dialog, trening og samhandling</strong> — Appen kan brukes til 1:1-samtaler, teammøter, rolleavklaringer, onboarding og krevende dialoger.</blockquote></div>

FlowSignal er ikke utviklet som et kontroll-, vurderings- eller diagnoseverktøy. Hensikten er å gi brukeren bedre språk, tydeligere valg og mer presise neste steg.

<strong>Hvorfor dette er relevant</strong>

FlowSignal er relevant for arbeidsgivere, ledere og team som ønsker bedre samhandling, mer presis kommunikasjon og mer praktisk bruk av menneskelig innsikt.

For arbeidsgivere viser prosjektet hvordan AI kan brukes til å støtte ledelse, teamutvikling, onboarding, rolleforståelse og bedre dialog. Prosjektet viser hvordan personprofil, refleksjon og dagsform kan kobles til konkrete anbefalinger i arbeidshverdagen.

<strong>Status og modenhet</strong>

FlowSignal v1.0 er en lukket pilot. Løsningen er bygget som en tilgangsstyrt, praktisk arbeidsflate for avgrenset testbruk i avtalte løp.

Prosjektet er fortsatt under utvikling, med særlig fokus på bedre rapportimport, redigerbart profilgrunnlag, mer presise anbefalinger og tydeligere lederverdi.

<strong>Mulig videreutvikling</strong>

${prosjektVidereutviklingTekst("flowsignal-2026-05", "no")}

<strong>Hvordan FlowSignal skiller seg fra PSCv2.0</strong>

FlowSignal handler primært om mennesker, roller, dagsform og intern samhandling. PSCv2.0 handler primært om salgstrening, kundemøter og kommersiell samtalepresisjon.

Der FlowSignal hjelper team å samarbeide bedre, trener PSCv2.0 selgere på konkrete kundedialoger.

<strong>Videre relevans og mulig anvendelse</strong>

${prosjektTilgangStandard.no} ${prosjektKontaktLenke("no", "Ta gjerne kontakt")} ${prosjektKontaktDialogTekst.no}. ${fsAppLink} åpner den tilgangsstyrte løsningen.`,
    en: `<strong>What the project is</strong>

FlowSignal is built for leaders, commercial teams and organisations that want better insight into how people create value, collaborate and are affected by daily form.

The app brings together person profile, daily form, dialogue support, collaboration training, reflection and recommended next steps in one practical workspace. The goal is not to explain people theoretically, but to make human insight more actionable.

<strong>The problem the project addresses</strong>

Many teams have access to person profiles, employee insight and development tools, but struggle to use that insight in everyday work.

Profile reports often remain static, while real challenges arise in meetings, prioritisation, collaboration, capacity, role understanding and demanding dialogues. FlowSignal is built to make this insight more alive, practical and situation-specific.

<strong>What has been built or developed</strong>

A closed pilot version of FlowSignal has been developed with profile foundation, Talent Dynamics-inspired flow reflection, daily form registration, the Lighthouse, dialogue support, training, reflection and recommended next steps.

Users with a formal Talent Dynamics report can use the report as a profile foundation. Users without a report can start with a simpler flow reflection. This is a preliminary self-assessment, not a formal Talent Dynamics profile.

<strong>How it works</strong>

FlowSignal combines three main tracks:

<div class="prosjekt-steg-liste"><blockquote class="prosjekt-innrykk"><strong>1. Profile and work style</strong> — The user gets a practical starting point for reflecting on strengths, energy drivers, communication style and interaction with others.</blockquote><blockquote class="prosjekt-innrykk"><strong>2. Daily form and room to act</strong> — The Lighthouse is used as a model for energy, focus, inner calm, work pressure, flow in collaboration and perceived room to act.</blockquote><blockquote class="prosjekt-innrykk"><strong>3. Dialogue, training and collaboration</strong> — The app can be used in 1:1 conversations, team meetings, role clarifications, onboarding and demanding dialogues.</blockquote></div>

FlowSignal is not built as a control, assessment or diagnostic tool. The purpose is to give users better language, clearer choices and more precise next steps.

<strong>Why this is relevant</strong>

FlowSignal is relevant for employers, leaders and teams that want better collaboration, more precise communication and more practical use of human insight.

For employers, the project shows how AI can support leadership, team development, onboarding, role understanding and better dialogue. The project shows how person profile, reflection and daily form can be connected to concrete recommendations in everyday work.

<strong>Status and maturity</strong>

FlowSignal v1.0 is a closed pilot. The solution is built as an access-controlled, practical workspace for limited use in agreed engagements.

The project is still under development, with particular focus on better report import, editable profile foundation, more precise recommendations and clearer leadership value.

<strong>Possible further development</strong>

${prosjektVidereutviklingTekst("flowsignal-2026-05", "en")}

<strong>How FlowSignal differs from PSCv2.0</strong>

FlowSignal is primarily about people, roles, daily form and internal collaboration. PSCv2.0 is primarily about sales training, customer meetings and commercial conversation precision.

Where FlowSignal helps teams collaborate better, PSCv2.0 trains sales reps on concrete customer dialogues.

<strong>Further relevance and possible application</strong>

${prosjektTilgangStandard.en} ${prosjektKontaktLenke("en", "Feel free to get in touch")} ${prosjektKontaktDialogTekst.en}. ${fsAppLink} opens the access-controlled solution.`,
  },
};
