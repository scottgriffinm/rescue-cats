import pack from "../../data/collection_v1_pack.json";
import { ART_KIT_PATH } from "./constants";
import { PITY } from "./pity";
import type { ArtKit, BoardColor, CatalogFriend, FurnitureSKU, Phenotype } from "./types";

type RawFriend = (typeof pack.first_20_cats)[number];

const FURNITURE_ASSETS: Record<string, string> = {
  furn_box_cardboard: "/assets/furniture/boxBed.svg",
  furn_bed_cushion: "/assets/furniture/boxBed.svg",
  furn_scratch_post: "/assets/furniture/postBell.svg",
  furn_tree_mini: "/assets/furniture/swing.svg",
  furn_swing_yarn: "/assets/furniture/swing.svg",
};

/**
 * CEO cadence override for the vertical slice.
 * `collection_v1_pack.json` still says Mango @ unlock_clear 1 and a forced
 * parade on clears 1,2,3… — that JSON is conflicting. Engine ignores it.
 */
export const CEO_CADENCE = {
  firstCatClear: 3,
  first20Every: 3,
  after20Every: 5,
  furnitureGifts: {
    furn_box_cardboard: 3,
    furn_bed_cushion: 9,
  } as Record<string, number>,
} as const;

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
    // Ignore pack.unlock_clear (Mango is wrongly 1). Cat n unlocks at 3*n.
    unlockClear: (index + 1) * CEO_CADENCE.first20Every,
    displayLine: raw.display_line,
    tier: raw.tier,
    phenotype,
  };
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
  grantOnClear: CEO_CADENCE.furnitureGifts[sku.sku_id] ?? sku.grant_on_clear,
  asset: FURNITURE_ASSETS[sku.sku_id] ?? "/assets/furniture/boxBed.svg",
}));

/** Stars still buy yard cosmetics only — v1 pack has no SKU list, so keep the slice stubs. */
export const STAR_COSMETICS = [
  { id: "cosmo_marigold_bowl", name: "Marigold Bowl", stars: 6, comfort: 0 },
  { id: "cosmo_mist_lantern", name: "Mist Lantern", stars: 12, comfort: 0 },
];

/** First five rescues — Collection bible v0 tutorial parade (C/B, Regular body). */
export const TUTORIAL_RESCUES = CATALOG.slice(0, 5);

/** Mini tree stays as a free porch fixture so L1–L2 are not barren. */
export const ONBOARDING_FURNITURE = ["furn_tree_mini"] as const;

export const COLLECTION_PITY = PITY;

export function friendById(id: string) {
  return CATALOG.find((friend) => friend.friendId === id);
}

/**
 * CEO lock: no cat on clear 1 or 2. Cats 1–20 at 3,6,9,…,60.
 * After cat 20, every 5 (no rows in this slice).
 */
export function friendForClear(clearIndex: number): CatalogFriend | undefined {
  if (clearIndex < CEO_CADENCE.firstCatClear) return undefined;
  if (clearIndex <= 60 && clearIndex % CEO_CADENCE.first20Every === 0) {
    return CATALOG[clearIndex / CEO_CADENCE.first20Every - 1];
  }
  return undefined;
}

export function furnitureGiftsForClear(clearIndex: number) {
  return FURNITURE.filter((sku) => sku.grantOnClear === clearIndex);
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
  return [...pools.food, ...pools.soft, ...pools.silly_human, ...pools.breed_leaning];
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

/** Soft Hearts only — no packs, no IAP. Duplicate names always allowed. */
export const COLLECTION_LOCKS: import("./types").CollectionLocks = {
  economy: { currency: "soft_hearts", heartPacks: false, iap: false },
  naming: { allowDuplicateNames: true, autoMergeCommons: false },
  ssRarity: { source: "milestones", seasonalCalendar: false, randomSsWeight: 0 },
};

export function assertDuplicateNamesAllowed() {
  return COLLECTION_LOCKS.naming.allowDuplicateNames && !COLLECTION_LOCKS.naming.autoMergeCommons;
}
