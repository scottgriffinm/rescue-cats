"use client";

import Link from "next/link";
import { UiIcon } from "@/components/art/Sprite";
import { NameCatModal } from "@/components/puzzle/NameCatModal";
import { useSave } from "@/components/providers/SaveProvider";
import { PhoneFrame } from "@/components/shell/PhoneFrame";
import { FriendsMet } from "@/components/yard/FriendsMet";
import { YardScene } from "@/components/yard/YardScene";
import { FURNITURE, STAR_COSMETICS } from "@/lib/collection";
import { LEVELS, nextLevel } from "@/lib/levels";

export function YardScreen() {
  const { save, hydrated, comfort, resetProgress, buyFurniture, buyCosmetic, dismissBubble } =
    useSave();
  const upcoming = nextLevel(save.completedIds);
  const cleared = save.completedIds.length;
  const allDone = cleared >= LEVELS.length;
  const hasBox = save.furniture.includes("furn_box_cardboard");
  const hasTree = save.furniture.includes("furn_tree_mini");

  return (
    <PhoneFrame>
      <header className="px-6 pt-7 text-center">
        <p className="font-display text-[11px] tracking-[0.28em] text-ink/40">
          PORCH / LAWN
        </p>
        <h1 className="mt-1 font-display text-[2.1rem] leading-none tracking-wide">
          RESCUE <span className="text-clay">CATS</span>
        </h1>
        <div className="mt-3 flex items-center justify-center gap-3 text-xs text-ink/55">
          <span>Comfort {comfort}</span>
          <span>♥ {save.hearts}</span>
          <span className="inline-flex items-center gap-0.5">
            <UiIcon name="star_marigold" className="h-3.5 w-3.5" />
            {save.stars}
          </span>
        </div>
        <p className="mt-2 text-sm text-ink/55">
          {save.friends.length === 0
            ? "Three little slides. Then you get to meet Mango."
            : allDone
              ? "Everyone who needed saving is napping in the sun."
              : save.friends[0]?.friendId === "friend_001"
                ? `${save.friends[0].name} is on the porch. The box is theirs.`
                : `${save.friends.length} friend${save.friends.length === 1 ? "" : "s"} on the porch.`}
        </p>
      </header>

      <div className="relative flex flex-1 items-center">
        {hydrated ? (
          <YardScene friends={save.friends} hasBox={hasBox} hasTree={hasTree} />
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

      <FriendsMet friends={save.friends} />

      <div className="flex justify-center gap-1.5 px-6">
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
          className="inline-flex h-11 w-full items-center justify-center rounded-[10px] bg-ink px-5 font-display text-base tracking-wide text-paper shadow-[0_3px_0_#1A1918]"
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
    </PhoneFrame>
  );
}

function ShopRow({
  hearts,
  stars,
  ownedFurniture,
  ownedCosmetics,
  onBuyFurniture,
  onBuyCosmetic,
}: {
  hearts: number;
  stars: number;
  ownedFurniture: string[];
  ownedCosmetics: string[];
  onBuyFurniture: (skuId: string, cost: number) => boolean;
  onBuyCosmetic: (id: string, cost: number) => boolean;
}) {
  const heartItem = FURNITURE.find(
    (sku) => sku.hearts > 0 && !ownedFurniture.includes(sku.skuId),
  );
  const starItem = STAR_COSMETICS.find((item) => !ownedCosmetics.includes(item.id));
  if (!heartItem && !starItem) return null;

  return (
    <div className="flex gap-2 text-xs">
      {heartItem ? (
        <button
          type="button"
          disabled={hearts < heartItem.hearts}
          onClick={() => onBuyFurniture(heartItem.skuId, heartItem.hearts)}
          className="paper-card flex-1 rounded-xl px-2 py-2 text-ink/70 disabled:opacity-40"
        >
          {heartItem.name} · {heartItem.hearts}♥
        </button>
      ) : null}
      {starItem ? (
        <button
          type="button"
          disabled={stars < starItem.stars}
          onClick={() => onBuyCosmetic(starItem.id, starItem.stars)}
          className="paper-card flex-1 rounded-xl px-2 py-2 text-ink/70 disabled:opacity-40"
        >
          {starItem.name} · {starItem.stars}★
        </button>
      ) : null}
    </div>
  );
}
