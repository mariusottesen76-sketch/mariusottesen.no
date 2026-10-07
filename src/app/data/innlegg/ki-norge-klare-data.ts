import type { FaginnleggInnlegg } from "../../lib/faginnlegg-types";

const linkClass =
  "text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors";

export const kiNorgeKlareData: FaginnleggInnlegg = {
  id: "ki-norge-klare-data-2026-10",
  tittel: {
    no: "KI avslører hvor godt virksomheten egentlig forstår seg selv",
    en: "AI reveals how well the organisation really understands itself",
  },
  undertittel: {
    no: "Refleksjoner fra første KI Norge Dialog — KI-klare data, kontekst og ledelse",
    en: "Reflections from the first KI Norge Dialog — AI-ready data, context and leadership",
  },
  teaser: {
    no: "KI Norge Dialog handlet om KI-klare data. Likevel peker dagen mot noe bredere: hvor godt virksomheten forstår egne data, begreper, prosesser og beslutningsgrunnlag — og evnen til å omsette det i praksis.",
    en: "KI Norge Dialog focused on AI-ready data. Yet the day points to something broader: how well the organisation understands its data, concepts, processes and decision basis — and its ability to turn that into practice.",
  },
  metaTitle: {
    no: "KI avslører hvor godt virksomheten forstår seg selv | KI Norge Dialog",
    en: "AI reveals how well the organisation understands itself | KI Norge Dialog",
  },
  metaDescription: {
    no: "Refleksjoner fra KI Norge Dialog om KI-klare data, FAIR, metadata, Skatteetatens kunnskapslag og hvorfor KI avslører virksomhetens egen forståelse av seg selv.",
    en: "Reflections from KI Norge Dialog on AI-ready data, FAIR, metadata, Skatteetaten's knowledge layer and why AI exposes how well organisations understand themselves.",
  },
  ogTitle: {
    no: "KI avslører hvor godt virksomheten egentlig forstår seg selv",
    en: "AI reveals how well the organisation really understands itself",
  },
  ogDescription: {
    no: "Fra KI-klare data til kontekst, ansvar og adopsjon — en ledertest for virksomhetens dataforvaltning og endringsevne.",
    en: "From AI-ready data to context, accountability and adoption — a leadership test for data governance and change capability.",
  },
  dato: "2026-10-08",
  visningsDato: "08.10.26",
  kategori: "AI / KI",
  bildeUrl: "/images/ki-norge-data.png",
  bildeModalBred: true,
  bildeAlt: {
    no: "Marius Ottesen — refleksjoner fra KI Norge Dialog om KI-klare data og dataforvaltning",
    en: "Marius Ottesen — reflections from KI Norge Dialog on AI-ready data and data governance",
  },
  link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
  hasTags: {
    no: "#kunstigintelligens #ledelse #digitaltransformasjon #datastyring #strategi",
    en: "#ArtificialIntelligence #Leadership #DigitalTransformation #DataGovernance #Strategy",
  },
  innhold: {
    no: `Det første KI Norge Dialog-møtet 7. oktober handlet formelt om KI-klare data. Likevel satt jeg igjen med en bredere refleksjon. KI gjør ikke bare virksomheter mer effektive. Den synliggjør hvor godt de forstår egne data, begreper, prosesser og beslutningsgrunnlag.

Hans Christian Holte, leder av KI Norge, åpnet dagen. Han beskrev møtet som det første steget i å etablere en arena hvor relevante KI-temaer kan diskuteres, erfaringer kan deles og KI Norge kan lære av miljøene som arbeider med problemstillingene i praksis. Ambisjonen var ikke bare å informere, men å skape dialog og et faglig fellesskap som kan bidra til at Norge lykkes bedre med KI.

Deretter viste Marte Kjelvik fra Digdir og Geir Myrind fra Skatteetaten fra hvert sitt perspektiv hvordan KI flytter dataforvaltning fra et relativt smalt fagområde til et tydelig leder- og virksomhetstema. Når KI skal arbeide på tvers av CRM, ERP, saksbehandling, dokumenter og historiske systemer, blir gamle svakheter synlige. Ulike definisjoner, svake datamodeller, manglende dokumentasjon og uklart eierskap påvirker kvaliteten på svar, beslutninger og automatisering.

<strong>KI bryr seg ikke om systemgrensene våre</strong>

Tenk på et tilsynelatende enkelt spørsmål. Hva vet vi om denne kunden?

For en virksomhet kan svaret ligge fordelt mellom CRM, økonomisystem, dokumenter, e-post og saksbehandling. For KI er dette ikke fem organisatoriske bokser, men fem informasjonskilder som må forstås i sammenheng.

Det er her utfordringen begynner. «Kunde» kan være definert forskjellig mellom systemene. Identifikatorer kan variere, data kan være oppdatert på ulike tidspunkter, og informasjonen kan være samlet inn til forskjellige formål. KI fjerner ikke disse forskjellene. Når informasjon skal brukes på tvers, blir de mer synlige.

Dette peker mot et viktig skifte fra systemsentrisk til mer datasentrisk tenkning. Data må behandles som en virksomhetsressurs som kan forstås og forvaltes på tvers, ikke bare som noe som tilhører et bestemt system.

<strong>KI-klare data handler om mer enn datakvalitet</strong>

Marte presenterte dataforvaltning på tre nivåer. Strategisk handler det om retning, ambisjon og hvordan data skal støtte virksomhetsmålene. Taktisk handler det om organisering, roller, ansvar og prioriteringer. Operativt handler det om gjennomføringen, blant annet datakvalitet, metadata, tilgang, klassifisering og dokumentasjon.

Dette er viktig fordi mange KI-initiativer starter i motsatt ende. Man velger en modell eller et verktøy og begynner deretter å lete etter anvendelsesområder. Budskapet denne dagen var mer jordnært. Start med behovet og formålet, og finn deretter ut hvilke data, roller, regler og teknologier som trengs.

Et gjennomgående rammeverk var FAIR-prinsippene.

<strong>F</strong> – Findable – data skal kunne finnes<br />
<strong>A</strong> – Accessible – data skal kunne nås<br />
<strong>I</strong> – Interoperable – data skal kunne forstås og brukes på tvers<br />
<strong>R</strong> – Reusable – data skal kunne gjenbrukes

Poenget er at teknisk tilgang ikke er nok. Mottakeren, enten det er et menneske, et annet system eller KI, må forstå hva informasjonen betyr, hvor den kommer fra, hvor oppdatert den er og hvilke betingelser som gjelder for bruk. FAIR bør derfor i størst mulig grad bygges inn fra starten, ikke repareres når behovet for deling oppstår senere.

<strong>Kontekst blir en del av KI-infrastrukturen</strong>

Geir Myrind gjorde problemstillingen konkret gjennom Skatteetatens arbeid. Hans utgangspunkt var at data alene ikke er nok. Virksomheten trenger også kunnskap om dataene, og denne kunnskapen må forvaltes slik at både mennesker og maskiner kan bruke den.

Det innebærer blant annet begreper, informasjonsmodeller, kodelister, juridiske metadata, datakvalitet, eierskap og metrikker. Skatteetaten beskriver dette som et kunnskapslag mellom dataene og bruken av dem. Forenklet kan arkitekturen uttrykkes som data → kunnskap → servering → bruk. Data og kontekst kan deretter gjøres tilgjengelig gjennom blant annet API-er, MCP, datakontrakter, tilgangsmekanismer og søk, slik at rapporter, analyser og KI-agenter får et bedre grunnlag å arbeide på.

Dette endrer også rollen til metadata. Metadata blir ikke bare dokumentasjon som produseres for ordenens skyld, men en del av infrastrukturen som gjør KI mer presis og etterprøvbar. Geir brukte en formulering jeg synes traff godt: «Dokumenterer du for kollegaer, dokumenterer du for KI-en.»

<strong>Når samme ord betyr forskjellige ting</strong>

Skatteetatens eksempler viste hvor praktisk dette blir. Begrepet «avregning» kan bety ulike ting innen MVA, økonomiregelverket, skattebetaling og strømleveranser. Ingen av definisjonene trenger å være feil. Problemet oppstår dersom betydningen ikke følger med informasjonen.

En begrepskatalog trenger derfor ikke å tvinge frem én definisjon. Den kan dokumentere hvilken betydning som gjelder innenfor hvilket fagområde, hvem som eier definisjonen og hvor den kommer fra.

Det samme gjelder kodeverk. Et kommunenummer kan være utgått, være registrert uten ledende null eller ha en betydning som varierer mellom systemer. Uten gode kodelister må analytikeren tolke hva som menes. Presentasjonen oppsummerte risikoen presist med formuleringen «Analytikeren gjetter. KI-en gjetter fortere.»

<strong>Hva måler vi egentlig?</strong>

Problemstillingen gjelder også KPI-er og beslutningsgrunnlag. To rapporter kan vise forskjellige tall for «aktive saker» samtidig som begge er teknisk korrekte. Den ene kan telle saker som ikke er avsluttet, mens den andre teller saker med aktivitet de siste 30 dagene.

Da er ikke problemet først og fremst datakvaliteten. Problemet er definisjonen. Med dokumenterte metrikker og sporbarhet tilbake til datakilden kan KI forklare hvorfor tallene er forskjellige, fremfor å måtte velge mellom dem. Se også <a href="/faginnlegg/fra-data-til-beslutning-2026-09" class="${linkClass}">Fra data til beslutning</a>.

For ledere er dette mer enn et dataproblem. KI kan ikke forbedre beslutningsstøtten dersom virksomheten ikke selv har avklart hva den måler, hvilken definisjon som gjelder og hvilke data som skal være styrende.

<strong>Fra KI-klare til «X-klare» data</strong>

Geir nyanserte også selve begrepet KI-klare data. De samme grunnprinsippene gjelder enten informasjonen skal brukes til rapportering, analyse, BI, maskinlæring, KI-agenter eller nye dataprodukter. Derfor brukte han også ideen om «X-klare data».

Spørsmålene er de samme. Hvilke datasett er viktige? Hva betyr de sentrale begrepene? Hvordan er dataene strukturert? Hvilke juridiske rammer gjelder? Hva vet vi om datakvalitet, lagring, oppdateringsfrekvens og eierskap?

Det er et viktig strategisk poeng. KI-readiness bør ikke behandles som et isolert KI-program. God dataforvaltning gjør virksomheten bedre rustet til en rekke bruksområder, også dem vi ennå ikke kjenner. På den måten handler KI-klare data like mye om virksomhetens generelle endrings- og utviklingsevne som om KI.

<strong>Fra behov til handling</strong>

Etter foredragene gikk vi over i workshop. Modellen fulgte en enkel sekvens med behov, bruker og verdi, data, status og hindringer, hva som må på plass og første steg. Rekkefølgen er interessant fordi teknologien ikke kommer først.

Ved vårt bord startet diskusjonen bredt rundt produktivitet i offentlig sektor og hvordan teknologi kan frigjøre kapasitet, blant annet innen helse og eldreomsorg. Etter hvert dreide samtalen mot mennesker, endring og gevinstrealisering.

Det er heller ikke nok at en løsning er teknisk bedre. Arbeidsmåten må endres, noen må ta ansvar, og ledelsen må være villig til å hente ut gevinsten gjennom bedre tjenester, høyere kapasitet, lavere kostnader eller andre målbare resultater.

Her kom også spørsmålet om baseline inn. Hvis vi ikke vet hvordan prosessen fungerer før endringen, vet vi heller ikke om initiativet har forbedret noe. Implementering er ikke det samme som verdirealisering. Diskusjonen ved vårt bord endte derfor også med at mennesker og selve endringsprosessen burde få en enda tydeligere plass i modellen.

<strong>Tillit og motstand er en del av gjennomføringen</strong>

Etter workshoppen diskuterte jeg dette videre med Birthe Nesset, som har forsket på tillit mellom mennesker og avanserte intelligente systemer. Hun beskrev tillit gjennom samspillet mellom systemet, mennesket og miljøet rundt interaksjonen.

Det er en nyttig påminnelse om at selv en teknisk god løsning kan mislykkes dersom brukerne ikke forstår den, stoler på den eller opplever at den passer inn i arbeidshverdagen. Dette blir særlig viktig når effektivisering påvirker etablerte roller og arbeidsoppgaver. En endring kan være rasjonell for virksomheten og samtidig oppleves som truende for den enkelte.

Dette er også en ledererfaring jeg stadig møter i transformasjonsarbeid. Teknologien er sjelden den vanskeligste delen. Utfordringen ligger oftere i å endre arbeidsmåter, bygge tillit, avklare ansvar og skape tilstrekkelig trygghet og forståelse til at mennesker faktisk tar løsningen i bruk. Og når den virker, må ledelsen også være villig til å realisere gevinsten.

<strong>KI som ledertest</strong>

For meg står derfor dagen igjen med en tydelig sammenheng:

Behov → verdi → data → kontekst → ansvar → arbeidsmåte → adopsjon → realisert effekt

KI er en kraftig muliggjører inne i denne kjeden, men den erstatter ingen av leddene.

Vi kan kjøpe plattformer, bygge agenter og koble sammen stadig flere datakilder. Teknologien kan likevel ikke alene bestemme hva dataene betyr, hvilken kvalitet som er god nok, hvem som har ansvar eller hvilken verdi virksomheten skal skape.

Det er kanskje den mest interessante ledertesten i utviklingen vi står i. KI avslører ikke bare kvaliteten på dataene våre. Den avslører hvor godt virksomheten forstår seg selv, og hvor godt vi klarer å omsette denne forståelsen til ny praksis og reell verdi.`,
    en: `The first KI Norge Dialog meeting on 7 October was formally about AI-ready data. Yet I left with a broader reflection. AI does not only make organisations more efficient. It reveals how well they understand their own data, concepts, processes and decision basis.

Hans Christian Holte, head of KI Norge, opened the day. He described the meeting as a first step towards an arena where relevant AI topics can be discussed, experiences shared and KI Norge can learn from environments working on these issues in practice. The ambition was not only to inform, but to create dialogue and a professional community that can help Norway succeed more with AI.

Marte Kjelvik from Digdir and Geir Myrind from the Norwegian Tax Administration then showed, from each their perspective, how AI moves data governance from a relatively narrow discipline to a clear leadership and business theme. When AI must work across CRM, ERP, case handling, documents and legacy systems, old weaknesses become visible. Different definitions, weak data models, missing documentation and unclear ownership affect the quality of answers, decisions and automation.

<strong>AI does not care about our system boundaries</strong>

Consider a seemingly simple question. What do we know about this customer?

For a business, the answer may sit across CRM, finance systems, documents, email and case management. For AI, these are not five organisational boxes, but five information sources that must be understood together.

That is where the challenge begins. “Customer” may be defined differently across systems. Identifiers may vary, data may be updated at different times, and information may have been collected for different purposes. AI does not remove these differences. When information is used across boundaries, they become more visible.

This points to an important shift from system-centric to more data-centric thinking. Data must be treated as an enterprise resource that can be understood and governed across systems, not only as something that belongs to a particular application.

<strong>AI-ready data is about more than data quality</strong>

Marte presented data governance at three levels. Strategically it is about direction, ambition and how data supports business goals. Tactically it is about organisation, roles, accountability and priorities. Operationally it is about execution — including data quality, metadata, access, classification and documentation.

This matters because many AI initiatives start at the opposite end. A model or tool is chosen, and use cases are searched for afterwards. The message of the day was more grounded: start with the need and purpose, then determine which data, roles, rules and technologies are required.

A recurring framework was the FAIR principles.

<strong>F</strong> – Findable – data should be discoverable<br />
<strong>A</strong> – Accessible – data should be reachable<br />
<strong>I</strong> – Interoperable – data should be understandable and usable across contexts<br />
<strong>R</strong> – Reusable – data should be reusable

The point is that technical access is not enough. The recipient — whether a person, another system or AI — must understand what the information means, where it comes from, how current it is and which conditions apply to its use. FAIR should therefore be built in from the start as far as possible, not repaired when sharing needs arise later.

<strong>Context becomes part of AI infrastructure</strong>

Geir Myrind made the issue concrete through the Tax Administration's work. His starting point was that data alone is not enough. The organisation also needs knowledge about the data, and that knowledge must be governed so that both people and machines can use it.

That includes concepts, information models, code lists, legal metadata, data quality, ownership and metrics. The Tax Administration describes this as a knowledge layer between the data and their use. In simplified terms: data → knowledge → serving → use. Data and context can then be made available through APIs, MCP, data contracts, access mechanisms and search, so reports, analytics and AI agents have a stronger foundation to work from.

This also changes the role of metadata. Metadata is not only documentation produced for compliance, but part of the infrastructure that makes AI more precise and auditable. Geir put it well: “If you document for colleagues, you document for the AI.”

<strong>When the same word means different things</strong>

The Tax Administration examples showed how practical this becomes. The term “settlement” can mean different things in VAT, accounting rules, tax payment and electricity supply. None of the definitions need be wrong. The problem arises when meaning does not travel with the information.

A glossary therefore does not have to force one definition. It can document which meaning applies in which domain, who owns the definition and where it comes from.

The same applies to code lists. A municipality number may be obsolete, stored without a leading zero or mean different things across systems. Without good code lists, the analyst must interpret what is meant. The presentation summed up the risk precisely: “The analyst guesses. AI guesses faster.”

<strong>What are we actually measuring?</strong>

The issue also applies to KPIs and decision basis. Two reports may show different figures for “active cases” while both are technically correct. One may count cases that are not closed; another counts cases with activity in the last 30 days.

Then the problem is not primarily data quality. The problem is the definition. With documented metrics and traceability back to the source, AI can explain why figures differ, rather than having to choose between them. See also <a href="/faginnlegg/fra-data-til-beslutning-2026-09" class="${linkClass}">From data to decision</a>.

For leaders this is more than a data problem. AI cannot improve decision support if the organisation has not clarified what it measures, which definition applies and which data should steer action.

<strong>From AI-ready to “X-ready” data</strong>

Geir also nuanced the term AI-ready data. The same principles apply whether information is used for reporting, analytics, BI, machine learning, AI agents or new data products. Hence the idea of “X-ready data”.

The questions are the same. Which datasets matter? What do key concepts mean? How is data structured? Which legal frameworks apply? What do we know about quality, storage, refresh frequency and ownership?

That is an important strategic point. AI readiness should not be treated as an isolated AI programme. Good data governance makes the organisation better prepared for many use cases, including those we do not yet know. In that sense, AI-ready data is as much about general change and development capability as about AI itself.

<strong>From need to action</strong>

After the talks we moved into a workshop. The model followed a simple sequence: need, user and value, data, status and barriers, what must be in place and first steps. The order is telling because technology does not come first.

At our table the discussion started broadly on productivity in the public sector and how technology can free capacity, including in health and elder care. Gradually it turned towards people, change and value realisation.

It is not enough that a solution is technically better. Ways of working must change, someone must take responsibility, and leadership must be willing to capture the benefit through better services, higher capacity, lower costs or other measurable outcomes.

The question of baseline also came in. If we do not know how the process works before the change, we do not know whether the initiative improved anything. Implementation is not the same as value realisation. Our table also concluded that people and the change process itself deserve an even clearer place in the model.

<strong>Trust and resistance are part of execution</strong>

After the workshop I continued the conversation with Birthe Nesset, who researches trust between people and advanced intelligent systems. She described trust through the interplay of system, person and the environment around the interaction.

It is a useful reminder that even a technically sound solution can fail if users do not understand it, trust it or feel it fits everyday work. This becomes especially important when efficiency affects established roles and tasks. A change can be rational for the organisation and still feel threatening to the individual.

This matches leadership experience I often see in transformation work. Technology is rarely the hardest part. The challenge more often lies in changing ways of working, building trust, clarifying accountability and creating enough safety and understanding for people to adopt the solution. And when it works, leadership must also be willing to realise the benefit.

<strong>AI as a leadership test</strong>

For me the day therefore leaves a clear chain:

Need → value → data → context → accountability → ways of working → adoption → realised effect

AI is a powerful enabler within that chain, but it replaces none of the links.

We can buy platforms, build agents and connect ever more data sources. Technology alone still cannot decide what data means, which quality is good enough, who is accountable or which value the organisation should create.

That may be the most interesting leadership test in the development we are in. AI reveals not only the quality of our data. It reveals how well the organisation understands itself — and how well we turn that understanding into new practice and real value.`,
  },
};
