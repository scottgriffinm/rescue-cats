"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  comfortTotal,
  assertDuplicateNamesAllowed,
  favoriteToyFor,
  friendById,
  furnitureGiftsForClear,
  heartsForClear,
  shippedFriendForClear,
  unlockFlagsFor,
  withName,
  NAMING,
  SHOP_STARTER,
  bangLinesFor,
} from "@/lib/collection";
import {
  FIRST_NIGHT_HEARTS,
  RETURN_HOOK_DELAY_MS,
  RETURN_HOOK_HEARTS,
  STARTING_LIVES,
} from "@/lib/constants";
import { onClear, paradeClearForLevel } from "@/lib/onClear";
import { EMPTY_SAVE, loadSave, writeSave } from "@/lib/storage";
import type { FriendInstance, PendingUnlock, SaveState } from "@/lib/types";

type ClearResult = {
  newlyCleared: boolean;
  clearIndex: number;
  unlocked: PendingUnlock | null;
  hearts: number;
  stars: number;
};

type SaveApi = {
  save: SaveState;
  hydrated: boolean;
  comfort: number;
  completeLevel: (levelId: string, starsEarned: number) => ClearResult;
  namePendingFriend: (name: string) => FriendInstance | null;
  completeFirstNight: (instanceId: string) => void;
  markCoachSeen: () => void;
  addStrike: (levelId: string) => number;
  spendTicket: (levelId?: string) => boolean;
  watchAdContinue: (levelId?: string) => void;
  clearStrikes: (levelId: string) => void;
  dismissBubble: (text: string) => void;
  buyFurniture: (skuId: string, cost: number) => boolean;
  buyCosmetic: (id: string, cost: number) => boolean;
  resetProgress: () => void;
};

const SaveContext = createContext<SaveApi | null>(null);
const SERVER_SNAP = { save: EMPTY_SAVE, hydrated: false };
let snap = SERVER_SNAP;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function setSave(next: SaveState) {
  snap = { save: next, hydrated: true };
  writeSave(next);
  emit();
}

