import pack from "../../data/collection_CURRENT.json";
import { ART_KIT_PATH } from "./constants";
import { PITY } from "./pity";
import type { ArtKit, BoardColor, CatalogFriend, FurnitureSKU, Phenotype } from "./types";

type RawFriend = (typeof pack.first_20_cats)[number];
type RawSku = (typeof pack.starter_furniture)[number];

const FALLBACK_ASSETS: Record<string, string> = {
  furn_box_cardboard: "/assets/furniture/boxBed.svg",
  furn_bed_cushion: "/assets/furniture/boxBed.svg",
  furn_scratch_post: "/assets/furniture/postBell.svg",
  furn_tree_mini: "/assets/furniture/swing.svg",
  furn_swing_yarn: "/assets/furniture/swing.svg",
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
  if (raw === "ginger" || raw === "cream" || raw === "slate" || raw === "calico") {
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
    personality: raw.personality,
    artKit: kit,
    boardColor: boardColorFromCoat(raw.color),
  };
  return {
    friendId: raw.friend_id,
    defaultName: raw.default_name,
    unlockClear: unlockClearFor(raw, index),
    displayLine: raw.display_line,
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

export const CATALOG: CatalogFriend[] = pack.first_20_cats.map((raw, index) =>
  toFriend(raw, index),
);

export const FURNITURE: FurnitureSKU[] = pack.starter_furniture.map((sku) => ({
  skuId: sku.sku_id,
  name: sku.name,
  category: sku.category,
  hearts: sku.hearts,
  comfort: sku.comfort,
  grantOnClear: "grant_on_clear" in sku ? sku.grant_on_clear : undefined,
  asset: skuAsset(sku),
}));

export const STAR_COSMETICS = pack.star_cosmetics;

export const TUTORIAL_RESCUES = CATALOG.slice(0, 5);

export const ONBOARDING_FURNITURE = pack.starter_furniture
  .filter((sku) => "onboarding" in sku && sku.onboarding)
  .map((sku) => sku.sku_id);

export const COLLECTION_PITY = PITY;

export function friendById(id: string) {
  return CATALOG.find((friend) => friend.friendId === id);
}

/** CEO freeze — CURRENT is correct. NO Pebble. Mango@3 / Ink@6 / Biscuit@9. */
export const SLICE_UNLOCKS: Record<number, string> = {
  3: "friend_001",
  6: "friend_002",
  9: "friend_003",
};

/** CURRENT: cat n at clear 3*n. Slice table covers 3/6/9; later rows follow CURRENT as-is. */
export function friendForClear(clearIndex: number): CatalogFriend | undefined {
  if (clearIndex < 3) return undefined;
  const locked = SLICE_UNLOCKS[clearIndex];
  if (locked) return friendById(locked);
  return CATALOG.find((friend) => friend.unlockClear === clearIndex);
}

/** Mango unlock gifts the box only — no second gift on that clear. */
export function furnitureGiftsForClear(clearIndex: number) {
  const gifts = FURNITURE.filter((sku) => sku.grantOnClear === clearIndex);
  if (clearIndex === 3) {
    return gifts.filter((sku) => sku.skuId === "furn_box_cardboard");
  }
  return gifts;
}

export function heartsForClear(clearIndex: number) {
  const bands = pack.cadence_clears_1_30.hearts_by_clear_band;
  const pick = (range: [number, number]) => range[0];
  if (clearIndex <= 4) return pick(bands["1-4"] as [number, number]);
  if (clearIndex <= 12) return pick(bands["5-12"] as [number, number]);
  if (clearIndex <= 20) return pick(bands["13-20"] as [number, number]);
  return pick(bands["21-30"] as [number, number]);
}

export function artForKit(kit: ArtKit) {
  return ART_KIT_PATH[kit];
}

export function allNameSuggestions() {
  const pools = NAMING.suggestion_pools;
  return [...new Set(["Ink", ...pools.food, ...pools.soft, ...pools.silly_human, ...pools.breed_leaning])];
}

export const NAMING_CHIPS: string[] =
  "suggestion_chips" in NAMING && Array.isArray(NAMING.suggestion_chips)
    ? NAMING.suggestion_chips
    : ["Mango", "Biscuit", "Pepper"];

const INK_CHIPS = ["Ink", "Misty", "Shadow"];

/** Mango keeps the Bench chip set. Ink offers quiet-name chips. */
export function chipsForFriend(friendId?: string) {
  if (friendId === "friend_002") return INK_CHIPS;
  return NAMING_CHIPS;
}

/** Chapter 2 yard depth — Mango + Ink only. */
export const PARADE_SLICE = CATALOG.filter(
  (friend) => friend.friendId === "friend_001" || friend.friendId === "friend_002",
);

export const STARTER_SHOP_IDS = [
  "furn_scratch_post",
  "furn_tree_mini",
  "furn_swing_yarn",
] as const;

export const STARTER_SHOP_HEARTS: Record<string, number> = {
  furn_scratch_post: 15,
  furn_tree_mini: 40,
  furn_swing_yarn: 40,
};

export const STARTER_SHOP = STARTER_SHOP_IDS.map((skuId) => {
  const sku = FURNITURE.find((item) => item.skuId === skuId);
  if (!sku) throw new Error(`missing starter shop sku ${skuId}`);
  return { ...sku, hearts: STARTER_SHOP_HEARTS[skuId] ?? sku.hearts };
});

export const COMFORT_METER_MAX = 8;

export function shuffleNameChips(count = 3) {
  const pool = [...new Set(allNameSuggestions())];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
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

export function favoriteToyFor(personality: string) {
  if (personality === "Hungry") return "crinkle mouse";
  if (personality === "Curious") return "paper bag";
  if (personality === "Reserved") return "wool cave";
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
