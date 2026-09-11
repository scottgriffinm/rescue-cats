import { ONBOARDING_FURNITURE } from "./collection";
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
  furniture: [...ONBOARDING_FURNITURE],
  cosmetics: [],
  levelStrikes: {},
  seenCoach: false,
  bubbles: [],
  unlockFlags: { mangoNamed: false, porchUnlocked: true },
  first_night_done: false,
  return_hook_available_at: null,
  return_hook_claimed: false,
  first_night_hearts_claimed: false,
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
    const furniture = [
      ...new Set([...(parsed.furniture ?? []), ...ONBOARDING_FURNITURE]),
    ];
    return {
      ...EMPTY_SAVE,
      ...parsed,
      version: 2,
      friends: parsed.friends ?? [],
      pendingUnlocks: parsed.pendingUnlocks ?? [],
      furniture,
      cosmetics: parsed.cosmetics ?? [],
      levelStrikes: parsed.levelStrikes ?? {},
      bubbles: parsed.bubbles ?? [],
      unlockFlags: parsed.unlockFlags ?? {
        mangoNamed: (parsed.friends ?? []).some((friend) => friend.friendId === "friend_001"),
        porchUnlocked: true,
      },
      first_night_done: parsed.first_night_done ?? false,
      return_hook_available_at: parsed.return_hook_available_at ?? null,
      return_hook_claimed: parsed.return_hook_claimed ?? false,
      first_night_hearts_claimed: parsed.first_night_hearts_claimed ?? false,
    };
  } catch {
    return EMPTY_SAVE;
  }
}

export function writeSave(save: SaveState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}
