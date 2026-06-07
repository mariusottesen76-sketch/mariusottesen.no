import { normalizeDisplayText } from "../../lib/normalize-display-text";
import { normaliserKortTeaser } from "../../lib/innlegg-kort-teaser";

type LocalizedText = {
  no: string;
  en: string;
};

type LocalizedTextMap = {
  tittel: string;
  teaser: string;
  innhold: string;
};

const localize = (no: string, en: string = no): LocalizedText => ({ no, en });

const tegneserieKarusellBilder = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/tegneserie${i + 1}.png`,
  alt: {
    no: `Tegneserie – panel ${i + 1} av 9`,
    en: `Comic – panel ${i + 1} of 9`,
  },
}));

const biAvslutningKarusellBase = "/images/BI%20-%20LinkedIn";
const biAvslutningKarusellBilder = Array.from({ length: 7 }, (_, i) => ({
  src: `${biAvslutningKarusellBase}/BI${i + 1}.png`,
  alt: {
    no: `GenAI for Business – karusell ${i + 1} av 7`,
    en: `Generative AI for Business – carousel ${i + 1} of 7`,
  },
}));

const aiGovernanceRaw = [
    {
      id: "ai-agent-007-master-bi-2026-06",
      tittel: "AI Agent 007?",
      teaser:
        "GenAI for Business på BI med toppkarakter – nå klar i kampen om de beste hodene: AI-strategi, agenter og praktisk verdiskaping, og hvorfor gapet vokser mellom de som tar grep og de som venter.",
      bildeUrl: "/images/ai-agent-007.png",
      bildeVersjon: "2026-06-06",
      dato: "2026-06-06",
      visningsDato: "06.06.26",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Jeg registrerer at jakten på neste James Bond er i gang.

Siden agentrollen visstnok er ledig, melder jeg meg herved på i kampen om de beste hodene og prosjektene. 🙋‍♂️

Ikke nødvendigvis for MI6, men for virksomheter som ser etter kommersiell ledelse, strategi og AI-kompetanse i samme pakke.

Dette halvåret har jeg tatt Master of Management-kurset 'Generative AI for Business' ved BI. Resultatet kom nå, og "oppdraget" kunne knapt vært løst bedre.

Men det viktigste er ikke karakteren. Det er hva arbeidet har gitt av innsikt.

Jeg har jobbet med AI-strategi, roadmaps og arbeidsflytdesign, AI-implementering, multimodalt innhold, app- og agentlogikk, dataflyt, kundeprosesser, chatbots, governance og praktisk verdiskaping.

Jo mer jeg bygger, tester og analyserer, jo tydeligere blir verdien. Interessen øker nesten eksponentielt, og flere AI prosjekter er på trappene.

Et av dem er et refleksjons- og utviklingsverktøy som skal hjelpe samspillet mellom ledere, medarbeidere og team ved å forstå hvordan profil, rolle, dagsform og situasjon påvirker kommunikasjon, prioriteringer og gjennomføring.

For meg handler AI ikke bare om teknologi. Det handler om hva jeg kan bidra med direkte, både innenfra og utenfra virksomheten. Bedre beslutninger, smartere prosesser, tydeligere kundeverdi og mer effektiv kommersiell gjennomføring.

Et klokt hode fortalte meg nylig at endringene i arbeidslivet peker mot et større behov for å videreutvikle kompetansen vi allerede har. Når AI tar mer av den rene produksjonen, blir det mindre tid på å bare produsere, og mer tid på vurdering, retning, prioritering og helhetsforståelse. Det ble også løftet frem at erfarne medarbeidere kan få økt verdi, fordi de ofte har bedre forståelse for helhet, sammenhenger og kontekst. 💥

Jeg kunne selvfølgelig ikke vært mer enig!

Gapet øker nå mellom de som tar grep, og de som fortsatt venter.

Hvor lenge har man egentlig råd til å sitte på sidelinjen?

👉 Tar gjerne en kaffe med deg som vil diskutere hvor AI kan skape reell verdi.

#AI #Ledelse #KommersiellLedelse #DigitalTransformasjon #Verdiskaping`,
    },
    {
      id: "crm-genai-medspiller-knowit-2026-06",
      tittel: "Når CRM blir en medspiller",
      teaser:
        "Frokost hos Knowit om AI og CRM: fra passive dashboards til aktivt kommersielt beslutningslag – og hvorfor gapet mellom AI-ambisjon og «current reality» er et ledertema.",
      bildeUrl: "/images/crm-data.png",
      bildeVersjon: "2026-06-04",
      dato: "2026-06-04",
      visningsDato: "04.06.26",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Den nye måten å jobbe på starter når dataene vi allerede har, begynner å hjelpe oss å ta bedre valg. Den starter ikke med flere dashboards.

På tirsdag fikk jeg bekreftet flere av mine egne tanker om AI, CRM og kommersiell utvikling på et frokostmøte hos Knowit.

Mange virksomheter har store mengder strukturerte og ustrukturerte kundedata, aktivitetsdata, ordredata, møtenotater, e-poster og historikk.

Likevel brukes mye av dette fortsatt for passivt.

🔸 Vi leter i dashboards.
🔸 Klikker oss gjennom et utall CRM-faner.
🔸 Sjekker e-post.
🔸 Avstemmer regneark.
🔸 Snakker med kollegaer på tvers av ulike funksjoner.
🔸 Sjekker egne notater og prøver å skape oversikt manuelt.

Det er den gamle arbeidsmåten, der mange av oss kjenner oss igjen i.

Den nye arbeidsmåten handler ikke om å erstatte menneskelig vurdering. Den handler om å gi mennesker bedre beslutningsstøtte, tettere på arbeidsflyten. 💡

For meg har CRM alltid vært et av de mest interessante områdene innenfor kommersiell utvikling, nettopp fordi det ligger så tett på kundeverdi, salgsledelse og operativ gjennomføring.

Men CRM bør ikke bare være et system for enkle kundedata, registrering, kontroll og pipelineoppfølging.

Det bør være et sted for aktivt kommersielt beslutningslag. Et system som hjelper oss å forstå kunder bedre.

💥 Se mønstre tidligere.
💥 Prioritere riktigere.
💥 Forberede møter bedre.
💥 Følge opp mer presist.
💥 Og ikke minst bruke innsikt på tvers av salg, marked, kundeservice, drift og ledelse.

👉 Hvordan kan vi hente ut mer av innsikten virksomheten allerede besitter, nyttiggjøre data bedre, og bruke dette mer effektivt i salg, kundeoppfølging og kommersiell ledelse?

Jeg ønsker å utforske hvordan CRM kan videreutvikles ved hjelp av GenAI, derfor vil jeg ha dette som et av mine neste AI-prosjekter.

For gapet mellom å bruke CRM på den gamle måten og å få fullt utbytte av potensialet er stort.

Som grafene viser har mange virksomheter høye AI-ambisjoner. Men «current reality» er ofte langt svakere. Datakvalitet, governance, KPI-målinger, struktur og bruk i drift henger ikke alltid med.

Suksess med AI handler om å bygge nye arbeidsmåter som skaper verdi for hele organisasjonen.

Nicolai Tangen og Oljefondet har sagt det godt:
Når andre får 10–20 % forbedring på bunnlinjen, hvor mange år har du råd til å stå utenfor? Når konkurrentene lærer raskere i ett år, to år eller tre år, blir gapet vanskelig å ta igjen.

Dette er et ledertema. AI vil ikke skape varig verdi hvis det blir et sideprosjekt. Verdien kommer når data, mennesker, arbeidsflyt og styring kobles til konkrete forretningsresultater. 📈

Takk til Knowit, Jprofessionals, Snowflake og Mowi for et svært relevant seminar. Spesielt nyttig å høre perspektivene fra Morten Hauge og Hamik Sevan om hvordan data, prosesser, teknologi, styring og mennesker kan kobles sammen for å skape verdi i arbeidsflyten. 💯

#AI #CRM #KommersiellLedelse #DigitalTransformasjon #Kundeverdi`,
    },
    {
      id: "ai-value-lab-smb-praksis-2026-06",
      tittel: "AI skaper ikke verdi før hverdagen endres",
      teaser:
        "Fra AI Value Lab Oslo: interesse og demoer stopper ofte i hverdagen. For SMB handler det om riktige brukscase, rask testing og praktisk verdiskaping – vi søker kontakt for å lære mer.",
      bildeUrl: "/images/value-lab-smb.png",
      bildeKortFokus: "14% center",
      bildeKortZoom: 1.15,
      bildeVersjon: "2026-06-03",
      dato: "2026-06-03",
      visningsDato: "03.06.26",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/company/aivaluelaboslo/",
      innhold: `Vi ser et mønster:

🔸 Ledere er nysgjerrige.
🔸 Ansatte eksperimenterer.
🔸 Noen har vært på kurs.
🔸 Mange har sett imponerende demoer.

Likevel stopper mye opp.

Ikke fordi interessen mangler, men fordi hverdagen tar over. AI drukner i tidsklemma.

Nicolai Tangen i Oljefondet har pekt på et viktig poeng:
Når noen lærer raskere med AI år etter år, blir forspranget vanskelig å hente inn.

Spørsmålet er derfor ikke bare om AI kan gi verdi. Spørsmålet er hvor lenge man har råd til å stå utenfor ❗

Dette handler ikke om teknologioptimisme. Det handler om konkurransekraft, læringshastighet og evnen til å ta i bruk nye arbeidsformer.

For mange SMB er spørsmålet derfor ikke lenger «bør vi bruke AI?», men hvor man bør starte.

SMB har sjelden store IT-avdelinger, egne AI-team eller tid til lange strategiprosesser. Samtidig finnes det mange konkrete prosesser der AI kan gi verdi. For å nevne noen:

💥 Kundeservice.
💥 Salg og oppfølging.
💥 Booking og administrasjon.
💥 Intern kommunikasjon.
💥 Markedsinnsikt.
💥 Dokumentasjon.
💥 Opplæring.

<a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">AI Value Lab Oslo</a> sin hypotese er enkel:

Verdien kommer når AI kobles til reelle arbeidsprosesser, tydelig ansvar og konkrete forbedringer.

Vi utvikler nå en praktisk tilnærming:

🔸 Finne riktige brukscase.
🔸 Prioritere det som gir mest verdi.
🔸 Teste raskt uten å gjøre det komplisert.
🔸 Sikre ansvarlig bruk fra start.

Derfor ønsker vi kontakt med flere SMB.

Ikke for å selge en ferdig løsning, men for å forstå hvor AI-arbeidet stopper opp, hvilke prosesser som stjeler tid, hvor usikkerheten er størst, og hvilke brukscase som kan gi verdi raskt.

💡 <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">AI Value Lab Oslo</a> er fortsatt et lærings- og utviklingsinitiativ. Men retningen blir tydeligere:
Fra AI-interesse til praktisk verdiskaping.

👉 Har du erfaring fra en SMB der AI er på agendaen, men der det fortsatt er uklart hvor man bør starte? <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">Ta kontakt med oss på LinkedIn</a>.

#AIValueLabOslo #GenAI #SMB #forretningsutvikling #ledelse`,
    },
    {
      id: "bi-genai-avslutning-master-2026-06",
      tittel: "Ferdig, men akkurat startet",
      teaser:
        "I helgen leverte jeg siste prosjektoppgave i Generative AI for Business på BI. Caset Skøyenåsen Tannklinikk: GenAI i pasient- og kundereisen gjennom nettside, chatbot og booking. Strategisk implementering og bygging i praksis – og hvordan ny kompetanse forsterker kommersiell ledelse videre.",
      bildeUrl: `${biAvslutningKarusellBase}/BI1.png`,
      bildeVersjon: "2026-06-02",
      dato: "2026-06-02",
      visningsDato: "02.06.26",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I helgen leverte jeg min siste prosjektoppgave i <em>Generative AI for Business</em> på BI.

Det markerer avslutningen på masterkurset med blant annet tre eksamensprosjekter, praktisk bruk av AI-verktøy, bygging, strategi, analyse og en større individuell prosjektoppgave.

Den siste oppgaven handlet om hvordan Skøyenåsen Tannklinikk kan bruke GenAI til å forbedre pasient- og kundereisen gjennom ny nettside, chatbot og online booking. Kjernen var å gjøre første kontakt med klinikken mer guidet, relevant og effektiv gjennom behovsavklaring, bookingstøtte og pasientkommunikasjon.

Oppgaven handlet om strategisk AI-implementering, men jeg valgte også å bygge deler av løsningen for å teste hvordan dette kan fungere i praksis.

Det viktigste jeg tar med meg er likevel bredere enn selve caset.

AI skaper først verdi når det kobles til reelle arbeidsflyter, tydelige problemer, mennesker, risiko og kommersiell gjennomføring. 💯

For meg har dette gitt mye inspirasjon videre. Både som leder, i kommersiell sammenheng og i arbeidet med å forstå hvordan AI kan brukes til å skape konkret verdi i virksomheter.

Derfor er jeg ikke egentlig ferdig.

Jeg tar med meg ny AI-kompetanse som et viktig supplement til min kommersielle kjernekompetanse, og ser store muligheter for å bruke dette til å skape verdi i flere bransjer og selskaper. 💥

💡 Noen av refleksjonene deler jeg i karusellen.

#GenerativeAI #AIImplementering #DigitalTransformasjon #KommersiellLedelse #Ledelse`,
      karusellBilder: biAvslutningKarusellBilder,
      karusellPdfUrl: `${biAvslutningKarusellBase}/bi-avslutning-karusell.pdf`,
    },
    {
      id: "ai-kompetanse-tech-frokost-telenor-2026-05",
      tittel: "AI-kompetansegapet vokser der erfaringen ikke bygges",
      teaser:
        "Telenor og Equinor på Digital Norways tech-frokost: to spor for AI-adopsjon, kommersielle arbeidsflyter med høy verdi — og en formel som flytter diskusjonen fra potensial til gjennomføring.",
      bildeUrl: "/images/tech-frokost.png",
      bildeUrlKort: "/images/tech-frokost-kort.png",
      bildeModalBred: true,
      bildeVersjon: "2026-05-28",
      dato: "2026-05-28",
      visningsDato: "28.05.26",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Forrige uke skrev vi i <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">AI Value Lab Oslo</a>, med utgangspunkt i Erlend Rosseland Stokkes poeng i <a href="https://www.digi.no/artikler/debatt-norsk-naeringsliv-undervurderer-den-virkelige-ki-mangelen/572264" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">digi.no</a>, om en AI-mangel som kan bli mer krevende enn mange ser nå.

Ikke mangel på teknologi.
Ikke mangel på verktøy.
👉 Men mangel på mennesker og miljøer som har fått AI til å fungere i praksis.

Stokke peker på en selvforsterkende sirkel. Virksomheter blir stående i pilotmodus fordi de mangler folk med reell erfaring. Samtidig bygges erfaring først når noen får ta AI fra pilot til produksjon.

På Digital Norways tech-frokost tirsdag, om AI-adopsjon i Equinor og Telenor, fikk jeg samme poeng bekreftet fra en annen vinkel.

Mange virksomheter følger i realiteten ett av to spor.

🔁 Det ene er pilotmodus. Mange diskusjoner. Mye verktøyfokus. Nye tester. Men begrenset bevegelse. Man lærer litt, men ikke nok til å bygge trygghet, gjennomføringsevne og praktisk modenhet.

📈 Det andre er å bygge kompetanse gjennom reelle use cases. Da flyttes læringen inn i arbeidsprosesser, kundeopplevelse, data, governance, samarbeid og leveranser. Kompetanse blir ikke bare noe man snakker om. Den bygges gjennom bruk, justering og ansvarlig implementering.

Det var interessant hvor tett dette ble koblet til kommersiell verdi.

Telenor viste attraktive AI-områder innen:
💥 B2B-salg og go-to-market
💥 Kundevekst og kundebevaring
💥 Kundeservice og kundeoppfølging

Dette er ikke perifere AI-områder, men arbeidsflyter med høy gjennomførbarhet og høy verdi. Det er kjernen i kommersielle prosesser, kundereiser og verdiskaping.

For meg treffer dette godt med min kommersielle ledererfaring og det jeg utforsker gjennom praktiske AI-prosjekter.

Et annet sterkt poeng fra Telenor var at AI ikke bare bør legges oppå dagens arbeidsflyter. Da blir gevinstene ofte inkrementelle. Når arbeidsflytene redesignes rundt AI, kan gevinstene bli strukturelle.

Telenor viste en enkel, men treffsikker formel for AI-verdi:

Annual net value = Baseline × AI delta × Adoption × Confidence − Build & run cost

Den flytter diskusjonen fra teknologisk potensial til operativ realisme. Adopsjon, tillit, kvalitet og kostnader ved å bygge, drifte og skalere.

Equinor viste samtidig betydningen av struktur, deling, læring og ansvarlig bruk.

Den virkelige AI-kompetansen bygges når mennesker jobber konkret med behov, brukeropplevelse, data, risiko, ansvar, arbeidsflyt og forretningsverdi.

Derfor har vi også etablert AI Value Lab Oslo der vi bygger praktisk forståelse for hvordan AI kan skape reell verdi.

Spørsmålet er ikke bare om virksomheter bruker AI. Spørsmålet er hvilket spor de faktisk bygger kompetanse i. 💯

#AIKompetanse #KommersiellLedelse #DigitalTransformasjon #PraktiskAI`
    },
    {
      id: "ai-gap-kompetanse-stokke-digi-2026-05",
      tittel: "Den virkelige AI-mangelen: mennesker med praktisk AI kompetanse",
      teaser:
        "Refleksjon på Erlend Rosseland Stokkes artikkel i digi.no: kompetansegapet handler om mennesker med praktisk AI-erfaring i produksjon — og hvorfor AI Value Lab Oslo utforsker dette i praksis.",
      bildeUrl: "/images/AI-gap.png",
      bildeVersjon: "2026-05-26",
      dato: "2026-05-22",
      visningsDato: "22.05.26",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Erlend Rosseland Stokke peker i <a href="https://www.digi.no/artikler/debatt-norsk-naeringsliv-undervurderer-den-virkelige-ki-mangelen/572264" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">digi.no</a> på en AI-mangel som fort kan bli langt mer krevende enn mange ser nå.

Mangelen er ikke teknologi.
Mangelen er ikke verktøy og modeller.
👉 Men, mangelen er mennesker og miljøer som har fått AI til å fungere i produksjon. Med reelle brukere, virksomhetsnære data og tydelige konsekvenser.

Stokke beskriver også en selvforsterkende sirkel. ⭕

Virksomheter blir stående i pilotmodus fordi de mangler folk med reell erfaring. Samtidig bygges konkret erfaring først når noen får muligheten til å ta AI fra pilot til produksjon. Da blir kompetansegapet større.

Det er også noe av grunnen til at vi har etablert <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">AI Value Lab Oslo</a>.
Vi ønsker å utforske AI praktisk, ikke bare prinsipielt.

Marius, Tatiana og Ole utvikler oss sammen med å kombinere forretningsforståelse, teknologi, kundereiser, praktisk utvikling og ansvarlig implementering.
Gjennom konkrete case, prototyper og diskusjoner utfordrer og utforsker vi hvordan AI kan kobles til arbeidsprosesser, beslutningsstøtte, brukeropplevelse, governance og reell verdiskaping.

For de som venter, lærer saktere. De får færre leveranser, færre feil å lære av, færre avklaringer rundt data og risiko, og mindre forståelse for hva som kreves i egen organisasjon.
Samtidig bygger de som tar grep en læringskurve som blir vanskeligere å hente inn. 📈

De lærer gjennom bruk.
De justerer underveis.
De utvikler egne rammer.
De bygger intern trygghet.
De ser raskere hvor verdien oppstår.

Det interessante er ikke nødvendigvis at kompetansen ikke finnes, men at den må jobbes aktivt med. Både på individ- og organisasjonsnivå.

Den viktigste læringen kommer ikke bare fra skolebenken eller sporadiske og teoretiske kurs. Kompetanse bygges heller ikke først og fremst gjennom innlegg og diskusjoner. Og heller ikke primært gjennom å teste et nytt verktøy.

Når man står i avveiningene mellom behov, bruker, data, risiko, ansvar, forretning og gjennomføring – det er da en utvikler en helt annen form for AI-kompetanse og erfaring. Den som virkelig betyr noe. 💯

Og derfor er vi enige i at kompetansegapet handler om mer enn generell AI-interesse. Det handler om hvem som aktivt bygger erfaring og praktisk modenhet som gjør at AI kan skape reell verdi i morgen.

💥 For virksomheter som vil lykkes, holder det ikke å følge med fra sidelinjen.

Vi tar gjerne en kaffe med andre som jobber med dette, eller som er nysgjerrige på hvordan slik erfaring kan bygges i praksis. ☕

#GenerativeAI #AIKompetanse #DigitalTransformasjon #Teknologiledelse #PraktiskAI`
    },
    {
      id: "nova-frokost-ai-kjernekompetanse-2026-05",
      tittel: "AI må bli kjernekompetanse, ikke sideprosjekt",
      teaser:
        "Refleksjoner fra NOVA Consulting Groups frokostmøte: hvorfor mange virksomheter sitter fast i piloter — og hva Elkem, Egde, Nordic Corporate Bank og Infra Group viste om AI i drift.",
      bildeUrl: "/images/nova-bistudenter.jpg",
      bildeKortFokus: "22% center",
      dato: "2026-05-21",
      visningsDato: "21.05.26",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Det burde egentlig være et tankekors for flere ledergrupper og styrer.

Hvorfor sitter så mange virksomheter fortsatt fast i «prat», piloter og enkeltverktøy når andre allerede flytter AI inn i drift og kjerneprosesser?

AI må bli kjernekompetanse, ikke sideprosjekt.

På individnivå kan man komme et stykke på vei med enkelte verktøy. Men hvis virksomheter skal ta reelle steg, skape verdi og bygge konkurransefortrinn, må AI kobles til mer sentrale oppgaver.

Til verdiskapende prosesser.
Til arbeidsflyt.
Til beslutninger.
Til kunde- og brukerreiser.
Til kompetansen organisasjonen selv må eie.

Det viktigste jeg tok med meg fra NOVA Consulting Group sitt frokostmøte i går var ikke én demo eller ett verktøy. Det var mønsteret i å høre hva som ligger bak det som fungerer i ulike selskaper, og hvor det kan ta dem.

Det ga meg en skikkelig inspirasjonsboost. 💥

• Elkem ASA og Egde viste hvordan mange små use cases, korte utviklingsløp og tett brukerinvolvering kan bli til en intern AI-plattform med reell effekt.
• Nordic Corporate Bank ASA viste hvordan AI-agenter kan flytte arbeid tidligere i prosessen, fra uklare krav til bedre avklaringer, testing, kode og dokumentasjon.
• Infra Group viste hvordan ustrukturert HMS-data kan bli bedre beslutningsstøtte, risikoforståelse og forebygging.

Ikke alle selskaper skal kopiere disse løsningene. Men de viste at AI ikke bør bli stående i pilotmodus hvis virksomheten vil bygge konkurransekraft.

Det er også interessant å se hvor mye av det jeg selv bygger og utforsker peker i samme retning. Gjennom blant annet masterkurset <em>GenAI for Business</em> og det selvstartede <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">AI Value Lab Oslo</a>, har jeg jobbet med hele AI-reisen: fra forretningsbehov, kundereise og use case-logikk til bygging av apper, agenter, AI-arkitektur, visuelt innhold, governance og skalering.

Fokuset er ikke på teknologi alene, selv om jeg også blir godt kjent med modeller, verktøy og tekniske muligheter.

Det handler om hvordan AI faktisk kan brukes til å løse viktige forretningsutfordringer. ✅

Jeg oppfordrer flere til å fokusere på - og ta del i - <em>hele</em> reisen:
Fra idé til use case.
Fra use case til trygg testing.
Fra testing til drift.
Fra drift til kjernekompetanse.

For hvis andre får det til, kan flere få det til. 💯

AI-transformasjon starter sjelden med den største ideen.
Den starter med nok struktur til at små ideer kan testes raskt, læres av og deretter skaleres trygt.

Men da må AI slutte å være noe organisasjonen prøver ved siden av jobben.
Det må bli en del av hvordan jobben faktisk gjøres.

Takk til Nova-crewet, til møteleder Michael Christophersen, og til BI-medstudenter Thomas Holm og Dimitri Oetiker som også tok turen.

Sammen fortsetter vi å utforske potensialet i AI når det settes i gode systemer. 📈

#GenerativeAI #DigitalTransformasjon #Teknologiledelse #KommersiellLedelse`
    },
    {
      id: "ai-prosjekt-forretningsproblem-tegneserie-2026-05",
      tittel: "Når et AI-prosjekt ikke starter med AI, men med et forretningsproblem.",
      teaser:
        "Masteroppgave-case for Skøyenåsen Tannklinikk: GenAI-verdi i pasientreisen — illustrert med en tegneserie som oppsummerer implementeringsreisen.",
      bildeUrl: "/images/tegneserie1.png",
      dato: "2026-05-23",
      visningsDato: "23.05.26",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I masteroppgaven min i <em>Generative AI for Business</em> ved BI har jeg jobbet med et konkret case for Skøyenåsen Tannklinikk. 🦷

Målet har ikke bare vært å lage en ny nettside, chatbot eller digitale løsninger. Det har vært å forstå hvor GenAI faktisk kan skape verdi i en reell virksomhet. 📈

✅ Prosjektet handler om kunde- og pasientreisen rundt leveransen og behandlingen: informasjon, behovsavklaring, booking, oppfølging og recall.

🚫 Ikke diagnose. Ikke behandlingsråd. Ikke automatisering av faglige vurderinger.

Det handler om å forstå problemet, bygge konkret, ta risiko på alvor og vite hvor mennesker fortsatt må eie beslutningen.

For min egen del har læringen vært stor. Ikke bare i bruk av AI-verktøy, promptarbeid og strategisk tech-forståelse, men også i det å drive et AI-prosjekt fremover fra problemforståelse til konkrete leveranser.

Samtidig har prosjektoppgaven gitt en ramme for å beskrive hele implementeringsreisen: forretningsbehov, løsning, roadmap, risiko, governance, personvern, skalering og menneskelig ansvar.

Resultatet begynner nå å ta form: ny nettside, text/speech-to-text chatbot på 6 språk, booking, behovsavklaring, oppfølging og recall.

Kanskje din virksomhet kjenner på samme behov, eller er nysgjerrig på hvordan AI kan brukes mer konkret, trygt og verdiskapende? Ta gjerne kontakt for en prat.

Tegneserien oppsummerer reisen.

#GenerativeAI #Ledelse #DigitalTransformasjon #Forretningsutvikling #ResponsibleAI`,
      karusellBilder: tegneserieKarusellBilder,
      karusellPdfUrl: "/images/tegneserie-karusell.pdf"
    },
    {
      id: "genai-foerste-reklamefilm-psc-2026-05",
      tittel: "Min første reklamefilm med Generativ AI. 🎥",
      teaser:
        "Jeg laget filmen for The Predictive Sales Coach – og reflekterer over GenAI-produksjon, masterleveranser på BI og hva dette betyr for kommersiell innholdsproduksjon.",
      bildeUrl: "/images/promovideo-final.mov",
      dato: "2026-05-12",
      visningsDato: "12.05.26",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Denne filmen laget jeg for <a href="https://pscv6-744893320985.europe-west2.run.app/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">The Predictive Sales Coach</a>, mitt egenutviklede, AI-baserte verktøy for salgstrening som kombinerer DISC-inspirert kundepsykologi med realistiske salgssimuleringer, objektiv evaluering og strukturert læring for å styrke trygghet, metodikk og win-rate.

Det har vært både lærerikt og fascinerende å se hvor mye som nå er mulig å få til, uten lang planlegging, stor produksjonsrigg, skuespillere, location, filmcrew, omfattende koordinering og de budsjettene som tidligere ofte var nødvendige.

I prosjektet brukte jeg blant annet Higgsfield til produksjon, Seedance 2.0 til å generere scenene, DaVinci Resolve til redigering og ferdigstillelse, og lyd/musikk fra Pixabay. Verktøyene er ikke gratis, men sammenlignet med tradisjonell produksjon åpner de for helt andre muligheter i fart, testing, fleksibilitet og kreativ gjennomføring.

Ekstra meningsfullt for meg var det at både PSC-appen og reklamefilmen var to av tre eksamensoppgaver på masterkurset <em>Generative AI for Business</em> ved Handelshøyskolen BI, levert denne helgen.

Studiet har vært utrolig interessant. I løpet av disse månedene har vi jobbet bredt og praktisk med Gen.AI, digital transformasjon og utvikling. Ikke bare teori, men også konkrete leveranser, eksperimentering, innholdsutvikling, bygging av løsninger og innsikt i utfordringer og nye muligheter.

For meg har studiet også gitt en bred innføring i hele AI-reisen: fra identifisering av behov og muligheter, analyse og strukturering av store datamengder, samt forankring og eierskap i organisasjonen, til bruk av modeller og programmer koblet mot kjerneprosesser, roadmaps, implementering, governance og ikke minst skaleringsmuligheter som ledere må forstå og håndtere.

Det har også gitt motivasjon til mer. Utenfor pensum har jeg blant annet bygget agentløsninger, nettsider, AI-assistert innsikts- og innholdsmotor og AI-arkitektur for beslutningsstøtte. Det har gitt meg enda større innsikt i mulighetsrommet, og i hvordan dette allerede er verdiskapende for virksomheter.

Kompetanse innen dette feltet har også gitt inspirasjon til å komme i kontakt med likesinnede. Nettverket har vokst med mennesker som ønsker å utforske, bygge og bidra til morgendagens løsninger.

💥 Oppsummert peker dette i en tydelig retning. Jeg ønsker å fortsette og utforske hvordan Gen.AI kan skape reell verdi for virksomheter og kunder i kommersiell sammenheng. Det er en retning jeg vil bygge videre, enten gjennom eget selskap eller i arbeid i et selskap som vil bruke AI mer målrettet.

Om noen er nysgjerrige på å teste ut Sales Coach-løsningen, er det bare å ta kontakt med meg for innlogging.

#GenerativeAI #DigitalTransformasjon #KommersiellLedelse #Innholdsproduksjon #AIAdvertising`
    },
    {
      id: "bi-generative-ai-for-business-2026-01",
      tittel: "Siste samling på BI i Generative AI for Business – dette er bare starten",
      teaser:
        "Siste fysiske samling på masterstudiet ved BI ga både praktisk erfaring og strategisk retning: bygging, ledelse og implementering av GenAI i virksomheter.",
      bildeUrl: "/images/studenter.mp4",
      dato: "2026-04-30",
      visningsDato: "30.04.26",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I går hadde vi siste fysiske samling på masterstudiet "Generative AI for Business" ved Handelshøyskolen BI.

Men følelsen er ikke at noe avsluttes. Snarere at noe har begynt! Kurset har gitt både praktisk erfaring og et tydeligere strategisk perspektiv på hvordan GenAI kan brukes, implementeres og ledes i virksomheter.

For min del har dette vært langt mer enn et fag med pensum, innleveringer, eksamener og prosjektoppgave.

Vi har laget apper, nettsider, assistenter, infographics, podcast, quiz, reklamemateriell i form av bilder og video, og jobbet med et bredt spekter av GenAI verktøy, modeller og praktiske anvendelser. Man skal ikke bare forstå hva AI er, men prøve det ut på tvers av oppgaver, arbeidsformer og forretningsbehov. Studiet har også vektlagt prompt engineering, dataanalyse, automatisering, strategi, implementering og ansvarlig bruk.

I tillegg har jeg fått utviklet 'The Predictive Sales Coach' 👇 - et salgscoach-verktøy som springer ut av både læringen på studiet og min egen kjernekompetanse innen kommersiell ledelse. Indikasjoner på at dette kan ha kommersielt potensial har jeg også fått. 📈

Men studiet har også utløst mer!
Det har gitt meg motivasjon til å bygge videre utover pensum med agentløsninger, AI-assistert innsikts- og innholdsmotor, AI-arkitektur for beslutningsstøtte, og ikke minst videre refleksjon og faglig deling. Dessuten har det gitt meg inspirasjon for å komme i kontakt med "likesinnede", hvilket for eksempel har ledet til at jeg har dannet AI Value Lab Oslo.

Det gir meg en følelse av stolthet av flere grunner.
💥 Fordi jeg ikke bare har lært om teknologien, men også bygget noe.
💥 Fordi jeg har klart å koble ny teknologi med det jeg kan best fra før: salg, kommersiell utvikling, ledelse og praktisk verdiskaping.
💥 Og fordi det er inspirerende å kjenne at dette ikke bare er faglig interessant, men også relevant og anvendbart i forretningskontekst der det kan ha store konkurransemessige fordeler.

Det er også vanskelig å komme utenom hvor gøy dette har vært. GenAI er et fagområde som utvikler seg svært raskt, og som så tydelig er i tiden, hvilket både gir energi og læringslyst. Når andre hører man fordyper seg i GenAI, er responsen alltid positiv. De fleste ser at dette er et område som blir stadig viktigere fremover.

Min viktigste take-away er derfor denne:
Det stopper ikke her!
Innen GenAI holder det ikke å ha testet noen verktøy eller fullført ett kurs. Utviklingen går for fort til det. Man må fortsette å lære, teste, bygge, feile, vurdere og omsette innsikt til praksis. Derfor har det vært spennende å kjenne på følelsen av å sitte mer i førersetet enn på sidelinjen mens mye fortsatt formes. 💪

Takk til professor Shubin Yu og alle medstudenter for inspirerende samlinger, gode diskusjoner, mye energi og kreativitet underveis. 💯`
    },
    {
      id: "econa-ai-kundereise-arbeidsflyt-01",
      tittel: "Det mest interessante med AI nå er hva den gjør med kundereisen, arbeidsflyten og tilgjengeligheten",
      teaser:
        "Refleksjoner fra Econa-arrangementet: AI skaper verdi når den kobles til kundereise, arbeidsflyt og konkrete behov.",
      bildeUrl: "/images/econa-ai.jpg",
      dato: "2026-04-22",
      visningsDato: "22.04.26",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Det traff meg tydelig på Econa-arrangementet i går.

Selv jobber jeg nå med å bygge både AI-basert chatbot, agenter og smartere bookingflyt i en privat klinikk, med mål om bedre behovsavklaring og en mer presis kunde-/pasientreise. Derfor ble dette ekstra relevant for meg:

AI skaper verdi først når den kobles til kundereisen, arbeidsflyten og konkrete behov.

Når jeg selv jobber kommersielt, er det spesielt spennende å se hvor veien går nå, og samtidig få være med på å bygge noe av det i praksis.

Synne Christiansen og Jens Fredrik Allworthy fra Sprint løftet et viktig poeng: Kundeopplevelse er ikke lenger bare kommunikasjon eller kundeservice. Det er summen av alle interaksjoner, og AI er i ferd med å endre dem alle.
Et illustrerende eksempel var hvordan kjøpsopplevelser kan gå fra klassisk navigasjon og filtrering til at kunden bare beskriver behovet sitt i naturlig språk, og får en relevant løsning generert derfra. Det er et stort skifte å gå fra menylogikk til intensjonslogikk.

Hanna Vodopic fra Devoteam satte ord på noe mange undervurderer: AI er blitt "den stille kollegaen".
Et konkret eksempel var hvordan ansatte i større grad spør AI før de spør sidemannen. Det gir fart, men kan også svekke læring, kunnskapsdeling og den friksjonen som ofte skaper bedre løsninger. Hun løftet også begrepet hollow intelligence: at vi kan fremstå mer kapable fordi AI hjelper oss å levere, uten at vi nødvendigvis bygger dyp nok forståelse selv.
Det var en viktig påminnelse: AI må ikke bare gjøre oss raskere. Den må brukes slik at vi også blir bedre, klokere og mer samkjørte.

Daniel Kirkenær Mathisen fra IGM viste den mest operative siden av dette: digitale kolleger og agenter som tar en rolle i frontlinjen.
Det ble veldig konkret da han viste hvordan AI-resepsjonisten svarer umiddelbart, håndterer flere henvendelser samtidig og setter over til menneske når det trengs.
Det er interessant fordi det flytter AI fra støtteverktøy til arbeidskapasitet. Det resonerer godt med noe av det jeg selv bygger nå, der agenter ikke bare skal svare, men bidra inn i flyt, tilgjengelighet og oppfølging.

Det som står sterkest igjen hos meg etter kvelden er at vi går fra AI som noe ansatte "tester litt", til AI som bygges langt inn i kjerneprosesser.

Da endres også kravene til oss som bygger:
 • Vi må forstå kundereisen
 • Vi må forstå prosessene
 • Vi må forstå hvor friksjonen faktisk er
 • Og bygge med tydelig human in the loop

Det er også her jeg mener noe av det mest oppsiktsvekkende skjer nå:
Virksomheter som klarer å koble AI til førstelinje, booking, behovsavklaring og oppfølging, bygger ikke bare effektivitet. De bygger en helt annen tilgjengelighet og presisjon i kundemøtet.

Det er der mye av konkurransekraften kommer til å ligge fremover.`
    },
    {
      id: "ai-needs-first-tannklinikk-case-01",
      tittel: "De fleste starter feil med AI – erfaringer fra et reelt case",
      teaser:
        "Fra AI Value Lab Oslo og et reelt tannklinikk-case: start med virksomheten og behov — ikke med «hvilken AI-løsning?» Nettside, chatbot og booking i riktig rekkefølge.",
      bildeUrl: "/images/ai-to-needs.jfif",
      bildeKortFokus: "center center",
      dato: "2026-04-14",
      visningsDato: "14.04.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I påsken og i forrige uke har jeg jobbet videre med et konkret case gjennom min gruppe AI Value Lab Oslo, der vi bruker en reell tannklinikk som læringsarena for å teste hvordan AI kan brukes i praksis.

Vi startet ikke med teknologi. Vi startet med virksomheten.

Gjennom analyse, research, intervjuer og diskusjoner jobbet vi oss frem til ett kjernepunkt: Hvor oppleves friksjon i hverdagen?

Hva fungerer godt i dag?
Hvor er flaskehalsene?
Hvor taper klinikken tid, kapasitet eller potensielle inntekter?

Vi så også på hva konkurrentene gjør bedre, særlig i hvordan de møter pasientene digitalt og operativt.

Bildet som tegnet seg var tydelig:
Den faglige kvaliteten og pasientopplevelsen er sterk, men det er et gap i det digitale og kommersielle rundt. Altså ikke i kjerneleveransen, men i det som skjer før og etter.

Det er derfor vi nå jobber med å modernisere pasientreisen, og vurderer hvordan AI og digitale løsninger kan styrke:
🦷 booking og tilgjengelighet
🦷 oppfølging og gjenkjøp
🦷 tydelig informasjon og pasientkommunikasjon
🦷 mer effektive arbeidsprosesser
🦷 bedre operativ støtte i hverdagen

Helt konkret jobber vi nå med:
– videreutvikling av nettside (bedre struktur og mer relevant informasjon)
– ny chatbot (ikke hatt tidligere)
– ny online bookingløsning (ikke hatt tidligere)

Alt utvikles med utgangspunkt i faktiske behov hos pasientene. Poenget er ikke verktøyene i seg selv, men rekkefølgen.

De fleste virksomheter starter derimot med spørsmålet:
"Hvilken AI-løsning skal vi velge?"

I praksis bør man starte et helt annet sted ved å spørre:
"Hvilke beslutninger og prosesser påvirker resultatet?"

Dette gjenkjenner jeg fra kommersielle organisasjoner:
Prioritering av kunder gjøres ulikt fra person til person.
Oppfølging av tilbud styres like mye av kapasitet som av potensial.
Pipeline og forecast preges ofte mer av optimisme enn struktur.

Det betyr ikke at det gjøres dårlig, men at det finnes et betydelig forbedringspotensial. Det er her AI kan bidra!

En modell kan analysere mønstre og foreslå neste beste handling. Men verdien oppstår først når det brukes til å ta bedre beslutninger i praksis.

Siden disse AI-postene er ment som kompetansedeling, nevner jeg også kort verktøyene vi tester. Løsninger er utviklet med Claude og Claude Code, med innhold fra FAQ-er og dagens nettside bygget på localhost, med videre plan for deployment via Vercel. Nettsidearbeid parallelt i Lovable. Ikke fordi verktøyene er av betydning, men fordi flere spør hva som faktisk brukes i praksis.

👉 I neste innlegg ser jeg på hvorfor mange AI-initiativer stopper opp, selv når de starter riktig.

PS. Påsken ble ellers brukt på Røros og Svalbard med opplevelser som minner meg på noe viktig: Ikke alt skal optimaliseres. Langrenn, alpint, snøscooter, hundeslede, villdyr og tid med familie og venner slår fortsatt det meste – det reelle er ikke kunstig.`
    },
    {
      id: "ai-value-lab-munch-kickoff-01",
      tittel: "Kick off på Munch med AI Value Lab Oslo",
      teaser:
        "Påske-lunsj på Munch: utforske ansvarlig AI der kommunikasjon, forventninger og trygghet betyr mye – fra sterke følelser til tannlegebesøk.",
      bildeUrl: "/images/ai-dental-lab.png",
      dato: "2026-04-07",
      visningsDato: "07.04.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I påsken hadde vi kick off lunsj, og vi i AI Value Lab Oslo møttes på 𝘔𝘜𝘕𝘊𝘏.

Det føltes egentlig som et ganske passende sted å starte.

Munchs univers handler om sterke følelser, uro og menneskelige reaksjoner. Det gjør også mange menneskers møte med helsetjenester. For noen kan et tannlegebesøk være forbundet med usikkerhet, friksjon og i noen tilfeller tannlegefrykt. Da er det ikke så vanskelig å forstå hvorfor slike opplevelser er verdt å lære mer om.

I denne fasen bruker vi tid på å utforske hvordan AI kan brukes på en ansvarlig og gjennomtenkt måte i situasjoner der kommunikasjon, forventninger og trygghet betyr mye.

Det vi er særlig opptatt av nå, er hva som faktisk skjer i møtet mellom mennesker, informasjon og teknologi. Hvor oppstår usikkerhet? Hva skaper trygghet? Og hvor kan AI være nyttig, uten at det går på bekostning av personvern, vurderingsevne eller menneskelig nærhet?

For oss handler dette ikke bare om teknologi. Det handler også om læring underveis, om å bygge bedre forståelse, utvikle ferdigheter og dele refleksjoner på tvers av fagområder.

Noe av det mest interessante med AI er kanskje ikke tempoet eller effekten i seg selv, men hvordan teknologien kan brukes mer varsomt, mer presist og mer menneskelig.

Fra Munchs tid til vår egen har verktøyene endret seg mye. Behovet for å forstå mennesker er fortsatt det samme.

Kanskje er noe av den mest interessante AI utforskningen nettopp dette: ikke å gjøre det menneskelige mindre viktig, men å forstå bedre hva som gjør en opplevelse tryggere og mer sammenhengende.

Det blir spennende å utforske dette sammen videre, Tatiana Hanecakova og Ole Mjelde!`
    },
    {
      id: "april-ai-kompetanse-praksis-01",
      tittel: "Vi har nå funnet en enkel måte å bygge AI-kompetanse i organisasjonen",
      teaser:
        "AI-kompetanse bygges ikke på kurs alene, men i beslutninger og praksis tett på kjernearbeidet.",
      bildeUrl: "/images/easter-ai.jfif",
      dato: "2026-04-01",
      visningsDato: "01.04.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `𝐕𝐢 𝐡𝐚𝐫 𝐧𝐚̊ 𝐟𝐮𝐧𝐧𝐞𝐭 𝐞𝐧 𝐞𝐧𝐤𝐞𝐥 𝐦𝐚̊𝐭𝐞 å 𝐛𝐲𝐠𝐠𝐞 𝐀𝐈-𝐤𝐨𝐦𝐩𝐞𝐭𝐚𝐧𝐬𝐞 𝐢 𝐨𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐬𝐣𝐨𝐧𝐞𝐧

Send alle på kurs!

Eller kanskje ikke. Dette var forsøk på en dårlig 𝐀𝐩𝐫𝐢𝐥𝐬𝐧𝐚𝐫𝐫:

Mange ledere venter med AI – kan du tenke deg hvorfor? Det handler ikke om fordi de ikke vil, men fordi de ikke ser hvor de skal starte. Det er i stor grad forståelig.

De siste månedene har jeg vært på flere kurs og samlinger om AI. Jeg liker det. Det gir energi, nye perspektiver og et språk for å forstå hva som skjer.

Men én ting har blitt veldig tydelig: utviklingen skjer ikke der. Den skjer først når AI flyttes inn i arbeidshverdagen og kobles til beslutninger som faktisk betyr noe.

Så langt i denne AI-serien har jeg skrevet om dømmekraft, struktur og hvordan mennesker reagerer når AI begynner å gi råd. Nå går jeg over til det mange ledere faktisk er opptatt av:

Hvordan skapes verdi i praksis?

I kommersielle team ser jeg et tydelig skille. Noen tester AI på siden. Lager tekster, oppsummerer dokumenter, prøver litt frem. Det er nyttig, men det flytter lite. Andre kobler AI direkte til kjernebeslutninger:
 • Hvilke kunder skal prioriteres?
 • Hvilke tilbud skal følges opp nå?
 • Hvor er det reell sannsynlighet for å vinne?

Det er DER forskjellen oppstår.

En modell kan analysere pipeline og foreslå neste beste handling. Men verdien ligger ikke i svaret. Den ligger i hva teamet gjør med det. Tester de anbefalingen? Utfordrer de den? Justerer de beslutningen?

Det er der KOMPETANSEN bygges. Ikke i verktøyet, men i samspillet mellom erfaring, data og vurdering.

Jeg merker det selv når jeg bygger og tester AI-verktøy. Små endringer i kontekst eller input gir ulike anbefalinger. Det gjør én ting tydelig i form av at dette ikke er noe du “lærer ferdig”. Du utvikler det gjennom bruk. Derfor tror jeg mange overvurderer behovet for å starte med teknologi. Det viktigste i startfasen er ikke nye systemer, men å koble AI til beslutninger som allerede tas i dag.

De virksomhetene som lykkes best, bygger ikke AI-kompetanse ved siden av driften. De bygger den i linjen.

Den neste uken skal jeg bygge og teste AI-agenter. Det innebærer bruk av ulike verktøy, men først og fremst læring, testing og å utfordre det jeg gjør og de svarene som gis.

👉 I neste innlegg ser jeg nærmere på hvordan man identifiserer de riktige AI-use casene å starte med.

God påske!`
    },
    {
      id: "iteam-operativ-modell-2026-01",
      tittel: "Er din kommersielle operative modell rigget for 2026?",
      teaser:
        "Refleksjoner fra iteam sitt frokostseminar: AI som nytt operativsystem, cybersikkerhet som fundament og agenter som faktisk utfører arbeid.",
      bildeUrl: "/images/iteam.jpg",
      dato: "2026-03-11",
      visningsDato: "11.03.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `𝗘𝗿 𝗱𝗶𝗻 𝗸𝗼𝗺𝗺𝗲𝗿𝘀𝗶𝗲𝗹𝗹𝗲 𝗼𝗽𝗲𝗿𝗮𝘁𝗶𝘃𝗲 𝗺𝗼𝗱𝗲𝗹𝗹 𝗿𝗶𝗴𝗴𝗲𝘁 𝗳𝗼𝗿 𝟮𝟬𝟮𝟲?

I går deltok jeg på iteam og Michael Jacobs sitt frokostseminar på Saga Kino i Oslo – et arrangement med over 800 deltakere fordelt på 29 lokasjoner. Budskapet var krystallklart: Vi står i et teknologisk skifte som krever en fundamental rekalibrering av hvordan vi leder, sikrer og skalerer virksomheter.

I møtet ble det fremhevet at gapet mellom de som kun ser på AI som et verktøy, og de som forstår det som et nytt kommersielt operativsystem, øker raskt. Å investere i dyp AI-forståelse og endringsledelse nå er ikke bare en fordel, men en kritisk kapabilitet for enhver leder som skal navigere i årene som kommer.

Her er min strategiske oppsummering av de viktigste driverne for 2026:

<strong>1. Det teknologiske paradigmeskiftet</strong>
Vi har beveget oss fra 90-tallets fokus på programvare til 2000-tallets skytjenester. Nå trer vi inn i de autonome agentenes tidsalder.
• Fra verktøy til digital arbeidsstyrke: AI går fra å være en passiv assistent til å bli en aktiv agent som automatiserer rutineoppgaver, analyserer enorme datasett og støtter strategiske beslutninger.
• Global teknologi – lokale konsekvenser: Teknologien er tilgjengelig for alle, men konkurransefortrinnet skapes lokalt av de lederne som evner å operasjonalisere AI i sin verdikjede.

<strong>2. Cybersikkerhet som strategisk fundament</strong>
Roar Thon fra NSM leverte en dyster realitetsorientering: Trusselbildet er preget av statlige aktører og organiserte kriminelle.
• Identitet er den nye angrepsflaten: Angripere hacker sjelden systemer. De logger seg inn via misbrukte brukeridentiteter.
• Breddesikkerhet: En helhetlig tilnærming krever kontroll på teknologi, mennesker og prosesser.
• Fire kritiske kapabiliteter: Enhver moderne virksomhet må kunne forebygge, detektere, håndtere og normalisere drift etter et angrep.

<strong>3. AI i operativ praksis: Microsoft Copilot</strong>
Daniel Horgmo fra Microsoft demonstrerte hvordan vi går fra enkel chat til faktiske autonome agenter som fungerer som en digital arbeidsstyrke.
• Presis delegring: Suksess med AI krever "Prompting 101" – evnen til å gi mål, kontekst og kilder som om du delegerer til et teammedlem.
• Agent Mode: Gjennom Copilot ser vi nå agenter som utfører flerstegsoppgaver autonomt direkte i våre kjernesystemer.

<strong>Min strategiske konklusjon:</strong>
Jeg at suksess krever at vi slutter å se på sikkerhet og AI som IT-prosjekter. Kulturelle og strukturelle endringer må til.
• Start smått, tenk stort. Test i liten skala, men ha en klar strategi fra ledelsen.
• Datadisplin: Gode data og streng tilgangsstyring er forutsetningen for AI-effekt.
• Sikkerhet by design: Integrer sikkerhet fra start da det er betydelig billigere enn å håndtere en krise.

Takk til iteam for et profesjonelt dypdykk inn i fremtiden.`
    },
    {
      id: "ai-tech-frokost-rebel-01",
      tittel: "Tech-frokost: Nå handler det om hva AI-agenter kan gjøre for virksomheten",
      teaser:
        "AI-agenter skaper verdi når de kobles til systemer, data og prosesser — med kontroll, tydelige instruksjoner og human in the loop.",
      bildeUrl: "/images/rebel.jpg",
      bildeKortFokus: "center center",
      dato: "2026-03-25",
      visningsDato: "25.03.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `På AI-agent møte hos Digital Norway i går fikk vi et godt bilde av hvor agentfeltet står nå, fra begrepsforståelse, via offentlig sektor og governance, til startup, skalering og konkret bygging.

Mange snakker fortsatt om AI som bedre tekst, raskere søk og smartere assistenter. Det er ikke der verdien ligger. Verdien oppstår når AI kobles til systemer, data og prosesser – og utfører arbeid.

Alexander Haneng fra Digital Norway satte rammen godt. En chatbot svarer. En assistent hjelper. En agent handler. Den kan trigge prosesser, hente data, sende email og jobbe i bakgrunnen. Samtidig øker risikoen. Tilgang til systemer og data krever kontroll, tydelige instrukser og begrensede rettigheter.

Kjetil Ringstad fra Statens Vegvesen viste hvordan dette implementeres i en stor virksomhet. Ikke som teknologi alene, men som struktur og styring. En modell som fungerte godt var hvordan ansatte bygger egne agenter, eksperter bygger fellesløsninger og utviklere bygger plattform.

Caset med dokumentkontroll var konkret. Agenter identifiserer sensitiv informasjon, foreslår endringer og reduserer manuelt arbeid. Samtidig er to prinsipper avgjørende: håndtering av sensitive data må være kontrollert, og human in the loop må være på plass før noe publiseres. Det er her mange møter den reelle kompleksiteten.

Einar Michaelsen fra Circular viste hvordan dette ser ut når det kobles direkte til verdikjeden. Produkter kan digitaliseres, kategoriseres, prises og publiseres på sekunder. Salgsagenter finner leads, scorer dem og setter neste steg i prosess. Når 4 mennesker jobber sammen med 40 agenter, sier det noe om retningen!

Stacken bak var bla. Linear, Claude Code, Cursor, GitHub, Supabase, Vercel, Gemini, mm. Verdien ligger i hvordan dette kobles sammen til en produksjonslinje. For min del var det gøy å se dette, da jeg har erfaring med flere av verktøyene og nå jobber med å bygge egne agentløsninger.

Det som skiller de som får effekt nå er hvordan de starter. Ikke med teknologi, men med konkrete oppgaver. Repetitivt arbeid på tvers av systemer, med tydelige regler og målbar verdi. Deretter bygges en enkel agent med begrenset tilgang inkl. menneskelig kontroll. Når dette fungerer, skaleres det.

Min take er enkel. Spørsmålet er ikke hvilke modeller man skal bruke. Spørsmålet er hvilket arbeid som kan delegeres, hvilke prosesser som bør redesignes og hvor dette faktisk gir verdi.

Det er også bakgrunnen for at jeg nå jobber konkret med å bygge agenter, med ambisjon om målbar effekt i en virksomhet jeg samarbeider med.

Inne i lokalet stod det en DeLorean med “REBEL”-skilt. I filmen Back to the Future handlet det om å reise frem i tid. Med AI føles det mer som vi bygger den. AI-agenter er retningen fremover!`
    },
    {
      id: "nova-day-data-forst-01",
      tittel: "NOVA Day: Data først – alltid",
      teaser:
        "Jeg deltok på NOVA Day og fikk tydelige takeaways om data først, dømmekraft og governance som grunnmur.",
      bildeUrl: "/images/nova-day.jpg",
      dato: "2026-03-19",
      visningsDato: "19.03.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Jeg deltok i går på 𝗡𝗢𝗩𝗔 𝗗𝗮𝘆 på Hotel Bristol – et svært relevant og innsiktsfullt heldagsseminar med temaet “𝗗𝗮𝘁𝗮 𝗳ø𝗿𝘀𝘁 – 𝗮𝗹𝗹𝘁𝗶𝗱”, med fokus på AI, data og fremtidens forretningsmodeller.

Dagen ble ledet av Morten Blomfeldt, og samlet sterke foredragsholdere.

𝗠𝗶𝗻𝗲 𝘃𝗶𝗸𝘁𝗶𝗴𝘀𝘁𝗲 𝘁𝗮𝗸𝗲𝗮𝘄𝗮𝘆𝘀:
1. Data først – ikke AI først
Gjennomgående budskap var at uten riktig datagrunnlag uteblir gevinstene. AI er forretningskritisk, men data er fundamentet for skalering og verdiskaping.

2. Fremtiden formes nå – men ikke av teknologi alene
Gerd Leonhard løftet viktigheten av menneskelig dømmekraft, etikk og ansvar. Teknologi gir muligheter, men det er ledelse som avgjør retning og konsekvenser.

3. Datakvalitet, risiko og governance er kritisk
Iselin Paulsen viste hvordan geopolitikk, sikkerhet og regulering påvirker teknologivalg. Datakvalitet, kontroll og tydelig eierskap i ledelsen er avgjørende.

4. Fra hype til håndverk – der de fleste feiler
Ørjan Segtnan Clausen var tydelig: De fleste AI-initiativer stopper på pilotstadiet. Årsaken er manglende problemforståelse, svakt datagrunnlag og fravær av tydelig verdidefinisjon. Han viste blant annet til ADDDD-rammeverket (Align, Discover, Define, Develop, Deliver) som en struktur for å sikre at AI-initiativer går fra idé til forretningsverdi.

5. AI går fra verktøy til aktør
Det mest spennende for meg var innsikten fra Lars Alexander Jakobsen rundt MCP (Model Context Protocol) og utviklingen mot A2A (Agent-to-Agent). Når AI kobles direkte til systemer og agenter samhandler, beveger vi oss mot operative “digitale kollegaer”. Dette vil fundamentalt endre hvordan vi organiserer arbeid og skaper verdi.

Midt på dagen var det også en paneldebatt som bandt sammen perspektivene. Diskusjonen handlet om geopolitikk, avhengighet til globale teknologileverandører, digital suverenitet og behovet for tydeligere strategiske valg. Dette er ikke lenger et IT-spørsmål, men et lederansvar.

𝗠𝗶𝗻 𝗿𝗲𝗳𝗹𝗲𝗸𝘀𝗷𝗼𝗻:
“Data først – alltid” er ikke et teknologivalg. Det er et strategisk valg – og et tydelig lederansvar.

Det som traff meg mest, er at mange fortsatt jobber med AI som et verktøy, mens gevinstene først kommer når man redesigner prosesser og ansvar.
For meg er dette også et kommersielt skifte, der AI vil påvirke salg, kundeopplevelse og verdiskaping i praksis.

Når vi ser fremveksten av MCP og A2A, beveger vi oss mot en ny operativ modell der AI-agenter ikke bare støtter, men utfører arbeid på tvers av systemer. Vi snakker ny arkitektur for hvordan arbeid utføres!

👉 Dette jobber jeg også aktivt med nå da jeg anser det som viktig å forstå hvordan dette implementeres i praksis, ikke bare på nivå med teoretiske rammeverk.

Takk til NOVA Consulting Groupfor et svært godt gjennomført arrangement – og ikke minst hyggelig å møte mange nye bekjentskaper og ha gode faglige diskusjoner gjennom dagen!`
    },
    {
      id: "ai-value-lab-01",
      tittel: "Vi har startet noe jeg mener flere ledere burde gjøre",
      teaser:
        "Et uformelt fellesskap for å bygge, dele og utfordre hverandre med AI — for reell forretningsverdi.",
      bildeUrl: "/images/ai-value-lab.jpeg",
      dato: "2026-03-20",
      visningsDato: "20.03.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `𝗩𝗶 𝗵𝗮𝗿 𝘀𝘁𝗮𝗿𝘁𝗲𝘁 𝗻𝗼𝗲 𝗷𝗲𝗴 𝗺𝗲𝗻𝗲𝗿 𝗳𝗹𝗲𝗿𝗲 𝗹𝗲𝗱𝗲𝗿𝗲 𝗯𝘂𝗿𝗱𝗲 𝗴𝗷ø𝗿𝗲.

For min del har dette blitt en arena hvor jeg både lærer raskere og får testet egne hypoteser i praksis.

Vi er tre personer med én felles ambisjon:
Å skape reell forretningsverdi med AI.

Vi har etablert et uformelt samarbeid vi kaller "𝗔𝗜 𝗩𝗮𝗹𝘂𝗲 𝗟𝗮𝗯".

Ikke bare for å teste verktøy, men for faktisk å bygge, dele og utfordre hverandre systematisk.

Vi møtes jevnlig til det vi kaller “𝗦𝗵𝗼𝘄 & 𝗧𝗲𝗹𝗹”.

Her deler vi konkret hva vi har jobbet med siden sist:
• AI-agenter, applikasjoner og nettsider vi har utviklet
• Eksperimenter på tvers av modeller og verktøy. Hva fungerer, hva fungerer ikke
• Sammenlikning av styrker og svakheter mellom ulike AI-løsninger
• Innsikt fra møter, workshops og kurs vi deltar på, samt innspill og tips til andre og nye fagarenaer og tema

Men det som gjør dette spesielt, er dybden i diskusjonene. Vi bruker også tid på det mange hopper over:
• Hvordan bruke data som gir konkurransefortrinn
• Governance – hvordan sikre kontroll, kvalitet og ansvarlighet
• Rammeverk som ADDDD (Align, Discover, Define, Develop, Deliver) – og hvordan det brukes i praksis
• Hvordan gå fra pilot til skalerbar verdi

Samtidig jobber vi ikke bare med eksperimenter. Vi tar for oss reelle problemstillinger og use-cases.

Vår hypotese er enkel. AI skaper ikke verdi i siloer. Den skaper verdi når ulike enheter jobber sammen. Akkurat som avdelinger i virksomheter må gjøre.

Det jeg sitter igjen med så langt, er en ganske tydelig erkjennelse. Mange jobber med AI på individnivå. Få klarer å bygge strukturer som skaper verdi på selskapsnivå.

Vår tilnærming er derfor bevisst:
👉 Kombinere praktisk bygging med strategisk forståelse
👉 Koble AI direkte til kommersielle use-cases
👉 Lære raskere sammen enn hver for oss

Neste steg? Vi skal bygge noe sammen som gir reell effekt – og som kan skaleres.

For meg handler dette minst like mye om ledelse som teknologi.

Ledelse som evner å koble eksperimentering med retning.
Ledelse som forstår både data, governance og verdiskaping.
Ledelse som leverer effekt og resultat.

Vi er tidlig ute. Vi bygger, ikke bare prater. I dobbel forstand. Ser frem til fortsettelsen Ole Mjelde og Tatiana Hanecakova!

𝗦𝗸𝘆 𝗶𝘀 𝘁𝗵𝗲 𝗹𝗶𝗺𝗶𝘁. 𝗠𝗲𝗻 𝗸𝘂𝗻 𝗳𝗼𝗿 𝗱𝗲 𝘀𝗼𝗺 𝗼𝗺𝘀𝗲𝘁𝘁𝗲𝗿 𝗔𝗜 𝘁𝗶𝗹 𝘃𝗲𝗿𝗱𝗶.`
    },
    {
      id: "ai-debatten-hype-vs-frykt-01",
      tittel: "AI-debatten går fortsatt i to spor: hype vs frykt",
      teaser:
        "Når debatten låser seg til «hype» og «frykt», blir det vanskelig å se verdiskaping i praksis. Det er adopsjon som flytter drift.",
      bildeUrl: "/images/debatten.jfif",
      bildeKortFokus: "40% center",
      dato: "2026-03-22",
      visningsDato: "22.03.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Men det virkelige skillet skjer et annet sted.

Etter å ha fulgt <strong>Debatten</strong> på <strong>NRK1</strong> denne uken sitter jeg igjen med to tydelige refleksjoner.

For det første:
<strong>AI er ikke lenger noe vi diskuterer på avstand.</strong> Det er allerede i ferd med å endre hvordan virksomheter opererer.

Eksemplene fra blant annet Oljefondet er tydelige. Nicolai Tangen viste hvordan de har allerede dokumentert betydelige gevinster. De har økt produktiviteten med rundt 20 prosent og spart milliarder gjennom bedre analyse, overvåkning og beslutningsstøtte.

Dette er ikke eksperimentering, men reell verdiskaping i praksis.

For det andre:
Som også løftes frem i diskusjonen rundt AI i Norge, trenger vi flere perspektiver inn. AI er ikke ett fag, men det spenner fra teknologi og matematikk til forretning, ledelse, sikkerhet og samfunn.

Hvis debatten låser seg til hvem som har “rett” til å mene noe, risikerer vi å snevre inn forståelsen og samtidig forsinke nødvendig utvikling. Denne bredden i perspektiver er avgjørende for å ta bedre beslutninger og sikre ansvarlig bruk av AI.

Nicolai Tangen var tydelig på at virksomheter som ikke tar dette i bruk risikerer å falle bak.

👉 De som adopterer raskt får et strukturelt fortrinn. Dette gjelder både individer og organisasjoner.

På individnivå ser vi at de som tar i bruk AI utvikler seg raskere. De jobber mer effektivt, tar bedre beslutninger og øker sin egen verdi i arbeidsmarkedet.

På organisasjonsnivå handler det ikke om enkeltverktøy, men om hvordan man jobber. AI må integreres i kjerneprosesser, kompetanse må bygges bredt, og arbeidsformer må endres. Fra pilotprosjekter til faktisk drift og beslutningstaking.

Det er her forskjellen skapes, samtidig som vi må unngå to ytterpunkter. Naivitet, der man ukritisk kaster seg på alt. Eller handlingslammelse, der debatten blir viktigere enn fremdriften. Begge deler svekker evnen til å skape verdi.

Min refleksjon er at AI ikke først og fremst vil skape vinnere. Den vil tydeliggjøre hvem som evner å utvikle seg raskest og omsette teknologi til konkret verdi.

Spørsmålet er ikke hvem som har rett i AI-debatten.
Det reelle spørsmålet er hvem som klarer å skape reell verdi av den.`
    },
    {
      id: "ai-dommekraft-bias-01",
      tittel: "Når AI gir råd – hvem stoler vi egentlig på?",
      teaser:
        "AI fjerner ikke menneskelig bias, den kan forsterke den. Refleksjoner rundt hvordan vi tolker og bruker AI-anbefalinger i kommersielle beslutninger.",
      bildeUrl: "/images/ai-judgement.jpg",
      dato: "2026-03-16",
      visningsDato: "16.03.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Denne uken deltar jeg på NOVA Day. Mange av samtalene der handler naturlig nok om hva AI kan gjøre for virksomheter. Det er viktig, men en problemstilling jeg mener får for lite oppmerksomhet, er hvordan mennesker reagerer når systemene begynner å gi råd.

AI fjerner ikke menneskelig bias, men kan heller forsterke den.

En del av forklaringen ligger i hvordan generativ AI faktisk fungerer. Modellene svarer ikke fordi de “vet”. De beregner statistisk hva som er det mest sannsynlige neste ordet basert på store mengder treningsdata og konteksten de får. Det betyr at modellene speiler mønstre i dataene og påvirkes av hvordan vi rammer inn spørsmålet.

Men bias oppstår ikke bare i modellen. Den oppstår også i møtet mellom modell og menneske.

Forskning fra blant annet MIT Sloan, Harvard Business School og Stanford peker på flere mekanismer som kan svekke beslutningskvaliteten når AI brukes i praksis:

<strong>Automation bias</strong>
Når mennesker legger for stor vekt på anbefalingen fra systemet, fordi den kommer fra en modell og oppleves objektiv.

<strong>Algorithm aversion</strong>
Når mennesker mister tilliten til modellen etter én synlig feil, og deretter avviser den helt, selv om den over tid kan være bedre enn magefølelsen alene.

<strong>Databias</strong>
Hvis datagrunnlaget er skjevt, vil også analysene bli det.

<strong>Confirmation bias</strong>
Vi tolker gjerne AI-svar på en måte som bekrefter det vi allerede tror.

I praksis ser jeg dette tydelig i kommersielle situasjoner. En AI-modell kan analysere salgsdata og foreslå hvilke kunder som bør prioriteres, hvilke tilbud som bør følges opp eller hvilke kontoer som har størst vekstpotensial. Selgeren eller lederen kan gjøre to feil ved enten følge anbefalingen blindt, eller ignorere den helt.

Følges anbefalingen ukritisk, kan skjevheter i data eller modell forsterkes. Hvis den avvises fordi den “føles feil”, mister man samtidig verdien av mønstergjenkjenningen modellen faktisk kan tilføre.

Det er her ledelsesutfordringen ligger.

Den modne organisasjonen ber ikke folk velge mellom teknologi og skjønn. Den bygger prosesser der anbefalinger testes, modellens begrensninger forstås, og analyse kombineres med dømmekraft. Det bygges med andre ord en kultur der mennesker fortsatt stiller spørsmål, også når systemet virker sikkert. Det er først da AI blir beslutningsstøtte i ordets egentlige forstand.

For meg er dette noe av det mest interessante ved AI akkurat nå. Ikke bare hva modellen kan produsere, men hva som skjer med vurderingsevnen vår når svaret kommer raskt, ser overbevisende ut og er pakket inn med høy selvtillit.

I arbeidet med å bygge og teste egne AI-modeller og verktøy merker jeg dette tydelig. Små justeringer i data, kontekst eller instruksjoner kan gi ulike anbefalinger. Det minner meg stadig om at modellen gir forslag og ikke fasitsvar. Testing er en nødvendighet fortløpende.`
    },
    {
      id: "ai-ready-virksomhet-01",
      tittel: "Når er en virksomhet AI-ready?",
      teaser:
        "Mange investerer i AI, men færre forbereder organisasjonen. En gjennomgang av de fire områdene som avgjør om en virksomhet er rigget for å hente ut verdi fra teknologien.",
      bildeUrl: "/images/ai-ready.jpg",
      dato: "2026-03-09",
      visningsDato: "09.03.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Mange virksomheter sier de jobber med AI. Færre har forberedt organisasjonen på hva det innebærer. 

Teknologien er tilgjengelig for alle. Den virkelige forskjellen ligger i hvordan virksomheten organiserer beslutninger, data og ansvar rundt den.

McKinsey peker på at mange selskaper investerer tungt i AI, men får begrenset effekt fordi organisasjonen ikke er rigget for å bruke dem. Problemet er sjelden modellen. Det er strukturen rundt den.

MIT Sloan beskriver at mange organisasjoner starter AI-arbeidet med teknologi. De som lykkes, starter med beslutninger. Først når man vet hvilke beslutninger som skal forbedres, gir det mening å bygge AI-løsninger.

Et kommersielt eksempel illustrerer poenget: En AI-modell kan analysere salgsdata og foreslå hvilke kunder som bør prioriteres. Den kan rangere sannsynlighet for kjøp, margin og neste handling. Men dersom organisasjonen ikke har avklart hvem som eier beslutningen, hvilke kriterier som gjelder eller hvordan anbefalingen skal brukes, blir resultatet ofte mer analyse og ikke bedre beslutninger.

Gjennom arbeidet med generativ AI ser jeg fire områder som avgjør om en virksomhet er AI-ready:

<strong>1. Datagrunnlaget</strong>
AI forsterker kvaliteten på input. Gode data gir bedre analyser. Fragmenterte eller ustrukturerte data gir bare raskere feil. I mange kommersielle organisasjoner ligger nøkkelinformasjon spredt i CRM, presentasjoner, e-poster og notater. Før AI kan gi verdi, må dette struktureres.

<strong>2. Beslutningsstruktur</strong>
AI fungerer best når beslutninger er tydelig definert. Hvem eier vurderingen? Hvilke kriterier gjelder? Hva er mandatet? Uten dette risikerer man at modellen leverer anbefalinger som ingen egentlig eier.

<strong>3. Kompetanse</strong>
Verktøy alene skaper ikke verdi. Ledere og medarbeidere må forstå hvordan modellene fungerer, hvilke begrensninger de har og hvordan output vurderes kritisk. Det handler ikke om å bli teknolog. Det handler om å utvikle AI-dømmekraft.

<strong>4. Ansvarsforankring</strong>
Jo mer AI påvirker beslutninger, desto viktigere blir styring. Hvem er ansvarlig dersom modellen gir en feil anbefaling? Hvem justerer konteksten eller stopper bruken? Dette er ledelsesspørsmål, ikke teknologispørsmål.

Yu beskriver i 5A-modellen hvordan kravene til organisasjon og kompetanse øker når vi beveger oss fra access og assistants til applications, automation og agents. Jo mer autonomi vi gir systemene, desto viktigere blir strukturen rundt dem.

Derfor er spørsmålet ikke bare om en virksomhet bruker AI. Det er om organisasjonen er rigget for å bruke den.

For virksomheter som vil bevege seg fra AI-eksperimentering til verdiskaping, bistår jeg gjennom Marius Ottesen Consulting med strategisk avklaring og praktisk implementering i samarbeid med tekniske spesialister.

👉 I neste innlegg ser jeg på hvordan organisasjoner bygger AI-kompetanse i praksis, uten å bli avhengige av et stort internt tech-miljø.`
    },
    {
      id: "ai-arkitektur-beslutningsstotte-01",
      tittel: "Jeg bygger AI-arkitektur for beslutningsstøtte",
      teaser:
        "Hvordan generativ AI kan strukturere komplekse problemstillinger og gi kommersielle ledere et bedre beslutningsgrunnlag gjennom AI-dekonstruksjon.",
      bildeUrl: "/images/analyse.gif",
      dato: "2026-03-05",
      visningsDato: "05.03.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Som kommersiell leder har jeg flere ganger deltatt i strategiprosesser der målet er å koble ambisjoner til faktisk gjennomføring. Slike prosesser involverer ofte mange ansatte, eksterne konsulenter og fagmiljøer med ulike perspektiver og agendaer. Resultatet kan bli omfattende analyser og presentasjoner før man forstår hva virksomheten må gjøre annerledes.

Utfordringen er velkjent: Strategien er tydelig formulert, men koblingen til operativ handling er langt svakere. Strategidokumenter, KPI-strukturer, salgsprosesser, anbudsdokumenter og regulatoriske krav skaper store informasjonsmengder som er krevende å analysere systematisk.

Jeg arbeider derfor med en metode for å bruke generativ AI til å strukturere og analysere slike problemstillinger mer effektivt. Den grunnleggende logikken er enkel:

<strong>Dokumenter og data → AI-dekonstruksjon → strategisk innsikt → beslutningsstøtte</strong>

AI analyserer tekst, struktur og sammenhenger, identifiserer mulige gap og formulerer hypoteser som gir ledelsen et bedre utgangspunkt for vurderinger og beslutninger.

Gjennom vibe-coding og verktøy som GPT-4o, Claude, Gemini, Cursor og Streamlit har jeg utviklet et teknisk fundament som gjør det mulig å bygge flere typer beslutningsverktøy på samme arkitektur.

<strong>Fra idé til verktøy</strong>
Den samme analysemodellen kan brukes på flere områder innen kommersiell ledelse:

• <strong>Strategi og gjennomføring</strong>
AI kan analysere strategidokumenter opp mot operative planer, KPI-strukturer og sales dashboards for å identifisere hvor strategien bryter sammen i overgangen til drift.

• <strong>Commercial excellence og salg</strong>
Dynamiske battlecards kan genereres ved å analysere konkurrentinformasjon og koble dette til egne verdiforslag, slik at salgsteamet selger kommersiell verdi fremfor rene produktfunksjoner.

• <strong>Anbud og RFP-prosesser</strong>
Store kravdokumenter kan dekonstrueres slik at organisasjonen raskt identifiserer hvilke krav som krever strategiske svar.

• <strong>Governance og compliance</strong>
AI kan overvåke regulatoriske endringer og koble disse mot interne prosedyrer slik at virksomheten raskere identifiserer hva som må oppdateres.

• <strong>Onboarding og kapabilitetsutvikling</strong>
Samme logikk kan brukes til å strukturere kommersielle rammeverk slik at nye ansatte raskere forstår hvordan virksomheten arbeider med strategi, salg og prestasjonsstyring.

Et konkret eks. er løsningen "The Predictive Sales Coach", hvor selgere trener mot en dynamisk virtuell kunde basert på DISC og konkrete salgsfaser, mens systemet analyserer dialogen og gir forbedringspunkter for å øke win-rate i reelle kundemøter.

Fellesnevneren er arkitekturen bak og hvordan Gen. AI kan analysere komplekse problemstillinger, identifisere strukturelle gap og gi ledere et bedre beslutningsgrunnlag.

👉 Jeg arbeider med å utvikle og anvende slike løsninger i praksis. Dersom du er nysgjerrig på hvordan dette kan brukes i egen virksomhet tar jeg gjerne en prat.`
    },
    {
      id: "ai-dommekraft-kontekst-01",
      tittel: "AI-dømmekraft i praksis – fra prompt til kontekst",
      teaser:
        "Hvorfor context engineering – ikke bare prompt engineering – avgjør kvaliteten på AI-svar i praksis.",
      bildeUrl: "/images/context.png",
      dato: "2026-03-02",
      visningsDato: "02.03.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I arbeidet mitt med generativ AI har én ting blitt tydelig: <strong>Kvaliteten på svaret avgjøres lenge før modellen begynner å skrive.</strong> Små justeringer i kontekst, instruksjoner eller parametere kan gi markant forskjell i presisjon og struktur, enten man bygger egne GPT-er med dokumenter eller bruker standardmodeller i åpne arbeidsprosesser.

Vi snakker ofte om prompt engineering. I praksis er det <strong>context engineering</strong> som avgjør kvaliteten. Et AI-svar påvirkes ikke bare av selve spørsmålet, men av systeminstruksjoner, tidligere dialog, dokumenter som hentes inn, modellvalg og parametere som temperatur og top-p. Temperatur styrer balansen mellom kreativitet og konsistens. I idéutvikling kan variasjon være nyttig. I kommersielle beslutningsprosesser kan det være en risikofaktor.

Struktureringen av selve prompten har også stor betydning. En enkel formel løfter kvaliteten betydelig: persona, kontekst, oppgave, format, eksempler og tone. Forskjellen mellom ustrukturert og strukturert input er ofte dramatisk.

Det viktigste skillet går likevel mellom å optimalisere én interaksjon og å designe hele beslutningsmiljøet. Prompt engineering forbedrer svaret her og nå. Context engineering definerer rammene modellen arbeider innenfor over tid.

Hallusinasjoner illustrerer hvorfor dette er kritisk. Modellen optimaliserer for sannsynlig tekst, ikke sannhet. Når konteksten er uklar eller problemformuleringen upresis, kan svaret fremstå overbevisende og samtidig være feil. I en kommersiell sammenheng kan konsekvensen være betydelig. En modell kan analysere pipeline og foreslå neste beste handling. Den kan vekte sannsynlighet og margin. Men uten tydelig definert strategisk kontekst kan anbefalingen være teknisk presis og forretningsmessig feil.

MIT Sloan og McKinsey peker på det samme: Organisasjoner som lykkes med AI, kombinerer teknologi med tydelig menneskelig vurdering og ansvar. Modellen kan analysere mønstre. Den kan ikke forstå strategisk retning eller kontekst uten at vi definerer den.

AI-dømmekraft handler derfor om mer enn å mestre et verktøy. Det handler om å strukturere beslutningsgrunnlaget, designe informasjonsrammen modellen arbeider innenfor, forstå begrensningene og vurdere output kritisk før implementering. Yu beskriver i 5A-modellen hvordan kravene til kompetanse øker jo nærmere vi beveger oss mot automation og agents. McKinsey peker på det samme: Teknologien er tilgjengelig for mange. Evnen til å integrere den i beslutningsprosesser er det som differensierer. Strategisk sett er det context engineering som gir varig konkurransefortrinn.

For virksomheter som ønsker å bevege seg fra AI-diskusjon til faktisk verdiskaping, bistår jeg gjennom mitt selskap med både strategisk avklaring og praktisk implementering, i samarbeid med tekniske spesialister der det er nødvendig.`
    },
    {
      id: "strategi-ai-master-01",
      tittel: "Strategi uten AI er som å se bakover i speilet mens du kjører fremover",
      teaser:
        "AI er ikke lenger «nice to have» — det er en strategisk nødvendighet. Refleksjoner fra Oslo Business Forum og beslutningen om å melde seg på masterkurset Generativ AI for Business ved BI.",
      bildeUrl: "/images/strategi-ai.jfif",
      dato: "2025-11-11",
      visningsDato: "11.11.2025",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `For noen uker siden deltok jeg på Oslo Business Forum 2025. Et gjennomgående tema fra scenen var klart: <strong>AI er ikke lenger et «nice to have» — det er en strategisk nødvendighet.</strong> 🤖

🧠 <em>Budskapet jeg særlig tok med meg var:</em>
• Strategi må utvikles i takt med teknologi, ikke i etterkant.
• De virksomhetene som klarer å kombinere strategisk tenkning med ny teknologi, vil være morgendagens vinnere.
• AI fungerer ikke bare som et verktøy, men som en katalysator for innovasjon og konkurransekraft.

🎯 Jeg har lang erfaring med strategi, strategisk ledelse og utvikling. Blant annet har jeg en Executive Master of Management fra Handelshøyskolen BI med fordypning i strategisk ledelse og strategisk kommunikasjon.
I jobb har ansvar for strategisk ledelse, utvikling og forretningsmessig vekst og resultater vært en rød tråd.
AI, derimot, er et område jeg ikke har samme bakgrunn i — men som jeg ikke har råd til å ignorere.

Derfor besøkte jeg BI sin stand på OBF, og i forrige uke hadde jeg en inspirerende samtale med en rådgiver om hvordan jeg kan bygge denne kompetansen videre. <strong>Resultatet?</strong>
👉 Jeg har meldt meg på masterkurset «<em>Generativ AI for Business</em>» med oppstart i februar.

Ikke for studiepoengene. Men fordi jeg ønsker å utforske hvordan AI kan brukes strategisk for å drive innovasjon, åpne nye forretningsmuligheter og styrke operasjonell effektivitet. 📈
Og fordi jeg oppriktig tror at <strong>det aldri er for sent å utvikle seg faglig</strong> — ambisjon handler ikke bare om å prestere mer, men å lære mer. De som evner å fornye seg, står sterkest i morgendagens konkurranse. 🚀

📚 Bøkene er allerede bestilt — nå gleder jeg meg til å lære mer og "tjuvstarte" studiet, og til å kombinere strategisk erfaring med ny teknologi.

Hva med deg? Ser du AI som en strategisk game-changer i din virksomhet der du aktivt tar grep — eller som noe du "tar når det kommer"? Heng deg på, da! 💪

📌 <em>PS. For ordens skyld: Bildet er AI-generert.</em>`
    },
    {
      id: "ai-learning-google-skills-01",
      tittel: "Det er fascinerende hvor enkelt det har blitt å tilegne seg AI-kompetanse gjennom helt nye og moderne metoder",
      teaser:
        "Anbefaling av Googles læringsunivers for AI-kompetanse: Google Skills og Google Cloud YouTube-serier, med konkrete moduler å starte med.",
      bildeUrl: "/images/ai-learning.jfif",
      dato: "2025-11-27",
      visningsDato: "27.11.2025",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Det er fascinerende hvor enkelt det har blitt å tilegne seg AI-kompetanse gjennom helt nye og moderne metoder. <strong>Google har samlet et imponerende læringsunivers som gjør det mulig å bygge solid AI-kompetanse, uavhengig av teknisk bakgrunn.</strong>

To plattformer skiller seg spesielt ut:

✅ <strong>Google Skills</strong> – en komplett læringsplattform med kurs, praktiske lab-oppgaver, progresjonssporing og sertifiseringer du kan vise direkte på LinkedIn.

✅ <strong>Google Cloud YouTube-seriene</strong> – korte, pedagogiske videoer som gir et solid fundament før du går i gang med de mer praktiske delene.

Jeg har nå fullført mitt første kurs, "<strong>Gen AI: Beyond the Chatbot</strong>", og legger ved badgen her i posten. Dette er tydelige, faglig sterke kurs – ikke noe "low-level brevkurs", men gjennomført, relevant og praktisk læring.

Inspirasjonen til å utforske dette kom fra delingene til Morten Johnsen som virkelig åpnet øynene mine for bredden av temaer og muligheter i dette "AI-universet". Tusen takk, Morten!

<strong>Min anbefaling:</strong>

Disse YouTube-modulene er et effektivt sted å starte, og ga meg et godt rammeverk før jeg gikk tettere inn i Google Skills-kursene:

🎥 Introduction to Generative AI – del av AI Essentials
🎥 Introduction to Large Language Models – grunnmodul før Vertex AI
🎥 Introduction to Responsible AI – obligatorisk i alle løp
🎥 Introduction to AI Agents – utforsker hvordan intelligente agent-systemer bygger og automatiserer handlinger i komplekse miljøer
🎥 Intro to Generative AI training course – tydelig oversikt over læringsløpet
🎥 Introduction to Vertex AI Studio – nyttig for de praktiske labene

For min del er dette også perfekt oppvarming før jeg starter på <strong>Masterprogrammet "Generative AI for Business"</strong> ved BI i februar. Men først står flere AI-relaterte kurs fra Google Skills-universet for tur.

For deg som vil utforske mulighetene:
👉 https://lnkd.in/dM7WrkEe`
    },
    {
      id: "ai-ikke-intelligent-01",
      tittel: "AI er ikke intelligent — det er vi som må være det",
      teaser:
        "AI skaper verdi bare når vi forstår begrensningene. Refleksjoner fra BI-webinaret om når AI passer og når menneskelig dømmekraft må ta over.",
      bildeUrl: "/images/ikke-intelligent.jfif",
      dato: "2025-12-11",
      visningsDato: "11.12.2025",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Refleksjoner fra gårsdagens BI-webinar «More Than Words: How to Know How AI Can (and Can't) Help You»

Gårsdagens webinar fra BI med Auke Hunneman og Jan Ketil traff et viktig poeng:
<strong>AI skaper stor verdi – men bare når vi forstår begrensningene.</strong>

Og jeg fikk erfare det selv, <em>samme dag</em>:

Jeg ba en AI-modell lage et bilde av meg i en kontorsetting. Resultatet?
Det ble "meg"… men ikke meg.
Noe var off. Ansiktet, uttrykket, formen – alt var liksom nesten riktig, men ikke riktig nok. Og nettopp dette er kjernen i hva mange som bruker AI bør forstå og utfordre:

<strong>1️⃣ AI predikerer – den forstår ikke</strong>
LLM-er (og bildegeneratorer) gjetter det mest sannsynlige resultatet basert på enorme mengder data. De vet ikke hvordan jeg ser ut. De forstår ikke identitet

Derfor blir det ofte noe som ligner, men ikke treffer.

<strong>2️⃣ AI gir dårlig ROI når problemet ikke passer</strong>
Det skilles mellom tre typer utfordringer:
• <strong>Problems</strong> (forutsigbart): prognoser → AI er sterk
• <strong>Secrets</strong> (skjulte mønstre): kanaldrivere → AI + fagkunnskap
• <strong>Mysteries</strong> (uforutsigbart): tverrfaglige kampanjer → mennesker må koordinere

Å lage et ekte bilde av meg?
Det faller mellom Secret og Mystery:
AI har ikke nok info → resultatet blir usikkert → mennesket må evaluere

<strong>3️⃣ Cynefin-rammeverket</strong>
<strong>Clear:</strong> Oppgaver med fasit → automatiser
<strong>Complicated:</strong> Analysérbart, men krevende → AI + eksperter
<strong>Complex:</strong> Må prøves ut → eksperimentér
<strong>Chaotic:</strong> krise, liten tid → handle raskt
<strong>Aporetic:</strong> uklart problem → stopp opp og still nye spørsmål

Å få AI til å "forstå Marius"?
→ Aporetic + Secret: Det finnes ingen fasit for ansiktet mitt i modellen

<strong>4️⃣ Intelligens er mer enn ord – og mer enn pikslere</strong>
AI kan levere tekst og bilder. Men den kan ikke:
– lese rommet
– forstå motivasjon
– bygge team
– skape kultur
– kjenne meg igjen på et bilde
Her er mennesket overlegent.

<strong>5️⃣ Tillit avgjør resultatet</strong>
Når folk ser et bilde som "skal forestille meg" men ikke ligner, mister de tillit. Samme gjelder i organisasjoner:
Uten tillit til både tall og hverandre stopper samarbeid – uansett hvor avansert AI-modellen er

<strong>Hva betyr dette for ledere – og for alle som bruker AI?</strong>
Det er en <strong>kjernkompetanse</strong> å:
• forstå når AI passer
• forstå når menneskelig dømmekraft må ta over
• kombinere data + mennesker for reell verdi
• utfordre AI-resultater som ikke stemmer

<strong>Hvis AI ikke kjenner igjen ansiktet mitt – hvorfor skulle jeg stole blindt på det den foreslår?</strong>`
    },
    {
      id: "alle-snakker-ai-01",
      tittel: "Alle snakker om AI – men hva er det egentlig vi driver med?",
      teaser:
        "Innledning til en serie om hva AI faktisk betyr i praksis — ikke bare som teknologi, men som ledelses- og forretningsdisiplin.",
      bildeUrl: "/images/snakk-ai.jfif",
      dato: "2025-12-22",
      visningsDato: "22.12.2025",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Året som har gått har – i likhet med mange andre – vært preget av høyt tempo, spennende opplevelser, store forventninger og raske teknologiske endringer. For min del har det også gitt rom for refleksjon, faglig fordypning og nye muligheter, særlig innen AI og strategi. Denne fordypningen tar blant annet utgangspunkt i rammeverk og pensumlitteratur fra masterkurset <em>Generative AI for Business</em> ved BI, kombinert med praktisk utforsking av ulike AI-modeller og bruksområder.

<strong>Dette innlegget markerer starten på en serie</strong> der jeg i 2026 vil dele refleksjoner, rammeverk og erfaringer rundt hva AI faktisk betyr i praksis – ikke bare som teknologi, men som ledelses- og forretningsdisiplin.

Bakgrunnen er enkel: AI omtales ofte som enten et mirakelverktøy eller som noe diffust og teknisk. Samtidig opplever jeg at mange ledere – helt naturlig – reduserer AI til det de ser i hverdagen: ChatGPT, Copilot, litt automatisering. Det gir en følelse av å være "i gang", men også en usikkerhet rundt hva dette egentlig betyr strategisk.

Pensumboken "Generative AI for Business - a guide book" av Shubin Yu har vært et godt utgangspunkt for å rydde i dette. Ikke fordi den gir alle svar, men fordi den setter AI inn i en tydelig forretnings- og lederkontekst: verdiskaping, beslutninger, organisasjon, risiko og mennesker.

Samtidig har arbeidet med AI fått meg til å se tidligere erfaringer i et nytt lys. Mye av det vi tidligere kalte IoT, sensorteknologi, automatisering og robotisering, fremstår nå som deler av samme økosystem – der AI fungerer som et kraftig akselererende lag.

Jeg håper denne serien kan bidra til refleksjon, diskusjon – og noen nødvendige erkjennelser. For meg er dette også en spennende delingsreise, der jeg utforsker et fagområde som fortsatt er nytt for meg, men som jeg opplever som svært inspirerende å bygge egen kompetanse innen. Ambisjonen er både å lære videre selv, og forhåpentligvis bidra med nyttig innsikt for andre.

Dialogen tar jeg gjerne her på LinkedIn, eller over en uformell kaffesamtale, med andre som er nysgjerrige på hvordan AI faktisk kan skape verdi i praksis.

Dette blir mitt siste innlegg i 2025. Takk for i år – jeg håper året har gitt rom for både utvikling, læring og gode samtaler. Vi fortsetter i 2026.`
    },
    {
      id: "ai-foles-nytt-01",
      tittel: "AI føles nytt – men dette er ikke starten på historien",
      teaser:
        "AI oppleves som nytt, men er kulminasjonen av tiår med utvikling. Ser fremover mot rammeverket De fem A-ene (Access til Agents).",
      bildeUrl: "/images/nytt.jfif",
      dato: "2026-01-05",
      visningsDato: "05.01.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I mitt siste innlegg i 2025 stilte jeg spørsmålet: <em>Alle snakker om AI – men hva er det egentlig vi driver med?</em>

<strong>Dette innlegget er neste steg i samme serie.</strong> I 2026 vil jeg dele refleksjoner, rammeverk og erfaringer rundt hva AI faktisk betyr i praksis – med utgangspunkt i pensumboken <em>Generative AI for Business</em> av Shubin Yu, som inngår i masterstudiet mitt, kombinert med egne erfaringer og praktiske observasjoner.

Julen har gitt rom for roligere dager, refleksjon og selvstudier. For min del har denne perioden vært en anledning til å fordype meg ytterligere i AI og strategi – både gjennom fagstoffet i studiet og praktisk utforsking av ulike AI-modeller og bruksområder.

AI oppleves som nytt for mange, men er i realiteten kulminasjonen av flere tiår med teknologisk utvikling. Allerede på 1950–60-tallet ble begrepet kunstig intelligens introdusert. Siden har vi vært gjennom flere bølger – fra ekspertsystemer og nevrale nettverk, via machine learning, til deep learning og dagens generative modeller.

Gjennombruddet rundt 2020–2023 markerte derfor ikke starten på AI, men et tydelig skifte i tilgjengelighet og anvendelse. Store språkmodeller gjorde teknologien praktisk, skalerbar og relevant i en forretningskontekst.

Samtidig opplever jeg at mange organisasjoner spriker – noe boken også adresserer. Vi tester verktøyene og ser rask nytte, men mangler ofte den strategiske forståelsen: Hva er egentlig nytt nå, og hva kreves for å skape varig verdi?

I denne serien vil jeg bruke boken som et strukturert utgangspunkt og trekke ut hovedlinjene videre langs noen tydelige spor. Blant annet vil jeg se nærmere på:
• overgangen fra enkel AI-bruk til strategisk transformasjon
• betydningen av data, kontekst og egne informasjonskilder
• hva som kreves for å implementere AI i praksis – fra utforskning til skalering
• hvordan AI påvirker ledelse, mennesker og kommersielle prosesser
• samt etikk, governance og ansvar

Der det er naturlig, vil jeg også koble dette til egne erfaringer fra tidligere roller – særlig innen IoT, automatisering, robotisering og datadrevne økosystemer – som jeg i dag ser tydeligere i sammenheng med AI.

<strong>Neste innlegg kommer på onsdag</strong>, der jeg går nærmere inn på et sentralt rammeverk fra boken: <strong>De fem A-ene (fra Access til Agents)</strong> – og hvorfor de fleste organisasjoner stopper tidligere enn de tror.

Jeg håper flere vil dele egne erfaringer, perspektiver og spørsmål underveis – enten her i kommentarfeltet, i direkte dialog, eller over en uformell kaffekopp. Dette er et fagfelt der vi alle fortsatt lærer. Bli med på min lille «reise».`
    },
    {
      id: "access-til-agents-01",
      tittel: "Fra Access til Agents – hvorfor mange stopper tidlig",
      teaser:
        "Rammeverket De fem A-ene: hvordan AI tas i bruk i virksomheter i dag, og hvorfor mange stopper tidligere enn de tror.",
      bildeUrl: "/images/access-agents.jfif",
      dato: "2026-01-08",
      visningsDato: "08.01.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I forrige innlegg skrev jeg om at AI ofte oppleves som nytt, selv om det i realiteten bygger på flere tiår med teknologisk utvikling. Dette innlegget er del av AI-serien jeg deler denne vinteren, der jeg utforsker hva AI faktisk betyr i praksis for ledelse, organisasjoner og verdiskaping.

Her ser jeg nærmere på <em>hvordan AI tas i bruk i mange virksomheter i dag</em>, og hvorfor mange stopper tidligere enn de selv tror.

I pensumboken <em>Generative AI for Business</em> introduserer Shubin Yu et rammeverk jeg synes er spesielt nyttig for å rydde i dette: <strong>De fem A-ene for anvendt generativ AI i arbeidslivet</strong>. Rammeverket beskriver et spekter av modenhetsnivåer – fra enkel bruk av AI til mer integrerte og autonome systemer.

Forenklet kan nivåene forstås slik, med eksempler mange vil kjenne seg igjen i:

<strong>Access</strong>
Bruk av generelle AI-verktøy som ChatGPT, Gemini eller Copilot for å skrive, oppsummere og analysere. Verdien er ofte rask og synlig, men primært individuell.

<strong>Assistants</strong>
Mer tilpassede assistenter med rolle- eller virksomhetskontekst, for eksempel en salgs- eller HR-assistent som kjenner interne data og arbeidsmåter.

<strong>Application</strong>
AI bygges inn i konkrete løsninger for bestemte oppgaver, som beslutningsstøtte, analyse eller kundedialog i avgrensede systemer.

<strong>Automation</strong>
AI kobles til arbeidsflyt på tvers av systemer, slik at prosesser henger sammen fra start til slutt – med tydelige effektivitets- og skaleringsgevinster.

<strong>Agents</strong>
Mer autonome systemer som kan planlegge, prioritere og utføre oppgaver innenfor definerte rammer, med klart ansvar og kontroll.

Det avgjørende poenget er ikke nivåene i seg selv, men overgangen mellom dem. Og nettopp her stopper mange.

I mange AI-miljøer i sosiale medier ser jeg et sterkt fokus på å "lære mange modeller" eller beherske flest mulig AI-verktøy. Det kan være nyttig på Access-nivå, men gir begrenset verdi videre opp i pyramiden. Jo høyere man beveger seg, desto mindre handler det om verktøy – og desto mer om struktur, integrasjon, styring og ansvar.

Når AI kobles til data, prosesser og beslutninger, går man fra individuell effektivisering til organisatorisk kjernekompetanse. Det er først da AI blir virkelig strategisk.

Derfor er også AI og strategisk bruk og implementering i liten grad et IT-prosjekt. Det er et lederansvar – på linje med andre strategiske valg knyttet til organisering, risiko og verdiskaping.`
    },
    {
      id: "fra-verktoy-til-system-01",
      tittel: "Fra verktøy til system – API-er, integrasjon og ledervalg",
      teaser:
        "Verdien av AI skjer først når den kobles til systemer og prosesser via integrasjon — ikke som frittstående verktøy. API-er og ledervalg.",
      bildeUrl: "/images/til-system.jfif",
      dato: "2026-01-12",
      visningsDato: "12.01.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I forrige innlegg i denne AI-serien skrev jeg om <em>De fem A-ene</em> og hvorfor mange organisasjoner stopper tidligere i AI-bruken enn de selv tror. Dette innlegget bygger videre på samme rammeverk, og ser nærmere på hva som skiller enkel AI-bruk fra mer moden og integrert anvendelse.

Et begrep mange har hørt om, men få setter inn i en strategisk sammenheng, er <strong>API - Application Programming Interface</strong>. I pensumboken <em>Generative AI for Business</em> beskrives et API enkelt som en bro som lar systemer snakke sammen. Det høres teknisk ut, men konsekvensene er først og fremst organisatoriske.

Så lenge AI brukes som et frittstående verktøy, skjer verdiskapingen hovedsakelig på individnivå. Man bruker ChatGPT, Copilot eller lignende, opplever rask nytte og får en følelse av å være «i gang». Tallene viser imidlertid et tydelig paradoks: Millioner bruker generativ AI, mens bare en liten andel virksomheter har integrert teknologien i kjerneprosessene sine. Studier anslår samtidig at rundt 95 % av AI-piloter ikke har gitt målbar økonomisk gevinst, og kan tolkes som at AI er overhypet. Jeg mener det er en feilslutning.

Dette mønsteret er godt dokumentert i analyser fra bla. MIT, Gartner og Forrester: AI skaper verdi først når den flyttes fra eksperimenter til drift. Manglende avkastning handler sjelden om svak teknologi, men om at organisasjonen ikke er rigget for å ta den i bruk. Bla. viser Itera til at mange organisasjoner stopper på <strong>Access- eller Assistants-nivå</strong>.

Først når AI kobles via API-er til virksomhetens systemer, data og prosesser at det skjer et reelt skifte – fra å <em>bruke AI</em> til å <em>bygge med AI</em>. Fra <strong>Application-nivå og oppover</strong> er dette helt avgjørende. Uten integrasjoner blir det ingen reell automatisering, og heller ingen skalerbar verdi.

Når jeg ser tilbake på mine erfaringer med IoT, sensorteknologi, automatisering og robotisering, er dette svært gjenkjennbart. Verdien lå aldri i teknologien isolert sett, men i hvordan data ble koblet til systemer, beslutninger og arbeidsprosesser.

I en tid der teknologien fungerer, skalerer og blir stadig rimeligere, er det ikke verktøyene som skiller virksomheter fra hverandre, men evnen til å gjøre gode prioriteringer, ta eierskap til beslutninger og omsette AI til varig verdiskaping. Det er her forskjellen mellom <strong>AI AWARE</strong> og <strong>AI READY</strong> blir tydelig.`
    },
    {
      id: "fra-pilot-til-skalering-01",
      tittel: "Fra pilot til skalering – hvorfor så mange AI-initiativer stopper",
      teaser:
        "Hvorfor så få AI-initiativer skalerer selv når teknologien fungerer. Om eierskap, prosessendring og governance.",
      bildeUrl: "/images/fra-pilot.jfif",
      dato: "2026-01-15",
      visningsDato: "15.01.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I de siste innleggene har jeg skrevet om hvordan mange organisasjoner tar i bruk AI, men stopper tidligere enn de selv tror. I dag vil jeg gå ett nivå dypere – til spørsmålet mange ledere faktisk sitter med:

<strong>Hvorfor skalerer så få AI-initiativer, selv når teknologien fungerer?</strong>

Flere analyser peker i samme retning: AI er i bruk overalt, men i begrenset grad integrert i virksomheters kjerneprosesser. Effekten er ofte reell, men fragmentert og vanskelig å få øye på i helheten (bl.a. MIT, Gartner).

Dette er ikke fordi AI «ikke virker».
Det er fordi organisasjonen ofte ikke er rigget for skalering.

Basert på både forskning og praksis ser jeg noen gjentakende årsaker til at piloter stopper:

• <strong>Uklart eierskap</strong> – mange AI-initiativ mangler tydelig ansvar når de går fra pilot til drift (Gartner)
• <strong>Manglende prosessendring</strong> – ny teknologi legges på gamle arbeidsformer, uten å endre hvordan arbeidet faktisk utføres (MIT Sloan)
• <strong>Svakt beslutningsmandat</strong> – AI gir innsikt, men beslutningsflyten forblir uendret (Forrester)
• <strong>Umoden governance</strong> – ansvar, risiko og kvalitetskontroll er ikke avklart før løsninger skaleres (Shubin Yu)
• <strong>Datagrunnlag uten kontekst</strong> – mye data, men for lite kobling til faktiske beslutninger og forretningsmål (Gartner, The Economist)

<strong>Et godt startpunkt er å velge en konkret prosess, en tydelig beslutning og en ansvarlig eier – og bygge derfra.</strong>

Resultatet av manglende skalering ser vi ofte nå - AI hjelper enkeltpersoner, men endrer ikke hvordan virksomheten faktisk jobber.

Og her er et viktig poeng:
Agenter og mer autonome løsninger kommer ikke først. Skalering må komme først.

Mange snakker om agenter. De færreste har skalert en enkel AI-løsning på en robust måte.

Skalering handler derfor mindre om teknologi – og mer om ledelse:
å ta bevisste valg om hvilke prosesser som skal endres, hvilke beslutninger som skal støttes, og hvilket ansvar organisasjonen er villig til å ta (Yu; Gartner).

Det er her AI går fra eksperiment til strategisk kjernekompetanse.`
    },
    {
      id: "praktisk-oppskrift-skalering-01",
      tittel: "Fra pilot til skalering – en praktisk oppskrift for ledere",
      teaser:
        "Fem ting virksomheter som lykkes med AI-skalering gjør riktig: eierskap, prosessendring, beslutningskobling, governance og data.",
      bildeUrl: "/images/praktisk-oppskrift.jfif",
      dato: "2026-01-12",
      visningsDato: "12.01.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I forrige innlegg skrev jeg om hvorfor så mange AI-initiativer stopper på pilotstadiet, selv når teknologien fungerer. I dette innlegget vil jeg være mer konkret:
Hva må faktisk på plass for at AI skal gå fra lovende forsøk til reell, skalerbar verdiskaping?

Basert på både forskning (bl.a. MIT, Gartner, Forrester, Yu, The Economist) og erfaring fra praksis, ser jeg at virksomheter som lykkes med skalering ofte gjør fem ting riktig:

<strong>1. De definerer tydelig eierskap</strong>
AI kan ikke "eies av IT alene". Det må være klart hvem som har ansvar for gevinst, risiko og videreutvikling når løsningen går fra pilot til drift.

<strong>2. De endrer prosesser – ikke bare verktøy</strong>
Skalering skjer først når arbeidsflyt faktisk endres. Å legge AI oppå gamle arbeidsformer gir lokal effektivitet, men sjelden strukturell effekt.

<strong>3. De kobler AI til beslutninger</strong>
AI som bare produserer innsikt, men ikke er integrert i beslutningsflyt, stopper raskt. De mest modne bruker AI som støtte før beslutninger tas, ikke bare som etterkontroll.

<strong>4. De har governance før de skalerer</strong>
Spørsmål om ansvar, kvalitet, data, personvern og risiko må være avklart tidlig. Manglende governance er en av de vanligste årsakene til at piloter aldri tas videre.

<strong>5. De jobber systematisk med data og kontekst</strong>
Data uten forretningskontekst gir begrenset verdi. Skalering forutsetter at data er relevante for faktiske beslutninger og mål – ikke bare teknisk tilgjengelige.

Dette bildet støttes også av ferske funn fra <em>Samfunnsøkonomisk Analyse</em> (2026), som viser at majoriteten av norske virksomheter fortsatt bruker AI som enkeltverktøy, mens gevinstene først blir tydelige hos dem som har integrert AI i kjerneprosesser. Rapporten peker samtidig på at bredere og mer moden bruk av AI gir klart større produktivitets- og inntektseffekter.

Et viktig poeng er derfor dette:
Skalering handler langt mindre om avansert teknologi, men mer om ledelse.

Mange snakker nå om agenter og autonome løsninger. Men realiteten er at de fleste organisasjoner ikke har skalert en enkel AI-løsning på en robust måte ennå. Uten eierskap, prosessendring og styring blir mer autonomi en risiko, ikke en gevinst.`
    },
    {
      id: "data-kontekst-rag-01",
      tittel: "Data, kontekst og RAG – hvorfor AI uten kontekst ikke er intelligens",
      teaser:
        "AI uten kontekst er ikke intelligens. Hvorfor RAG og virksomhetens egne data er forutsetning for moden AI-bruk.",
      bildeUrl: "/images/data-kontekst.jfif",
      dato: "2026-01-19",
      visningsDato: "19.01.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I de siste innleggene har jeg skrevet om hvorfor mange AI-initiativer stopper i pilot, selv når teknologien fungerer. I dag vil jeg zoome inn på et avgjørende, men ofte undervurdert punkt:

👉 AI er ikke intelligent uten kontekst.

Generative modeller er sterke på språk, mønstre og sannsynlighet. Det de ikke har, er forståelse for virksomhetens faktiske situasjon, hvilke data som er relevante for akkurat denne beslutningen – eller ansvar for konsekvensene av anbefalingene sine.

Det er her <strong>RAG (Retrieval-Augmented Generation)</strong> kommer inn. Ikke som et teknisk buzzord, men som et prinsipp for moden AI-bruk.

I praksis handler RAG om å koble AI til virksomhetens egne data, gi modellen relevant kontekst i sanntid og sørge for at svar bygger på faktiske kilder – ikke generelle antakelser.

Dette støttes også av analyser fra blant annet McKinsey, som peker på at generativ AI først gir pålitelig beslutningsstøtte når modeller kobles til virksomhetens egne data og kontekst. Uten slik forankring blir AI god på språk – men svak på dømmekraft og relevans.

Mange kjenner seg igjen i dette fra bruk av Copilot eller ChatGPT:
Uten tilgang til riktige dokumenter, beslutningsgrunnlag eller interne føringer blir svarene ofte generiske. Når AI derimot får tilgang til strategidokumenter, prosessbeskrivelser eller kundedata, skjer det et tydelig skifte – fra teksthjelp til faktisk beslutningsstøtte.

Det samme ser vi i ledermøter. Uten kontekst kan AI komme med overbevisende argumenter. Med RAG kan den vise til faktiske tall, tidligere vedtak og relevante rammer – og dermed skjerpe beslutningen i stedet for å bare effektivisere forarbeidet.

Dette er også grunnen til at <strong>agenter uten kontekst er en risiko</strong>. De kan være raske og overbevisende, men samtidig feil, inkonsistente eller dårlig forankret i virksomhetens virkelighet. Autonome systemer uten eierskap blir ikke intelligente – de blir bare effektive på feil premisser.

Før mer autonome løsninger i det hele tatt er realistiske, må virksomheten ha kontroll på hvilke data som brukes og hvorfor, hvordan innsikt kobles til beslutningsflyt, og hvem som eier utfallet når noe går galt. Dette er ikke først og fremst et teknisk spørsmål – det er et leder- og styringsspørsmål.

AI blir strategisk først når den ikke bare gir svar, men bidrar til <strong>bedre beslutninger</strong>. Det forutsetter data med mening, kontekst med eierskap – og ledere som forstår forskjellen.`
    },
    {
      id: "rag-innsikt-handling-01",
      tittel: "Fra innsikt til handling – RAG som bro mellom AI og kjerneprosesser",
      teaser:
        "RAG som bro mellom AI og kjerneprosesser: hvordan virksomheter beveger seg fra testing til reell verdiskaping. Eksempel fra salg.",
      bildeUrl: "/images/innsikt-til-handling.jfif",
      dato: "2026-01-23",
      visningsDato: "23.01.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I forrige innlegg skrev jeg om hvorfor AI uten kontekst ikke er intelligens. Nå vil jeg gå ett steg videre:
Hva betyr dette i praksis for virksomheter som ønsker å bevege seg fra testing til faktisk verdiskaping?

Mange AI-initiativer stopper fordi innsikten blir stående på siden av driften. AI gir gode svar, men påvirker ikke hvordan beslutninger faktisk tas. RAG er et av de viktigste grepene for å bryte dette mønsteret.

<strong>Ta salg som eksempel.</strong>
Uten RAG svarer AI ofte generelt: råd om god møteledelse, forslag til e-poster eller generelle salgsråd. Det er nyttig – men løsrevet fra kundens faktiske situasjon.

Med RAG kan AI derimot hente relevant kontekst i sanntid: kundehistorikk fra CRM som historikk, kjøp og pipeline, eksisterende avtaler, prisnivå, tidligere tilbud og hitrate, service og supportdialog, samt strategiske føringer som interne rammer for rabatt og prioritering. Når en selger spør «hva bør jeg fokusere på i møte med denne kunden?», kan AI svare basert på egne data og reelle forutsetninger – ikke generelle salgsråd. Eksempler kan være at AI svarer at kunden har hatt økt bruk av tjeneste A siste 6 mnd., eller at kunden kan ha behov for løsning B. Det er forskjellen på tekststøtte og faktisk beslutningsstøtte i kommersielle prosesser.

Det er her mange piloter feiler. Teknologien fungerer, men AI kobles aldri til reelle beslutningspunkter. Når AI derimot bygges inn i arbeidsflyt og beslutningsprosesser, endres hvordan organisasjonen faktisk jobber.

Dette samsvarer godt med analyser fra bla. McKinsey, Gartner og MIT Sloan, som peker på at verdiskaping først oppstår når AI integreres i kjerneprosesser og beslutningsflyt – ikke når den brukes som et sideverktøy. Samfunnsøkonomisk Analyse viser også at norske virksomheter som lykkes best med AI, er de som har bygget teknologien inn i daglig drift og tydelig eierskap.

Et viktig poeng i både forskning og praksis er at verdiskaping ikke oppstår når AI tas i bruk - men når den <strong>tas i ansvar</strong>. RAG er derfor ikke bare en dataløsning, men en måte å tydeliggjøre eierskap, rammer og beslutningslogikk på.

Dette er også grunnen til at mange snakker om agenter før de er klare for dem. Uten kontekst, styring og integrasjon blir autonomi bare hastighet – ikke kvalitet.

Å lykkes med AI på dette nivået handler mindre om flere verktøy og mer om tydelige valg:
• Hvilke prosesser skal støttes?
• Hvilke beslutninger skal forbedres?
• Hvem eier konsekvensene?`
    },
    {
      id: "ai-agenter-hva-01",
      tittel: "AI-agenter – hva de er (og hva de ikke er)",
      teaser:
        "Hva AI-agenter er — og hva de ikke er. Rydding i begrepet og hvorfor det er et ledertema, ikke bare IT.",
      bildeUrl: "/images/ai-agenter-hva.jfif",
      dato: "2026-01-27",
      visningsDato: "27.01.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I de siste innleggene har jeg skrevet om hvorfor mange AI-initiativer stopper før de skaper reell verdi – og hvorfor data, kontekst og RAG er forutsetninger for moden AI-bruk. Nå er det på tide å rydde i et begrep som stadig dukker opp i AI-debatten: <strong>AI-agenter</strong>.

La oss starte presist. I <em>Generative AI for Business</em> beskriver Shubin Yu agenter som systemer som ikke bare responderer på forespørsler, men som kan planlegge, utføre og følge opp oppgaver over tid – innenfor definerte rammer. En agent har et tydelig mål, tilgang til relevante data og verktøy, evne til å ta sekvensielle beslutninger, og klare grenser for ansvar og kontroll. Det sier også mye om hva en agent ikke er: den er ikke bare ChatGPT i ny innpakning, den er ikke automatisering uten kontekst, og den er ikke «autonom» uten styring. Agenter er arbeidsflyt med intelligens – ikke magi.

Et kommersielt eksempel mange vil kjenne seg igjen i er salg. Uten agenter bruker selgere AI til å skrive e-poster, oppsummere møter og få forslag til tilbudstekster. Nyttig, ja – men fortsatt individuelt og fragmentert. Med en agent kan bildet se helt annerledes ut. En salgsagent kan følge hele pipeline automatisk, analysere CRM-data, tidligere avtaler og kundeadferd, foreslå neste beste handling per kunde, varsle når risiko i en deal øker og forberede lederbeslutninger før forecast-møter. Her har vi beveget oss fra AI som verktøy til AI som operativ støtte i en kjerneprosess. Verdien ligger ikke i teksten, men i beslutningene som forbedres.

Det er også derfor dette først og fremst er et <strong>ledertema</strong>, ikke et IT-prosjekt. De fleste organisasjoner er ikke klare for agenter, selv om teknologien finnes. McKinsey beskriver i 2026 hvordan de selv bruker titusenvis av AI-agenter internt, med en ambisjon om at hver konsulent skal ha minst én agent som støtter arbeidet. Ikke fordi agentene er «smarte», men fordi prosessene er tydelige, eierskapet er definert og beslutningsrommet er avklart. Agenter forutsetter modenhet i styring, ikke bare modenhet i teknologi.

Her ligger også et viktig varsel til ledere. Jo mer autonom AI blir, desto viktigere blir svarene på noen grunnleggende spørsmål: Hvilke beslutninger kan delegeres – og hvilke kan ikke? Hvem eier konsekvensene når noe går galt? Og hvordan stopper vi en agent – og når? Agenter forsterker organisasjonen slik den er. Er strukturen uklar, forsterkes uklarheten.`
    },
    {
      id: "ai-agenter-feil-01",
      tittel: "AI-agenter – hvorfor mange går feil når de vil bli mer autonome",
      teaser:
        "Hvorfor mange går feil når de jager autonomi: agenter handler om struktur og ansvar, ikke bare «slå på»-autonomi.",
      bildeUrl: "/images/ai-agenter.jfif",
      dato: "2026-01-31",
      visningsDato: "31.01.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Jeg ser et tydelig mønster i AI-samtaler. AI gir gode svar, analyser og demoer, men beslutningene tas fortsatt som før. Når gapet mellom innsikt og handling blir for stort, dukker ett begrep nesten alltid opp: <strong>agenter</strong>.

De omtales ofte som neste naturlige steg - en oppgradering man «slår på» når man er lei av manuelle prosesser. Det er her mange går feil.

I forrige innlegg skrev jeg om hva AI-agenter faktisk er. Nå er det viktig å rydde i vanlige misforståelser. Den største feilen er å tro at agenter først og fremst handler om autonomi. I praksis handler de mer om struktur, ansvar og samspill i organisasjonen.

I <em>Generative AI for Business</em> beskriver Shubin Yu agenter som systemer som kan planlegge, handle og følge opp oppgaver over tid, innenfor tydelige rammer. Det forutsetter klare mål, godt datagrunnlag, beslutningsrom og avklart eierskap. Uten dette er det ikke autonomi – bare automatisert støy.

Typiske feil er at agenter introduseres før prosesser er tydelige, autonomi gis uten mandat, ansvar er uklart når noe går galt, og at agenten ikke er koblet til reell arbeidsflyt. Resultatet er ofte imponerende demoer, men usikkerhet i drift.

La oss ta et kommersielt eksempel:

Mange salgsorganisasjoner snakker i dag om «AI-agenter i pipeline». Uten agentlogikk brukes AI til å skrive e-poster, oppsummere møter og foreslå tilbudstekster. Nyttig, men fortsatt individuelt og fragmentert.

Med en faktisk agent skjer et tydelig skifte. En salgsagent kan overvåke hele pipelinen, analysere CRM-data, historiske avtaler og kundeadferd, varsle økt risiko, foreslå neste beste handling og forberede beslutninger før forecast-møter. Verdien ligger ikke i teksten, men i bedre beslutninger og timing.

Dette er grunnen til at mange organisasjoner ikke er klare for agenter – selv om teknologien finnes. Agenter forutsetter at man har bestemt hvilke beslutninger som kan delegeres, hvilke rammer som gjelder, og hvem som eier konsekvensene.

McKinsey har beskrevet hvordan de bruker et stort antall interne AI-agenter for å støtte konsulenter. Ikke fordi agentene er «selvtenkende», men fordi prosesser, data og ansvar er avklart. Verdien kommer av styring, ikke autonomi alene. Dette støttes også av forskning fra MIT Sloan, som viser at AI gir størst effekt når den bygges inn i beslutningsflyt og arbeidsprosesser.

Agenter forsterker organisasjonen. Er strukturen uklar, forsterkes uklarheten. Er ansvaret diffust, øker risikoen – ikke verdien. Derfor er dette et ledertema, ikke et IT-prosjekt.`
    },
    {
      id: "ai-agenter-praksis-01",
      tittel: "AI-agenter i praksis – når, hvor og hvordan de faktisk gir verdi",
      teaser:
        "Når gir AI-agenter faktisk verdi — og når bør man la være? Praktiske kriterier for ledere.",
      bildeUrl: "/images/agenter-i-praksis.jfif",
      dato: "2026-02-03",
      visningsDato: "03.02.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Flere ledere merker et tydelig dilemma.

Enten ser man potensialet i AI-agenter, eller så er man man usikker på hvor det er forsvarlig å slippe dem til. Resultatet blir ofte enten overdreven forsiktighet – eller for rask autonomi.

Begge deler er risikabelt.

I mine to siste AI-innlegg har jeg ryddet i hva agenter er, og hvorfor mange går feil når de jager autonomi for tidlig. Da gjenstår det viktigste spørsmålet:

<strong>Når gir det faktisk mening å bruke AI-agenter – og når bør man la være?</strong>

I praksis gir agenter gir reell verdi først når tre forhold er på plass samtidig: tydelige rammer, avklart ansvar og klart definerte beslutningspunkter. Uten dette blir autonomi bare tempo – uten styring.

Noen mønstre går igjen der agenter faktisk fungerer godt:

• <strong>Beslutningsnære prosesser med mange signaler</strong>
For eksempel risikovurdering, porteføljestyring, kapasitetsplanlegging eller forecast-arbeid. Her kan agenter overvåke utvikling over tid, koble sammen data fra flere kilder og varsle når terskler brytes – uten å ta den endelige beslutningen.

• <strong>Oppfølging der konsekvensene er kjente og reversible</strong>
Agenter egner seg godt til å foreslå handlinger, prioritere saker, følge opp avvik og eskalere når noe avviker fra normalen. De egner seg dårlig der konsekvensene er irreversible og beslutningsansvaret er uklart.

• <strong>Mennesker tydelig "in the loop"</strong>
De beste løsningene bruker agenter som kognitive forsterkere. Mennesket eier beslutningen, agenten strukturerer, varsler og gir anbefalinger innenfor definerte rammer.

Samtidig er det mange områder der agenter ikke bør brukes, selv om teknologien tillater det. Prosesser med politiske avveininger, uklare mål, høy regulatorisk risiko eller svakt eierskap blir ikke bedre av autonomi, men derimot mer sårbare.

Et trekk jeg ser i flere bransjer nå, er at mange organisasjoner lider mer av forsiktighetskultur enn av teknologiske begrensninger. Man analyserer lenge, og venter på "det riktige tidspunktet". Resultatet er ofte stagnasjon.

Agenter bør derfor ikke innføres bredt – men testes kontrollert der:
• verdien er tydelig
• risikoen er håndterbar
• ansvar er avklart på forhånd

Agenter er kraftige verktøy som markerer et skifte i hva som flyttes fra mennesker til systemer – fra effektivitet til beslutninger. Først når agenter brukes på Decisions-nivået i EDGE-rammeverket (Efficiency, Decisions, Growth, Empowerment), blir de et strategisk konkurransefortrinn – og et tydelig lederansvar.`
    },
    {
      id: "ai-governance-01",
      tittel: "Når AI får mer makt – hva skal ledere faktisk styre?",
      teaser:
        "Når AI påvirker beslutninger: hvem har ansvaret? EDGE, 5A og governance som ledelsens svar på økt autonomi.",
      bildeUrl: "/images/governance.jpg",
      dato: "2026-02-12",
      visningsDato: "12.02.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Flere ledere jeg snakker med beskriver det samme dilemmaet:
AI hjelper oss mer og mer – men vi er ikke helt sikre på hvor grensen går.

Når AI beveger seg fra støtte til beslutningspåvirkning, oppstår et nytt lederansvar. Ikke teknisk. Ikke juridisk. Men styringsmessig.

I de siste innleggene i min AI-serie, og gjennom erfaringer fra mitt masterkurs på BI, har jeg skrevet om AI-agenter. Fellesnevneren er klar: jo mer beslutningskraft som flyttes fra mennesker til systemer, desto viktigere blir ansvar og kontroll.

I dette innlegget stopper jeg opp og zoomer ut. Dette blir mer rammeverk og teori, fordi det er her mange organisasjoner mister oversikten når AI beveger seg mot beslutningspåvirkning.

Resonnementene bygger i stor grad på <em>Generative AI for Business</em> av Shubin Yu, kombinert med mønstre jeg ser hos ledere i denne overgangen.

Når AI begynner å påvirke beslutninger, dukker ett spørsmål alltid opp i lederrommet:

<strong>Hvem har egentlig ansvaret når AI får mer makt?</strong>

Det er her <strong>governance</strong> kommer inn. Ikke som byråkrati, men som ledelsens svar på økt autonomi. Når AI påvirker beslutninger, endrer også lederansvaret karakter: spørsmålet er ikke om AI skaper verdi, men hvor og innenfor hvilke rammer.

For å forstå dette er det nyttig å rydde i to rammeverk som ofte blandes:

<strong>EDGE-rammeverket</strong> beskriver hvor verdien fra AI tas ut:
• <strong>Efficiency</strong> – gjøre eksisterende arbeid raskere og billigere
• <strong>Decisions</strong> – forbedre beslutningskvalitet og timing
• <strong>Growth</strong> – utvikle nye produkter, tjenester og forretningsmodeller
• <strong>Empowerment</strong> – styrke mennesker i komplekse roller

Parallelt viser <strong>5A-modellen</strong> (Access → Assistants → Applications → Automation → Agents) modenhetsreisen i hvordan AI tas i bruk. Jo høyere opp man beveger seg, desto mer flyttes ansvar fra enkeltpersoner til systemer.

Governance er ikke en del av EDGE, men et overbygg som blir avgjørende når AI brukes på Decisions-nivået i EDGE og når organisasjonen beveger seg mot Automation og Agents i 5A-modellen. Uten governance øker tempo og autonomi raskere enn ansvar og kontroll.

I praksis handler AI-governance om grunnleggende ledervalg:
• Hvilke beslutninger kan AI påvirke – og hvilke kan den ikke?
• Hvem eier konsekvensene når anbefalinger tas i bruk?
• Hvordan stopper, justerer eller overstyrer vi systemene når virkeligheten endrer seg?

Med andre ord:
EDGE forklarer hvor verdien ligger.
5A forklarer modenhetsreisen.
Governance avgjør om dette blir et konkurransefortrinn – eller en risiko.`
    },
    {
      id: "ki-norsk-virksomheter-01",
      tittel: "KI i norske virksomheter – fra testing til verdiskaping",
      teaser:
        "Over halvparten av norske virksomheter bruker AI — men få har integrert det i kjerneprosesser. NHO-rapportens budskap.",
      bildeUrl: "/images/ki-norsk-virksomheter.jfif",
      dato: "2026-01-09",
      visningsDato: "09.01.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I går deltok jeg online på en konferanse i regi av <strong>NHO</strong>, der <strong>Samfunnsøkonomisk Analyse</strong> presenterte sin ferske rapport om bruk av kunstig intelligens i norsk næringsliv.

Hovedinntrykket mitt er at AI/KI nå for alvor har blitt en del av hverdagen i mange virksomheter. Over halvparten bruker AI i dag, en kraftig økning bare de siste to årene. Samtidig er det tydelig at bruken i stor grad fortsatt handler om testing, støtteverktøy og individuell effektivisering – ikke om reell endring av hvordan virksomheter drives og skaper verdi.

Rapporten viser et betydelig potensial: AI kan frigjøre rundt 15 prosent av arbeidstiden i økonomien. Det er i seg selv oppsiktsvekkende, særlig sett i lys av den arbeidskraftmangelen Norge går inn i. Men poenget som ble tydelig understreket er at disse gevinstene ikke kommer av seg selv. De oppstår først når AI integreres i kjerneprosesser, prioriteres tydelig av ledelsen og kobles direkte til forretningsmål.

Bare rundt én av fem virksomheter regnes som reelle "frontløpere". Det er disse som ser størst produktivitets- og inntektseffekter. For resten handler barrierene mindre om teknologi og mer om manglende innsikt, kompetanse og retning. Spørsmålet er ikke lenger om man skal bruke AI, men hvordan og hvorfor.

Samtidig blir det stadig tydeligere at kampen om disse frontløperne – både virksomheter og mennesker – er i gang, og at evnen til å kombinere teknologiforståelse, forretning og ansvarlig bruk av AI blir et stadig viktigere konkurransefortrinn.

Min viktigste takeaway er nok en gang at AI i liten grad er et IT-prosjekt. Det er et ledelses- og endringsprosjekt. Og nettopp her treffer rapporten godt med mye av det jeg selv er opptatt av: verdiskaping skjer ikke gjennom verktøy alene, men gjennom tydelige valg, prioriteringer og måten vi organiserer arbeidet på.

Skal AI bli et reelt konkurransefortrinn, må vi bevege oss fra nysgjerrig utforsking til bevisst integrasjon.`
    },
    {
      id: "ai-governance-i-praksis-01",
      tittel: "AI-governance i praksis – fem styringsgrep som avgjør hvor makten ligger",
      teaser:
        "Fem styringsgrep som avgjør hvor makten ligger når AI påvirker kunder, rabatter og prioriteringer.",
      bildeUrl: "/images/ai-governance-i-praksis.jpg",
      dato: "2026-02-18",
      visningsDato: "18.02.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `De fleste ledergrupper har kontroll på budsjett, marginer og forecast. Likevel ser jeg at mange mister oversikten når AI begynner å påvirke hvilke kunder som prioriteres, hvilke rabatter som anbefales og hvilke muligheter som vurderes som risiko. Utfordringen ligger sjelden i teknologien, men i at beslutningskraft forskyves uten at det er tydelig definert hvor makten faktisk ligger.

Tenk deg en kommersiell organisasjon som innfører en AI-agent i salgsprosessen. Den analyserer CRM-data, historiske avtaler og kundeadferd og gir anbefalinger om neste beste handling. Presisjonen øker, prioriteringene blir skarpere og forecast mer treffsikker.

Spørsmålet er ikke bare hvem som tar beslutningen. Spørsmålet er hvem som har makt over beslutningen når anbefalingen påvirker strategisk retning og lønnsomhet.

Skillet går ikke mellom virksomheter som bruker AI og de som ikke gjør det. Det går mellom dem som har definert sitt beslutningsrom – og dermed maktstrukturen – og dem som lar den utvikle seg implisitt.

<strong>Fem forhold er avgjørende:</strong>

<strong>1. Beslutningsrommet må avklares før teknologien tas i bruk.</strong>
Hvilke beslutninger skal påvirkes, og hvilke skal forbli menneskelige? Uten en eksplisitt avklaring skjer maktforskyvningen gradvis og uten tydelig forankring.

<strong>2. "Human in the loop" må innebære reelt mandat.</strong>
Det er ikke nok med formell godkjenning. Noen må ha myndighet til å overstyre og stå ansvarlig dersom anbefalingen følges.

<strong>3. Sporbarhet er et lederverktøy.</strong>
Når styret spør om en prioritering, må svaret være konkret: hvilke data, hvilke terskler, hvilke kriterier. Forklarbarhet er en del av virksomhetens styring.

<strong>4. Det må finnes tydelige justerings- og stoppepunkter.</strong>
Marked, regulering og strategi endrer seg raskt. Autonome systemer uten kontrollmekanismer skaper sårbarhet.

<strong>5. Eierskapet må være entydig.</strong>
Når noe går galt, skal det være klart hvor ansvaret ligger. IT kan ikke eie forretningsbeslutninger, og salg kan ikke fraskrive seg modellens anbefalinger. Ledergruppen må definere rammene.

<strong>AI-governance handler i bunn og grunn om klassisk ledelse:</strong> å definere ansvar, mandat og kontroll før kompleksiteten øker.

Dette handler ikke om å bremse utviklingen, men om å sikre at tempo og autonomi ikke løper fra ansvar og legitimitet. AI blir ikke risikabel fordi den er intelligent. Den blir risikabel når organisasjonen ikke har tatt bevisste valg om hvordan beslutningskraft skal forvaltes.`
    },
    {
      id: "ai-kompetanse-2030-01",
      tittel: "AI er ikke trusselen i 2030. Kompetanseegapet er.",
      teaser:
        "Konkurransekraft i 2030 avgjøres av kompetanse — ikke av AI som trussel. Perspektiver fra WEF, McKinsey og OECD.",
      bildeUrl: "/images/core-skills.jfif",
      dato: "2026-02-20",
      visningsDato: "20.02.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `AI-debatten preges ofte av tempo, børsbevegelser og usikkerhet. For meg er spørsmålet mer hvilken kompetanse som faktisk vil avgjøre konkurransekraft fremover?

Diagrammet jeg legger ved visualiserer dette tydelig. Den <em>horisontale</em> aksen viser andelen arbeidsgivere som i dag anser en ferdighet som en kjernekompetanse (2025). Den <em>vertikale</em> aksen viser andelen arbeidsgivere som forventer at denne ferdigheten vil øke i betydning frem mot 2030.

Øverst til høyre, der både dagens viktighet og forventet vekst er høy, finner vi AI og big data. Tett rundt ligger teknologisk forståelse, analytisk tenkning, kreativ problemløsning, resiliens, læringsevne og lederskap.

Det mest interessante er ikke enkeltpunktene. Det er helheten!

Fremtidens kjernekompetanse er ikke bare teknisk. Den er en integrasjon av teknologi, kognitiv styrke og relasjonell kapasitet. Evnen til å forstå systemer, stille bedre spørsmål, tolke data, ta beslutninger under usikkerhet og lede mennesker gjennom endring.

Dette bildet støttes også av analyser fra bla. World Economic Forum, McKinsey og OECD: Teknologiforståelse øker i verdi, men det gjør også analytisk dømmekraft, kreativitet og evnen til kontinuerlig læring. Dette gjelder på to nivåer:

<strong>Individnivå:</strong>
Vi kan ikke outsource vår egen utvikling. Å forstå hvordan AI påvirker beslutningsprosesser, maktbalanse og verdiskaping er i ferd med å bli grunnkompetanse, uavhengig av rolle. For min del betyr det å investere systematisk i riktig kompetanse nå, ikke når markedet krever det.

<strong>Selskapsnivå:</strong>
AI er ikke noe man "tar i bruk" og er ferdig med. Det er en kapasitet som må bygges, gjennom strategi, styring, datafundament, struktur og ledelse. Gevinstene tilfaller dem som kobler teknologi med forretningsforståelse og gjennomføringsevne.

Historisk har teknologiske skifter ikke belønnet de som testet mest, men de som forberedte seg best. De som forsto hva endringen betydde for forretningsmodell, kompetansebehov, organisering og beslutningsprosesser – og handlet deretter.

Elektrifisering, digitalisering og internett skapte ikke verdi av seg selv. Verdien oppsto hos virksomheter som bygde kapasitet før endringen tvang dem til det.

Således vil ikke AI automatisk gi konkurransefortrinn. Den vil forsterke forskjellene mellom dem som bygger kompetanse strukturert og dem som utsetter det.

Derfor ser jeg frem til mandagens samling på mitt Exec. Master i Generative AI for Business studie. For meg handler det om å styrke det teoretiske fundamentet, forstå rammeverkene dypere og koble dette enda tydeligere til strategi og kommersiell verdiskaping.

Samtidig bistår jeg nå virksomheter innen AI og digital transformasjon – i skjæringspunktet mellom strategi, ledelse og implementering. Ønsker du å diskutere hvordan dette kan struktureres i din virksomhet, tar jeg gjerne en prat. Link til min consultingside finner du i første kommentarfelt.`
    },
    {
      id: "bi-master-oppstart-01",
      tittel: "Tilbake på BI – og på jakt etter en virksomhet å bygge AI-verdi med",
      teaser:
        "Tilbake på BI: masterkurset Generative AI for Business og jakten på en virksomhet å bygge AI-app og implementeringsplan med.",
      bildeUrl: "/images/bi-oppstart.jfif",
      dato: "2026-02-23",
      visningsDato: "23.02.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Tilbake på BI – og på jakt etter en virksomhet å bygge AI-verdi med (og en app du får stemme på).

For 11 år siden fullførte jeg Exec. Master of Management ved Handelshøyskolen BI, med fordypning i strategi og kommunikasjon. Nå er jeg tilbake på masterkurset <em>Generative AI for Business</em>, ledet av professor og AI-ekspert Shubin Yu.

Dette er ikke et kurs der vi kun diskuterer teori. Vi skal bygge AI i praksis, inkludert utvikling av en fungerende applikasjon og en strategisk implementeringsplan for generativ AI.

Vi har første fysiske samling denne uken, men jeg har allerede brukt de siste månedene på pensum, verktøytesting, praktiske prosjekter (ja, det kodes) og sparring med både tekniske og kommersielle miljøer. Ambisjonen er å koble teknologi til konkret forretningsverdi og gjennomføringskraft.

Dette henger tett sammen med det jeg nå bruker tid på mht. å bygge bro mellom ledelse og AI-teknologi. Jeg ønsker å hjelpe virksomheter med å omsette teknologiske muligheter til kommersiell verdi, uten behov for et stort internt tech-team. Sammen med flere tekniske eksperter leverer jeg rådgivning og implementering forankret i forretningsforståelse og ledererfaring.

Som del av kurset skal jeg bygge en AI-app. Jeg har skissert tre egenutviklede konsepter som adresserer konkrete utfordringer i næringslivet, og trenger nå innspill:

1️⃣ <strong>The “North Star” – AI Strategy Alignment Engine</strong><br />
Strategier dør ofte i dokumenter. Appen lar virksomheten laste opp strategien, og AI bryter den ned til konkrete, målbare OKR-er for avdelinger. Den sikrer operativ forankring og felles retning.

2️⃣ <strong>The “Predictive Sales Coach”</strong><br />
En always-on AI-trener for salgsteam. Selgere kan simulere krevende kundemøter mot en skreddersydd persona, for eksempel en skeptisk CFO, og få konkret feedback på struktur, argumentasjon og håndtering av innvendinger. Målet er redusert time-to-competence og økt win-rate.

3️⃣ <strong>The “Churn Sentinel” – Revenue Retention</strong><br />
Appen analyserer kundedialog og CRM-logg for å avdekke tidlige signaler på churn-risiko. Den gir risikovurdering med forklaring og foreslåtte tiltak før inntekten forsvinner.

Hvilken ville du sett meg bygge – 1, 2 eller 3?

I tillegg skal jeg gjennomføre en større strategisk prosjektoppgave. Jeg ønsker å koble denne til en reell virksomhet.

Har din virksomhet en prosess som kan optimaliseres med generativ AI, men mangler kapasitet til å utforske det? Da kan jeg bygge prosjektoppgaven rundt deres case og levere en konkret implementeringsplan med prioriteringer, gevinstvurderinger, risikoanalyse og roadmap.

Ta gjerne kontakt på DM dersom dette er aktuelt.`
    },
    {
      id: "predictive-sales-coach-01",
      tittel: "Jeg bestemte meg for å bygge – ikke bare mene noe om AI",
      teaser:
        "Fra analyse til bygging: refleksjoner fra BI-kurset og prototypen The Predictive Sales Coach.",
      bildeUrl: "/images/predictive-sales-coach.png",
      dato: "2026-02-26",
      visningsDato: "26.02.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Uken på masterkurset <em>Generative AI for Business</em> ved BI har vært særdeles interessant og lærerik. Det som gjør dette relevant er ikke bare rammeverkene, men det praktiske arbeidet. Vi har jobbet i Google-økosystemet med Gemini, Google AI Studio og Workspace-integrasjoner, testet modellvalg, strukturert prompt-arkitektur og evaluert output mot konkrete forretningscase. Når man selv må styre kontekst, parametere og datagrunnlag, får man en helt annen forståelse av presisjon og begrensninger.

Samtidig har jeg brukt mye tid på å teste og utforske AI-verktøy i praksis. Innen skriving og analyse er det tydelige forskjeller mellom løsninger som Claude, ChatGPT og Perplexity når det gjelder kontekstforståelse og strukturert resonnering. På utviklingssiden har verktøy som Cursor, Replit, Lovable og AI Studio gjort det mulig å gå fra idé til fungerende prototype raskt, gjennom AI-assistert koding, modelltesting og effektiv arbeidsflyt. Innen kunnskapsstrukturering har NotebookLM og lokale LLM-løsninger vist hvor avgjørende kontekst og datakvalitet er.

Poenget er ikke verktøyene i seg selv, men å forstå hva de faktisk kan og ikke kan gjøre, og hvordan de kan kobles til verdiskaping.

WEF peker i <em>Future of Jobs</em>-rapporten på at analytisk tenkning, kreativ problemløsning og teknologiforståelse er blant de viktigste ferdighetene frem mot 2030, samtidig som virksomheter rapporterer et betydelig kompetansegap. Dataene viser at effekten av generativ AI ikke er lineær, men divergerende: forskjellen mellom de som adopterer og de som ligger etter øker over tid. Kompetansegapet er med andre ord eskalerende, ikke statisk.

Arbeidet denne uken har allerede resultert i videreutvikling av et tidligere rammeverk til en konkret applikasjon: <strong>The Predictive Sales Coach</strong>. En løsning der selgere kan trene mot en dynamisk, virtuell kunde basert på DISC-psykologi og konkrete salgsfaser, mens systemet analyserer dialogen objektivt og gir presise forbedringspunkter. Hovedmålet er å trene for økt win-rate gjennom strukturert og målrettet trening før du møter kunden.

Før kurset lanserte jeg også egen hjemmeside (lenke i første kommentarfelt). Samlet opplever jeg at jeg har tatt et tydelig steg videre, fra analyse til faktisk bygging. AI handler i bunn og grunn ikke om teknologi alene, men om ledelse, prioritering og evnen til å koble innsikt til gjennomføring.

Er du nysgjerrig på app-løsningen, eller ønsker å diskutere praktisk anvendelse av AI i din kommersielle virksomhet, tar jeg gjerne en prat. Dagene brukes også til møter med spennende ressurspersoner og fagmiljøer innen AI, teknologi og kommersiell utvikling – noe som både gir perspektiv og nye ideer til videre prosjekter.

Motivasjonen er stor – inspirasjonen større!`
    },
    {
      id: "ai-etikk-norden-01",
      tittel: "AI, makt, etikk og legitimitet – hva krever nordisk AI-ledelse?",
      teaser:
        "Hva krever nordisk AI-ledelse? Om makt, etikk, legitimitet og ansvarlig styring.",
      bildeUrl: "/images/etikk.jfif",
      dato: "2026-02-24",
      visningsDato: "24.02.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I forrige innlegg i min AI-serie skrev jeg om styringsgrepene som avgjør hvor makten ligger når AI påvirker beslutninger. Neste nivå handler om etikk. Når beslutningsmakt forskyves fra mennesker til systemer, oppstår ikke bare et styringsspørsmål, men også et legitimitetsspørsmål.

Hvem oppleves som ansvarlig når en algoritme prioriterer én kunde foran en annen? Hvem forklarer hvorfor en risikomodell gir ulike utslag? Hva skjer når en dynamisk prismodell differensierer priser basert på betalingsvillighet – og marginen øker, men rettferdighetsopplevelsen svekkes? Hva skjer med tilliten dersom beslutningen er effektiv, men oppleves urimelig?

Etikk i AI-ledelse handler ikke primært om regelverk, men om hvordan makt utøves og oppfattes. Her ser vi tydelige regionale forskjeller.

I USA belønnes tempo, skalering og markedsmakt. Innovasjon rulles raskt ut, og korreksjoner skjer ofte i etterkant. I deler av Asia kombineres høy teknologisk fremdrift med sterk sentral styring, der retning og ansvar defineres ovenfra.

I Norden står vi i en annen tradisjon. Høy institusjonell tillit (OECD, World Values Survey) og sterke arbeidstakerrettigheter gjør at legitimitet ikke kan tas for gitt. EU-regulering, herunder AI Act, forsterker kravene til ansvarlighet og forklarbarhet. Beslutningssystemer må tåle juridisk og sosial prøving.

Debatten rundt Oljefondets AI-satsing illustrerer dette spenningsfeltet. Ambisjoner om produktivitetsløft og milliardbesparelser er forståelige, men reiser spørsmål om systemisk risiko, tap av institusjonell kompetanse og «alfa decay» når mange bruker like modeller. Spørsmålet er ikke om AI skal brukes, men om tempoet ledsages av tilstrekkelig risikovurdering og etisk forankring.

Det kan oppleves som et tempo-handicap, men også som et konkurransefortrinn. Virksomheter som kombinerer teknologisk fremdrift med etisk forankring, vil stå sterkere over tid. Uten legitimitet svekkes tilliten, og dermed handlingsrommet og konkurransekraften.

AI-ledelse handler derfor ikke bare om styring, men om ansvarlig maktutøvelse. Det dreier seg ikke bare om hva systemene kan gjøre, men om hva de bør gjøre og hvordan det forklares.

Den virkelige testen på modenhet er ikke hvor avansert modellen er, men om organisasjonen tåler konsekvensene av beslutningene den påvirker, også når de utfordres.

Neste steg i serien handler om lederens dømmekraft. Når AI blir en del av beslutningsgrunnlaget, holder det ikke å forstå styringsstrukturene. Ledere må forstå hvordan modeller responderer på kontekst, hvordan hallusinasjoner oppstår, og hvordan anbefalinger skal vurderes kritisk.

AI-dømmekraft er ikke en teknisk nisjeferdighet. Det er en lederkompetanse.`
    }
];

