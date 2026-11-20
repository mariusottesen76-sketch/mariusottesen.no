import type { FaginnleggInnlegg } from "../../lib/faginnlegg-types";
import {
  AI_DISCOVERY_CHECK_URL,
  AI_DISCOVERY_ROW_METHOD_URL,
} from "../../lib/ai-discovery-brand";

const linkClass =
  "text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors";

const ext = (href: string, label: string) =>
  `<a href="${href}" class="${linkClass}" target="_blank" rel="noopener noreferrer">${label}</a>`;

export const hvaSierAiOmBedriftenDin: FaginnleggInnlegg = {
  id: "hva-sier-ai-om-bedriften-din-2026-11",
  tittel: {
    no: "Hva sier AI om bedriften din?",
    en: "What does AI say about your business?",
  },
  undertittel: {
    no: "Fra Google og ChatGPT til AEO, GEO og AI Discovery",
    en: "From Google and ChatGPT to AEO, GEO and AI Discovery",
  },
  teaser: {
    no: "Når kunder spør AI om leverandører, kan valget skje før de besøker nettsiden. Et enkelt salgscoaching-spørsmål i ChatGPT, og hvordan du kan undersøke synlighet og forståelse med AI Discovery Check.",
    en: "When customers ask AI about providers, the choice may happen before they visit your website. A simple sales-coaching question in ChatGPT — and how to explore visibility and understanding with AI Discovery Check.",
  },
  metaTitle: {
    no: "Hva sier AI om bedriften din? | AEO, GEO og AI Discovery",
    en: "What does AI say about your business? | AEO, GEO and AI Discovery",
  },
  metaDescription: {
    no: "Faginnlegg 20.11.26: ChatGPT, salgscoaching, AEO/GEO/AIO, kommersiell synlighet og gratis AI Discovery Check via Row Solutions.",
    en: "Article 20 Nov 2026: ChatGPT, sales coaching, AEO/GEO/AIO, commercial visibility and free AI Discovery Check via Row Solutions.",
  },
  ogTitle: {
    no: "Hva sier AI om bedriften din?",
    en: "What does AI say about your business?",
  },
  ogDescription: {
    no: "AI kan påvirke kundens valg før salgsarbeidet begynner. Slik kan du undersøke hvordan virksomheten fremstår — og hva som bør forbedres.",
    en: "AI can shape the customer’s choice before sales work begins. How to explore how your business appears — and what to improve.",
  },
  dato: "2026-11-20",
  visningsDato: "20.11.26",
  kategori: "AI / KI",
  bildeUrl: "/images/ai-discovery-chatgpt-salgscoaching.jpg",
  bildeVersjon: "20261120b",
  bildeModalBred: true,
  bildeDetaljStor: true,
  bildeAlt: {
    no: "AI Discovery: ChatGPT-svar på salgscoaching i Norge med Marius Ottesen Consulting og Row Solutions trukket frem",
    en: "AI Discovery: ChatGPT answer on sales coaching in Norway with Marius Ottesen Consulting and Row Solutions highlighted",
  },
  link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
  hasTags: {
    no: "#AIDiscovery #AI #SEO #KommersiellUtvikling #DigitalSynlighet",
    en: "#AIDiscovery #AI #SEO #CommercialDevelopment #DigitalVisibility",
  },
  innhold: {
    no: `Bruker du Google, ChatGPT eller begge når du søker?

Jeg stilte ChatGPT spørsmålet «Hvilke leverandører i Norge kan hjelpe oss med salgscoaching?» Både Marius Ottesen Consulting (MOC) og Row Solutions ble trukket frem og rangert som #1 og #2. Vi har fått kunder som fant oss via AI.

Men hva skjer når en potensiell kunde spør om det dere leverer? Dukker virksomheten opp, og blir dere forstått riktig?

AI kan påvirke valget før kunden besøker nettsiden. Hvis konkurrentene blir anbefalt og ikke dere, risikerer dere å være ute før salgsarbeidet begynner.

Mange kjenner SEO, Search Engine Optimization, som handler om å gjøre nettsider lettere å finne og forstå for søkemotorer — for eksempel når man Googler. Men nå snakker vi også om AEO, GEO og AIO. Kjært barn har mange navn.

<strong>AEO — Answer Engine Optimization</strong> handler om å gjøre innhold egnet til å besvare konkrete spørsmål direkte.

<strong>GEO — Generative Engine Optimization</strong> handler om hvordan virksomheten og innholdet kan bli hentet frem, forstått og sitert i genererte AI-svar.

<strong>AIO — AI Optimization</strong> brukes som en bredere betegnelse, også om Googles AI Overviews. Begrepene overlapper og har ikke faste skillelinjer.

Princeton-forskere og samarbeidspartnere introduserte GEO som forskningsrammeverk i 2024. Google understreker at godt SEO-arbeid fortsatt er grunnlaget, med teknisk tilgjengelighet og nyttig, troverdig innhold. Microsoft har lansert målinger av når nettsider siteres i AI-svar.

Målet er ikke bare å bli synlig. AI må også forstå hva dere faktisk tilbyr, hvem dere hjelper og hvorfor dere er relevante. Ellers risikerer dere å bli valgt bort på feil grunnlag.

<h2>AI Discovery — undersøk det konkret</h2>

Min partner og medgründer Thomas Holm har utviklet <strong>AI Discovery</strong>. Gjennom Row Solutions tilbyr vi metoden for å undersøke dette i praksis. Thomas er faglig ansvarlig for verktøyet og metoden; jeg dokumenterer det som partner i Row og som del av porteføljen på ${`<a href="/ai-discovery" class="${linkClass}">mariusottesen.no/ai-discovery</a>`}.

I gratisversjonen <strong>AI Discovery Check</strong> registrerer du virksomhet og nettside, velger om du selger til bedrifter eller privatpersoner og skriver inn opptil tre ting du vil være kjent for. Eksempler kan være AI-rådgivning, leadsgenerering eller en spesifikk tjeneste.

Verktøyet undersøker hva ChatGPT, Claude og Perplexity sier når virksomhetsnavnet er kjent, og om den nevnes når AI får spørsmål om de valgte områdene uten navn.

Resultatet er et øyeblikksbilde, ikke en garanti for synlighet. Verdien ligger i å avdekke mulige gap og prioritere hva dere bør forbedre og undersøke på nytt.

For meg er dette kommersielt viktig. Blir du ikke oppdaget og forstått, får du kanskje aldri muligheten til å vise hvorfor kunden bør velge deg. Se også ${`<a href="/faginnlegg/salgsledelse-i-praksis-2026-08" class="${linkClass}">salgsledelse i praksis</a>`} og ${`<a href="/faginnlegg/hvor-mye-salg-virksomheten-glipp-av-2026-10" class="${linkClass}">hvor mye salg virksomheten glipper av</a>`}.

<strong>Vet dere hvordan AI presenterer virksomheten deres i dag?</strong>

<h2>Prøv gratis og les mer</h2>

Nysgjerrig på hvordan AI finner og forstår virksomheten din? Prøv gratis ${ext(AI_DISCOVERY_CHECK_URL, "AI Discovery Check")}.

Gjennom ${`<a href="/row-solutions" class="${linkClass}">Row Solutions</a>`} hjelper vi virksomheter videre med synlighet og posisjonering, salg og kundeoppfølging, praktisk AI samt forretningsutvikling og gjennomføring. Vi starter med å avdekke hvor den kommersielle flyten stopper, og prioriterer tiltak som kan skape verdi. Les mer på ${ext("https://rowsolutions.no/", "rowsolutions.no")} og ${ext(AI_DISCOVERY_ROW_METHOD_URL, "metodesiden for AI Discovery")}.

<strong class="block text-lg font-semibold text-white tracking-tight mt-5 mb-1 leading-snug">Faglige kilder</strong>

<ul class="list-disc pl-5 space-y-0.5 !my-0 !mt-0 mb-1 text-[15px] leading-snug">
<li>Princeton – forskning på GEO: ${ext("https://collaborate.princeton.edu/en/publications/geo-generative-engine-optimization/", "GEO – Generative Engine Optimization")}</li>
<li>Google – AI og søkemotoroptimalisering: ${ext("https://developers.google.com/search/docs/fundamentals/ai-optimization-guide", "AI optimization guide for Google Search")}</li>
<li>Microsoft – måling av synlighet i AI-svar: ${ext("https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/", "AI Performance in Bing Webmaster Tools")}</li>
</ul>`,
    en: `Do you use Google, ChatGPT or both when you search?

I asked ChatGPT: “Which providers in Norway can help us with sales coaching?” Both Marius Ottesen Consulting (MOC) and Row Solutions were highlighted and ranked #1 and #2. We have gained customers who found us via AI.

But what happens when a potential customer asks about what you deliver? Does the business show up, and are you understood correctly?

AI can influence the choice before the customer visits the website. If competitors are recommended and you are not, you risk being out of the game before sales work begins.

Many know SEO — Search Engine Optimization — as making websites easier to find and understand for search engines, for example when you Google. Now we also talk about AEO, GEO and AIO. The same idea goes by many names.

<strong>AEO — Answer Engine Optimization</strong> is about making content fit to answer concrete questions directly.

<strong>GEO — Generative Engine Optimization</strong> is about how the business and its content can be retrieved, understood and cited in generated AI answers.

<strong>AIO — AI Optimization</strong> is used as a broader term, including Google’s AI Overviews. The terms overlap and have no fixed boundaries.

Princeton researchers and partners introduced GEO as a research framework in 2024. Google emphasises that solid SEO remains the foundation, with technical accessibility and useful, trustworthy content. Microsoft has launched metrics for when websites are cited in AI answers.

The goal is not only to be visible. AI must also understand what you actually offer, who you help and why you are relevant. Otherwise you risk being ruled out for the wrong reasons.

<h2>AI Discovery — explore it concretely</h2>

My partner and co-founder Thomas Holm has developed <strong>AI Discovery</strong>. Through Row Solutions we offer the method to investigate this in practice. Thomas is professionally responsible for the tool and method; I document it as a Row partner and in the portfolio at ${`<a href="/en/ai-discovery" class="${linkClass}">mariusottesen.no/ai-discovery</a>`}.

In the free <strong>AI Discovery Check</strong> you register business and website, choose whether you sell to companies or consumers, and enter up to three things you want to be known for — for example AI advisory, lead generation or a specific service.

The tool explores what ChatGPT, Claude and Perplexity say when the business name is known, and whether it is mentioned when AI gets questions about the chosen areas without the name.

The result is a snapshot, not a guarantee of visibility. The value is in revealing possible gaps and prioritising what to improve and revisit.

For me this is commercially important. If you are not discovered and understood, you may never get the chance to show why the customer should choose you. See also ${`<a href="/en/articles/salgsledelse-i-praksis-2026-08" class="${linkClass}">sales leadership in practice</a>`} and ${`<a href="/en/articles/hvor-mye-salg-virksomheten-glipp-av-2026-10" class="${linkClass}">how much sales potential businesses miss</a>`}.

<strong>Do you know how AI presents your business today?</strong>

<h2>Try for free and read more</h2>

Curious how AI finds and understands your business? Try the free ${ext(AI_DISCOVERY_CHECK_URL, "AI Discovery Check")}.

Through ${`<a href="/en/row-solutions" class="${linkClass}">Row Solutions</a>`} we help businesses with visibility and positioning, sales and customer follow-up, practical AI, and business development and execution. We start by uncovering where the commercial flow stops and prioritise measures that can create value. Read more at ${ext("https://rowsolutions.no/", "rowsolutions.no")} and ${ext(AI_DISCOVERY_ROW_METHOD_URL, "the AI Discovery method page")}.

<strong class="block text-lg font-semibold text-white tracking-tight mt-5 mb-1 leading-snug">Sources</strong>

<ul class="list-disc pl-5 space-y-0.5 !my-0 !mt-0 mb-1 text-[15px] leading-snug">
<li>Princeton – research on GEO: ${ext("https://collaborate.princeton.edu/en/publications/geo-generative-engine-optimization/", "GEO – Generative Engine Optimization")}</li>
<li>Google – AI and search optimization: ${ext("https://developers.google.com/search/docs/fundamentals/ai-optimization-guide", "AI optimization guide for Google Search")}</li>
<li>Microsoft – measuring visibility in AI answers: ${ext("https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/", "AI Performance in Bing Webmaster Tools")}</li>
</ul>`,
  },
};