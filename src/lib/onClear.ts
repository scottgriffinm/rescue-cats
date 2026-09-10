import { friendForClear } from "./collection";

export type ClearEvent = {
  clearIndex: number;
  levelId: string;
  stars: number;
  friendId?: string;
};

/** Campaign hook — unique clears only. Forced parade from Collection v1, else tier roll. */
export function onClear(clearIndex: number, levelId: string, stars: number): ClearEvent {
  const friend = friendForClear(clearIndex);
  return {
    clearIndex,
    levelId,
    stars,
    friendId: friend?.friendId,
  };
}
