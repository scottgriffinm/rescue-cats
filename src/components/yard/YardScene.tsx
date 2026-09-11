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

const INK_ROOST = { left: "16%", top: "46%" };

export function YardScene({
  friends,
  hasBox,
  hasTree,
  hasPost,
  hasSwing,
  bangFriendId,
  onBang,
}: {
  friends: FriendInstance[];
  hasBox: boolean;
  hasTree: boolean;
  hasPost?: boolean;
  hasSwing?: boolean;
  bangFriendId?: string | null;
  onBang?: (instanceId: string) => void;
}) {
  const mango = friends.find((friend) => friend.friendId === "friend_001");
  const ink = friends.find((friend) => friend.friendId === "friend_002");
  const others = friends.filter(
    (friend) => friend.friendId !== "friend_001" && friend.friendId !== "friend_002",
  );

  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[340px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/ui/yard_iso.svg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      />

      <FurnitureImg file="fence" className="absolute left-[6%] top-[14%] min-h-[72px] w-[56%] min-w-[72px]" />
      <FurnitureImg file="postBell" className="absolute right-[12%] top-[16%] min-h-[72px] w-[22%] min-w-[72px]" />
      <FurnitureImg file="fountain" className="absolute left-[10%] top-[38%] min-h-[72px] w-[24%] min-w-[72px]" />
      {hasTree ? (
        <FurnitureImg file="miniTree" className="absolute right-[4%] top-[6%] min-h-[72px] w-[28%] min-w-[72px]" />
      ) : null}
      {hasBox ? (
        <FurnitureImg
          file="boxBed"
          className="yard-drop-box absolute bottom-[16%] left-[12%] min-h-[72px] w-[46%] min-w-[72px]"
        />
      ) : null}
      {hasPost ? (
        <FurnitureImg
          file="scratcher"
          className="yard-drop-box absolute bottom-[18%] right-[6%] min-h-[72px] w-[16%] min-w-[48px]"
        />
      ) : null}
      {hasSwing ? (
        <FurnitureImg
          file="yarnSwing"
          className="yard-drop-box absolute left-[40%] top-[30%] min-h-[72px] w-[28%] min-w-[72px]"
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
          {bangFriendId === mango.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(mango.instanceId)}
              className="absolute -right-2 -top-4 grid h-11 w-11 place-items-center"
              aria-label={`${mango.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="text-center font-display text-[11px] text-ink/70">{mango.name}</p>
        </div>
      ) : null}

      {ink ? (
        <div className="yard-drop absolute w-[72px]" style={INK_ROOST}>
          <FriendSprite
            kit={friendById(ink.friendId)?.phenotype.artKit ?? "slate"}
            size={72}
            className="h-[72px] w-[72px]"
          />
          {bangFriendId === ink.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(ink.instanceId)}
              className="absolute -right-2 -top-4 grid h-11 w-11 place-items-center"
              aria-label={`${ink.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="text-center font-display text-[11px] text-ink/70">{ink.name}</p>
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
            {bangFriendId === friend.instanceId ? (
              <button
                type="button"
                onClick={() => onBang?.(friend.instanceId)}
                className="absolute -right-2 -top-4 grid h-11 w-11 place-items-center"
                aria-label={`${friend.name} has something to say`}
              >
                <UiIcon name="bubble_bang" className="h-7 w-7" />
              </button>
            ) : null}
            <p className="text-center font-display text-[11px] text-ink/70">{friend.name}</p>
          </div>
        );
      })}
    </div>
  );
}
