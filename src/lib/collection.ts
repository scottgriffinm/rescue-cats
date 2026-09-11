import pack from "../../data/collection_CURRENT.json";
import chapter2 from "../../data/chapter2_ink_shop_bang.json";
import chapter3 from "../../data/chapter3_biscuit_bang.json";
import chapter3Tux from "../../data/chapter3_tux_bang.json";
import chapter3Ghost from "../../data/chapter3_ghost_bang.json";
import { ART_KIT_PATH } from "./constants";
import { PITY } from "./pity";
import type { ArtKit, BoardColor, CatalogFriend, FurnitureSKU, Phenotype } from "./types";

type RawFriend = (typeof pack.first_20_cats)[number];
type RawSku = (typeof pack.starter_furniture)[number];

const FALLBACK_ASSETS: Record<string, string> = {
  furn_box_cardboard: "/assets/furniture/boxBed.svg",
  furn_bed_cushion: "/assets/furniture/sunCushion.svg",
  furn_scratch_post: "/assets/furniture/scratcher.svg",
  furn_tree_mini: "/assets/furniture/miniTree.svg",
  furn_swing_yarn: "/assets/furniture/yarnSwing.svg",
  furn_fountain_stone: "/assets/furniture/fountain.svg",
  furn_perch_high: "/assets/furniture/swing.svg",
};

/** Safety: ignore stale unlock_clear 1/2 if they ever reappear. */
function unlockClearFor(raw: RawFriend, index: number) {
  const stated = raw.unlock_clear;
  if (stated === 1 || stated === 2) return (index + 1) * 3;
  if (stated > 0) return stated;
  return (index + 1) * 3;
}

function artKit(raw: string | undefined, color: string, pattern: string): ArtKit {
  if (
    raw === "ginger" ||
    raw === "cream" ||
    raw === "slate" ||
    raw === "calico" ||
    raw === "tuxedo" ||
    raw === "ghost"
  ) {
    return raw;
  }
  if (pattern.toLowerCase() === "calico") return "calico";
  if (color === "Orange") return "ginger";
  if (color === "Gray" || color === "Black") return "slate";
  return "cream";
}

function boardColorFromCoat(color: string): BoardColor {
  const lower = color.toLowerCase();
  if (lower === "black") return "black";
  if (lower === "gray" || lower === "grey") return "gray";
  return "orange";
}

function toFriend(raw: RawFriend, index: number): CatalogFriend {
  const isInk = raw.friend_id === chapter2.friend_id;
  const isBiscuit = raw.friend_id === chapter3.friend_id;
  const isTux = raw.friend_id === chapter3Tux.friend_id;
  const isGhost = raw.friend_id === chapter3Ghost.friend_id;
  const kit = artKit(raw.art_kit, raw.color, raw.pattern);
  const phenotype: Phenotype = {
    phenotypeId: raw.phenotype_id,
    breed: raw.breed,
    color: raw.color,
    pattern: raw.pattern,
    body: raw.body,
    tail: raw.tail,
    eyes: raw.eyes,
    eyeAccent: raw.eyes,
    personality: isInk
      ? chapter2.personality
      : isBiscuit
        ? chapter3.personality
        : isTux
          ? chapter3Tux.personality
          : isGhost
            ? chapter3Ghost.personality
            : raw.personality,
    // CURRENT lists friend_004 as calico; Tux is the first tuxedo loaf, not calico.
    artKit: isInk
      ? "slate"
      : isBiscuit
        ? "cream"
        : isTux
          ? "tuxedo"
          : isGhost
            ? "ghost"
            : kit,
    boardColor: isInk
      ? "gray"
      : isBiscuit
        ? "orange"
        : isTux
          ? "black"
          : isGhost
            ? "gray"
            : boardColorFromCoat(raw.color),
  };
  return {
    friendId: raw.friend_id,
    defaultName: raw.default_name,
    unlockClear: unlockClearFor(raw, index),
    displayLine: isInk
      ? chapter2.display_line
      : isBiscuit
        ? chapter3.display_line
        : isTux
          ? chapter3Tux.display_line
          : isGhost
            ? chapter3Ghost.display_line
            : raw.display_line,
    tier: raw.tier,
    phenotype,
  };
}

function skuAsset(sku: RawSku) {
  if ("asset" in sku && typeof sku.asset === "string") return sku.asset;
  return FALLBACK_ASSETS[sku.sku_id] ?? "/assets/furniture/boxBed.svg";
}

