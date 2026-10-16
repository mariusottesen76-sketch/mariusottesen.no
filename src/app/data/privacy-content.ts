import type { Lang } from "../LanguageContext";

export const PRIVACY_ROUTE = { no: "/personvern", en: "/en/privacy" } as const;

export const PRIVACY_CONTACT_EMAIL = "marius.ottesen.76@gmail.com";

export type PrivacySection = { heading: string; paragraphs: string[] };

export function getPrivacyPageContent(lang: Lang): {
  title: string;
  updatedLabel: string;
  updatedDate: string;
  intro: string;
  sections: PrivacySection[];
} {
  if (lang === "en") {
    return {
      title: "Privacy policy",
      updatedLabel: "Last updated",
      updatedDate: "16 October 2026",
      intro:
        "This privacy policy describes how Marius Ottesen Consulting processes personal data when you use mariusottesen.no, including the contact form and optional web analytics.",
      sections: EN_SECTIONS,
    };
  }
  return {
    title: "Personvernerklæring",
    updatedLabel: "Sist oppdatert",
    updatedDate: "16. oktober 2026",
    intro:
      "Denne personvernerklæringen beskriver hvordan Marius Ottesen Consulting behandler personopplysninger når du bruker mariusottesen.no, inkludert kontaktskjema og valgfri nettstatistikk.",
    sections: NO_SECTIONS,
  };
}

