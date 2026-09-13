import pack from "../../data/collection_CURRENT.json";
import chapter2 from "../../data/chapter2_ink_shop_bang.json";
import chapter3 from "../../data/chapter3_biscuit_bang.json";
import chapter3Tux from "../../data/chapter3_tux_bang.json";
import chapter3Ghost from "../../data/chapter3_ghost_bang.json";
import chapter3Mist from "../../data/chapter3_mist_bang.json";
import chapter3Pepper from "../../data/chapter3_pepper_bang.json";
import chapter3Pumpkin from "../../data/chapter3_pumpkin_bang.json";
import chapter3Shadow from "../../data/chapter3_shadow_bang.json";
import chapter3Noodle from "../../data/chapter3_noodle_bang.json";
import chapter3Clover from "../../data/chapter3_clover_bang.json";
import chapter3Ash from "../../data/chapter3_ash_bang.json";
import chapter3Oak from "../../data/chapter3_oak_bang.json";
import chapter3Dumpling from "../../data/chapter3_dumpling_bang.json";
import chapter3Stripe from "../../data/chapter3_stripe_bang.json";
import chapter3Cloud from "../../data/chapter3_cloud_bang.json";
import chapter3Donna from "../../data/chapter3_donna_bang.json";
import chapter3Sunny from "../../data/chapter3_sunny_bang.json";
import chapter3Nigel from "../../data/chapter3_nigel_bang.json";
import chapter3Bean from "../../data/chapter3_bean_bang.json";
import chapter4Velvet from "../../data/chapter4_velvet_bang.json";
import chapter4Coral from "../../data/chapter4_coral_bang.json";
import chapter4Blue from "../../data/chapter4_blue_bang.json";
import chapter4Maple from "../../data/chapter4_maple_bang.json";
import chapter4Steve from "../../data/chapter4_steve_bang.json";
import chapter4Cocoa from "../../data/chapter4_cocoa_bang.json";
import chapter4Linen from "../../data/chapter4_linen_bang.json";
import chapter4Juniper from "../../data/chapter4_juniper_bang.json";
import chapter4Ivory from "../../data/chapter4_ivory_bang.json";
import chapter4Clay from "../../data/chapter4_clay_bang.json";
import chapter4Basil from "../../data/chapter4_basil_bang.json";
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
    raw === "ghost" ||
    raw === "mist" ||
    raw === "pepper" ||
    raw === "pumpkin" ||
    raw === "shadow" ||
    raw === "noodle" ||
    raw === "clover" ||
    raw === "ash" ||
    raw === "oak" ||
    raw === "dumpling" ||
    raw === "stripe" ||
    raw === "cloud" ||
    raw === "donna" ||
    raw === "sunny" ||
    raw === "nigel" ||
    raw === "bean" ||
    raw === "velvet" ||
    raw === "coral" ||
    raw === "blue" ||
    raw === "maple" ||
    raw === "steve" ||
    raw === "cocoa" ||
    raw === "linen" ||
    raw === "juniper" ||
    raw === "ivory" ||
    raw === "clay" ||
    raw === "basil"
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
  const isMist = raw.friend_id === chapter3Mist.friend_id;
  const isPepper = raw.friend_id === chapter3Pepper.friend_id;
  const isPumpkin = raw.friend_id === chapter3Pumpkin.friend_id;
  const isShadow = raw.friend_id === chapter3Shadow.friend_id;
  const isNoodle = raw.friend_id === chapter3Noodle.friend_id;
  const isClover = raw.friend_id === chapter3Clover.friend_id;
  const isAsh = raw.friend_id === chapter3Ash.friend_id;
  const isOak = raw.friend_id === chapter3Oak.friend_id;
  const isDumpling = raw.friend_id === chapter3Dumpling.friend_id;
  const isStripe = raw.friend_id === chapter3Stripe.friend_id;
  const isCloud = raw.friend_id === chapter3Cloud.friend_id;
  const isDonna = raw.friend_id === chapter3Donna.friend_id;
  const isSunny = raw.friend_id === chapter3Sunny.friend_id;
  const isNigel = raw.friend_id === chapter3Nigel.friend_id;
  const isBean = raw.friend_id === chapter3Bean.friend_id;
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
            : isMist
              ? chapter3Mist.personality
              : isPepper
                ? chapter3Pepper.personality
                : isPumpkin
                  ? chapter3Pumpkin.personality
                  : isShadow
                    ? chapter3Shadow.personality
                    : isNoodle
                      ? chapter3Noodle.personality
                      : isClover
                        ? chapter3Clover.personality
                        : isAsh
                          ? chapter3Ash.personality
                          : isOak
                            ? chapter3Oak.personality
                            : isDumpling
                              ? chapter3Dumpling.personality
                              : isStripe
                                ? chapter3Stripe.personality
                                : isCloud
                                  ? chapter3Cloud.personality
                                  : isDonna
                                    ? chapter3Donna.personality
                                    : isSunny
                                      ? chapter3Sunny.personality
                                      : isNigel
                                        ? chapter3Nigel.personality
                                        : isBean
                                          ? chapter3Bean.personality
                                          : raw.personality,
    // CURRENT lists friend_004 as calico; Tux is the first tuxedo loaf, not calico.
    // CURRENT lists friend_006 as slate; Mist is a gray-mackerel loaf, not Ink.
    // CURRENT lists friend_007 as ginger; Pepper is a spotted orange loaf, not Mango.
    // CURRENT lists friend_008 as ginger; Pumpkin is a classic orange loaf, not Mango or Pepper.
    // CURRENT lists friend_009 as slate; Shadow is a full-black loaf, not Ink or Tux.
    // CURRENT lists friend_010 as cream; Noodle is a long cream-mackerel loaf, not Biscuit or Ghost.
    // CURRENT lists friend_011 as slate; Clover is a soft gray-spotted loaf, not Ink, Mist, or Shadow.
    // CURRENT lists friend_012 as slate; Ash is a warm hearth-ash loaf, not Ink, Mist, Shadow, or Clover.
    // CURRENT lists friend_013 as ginger; Oak is a bark-warm classic blotch loaf, not Mango, Pepper, or Pumpkin.
    // CURRENT lists friend_014 as cream; Dumpling is a plump cream-fold loaf, not Biscuit, Ghost, or Noodle.
    // CURRENT lists friend_015 as ginger; Stripe is an orange road-map mackerel loaf, not Mango, Pepper, Pumpkin, Oak, or Noodle.
    // CURRENT lists friend_016 as cream; Cloud is a puff-stack cream loaf, not Biscuit flat, Ghost cool-pale, or Dumpling fold.
    // CURRENT lists friend_017 as calico; Donna is a split-face calico loaf (kit donna), not generic calico or Tux.
    // CURRENT lists friend_018 as ginger; Sunny is a warm solid sun-patch loaf (kit sunny), not Mango, Pepper, Pumpkin, Oak, or Stripe.
    artKit: isInk
      ? "slate"
      : isBiscuit
        ? "cream"
        : isTux
          ? "tuxedo"
          : isGhost
            ? "ghost"
            : isMist
              ? "mist"
              : isPepper
                ? "pepper"
                : isPumpkin
                  ? "pumpkin"
                  : isShadow
                    ? "shadow"
                    : isNoodle
                      ? "noodle"
                      : isClover
                        ? "clover"
                        : isAsh
                          ? "ash"
                          : isOak
                            ? "oak"
                            : isDumpling
                              ? "dumpling"
                              : isStripe
                                ? "stripe"
                                : isCloud
                                  ? "cloud"
                                  : isDonna
                                    ? "donna"
                                    : isSunny
                                      ? "sunny"
                                      : isNigel
                                        ? "nigel"
                                        : isBean
                                          ? "bean"
                                          : kit,
    boardColor: isInk
      ? "gray"
      : isBiscuit
        ? "orange"
        : isTux
          ? "black"
          : isGhost
            ? "gray"
            : isMist
              ? "gray"
              : isPepper
                ? "orange"
                : isPumpkin
                  ? "orange"
                  : isShadow
                    ? "black"
                    : isNoodle
                      ? "orange"
                      : isClover
                        ? "gray"
                        : isAsh
                          ? "gray"
                          : isOak
                            ? "orange"
                            : isDumpling
                              ? "orange"
                              : isStripe
                                ? "orange"
                                : isCloud
                                  ? "orange"
                                  : isDonna
                                    ? "orange"
                                    : isSunny
                                      ? "orange"
                                      : isNigel
                                        ? "black"
                                        : isBean
                                          ? "orange"
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
            : isMist
              ? chapter3Mist.display_line
              : isPepper
                ? chapter3Pepper.display_line
                : isPumpkin
                  ? chapter3Pumpkin.display_line
                  : isShadow
                    ? chapter3Shadow.display_line
                    : isNoodle
                      ? chapter3Noodle.display_line
                      : isClover
                        ? chapter3Clover.display_line
                        : isAsh
                          ? chapter3Ash.display_line
                          : isOak
                            ? chapter3Oak.display_line
                            : isDumpling
                              ? chapter3Dumpling.display_line
                              : isStripe
                                ? chapter3Stripe.display_line
                                : isCloud
                                  ? chapter3Cloud.display_line
                                  : isDonna
                                    ? chapter3Donna.display_line
                                    : isSunny
                                      ? chapter3Sunny.display_line
                                      : isNigel
                                        ? chapter3Nigel.display_line
                                        : isBean
                                          ? chapter3Bean.display_line
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
export const CHAPTER3_MIST = chapter3Mist;
export const CHAPTER3_PEPPER = chapter3Pepper;
export const CHAPTER3_PUMPKIN = chapter3Pumpkin;
export const CHAPTER3_SHADOW = chapter3Shadow;
export const CHAPTER3_NOODLE = chapter3Noodle;
export const CHAPTER3_CLOVER = chapter3Clover;
export const CHAPTER3_ASH = chapter3Ash;
export const CHAPTER3_OAK = chapter3Oak;
export const CHAPTER3_DUMPLING = chapter3Dumpling;
export const CHAPTER3_STRIPE = chapter3Stripe;
export const CHAPTER3_CLOUD = chapter3Cloud;
export const CHAPTER3_DONNA = chapter3Donna;
export const CHAPTER3_SUNNY = chapter3Sunny;
export const CHAPTER3_NIGEL = chapter3Nigel;
export const CHAPTER3_BEAN = chapter3Bean;
export const CHAPTER4_VELVET = chapter4Velvet;
export const CHAPTER4_CORAL = chapter4Coral;
export const CHAPTER4_BLUE = chapter4Blue;
export const CHAPTER4_MAPLE = chapter4Maple;
export const CHAPTER4_STEVE = chapter4Steve;
export const CHAPTER4_COCOA = chapter4Cocoa;
export const CHAPTER4_LINEN = chapter4Linen;
export const CHAPTER4_JUNIPER = chapter4Juniper;
export const CHAPTER4_IVORY = chapter4Ivory;
export const CHAPTER4_CLAY = chapter4Clay;
export const CHAPTER4_BASIL = chapter4Basil;
export const INK_FRIEND_ID = chapter2.friend_id;
export const BISCUIT_FRIEND_ID = chapter3.friend_id;
export const TUX_FRIEND_ID = chapter3Tux.friend_id;
export const GHOST_FRIEND_ID = chapter3Ghost.friend_id;
export const MIST_FRIEND_ID = chapter3Mist.friend_id;
export const PEPPER_FRIEND_ID = chapter3Pepper.friend_id;
export const PUMPKIN_FRIEND_ID = chapter3Pumpkin.friend_id;
export const SHADOW_FRIEND_ID = chapter3Shadow.friend_id;
export const NOODLE_FRIEND_ID = chapter3Noodle.friend_id;
export const CLOVER_FRIEND_ID = chapter3Clover.friend_id;
export const ASH_FRIEND_ID = chapter3Ash.friend_id;
export const OAK_FRIEND_ID = chapter3Oak.friend_id;
export const DUMPLING_FRIEND_ID = chapter3Dumpling.friend_id;
export const STRIPE_FRIEND_ID = chapter3Stripe.friend_id;
export const CLOUD_FRIEND_ID = chapter3Cloud.friend_id;
export const DONNA_FRIEND_ID = chapter3Donna.friend_id;
export const SUNNY_FRIEND_ID = chapter3Sunny.friend_id;
export const NIGEL_FRIEND_ID = chapter3Nigel.friend_id;
export const BEAN_FRIEND_ID = chapter3Bean.friend_id;
export const VELVET_FRIEND_ID = chapter4Velvet.friend_id;
export const CORAL_FRIEND_ID = chapter4Coral.friend_id;
export const BLUE_FRIEND_ID = chapter4Blue.friend_id;
export const MAPLE_FRIEND_ID = chapter4Maple.friend_id;
export const STEVE_FRIEND_ID = chapter4Steve.friend_id;
export const COCOA_FRIEND_ID = chapter4Cocoa.friend_id;
export const LINEN_FRIEND_ID = chapter4Linen.friend_id;
export const JUNIPER_FRIEND_ID = chapter4Juniper.friend_id;
export const IVORY_FRIEND_ID = chapter4Ivory.friend_id;
export const CLAY_FRIEND_ID = chapter4Clay.friend_id;
export const BASIL_FRIEND_ID = chapter4Basil.friend_id;
export const SHOP_STARTER = chapter2.shop_starter;
export const BISCUIT_GIFT = chapter3.gift;

