"use client";

import { FriendSprite, FurnitureImg, UiIcon } from "@/components/art/Sprite";
import { friendById } from "@/lib/collection";
import type { FriendInstance } from "@/lib/types";

const ROOSTS = [
  { left: "28%", top: "58%" },
  { left: "58%", top: "48%" },
  { left: "44%", top: "70%" },
  { left: "72%", top: "66%" },
  { left: "16%", top: "72%" },
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
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[340px]">
      <div className="absolute inset-x-5 bottom-4 top-14 rounded-[46%] bg-wood/50" />

      <FurnitureImg file="fence" className="absolute left-[6%] top-[10%] w-[54%]" />
      <FurnitureImg file="postBell" className="absolute right-[18%] top-[18%] w-[14%]" />
      {hasTree ? (
        <FurnitureImg file="swing" className="absolute right-[4%] top-[4%] w-[38%]" />
      ) : null}
      {hasBox ? (
        <FurnitureImg file="boxBed" className="absolute bottom-[16%] left-[8%] w-[42%]" />
      ) : null}

      {friends.length === 0 ? (
        <p className="absolute inset-x-10 top-[48%] text-center font-display text-lg text-ink/35">
          {hasTree ? "A tree, waiting for company." : "The porch is quiet."}
        </p>
      ) : null}

      {friends.map((friend) => {
        const roost = ROOSTS[friend.roost % ROOSTS.length];
        const catalog = friendById(friend.friendId);
        return (
          <div
            key={friend.instanceId}
            className="absolute w-[72px] -translate-x-1/2 -translate-y-1/2"
            style={{ left: roost.left, top: roost.top }}
          >
            <FriendSprite
              kit={catalog?.phenotype.artKit ?? "ginger"}
              size={72}
              className="h-[72px] w-[72px]"
            />
            {friend.firstNight ? (
              <UiIcon
                name="bubble_bang"
                className="absolute -right-1 -top-3 h-6 w-6"
              />
            ) : null}
            <p className="text-center font-display text-[11px] text-ink/70">
              {friend.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
