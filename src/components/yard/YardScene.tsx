"use client";

import { FriendSprite, FurnitureImg, UiIcon } from "@/components/art/Sprite";
import { friendById } from "@/lib/collection";
import type { FriendInstance } from "@/lib/types";

const ROOSTS = [
  { left: "62%", top: "58%" },
  { left: "48%", top: "70%" },
  { left: "72%", top: "66%" },
  { left: "28%", top: "68%" },
];

export function YardScene({
  friends,
  hasBox,
  hasTree,
}: {
  friends: FriendInstance[];
  hasBox: boolean;
  hasTree: boolean;
}) {
  const mango = friends.find((friend) => friend.friendId === "friend_001");
  const others = friends.filter((friend) => friend.friendId !== "friend_001");

  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[340px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/ui/yard_iso.svg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      />

      <FurnitureImg file="fence" className="absolute left-[6%] top-[14%] w-[56%]" />
      <FurnitureImg file="postBell" className="absolute right-[12%] top-[16%] w-[18%]" />
      <FurnitureImg file="fountain" className="absolute left-[10%] top-[38%] w-[22%]" />
      {hasTree ? (
        <FurnitureImg file="swing" className="absolute right-[4%] top-[6%] w-[38%]" />
      ) : null}
      {hasBox ? (
        <FurnitureImg
          file="boxBed"
          className="yard-drop-box absolute bottom-[16%] left-[12%] w-[46%]"
        />
      ) : null}

      {friends.length === 0 ? (
        <p className="absolute inset-x-12 top-[52%] text-center font-display text-lg text-ink/40">
          {hasTree ? "A tree, waiting for someone to name." : "The porch is quiet."}
        </p>
      ) : null}

      {mango && hasBox ? (
        <div
          className="yard-drop absolute w-[72px]"
          style={{ left: "34%", top: "62%" }}
        >
          <FriendSprite
            kit={friendById(mango.friendId)?.phenotype.artKit ?? "ginger"}
            size={72}
            className="h-[72px] w-[72px]"
          />
          {mango.firstNight ? (
            <UiIcon name="bubble_bang" className="absolute -right-1 -top-3 h-6 w-6" />
          ) : null}
          <p className="text-center font-display text-[11px] text-ink/70">{mango.name}</p>
        </div>
      ) : null}

      {(mango && !hasBox ? [mango, ...others] : others).map((friend, index) => {
        const roost = ROOSTS[friend.roost % ROOSTS.length] ?? ROOSTS[index % ROOSTS.length];
        const catalog = friendById(friend.friendId);
        return (
          <div
            key={friend.instanceId}
            className="yard-drop absolute w-[72px]"
            style={{ left: roost.left, top: roost.top }}
          >
            <FriendSprite
              kit={catalog?.phenotype.artKit ?? "ginger"}
              size={72}
              className="h-[72px] w-[72px]"
            />
            {friend.firstNight ? (
              <UiIcon name="bubble_bang" className="absolute -right-1 -top-3 h-6 w-6" />
            ) : null}
            <p className="text-center font-display text-[11px] text-ink/70">{friend.name}</p>
          </div>
        );
      })}
    </div>
  );
}
