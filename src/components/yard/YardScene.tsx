"use client";

import { FriendSprite, FurnitureImg, UiIcon } from "@/components/art/Sprite";
import { friendById } from "@/lib/collection";
import type { FriendInstance } from "@/lib/types";

const ROOSTS = [
  { left: "8%", top: "18%" },
  { left: "28%", top: "14%" },
  { left: "48%", top: "16%" },
  { left: "68%", top: "14%" },
  { left: "86%", top: "22%" },
  { left: "4%", top: "34%" },
  { left: "24%", top: "38%" },
  { left: "42%", top: "32%" },
  { left: "60%", top: "30%" },
  { left: "80%", top: "36%" },
  { left: "14%", top: "52%" },
  { left: "36%", top: "48%" },
  { left: "54%", top: "46%" },
  { left: "74%", top: "50%" },
  { left: "88%", top: "54%" },
  { left: "8%", top: "68%" },
  { left: "30%", top: "72%" },
  { left: "52%", top: "70%" },
  { left: "72%", top: "66%" },
  { left: "44%", top: "80%" },
];


/** Yard-tidy: shrink loafs once the parade crowds the porch (earlier on dense yards). */
function loafPx(friendCount: number): 48 | 72 {
  return friendCount >= 8 ? 48 : 72;
}

function furnPop(highlightSku: string | null | undefined, skuId: string) {
  return highlightSku === skuId ? "furn-place-pop" : "";
}