const NO_SECTIONS: PrivacySection[] = [
  {
    heading: "Behandlingsansvarlig",
    paragraphs: [
      "Behandlingsansvarlig er Marius Ottesen Consulting (registrert foretaksnavn: MARIUS OTTESEN CONSULTING, organisasjonsnummer 937 102 801).",
      `Kontakt for personvern: ${PRIVACY_CONTACT_EMAIL}.`,
    ],
  },
  {
    heading: "Hvilke opplysninger behandles",
    paragraphs: [
      "Kontaktskjema (Consulting): navn, e-post, telefon, firma/virksomhet, stilling/rolle, valgt dialogtema og fritekstbeskrivelse. Opplysningene brukes til å motta og besvare henvendelsen.",
      "Valgfri statistikk (Google Analytics 4), kun etter samtykke: teknisk bruksdata som sidevisninger, omtrentlig geografi, enhet og nettlesertype, henvisningskilde (f.eks. søkemotor) og hendelser du utløser på nettsiden (f.eks. kontaktklikk og nedlasting av CV/søknad). Skjemainnhold og andre personidentifiserende data sendes ikke til Analytics.",
      "Teknisk drift: serverlogger hos hosting-leverandør (Vercel) kan inneholde IP-adresse og forespørselsmetadata for sikkerhet og drift. Dette er adskilt fra GA4 og reguleres av Vercels personvern- og databehandleravtaler.",
    ],
  },
  {
    heading: "Formål og rettslig grunnlag",
    paragraphs: [
      "Kontaktskjema: formål er å motta, vurdere og besvare henvendelser. Rettslig grunnlag: berettiget interesse i profesjonell kontaktoppfølging og/eller tiltak før avtale etter ditt initiativ.",
      "Google Analytics 4: formål er aggregert statistikk om hvordan nettsiden brukes (trafikk, interesse for innhold og relevante handlinger), for å forbedre innhold, struktur og brukeropplevelse. Rettslig grunnlag: samtykke — statistikk aktiveres bare når du aktivt velger «Godta statistikk».",
      "Vi bruker ikke GA4 til annonsering, remarketing eller personaliserte annonser.",
    ],
  },
  {
    heading: "Databehandler, e-post og tredjeland",
    paragraphs: [
      "Google Analytics 4 leveres av Google (Google Ireland Limited / Google LLC) som databehandler. Google kan behandle data i EU/EØS og i land utenfor EØS (inkl. USA), blant annet med Standard Contractual Clauses som overføringsgrunnlag der det kreves.",
      "Kontaktskjemaet sendes fra nettsiden via SMTP med Nodemailer, konfigurert mot Googles e-posttjeneste (Gmail SMTP). Meldingen leveres til marius.ottesen.76@gmail.com, og en bekreftelses-e-post sendes til adressen du oppgir. Google behandler e-posten som databehandler/leverandør i tråd med Googles vilkår og personvernregler; lagring skjer i behandlingsansvarligs e-postkonto hos Google.",
      "Nettsiden hostes av Vercel Inc.",
    ],
  },
  {
    heading: "Google Analytics, samtykke og tilbaketrekking",
    paragraphs: [
      "GA4 lastes ikke inn og ingen analyse-cookies settes før du har gitt samtykke. Du får likeverdige valg om å godta eller avslå statistikk; ingenting er forhåndsvalgt.",
      "Du kan endre valget via «Endre cookievalg» i bunntekst eller på denne siden, eller trekke tilbake samtykke med «Trekk tilbake samtykke» når statistikk er godtatt. Ved avslag eller tilbaketrekking stoppes videre sporing, og relevante analyse-cookies slettes så langt det er teknisk mulig i nettleseren.",
      "Measurement ID for nettsiden er G-LTLPQ27LQN (én property for norsk og engelsk innhold).",
      "Du kan i tillegg slå av sporing for deg selv i en nettleser uavhengig av banneret, ved å besøke https://www.mariusottesen.no/?analytics_opt_out=1 (slå av) eller ?analytics_opt_out=0 (fjern opt-out). Dette lagres lokalt i nettleseren.",
    ],
  },
  {
    heading: "Informasjonskapsler og lokal lagring",
    paragraphs: [
      "Nettsiden setter ikke analyse-informasjonskapsler uten samtykke.",
      "Samtykkevalget lagres lokalt i nettleseren (localStorage, nøkkel marius_cookie_consent_v1) i inntil 12 måneder, med tidsstempel og versjon av denne erklæringen. Etter utløp vises valgbanneret på nytt.",
      "Etter godtatt statistikk kan Google Analytics sette informasjonskapsler som _ga og _ga_* for å skille sesjoner og besøk. Varighet følger Googles standard (typisk opptil 24 måneder for hovedcookien _ga — du kan inspisere cookies i nettleseren).",
      "Personlig sporingsopt-out lagres lokalt (localStorage, nøkkel marius_analytics_opt_out) til du deaktiverer den.",
      "Behandlingsansvarlig lagrer ikke en sentral kopi av ditt cookievalg på server; dokumentasjonen av valget ligger i nettleseren du brukte. Dette er vanlig for enkle samtykkeløsninger på små nettsider, men gir ikke behandlingsansvarlig en uavhengig revisjonslogg per besøkende.",
    ],
  },
  {
    heading: "Lagringstid",
    paragraphs: [
      "Henvendelser mottatt per e-post oppbevares så lenge det er nødvendig for oppfølging av dialogen og for relevante dokumentasjonsforpliktelser (for eksempel der henvendelsen inngår i saklig dokumentasjon av profesjonell kontakt). Det er ikke satt en fast automatisk slettefrist i systemet.",
      "Data i Google Analytics lagres i henhold til innstillinger i GA4 (hendelsesdata — kontroller «Data retention» i Google Analytics Admin).",
      "Samtykkevalg i nettleseren: inntil 12 måneder, deretter nytt valg.",
    ],
  },
  {
    heading: "Dine rettigheter",
    paragraphs: [
      "Du har rett til innsyn, retting, sletting, begrensning, protest og dataportabilitet der det gjelder, samt å trekke tilbake samtykke til statistikk.",
      "Du kan klage til Datatilsynet (datatilsynet.no).",
      `Henvendelser om rettigheter: ${PRIVACY_CONTACT_EMAIL}.`,
    ],
  },
];

