const HTML_STRIP = /<[^>]+>/g;
const WHITESPACE = /\s+/g;

export function stripHtmlToPlainText(html: string): string {
  return html.replace(HTML_STRIP, " ").replace(WHITESPACE, " ").trim();
}

export function truncatePlainText(text: string, maxChars: number): string {
  const normalized = text.replace(WHITESPACE, " ").trim();
  if (normalized.length <= maxChars) return normalized;
  return `${normalized.slice(0, maxChars - 1).trim()}…`;
}

export function joinParagraphs(parts: string[], maxChars: number): string {
  const joined = parts.map((p) => stripHtmlToPlainText(p)).filter(Boolean).join("\n\n");
  return truncatePlainText(joined, maxChars);
}

/** Patterns we must not surface in assistant excerpts (access mechanisms, not public facts). */
const SENSITIVE_EXCERPT_PATTERNS = [
  /\btilgangskode\b/gi,
  /\baccess code\b/gi,
  /\bpassord\b/gi,
  /\bpassword\b/gi,
  /\bapi[_-]?key\b/gi,
  /\bsecret[_-]?key\b/gi,
  /\bbearer\s+[a-z0-9._-]{8,}/gi,
  /\bsk-[a-zA-Z0-9]{10,}/g,
  /\bAKIA[0-9A-Z]{16}\b/g,
  /\bprocess\.env\b/gi,
  /\bEMAIL_(USER|PASS)\b/,
  /\bANTHROPIC_/,
];

export function scrubSensitiveExcerptText(text: string): string {
  let out = text;
  for (const pattern of SENSITIVE_EXCERPT_PATTERNS) {
    out = out.replace(pattern, "[redacted]");
  }
  return out;
}