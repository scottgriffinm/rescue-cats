import { NAME_SUGGESTIONS } from "./constants";
import type { Coat, UnlockedCat } from "./types";

export const COATS: Coat[] = [
  "calico",
  "cream",
  "gray",
  "tuxedo",
  "peach",
  "ink",
];

export const COAT_LABEL: Record<Coat, string> = {
  calico: "calico",
  cream: "cream tabby",
  gray: "blue gray",
  tuxedo: "tuxedo",
  peach: "peach",
  ink: "ink black",
};

export function nextCoat(existing: UnlockedCat[]): Coat {
  return COATS[existing.length % COATS.length];
}

export function nextSuggestion(existing: UnlockedCat[]) {
  return NAME_SUGGESTIONS[existing.length % NAME_SUGGESTIONS.length];
}

export function nextRoost(existing: UnlockedCat[]) {
  const taken = new Set(existing.map((cat) => cat.roost));
  for (let i = 0; i < 8; i++) {
    if (!taken.has(i)) return i;
  }
  return existing.length;
}
