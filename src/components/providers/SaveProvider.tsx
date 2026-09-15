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
                                                                  : catalog.friendId === "friend_030"
                                                                    ? [`${instance.name} leaned on the post.`]
                                                                    : catalog.friendId === "friend_031"
                                                                      ? [`${instance.name} claimed the sunny sill.`]
                                                                      : catalog.friendId === "friend_032"
                                                                        ? [`${instance.name} claimed the warm sill.`]
                                                                        : catalog.friendId === "friend_033"
                                                                          ? [`${instance.name} claimed the jam jar sill.`]
                                                                          : catalog.friendId === "friend_034"
                                                                            ? [`${instance.name} claimed the fence-post perch.`]
                                                                            : catalog.friendId === "friend_035"
                                                                              ? [`${instance.name} claimed the bramble gap.`]
                                                                              : catalog.friendId === "friend_036"
                                                                                ? [`${instance.name} claimed the porch rail.`]
                                                                                : catalog.friendId === "friend_037"
                                                                                  ? [`${instance.name} claimed the shady under-rail.`]
                                                                                  : catalog.friendId === "friend_038"
                                                                                    ? [`${instance.name} claimed the sunny stoop.`]
                                                                                    : catalog.friendId === "friend_039"
                                                                                      ? [`${instance.name} claimed the frond stoop.`]
                                                                                      : catalog.friendId === "friend_040"
                                                                                        ? [`${instance.name} claimed the herb sill.`]
                                                                                        : catalog.friendId === "friend_041"
                                                                                          ? [`${instance.name} claimed the rib bed.`]
                                                                                          : catalog.friendId === "friend_042"
                                                                                            ? [`${instance.name} claimed the garnish rail.`]
                                                                                            : catalog.friendId === "friend_043"
                                                                                              ? [`${instance.name} claimed the pickle jar ledge.`]
                                                                                              : catalog.friendId === "friend_044"
                                                                                                ? [`${instance.name} claimed the vinegar cruet.`]
                                                                                                : catalog.friendId === "friend_045"
                                                                                                  ? [`${instance.name} claimed the pizza stone.`]
                                                                                                  : catalog.friendId === "friend_046"
                                                                                                    ? [`${instance.name} claimed the pizza peel.`]
                                                                                                    : catalog.friendId === "friend_047"
                                                                                                      ? [`${instance.name} claimed the thyme jar.`]
                                                                                                      : catalog.friendId === "friend_048"
                                                                                                        ? [`${instance.name} claimed the rosemary pot.`]
                                                                                                        : catalog.friendId === "friend_049"
                                                                                                          ? [`${instance.name} claimed the mint tin.`]
                                                                                                          : catalog.friendId === "friend_050"
                                                                                                            ? [`${instance.name} claimed the catnip pouch.`]
                                                                                                            : catalog.friendId === "friend_051"
                                                                                                              ? [`${instance.name} claimed the lavender bundle.`]
                                                                                                              : catalog.friendId === "friend_052"
                                                                                                                ? [`${instance.name} claimed the chamomile cup.`]
                                                                                                                : catalog.friendId === "friend_053"
                                                                                                                  ? [`${instance.name} claimed the bergamot saucer.`]
                                                                                                                  : catalog.friendId === "friend_054"
                                                                                                                    ? [`${instance.name} claimed the jasmine bloom.`]
                                                                                                                    : catalog.friendId === "friend_055"
                                                                                                                      ? [`${instance.name} claimed the magnolia bowl.`]
                                                                                                                      : catalog.friendId === "friend_056"
                                                                                                                        ? [`${instance.name} claimed the hibiscus cup.`]
                                                                                                                        : catalog.friendId === "friend_057"
                                                                                                                          ? [`${instance.name} claimed the gardenia dish.`]
                                                                                                                          : catalog.friendId === "friend_058"
                                                                                                                            ? [`${instance.name} claimed the camellia tray.`]
                                                                                                                            : catalog.friendId === "friend_059"
                                                                                                                              ? [`${instance.name} claimed the peony bowl.`]
                                                                                                                              : catalog.friendId === "friend_060"
                                                                                                                                ? [`${instance.name} claimed the azalea planter.`]
                                                                                                                                : catalog.friendId === "friend_061"
                                                                                                                                  ? [`${instance.name} claimed the dahlia vase.`]
                                                                                                                                  : catalog.friendId === "friend_062"
                                                                                                                                    ? [`${instance.name} claimed the zinnia urn.`]
                                                                                                                                    : catalog.friendId === "friend_063"
                                                                                                                                      ? [`${instance.name} claimed the aster dish.`]
                                                                                                                                      : catalog.friendId === "friend_064"
                                                                                                                                        ? [`${instance.name} claimed the iris stem.`]
                                                                                                                                        : catalog.friendId === "friend_065"
                                                                                                                                          ? [`${instance.name} claimed the orchid spike.`]
                                                                                                                                          : catalog.friendId === "friend_066"
                                                                                                                                            ? [`${instance.name} claimed the lotus pad.`]
                                                                                                                                            : catalog.friendId === "friend_067"
                                                                                                                                              ? [`${instance.name} claimed the poppy cup.`]
                                                                                                                                              : catalog.friendId === "friend_068"
                                                                                                                                                ? [`${instance.name} claimed the tulip vase.`]
                                                                                                                                                : catalog.friendId === "friend_069"
                                                                                                                                                  ? [`${instance.name} claimed the violet patch.`]
                                                                                                                                                  : catalog.friendId === "friend_070"
                                                                                                                                                    ? [`${instance.name} claimed the lily bowl.`]
                                                                                                                                                    : catalog.friendId === "friend_071"
                                                                                                                                                      ? [`${instance.name} claimed the crocus cup.`]
                                                                                                                                                      : catalog.friendId === "friend_072"
                                                                                                                                                        ? [`${instance.name} claimed the hyacinth spike.`]
                                                                                                                                                        : catalog.friendId === "friend_073"
                                                                                                                                                          ? [`${instance.name} claimed the foxglove tower.`]
                                                                                                                                                          : catalog.friendId === "friend_074"
                                                                                                                                                            ? [`${instance.name} claimed the bluebell cloche.`]
                                                                                                                                                            : catalog.friendId === "friend_075"
                                                                                                                                                              ? [`${instance.name} claimed the snapdragon perch.`]
                                                                                                                                                              : catalog.friendId === "friend_076"
                                                                                                                                                                ? [`${instance.name} claimed the marigold pot.`]
                                                                                                                                                                : catalog.friendId === "friend_077"
                                                                                                                                                                  ? [`${instance.name} claimed the heather sprig.`]
                                                                                                                                                                  : catalog.friendId === "friend_078"
                                                                                                                                                                    ? [`${instance.name} claimed the primrose dish.`]
                                                                                                                                                                    : catalog.friendId === "friend_079"
                                                                                                                                                                      ? [`${instance.name} claimed the buttercup cup.`]
                                      : catalog.friendId === "friend_080"
                                        ? [`${instance.name} claimed the cosmos stem.`]
                                        : catalog.friendId === "friend_081"
                                          ? [`${instance.name} claimed the clematis trellis.`]
                                          : catalog.friendId === "friend_082"
                                            ? [`${instance.name} claimed the wisteria arbor.`]
                                            : catalog.friendId === "friend_083"
                                              ? [`${instance.name} claimed the anemone bowl.`]
                                              : catalog.friendId === "friend_084"
                                                ? [`${instance.name} claimed the begonia planter.`]
                                                : catalog.friendId === "friend_085"
                                                  ? [`${instance.name} claimed the ranunculus nest.`]
                                                  : catalog.friendId === "friend_086"
                                                    ? [`${instance.name} claimed the freesia vase.`]
                                                    : catalog.friendId === "friend_087"
                                                      ? [`${instance.name} claimed the geranium sill.`]
                                                      : catalog.friendId === "friend_088"
                                                        ? [`${instance.name} claimed the nasturtium tray.`]
                                                        : catalog.friendId === "friend_089"
                                                          ? [`${instance.name} claimed the petunia basket.`]
                                                          : catalog.friendId === "friend_090"
                                                            ? [`${instance.name} claimed the pansy saucer.`]
                                                            : catalog.friendId === "friend_091"
                                                              ? [`${instance.name} claimed the verbena pot.`]
                                                              : catalog.friendId === "friend_092"
                                                                ? [`${instance.name} claimed the impatiens box.`]
                                                                : catalog.friendId === "friend_093"
                                                                  ? [`${instance.name} claimed the salvia torch.`]
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
