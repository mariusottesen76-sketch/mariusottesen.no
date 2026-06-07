"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Send,
  ChevronDown,
  Loader2,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import { getAiReiseSteps } from "./data/ai-reise";
import { getConsultingPakker } from "./data/consulting";

function getKategorier(lang: "no" | "en") {
  return lang === "no" ? ["Strategi", "Prosess", "Implementering", "Annet"] : ["Strategy", "Process", "Implementation", "Other"];
}

function getBudsjett(lang: "no" | "en") {
  return lang === "no"
    ? ["Velg budsjettramme (valgfritt)", "Under 50 000 NOK", "50 000 – 150 000 NOK", "150 000 – 500 000 NOK", "Over 500 000 NOK", "Usikker / Ønsker rådgivning"]
    : ["Select indicative budget (optional)", "Under NOK 50,000", "NOK 50,000 – 150,000", "NOK 150,000 – 500,000", "Above NOK 500,000", "To be determined / Advisory needed"];
}

function getProblems(lang: "no" | "en") {
  return lang === "no"
    ? [
        { problem: "«AI føles som en hype — vi vet ikke hvor vi skal starte.»", losning: "AI-Roadmap: Vi kartlegger de 3 viktigste prosessene der AI vil gi umiddelbar ROI." },
        { problem: "«Vi har verktøyene, men mangler styring og forankring i ledelsen.»", losning: "Governance-rammeverk: Klare retningslinjer for hvem som eier hva når AI påvirker beslutninger." },
        { problem: "«Teamet bruker AI individuelt, men vi ser ingen gevinster på bunnlinjen.»", losning: "Prosessintegrasjon: Vi bygger AI inn i kjerneprosessene — ikke som enkeltverktøy, men ende-til-ende." },
        { problem: "«Vi trenger teknisk implementering, men har ikke et internt tech-team.»", losning: "Nettverksmodell: Jeg kobler deg med de rette ekspertene og leder prosjektet fra strategi til produksjon." },
      ]
    : [
        { problem: '"AI feels like hype — we have no idea where to begin."', losning: "AI Roadmap: We identify the three highest-impact processes where AI will deliver immediate, measurable ROI." },
        { problem: '"We have the tools, but lack governance and leadership alignment."', losning: "Governance Framework: Clear accountability structures for AI-influenced decision-making across the organisation." },
        { problem: '"Our team uses AI individually, but we see no bottom-line impact."', losning: "Process Integration: We embed AI into core business workflows — not as isolated tools, but as an end-to-end capability." },
        { problem: '"We need technical implementation, but lack an in-house tech team."', losning: "Network Model: I connect you with the right specialists and lead the engagement from strategy through to production." },
      ];
}

function getSteps(lang: "no" | "en") {
  return lang === "no"
    ? [
        { steg: "1", tittel: "Oppstartsmøte", beskrivelse: "Vi kartlegger utfordringer, mål og muligheter. Du får en klar anbefaling — uforpliktende." },
        { steg: "2", tittel: "Analyse & strategi", beskrivelse: "Dypdykk i prosesser, data og organisasjon. Leverer et konkret veikart med prioriterte tiltak og forventet ROI." },
        { steg: "3", tittel: "Implementering", beskrivelse: "Gjennomføring med mine tekniske partnere. Jeg leder prosjektet og sikrer at det leverer kommersiell verdi." },
      ]
    : [
        { steg: "1", tittel: "Discovery session", beskrivelse: "We assess your challenges, objectives and opportunities. You receive a clear recommendation — no obligation." },
        { steg: "2", tittel: "Analysis & strategy", beskrivelse: "A deep dive into processes, data and organisational readiness. Deliverable: a concrete roadmap with prioritised initiatives." },
        { steg: "3", tittel: "Implementation", beskrivelse: "Execution alongside my technical partners. I lead the project and ensure it delivers commercial value." },
      ];
}

const inputClass =
  "w-full bg-slate-950/80 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const sectionTitleClass = "text-xl md:text-2xl font-black text-white italic tracking-tight mb-4";

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="border-b-2 border-indigo-500/30 mb-6">
      <h2 id={id} className={sectionTitleClass}>
        {children}
      </h2>
    </div>
  );
}