export function YardScene({
  friends,
  hasBox,
  hasTree,
  hasScratch,
  hasYarn,
  hasCushion,
  hasFountain,
  hasPerch,
  highlightSku,
  bangFriendId,
  onBang,
}: {
  friends: FriendInstance[];
  hasBox: boolean;
  hasTree: boolean;
  hasScratch?: boolean;
  hasYarn?: boolean;
  hasCushion?: boolean;
  hasFountain?: boolean;
  hasPerch?: boolean;
  highlightSku?: string | null;
  bangFriendId?: string | null;
  onBang?: (instanceId: string) => void;
}) {
  const px = loafPx(friends.length);
  const loafClass = px === 48 ? "h-12 w-12" : "h-[72px] w-[72px]";
  const roostW = px === 48 ? "48px" : "72px";
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
  const oak = friends.find((friend) => friend.friendId === "friend_013");
  const dumpling = friends.find((friend) => friend.friendId === "friend_014");
  const stripe = friends.find((friend) => friend.friendId === "friend_015");
  const cloud = friends.find((friend) => friend.friendId === "friend_016");
  const donna = friends.find((friend) => friend.friendId === "friend_017");
  const sunny = friends.find((friend) => friend.friendId === "friend_018");
  const nigel = friends.find((friend) => friend.friendId === "friend_019");
  const bean = friends.find((friend) => friend.friendId === "friend_020");
  const velvet = friends.find((friend) => friend.friendId === "friend_021");
  const coral = friends.find((friend) => friend.friendId === "friend_022");
  const blue = friends.find((friend) => friend.friendId === "friend_023");
  const maple = friends.find((friend) => friend.friendId === "friend_024");
  const steve = friends.find((friend) => friend.friendId === "friend_025");
  const cocoa = friends.find((friend) => friend.friendId === "friend_026");
  const linen = friends.find((friend) => friend.friendId === "friend_027");
  const juniper = friends.find((friend) => friend.friendId === "friend_028");
  const ivory = friends.find((friend) => friend.friendId === "friend_029");
  const clay = friends.find((friend) => friend.friendId === "friend_030");
  const basil = friends.find((friend) => friend.friendId === "friend_031");
  const fig = friends.find((friend) => friend.friendId === "friend_032");
  const plum = friends.find((friend) => friend.friendId === "friend_033");
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
      friend.friendId !== "friend_012" &&
      friend.friendId !== "friend_013" &&
      friend.friendId !== "friend_014" &&
      friend.friendId !== "friend_015" &&
      friend.friendId !== "friend_016" &&
      friend.friendId !== "friend_017" &&
      friend.friendId !== "friend_018" &&
      friend.friendId !== "friend_019" &&
      friend.friendId !== "friend_020" &&
      friend.friendId !== "friend_021" &&
      friend.friendId !== "friend_022" &&
      friend.friendId !== "friend_023" &&
      friend.friendId !== "friend_024" &&
      friend.friendId !== "friend_025" &&
      friend.friendId !== "friend_026" &&
      friend.friendId !== "friend_027" &&
      friend.friendId !== "friend_028" &&
      friend.friendId !== "friend_029" &&
      friend.friendId !== "friend_030" &&
      friend.friendId !== "friend_031" &&
      friend.friendId !== "friend_032" &&
      friend.friendId !== "friend_033",
  );

  return (
    <div
      className="yard-scene relative mx-auto aspect-square w-full max-w-[min(100%,28rem)] overflow-visible"
      data-crowd={friends.length >= 12 ? "dense" : "open"}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/ui/yard_iso.svg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      />

      <FurnitureImg file="fence" className="absolute left-[6%] top-[14%] w-[56%]" />
      <FurnitureImg file="postBell" className="absolute right-[12%] top-[16%] w-[22%]" />
      {hasFountain ? (
        <FurnitureImg
          file="fountain"
          className={`absolute left-[10%] top-[38%] w-[24%] ${furnPop(highlightSku, "furn_fountain_stone")}`}
        />
      ) : null}
      {hasPerch ? (
        <FurnitureImg
          file="swing"
          className={`absolute right-[28%] top-[12%] w-[18%] ${furnPop(highlightSku, "furn_perch_high")}`}
        />
      ) : null}
      {hasTree ? (
        <FurnitureImg
          file="miniTree"
          className={`absolute right-[10%] top-[18%] w-[20%] ${furnPop(highlightSku, "furn_tree_mini")}`}
        />
      ) : null}
      {hasYarn ? (
        <FurnitureImg
          file="yarnSwing"
          className={`absolute left-[36%] top-[6%] w-[30%] ${furnPop(highlightSku, "furn_swing_yarn")}`}
        />
      ) : null}
      {hasBox ? (
        <FurnitureImg
          file="boxBed"
          className={`yard-drop-box absolute bottom-[16%] left-[12%] w-[46%] ${furnPop(highlightSku, "furn_box_cardboard")}`}
        />
      ) : null}
      {hasCushion ? (
        <FurnitureImg
          file="sunCushion"
          className={`yard-drop absolute left-[8%] top-[50%] w-[32%] ${furnPop(highlightSku, "furn_bed_cushion")}`}
        />
      ) : null}
      {hasScratch ? (
        <FurnitureImg
          file="scratcher"
          className={`yard-drop absolute bottom-[20%] right-[14%] w-[18%] ${furnPop(highlightSku, "furn_scratch_post")}`}
        />
      ) : null}

      {friends.length === 0 ? (
        <p className="absolute inset-x-12 top-[52%] text-center font-display text-lg text-ink/40">
          The porch is quiet.
        </p>
      ) : null}

      {mango && hasBox ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "34%", top: "62%" }}
        >
          <FriendSprite
            kit={friendById(mango.friendId)?.phenotype.artKit ?? "ginger"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === mango.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(mango.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${mango.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{mango.name}</p>
        </div>
      ) : null}

      {mist ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "8%", top: "18%" }}
        >
          <FriendSprite
            kit={friendById(mist.friendId)?.phenotype.artKit ?? "mist"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === mist.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(mist.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${mist.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{mist.name}</p>
        </div>
      ) : null}

      {pepper ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "68%", top: "14%" }}
        >
          <FriendSprite
            kit={friendById(pepper.friendId)?.phenotype.artKit ?? "pepper"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === pepper.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(pepper.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${pepper.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{pepper.name}</p>
        </div>
      ) : null}

      {noodle ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "32%", top: "80%" }}
        >
          <FriendSprite
            kit={friendById(noodle.friendId)?.phenotype.artKit ?? "noodle"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === noodle.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(noodle.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${noodle.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{noodle.name}</p>
        </div>
      ) : null}

      {clover ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "54%", top: "74%" }}
        >
          <FriendSprite
            kit={friendById(clover.friendId)?.phenotype.artKit ?? "clover"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === clover.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(clover.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${clover.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{clover.name}</p>
        </div>
      ) : null}

      {ash ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "6%", top: "70%" }}
        >
          <FriendSprite
            kit={friendById(ash.friendId)?.phenotype.artKit ?? "ash"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === ash.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(ash.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${ash.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{ash.name}</p>
        </div>
      ) : null}

      {oak ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "64%", top: "40%" }}
        >
          <FriendSprite
            kit={friendById(oak.friendId)?.phenotype.artKit ?? "oak"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === oak.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(oak.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${oak.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{oak.name}</p>
        </div>
      ) : null}
      {dumpling ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "84%", top: "54%" }}
        >
          <FriendSprite
            kit={friendById(dumpling.friendId)?.phenotype.artKit ?? "dumpling"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === dumpling.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(dumpling.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${dumpling.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{dumpling.name}</p>
        </div>
      ) : null}
      {stripe ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "38%", top: "50%" }}
        >
          <FriendSprite
            kit={friendById(stripe.friendId)?.phenotype.artKit ?? "stripe"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === stripe.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(stripe.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${stripe.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{stripe.name}</p>
        </div>
      ) : null}
      {cloud ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "22%", top: "40%" }}
        >
          <FriendSprite
            kit={friendById(cloud.friendId)?.phenotype.artKit ?? "cloud"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === cloud.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(cloud.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${cloud.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{cloud.name}</p>
        </div>
      ) : null}
      {donna ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "46%", top: "34%" }}
        >
          <FriendSprite
            kit={friendById(donna.friendId)?.phenotype.artKit ?? "donna"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === donna.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(donna.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${donna.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{donna.name}</p>
        </div>
      ) : null}
      {sunny ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "86%", top: "24%" }}
        >
          <FriendSprite
            kit={friendById(sunny.friendId)?.phenotype.artKit ?? "sunny"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === sunny.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(sunny.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${sunny.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{sunny.name}</p>
        </div>
      ) : null}
      {nigel ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "56%", top: "28%" }}
        >
          <FriendSprite
            kit={friendById(nigel.friendId)?.phenotype.artKit ?? "nigel"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === nigel.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(nigel.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${nigel.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{nigel.name}</p>
        </div>
      ) : null}
      {bean ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "30%", top: "14%" }}
        >
          <FriendSprite
            kit={friendById(bean.friendId)?.phenotype.artKit ?? "bean"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === bean.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(bean.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${bean.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{bean.name}</p>
        </div>
      ) : null}
      {velvet ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "64%", top: "52%" }}
        >
          <FriendSprite
            kit={friendById(velvet.friendId)?.phenotype.artKit ?? "velvet"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === velvet.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(velvet.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${velvet.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{velvet.name}</p>
        </div>
      ) : null}
      {coral ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "48%", top: "58%" }}
        >
          <FriendSprite
            kit={friendById(coral.friendId)?.phenotype.artKit ?? "coral"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === coral.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(coral.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${coral.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{coral.name}</p>
        </div>
      ) : null}

      {blue ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "18%", top: "58%" }}
        >
          <FriendSprite
            kit={friendById(blue.friendId)?.phenotype.artKit ?? "blue"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === blue.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(blue.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${blue.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{blue.name}</p>
        </div>
      ) : null}

      {maple ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "58%", top: "10%" }}
        >
          <FriendSprite
            kit={friendById(maple.friendId)?.phenotype.artKit ?? "maple"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === maple.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(maple.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${maple.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{maple.name}</p>
        </div>
      ) : null}

      {steve ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "40%", top: "8%" }}
        >
          <FriendSprite
            kit={friendById(steve.friendId)?.phenotype.artKit ?? "steve"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === steve.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(steve.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${steve.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{steve.name}</p>
        </div>
      ) : null}

      {cocoa ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "76%", top: "8%" }}
        >
          <FriendSprite
            kit={friendById(cocoa.friendId)?.phenotype.artKit ?? "cocoa"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === cocoa.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(cocoa.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${cocoa.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{cocoa.name}</p>
        </div>
      ) : null}


      {linen ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "88%", top: "16%" }}
        >
          <FriendSprite
            kit={friendById(linen.friendId)?.phenotype.artKit ?? "linen"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === linen.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(linen.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${linen.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{linen.name}</p>
        </div>
      ) : null}


      {juniper ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "16%", top: "8%" }}
        >
          <FriendSprite
            kit={friendById(juniper.friendId)?.phenotype.artKit ?? "juniper"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === juniper.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(juniper.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${juniper.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{juniper.name}</p>
        </div>
      ) : null}

      {ivory ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "28%", top: "6%" }}
        >
          <FriendSprite
            kit={friendById(ivory.friendId)?.phenotype.artKit ?? "ivory"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === ivory.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(ivory.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${ivory.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{ivory.name}</p>
        </div>
      ) : null}


      {clay ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "12%", top: "8%" }}
        >
          <FriendSprite
            kit={friendById(clay.friendId)?.phenotype.artKit ?? "clay"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === clay.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(clay.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${clay.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{clay.name}</p>
        </div>
      ) : null}

      {basil ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "82%", top: "6%" }}
        >
          <FriendSprite
            kit={friendById(basil.friendId)?.phenotype.artKit ?? "basil"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === basil.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(basil.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${basil.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{basil.name}</p>
        </div>
      ) : null}

      {fig ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "92%", top: "44%" }}
        >
          <FriendSprite
            kit={friendById(fig.friendId)?.phenotype.artKit ?? "fig"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === fig.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(fig.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${fig.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{fig.name}</p>
        </div>
      ) : null}

      {plum ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "70%", top: "42%" }}
        >
          <FriendSprite
            kit={friendById(plum.friendId)?.phenotype.artKit ?? "plum"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === plum.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(plum.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${plum.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{plum.name}</p>
        </div>
      ) : null}

      {shadow ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "4%", top: "32%" }}
        >
          <FriendSprite
            kit={friendById(shadow.friendId)?.phenotype.artKit ?? "shadow"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === shadow.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(shadow.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${shadow.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{shadow.name}</p>
        </div>
      ) : null}

      {pumpkin ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "78%", top: "34%" }}
        >
          <FriendSprite
            kit={friendById(pumpkin.friendId)?.phenotype.artKit ?? "pumpkin"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === pumpkin.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(pumpkin.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${pumpkin.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{pumpkin.name}</p>
        </div>
      ) : null}

      {ghost ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "48%", top: "18%" }}
        >
          <FriendSprite
            kit={friendById(ghost.friendId)?.phenotype.artKit ?? "ghost"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === ghost.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(ghost.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${ghost.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{ghost.name}</p>
        </div>
      ) : null}

      {tux ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "72%", top: "64%" }}
        >
          <FriendSprite
            kit={friendById(tux.friendId)?.phenotype.artKit ?? "tuxedo"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === tux.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(tux.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${tux.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{tux.name}</p>
        </div>
      ) : null}

      {biscuit && hasCushion ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "12%", top: "44%" }}
        >
          <FriendSprite
            kit={friendById(biscuit.friendId)?.phenotype.artKit ?? "cream"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === biscuit.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(biscuit.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${biscuit.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{biscuit.name}</p>
        </div>
      ) : null}

      {(mango && !hasBox ? [mango, ...others] : others).map((friend, index) => {
        const roost = ROOSTS[friend.roost % ROOSTS.length] ?? ROOSTS[index % ROOSTS.length];
        const catalog = friendById(friend.friendId);
        return (
          <div
            key={friend.instanceId}
            className="yard-drop absolute"
            style={{ width: roostW, left: roost.left, top: roost.top }}
          >
            <FriendSprite
              kit={catalog?.phenotype.artKit ?? "ginger"}
              size={px}
              className={loafClass}
            />
            {bangFriendId === friend.instanceId ? (
              <button
                type="button"
                onClick={() => onBang?.(friend.instanceId)}
                className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
                aria-label={`${friend.name} has something to say`}
              >
                <UiIcon name="bubble_bang" className="h-7 w-7" />
              </button>
            ) : null}
            <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{friend.name}</p>
          </div>
        );
      })}
    </div>
  );
}
