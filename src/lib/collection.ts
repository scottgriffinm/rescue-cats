import pack from "../../data/collection_CURRENT.json";
import { ART_KIT_PATH } from "./constants";
import { PITY } from "./pity";
import type { ArtKit, BoardColor, CatalogFriend, FurnitureSKU, Phenotype } from "./types";

type RawFriend = (typeof pack.first_20_cats)[number];

function artKit(raw: string | undefined): ArtKit {
  if (raw === "ginger" || raw === "cream" || raw === "slate" || raw === "calico") {
    return raw;
  }
  return "cream";
}

function boardColorFromCoat(color: string): BoardColor {
  const lower = color.toLowerCase();
  if (lower === "black") return "black";
  if (lower === "gray" || lower === "grey") return "gray";
  return "orange";
}

function toFriend(raw: RawFriend): CatalogFriend {
  const kit = artKit(raw.art_kit);
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
    unlockClear: raw.unlock_clear,
    displayLine: raw.display_line,
    tier: raw.tier,
    phenotype,
  };
}

export const NAMING = pack.naming_modal;
export const FIRST_FRIEND_ID = pack.first_friend.friend_id;

export const CATALOG: CatalogFriend[] = pack.first_20_cats.map(toFriend);

export const FURNITURE: FurnitureSKU[] = pack.starter_furniture.map((sku) => ({
  skuId: sku.sku_id,
  name: sku.name,
  category: sku.category,
  hearts: sku.hearts,
  comfort: sku.comfort,
  grantOnClear: sku.grant_on_clear,
  asset: sku.asset,
}));

export const STAR_COSMETICS = pack.star_cosmetics;

/** First five rescues — Collection bible v0 tutorial parade (C/B, Regular body). */
export const TUTORIAL_RESCUES = CATALOG.slice(0, 5);

export const ONBOARDING_FURNITURE = ["furn_tree_mini"] as const;

/** Re-export bible pity stubs so Collection Lead can find them next to cadence. */
export const COLLECTION_PITY = PITY;

export function friendById(id: string) {
  return CATALOG.find((friend) => friend.friendId === id);
}

export function friendForClear(clearIndex: number): CatalogFriend | undefined {
  if (clearIndex <= 60 && clearIndex % 3 === 0) {
    return CATALOG[clearIndex / 3 - 1];
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

/** CEO lock: soft Hearts only — no packs, no IAP hooks. */
export const COLLECTION_LOCKS: import("./types").CollectionLocks = {
  economy: { currency: "soft_hearts", heartPacks: false, iap: false },
  naming: { allowDuplicateNames: true, autoMergeCommons: false },
  ssRarity: { source: "milestones", seasonalCalendar: false, randomSsWeight: 0 },
};

/**
 * Always append a new FriendInstance. Duplicate display names are allowed;
 * commons are never merged (CEO naming lock).
 */
export function assertDuplicateNamesAllowed() {
  return COLLECTION_LOCKS.naming.allowDuplicateNames && !COLLECTION_LOCKS.naming.autoMergeCommons;
}
