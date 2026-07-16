import type { Lang } from "../../LanguageContext";
import type { LocalizedString } from "./types";

export function t(l: LocalizedString, lang: Lang): string {
  return l[lang];
}