export const NAMING = pack.naming_modal;
export const FIRST_FRIEND_ID = pack.first_friend.friend_id;
export const COLLECTION_VERSION = pack.version;
export const CHAPTER2 = chapter2;
export const CHAPTER3 = chapter3;
export const CHAPTER3_TUX = chapter3Tux;
export const CHAPTER3_GHOST = chapter3Ghost;
export const INK_FRIEND_ID = chapter2.friend_id;
export const BISCUIT_FRIEND_ID = chapter3.friend_id;
export const TUX_FRIEND_ID = chapter3Tux.friend_id;
export const GHOST_FRIEND_ID = chapter3Ghost.friend_id;
export const SHOP_STARTER = chapter2.shop_starter;
export const BISCUIT_GIFT = chapter3.gift;

export const CATALOG: CatalogFriend[] = pack.first_20_cats.map((raw, index) =>
  toFriend(raw, index),
);

const SHOP_ITEMS = CHAPTER2.shop.items;

export const FURNITURE: FurnitureSKU[] = pack.starter_furniture.map((sku) => {
  const shop = SHOP_ITEMS.find((item) => item.sku_id === sku.sku_id);
  const giftArt = sku.sku_id === chapter3.gift.sku_id ? chapter3.gift.asset : undefined;
  return {
    skuId: sku.sku_id,
    name: sku.name,
    category: sku.category,
    hearts: shop?.hearts ?? sku.hearts,
    comfort: sku.comfort,
    grantOnClear: "grant_on_clear" in sku ? sku.grant_on_clear : undefined,
    shopUnlockClear: shop?.unlock_clear,
    asset: giftArt ?? shop?.asset ?? skuAsset(sku),
  };
});

export const STAR_COSMETICS = pack.star_cosmetics;

export const TUTORIAL_RESCUES = CATALOG.slice(0, 5);

export const ONBOARDING_FURNITURE = pack.starter_furniture
  .filter((sku) => "onboarding" in sku && sku.onboarding)
  .map((sku) => sku.sku_id);

export const COLLECTION_PITY = PITY;

export function friendById(id: string) {
  return CATALOG.find((friend) => friend.friendId === id);
}

/** CEO freeze — CURRENT is correct. NO Pebble. Mango@3 / Ink@6 / Biscuit@9 / Tux@12 / Ghost@15. */
export const SLICE_UNLOCKS: Record<number, string> = {
  3: "friend_001",
  6: "friend_002",
  9: "friend_003",
  12: "friend_004",
  15: "friend_005",
};

/** CURRENT: cat n at clear 3*n. Slice table covers 3/6/9/12/15; later rows follow CURRENT as-is. */
export function friendForClear(clearIndex: number): CatalogFriend | undefined {
  if (clearIndex < 3) return undefined;
  const locked = SLICE_UNLOCKS[clearIndex];
  if (locked) return friendById(locked);
  return CATALOG.find((friend) => friend.unlockClear === clearIndex);
}

/** Friends the live campaign actually awards. Pumpkin@24 stays in CURRENT for a later slice. */
export function shippedFriendForClear(clearIndex: number): CatalogFriend | undefined {
  const locked = SLICE_UNLOCKS[clearIndex];
  return locked ? friendById(locked) : undefined;
}

/** Mango unlock gifts the box only. Clear 6 (Ink) gifts nothing. Clear 9 gifts the Sun Cushion. Clear 12 and 15 gift nothing. */
export function furnitureGiftsForClear(clearIndex: number) {
  if (clearIndex === 6 || clearIndex === 12 || clearIndex === 15) return [];
  const gifts = FURNITURE.filter((sku) => sku.grantOnClear === clearIndex);
  if (clearIndex === 3) {
    return gifts.filter((sku) => sku.skuId === "furn_box_cardboard");
  }
  if (clearIndex === 9) {
    return gifts.filter((sku) => sku.skuId === "furn_bed_cushion");
  }
  return gifts;
}

export function heartsForClear(clearIndex: number) {
  const chapterBand = CHAPTER2.hearts_by_clear_band["1-6"];
  if (clearIndex >= 1 && clearIndex <= 6) return chapterBand[0];
  const bands = pack.cadence_clears_1_30.hearts_by_clear_band;
  const pick = (range: [number, number]) => range[0];
  if (clearIndex <= 12) return pick(bands["5-12"] as [number, number]);
  if (clearIndex <= 20) return pick(bands["13-20"] as [number, number]);
  return pick(bands["21-30"] as [number, number]);
}

export function artForKit(kit: ArtKit) {
  return ART_KIT_PATH[kit];
}

export function allNameSuggestions() {
  const pools = NAMING.suggestion_pools;
  return [...pools.food, ...pools.soft, ...pools.silly_human, ...pools.breed_leaning];
}

export const NAMING_CHIPS: string[] =
  "suggestion_chips" in NAMING && Array.isArray(NAMING.suggestion_chips)
    ? NAMING.suggestion_chips
    : ["Mango", "Biscuit", "Pepper"];

/** Ink naming chips — never Misty. */
export const INK_NAMING_CHIPS: string[] = CHAPTER2.naming.suggestion_chips;

