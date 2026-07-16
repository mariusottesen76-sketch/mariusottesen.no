/** Control Tower — deployet pilot (Cloud Run). Ikke synliggjør på nettsiden før innlogging er på plass. */
export const CONTROL_TOWER_APP_URL =
  "https://control-tower-1049194963104.europe-west2.run.app/";

/** Sett til true når innlogging er klar og pilotlenke skal vises på prosjektsiden m.m. */
export const CONTROL_TOWER_PILOT_PUBLIC = false;

export const CONTROL_TOWER_PROSJEKT_PATH = "/prosjekter#control-tower";

export const CONTROL_TOWER_PROSJEKT_IDS = new Set(["control-tower"]);

export function isControlTowerProsjekt(id: string): boolean {
  return CONTROL_TOWER_PROSJEKT_IDS.has(id);
}