export function SaveProvider({ children }: { children: React.ReactNode }) {
  const { save, hydrated } = useSyncExternalStore(
    subscribe,
    () => snap,
    () => SERVER_SNAP,
  );

  useEffect(() => {
    const loaded = loadSave();
    if (
      loaded.first_night_done &&
      !loaded.return_hook_claimed &&
      loaded.return_hook_available_at != null &&
      Date.now() >= loaded.return_hook_available_at &&
      loaded.friends.length > 0
    ) {
      const host = loaded.friends[0];
      const line = withName(NAMING.return_bubble, host.name);
      loaded.hearts += RETURN_HOOK_HEARTS;
      loaded.return_hook_claimed = true;
      loaded.bubbles = [line, ...loaded.bubbles.filter((bubble) => bubble !== line)].slice(0, 3);
      writeSave(loaded);
    } else if (loaded.friends.length > 0 && loaded.bubbles.length === 0) {
      const host = loaded.friends[0];
      loaded.bubbles = [`${host.name} is already on the porch.`];
    }
    snap = { save: loaded, hydrated: true };
    emit();
  }, []);

  const api = useMemo<SaveApi>(
    () => ({
      save,
      hydrated,
      comfort: comfortTotal(save.furniture),
      completeLevel: (levelId, starsEarned) => {
        const current = snap.save;
        if (current.completedIds.includes(levelId)) {
          return {
            newlyCleared: false,
            clearIndex: current.clearCount,
            unlocked: null,
            hearts: 0,
            stars: 0,
          };
        }
        const completedIds = [...current.completedIds, levelId];
        const uniqueCount = completedIds.length;
        const paradeClear = paradeClearForLevel(levelId) ?? uniqueCount;
        const hearts = heartsForClear(uniqueCount);
        const catalog = shippedFriendForClear(paradeClear);
        const pending = catalog
          ? [...current.pendingUnlocks, { friendId: catalog.friendId, clearIndex: paradeClear }]
          : current.pendingUnlocks;
        const gifts = furnitureGiftsForClear(paradeClear).map((sku) => sku.skuId);
        setSave({
          ...current,
          completedIds,
          clearCount: uniqueCount,
          hearts: current.hearts + hearts,
          stars: current.stars + starsEarned,
          pendingUnlocks: pending,
          furniture: [...new Set([...current.furniture, ...gifts])],
        });
        onClear(paradeClear, levelId, starsEarned);
        return {
          newlyCleared: true,
          clearIndex: paradeClear,
          unlocked: catalog ? { friendId: catalog.friendId, clearIndex: paradeClear } : null,
          hearts,
          stars: starsEarned,
        };
      },
      namePendingFriend: (name) => {
        const current = snap.save;
        const nextPending = current.pendingUnlocks[0];
        if (!nextPending) return null;
        const catalog = friendById(nextPending.friendId);
        if (!catalog) return null;
        assertDuplicateNamesAllowed();
        const chosen = name.trim();
        if (!chosen) return null;
        const instance: FriendInstance = {
          instanceId: `inst-${Date.now()}-${current.friends.length}`,
          friendId: catalog.friendId,
          phenotypeId: catalog.phenotype.phenotypeId,
          name: chosen,
          rescuedAt: Date.now(),
          clearIndex: nextPending.clearIndex,
          roost: current.friends.length,
          favoriteToy: favoriteToyFor(catalog.phenotype.personality),
          firstNight: true,
        };
        const friends = [...current.friends, instance];
        const movedIn = withName(NAMING.confirm_bubble, instance.name);
        const shopHello =
          catalog.friendId === "friend_002"
            ? [withName(SHOP_STARTER.ink_hook, instance.name), SHOP_STARTER.intro]
            : catalog.friendId === "friend_003"
              ? [`${instance.name} claimed the sun cushion.`]
              : catalog.friendId === "friend_004"
                ? [`${instance.name} dressed for the porch.`]
                : catalog.friendId === "friend_005"
                  ? [`${instance.name} appeared on the porch.`]
                  : catalog.friendId === "friend_006"
                    ? [`${instance.name} fogged onto the porch.`]
                    : catalog.friendId === "friend_007"
                      ? [`${instance.name} batted the bell.`]
                      : catalog.friendId === "friend_008"
                        ? [`${instance.name} rolled in for the season.`]
                        : catalog.friendId === "friend_009"
                          ? [`${instance.name} slipped onto the porch.`]
                          : catalog.friendId === "friend_010"
                            ? [`${instance.name} wriggled onto the porch.`]
                            : catalog.friendId === "friend_011"
                              ? [`${instance.name} found a box on the porch.`]
                              : catalog.friendId === "friend_012"
                                ? [`${instance.name} settled by the cooling hearth.`]
                                : catalog.friendId === "friend_013"
                                  ? [`${instance.name} planted on the porch.`]
                                  : catalog.friendId === "friend_014"
                                    ? [`${instance.name} steamed onto the porch.`]
                                    : catalog.friendId === "friend_015"
                                      ? [`${instance.name} dashed onto the porch.`]
                                      : catalog.friendId === "friend_016"
                                        ? [`${instance.name} floated onto the porch.`]
                                        : catalog.friendId === "friend_017"
                                          ? [`${instance.name} took charge of the porch.`]
                                          : catalog.friendId === "friend_018"
                                            ? [`${instance.name} followed the warm patch onto the porch.`]
                                            : catalog.friendId === "friend_019"
                                              ? [`${instance.name} introduced himself on the porch.`]
                                              : catalog.friendId === "friend_020"
                                                ? [`${instance.name} nestled into the tiniest warm spot.`]
                                                : catalog.friendId === "friend_021"
                                                  ? [`${instance.name} settled into the quiet corner.`]
                                                  : catalog.friendId === "friend_022"
                                                    ? [`${instance.name} claimed the sunny brick.`]
                                                    : catalog.friendId === "friend_023"
                                                      ? [`${instance.name} measured the fence.`]
                                                      : catalog.friendId === "friend_024"
                                                        ? [`${instance.name} claimed the sunniest board.`]
                                                        : catalog.friendId === "friend_025"
                                                          ? [`${instance.name} checked the fountain.`]
                                                          : catalog.friendId === "friend_026"
                                                            ? [`${instance.name} melted into the cushion.`]
                                                            : catalog.friendId === "friend_027"
                                                              ? [`${instance.name} claimed the quiet step.`]
                                                              : catalog.friendId === "friend_028"
                                                                ? [`${instance.name} claimed the fence line.`]
                                                                : catalog.friendId === "friend_029"
                                                                  ? [`${instance.name} straightened the cushion.`]
                                                                  : [];
        setSave({
          ...current,
          friends,
          pendingUnlocks: current.pendingUnlocks.slice(1),
          bubbles: [movedIn, ...shopHello, ...current.bubbles].slice(0, 4),
          unlockFlags: unlockFlagsFor(friends),
        });
        return instance;
      },
      completeFirstNight: (instanceId) => {
        const current = snap.save;
        const friend = current.friends.find((item) => item.instanceId === instanceId);
        if (!friend || !friend.firstNight) return;
        const bangs = bangLinesFor(friend.friendId, friend.name);
        const tomorrow = withName(NAMING.tomorrow_hook, friend.name);
        const shopIntro =
          friend.friendId === "friend_002"
            ? [withName(SHOP_STARTER.ink_hook, friend.name), SHOP_STARTER.intro]
            : [];
        const hearts = current.first_night_hearts_claimed
          ? current.hearts
          : current.hearts + FIRST_NIGHT_HEARTS;
        setSave({
          ...current,
          hearts,
          first_night_done: true,
          first_night_hearts_claimed: true,
          return_hook_available_at:
            current.return_hook_available_at ?? Date.now() + RETURN_HOOK_DELAY_MS,
          bubbles: [...bangs, ...shopIntro, tomorrow, ...current.bubbles]
            .filter((line, index, all) => all.indexOf(line) === index)
            .slice(0, 4),
          friends: current.friends.map((item) =>
            item.instanceId === instanceId ? { ...item, firstNight: false } : item,
          ),
        });
      },
      markCoachSeen: () => setSave({ ...snap.save, seenCoach: true }),
      addStrike: (levelId) => {
        const current = snap.save;
        const next = Math.min(
          STARTING_LIVES,
          (current.levelStrikes[levelId] ?? 0) + 1,
        );
        setSave({
          ...current,
          levelStrikes: { ...current.levelStrikes, [levelId]: next },
        });
        return next;
      },
      spendTicket: (levelId) => {
        const current = snap.save;
        if (current.tickets <= 0) return false;
        const levelStrikes = { ...current.levelStrikes };
        if (levelId) levelStrikes[levelId] = 0;
        setSave({ ...current, tickets: current.tickets - 1, levelStrikes });
        return true;
      },
      watchAdContinue: (levelId) => {
        const current = snap.save;
        const levelStrikes = { ...current.levelStrikes };
        if (levelId) levelStrikes[levelId] = 0;
        setSave({ ...current, levelStrikes });
      },
      clearStrikes: (levelId) => {
        setSave({
          ...snap.save,
          levelStrikes: { ...snap.save.levelStrikes, [levelId]: 0 },
        });
      },
      dismissBubble: (text) => {
        setSave({
          ...snap.save,
          bubbles: snap.save.bubbles.filter((bubble) => bubble !== text),
        });
      },
      buyFurniture: (skuId, cost) => {
        const current = snap.save;
        if (current.hearts < cost || current.furniture.includes(skuId)) return false;
        setSave({
          ...current,
          hearts: current.hearts - cost,
          furniture: [...current.furniture, skuId],
        });
        return true;
      },
      buyCosmetic: (id, cost) => {
        const current = snap.save;
        if (current.stars < cost || current.cosmetics.includes(id)) return false;
        setSave({
          ...current,
          stars: current.stars - cost,
          cosmetics: [...current.cosmetics, id],
        });
        return true;
      },
      resetProgress: () => setSave(EMPTY_SAVE),
    }),
    [save, hydrated],
  );

  return <SaveContext.Provider value={api}>{children}</SaveContext.Provider>;
}

export function useSave() {
  const ctx = useContext(SaveContext);
  if (!ctx) throw new Error("useSave must be used within SaveProvider");
  return ctx;
}
