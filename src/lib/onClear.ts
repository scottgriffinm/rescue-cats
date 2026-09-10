import { friendForClear } from "./collection";

export type ClearEvent = {
  clearIndex: number;
  levelId: string;
  stars: number;
  friendId?: string;
};

/** Campaign hook — unique clears only. Cat unlocks at 3,6,9… then every 5 after 20. */
export function onClear(clearIndex: number, levelId: string, stars: number): ClearEvent {
  const friend = friendForClear(clearIndex);
  return {
    clearIndex,
    levelId,
    stars,
    friendId: friend?.friendId,
  };
}