const aiGovernanceEn: Record<string, LocalizedTextMap> = {
  "ai-agent-007-master-bi-2026-06": {
    tittel: "AI Agent 007?",
    teaser:
      "Generative AI for Business at BI with top marks — now ready in the fight for the best minds: AI strategy, agents and practical value creation, and why the gap is growing between those who act and those who wait.",
    innhold: `I note that the hunt for the next James Bond is underway.

Since the agent role is apparently vacant, I hereby throw my hat in the ring for the best minds and projects. 🙋‍♂️

Not necessarily for MI6, but for organisations looking for commercial leadership, strategy and AI competence in the same package.

This semester I completed the Master of Management course 'Generative AI for Business' at BI. The result arrived recently, and the "mission" could hardly have been completed better.

But what matters most is not the grade. It is the insight the work has provided.

I have worked on AI strategy, roadmaps and workflow design, AI implementation, multimodal content, app and agent logic, data flows, customer processes, chatbots, governance and practical value creation.

The more I build, test and analyse, the clearer the value becomes. Interest is growing almost exponentially, and several AI projects are on the way.

One of them is a reflection and development tool designed to support collaboration between leaders, employees and teams by understanding how profile, role, daily form and situation affect communication, priorities and execution.

For me, AI is not only about technology. It is about what I can contribute directly, both inside and outside the organisation. Better decisions, smarter processes, clearer customer value and more effective commercial execution.

A wise head told me recently that changes in working life point to a greater need to develop the competence we already have. When AI takes more of pure production, there is less time for just producing and more time for judgement, direction, prioritisation and holistic understanding. It was also highlighted that experienced employees can gain increased value because they often have a better grasp of the whole, connections and context. 💥

I could not agree more!

The gap is now widening between those who take action and those who still wait.

How long can you really afford to sit on the sidelines?

👉 I am happy to grab a coffee with you if you want to discuss where AI can create real value.

#AI #Leadership #CommercialLeadership #DigitalTransformation #ValueCreation`,
  },
  "crm-genai-medspiller-knowit-2026-06": {
    tittel: "When CRM becomes a teammate",
    teaser:
      "Breakfast at Knowit on AI and CRM: from passive dashboards to an active commercial decision layer — and why the gap between AI ambition and \"current reality\" is a leadership issue.",
    innhold: `The new way of working starts when the data we already have begins to help us make better decisions. It does not start with more dashboards.

On Tuesday, a breakfast meeting at Knowit confirmed several of my own thoughts on AI, CRM and commercial development.

Many organisations hold large volumes of structured and unstructured customer data, activity data, order data, meeting notes, emails and history.

Yet much of this is still used passively.

🔸 We search in dashboards.
🔸 Click through countless CRM tabs.
🔸 Check email.
🔸 Reconcile spreadsheets.
🔸 Talk with colleagues across different functions.
🔸 Check our own notes and try to create overview manually.

That is the old way of working, which many of us recognise.

The new way of working is not about replacing human judgement. It is about giving people better decision support, closer to the workflow. 💡

For me, CRM has always been one of the most interesting areas within commercial development, precisely because it sits so close to customer value, sales leadership and operational execution.

But CRM should not only be a system for simple customer data, registration, control and pipeline follow-up.

It should be a place for an active commercial decision layer. A system that helps us understand customers better.

💥 Spot patterns earlier.
💥 Prioritise more accurately.
💥 Prepare meetings better.
💥 Follow up more precisely.
💥 And not least use insight across sales, marketing, customer service, operations and leadership.

👉 How can we extract more of the insight the organisation already holds, make better use of data, and apply this more effectively in sales, customer follow-up and commercial leadership?

I want to explore how CRM can be developed further with GenAI, so I intend to make this one of my next AI projects.

The gap between using CRM the old way and getting full benefit from the potential is large.

As the charts show, many organisations have high AI ambitions. But \"current reality\" is often much weaker. Data quality, governance, KPI measurement, structure and use in operations do not always keep pace.

Success with AI is about building new ways of working that create value for the whole organisation.

Nicolai Tangen and the Oil Fund have put it well:
When others achieve 10–20% improvement on the bottom line, how many years can you afford to stay on the sidelines? When competitors learn faster over one, two or three years, the gap becomes hard to close.

This is a leadership theme. AI will not create lasting value if it becomes a side project. Value comes when data, people, workflow and governance are connected to concrete business results. 📈

Thanks to Knowit, Jprofessionals, Snowflake and Mowi for a highly relevant seminar. Especially useful to hear perspectives from Morten Hauge and Hamik Sevan on how data, processes, technology, governance and people can be connected to create value in the workflow. 💯

#AI #CRM #CommercialLeadership #DigitalTransformation #CustomerValue`,
  },
  "ai-value-lab-smb-praksis-2026-06": {
    tittel: "AI does not create value until everyday work changes",
    teaser:
      "From AI Value Lab Oslo: interest and demos often stall in everyday work. For SMBs it is about the right use cases, rapid testing and practical value creation – we welcome contact to learn more.",
    innhold: `We see a pattern:

🔸 Leaders are curious.
🔸 Employees experiment.
🔸 Some have attended courses.
🔸 Many have seen impressive demos.

Yet much still stalls.

Not because interest is missing, but because everyday work takes over. AI drowns in the time squeeze.

Nicolai Tangen at the Oil Fund has pointed to an important insight:
When some people learn faster with AI year after year, the gap becomes hard to close.

The question is therefore not only whether AI can create value. The question is how long you can afford to stay on the sidelines ❗

This is not about technology optimism. It is about competitiveness, learning speed and the ability to adopt new ways of working.

For many SMBs, the question is no longer "should we use AI?" but where to start.

SMBs rarely have large IT departments, dedicated AI teams or time for long strategy processes. At the same time, there are many concrete processes where AI can create value. To name a few:

💥 Customer service.
💥 Sales and follow-up.
💥 Booking and administration.
💥 Internal communication.
💥 Market insight.
💥 Documentation.
💥 Training.

The hypothesis at <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">AI Value Lab Oslo</a> is simple:

Value comes when AI is connected to real workflows, clear accountability and concrete improvements.

We are now developing a practical approach:

🔸 Find the right use cases.
🔸 Prioritise what creates the most value.
🔸 Test quickly without making it complicated.
🔸 Ensure responsible use from the start.

That is why we want contact with more SMBs.

Not to sell a finished solution, but to understand where AI work stalls, which processes steal time, where uncertainty is greatest, and which use cases can create value quickly.

💡 <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">AI Value Lab Oslo</a> remains a learning and development initiative. But the direction is becoming clearer:
From AI interest to practical value creation.

👉 Do you have experience from an SMB where AI is on the agenda, but it is still unclear where to start? <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">Get in touch with us on LinkedIn</a>.

#AIValueLabOslo #GenAI #SMB #BusinessDevelopment #Leadership`,
  },
  "bi-genai-avslutning-master-2026-06": {
    tittel: "Finished, but just getting started",
    teaser:
      "This weekend I submitted my final project assignment in Generative AI for Business at BI. The Skøyenåsen Dental Clinic case: GenAI in the patient and customer journey through website, chatbot and booking. Strategic implementation and building in practice – and how new competence strengthens commercial leadership going forward.",
    innhold: `This weekend I submitted my final project assignment in <em>Generative AI for Business</em> at BI.

It marks the end of the master's programme, including three exam projects, practical use of AI tools, building, strategy, analysis and a larger individual project assignment.

The final assignment was about how Skøyenåsen Dental Clinic can use GenAI to improve the patient and customer journey through a new website, chatbot and online booking. The core was to make first contact with the clinic more guided, relevant and efficient through needs clarification, booking support and patient communication.

The assignment was about strategic AI implementation, but I also chose to build parts of the solution to test how this can work in practice.

What I take away is broader than the case itself.

AI creates value first when it is connected to real workflows, clear problems, people, risk and commercial execution. 💯

For me this has been highly inspiring going forward — as a leader, in a commercial context and in understanding how AI can be used to create concrete value in organisations.

So I am not really finished.

I bring new AI competence as an important supplement to my commercial core skills, and see major opportunities to use this to create value across more industries and companies. 💥

💡 Some of the reflections are shared in the carousel.

#GenerativeAI #AIImplementation #DigitalTransformation #CommercialLeadership #Leadership`,
  },
  "ai-kompetanse-tech-frokost-telenor-2026-05": {
    tittel: "The AI competence gap grows where experience is not built",
    teaser: "Telenor and Equinor at Digital Norway's tech breakfast: two paths for AI adoption, high-value commercial workflows — and a formula that shifts the discussion from potential to execution.",
    innhold: `Last week we wrote in <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">AI Value Lab Oslo</a>, building on Erlend Rosseland Stokke's point in <a href="https://www.digi.no/artikler/debatt-norsk-naeringsliv-undervurderer-den-virkelige-ki-mangelen/572264" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">digi.no</a>, about an AI shortage that may prove more demanding than many see today.

Not a shortage of technology.
Not a shortage of tools.
👉 But a shortage of people and environments that have made AI work in practice.

Stokke points to a self-reinforcing cycle. Organisations remain stuck in pilot mode because they lack people with real experience. At the same time, experience is built only when someone gets to take AI from pilot to production.

At Digital Norway's tech breakfast on Tuesday, on AI adoption in Equinor and Telenor, I heard the same point confirmed from another angle.

In reality, many organisations follow one of two paths.

🔁 One is pilot mode. Many discussions. Heavy tool focus. New tests. But limited movement. You learn something, but not enough to build confidence, execution capability and practical maturity.

📈 The other is building competence through real use cases. Then learning moves into workflows, customer experience, data, governance, collaboration and delivery. Competence is not just something you talk about. It is built through use, adjustment and responsible implementation.

It was striking how closely this was linked to commercial value.

Telenor highlighted attractive AI areas within:
💥 B2B sales and go-to-market
💥 Customer growth and retention
💥 Customer service and follow-up

These are not peripheral AI areas, but workflows with high feasibility and high value. They are at the core of commercial processes, customer journeys and value creation.

For me this aligns well with my commercial leadership experience and what I explore through practical AI projects.

Another strong point from Telenor was that AI should not simply be layered onto existing workflows. Then gains are often incremental. When workflows are redesigned around AI, gains can become structural.

Telenor showed a simple but precise formula for AI value:

Annual net value = Baseline × AI delta × Adoption × Confidence − Build & run cost

It shifts the discussion from technological potential to operational realism. Adoption, confidence, quality and the cost of building, operating and scaling.

Equinor showed at the same time the importance of structure, sharing, learning and responsible use.

Real AI competence is built when people work concretely with needs, user experience, data, risk, accountability, workflow and business value.

That is also why we established AI Value Lab Oslo, where we build practical understanding of how AI can create real value.

The question is not only whether organisations use AI. The question is which path they are actually building competence in. 💯

#AICompetence #CommercialLeadership #DigitalTransformation #PracticalAI`,
  },
  "ai-gap-kompetanse-stokke-digi-2026-05": {
    tittel: "The real AI shortage: people with practical AI competence",
    teaser: "Reflection on Erlend Rosseland Stokke's article in digi.no: the skills gap is about people with practical AI experience in production — and why AI Value Lab Oslo explores this in practice.",
    innhold: `Erlend Rosseland Stokke points out in <a href="https://www.digi.no/artikler/debatt-norsk-naeringsliv-undervurderer-den-virkelige-ki-mangelen/572264" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">digi.no</a> to an AI skills gap that may soon prove far more demanding than many realise today.

The shortage is not technology.
It is not tools and models.
👉 But the shortage is people and environments that have made AI work in production. With real users, business-near data and clear consequences.

Stokke also describes a self-reinforcing cycle. ⭕

Organisations remain stuck in pilot mode because they lack people with real experience. At the same time, concrete experience is built only when someone gets the opportunity to take AI from pilot to production. Then the skills gap grows.

That is also part of the reason we established <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">AI Value Lab Oslo</a>.
We want to explore AI in practice, not only in principle.

Marius, Tatiana and Ole develop together by combining business understanding, technology, customer journeys, practical development and responsible implementation.
Through concrete cases, prototypes and discussions we challenge and explore how AI can be connected to workflows, decision support, user experience, governance and real value creation.

Those who wait learn more slowly. They deliver less, have fewer mistakes to learn from, fewer clarifications around data and risk, and less understanding of what their own organisation requires.
Meanwhile, those who act build a learning curve that becomes harder for others to catch up with. 📈

They learn through use.
They adjust along the way.
They develop their own frameworks.
They build internal confidence.
They see faster where value emerges.

What is interesting is not necessarily that the competence does not exist, but that it must be worked on actively. Both at individual and organisational level.

The most important learning does not come only from the classroom or sporadic, theoretical courses. Competence is not built primarily through posts and discussions. And not primarily by testing a new tool either.

When you stand in the trade-offs between need, user, data, risk, accountability, business and execution — that is when a different form of AI competence and experience develops. The kind that really matters. 💯

And that is why we agree the skills gap is about more than general AI interest. It is about who actively builds experience and practical maturity so AI can create real value tomorrow.

💥 For organisations that want to succeed, it is not enough to watch from the sidelines.

We are happy to grab a coffee with others working on this, or curious about how such experience can be built in practice. ☕

#GenerativeAI #AICompetence #DigitalTransformation #TechnologyLeadership #PracticalAI`,
  },
  "nova-frokost-ai-kjernekompetanse-2026-05": {
    tittel: "AI must become core competence, not a side project",
    teaser: "Reflections from NOVA Consulting Group's breakfast meeting: why many organisations remain stuck in pilots — and what Elkem, Egde, Nordic Corporate Bank and Infra Group showed about AI in operations.",
    innhold: `It should really give more leadership teams and boards pause for thought.

Why are so many organisations still stuck in talk, pilots and single tools when others are already moving AI into operations and core processes?

AI must become core competence, not a side project.

At individual level you can get somewhere with individual tools. But if organisations are to take real steps, create value and build competitive advantage, AI must be connected to more central tasks.

To value-creating processes.
To workflows.
To decisions.
To customer and user journeys.
To the competence the organisation itself must own.

The most important takeaway from yesterday's breakfast meeting with NOVA Consulting Group was not one demo or one tool. It was the pattern in hearing what lies behind what works in different companies, and where that can take them.

It gave me a real boost of inspiration. 💥

• Elkem ASA and Egde showed how many small use cases, short development cycles and close user involvement can become an internal AI platform with real impact.
• Nordic Corporate Bank ASA showed how AI agents can move work earlier in the process, from unclear requirements to better clarification, testing, code and documentation.
• Infra Group showed how unstructured HSE data can become better decision support, risk understanding and prevention.

Not every company should copy these solutions. But they showed that AI should not remain in pilot mode if the organisation wants to build competitiveness.

It is also interesting to see how much of what I build and explore myself points in the same direction. Through among other things the master's course <em>GenAI for Business</em> and the self-started <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">AI Value Lab Oslo</a>, I have worked across the full AI journey: from business needs, customer journey and use case logic to building apps, agents, AI architecture, visual content, governance and scaling.

The focus is not on technology alone, even though I also become well acquainted with models, tools and technical possibilities.

It is about how AI can actually be used to solve important business challenges. ✅

I encourage more people to focus on - and take part in - the <em>full</em> journey:
From idea to use case.
From use case to safe testing.
From testing to operations.
From operations to core competence.

Because if others can do it, more can do it. 💯

AI transformation rarely starts with the biggest idea.
It starts with enough structure for small ideas to be tested quickly, learned from and then scaled safely.

But then AI must stop being something the organisation tries on the side of the job.
It must become part of how the work is actually done.

Thank you to the Nova crew, meeting chair Michael Christophersen, and fellow BI students Thomas Holm and Dimitri Oetiker who also came along.

Together we continue exploring the potential of AI when it is placed in good systems. 📈

#GenerativeAI #DigitalTransformation #TechnologyLeadership #CommercialLeadership`,
  },
  "ai-prosjekt-forretningsproblem-tegneserie-2026-05": {
    tittel: "When an AI project does not start with AI, but with a business problem.",
    teaser: "Master's thesis case for Skøyenåsen Dental Clinic: GenAI value in the patient journey — illustrated with a comic summarising the implementation journey.",
    innhold: `In my master's thesis in <em>Generative AI for Business</em> at BI, I have worked on a concrete case for Skøyenåsen Dental Clinic. 🦷

The goal has not only been to build a new website, chatbot or digital solutions. It has been to understand where GenAI can actually create value in a real business. 📈

✅ The project focuses on the customer and patient journey around delivery and treatment: information, needs clarification, booking, follow-up and recall.

🚫 Not diagnosis. Not treatment advice. Not automation of professional judgements.

It is about understanding the problem, building concretely, taking risk seriously and knowing where people must still own the decision.

For me personally, the learning has been significant. Not only in using AI tools, prompt work and strategic tech understanding, but also in driving an AI project from problem understanding to concrete deliverables.

At the same time, the thesis has provided a framework for describing the full implementation journey: business need, solution, roadmap, risk, governance, privacy, scaling and human accountability.

Results are now taking shape: new website, text/speech-to-text chatbot in 6 languages, booking, needs clarification, follow-up and recall.

Perhaps your organisation recognises the same needs, or is curious about how AI can be used more concretely, safely and with real value creation? Please get in touch for a conversation.

The comic summarises the journey.

#GenerativeAI #Leadership #DigitalTransformation #BusinessDevelopment #ResponsibleAI`,
  },
  "genai-foerste-reklamefilm-psc-2026-05": {
    tittel: "My first commercial with Generative AI. 🎥",
    teaser: "I made the film for The Predictive Sales Coach — and reflect on GenAI production, BI master's deliverables, and what this means for commercial content production.",
    innhold: `I made this film for <a href="https://pscv6-744893320985.europe-west2.run.app/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">The Predictive Sales Coach</a>, my own AI-based sales training tool that combines DISC-inspired customer psychology with realistic sales simulations, objective evaluation, and structured learning to strengthen confidence, methodology, and win-rate.

It has been both instructive and fascinating to see how much is now possible without long planning, a large production rig, actors, locations, film crews, extensive coordination, and the budgets that were often necessary before.

In the project I used Higgsfield for production, Seedance 2.0 to generate scenes, DaVinci Resolve for editing and finishing, and audio/music from Pixabay. The tools are not free, but compared with traditional production they open completely different possibilities for speed, testing, flexibility, and creative execution.

It was especially meaningful for me that both the PSC app and the commercial were two of three exam assignments on the master's course <em>Generative AI for Business</em> at BI Norwegian Business School, submitted this weekend.

The programme has been incredibly interesting. Over these months we have worked broadly and practically with Gen.AI, digital transformation, and development — not only theory, but also concrete deliverables, experimentation, content development, building solutions, and insight into challenges and new opportunities.

For me the studies have also given a broad introduction to the full AI journey: from identifying needs and opportunities, analysing and structuring large data sets, and anchoring ownership in the organisation, to using models and programmes tied to core processes, roadmaps, implementation, governance, and not least scaling considerations that leaders must understand and handle.

It has also motivated me to do more. Beyond the curriculum I have among other things built agent solutions, websites, an AI-assisted insight and content engine, and AI architecture for decision support. That has given me even greater insight into the opportunity space, and into how this is already creating value for businesses.

Competence in this field has also inspired me to connect with like-minded people. The network has grown with people who want to explore, build, and contribute to tomorrow's solutions.

💥 In summary, this points in a clear direction. I want to continue exploring how Gen.AI can create real value for businesses and customers in a commercial context. It is a direction I want to build on further, either through my own company or in a role where the organisation wants to use AI in a more targeted way.

If anyone is curious about trying the Sales Coach solution, just contact me for access.

#GenerativeAI #DigitalTransformation #CommercialLeadership #ContentProduction #AIAdvertising`,
  },
  "bi-generative-ai-for-business-2026-01": {
    tittel: "Final BI session in Generative AI for Business - this is only the beginning",
    teaser: "The final in-person session at BI delivered both practical experience and strategic direction: building, leading and implementing GenAI in business.",
    innhold: `I går hadde vi siste fysiske samling på masterstudiet "Generative AI for Business" ved Handelshøyskolen BI.

Men følelsen er ikke at noe avsluttes. Snarere at noe har begynt! Kurset har gitt både praktisk erfaring og et tydeligere strategisk perspektiv på hvordan GenAI kan brukes, implementeres og ledes i virksomheter.

For min del har dette vært langt mer enn et fag med pensum, innleveringer, eksamener og prosjektoppgave.

Vi har laget apper, nettsider, assistenter, infographics, podcast, quiz, reklamemateriell i form av bilder og video, og jobbet med et bredt spekter av GenAI verktøy, modeller og praktiske anvendelser. Man skal ikke bare forstå hva AI er, men prøve det ut på tvers av oppgaver, arbeidsformer og forretningsbehov. Studiet har også vektlagt prompt engineering, dataanalyse, automatisering, strategi, implementering og ansvarlig bruk.

I tillegg har jeg fått utviklet 'The Predictive Sales Coach' 👇 - et salgscoach-verktøy som springer ut av både læringen på studiet og min egen kjernekompetanse innen kommersiell ledelse. Indikasjoner på at dette kan ha kommersielt potensial har jeg også fått. 📈

Men studiet har også utløst mer!
Det har gitt meg motivasjon til å bygge videre utover pensum med agentløsninger, AI-assistert innsikts- og innholdsmotor, AI-arkitektur for beslutningsstøtte, og ikke minst videre refleksjon og faglig deling. Dessuten har det gitt meg inspirasjon for å komme i kontakt med "likesinnede", hvilket for eksempel har ledet til at jeg har dannet AI Value Lab Oslo.

Det gir meg en følelse av stolthet av flere grunner.
💥 Fordi jeg ikke bare har lært om teknologien, men også bygget noe.
💥 Fordi jeg har klart å koble ny teknologi med det jeg kan best fra før: salg, kommersiell utvikling, ledelse og praktisk verdiskaping.
💥 Og fordi det er inspirerende å kjenne at dette ikke bare er faglig interessant, men også relevant og anvendbart i forretningskontekst der det kan ha store konkurransemessige fordeler.

Det er også vanskelig å komme utenom hvor gøy dette har vært. GenAI er et fagområde som utvikler seg svært raskt, og som så tydelig er i tiden, hvilket både gir energi og læringslyst. Når andre hører man fordyper seg i GenAI, er responsen alltid positiv. De fleste ser at dette er et område som blir stadig viktigere fremover.

Min viktigste take-away er derfor denne:
Det stopper ikke her!
Innen GenAI holder det ikke å ha testet noen verktøy eller fullført ett kurs. Utviklingen går for fort til det. Man må fortsette å lære, teste, bygge, feile, vurdere og omsette innsikt til praksis. Derfor har det vært spennende å kjenne på følelsen av å sitte mer i førersetet enn på sidelinjen mens mye fortsatt formes. 💪

Takk til professor Shubin Yu og alle medstudenter for inspirerende samlinger, gode diskusjoner, mye energi og kreativitet underveis. 💯`,
  },
  "econa-ai-kundereise-arbeidsflyt-01": {
    tittel: "What is most interesting about AI now is what it does to the customer journey, workflow and availability",
    teaser: "Reflections from the Econa event: AI creates value when connected to the customer journey, workflow and concrete needs.",
    innhold: `This struck me clearly at the Econa event yesterday.

I am currently working on building both an AI-based chatbot, agents and a smarter booking flow in a private clinic, with the goal of better clarification of needs and a more precise customer/patient journey. That made this especially relevant to me:

AI creates value only when it is connected to the customer journey, workflow and concrete needs.

When I work commercially myself, it is especially exciting to see where the road is heading now, while also being able to help build some of it in practice.

Synne Christiansen and Jens Fredrik Allworthy from Sprint raised an important point: Customer experience is no longer just communication or customer service. It is the sum of all interactions, and AI is in the process of changing them all.
An illustrative example was how buying experiences can move from classic navigation and filtering to the customer simply describing their need in natural language, and getting a relevant solution generated from that. It is a major shift from menu logic to intention logic.

Hanna Vodopic from Devoteam put words to something many underestimate: AI has become "the quiet colleague."
A concrete example was how employees increasingly ask AI before they ask the colleague next to them. It gives speed, but can also weaken learning, knowledge sharing and the friction that often creates better solutions. She also raised the concept of hollow intelligence: that we can appear more capable because AI helps us deliver, without necessarily building deep enough understanding ourselves.
It was an important reminder: AI must not only make us faster. It must be used in a way that also makes us better, wiser and more aligned.

Daniel Kirkenær Mathisen from IGM showed the most operational side of this: digital colleagues and agents that take a role in the frontline.
It became very concrete when he showed how the AI receptionist responds immediately, handles several inquiries at once and transfers to a human when needed.
This is interesting because it moves AI from a support tool to work capacity. It resonates well with something I am building myself now, where agents should not only answer, but contribute to flow, availability and follow-up.

What stands out strongest for me after the evening is that we are moving from AI as something employees "test a little" to AI being built deep into core processes.

That also changes the requirements for us who build:
 • We must understand the customer journey
 • We must understand the processes
 • We must understand where the friction actually is
 • And build with a clear human in the loop

This is also where I believe something of the most remarkable is happening now:
Businesses that manage to connect AI to frontline work, booking, needs clarification and follow-up are not only building efficiency. They are building a completely different level of availability and precision in the customer encounter.

That is where much of the competitive strength will lie going forward.`,
  },
  "ai-needs-first-tannklinikk-case-01": {
    tittel: "Most people start wrong with AI - lessons from a real case",
    teaser: "From AI Value Lab Oslo and a real dental clinic case: start with the business and needs — not with \"which AI solution?\" Website, chatbot and booking in the correct order.",
    innhold: `At Easter and last week, I continued to work on a concrete case through my group AI Value Lab Oslo, where we use a real dental clinic as a learning arena to test how AI can be used in practice.

We didn't start with technology. We started the business.

Through analysis, research, interviews and discussions, we worked our way to one core point: Where is friction experienced in everyday life?

What works well today?
Where are the bottlenecks?
Where does the clinic lose time, capacity or potential income?

We also looked at what the competitors do better, particularly in how they meet patients digitally and operationally.

The picture that emerged was clear:
The professional quality and patient experience are strong, but there is a gap in the digital and commercial areas around. So not in the core delivery, but in what happens before and after.

That is why we are now working to modernize the patient journey, and consider how AI and digital solutions can strengthen:
🦷 booking and availability
🦷 follow-up and repurchase
🦷 clear information and patient communication
🦷 more efficient work processes
🦷 better operational support in everyday life

Specifically, we are now working with:
- further development of the website (better structure and more relevant information)
– new chatbot (never had before)
- new online booking solution (not previously available)

Everything is developed based on the actual needs of the patients. The point is not the tools themselves, but the order.

Most businesses, on the other hand, start with the question:
"Which AI solution should we choose?"

In practice, one should start in a completely different place by asking:
"Which decisions and processes affect the outcome?"

I recognize this from commercial organisations:
Prioritization of customers is done differently from person to person.
Follow-up of offers is governed as much by capacity as by potential.
Pipeline and forecast are often characterized more by optimism than structure.

This does not mean that it is done poorly, but that there is considerable potential for improvement. This is where AI can help!

A model can analyze patterns and suggest the next best course of action. But the value only arises when it is used to make better decisions in practice.

Since these AI posts are meant as expertise sharing, I also briefly mention the tools we are testing. Solutions have been developed with Claude and Claude Code, with content from FAQs and today's website built on localhost, with further plans for deployment via Vercel. Website work in parallel in Lovable. Not because the tools are important, but because more people are asking what is actually used in practice.

👉 In the next post, I look at why many AI initiatives stall, even when they get off to a good start.

PS. Easter was otherwise spent in Røros and Svalbard with experiences that remind me of something important: Not everything should be optimized. Cross-country skiing, alpine skiing, snowmobiling, dog sledding, wild animals and time with family and friends still beat most - the real is not artificial.`,
  },
  "ai-value-lab-munch-kickoff-01": {
    tittel: "Kick off at Munch with AI Value Lab Oslo",
    teaser: "Easter lunch at Munch: explore responsible AI where communication, expectations and security matter a lot - from strong emotions to visits to the dentist.",
    innhold: `At Easter we had a kick off lunch, and we in AI Value Lab Oslo met at 𝘔𝘜𝘕𝘊𝘏.

It really felt like a pretty appropriate place to start.

Munch's universe is about strong emotions, unrest and human reactions. So do many people's encounters with health services. For some, a visit to the dentist can be associated with uncertainty, friction and, in some cases, dental fear. Then it is not so difficult to understand why such experiences are worth learning more about.

In this phase, we spend time exploring how AI can be used in a responsible and thoughtful way in situations where communication, expectations and security matter a lot.

What we are particularly concerned about now is what actually happens in the meeting between people, information and technology. Where does uncertainty arise? What creates security? And where can AI be useful, without compromising privacy, judgment or human proximity?

For us, this is not just about technology. It is also about learning along the way, about building better understanding, developing skills and sharing reflections across disciplines.

Perhaps one of the most interesting things about AI is not the pace or the effect itself, but how the technology can be used more carefully, more precisely and more humanely.

From Munch's time to our own, the tools have changed a lot. The need to understand people remains the same.

Perhaps some of the most interesting AI exploration is precisely this: not to make the human less important, but to better understand what makes an experience safer and more coherent.

It will be exciting to explore this together further, Tatiana Hanecakova and Ole Mjelde!`,
  },
  "april-ai-kompetanse-praksis-01": {
    tittel: "We have now found a simple way to build AI competence in the organisation",
    teaser: "AI competence is not built on courses alone, but in decisions and practice close to the core work.",
    innhold: `We haven't found a simple way to build 𝐀𝐈 competence in the organization zone

Send everyone on a course!

Or maybe not. This was an attempt at a bad 𝐀𝐩𝐫𝐢𝐥𝐬𝐧𝐫𝐫𝐫:

Many managers are waiting for AI – can you imagine why? It's not about because they don't want to, but because they don't see where to start. It is largely understandable.

In recent months, I have attended several courses and gatherings about AI. I like it. It provides energy, new perspectives and a language to understand what is happening.

But one thing has become very clear: development is not happening there. It only happens when AI is moved into everyday working life and connected to decisions that actually matter.

So far in this AI series, I've written about judgment, structure, and how humans react when AI starts giving advice. Now I move on to what many managers are actually concerned with:

How is value created in practice?

In commercial teams, I see a clear distinction. Someone is testing AI on the site. Create texts, summarize documents, try things out. It's useful, but it doesn't move much. Others connect AI directly to core decisions:
 • Which customers should be prioritized?
 • Which offers should be followed up now?
 • Where is the real probability of winning?

That is WHERE the difference occurs.

A model can analyze the pipeline and suggest the next best course of action. But the value is not in the answer. It lies in what the team does with it. Do they test the recommendation? Do they challenge it? Do they adjust the decision?

That is where the COMPETENCE is built. Not in the tool, but in the interaction between experience, data and assessment.

I notice it myself when I build and test AI tools. Small changes in context or input produce different recommendations. It makes one thing clear in the form that this is not something you "completely learn". You develop it through use. Therefore, I think many people overestimate the need to start with technology. The most important thing in the initial phase is not new systems, but connecting AI to decisions that are already made today.

The businesses that are most successful do not build AI expertise alongside their operations. They build it in the line.

For the next week I will be building and testing AI agents. It involves the use of various tools, but primarily learning, testing and challenging what I do and the answers that are given.

👉 In the next post, I look more closely at how to identify the right AI use cases to start with.

Happy Easter!`,
  },
  "iteam-operativ-modell-2026-01": {
    tittel: "Is your commercial operating model rigged for 2026?",
    teaser: "Reflections from iteam's breakfast seminar: AI as a new operating system, cyber security as a foundation and agents that actually do work.",
    innhold: `Is your commercial operating model rigged for 2024?

Yesterday I attended iteam and Michael Jacobs' breakfast seminar at Saga Kino in Oslo - an event with over 800 participants spread over 29 locations. The message was crystal clear: We are in a technological shift that requires a fundamental recalibration of how we lead, secure and scale businesses.

In the meeting, it was highlighted that the gap between those who only see AI as a tool, and those who understand it as a new commercial operating system, is increasing rapidly. Investing in deep AI understanding and change management now is not just an advantage, but a critical capability for any leader navigating the years ahead.

Here is my strategic summary of the most important drivers for 2026:

<strong>1. The technological paradigm shift</strong>
We have moved from the 90s focus on software to the 2000s cloud services. We are now entering the age of autonomous agents.
• From tool to digital workforce: AI is moving from being a passive assistant to becoming an active agent that automates routine tasks, analyzes huge data sets and supports strategic decisions.
• Global technology - local consequences: The technology is available to everyone, but the competitive advantage is created locally by those managers who are able to operationalize AI in their value chain.

<strong>2. Cyber security as a strategic foundation</strong>
Roar Thon from NSM delivered a grim reality orientation: The threat picture is characterized by state actors and organized criminals.
• Identity is the new attack surface: Attackers rarely hack systems. They log in via misused user identities.
• Broad security: A holistic approach requires control over technology, people and processes.
• Four critical capabilities: Any modern business must be able to prevent, detect, manage and normalize operations after an attack.

<strong>3. AI in operational practice: Microsoft Copilot</strong>
Daniel Horgmo from Microsoft demonstrated how we are moving from simple chat to actual autonomous agents that act as a digital workforce.
• Precise delegation: Success with AI requires “Prompting 101” – the ability to provide goals, context and sources as if delegating to a team member.
• Agent Mode: Through Copilot, we now see agents that perform multi-step tasks autonomously directly in our core systems.

<strong>My strategic conclusion:</strong>
I believe that success requires us to stop looking at security and AI as IT projects. Cultural and structural changes are needed.
• Start small, think big. Test on a small scale, but have a clear strategy from management.
• Data discipline: Good data and strict access management are the prerequisites for AI effect.
• Security by design: Integrate security from the start as it is significantly cheaper than dealing with a crisis.

Thanks to iteam for a professional deep dive into the future.`,
  },
  "ai-tech-frokost-rebel-01": {
    tittel: "Tech breakfast: Now it's about what AI agents can do for business",
    teaser: "AI agents create value when connected to systems, data and processes — with control, clear instructions and human in the loop.",
    innhold: `At the AI ​​agent meeting at Digital Norway yesterday, we got a good picture of where the agent field stands now, from conceptual understanding, via the public sector and governance, to startup, scaling and concrete construction.

Many still talk about AI as better text, faster searches and smarter assistants. That is not where the value lies. The value arises when AI connects to systems, data and processes – and performs work.

Alexander Haneng from Digital Norway set the scene well. A chatbot answers. An assistant helps. An agent acts. It can trigger processes, retrieve data, send email and work in the background. At the same time, the risk increases. Access to systems and data requires control, clear instructions and limited rights.

Kjetil Ringstad from the Norwegian Road Administration showed how this is implemented in a large company. Not as technology alone, but as structure and management. A model that worked well was how employees build their own agents, experts build joint solutions and developers build platforms.

The case with document control was concrete. Agents identify sensitive information, suggest changes and reduce manual work. At the same time, two principles are crucial: the handling of sensitive data must be controlled, and human in the loop must be in place before anything is published. This is where many encounter the real complexity.

Einar Michaelsen from Circular showed how this looks when it is connected directly to the value chain. Products can be digitized, categorized, priced and published in seconds. Sales agents find leads, score them and set the next step in the process. When 4 people work together with 40 agents, that says something about the direction!

The stack behind was, among other things, Linear, Claude Code, Cursor, GitHub, Supabase, Vercel, Gemini, etc. The value lies in how this is connected to a production line. For me, it was fun to see this, as I have experience with several of the tools and am now working on building my own agent solutions.

What distinguishes those who are having an effect now is how they start. Not with technology, but with concrete tasks. Repetitive work across systems, with clear rules and measurable value. A simple agent with limited access including human control is then built. When this works, it scales.

My take is simple. The question is not which models to use. The question is which work can be delegated, which processes should be redesigned and where this actually adds value.

It is also the background to the fact that I am now concretely working on building agents, with the ambition of a measurable effect in a business I collaborate with.

Inside the venue was a DeLorean with a "REBEL" license plate. In the film Back to the Future, it was about traveling forward in time. With AI, it feels more like we build it. AI agents are the way forward!`,
  },
  "nova-day-data-forst-01": {
    tittel: "NOVA Day: Data first – always",
    teaser: "I attended NOVA Day and got clear takeaways about data first, judgment and governance as a foundation.",
    innhold: `Yesterday I attended 𝗡𝗢𝗩𝗔 𝗿𝗿 at Hotel Bristol - a very relevant and insightful full-day seminar with the theme "𝐗𝐮𝐮 first - 𝑅 all time", with a focus on AI, data and the business models of the future.

The day was led by Morten Blomfeldt, and brought together strong speakers.

My most important takeaways:
1. Data first – not AI first
The overall message was that without the right data base, the gains will not materialise. AI is business-critical, but data is the foundation for scaling and value creation.

2. The future is being shaped now – but not by technology alone
Gerd Leonhard highlighted the importance of human judgement, ethics and responsibility. Technology provides opportunities, but it is management that determines direction and consequences.

3. Data quality, risk and governance are critical
Iselin Paulsen showed how geopolitics, security and regulation affect technology choices. Data quality, control and clear ownership in management are essential.

4. From hype to craftsmanship – where most fail
Ørjan Segtnan Clausen was clear: Most AI initiatives stop at the pilot stage. The reason is a lack of understanding of the problem, a weak data base and the absence of a clear value definition. Among other things, he pointed to the ADDDD framework (Align, Discover, Define, Develop, Deliver) as a structure to ensure that AI initiatives go from idea to business value.

5. AI goes from tool to actor
The most exciting thing for me was the insight from Lars Alexander Jakobsen about MCP (Model Context Protocol) and the development towards A2A (Agent-to-Agent). When AI is connected directly to systems and agents interact, we are moving towards operational "digital colleagues". This will fundamentally change how we organize work and create value.

In the middle of the day, there was also a panel debate that linked the perspectives together. The discussion was about geopolitics, dependence on global technology suppliers, digital sovereignty and the need for clearer strategic choices. This is no longer an IT issue, but a managerial responsibility.

My reflection:
"Data first - always" is not a technology choice. It is a strategic choice - and a clear managerial responsibility.

What struck me the most is that many people still work with AI as a tool, while the gains only come when processes and responsibilities are redesigned.
For me, this is also a commercial shift, where AI will affect sales, customer experience and value creation in practice.

As we see the rise of MCP and A2A, we are moving towards a new operational model where AI agents not only support but perform work across systems. We are talking new architecture for how work is done!

👉 I am also actively working on this now as I consider it important to understand how this is implemented in practice, not just at the level of theoretical frameworks.

Thank you to NOVA Consulting Group for a very well-executed event - and not least nice to meet many new acquaintances and have good professional discussions throughout the day!`,
  },
  "ai-value-lab-01": {
    tittel: "We have started something that I believe more managers should do",
    teaser: "An informal community to build, share and challenge each other with AI — for real business value.",
    innhold: `We have started something that I think more leaders should do.

For me, this has become an arena where I both learn faster and get to test my own hypotheses in practice.

We are three people with one common ambition:
Creating real business value with AI.

We have established an informal collaboration we call "𝗔𝗜 𝗩𝗮𝗮𝗺 𝗗𝗮𝗮𝗮𝗮𝗮𝗮𝗮𝗮𝗮𝗼𝗮𝗮𝗮𝗮𝗮𝗮𝗶𝗮𝗮𝓁

Not just to test tools, but to actually build, share and challenge each other systematically.

We meet regularly for what we call "Shock & Shout".

Here we share concretely what we have been working on since the last time:
• AI agents, applications and websites we have developed
• Experiment across models and tools. What works, what doesn't
• Comparison of strengths and weaknesses between different AI solutions
• Insights from meetings, workshops and courses we attend, as well as input and tips for other and new subject areas and themes

But what makes this special is the depth of the discussions. We also spend time on what many skip:
• How to use data that provides competitive advantage
• Governance – how to ensure control, quality and accountability
• Frameworks such as ADDDD (Align, Discover, Define, Develop, Deliver) - and how it is used in practice
• How to go from pilot to scalable value

At the same time, we do not only work with experiments. We deal with real problems and use cases.

Our hypothesis is simple. AI does not create value in silos. It creates value when different units work together. Just as departments in businesses have to do.

What I'm left with so far is a pretty clear realization. Many work with AI on an individual level. Few manage to build structures that create value at company level.

Our approach is therefore deliberate:
👉 Combine practical construction with strategic understanding
👉 Connect AI directly to commercial use-cases
👉 Learn faster together than individually

Next step? We will build something together that has a real effect - and that can be scaled.

For me, this is at least as much about management as technology.

Management that is able to connect experimentation with direction.
Management that understands both data, governance and value creation.
Management that delivers effect and results.

We are early. We build, not just talk. In a double sense. Looking forward to the continuation Ole Mjelde and Tatiana Hanecakova!

Sky is the limit. But only for those who convert AI into value.`,
  },
  "ai-debatten-hype-vs-frykt-01": {
    tittel: "The AI ​​debate still runs in two tracks: hype vs fear",
    teaser: "When the debate locks onto \"hype\" and \"fear\", it becomes difficult to see value creation in practice. It is adoption that moves operations.",
    innhold: `But the real distinction happens elsewhere.

After following <strong>The Debate</strong> on <strong>NRK1</strong> this week, I am left with two clear reflections.

Firstly:
<strong>AI is no longer something we discuss from a distance.</strong> It is already changing how businesses operate.

The examples from, among others, the Oil Fund are clear. Nicolai Tangen showed how they have already documented significant gains. They have increased productivity by around 20 per cent and saved billions through better analysis, monitoring and decision support.

This is not experimentation, but real value creation in practice.

Secondly:
As is also highlighted in the discussion around AI in Norway, we need more perspectives. AI is not one subject, but it ranges from technology and mathematics to business, management, security and society.

If the debate is limited to who has the "right" to say something, we risk narrowing understanding and at the same time delaying necessary development. This breadth of perspectives is crucial for making better decisions and ensuring the responsible use of AI.

Nicolai Tangen was clear that businesses that do not use this risk falling behind.

👉 Those who adopt quickly get a structural advantage. This applies to both individuals and organisations.

On an individual level, we see that those who adopt AI develop faster. They work more efficiently, make better decisions and increase their own value in the labor market.

At organizational level, it is not about individual tools, but about how you work. AI must be integrated into core processes, expertise must be built broadly, and working methods must change. From pilot projects to actual operation and decision-making.

This is where the difference is created, while at the same time we must avoid two extremes. Naivety, where you uncritically throw yourself into everything. Or action paralysis, where the debate becomes more important than progress. Both parts weaken the ability to create value.

My reflection is that AI will not primarily create winners. It will clarify who is able to develop the fastest and convert technology into concrete value.

The question is not who is right in the AI ​​debate.
The real question is who manages to create real value from it.`,
  },
  "ai-dommekraft-bias-01": {
    tittel: "When AI gives advice - who do we really trust?",
    teaser: "AI doesn't remove human bias, it can amplify it. Reflections on how we interpret and use AI recommendations in commercial decisions.",
    innhold: `This week I am participating in NOVA Day. Many of the conversations there are naturally about what AI can do for businesses. It is important, but one issue that I believe receives too little attention is how people react when the systems start giving advice.

AI does not eliminate human bias, but rather can amplify it.

Part of the explanation lies in how generative AI actually works. The models do not respond because they "know". They statistically calculate what is the most likely next word based on large amounts of training data and the context they are given. This means that the models reflect patterns in the data and are influenced by how we frame the question.

But bias does not only occur in the model. It also occurs in the meeting between model and human.

Research from, among others, MIT Sloan, Harvard Business School and Stanford points to several mechanisms that can weaken decision-making quality when AI is used in practice:

<strong>Automation bias</strong>
When people attach too much importance to the recommendation from the system, because it comes from a model and is perceived as objective.

<strong>Algorithm aversion</strong>
When people lose confidence in the model after one visible error, and then reject it entirely, even though over time it may be better than gut feeling alone.

<strong>Data bias</strong>
If the data base is skewed, so will the analyses.

<strong>Confirmation bias</strong>
We like to interpret AI responses in a way that confirms what we already believe.

In practice, I see this clearly in commercial situations. An AI model can analyze sales data and suggest which customers should be prioritized, which offers should be followed up or which accounts have the greatest growth potential. The salesperson or manager can make two mistakes by either following the recommendation blindly, or ignoring it completely.

If the recommendation is followed uncritically, biases in the data or model can be reinforced. If it is rejected because it "feels wrong", you simultaneously lose the value of the pattern recognition the model can actually add.

This is where the management challenge lies.

The mature organization does not ask people to choose between technology and discretion. It builds processes where recommendations are tested, model limitations are understood, and analysis is combined with judgment. In other words, a culture is being built where people still ask questions, even when the system seems secure. It is only then that AI becomes decision support in the true sense of the word.

To me, this is one of the most interesting things about AI right now. Not just what the model can produce, but what happens to our judgment ability when the answer comes quickly, looks convincing, and is wrapped with high confidence.

In the work of building and testing my own AI models and tools, I notice this clearly. Small adjustments in data, context or instructions can produce different recommendations. It constantly reminds me that the model gives suggestions and not definitive answers. Testing is a necessity on an ongoing basis.`,
  },
  "ai-ready-virksomhet-01": {
    tittel: "When is a business AI-ready?",
    teaser: "Many invest in AI, but fewer prepare the organization. A review of the four areas that determine whether a business is equipped to extract value from technology.",
    innhold: `Many businesses say they are working with AI. Fewer have prepared the organization for what it entails.

The technology is available to everyone. The real difference lies in how the business organizes decisions, data and responsibilities around it.

McKinsey points out that many companies invest heavily in AI, but get limited effect because the organization is not equipped to use them. The problem is rarely the model. It's the structure around it.

MIT Sloan describes that many organizations start their AI work with technology. Those who succeed start with decisions. Only when you know which decisions need to be improved does it make sense to build AI solutions.

A commercial example illustrates the point: An AI model can analyze sales data and suggest which customers should be prioritized. It can rank probability of purchase, margin and next action. But if the organization has not clarified who owns the decision, which criteria apply or how the recommendation is to be used, the result is often more analysis and not better decisions.

Through the work with generative AI, I see four areas that determine whether a business is AI-ready:

<strong>1. The data base</strong>
AI enhances the quality of input. Good data leads to better analyses. Fragmented or unstructured data only makes errors faster. In many commercial organizations, key information is scattered in CRM, presentations, emails and memos. Before AI can provide value, this must be structured.

<strong>2. Decision Structure</strong>
AI works best when decisions are clearly defined. Who owns the assessment? Which criteria apply? What is the mandate? Without this, you run the risk that the model delivers recommendations that no one really owns.

<strong>3. Competence</strong>
Tools alone do not create value. Managers and employees must understand how the models work, what limitations they have and how the output is critically assessed. It's not about becoming a technologist. It's about developing AI judgement.

<strong>4. Anchoring responsibility</strong>
The more AI influences decisions, the more important governance becomes. Who is responsible if the model gives an incorrect recommendation? Who adjusts the context or stops the use? This is a management issue, not a technology issue.

Yu describes in the 5A model how the requirements for organization and competence increase when we move from access and assistants to applications, automation and agents. The more autonomy we give the systems, the more important the structure around them becomes.

Therefore, the question is not just whether a business uses AI. It is whether the organization is equipped to use it.

For businesses that want to move from AI experimentation to value creation, I assist through Marius Ottesen Consulting with strategic clarification and practical implementation in collaboration with technical specialists.

👉 In the next post, I look at how organizations build AI competence in practice, without becoming dependent on a large internal tech environment.`,
  },
  "ai-arkitektur-beslutningsstotte-01": {
    tittel: "I build AI architecture for decision support",
    teaser: "How generative AI can structure complex issues and give commercial managers a better decision-making basis through AI deconstruction.",
    innhold: `As a commercial manager, I have several times participated in strategy processes where the goal is to link ambitions to actual implementation. Such processes often involve many employees, external consultants and professional environments with different perspectives and agendas. The result can be extensive analyzes and presentations before you understand what the business needs to do differently.

The challenge is well known: the strategy is clearly formulated, but the link to operational action is far weaker. Strategy documents, KPI structures, sales processes, tender documents and regulatory requirements create large amounts of information that are demanding to analyze systematically.

I am therefore working on a method for using generative AI to structure and analyze such issues more effectively. The basic logic is simple:

<strong>Documents and data → AI deconstruction → strategic insight → decision support</strong>

AI analyzes text, structure and connections, identifies possible gaps and formulates hypotheses that give management a better starting point for assessments and decisions.

Through vibe-coding and tools such as GPT-4o, Claude, Gemini, Cursor and Streamlit, I have developed a technical foundation that makes it possible to build several types of decision-making tools on the same architecture.

<strong>From idea to tool</strong>
The same analysis model can be used in several areas within commercial management:

• <strong>Strategy and implementation</strong>
AI can analyze strategy documents against operational plans, KPI structures and sales dashboards to identify where the strategy breaks down in the transition to operations.

• <strong>Commercial excellence and sales</strong>
Dynamic battlecards can be generated by analyzing competitor information and linking this to own value propositions, so that the sales team sells commercial value rather than pure product features.

• <strong>Tenders and RFP processes</strong>
Large requirements documents can be deconstructed so that the organization quickly identifies which requirements require strategic responses.

• <strong>Governance and compliance</strong>
AI can monitor regulatory changes and connect these to internal procedures so that the business can more quickly identify what needs to be updated.

• <strong>Onboarding and capability development</strong>
The same logic can be used to structure commercial frameworks so that new employees more quickly understand how the business works with strategy, sales and performance management.

A concrete example. is the solution "The Predictive Sales Coach", where salespeople train against a dynamic virtual customer based on DISC and concrete sales phases, while the system analyzes the dialogue and provides improvement points to increase the win-rate in real customer meetings.

The common denominator is the architecture behind and how Gen. AI can analyze complex issues, identify structural gaps and provide managers with a better decision-making basis.

👉 I work on developing and applying such solutions in practice. If you are curious about how this can be used in your own business, I would be happy to have a chat.`,
  },
  "ai-dommekraft-kontekst-01": {
    tittel: "AI judgment in practice – from prompt to context",
    teaser: "Why context engineering – not just prompt engineering – determines the quality of AI responses in practice.",
    innhold: `In my work with generative AI, one thing has become clear: <strong>The quality of the answer is decided long before the model starts writing.</strong> Small adjustments in context, instructions or parameters can make a marked difference in precision and structure, whether you build your own GPTs with documents or use standard models in open work processes.

We often talk about prompt engineering. In practice, it is <strong>context engineering</strong> that determines the quality. An AI response is influenced not only by the question itself, but by system instructions, previous dialogue, documents retrieved, model selection and parameters such as temperature and top-p. Temperature controls the balance between creativity and consistency. In idea development, variety can be useful. In commercial decision-making processes it can be a risk factor.

The structuring of the prompt itself is also of great importance. A simple formula raises quality significantly: persona, context, task, format, examples and tone. The difference between unstructured and structured input is often dramatic.

The most important distinction, however, is between optimizing one interaction and designing the entire decision-making environment. Prompt engineering improves the answer here and now. Context engineering defines the framework within which the model works over time.

Hallucinations illustrate why this is critical. The model optimizes for probable text, not truth. When the context is unclear or the problem formulation imprecise, the answer may appear convincing and at the same time be wrong. In a commercial context, the consequence can be significant. A model can analyze the pipeline and suggest the next best course of action. It can weight probability and margin. But without a clearly defined strategic context, the recommendation can be technically precise and business-wise wrong.

MIT Sloan and McKinsey point to the same thing: Organizations that succeed with AI combine technology with clear human judgment and responsibility. The model can analyze patterns. It cannot understand strategic direction or context without us defining it.

AI judgment is therefore about more than mastering a tool. It is about structuring the decision-making basis, designing the information framework within which the model works, understanding the limitations and evaluating the output critically before implementation. Yu describes in the 5A model how the requirements for competence increase the closer we move towards automation and agents. McKinsey points to the same thing: The technology is available to many. The ability to integrate it into decision-making processes is what differentiates it. Strategically, it is context engineering that provides lasting competitive advantage.

For businesses that want to move from AI discussion to actual value creation, I assist through my company with both strategic clarification and practical implementation, in collaboration with technical specialists where necessary.`,
  },
  "strategi-ai-master-01": {
    tittel: "Strategy without AI is like looking backwards in the mirror while driving forward",
    teaser: "AI is no longer a \"nice to have\" — it is a strategic necessity. Reflections from the Oslo Business Forum and the decision to enroll in the master's course Generative AI for Business at BI.",
    innhold: `A few weeks ago I attended the Oslo Business Forum 2025. A consistent theme from the stage was clear: <strong>AI is no longer a "nice to have" — it is a strategic necessity.</strong> 🤖

🧠 <em>The message I particularly took with me was:</em>
• Strategy must be developed in step with technology, not afterwards.
• The businesses that manage to combine strategic thinking with new technology will be tomorrow's winners.
• AI works not only as a tool, but as a catalyst for innovation and competitiveness.

🎯 I have extensive experience with strategy, strategic management and development. Among other things, I have an Executive Master of Management from BI Norwegian Business School with specialization in strategic management and strategic communication.
At work, responsibility for strategic management, development and business growth and results has been a common thread.
AI, on the other hand, is an area in which I do not have the same background — but which I cannot afford to ignore.

That's why I visited BI's stand at OBF, and last week I had an inspiring conversation with an adviser about how I can build this competence further. <strong>The result?</strong>
👉 I have signed up for the master's course "<em>Generative AI for Business</em>" starting in February.

Not for the credits. But because I want to explore how AI can be used strategically to drive innovation, open up new business opportunities and strengthen operational efficiency. 📈
And because I sincerely believe that <strong>it is never too late to develop professionally</strong> — ambition is not just about performing more, but learning more. Those who are able to renew themselves are the strongest in tomorrow's competition. 🚀

📚 The books have already been ordered — now I'm looking forward to learning more and "jump-starting" the study, and to combining strategic experience with new technology.

What about you? Do you see AI as a strategic game-changer in your business where you actively take action — or as something you "take when it comes"? Hang on, then! 💪

📌 PS. For the record: The image is AI-generated.</em>`,
  },
  "ai-learning-google-skills-01": {
    tittel: "It is fascinating how easy it has become to acquire AI expertise through completely new and modern methods",
    teaser: "Recommendation of Google's learning universe for AI competence: Google Skills and Google Cloud YouTube series, with concrete modules to start with.",
    innhold: `It is fascinating how easy it has become to acquire AI expertise through completely new and modern methods. <strong>Google has assembled an impressive learning universe that makes it possible to build solid AI competence, regardless of technical background.</strong>

Two platforms stand out in particular:

✅ <strong>Google Skills</strong> – a complete learning platform with courses, practical lab tasks, progress tracking and certifications you can show directly on LinkedIn.

✅ The <strong>Google Cloud YouTube Series</strong> – short, educational videos that provide a solid foundation before you get down to the more practical parts.

I have now completed my first course, "<strong>Gen AI: Beyond the Chatbot</strong>", and am attaching the badge here in the mail. These are clear, academically strong courses - not a "low-level correspondence course", but comprehensive, relevant and practical learning.

The inspiration to explore this came from the sharings of Morten Johnsen which really opened my eyes to the breadth of topics and possibilities in this "AI universe". Thank you very much, Morten!

<strong>My recommendation:</strong>

These YouTube modules are an effective place to start and gave me a good framework before diving deeper into the Google Skills courses:

🎥 Introduction to Generative AI - part of AI Essentials
🎥 Introduction to Large Language Models – basic module before Vertex AI
🎥 Introduction to Responsible AI - mandatory in all races
🎥 Introduction to AI Agents - explores how intelligent agent systems build and automate actions in complex environments
🎥 Intro to Generative AI training course - clear overview of the learning course
🎥 Introduction to Vertex AI Studio - useful for the practical labs

For my part, this is also the perfect warm-up before I start the <strong>Master's program "Generative AI for Business"</strong> at BI in February. But first several AI-related courses from the Google Skills universe are due.

For those who want to explore the possibilities:
👉 https://lnkd.in/dM7WrkEe`,
  },
  "ai-ikke-intelligent-01": {
    tittel: "AI is not intelligent — we have to be",
    teaser: "AI creates value only when we understand its limitations. Reflections from the BI webinar on when AI fits and when human judgment must take over.",
    innhold: `Reflections from yesterday's BI webinar "More Than Words: How to Know How AI Can (and Can't) Help You"

Yesterday's webinar from BI with Auke Hunneman and Jan Ketil hit an important point:
<strong>AI creates great value – but only when we understand the limitations.</strong>

And I got to experience it myself, <em>the same day</em>:

I asked an AI model to create a picture of me in an office setting. The result?
It became "me"… but not me.
Something was off. The face, the expression, the form - everything was somehow almost right, but not right enough. And precisely this is the core of what many who use AI should understand and challenge:

<strong>1️⃣ AI predicts - it does not understand</strong>
LLMs (and image generators) guess the most likely outcome based on huge amounts of data. They don't know what I look like. They don't understand identity

Therefore, there is often something that looks similar, but does not match.

<strong>2️⃣ AI gives poor ROI when the problem does not fit</strong>
A distinction is made between three types of challenges:
• <strong>Problems</strong> (predictable): forecasts → AI is strong
• <strong>Secrets</strong> (hidden patterns): channel drivers → AI + expertise
• <strong>Mysteries</strong> (unpredictable): interdisciplinary campaigns → people must coordinate

To create a real picture of me?
It falls between Secret and Mystery:
AI does not have enough information → the result is uncertain → the human must evaluate

<strong>3️⃣ The Cynefin framework</strong>
<strong>Clear:</strong> Tasks with summary → automate
<strong>Complicated:</strong> Analyzable, but demanding → AI + experts
<strong>Complex:</strong> Must be tried out → experiment
<strong>Chaotic:</strong> crisis, little time → act fast
<strong>Aporetic:</strong> unclear problem → stop and ask new questions

Getting the AI ​​to "understand Marius"?
→ Aporetic + Secret: There is no facit for my face in the model

<strong>4️⃣ Intelligence is more than words - and more than pixels</strong>
AI can deliver text and images. But it cannot:
- read the room
– understand motivation
- build teams
- create culture
- recognize me in a picture
Here man is superior.

<strong>5️⃣ Trust determines the result</strong>
When people see a picture that is "supposed to be me" but doesn't look like it, they lose confidence. The same applies in organisations:
Without trust in both numbers and each other, collaboration stops - no matter how advanced the AI model is

<strong>What does this mean for managers – and for everyone who uses AI?</strong>
It is a <strong>core competence</strong> to:
• understand when AI fits
• understand when human judgment must take over
• combine data + people for real value
• challenge inconsistent AI results

<strong>If AI can't recognize my face - why should I blindly trust what it suggests?</strong>`,
  },
  "alle-snakker-ai-01": {
    tittel: "Everyone is talking about AI – but what are we really doing?",
    teaser: "Introduction to a series on what AI actually means in practice — not just as a technology, but as a management and business discipline.",
    innhold: `The past year has – like many others – been characterized by a fast pace, exciting experiences, great expectations and rapid technological changes. For my part, it has also provided room for reflection, professional deepening and new opportunities, particularly in the field of AI and strategy. This deepening takes, among other things, the framework and curriculum literature from the master's course <em>Generative AI for Business</em> at BI, combined with practical exploration of various AI models and areas of application.

<strong>This post marks the start of a series</strong> where in 2026 I will share reflections, frameworks and experiences around what AI actually means in practice – not just as technology, but as a management and business discipline.

The background is simple: AI is often referred to as either a miracle tool or as something diffuse and technical. At the same time, I find that many managers – quite naturally – reduce AI to what they see in everyday life: ChatGPT, Copilot, a bit of automation. It gives a feeling of being "in progress", but also an uncertainty about what this really means strategically.

The curriculum book "Generative AI for Business - a guide book" by Shubin Yu has been a good starting point for clearing this up. Not because it provides all the answers, but because it puts AI into a clear business and management context: value creation, decisions, organization, risk and people.

At the same time, working with AI has made me see previous experiences in a new light. Much of what we previously called IoT, sensor technology, automation and robotisation, now appear as parts of the same ecosystem - where AI acts as a powerful accelerating layer.

I hope this series can contribute to reflection, discussion - and some necessary realizations. For me, this is also an exciting journey of sharing, where I explore an area of ​​expertise that is still new to me, but which I find very inspiring to build my own expertise in. The ambition is both to learn further myself, and hopefully to contribute useful insight to others.

I am happy to have the dialogue here on LinkedIn, or over an informal coffee conversation, with others who are curious about how AI can actually create value in practice.

This will be my last post in 2025. Thank you for this year - I hope the year has provided room for both development, learning and good conversations. We will continue in 2026.`,
  },
  "ai-foles-nytt-01": {
    tittel: "AI feels new – but this is not the start of the story",
    teaser: "AI is experienced as new, but is the culmination of decades of development. Looking ahead to the framework The five A's (Access to Agents).",
    innhold: `In my last post in 2025, I asked the question: <em>Everyone is talking about AI – but what are we really doing?</em>

<strong>This post is the next step in the same series.</strong> In 2026, I will share reflections, frameworks and experiences around what AI actually means in practice - starting from the syllabus book <em>Generative AI for Business</em> by Shubin Yu, which is part of my master's study, combined with my own experiences and practical observations.

Christmas has given room for quieter days, reflection and self-study. For me, this period has been an opportunity to further immerse myself in AI and strategy - both through the subject matter in the study and practical exploration of various AI models and areas of use.

AI is experienced as new for many, but is in reality the culmination of several decades of technological development. Already in the 1950s and 1960s, the term artificial intelligence was introduced. Since then, we have been through several waves - from expert systems and neural networks, via machine learning, to deep learning and today's generative models.

The breakthrough around 2020–2023 therefore did not mark the start of AI, but a clear shift in availability and application. Large language models made the technology practical, scalable and relevant in a business context.

At the same time, I feel that many organizations are falling apart - something the book also addresses. We test the tools and see quick benefits, but often lack the strategic understanding: What is really new now, and what is required to create lasting value?

In this series, I will use the book as a structured starting point and extract the main lines further along some clear tracks. Among other things, I will take a closer look at:
• the transition from simple AI use to strategic transformation
• the importance of data, context and own sources of information
• what is required to implement AI in practice – from exploration to scaling
• how AI affects management, people and commercial processes
• as well as ethics, governance and responsibility

Where it is natural, I will also connect this to my own experiences from previous roles - particularly within IoT, automation, robotization and data-driven ecosystems - which I see today more clearly in the context of AI.

<strong>The next post comes on Wednesday</strong>, where I go into more detail about a central framework from the book: <strong>The five A's (from Access to Agents)</strong> - and why most organizations stop earlier than they think.

I hope more people will share their own experiences, perspectives and questions along the way - either here in the comments section, in direct dialogue, or over an informal cup of coffee. This is a field where we are all still learning. Join me on my little "journey".`,
  },
  "access-til-agents-01": {
    tittel: "From Access to Agents - why many stop early",
    teaser: "The framework The five A's: how AI is being used in businesses today, and why many stop earlier than they think.",
    innhold: `In the previous post, I wrote about how AI is often perceived as new, even though it is in reality based on several decades of technological development. This post is part of the AI ​​series I'm sharing this winter, where I explore what AI actually means in practice for management, organizations and value creation.

Here I take a closer look at <em>how AI is being used in many businesses today</em>, and why many stop earlier than they themselves think.

In the curriculum book <em>Generative AI for Business</em>, Shubin Yu introduces a framework that I find particularly useful for clearing this up: <strong>The five A's for applied generative AI in working life</strong>. The framework describes a spectrum of maturity levels – from simple use of AI to more integrated and autonomous systems.

Simplified, the levels can be understood as follows, with examples many will recognize in:

<strong>Access</strong>
Using general AI tools such as ChatGPT, Gemini or Copilot to write, summarize and analyze. The value is often quick and visible, but primarily individual.

<strong>Assistants</strong>
More customized assistants with role or business context, for example a sales or HR assistant who knows internal data and working methods.

<strong>Application</strong>
AI is built into specific solutions for specific tasks, such as decision support, analysis or customer dialogue in limited systems.

<strong>Automation</strong>
AI is connected to workflows across systems, so that processes are connected from start to finish - with clear efficiency and scaling gains.

<strong>Agents</strong>
More autonomous systems that can plan, prioritize and carry out tasks within defined frameworks, with clear responsibility and control.

The decisive point is not the levels themselves, but the transition between them. And this is precisely where many people stop.

In many social media AI environments, I see a strong focus on "learning many models" or mastering as many AI tools as possible. It can be useful at the Access level, but provides limited value further up the pyramid. The higher one moves, the less it is about tools - and the more about structure, integration, management and responsibility.

When AI is connected to data, processes and decisions, one goes from individual efficiency gains to organizational core competence. It is only then that AI becomes truly strategic.

Therefore, AI and strategic use and implementation are also to a small extent an IT project. It is a managerial responsibility - in line with other strategic choices related to organisation, risk and value creation.`,
  },
  "fra-verktoy-til-system-01": {
    tittel: "From tool to system – APIs, integration and manager selection",
    teaser: "The value of AI only occurs when it is connected to systems and processes via integration — not as a stand-alone tool. APIs and manager selection.",
    innhold: `In the previous post in this AI series, I wrote about <em>The five A's</em> and why many organizations stop using AI earlier than they think. This post builds on the same framework, and takes a closer look at what distinguishes simple AI use from more mature and integrated use.

A term many have heard of, but few put into a strategic context, is <strong>API - Application Programming Interface</strong>. In the curriculum book <em>Generative AI for Business</em>, an API is described simply as a bridge that allows systems to talk to each other. It sounds technical, but the consequences are primarily organizational.

As long as AI is used as a stand-alone tool, value creation occurs mainly at the individual level. You use ChatGPT, Copilot or similar, experience quick benefits and get a feeling of being "up and running". However, the figures show a clear paradox: Millions use generative AI, while only a small proportion of businesses have integrated the technology into their core processes. At the same time, studies estimate that around 95% of AI pilots have not produced a measurable financial gain, and can be interpreted as AI being overhyped. I think that is a fallacy.

This pattern is well documented in analyzes from, among others, MIT, Gartner and Forrester: AI only creates value when it moves from experiments to operations. A lack of return is rarely about weak technology, but about the organization not being equipped to use it. Blue. Itera points out that many organizations stop at <strong>Access or Assistants level</strong>.

Only when AI is connected via APIs to the company's systems, data and processes does a real shift take place - from <em>using AI</em> to <em>building with AI</em>. From the <strong>Application level upwards</strong> this is absolutely crucial. Without integrations, there will be no real automation, and no scalable value either.

When I look back on my experiences with IoT, sensor technology, automation and robotics, this is very recognizable. The value was never in the technology in isolation, but in how data was connected to systems, decisions and work processes.

In an age where technology works, scales and becomes increasingly affordable, it is not the tools that separate businesses from each other, but the ability to set good priorities, take ownership of decisions and translate AI into lasting value creation. This is where the difference between <strong>AI AWARE</strong> and <strong>AI READY</strong> becomes clear.`,
  },
  "fra-pilot-til-skalering-01": {
    tittel: "From pilot to scaling – why so many AI initiatives stall",
    teaser: "Why so few AI initiatives scale even when the technology works. About ownership, process change and governance.",
    innhold: `In recent posts, I have written about how many organizations adopt AI, but stop earlier than they themselves think. Today I want to go one level deeper - to the question many managers actually have:

<strong>Why do so few AI initiatives scale, even when the technology works?</strong>

Several analyzes point in the same direction: AI is in use everywhere, but to a limited extent integrated into companies' core processes. The effect is often real, but fragmented and difficult to see as a whole (e.g. MIT, Gartner).

This is not because AI "doesn't work".
That's because the organization is often not equipped for scaling.

Based on both research and practice, I see some recurring reasons why pilots stop:

• <strong>Unclear ownership</strong> – many AI initiatives lack clear accountability when moving from pilot to operation (Gartner)
• <strong>Lack of process change</strong> – new technology is added to old ways of working, without changing how the work is actually carried out (MIT Sloan)
• <strong>Weak decision-making mandate</strong> – AI provides insight, but the decision-making flow remains unchanged (Forrester)
• <strong>Immature governance</strong> – responsibility, risk and quality control are not clarified before solutions are scaled (Shubin Yu)
• <strong>Data base without context</strong> – lots of data, but too little connection to actual decisions and business goals (Gartner, The Economist)

<strong>A good starting point is to choose a concrete process, a clear decision and a responsible owner - and build from there.</strong>

We often see the result of a lack of scaling now - AI helps individuals, but does not change how the business actually works.

And here is an important point:
Agents and more autonomous solutions do not come first. Scaling must come first.

Many people talk about agents. Few have scaled a simple AI solution in a robust way.

Scaling is therefore less about technology – and more about management:
to make conscious choices about which processes to change, which decisions to support, and which responsibility the organization is willing to take (Yu; Gartner).

This is where AI goes from experiment to core strategic competence.`,
  },
  "praktisk-oppskrift-skalering-01": {
    tittel: "From pilot to scaling – a practical recipe for managers",
    teaser: "Five things businesses that succeed in AI scaling do right: ownership, process change, decision linking, governance and data.",
    innhold: `In the previous post, I wrote about why so many AI initiatives stop at the pilot stage, even when the technology works. In this post I will be more specific:
What actually needs to be in place for AI to go from promising experiments to real, scalable value creation?

Based on both research (e.g. MIT, Gartner, Forrester, Yu, The Economist) and experience from practice, I see that businesses that succeed in scaling often do five things right:

<strong>1. They clearly define ownership</strong>
AI cannot be "owned by IT alone". It must be clear who is responsible for profit, risk and further development when the solution goes from pilot to operation.

<strong>2. They change processes – not just tool</strong>s
Scaling only happens when workflow actually changes. Superimposing AI on top of old forms of work provides local efficiency, but rarely a structural effect.

<strong>3. They connect AI to decision</strong>s
AI that only produces insights but is not integrated into decision-making flows quickly stalls. The most mature use AI as support before decisions are made, not just as a post-check.

<strong>4. They have governance before they scale</strong>
Questions about responsibility, quality, data, privacy and risk must be clarified early. Lack of governance is one of the most common reasons why pilots are never taken on.

<strong>5. They work systematically with data and context</strong>
Data without business context provides limited value. Scaling requires data to be relevant to actual decisions and goals – not just technically available.

This picture is also supported by recent findings from <em>Socioeconomic Analysis</em> (2026), which show that the majority of Norwegian businesses still use AI as a single tool, while the gains only become apparent in those that have integrated AI into core processes. The report also points out that wider and more mature use of AI produces clearly greater productivity and income effects.

An important point is therefore this:
Scaling is far less about advanced technology and more about management.

Many are now talking about agents and autonomous solutions. But the reality is that most organizations have yet to robustly scale a simple AI solution. Without ownership, process change and management, more autonomy becomes a risk, not a gain.`,
  },
  "data-kontekst-rag-01": {
    tittel: "Data, context and RAG – why AI without context is not intelligence",
    teaser: "AI without context is not intelligence. Why RAG and the company's own data are prerequisites for mature AI use.",
    innhold: `In recent posts, I have written about why many AI initiatives stop in pilot, even when the technology works. Today I want to zoom in on a crucial but often underestimated point:

👉 AI is not intelligent without context.

Generative models are strong in language, patterns and probability. What they do not have is an understanding of the business's actual situation, which data is relevant for this particular decision - or responsibility for the consequences of their recommendations.

This is where <strong>RAG (Retrieval-Augmented Generation)</strong> comes in. Not as a technical buzzword, but as a principle for mature AI use.

In practice, RAG is about connecting AI to the company's own data, giving the model relevant context in real time and ensuring that answers are based on actual sources – not general assumptions.

This is also supported by analyzes from, among others, McKinsey, which point out that generative AI only provides reliable decision support when models are connected to the business's own data and context. Without such anchoring, AI will be good at language - but weak at judgment and relevance.

Many people recognize this from using Copilot or ChatGPT:
Without access to the right documents, decision-making bases or internal guidelines, the answers often become generic. When, on the other hand, AI gains access to strategy documents, process descriptions or customer data, a clear shift occurs – from textual help to actual decision support.

We see the same in management meetings. Without context, AI can make persuasive arguments. With RAG, it can refer to actual figures, previous decisions and relevant frameworks - and thus sharpen the decision instead of simply streamlining the preparatory work.

This is also why <strong>agents without context are a risk</strong>. They can be fast and convincing, but at the same time wrong, inconsistent or poorly grounded in the reality of the business. Autonomous systems without ownership do not become intelligent - they only become effective on the wrong premises.

Before more autonomous solutions are even realistic, the business must have control over which data is used and why, how insights are linked to decision flow, and who owns the outcome when something goes wrong. This is not primarily a technical issue – it is a leadership and management issue.

AI only becomes strategic when it not only provides answers, but contributes to <strong>better decisions</strong>. It requires data with meaning, context with ownership - and managers who understand the difference.`,
  },
  "rag-innsikt-handling-01": {
    tittel: "From insight to action – RAG as a bridge between AI and core processes",
    teaser: "RAG as a bridge between AI and core processes: how businesses move from testing to real value creation. Example from sales.",
    innhold: `In the previous post, I wrote about why AI without context is not intelligence. Now I want to go one step further:
What does this mean in practice for businesses that want to move from testing to actual value creation?

Many AI initiatives stop because the insight is left on the sidelines of operations. AI provides good answers, but does not influence how decisions are actually made. RAG is one of the most important measures to break this pattern.

<strong>Take sales as an example.</strong>
Without RAG, AI often answers in general terms: advice on good meeting management, suggestions for e-mails or general sales advice. It is useful - but detached from the customer's actual situation.

With RAG, on the other hand, AI can retrieve relevant context in real time: customer history from CRM such as history, purchases and pipeline, existing agreements, price level, previous offers and hit rate, service and support dialogue, as well as strategic guidelines such as internal frameworks for discounting and prioritization. When a salesperson asks "what should I focus on when meeting this customer?", AI can answer based on its own data and real assumptions - not general sales advice. Examples could be that AI responds that the customer has had increased use of service A in the last 6 months, or that the customer may need solution B. That is the difference between text support and actual decision support in commercial processes.

This is where many pilots fail. The technology works, but the AI ​​never connects to real decision points. However, when AI is built into workflow and decision-making processes, how the organization actually works changes.

This corresponds well with analyzes from, among others, McKinsey, Gartner and MIT Sloan, who point out that value creation only occurs when AI is integrated into core processes and decision-making flows – not when it is used as a side tool. Societal Economic Analysis also shows that Norwegian businesses that are most successful with AI are those that have built the technology into daily operations and clear ownership.

An important point in both research and practice is that value creation does not occur when AI is put into use - but when it is <strong>taken into account</strong>. RAG is therefore not just a data solution, but a way to clarify ownership, frameworks and decision logic.

This is also why many talk about agents before they are ready for them. Without context, governance and integration, autonomy becomes just speed – not quality.

Succeeding with AI at this level is less about more tools and more about clear choices:
• Which processes are to be supported?
• Which decisions should be improved?
• Who owns the consequences?`,
  },
  "ai-agenter-hva-01": {
    tittel: "AI agents – what they are (and what they are not)",
    teaser: "What AI agents are — and what they are not. Clearing up the term and why it is a management topic, not just IT.",
    innhold: `In recent posts, I have written about why many AI initiatives stop before they create real value - and why data, context and RAG are prerequisites for mature AI use. Now it's time to clear up a term that keeps popping up in the AI ​​debate: <strong>AI agents</strong>.

Let's start precisely. In <em>Generative AI for Business</em>, Shubin Yu describes agents as systems that not only respond to requests, but can plan, execute and follow up tasks over time - within defined frameworks. An agent has a clear goal, access to relevant data and tools, ability to make sequential decisions, and clear boundaries for responsibility and control. It also says a lot about what an agent is not: it is not just ChatGPT in a new wrapper, it is not automation without context, and it is not "autonomous" without governance. Agents are workflows with intelligence – not magic.

A commercial example that many will recognize is sales. Without agents, salespeople use AI to write emails, summarize meetings and get suggestions for offer texts. Useful, yes – but still individual and fragmented. With an agent, the picture can look completely different. A sales agent can follow the entire pipeline automatically, analyze CRM data, previous deals and customer behaviour, suggest the next best course of action per customer, notify when risk in a deal increases and prepare management decisions before forecast meetings. Here we have moved from AI as a tool to AI as operational support in a core process. The value is not in the text, but in the decisions that are improved.

That is also why this is primarily a <strong>leadership theme</strong>, not an IT project. Most organizations are not ready for agents, even if the technology exists. McKinsey describes in 2026 how they themselves use tens of thousands of AI agents internally, with an ambition that each consultant should have at least one agent to support the work. Not because the agents are "smart", but because the processes are clear, the ownership is defined and the decision-making space is clarified. Agents require maturity in governance, not just maturity in technology.

There is also an important notice to managers here. The more autonomous AI becomes, the more important the answers to some fundamental questions become: Which decisions can be delegated – and which cannot? Who owns the consequences when something goes wrong? And how do we stop an agent – ​​and when? Agents reinforce the organization as it is. If the structure is unclear, the ambiguity is amplified.`,
  },
  "ai-agenter-feil-01": {
    tittel: "AI agents - why many go wrong when they want to become more autonomous",
    teaser: "Why many go wrong chasing autonomy: agents are about structure and responsibility, not just “turn on” autonomy.",
    innhold: `I see a clear pattern in AI conversations. AI provides good answers, analyzes and demos, but the decisions are still made as before. When the gap between insight and action becomes too large, one term almost always appears: <strong>agents</strong>.

They are often referred to as the next natural step - an upgrade you "turn on" when you are tired of manual processes. This is where many go wrong.

In the previous post, I wrote about what AI agents actually are. Now it is important to clear up common misunderstandings. The biggest mistake is to think that agents are primarily about autonomy. In practice, they are more about structure, responsibility and interaction in the organisation.

In <em>Generative AI for Business</em>, Shubin Yu describes agents as systems that can plan, act and follow up tasks over time, within clear frameworks. It requires clear goals, a good data base, room for decision-making and clarified ownership. Without this, there is no autonomy – just automated noise.

Typical mistakes are that agents are introduced before processes are clear, autonomy is given without a mandate, responsibility is unclear when something goes wrong, and that the agent is not connected to real workflow. The result is often impressive demos, but uncertainty in operation.

Let's take a commercial example:

Many sales organizations today talk about "AI agents in the pipeline". Without agent logic, AI is used to write emails, summarize meetings and suggest offer texts. Useful, but still individual and fragmented.

With an actual agent, a clear shift occurs. A sales agent can monitor the entire pipeline, analyze CRM data, historical deals and customer behavior, warn of increased risk, suggest the next best course of action and prepare decisions before forecast meetings. The value is not in the text, but in better decisions and timing.

This is why many organizations are not ready for agents – even though the technology exists. Agents assume that you have decided which decisions can be delegated, which frameworks apply, and who owns the consequences.

McKinsey has described how it uses a large number of internal AI agents to support consultants. Not because the agents are "self-thinking", but because processes, data and responsibilities are clarified. The value comes from governance, not autonomy alone. This is also supported by research from MIT Sloan, which shows that AI has the greatest effect when it is built into decision-making and work processes.

Agents reinforce the organization. If the structure is unclear, the ambiguity is amplified. If responsibility is diffused, the risk - not the value - increases. Therefore, this is a management topic, not an IT project.`,
  },
  "ai-agenter-praksis-01": {
    tittel: "AI agents in practice – when, where and how they actually provide value",
    teaser: "When do AI agents actually provide value — and when should you not? Practical criteria for managers.",
    innhold: `Several managers notice a clear dilemma.

Either you see the potential in AI agents, or you are unsure where it is safe to release them. The result is often either excessive caution – or too rapid autonomy.

Both parts are risky.

In my last two AI posts, I have cleared up what agents are and why many go wrong when they chase autonomy too soon. Then the most important question remains:

<strong>When does it actually make sense to use AI agents - and when should you not?</strong>

In practice, agents only provide real value when three conditions are in place at the same time: clear frameworks, clarified responsibilities and clearly defined decision points. Without this, autonomy becomes just pace – without governance.

Some patterns repeat themselves where agents actually work well:

• <strong>Decision-making processes with many signals</strong>
For example, risk assessment, portfolio management, capacity planning or forecast work. Here, agents can monitor developments over time, connect data from multiple sources and notify when thresholds are breached – without making the final decision.

• <strong>Follow-up where the consequences are known and reversible</strong>
Agents are well suited to propose actions, prioritize cases, follow up deviations and escalate when something deviates from the norm. They are not suitable where the consequences are irreversible and the decision-making responsibility is unclear.

• <strong>People clearly "in the loop"</strong>
The best solutions use agents as cognitive enhancers. The person owns the decision, the agent structures, warns and makes recommendations within defined frameworks.

At the same time, there are many areas where agents should not be used, even if the technology allows it. Processes with political trade-offs, unclear goals, high regulatory risk or weak ownership are not improved by autonomy, but rather more vulnerable.

A trait I see in several industries now is that many organizations suffer more from a culture of caution than from technological limitations. One analyzes for a long time, and waits for "the right moment". The result is often stagnation.

Agents should therefore not be introduced widely - but tested in a controlled manner where:
• the value is clear
• the risk is manageable
• responsibilities are clarified in advance

Agents are powerful tools that mark a shift in what is being moved from people to systems – from efficiency to decisions. Only when agents are used at the Decisions level of the EDGE framework (Efficiency, Decisions, Growth, Empowerment) do they become a strategic competitive advantage – and a clear leadership responsibility.`,
  },
  "ai-governance-01": {
    tittel: "When AI gains more power – what should managers actually manage?",
    teaser: "When AI affects decisions: who is responsible? EDGE, 5A and governance as management's response to increased autonomy.",
    innhold: `Several managers I speak to describe the same dilemma:
AI is helping us more and more – but we're not quite sure where the limit is.

As AI moves from support to decision influence, a new managerial responsibility arises. Not technically. Not legal. But in terms of governance.

In the last posts in my AI series, and through experiences from my master's course at BI, I have written about AI agents. The common denominator is clear: the more decision-making power is moved from people to systems, the more important responsibility and control become.

In this post, I stop and zoom out. This becomes more of a framework and theory, because this is where many organizations lose track as AI moves towards decision influence.

The reasoning is largely based on <em>Generative AI for Business</em> by Shubin Yu, combined with patterns I see in managers in this transition.

As AI begins to influence decisions, one question always pops up in the executive room:

<strong>Who is really responsible when AI gets more power?</strong>

This is where <strong>governance</strong> comes in. Not as bureaucracy, but as management's response to increased autonomy. When AI affects decisions, the nature of managerial responsibility also changes: the question is not whether AI creates value, but where and within what framework.

To understand this, it is useful to clear up two frameworks that are often mixed up:

The <strong>EDGE framework</strong> describes where the value from AI is extracted:
• <strong>Efficiency</strong> – make existing work faster and cheaper
• <strong>Decisions</strong> – improve decision quality and timing
• <strong>Growth</strong> – develop new products, services and business models
• <strong>Empowerment</strong> – empowering people in complex roles

In parallel, the <strong>5A model</strong> (Access → Assistants → Applications → Automation → Agents) shows the maturity journey in how AI is used. The higher up one moves, the more responsibility is shifted from individuals to systems.

Governance is not part of EDGE, but a superstructure that becomes crucial when AI is used at the Decisions level in EDGE and when the organization moves towards Automation and Agents in the 5A model. Without governance, pace and autonomy increase faster than responsibility and control.

In practice, AI governance is about basic management choices:
• Which decisions can AI influence – and which can it not?
• Who owns the consequences when recommendations are used?
• How do we stop, adjust or override the systems when reality changes?

In other words:
EDGE explains where the value lies.
5A explains the journey to maturity.
Governance determines whether this becomes a competitive advantage - or a risk.`,
  },
  "ki-norsk-virksomheter-01": {
    tittel: "AI in Norwegian businesses - from testing to value creation",
    teaser: "Over half of Norwegian businesses use AI — but few have integrated it into core processes. The NHO report's message.",
    innhold: `Yesterday I participated online in a conference under the auspices of <strong>NHO</strong>, where <strong>Social Economic Analysis</strong> presented its recent report on the use of artificial intelligence in Norwegian business.

My main impression is that AI/CI has now seriously become part of everyday life in many businesses. Over half use AI today, a sharp increase in just the last two years. At the same time, it is clear that the use is still largely about testing, support tools and individual efficiency - not about real change in how businesses are run and create value.

The report shows significant potential: AI can free up around 15 percent of working time in the economy. That in itself is startling, especially in light of the labor shortage Norway is facing. But the point that was clearly emphasized is that these gains do not come by themselves. They only arise when AI is integrated into core processes, clearly prioritized by management and directly linked to business goals.

Only around one in five businesses are considered real "frontrunners". It is these who see the greatest productivity and income effects. For the rest, the barriers are less about technology and more about a lack of insight, competence and direction. The question is no longer whether to use AI, but how and why.

At the same time, it is becoming increasingly clear that the battle for these frontrunners – both businesses and people – is underway, and that the ability to combine technological understanding, business and the responsible use of AI is becoming an increasingly important competitive advantage.

My most important takeaway is once again that AI is to a small extent an IT project. It is a management and change project. And precisely here the report hits home with much of what I myself am concerned with: value creation does not happen through tools alone, but through clear choices, priorities and the way we organize our work.

If AI is to become a real competitive advantage, we must move from curious exploration to conscious integration.`,
  },
  "ai-governance-i-praksis-01": {
    tittel: "AI governance in practice – five management measures that determine where the power lies",
    teaser: "Five management measures that determine where the power lies when AI affects customers, discounts and priorities.",
    innhold: `Most management groups have control over the budget, margins and forecast. Nevertheless, I see that many people lose track when AI begins to influence which customers are prioritized, which discounts are recommended and which opportunities are assessed as risks. The challenge rarely lies in the technology, but in the fact that decision-making power is shifted without it being clearly defined where the power actually lies.

Imagine a commercial organization that introduces an AI agent into the sales process. It analyzes CRM data, historical deals and customer behavior and makes recommendations on the next best course of action. The precision increases, the priorities become sharper and the forecast more accurate.

The question is not just who makes the decision. The question is who has power over the decision when the recommendation affects strategic direction and profitability.

There is no distinction between businesses that use AI and those that do not. It is between those who have defined their decision-making space - and thus the power structure - and those who allow it to develop implicitly.

<strong>Five conditions are decisive:</strong>

<strong>1. The decision room must be clarified before the technology is put into use.</strong>
Which decisions should be influenced and which should remain human? Without an explicit clarification, the shift in power happens gradually and without clear anchoring.

<strong>2. "Human in the loop" must involve a real mandate.</strong>
Formal approval is not enough. Someone must have the authority to override and be responsible if the recommendation is followed.

<strong>3. Traceability is a management tool.</strong>
When the board asks about prioritization, the answer must be concrete: which data, which thresholds, which criteria. Explainability is part of the company's management.

<strong>4. There must be clear adjustment and stopping points.</strong>
The market, regulation and strategy are changing rapidly. Autonomous systems without control mechanisms create vulnerability.

<strong>5. Ownership must be unambiguous.</strong>
When something goes wrong, it must be clear where the responsibility lies. IT cannot own business decisions, and sales cannot opt ​​out of the model's recommendations. The management group must define the framework.

<strong>AI governance is fundamentally about classic management:</strong> defining responsibility, mandate and control before complexity increases.

This is not about slowing down development, but about ensuring that pace and autonomy do not run away from responsibility and legitimacy. AI does not become risky because it is intelligent. It becomes risky when the organization has not made conscious choices about how decision-making power is to be managed.`,
  },
  "ai-kompetanse-2030-01": {
    tittel: "AI is not the threat in 2030. The skills gap is.",
    teaser: "Competitiveness in 2030 will be determined by competence — not by AI as a threat. Perspectives from the WEF, McKinsey and OECD.",
    innhold: `The AI ​​debate is often characterized by pace, stock market movements and uncertainty. For me, the question is more which skills will actually determine competitiveness in the future?

The diagram I am attaching visualizes this clearly. The <em>horizontal</em> axis shows the proportion of employers who today consider a skill a core competence (2025). The <em>vertical</em> axis shows the proportion of employers who expect this skill to increase in importance towards 2030.

At the top right, where both today's importance and expected growth are high, we find AI and big data. Close by are technological understanding, analytical thinking, creative problem solving, resilience, learning ability and leadership.

The most interesting thing is not the individual points. That's the big picture!

The core competence of the future is not just technical. It is an integration of technology, cognitive strength and relational capacity. The ability to understand systems, ask better questions, interpret data, make decisions under uncertainty and lead people through change.

This picture is also supported by analyzes from, among others, World Economic Forum, McKinsey and OECD: Technological understanding increases in value, but so does analytical judgement, creativity and the ability to continuously learn. This applies on two levels:

<strong>Individual level:</strong>
We cannot outsource our own development. Understanding how AI affects decision-making processes, balance of power and value creation is becoming basic competence, regardless of role. For me, this means investing systematically in the right skills now, not when the market demands it.

<strong>Company level:</strong>
AI is not something you "take into use" and be done with. It is a capacity that must be built, through strategy, management, data foundation, structure and management. The gains accrue to those who connect technology with business understanding and execution ability.

Historically, technological shifts have not rewarded those who tested the most, but those who prepared the best. Those who understood what the change meant for the business model, competence needs, organization and decision-making processes - and acted accordingly.

Electrification, digitization and the internet did not create value by themselves. The value arose in businesses that built capacity before the change forced them to do so.

Thus, AI will not automatically provide a competitive advantage. It will reinforce the differences between those who build competence in a structured way and those who postpone it.

That's why I'm looking forward to Monday's meeting at my Exec. Master in Generative AI for Business study. For me, it's about strengthening the theoretical foundation, understanding the frameworks more deeply and linking this even more clearly to strategy and commercial value creation.

At the same time, I now assist companies in AI and digital transformation - at the intersection between strategy, management and implementation. If you would like to discuss how this can be structured in your business, I would be happy to have a chat. The link to my consulting page can be found in the first comment field.`,
  },
  "bi-master-oppstart-01": {
    tittel: "Back at BI - and looking for a business to build AI value with",
    teaser: "Back at BI: the master's course Generative AI for Business and the search for a business to build an AI app and implementation plan with.",
    innhold: `Back at BI - and looking for a business to build AI value with (and an app you get to vote on).

11 years ago I completed the Exec. Master of Management at BI School of Economics, with specialization in strategy and communication. Now I'm back on the master's course <em>Generative AI for Business</em>, led by professor and AI expert Shubin Yu.

This is not a course where we only discuss theory. We will build AI in practice, including the development of a working application and a strategic implementation plan for generative AI.

We have our first physical meeting this week, but I've already spent the last few months on curriculum, tool testing, hands-on projects (yes, it's coded) and sparring with both technical and commercial environments. The ambition is to connect technology to concrete business value and execution power.

This is closely related to what I now spend time on. to bridge the gap between management and AI technology. I want to help businesses turn technological opportunities into commercial value, without the need for a large internal tech team. Together with several technical experts, I deliver consultancy and implementation based on business understanding and management experience.

As part of the course, I will build an AI app. I have outlined three self-developed concepts that address concrete challenges in the business world, and now need input:

1️⃣ <strong>The “North Star” – AI Strategy Alignment Engine</strong><br />
Strategies often die in documents. The app allows the business to upload the strategy, and AI breaks it down into concrete, measurable OKRs for departments. It ensures operational anchoring and common direction.

2️⃣ <strong>The “Predictive Sales Coach”</strong><br />
An always-on AI trainer for sales teams. Salespeople can simulate demanding customer meetings against a tailored persona, for example a skeptical CFO, and get concrete feedback on structure, argumentation and handling of objections. The aim is reduced time-to-competence and increased win-rate.

3️⃣ <strong>The “Churn Sentinel” – Revenue Retention</strong><br />
The app analyzes customer dialogue and CRM log to uncover early signals of churn risk. It provides a risk assessment with explanation and suggested measures before the income disappears.

Which one would you like to see me build – 1, 2 or 3?

In addition, I will carry out a larger strategic project assignment. I want to connect this to a real business.

Does your business have a process that can be optimized with generative AI, but lacks the capacity to explore it? Then I can build the project assignment around your case and deliver a concrete implementation plan with priorities, benefit assessments, risk analysis and roadmap.

Feel free to contact us via DM if this is relevant.`,
  },
  "predictive-sales-coach-01": {
    tittel: "I decided to build – not just think about AI",
    teaser: "From analysis to construction: reflections from the BI course and the prototype The Predictive Sales Coach.",
    innhold: `The week on the master's course <em>Generative AI for Business</em> at BI has been particularly interesting and educational. What makes this relevant is not just the frameworks, but the practical work. We have worked in the Google ecosystem with Gemini, Google AI Studio and Workspace integrations, tested model selection, structured prompt architecture and evaluated output against concrete business cases. When you have to manage the context, parameters and data base yourself, you get a completely different understanding of precision and limitations.

At the same time, I have spent a lot of time testing and exploring AI tools in practice. Within writing and analysis, there are clear differences between solutions such as Claude, ChatGPT and Perplexity when it comes to understanding context and structured reasoning. On the development side, tools such as Cursor, Replit, Lovable and AI Studio have made it possible to go from idea to working prototype quickly, through AI-assisted coding, model testing and efficient workflow. Within knowledge structuring, NotebookLM and local LLM solutions have shown how crucial context and data quality are.

The point is not the tools themselves, but to understand what they actually can and cannot do, and how they can be linked to value creation.

The WEF points out in the <em>Future of Jobs</em> report that analytical thinking, creative problem solving and technological understanding are among the most important skills up to 2030, while companies report a significant skills gap. The data shows that the effect of generative AI is not linear, but divergent: the difference between adopters and laggards increases over time. In other words, the skills gap is escalating, not static.

The work this week has already resulted in further development of an earlier framework into a concrete application: <strong>The Predictive Sales Coach</strong>. A solution where salespeople can train against a dynamic, virtual customer based on DISC psychology and concrete sales phases, while the system analyzes the dialogue objectively and provides precise points for improvement. The main goal is to train for an increased win-rate through structured and targeted training before you meet the customer.

Before the course, I also launched my own website (link in the first comment field). Overall, I feel that I have taken a clear step forward, from analysis to actual construction. AI is fundamentally not about technology alone, but about management, prioritization and the ability to connect insight to execution.

If you are curious about the app solution, or want to discuss the practical application of AI in your commercial business, I would be happy to have a chat. The days are also used for meetings with exciting resource persons and professional environments within AI, technology and commercial development - which both provides perspective and new ideas for further projects.

The motivation is great - the inspiration is greater!`,
  },
  "ai-etikk-norden-01": {
    tittel: "AI, power, ethics and legitimacy – what does Nordic AI leadership require?",
    teaser: "What does Nordic AI leadership require? About power, ethics, legitimacy and responsible governance.",
    innhold: `In the previous post in my AI series, I wrote about the controls that determine where the power lies when AI influences decisions. The next level is about ethics. When decision-making power is shifted from people to systems, not only a governance issue arises, but also a legitimacy issue.

Who is perceived as responsible when an algorithm prioritizes one customer over another? Who explains why a risk model gives different results? What happens when a dynamic pricing model differentiates prices based on willingness to pay - and the margin increases, but the experience of fairness weakens? What happens to the trust if the decision is effective, but is perceived as unreasonable?

Ethics in AI management is not primarily about regulations, but about how power is exercised and perceived. Here we see clear regional differences.

In the US, speed, scaling and market power are rewarded. Innovation is rolled out quickly, and corrections often take place afterwards. In parts of Asia, high technological progress is combined with strong central management, where direction and responsibility are defined from above.

In the Nordic countries, we stand in a different tradition. High institutional trust (OECD, World Values ​​Survey) and strong employee rights mean that legitimacy cannot be taken for granted. EU regulation, including the AI ​​Act, reinforces the requirements for accountability and explainability. Decision-making systems must withstand legal and social testing.

The debate surrounding the Norwegian Oil Fund's AI investment illustrates this field of tension. Ambitions to boost productivity and save billions are understandable, but raise questions about systemic risk, loss of institutional competence and "alpha decay" when many people use similar models. The question is not whether AI should be used, but whether the pace is accompanied by sufficient risk assessment and ethical grounding.

It can be experienced as a pace handicap, but also as a competitive advantage. Businesses that combine technological progress with ethical grounding will stand stronger over time. Without legitimacy, trust is weakened, and thus room for action and competitiveness.

AI management is therefore not only about governance, but about the responsible exercise of power. It is not just about what the systems can do, but about what they should do and how it is explained.

The real test of maturity is not how advanced the model is, but whether the organization can withstand the consequences of the decisions it influences, even when they are challenged.

The next step in the series is about the manager's judgement. When AI becomes part of the decision-making basis, it is no longer enough to understand the governance structures. Managers must understand how models respond to context, how hallucinations occur, and how recommendations should be critically assessed.

AI judgment is not a niche technical skill. It is a leadership skill.`,
  }
};

export const aiGovernance = aiGovernanceRaw.map((innlegg) => ({
  ...innlegg,
  tittel: localize(
    normalizeDisplayText(innlegg.tittel),
    normalizeDisplayText(aiGovernanceEn[innlegg.id]?.tittel ?? innlegg.tittel)
  ),
  teaser: localize(
    normaliserKortTeaser(normalizeDisplayText(innlegg.teaser)),
    normaliserKortTeaser(normalizeDisplayText(aiGovernanceEn[innlegg.id].teaser))
  ),
  innhold: localize(innlegg.innhold, aiGovernanceEn[innlegg.id].innhold),
}));
