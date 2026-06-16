"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Send,
  ChevronDown,
  Loader2,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import { getAiReiseSteps } from "./data/ai-reise";
import {
  getHovedpakker,
  getSpesialisertePakker,
  getConsultingMetoder,
  TjenestePakke,
  PakkePilotStotte,
} from "./data/consulting";
import { getConsultingForedragData } from "./data/consulting-foredrag";
import {
  blockTitleClass,
  cardTitleClass,
  pageIntroClass,
  pageTitleClass,
  sectionHeadingClass,
  sectionHeadingWrapClass,
} from "./lib/typography";

function getKategorier(lang: "no" | "en") {
  return lang === "no"
    ? ["Strategi", "Prosess", "Implementering", "Foredrag / workshop", "Annet"]
    : ["Strategy", "Process", "Implementation", "Talk / workshop", "Other"];
}

function getBudsjett(lang: "no" | "en") {
  return lang === "no"
    ? ["Velg budsjettramme (valgfritt)", "Under 50 000 NOK", "50 000 – 150 000 NOK", "150 000 – 500 000 NOK", "Over 500 000 NOK", "Usikker / Ønsker rådgivning"]
    : ["Select indicative budget (optional)", "Under NOK 50,000", "NOK 50,000 – 150,000", "NOK 150,000 – 500,000", "Above NOK 500,000", "To be determined / Advisory needed"];
}

const inputClass =
  "w-full bg-slate-950/80 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all";

const pakkeLabelClass = "text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1";
const pakkeBodyClass = "text-sm text-slate-400 leading-relaxed font-light";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const produktLenker = [
  { label: "The Predictive Sales Coach", href: "/psc" },
  { label: "FlowSignal", href: "/flowsignal" },
  { label: "SMB Salgsflyt-sjekken", href: "/salgsflyt-sjekken" },
] as const;

