"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { UiIcon } from "@/components/art/Sprite";
import { NameCatModal } from "@/components/puzzle/NameCatModal";
import { useSave } from "@/components/providers/SaveProvider";
import { GameShell } from "@/components/shell/GameShell";
import { FriendsMet } from "@/components/yard/FriendsMet";
import { YardScene } from "@/components/yard/YardScene";
import {
  FURNITURE,
  NAMING,
  SHOP_STARTER,
  SLICE_UNLOCKS,
  STAR_COSMETICS,
  friendById,
  shopItemsForClear,
  shopUnlocked,
  withName,
} from "@/lib/collection";
import { FIRST_NIGHT_BANG_MS, PRODUCT_NAME } from "@/lib/constants";
import { LEVELS, nextLevel } from "@/lib/levels";

/** Parade cadence chips — clears 3…60 → Mango…Bean (not one dot per board). */
const PARADE_MILESTONES = Object.entries(SLICE_UNLOCKS)
  .map(([clear, friendId]) => ({ clear: Number(clear), friendId }))
  .sort((a, b) => a.clear - b.clear);

/** Sister-readable buy/gift lines — warm paper/ink, not cute-generic sparkle. */
const PLACE_LINES: Record<string, string> = {
  furn_scratch_post: "Scratch post on the porch. Someone will try it.",
  furn_tree_mini: "Mini tree landed. Climbing practice.",
  furn_swing_yarn: "Yarn swing up. Soft batting ahead.",
  furn_fountain_stone: "Water on the porch. Comfort climbs.",
  furn_perch_high: "A high seat. Someone will claim it.",
  furn_box_cardboard: "A cardboard box. Instant nest.",
  furn_bed_cushion: "Sun cushion down. Warm spot claimed.",
};

function placeLineFor(skuId: string) {
  if (PLACE_LINES[skuId]) return PLACE_LINES[skuId];
  const sku = FURNITURE.find((row) => row.skuId === skuId);
  return sku ? `${sku.name} on the porch.` : "Something new on the porch.";
}

