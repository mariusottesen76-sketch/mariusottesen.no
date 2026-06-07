import { applyFlowSignalTitleBrandingHtml, isFlowSignalProsjekt } from "./flowsignal-brand";
import { applyPscTitleBrandingHtml, isPscProsjekt } from "./psc-brand";

/** Produktnavn som alltid skal vises med kursiv. Lengste treff først. */
const PRODUCT_NAME_PATTERNS: RegExp[] = [
  /The Predictive Sales Coach/gi,
  /FlowSignal(?:\s+v[\d.]+)?/gi,
  /Talent Dynamics/gi,
  /Fyrtårnet/gi,
  /\bthe Lighthouse\b/gi,
];

function stripNestedEm(html: string): string {
  return html.replace(/(?:<em>)+/gi, "<em>").replace(/(?:<\/em>)+/gi, "</em>");
}

function applyToTextSegment(text: string): string {
  let out = text;
  for (const pattern of PRODUCT_NAME_PATTERNS) {
    out = out.replace(pattern, (match) => `<em>${match}</em>`);
  }
  return stripNestedEm(out);
}

/** Kursiv for produktnavn i HTML (kun tekst utenfor tagger). */
export function applyProductNameItalics(html: string): string {
  return html
    .split(/(<[^>]+>)/g)
    .map((part) => (part.startsWith("<") ? part : applyToTextSegment(part)))
    .join("");
}

export function applyProductNameItalicsPlain(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return applyProductNameItalics(escaped);
}

/** Tittel med valgfrie `\n` som `<br />` (kort og modal). */
export function formatInnleggTittelHtml(text: string): string {
  return text
    .split("\n")
    .map((line) => applyProductNameItalicsPlain(line))
    .join("<br />");
}

export function formatProsjektHtml(html: string, _erPsc: boolean): string {
  return applyProductNameItalics(html);
}

export function formatProsjektPlain(
  text: string,
  prosjektId?: string,
  withTitleBranding = false
): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  let withBrand = escaped;
  if (withTitleBranding && prosjektId) {
    if (isPscProsjekt(prosjektId)) {
      withBrand = applyPscTitleBrandingHtml(withBrand);
    } else if (isFlowSignalProsjekt(prosjektId)) {
      withBrand = applyFlowSignalTitleBrandingHtml(withBrand);
    }
  }
  return applyProductNameItalics(withBrand);
}

export function formatInnleggHtml(html: string): string {
  return applyProductNameItalics(html);
}