export const CATALOG: CatalogFriend[] = [
  ...pack.first_20_cats.map((raw, index) => toFriend(raw, index)),
  {
    friendId: chapter4Velvet.friend_id,
    defaultName: chapter4Velvet.default_name,
    unlockClear: chapter4Velvet.unlock_clear,
    displayLine: chapter4Velvet.display_line,
    tier: chapter4Velvet.tier,
    phenotype: {
      phenotypeId: "pheno_dsh_gray_solid_regular_regular_velvet",
      breed: "Domestic Shorthair",
      color: chapter4Velvet.color,
      pattern: chapter4Velvet.pattern,
      body: "Regular",
      tail: "Regular",
      eyes: "Gold",
      eyeAccent: "Gold",
      personality: chapter4Velvet.personality,
      artKit: "velvet",
      boardColor: "gray",
    },
  },
  {
    friendId: chapter4Coral.friend_id,
    defaultName: chapter4Coral.default_name,
    unlockClear: chapter4Coral.unlock_clear,
    displayLine: chapter4Coral.display_line,
    tier: chapter4Coral.tier,
    phenotype: {
      phenotypeId: "pheno_dsh_orange_solid_regular_regular_coral",
      breed: "Domestic Shorthair",
      color: chapter4Coral.color,
      pattern: chapter4Coral.pattern,
      body: "Regular",
      tail: "Regular",
      eyes: "Gold",
      eyeAccent: "Gold",
      personality: chapter4Coral.personality,
      artKit: "coral",
      boardColor: "orange",
    },
  },
  {
    friendId: chapter4Blue.friend_id,
    defaultName: chapter4Blue.default_name,
    unlockClear: chapter4Blue.unlock_clear,
    displayLine: chapter4Blue.display_line,
    tier: chapter4Blue.tier,
    phenotype: {
      phenotypeId: "pheno_dsh_gray_mackerel_regular_regular_blue",
      breed: "Domestic Shorthair",
      color: chapter4Blue.color,
      pattern: chapter4Blue.pattern,
      body: "Regular",
      tail: "Regular",
      eyes: "Gold",
      eyeAccent: "Gold",
      personality: chapter4Blue.personality,
      artKit: "blue",
      boardColor: "gray",
    },
  },
  {
    friendId: chapter4Maple.friend_id,
    defaultName: chapter4Maple.default_name,
    unlockClear: chapter4Maple.unlock_clear,
    displayLine: chapter4Maple.display_line,
    tier: chapter4Maple.tier,
    phenotype: {
      phenotypeId: "pheno_dsh_orange_classic_regular_regular_maple",
      breed: "Domestic Shorthair",
      color: chapter4Maple.color,
      pattern: chapter4Maple.pattern,
      body: "Regular",
      tail: "Regular",
      eyes: "Gold",
      eyeAccent: "Gold",
      personality: chapter4Maple.personality,
      artKit: "maple",
      boardColor: "orange",
    },
  },
  {
    friendId: chapter4Steve.friend_id,
    defaultName: chapter4Steve.default_name,
    unlockClear: chapter4Steve.unlock_clear,
    displayLine: chapter4Steve.display_line,
    tier: chapter4Steve.tier,
    phenotype: {
      phenotypeId: "pheno_dsh_black_bicolor_regular_regular_steve",
      breed: "Domestic Shorthair",
      color: chapter4Steve.color,
      pattern: chapter4Steve.pattern,
      body: "Regular",
      tail: "Regular",
      eyes: "Ink",
      eyeAccent: "Ink",
      personality: chapter4Steve.personality,
      artKit: "steve",
      boardColor: "black",
    },
  },
  {
    friendId: chapter4Cocoa.friend_id,
    defaultName: chapter4Cocoa.default_name,
    unlockClear: chapter4Cocoa.unlock_clear,
    displayLine: chapter4Cocoa.display_line,
    tier: chapter4Cocoa.tier,
    phenotype: {
      phenotypeId: "pheno_dsh_orange_solid_regular_regular_cocoa",
      breed: "Domestic Shorthair",
      color: chapter4Cocoa.color,
      pattern: chapter4Cocoa.pattern,
      body: "Regular",
      tail: "Regular",
      eyes: "Ink",
      eyeAccent: "Ink",
      personality: chapter4Cocoa.personality,
      artKit: "cocoa",
      boardColor: "orange",
    },
  },
  {
    friendId: chapter4Linen.friend_id,
    defaultName: chapter4Linen.default_name,
    unlockClear: chapter4Linen.unlock_clear,
    displayLine: chapter4Linen.display_line,
    tier: chapter4Linen.tier,
    phenotype: {
      phenotypeId: "pheno_dsh_gray_solid_regular_regular_linen",
      breed: "Domestic Shorthair",
      color: chapter4Linen.color,
      pattern: chapter4Linen.pattern,
      body: "Regular",
      tail: "Regular",
      eyes: "Ink",
      eyeAccent: "Ink",
      personality: chapter4Linen.personality,
      artKit: "linen",
      boardColor: "gray",
    },
  },
  {
    friendId: chapter4Juniper.friend_id,
    defaultName: chapter4Juniper.default_name,
    unlockClear: chapter4Juniper.unlock_clear,
    displayLine: chapter4Juniper.display_line,
    tier: chapter4Juniper.tier,
    phenotype: {
      phenotypeId: "pheno_dsh_gray_spotted_regular_regular_juniper",
      breed: "Domestic Shorthair",
      color: chapter4Juniper.color,
      pattern: chapter4Juniper.pattern,
      body: "Regular",
      tail: "Regular",
      eyes: "Ink",
      eyeAccent: "Ink",
      personality: chapter4Juniper.personality,
      artKit: "juniper",
      boardColor: "gray",
    },
  },
  {
    friendId: chapter4Ivory.friend_id,
    defaultName: chapter4Ivory.default_name,
    unlockClear: chapter4Ivory.unlock_clear,
    displayLine: chapter4Ivory.display_line,
    tier: chapter4Ivory.tier,
    phenotype: {
      phenotypeId: "pheno_dsh_cream_solid_regular_regular_ivory",
      breed: "Domestic Shorthair",
      color: chapter4Ivory.color,
      pattern: chapter4Ivory.pattern,
      body: "Regular",
      tail: "Regular",
      eyes: "Ink",
      eyeAccent: "Ink",
      personality: chapter4Ivory.personality,
      artKit: "ivory",
      boardColor: "orange",
    },
  },
  {
    friendId: chapter4Clay.friend_id,
    defaultName: chapter4Clay.default_name,
    unlockClear: chapter4Clay.unlock_clear,
    displayLine: chapter4Clay.display_line,
    tier: chapter4Clay.tier,
    phenotype: {
      phenotypeId: "pheno_dsh_orange_solid_regular_regular_clay",
      breed: "Domestic Shorthair",
      color: chapter4Clay.color,
      pattern: chapter4Clay.pattern,
      body: "Regular",
      tail: "Regular",
      eyes: "Ink",
      eyeAccent: "Ink",
      personality: chapter4Clay.personality,
      artKit: "clay",
      boardColor: "orange",
    },
  },
  {
    friendId: chapter4Basil.friend_id,
    defaultName: chapter4Basil.default_name,
    unlockClear: chapter4Basil.unlock_clear,
    displayLine: chapter4Basil.display_line,
    tier: chapter4Basil.tier,
    phenotype: {
      phenotypeId: "pheno_dsh_gray_spotted_regular_regular_basil",
      breed: "Domestic Shorthair",
      color: chapter4Basil.color,
      pattern: chapter4Basil.pattern,
      body: "Regular",
      tail: "Regular",
      eyes: "Ink",
      eyeAccent: "Ink",
      personality: chapter4Basil.personality,
      artKit: "basil",
      boardColor: "gray",
    },
  },
];

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