export function YardScreen() {
  const {
    save,
    hydrated,
    comfort,
    resetProgress,
    buyFurniture,
    buyCosmetic,
    dismissBubble,
    completeFirstNight,
  } = useSave();
  const upcoming = nextLevel(save.completedIds);
  const cleared = save.completedIds.length;
  const allDone = cleared >= LEVELS.length;
  const hasBox = save.furniture.includes("furn_box_cardboard");
  const hasTree = save.furniture.includes("furn_tree_mini");
  const hasScratch = save.furniture.includes("furn_scratch_post");
  const hasYarn = save.furniture.includes("furn_swing_yarn");
  const hasCushion = save.furniture.includes("furn_bed_cushion");
  const hasFountain = save.furniture.includes("furn_fountain_stone");
  const hasPerch = save.furniture.includes("furn_perch_high");
  const introFriend = save.friends.find((friend) => friend.firstNight);
  const [bangFriendId, setBangFriendId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [comfortPulse, setComfortPulse] = useState(0);
  const [highlightSku, setHighlightSku] = useState<string | null>(null);
  const [leavingSkus, setLeavingSkus] = useState<Record<string, boolean>>({});
  const prevFurnitureRef = useRef<string[] | null>(null);
  const buyHandledRef = useRef<string | null>(null);
  const newestFriend = save.friends[save.friends.length - 1];
  const tomorrowHook =
    newestFriend && !introFriend && !save.return_hook_claimed
      ? withName(NAMING.tomorrow_hook, newestFriend.name)
      : null;

  useEffect(() => {
    if (!introFriend) {
      setBangFriendId(null);
      return;
    }
    const timer = window.setTimeout(() => {
      setBangFriendId(introFriend.instanceId);
    }, FIRST_NIGHT_BANG_MS);
    return () => window.clearTimeout(timer);
  }, [introFriend?.instanceId]);

  useEffect(() => {
    if (!toast && !highlightSku) return;
    const timer = window.setTimeout(() => {
      setToast(null);
      setHighlightSku(null);
    }, 2200);
    return () => window.clearTimeout(timer);
  }, [toast, highlightSku, comfortPulse]);

  useEffect(() => {
    if (!hydrated) return;
    const prev = prevFurnitureRef.current;
    prevFurnitureRef.current = save.furniture;
    if (!prev) return;
    const added = save.furniture.filter((skuId) => !prev.includes(skuId));
    for (const skuId of added) {
      if (buyHandledRef.current === skuId) {
        buyHandledRef.current = null;
        continue;
      }
      setToast(placeLineFor(skuId));
      setComfortPulse((n) => n + 1);
      setHighlightSku(skuId);
    }
  }, [hydrated, save.furniture]);

  function celebrateBuy(skuId: string) {
    buyHandledRef.current = skuId;
    setLeavingSkus((prev) => ({ ...prev, [skuId]: true }));
    setToast(placeLineFor(skuId));
    setComfortPulse((n) => n + 1);
    setHighlightSku(skuId);
    window.setTimeout(() => {
      setLeavingSkus((prev) => {
        const next = { ...prev };
        delete next[skuId];
        return next;
      });
    }, 480);
  }

  function handleBuyFurniture(skuId: string, cost: number) {
    const ok = buyFurniture(skuId, cost);
    if (ok) celebrateBuy(skuId);
    return ok;
  }

  return (
    <GameShell>
      <header className="px-4 pt-5 text-center sm:px-6 sm:pt-7">
        <p className="font-display text-[11px] tracking-[0.28em] text-ink/40">
          PORCH / LAWN
        </p>
        <h1 className="mt-1 font-display text-[1.85rem] leading-none tracking-wide sm:text-[2.1rem]">
          {PRODUCT_NAME.slice(0, PRODUCT_NAME.lastIndexOf(" "))}{" "}
          <span className="text-clay">{PRODUCT_NAME.slice(PRODUCT_NAME.lastIndexOf(" ") + 1)}</span>
        </h1>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-ink/55">
          <ComfortMeter value={comfort} pulseKey={comfortPulse} />
          <span className="inline-flex items-center gap-1 tabular-nums">♥ {save.hearts}</span>
          <span className="inline-flex items-center gap-0.5 tabular-nums">
            <UiIcon name="star_impatiens" className="h-3.5 w-3.5" />
            {save.stars}
          </span>
        </div>
        <p className="mt-2 text-sm text-ink/55">
          {(() => {
            const beanFriend = save.friends.find((friend) => friend.friendId === "friend_020");
            const beanNamed = Boolean(beanFriend);
            if (save.friends.length === 0) {
              return "Three little slides. Then you get to meet a new friend.";
            }
            if (beanNamed && allDone) {
              return `${beanFriend!.name}'s home. The whole parade is napping in the sun.`;
            }
            if (allDone) {
              return "Everyone who needed saving is napping in the sun.";
            }
            if (save.friends.length === 1) {
              return `${save.friends[0].name} is home. Tomorrow: ${upcoming.name}.`;
            }
            if (save.friends.length < 6) {
              return `${save.friends.map((friend) => friend.name).join(" & ")} are home. Tomorrow: ${upcoming.name}.`;
            }
            return `${save.friends.length} friends on the porch. Tomorrow: ${upcoming.name}.`;
          })()}
        </p>
      </header>

      <div className="relative flex flex-1 items-center">
        {hydrated ? (
          <YardScene
            friends={save.friends}
            hasBox={hasBox}
            hasTree={hasTree}
            hasScratch={hasScratch}
            hasYarn={hasYarn}
            hasCushion={hasCushion}
            hasFountain={hasFountain}
            hasPerch={hasPerch}
            highlightSku={highlightSku}
            bangFriendId={bangFriendId}
            onBang={(instanceId) => {
              completeFirstNight(instanceId);
              setBangFriendId(null);
            }}
          />
        ) : (
          <div className="mx-auto h-40 w-40 animate-pulse rounded-full bg-ink/5" />
        )}
      </div>

      {save.bubbles[0] ? (
        <button
          type="button"
          onClick={() => dismissBubble(save.bubbles[0])}
          className="paper-card mx-6 mb-2 rounded-2xl px-3 py-2 text-left text-sm"
        >
          <span className="mr-2 inline-block align-middle">
            <UiIcon name="bubble_bang" className="inline h-5 w-5" />
          </span>
          {save.bubbles[0]}
        </button>
      ) : null}

      {tomorrowHook && save.bubbles[0] !== tomorrowHook ? (
        <p className="mx-6 mb-2 text-center text-sm text-ink/60">{tomorrowHook}</p>
      ) : null}

      <FriendsMet friends={save.friends} />

      <div
        className="parade-progress grid grid-cols-5 gap-x-1 gap-y-3 px-3 sm:grid-cols-6 sm:gap-x-1.5 sm:px-5 md:grid-cols-8 lg:flex lg:flex-wrap lg:items-end lg:justify-center lg:gap-1.5 lg:px-6"
        aria-label="Parade progress"
      >
        {(() => {
          const nextClear =
            PARADE_MILESTONES.find((milestone) => cleared < milestone.clear)?.clear ?? null;
          return PARADE_MILESTONES.map((milestone) => {
            const friend = friendById(milestone.friendId);
            const rescued = save.friends.find((row) => row.friendId === milestone.friendId);
            const label = rescued?.name ?? friend?.defaultName ?? milestone.friendId;
            const done = cleared >= milestone.clear;
            const current = !allDone && nextClear === milestone.clear;
            const level = LEVELS[milestone.clear - 1] ?? upcoming;
            return (
              <Link
                key={milestone.friendId}
                href={`/level/${level.id}`}
                className={`parade-chip flex min-h-11 min-w-0 flex-col items-center justify-end gap-0.5 rounded-md px-0.5 transition-all ${
                  current ? "opacity-100" : done ? "opacity-90" : "opacity-45"
                }`}
                aria-label={`${label} at clear ${milestone.clear}${
                  done ? " rescued" : current ? " next" : " upcoming"
                }`}
                title={`${label} · ${milestone.clear} clears`}
              >
                <span
                  className={`rounded-full border border-ink transition-all ${
                    done
                      ? "h-2.5 w-6 bg-clay"
                      : current
                        ? "h-2.5 w-8 bg-ink"
                        : "h-2.5 w-2.5 bg-paper"
                  }`}
                  aria-hidden
                />
                <span
                  className={`parade-chip-label w-full max-w-full truncate text-center font-display text-[8px] leading-none tracking-wide ${
                    current ? "text-ink" : done ? "text-clay" : "text-ink/40"
                  }`}
                >
                  {label}
                </span>
              </Link>
            );
          });
        })()}
      </div>

      <footer className="space-y-3 px-4 pb-6 pt-3 sm:px-5 sm:pt-4">
        <Link
          href={allDone ? `/level/${LEVELS[0].id}` : `/level/${upcoming.id}`}
          className="inline-flex h-11 w-full items-center justify-center rounded-[10px] bg-ink px-5 font-display text-base tracking-wide text-paper shadow-[0_3px_0_#2B2A28]"
        >
          {cleared === 0
            ? "Start the first rescue"
            : allDone
              ? "Replay a favorite route"
              : `Continue · ${upcoming.name}`}
        </Link>

        {toast ? (
          <p
            className="paper-card rounded-2xl px-3 py-2 text-center text-sm text-ink/80"
            role="status"
          >
            {toast}
          </p>
        ) : null}

        <ShopRow
          hearts={save.hearts}
          stars={save.stars}
          cleared={cleared}
          ownedFurniture={save.furniture}
          ownedCosmetics={save.cosmetics}
          leavingSkus={leavingSkus}
          onBuyFurniture={handleBuyFurniture}
          onBuyCosmetic={buyCosmetic}
        />

        {cleared > 0 ? (
          <button
            type="button"
            onClick={resetProgress}
            className="w-full text-center text-xs text-ink/40 underline-offset-2 hover:underline"
          >
            Reset paper yard
          </button>
        ) : null}
      </footer>

      {save.pendingUnlocks.length > 0 ? (
        <NameCatModal key={save.friends.length} onNamed={() => undefined} />
      ) : null}
    </GameShell>
  );
}

function ComfortMeter({ value, pulseKey }: { value: number; pulseKey: number }) {
  const cap = Math.max(6, FURNITURE.reduce((sum, sku) => sum + sku.comfort, 0));
  const pct = Math.min(100, (value / cap) * 100);
  return (
    <div
      key={pulseKey > 0 ? `comfort-${pulseKey}` : "comfort"}
      className={`flex items-center gap-1.5 ${pulseKey > 0 ? "comfort-pulse" : ""}`}
      aria-label={`Comfort ${value}`}
    >
      <span>Comfort</span>
      <div
        className="h-2 w-12 overflow-hidden rounded-full border border-ink/25 bg-paper-deep sm:w-16"
        aria-hidden
      >
        <div
          className="h-full bg-sage transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="font-display text-ink">{value}</span>
    </div>
  );
}

function ShopRow({
  hearts,
  stars,
  cleared,
  ownedFurniture,
  ownedCosmetics,
  leavingSkus,
  onBuyFurniture,
  onBuyCosmetic,
}: {
  hearts: number;
  stars: number;
  cleared: number;
  ownedFurniture: string[];
  ownedCosmetics: string[];
  leavingSkus: Record<string, boolean>;
  onBuyFurniture: (skuId: string, cost: number) => boolean;
  onBuyCosmetic: (id: string, cost: number) => boolean;
}) {
  const heartsOpen = shopUnlocked(cleared);
  if (!heartsOpen) return null;

  const heartItems = shopItemsForClear(cleared).filter(
    (sku) =>
      sku.hearts > 0 &&
      (!ownedFurniture.includes(sku.skuId) || Boolean(leavingSkus[sku.skuId])),
  );
  const starItem = STAR_COSMETICS.find((item) => !ownedCosmetics.includes(item.id));
  if (heartItems.length === 0 && !starItem) return null;

  const ownedStarter = ownedFurniture.includes(SHOP_STARTER.sku_id);

  return (
    <div className="space-y-2">
      <p className="text-center text-[10px] tracking-[0.18em] text-ink/45">
        {SHOP_STARTER.eyebrow.toUpperCase()}
      </p>
      {heartItems.map((heartItem) => {
        const leaving = Boolean(leavingSkus[heartItem.skuId]);
        const canAfford = hearts >= heartItem.hearts;
        const need = Math.max(0, heartItem.hearts - hearts);
        const isStarter = heartItem.skuId === SHOP_STARTER.sku_id;
        return (
          <div
            key={heartItem.skuId}
            className={`paper-card space-y-2 rounded-2xl px-3 py-3 transition-[opacity,transform] duration-[420ms] ease-out ${
              leaving ? "shop-leave" : ""
            }`}
          >
            <div className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heartItem.asset}
                alt=""
                className="mx-auto h-16 w-16 object-contain"
              />
              <p className="font-display text-base text-ink">{heartItem.name}</p>
              <p className="text-xs text-ink/60">
                {heartItem.comfort > 0 ? `+${heartItem.comfort} Comfort · ` : ""}
                {heartItem.hearts}♥
              </p>
            </div>
            {leaving ? (
              <p className="rounded-[10px] border-2 border-ink/15 bg-paper-deep px-3 py-2 text-center text-sm text-ink/60">
                On the porch
              </p>
            ) : canAfford ? (
              <button
                type="button"
                onClick={() => onBuyFurniture(heartItem.skuId, heartItem.hearts)}
                className="inline-flex h-11 w-full items-center justify-center rounded-[10px] bg-ink px-5 font-display text-base tracking-wide text-paper shadow-[0_3px_0_#2B2A28]"
              >
                {isStarter ? "Buy for 15♥" : `Buy for ${heartItem.hearts}♥`}
              </button>
            ) : (
              <p className="rounded-[10px] border-2 border-ink/20 bg-paper-deep px-3 py-2 text-center text-sm text-ink/70">
                Need {need} more ♥ — keep sliding
              </p>
            )}
          </div>
        );
      })}
      {heartItems.length === 0 && ownedStarter ? (
        <p className="text-center text-xs text-ink/50">Sisal Scratch Post is on the porch.</p>
      ) : null}
      {starItem ? (
        <button
          type="button"
          disabled={stars < starItem.stars}
          onClick={() => onBuyCosmetic(starItem.id, starItem.stars)}
          className="w-full text-center text-xs text-ink/45 underline-offset-2 hover:underline disabled:no-underline disabled:opacity-50"
        >
          {starItem.name} · {starItem.stars}★
        </button>
      ) : null}
    </div>
  );
}
