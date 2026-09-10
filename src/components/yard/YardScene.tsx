"use client";

import { FriendSprite, FurnitureImg, UiIcon } from "@/components/art/Sprite";
import { friendById } from "@/lib/collection";
import type { FriendInstance } from "@/lib/types";

const ROOSTS = [
  { left: "36%", top: "56%" },
  { left: "58%", top: "50%" },
  { left: "48%", top: "68%" },
  { left: "70%", top: "64%" },
  { left: "24%", top: "70%" },
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/ui/yard_iso.svg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      />

      <FurnitureImg file="fence" className="absolute left-[8%] top-[16%] w-[46%]" />
      <FurnitureImg file="postBell" className="absolute right-[16%] top-[22%] w-[13%]" />
      <FurnitureImg file="fountain" className="absolute left-[12%] top-[40%] w-[20%]" />
      {hasTree ? (
        <FurnitureImg file="swing" className="absolute right-[6%] top-[8%] w-[34%]" />
      ) : null}
      {hasBox ? (
        <FurnitureImg
          file="boxBed"
          className="yard-drop-box absolute bottom-[18%] left-[14%] w-[36%]"
        />
      ) : null}

      {friends.length === 0 ? (
        <p className="absolute inset-x-12 top-[52%] text-center font-display text-lg text-ink/40">
          {hasTree ? "A tree, waiting for someone to name." : "The porch is quiet."}
        </p>
      ) : null}

      {friends.map((friend) => {
        const roost = ROOSTS[friend.roost % ROOSTS.length];
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
