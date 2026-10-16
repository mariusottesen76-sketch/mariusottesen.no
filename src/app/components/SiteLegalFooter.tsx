"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isEnPath } from "../lib/locale-routes";
import { PRIVACY_ROUTE } from "../data/privacy-content";
import ConsentPreferencesLink from "./consent/ConsentPreferencesLink";

type Props = {
  className?: string;
  showOrgNumber?: boolean;
};

export default function SiteLegalFooter({ className = "", showOrgNumber = true }: Props) {
  const pathname = usePathname() ?? "/";
  const lang = isEnPath(pathname) ? "en" : "no";
  const privacyHref = lang === "en" ? PRIVACY_ROUTE.en : PRIVACY_ROUTE.no;

  return (
    <div className={`flex flex-col items-center gap-2 text-center ${className}`}>
      <p className="text-slate-600 text-[11px] font-bold tracking-wider">
        &copy; {new Date().getFullYear()} Marius Ottesen Consulting
        {showOrgNumber ? " · Org. nr. 937 102 801" : ""}
      </p>
      <p className="text-slate-600 text-[10px] font-medium tracking-wide flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <Link href={privacyHref} className="text-slate-500 hover:text-indigo-300 transition-colors underline-offset-2 hover:underline">
          {lang === "no" ? "Personvern" : "Privacy"}
        </Link>
        <span className="text-slate-700" aria-hidden="true">
          ·
        </span>
        <ConsentPreferencesLink
          lang={lang}
          className="text-slate-500 hover:text-indigo-300 transition-colors underline-offset-2 hover:underline"
        />
      </p>
    </div>
  );
}