const EN_SECTIONS: PrivacySection[] = [
  {
    heading: "Data controller",
    paragraphs: [
      "The data controller is Marius Ottesen Consulting (registered name: MARIUS OTTESEN CONSULTING, organisation number 937 102 801).",
      `Privacy contact: ${PRIVACY_CONTACT_EMAIL}.`,
    ],
  },
  {
    heading: "What data is processed",
    paragraphs: [
      "Contact form (Consulting): name, email, phone, company, role/title, selected topic and free-text message. The data is used to receive and respond to your enquiry.",
      "Optional statistics (Google Analytics 4), only after consent: technical usage data such as page views, approximate geography, device and browser type, referral source (e.g. search engines) and on-site events (e.g. contact clicks and CV/application downloads). Form contents and other personally identifying data are not sent to Analytics.",
      "Technical hosting: server logs at Vercel may include IP address and request metadata for security and operations. This is separate from GA4 and governed by Vercel’s privacy and data processing terms.",
    ],
  },
  {
    heading: "Purpose and legal basis",
    paragraphs: [
      "Contact form: purpose is to receive, assess and respond to enquiries. Legal basis: legitimate interest in professional follow-up and/or steps prior to contract at your request.",
      "Google Analytics 4: purpose is aggregated statistics on how the site is used (traffic, content interest and relevant actions) to improve content, structure and experience. Legal basis: consent — statistics run only when you actively choose “Accept statistics”.",
      "We do not use GA4 for advertising, remarketing or ad personalisation.",
    ],
  },
  {
    heading: "Processors, email and third countries",
    paragraphs: [
      "Google Analytics 4 is provided by Google (Google Ireland Limited / Google LLC) as processor. Google may process data in the EU/EEA and outside the EEA (including the USA), including using Standard Contractual Clauses where required.",
      "The contact form is sent from the website via SMTP using Nodemailer, configured for Google’s email service (Gmail SMTP). Messages are delivered to marius.ottesen.76@gmail.com, and a confirmation email is sent to the address you provide. Google processes email as provider/processor under Google’s terms and privacy policies; storage is in the controller’s Google mailbox.",
      "The website is hosted by Vercel Inc.",
    ],
  },
  {
    heading: "Google Analytics, consent and withdrawal",
    paragraphs: [
      "GA4 is not loaded and no analytics cookies are set until you consent. You are offered equivalent choices to accept or decline statistics; nothing is pre-selected.",
      "You can change your choice via “Change cookie choices” in the footer or on this page, or withdraw consent using “Withdraw consent” when statistics are accepted. If you decline or withdraw, further tracking stops and relevant analytics cookies are cleared where technically possible in the browser.",
      "The site’s Measurement ID is G-LTLPQ27LQN (one property for Norwegian and English content).",
      "You can also disable tracking for yourself in a browser independently of the banner by visiting https://www.mariusottesen.no/?analytics_opt_out=1 (on) or ?analytics_opt_out=0 (off). This is stored locally in the browser.",
    ],
  },
  {
    heading: "Cookies and local storage",
    paragraphs: [
      "The site does not set analytics cookies without consent.",
      "Your consent choice is stored locally in the browser (localStorage, key marius_cookie_consent_v1) for up to 12 months, with a timestamp and version of this policy. After expiry, the choice banner is shown again.",
      "After accepting statistics, Google Analytics may set cookies such as _ga and _ga_* to distinguish sessions and visits. Duration follows Google’s defaults (typically up to 24 months for the main _ga cookie — inspect cookies in your browser).",
      "Personal tracking opt-out is stored locally (localStorage, key marius_analytics_opt_out) until you disable it.",
      "The controller does not keep a central server-side copy of your cookie choice; proof of the choice resides in the browser you used. This is common for simple consent on small sites but does not give the controller an independent audit log per visitor.",
    ],
  },
  {
    heading: "Retention",
    paragraphs: [
      "Enquiries received by email are kept for as long as necessary to follow up the dialogue and for relevant documentation obligations (for example where an enquiry forms part of reasonable documentation of professional contact). There is no fixed automatic deletion deadline in the system.",
      "Data in Google Analytics is retained according to GA4 property settings (event data — check “Data retention” in Google Analytics Admin).",
      "Consent choice in the browser: up to 12 months, then a new choice is requested.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "You have rights of access, rectification, erasure, restriction, objection and portability where applicable, and you may withdraw consent to statistics.",
      "You may lodge a complaint with the Norwegian Data Protection Authority (Datatilsynet).",
      `Rights requests: ${PRIVACY_CONTACT_EMAIL}.`,
    ],
  },
];
