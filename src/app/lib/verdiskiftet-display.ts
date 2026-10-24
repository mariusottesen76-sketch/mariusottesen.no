/** HTML-innsprøytning av gyllen KI i boktittelen (for dangerouslySetInnerHTML). */
export const VERDIS_KIFTET_HTML =
  'Verdis<span class="text-amber-400/90 font-[inherit]">KI</span>ftet';

export function applyVerdisKiftetHighlightHtml(html: string): string {
  if (!html.includes("VerdisKIftet") || html.includes("text-amber-400")) return html;
  return html.replace(/VerdisKIftet/g, VERDIS_KIFTET_HTML);
}