export const TUTORIAL_RESCUES = CATALOG.slice(0, 31);

export const ONBOARDING_FURNITURE = pack.starter_furniture
  .filter((sku) => "onboarding" in sku && sku.onboarding)
  .map((sku) => sku.sku_id);

export const COLLECTION_PITY = PITY;

export function friendById(id: string) {
  return CATALOG.find((friend) => friend.friendId === id);
}

/** CEO freeze — CURRENT is correct. NO Pebble. Mango@3 / Ink@6 / Biscuit@9 / Tux@12 / Ghost@15 / Mist@18 / Pepper@21 / Pumpkin@24 / Shadow@27 / Noodle@30 / Clover@33 / Ash@36 / Oak@39 / Dumpling@42 / Stripe@45 / Cloud@48 / Donna@51 / Sunny@54 / Nigel@57 / Bean@60. */
export const SLICE_UNLOCKS: Record<number, string> = {
  3: "friend_001",
  6: "friend_002",
  9: "friend_003",
  12: "friend_004",
  15: "friend_005",
  18: "friend_006",
  21: "friend_007",
  24: "friend_008",
  27: "friend_009",
  30: "friend_010",
  33: "friend_011",
  36: "friend_012",
  39: "friend_013",
  42: "friend_014",
  45: "friend_015",
  48: "friend_016",
  51: "friend_017",
  54: "friend_018",
  57: "friend_019",
  60: "friend_020",
  63: "friend_021",
  66: "friend_022",
  69: "friend_023",
  72: "friend_024",
  75: "friend_025",
  78: "friend_026",
  81: "friend_027",
  84: "friend_028",
  87: "friend_029",
  90: "friend_030",
  93: "friend_031",
};

