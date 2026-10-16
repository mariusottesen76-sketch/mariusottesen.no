"use client";

import Link from "next/link";
import type { Lang } from "../LanguageContext";
import { LanguageProvider } from "../LanguageContext";
import { getPrivacyPageContent, PRIVACY_ROUTE } from "../data/privacy-content";
import { pageTitleClass, sectionTitleClass } from "../lib/typography";
import ConsentPreferencesLink from "./consent/ConsentPreferencesLink";
import { useConsent } from "./consent/ConsentContext";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors";

function PrivacyBody({ lang }: { lang: Lang }) {
  const content = getPrivacyPageContent(lang);
  const { withdrawAnalytics, analyticsChoice } = useConsent();
  const homeHref = lang === "en" ? "/en" : "/";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 px-6 sm:px-16 md:px-32 lg:px-40 py-10 max-w-3xl mx-auto relative z-10">
      <p className="text-xs text-slate-500 mb-6">
        <Link href={homeHref} className={linkClass}>
          {lang === "no" ? "← Til forsiden" : "← Back to home"}
        </Link>
      </p>
      <header className="space-y-3 mb-10">
        <h1 className={pageTitleClass}>{content.title}</h1>
        <p className="text-sm text-slate-500">
          {content.updatedLabel}: {content.updatedDate}
        </p>
        <p className="text-slate-400 leading-relaxed">{content.intro}</p>
      </header>

      <div className="space-y-8">
        {content.sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className={sectionTitleClass}>{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      <section className="mt-12 pt-8 border-t border-slate-800/60 space-y-4">
        <h2 className={sectionTitleClass}>{lang === "no" ? "Cookievalg" : "Cookie choices"}</h2>
        <p className="text-sm text-slate-400">
          {lang === "no" ? "Nåværende valg for statistikk: " : "Current statistics choice: "}
          <span className="text-slate-200 font-medium">
            {analyticsChoice === "granted"
              ? lang === "no"
                ? "Godtatt"
                : "Accepted"
              : analyticsChoice === "denied"
                ? lang === "no"
                  ? "Avslått"
                  : "Declined"
                : lang === "no"
                  ? "Ikke valgt ennå"
                  : "Not chosen yet"}
          </span>
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <ConsentPreferencesLink lang={lang} className={`${linkClass} font-medium`} />
          {analyticsChoice === "granted" ? (
            <button type="button" className={`${linkClass} font-medium`} onClick={withdrawAnalytics}>
              {lang === "no" ? "Trekk tilbake samtykke" : "Withdraw consent"}
            </button>
          ) : null}
        </div>
        <p className="text-xs text-slate-500">
          {lang === "en" ? "Alternate language: " : "Annen språkversjon: "}
          <Link href={lang === "en" ? PRIVACY_ROUTE.no : PRIVACY_ROUTE.en} className={linkClass}>
            {lang === "en" ? "Norsk personvernerklæring" : "English privacy policy"}
          </Link>
        </p>
      </section>
    </main>
  );
}

export default function PrivacyPageContent({ lang }: { lang: Lang }) {
  return (
    <LanguageProvider initialLang={lang}>
      <PrivacyBody lang={lang} />
    </LanguageProvider>
  );
}
