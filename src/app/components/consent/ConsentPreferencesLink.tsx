"use client";

import React from "react";
import { useConsent } from "./ConsentContext";

type Props = {
  lang: "no" | "en";
  className?: string;
};

export default function ConsentPreferencesLink({ lang, className }: Props) {
  const { openPreferences, analyticsChoice } = useConsent();

  const label =
    analyticsChoice === null
      ? lang === "no"
        ? "Cookievalg"
        : "Cookie choices"
      : lang === "no"
        ? "Endre cookievalg"
        : "Change cookie choices";

  return (
    <button type="button" onClick={openPreferences} className={className}>
      {label}
    </button>
  );
}
