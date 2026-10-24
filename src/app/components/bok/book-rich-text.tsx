import { VerdisKiftetInText } from "./VerdisKiftetInText";

/** @deprecated Prefer VerdisKiftetInText — beholdt for bokseksjoner med *markører*. */
export function BookRichText(props: { text: string; className?: string }) {
  return <VerdisKiftetInText {...props} />;
}
