import type { StrategicPlatformProject } from "./types";
import { BILAGSASSISTENT_HERO_IMAGE, BILAGSASSISTENT_MATURITY_LABEL } from "../../lib/bilagsassistent-brand";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: {
    no: "Kommersiell leder, AI-strateg og konseptutvikler",
    en: "Commercial leader, AI strategist and concept developer",
  },
  beskrivelse: {
    no: "Konsept, produktlogikk, brukerflyt og løsning er utviklet med utgangspunkt i et konkret administrativt behov i en mindre virksomhet. Prosjektet kombinerer forretningsforståelse, arbeidsflyt, digital transformasjon, produktutvikling og praktisk bruk av teknologi.",
    en: "Concept, product logic, user flow and solution are developed from a concrete administrative need in a small business. The project combines business understanding, workflow, digital transformation, product development and practical use of technology.",
  },
};

export const bilagsassistentPlatform: StrategicPlatformProject = {
  slug: "bilagsassistent",
  prosjektId: "bilagsassistent-2026-09",
  detailPath: "/bilagsassistent",
  meta: {
    title: {
      no: "Bilagsassistent | Automatisert bilagsflyt for små virksomheter | Marius Ottesen",
      en: "Receipt Assistant | Automated voucher workflow for small businesses | Marius Ottesen",
    },
    description: {
      no: "Bilagsassistent samler, kontrollerer, registrerer og arkiverer kvitteringer og bilag fra Gmail, vedlegg og synkroniserte mapper.",
      en: "Receipt Assistant collects, reviews, registers and archives receipts and vouchers from Gmail, attachments and synced folders.",
    },
    ogImage: BILAGSASSISTENT_HERO_IMAGE,
    canonicalPath: "/bilagsassistent",
  },
  teaser: {
    undertittel: {
      no: "Automatisert innhenting, kontroll og strukturering av kvitteringer og bilag",
      en: "Automated collection, review and structuring of receipts and vouchers",
    },
    intro: {
      no: "En Windows-basert arbeidsflate som finner, samler, kontrollerer, registrerer og arkiverer bilag fra Gmail, vedlegg og lokale eller synkroniserte mapper.",
      en: "A Windows-based workspace that finds, gathers, reviews, registers and archives vouchers from Gmail, attachments and local or synced folders.",
    },
    blokker: {
      utfordring: {
        no: "Kvitteringer og fakturaer ligger ofte spredt mellom innbokser, vedlegg, mobilbilder og nedlastinger.",
        en: "Receipts and invoices are often scattered across inboxes, attachments, mobile photos and downloads.",
      },
      bygget: {
        no: "Funksjonell MVP med Gmail-tilkobling, kandidatliste, kontrollkø, dokumentuttrekk, duplikatkontroll, register og arkivering.",
        en: "Functional MVP with Gmail connection, candidate list, review queue, document extraction, duplicate control, register and archiving.",
      },
      relevans: {
        no: "Viser hvordan fragmentert administrativt arbeid kan bli en kontrollert arbeidsflyt med tydelige beslutningspunkter.",
        en: "Shows how fragmented administrative work can become a controlled workflow with clear decision points.",
      },
      status: {
        no: "Ferdigstilt funksjonell MVP · pilotklar.",
        en: "Completed functional MVP · pilot-ready.",
      },
    },
    videreutvikling: {
      no: "Videre utvikling kan omfatte Outlook, flere e-postkontoer, mobilinnboks, regnskapssystemintegrasjoner og eksport — som mulig utvikling, ikke eksisterende funksjonalitet.",
      en: "Further development may include Outlook, multiple email accounts, mobile inbox, accounting integrations and export — as possible development, not existing functionality.",
    },
  },
  detail: {
    statusBadge: BILAGSASSISTENT_MATURITY_LABEL,
    hero: {
      verdiforslag: {
        no: "Fra spredte kvitteringer til strukturert bilagsflyt",
        en: "From scattered receipts to a structured document workflow",
      },
      executiveSummary: {
        no: "En Windows-basert arbeidsflate som finner, samler, kontrollerer, registrerer og arkiverer bilag fra Gmail, vedlegg og lokale eller synkroniserte mapper.",
        en: "A Windows-based workspace that finds, gathers, reviews, registers and archives vouchers from Gmail, attachments and local or synced folders.",
      },
      bildeAlt: {
        no: "Bilagsassistent – automatisert innhenting og strukturering av kvitteringer og bilag",
        en: "Receipt Assistant – automated collection and structuring of receipts and vouchers",
      },
    },
    kortFortalt: {
      heading: { no: "Hva prosjektet er", en: "What the project is" },
      body: {
        no: "Bilagsassistent er en funksjonell MVP utviklet for små virksomheter som trenger bedre oversikt over kvitteringer, fakturaer og annen kostnadsdokumentasjon.\n\nLøsningen samler bilag fra flere kilder, identifiserer aktuelle dokumenter og organiserer dem gjennom en kontrollert arbeidsflyt. Brukeren beholder beslutningsmyndigheten når systemet mangler informasjon eller er usikkert på hvordan et bilag skal behandles.\n\nBilagsassistent er ikke et regnskapssystem og foretar ikke selvstendig bokføring. Den reduserer manuelt forarbeid og klargjør dokumentasjon for videre kontroll og regnskapsføring.",
        en: "Receipt Assistant is a functional MVP developed for small businesses that need better oversight of receipts, invoices and other expense documentation.\n\nThe solution gathers vouchers from multiple sources, identifies relevant documents and organises them through a controlled workflow. The user keeps decision authority when the system lacks information or is uncertain about how a voucher should be handled.\n\nReceipt Assistant is not an accounting system and does not perform bookkeeping on its own. It reduces manual preparation and prepares documentation for further review and accounting.",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "I mindre virksomheter finnes bilag ofte på mange steder: Gmail og andre e-postkontoer, PDF-vedlegg, bilder av fysiske kvitteringer, mobilmapper, nedlastinger og lokale mapper, leverandørportaler og apper.\n\nDokumentasjonen finnes, men må letes frem, vurderes, navngis og registreres manuelt. Det gir unødvendig tidsbruk og risiko for at bilag blir glemt, behandlet flere ganger eller knyttet til feil virksomhet.\n\nUtgangspunktet for prosjektet var derfor et praktisk spørsmål: Kan innhenting og strukturering automatiseres uten at brukeren mister kontrollen?",
        en: "In smaller businesses, vouchers often exist in many places: Gmail and other email accounts, PDF attachments, photos of paper receipts, mobile folders, downloads and local folders, supplier portals and apps.\n\nThe documentation exists, but must be found, assessed, named and registered manually. That creates unnecessary time use and risk that vouchers are forgotten, processed more than once or linked to the wrong entity.\n\nThe starting point for the project was therefore a practical question: Can collection and structuring be automated without the user losing control?",
      },
    },
    logikk: {
      heading: { no: "Fra kilde til ferdig bilag", en: "From source to completed voucher" },
      body: {
        no: "Arbeidsflyten er bygget som en kontrollert kjede der automatisering stopper når grunnlaget er for svakt:",
        en: "The workflow is built as a controlled chain where automation stops when the basis is too weak:",
      },
      steps: [
        {
          tittel: { no: "1. Innhenting", en: "1. Collection" },
          beskrivelse: {
            no: "Løsningen søker i tilknyttede kilder etter dokumenter som kan være kvitteringer eller fakturaer.",
            en: "The solution searches connected sources for documents that may be receipts or invoices.",
          },
        },
        {
          tittel: { no: "2. Kandidatvurdering", en: "2. Candidate assessment" },
          beskrivelse: {
            no: "Mulige bilag vises med leverandør, dato, emne, dokumenttype og beregnet prioritet.",
            en: "Possible vouchers are shown with supplier, date, subject, document type and calculated priority.",
          },
        },
        {
          tittel: { no: "3. Dokumentbehandling", en: "3. Document processing" },
          beskrivelse: {
            no: "Relevant informasjon hentes fra dokumentet og sammenholdes med kjente leverandører, kategorier og tidligere registreringer.",
            en: "Relevant information is extracted from the document and compared with known suppliers, categories and previous registrations.",
          },
        },
        {
          tittel: { no: "4. Menneskelig kontroll", en: "4. Human review" },
          beskrivelse: {
            no: "Usikre saker sendes til «Trenger din hjelp». Brukeren kan kontrollere og korrigere virksomhet, leverandør, dato, beløp, valuta, dokumenttype og kategori.",
            en: "Uncertain cases go to «Needs your help». The user can review and correct entity, supplier, date, amount, currency, document type and category.",
          },
        },
        {
          tittel: { no: "5. Registrering og arkivering", en: "5. Registration and archiving" },
          beskrivelse: {
            no: "Godkjente bilag får bilags-ID og standardisert filnavn. Dokumentet registreres i bilagsregisteret og arkiveres i riktig struktur.",
            en: "Approved vouchers receive a voucher ID and standardised file name. The document is registered in the voucher register and archived in the correct structure.",
          },
        },
      ],
      after: {
        no: "Systemet foreslår og strukturerer. Brukeren godkjenner usikre beslutninger.",
        en: "The system suggests and structures. The user approves uncertain decisions.",
      },
    },
    contentSections: [
      {
        heading: { no: "Arbeidsflyt", en: "Workflow" },
        body: {
          no: "Flyten er designet med tydelige stopp når grunnlaget er for svakt for automatiske beslutninger.",
          en: "The flow is designed with clear stops when the basis is too weak for automatic decisions.",
        },
        flowLine: {
          no: "Kilde → kandidat → uttrekk → kontroll → beslutning → registrering → arkivering",
          en: "Source → candidate → extraction → review → decision → registration → archiving",
        },
      },
      {
        heading: { no: "Menneskelig kontroll", en: "Human review" },
        body: {
          no: "Bilagsassistent er utviklet etter et human-in-the-loop-prinsipp. Dette er særlig viktig når bilaget kan være privat eller virksomhetsrelatert, leverandøren ikke er kjent, dato, beløp eller dokumenttype mangler, ett bilag kan tilhøre flere virksomheter, eller dokumentet kan være en kopi av et tidligere bilag.\n\nOriginale e-poster og vedlegg endres eller slettes ikke som del av behandlingen.",
          en: "Receipt Assistant is built on a human-in-the-loop principle. This matters especially when a voucher may be private or business-related, the supplier is unknown, date, amount or document type is missing, one voucher may belong to multiple entities, or the document may be a copy of an earlier voucher.\n\nOriginal emails and attachments are not changed or deleted as part of processing.",
        },
      },
      {
        heading: { no: "Eksempler på dokumenttyper", en: "Examples of document types" },
        body: {
          no: "Løsningen er utviklet og testet med bilag fra blant annet mobil- og internettleverandører, programvare- og SaaS-tjenester, AI-verktøy og digitale abonnementer, kollektivtransport og andre reisekostnader, parkering og taxi, kontor- og IT-relaterte innkjøp, og andre virksomhetsrelaterte leverandører.\n\nLeverandørregler og kategorier skal kunne videreutvikles uten å bygge en ny applikasjon for hver virksomhet.",
          en: "The solution has been developed and tested with vouchers from among others mobile and internet providers, software and SaaS services, AI tools and digital subscriptions, public transport and other travel expenses, parking and taxi, office and IT-related purchases, and other business-related suppliers.\n\nSupplier rules and categories should be extendable without building a new application for each business.",
        },
      },
      {
        heading: { no: "Sikkerhet og ansvarlig bruk", en: "Security and responsible use" },
        body: {
          no: "Løsningen er bygget med minst mulig tilgang som prinsipp. Tilkobling til Gmail skjer gjennom brukerens godkjenning, og tilgangen kan trekkes tilbake.\n\nBilagsassistent lagrer ikke brukerens Gmail-passord, sletter ikke originale e-poster, endrer ikke originale vedlegg, bokfører ikke utenfor løsningen og avgjør ikke usikre saker uten menneskelig kontroll. Tekniske detaljer holdes i loggen fremfor uforståelige feilmeldinger i brukerflaten.",
          en: "The solution is built on least-privilege access. Connection to Gmail happens through the user's approval, and access can be revoked.\n\nReceipt Assistant does not store the user's Gmail password, does not delete original emails, does not change original attachments, does not perform bookkeeping outside the solution, and does not decide uncertain cases without human review. Technical details are kept in the log rather than opaque error messages in the user interface.",
        },
      },
    ],
    datagrunnlag: {
      heading: { no: "Teknisk grunnlag", en: "Technical foundation" },
      body: {
        no: "Bilagsassistent er utviklet som en Python-basert Windows-applikasjon. Den tekniske løsningen omfatter blant annet Google OAuth 2.0, Gmail API, lokal og synkronisert dokumentbehandling, strukturert konfigurasjon av kontoer og virksomheter, SHA-256-basert duplikatkontroll, bilagsregister i strukturert dataformat, standardisert mappe- og arkivlogikk, separat teknisk logging og lokal lagring av autentiseringsinformasjon med beskyttelse tilpasset Windows-miljøet.\n\nLøsningen er ikke presentert som en fullverdig skyplattform eller et ferdig integrert regnskapssystem.",
        en: "Receipt Assistant is developed as a Python-based Windows application. The technical solution includes among other things Google OAuth 2.0, Gmail API, local and synced document processing, structured configuration of accounts and entities, SHA-256-based duplicate control, a voucher register in structured data format, standardised folder and archive logic, separate technical logging and local storage of authentication information with protection suited to the Windows environment.\n\nThe solution is not presented as a full cloud platform or a fully integrated accounting system.",
      },
    },
    bygget: {
      heading: { no: "Hva som er bygget", en: "What has been built" },
      body: {
        no: "Det er utviklet en fungerende Windows-applikasjon med kjerneflyt fra Gmail og synkroniserte dokumentkilder til kontroll, registrering og arkivering.",
        en: "A working Windows application has been developed with a core flow from Gmail and synced document sources to review, registration and archiving.",
      },
      items: [
        { no: "Tilkobling til Gmail gjennom Google OAuth", en: "Connection to Gmail through Google OAuth" },
        { no: "Søk etter sannsynlige kvitteringer og fakturaer", en: "Search for likely receipts and invoices" },
        { no: "Innhenting av PDF-vedlegg og annen bilagsdokumentasjon", en: "Collection of PDF attachments and other voucher documentation" },
        { no: "Kandidatliste med prioritet, leverandør, konto og dokumenttype", en: "Candidate list with priority, supplier, account and document type" },
        { no: "Kontrollkø for saker systemet ikke kan avgjøre sikkert", en: "Review queue for cases the system cannot decide safely" },
        { no: "Uttrekk av leverandør, dato, beløp, valuta og dokumenttype", en: "Extraction of supplier, date, amount, currency and document type" },
        { no: "Valg mellom privat kostnad og relevant virksomhet", en: "Choice between private expense and relevant entity" },
        { no: "Standardiserte kostnadskategorier og samlet behandling per leverandør", en: "Standard cost categories and batch handling per supplier" },
        { no: "Duplikatkontroll basert på dokumentets digitale fingeravtrykk", en: "Duplicate control based on the document's digital fingerprint" },
        { no: "Standardisert filnavn, unik bilags-ID, register og kontrollert arkivering", en: "Standardised file name, unique voucher ID, register and controlled archiving" },
        { no: "Støtte for flere virksomheter i samme arbeidsflate", en: "Support for multiple entities in the same workspace" },
        { no: "Teknisk logg for feilsøking og dokumentasjon", en: "Technical log for troubleshooting and documentation" },
      ],
    },
    moduler: {
      heading: { no: "Sentrale funksjonsområder", en: "Core functional areas" },
      intro: {
        no: "Funksjonene under er bygget i MVP-en. Videre integrasjoner og kanaler beskrives under videreutvikling.",
        en: "The functions below are built in the MVP. Further integrations and channels are described under further development.",
      },
      modules: [
        {
          tittel: { no: "Innhenting fra Gmail", en: "Collection from Gmail" },
          beskrivelse: {
            no: "OAuth-basert tilkobling som finner aktuelle meldinger og henter relevante vedlegg uten manuell gjennomgang av innboksen.",
            en: "OAuth-based connection that finds relevant messages and fetches attachments without manually scanning the inbox.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Kandidatliste og prioritering", en: "Candidate list and prioritisation" },
          beskrivelse: {
            no: "Mulige bilag samles i en filtrerbar oversikt. Enkeltbilag eller flere relevante dokumenter kan behandles samlet.",
            en: "Possible vouchers are gathered in a filterable overview. Single vouchers or several relevant documents can be handled together.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Kontrollkø", en: "Review queue" },
          beskrivelse: {
            no: "Usikre saker samles i «Trenger din hjelp», slik at systemet ikke tar irreversible beslutninger på svakt grunnlag.",
            en: "Uncertain cases are gathered in «Needs your help», so the system does not make irreversible decisions on weak grounds.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Dokumentuttrekk og klassifisering", en: "Document extraction and classification" },
          beskrivelse: {
            no: "Leverandør, dato, beløp, valuta, dokumenttype, kategori og virksomhet struktureres før registrering.",
            en: "Supplier, date, amount, currency, document type, category and entity are structured before registration.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Duplikatkontroll", en: "Duplicate control" },
          beskrivelse: {
            no: "Dokumentets digitale fingeravtrykk brukes for å hindre at samme vedlegg registreres flere ganger.",
            en: "The document's digital fingerprint is used to prevent the same attachment being registered more than once.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Register og bilagsoversikt", en: "Register and voucher overview" },
          beskrivelse: {
            no: "Godkjente dokumenter får unik bilags-ID og samles i et strukturert register med status og sentrale opplysninger.",
            en: "Approved documents receive a unique voucher ID and are gathered in a structured register with status and key information.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Virksomhetsstyring", en: "Entity management" },
          beskrivelse: {
            no: "Valg mellom privat og virksomhetsrelatert dokumentasjon, samt administrasjon av flere virksomheter.",
            en: "Choice between private and business-related documentation, plus administration of multiple entities.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Lokal og synkronisert dokumentflyt", en: "Local and synced document flow" },
          beskrivelse: {
            no: "Bilag kan behandles fra lokale eller synkroniserte mapper, inkludert dokumenter overført fra mobil.",
            en: "Vouchers can be processed from local or synced folders, including documents transferred from mobile.",
          },
          bygget: true,
        },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan løsningen fungerer i praksis", en: "How the solution works in practice" },
      intro: {
        no: "Brukeren kobler til en Gmail-konto eller velger en tilgjengelig dokumentkilde. Bilagsassistent søker etter aktuelle dokumenter og presenterer dem som kandidater.",
        en: "The user connects a Gmail account or selects an available document source. Receipt Assistant searches for relevant documents and presents them as candidates.",
      },
      detaljpunkter: [
        {
          no: "Dokumenter med tilstrekkelig informasjon kan sendes videre til kontroll og behandling.",
          en: "Documents with sufficient information can proceed to review and processing.",
        },
        {
          no: "Mangler løsningen vesentlige opplysninger, legges saken i kontrollkøen.",
          en: "If the solution lacks essential information, the case goes to the review queue.",
        },
        {
          no: "Etter godkjenning eller korrigering opprettes en beslutning med bilags-ID, standardisert filnavn, registerpost og riktig arkivplassering.",
          en: "After approval or correction, a decision is recorded with voucher ID, standardised file name, register entry and correct archive location.",
        },
        {
          no: "Et nytt søk skal ikke registrere samme dokument på nytt.",
          en: "A new search should not register the same document again.",
        },
      ],
    },
    relevans: {
      heading: { no: "Relevans", en: "Relevance" },
      body: {
        no: "Prosjektet viser hvordan en administrativ oppgave kan analyseres som en helhetlig arbeidsflyt, fremfor å løses med enkeltstående automatiseringer. Verdien ligger i kombinasjonen av forståelse av et reelt SMB-behov, integrasjon mot eksisterende informasjonskilder, strukturert dokumentflyt, automatisering av gjentakende arbeid, tydelige kontrollpunkter, brukeropplevelse og feilhåndtering, sikkerhet og sporbarhet, og mulighet for videre skalering.\n\nProsjektet dokumenterer praktisk produktutvikling i skjæringspunktet mellom arbeidsflyt, digital transformasjon, automatisering, brukerbehov og ansvarlig bruk av teknologi.",
        en: "The project shows how an administrative task can be analysed as an end-to-end workflow rather than solved with isolated automations. The value lies in combining understanding of a real SMB need, integration with existing information sources, structured document flow, automation of repetitive work, clear control points, user experience and error handling, security and traceability, and room for further scaling.\n\nThe project documents practical product development at the intersection of workflow, digital transformation, automation, user needs and responsible use of technology.",
      },
    },
    status: {
      heading: { no: "Status og modenhet", en: "Status and maturity" },
      body: {
        no: "Ferdigstilt funksjonell MVP · Pilotklar\n\nKjerneflyten fra Gmail og synkroniserte dokumentkilder til kontroll, registrering og arkivering er bygget. Løsningen er testet i avgrenset reell bruk. Den er ikke lansert kommersielt eller rullet ut til eksterne kunder.\n\nDette er et ferdigstilt portefølje- og utviklingsprosjekt på MVP-nivå, med et tydelig grunnlag for videre pilotering og produktutvikling.",
        en: "Completed functional MVP · Pilot-ready\n\nThe core flow from Gmail and synced document sources to review, registration and archiving is built. The solution has been tested in limited real-world use. It is not commercially launched or rolled out to external customers.\n\nThis is a completed portfolio and development project at MVP level, with a clear basis for further piloting and product development.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Mulig videreutvikling", en: "Possible further development" },
        punkter: [
          { no: "Microsoft Outlook gjennom Microsoft Graph og OAuth", en: "Microsoft Outlook through Microsoft Graph and OAuth" },
          { no: "Flere e-postkontoer per virksomhet", en: "Multiple email accounts per entity" },
          { no: "Felles mobilinnboks for iPhone og Android", en: "Shared mobile inbox for iPhone and Android" },
          { no: "Sikrere sentral administrasjon av virksomheter og brukere", en: "More secure central administration of entities and users" },
          { no: "Utvidet dokumenttolkning", en: "Extended document parsing" },
          { no: "Flere leverandør- og kategoriregler", en: "More supplier and category rules" },
          { no: "Eksport til Tripletex og andre regnskapssystemer", en: "Export to Tripletex and other accounting systems" },
          { no: "Varslinger og planlagte bilagssøk", en: "Alerts and scheduled voucher searches" },
          { no: "Dashboard for manglende og forventede bilag", en: "Dashboard for missing and expected vouchers" },
          { no: "Rapportering per virksomhet, periode og kostnadskategori", en: "Reporting by entity, period and cost category" },
          { no: "Skybasert løsning med tydelig kundeisolasjon", en: "Cloud-based solution with clear customer isolation" },
        ],
      },
      tilpasning: {
        heading: { no: "Aktuelle virksomheter", en: "Relevant businesses" },
        punkter: [
          { no: "Enkeltpersonforetak", en: "Sole proprietorships" },
          { no: "Konsulenter og rådgivere", en: "Consultants and advisers" },
          { no: "Klinikker og andre mindre tjenestevirksomheter", en: "Clinics and other small service businesses" },
          { no: "Små selskaper med flere e-post- og dokumentkilder", en: "Small companies with multiple email and document sources" },
          { no: "Virksomheter som bruker ekstern regnskapsfører", en: "Businesses using external accountants" },
          { no: "Selskaper som ønsker bedre dokumentasjon før regnskapsføring", en: "Companies that want better documentation before accounting" },
        ],
        note: {
          no: "Tilpasning må skje etter virksomhetens systemer, tilgangsbehov og regnskapsprosess.",
          en: "Adaptation must follow the organisation's systems, access needs and accounting process.",
        },
      },
    },
    avslutning: {
      heading: { no: "Utforsk prosjektet videre", en: "Explore the project further" },
      body: {
        no: "Bilagsassistent er foreløpig ikke tilgjengelig som offentlig demo eller kommersielt produkt. Ta kontakt for faglig dialog om arbeidsflyt, automatisering og praktisk AI i mindre virksomheter.",
        en: "Receipt Assistant is not currently available as a public demo or commercial product. Get in touch for professional dialogue on workflow, automation and practical AI in smaller businesses.",
      },
    },
    utvikler,
  },
};
