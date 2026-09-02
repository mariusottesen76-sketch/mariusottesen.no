"use client";
import Link from "next/link";
import type { ComponentProps } from "react";
import { useLanguage } from "../LanguageContext";
import { localePathFromNoPath } from "../lib/locale-routes";

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/** Internal link that respects EN-1A locale route map when lang=en. */
export default function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const { lang } = useLanguage();
  const localizedHref = localePathFromNoPath(href, lang);
  return <Link href={localizedHref} {...props} />;
}
