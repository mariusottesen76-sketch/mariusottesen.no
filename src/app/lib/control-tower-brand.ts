/** Control Tower — deployet offentlig konseptprototype (Cloud Run). */
export const CONTROL_TOWER_APP_URL =
  "https://control-tower-1049194963104.europe-west2.run.app/";

/** Offentlig åpen demo — ingen innlogging kreves. */
export const CONTROL_TOWER_PILOT_PUBLIC = true;

export const CONTROL_TOWER_PROSJEKT_PATH = "/prosjekter#control-tower";

export const CONTROL_TOWER_PROSJEKT_IDS = new Set(["control-tower"]);

export function isControlTowerProsjekt(id: string): boolean {
  return CONTROL_TOWER_PROSJEKT_IDS.has(id);
}
