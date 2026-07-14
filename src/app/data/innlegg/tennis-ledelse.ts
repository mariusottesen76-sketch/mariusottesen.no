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

const tennisLedelseRaw = [
    {
      id: "vi-rodde-sammen-fotball-vm-2026-07",
      tittel: "Vi rodde sammen",
      teaser:
        "Ro-ropet under fotball-VM ble en bevegelse — og et bilde på hva gode team, tydelig retning og varig kultur kan skape langt utenfor selve kampen.",
      bildeUrl: "/images/ro-folkehav-vm.png",
      dato: "2026-07-14",
      visningsDato: "14.07.26",
      kategori: "Lederstil, kultur og team",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Norge tapte en dramatisk kvartfinale mot England. Likevel skapte laget noe som kan vare langt lenger enn selve mesterskapet.

Det som startet som et supporterrop, ble bokstavelig talt en bevegelse.

Gjennom VM har nordmenn rodd på tribuner, storskjermer, torg og utesteder. Roingen har også vakt internasjonal oppsikt.

Det har vært utrolig artig å delta.

Jeg har sett fire Norge-kamper på storskjermer rundt i Oslo. Stemningen og samholdet har vært fantastisk. Mennesker som ikke kjente hverandre, satt side ved side og beveget seg i samme retning. Det ble spandert i alle retninger. Plutselig var vi alle venner, og da føltes det naturlig å gi.

Det er et sterkt bilde på hva gode team får til.

Norge har store enkeltspillere. Haaland, Ødegaard, Nyland og Schjelderup har alle levert viktige bidrag. Resultatene kom likevel fordi laget fungerte innenfor en tydelig retning, med roller som utfylte hverandre.

Her fortjener Solbakken tydelig anerkjennelse som leder. Han har stått i kritikk, holdt fast ved retningen og bygget et lag der sterke profiler inngår i en større helhet. Det krever både mot, tydelighet og tillit til eget lederteam.

Portugal viser risikoen ved å bygge laget rundt én stjerne. Ronaldo har levert på et nivå få kan matche, men statusen hans kan gjøre laget mindre fleksibelt. Når lagkamerater søker stjernen og treneren får mindre handlingsrom, må lederteamet sette helheten først.

Det gjelder også i virksomheter.

Gode ledere utvikler sterke individer, men bygger samtidig systemer, kultur og lederteam som gjør organisasjonen mindre personavhengig. Flere må kunne ta ansvar når situasjonen krever det.

Kampen mot England viste også hvor viktig tillit til systemene er. VAR-avgjørelser, det annullerte målet og kameravaieren skapte sterke reaksjoner. FIFA har en belastet korrupsjonshistorikk, og da får mistanken om at de største og mest kommersielle lagene favoriseres raskt fotfeste.

Det finnes ingen dokumentasjon på at kampen ble manipulert. Likevel må beslutninger være transparente og forståelige dersom systemet skal beholde legitimitet.

Mandag satt jeg på Gardermoen med familien og ventet på vår egen ferieavgang. Da NCR720 landet med landslaget, sto det «Ro Ro Ro Ro Airlines» på Flightradar24. Over 100 000 fulgte flyvningen. Vi så flyets touchdown live.

Jeg så iveren i barnas øyne. Kanskje kunne de få et glimt av VM-spillerne. Plutselig handlet fotball ikke bare om å spille selv, men også om å følge laget, dele opplevelsene og kjenne tilhørighet til noe større.

Norge kom hjem til en nasjon som sto bak dem.

Å være en god taper handler ikke om å bagatellisere nederlaget eller bruke energien på ytre forklaringer. Det handler om å ta ansvar, lære av det som skjedde og bruke erfaringen til å komme sterkere tilbake.

Nå er lederoppgaven å gjøre dette til mer enn et sommerminne.

Samholdet, kulturen og troen må videreføres. 💯

Vi må fortsette å ro sammen. 🚣

#Ledelse #Teamutvikling #Kultur #Prestasjon #FotballVM`,
    },
    {
      id: "verdier-kultur-kommersiell-ledelse-2026-06",
      tittel: "Hva tillater du at blir kultur?",
      teaser:
        "Kultur er sjelden det vi sier at vi står for. Den vises i hva vi belønner, tolererer og korrigerer — og i hvordan verdier faktisk testes når noe koster.",
      bildeUrl: "/images/verdier-kultur.png",
      dato: "2026-06-18",
      visningsDato: "18.06.26",
      kategori: "Lederstil, kultur og team",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `For noen uker siden skrev jeg om hva som skjer når press blir selve ledelsesmodellen.

Kjernen var at varige resultater krever mer enn trykk. De krever et system bak prestasjonen. En sentral del av det systemet er kultur.

Og kultur er sjelden det vi sier at vi står for. Den vises i hva vi belønner, tolererer og korrigerer.

De fleste virksomheter har gode ord.
Kundefokus
Ansvar
Samarbeid
Integritet
Kvalitet
Stadig bedre

Problemet er sjelden ordene, men om de faktisk får konsekvenser i hverdagen.

Dette er lett å kjenne igjen i kommersielle miljøer.
💥 Aktivitet belønnes mer enn kundeverdi.
💥 Problemer skyves videre i stedet for å løses der de oppstår.
💥 CRM sies å være felles arbeidsflate, men mangelfull bruk aksepteres likevel. Da lærer organisasjonen raskt at struktur er viktig i teorien, men valgfritt i praksis.
💥 En sterk selger som leverer tall, men bryter prosessen og svekker laget, får passere fordi resultatene ser gode ut.
💥 Eller motsatt: En svak medarbeider begynner å motarbeide kulturen, undergrave systemet og tappe omgivelsene, uten at det tas tak tidlig nok.

Jeg har selv erfart hvor krevende dette kan være i praksis.

Når dårlig adferd aksepteres fordi leveransene på overflaten ser gode nok ut, sier det noe om kulturen. Ikke bare internt. Også utad. Over tid påvirker det tillit, samarbeid, omdømme og hvordan virksomheten faktisk blir oppfattet.

💡 Edgar Schein beskrev organisasjonskultur som de grunnleggende antakelsene en gruppe har lært å ta for gitt over tid. Det er mønstrene som styrer hvordan mennesker faktisk handler, ofte uten at de selv legger merke til det.

Derfor blir kultur veldig konkret.

Kulturen viser seg i hva organisasjonen lærer at det lønner seg å gjøre:
🔸 Hvis vi sier åpenhet, men belønner tilbakeholdelse, intern posisjonering og lite deling, lærer vi folk å holde kortene tett. Da skapes skjulte agendaer.
🔸 Hvis vi sier samarbeid, men lar enkeltpersoner stå utenfor felles standarder, lærer vi organisasjonen at standardene er valgfrie. Da bygger vi ikke kultur. Vi bygger unntak.

Verdier testes først når noe koster.
Når marginen presses.
Når tempoet øker.
Når en viktig kunde utfordrer oss.
Når en god prestasjon har dårlig adferd bak seg.
Når det raske valget ikke er det riktige valget.

For en leder er dette et designspørsmål.
Hva belønner du?
Hva lar du passere?
Hva korrigerer du tidlig nok?

Tilbakemeldinger som bare handler om resultater, endrer lite over tid. Det er adferden bak resultatene som bygger kapasitet, læring og kultur.

Verdier må også eies av medarbeiderne. De blir først sterke når mennesker bruker dem til å ta bedre valg, ikke bare venter på at lederen skal avklare alt.

👉 Derfor er verdier et av de mest praktiske styringsverktøyene en leder har.
Fordi de avgjør hva som skjer når ingen enkel løsning finnes. 💯

#kommersiellledelse #organisasjonskultur #prestasjonskultur #verdibasertledelse #gjennomføringskraft`,
    },
    {
      id: "trykk-prestasjon-kommersiell-ledelse-2026-05",
      tittel: "Når press blir ledelse",
      teaser:
        "Mer trykk er sjelden en bærekraftig ledelsesmodell. Kommersiell ledelse handler om resultater — men varig prestasjon bygges i spennet mellom tydelige krav og reelt eierskap.",
      bildeUrl: "/images/trykk-prestasjon.png",
      dato: "2026-05-26",
      visningsDato: "26.05.26",
      kategori: "Endring og gjennomføring",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Mer trykk er ikke en ledelsesmodell. Det er en kortsiktig respons.

Jeg har sett og erfart det mange ganger. Resultatene uteblir, og svaret blir flere møter, tettere oppfølging, høyere aktivitetskrav og raskere tempo.

Noen ganger er det nødvendig.

Problemet oppstår når trykket blir selve modellen.

Kommersiell ledelse handler om resultater. Det skal den gjøre. Salg, margin, kundeverdi og vekst er mandatet. Men varige resultater skapes sjelden gjennom press alene.

Bård Kuvaas har over tid løftet frem betydningen av autonomistøttende ledelse. Ledere som forklarer retning, stiller gode spørsmål og støtter medarbeidere uten å bli kontrollerende, bygger ofte sterkere motivasjon, bedre prestasjoner og lavere turnover.

Gallup peker i samme retning. Høyt engasjerte team leverer bedre på kundelojalitet, salgsproduktivitet og lønnsomhet. Engasjement starter ofte med noe så grunnleggende som tydelige forventninger.

Betyr det at medarbeidere skal skjermes for krav?

I et sterkt kommersielt miljø går ansvaret begge veier. Lederen må skape retning, struktur, tillit og oppfølging. Medarbeiderne må ta eierskap, være åpne for tilbakemelding, bidra til læring og stå i gjennomføringen når det krever noe.

Det er her dynamikken blir interessant.

Når ledelse blir ren kontroll, mister teamet kraft. Når autonomi blir uten retning, mister organisasjonen tempo. Prestasjon bygges i spennet mellom tydelige krav og reelt eierskap.

Da blir aktivitet mer enn volum. Den får retning. Aktiviteten kobles til kundeinnsikt, kvalitet, prioriteringer og reell verdi.

Det er her mange kommersielle miljøer mister kraft. De måler mer, men lærer mindre. De krever mer, men bygger ikke alltid kapasitet. De øker aktiviteten, men får ikke nødvendigvis sterkere gjennomføring. For meg er forskjellen på kvantitet og kvalitet et av de viktigste skillene i kommersiell ledelse.

Salgsresultater skapes gjennom mennesker som skal tåle tempo, usikkerhet, avslag og krevende kundebehov, dag etter dag.

Derfor holder det sjelden å skru opp volumet alene. Man må bygge et system som gjør det mulig å prestere.

Systemet må ha:
🧭 Retning
⏱️ Rytme
✅ Ansvar
🤝 Samspill
💡 Læring
🌱 Kultur

Det er forskjellen på et team som leverer når presset øker, og et team som bare blir mer slitent.

Kommersiell ledelse handler om å bygge motoren bak resultatene.

#kommersiellledelse #prestasjonskultur #salgsutvikling #kundeinnsikt #gjennomføringskraft`,
    },
    {
      id: "gronne-exceltall-transformasjon-2026-05",
      tittel: "De grønne tallene er ikke problemet.",
      teaser:
        "Business caset ser bra ut i Excel – men gevinstene lekker ofte i drift. Gode transformasjoner starter med hele virkeligheten, ikke bare kurvene.",
      bildeUrl: "/images/grønne-exceltall.png",
      dato: "2026-05-19",
      visningsDato: "19.05.26",
      kategori: "Strategi og virksomhetsutvikling",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Problemet er alt de ikke viser.

I ledermøter kan et business case gjøre en kompleks beslutning farlig enkel. Kostnadene går ned. Kapasiteten går opp. Kurvene peker riktig vei. Alle vil være handlekraftige. 🥊

Så starter endringen.

Kundene merker at flyten ikke er like god. Ansatte mister eierskap til prosesser de tidligere hadde kontroll på. Koordineringen blir tyngre. Kvaliteten faller litt før noen klarer å forklare hvorfor. Og gevinstene som så så tydelige ut i Excel, begynner å lekke i drift. 💣

Dette betyr ikke at transformasjon er feil. Tvert imot. Endring er nødvendig.

Men gode transformasjoner starter ikke med et pent regneark alene. De starter med et ærligere bilde av virkeligheten – hele virkeligheten!

Mitt konkrete råd er enkelt.
💥 Ikke godkjenn prosjektet før noen har laget undersiden av regnearket.
Hva betyr endringen for kunder, mennesker, kvalitet, koordinering og eierskap?
Det er ofte der gevinstene enten realiseres eller forsvinner.

McKinsey har lenge pekt på at rundt 70 % av transformasjoner ikke når sine opprinnelige mål. Jeg har sett dette ofte selv også, og min erfaring er at årsaken sjelden er svak strategi. Den ligger ofte i for smal analyse, for lite forankring og for svak gjennomføringsevne.

AI kan være et aktuelt eksempel. Mange virksomheter innfører AI raskt, drevet av ambisiøse gevinstestimater og et legitimt press om å henge med. Men AI skaper ikke verdi fordi teknologien rulles ut. Den skaper verdi når den bygges inn i arbeidsflyt, roller, kvalitet, ansvar og ledelse.

En case jeg nylig merket meg var Elkem og Egde sin E2-modell. Den behandler AI som en driftsmodell som må bygges gjennom plattform, konkrete use cases og organisering, der brukeradopsjon og arbeidsflyt er like viktig som teknologi. Resultatene var formidable!

Så neste gang tallene ser litt for pene ut, ville jeg stilt ett spørsmål først:
Hva er det Excel ikke ser?

For ledelse handler ikke bare om å regne hjem en endring.
Det handler om å se hva endringen gjør med mennesker, kunder og drift.

#Transformasjon #Ledelse #Endringsledelse #Strategi #Beslutningsgrunnlag`,
    },
    {
      id: "pappa-forst-trener-etterpa-2026-01",
      tittel: "Pappa først. Trener etterpå?",
      teaser:
        "Motivasjon, tillit og trygghet hjemme og på tennisbanen: når er det viktigere å være pappa enn trener – og hva skjer når egne ambisjoner skygger for barnas gleden?",
      bildeUrl: "/images/pappa-ikke-trener.png",
      dato: "2026-05-09",
      visningsDato: "09.05.26",
      kategori: "Lederstil, kultur og team",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Den siste uken har jeg skrevet om motivasjon, tillit og psykologisk trygghet. Temaer vi ofte snakker om i ledelse, men som kanskje blir enda viktigere hjemme.

For hva skjer når du vil motivere, men skaper press? Når du vil hjelpe, men tar for mye plass? Og når barnet ditt trenger trygghet mer enn korrigering?

For meg treffer dette også tennisbanen. 🎾

Jeg har spilt tennis nesten hele livet, og jeg spiller fortsatt en god del.

Jeg er også utdannet tennistrener, og kanskje aller finest: Jeg får dele sporten med familien min. Både kona mi og barna våre på snart 5 og 7 år spiller tennis. 👨‍👩‍👧‍👦

Det er noe veldig fint med det. Men også noe krevende.

Tennis er en fantastisk skole i livet, og det å jage en drøm er noe vakkert. Men en forelders oppgave er først og fremst å tro på barnet sitt, ikke å legge press på dem eller leve reisen for dem.

For hvis jeg skal være helt ærlig, så har jeg kjent på stolthet når barna får det til. Men jeg har også kjent på frustrasjon, og litt irritasjon, når det ikke går fullt så bra. Og akkurat det er kanskje ikke så bra. 💣

Muligens er det nettopp derfor spørsmålet traff meg da jeg så refleksjonen rundt at Novak Djokovic ikke ønsker å være trener for sine egne barn. Uten sammenligning for øvrig, men tanken er interessant: Kanskje er det viktigere å være pappa enn trener.

Samtidig er dette ikke svart-hvitt. Norges beste tennisspiller gjennom tidene, Casper Ruud, har faren sin som trener. Mange topputøvere har hatt foreldre som både støttespillere og trenere på veien mot verdenstoppen.

Det viser kanskje at spørsmålet ikke er om foreldre kan være trenere, men 𝑛å𝑟, ℎ𝑣𝑜𝑟𝑑𝑎𝑛 og ℎ𝑣𝑜𝑟 𝑙𝑒𝑛𝑔𝑒 det er riktig.

USTA beskriver foreldrerollen i tennis først og fremst som støtte, trygghet og ubetinget backing. Forskning peker også på at kombinasjonen forelder og trener kan gi både kvalitetstid og motivasjon, men også rolleforvirring, press og konflikt.

Og kanskje er noe av dette også aldersbetinget.

Når barna er små, kan det være helt naturlig at mor eller far introduserer leken, bevegelsene og gleden ved sporten. Men etter hvert kan det hende at relasjonen er best tjent med at andre tar en tydeligere trenerrolle.

Bildet til dette LinkedIn innlegget er for øvrig litt artig. Der har jeg satt mitt eget ansikt foran barnas. Det er ment for å si noe om hvor lett det er å projisere egne ambisjoner over på dem. Eller hvor høye forventninger man kan komme til å stille, fordi man selv alltid har stilt høye krav til egen utvikling.

Det er i alle fall en nyttig påminnelse for meg.

Jeg elsker tennis.

Jeg elsker at familien min også gjør det. 💯

Men kanskje er ikke min viktigste oppgave å utvikle slagene deres.

💙 Det er selvfølgelig å bevare gleden. ❤️

👉 Hva tenker du?

Er det en styrke eller en fallgruve at foreldre også er trenere?

Og er dette noe som endrer seg med alder?

#tennis #foreldrerollen #idrettsglede #mestring #utvikling #ledelse`,
    },
    {
      id: "psykologisk-trygghet-krav-2026-01",
      tittel: "Psykologisk trygghet er ikke fravær av krav",
      teaser:
        "Psykologisk trygghet er ikke fravær av krav. Det handler om å gjøre mennesker trygge nok til å bidra fullt ut – med tydelighet, respekt og ansvar begge veier.",
      bildeUrl: "/images/psykologisk-trygghet.png",
      dato: "2026-05-07",
      visningsDato: "07.05.26",
      kategori: "Lederstil, kultur og team",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Psykologisk trygghet blir av og til fremstilt som om det handler om å gjøre arbeidslivet mykere, mindre direkte eller mindre krevende.

Det mener jeg er en misforståelse.

I prestasjonsmiljøer, og ikke minst i kommersielle miljøer, skal det fortsatt være:
• forventninger
• krav til innsats
• tydelige mål
• ansvar for leveranser

Det er ikke problemet.

Problemet oppstår når høye krav kombineres med lav respekt, uklar kommunikasjon eller en kultur der folk ikke tør å si fra, stille spørsmål eller melde risiko tidlig nok.

Da får du ikke mer prestasjon. Du får mer stillhet, dårligere informasjon og svakere læring.

For meg handler psykologisk trygghet derfor ikke om å senke kravene. Det handler om å gjøre mennesker trygge nok til å bidra fullt ut.

Og det ansvaret går begge veier. 💥

Lederen har et særskilt ansvar for å sette retning, være tydelig, følge opp, korrigere med respekt og skape rammer som gjør det mulig å bidra.

Men medarbeidere har også et ansvar:
• å møte forberedte
• å ta eierskap
• å bidra konstruktivt
• å si fra når noe er uklart
• å stå i krav, tilbakemeldinger og forventninger

Trygghet betyr ikke rett til å være passiv. Det betyr trygghet til å være aktiv.

Det er en viktig forskjell.

De beste prestasjonsmiljøene er derfor ikke de mest behagelige. De er de mest trygge til å tenke høyt, utfordre, lære, justere og levere under press. 📈

Jeg tror også dette er en av de mest undervurderte sammenhengene i ledelse:

Høye krav tåles best der respekten er høy. 💯

Når mennesker opplever tydelighet, respekt og forutsigbarhet, tåler de også mer press, mer korrigering og høyere forventninger. Ikke fordi kravene blir mindre, men fordi rammene blir bedre. ⚖️

Det er kanskje derfor psykologisk trygghet ikke først og fremst er et trivselstema.

Det er et tema om kvalitet, ansvar og gjennomføring i streben etter å nå mål. 🎯

#ledelse #psykologisktrygghet #tillit #gjennomføring #kommersiellledelse`,
    },
    {
      id: "tillit-endring-gjennomforing-2025-01",
      tittel: "Folk motsetter seg sjelden endring",
      teaser:
        "Folk motsetter seg sjelden endring. De motsetter seg uklarhet, avstand og lav tillit.",
      bildeUrl: "/images/effektiv-endring.jfif",
      dato: "2026-05-05",
      visningsDato: "05.05.26",
      kategori: "Endring og gjennomføring",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Folk motsetter seg sjelden endring. De motsetter seg uklarhet, avstand og lav tillit.

Det er en viktig forskjell for ledere som skal gjennomføre noe som faktisk betyr noe.

Når transformasjoner stopper opp, forklares det ofte med endringsmotstand. I praksis handler det like ofte om at mennesker ikke forstår retningen, ikke ser sin rolle i den, eller ikke stoler nok på prosessen bak den.

Det er her tillit går fra å være et kulturord til å bli et operativt lederverktøy.

Høy tillit reduserer friksjon. Den gjør at beslutninger ikke må selges inn på nytt i hvert møte. Den gjør at folk handler raskere, rapporterer feil tidligere og tar større eierskap til det som skal gjennomføres.

Lav tillit gjør det motsatte. Den øker de interne transaksjonskostnadene: mer kontroll, mer eskalering, mer tid brukt på å reparere det som ikke ble sagt tydelig nok første gang.

I kommersielle miljøer ser du dette tydelig når ledelsen endrer prioriteringer, prismodeller eller salgsfokus. Hvis folk bare får vite 𝘩𝘷𝘢 som er besluttet, men ikke 𝘩𝘷𝘰𝘳𝘧𝘰𝘳, øker friksjonen raskt. Når begrunnelsen er tydelig, øker både tempo og gjennomføringskraft.

Det samme gjelder AI. Mange AI-initiativer stopper ikke fordi folk er mot teknologien, men fordi de ikke stoler på formålet, datagrunnlaget eller hvordan løsningen skal brukes. Når nytte, kontroll og rolleforståelse er tydelig, øker adopsjonen.

Det er heller ikke nok å kommunisere hva som er besluttet og hvorfor det er bestemt. Ledere må også kommunisere 𝘩𝘷𝘰𝘳𝘥𝘢𝘯 det faktisk skal gjennomføres i praksis. Når noe nytt legges på noens skuldre uten tydelige rammer, prioriteringer og støtte, oppstår det fort usikkerhet og friksjon. Når mennesker forstår både retning, begrunnelse og hva som forventes av dem, øker aksept, eierskap og handling. 💥

Forskning peker i samme retning. Ansatte i høy-tillitsorganisasjoner rapporterer lavere stress, høyere produktivitet og sterkere engasjement enn i organisasjoner med lav tillit.

🤝Tillit er derfor ikke en myk sak. Det er et operativsystem for gjennomføring.

🎯 Spørsmålet er ikke bare om ledelsen tror på planen. Spørsmålet er om organisasjonen har tillit nok til å følge den.

#Ledelse #Transformasjon #Endringsledelse #Gjennomføring #Tillit`,
    },
    {
      id: "hva-motiverer-kunnskapsarbeid-2026-01",
      tittel: "Hva motiverer DEG og mennesker i kunnskapsarbeid?",
      teaser:
        "Bonus kan drive aktivitet, men kvalitet, læring og ansvar bygges oftere gjennom mening, mestring, autonomi og inspirasjon.",
      bildeUrl: "/images/bonus.png",
      dato: "2026-04-28",
      visningsDato: "28.04.26",
      kategori: "Lederstil, kultur og team",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `𝐇𝐯𝐚 𝐦𝐨𝐭𝐢𝐯𝐞𝐫𝐞𝐫 𝐃𝐄𝐆 og 𝐦𝐞𝐧𝐧𝐞𝐬𝐤𝐞𝐫 𝐢 𝐤𝐮𝐧𝐧𝐬𝐤𝐚𝐩𝐬𝐚𝐫𝐛𝐞𝐢𝐝?

I forrige innlegg skrev jeg at gode intensjoner ikke er nok. Men mellom intensjon og handling ligger også et annet spørsmål:

Hva er det som får mennesker til å ville bidra, utvikle seg og ta ansvar over tid?

Mange ledere svarer fortsatt raskt: bonus, insentiver og prestasjonslønn.

Forskningen svarer mer nyansert. I masteroppgaven min for endel år siden skrev jeg om belønning og arbeidsmotivasjon i kunnskapsbedrifter. Der fant jeg et tydelig spenningsfelt: Prestasjonsbasert belønning kan øke kvantitet, men ikke nødvendigvis kvalitet. I noen tilfeller kan den også fortrenge det indre drivet som kunnskapsarbeid er avhengig av.

I kunnskapsarbeid er ikke spørsmålet bare om folk jobber mer. Det er om de tenker bedre, lærer raskere, samarbeider klokere og tar ansvar også når ingen følger med.

Derfor tror jeg mange ledere overvurderer effekten av bonus, og undervurderer betydningen av mening, mestring, autonomi, anerkjennelse og utvikling. Oppgaven min peker særlig på kompetansehevende tiltak som en sterk motivasjonsfaktor.

Et kommersielt eksempel:
To selgere kan ha samme bonusordning. Den ene jager kortsiktig volum. Den andre bruker tid på å forstå kundens behov, bygger tillit, utvikler egen kompetanse og skaper høyere verdi over tid.

Begge kan levere aktivitet. Men ikke nødvendigvis samme kvalitet.
Det er derfor belønning er mer enn et lønnsspørsmål. Det er et ledelsesspørsmål. For det du måler, premierer og gir oppmerksomhet til, former ikke bare innsatsen. Det former kulturen.

Jeg tror også det finnes et nivå 𝑜𝑣𝑒𝑟 motivasjon som ledere snakker for lite om: inspirasjon.

Motivasjon kan få folk til å stille. Inspirasjon får dem til å ville mer enn minimum.

Motivasjon kan være knyttet til mål. Inspirasjon er oftere knyttet til mening.
Kanskje er det derfor videreutdanning, faglig vekst og muligheten til å mestre nye områder ofte virker sterkere enn ledere tror.

For meg ligger motivasjon og inspirasjon ofte i læring, utvikling og det å forstå nye sammenhenger. Derfor opplever jeg også videreutdanningen jeg nå tar ved BI i 'Generative AI for Business' som mer enn faglig påfyll, den gir ny energi, nye perspektiver og større handlingsrom.

Et nyttig perspektiv fra forskningen er også de tre C-ene for arbeidsmotivasjon: Content, Context og Change. Altså hva arbeidet inneholder, hvilken kontekst folk jobber i, og hvordan motivasjon endrer seg over tid.

Og det leder naturlig til neste tema:
Selv sterk motivasjon er ikke nok hvis mennesker ikke har tillit til retningen, beslutningene eller lederne som kommuniserer dem.

👉 Neste innlegg vil derfor handle om at tillit ikke er "mykt". Det er gjennomføringskraft.`,
    },
    {
      id: "alle-enige-ingen-gjor-noe-01",
      tittel: "Alle er enige. Ingen gjør noe.",
      teaser:
        "Når strategi ikke blir adferd: hvorfor enighet ikke er nok, og hva som faktisk skal til for å lykkes med transformasjon i praksis.",
      bildeUrl: "/images/intentions.png",
      dato: "2026-04-20",
      visningsDato: "20.04.26",
      kategori: "Strategi og virksomhetsutvikling",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `De fleste virksomheter jeg møter har ikke mangel på ambisjoner, strategier eller vilje til endring. De har et annet problem hvilket er at det som besluttes i møterommet, skjer ikke i markedet.

Det er ikke sabotasje eller latskap. Det er et gap som forskning har dokumentert grundig, og som ledere systematisk undervurderer: Avstanden mellom intensjon og faktisk adferd. I min masteroppgave om nettopp dette gapet — forankret i Theory of Planned Behavior — er ett av de tydeligste funnene at høy grad av enighet og positiv innstilling ikke er tilstrekkelig for å predikere handling. Folk kan mene det de sier. De kan ønske å endre seg. Og likevel ikke gjøre det.

I kommersiell ledelse og salgsledelse er konsekvensene direkte målbare. Prioriteringene er klare, KPI-ene er satt, og alle nikker i kickoff-møtet. Tre måneder senere er adferden i kundedialogen den samme som før. Ikke fordi strategien var feil, men fordi ingen oversatte den til konkrete handlingsmønstre: hvem gjør hva, i hvilken situasjon, og hva er det første steget? Det er her transformasjoner strander. Ikke i planfasen, men i overgangen fra intensjon til rutine.

McKinseys forskning på organisatorisk transformasjon viser at 70 % av endringsinitiativ ikke når sine mål. Den hyppigst rapporterte årsaken er ikke feil strategi eller manglende ressurser, men manglende evne til å endre faktisk adferd på tvers av organisasjonen. Det som skiller de 30 % som lykkes, er ikke bedre planer, men at ledere på alle nivåer aktivt modellerer den nye adferden selv, fremfor å delegere gjennomføringen nedover.

Det som hjelper, er ikke mer kommunikasjon av visjonen. Det er implementeringsintensjoner — konkrete hvis-så-planer som kobler ønsket adferd til spesifikke situasjoner og triggere. Forskning viser konsistent at denne typen konkretisering øker sannsynligheten for gjennomføring betydelig, sammenlignet med generelle målsetninger alene. I praksis betyr det at ledere må gå lenger enn å kommunisere hva som skal skje, og inn i det mer krevende arbeidet med å designe adferden som skal bære strategien.

Den vanskeligste samtalen i mange ledergrupper er ikke om retning. Den er om hva vi slutter å gjøre, hva vi begynner å gjøre annerledes i morgen, og hvem som er ansvarlig for å følge opp at det skjer. Enighet er komfortabelt. Konkret adferdsendring er ubehagelig, fordi det avslører hvem som leverer og hvem som ikke gjør det.

<em>The road to hell is paved with good intentions.</em> I ledelse er det ikke et ordtak — det er en driftsrisiko. Veien videre bygges ikke av intensjoner alene, men av handling, ansvar og oppfølging.

👉 Neste innlegg i serien om ledelse, strategisk gjennomføring og transformasjon i praksis: Hva er det som faktisk motiverer mennesker i kunnskapsarbeid? Forskningen svarer ikke alltid det ledere forventer.`,
    },
    {
      id: "to-parallelle-spor-ledelse-ai-01",
      tittel: "Jeg har skrevet mye om AI. Nå vil jeg også skrive mer om ledelse, strategi og transformasjon",
      teaser:
        "To tydelige spor videre: AI, teknologi og fremtidig arbeidsliv - samt ledelse, strategi og transformasjon i praksis.",
      bildeUrl: "/images/tegneserie.jfif",
      bildeKortFokus: "center center",
      dato: "2026-04-16",
      visningsDato: "16.04.2026",
      kategori: "Strategi og virksomhetsutvikling",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Den siste tiden har jeg skrevet mest om AI, fremtidens teknologiledelse og hvordan nye verktøy vil påvirke arbeidslivet. Det kommer jeg til å fortsette med.

Men jeg har også kjent på behovet for å løfte frem en større del av min egen kjerne. For jeg er først og fremst en kommersiell leder som har jobbet med salg, markedsføring, personalledelse, strategi, endring og resultatansvar i kunnskapsintensive bransjer.

Jeg liker å jobbe strategisk, men også operativt og tett på. Tett på mennesker, kunder, drift og det som faktisk skjer når planer skal omsettes til handling. Det er ofte der ledelse blir testet på ordentlig.

Derfor kommer jeg fremover til å bygge tydeligere i to parallelle spor:
• AI, teknologi og fremtidig arbeidsliv
• Ledelse, strategisk ledelse, kommersiell ledelse og transformasjon i praksis

Gjennom to masterutdannelser, inkludert Executive Master of Management fra BI, har jeg fordypet meg i flere temaer jeg mener er minst like aktuelle i dag:
• Hva skaper egentlig motivasjon?
• Hvorfor blir gode intensjoner så ofte stående som nettopp det?
• Hvordan får ledere mennesker til å bevege seg, ikke bare nikke?
• Hva bygger tillit, eierskap og psykologisk trygghet?
• Hvordan påvirker kultur, autonomi og anerkjennelse faktisk prestasjon?
• Hvorfor ser noen transformasjoner riktige ut på papiret, men blir krevende i virkeligheten?

Og her kommer koblingen til dagens bilde. 💡

Tegneserien traff meg fordi det viser en klassisk feil i mange virksomheter: Vi tar i bruk ny teknologi, men lar gamle vaner, kontrollbehov og symbolhandlinger styre hvordan den brukes. Resultatet er at vi ikke digitaliserer arbeidet. Vi digitaliserer bare friksjonen!

Vi snakker mye om «human in the loop» i AI. Jeg mener det er like relevant i ledelse.

Mange tror motstand mot endring først og fremst handler om holdning. Ofte handler den like mye om uklarhet. Folk beveger seg sjelden fordi de har hørt budskapet én gang. De beveger seg når de forstår hva som faktisk forventes annerledes av dem i praksis.

For mange organisasjoner mangler ikke strategi, planer eller ambisjoner. De mangler evnen til å omsette intensjon til faktisk atferd, eierskap og gjennomføring.

Derfor kommer neste innlegg til å ta utgangspunkt i en av titlene fra mitt BI-arbeid:
👉 “The road to hell is paved with good intentions.”`,
    },
    {
      id: "econa-innovasjon-ideer-verdi-01",
      tittel: "Slik bygger du en organisasjon hvor idéer blir til verdi",
      teaser:
        "Refleksjoner fra Econa om innovasjon: struktur, fasilitering og kultur som gjør at gode idéer faktisk blir til verdi.",
      bildeUrl: "/images/innovasjon.jpg",
      dato: "2026-03-28",
      visningsDato: "28.03.2026",
      kategori: "Strategi og virksomhetsutvikling",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `𝗦𝗹𝗶𝗸 𝗯𝘆𝗴𝗴𝗲𝗿 𝗱𝘂 𝗲𝗻 𝗼𝗿𝗴𝗮𝗻𝗶𝘀𝗮𝘀𝗷𝗼𝗻 𝗵𝘃𝗼𝗿 𝗶𝗱𝗲𝗲𝗿 𝗯𝗹𝗶𝗿 𝘁𝗶𝗹 𝘃𝗲𝗿𝗱𝗶

På torsdag deltok jeg på Econa-arrangementet “𝘐𝘯𝘯𝘰𝘷𝘢𝘴𝘫𝘰𝘯 𝘰𝘨 𝘶𝘵𝘷𝘪𝘬𝘭𝘪𝘯𝘨 – 𝘣𝘭𝘪 𝘮𝘦𝘳 𝘮𝘶𝘭𝘪𝘨𝘩𝘦𝘵𝘴𝘰𝘳𝘪𝘦𝘯𝘵𝘦𝘳𝘵”, med foredrag og workshops ledet av Nina Prestegard.

Noe av det mest interessante, var ikke hvor mange idéer som finnes i en organisasjon, men hvordan de blir håndtert. Mange virksomheter har ansatte som kommer med gode innspill, men idéene dukker ofte opp i gangen, mellom møter eller i ustrukturerte settinger. De blir gjerne møtt med et “bra innspill”, men uten tydelig videre oppfølging. Over tid svekker det både initiativ og engasjement.

Kurset var tydelig på at innovasjon ikke skjer tilfeldig. Det må designes, både gjennom struktur og kultur.

Tre ting peker seg spesielt ut:
• Struktur slår tilfeldighet. Idéarbeid må ha tydelige rammer, problemstillinger og eierskap. Hvis ikke, blir det tilfeldig hva som tas videre.

• Grupper må fasiliteres. Uten struktur får man gruppetenkning, dominans og tidlig kritikk. La folk tenke individuelt først, og bygg videre sammen.

• Skille mellom utforskning og beslutning. Mange går for raskt til vurdering. Da stopper idéene før de har fått utvikle seg.

Et annet viktig poeng var at kreativitet ikke er en egenskap noen har, men en ferdighet som kan trenes. Vi er ofte trent til å finne riktige svar, ikke til å utforske flere muligheter. Derfor må ledere bevisst legge til rette for divergent tenkning, hvor målet er å åpne opp før man snevrer inn. Nysgjerrighet og spørsmål som “hva hvis?” og “kan du utdype?” er en forutsetning for bedre beslutninger.

Samtidig handler dette ikke bare om ledelse, men også om eierskap. Det kan ikke forventes at lederen alene skal drive frem alle idéer som kommer inn. Ekte innovasjon skjer når ansatte selv tar ansvar for å videreutvikle forslag, teste dem og stå i usikkerheten. Autonomi bygger eierskap, og eierskap skaper fremdrift.

Erfaringsmessig er det smart å etablere faste innovasjonsmøter med tydelig struktur. Der presenteres idéer kort, én person eier videre utvikling, og det avklares neste steg før møtet avsluttes. Det gir både retning og ansvar, samtidig som det signaliserer at idéer tas på alvor.

For ledere betyr dette at man må gå fra å etterspørre idéer til å bygge systemer som faktisk håndterer dem. Det handler om å skape rom for utforskning, men også tydelig ansvar for gjennomføring.

Koblingen til kommersiell ledelse er direkte. Skal man utvikle nye tjenester, forbedre kundeopplevelser eller ta i bruk AI, holder det ikke med gode intensjoner. Man må ha en organisasjon som evner å utvikle, prioritere og realisere idéer i praksis.

Min viktigste takeaway er derfor enkel: Innovasjon handler ikke først og fremst om flere idéer, men om å bygge en struktur og en kultur hvor idéer blir til verdi.`,
    },
    {
      id: "nettside-lansering-2026-01",
      tittel: "Fra koding i 1999 til AI-revolusjon i 2026 – ny hjemmeside og nytt consultingselskap!",
      teaser:
        "Ny hjemmeside bygget med AI-verktøy på to dager – og lansering av Marius Ottesen Consulting som brobygger mellom strategi og AI-implementering.",
      bildeUrl: "/images/hjemmeside.png",
      bildeModalBred: true,
      bildeFit: "contain",
      bildeKortRamme: "nettsted",
      dato: "2026-02-16",
      visningsDato: "16.02.2026",
      kategori: "AI / KI",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Sist jeg bygde en nettside fra bunnen, var som student i USA i 1999. Da skrev jeg hver linje HTML manuelt. De siste 48 timene har vært en øyeåpner: Jeg har nettopp lansert <strong>min nye hjemmeside</strong> – bygget på bare to dager!

Dette er ikke takket være mine kodeferdigheter, men kraften i strategisk bruk av AI. Ved å kombinere <strong>Cursor</strong>, <strong>Claude 3.5 Sonnet</strong>, <strong>Opus 4.6</strong> og <strong>Gemini 1.5 Pro</strong>, har jeg fungert som arkitekt mens AI-systemene har stått for kodingen.

Prosessen har også inkludert å sette opp versjonskontroll med 𝗚𝗶𝘁 og 𝗚𝗶𝘁𝗛𝘂𝗯, deploye via 𝗩𝗲𝗿𝗰𝗲𝗹 og koble til 𝗲𝗴𝗲𝘁 𝗱𝗼𝗺𝗲𝗻𝗲 – slik at jeg både kan iterere trygt og ha full kontroll på hvordan nettsiden publiseres og oppdateres.

Men prosjektet handler om mer enn teknologi. Det handler om <strong>Brobygging</strong>.

Mange ledere opplever at gapet mellom AI-teori og kommersiell verdi er for stort. Etter en periode med fokus på teori og rammeverk, har jeg nå etablert <strong>Marius Ottesen Consulting</strong>. Min misjon er å være brobyggeren mellom strategi og praktisk AI-implementering.

På hjemmesiden kan du dykke ned i min profesjonelle verktøykasse:
• <strong>Profil, Erfaring, referanser & Resultater</strong>: Bakgrunn og bevis på verdiskapning
• <strong>Faginnlegg</strong>: Mine LinkedIn innlegg som gir innsikt innen "Strategisk Ledelse & Transformasjon" og "AI & Fremtidens Teknologiledelse"
• <strong>Consulting</strong>: For deg som trenger bistand til å iverksette AI
• <strong>CV, Søknad & Kontakt</strong>: For uformelle eller formelle forespørsler

Jeg hjelper virksomheter med å flytte AI fra rammeverk til kjerneoppgaver:
• <strong>AI-strategi</strong>: Kobling til forretningsmål og ROI
• <strong>Prosessoptimalisering</strong>: Fjerning av friksjon i driften
• <strong>Digital Transformasjon</strong>: Rigger organisasjonen for en ny hverdag
• <strong>Workshops</strong>: Fra teori til praktisk mestring

<strong>Jeg går nå fra kun teori til faktisk bygging</strong>.

Sammen med tekniske partnere går jeg rett inn i virksomheters kjerneprosesser for å implementere konkrete AI-prosjekter – enten det er automatisering av arbeidsflyt eller intelligente verktøy for beslutningsstøtte. AI skal ikke være et sideprosjekt, men motoren i deres vekst.

<strong>Ta en titt</strong> - og del gjerne! Under fanen "Consulting" finner du et kontaktskjema. Har du utfordringer vi skal se på sammen? Beskriv dem der, så tar vi dialogen videre.

Hva fungerer og hva mangler? Jeg setter stor pris på alle tilbakemeldinger!

<strong>Link til hjemmesiden:</strong> www.mariusottesen.no`,
    },
    {
      id: "attitude-2016-01",
      tittel: "Did you know?!? It's all about ATTITUDE!",
      teaser:
        "Quote of the Month: når bokstavene telles, er det holdning — attitude — som når 100 %.",
      bildeUrl: "/images/attitude.jfif",
      dato: "2016-10-08",
      visningsDato: "08.10.2016",
      kategori: "Lederstil, kultur og team",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Bildet viser en «Quote of the Month» på en tavle fra et tidligere arbeidssted.

Poengen er en enkel bokstav-til-tall-kode der A=1, B=2 og så videre opp til Z=26. Når du legger sammen bokstavene i ordene, gir Knowledge 96 %, Hard Work 98 % — men Attitude alene 100 %.

En enkel, men effektiv påminnelse om at holdning ofte er det som avgjør om kunnskap og innsats faktisk slår ut i praksis.`,
    },
    {
      id: "visindi-rekruttering-2024-01",
      tittel:
        "Hyggelig gest av Visindi som kjørte en god og profesjonell rekrutteringsprosess\nda jeg ble headhuntet til Franzefoss Gjenvinning AS!",
      teaser:
        "Takker Visindi for en god og profesjonell rekrutteringsprosess ved headhunting til Franzefoss\u00A0Gjenvinning.",
      bildeUrl: "/images/visindi.jfif",
      bildeKortFokus: "78% center",
      dato: "2024-01-03",
      visningsDato: "03.01.2024",
      kategori: "Kommersiell ledelse og salg",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: ``,
    },
    {
      id: "obf-klar-2025-01",
      tittel: "Klar for to dager med inspirasjon på Oslo Business Forum 2025 – The Big Shift!",
      teaser:
        "Foran Oslo Business Forum 2025 – The Big Shift: forventninger til to dager med læring, refleksjon og nettverk.",
      bildeUrl: "/images/obf-deltakelse.jfif",
      dato: "2025-09-23",
      visningsDato: "23.09.2025",
      kategori: "Strategi og virksomhetsutvikling",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Jeg ser frem til et tettpakket program med sterke foredragsholdere, nye perspektiver og mye faglig påfyll. Like viktig er møtene med både gamle og nye bekjentskaper – alltid spennende å dele erfaringer og bygge relasjoner på tvers av bransjer.

Dette blir to dager med læring, refleksjon og nettverk som jeg gleder meg stort til! 💪 🙋‍♂️

https://www.obforum.com/`,
    },
    {
      id: "obf-2025-big-shift-01",
      tittel: "Oslo Business Forum 2025 – The Big Shift",
      teaser:
        "Takeaways fra Oslo Business Forum 2025: strategi, AI, ledelse og menneskelig kraft. OBF 10-årsjubileum.",
      bildeUrl: "/images/obf.jfif",
      bildeKortFokus: "28% center",
      dato: "2025-09-26",
      visningsDato: "26.09.2025",
      kategori: "Strategi og virksomhetsutvikling",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `To inspirerende og lærerike dager er over – fylt med sterke foredrag, viktige perspektiver og energi rundt strategi, ledelse, teknologi og fremtidens muligheter. I tillegg markerte årets konferanse 10-årsjubileet til Oslo Business Forum – en milepæl som viser hvilken betydning arenaen har fått for ledere.

🔑 <strong>Mine viktigste takeaways:</strong>

🎯 <strong>Strategi og vekst:</strong>
B. Sternfels minnet oss om at fremtidens vinnere må sikte høyt, bevege seg raskt og bygge organisasjoner som kontinuerlig tilpasser seg endring. Han fremhevet viktigheten av læring, humor, varme og motstandskraft – og understreket vekst og AI som topplederprioriteter. M. Buckingham leverte et sterkt budskap: "Love is the most powerful force in business" – ekte verdiskaping handler om mening og tilhørighet.

🤖 <strong>AI og teknologi:</strong>
P. Lakhani viste hvordan AI kan brukes strategisk for å skape konkurransefortrinn, mens T. Mauri introduserte "Agility is the new stability" og løftet viktigheten av etisk refleksjon. P. Malmgren oppfordret til mer kreativitet: "The big things that matter need better imagination from us."

👩‍💻 <strong>Generasjoner og kultur:</strong>
Dr. E. Filby viste hvordan yngre generasjoner stadig driver utviklingen fremover, mens Gen. X er mest positiv til AI og tech. Dessuten viste hun til hvorfor fysisk samspill og felles arenaer fortsatt er avgjørende for læring, kultur og innovasjon – selv i en hybrid hverdag.

❤️ <strong>Ledelse og menneskelig kraft:</strong>
S. Sinek minnet oss på "What you search for, you will find" – ledelse starter med mening og optimisme.
D. Kander leverte noen av konferansens mest konkrete og kraftfulle budskap: "Never goal alone" – "Always ask: Who can help me do this?" – og "Success can be your biggest blind spot." Hun utfordret oss til å kutte lavverdige oppgaver og fokusere på verdi vs. innsats.

🏆 <strong>Team og tillit:</strong>
Aksel L. Svindal viste hvordan vinnere bygges gjennom åpenhet og samarbeid: "Trust your team, share all good data – and don't forget the 7 o'clock dinner. Celebrate together."

🧭 <strong>Endring som drivkraft:</strong>
A. Rinne introduserte Flux mindset og viste hvordan usikkerhet kan brukes strategisk, mens G. Petriglieri minnet oss på at emosjoner er en konkurransefordel i ledelse.

💡 <strong>Fellesnevneren fra scenen var tydelig:</strong> Fremtidens ledere må kombinere strategi, teknologi og menneskelig innsikt – og evne å skape kultur, tempo, nysgjerrighet og tillit i en tid preget av store skift.

<strong>Neste kapittel – The Human Edge (2026):</strong>
OBF 2026 bygger videre på årets læring da det handler om å låse opp de styrkene ingen maskin kan erstatte. I en tid med disrupsjon må ledere lene seg på kreativitet, mot, tillit og utholdenhet, og bygge kulturer der mennesker og ideer kan blomstre.

En stor takk til Christoffer Omberg og hele det dyktige og hyggelige(!) OBF-teamet for et imponerende, profesjonelt og inspirerende arrangement – både faglig og menneskelig sterkt fra start til slutt! 🙏`,
    },
    {
      id: "kjeft-psykologisk-trygghet-01",
      tittel: "Er det greit å gi 'kjeft' som leder – og hva betyr det for psykologisk trygghet?",
      teaser:
        "Psykologisk trygghet, tydelighet og anonym kritikk. Refleksjoner fra foredrag med Henning Bang (Econa).",
      bildeUrl: "/images/kjeft.jfif",
      dato: "2025-12-04",
      visningsDato: "04.12.2025",
      kategori: "Lederstil, kultur og team",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `På mandag deltok jeg på et innsiktsfullt foredrag i regi av Econa med professor <strong>Henning Bang</strong>. Temaet var <strong>psykologisk trygghet</strong>, og hva som faktisk bygger den – eller undergraver den.
Foredraget traff, spesielt fordi det utfordrer både ledere og medarbeidere.

<strong>Det punktet som virkelig skapte reaksjoner og diskusjon i salen, var Bangs påstand om at:</strong>
«Av og til må man kunne si tydelig ifra. 'Kjeft' tåler voksne mennesker – så lenge det ikke er personfokus, ikke ydmykende og språket er ordentlig. Når grenser brytes, må det være lov å reagere tydelig – også om det skaper et rettmessig ubehag.»

For ordens skyld:
<strong>Jeg tilstreber ikke 'kjeft' som leder.</strong>
Men jeg deler tydelighetsprinsippet: ledelse krever at man faktisk sier fra når noe ikke fungerer.

Et annet viktig poeng som ble diskutert, var <strong>anonym kritikk</strong>.
Anonyme innspill kan fange opp signaler – men de er sjelden utviklende. Når avsender er ukjent:
🔹 dialogen stopper før den starter
🔹 misforståelser sprer seg i teamet
🔹 feil personer kan bli assosiert med kritikken
🔹 kulturen beveger seg fra modighet til forsiktighet

Kort sagt: <strong>anonymiteten kan være et sikkerhetsnett, men ikke et verktøy for utvikling.</strong>

<strong>Mine viktigste takeaways fra foredraget:</strong>
🔹 Psykologisk trygghet betyr ikke fravær av krav.
🔹 Læring krever at vi tåler ubehag – også når det gjelder oss selv.
🔹 Trygghet skapes ikke bare av lederen – medarbeidere har også ansvar.
🔹 Inside–out refleksjon er modenhet: «Hva kunne jeg gjort annerledes?»
🔹 For lite trygghet → stillhet, forsvar og anonym kritikk.
🔹 For mye trygghet → kameratklubb, lav ansvarlighet og lite utvikling.
🔹 Tydelige forventninger og korrigering er ikke «kjeft» når det gis respektfullt.
🔹 Forklar - Inviter - Responder: Handlinger som kan øke psykologisk trygghet.

Henning refererte også til <strong>Amy C. Edmondson</strong>, Harvard-professor og globalt ledende på psykologisk trygghet. Hennes forskning viser at team med høy trygghet:
✔ presterer bedre
✔ lærer raskere
✔ deler feil tidligere
Men hun er like tydelig som Bang:
<strong>Trygghet uten ansvar gir komfort – ikke kvalitet.</strong>

💬 <strong>Hva tenker dere?</strong>
1. Når oppleves tydelige tilbakemeldinger som hjelp – og når som kritikk?
2. Hvordan balanserer vi psykologisk trygghet med krav og ansvar?
3. Hva kjennetegner medarbeidere som tar eierskap – også når noe butter imot?

Jeg lærer mest når andre tenker høyt sammen med meg.`,
    },
    {
      id: "kapasitet-maraton-01",
      tittel: "Kapasitet bygges over tid – og kan hentes fram når det gjelder, på flere arenaer",
      teaser:
        "Halvmaraton i Kairo og refleksjon om kapasitet: prestasjon bygges over tid og kan hentes fram på flere arenaer.",
      bildeUrl: "/images/maraton.jfif",
      dato: "2025-12-16",
      visningsDato: "16.12.2025",
      kategori: "Lederstil, kultur og team",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `På lørdag deltok jeg i Marakez Pyramids Half Marathon i Kairo, Egypt.
10.000 løpere fra 122 land på startstreken – det ble 18. plass i min klasse.

Til tross for økt og målrettet spesifikk løpstrening i forkant, var det ikke nok til å hente ut fullt potensial denne gangen. Samtidig er jeg overbevist om at prestasjonen og kapasiteten i stor grad henger sammen med det jeg har investert i gjennom mange år tidligere i livet.

Jeg er oppriktig fornøyd med resultatet. Ikke bare som et tall, men som en personlig seier og en bekreftelse på nettopp dette.

Prestasjon handler sjelden om kortsiktig innsats, men om grunntrening – fysisk og mentalt – bygget over tid. Erfaring og kapasitet fra langrenn, løping, tennis, styrke og annen trening sitter fortsatt igjen. I dag trener jeg variert og har særlig stor glede av tennis, både trening og konkurranser. Det gir både styrke, robusthet og den indre driven – motivasjonen som gjør at du trener når ingen ser på.

Det samme gjelder i arbeidslivet.
Utdanning, faglig utvikling og erfaring fra tidligere roller og selskaper gir kapasitet du kan hente fram når det gjelder.

På et nylig fagseminar ble aldersdiskriminering i arbeidslivet diskutert. En representant fra NAV påpekte at mange opplever dette allerede fra de er 50 år. Jeg er ikke der ennå, men refleksjonen er viktig: løsningen er å fortsette å investere i kompetanse, utvikling og læring.

Dette løpet var et tydelig "Big Hairy Goal" – noe å trene mot og glede seg til – et mål som ga retning, energi og forsterket motivasjonen. Det sosiale fellesskapet gjorde opplevelsen enda sterkere. Å være del av et miljø betyr mye, faglig og sosialt. Vi presterte som team, støttet hverandre før, helt opp mot, og etter løpet. Det ble mye refleksjon, treningsteori og utvikling – og ikke minst: det var gøy.

Gjennom roller som tenniscoach og leder har jeg erfart hvor givende det er å bidra til andres utvikling – og å lykkes sammen som gruppe. Medspillere, publikum, støttespillere, kollegaer, familie og venner som heier, løfter prestasjonen ytterligere.

Nå går vi inn i vinteren – med mer fokus på annen type trening, nye økter på snø og arenaer som bygger kapasitet videre. Hva med investeringer på kompetansesiden? Jeg velger bevisst det som bygger verdi – for eksempel å leke mer med AI, som dagens bilde illustrerer. Laget på flyplassen på vei hjem til Norge.

Fun fact:
Kheopspyramiden ble bygget for over 5.000 år siden – ca. 2,5 millioner steinblokker, 2,5–5 tonn hver. Stein på stein. Av mennesker. Vi vet fortsatt ikke helt hvordan.
En påminnelse om hva langsiktig innsats, hardt arbeid, utholdenhet og styring kan skape – enten det handler om byggverk, prestasjon, kompetanse eller mennesker.`,
    },
    {
      id: "videre-franzefoss-2026-01",
      tittel: "Etter 2 år som Nasjonal Salgssjef i Franzefoss Gjenvinning har jeg valgt å gå videre",
      teaser:
        "Avslutning som Nasjonal Salgssjef i Franzefoss. Videre til interim, consulting og investering i AI-kompetanse.",
      bildeUrl: "/images/videre.jfif",
      dato: "2026-01-21",
      visningsDato: "21.01.2026",
      kategori: "Kommersiell ledelse og salg",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Bakgrunnen er ulike strategiske syn på veien videre – og et bevisst valg om å investere tid i videre utvikling og kompetanse før endringene tvinger seg frem, blant annet innen AI.

Tiden i Franzefoss har gitt meg ytterligere solid erfaring innen kommersiell ledelse, salgsutvikling og gjennomføring i en kompleks og samfunnskritisk bransje. Jeg har samtidig fått en dypere forståelse for sirkulær økonomi og gjenvinning, samt hva som faktisk kreves for å lykkes med endring i praksis.

Jeg vil rette en takk til kollegaer for en spennende og intensiv periode, hvor både selskapet og menneskene utviklet seg betydelig.

<strong>I dag for jeg brukt erfaringene aktivt</strong>, bla. som interim leder og rådgiver innen odontologi hos Skøyenåsen Tannklinikk. Denne er i sterk vekst, med flere tannleger, mer spesialiserte behandlinger og tydelig fokus på både eksisterende pasienter og nye kundegrupper. Samtidig er klinikken pusset opp og modernisert for å møte kravene fremtidsrettede klinikker må levere på – faglig, teknologisk og i pasientopplevelse.

AI er også på vei inn i odontologi – ikke bare i undersøkelser og behandling, men innen effektivisering, beslutningsstøtte og utvikling. Her jobber jeg nå konkret med hvordan teknologi kan bidra til bedre kvalitet, flyt og resultater.

Dessuten fortsetter jeg å utvikle MedDrop. Dette er en med-tech start-up og en IoT-basert medisindispenser - med fokus på pasientsikkerhet, compliance og kliniske behov. Prosjektet omhandler innovasjon i skjæringspunktet mellom teknologi, helse, regulatoriske rammer og klinisk praksis.

<strong>Parallelt investerer jeg tungt i egen utvikling:</strong>
• Masterkurs i <em>Generativ AI for Business</em> (BI)
• Praktisk anvendelse og testing utover pensum
• Aktiv læring og deling i nettverket (AI-innleggene jeg publiserer er en del av dette)
• Kurs, nettverk og dialog med spennende fagmiljøer – for å lære og bidra der det er relevant

Perioden jeg er inne i nå er ikke en pause, men en aktiv investering i utvikling, gjennomføringsevne og relevans for fremtidsrettede organisasjoner. Jeg ønsker fortsatt å stå sterkt som en kommersiell leder, der AI er en av mine sentrale lederkompetanser.

<strong>Nysgjerrig på dialog – ikke nødvendigvis ny jobb i morgen!</strong>

Ta gjerne kontakt for en uformell samtale.`,
    },
    {
      id: "brains-not-included-01",
      tittel: "Brains not included – og nettopp derfor blir autentisiteten lederens viktigste fortrinn",
      teaser:
        "I KI-tiden blir autentisitet lederens fortrinn: skriv noe som står for noe. Refleksjoner fra BI-frokost om CTRL+ALT.",
      bildeUrl: "/images/brains.jfif",
      dato: "2026-01-15",
      visningsDato: "15.01.2026",
      kategori: "Lederstil, kultur og team",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I går var jeg på frokostmøte på BI Executive. Temaet var «Slik blir autentisiteten lederens strategiske fortrinn i 2026», med en tydelig kobling til bruk av KI.

Utgangspunktet var boka <em>CTRL+ALT. Strategisk, kreativt og praktisk – kunsten å skrive for virksomheter</em> av bl.a. Øystein Bonvik, som var foredragsholder i dialog med Hanne Kjærnes. Samtalen omhandlet ledelse, språk, merkevare og teknologi.

Hovedpoenget var tydelig:
Når KI gjør det ekstremt enkelt å produsere tekst, blir mening, tydelighet og menneskelig avsender viktigere enn noen gang. Når alle kan skrive "greit", blir det avgjørende å skrive noe som faktisk står for noe.

KI bør derfor ikke brukes til å skrive for oss, men til å hjelpe oss. Som strukturpartner, idéutfordrer og redaktør – ikke som stemme. Brukt riktig fungerer KI svært godt, også til krevende oppgaver. Brukt feil blir kommunikasjonen korrekt, men tom.

Et sentralt begrep i diskusjonen var bevisstløshet. KI gjør det lett å bli nøytral, forsiktig og utydelig. Jakten på å ikke støte noen kan fort ende i tekster som i praksis ikke sier noe. Autentisitet handler derfor ikke om «vær deg selv», men om samsvar mellom hvem vi er, hva vi gjør og hvordan vi uttrykker oss.

Dette henger tett sammen med tone of voice. Mange virksomheter er bevisste på logo og farger, men langt mindre på hvordan de faktisk høres ut. Språk er kanskje den viktigste bæreren av merkevarens personlighet – internt og eksternt.

Et viktig lederpoeng var risikoen når ledere går forbi fagmiljøer og ansatte ved å bruke KI for å få raske svar. Det kan svekke både kvalitet og tillit. KI mangler dømmekraft og empati – og forstår verken kontekst, nyanser eller ordspill slik mennesker gjør. Et godt ordspill kan være åpenbart sterkt for oss, men fullstendig uforståelig for en maskin.

Vi er fortsatt på lekerommet. Akkurat som da PPT og ClipArt kom, tester vi, feiler og lærer. KI er fremtiden, men moden bruk krever bevissthet. KI tar ikke jobben din – men det gjør personen som kan bruke KI klokt.

Det ble også en interessant refleksjon rundt akademia og plagiat. Plagiat er det verste man kan gjøre, samtidig er metodene for å avsløre KI-generert tekst langt fra treffsikre. KI-detektorer har blant annet feilet på tekster skrevet for 20 år siden. Det sier noe viktig om at teknologi ikke er utfordringen, men mer om ansvar og dømmekraft.

Jeg spurte om <strong>tankestrek</strong> – og fikk klar beskjed om å fortsette å bruke den. Den er et bevisst språklig grep, ikke et KI-stempel.

"<strong>Brains not included</strong>" – litt som "batteries not included". KI kan hjelpe oss langt på vei, men det er aldri et fritak for å tenke selv.`,
    },
    {
      id: "frastotende-salg-2026-01",
      tittel: "Med referanse til artikkelen fra ASD Group setter Espen Hellman ord på noe svært viktig for salgsfaget",
      teaser:
        "Espen Hellman og ASD: hva skiller de beste selgerne – lytt, vær ærlig, ta ansvar for fremdrift.",
      bildeUrl: "/images/frastøtende.jfif",
      dato: "2025-12-18",
      visningsDato: "18.12.2025",
      kategori: "Kommersiell ledelse og salg",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Med referanse til denne artikkelen (<a href="https://www.linkedin.com/feed/update/urn:li:activity:7407361511905452033/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/feed/update/urn:li:activity:7407361511905452033/</a> ) fra ASD Group setter Espen Hellman ord på noe svært viktig for salgsfaget. Tilliten til selgere er lav, og få kunder opplever reell verdi i første møte. Samtidig viser artikkelen at det er enkle prinsipper som skiller de beste: Lytt, vær ærlig – og ikke press.

Jeg er helt enig i dette, og samtidig verdt å nyansere hva «ikke presse» faktisk betyr. Godt salg handler også om å ta ansvar for fremdrift. Uten tydelige neste steg risikerer selv gode dialoger å bli utsatt, glemt eller aldri realisert. Hver salgsprosess lever sitt eget liv, men profesjonelle selgere følger opp med riktig timing og tydelighet – på en måte som oppleves naturlig for kunden.

Artikkelen deler også en interessant fun fact:
𝘋𝘦 𝘣𝘦𝘴𝘵𝘦 𝘴𝘦𝘭𝘨𝘦𝘳𝘯𝘦 𝘴𝘵𝘪𝘭𝘭𝘦𝘳 𝘪 𝘴𝘯𝘪𝘵𝘵 32 𝘴𝘱ø𝘳𝘴𝘮å𝘭 𝘪 𝘢𝘯𝘢𝘭𝘺𝘴𝘦𝘧𝘢𝘴𝘦𝘯 – 39 % 𝘮𝘦𝘳 𝘦𝘯𝘯 𝘨𝘫𝘦𝘯𝘯𝘰𝘮𝘴𝘯𝘪𝘵𝘵𝘦𝘵.
For meg handler ikke dette om antall spørsmål, men hvilke spørsmål som stilles. Det krever gjennomtenkte situasjons- og refleksjonsspørsmål – og evnen til å lytte med empati. I fagspråket kaller vi dette aktiv lytting. Når selgeren forstår både hvordan kunden jobber i dag og hvorfor, flyttes dialogen fra pris til faktisk verdi.

Mye av dette ligner god coaching. Når kunden selv formulerer utfordringen – og ofte deler av løsningen – blir beslutningen både enklere og sterkere enn når løsningen presenteres ferdig. Det gir både bedre relasjoner og mer robuste salgsprosesser.

Dette er også grunnen til at jeg har stor respekt for kompetansen i ASD. Jeg har selv brukt dem som leverandør av coachingtjenester innen salg, og opplever at de er spesielt sterke på å utvikle rådgiverrollen – der metodikk, adferd og refleksjon henger tett sammen.

Så til slutt:
𝗛𝘃𝗮 𝘁𝗲𝗻𝗸𝗲𝗿 𝗱𝘂 𝗻å𝗿 𝗱𝘂 𝗵ø𝗿𝗲𝗿 𝗼𝗿𝗱𝗲𝘁 «𝘀𝗲𝗹𝗴𝗲𝗿»?
For meg er en god selger en rådgiver og partner – en som lytter aktivt, er ærlig, tar ansvar for fremdrift og er sterk på (også latent) behovskartlegging og de mellommenneskelige aspektene.`,
    },
    {
      id: "skalering-01",
      tittel: "Hva som faktisk avgjør om skalering lykkes – og hvorfor mennesker, timing og valg er utslagsgivende",
      teaser:
        "Hva som avgjør om skalering lykkes: plan, livssyklus, mennesker og timing. Fra webinaret Skalering i praksis.",
      bildeUrl: "/images/skalering.jfif",
      bildeKortFokus: "82% 13%",
      dato: "2026-01-26",
      visningsDato: "26.01.2026",
      kategori: "Strategi og virksomhetsutvikling",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Mange snakker om skalering som om det først og fremst handler om tempo, ambisjoner og vekst i tall. Min erfaring er at utfordringene oftere oppstår i overgangen fra det som fungerte i går til neste fase.

På onsdag deltok jeg på webinaret <em>Skalering i praksis</em> med Annette Sveen, og flere perspektiver traff godt i min egen lederhverdag.

Et sentralt poeng var viktigheten av å ha <strong>en tydelig plan og retning</strong>. Skalering uten klar forståelse av hvorfor man vokser – og hvor man skal – gjør organisasjonen reaktiv. Er målet videre vekst, internasjonalisering eller salg av selskapet? Uten et eksplisitt svar blir prioriteringer uklare, og ledelsen mister styring.

Videre ble det tydelig hvor avgjørende det er å vite <strong>hvor virksomheten befinner seg i livssyklusen</strong>. Oppstart, vekst, modning og metning stiller helt ulike krav til struktur, ledelse og mennesker. Tiltak som fungerer i én fase, kan bli hemmende i neste. Skalering handler like mye om timing og tilpasning som om gjennomføring.

Et gjennomgående tema var <strong>mennesker som den mest kritiske faktoren i skalering</strong>. Fokus havner ofte på teknologi, systemer og finans, mens gjennomføringsevnen avgjøres av hvordan mennesker samhandler, tar beslutninger og håndterer økt kompleksitet. Manglende samsvar mellom folk, roller og fase skaper friksjon – som koster fart og energi.

Dette kjenner jeg meg svært godt igjen i, og har selv erfaring med bruk av <strong>profilidentifisering og analyseverktøy</strong> på ledernivå og medarbeidernivå. Dette har vært særlig verdifullt i arbeid med salgsrådgivere og kunder. Når vi forstår adferd, drivere og kommunikasjonsstil – hos oss selv og andre – blir ledelse, samarbeid og salg mer presist.

Webinaret løftet også frem <strong>AI som et praktisk verktøy i skalering</strong>, ikke som en erstatning for mennesker, men som en måte å frigjøre kapasitet på. Rådet var tydelig: start kontrollert, test selv først, integrer i eksisterende systemer og identifiser flaskehalser før man ruller bredt. Brukt riktig kan AI bidra til bedre ressursutnyttelse – i tråd med egne erfaringer fra ledelse og salg.

Til slutt ble det pekt på noen <strong>gjennomgående feil i skalering</strong>: manglende plan, feil mennesker i nøkkelroller, feil prioriteringer, for lite teknologiforståelse og fravær av gode sparringspartnere.

Min viktigste påminnelse etter webinaret er enkel, men krevende:
<strong>Skalering starter ikke med å gjøre mer – men med å gjøre de riktige tingene, i riktig rekkefølge, med riktige mennesker.</strong>`,
    },
    {
      id: "tennis-01",
      tittel: "Tennis og Ledelse: Strategi under press",
      teaser:
        "Tennis og ledelse: Djokovic, Alcaraz og overføringsverdi til arbeidsliv – strategi og holdning under press.",
      bildeUrl: "/images/tennis-ledelse.jpg",
      bildeKortFokus: "center 38%",
      dato: "2026-02-10",
      visningsDato: "10.02.2026",
      kategori: "Strategi og virksomhetsutvikling",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Å jobbe målrettet betyr ikke alltid å vinne.
Noen ganger seirer du. Andre ganger taper du finalen.

Oftere enn vi liker å innrømme, kommer du ikke dit en gang.

I desember skrev jeg om halvmaratonet i Egypt og hvordan kapasitet bygges over tid, stein på stein, og kan hentes fram når det gjelder. Den refleksjonen tok jeg med meg også hit.

Under Australian Open nylig fikk jeg se Novak Djokovic slå ut Jannik Sinner i semifinalen. En ny generasjon på full fart opp – og den «gamle» mesteren som fortsatt finner en vei til seier. Stor som vinner.

For to år siden satt jeg tett på banen i Paris under OL og så Djokovic vinne over erkerivalen Carlos Alcaraz i finalen. Gull. Den eneste medaljen han manglet. Kulminasjonen av et livsverk.

I år, i Melbourne, opplevde jeg mye av det samme, men med motsatt utfall. I finalen tapte Djoko mot "Carlitos" etter en brutal, tett og fysisk kamp.
To øyeblikk. Samme utøvere. To helt ulike resultater.

Det som gjorde sterkest inntrykk denne gangen, var ikke bare tennisen – den er i en egen liga – men det som kom etter kampen.

I en idrett der «kun seire teller», i hvert fall for Djokovic, leverte han et intervju preget av verdighet, takknemlighet og respekt. For teamet sitt. For motstanderen. For publikum. For reisen. Stor – også som taper.

Djokovic er av mange regnet som the GOAT. Samtidig er han en av de mest kontroversielle skikkelsene i moderne tennis. Emosjonell. Sta. Prinsippfast. Kritisk til systemer og rammer, som blandt annet kostet ham dyrt som under covid-perioden og boikotten av Australian Open. Likevel er det slående hvor elsket og respektert han er, også nettopp i Australia. For spillet. For mental styrke. For viljen til å stå i motvind. Jeg kjenner ingen annen som er mer rå på dette enn han.

Som aktiv tennisspiller selv – og dette er idretten jeg elsker mest, av mange – treffer dette ekstra godt. Jeg kjenner igjen arbeidet bak: timene på banen, justeringene, frustrasjonen, gjentakelsene. Tennis er brutalt ærlig. Du står alene på banen med ansvaret, men lykkes aldri alene over tid.

Dette er noe tennisverdenen ofte er gode på å vise frem. Mange spillere på touren er flinke til å løfte teamet rundt seg og vise respekt for konkurrenter. I andre idretter ser vi dessverre oftere det motsatte, der dette forsvinner når presset blir stort.

Og Alcaraz. For en utøver!
En kunstner. Kreativ, modig og leken – samtidig ekstremt målrettet. Han skaper entusiasme og kjærlighet til sporten. Det er også en form for prestasjon.

For meg handler dette ikke bare om tennis.
Det handler om veien mot å bli nummer én – i idrett, jobb og liv. Om å tåle kontrastene mellom seier og tap. Og om å fortsette å investere i prosessen – slik jeg også erfarte i maratonløpet.

Overføringsverdien til arbeidsliv og ledelse er større enn mange tror.`,
    },
    {
      id: "landet-rikt-01",
      tittel: "Din virksomhet kan være langt inne i forfall – men du merker det ikke",
      teaser:
        "Landet som ble for rikt: hvordan overflod skjuler forfall i virksomheter – og hva ledere kan gjøre annerledes.",
      bildeUrl: "/images/landet-rikt.png",
      dato: "2026-02-05",
      visningsDato: "05.02.2026",
      kategori: "Strategi og virksomhetsutvikling",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `Din virksomhet kan være langt inne i forfall.
Men du merker det ikke – fordi kontoen er full.

På nylig ferie i Australia leste jeg Martin Bech Holte sin bok <em>Landet som ble for rikt</em>. Det startet som en bok om norsk økonomi. Det endte som det mest ubehagelige speilet jeg har holdt opp mot egne ledererfaringer.

<strong>Dette er Norges feil – og sannsynligvis din også.</strong>

Det som gjør dette ekstra ubehagelig, er at dette ikke er nytt. Historien er full av land og selskaper som bygget enorme verdier – og mistet dem. Ikke fordi krisen kom brått, men fordi disiplinen forsvant. Overflod fjernet behovet for prioritering, og varsellampene ble ignorert fordi tallene fortsatt var grønne.

Forfallet skjer ikke dramatisk, men gradvis. Tempoet går litt ned. Beslutninger tar litt lengre tid. Ansvar pulveriseres. På papiret ser alt greit ut, men i praksis taper organisasjonen fart. Akkurat slik har Norges produktivitet falt med 11% siden 2013, samtidig som oljefondet vokste til over 21.000 milliarder kroner.

I ledergrupper ser jeg det samme mønsteret: «Vi har råd», derfor tolereres ineffektivitet. I salg ansetter vi flere selgere i stedet for å forbedre konverteringsraten. Vi øker markedsbudsjettet fremfor å jobbe systematisk med sales enablement, prosessforbedring og smartere bruk av støttefunksjoner. Kunstig knapphet, selv med midler, er ofte nøkkelen til høyere produktivitet.

Så skjer det neste. De beste lederne og verdiskaperne mister tålmodigheten. Når støttefunksjoner, prosesser og interne hensyn gradvis får forrang foran faktisk verdiskaping, vet jeg at rikdomsfellen har slått til. De som skaper resultater, opplever økende friksjon og søker seg bort. Igjen sitter de som er komfortable med status quo. Revenue per employee synker, men ingen reagerer – fordi de absolutte tallene fortsatt vokser.

Systemet produserer det du incentiverer. Bonus på aktiviteter. Pipeline uten kvalitetskrav. Salg som belønnes uavhengig av margin, kundetilfredshet eller retention. Resultatet er forutsigbart: salg til feil kunder.

«Vi har god tid» er kanskje den farligste illusjonen av alle. Sverige brukte rundt 20 år fra topp til bunn. Norge kan være langt inne i en tilsvarende utvikling, men merker det ikke da oljefondet maskerer smerten. Fokus glir bort fra kjernekompetansen. Endringene skjer sakte først – og deretter i akselererende tempo.

I salg ser det slik ut: ACV faller gradvis. Sales cycle blir lengre. Win rate mot primærkonkurrent går fra 60 % til 45 %. Men absolutt omsetning vokser fortsatt 10 % årlig, så ingen slår alarm.

Spørsmålet er ikke om dette kan snus. Historien viser at det kan det. Hva må endres før tallene også begynner å peke feil vei?`,
    },
    {
      id: "norge-virksomhet-01",
      tittel: "Hvis Norge var en virksomhet – hva måtte ledelsen gjort nå?",
      teaser:
        "Hvis Norge var en virksomhet: læring fra Bech Holte om disiplin, ressursallokering og AI som styringsverktøy.",
      bildeUrl: "/images/norge-virksomhet.jpg",
      dato: "2026-02-07",
      visningsDato: "07.02.2026",
      kategori: "Strategi og virksomhetsutvikling",
      link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
      innhold: `I <em>Landet som ble for rikt</em> beskriver Martin Bech Holte hvordan Norge gradvis har mistet fart, ikke fordi vi mangler ressurser, men fordi de brukes feil. Det interessante spørsmålet for oss som leder virksomheter er ikke om analysen er helt presis, men hva vi kan lære av mønsteret – og gjøre annerledes.

<strong>Læring for virksomhetsledelse</strong>

Bokens kjerne er enkel og ubehagelig: Overflod fjerner press. Når smertegrensen aldri nås, uteblir prioriteringene. I virksomheter ser det ofte slik ut: Kapital allokeres basert på historikk og intern gjennomslagskraft, ikke effekt. Budsjetter vokser, mens output per ansatt faller. Flere initiativer startes enn avsluttes. «Vi har god tid» blir et styringsprinsipp. Resultatet er sjelden krise, men stagnasjon – slik som på nasjonalt nivå.

<strong>Løsning for virksomheter</strong>

Virksomheter som bryter dette mønsteret gjør noen grunnleggende ting annerledes. De innfører kunstig knapphet også når kontoen er full, og lar ikke alt som er mulig leve. De flytter ressurser basert på effekt, ikke intensjon. De styrer etter produktivitet og outcome fremfor aktivitet og headcount. Og de justerer incentiver slik at langsiktig verdiskaping belønnes høyere enn volum og synlighet.

Her kan AI være et virkemiddel, men bare når det brukes riktig. Ikke som et individuelt produktivitetsverktøy, men som støtte for bedre prioriteringer, mer objektiv ressursallokering og tidligere varsler om hva som faktisk ikke virker. 88% av organisasjoner bruker AI i minst én funksjon i 2025, ifølge McKinsey. Likevel uteblir gevinstene ofte, fordi teknologien ikke bygges inn i kjerneprosessene.

Erfaringene fra studiet Generative AI for Business ved BI har gjort én ting tydelig for meg: AI-transformasjon handler om styring, ikke lisenser. IBM rapporterer 4,5 milliarder dollar i årlige produktivitetsgevinster fra ende-til-ende prosessautomatisering, ikke enkeltverktøy. I salg betyr dette blant annet sanntidsanalyse av deals, automatisert lead scoring, mer presis prising og forecasting som faktisk kan brukes til styring. Men dette må ledes fra toppen. AI er ikke et IT-prosjekt, det er en kjernekompetanse.

<strong>Første 90 dager – en praktisk start</strong>

Skulle dette vært operasjonalisert, ville jeg startet med en grundig gjennomgang av hvor pengene går, hva som belønnes i incentiver, og om målingene sier noe om reell verdiskaping. Deretter må ressursallokering, KPI-er og beslutningsmodeller designes for effekt, ikke aktivitet. Først i siste fase handler det om konsekvent gjennomføring, også når det betyr å stoppe initiativer som ikke leverer.

Poenget er ikke å bli mer effektiv.
Poenget er å gjeninnføre disiplin før den påtvinges.

Norge ble ikke svakere fordi vi manglet ressurser.
Virksomheter feiler ofte av samme grunn.`,
    }
];

const tennisLedelseEn: Record<string, LocalizedTextMap> = {
  "vi-rodde-sammen-fotball-vm-2026-07": {
    tittel: "We rowed together",
    teaser:
      "The ro chant at the World Cup became a movement — and a picture of what good teams, clear direction and lasting culture can create long after the match itself.",
    innhold: `Norway lost a dramatic quarter-final against England. Still, the team created something that may last far longer than the tournament itself.

What started as a supporter chant literally became a movement.

Throughout the World Cup, Norwegians have rowed in stands, on big screens, in town squares and at bars. The rowing has also attracted international attention.

It has been incredibly fun to take part.

I watched four Norway matches on big screens around Oslo. The atmosphere and sense of togetherness have been fantastic. People who did not know each other sat side by side and moved in the same direction. People bought drinks for one another. Suddenly we were all friends, and then it felt natural to give.

That is a strong picture of what good teams achieve.

Norway has great individual players. Haaland, Ødegaard, Nyland and Schjelderup have all delivered important contributions. The results still came because the team worked within a clear direction, with roles that complemented each other.

Here Solbakken deserves clear recognition as a leader. He has stood in criticism, held to the direction and built a team where strong profiles fit into a larger whole. That requires courage, clarity and trust in your own leadership team.

Portugal shows the risk of building the team around one star. Ronaldo has delivered at a level few can match, but his status can make the team less flexible. When teammates look to the star and the coach gets less room to act, the leadership team must put the whole first.

The same applies in organisations.

Good leaders develop strong individuals, but at the same time build systems, culture and leadership teams that make the organisation less dependent on one person. More people must be able to take responsibility when the situation requires it.

The match against England also showed how important trust in the systems is. VAR decisions, the disallowed goal and the camera operator created strong reactions. FIFA has a troubled corruption history, and then suspicion that the biggest and most commercial teams are favoured quickly takes hold.

There is no documentation that the match was manipulated. Still, decisions must be transparent and understandable if the system is to retain legitimacy.

On Monday I sat at Gardermoen with my family waiting for our own holiday departure. When NCR720 landed with the national team, Flightradar24 showed «Ro Ro Ro Ro Airlines». More than 100,000 followed the flight. We watched the touchdown live.

I saw the excitement in my children's eyes. Maybe they could catch a glimpse of the World Cup players. Suddenly football was not only about playing yourself, but also about following the team, sharing the experiences and feeling part of something bigger.

Norway came home to a nation that stood behind them.

Being a good loser is not about downplaying defeat or spending energy on external explanations. It is about taking responsibility, learning from what happened and using the experience to come back stronger.

Now the leadership task is to make this more than a summer memory.

The togetherness, culture and belief must be carried forward. 💯

We must keep rowing together. 🚣

#Ledelse #Teamutvikling #Kultur #Prestasjon #FotballVM`,
  },
  "verdier-kultur-kommersiell-ledelse-2026-06": {
    tittel: "What do you allow to become culture?",
    teaser:
      "Culture is rarely what we say we stand for. It shows in what we reward, tolerate and correct — and in how values are actually tested when something costs.",
    innhold: `A few weeks ago I wrote about what happens when pressure becomes the leadership model itself.

The core point was that lasting results require more than pressure. They require a system behind performance. A central part of that system is culture.

And culture is rarely what we say we stand for. It shows in what we reward, tolerate and correct.

Most organisations have good words.
Customer focus
Accountability
Collaboration
Integrity
Quality
Continuous improvement

The problem is rarely the words, but whether they actually have consequences in everyday work.

This is easy to recognise in commercial environments.
💥 Activity is rewarded more than customer value.
💥 Problems are passed on instead of being solved where they arise.
💥 CRM is said to be a shared workspace, but poor use is still accepted. Then the organisation quickly learns that structure matters in theory, but is optional in practice.
💥 A strong salesperson who delivers numbers but breaks process and weakens the team is allowed to pass because the results look good.
💥 Or the opposite: A weak employee starts working against the culture, undermining the system and draining those around them, without action being taken early enough.

I have experienced myself how demanding this can be in practice.

When poor behaviour is accepted because deliveries on the surface look good enough, it says something about the culture. Not just internally. Externally too. Over time it affects trust, collaboration, reputation and how the organisation is actually perceived.

💡 Edgar Schein described organisational culture as the basic assumptions a group has learned to take for granted over time. These are the patterns that govern how people actually act, often without noticing it themselves.

That is why culture becomes very concrete.

Culture shows up in what the organisation learns it pays to do:
🔸 If we say openness, but reward withholding, internal positioning and little sharing, we teach people to keep their cards close. Hidden agendas emerge.
🔸 If we say collaboration, but let individuals stand outside shared standards, we teach the organisation that standards are optional. Then we are not building culture. We are building exceptions.

Values are tested first when something costs.
When margins are squeezed.
When the pace increases.
When an important customer challenges us.
When a good performance comes with poor behaviour behind it.
When the quick choice is not the right choice.

For a leader, this is a design question.
What do you reward?
What do you let pass?
What do you correct early enough?

Feedback that only addresses results changes little over time. It is the behaviour behind the results that builds capacity, learning and culture.

Values must also be owned by employees. They only become strong when people use them to make better choices, not just wait for the leader to clarify everything.

👉 That is why values are one of the most practical management tools a leader has.
Because they determine what happens when there is no simple solution. 💯

#kommersiellledelse #organisasjonskultur #prestasjonskultur #verdibasertledelse #gjennomføringskraft`,
  },
  "trykk-prestasjon-kommersiell-ledelse-2026-05": {
    tittel: "When pressure becomes leadership",
    teaser: "More pressure is rarely a sustainable leadership model. Commercial leadership is about results — but lasting performance is built in the space between clear demands and real ownership.",
    innhold: `More pressure is not a leadership model. It is a short-term response.

I have seen and experienced it many times. Results fail to materialise, and the answer becomes more meetings, tighter follow-up, higher activity requirements and a faster pace.

Sometimes that is necessary.

The problem arises when pressure becomes the model itself.

Commercial leadership is about results. It should be. Sales, margin, customer value and growth are the mandate. But lasting results are rarely created through pressure alone.

Over time, Bård Kuvaas has highlighted the importance of autonomy-supportive leadership. Leaders who explain direction, ask good questions and support employees without becoming controlling often build stronger motivation, better performance and lower turnover.

Gallup points in the same direction. Highly engaged teams deliver better on customer loyalty, sales productivity and profitability. Engagement often starts with something as fundamental as clear expectations.

Does that mean employees should be shielded from demands?

In a strong commercial environment, responsibility goes both ways. The leader must create direction, structure, trust and follow-up. Employees must take ownership, be open to feedback, contribute to learning and stand in execution when it requires something of them.

That is where the dynamic gets interesting.

When leadership becomes pure control, the team loses momentum. When autonomy comes without direction, the organisation loses pace. Performance is built in the space between clear demands and real ownership.

Then activity becomes more than volume. It gets direction. Activity is linked to customer insight, quality, priorities and real value.

This is where many commercial environments lose momentum. They measure more, but learn less. They demand more, but do not always build capacity. They increase activity, but do not necessarily get stronger execution. For me, the difference between quantity and quality is one of the most important distinctions in commercial leadership.

Sales results are created through people who must handle pace, uncertainty, rejection and demanding customer needs, day after day.

That is why turning up the volume alone rarely works. You must build a system that makes performance possible.

The system must have:
🧭 Direction
⏱️ Rhythm
✅ Accountability
🤝 Collaboration
💡 Learning
🌱 Culture

That is the difference between a team that delivers when pressure rises, and a team that simply becomes more exhausted.

Commercial leadership is about building the engine behind the results.

#kommersiellledelse #prestasjonskultur #salgsutvikling #kundeinnsikt #gjennomføringskraft`,
  },
  "gronne-exceltall-transformasjon-2026-05": {
    tittel: "The green numbers are not the problem.",
    teaser: "The business case looks good in Excel — but benefits often leak in operations. Good transformations start with the full reality, not just the curves.",
    innhold: `The problem is everything they do not show.

In leadership meetings, a business case can make a complex decision dangerously simple. Costs go down. Capacity goes up. The curves point the right way. Everyone wants to act. 🥊

Then the change starts.

Customers notice that the flow is not as good. Employees lose ownership of processes they used to control. Coordination gets heavier. Quality dips a little before anyone can explain why. And the benefits that looked so clear in Excel begin to leak in operations. 💣

That does not mean transformation is wrong. On the contrary. Change is necessary.

But good transformations do not start with a neat spreadsheet alone. They start with a more honest picture of reality — the whole reality!

My concrete advice is simple.
💥 Do not approve the project until someone has built the underside of the spreadsheet.
What does the change mean for customers, people, quality, coordination and ownership?
That is often where benefits are either realised or lost.

McKinsey has long pointed out that around 70% of transformations do not reach their original goals. I have seen this often myself too, and my experience is that the cause is rarely weak strategy. It usually lies in analysis that is too narrow, too little anchoring, and too weak execution capability.

AI can be a timely example. Many organisations adopt AI quickly, driven by ambitious benefit estimates and legitimate pressure to keep up. But AI does not create value because the technology is rolled out. It creates value when it is built into workflow, roles, quality, accountability and leadership.

One case I recently noted was Elkem and Egde's E2 model. It treats AI as an operating model that must be built through platform, concrete use cases and organisation, where user adoption and workflow matter as much as technology. The results were formidable!

So next time the numbers look a bit too neat, I would ask one question first:
What does Excel not see?

Because leadership is not only about making a change add up.
It is about seeing what the change does to people, customers and operations.

#Transformation #Leadership #ChangeManagement #Strategy #DecisionBasis`,
  },
  "pappa-forst-trener-etterpa-2026-01": {
    tittel: "Dad first. Coach afterwards?",
    teaser: "Motivation, trust and psychological safety at home and on the tennis court: when is it more important to be a dad than a coach — and what happens when your own ambitions overshadow the kids’ joy?",
    innhold: `Over the past week I have written about motivation, trust and psychological safety. Topics we often talk about in leadership, but which may matter even more at home.

What happens when you want to motivate, but create pressure? When you want to help, but take too much space? And when your child needs safety more than correction?

For me this also hits the tennis court. 🎾

I have played tennis almost my whole life, and I still play quite a lot.

I am also a trained tennis coach, and perhaps best of all: I get to share the sport with my family. Both my wife and our children, almost 5 and 7, play tennis. 👨‍👩‍👧‍👦

There is something very fine about that. But also something demanding.

Tennis is a fantastic school for life, and chasing a dream is beautiful. But a parent’s job is first and foremost to believe in their child, not to put pressure on them or live the journey for them.

If I am completely honest, I have felt pride when the kids succeed. But I have also felt frustration, and a bit of irritation, when it does not go quite as well. And that may not be so great. 💣

Perhaps that is why the question struck me when I saw the reflection that Novak Djokovic does not want to coach his own children. No comparison intended, but the thought is interesting: Maybe it is more important to be a dad than a coach.

At the same time, this is not black and white. Norway’s best tennis player of all time, Casper Ruud, has his father as coach. Many elite athletes have had parents as both supporters and coaches on the way to the top.

Perhaps that shows the question is not whether parents can be coaches, but 𝑤ℎ𝑒𝑛, ℎ𝑜𝑤 and ℎ𝑜𝑤 𝑙𝑜𝑛𝑔 it is right.

USTA describes the parent role in tennis first and foremost as support, safety and unconditional backing. Research also points out that the parent–coach combination can bring both quality time and motivation, but also role confusion, pressure and conflict.

And perhaps some of this is also age-related.

When children are small, it can be completely natural for a parent to introduce the play, the movements and the joy of the sport. But over time, the relationship may be best served when others take a clearer coaching role.

By the way, the image for this LinkedIn post is a bit playful. I have put my own face in front of the kids’. It is meant to say something about how easy it is to project your own ambitions onto them. Or how high expectations you may end up setting, because you have always set high demands on your own development.

In any case, it is a useful reminder for me.

I love tennis.

I love that my family does too. 💯

But perhaps my most important task is not to develop their strokes.

💙 Of course it is to preserve the joy. ❤️

👉 What do you think?

Is it a strength or a pitfall when parents are also coaches?

And does this change with age?

#tennis #parenting #sportjoy #mastery #development #leadership`,
  },
  "psykologisk-trygghet-krav-2026-01": {
    tittel: "Psychological safety is not the absence of demands",
    teaser: "Psychological safety is not the absence of demands. It is about making people safe enough to contribute fully — with clarity, respect and responsibility both ways.",
    innhold: `Psychological safety is sometimes portrayed as if it is about making working life softer, less direct or less demanding.

I think that is a misunderstanding.

In performance environments, and especially in commercial environments, there should still be:
• expectations
• demands for effort
• clear goals
• responsibility for deliveries

That is not the problem.

The problem arises when high demands are combined with low respect, unclear communication or a culture where people do not dare speak up, ask questions or report risk early enough.

Then you do not get more performance. You get more silence, poorer information and weaker learning.

For me, psychological safety is therefore not about lowering demands. It is about making people safe enough to contribute fully.

And that responsibility goes both ways. 💥

The leader has a particular responsibility to set direction, be clear, follow up, correct with respect and create frameworks that make it possible to contribute.

But employees also have a responsibility:
• to show up prepared
• to take ownership
• to contribute constructively
• to speak up when something is unclear
• to stand in demands, feedback and expectations

Safety does not mean a right to be passive. It means safety to be active.

That is an important difference.

The best performance environments are therefore not the most comfortable. They are the safest for thinking aloud, challenging, learning, adjusting and delivering under pressure. 📈

I also believe this is one of the most underestimated connections in leadership:

High demands are best tolerated where respect is high. 💯

When people experience clarity, respect and predictability, they also tolerate more pressure, more correction and higher expectations. Not because demands become lower, but because the framework becomes better. ⚖️

Perhaps that is why psychological safety is not primarily a wellbeing topic.

It is a topic about quality, responsibility and execution in the pursuit of goals. 🎯

#leadership #psychologicalsafety #trust #execution #commercialleadership`,
  },
  "tillit-endring-gjennomforing-2025-01": {
    tittel: "People rarely resist change",
    teaser: "People rarely resist change. They resist ambiguity, distance and low trust.",
    innhold: `People rarely resist change. They resist ambiguity, distance and low trust.

That is an important distinction for leaders who need to execute something that truly matters.

When transformations stall, it is often explained as resistance to change. In practice, it is just as often about people not understanding the direction, not seeing their role in it, or not trusting the process behind it enough.

This is where trust shifts from being a culture word to becoming an operational leadership tool.

High trust reduces friction. It means decisions do not have to be sold again in every meeting. It helps people act faster, report mistakes earlier, and take greater ownership of what needs to be delivered.

Low trust does the opposite. It increases internal transaction costs: more control, more escalation, more time spent repairing what was not clearly said the first time.

In commercial environments, this is clear when leadership changes priorities, pricing models or sales focus. If people are only told 𝘸𝘩𝘢𝘵 has been decided, but not 𝘸𝘩𝘺, friction rises quickly. When the rationale is clear, both pace and execution improve.

The same applies to AI. Many AI initiatives do not stop because people are against the technology, but because they do not trust the purpose, the data foundation, or how the solution will be used. When value, control and role clarity are clear, adoption increases.

It is also not enough to communicate what has been decided and why. Leaders must also communicate 𝘩𝘰𝘸 it will actually be executed in practice. When something new is placed on someone's shoulders without clear frameworks, priorities and support, uncertainty and friction quickly appear. When people understand direction, rationale and what is expected of them, acceptance, ownership and action increase. 💥

Research points in the same direction. Employees in high-trust organizations report lower stress, higher productivity and stronger engagement than in low-trust organizations.

🤝 Trust is therefore not a soft topic. It is an operating system for execution.

🎯 The question is not only whether leadership believes in the plan. The question is whether the organization has enough trust to follow it.

#Leadership #Transformation #ChangeManagement #Execution #Trust`,
  },
  "hva-motiverer-kunnskapsarbeid-2026-01": {
    tittel: "What motivates YOU and people in knowledge work?",
    teaser: "Bonuses can drive activity, but quality, learning and ownership are more often built through meaning, mastery, autonomy and inspiration.",
    innhold: `𝐇𝐯𝐚 𝐦𝐨𝐭𝐢𝐯𝐞𝐫𝐞𝐫 𝐃𝐄𝐆 og 𝐦𝐞𝐧𝐧𝐞𝐬𝐤𝐞𝐫 𝐢 𝐤𝐮𝐧𝐧𝐬𝐤𝐚𝐩𝐬𝐚𝐫𝐛𝐞𝐢𝐝?

I forrige innlegg skrev jeg at gode intensjoner ikke er nok. Men mellom intensjon og handling ligger også et annet spørsmål:

Hva er det som får mennesker til å ville bidra, utvikle seg og ta ansvar over tid?

Mange ledere svarer fortsatt raskt: bonus, insentiver og prestasjonslønn.

Forskningen svarer mer nyansert. I masteroppgaven min for endel år siden skrev jeg om belønning og arbeidsmotivasjon i kunnskapsbedrifter. Der fant jeg et tydelig spenningsfelt: Prestasjonsbasert belønning kan øke kvantitet, men ikke nødvendigvis kvalitet. I noen tilfeller kan den også fortrenge det indre drivet som kunnskapsarbeid er avhengig av.

I kunnskapsarbeid er ikke spørsmålet bare om folk jobber mer. Det er om de tenker bedre, lærer raskere, samarbeider klokere og tar ansvar også når ingen følger med.

Derfor tror jeg mange ledere overvurderer effekten av bonus, og undervurderer betydningen av mening, mestring, autonomi, anerkjennelse og utvikling. Oppgaven min peker særlig på kompetansehevende tiltak som en sterk motivasjonsfaktor.

Et kommersielt eksempel:
To selgere kan ha samme bonusordning. Den ene jager kortsiktig volum. Den andre bruker tid på å forstå kundens behov, bygger tillit, utvikler egen kompetanse og skaper høyere verdi over tid.

Begge kan levere aktivitet. Men ikke nødvendigvis samme kvalitet.
Det er derfor belønning er mer enn et lønnsspørsmål. Det er et ledelsesspørsmål. For det du måler, premierer og gir oppmerksomhet til, former ikke bare innsatsen. Det former kulturen.

Jeg tror også det finnes et nivå 𝑜𝑣𝑒𝑟 motivasjon som ledere snakker for lite om: inspirasjon.

Motivasjon kan få folk til å stille. Inspirasjon får dem til å ville mer enn minimum.

Motivasjon kan være knyttet til mål. Inspirasjon er oftere knyttet til mening.
Kanskje er det derfor videreutdanning, faglig vekst og muligheten til å mestre nye områder ofte virker sterkere enn ledere tror.

For meg ligger motivasjon og inspirasjon ofte i læring, utvikling og det å forstå nye sammenhenger. Derfor opplever jeg også videreutdanningen jeg nå tar ved BI i 'Generative AI for Business' som mer enn faglig påfyll, den gir ny energi, nye perspektiver og større handlingsrom.

Et nyttig perspektiv fra forskningen er også de tre C-ene for arbeidsmotivasjon: Content, Context og Change. Altså hva arbeidet inneholder, hvilken kontekst folk jobber i, og hvordan motivasjon endrer seg over tid.

Og det leder naturlig til neste tema:
Selv sterk motivasjon er ikke nok hvis mennesker ikke har tillit til retningen, beslutningene eller lederne som kommuniserer dem.

👉 Neste innlegg vil derfor handle om at tillit ikke er "mykt". Det er gjennomføringskraft.`,
  },
  "alle-enige-ingen-gjor-noe-01": {
    tittel: "Everyone agrees. Nobody does anything.",
    teaser: "When strategy does not become behaviour: why agreement is not enough, and what is actually needed to succeed with transformation in practice.",
    innhold: `Most businesses I meet do not lack ambition, strategies or the will to change. They have another problem, which is that what is decided in the meeting room does not happen in the market.

It is not sabotage or laziness. There is a gap that research has thoroughly documented, and which managers systematically underestimate: the distance between intention and actual behaviour. In my master's thesis on precisely this gap — rooted in the Theory of Planned Behavior — one of the clearest findings is that a high degree of agreement and a positive attitude are not sufficient to predict action. People can mean what they say. They may want to change. And yet don't do it.

In commercial management and sales management, the consequences are directly measurable. The priorities are clear, the KPIs are set, and everyone nods in the kickoff meeting. Three months later, the behavior in the customer dialogue is the same as before. Not because the strategy was wrong, but because no one translated it into concrete patterns of action: who does what, in what situation, and what is the first step? This is where transformations run aground. Not in the planning phase, but in the transition from intention to routine.

McKinsey's research on organizational transformation shows that 70% of change initiatives do not achieve their goals. The most frequently reported reason is not the wrong strategy or lack of resources, but the inability to change actual behavior across the organization. What separates the 30% who succeed is not better plans, but that managers at all levels actively model the new behavior themselves, rather than delegating the implementation downwards.

What helps is not more communication of the vision. There are implementation intentions — concrete if-then plans that link desired behavior to specific situations and triggers. Research consistently shows that this type of concretization significantly increases the likelihood of implementation, compared to general goal statements alone. In practice, this means that managers must go further than communicating what should happen, and into the more demanding work of designing the behavior that will carry the strategy.

The most difficult conversation in many leadership groups is not about direction. It is about what we stop doing, what we start doing differently tomorrow, and who is responsible for following up that it happens. Agreement is comfortable. Concrete behavior change is uncomfortable, because it reveals who delivers and who doesn't.

<em>The road to hell is paved with good intentions.</em> In management, it is not a proverb — it is an operational risk. The way forward is not built by intentions alone, but by action, responsibility and follow-up.

👉 Next post in the series on management, strategic implementation and transformation in practice: What actually motivates people in knowledge work? The research does not always answer what managers expect.`,
  },
  "to-parallelle-spor-ledelse-ai-01": {
    tittel: "I have written a lot about AI. Now I also want to write more about management, strategy and transformation",
    teaser: "Two clear tracks ahead: AI, technology and future working life - as well as management, strategy and transformation in practice.",
    innhold: `Recently, I have written mostly about AI, future technology management and how new tools will affect working life. I will continue with that.

But I have also felt the need to lift up a larger part of my own core. Because I am primarily a commercial manager who has worked with sales, marketing, personnel management, strategy, change and responsibility for results in knowledge-intensive industries.

I like to work strategically, but also operationally and closely. Close to people, customers, operations and what actually happens when plans are to be translated into action. It is often where leadership is really tested.

Therefore, in the future I will build more clearly in two parallel tracks:
• AI, technology and future working life
• Management, strategic management, commercial management and transformation in practice

Through two master's degrees, including an Executive Master of Management from BI, I have delved into several topics that I believe are at least as relevant today:
• What actually creates motivation?
• Why do good intentions so often remain just that?
• How do leaders get people to move, not just nod?
• What builds trust, ownership and psychological security?
• How do culture, autonomy and recognition affect actual performance?
• Why do some transformations look right on paper, but become demanding in reality?

And here is the link to today's picture. 💡

The cartoon struck me because it shows a classic mistake in many businesses: We adopt new technology, but let old habits, control needs and symbolic actions control how it is used. The result is that we do not digitize the work. We just digitize the friction!

We talk a lot about "human in the loop" in AI. I believe it is equally relevant in management.

Many people think that resistance to change is primarily about attitude. Often it is just as much about obscurity. People rarely move because they have heard the message once. They move when they understand what is actually expected of them differently in practice.

Too many organizations do not lack strategy, plans or ambitions. They lack the ability to translate intention into actual behaviour, ownership and implementation.

Therefore, the next post will be based on one of the titles from my BI work:
👉 “The road to hell is paved with good intentions.”`,
  },
  "econa-innovasjon-ideer-verdi-01": {
    tittel: "This is how you build an organization where ideas turn into value",
    teaser: "Reflections from Econa on innovation: structure, facilitation and culture that make good ideas actually turn into value.",
    innhold: `On Thursday I participated in the Econa event "Innovation and development - become more opportunity-oriented", with lectures and workshops led by Nina Prestegard.

One of the most interesting things was not how many ideas there are in an organization, but how they are handled. Many businesses have employees who come up with good ideas, but the ideas often appear in the hallway, between meetings or in unstructured settings. They are often met with a "good input", but without clear follow-up. Over time, it weakens both initiative and commitment.

The course was clear that innovation does not happen by chance. It must be designed, both through structure and culture.

Three things stand out in particular:
• Structure beats randomness. Idea work must have clear frameworks, issues and ownership. If not, it will be random what is taken next.

• Groups must be facilitated. Without structure, you get groupthink, dominance and early criticism. Let people think individually first, and build further together.

• Distinguish between exploration and decision. Many go to assessment too quickly. Then the ideas stop before they have had a chance to develop.

Another important point was that creativity is not a quality someone has, but a skill that can be trained. We are often trained to find correct answers, not to explore multiple possibilities. Therefore, managers must consciously facilitate divergent thinking, where the aim is to open up before narrowing down. Curiosity and questions like “what if?” and "can you elaborate?" is a prerequisite for better decisions.

At the same time, this is not only about management, but also about ownership. It cannot be expected that the manager alone will drive forward all ideas that come in. Real innovation happens when employees themselves take responsibility for further developing proposals, testing them and facing the uncertainty. Autonomy builds ownership, and ownership creates progress.

In terms of experience, it is smart to establish regular innovation meetings with a clear structure. Ideas are presented briefly, one person owns further development, and the next step is clarified before the meeting ends. It provides both direction and responsibility, while at the same time signaling that ideas are taken seriously.

For managers, this means that you have to go from asking for ideas to building systems that actually handle them. It is about creating space for exploration, but also clear responsibility for implementation.

The link to commercial management is direct. If you want to develop new services, improve customer experiences or use AI, good intentions are not enough. You must have an organization that is capable of developing, prioritizing and realizing ideas in practice.

My most important takeaway is therefore simple: Innovation is not primarily about more ideas, but about building a structure and a culture where ideas become valuable.`,
  },
  "nettside-lansering-2026-01": {
    tittel: "From coding in 1999 to AI revolution in 2026 - new website and new consulting company!",
    teaser: "New website built with AI tools in two days - and launch of Marius Ottesen Consulting as a bridge between strategy and AI implementation.",
    innhold: `The last time I built a website from scratch was as a student in the USA in 1999. Then I wrote each line of HTML manually. The last 48 hours have been an eye-opener: I just launched <strong>my new website</strong> - built in just two days!

This is not thanks to my coding skills, but the power of strategic use of AI. Combining <strong>Cursor</strong>, <strong>Claude 3.5 Sonnet</strong>, <strong>Opus 4.6</strong> and <strong>Gemini 1.5 Pro</strong>, I have served as the architect while the AI ​​systems have handled the coding.

The process has also included setting up version control with Git and GitHub, deploying via Cell and connecting to my own domain - so that I can both iterate safely and have full control over how the website is published and updated.

But the project is about more than technology. It is about <strong>Bridge building</strong>.

Many managers feel that the gap between AI theory and commercial value is too large. After a period of focusing on theory and frameworks, I have now established <strong>Marius Ottesen Consulting</strong>. My mission is to be the bridge builder between strategy and practical AI implementation.

On the website you can dive into my professional toolbox:
• <strong>Profile, Experience, references & Results</strong>: Background and proof of value creation
• <strong>Subject posts</strong>: My LinkedIn posts that provide insight into "Strategic Management & Transformation" and "AI & Future Technology Management"
• <strong>Consulting</strong>: For those who need assistance to implement AI
• <strong>CV, Application & Contact</strong>: For informal or formal enquiries

I help businesses move AI from frameworks to core tasks:
• <strong>AI strategy</strong>: Link to business goals and ROI
• <strong>Process optimization</strong>: Removal of friction in operations
• <strong>Digital Transformation</strong>: Rigs the organization for a new everyday life
• <strong>Workshops</strong>: From theory to practical mastery

<strong>I am now moving from only theory to actual construction</strong>.

Together with technical partners, I go straight into companies' core processes to implement concrete AI projects - whether it's workflow automation or intelligent tools for decision support. AI should not be a side project, but the engine of their growth.

<strong>Take a look</strong> - and feel free to share! Under the tab "Consulting" you will find a contact form. Do you have challenges that we should look at together? Describe them there, and we will take the dialogue further.

What works and what is missing? I really appreciate all feedback!

<strong>Link to the website:</strong> www.mariusottesen.no`,
  },
  "attitude-2016-01": {
    tittel: "Did you know?!? It's all about ATTITUDE!",
    teaser: "Quote of the Month: when the letters are counted, it is attitude that reaches 100%.",
    innhold: `The image shows a «Quote of the Month» on a whiteboard from a previous workplace.

The point is a simple letter-to-number code where A=1, B=2, and so on up to Z=26. When you add up the letters in the words, Knowledge gives 96%, Hard Work 98% — but Attitude alone 100%.

A simple but effective reminder that mindset often determines whether knowledge and effort actually pay off in practice.`,
  },
  "visindi-rekruttering-2024-01": {
    tittel:
      "Nice gesture by Visindi who ran a good and professional recruitment process\nwhen I was headhunted to Franzefoss Gjenvinning AS!",
    teaser: "Thanks Visindi for a good and professional recruitment process in headhunting for Franzefoss\u00A0Gjenvinning.",
    innhold: ``,
  },
  "obf-klar-2025-01": {
    tittel: "Ready for two days of inspiration at Oslo Business Forum 2025 - The Big Shift!",
    teaser: "Ahead of Oslo Business Forum 2025 – The Big Shift: expectations for two days of learning, reflection and networking.",
    innhold: `I am looking forward to a packed program with strong speakers, new perspectives and lots of professional additions. Equally important are the meetings with both old and new acquaintances – it's always exciting to share experiences and build relationships across industries.

These will be two days of learning, reflection and networking that I am really looking forward to! 💪 🙋‍♂️

https://www.obforum.com/`,
  },
  "obf-2025-big-shift-01": {
    tittel: "Oslo Business Forum 2025 – The Big Shift",
    teaser: "Takeaways from Oslo Business Forum 2025: strategy, AI, management and human power. OBF 10th anniversary.",
    innhold: `Two inspiring and educational days are over - filled with strong lectures, important perspectives and energy around strategy, management, technology and the possibilities of the future. In addition, this year's conference marked the 10th anniversary of the Oslo Business Forum – a milestone that shows the importance the arena has taken on for managers.

🔑 <strong>My most important takeaways:</strong>

🎯 <strong>Strategy and growth:</strong>
B. Sternfels reminded us that future winners must aim high, move fast and build organizations that continuously adapt to change. He highlighted the importance of learning, humour, warmth and resilience – and emphasized growth and AI as top management priorities. M. Buckingham delivered a strong message: "Love is the most powerful force in business" – real value creation is about meaning and belonging.

🤖 <strong>AI and technology:</strong>
P. Lakhani showed how AI can be used strategically to create competitive advantage, while T. Mauri introduced "Agility is the new stability" and raised the importance of ethical reflection. P. Malmgren encouraged more creativity: "The big things that matter need better imagination from us."

👩‍💻 <strong>Generations and culture:</strong>
Dr. E. Filby showed how younger generations are constantly driving development forward, while Gen. X is most positive about AI and tech. She also pointed out why physical interaction and shared arenas are still crucial for learning, culture and innovation – even in a hybrid everyday life.

❤️ <strong>Leadership and human power:</strong>
S. Sinek reminded us of "What you search for, you will find" – leadership starts with meaning and optimism.
D. Kander delivered some of the conference's most concrete and powerful messages: "Never goal alone" - "Always ask: Who can help me do this?" – and "Success can be your biggest blind spot." She challenged us to cut low-value tasks and focus on value vs. effort.

🏆 <strong>Team and trust:</strong>
Aksel L. Svindal showed how winners are built through openness and collaboration: "Trust your team, share all good data – and don't forget the 7 o'clock dinner. Celebrate together."

🧭 <strong>Change as a driving force:</strong>
A. Rinne introduced the Flux mindset and showed how uncertainty can be used strategically, while G. Petriglieri reminded us that emotions are a competitive advantage in management.

💡 <strong>The common denominator from the stage was clear:</strong> The leaders of the future must combine strategy, technology and human insight - and the ability to create culture, pace, curiosity and trust in a time characterized by major changes.

<strong>Next Chapter – The Human Edge (2026):</strong>
OBF 2026 builds on this year's learning as it is about unlocking the strengths that no machine can replace. In an age of disruption, leaders must rely on creativity, courage, trust and persistence, and build cultures where people and ideas can flourish.

A big thank you to Christoffer Omberg and the entire skilled and pleasant(!) OBF team for an impressive, professional and inspiring event - both professionally and personally strong from start to finish! 🙏`,
  },
  "kjeft-psykologisk-trygghet-01": {
    tittel: "Is it okay to 'shut up' as a leader - and what does that mean for psychological security?",
    teaser: "Psychological security, clarity and anonymous criticism. Reflections from a lecture with Henning Bang (Econa).",
    innhold: `On Monday, I attended an insightful lecture organized by Econa with professor <strong>Henning Bang</strong>. The topic was <strong>psychological security</strong>, and what actually builds it - or undermines it.
The lecture hit home, especially because it challenges both managers and employees.

<strong>The point that really created reactions and discussion in the room was Bang's claim that:</strong>
"Sometimes you have to be able to speak clearly. 'Jeft' can be tolerated by adults - as long as it is not person-focused, not humiliating and the language is proper. When boundaries are broken, it must be allowed to react clearly - even if it creates legitimate discomfort."

For the record:
<strong>I don't strive to 'shut up' as a leader.</strong>
But I share the principle of clarity: management requires that you actually speak up when something doesn't work.

Another important point that was discussed was <strong>anonymous criticism</strong>.
Anonymous input can pick up signals - but they are rarely developmental. When the sender is unknown:
🔹 the dialogue stops before it starts
🔹 misunderstandings spread in the team
🔹 the wrong people can be associated with the criticism
🔹 the culture is moving from courage to caution

In short: <strong>anonymity can be a safety net, but not a tool for development.</strong>

<strong>My most important takeaways from the lecture:</strong>
🔹 Psychological security does not mean the absence of demands.
🔹 Learning requires us to tolerate discomfort - also when it comes to ourselves.
🔹 Safety is not only created by the manager - employees also have responsibility.
🔹 Inside-out reflection is maturity: "What could I have done differently?"
🔹 Too little security → silence, defense and anonymous criticism.
🔹 Too much security → buddy club, low accountability and little development.
🔹 Clear expectations and correction are not "shouting" when given respectfully.
🔹 Explain - Invite - Respond: Actions that can increase psychological security.

Henning also referred to <strong>Amy C. Edmondson</strong>, Harvard professor and global leader in psychological safety. Her research shows that teams with high confidence:
✔ perform better
✔ learn faster
✔ share errors earlier
But she is as clear as Bang:
<strong>Safety without responsibility gives comfort - not quality.</strong>

💬 <strong>What do you think?</strong>
1. When is clear feedback perceived as help - and when as criticism?
2. How do we balance psychological security with demands and responsibilities?
3. What are the characteristics of employees who take ownership - also when something goes against them?

I learn most when others think out loud with me.`,
  },
  "kapasitet-maraton-01": {
    tittel: "Capacity is built over time - and can be retrieved when relevant, in several arenas",
    teaser: "Half marathon in Cairo and reflection on capacity: performance is built over time and can be retrieved in several arenas.",
    innhold: `On Saturday I took part in the Marakez Pyramids Half Marathon in Cairo, Egypt.
10,000 runners from 122 countries at the starting line - I was 18th in my class.

Despite increased and targeted specific race training beforehand, it was not enough to extract full potential this time. At the same time, I am convinced that my performance and capacity are largely connected to what I have invested in over many years earlier in my life.

I am genuinely pleased with the result. Not just as a number, but as a personal victory and a confirmation of just this.

Performance is rarely about short-term effort, but about basic training – physically and mentally – built over time. Experience and capacity from cross-country skiing, running, tennis, strength and other training still remains. Today, I train variedly and particularly enjoy tennis, both training and competitions. It provides both strength, robustness and the inner drive – the motivation that makes you train when no one is watching.

The same applies in working life.
Education, professional development and experience from previous roles and companies provide capacity that you can call upon when it is relevant.

At a recent professional seminar, age discrimination in working life was discussed. A representative from NAV pointed out that many people already experience this from the age of 50. I'm not there yet, but the reflection is important: the solution is to continue investing in competence, development and learning.

This race was a clear "Big Hairy Goal" – something to train for and look forward to – a goal that provided direction, energy and boosted motivation. The social community made the experience even stronger. Being part of an environment means a lot, professionally and socially. We performed as a team, supported each other before, right up to, and after the race. There was a lot of reflection, training theory and development - and not least: it was fun.

Through roles as tennis coach and manager, I have experienced how rewarding it is to contribute to the development of others - and to succeed together as a group. Fellow players, the public, supporters, colleagues, family and friends who cheer, lift the performance even further.

Now we enter the winter - with more focus on other types of training, new sessions on snow and arenas that continue to build capacity. What about investments on the skills side? I consciously choose what builds value – for example, playing more with AI, as today's picture illustrates. Made at the airport on the way home to Norway.

Fun facts:
The Pyramid of Cheops was built over 5,000 years ago - approx. 2.5 million stone blocks, 2.5–5 tons each. Stone on stone. Of people. We still don't quite know how.
A reminder of what long-term effort, hard work, perseverance and management can create - whether it's about buildings, performance, competence or people.`,
  },
  "videre-franzefoss-2026-01": {
    tittel: "After 2 years as National Sales Manager in Franzefoss Gjenvinning, I have chosen to move on",
    teaser: "Completion as National Sales Manager in Franzefoss. Further to interim, consulting and investment in AI expertise.",
    innhold: `The background is different strategic views on the way forward - and a conscious choice to invest time in further development and expertise before the changes force themselves forward, including in the field of AI.

The time in Franzefoss has given me further solid experience in commercial management, sales development and implementation in a complex and socially critical industry. At the same time, I have gained a deeper understanding of circular economy and recycling, as well as what is actually required to succeed with change in practice.

I would like to thank my colleagues for an exciting and intensive period, during which both the company and the people developed significantly.

<strong>Today I used the experiences actively</strong>, i.a. as interim manager and consultant in dentistry at Skøyenåsen Tannklinikk. This is growing strongly, with more dentists, more specialized treatments and a clear focus on both existing patients and new customer groups. At the same time, the clinic has been renovated and modernized to meet the requirements forward-looking clinics must deliver on – professionally, technologically and in terms of patient experience.

AI is also on its way into dentistry – not only in examinations and treatment, but in the areas of efficiency, decision support and development. Here I am now concretely working on how technology can contribute to better quality, flow and results.

Also, I continue to develop MedDrop. This is a med-tech start-up and an IoT-based medicine dispenser - with a focus on patient safety, compliance and clinical needs. The project deals with innovation at the intersection of technology, health, regulatory frameworks and clinical practice.

<strong>At the same time, I invest heavily in my own development:</strong>
• Master's course in <em>Generative AI for Business</em> (BI)
• Practical application and testing beyond the syllabus
• Active learning and sharing in the network (the AI posts I publish are part of this)
• Courses, networks and dialogue with exciting professional environments - to learn and contribute where relevant

The period I am in now is not a break, but an active investment in development, ability to implement and relevance for forward-looking organisations. I still want to stand strong as a commercial manager, where AI is one of my key management skills.

<strong>Curious about dialogue - not necessarily a new job tomorrow!</strong>

Feel free to get in touch for an informal conversation.`,
  },
  "brains-not-included-01": {
    tittel: "Brains not included - and that is precisely why authenticity becomes the leader's most important advantage",
    teaser: "In the age of AI, authenticity becomes the leader's advantage: write something that stands for something. Reflections from BI breakfast about CTRL+ALT.",
    innhold: `Yesterday I attended a breakfast meeting at BI Executive. The theme was "How authenticity will become the manager's strategic advantage in 2026", with a clear link to the use of AI.

The starting point was the book <em>CTRL+ALT. Strategic, creative and practical - the art of writing for businesses</em> by i.a. Øystein Bonvik, who was a speaker in dialogue with Hanne Kjærnes. The conversation dealt with management, language, brand and technology.

The main point was clear:
When AI makes it extremely easy to produce text, meaning, clarity and the human sender become more important than ever. When everyone can write "okay", it becomes crucial to write something that actually stands for something.

AI should therefore not be used to write for us, but to help us. As a structural partner, challenger of ideas and editor - not as a voice. Used correctly, AI works very well, even for demanding tasks. Used incorrectly, the communication is correct, but empty.

A central concept in the discussion was unconsciousness. AI makes it easy to be neutral, cautious and indistinct. The quest not to offend anyone can quickly end in texts that in practice say nothing. Authenticity is therefore not about "being yourself", but about matching who we are, what we do and how we express ourselves.

This is closely related to tone of voice. Many businesses are aware of their logo and colours, but far less so of how they actually sound. Language is perhaps the most important carrier of the brand's personality – internally and externally.

An important management point was the risk when managers bypass professional environments and employees by using AI to get quick answers. It can weaken both quality and trust. AI lacks judgment and empathy – and neither understands context, nuances or puns as humans do. A good pun can be obviously powerful to us, but completely incomprehensible to a machine.

We are still in the playroom. Just like when PPT and ClipArt arrived, we test, fail and learn. AI is the future, but mature use requires awareness. AI won't take your job – but the person who can use AI wisely will.

There was also an interesting reflection on academia and plagiarism. Plagiarism is the worst thing you can do, and at the same time the methods for revealing AI-generated text are far from accurate. Among other things, AI detectors have failed on texts written 20 years ago. It says something important that technology is not the challenge, but more about responsibility and judgement.

I asked about <strong>line of thought</strong> - and was clearly told to continue using it. It is a deliberate linguistic move, not an AI stamp.

"<strong>Brains not included</strong>" – a bit like "batteries not included". AI can help us a long way, but it is never an exemption from thinking for ourselves.`,
  },
  "frastotende-salg-2026-01": {
    tittel: "With reference to the article from ASD Group, Espen Hellman puts into words something very important for the sales profession",
    teaser: "Espen Hellman and ASD: what sets the best salespeople apart - listen, be honest, take responsibility for progress.",
    innhold: `With reference to this article (<a href="https://www.linkedin.com/feed/update/urn:li:activity:7407361511905452033/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/feed/update/urn:li:activity:7407361511905452033/</a> ) from the ASD Group, Espen sets Hellman's words on something very important for the sales profession. Trust in salespeople is low, and few customers experience real value in the first meeting. At the same time, the article shows that there are simple principles that distinguish the best: Listen, be honest - and don't pressure.

I completely agree with this, and at the same time it is worth clarifying what "do not press" actually means. Good sales are also about taking responsibility for progress. Without clear next steps, even good dialogues run the risk of being postponed, forgotten or never realized. Each sales process lives its own life, but professional salespeople follow up with the right timing and clarity - in a way that feels natural to the customer.

The article also shares an interesting fun fact:
The best sellers ask an average of 32 questions in the analysis phase - 39% more than the average.
For me, this is not about the number of questions, but which questions are asked. It requires thoughtful situational and reflective questions - and the ability to listen with empathy. In professional language, we call this active listening. When the salesperson understands both how the customer works today and why, the dialogue moves from price to actual value.

Much of this resembles good coaching. When the customer himself formulates the challenge – and often parts of the solution – the decision becomes both easier and stronger than when the solution is presented ready-made. It provides both better relationships and more robust sales processes.

This is also the reason why I have great respect for the expertise in ASD. I myself have used them as a supplier of coaching services in sales, and find that they are particularly strong in developing the role of adviser - where methodology, behavior and reflection are closely linked.

So finally:
What do you think of when you hear the word "salesman"?
For me, a good salesperson is an advisor and partner – someone who listens actively, is honest, takes responsibility for progress and is strong at (also latent) needs mapping and the interpersonal aspects.`,
  },
  "skalering-01": {
    tittel: "What actually determines whether scaling is successful - and why people, timing and choices are decisive",
    teaser: "What determines whether scaling succeeds: plan, life cycle, people and timing. From the webinar Scaling in practice.",
    innhold: `Many people talk about scaling as if it is primarily about pace, ambitions and growth in numbers. My experience is that the challenges more often arise in the transition from what worked yesterday to the next phase.

On Wednesday, I participated in the webinar <em>Scaling in practice</em> with Annette Sveen, and several perspectives resonated well with my own managerial everyday life.

A key point was the importance of having <strong>a clear plan and direction</strong>. Scaling without a clear understanding of why you are growing - and where you are going - makes the organization reactive. Is the goal further growth, internationalization or sale of the company? Without an explicit answer, priorities become unclear, and management loses control.

Furthermore, it became clear how crucial it is to know <strong>where the business is in the life cycle</strong>. Start-up, growth, maturation and saturation make completely different demands on structure, management and people. Measures that work in one phase can become inhibiting in the next. Scaling is as much about timing and adaptation as it is about execution.

A consistent theme was <strong>people as the most critical factor in scaling</strong>. The focus often ends up on technology, systems and finance, while the ability to implement is determined by how people interact, make decisions and handle increased complexity. Mismatch between people, roles and phase creates friction - which costs speed and energy.

I recognize this very well, and myself have experience with the use of <strong>profile identification and analysis tools</strong> at management level and employee level. This has been particularly valuable in work with sales advisors and customers. When we understand behaviour, drivers and communication style - in ourselves and others - management, collaboration and sales become more precise.

The webinar also highlighted <strong>AI as a practical tool in scaling</strong>, not as a replacement for humans, but as a way to free up capacity. The advice was clear: start controlled, test yourself first, integrate into existing systems and identify bottlenecks before rolling widely. Used correctly, AI can contribute to better resource utilization - in line with own experiences from management and sales.

Finally, some <strong>pervasive errors in scaling</strong> were pointed out: missing plan, wrong people in key roles, wrong priorities, too little understanding of technology and absence of good sparring partners.

My most important reminder after the webinar is simple but demanding:
<strong>Scaling doesn't start with doing more – but with doing the right things, in the right order, with the right people.</strong>`,
  },
  "tennis-01": {
    tittel: "Tennis and Management: Strategy under pressure",
    teaser: "Tennis and management: Djokovic, Alcaraz and transfer value to working life – strategy and attitude under pressure.",
    innhold: `Working purposefully does not always mean winning.
Sometimes you win. Other times you lose the final.

More often than we like to admit, you don't even get there.

In December, I wrote about the half-marathon in Egypt and how capacity is built over time, stone by stone, and can be retrieved when needed. I also took that reflection here with me.

During the Australian Open recently, I got to see Novak Djokovic knock out Jannik Sinner in the semi-finals. A new generation at full speed - and the "old" champion who still finds a way to victory. Great as a winner.

Two years ago, I sat close to the court in Paris during the Olympics and watched Djokovic win over arch-rival Carlos Alcaraz in the final. Gold. The only medal he was missing. The culmination of a life's work.

This year, in Melbourne, I experienced much of the same, but with the opposite outcome. In the final, Djoko lost to "Carlitos" after a brutal, close and physical match.
Two moments. Same performers. Two completely different results.

What made the strongest impression this time was not just the tennis – it is in a league of its own – but what came after the match.

In a sport where "only victories count", at least for Djokovic, he delivered an interview characterized by dignity, gratitude and respect. For his team. For the opponent. For the audience. For the journey. Great - even as a loser.

Djokovic er av mange regnet som the GOAT. Samtidig er han en av de mest kontroversielle skikkelsene i moderne tennis. Emotional. Stubborn. Principled. Kritisk til systemer og rammer, som blandt annet kostet ham dyrt som under covid-perioden og boikotten av Australian Open. Likevel er det slående hvor elsket og respektert han er, også nettopp i Australia. For the game. For mental strength. For viljen til å stå i motvind. Jeg kjenner ingen annen som er mer rå på dette enn han.

As an active tennis player myself – and this is the sport I love most, out of many – this hits particularly well. I recognize the work behind it: the hours on the field, the adjustments, the frustration, the repetitions. Tennis is brutally honest. You stand alone on the field with the responsibility, but you never succeed alone over time.

This is something the tennis world is often good at showing off. Many players on the tour are good at lifting the team around them and showing respect for competitors. In other sports, unfortunately, we often see the opposite, where this disappears when the pressure becomes great.

And Alcaraz. What a performer!
An artist. Creative, brave and playful - at the same time extremely purposeful. He creates enthusiasm and love for the sport. It is also a form of achievement.

For me, this is not just about tennis.
It's about the path to becoming number one - in sport, work and life. About enduring the contrasts between victory and defeat. And about continuing to invest in the process - as I also experienced in the marathon.

The transfer value to working life and management is greater than many people think.`,
  },
  "landet-rikt-01": {
    tittel: "Your business may be well into decline - but you don't notice it",
    teaser: "The Land That Got Too Rich: How Abundance Hides Decay in Business—and What Leaders Can Do Differently.",
    innhold: `Your business may be well into decline.
But you don't notice it - because the account is full.

On a recent holiday in Australia, I read Martin Bech Holte's book <em>The Land that Got Too Rich</em>. It started as a book about the Norwegian economy. It ended up being the most uncomfortable mirror I have held up to my own leadership experiences.

<strong>This is Norway's fault - and probably yours too.</strong>

What makes this extra unpleasant is that this is not new. History is full of countries and companies that built enormous values ​​- and lost them. Not because the crisis came suddenly, but because discipline disappeared. Abundance removed the need for prioritization, and the warning lights were ignored because the numbers were still green.

The decay does not happen dramatically, but gradually. The pace slows down a bit. Decisions take a little longer. Responsibility is pulverized. On paper, everything looks fine, but in practice the organization loses momentum. Just like this, Norway's productivity has fallen by 11% since 2013, at the same time as the oil fund grew to over NOK 21,000 billion.

In management groups, I see the same pattern: "We can afford it", therefore inefficiency is tolerated. In sales, we hire more salespeople instead of improving the conversion rate. We increase the marketing budget rather than work systematically with sales enablement, process improvement and smarter use of support functions. Artificial scarcity, even with funds, is often the key to higher productivity.

Then the next thing happens. The best managers and value creators lose patience. When support functions, processes and internal considerations gradually take precedence over actual value creation, I know the wealth trap has struck. Those who create results experience increasing friction and look away. Again, those who are comfortable with the status quo sit. Revenue per employee is falling, but no one is reacting – because the absolute numbers are still growing.

The system produces what you incentivize. Bonus on activities. Pipeline without quality requirements. Sales that are rewarded regardless of margin, customer satisfaction or retention. The result is predictable: sales to the wrong customers.

"We have plenty of time" is perhaps the most dangerous illusion of all. Sweden took around 20 years from top to bottom. Norway may be well into a similar development, but does not notice it as the oil fund masks the pain. The focus shifts away from the core competence. The changes happen slowly at first - and then at an accelerating pace.

In sales, it looks like this: ACV gradually falls. The sales cycle is getting longer. Win rate against primary competitor goes from 60% to 45%. But absolute turnover is still growing 10% annually, so no one is sounding the alarm.

The question is not whether this can be reversed. History shows that it can. What needs to change before the numbers also start to point in the wrong direction?`,
  },
  "norge-virksomhet-01": {
    tittel: "If Norway were a business - what would the management have to do now?",
    teaser: "If Norway were a business: learning from Bech Holte about discipline, resource allocation and AI as a management tool.",
    innhold: `In <em>The country that became too rich</em>, Martin Bech Holte describes how Norway has gradually lost momentum, not because we lack resources, but because they are used incorrectly. The interesting question for us who manage businesses is not whether the analysis is completely precise, but what we can learn from the pattern - and do differently.

<strong>Learning for business management</strong>

The core of the book is simple and unpleasant: Abundance removes pressure. When the pain threshold is never reached, the priorities are not met. In businesses, it often looks like this: Capital is allocated based on history and internal impact, not effect. Budgets grow, while output per employee falls. More initiatives are started than finished. "We have plenty of time" becomes a guiding principle. The result is rarely a crisis, but stagnation – such as at the national level.

<strong>Solution for businesses</strong>

Businesses that break this pattern do some fundamental things differently. They introduce artificial scarcity even when the account is full, and do not allow everything that is possible to live. They move resources based on effect, not intent. They manage by productivity and outcome rather than activity and headcount. And they adjust incentives so that long-term value creation is rewarded more than volume and visibility.

Here, AI can be a tool, but only when used correctly. Not as an individual productivity tool, but as support for better prioritization, more objective resource allocation and earlier warnings about what is actually not working. 88% of organizations will use AI in at least one function by 2025, according to McKinsey. Nevertheless, the gains are often not realized, because the technology is not built into the core processes.

The experiences from the study Generative AI for Business at BI have made one thing clear to me: AI transformation is about governance, not licences. IBM reports $4.5 billion in annual productivity gains from end-to-end process automation, not individual tools. In sales, this means, among other things, real-time analysis of deals, automated lead scoring, more precise pricing and forecasting that can actually be used for management. But this must be led from the top. AI is not an IT project, it is a core competence.

<strong>First 90 days – a practical start</strong>

If this were operationalized, I would start with a thorough review of where the money goes, what is rewarded in incentives, and whether the measurements say anything about real value creation. Then, resource allocation, KPIs and decision models must be designed for effect, not activity. Only in the last phase is it about consistent implementation, also when it means stopping initiatives that do not deliver.

The point is not to become more efficient.
The point is to restore discipline before it is imposed.

Norway did not become weaker because we lacked resources.
Businesses often fail for the same reason.`,
  }
};

export const tennisLedelse = tennisLedelseRaw.map((innlegg) => ({
  ...innlegg,
  tittel: localize(
    normalizeDisplayText(innlegg.tittel),
    normalizeDisplayText(tennisLedelseEn[innlegg.id]?.tittel ?? innlegg.tittel)
  ),
  teaser: localize(
    normaliserKortTeaser(normalizeDisplayText(innlegg.teaser)),
    normaliserKortTeaser(normalizeDisplayText(tennisLedelseEn[innlegg.id].teaser))
  ),
  innhold: localize(innlegg.innhold, tennisLedelseEn[innlegg.id].innhold),
}));
