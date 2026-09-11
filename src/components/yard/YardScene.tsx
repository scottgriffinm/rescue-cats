"use client";

import { FriendSprite, FurnitureImg, UiIcon } from "@/components/art/Sprite";
import { friendById } from "@/lib/collection";
import type { FriendInstance } from "@/lib/types";

const ROOSTS = [
  { left: "62%", top: "58%" },
  { left: "48%", top: "70%" },
  { left: "72%", top: "66%" },
  { left: "28%", top: "68%" },
  { left: "80%", top: "58%" },
];

export function YardScene({
  friends,
  hasBox,
  hasTree,
  hasScratch,
  hasYarn,
  hasCushion,
  waitingTree,
  bangFriendId,
  onBang,
}: {
  friends: FriendInstance[];
  hasBox: boolean;
  hasTree: boolean;
  hasScratch?: boolean;
  hasYarn?: boolean;
  hasCushion?: boolean;
  waitingTree?: boolean;
  bangFriendId?: string | null;
  onBang?: (instanceId: string) => void;
}) {
  const mango = friends.find((friend) => friend.friendId === "friend_001");
  const biscuit = friends.find((friend) => friend.friendId === "friend_003");
  const tux = friends.find((friend) => friend.friendId === "friend_004");
  const ghost = friends.find((friend) => friend.friendId === "friend_005");
  const others = friends.filter(
    (friend) =>
      friend.friendId !== "friend_001" &&
      !(hasCushion && friend.friendId === "friend_003") &&
      friend.friendId !== "friend_004" &&
      friend.friendId !== "friend_005",
  );

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[min(100%,28rem)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/ui/yard_iso.svg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      />

      <FurnitureImg file="fence" className="absolute left-[6%] top-[14%] w-[56%]" />
      <FurnitureImg file="postBell" className="absolute right-[12%] top-[16%] w-[22%]" />
      <FurnitureImg file="fountain" className="absolute left-[10%] top-[38%] w-[24%]" />
      {hasTree || waitingTree ? (
        <FurnitureImg file="miniTree" className="absolute right-[10%] top-[18%] w-[20%]" />
      ) : null}
      {hasYarn ? (
        <FurnitureImg file="yarnSwing" className="absolute left-[36%] top-[6%] w-[30%]" />
      ) : null}
      {hasBox ? (
        <FurnitureImg
          file="boxBed"
          className="yard-drop-box absolute bottom-[16%] left-[12%] w-[46%]"
        />
      ) : null}
      {hasCushion ? (
        <FurnitureImg
          file="sunCushion"
          className="yard-drop absolute left-[8%] top-[50%] w-[32%]"
        />
      ) : null}
      {hasScratch ? (
        <FurnitureImg
          file="scratcher"
          className="yard-drop absolute bottom-[20%] right-[14%] w-[18%]"
        />
      ) : null}

      {friends.length === 0 ? (
        <p className="absolute inset-x-12 top-[52%] text-center font-display text-lg text-ink/40">
          {hasTree || waitingTree
            ? "A tree, waiting for someone to name."
            : "The porch is quiet."}
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

      {ghost ? (
        <div
          className="yard-drop absolute w-[72px]"
          style={{ left: "50%", top: "30%" }}
        >
          <FriendSprite
            kit={friendById(ghost.friendId)?.phenotype.artKit ?? "ghost"}
            size={72}
            className="h-[72px] w-[72px]"
          />
          {bangFriendId === ghost.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(ghost.instanceId)}
              className="absolute -right-2 -top-4 grid h-11 w-11 place-items-center"
              aria-label={`${ghost.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="text-center font-display text-[11px] text-ink/70">{ghost.name}</p>
        </div>
      ) : null}

      {tux ? (
        <div
          className="yard-drop absolute w-[72px]"
          style={{ left: "70%", top: "64%" }}
        >
          <FriendSprite
            kit={friendById(tux.friendId)?.phenotype.artKit ?? "tuxedo"}
            size={72}
            className="h-[72px] w-[72px]"
          />
          {bangFriendId === tux.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(tux.instanceId)}
              className="absolute -right-2 -top-4 grid h-11 w-11 place-items-center"
              aria-label={`${tux.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="text-center font-display text-[11px] text-ink/70">{tux.name}</p>
        </div>
      ) : null}

      {biscuit && hasCushion ? (
        <div
          className="yard-drop absolute w-[72px]"
          style={{ left: "12%", top: "44%" }}
        >
          <FriendSprite
            kit={friendById(biscuit.friendId)?.phenotype.artKit ?? "cream"}
            size={72}
            className="h-[72px] w-[72px]"
          />
          {bangFriendId === biscuit.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(biscuit.instanceId)}
              className="absolute -right-2 -top-4 grid h-11 w-11 place-items-center"
              aria-label={`${biscuit.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="text-center font-display text-[11px] text-ink/70">{biscuit.name}</p>
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
