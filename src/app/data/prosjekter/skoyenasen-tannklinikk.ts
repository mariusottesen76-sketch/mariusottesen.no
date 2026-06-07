import { prosjektKontaktLenke } from "../../lib/prosjekt-lenker";
import { type ProsjektType } from "./predictive-sales-coach";

export const skoyenasenTannklinikk: ProsjektType = {
  id: "skoyenasen-tannklinikk-2026",
  tittel: {
    no: "Skøyenåsen Tannklinikk: AI i pasientreise, intake og booking",
    en: "Skøyenåsen Dental Clinic: AI in patient journey, intake and booking",
  },
  teaser: {
    no: "Virksomhetsnært AI-case for pasientreise, smart intake, veiledet booking og mer systematisk oppfølging.",
    en: "A business-near AI case focused on patient journey, smart intake, guided booking and more systematic follow-up.",
  },
  bildeUrl: "/images/skoyenasen-tk.gif",
  dato: "2026-03-26",
  visningsDato: "26.03.26",
  bildeHint: {
    no: "Klikk på bildet for å se Skøyenåsen Tannklinikk i større format.",
    en: "Click the image to view Skøyenåsen Dental Clinic in a larger format.",
  },
  ekstraBilder: [
    {
      src: "/images/skoyenasen-tannklinikk-logo.png",
      alt: {
        no: "Skøyenåsen Tannklinikk — logo",
        en: "Skøyenåsen Dental Clinic — logo",
      },
    },
  ],
  innhold: {
    no: `<strong>Hva prosjektet er</strong>

Skøyenåsen Tannklinikk er et konkret utviklingscase med fokus på hvordan AI og digitale løsninger kan forbedre pasientreisen fra første kontakt til oppfølging.

Prosjektet kobler kundeopplevelse, smart intake, veiledet booking, digital front-end og ansvarlig bruk av AI.

<strong>Problemet prosjektet adresserer</strong>

Mange mindre virksomheter har manuelle, fragmenterte eller uklare kundereiser. Henvendelser kommer gjennom flere kanaler, behov må avklares manuelt, booking kan bli unøyaktig, og oppfølging kan bli personavhengig.

I helsetjenester er dette ekstra viktig fordi tillit, presisjon og menneskelig kontroll må ivaretas.

<strong>Hva som er bygget eller utviklet</strong>

Prosjektet tar utgangspunkt i behov knyttet til behovsavklaring, riktigere booking, tydeligere informasjon og mer systematisk oppfølging.

I første fase vurderes særlig løsninger for smart intake, veiledet booking, mer relevant kommunikasjon og en sterkere digital front-end. Målet er å forbedre flyt og tilgjengelighet uten å miste det personlige preget som er en viktig del av klinikkens styrke.

<strong>Hvordan det fungerer</strong>

Løsningen er tenkt som støtte i første del av pasientreisen. AI og digital veiledning kan hjelpe brukeren å beskrive behov, forstå relevante alternativer og bli guidet mot riktig neste steg.

Prosjektet er bevisst avgrenset mot front-end, pasientdialog og praktisk flyt, ikke journalnære eller sensitive kliniske vurderinger.

<strong>Hvorfor dette er relevant</strong>

Prosjektet er relevant for virksomheter som ønsker å forbedre kunde- eller pasientreisen uten å gå rett på høy-risiko AI. Det viser hvordan AI kan brukes i områder med tydelig forretningsverdi, god brukeropplevelse og håndterbar governance.

For arbeidsgivere viser prosjektet hvordan jeg tenker praktisk AI-implementering i en reell virksomhet. For kunder viser det hvordan lignende logikk kan overføres til klinikker, servicebedrifter, rådgivningsmiljøer og SMB-virksomheter med mange manuelle henvendelser.

<strong>Status og modenhet</strong>

Konkret virksomhetscase og utviklingsspor. Fokus på pasientreise, front-end, intake, bookinglogikk, oppfølging og ansvarlig avgrensning.

<strong>Mulig videreutvikling</strong>

Prosjektet kan videreutvikles til pilot for chatbot, guidet intake, bookingstøtte, recall, digital oppfølging og bedre informasjonsflyt mellom pasient og klinikk.

<strong>Neste steg</strong>

${prosjektKontaktLenke("no")} dersom du ønsker å diskutere hvordan AI kan forbedre kundereise, intake, booking eller oppfølging i en service- eller helseorientert virksomhet.`,
    en: `<strong>What the project is</strong>

Skøyenåsen Dental Clinic is a concrete development case focused on how AI and digital solutions can improve the patient journey from first contact to follow-up.

The project connects customer experience, smart intake, guided booking, digital front-end and responsible use of AI.

<strong>The problem the project addresses</strong>

Many smaller organisations have manual, fragmented or unclear customer journeys. Inquiries come through multiple channels, needs must be clarified manually, booking can become inaccurate, and follow-up can become person-dependent.

In healthcare services this is especially important because trust, precision and human control must be safeguarded.

<strong>What has been built or developed</strong>

The project starts from needs related to needs clarification, more accurate booking, clearer information and more systematic follow-up.

In the first phase, solutions for smart intake, guided booking, more relevant communication and a stronger digital front-end are being assessed in particular. The goal is to improve flow and accessibility without losing the personal touch that is a key strength of the clinic.

<strong>How it works</strong>

The solution is intended as support in the first part of the patient journey. AI and digital guidance can help the user describe needs, understand relevant options and be guided toward the right next step.

The project is deliberately scoped to front-end, patient dialogue and practical flow — not journal-adjacent or sensitive clinical judgements.

<strong>Why this is relevant</strong>

The project is relevant for organisations that want to improve the customer or patient journey without going straight to high-risk AI. It shows how AI can be used in areas with clear business value, good user experience and manageable governance.

For employers, the project shows how I approach practical AI implementation in a real organisation. For customers, it shows how similar logic can be transferred to clinics, service businesses, advisory environments and SMB organisations with many manual inquiries.

<strong>Status and maturity</strong>

Concrete business case and development track. Focus on patient journey, front-end, intake, booking logic, follow-up and responsible scoping.

<strong>Possible further development</strong>

The project can be developed into a pilot for chatbot, guided intake, booking support, recall, digital follow-up and better information flow between patient and clinic.

<strong>Next steps</strong>

${prosjektKontaktLenke("en")} if you would like to discuss how AI can improve customer journey, intake, booking or follow-up in a service- or health-oriented organisation.`,
  },
};
