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
      no: "Beslutnings- og gjennomføringsplattform som omsetter operative og kommersielle signaler til prioritering, handling, ansvar og effekt.",
      en: "Decision and execution platform that turns operational and commercial signals into prioritisation, action, ownership and impact.",
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
      no: "Control Tower omsetter operative og kommersielle signaler til konsekvens, prioritet, neste beste handling, tydelig ansvar og strukturert effektoppfølging.",
      en: "Control Tower turns operational and commercial signals into consequence, priority, next best action, clear ownership and structured impact follow-up.",
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
        no: "Funksjonell konseptprototype med Operations- og Commercial-modul, transparent regelmotor og fiktive demodata.",
        en: "Functional concept prototype with Operations and Commercial modules, transparent rules engine and fictional demo data.",
      },
    },
    videreutvikling: {
      no: "Videreutvikling kan omfatte produksjonsintegrasjoner, sikker innlogging og rollebasert tilgang, permanent historikk, varslinger og eskalering, periodiske eller sanntidsbaserte dataoppdateringer og mer avansert prediktiv analyse.",
      en: "Further development may include production integrations, secure login and role-based access, permanent history, alerts and escalation, periodic or real-time data updates and more advanced predictive analysis.",
    },
  },
  detail: {
    statusBadge: {
      no: "Ferdigstilt funksjonell konseptprototype med fiktive demodata",
      en: "Completed functional concept prototype with fictional demo data",
    },
    hero: {
      verdiforslag: {
        no: "En modulær lederplattform som omsetter spredte operative og kommersielle signaler til tydelige prioriteringer, neste beste handling, ansvar og strukturert effektoppfølging.",
        en: "A modular leadership platform that turns scattered operational and commercial signals into clear priorities, next best action, ownership and structured impact follow-up.",
      },
      executiveSummary: {
        no: "Control Tower er utviklet for ledere som trenger å forstå hva som krever oppmerksomhet nå, hvorfor det betyr noe, hvem som eier neste steg, og hvordan gjennomførte tiltak skal følges opp.",
        en: "Control Tower is developed for leaders who need to understand what requires attention now, why it matters, who owns the next step, and how executed actions should be followed up.",
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
        { no: "Felles landingsside og lederorientert appskall", en: "Shared landing page and leadership-oriented app shell" },
        { no: "Operations Control Tower", en: "Operations Control Tower" },
        { no: "Commercial Control Tower", en: "Commercial Control Tower" },
        { no: "Lederoversikt med porteføljehelse og prioriterte signaler", en: "Leadership overview with portfolio health and prioritised signals" },
        { no: "Transparent regelmotor", en: "Transparent rules engine" },
        { no: "Prioriterte risikoer og avvik", en: "Prioritised risks and deviations" },
        { no: "Action Centre med eier, frist og forventet effekt", en: "Action Centre with owner, deadline and expected impact" },
        { no: "Neste beste handling", en: "Next best action" },
        { no: "Beslutnings- og verifikasjonslogikk", en: "Decision and verification logic" },
        { no: "Scenarioanalyse", en: "Scenario analysis" },
        { no: "AI-støttet brief med forklarte drivere og anbefalte handlinger", en: "AI-supported brief with explained drivers and recommended actions" },
        { no: "Fiktive og tydelig merkede demodata", en: "Fictional and clearly labelled demo data" },
      ],
    },
    moduler: {
      heading: { no: "De to modulene", en: "The two modules" },
      modules: [
        {
          tittel: { no: "Operations Control Tower", en: "Operations Control Tower" },
          beskrivelse: {
            no: "Operativ styringsmodul for partnerprestasjon, levering, kapasitet, kostnad, kvalitet og risiko.",
            en: "Operational governance module for partner performance, delivery, capacity, cost, quality and risk.",
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
            { no: "Verifikasjon fra tiltak til effekt", en: "Verification from action to impact" },
          ],
          relevantFor: {
            no: "Relevant for COO-er, driftsledere, operasjonelle ledergrupper og virksomheter med komplekse partner- eller leveransemodeller.",
            en: "Relevant for COOs, operations leaders, operational leadership teams and organisations with complex partner or delivery models.",
          },
        },
        {
          tittel: { no: "Commercial Control Tower", en: "Commercial Control Tower" },
          beskrivelse: {
            no: "Kommersiell styringsmodul for kundehelse, margin, volum, pipeline, kontrakter, pris og neste beste kommersielle handling.",
            en: "Commercial governance module for customer health, margin, volume, pipeline, contracts, pricing and next best commercial action.",
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
            no: "Plattformen demonstrerer hvordan strukturerte Excel- eller CSV-data kan normaliseres til en felles styringsmodell.",
            en: "The platform demonstrates how structured Excel or CSV data can be normalized into a shared management model.",
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
        no: "Control Tower er ferdigstilt som en funksjonell konseptprototype med Operations- og Commercial-modul, felles styringslogikk, transparent regelmotor, Action Centre og fiktive demodata. Løsningen har ikke produksjonsbackend eller aktive integrasjoner mot virksomheters CRM-, ERP-, BI-, økonomi- eller kontraktssystemer.",
        en: "Control Tower is completed as a functional concept prototype with Operations and Commercial modules, shared governance logic, transparent rules engine, Action Centre and fictional demo data. The solution has no production backend or active integrations with organisations' CRM, ERP, BI, finance or contract systems.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Videreutvikling av plattformen", en: "Further platform development" },
        punkter: [
          { no: "Produksjonsintegrasjoner mot CRM, ERP, BI, økonomi- og kontraktssystemer", en: "Production integrations with CRM, ERP, BI, finance and contract systems" },
          { no: "Sikker innlogging og rollebasert tilgang", en: "Secure login and role-based access" },
          { no: "Permanent historikk", en: "Permanent history" },
          { no: "Varslinger og eskalering", en: "Alerts and escalation" },
          { no: "Periodiske eller sanntidsbaserte dataoppdateringer", en: "Periodic or real-time data updates" },
          { no: "Mer avansert prediktiv analyse", en: "More advanced predictive analysis" },
        ],
      },
      tilpasning: {
        heading: { no: "Tilpasning til andre funksjoner og bransjer", en: "Adaptation to other functions and industries" },
        funksjoner: {
          heading: { no: "Andre funksjoner", en: "Other functions" },
          punkter: [
            { no: "CFO og økonomistyring", en: "CFO and financial management" },
            { no: "HR og organisasjonsutvikling", en: "HR and organisational development" },
            { no: "Kundeservice", en: "Customer service" },
            { no: "Prosjekt- og programledelse", en: "Project and programme management" },
            { no: "Innkjøp og leverandørstyring", en: "Procurement and supplier management" },
            { no: "Bærekraft og etterlevelse", en: "Sustainability and compliance" },
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
