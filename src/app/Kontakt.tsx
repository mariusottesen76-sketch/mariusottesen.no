"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Smartphone, Linkedin, ChevronRight, Target, MessageSquare, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import { iconSectionTitleClass, pageTitleClass, sectionTitleClass } from "./lib/typography";
import {
  buildProjectContactHref,
  getContactTemaBannerTitle,
  getProjectSlugDisplayName,
  parseProjectContactQuery,
  type ProjectContactQuery,
} from "./lib/project-contact-query";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

export default function Kontakt() {
  const { lang } = useLanguage();
  const router = useRouter();
  const tr = (key: string) => getTranslation(key, lang);
  const [contactQuery, setContactQuery] = useState<ProjectContactQuery | null>(null);

  useEffect(() => {
    const query = parseProjectContactQuery(window.location.search);
    if (query) {
      router.replace(buildProjectContactHref(query.tema, query.prosjekt));
      return;
    }
    setContactQuery(null);
  }, [router]);

  return (
    <div className="py-4 text-left w-full overflow-x-hidden">
      {contactQuery && (
        <div className="mb-6 p-5 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 space-y-2">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-300">
            {getContactTemaBannerTitle(contactQuery.tema, lang)}
          </p>
          <p className="text-base text-slate-300 leading-relaxed">
            {lang === "no" ? "Prosjekt:" : "Project:"}{" "}
            <span className="text-white font-medium">
              {getProjectSlugDisplayName(contactQuery.prosjekt, lang)}
            </span>
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            {lang === "no"
              ? "Omdirigerer til kontaktskjema …"
              : "Redirecting to the contact form …"}
          </p>
          <Link
            href={buildProjectContactHref(contactQuery.tema, contactQuery.prosjekt)}
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            {lang === "no" ? "Gå til kontaktskjema" : "Go to contact form"}
            <ChevronRight size={14} aria-hidden="true" />
          </Link>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-60 shrink-0">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
            <Image
              src="/images/kontakt.jpg"
              alt="Marius Ottesen — Kontaktinformasjon"
              width={240}
              height={320}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-6">
          <div className="space-y-4">
            <h1 className={pageTitleClass}>{tr("kontakt.title")}</h1>
            <p className="text-lg text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed whitespace-pre-line">
              {tr("kontakt.intro")}
            </p>
          </div>

          <div className="w-full bg-slate-900/40 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="p-8 md:p-10 space-y-5 text-slate-300">
              <div className="space-y-2">
                <h2 className={iconSectionTitleClass}>
                  <Target size={18} aria-hidden="true" /> {tr("kontakt.profil")}
                </h2>
                <p className="italic font-medium text-base leading-relaxed">
                  {tr("kontakt.profil.desc")}{" "}
                  <Link href="/cv" className={linkClass} aria-label="Gå til CV og lederprofil">
                    {tr("kontakt.link.cv")}
                  </Link>
                  {", "}
                  <Link href="/erfaring" className={linkClass} aria-label="Gå til erfaring">
                    {tr("kontakt.link.erfaring")}
                  </Link>
                  {lang === "no" ? ", " : ", "}
                  <Link href="/resultater" className={linkClass} aria-label="Gå til resultater">
                    {tr("kontakt.link.resultater")}
                  </Link>
                  {lang === "no" ? " og " : " and "}
                  <Link href="/prosjekter" className={linkClass} aria-label="Gå til AI-prosjekter">
                    {tr("kontakt.link.prosjekter")}
                  </Link>
                  .
                </p>
              </div>
              <div className="space-y-2">
                <h2 className={iconSectionTitleClass}>
                  <MessageSquare size={18} aria-hidden="true" /> {tr("kontakt.dialog")}
                </h2>
                <p className="italic font-medium text-base leading-relaxed">
                  {tr("kontakt.dialog.desc")}{" "}
                  <Link href="/consulting#cons-dialog-heading" className={linkClass} aria-label="Gå til kontaktskjema">
                    {tr("kontakt.link.skjema")}
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4 w-full min-w-0 max-w-none">
            <p className={`${sectionTitleClass} border-b-2 border-indigo-600 pb-4`}>
              {tr("kontakt.cta")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full min-w-0">
            <a
              href="mailto:marius.ottesen.76@gmail.com"
              className="group p-6 sm:p-8 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-3 text-center min-w-0"
            >
              <Mail size={28} className="text-indigo-500 shrink-0" aria-hidden="true" />
              <p className="text-white font-black text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs whitespace-nowrap min-w-0 max-w-full">
                marius.ottesen.76@gmail.com
              </p>
            </a>
            <a
              href="https://www.mariusottesen.no"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-3 text-center min-w-0"
            >
              <Globe size={28} className="text-indigo-500 shrink-0" aria-hidden="true" />
              <p className="text-white font-black text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs whitespace-nowrap min-w-0 max-w-full">
                www.mariusottesen.no
              </p>
            </a>
            <a
              href="tel:+4747012005"
              className="group p-6 sm:p-8 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-3 text-center min-w-0"
            >
              <Smartphone size={28} className="text-indigo-500 shrink-0" aria-hidden="true" />
              <p className="text-white font-black text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs whitespace-nowrap min-w-0 max-w-full">
                +47 470 12 005
              </p>
            </a>
          </div>

          <a
            href="https://linkedin.com/in/mariusottesen"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-6 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-slate-900/60 transition-all group"
          >
            <div className="flex items-center gap-4">
              <Linkedin className="text-indigo-500" size={24} aria-hidden="true" />
              <span className="text-white font-bold uppercase tracking-widest text-sm">{tr("kontakt.linkedin")}</span>
            </div>
            <ChevronRight className="text-slate-600 group-hover:text-indigo-500 transition-colors" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
