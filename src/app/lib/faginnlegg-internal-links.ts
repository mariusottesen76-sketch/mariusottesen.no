import type { Lang } from "../LanguageContext";
import { getFaginnleggBySlug } from "./faginnlegg-data";
import { hasFullEnFaginnleggBody } from "./faginnlegg-en-audit";
import { faginnleggArticlePath } from "./faginnlegg-locale-routes";
import { localePathFromNoPath } from "./locale-routes";

function splitHref(href: string) {
  const hashIdx = href.indexOf("#");
  const beforeHash = hashIdx >= 0 ? href.slice(0, hashIdx) : href;
  const hash = hashIdx >= 0 ? href.slice(hashIdx) : "";
  const queryIdx = beforeHash.indexOf("?");
  const pathPart = queryIdx >= 0 ? beforeHash.slice(0, queryIdx) : beforeHash;
  const query = queryIdx >= 0 ? beforeHash.slice(queryIdx) : "";
  return { pathPart, query, hash };
}

/** Map internal article/site hrefs for EN article pages. External URLs unchanged. */
export function localizeArticleHref(href: string, lang: Lang): string {
  if (lang === "no") return href;
  if (!href.startsWith("/")) return href;

  const { pathPart, query, hash } = splitHref(href);

  if (pathPart.startsWith("/faginnlegg/")) {
    const slug = pathPart.slice("/faginnlegg/".length);
    const innlegg = getFaginnleggBySlug(slug);
    if (hasFullEnFaginnleggBody(slug, innlegg)) {
      return `${faginnleggArticlePath(slug, "en")}${query}${hash}`;
    }
    return href;
  }

  return localePathFromNoPath(`${pathPart}${query}${hash}`, lang);
}

export function localizeFaginnleggBodyLinks(html: string, lang: Lang): string {
  if (lang === "no") return html;
  return html.replace(/href="(\/[^"]*)"/g, (_match, href: string) => {
    return `href="${localizeArticleHref(href, lang)}"`;
  });
}