/** Biscuit naming chips — food names, never the Ink/Soft pool. */
export const BISCUIT_NAMING_CHIPS: string[] = CHAPTER3.naming.suggestion_chips;

/** Tux naming chips — tuxedo / breed-leaning, never Ink soft or Biscuit food. */
export const TUX_NAMING_CHIPS: string[] = CHAPTER3_TUX.naming.suggestion_chips;

/** Ghost naming chips — shy / ethereal, never Tux, Ink, or Biscuit pools. */
export const GHOST_NAMING_CHIPS: string[] = CHAPTER3_GHOST.naming.suggestion_chips;

export function chipsForFriend(friendId: string): string[] {
  if (friendId === INK_FRIEND_ID || friendId === "friend_002") {
    return [...INK_NAMING_CHIPS];
  }
  if (friendId === BISCUIT_FRIEND_ID || friendId === "friend_003") {
    return [...BISCUIT_NAMING_CHIPS];
  }
  if (friendId === TUX_FRIEND_ID || friendId === "friend_004") {
    return [...TUX_NAMING_CHIPS];
  }
  if (friendId === GHOST_FRIEND_ID || friendId === "friend_005") {
    return [...GHOST_NAMING_CHIPS];
  }
  const soft = CHAPTER2.personality_pools.Soft;
  if (friendById(friendId)?.phenotype.personality === "Soft") return [...soft];
  const hungry = CHAPTER2.personality_pools.Hungry;
  if (friendById(friendId)?.phenotype.personality === "Hungry") return [...hungry];
  if (friendById(friendId)?.phenotype.personality === "Formal") return [...TUX_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Shy") return [...GHOST_NAMING_CHIPS];
  return [...NAMING_CHIPS];
}

function shufflePool(pool: string[], count: number) {
  const next = [...pool];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next.slice(0, count);
}

export function shuffleNameChips(count = 3, friendId?: string) {
  if (friendId === INK_FRIEND_ID || friendId === "friend_002") {
    return shufflePool([...INK_NAMING_CHIPS], count);
  }
  if (friendId === BISCUIT_FRIEND_ID || friendId === "friend_003") {
    return shufflePool([...BISCUIT_NAMING_CHIPS], count);
  }
  if (friendId === TUX_FRIEND_ID || friendId === "friend_004") {
    return shufflePool([...TUX_NAMING_CHIPS], count);
  }
  if (friendId === GHOST_FRIEND_ID || friendId === "friend_005") {
    return shufflePool([...GHOST_NAMING_CHIPS], count);
  }
  return shufflePool([...new Set(allNameSuggestions())], count);
}

export function comfortTotal(ownedSkuIds: string[]) {
  return FURNITURE.filter((sku) => ownedSkuIds.includes(sku.skuId)).reduce(
    (sum, sku) => sum + sku.comfort,
    0,
  );
}

export function withName(template: string, name: string) {
  return template.replaceAll("{Name}", name);
}

export function bangLinesFor(friendId: string, name: string) {
  const merged = {
    ...(CHAPTER2.bang_copy as Record<string, string[]>),
    ...(CHAPTER3.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_TUX.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_GHOST.bang_copy as Record<string, string[]>),
  };
  const variants = merged[friendId] ?? [NAMING.first_night_bubble];
  return variants.map((line) => withName(line, name));
}

export function shopUnlocked(clearCount: number) {
  return clearCount >= CHAPTER2.shop.open_clear;
}

export function shopItemsForClear(clearCount: number) {
  return FURNITURE.filter(
    (sku) => sku.shopUnlockClear != null && clearCount >= sku.shopUnlockClear,
  );
}

export function favoriteToyFor(personality: string) {
  if (personality === "Hungry") return "crinkle mouse";
  if (personality === "Curious") return "paper bag";
  if (personality === "Reserved" || personality === "Soft") return "wool cave";
  if (personality === "Formal") return "bowtie";
  if (personality === "Shy") return "sunbeam";
  return "sun patch";
}

export function unlockFlagsFor(friends: { friendId: string }[]): import("./types").UnlockFlags {
  return {
    mangoNamed: friends.some((friend) => friend.friendId === FIRST_FRIEND_ID),
    porchUnlocked: true,
  };
}

export const COLLECTION_LOCKS: import("./types").CollectionLocks = {
  economy: { currency: "soft_hearts", heartPacks: false, iap: false },
  naming: { allowDuplicateNames: true, autoMergeCommons: false },
  ssRarity: { source: "milestones", seasonalCalendar: false, randomSsWeight: 0 },
};

export function assertDuplicateNamesAllowed() {
  return COLLECTION_LOCKS.naming.allowDuplicateNames && !COLLECTION_LOCKS.naming.autoMergeCommons;
}
