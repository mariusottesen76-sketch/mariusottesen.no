/** FlowSignal merkevarefarger (champagne/gull fra brandmateriell). */
export const FLOW_SIGNAL_COLORS = {
  accent: "#CDB47A",
} as const;

export const FLOW_SIGNAL_APP_URL = "https://flowsignal-744893320985.europe-west2.run.app/";

export const FLOW_SIGNAL_PROSJEKT_IDS = new Set(["flowsignal-2026-05"]);

export function isFlowSignalProsjekt(id: string): boolean {
  return FLOW_SIGNAL_PROSJEKT_IDS.has(id);
}

/** Champagne v1.0 kun i prosjektoverskrift – «FlowSignal v1.0». */
export function applyFlowSignalTitleBrandingHtml(html: string): string {
  return html.replace(
    /(FlowSignal)\s+(v[\d.]+)/gi,
    '$1 <span class="fs-v">$2</span>'
  );
}
