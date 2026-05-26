/**
 * Konverterer LinkedIn-stil Unicode-fet/italic (mathematical alphanumeric)
 * til vanlig tekst slik at nettsiden bruker samme font som resten av UI.
 */
export function normalizeDisplayText(text: string): string {
  let result = "";
  for (const char of text) {
    const code = char.codePointAt(0);
    if (code === undefined) continue;

    if (code >= 0x1d400 && code <= 0x1d419) {
      result += String.fromCharCode(code - 0x1d400 + 0x41);
    } else if (code >= 0x1d41a && code <= 0x1d433) {
      result += String.fromCharCode(code - 0x1d41a + 0x61);
    } else if (code >= 0x1d434 && code <= 0x1d44d) {
      result += String.fromCharCode(code - 0x1d434 + 0x41);
    } else if (code >= 0x1d44e && code <= 0x1d467) {
      result += String.fromCharCode(code - 0x1d44e + 0x61);
    } else if (code >= 0x1d468 && code <= 0x1d481) {
      result += String.fromCharCode(code - 0x1d468 + 0x41);
    } else if (code >= 0x1d482 && code <= 0x1d49b) {
      result += String.fromCharCode(code - 0x1d482 + 0x61);
    } else if (code >= 0x1d5d4 && code <= 0x1d5ed) {
      result += String.fromCharCode(code - 0x1d5d4 + 0x41);
    } else if (code >= 0x1d5ee && code <= 0x1d607) {
      result += String.fromCharCode(code - 0x1d5ee + 0x61);
    } else if (code >= 0x1d608 && code <= 0x1d621) {
      result += String.fromCharCode(code - 0x1d608 + 0x41);
    } else if (code >= 0x1d622 && code <= 0x1d63b) {
      result += String.fromCharCode(code - 0x1d622 + 0x61);
    } else if (code >= 0x1d63c && code <= 0x1d655) {
      result += String.fromCharCode(code - 0x1d63c + 0x41);
    } else if (code >= 0x1d656 && code <= 0x1d66f) {
      result += String.fromCharCode(code - 0x1d656 + 0x61);
    } else if (code >= 0x1d7ce && code <= 0x1d7d7) {
      result += String.fromCharCode(code - 0x1d7ce + 0x30);
    } else if (code >= 0x1d7ec && code <= 0x1d7f5) {
      result += String.fromCharCode(code - 0x1d7ec + 0x30);
    } else {
      result += char;
    }
  }
  return result;
}
