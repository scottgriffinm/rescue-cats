import { friendForClear } from "./collection";

export type ClearEvent = {
  clearIndex: number;
  levelId: string;
  stars: number;
  friendId?: string;
};

/** Campaign hook — unique clears only. Collection v1.1: first friend at clear 3, then every 3. */
export function onClear(clearIndex: number, levelId: string, stars: number): ClearEvent {
  const friend = friendForClear(clearIndex);
  return {
    clearIndex,
    levelId,
    stars,
    friendId: friend?.friendId,
  };
}
