import type { StrategicPlatformProject } from "./types";

export const controlTowerPlatform: StrategicPlatformProject = {
  slug: "control-tower",
  prosjektId: "control-tower",
  detailPath: "/control-tower",
  meta: {
    title: {
      no: "Control Tower – Decision & Execution Intelligence | Marius Ottesen",
      en: "Control Tower – Decision & Execution Intelligence | Marius Ottesen",
    },
    description: {
      no: "Modulær lederplattform for operativ og kommersiell prioritering, neste beste handling, ansvar og systematisk effektoppfølging.",
      en: "Modular leadership platform for operational and commercial prioritisation, next best action, ownership and systematic impact follow-up.",
    },
    ogImage: "/images/control-tower-hjemmeside-bak.png?v=20260720",
    canonicalPath: "/control-tower",
  },
  teaserCta: {
    primary: { no: "Utforsk Control Tower", en: "Explore Control Tower" },
  },
  teaser: {
    undertittel: {
      no: "Beslutnings- og gjennomføringsplattform for operativ og kommersiell prioritering",
      en: "Decision and execution platform for operational and commercial prioritisation",
    },
    intro: {
      no: "Control Tower er en ferdigstilt beslutnings- og gjennomføringsplattform som omsetter spredte data, KPI-er og risikosignaler til tydelige prioriteringer, tiltak, ansvar og systematisk effektoppfølging.",
      en: "Control Tower is a completed decision and execution platform that turns scattered data, KPIs and risk signals into clear priorities, actions, ownership and systematic impact follow-up.",
    },
    blokker: {
      utfordring: {
        no: "Mange virksomheter har nok data og rapporter, men mangler tydelig prioritering, eierskap og kobling til konkret handling. Kritiske signaler kan derfor oppdages sent, mens tiltak og effekt blir svakt fulgt opp.",
        en: "Many organisations have enough data and reports, but lack clear prioritisation, ownership and connection to concrete action. Critical signals can therefore be detected late, while actions and impact are weakly followed up.",
      },
      bygget: {
        no: "Det er utviklet en funksjonell konseptprototype med felles landingsside, datamodell, regelmotor, AI-støttet analyse, Action Centre og to ledermoduler: Operations Control Tower og Commercial Control Tower.",
        en: "A functional concept prototype has been developed with a shared landing page, data model, rules engine, AI-supported analysis, Action Centre and two leadership modules: Operations Control Tower and Commercial Control Tower.",
      },
      relevans: {
        no: "Prosjektet viser hvordan operativ og kommersiell lederinformasjon kan omsettes til neste beste handling, tydelig ansvar og mer strukturert gjennomføring.",
        en: "The project shows how operational and commercial leadership information can be turned into next best action, clear ownership and more structured execution.",
      },
      status: {
        no: "Ferdigstilt konseptprototype med fungerende Operations- og Commercial-modul, fiktive demodata og uten aktive systemintegrasjoner.",
        en: "Completed concept prototype with working Operations and Commercial modules, fictional demo data and no active system integrations.",
      },
    },
    videreutvikling: {
      no: "Plattformen kan videreutvikles med systemintegrasjoner, rollebaserte arbeidsflater, varslinger, scenarioanalyse og mer avansert AI-støtte. Grunnmodellen kan samtidig tilpasses flere lederroller, funksjoner og bransjer.",
      en: "The platform can be developed further with system integrations, role-based workspaces, alerts, scenario analysis and more advanced AI support. The core model can also be adapted to more leadership roles, functions and industries.",
    },
  },
  detail: {
    statusBadge: {
      no: "Ferdigstilt funksjonell konseptprototype med fiktive demodata",
      en: "Completed functional concept prototype with fictional demo data",
    },
    hero: {
      verdiforslag: {
        no: "En modulær lederplattform som gjør spredte virksomhetssignaler om til prioriteringer, tiltak, ansvar og systematisk effektoppfølging.",
        en: "A modular leadership platform that turns scattered business signals into priorities, actions, ownership and systematic impact follow-up.",
      },
      executiveSummary: {
        no: "Control Tower er utviklet for ledere som trenger å forstå hva som krever oppmerksomhet nå, hvorfor det betyr noe, og hva organisasjonen bør gjøre videre. Plattformen kombinerer en transparent styringslogikk med AI-støttet analyse og konkrete handlingsflater.",
        en: "Control Tower is developed for leaders who need to understand what requires attention now, why it matters, and what the organisation should do next. The platform combines transparent governance logic with AI-supported analysis and concrete action surfaces.",
      },
      bildeAlt: {
        no: "Control Tower – beslutnings- og gjennomføringsplattform for operativ og kommersiell prioritering",
        en: "Control Tower – decision and execution platform for operational and commercial prioritisation",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "Mange ledere mottar store mengder rapporter, KPI-er og signaler fra ulike systemer. Problemet er sjelden mangel på data, men mangel på prioritering, sammenheng og tydelig handling.\n\nRisiko, marginpress, leveranseavvik, svak kundeutvikling eller kontraktsutfordringer kan oppdages for sent. Tiltak blir ofte generelle, eierskapet uklart og effekten lite dokumentert.",
        en: "Many leaders receive large volumes of reports, KPIs and signals from different systems. The problem is rarely a lack of data, but a lack of prioritisation, coherence and clear action.\n\nRisk, margin pressure, delivery deviations, weak customer development or contract challenges can be detected too late. Actions are often generic, ownership unclear and impact poorly documented.",
      },
    },
    logikk: {
      heading: { no: "Styringslogikken", en: "Governance logic" },
      body: {
        no: "Control Tower følger en tydelig styringskjede fra signal til effekt:",
        en: "Control Tower follows a clear governance chain from signal to impact:",
      },
      steps: [
        {
          tittel: { no: "Signal", en: "Signal" },
          beskrivelse: { no: "Hva har endret seg?", en: "What has changed?" },
        },
        {
          tittel: { no: "Konsekvens", en: "Consequence" },
          beskrivelse: { no: "Hvorfor betyr dette noe?", en: "Why does this matter?" },
        },
        {
          tittel: { no: "Prioritet", en: "Priority" },
          beskrivelse: { no: "Hva krever oppmerksomhet først?", en: "What requires attention first?" },
        },
        {
          tittel: { no: "Tiltak", en: "Action" },
          beskrivelse: { no: "Hva bør gjennomføres?", en: "What should be executed?" },
        },
        {
          tittel: { no: "Ansvar", en: "Ownership" },
          beskrivelse: { no: "Hvem eier neste steg?", en: "Who owns the next step?" },
        },
        {
          tittel: { no: "Effekt", en: "Impact" },
          beskrivelse: { no: "Hvordan vet vi at tiltaket virker?", en: "How do we know the action works?" },
        },
      ],
      after: {
        no: "«Neste beste handling» er en sentral del av løsningen. Målet er å prioritere handlinger og ressurser optimalt — ikke bare vise status.",
        en: "«Next best action» is a central part of the solution. The goal is to prioritise actions and resources optimally — not just display status.",
      },
    },
    governanceScenarios: {
      heading: { no: "To eksempler på styringsreisen", en: "Two examples of the governance journey" },
      disclaimer: {
        no: "Scenarioene er illustrative og bruker fiktive data.",
        en: "The scenarios are illustrative and use fictional data.",
      },
      scenarios: [
        {
          heading: {
            no: "Operativt scenario: Leveranseavvik",
            en: "Operational scenario: Delivery deviation",
          },
          fields: [
            {
              label: { no: "Signal", en: "Signal" },
              value: {
                no: "Leveringspresisjonen faller i en kritisk region eller partnerstruktur.",
                en: "Delivery precision is falling in a critical region or partner structure.",
              },
            },
            {
              label: { no: "Konsekvens", en: "Consequence" },
              value: {
                no: "Kundetilfredshet, kostnader og kapasitet kan bli påvirket.",
                en: "Customer satisfaction, costs and capacity may be affected.",
              },
            },
            {
              label: { no: "Prioritet", en: "Priority" },
              value: {
                no: "Avviket må vurderes mot øvrige operative risikoer.",
                en: "The deviation must be assessed against other operational risks.",
              },
            },
            {
              label: { no: "Tiltak", en: "Action" },
              value: {
                no: "Undersøk drivere, avklar kapasitet og etabler korrigerende handling.",
                en: "Investigate drivers, clarify capacity and establish corrective action.",
              },
            },
            {
              label: { no: "Ansvar", en: "Ownership" },
              value: {
                no: "Tiltaket får tydelig eier og frist.",
                en: "The action is assigned a clear owner and deadline.",
              },
            },
            {
              label: { no: "Effekt", en: "Impact" },
              value: {
                no: "Utviklingen følges til leveringspresisjon og risiko er stabilisert.",
                en: "Progress is tracked until delivery precision and risk are stabilised.",
              },
            },
          ],
        },
        {
          heading: {
            no: "Kommersielt scenario: Marginfall eller kontraktutløp",
            en: "Commercial scenario: Margin decline or contract expiry",
          },
          fields: [
            {
              label: { no: "Signal", en: "Signal" },
              value: {
                no: "Marginen faller eller en viktig kontrakt nærmer seg utløp.",
                en: "Margin is falling or an important contract is nearing expiry.",
              },
            },
            {
              label: { no: "Konsekvens", en: "Consequence" },
              value: {
                no: "Kundeinntekt, lønnsomhet og prognose kan bli påvirket.",
                en: "Customer revenue, profitability and forecast may be affected.",
              },
            },
            {
              label: { no: "Prioritet", en: "Priority" },
              value: {
                no: "Kunden vurderes mot strategisk verdi, risiko og tilgjengelig kapasitet.",
                en: "The customer is assessed against strategic value, risk and available capacity.",
              },
            },
            {
              label: { no: "Tiltak", en: "Action" },
              value: {
                no: "Forbered ny kundedialog, prisstrategi eller avtaleoppfølging.",
                en: "Prepare new customer dialogue, pricing strategy or contract follow-up.",
              },
            },
            {
              label: { no: "Ansvar", en: "Ownership" },
              value: {
                no: "Kundeansvarlig og kommersiell leder får avklarte roller.",
                en: "Account owner and commercial leader are assigned clear roles.",
              },
            },
            {
              label: { no: "Effekt", en: "Impact" },
              value: {
                no: "Tiltaket måles mot margin, fornyelse og kundeutvikling.",
                en: "The action is measured against margin, renewal and customer development.",
              },
            },
          ],
        },
      ],
    },
    bygget: {
      heading: { no: "Hva som er bygget", en: "What has been built" },
      items: [
        { no: "Felles landingsside for plattformen", en: "Shared landing page for the platform" },
        { no: "Operations Control Tower", en: "Operations Control Tower" },
        { no: "Commercial Control Tower", en: "Commercial Control Tower" },
        { no: "Executive Overview og health scores", en: "Executive Overview and health scores" },
        { no: "Prioritert risiko- og tiltaksoversikt", en: "Prioritised risk and action overview" },
        { no: "Action Centre med eier, frist og forventet effekt", en: "Action Centre with owner, deadline and expected impact" },
        { no: "AI Brief med forklarte drivere og anbefalte handlinger", en: "AI Brief with explained drivers and recommended actions" },
        { no: "Scenario-simulator", en: "Scenario simulator" },
        { no: "Beslutnings- og effektlogikk", en: "Decision and impact logic" },
        { no: "Import og bruk av tydelig merkede fiktive demodata", en: "Import and use of clearly labelled fictional demo data" },
      ],
    },
    moduler: {
      heading: { no: "De to modulene", en: "The two modules" },
      modules: [
        {
          tittel: { no: "Operations Control Tower", en: "Operations Control Tower" },
          beskrivelse: {
            no: "Operativ styringsmodul for partnerprestasjon, leveranse, kapasitet, kostnad og risiko.",
            en: "Operational governance module for partner performance, delivery, capacity, cost and risk.",
          },
          bygget: true,
          fokusomrader: [
            { no: "Partnerprestasjon", en: "Partner performance" },
            { no: "Leveransekvalitet", en: "Delivery quality" },
            { no: "Kapasitet", en: "Capacity" },
            { no: "Kostnad", en: "Cost" },
            { no: "Risiko", en: "Risk" },
            { no: "Avvik", en: "Deviations" },
            { no: "Tiltak", en: "Actions" },
            { no: "Closed-loop-verifisering", en: "Closed-loop verification" },
          ],
          relevantFor: {
            no: "Relevant for COO-er, driftsledere, operasjonelle ledergrupper og virksomheter med komplekse partner- eller leveransemodeller.",
            en: "Relevant for COOs, operations leaders, operational leadership teams and organisations with complex partner or delivery models.",
          },
        },
        {
          tittel: { no: "Commercial Control Tower", en: "Commercial Control Tower" },
          beskrivelse: {
            no: "Kommersiell styringsmodul for kundehelse, margin, pipeline, kontrakter og oppfølging.",
            en: "Commercial governance module for customer health, margin, pipeline, contracts and follow-up.",
          },
          bygget: true,
          fokusomrader: [
            { no: "Kundehelse", en: "Customer health" },
            { no: "Margin og volum", en: "Margin and volume" },
            { no: "Kontraktutløp", en: "Contract expiry" },
            { no: "Pipeline", en: "Pipeline" },
            { no: "Pris- og avtalestruktur", en: "Pricing and contract structure" },
            { no: "Kundeprioritering", en: "Customer prioritisation" },
            { no: "Teamoppfølging", en: "Team follow-up" },
            { no: "Neste beste kommersielle handling", en: "Next best commercial action" },
          ],
          relevantFor: {
            no: "Relevant for CCO-er, salgsdirektører, kommersielle ledere og B2B-virksomheter med komplekse kundeporteføljer.",
            en: "Relevant for CCOs, sales directors, commercial leaders and B2B organisations with complex customer portfolios.",
          },
        },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan løsningen fungerer", en: "How the solution works" },
      steps: [
        {
          tittel: { no: "Normalisering", en: "Normalisation" },
          beskrivelse: {
            no: "Strukturerte data fra Excel eller CSV normaliseres til en felles modell.",
            en: "Structured data from Excel or CSV is normalised into a shared model.",
          },
        },
        {
          tittel: { no: "Regelmotor", en: "Rules engine" },
          beskrivelse: {
            no: "En transparent regelmotor identifiserer avvik, risiko og prioriteringer.",
            en: "A transparent rules engine identifies deviations, risk and priorities.",
          },
        },
        {
          tittel: { no: "AI-analyse", en: "AI analysis" },
          beskrivelse: {
            no: "AI brukes til å forklare drivere, konsekvenser og anbefalte handlinger.",
            en: "AI is used to explain drivers, consequences and recommended actions.",
          },
        },
        {
          tittel: { no: "Action Centre", en: "Action Centre" },
          beskrivelse: {
            no: "Tiltak overføres til Action Centre med eier, frist og forventet effekt.",
            en: "Actions are transferred to the Action Centre with owner, deadline and expected impact.",
          },
        },
        {
          tittel: { no: "Effektoppfølging", en: "Impact follow-up" },
          beskrivelse: {
            no: "Effekten følges over tid slik at ledelsen kan se hva som er gjennomført, hva som virker, og hva som må justeres.",
            en: "Impact is tracked over time so leadership can see what has been executed, what works, and what must be adjusted.",
          },
        },
      ],
    },
    relevans: {
      heading: { no: "Hvorfor prosjektet er relevant", en: "Why the project is relevant" },
      sections: [
        {
          tittel: { no: "For COO og operasjonelle ledere", en: "For COOs and operational leaders" },
          tekst: {
            no: "Støtter prioritering av partnerprestasjon, kapasitet, kostnad, kvalitet og risiko.",
            en: "Supports prioritisation of partner performance, capacity, cost, quality and risk.",
          },
        },
        {
          tittel: { no: "For CCO og kommersielle ledere", en: "For CCOs and commercial leaders" },
          tekst: {
            no: "Kobler kundehelse, margin, pipeline, avtaler og oppfølging i ett styringsbilde.",
            en: "Connects customer health, margin, pipeline, contracts and follow-up in one governance view.",
          },
        },
        {
          tittel: { no: "For arbeidsgivere", en: "For employers" },
          tekst: {
            no: "Dokumenterer kombinasjonen av kommersiell ledererfaring, operasjonell forståelse, produktutvikling og praktisk AI.",
            en: "Documents the combination of commercial leadership experience, operational understanding, product development and practical AI.",
          },
        },
        {
          tittel: { no: "For samarbeidspartnere", en: "For partners" },
          tekst: {
            no: "Viser en modulær plattformlogikk som kan videreutvikles mot konkrete virksomhetsbehov.",
            en: "Shows a modular platform logic that can be developed further towards concrete business needs.",
          },
        },
      ],
    },
    status: {
      heading: { no: "Status og avgrensninger", en: "Status and limitations" },
      body: {
        no: "Control Tower er ferdigstilt som en funksjonell konseptprototype med Operations- og Commercial-modul, felles datamodell, regelmotor, prioriteringslogikk, Action Centre, AI Brief og fiktive demodata.\n\nLøsningen har foreløpig ikke produksjonsbackend eller aktive integrasjoner mot virksomheters CRM-, ERP-, BI- eller kontraktssystemer. Den er utviklet som porteføljedemonstrasjon av styringslogikk, produktforståelse og mulig anvendelse.",
        en: "Control Tower is completed as a functional concept prototype with Operations and Commercial modules, shared data model, rules engine, prioritisation logic, Action Centre, AI Brief and fictional demo data.\n\nThe solution currently has no production backend or active integrations with organisations' CRM, ERP, BI or contract systems. It is developed as a portfolio demonstration of governance logic, product understanding and potential application.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Videreutvikling av plattformen", en: "Further platform development" },
        punkter: [
          { no: "Integrasjoner mot CRM, ERP, BI, økonomi- og kontraktssystemer", en: "Integrations with CRM, ERP, BI, finance and contract systems" },
          { no: "Automatiske varslinger og eskaleringslogikk", en: "Automatic alerts and escalation logic" },
          { no: "Mer avansert scenarioanalyse", en: "More advanced scenario analysis" },
          { no: "Prognoser og prediktive signaler", en: "Forecasts and predictive signals" },
          { no: "Rollebaserte arbeidsflater og tilgangsstyring", en: "Role-based workspaces and access control" },
          { no: "Beslutningslogg og closed-loop-effektmåling", en: "Decision log and closed-loop impact measurement" },
          { no: "AI-støttet executive brief", en: "AI-supported executive brief" },
          { no: "Mulighet for sanntids- eller periodiske dataoppdateringer", en: "Real-time or periodic data updates" },
        ],
      },
      tilpasning: {
        heading: { no: "Tilpasning til andre funksjoner og bransjer", en: "Adaptation to other functions and industries" },
        funksjoner: {
          heading: { no: "Andre funksjoner", en: "Other functions" },
          punkter: [
            { no: "CFO og økonomistyring", en: "CFO and financial management" },
            { no: "HR og organisasjonsutvikling", en: "HR and organisational development" },
            { no: "Customer Service", en: "Customer Service" },
            { no: "Prosjekt- og programledelse", en: "Project and programme management" },
            { no: "Innkjøp og leverandørstyring", en: "Procurement and supplier management" },
            { no: "Bærekraft og compliance", en: "Sustainability and compliance" },
            { no: "Produkt- og innovasjonsportefølje", en: "Product and innovation portfolio" },
            { no: "Daglig leder og samlet virksomhetsstyring", en: "CEO and overall business governance" },
          ],
        },
        bransjer: {
          heading: { no: "Mulige bransjetilpasninger", en: "Possible industry adaptations" },
          punkter: [
            { no: "Gjenvinning og sirkulærøkonomi", en: "Recycling and circular economy" },
            { no: "Industri og produksjon", en: "Industry and manufacturing" },
            { no: "Logistikk og distribusjon", en: "Logistics and distribution" },
            { no: "Energi og infrastruktur", en: "Energy and infrastructure" },
            { no: "Tjenestevirksomheter", en: "Service businesses" },
            { no: "Grossist og handel", en: "Wholesale and retail" },
            { no: "Helse og klinikkdrift", en: "Healthcare and clinic operations" },
            { no: "B2B-selskaper med komplekse kunde- eller partnerstrukturer", en: "B2B companies with complex customer or partner structures" },
          ],
        },
        note: {
          no: "Selve styringslogikken kan beholdes, mens signaler, KPI-er, terskelverdier, tiltak, roller og datakilder tilpasses den aktuelle virksomheten.",
          en: "The governance logic itself can be retained, while signals, KPIs, thresholds, actions, roles and data sources are adapted to the organisation in question.",
        },
      },
    },
    avslutning: {
      heading: { no: "Fra virksomhetssignal til neste beste handling", en: "From business signal to next best action" },
      body: {
        no: "Control Tower viser hvordan ledere kan gå fra fragmenterte data og rapporter til tydeligere prioritering, ansvar og gjennomføring. Ta kontakt dersom du ønsker å diskutere hvordan tilsvarende styringslogikk kan være relevant i en lederrolle, virksomhet eller mulig faglig sammenheng.",
        en: "Control Tower shows how leaders can move from fragmented data and reports to clearer prioritisation, ownership and execution. Get in touch if you would like to discuss how similar governance logic could be relevant in a leadership role, organisation or potential professional context.",
      },
      secondaryLabel: {
        no: "Tilbake til AI-prosjekter",
        en: "Back to AI projects",
      },
    },
    utvikler: {
      navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
      rolle: { no: "Kommersiell leder og AI-strateg", en: "Commercial leader and AI strategist" },
      beskrivelse: {
        no: "Utvikler virksomhetsnære plattformkonsepter som kobler kommersiell ledelse, operativ gjennomføring, beslutningsstøtte og praktisk AI.",
        en: "Develops business-oriented platform concepts that connect commercial leadership, operational execution, decision support and practical AI.",
      },
    },
  },
};
