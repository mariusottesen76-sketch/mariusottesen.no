"use client";

import React from "react";
import Link from "next/link";
import { useConsent } from "./ConsentContext";
import { isEnPath } from "../../lib/locale-routes";
import { usePathname } from "next/navigation";

const btnBase =
  "flex-1 min-w-[140px] px-4 py-2.5 rounded-lg text-sm font-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

export default function CookieConsentBanner() {
  const pathname = usePathname() ?? "/";
  const lang = isEnPath(pathname) ? "en" : "no";
  const { uiState, acceptAnalytics, rejectAnalytics, optOutActive } = useConsent();

  if (uiState !== "needs_choice") return null;

  const privacyHref = lang === "en" ? "/en/privacy" : "/personvern";

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-3xl mx-auto rounded-2xl border border-slate-700/80 bg-slate-950/95 backdrop-blur-md shadow-2xl p-5 sm:p-6 space-y-4">
        <div className="space-y-2">
          <p id="cookie-consent-title" className="text-white font-bold text-sm uppercase tracking-widest">
            {lang === "no" ? "Informasjonskapsler og statistikk" : "Cookies and analytics"}
          </p>
          <p id="cookie-consent-desc" className="text-slate-400 text-sm leading-relaxed">
            {lang === "no" ? (
              <>
                Vi bruker valgfri statistikk (Google Analytics 4) for å forstå hvordan nettsiden brukes. Ingen
                annonsering eller remarketing. Du velger selv — ingen forhåndsaksept.{" "}
                <Link href={privacyHref} className="text-indigo-400 underline underline-offset-2 hover:text-indigo-200">
                  Personvernerklæring
                </Link>
                .
              </>
            ) : (
              <>
                We use optional statistics (Google Analytics 4) to understand how the site is used. No advertising or
                remarketing. You choose — nothing is pre-selected.{" "}
                <Link href={privacyHref} className="text-indigo-400 underline underline-offset-2 hover:text-indigo-200">
                  Privacy policy
                </Link>
                .
              </>
            )}
          </p>
          {optOutActive ? (
            <p className="text-amber-200/90 text-xs leading-relaxed">
              {lang === "no"
                ? "Personlig sporingsopt-out er aktiv i denne nettleseren. GA4 lastes ikke selv om du godtar statistikk."
                : "Personal tracking opt-out is active in this browser. GA4 will not load even if you accept statistics."}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="button" className={`${btnBase} border border-slate-600 text-slate-200 hover:bg-slate-900`} onClick={rejectAnalytics}>
            {lang === "no" ? "Avslå statistikk" : "Decline statistics"}
          </button>
          <button
            type="button"
            className={`${btnBase} border border-indigo-500/50 bg-indigo-500/15 text-indigo-100 hover:bg-indigo-500/25`}
            onClick={acceptAnalytics}
          >
            {lang === "no" ? "Godta statistikk" : "Accept statistics"}
          </button>
        </div>
      </div>
    </div>
  );
}