export default function Consulting() {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const kategorier = getKategorier(lang);
  const budsjettAlternativer = getBudsjett(lang);
  const problems = getProblems(lang);
  const steps = getSteps(lang);
  const aiReiseSteps = getAiReiseSteps(lang);
  const pakker = getConsultingPakker(lang);
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
          <div className="w-full md:w-60 shrink-0">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/consulting.png" alt="Marius Ottesen Consulting" className="w-full h-auto" />
            </div>
          </div>

          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-tight text-white uppercase italic break-words max-w-full [overflow-wrap:anywhere] shrink-0">
                {tr("cons.title.1")} <br />
                <span className="text-indigo-500">{tr("cons.title.2")}</span>
              </h1>
              <div className="rounded-lg overflow-hidden border border-slate-700/50 shadow bg-white p-2 min-w-0 max-w-full sm:max-w-[15.75rem] sm:ml-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/moc-avlang.png"
                  alt="Marius Ottesen Consulting"
                  className="h-auto w-full max-w-full block object-contain object-left"
                  width={360}
                  height={113}
                />
              </div>
            </div>
            <div className="max-w-3xl space-y-4 mt-4">
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">{tr("cons.intro.1")}</p>
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                {tr("cons.intro.2")}{" "}
                <Link href="/prosjekter" className={linkClass}>
                  {tr("cons.intro.2.link")}
                </Link>
                {lang === "no" ? " for konkrete caser." : " for concrete cases."}
              </p>
              <p className="text-lg text-slate-400 leading-relaxed font-light">{tr("cons.intro.5")}</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="cons-verdi-heading" className="mb-12">
        <SectionHeading id="cons-verdi-heading">{tr("cons.verdi.title")}</SectionHeading>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light max-w-3xl">
          {tr("cons.verdi.text")}
        </p>
      </section>

      <section aria-labelledby="cons-aireise-heading" className="mb-12">
        <SectionHeading id="cons-aireise-heading">{tr("cons.aiReise.title")}</SectionHeading>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
          {aiReiseSteps.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-3 p-4 bg-slate-900/40 rounded-xl border border-slate-800"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-black shrink-0">
                {index + 1}
              </span>
              <span className="text-sm text-slate-300 leading-snug pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-sm text-slate-400 leading-relaxed max-w-3xl italic whitespace-nowrap overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {tr("cons.aiReise.forklaring")}
        </p>
      </section>

      <section aria-labelledby="cons-formula-heading" className="mb-12">
        <SectionHeading id="cons-formula-heading">{tr("cons.formula.title")}</SectionHeading>
        <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-5 py-4 space-y-3 max-w-3xl">
          <p className="text-indigo-200 font-semibold text-base leading-snug">{tr("cons.formula.line")}</p>
          <p className="text-sm text-slate-300 leading-relaxed">{tr("cons.formula.summary")}</p>
        </div>
      </section>

      <section aria-labelledby="cons-pakker-heading" className="mb-12">
        <SectionHeading id="cons-pakker-heading">{tr("cons.pakker.title")}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pakker.map((pakke, index) => (
            <article
              key={pakke.tittel}
              className="p-6 bg-slate-900/40 rounded-2xl border border-indigo-500/20 shadow-xl space-y-2"
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                {lang === "no" ? `Pakke ${index + 1}` : `Package ${index + 1}`}
              </p>
              <h3 className="text-lg font-black text-white italic tracking-tight">{pakke.tittel}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{pakke.beskrivelse}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="cons-cta-heading"
        className="mb-12 p-8 bg-slate-900/40 rounded-2xl border border-indigo-500/20 shadow-xl space-y-4"
      >
        <h2 id="cons-cta-heading" className="sr-only">
          {tr("cons.cta.kontakt")}
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">{tr("cons.prosjekter.intro")}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-3 items-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-black uppercase text-xs hover:bg-indigo-500 hover:text-white transition-all italic shadow-lg"
            aria-label="Gå til kontaktsiden"
          >
            {tr("cons.cta.kontakt")}
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/prosjekter" className={linkClass} aria-label="Gå til AI-prosjekter">
            {tr("cons.prosjekter.link")}
          </Link>
        </div>
      </section>

      <section aria-labelledby="cons-initiatives-heading" className="mb-12">
        <SectionHeading id="cons-initiatives-heading">{tr("cons.initiatives.title")}</SectionHeading>
        <p className="text-slate-400 italic font-light text-base mb-6 max-w-3xl">{tr("cons.initiatives.intro")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
          <div className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-[72px] h-[72px] shrink-0 rounded-xl bg-white border border-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <Image src="/images/ai-value-lab-logo.png" alt="AI Value Lab Oslo" width={72} height={72} className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0 space-y-2">
                <h3 className="text-white font-black italic tracking-tight">{tr("cons.initiatives.avl.title")}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{tr("cons.initiatives.avl.text")}</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-[72px] h-[72px] shrink-0 rounded-xl bg-white border border-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <Image src="/images/skoyenasen-tk-logo.png" alt="Skøyenåsen Tannklinikk" width={72} height={72} className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0 space-y-2">
                <h3 className="text-white font-black italic tracking-tight">{tr("cons.initiatives.stk.title")}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{tr("cons.initiatives.stk.text")}</p>
              </div>
            </div>
          </div>
        </div>
        <p>
          <Link href="/prosjekter" className={linkClass} aria-label="Gå til AI-prosjekter">
            {tr("cons.prosjekter.link")}
          </Link>
        </p>
      </section>

      <section aria-labelledby="cons-problems-heading" className="mb-12">
        <SectionHeading id="cons-problems-heading">{tr("cons.kjenner")}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((item) => (
            <div key={item.problem} className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle size={16} className="text-amber-400/70 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-slate-400 text-sm italic">{item.problem}</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-emerald-400/70 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-white text-sm font-bold">{item.losning}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="cons-prosess-heading" className="mb-12">
        <SectionHeading id="cons-prosess-heading">{tr("cons.prosess")}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((item) => (
            <div key={item.steg} className="p-6 bg-slate-900/40 rounded-2xl border border-indigo-500/20 shadow-xl text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-black text-xl">
                {item.steg}
              </div>
              <h3 className="text-white font-black italic text-base tracking-tight">{item.tittel}</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{item.beskrivelse}</p>
              {item.steg !== "3" && (
                <ArrowRight size={16} className="text-indigo-500/30 mx-auto hidden md:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="cons-dialog-heading">
        <SectionHeading id="cons-dialog-heading">{tr("cons.dialog")}</SectionHeading>
        <div className="bg-slate-900/40 rounded-2xl border border-white/10 shadow-xl p-8 md:p-12">
          <p className="text-slate-400 italic font-light text-lg mb-6 max-w-2xl">{tr("cons.dialog.intro")}</p>

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