function PakkeTekst({ text }: { text: string }) {
  const pattern = new RegExp(`(${produktLenker.map(({ label }) => label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const deler = text.split(pattern);

  return (
    <p className={pakkeBodyClass}>
      {deler.map((del, index) => {
        const lenke = produktLenker.find(({ label }) => label === del);
        if (lenke) {
          return (
            <Link key={`${lenke.href}-${index}`} href={lenke.href} className={linkClass}>
              {lenke.label}
            </Link>
          );
        }
        return del;
      })}
    </p>
  );
}

const summaryClass =
  "cursor-pointer list-none flex items-center justify-between gap-3 text-sm font-bold text-indigo-400 hover:text-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 rounded [&::-webkit-details-marker]:hidden";

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className={sectionHeadingWrapClass}>
      <h2 id={id} className={sectionHeadingClass}>
        {children}
      </h2>
    </div>
  );
}

function PakkeFelt({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className={pakkeLabelClass}>{label}</p>
      <PakkeTekst text={text} />
    </div>
  );
}

function PakkePilotStotteBlokk({ stotte }: { stotte: PakkePilotStotte }) {
  const erEkstern = stotte.lenkeHref.startsWith("http");
  const linkProps = {
    className: `${linkClass} text-sm font-bold`,
    children: <>{stotte.lenkeLabel} →</>,
  };

  return (
    <div className="pt-3 border-t border-white/10 space-y-2">
      <p className={pakkeBodyClass}>{stotte.tekst}</p>
      {erEkstern ? (
        <a href={stotte.lenkeHref} target="_blank" rel="noopener noreferrer" {...linkProps} />
      ) : (
        <Link href={stotte.lenkeHref} {...linkProps} />
      )}
    </div>
  );
}

function PakkeDetaljer({
  pakke,
  tr,
}: {
  pakke: TjenestePakke;
  tr: (key: string) => string;
}) {
  return (
    <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
      <PakkeFelt label={tr("cons.pakke.for")} text={pakke.forDetalj} />
      <PakkeFelt label={tr("cons.pakke.leveranseDetalj")} text={pakke.leveranseDetalj} />
      {pakke.pilotStotte && <PakkePilotStotteBlokk stotte={pakke.pilotStotte} />}
    </div>
  );
}

function HovedpakkeKort({
  pakke,
  index,
  tr,
  nummerLabel,
}: {
  pakke: TjenestePakke;
  index: number;
  tr: (key: string) => string;
  nummerLabel: string;
}) {
  return (
    <article className="p-6 bg-slate-900/40 rounded-2xl border border-indigo-500/20 shadow-xl space-y-3">
      <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
        {nummerLabel} {index + 1}
      </p>
      <h3 className={blockTitleClass}>{pakke.tittel}</h3>
      <PakkeFelt label={tr("cons.pakke.hvem")} text={pakke.hvem} />
      <PakkeFelt label={tr("cons.pakke.leveranse")} text={pakke.leveranseKort} />
      <details className="group">
        <summary className={summaryClass} aria-label={`${tr("cons.pakke.lesMer")}: ${pakke.tittel}`}>
          <span>{tr("cons.pakke.lesMer")}</span>
          <ChevronDown size={16} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <PakkeDetaljer pakke={pakke} tr={tr} />
      </details>
    </article>
  );
}

function SpesialisertPakkeAccordion({
  pakke,
  tr,
}: {
  pakke: TjenestePakke;
  tr: (key: string) => string;
}) {
  return (
    <details className="group rounded-2xl border border-slate-800 bg-slate-900/40 shadow-xl overflow-hidden">
      <summary className={`${summaryClass} p-5 md:p-6`} aria-label={`${tr("cons.pakke.lesMer")}: ${pakke.tittel}`}>
        <span className="text-left block min-w-0">
          <span className={`block ${blockTitleClass} mb-1`}>{pakke.tittel}</span>
          <PakkeTekst text={pakke.hvem} />
        </span>
        <ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180 mt-1" aria-hidden="true" />
      </summary>
      <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-white/10">
        <div className="pt-4 space-y-3">
          <PakkeFelt label={tr("cons.pakke.leveranse")} text={pakke.leveranseKort} />
          <PakkeFelt label={tr("cons.pakke.for")} text={pakke.forDetalj} />
          <PakkeFelt label={tr("cons.pakke.leveranseDetalj")} text={pakke.leveranseDetalj} />
          {pakke.pilotStotte && <PakkePilotStotteBlokk stotte={pakke.pilotStotte} />}
        </div>
      </div>
    </details>
  );
}

const ctaBtnClass =
  "inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-indigo-500/40 bg-indigo-500/10 text-indigo-200 text-sm font-bold hover:bg-indigo-500/20 hover:border-indigo-400/60 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

export default function Consulting() {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const kategorier = getKategorier(lang);
  const budsjettAlternativer = getBudsjett(lang);
  const aiReiseSteps = getAiReiseSteps(lang);
  const hovedpakker = getHovedpakker(lang);
  const spesialisertePakker = getSpesialisertePakker(lang);
  const metoder = getConsultingMetoder(lang);
  const foredrag = getConsultingForedragData(lang);
  const [valgtKategori, setValgtKategori] = useState<string[]>([]);
  const [budsjett, setBudsjett] = useState("");
  const [navn, setNavn] = useState("");
  const [firma, setFirma] = useState("");
  const [epost, setEpost] = useState("");
  const [telefon, setTelefon] = useState("");
  const [stilling, setStilling] = useState("");
  const [beskrivelse, setBeskrivelse] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feilmelding, setFeilmelding] = useState("");

  const toggleKategori = (k: string) => {
    setValgtKategori((prev) => (prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setFeilmelding("");

    const kategoriTekst = valgtKategori.length > 0 ? valgtKategori.join(", ") : "Ikke spesifisert";
    const budsjettTekst = budsjett || "Ikke spesifisert";

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          navn,
          firma,
          epost,
          telefon,
          stilling,
          kategorier: valgtKategori,
          budsjett,
          beskrivelse,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.fallback) {
          sendViaMail();
          return;
        }
        throw new Error(data.error || "Noe gikk galt");
      }

      setStatus("success");
      resetSkjema();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      sendViaMail();
    }

    function sendViaMail() {
      const emne = encodeURIComponent(`Ny forespørsel fra ${navn}${firma ? ` – ${firma}` : ""}`);
      const kropp = encodeURIComponent(
        `FORESPØRSEL – MARIUS OTTESEN CONSULTING\n` +
          `${"─".repeat(40)}\n\n` +
          `Navn: ${navn}\n` +
          `Firma: ${firma || "–"}\n` +
          `Stilling: ${stilling || "–"}\n` +
          `E-post: ${epost}\n` +
          `Telefon: ${telefon || "–"}\n` +
          `Kategori: ${kategoriTekst}\n` +
          `Budsjettramme: ${budsjettTekst}\n\n` +
          `PROSJEKTBESKRIVELSE\n` +
          `${"─".repeat(40)}\n` +
          `${beskrivelse}\n`
      );
      const cc = epost ? `&cc=${encodeURIComponent(epost)}` : "";
      window.open(`mailto:marius.ottesen.76@gmail.com?subject=${emne}&body=${kropp}${cc}`, "_self");
      setStatus("success");
      resetSkjema();
      setTimeout(() => setStatus("idle"), 5000);
    }

    function resetSkjema() {
      setNavn("");
      setFirma("");
      setEpost("");
      setTelefon("");
      setStilling("");
      setValgtKategori([]);
      setBudsjett("");
      setBeskrivelse("");
    }
  };

  return (
    <div className="py-4 text-left w-full overflow-x-hidden">
      <section className="border-b border-white/10 pb-8 mb-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-60 shrink-0 space-y-3">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/consulting.png" alt="Marius Ottesen Consulting" className="w-full h-auto" />
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-700/50 shadow bg-white p-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/moc-avlang.png"
                alt="Marius Ottesen Consulting"
                className="w-full h-auto block"
                width={240}
                height={80}
              />
            </div>
          </div>

          <div className="flex-1 min-w-0 flex flex-col">
            <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-3">{tr("cons.brand")}</p>
            <h1 className={`${pageTitleClass} mb-4`}>
              {tr("cons.title.1")} <br />
              <span className="text-indigo-500">{tr("cons.title.2")}</span>
            </h1>
            <p className={pageIntroClass}>{tr("cons.intro.1")}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="cons-tjenester-heading" className="mb-12">
        <SectionHeading id="cons-tjenester-heading">{tr("cons.tjenester.title")}</SectionHeading>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light mb-6 w-full min-w-0 max-w-none">{tr("cons.tjenester.intro")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {hovedpakker.map((pakke, index) => (
            <HovedpakkeKort key={pakke.id} pakke={pakke} index={index} tr={tr} nummerLabel={tr("cons.pakke.nummer")} />
          ))}
        </div>
      </section>

      <section aria-labelledby="cons-spesialisert-heading" className="mb-12">
        <SectionHeading id="cons-spesialisert-heading">{tr("cons.spesialisert.title")}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {spesialisertePakker.map((pakke) => (
            <SpesialisertPakkeAccordion key={pakke.id} pakke={pakke} tr={tr} />
          ))}
        </div>
      </section>

      <section aria-labelledby="cons-foredrag-heading" className="mb-12">
        <SectionHeading id="cons-foredrag-heading">{foredrag.title}</SectionHeading>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light mb-4 w-full min-w-0 max-w-none">{foredrag.ingress}</p>
        <p className="text-slate-400 text-sm leading-relaxed font-light mb-6 w-full min-w-0 max-w-none">{foredrag.stotte}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {foredrag.kort.map((kort) => (
            <div key={kort.title} className="p-4 bg-slate-900/40 rounded-xl border border-slate-800 space-y-2">
              <h3 className={cardTitleClass}>{kort.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{kort.text}</p>
            </div>
          ))}
        </div>
        <Link href="/kontakt" className={ctaBtnClass}>
          {foredrag.cta}
        </Link>
      </section>

      <section aria-labelledby="cons-metoder-heading" className="mb-12">
        <SectionHeading id="cons-metoder-heading">{tr("cons.metoder.title")}</SectionHeading>
        <p className="text-slate-400 text-base leading-relaxed font-light mb-5">{tr("cons.metoder.intro")}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {metoder.map((metode) => {
            const metodeHref = produktLenker.find(({ label }) => label === metode.tittel)?.href;
            return (
            <li
              key={metode.tittel}
              className="flex items-start gap-3 p-4 bg-slate-900/40 rounded-xl border border-slate-800"
            >
              <ChevronRight size={16} className="text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-2">
                {metodeHref ? (
                  <Link href={metodeHref} className={`${linkClass} text-sm font-bold no-underline hover:underline`}>
                    {metode.tittel}
                  </Link>
                ) : (
                  <p className="text-white text-sm font-bold">{metode.tittel}</p>
                )}
                <p className="text-slate-400 text-sm font-light leading-relaxed">{metode.beskrivelse}</p>
                {metode.pilotStotte && <PakkePilotStotteBlokk stotte={metode.pilotStotte} />}
              </div>
            </li>
            );
          })}
        </ul>
        <p className="mt-4">
          <Link href="/prosjekter" className={linkClass}>
            {tr("cons.prosjekter.link")}
          </Link>
        </p>
      </section>

      <section aria-labelledby="cons-metodikk-heading" className="mb-12">
        <SectionHeading id="cons-metodikk-heading">{tr("cons.metodikk.title")}</SectionHeading>
        <p className="text-slate-400 text-base leading-relaxed font-light mb-6 w-full min-w-0 max-w-none">{tr("cons.metodikk.intro")}</p>
        <h3 className={`${cardTitleClass} text-indigo-400 mb-3`}>{tr("cons.aiReise.title")}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
          {aiReiseSteps.map((step, index) => (
            <div key={step} className="flex items-start gap-3 p-4 bg-slate-900/40 rounded-xl border border-slate-800">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-black shrink-0">
                {index + 1}
              </span>
              <span className="text-sm text-slate-300 leading-snug pt-0.5">{step}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-400 leading-relaxed italic mb-6 w-full min-w-0 max-w-none">{tr("cons.aiReise.forklaring")}</p>
        <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-5 py-4 space-y-3 w-full min-w-0 max-w-none">
          <p className="text-indigo-200 font-semibold text-base leading-snug">{tr("cons.formula.line")}</p>
          <p className="text-sm text-slate-300 leading-relaxed">{tr("cons.formula.summary")}</p>
        </div>
      </section>

      <section aria-labelledby="cons-dialog-heading" className="mb-12">
        <SectionHeading id="cons-dialog-heading">{tr("cons.dialog")}</SectionHeading>
        <div className="bg-slate-900/40 rounded-2xl border border-white/10 shadow-xl p-8 md:p-12">
          <p className="text-slate-400 italic font-light text-lg mb-6 w-full min-w-0 max-w-none">{tr("cons.dialog.intro")}</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                  {lang === "no" ? "Navn" : "Name"} <span className="text-indigo-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={navn}
                  onChange={(e) => setNavn(e.target.value)}
                  placeholder={lang === "no" ? "Ditt fulle navn" : "Full name"}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                  {lang === "no" ? "Firmanavn" : "Company"}
                </label>
                <input
                  type="text"
                  value={firma}
                  onChange={(e) => setFirma(e.target.value)}
                  placeholder={lang === "no" ? "Ditt selskap" : "Company name"}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                  {lang === "no" ? "Stilling / tittel" : "Position / title"}
                </label>
                <input
                  type="text"
                  value={stilling}
                  onChange={(e) => setStilling(e.target.value)}
                  placeholder={lang === "no" ? "F.eks. daglig leder, salgssjef" : "e.g. managing director, sales leader"}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                  {lang === "no" ? "Telefonnummer" : "Phone number"}
                </label>
                <input
                  type="tel"
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                  placeholder="+47 000 00 000"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                {lang === "no" ? "E-post" : "Email"} <span className="text-indigo-500">*</span>
              </label>
              <input
                type="email"
                required
                value={epost}
                onChange={(e) => setEpost(e.target.value)}
                placeholder={lang === "no" ? "din@epost.no" : "your@email.com"}
                className={inputClass}
              />
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                {lang === "no" ? "Hva gjelder henvendelsen?" : "What is the inquiry about?"}
              </label>
              <div className="flex flex-wrap gap-3">
                {kategorier.map((k) => {
                  const aktiv = valgtKategori.includes(k);
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => toggleKategori(k)}
                      className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200 border ${
                        aktiv
                          ? "bg-indigo-500/20 border-indigo-400/50 text-indigo-300 shadow-lg shadow-indigo-500/10"
                          : "bg-slate-950/60 border-white/10 text-slate-500 hover:border-white/20 hover:text-slate-300"
                      }`}
                    >
                      {k}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                {lang === "no" ? "Budsjettramme" : "Budget range"}{" "}
                <span className="normal-case tracking-normal font-medium">{lang === "no" ? "(valgfritt)" : "(optional)"}</span>
              </label>
              <div className="relative">
                <select
                  value={budsjett}
                  onChange={(e) => setBudsjett(e.target.value)}
                  className="w-full appearance-none bg-slate-950/80 border border-white/10 rounded-xl px-5 py-4 text-sm text-slate-400 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all cursor-pointer"
                >
                  {budsjettAlternativer.map((alt, i) => (
                    <option key={alt} value={i === 0 ? "" : alt} className="bg-slate-950 text-slate-300">
                      {alt}
                    </option>
                  ))}
                </select>
                <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" aria-hidden="true" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                {lang === "no" ? "Prosjektbeskrivelse" : "Project description"} <span className="text-indigo-500">*</span>
              </label>
              <textarea
                required
                rows={6}
                value={beskrivelse}
                onChange={(e) => setBeskrivelse(e.target.value)}
                placeholder={
                  lang === "no"
                    ? "Beskriv kort hva du trenger hjelp med, hvilke utfordringer du står overfor, eller hva du ønsker å oppnå..."
                    : "Please outline the challenge you are facing, the objectives you want to achieve, and any relevant context..."
                }
                className={`${inputClass} leading-relaxed resize-none`}
              />
            </div>

            <div className="pt-4 space-y-4">
              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">{feilmelding}</div>
              )}
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-lg ${
                  status === "success"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default"
                    : status === "sending"
                      ? "bg-indigo-500/50 text-white/70 cursor-wait"
                      : "bg-indigo-500 text-white hover:bg-indigo-400 hover:shadow-indigo-500/25 hover:shadow-xl active:scale-[0.98]"
                }`}
              >
                {status === "success" ? (
                  tr("cons.sendt")
                ) : status === "sending" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                    {tr("cons.sender")}
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden="true" />
                    {tr("cons.send")}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="mt-12 pt-8 border-t border-slate-800/60">
        <div className="flex flex-wrap items-center justify-center gap-4 py-4 px-6 bg-slate-900/30 rounded-2xl border border-slate-800/50">
          <div className="rounded-xl overflow-hidden border border-slate-700/50 bg-white p-px shrink-0 w-14 h-14 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/moc.logo.png" alt="MOC" width={56} height={56} className="w-full h-full object-contain" />
          </div>
          <span className="text-slate-500 text-sm font-bold uppercase tracking-widest italic">{tr("cons.levert")}</span>
        </div>
      </section>
    </div>
  );
}
