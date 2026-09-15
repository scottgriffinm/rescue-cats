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
  const thistle = friends.find((friend) => friend.friendId === "friend_034");
  const briar = friends.find((friend) => friend.friendId === "friend_035");
  const ivy = friends.find((friend) => friend.friendId === "friend_036");
  const nettle = friends.find((friend) => friend.friendId === "friend_037");
  const sorrel = friends.find((friend) => friend.friendId === "friend_038");
  const fennel = friends.find((friend) => friend.friendId === "friend_039");
  const chervil = friends.find((friend) => friend.friendId === "friend_040");
  const lovage = friends.find((friend) => friend.friendId === "friend_041");
  const parsley = friends.find((friend) => friend.friendId === "friend_042");
  const dill = friends.find((friend) => friend.friendId === "friend_043");
  const tarragon = friends.find((friend) => friend.friendId === "friend_044");
  const oregano = friends.find((friend) => friend.friendId === "friend_045");
  const marjoram = friends.find((friend) => friend.friendId === "friend_046");
  const thyme = friends.find((friend) => friend.friendId === "friend_047");
  const rosemary = friends.find((friend) => friend.friendId === "friend_048");
  const mint = friends.find((friend) => friend.friendId === "friend_049");
  const catnip = friends.find((friend) => friend.friendId === "friend_050");
  const lavender = friends.find((friend) => friend.friendId === "friend_051");
  const chamomile = friends.find((friend) => friend.friendId === "friend_052");
  const bergamot = friends.find((friend) => friend.friendId === "friend_053");
  const jasmine = friends.find((friend) => friend.friendId === "friend_054");
  const magnolia = friends.find((friend) => friend.friendId === "friend_055");
  const hibiscus = friends.find((friend) => friend.friendId === "friend_056");
  const gardenia = friends.find((friend) => friend.friendId === "friend_057");
  const camellia = friends.find((friend) => friend.friendId === "friend_058");
  const peony = friends.find((friend) => friend.friendId === "friend_059");
  const azalea = friends.find((friend) => friend.friendId === "friend_060");
  const dahlia = friends.find((friend) => friend.friendId === "friend_061");
  const zinnia = friends.find((friend) => friend.friendId === "friend_062");
  const aster = friends.find((friend) => friend.friendId === "friend_063");
  const iris = friends.find((friend) => friend.friendId === "friend_064");
  const orchid = friends.find((friend) => friend.friendId === "friend_065");
  const lotus = friends.find((friend) => friend.friendId === "friend_066");
  const poppy = friends.find((friend) => friend.friendId === "friend_067");
  const tulip = friends.find((friend) => friend.friendId === "friend_068");
  const violet = friends.find((friend) => friend.friendId === "friend_069");
  const lily = friends.find((friend) => friend.friendId === "friend_070");
  const crocus = friends.find((friend) => friend.friendId === "friend_071");
  const hyacinth = friends.find((friend) => friend.friendId === "friend_072");
  const foxglove = friends.find((friend) => friend.friendId === "friend_073");
  const bluebell = friends.find((friend) => friend.friendId === "friend_074");
  const snapdragon = friends.find((friend) => friend.friendId === "friend_075");
  const marigold = friends.find((friend) => friend.friendId === "friend_076");
  const heather = friends.find((friend) => friend.friendId === "friend_077");
  const primrose = friends.find((friend) => friend.friendId === "friend_078");
  const buttercup = friends.find((friend) => friend.friendId === "friend_079");
  const cosmos = friends.find((friend) => friend.friendId === "friend_080");
  const clematis = friends.find((friend) => friend.friendId === "friend_081");
  const wisteria = friends.find((friend) => friend.friendId === "friend_082");
  const anemone = friends.find((friend) => friend.friendId === "friend_083");
  const begonia = friends.find((friend) => friend.friendId === "friend_084");
  const ranunculus = friends.find((friend) => friend.friendId === "friend_085");
  const freesia = friends.find((friend) => friend.friendId === "friend_086");
  const geranium = friends.find((friend) => friend.friendId === "friend_087");
  const nasturtium = friends.find((friend) => friend.friendId === "friend_088");
  const petunia = friends.find((friend) => friend.friendId === "friend_089");
  const pansy = friends.find((friend) => friend.friendId === "friend_090");
  const verbena = friends.find((friend) => friend.friendId === "friend_091");
  const impatiens = friends.find((friend) => friend.friendId === "friend_092");
  const salvia = friends.find((friend) => friend.friendId === "friend_093");
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
      friend.friendId !== "friend_033" &&
      friend.friendId !== "friend_034" &&
      friend.friendId !== "friend_035" &&
      friend.friendId !== "friend_036" &&
      friend.friendId !== "friend_037" &&
      friend.friendId !== "friend_038" &&
      friend.friendId !== "friend_039" &&
      friend.friendId !== "friend_040" &&
      friend.friendId !== "friend_041" &&
      friend.friendId !== "friend_042" &&
      friend.friendId !== "friend_043" &&
      friend.friendId !== "friend_044" &&
      friend.friendId !== "friend_045" &&
      friend.friendId !== "friend_046" &&
      friend.friendId !== "friend_047" &&
      friend.friendId !== "friend_048" &&
      friend.friendId !== "friend_049" &&
      friend.friendId !== "friend_050" &&
      friend.friendId !== "friend_051" &&
      friend.friendId !== "friend_052" &&
      friend.friendId !== "friend_053" &&
      friend.friendId !== "friend_054" &&
      friend.friendId !== "friend_055" &&
      friend.friendId !== "friend_056" &&
      friend.friendId !== "friend_057" &&
      friend.friendId !== "friend_058" &&
      friend.friendId !== "friend_059" &&
      friend.friendId !== "friend_060" &&
      friend.friendId !== "friend_061" &&
      friend.friendId !== "friend_062" &&
      friend.friendId !== "friend_063" &&
      friend.friendId !== "friend_064" &&
      friend.friendId !== "friend_065" &&
      friend.friendId !== "friend_066" &&
      friend.friendId !== "friend_067" &&
      friend.friendId !== "friend_068" &&
      friend.friendId !== "friend_069" &&
      friend.friendId !== "friend_070" &&
      friend.friendId !== "friend_071" &&
      friend.friendId !== "friend_072" &&
      friend.friendId !== "friend_073" &&
      friend.friendId !== "friend_074" &&
      friend.friendId !== "friend_075" &&
      friend.friendId !== "friend_076" &&
      friend.friendId !== "friend_077" &&
      friend.friendId !== "friend_078" &&
      friend.friendId !== "friend_079" &&
      friend.friendId !== "friend_080" &&
      friend.friendId !== "friend_081" &&
      friend.friendId !== "friend_082" &&
      friend.friendId !== "friend_083" &&
      friend.friendId !== "friend_084" &&
      friend.friendId !== "friend_085" &&
      friend.friendId !== "friend_086" &&
      friend.friendId !== "friend_087" &&
      friend.friendId !== "friend_088" &&
      friend.friendId !== "friend_089" &&
      friend.friendId !== "friend_090" &&
      friend.friendId !== "friend_091" &&
      friend.friendId !== "friend_092" &&
      friend.friendId !== "friend_093",
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

      {thistle ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "8%", top: "26%" }}
        >
          <FriendSprite
            kit={friendById(thistle.friendId)?.phenotype.artKit ?? "thistle"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === thistle.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(thistle.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${thistle.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{thistle.name}</p>
        </div>
      ) : null}

      {briar ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "36%", top: "22%" }}
        >
          <FriendSprite
            kit={friendById(briar.friendId)?.phenotype.artKit ?? "briar"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === briar.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(briar.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${briar.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{briar.name}</p>
        </div>
      ) : null}

      {ivy ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "62%", top: "16%" }}
        >
          <FriendSprite
            kit={friendById(ivy.friendId)?.phenotype.artKit ?? "ivy"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === ivy.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(ivy.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${ivy.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{ivy.name}</p>
        </div>
      ) : null}

      {nettle ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "78%", top: "20%" }}
        >
          <FriendSprite
            kit={friendById(nettle.friendId)?.phenotype.artKit ?? "nettle"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === nettle.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(nettle.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${nettle.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{nettle.name}</p>
        </div>
      ) : null}

      {sorrel ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "42%", top: "86%" }}
        >
          <FriendSprite
            kit={friendById(sorrel.friendId)?.phenotype.artKit ?? "sorrel"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === sorrel.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(sorrel.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${sorrel.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{sorrel.name}</p>
        </div>
      ) : null}

      {fennel ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "18%", top: "84%" }}
        >
          <FriendSprite
            kit={friendById(fennel.friendId)?.phenotype.artKit ?? "fennel"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === fennel.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(fennel.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${fennel.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{fennel.name}</p>
        </div>
      ) : null}

      {chervil ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "72%", top: "84%" }}
        >
          <FriendSprite
            kit={friendById(chervil.friendId)?.phenotype.artKit ?? "chervil"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === chervil.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(chervil.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${chervil.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{chervil.name}</p>
        </div>
      ) : null}

      {lovage ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "88%", top: "80%" }}
        >
          <FriendSprite
            kit={friendById(lovage.friendId)?.phenotype.artKit ?? "lovage"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === lovage.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(lovage.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${lovage.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{lovage.name}</p>
        </div>
      ) : null}

      {parsley ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "24%", top: "88%" }}
        >
          <FriendSprite
            kit={friendById(parsley.friendId)?.phenotype.artKit ?? "parsley"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === parsley.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(parsley.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${parsley.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{parsley.name}</p>
        </div>
      ) : null}

      {dill ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "56%", top: "92%" }}
        >
          <FriendSprite
            kit={friendById(dill.friendId)?.phenotype.artKit ?? "dill"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === dill.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(dill.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${dill.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{dill.name}</p>
        </div>
      ) : null}

      {tarragon ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "8%", top: "94%" }}
        >
          <FriendSprite
            kit={friendById(tarragon.friendId)?.phenotype.artKit ?? "tarragon"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === tarragon.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(tarragon.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${tarragon.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{tarragon.name}</p>
        </div>
      ) : null}

      {oregano ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "80%", top: "94%" }}
        >
          <FriendSprite
            kit={friendById(oregano.friendId)?.phenotype.artKit ?? "oregano"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === oregano.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(oregano.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${oregano.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{oregano.name}</p>
        </div>
      ) : null}

      {marjoram ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "34%", top: "96%" }}
        >
          <FriendSprite
            kit={friendById(marjoram.friendId)?.phenotype.artKit ?? "marjoram"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === marjoram.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(marjoram.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${marjoram.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{marjoram.name}</p>
        </div>
      ) : null}

      {thyme ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "62%", top: "98%" }}
        >
          <FriendSprite
            kit={friendById(thyme.friendId)?.phenotype.artKit ?? "thyme"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === thyme.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(thyme.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${thyme.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{thyme.name}</p>
        </div>
      ) : null}

      {rosemary ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "86%", top: "96%" }}
        >
          <FriendSprite
            kit={friendById(rosemary.friendId)?.phenotype.artKit ?? "rosemary"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === rosemary.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(rosemary.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${rosemary.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{rosemary.name}</p>
        </div>
      ) : null}

      {mint ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "38%", top: "98%" }}
        >
          <FriendSprite
            kit={friendById(mint.friendId)?.phenotype.artKit ?? "mint"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === mint.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(mint.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${mint.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{mint.name}</p>
        </div>
      ) : null}

      {catnip ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "18%", top: "99%" }}
        >
          <FriendSprite
            kit={friendById(catnip.friendId)?.phenotype.artKit ?? "catnip"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === catnip.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(catnip.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${catnip.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{catnip.name}</p>
        </div>
      ) : null}

      {lavender ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "72%", top: "86%" }}
        >
          <FriendSprite
            kit={friendById(lavender.friendId)?.phenotype.artKit ?? "lavender"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === lavender.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(lavender.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${lavender.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{lavender.name}</p>
        </div>
      ) : null}

      {chamomile ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "50%", top: "97%" }}
        >
          <FriendSprite
            kit={friendById(chamomile.friendId)?.phenotype.artKit ?? "chamomile"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === chamomile.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(chamomile.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${chamomile.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{chamomile.name}</p>
        </div>
      ) : null}

      {bergamot ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "66%", top: "99%" }}
        >
          <FriendSprite
            kit={friendById(bergamot.friendId)?.phenotype.artKit ?? "bergamot"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === bergamot.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(bergamot.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${bergamot.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{bergamot.name}</p>
        </div>
      ) : null}

      {jasmine ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "34%", top: "99%" }}
        >
          <FriendSprite
            kit={friendById(jasmine.friendId)?.phenotype.artKit ?? "jasmine"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === jasmine.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(jasmine.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${jasmine.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{jasmine.name}</p>
        </div>
      ) : null}

      {magnolia ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "8%", top: "99%" }}
        >
          <FriendSprite
            kit={friendById(magnolia.friendId)?.phenotype.artKit ?? "magnolia"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === magnolia.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(magnolia.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${magnolia.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{magnolia.name}</p>
        </div>
      ) : null}

      {hibiscus ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "92%", top: "99%" }}
        >
          <FriendSprite
            kit={friendById(hibiscus.friendId)?.phenotype.artKit ?? "hibiscus"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === hibiscus.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(hibiscus.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${hibiscus.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{hibiscus.name}</p>
        </div>
      ) : null}

      {gardenia ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "78%", top: "101%" }}
        >
          <FriendSprite
            kit={friendById(gardenia.friendId)?.phenotype.artKit ?? "gardenia"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === gardenia.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(gardenia.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${gardenia.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{gardenia.name}</p>
        </div>
      ) : null}

      {camellia ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "96%", top: "102%" }}
        >
          <FriendSprite
            kit={friendById(camellia.friendId)?.phenotype.artKit ?? "camellia"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === camellia.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(camellia.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${camellia.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{camellia.name}</p>
        </div>
      ) : null}

      {peony ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "6%", top: "108%" }}
        >
          <FriendSprite
            kit={friendById(peony.friendId)?.phenotype.artKit ?? "peony"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === peony.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(peony.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${peony.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{peony.name}</p>
        </div>
      ) : null}

      {azalea ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "48%", top: "110%" }}
        >
          <FriendSprite
            kit={friendById(azalea.friendId)?.phenotype.artKit ?? "azalea"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === azalea.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(azalea.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${azalea.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{azalea.name}</p>
        </div>
      ) : null}

      {dahlia ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "78%", top: "114%" }}
        >
          <FriendSprite
            kit={friendById(dahlia.friendId)?.phenotype.artKit ?? "dahlia"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === dahlia.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(dahlia.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${dahlia.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{dahlia.name}</p>
        </div>
      ) : null}

      {zinnia ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "28%", top: "118%" }}
        >
          <FriendSprite
            kit={friendById(zinnia.friendId)?.phenotype.artKit ?? "zinnia"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === zinnia.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(zinnia.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${zinnia.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{zinnia.name}</p>
        </div>
      ) : null}

      {aster ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "58%", top: "120%" }}
        >
          <FriendSprite
            kit={friendById(aster.friendId)?.phenotype.artKit ?? "aster"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === aster.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(aster.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${aster.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{aster.name}</p>
        </div>
      ) : null}

      {iris ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "88%", top: "122%" }}
        >
          <FriendSprite
            kit={friendById(iris.friendId)?.phenotype.artKit ?? "iris"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === iris.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(iris.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${iris.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{iris.name}</p>
        </div>
      ) : null}

      {orchid ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "42%", top: "124%" }}
        >
          <FriendSprite
            kit={friendById(orchid.friendId)?.phenotype.artKit ?? "orchid"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === orchid.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(orchid.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${orchid.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{orchid.name}</p>
        </div>
      ) : null}

      {lotus ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "72%", top: "126%" }}
        >
          <FriendSprite
            kit={friendById(lotus.friendId)?.phenotype.artKit ?? "lotus"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === lotus.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(lotus.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${lotus.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{lotus.name}</p>
        </div>
      ) : null}

      {poppy ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "22%", top: "128%" }}
        >
          <FriendSprite
            kit={friendById(poppy.friendId)?.phenotype.artKit ?? "poppy"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === poppy.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(poppy.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${poppy.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{poppy.name}</p>
        </div>
      ) : null}

      {tulip ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "48%", top: "130%" }}
        >
          <FriendSprite
            kit={friendById(tulip.friendId)?.phenotype.artKit ?? "tulip"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === tulip.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(tulip.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${tulip.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{tulip.name}</p>
        </div>
      ) : null}

      {violet ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "74%", top: "132%" }}
        >
          <FriendSprite
            kit={friendById(violet.friendId)?.phenotype.artKit ?? "violet"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === violet.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(violet.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${violet.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{violet.name}</p>
        </div>
      ) : null}

      {lily ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "22%", top: "134%" }}
        >
          <FriendSprite
            kit={friendById(lily.friendId)?.phenotype.artKit ?? "lily"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === lily.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(lily.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${lily.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{lily.name}</p>
        </div>
      ) : null}

      {crocus ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "48%", top: "136%" }}
        >
          <FriendSprite
            kit={friendById(crocus.friendId)?.phenotype.artKit ?? "crocus"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === crocus.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(crocus.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${crocus.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{crocus.name}</p>
        </div>
      ) : null}

      {hyacinth ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "74%", top: "138%" }}
        >
          <FriendSprite
            kit={friendById(hyacinth.friendId)?.phenotype.artKit ?? "hyacinth"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === hyacinth.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(hyacinth.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${hyacinth.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{hyacinth.name}</p>
        </div>
      ) : null}

      {foxglove ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "22%", top: "140%" }}
        >
          <FriendSprite
            kit={friendById(foxglove.friendId)?.phenotype.artKit ?? "foxglove"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === foxglove.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(foxglove.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${foxglove.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{foxglove.name}</p>
        </div>
      ) : null}

      {bluebell ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "48%", top: "144%" }}
        >
          <FriendSprite
            kit={friendById(bluebell.friendId)?.phenotype.artKit ?? "bluebell"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === bluebell.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(bluebell.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${bluebell.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{bluebell.name}</p>
        </div>
      ) : null}

      {snapdragon ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "74%", top: "142%" }}
        >
          <FriendSprite
            kit={friendById(snapdragon.friendId)?.phenotype.artKit ?? "snapdragon"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === snapdragon.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(snapdragon.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${snapdragon.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{snapdragon.name}</p>
        </div>
      ) : null}

      {marigold ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "96%", top: "146%" }}
        >
          <FriendSprite
            kit={friendById(marigold.friendId)?.phenotype.artKit ?? "marigold"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === marigold.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(marigold.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${marigold.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{marigold.name}</p>
        </div>
      ) : null}

      {heather ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "12%", top: "152%" }}
        >
          <FriendSprite
            kit={friendById(heather.friendId)?.phenotype.artKit ?? "heather"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === heather.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(heather.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${heather.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{heather.name}</p>
        </div>
      ) : null}

      {primrose ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "48%", top: "156%" }}
        >
          <FriendSprite
            kit={friendById(primrose.friendId)?.phenotype.artKit ?? "primrose"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === primrose.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(primrose.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${primrose.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{primrose.name}</p>
        </div>
      ) : null}

      {buttercup ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "74%", top: "158%" }}
        >
          <FriendSprite
            kit={friendById(buttercup.friendId)?.phenotype.artKit ?? "buttercup"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === buttercup.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(buttercup.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${buttercup.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{buttercup.name}</p>
        </div>
      ) : null}

      {cosmos ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "36%", top: "168%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/furniture/cosmosStem.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[-18%] h-10 w-7 -translate-x-1/2 select-none"
          />
          <FriendSprite
            kit={friendById(cosmos.friendId)?.phenotype.artKit ?? "cosmos"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === cosmos.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(cosmos.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${cosmos.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{cosmos.name}</p>
        </div>
      ) : null}

      {clematis ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "14%", top: "178%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/furniture/clematisTrellis.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[-18%] h-10 w-7 -translate-x-1/2 select-none"
          />
          <FriendSprite
            kit={friendById(clematis.friendId)?.phenotype.artKit ?? "clematis"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === clematis.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(clematis.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${clematis.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{clematis.name}</p>
        </div>
      ) : null}

      {wisteria ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "58%", top: "188%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/furniture/wisteriaArbor.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[-18%] h-10 w-7 -translate-x-1/2 select-none"
          />
          <FriendSprite
            kit={friendById(wisteria.friendId)?.phenotype.artKit ?? "wisteria"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === wisteria.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(wisteria.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${wisteria.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{wisteria.name}</p>
        </div>
      ) : null}

      {anemone ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "80%", top: "194%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/furniture/anemoneBowl.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[-8%] h-8 w-8 -translate-x-1/2 select-none"
          />
          <FriendSprite
            kit={friendById(anemone.friendId)?.phenotype.artKit ?? "anemone"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === anemone.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(anemone.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${anemone.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{anemone.name}</p>
        </div>
      ) : null}

      {begonia ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "22%", top: "204%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/furniture/begoniaPlanter.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[-8%] h-8 w-8 -translate-x-1/2 select-none"
          />
          <FriendSprite
            kit={friendById(begonia.friendId)?.phenotype.artKit ?? "begonia"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === begonia.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(begonia.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${begonia.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{begonia.name}</p>
        </div>
      ) : null}

      {ranunculus ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "40%", top: "216%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/furniture/ranunculusNest.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[-8%] h-8 w-8 -translate-x-1/2 select-none"
          />
          <FriendSprite
            kit={friendById(ranunculus.friendId)?.phenotype.artKit ?? "ranunculus"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === ranunculus.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(ranunculus.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${ranunculus.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{ranunculus.name}</p>
        </div>
      ) : null}

      {freesia ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "62%", top: "228%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/furniture/freesiaVase.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[-8%] h-8 w-8 -translate-x-1/2 select-none"
          />
          <FriendSprite
            kit={friendById(freesia.friendId)?.phenotype.artKit ?? "freesia"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === freesia.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(freesia.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${freesia.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{freesia.name}</p>
        </div>
      ) : null}

      {geranium ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "18%", top: "240%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/furniture/geraniumSill.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[-8%] h-8 w-8 -translate-x-1/2 select-none"
          />
          <FriendSprite
            kit={friendById(geranium.friendId)?.phenotype.artKit ?? "geranium"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === geranium.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(geranium.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${geranium.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{geranium.name}</p>
        </div>
      ) : null}

      {nasturtium ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "48%", top: "252%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/furniture/nasturtiumTray.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[-8%] h-8 w-8 -translate-x-1/2 select-none"
          />
          <FriendSprite
            kit={friendById(nasturtium.friendId)?.phenotype.artKit ?? "nasturtium"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === nasturtium.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(nasturtium.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${nasturtium.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{nasturtium.name}</p>
        </div>
      ) : null}

      {petunia ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "72%", top: "252%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/furniture/petuniaBasket.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[-8%] h-8 w-8 -translate-x-1/2 select-none"
          />
          <FriendSprite
            kit={friendById(petunia.friendId)?.phenotype.artKit ?? "petunia"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === petunia.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(petunia.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${petunia.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{petunia.name}</p>
        </div>
      ) : null}

      {pansy ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "24%", top: "264%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/furniture/pansySaucer.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[-8%] h-8 w-8 -translate-x-1/2 select-none"
          />
          <FriendSprite
            kit={friendById(pansy.friendId)?.phenotype.artKit ?? "pansy"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === pansy.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(pansy.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${pansy.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{pansy.name}</p>
        </div>
      ) : null}

      {verbena ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "52%", top: "276%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/furniture/verbenaPot.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[-8%] h-8 w-8 -translate-x-1/2 select-none"
          />
          <FriendSprite
            kit={friendById(verbena.friendId)?.phenotype.artKit ?? "verbena"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === verbena.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(verbena.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${verbena.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{verbena.name}</p>
        </div>
      ) : null}

      {impatiens ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "78%", top: "288%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/furniture/impatiensBox.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[-8%] h-8 w-8 -translate-x-1/2 select-none"
          />
          <FriendSprite
            kit={friendById(impatiens.friendId)?.phenotype.artKit ?? "impatiens"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === impatiens.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(impatiens.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${impatiens.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{impatiens.name}</p>
        </div>
      ) : null}

      {salvia ? (
        <div
          className="yard-drop absolute"
          style={{ width: roostW, left: "26%", top: "300%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/furniture/salviaTorch.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[-8%] h-8 w-8 -translate-x-1/2 select-none"
          />
          <FriendSprite
            kit={friendById(salvia.friendId)?.phenotype.artKit ?? "salvia"}
            size={px}
            className={loafClass}
          />
          {bangFriendId === salvia.instanceId ? (
            <button
              type="button"
              onClick={() => onBang?.(salvia.instanceId)}
              className="yard-bang absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-[72%] place-items-center"
              aria-label={`${salvia.name} has something to say`}
            >
              <UiIcon name="bubble_bang" className="h-7 w-7" />
            </button>
          ) : null}
          <p className="yard-roost-name text-center font-display text-[11px] leading-none text-ink/70">{salvia.name}</p>
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
