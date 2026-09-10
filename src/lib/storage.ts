import { SAVE_KEY, STARTING_TICKETS } from "./constants";
import type { SaveState } from "./types";

export const EMPTY_SAVE: SaveState = {
  version: 2,
  completedIds: [],
  clearCount: 0,
  friends: [],
  pendingUnlocks: [],
  hearts: 0,
  stars: 0,
  tickets: STARTING_TICKETS,
  furniture: [],
  cosmetics: [],
  levelStrikes: {},
  seenCoach: false,
  bubbles: [],
};

export function loadSave(): SaveState {
  if (typeof window === "undefined") return EMPTY_SAVE;
  try {
    const raw = window.localStorage.getItem(SAVE_KEY);
    if (!raw) return EMPTY_SAVE;
    const parsed = JSON.parse(raw) as SaveState;
    if (parsed?.version !== 2 || !Array.isArray(parsed.completedIds)) {
      return EMPTY_SAVE;
    }
    return {
      ...EMPTY_SAVE,
      ...parsed,
      version: 2,
      friends: parsed.friends ?? [],
      pendingUnlocks: parsed.pendingUnlocks ?? [],
      furniture: parsed.furniture ?? [],
      cosmetics: parsed.cosmetics ?? [],
      levelStrikes: parsed.levelStrikes ?? {},
      bubbles: parsed.bubbles ?? [],
    };
  } catch {
    return EMPTY_SAVE;
  }
}

export function writeSave(save: SaveState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}
