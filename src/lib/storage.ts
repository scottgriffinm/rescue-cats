import { SAVE_KEY } from "./constants";
import type { SaveState } from "./types";

export const EMPTY_SAVE: SaveState = {
  version: 1,
  completedIds: [],
  cats: [],
  pendingUnlocks: 0,
};

export function loadSave(): SaveState {
  if (typeof window === "undefined") return EMPTY_SAVE;
  try {
    const raw = window.localStorage.getItem(SAVE_KEY);
    if (!raw) return EMPTY_SAVE;
    const parsed = JSON.parse(raw) as SaveState;
    if (parsed?.version !== 1 || !Array.isArray(parsed.completedIds)) {
      return EMPTY_SAVE;
    }
    return {
      version: 1,
      completedIds: parsed.completedIds,
      cats: parsed.cats ?? [],
      pendingUnlocks: parsed.pendingUnlocks ?? 0,
    };
  } catch {
    return EMPTY_SAVE;
  }
}

export function writeSave(save: SaveState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}

export function clearSave() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SAVE_KEY);
}
