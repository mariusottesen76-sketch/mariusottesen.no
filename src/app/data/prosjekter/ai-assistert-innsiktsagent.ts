import { prosjektKontaktLenke } from "../../lib/prosjekt-lenker";
import { type ProsjektType } from "./predictive-sales-coach";

export const aiAssistertInnsiktsagent: ProsjektType = {
  id: "ai-assistert-innsikts-og-opportunity-agent-2026",
  tittel: {
    no: "Fra innsikt til kommersiell handling: Agentisk arbeidsflyt",
    en: "From insight to commercial action: Agentic workflow",
  },
  teaser: {
    no: "Et praktisk AI-prosjekt der jeg videreutvikler en mer agentisk arbeidsflyt for å forstå oppgaven, velge riktig prosess og omsette innsikt til konkret kommersiell handling.",
    en: "A practical AI project where I am developing a more agentic workflow to understand the task, select the right process and turn insight into concrete commercial action.",
  },
  bildeUrl: "/images/innsikt-handling.png",
  bildeRamme: "natural",
  dato: "2026-04-24",
  visningsDato: "24.04.26",
  bildeHint: {
    no: "Klikk på bildet for å se innsikt-handling i større format.",
    en: "Click the image to view insight-action in a larger format.",
  },
  innhold: {
    no: `<strong>Hva prosjektet er</strong>

Dette prosjektet utforsker hvordan AI kan bevege seg fra enkel innholdsproduksjon til mer agentisk arbeidsflyt. Målet er at systemet skal forstå oppgaven, velge riktig prosess, hente relevant kontekst og foreslå neste steg.

Prosjektet startet som et behov for å gjøre egen kunnskapsbank mer operativ. Det er nå videreutviklet fra en sekvensiell innholdsapp til en mer handlingsorientert arbeidsflyt.

<strong>Problemet prosjektet adresserer</strong>

Mange virksomheter har store mengder innsikt, CRM-data, markedsinformasjon, møtenotater og strategiske vurderinger. Problemet er at innsikten ofte blir liggende passivt og ikke raskt nok oversettes til prioriteringer, salgsoppfølging eller lederbeslutninger.

<strong>Hva som er bygget eller utviklet</strong>

Første versjon håndterer både innholdsarbeid og opportunity discovery. Den henter og strukturerer innsikt fra Notion, men bruker også target-data til å prioritere selskaper, foreslå kontaktstrategi og lage første outreach-utkast.

Prosjektet kobler dermed innsikt, prioritering og kommersiell handling tettere sammen.

<strong>Hvordan det fungerer</strong>

Arbeidsflyten tolker input og klassifiserer hvilken type oppgave som skal løses. Den kan skille mellom innholdsutvikling, markedsinnsikt, target-prioritering, kontaktstrategi og outreach.

Deretter henter den relevant kontekst, strukturerer innsikten og foreslår neste konkrete handling.

<strong>Hvorfor dette er relevant</strong>

Prosjektet er relevant for virksomheter som ønsker å bruke AI til mer enn enkeltstående prompt-svar. Det viser hvordan AI kan støtte kommersielle arbeidsprosesser innen salg, markedsutvikling, møteforberedelse, prioritering og oppfølging.

For arbeidsgivere viser prosjektet evne til å bygge arbeidsflyter som kobler strategi, innsikt og gjennomføring. For kunder viser det hvordan AI kan redusere avstanden mellom informasjon og handling.

<strong>Status og modenhet</strong>

Praktisk AI-prosjekt og arbeidsflyt under videreutvikling. Første versjon håndterer innholdsarbeid og opportunity discovery.

<strong>Mulig videreutvikling</strong>

Arbeidsflyten kan videreutvikles til et verktøy for salgsledere, konsulenter, gründere, rekrutterere og kommersielle team som trenger bedre struktur i innsikt, prioritering og oppfølging.

<strong>Neste steg</strong>

${prosjektKontaktLenke("no")} dersom du ønsker å diskutere hvordan agentiske arbeidsflyter kan brukes i kommersiell utvikling, salgsoppfølging eller kunnskapsarbeid.`,
    en: `<strong>What the project is</strong>

This project explores how AI can move from simple content production to a more agentic workflow. The goal is for the system to understand the task, select the right process, retrieve relevant context and suggest next steps.

The project started from a need to make my own knowledge base more operational. It has now evolved from a sequential content app to a more action-oriented workflow.

<strong>The problem the project addresses</strong>

Many organisations hold large volumes of insight, CRM data, market information, meeting notes and strategic assessments. The problem is that insight often remains passive and is not translated quickly enough into priorities, sales follow-up or leadership decisions.

<strong>What has been built or developed</strong>

The first version handles both content work and opportunity discovery. It retrieves and structures insight from Notion, but also uses target data to prioritise companies, suggest contact strategy and draft initial outreach.

The project thus connects insight, prioritisation and commercial action more closely.

<strong>How it works</strong>

The workflow interprets input and classifies what type of task should be solved. It can distinguish between content development, market insight, target prioritisation, contact strategy and outreach.

It then retrieves relevant context, structures the insight and suggests the next concrete action.

<strong>Why this is relevant</strong>

The project is relevant for organisations that want to use AI for more than one-off prompt responses. It shows how AI can support commercial work processes in sales, market development, meeting preparation, prioritisation and follow-up.

For employers, the project shows the ability to build workflows that connect strategy, insight and execution. For customers, it shows how AI can reduce the distance between information and action.

<strong>Status and maturity</strong>

Practical AI project and workflow under further development. The first version handles content work and opportunity discovery.

<strong>Possible further development</strong>

The workflow can be developed into a tool for sales leaders, consultants, founders, recruiters and commercial teams that need better structure in insight, prioritisation and follow-up.

<strong>Next steps</strong>

${prosjektKontaktLenke("en")} if you would like to discuss how agentic workflows can be used in commercial development, sales follow-up or knowledge work.`,
  },
};