/** CURRENT: cat n at clear 3*n. Slice table covers 3/6/9/12/15/18/21/24/27/30/33/36/39/42/45/48/51/54; Nigel@57 and Bean@60 stay later. */
export function friendForClear(clearIndex: number): CatalogFriend | undefined {
  if (clearIndex < 3) return undefined;
  const locked = SLICE_UNLOCKS[clearIndex];
  if (locked) return friendById(locked);
  return CATALOG.find((friend) => friend.unlockClear === clearIndex);
}

/** Friends the live campaign actually awards. Nigel@57 and Bean@60 stay in CURRENT for later slices. */
export function shippedFriendForClear(clearIndex: number): CatalogFriend | undefined {
  const locked = SLICE_UNLOCKS[clearIndex];
  return locked ? friendById(locked) : undefined;
}

/** Mango@3 box · Biscuit@9 cushion · Shadow@27 fountain fallback · Cloud@48 yarn fallback. Soft hearts only. */
export function furnitureGiftsForClear(clearIndex: number) {
  if (
    clearIndex === 6 ||
    clearIndex === 12 ||
    clearIndex === 15 ||
    clearIndex === 18 ||
    clearIndex === 21 ||
    clearIndex === 24 ||
    clearIndex === 30 ||
    clearIndex === 33 ||
    clearIndex === 36 ||
    clearIndex === 39 ||
    clearIndex === 42 ||
    clearIndex === 45 ||
    clearIndex === 51 ||
    clearIndex === 54 ||
    clearIndex === 57 ||
    clearIndex === 60
  ) {
    return [];
  }
  const gifts = FURNITURE.filter((sku) => sku.grantOnClear === clearIndex);
  if (clearIndex === 3) {
    return gifts.filter((sku) => sku.skuId === "furn_box_cardboard");
  }
  if (clearIndex === 9) {
    return gifts.filter((sku) => sku.skuId === "furn_bed_cushion");
  }
  // Comfort escalation — gift if unowned (SaveProvider Set-dedupes when already bought)
  if (clearIndex === 27) {
    return FURNITURE.filter((sku) => sku.skuId === "furn_fountain_stone");
  }
  if (clearIndex === 48) {
    return FURNITURE.filter((sku) => sku.skuId === "furn_swing_yarn");
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

/** Mist naming chips — weather / soft, never Ghost, Tux, Ink, or Biscuit pools. */
export const MIST_NAMING_CHIPS: string[] = CHAPTER3_MIST.naming.suggestion_chips;

/** Pepper naming chips — spice / food, never Mist weather or prior pools. */
export const PEPPER_NAMING_CHIPS: string[] = CHAPTER3_PEPPER.naming.suggestion_chips;

/** Pumpkin naming chips — seasonal / food, never Pepper spice or prior pools. */
export const PUMPKIN_NAMING_CHIPS: string[] = CHAPTER3_PUMPKIN.naming.suggestion_chips;

/** Shadow naming chips — night / dark, never Ink/Mist/Tux Formal pools (Shadow is Ink's chip). */
export const SHADOW_NAMING_CHIPS: string[] = CHAPTER3_SHADOW.naming.suggestion_chips;

/** Noodle naming chips — pasta / wiggly, never prior food or Shadow night pools. */
export const NOODLE_NAMING_CHIPS: string[] = CHAPTER3_NOODLE.naming.suggestion_chips;

/** Clover naming chips — lucky / garden, never Noodle pasta, Shadow night, or prior pools. */
export const CLOVER_NAMING_CHIPS: string[] = CHAPTER3_CLOVER.naming.suggestion_chips;

/** Ash naming chips — hearth / calm, never Ink/Ash/Shadow (Ink's pool), Clover garden, or prior pools. */
export const ASH_NAMING_CHIPS: string[] = CHAPTER3_ASH.naming.suggestion_chips;

/** Oak naming chips — sturdy / wood, never Ash hearth or prior pools. */
export const OAK_NAMING_CHIPS: string[] = CHAPTER3_OAK.naming.suggestion_chips;

/** Dumpling naming chips — dumpling / bao, never Oak wood, Noodle pasta, or prior pools. */
export const DUMPLING_NAMING_CHIPS: string[] = CHAPTER3_DUMPLING.naming.suggestion_chips;

/** Stripe naming chips — road / tabby, never Dumpling food, Noodle pasta, or prior pools. */
export const STRIPE_NAMING_CHIPS: string[] = CHAPTER3_STRIPE.naming.suggestion_chips;

/** Cloud naming chips — soft / floaty, never Mist weather, Ghost ethereal, Stripe road, or prior pools. */
export const CLOUD_NAMING_CHIPS: string[] = CHAPTER3_CLOUD.naming.suggestion_chips;

/** Donna naming chips — silly-human Manager lane; ban Nigel/Steve/Greg (Nigel@57). */
export const DONNA_NAMING_CHIPS: string[] = CHAPTER3_DONNA.naming.suggestion_chips;

/** Sunny naming chips — warm / sun lane; ban Nigel/Steve/Greg and prior orange pools. */
export const SUNNY_NAMING_CHIPS: string[] = CHAPTER3_SUNNY.naming.suggestion_chips;

/** Nigel naming chips — silly-human Proper lane; ban Donna/Tux pools. */
export const NIGEL_NAMING_CHIPS: string[] = CHAPTER3_NIGEL.naming.suggestion_chips;

/** Bean naming chips — tiny finale; ban Pip (Pepper) and prior orange pools. */
export const BEAN_NAMING_CHIPS: string[] = CHAPTER3_BEAN.naming.suggestion_chips;

/** Velvet naming chips — dusk plush; ban Mist/Ink/Cloud/Shadow/Clover/Ash/Bean/Nigel/Donna/Pebble. */
export const VELVET_NAMING_CHIPS: string[] = CHAPTER4_VELVET.naming.suggestion_chips;

/** Coral naming chips — warm bloom; ban Sunny/Pumpkin/Pepper/Mango/Oak/Velvet/Bean/Pebble. */
export const CORAL_NAMING_CHIPS: string[] = CHAPTER4_CORAL.naming.suggestion_chips;

/** Blue naming chips — cool silver-gray; ban Velvet/Coral/Mist/Ink/Cloud/Shadow/Ash/Clover/Bean/Pebble. */
export const BLUE_NAMING_CHIPS: string[] = CHAPTER4_BLUE.naming.suggestion_chips;

/** Maple naming chips — autumn leaf; ban Blue/Coral/Velvet/Pumpkin/Sunny/Pepper/Bean/Oak/Pebble. */
export const MAPLE_NAMING_CHIPS: string[] = CHAPTER4_MAPLE.naming.suggestion_chips;

/** Steve naming chips — casual human; ban Maple/Blue/Coral/Velvet/Nigel/Tux/Shadow/Bean/Pebble. */
export const STEVE_NAMING_CHIPS: string[] = CHAPTER4_STEVE.naming.suggestion_chips;

/** Cocoa naming chips — warm cocoa; ban Steve/Maple/Blue/Coral/Velvet/Sunny/Pepper/Bean/Pumpkin/Mango/Pebble. */
export const COCOA_NAMING_CHIPS: string[] = CHAPTER4_COCOA.naming.suggestion_chips;

/** Linen naming chips — pale cool-gray; ban Misty/Haze/Mist/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean/Pebble. */
export const LINEN_NAMING_CHIPS: string[] = CHAPTER4_LINEN.naming.suggestion_chips;

/** Juniper naming chips — cool sage-gray spots; ban Linen/Gauze/Whisper/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean/Pebble. */
export const JUNIPER_NAMING_CHIPS: string[] = CHAPTER4_JUNIPER.naming.suggestion_chips;

/** Ivory naming chips — cool paper-cream; ban Juniper/Lace-alts/Chalk/Sill/Ghost/Cloud/Linen/Bean/Pebble. */
export const IVORY_NAMING_CHIPS: string[] = CHAPTER4_IVORY.naming.suggestion_chips;

/** Clay naming chips — warm terracotta; ban Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean/Pebble. */
export const CLAY_NAMING_CHIPS: string[] = CHAPTER4_CLAY.naming.suggestion_chips;

/** Basil naming chips — soft sage herb; ban Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean/Pebble. */
export const BASIL_NAMING_CHIPS: string[] = CHAPTER4_BASIL.naming.suggestion_chips;

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
  if (friendId === MIST_FRIEND_ID || friendId === "friend_006") {
    return [...MIST_NAMING_CHIPS];
  }
  if (friendId === PEPPER_FRIEND_ID || friendId === "friend_007") {
    return [...PEPPER_NAMING_CHIPS];
  }
  if (friendId === PUMPKIN_FRIEND_ID || friendId === "friend_008") {
    return [...PUMPKIN_NAMING_CHIPS];
  }
  if (friendId === SHADOW_FRIEND_ID || friendId === "friend_009") {
    return [...SHADOW_NAMING_CHIPS];
  }
  if (friendId === NOODLE_FRIEND_ID || friendId === "friend_010") {
    return [...NOODLE_NAMING_CHIPS];
  }
  if (friendId === CLOVER_FRIEND_ID || friendId === "friend_011") {
    return [...CLOVER_NAMING_CHIPS];
  }
  if (friendId === ASH_FRIEND_ID || friendId === "friend_012") {
    return [...ASH_NAMING_CHIPS];
  }
  if (friendId === OAK_FRIEND_ID || friendId === "friend_013") {
    return [...OAK_NAMING_CHIPS];
  }
  if (friendId === DUMPLING_FRIEND_ID || friendId === "friend_014") {
    return [...DUMPLING_NAMING_CHIPS];
  }
  if (friendId === STRIPE_FRIEND_ID || friendId === "friend_015") {
    return [...STRIPE_NAMING_CHIPS];
  }
  if (friendId === CLOUD_FRIEND_ID || friendId === "friend_016") {
    return [...CLOUD_NAMING_CHIPS];
  }
  if (friendId === DONNA_FRIEND_ID || friendId === "friend_017") {
    return [...DONNA_NAMING_CHIPS];
  }
  if (friendId === SUNNY_FRIEND_ID || friendId === "friend_018") {
    return [...SUNNY_NAMING_CHIPS];
  }
  if (friendId === NIGEL_FRIEND_ID || friendId === "friend_019") {
    return [...NIGEL_NAMING_CHIPS];
  }
  if (friendId === BEAN_FRIEND_ID || friendId === "friend_020") {
    return [...BEAN_NAMING_CHIPS];
  }
  if (friendId === VELVET_FRIEND_ID || friendId === "friend_021") {
    return [...VELVET_NAMING_CHIPS];
  }
  if (friendId === CORAL_FRIEND_ID || friendId === "friend_022") {
    return [...CORAL_NAMING_CHIPS];
  }
  if (friendId === BLUE_FRIEND_ID || friendId === "friend_023") {
    return [...BLUE_NAMING_CHIPS];
  }
  if (friendId === MAPLE_FRIEND_ID || friendId === "friend_024") {
    return [...MAPLE_NAMING_CHIPS];
  }
  if (friendId === STEVE_FRIEND_ID || friendId === "friend_025") {
    return [...STEVE_NAMING_CHIPS];
  }
  if (friendId === COCOA_FRIEND_ID || friendId === "friend_026") {
    return [...COCOA_NAMING_CHIPS];
  }
  if (friendId === LINEN_FRIEND_ID || friendId === "friend_027") {
    return [...LINEN_NAMING_CHIPS];
  }
  if (friendId === JUNIPER_FRIEND_ID || friendId === "friend_028") {
    return [...JUNIPER_NAMING_CHIPS];
  }
  if (friendId === IVORY_FRIEND_ID || friendId === "friend_029") {
    return [...IVORY_NAMING_CHIPS];
  }
  if (friendId === CLAY_FRIEND_ID || friendId === "friend_030") {
    return [...CLAY_NAMING_CHIPS];
  }
  if (friendId === BASIL_FRIEND_ID || friendId === "friend_031") {
    return [...BASIL_NAMING_CHIPS];
  }
  const soft = CHAPTER2.personality_pools.Soft;
  if (friendById(friendId)?.phenotype.personality === "Soft") return [...soft];
  const hungry = CHAPTER2.personality_pools.Hungry;
  if (friendById(friendId)?.phenotype.personality === "Hungry") return [...hungry];
  if (friendById(friendId)?.phenotype.personality === "Formal") return [...TUX_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Shy") return [...GHOST_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Dreamy") return [...MIST_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Bold") return [...PEPPER_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Sunny") return [...PUMPKIN_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Night") return [...SHADOW_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Wiggly") return [...NOODLE_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Lucky") return [...CLOVER_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Calm") return [...ASH_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Steady") return [...OAK_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Cozy") return [...DUMPLING_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Busy") return [...STRIPE_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Floaty") return [...CLOUD_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Manager") return [...DONNA_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Bright") return [...SUNNY_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Proper") return [...NIGEL_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Tiny") return [...BEAN_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Plush") return [...VELVET_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Bloom") return [...CORAL_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Cool") return [...BLUE_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Autumn") return [...MAPLE_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Casual") return [...STEVE_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Mellow") return [...COCOA_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Hazy") return [...LINEN_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Crisp") return [...JUNIPER_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Polished") return [...IVORY_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Grounded") return [...CLAY_NAMING_CHIPS];
  if (friendById(friendId)?.phenotype.personality === "Fresh") return [...BASIL_NAMING_CHIPS];
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
  if (friendId === MIST_FRIEND_ID || friendId === "friend_006") {
    return shufflePool([...MIST_NAMING_CHIPS], count);
  }
  if (friendId === PEPPER_FRIEND_ID || friendId === "friend_007") {
    return shufflePool([...PEPPER_NAMING_CHIPS], count);
  }
  if (friendId === PUMPKIN_FRIEND_ID || friendId === "friend_008") {
    return shufflePool([...PUMPKIN_NAMING_CHIPS], count);
  }
  if (friendId === SHADOW_FRIEND_ID || friendId === "friend_009") {
    return shufflePool([...SHADOW_NAMING_CHIPS], count);
  }
  if (friendId === NOODLE_FRIEND_ID || friendId === "friend_010") {
    return shufflePool([...NOODLE_NAMING_CHIPS], count);
  }
  if (friendId === CLOVER_FRIEND_ID || friendId === "friend_011") {
    return shufflePool([...CLOVER_NAMING_CHIPS], count);
  }
  if (friendId === ASH_FRIEND_ID || friendId === "friend_012") {
    return shufflePool([...ASH_NAMING_CHIPS], count);
  }
  if (friendId === OAK_FRIEND_ID || friendId === "friend_013") {
    return shufflePool([...OAK_NAMING_CHIPS], count);
  }
  if (friendId === DUMPLING_FRIEND_ID || friendId === "friend_014") {
    return shufflePool([...DUMPLING_NAMING_CHIPS], count);
  }
  if (friendId === STRIPE_FRIEND_ID || friendId === "friend_015") {
    return shufflePool([...STRIPE_NAMING_CHIPS], count);
  }
  if (friendId === CLOUD_FRIEND_ID || friendId === "friend_016") {
    return shufflePool([...CLOUD_NAMING_CHIPS], count);
  }
  if (friendId === DONNA_FRIEND_ID || friendId === "friend_017") {
    return shufflePool([...DONNA_NAMING_CHIPS], count);
  }
  if (friendId === SUNNY_FRIEND_ID || friendId === "friend_018") {
    return shufflePool([...SUNNY_NAMING_CHIPS], count);
  }
  if (friendId === NIGEL_FRIEND_ID || friendId === "friend_019") {
    return shufflePool([...NIGEL_NAMING_CHIPS], count);
  }
  if (friendId === BEAN_FRIEND_ID || friendId === "friend_020") {
    return shufflePool([...BEAN_NAMING_CHIPS], count);
  }
  if (friendId === VELVET_FRIEND_ID || friendId === "friend_021") {
    return shufflePool([...VELVET_NAMING_CHIPS], count);
  }
  if (friendId === CORAL_FRIEND_ID || friendId === "friend_022") {
    return shufflePool([...CORAL_NAMING_CHIPS], count);
  }
  if (friendId === BLUE_FRIEND_ID || friendId === "friend_023") {
    return shufflePool([...BLUE_NAMING_CHIPS], count);
  }
  if (friendId === MAPLE_FRIEND_ID || friendId === "friend_024") {
    return shufflePool([...MAPLE_NAMING_CHIPS], count);
  }
  if (friendId === STEVE_FRIEND_ID || friendId === "friend_025") {
    return shufflePool([...STEVE_NAMING_CHIPS], count);
  }
  if (friendId === COCOA_FRIEND_ID || friendId === "friend_026") {
    return shufflePool([...COCOA_NAMING_CHIPS], count);
  }
  if (friendId === LINEN_FRIEND_ID || friendId === "friend_027") {
    return shufflePool([...LINEN_NAMING_CHIPS], count);
  }
  if (friendId === JUNIPER_FRIEND_ID || friendId === "friend_028") {
    return shufflePool([...JUNIPER_NAMING_CHIPS], count);
  }
  if (friendId === IVORY_FRIEND_ID || friendId === "friend_029") {
    return shufflePool([...IVORY_NAMING_CHIPS], count);
  }
  if (friendId === CLAY_FRIEND_ID || friendId === "friend_030") {
    return shufflePool([...CLAY_NAMING_CHIPS], count);
  }
  if (friendId === BASIL_FRIEND_ID || friendId === "friend_031") {
    return shufflePool([...BASIL_NAMING_CHIPS], count);
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
    ...(CHAPTER3_MIST.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_PEPPER.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_PUMPKIN.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_SHADOW.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_NOODLE.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_CLOVER.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_ASH.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_OAK.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_DUMPLING.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_STRIPE.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_CLOUD.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_DONNA.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_SUNNY.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_NIGEL.bang_copy as Record<string, string[]>),
    ...(CHAPTER3_BEAN.bang_copy as Record<string, string[]>),
    ...(CHAPTER4_VELVET.bang_copy as Record<string, string[]>),
    ...(CHAPTER4_CORAL.bang_copy as Record<string, string[]>),
    ...(CHAPTER4_BLUE.bang_copy as Record<string, string[]>),
    ...(CHAPTER4_MAPLE.bang_copy as Record<string, string[]>),
    ...(CHAPTER4_STEVE.bang_copy as Record<string, string[]>),
    ...(CHAPTER4_COCOA.bang_copy as Record<string, string[]>),
    ...(CHAPTER4_LINEN.bang_copy as Record<string, string[]>),
    ...(CHAPTER4_JUNIPER.bang_copy as Record<string, string[]>),
    ...(CHAPTER4_IVORY.bang_copy as Record<string, string[]>),
    ...(CHAPTER4_CLAY.bang_copy as Record<string, string[]>),
    ...(CHAPTER4_BASIL.bang_copy as Record<string, string[]>),
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
  if (personality === "Dreamy") return "morning fog";
  if (personality === "Bold") return "bell";
  if (personality === "Sunny") return "fallen leaf";
  if (personality === "Night") return "moonbeam";
  if (personality === "Wiggly") return "loose string";
  if (personality === "Lucky") return "four-leaf";
  if (personality === "Calm") return "cooling stone";
  if (personality === "Steady") return "heavy board";
  if (personality === "Cozy") return "steam bun";
  if (personality === "Busy") return "road map";
  if (personality === "Floaty") return "soft cushion";
  if (personality === "Manager") return "yard plan";
  if (personality === "Bright") return "warm stone";
  if (personality === "Bloom") return "sunny brick";
  if (personality === "Cool") return "fence post";
  if (personality === "Autumn") return "sunny board";
  if (personality === "Casual") return "fountain";
  if (personality === "Mellow") return "cushion";
  if (personality === "Hazy") return "quiet step";
  if (personality === "Crisp") return "fence line";
  if (personality === "Polished") return "cushion";
  if (personality === "Grounded") return "post";
  if (personality === "Fresh") return "sunny sill";
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
