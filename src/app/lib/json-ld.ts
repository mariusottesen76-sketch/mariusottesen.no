/** Safe JSON-LD for inline script tags (escapes `<` per XSS guidance). */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
