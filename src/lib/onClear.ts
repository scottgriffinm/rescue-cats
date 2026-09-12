import { shippedFriendForClear } from "./collection";

export type ClearEvent = {
  clearIndex: number;
  levelId: string;
  stars: number;
  friendId?: string;
};

/** Campaign parade key — L12 is clear 12 even though L10 is off the path. */
export function paradeClearForLevel(levelId: string): number | undefined {
  const match = /^L(\d+)$/.exec(levelId);
  if (!match) return undefined;
  return Number(match[1]);
}

/** Campaign hook — parade is keyed by level number (L12 → Tux, L15 → Ghost, L18 → Mist, L21 → Pepper, L24 → Pumpkin, L27 → Shadow, L30 → Noodle, L33 → Clover, L36 → Ash, L39 → Oak, L42 → Dumpling, L45 → Stripe, L48 → Cloud, L51 → Donna, L54 → Sunny). */
export function onClear(clearIndex: number, levelId: string, stars: number): ClearEvent {
  const parade = paradeClearForLevel(levelId) ?? clearIndex;
  const friend = shippedFriendForClear(parade);
  return {
    clearIndex: parade,
    levelId,
    stars,
    friendId: friend?.friendId,
  };
}
