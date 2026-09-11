"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  STAR_COSMETICS,
  shopItemsForClear,
  shopUnlocked,
  withName,
} from "@/lib/collection";
import { FIRST_NIGHT_BANG_MS } from "@/lib/constants";
import { LEVELS, nextLevel } from "@/lib/levels";

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
  const introFriend = save.friends.find((friend) => friend.firstNight);
  const [bangFriendId, setBangFriendId] = useState<string | null>(null);
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

  return (
    <GameShell>
      <header className="px-6 pt-7 text-center">
        <p className="font-display text-[11px] tracking-[0.28em] text-ink/40">
          PORCH / LAWN
        </p>
        <h1 className="mt-1 font-display text-[2.1rem] leading-none tracking-wide">
          RESCUE <span className="text-clay">CATS</span>
        </h1>
        <div className="mt-3 flex items-center justify-center gap-3 text-xs text-ink/55">
          <ComfortMeter value={comfort} />
          <span>♥ {save.hearts}</span>
          <span className="inline-flex items-center gap-0.5">
            <UiIcon name="star_marigold" className="h-3.5 w-3.5" />
            {save.stars}
          </span>
        </div>
        <p className="mt-2 text-sm text-ink/55">
          {save.friends.length === 0
            ? "Three little slides. Then you get to meet a new friend."
            : allDone
              ? "Everyone who needed saving is napping in the sun."
              : save.friends.length >= 2
                ? `${save.friends.map((friend) => friend.name).join(" & ")} are home. Tomorrow: ${upcoming.name}.`
                : save.unlockFlags.mangoNamed
                  ? `${save.friends[0]?.name ?? "Your friend"} is home. Tomorrow: ${upcoming.name}.`
                  : `${save.friends.length} friend${save.friends.length === 1 ? "" : "s"} on the porch.`}
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

      <div className="flex flex-wrap justify-center gap-1.5 px-6">
        {LEVELS.map((level) => {
          const done = save.completedIds.includes(level.id);
          const current = upcoming.id === level.id && !allDone;
          return (
            <Link
              key={level.id}
              href={`/level/${level.id}`}
              className={`h-2.5 rounded-full border border-ink transition-all ${
                done ? "w-6 bg-clay" : current ? "w-8 bg-ink" : "w-2.5 bg-paper"
              }`}
              aria-label={`Level ${level.number}${done ? " cleared" : ""}`}
            />
          );
        })}
      </div>

      <footer className="space-y-3 px-5 pb-6 pt-4">
        <Link
          href={allDone ? `/level/${LEVELS[0].id}` : `/level/${upcoming.id}`}
          className="inline-flex h-11 w-full items-center justify-center rounded-[10px] bg-ink px-5 font-display text-base tracking-wide text-paper shadow-[0_3px_0_#2B2A28]"
        >
          {cleared === 0
            ? "Walk Mango home"
            : allDone
              ? "Replay the routes"
              : `Continue · ${upcoming.name}`}
        </Link>

        <ShopRow
          hearts={save.hearts}
          stars={save.stars}
          cleared={cleared}
          ownedFurniture={save.furniture}
          ownedCosmetics={save.cosmetics}
          onBuyFurniture={buyFurniture}
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

function ComfortMeter({ value }: { value: number }) {
  const cap = Math.max(6, FURNITURE.reduce((sum, sku) => sum + sku.comfort, 0));
  const pct = Math.min(100, (value / cap) * 100);
  return (
    <div className="flex items-center gap-1.5" aria-label={`Comfort ${value}`}>
      <span>Comfort</span>
      <div
        className="h-2 w-16 overflow-hidden rounded-full border border-ink/25 bg-paper-deep"
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
  onBuyFurniture,
  onBuyCosmetic,
}: {
  hearts: number;
  stars: number;
  cleared: number;
  ownedFurniture: string[];
  ownedCosmetics: string[];
  onBuyFurniture: (skuId: string, cost: number) => boolean;
  onBuyCosmetic: (id: string, cost: number) => boolean;
}) {
  const heartsOpen = shopUnlocked(cleared);
  if (!heartsOpen) return null;

  const heartItems = shopItemsForClear(cleared).filter(
    (sku) => sku.hearts > 0 && !ownedFurniture.includes(sku.skuId),
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
        const canAfford = hearts >= heartItem.hearts;
        const need = Math.max(0, heartItem.hearts - hearts);
        const isStarter = heartItem.skuId === SHOP_STARTER.sku_id;
        return (
          <div key={heartItem.skuId} className="paper-card space-y-2 rounded-2xl px-3 py-3">
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
            {canAfford ? (
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
