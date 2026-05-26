import { Lang } from "../LanguageContext";

const data = {
  no: {
    intro: "Solid erfaring på tvers av kunnskapsintensive B2B-markeder — fra industri, life science og sirkulær økonomi til teknologi og grossistvirksomhet. Gjennomgående ansvar for å profesjonalisere salgsorganisasjoner, drive vekst og lede endringsprosesser i virksomheter med høye krav til kvalitet og leveranseevne.",
    jobs: [
      {
        title: "Nasjonal Salgssjef",
        company: "Franzefoss Gjenvinning",
        period: "2024 – 2025",
        mandate: "Hentet inn til kommersiell ledergruppe for å profesjonalisere salgsorganisasjonen, gjøre selskapet mer synlig og salgsteamet mer proaktive mot kunder, samt akselerere den digitale reisen i en tradisjonell bransje.",
        strategy: "Restrukturerte salgsavdelingen (20 årsverk) for økt slagkraft. Implementerte slagkraftige salgsprosesser og moderne CRM-metodikk, digitale dashboards og AI-støttede kundereiser og kundeportal for å flytte fokus fra reaktivt til proaktivt salg. Introduserte også flere nye tjenester for kunder.",
        results: "Styrket markedsposisjon gjennom mer målrettet innsats mot nøkkelkunder. Etablerte en ny standard for datadrevet salgsledelse og logistikksamhandling på tvers av 18 driftssteder. Bedret samhandlingen mellom salgsteamet og drift. Forbedret kapasitetsutnyttelse, tydeligere styringsmodell, resultatdrevne KPI-er & økte marginer.",
      },
      {
        title: "Salgssjef Forbruksvarer",
        company: "Norengros Johs. Olsen",
        period: "2019 – 2023",
        mandate: "Totalansvar for selskapets største avdeling med mandat om å drive aggressiv regional vekst og lede transformasjonsprosjektet «Forbruk Oslo 2.0».",
        strategy: "Ledet transformasjon innen bemanning, IT og logistikk. Fungerte som CRM-superbruker og endringsagent for å modernisere salgsprosessene i et marked preget av tøff konkurranse.",
        results: "Leverte en eksepsjonell salgsvekst på 67 % i perioden. Bygget et høytytende team som leverte kritiske bidrag i prosjekter mot selskapets mål om 1 mrd. NOK i omsetning.",
      },
      {
        title: "Gründer & Utvikler",
        company: "MedDrop",
        period: "2018 – Nå",
        mandate: "Identifisere og løse et kritisk gap i pasientsikkerhet ved legemiddelhåndtering gjennom utvikling av en smart, IoT-basert medisindispenser.",
        strategy: "Leder hele innovasjonsløpet fra idé til prototype. Navigerer i komplekse tekniske arkitekturer, IP-strategier og strengt regulerte medtech-rammeverk (MDR).",
        results: "Utviklet en funksjonell prototype klar for nasjonal og global skalering. Etablert dyp forståelse for skjæringspunktet mellom digital teknologi og kliniske behov.",
      },
      {
        title: "Business Unit Manager",
        company: "Mundipharma",
        period: "2001 – 2012",
        mandate: "Ansvar for å forme nasjonal salgs- og markedsstrategi for kritiske terapiområder i et av verdens ledende farmasøytiske selskaper.",
        strategy: "Ledet nasjonale salgsteam og satt i internasjonale strategigrupper. Operasjonaliserte komplekse endringsprosesser og bygget strategiske partnerskap med KOLs.",
        results: "Lanserte og posisjonerte 4 blockbuster-produkter. Oppnådde høyest global vekst og omsetning i hele konsernet i perioden. Personlig vinner av EU PR-pris.",
      },
    ],
    others: [
      { area: "Internasjonal Salg", desc: "Pelagia: Senior Sales Manager (Europa, USA, Asia)." },
      { area: "Strategisk Rådgivning", desc: "Assessit: Executive Search & lederutvelgelse." },
      { area: "Markedsledelse", desc: "Nilfisk: Salgssjef med nasjonalt ansvar." },
    ],
  },
  en: {
    intro: "Solid experience across knowledge-intensive B2B markets — from industry, life science and circular economy to technology and wholesale. A consistent track record of professionalising sales organisations, accelerating growth, and leading transformation programmes in businesses with exacting standards for quality and delivery.",
    jobs: [
      {
        title: "National Sales Director",
        company: "Franzefoss Gjenvinning",
        period: "2024 – 2025",
        mandate: "Appointed to the commercial leadership team to professionalise the sales organisation, elevate market visibility, shift the sales force from reactive to proactive engagement, and accelerate digital adoption in a traditionally analogue industry.",
        strategy: "Restructured the 20-person sales department for greater commercial impact. Deployed rigorous sales processes, modern CRM methodology, real-time digital dashboards, and AI-augmented customer journeys to drive a fundamental shift toward proactive, data-informed selling. Introduced multiple new value-added services.",
        results: "Strengthened market positioning through targeted key-account strategies. Established a new benchmark for data-driven sales management and logistics coordination across 18 operational sites. Improved cross-functional collaboration between sales and operations. Enhanced capacity utilisation, clearer governance, performance-driven KPIs, and margin expansion.",
      },
      {
        title: "Sales Manager, Consumer Goods",
        company: "Norengros Johs. Olsen",
        period: "2019 – 2023",
        mandate: "Full P&L accountability for the company's largest division, with a mandate to drive aggressive regional growth and spearhead the strategic transformation initiative 'Forbruk Oslo 2.0'.",
        strategy: "Led end-to-end transformation encompassing workforce planning, IT infrastructure, and logistics. Served as CRM superuser and change agent to modernise commercial processes in a fiercely competitive marketplace.",
        results: "Delivered exceptional revenue growth of 67% over the period. Built a high-performing team that made mission-critical contributions in projects toward the company's NOK 1 billion revenue target.",
      },
      {
        title: "Founder & Product Developer",
        company: "MedDrop",
        period: "2018 – Present",
        mandate: "Identify and address a critical gap in patient safety within medication management through the development of a smart, IoT-enabled medicine dispenser.",
        strategy: "Leading the full innovation lifecycle from concept through to functional prototype. Navigating complex technical architectures, intellectual property strategy, and stringent medtech regulatory frameworks (MDR).",
        results: "Developed a market-ready functional prototype positioned for national and international scale-up. Built deep domain expertise at the intersection of digital health technology and clinical needs.",
      },
      {
        title: "Business Unit Manager",
        company: "Mundipharma",
        period: "2001 – 2012",
        mandate: "Accountable for shaping and executing the national sales and marketing strategy across critical therapeutic areas within one of the world's leading pharmaceutical organisations.",
        strategy: "Led national sales teams while serving on international strategy committees. Operationalised complex transformation programmes and cultivated strategic partnerships with key opinion leaders (KOLs).",
        results: "Successfully launched and positioned four blockbuster products. Achieved the highest global growth rate and revenue contribution across the entire group during tenure. Personal recipient of the EU Public Relations Award.",
      },
    ],
    others: [
      { area: "International Sales", desc: "Pelagia: Senior Sales Manager (Europe, USA, Asia)." },
      { area: "Strategic Advisory", desc: "Assessit: Executive Search & senior leadership selection." },
      { area: "Market Leadership", desc: "Nilfisk: Sales Manager with nationwide responsibility." },
    ],
  },
};

export function getErfaringData(lang: Lang) {
  return data[lang];
}

// Backward compatibility
export const CONTENT = data.no;
