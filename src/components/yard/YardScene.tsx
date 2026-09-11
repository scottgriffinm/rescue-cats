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
  { left: "16%", top: "56%" },
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
  const mist = friends.find((friend) => friend.friendId === "friend_006");
  const pepper = friends.find((friend) => friend.friendId === "friend_007");
  const pumpkin = friends.find((friend) => friend.friendId === "friend_008");
  const shadow = friends.find((friend) => friend.friendId === "friend_009");
  const noodle = friends.find((friend) => friend.friendId === "friend_010");
  const clover = friends.find((friend) => friend.friendId === "friend_011");
  const ash = friends.find((friend) => friend.friendId === "friend_012");
  const others = friends.filter(
    (friend) =>
      friend.friendId !== "friend_001" &&
      !(hasCushion && friend.friendId === "friend_003") &&
      friend.friendId !== "friend_004" &&
      friend.friendId !== "friend_005" &&
      friend.friendId !== "friend_006" &&
      friend.friendId !== "friend_007" &&
      friend.friendId !== "friend_008" &&
      friend.friendId !== "friend_009" &&
      friend.friendId !== "friend_010" &&
      friend.friendId !== "friend_011" &&
      friend.friendId !== "friend_012",
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

      {mist ? (
        <div
          className="yard-drop absolute w-[72px]"
          style={{ left: "20%", top: "24%" }}
        >
          <FriendSprite
            kit={friendById(mist.friendId)?.phenotype.artKit ?? "mist"}
            size={72}
            className="h-[72px] w-[72px]"
          />
          {bangFriendId === mist.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(mist.instanceId)}
              className="absolute -right-2 -top-4 grid h-11 w-11 place-items-center"
              aria-label={`${mist.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="text-center font-display text-[11px] text-ink/70">{mist.name}</p>
        </div>
      ) : null}

      {pepper ? (
        <div
          className="yard-drop absolute w-[72px]"
          style={{ left: "64%", top: "20%" }}
        >
          <FriendSprite
            kit={friendById(pepper.friendId)?.phenotype.artKit ?? "pepper"}
            size={72}
            className="h-[72px] w-[72px]"
          />
          {bangFriendId === pepper.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(pepper.instanceId)}
              className="absolute -right-2 -top-4 grid h-11 w-11 place-items-center"
              aria-label={`${pepper.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="text-center font-display text-[11px] text-ink/70">{pepper.name}</p>
        </div>
      ) : null}

      {noodle ? (
        <div
          className="yard-drop absolute w-[72px]"
          style={{ left: "40%", top: "78%" }}
        >
          <FriendSprite
            kit={friendById(noodle.friendId)?.phenotype.artKit ?? "noodle"}
            size={72}
            className="h-[72px] w-[72px]"
          />
          {bangFriendId === noodle.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(noodle.instanceId)}
              className="absolute -right-2 -top-4 grid h-11 w-11 place-items-center"
              aria-label={`${noodle.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="text-center font-display text-[11px] text-ink/70">{noodle.name}</p>
        </div>
      ) : null}

      {clover ? (
        <div
          className="yard-drop absolute w-[72px]"
          style={{ left: "56%", top: "72%" }}
        >
          <FriendSprite
            kit={friendById(clover.friendId)?.phenotype.artKit ?? "clover"}
            size={72}
            className="h-[72px] w-[72px]"
          />
          {bangFriendId === clover.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(clover.instanceId)}
              className="absolute -right-2 -top-4 grid h-11 w-11 place-items-center"
              aria-label={`${clover.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="text-center font-display text-[11px] text-ink/70">{clover.name}</p>
        </div>
      ) : null}

      {ash ? (
        <div
          className="yard-drop absolute w-[72px]"
          style={{ left: "8%", top: "72%" }}
        >
          <FriendSprite
            kit={friendById(ash.friendId)?.phenotype.artKit ?? "ash"}
            size={72}
            className="h-[72px] w-[72px]"
          />
          {bangFriendId === ash.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(ash.instanceId)}
              className="absolute -right-2 -top-4 grid h-11 w-11 place-items-center"
              aria-label={`${ash.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="text-center font-display text-[11px] text-ink/70">{ash.name}</p>
        </div>
      ) : null}

      {shadow ? (
        <div
          className="yard-drop absolute w-[72px]"
          style={{ left: "6%", top: "34%" }}
        >
          <FriendSprite
            kit={friendById(shadow.friendId)?.phenotype.artKit ?? "shadow"}
            size={72}
            className="h-[72px] w-[72px]"
          />
          {bangFriendId === shadow.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(shadow.instanceId)}
              className="absolute -right-2 -top-4 grid h-11 w-11 place-items-center"
              aria-label={`${shadow.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="text-center font-display text-[11px] text-ink/70">{shadow.name}</p>
        </div>
      ) : null}

      {pumpkin ? (
        <div
          className="yard-drop absolute w-[72px]"
          style={{ left: "82%", top: "38%" }}
        >
          <FriendSprite
            kit={friendById(pumpkin.friendId)?.phenotype.artKit ?? "pumpkin"}
            size={72}
            className="h-[72px] w-[72px]"
          />
          {bangFriendId === pumpkin.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(pumpkin.instanceId)}
              className="absolute -right-2 -top-4 grid h-11 w-11 place-items-center"
              aria-label={`${pumpkin.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="text-center font-display text-[11px] text-ink/70">{pumpkin.name}</p>
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
