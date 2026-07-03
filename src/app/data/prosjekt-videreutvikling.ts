/** Skreddersydd tekst under «Mulig videreutvikling» per prosjekt — tilpasset bruksområder og overføringspotensial. */

type Lang = "no" | "en";

const tekster: Record<string, Record<Lang, string>> = {
  "predictive-sales-coach-2026": {
    no: "PSCv2.0 er bygget for salgstrening, men grunnmodellen kan tilpasses andre selskaper, bransjer og profesjonelle samtalesituasjoner. Videre potensial inkluderer forhandlingstrening, intervjutrening, lederdialoger, kundeservice, rådgivning, vanskelige samtaler og andre situasjoner der trygghet, presisjon og tilpasning er avgjørende.",
    en: "PSCv2.0 is built for sales training, but the core model can be adapted for other organisations, industries and professional conversation situations. Further potential includes negotiation training, interview training, leadership dialogues, customer service, advisory conversations, difficult conversations and other situations where confidence, precision and adaptation are critical.",
  },
  "flowsignal-2026-05": {
    no: "FlowSignal er bygget for team- og lederinnsikt, men kan tilpasses andre organisasjoner, bransjer og samarbeidskontekster. Videre potensial inkluderer onboarding, lederutvikling, rolleavklaring, ukesplanlegging, teamutvikling, prosjektstøtte og samhandlingsstøtte i kommersielle og tverrfaglige miljøer.",
    en: "FlowSignal is built for team and leadership insight, but can be adapted for other organisations, industries and collaboration contexts. Further potential includes onboarding, leadership development, role clarification, weekly planning, team development, project support and collaboration support in commercial and cross-functional environments.",
  },
  "ai-readiness-scan-2026-06": {
    no: "AI Readiness Scan er bygget for AI-modenhetsvurdering, men kan tilpasses andre virksomheter, bransjer og modenhetsnivåer. Videre potensial inkluderer bransjespesifikke spørsmålssett, AI-generert oppsummering, modenhetsprofiler, prioriteringsmatriser og kobling mot implementerings- og læringsløp.",
    en: "AI Readiness Scan is built for AI maturity assessment, but can be adapted for other organisations, industries and maturity levels. Further potential includes industry-specific question sets, AI-generated summaries, maturity profiles, prioritisation matrices and links to implementation and learning tracks.",
  },
  "smb-salgsflyt-sjekken-2026": {
    no: "SMB Salgsflyt-sjekken er bygget for SMB-salg, men kan tilpasses andre selskaper, bransjer og salgsmodeller. Videre potensial inkluderer CRM-integrasjon, bransjetilpassede diagnostikk-spørsmål, pipeline-styring, oppfølgingslogikk og rapportering for ulike kommersielle team.",
    en: "SMB Sales Flow Check is built for SMB sales, but can be adapted for other organisations, industries and sales models. Further potential includes CRM integration, industry-specific diagnostic questions, pipeline management, follow-up logic and reporting for different commercial teams.",
  },
  "mariusottesen-no-2025": {
    no: "Nettsiden er bygget som min egen leder- og porteføljeplattform, men modellen kan tilpasses andre profiler, selskaper, bransjer og faglige kontekster. Videre potensial inkluderer employer branding-nettsider, consulting-porteføljer, kuraterte case-sider, produktlandingssider og integrerte demonstratorer for ledere, rådgivere og kommersielle miljøer.",
    en: "The website is built as my own leadership and portfolio platform, but the model can be adapted for other profiles, organisations, industries and professional contexts. Further potential includes employer branding sites, consulting portfolios, curated case pages, product landing pages and integrated demonstrators for leaders, advisors and commercial environments.",
  },
  "skoyenasen-tannklinikk-2026": {
    no: "Caset er bygget for pasientreise og booking i tannhelsesektoren, men kan tilpasses andre klinikker, servicebedrifter og kundereiseorienterte virksomheter. Videre potensial inkluderer recall, digital oppfølging, flerspråklig front-end, smart intake og bookingflyt for helse, beauty, rådgivning og andre konsulentintensive tjenester.",
    en: "The case is built for patient journey and booking in dental care, but can be adapted for other clinics, service businesses and customer-journey-oriented organisations. Further potential includes recall, digital follow-up, multilingual front-end, smart intake and booking flows for healthcare, beauty, advisory and other consultation-intensive services.",
  },
  "ai-value-lab-oslo-2026": {
    no: "AI Value Lab Oslo er et tverrfaglig initiativ, men modellen kan tilpasses andre nettverk, bransjer og læringsarenaer. Videre potensial inkluderer AI Growth Sprint-spor, use case-prioritering, prosesskartlegging, praktiske øvelsesarenaer og governance light for team og virksomheter i ulike modenhetsfaser.",
    en: "AI Value Lab Oslo is a cross-disciplinary initiative, but the model can be adapted for other networks, industries and learning arenas. Further potential includes AI Growth Sprint tracks, use case prioritisation, process mapping, practical practice arenas and governance light for teams and organisations at different maturity stages.",
  },
  "ai-faginnlegg-serie-2026": {
    no: "Fagsporet er bygget for tankeledelse om AI og ledelse, men kan tilpasses andre fagområder, publikum og kommunikasjonsflater. Videre potensial inkluderer anbefalte lesestier for rekrutterere, ledere, SMB-er, salgsorganisasjoner, bransjenettverk og intern kunnskapsdeling i større virksomheter.",
    en: "The track is built for thought leadership on AI and leadership, but can be adapted for other subject areas, audiences and communication platforms. Further potential includes recommended reading paths for recruiters, leaders, SMBs, sales organisations, industry networks and internal knowledge sharing in larger organisations.",
  },
  "ai-assistert-innsikts-og-opportunity-agent-2026": {
    no: "Arbeidsflyten er bygget for innsikt til kommersiell handling, men kan tilpasses andre selskaper, bransjer og beslutningssituasjoner. Videre potensial inkluderer salgslederstøtte, rekrutteringsdialog, markedsprioritering, oppfølgingsmotorer og agentiske flyter for konsulenter, gründere og kommersielle team.",
    en: "The workflow is built for insight into commercial action, but can be adapted for other organisations, industries and decision situations. Further potential includes sales leadership support, recruitment dialogue, market prioritisation, follow-up engines and agentic flows for consultants, founders and commercial teams.",
  },
  "ai-assistert-innsikts-og-innholdsagent-2026": {
    no: "Motoren er bygget for innsikt og innholdsproduksjon, men kan tilpasses andre virksomheter, fagmiljøer og kommunikasjonsbehov. Videre potensial inkluderer intern kunnskapsbase, markedssignalanalyse, budskapsutvikling, thought leadership-støtte og innholdsproduksjon for ledelse, salg, HR og profesjonelle tjenesteselskaper.",
    en: "The engine is built for insight and content production, but can be adapted for other organisations, professional communities and communication needs. Further potential includes internal knowledge bases, market signal analysis, messaging development, thought leadership support and content production for leadership, sales, HR and professional services firms.",
  },
  "ai-arkitektur-beslutningsstotte-2026": {
    no: "Arkitekturen er bygget for prioritering og beslutningsstøtte, men kan tilpasses andre selskaper, bransjer og styringsmodeller. Videre potensial inkluderer dashboards, gap-analyse, use case-prioritering, salgs- og markedsoversikt og lederverktøy for strategi, transformasjon og kommersiell styring.",
    en: "The architecture is built for prioritisation and decision support, but can be adapted for other organisations, industries and governance models. Further potential includes dashboards, gap analysis, use case prioritisation, sales and market overview and leadership tools for strategy, transformation and commercial governance.",
  },
  "prosjektoppgave-strategisk-implementering-2026": {
    no: "Metodikken er utviklet for ansvarlig AI-implementering, men kan tilpasses andre virksomheter, bransjer og modenhetsnivåer. Videre potensial inkluderer workshop-format, implementeringsveikart, governance-rammer, use case-prioritering og konkrete gjennomføringsplaner for lederteam og transformasjonsprosjekter.",
    en: "The methodology is developed for responsible AI implementation, but can be adapted for other organisations, industries and maturity levels. Further potential includes workshop formats, implementation roadmaps, governance frameworks, use case prioritisation and concrete execution plans for leadership teams and transformation projects.",
  },
  "psc-promo-video-moc-2026": {
    no: "Promovideoen er laget for PSC, men formatet kan tilpasses andre produkter, selskaper, bransjer og posisjoneringsbehov. Videre potensial inkluderer demoer, forklaringsfilmer, onboarding, salgsopplæring, workshop-materiell og visuell konseptformidling for ledere, rådgivere og kommersielle team.",
    en: "The promo video was created for PSC, but the format can be adapted for other products, organisations, industries and positioning needs. Further potential includes demos, explainer films, onboarding, sales training, workshop material and visual concept communication for leaders, advisors and commercial teams.",
  },
};

export function prosjektVidereutviklingTekst(prosjektId: string, lang: Lang): string {
  return (
    tekster[prosjektId]?.[lang] ??
    (lang === "no"
      ? "Prosjektet kan videreutvikles og tilpasses andre områder, selskaper, bransjer og tilsvarende produkttyper."
      : "The project can be further developed and adapted for other areas, organisations, industries and similar product types.")
  );
}
