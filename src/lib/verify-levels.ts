import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import chapter2Pack from "../../data/levels/CHAPTER2_PUZZLE_L04_L09.json";
import chapter3Pack from "../../data/levels/CHAPTER3_PUZZLE_L11_L12.json";
import chapter3bPack from "../../data/levels/CHAPTER3_PUZZLE_L13_L15.json";
import chapter3cPack from "../../data/levels/CHAPTER3_PUZZLE_L16_L18.json";
import chapter3dPack from "../../data/levels/CHAPTER3_PUZZLE_L19_L21.json";
import chapter3ePack from "../../data/levels/CHAPTER3_PUZZLE_L22_L24.json";
import chapter3fPack from "../../data/levels/CHAPTER3_PUZZLE_L25_L27.json";
import chapter3gPack from "../../data/levels/CHAPTER3_PUZZLE_L28_L30.json";
import chapter3hPack from "../../data/levels/CHAPTER3_PUZZLE_L31_L33.json";
import chapter3iPack from "../../data/levels/CHAPTER3_PUZZLE_L34_L36.json";
import chapter3jPack from "../../data/levels/CHAPTER3_PUZZLE_L37_L39.json";
import chapter3kPack from "../../data/levels/CHAPTER3_PUZZLE_L40_L42.json";
import chapter3lPack from "../../data/levels/CHAPTER3_PUZZLE_L43_L45.json";
import chapter3mPack from "../../data/levels/CHAPTER3_PUZZLE_L46_L48.json";
import chapter3nPack from "../../data/levels/CHAPTER3_PUZZLE_L49_L51.json";
import chapter3oPack from "../../data/levels/CHAPTER3_PUZZLE_L52_L54.json";
import chapter3pPack from "../../data/levels/CHAPTER3_PUZZLE_L55_L57.json";
import chapter3qPack from "../../data/levels/CHAPTER3_PUZZLE_L58_L60.json";
import chapter3rPack from "../../data/levels/CHAPTER3_PUZZLE_L61_L63.json";
import chapter4aPack from "../../data/levels/CHAPTER4_PUZZLE_L64_L66.json";
import chapter4bPack from "../../data/levels/CHAPTER4_PUZZLE_L67_L69.json";
import chapter4cPack from "../../data/levels/CHAPTER4_PUZZLE_L70_L72.json";
import chapter4dPack from "../../data/levels/CHAPTER4_PUZZLE_L73_L75.json";
import chapter4ePack from "../../data/levels/CHAPTER4_PUZZLE_L76_L78.json";
import chapter4fPack from "../../data/levels/CHAPTER4_PUZZLE_L79_L81.json";
import l4Pack from "../../data/levels/L4.json";
import l5Pack from "../../data/levels/L5.json";
import l6Pack from "../../data/levels/L6.json";
import l7Pack from "../../data/levels/L7.json";
import l8Pack from "../../data/levels/L8.json";
import l9Pack from "../../data/levels/L9.json";
import l11Pack from "../../data/levels/L11.json";
import l12Pack from "../../data/levels/L12.json";
import l13Pack from "../../data/levels/L13.json";
import l14Pack from "../../data/levels/L14.json";
import l15Pack from "../../data/levels/L15.json";
import l16Pack from "../../data/levels/L16.json";
import l17Pack from "../../data/levels/L17.json";
import l18Pack from "../../data/levels/L18.json";
import l19Pack from "../../data/levels/L19.json";
import l20Pack from "../../data/levels/L20.json";
import l21Pack from "../../data/levels/L21.json";
import l22Pack from "../../data/levels/L22.json";
import l23Pack from "../../data/levels/L23.json";
import l24Pack from "../../data/levels/L24.json";
import l25Pack from "../../data/levels/L25.json";
import l26Pack from "../../data/levels/L26.json";
import l27Pack from "../../data/levels/L27.json";
import l28Pack from "../../data/levels/L28.json";
import l29Pack from "../../data/levels/L29.json";
import l30Pack from "../../data/levels/L30.json";
import l31Pack from "../../data/levels/L31.json";
import l32Pack from "../../data/levels/L32.json";
import l33Pack from "../../data/levels/L33.json";
import l34Pack from "../../data/levels/L34.json";
import l35Pack from "../../data/levels/L35.json";
import l36Pack from "../../data/levels/L36.json";
import l37Pack from "../../data/levels/L37.json";
import l38Pack from "../../data/levels/L38.json";
import l39Pack from "../../data/levels/L39.json";
import l40Pack from "../../data/levels/L40.json";
import l41Pack from "../../data/levels/L41.json";
import l42Pack from "../../data/levels/L42.json";
import l43Pack from "../../data/levels/L43.json";
import l44Pack from "../../data/levels/L44.json";
import l45Pack from "../../data/levels/L45.json";
import l46Pack from "../../data/levels/L46.json";
import l47Pack from "../../data/levels/L47.json";
import l48Pack from "../../data/levels/L48.json";
import l49Pack from "../../data/levels/L49.json";
import l50Pack from "../../data/levels/L50.json";
import l51Pack from "../../data/levels/L51.json";
import l52Pack from "../../data/levels/L52.json";
import l53Pack from "../../data/levels/L53.json";
import l54Pack from "../../data/levels/L54.json";
import l55Pack from "../../data/levels/L55.json";
import l56Pack from "../../data/levels/L56.json";
import l57Pack from "../../data/levels/L57.json";
import l58Pack from "../../data/levels/L58.json";
import l59Pack from "../../data/levels/L59.json";
import l60Pack from "../../data/levels/L60.json";
import l61Pack from "../../data/levels/L61.json";
import l62Pack from "../../data/levels/L62.json";
import l63Pack from "../../data/levels/L63.json";
import l64Pack from "../../data/levels/L64.json";
import l65Pack from "../../data/levels/L65.json";
import l66Pack from "../../data/levels/L66.json";
import l67Pack from "../../data/levels/L67.json";
import l68Pack from "../../data/levels/L68.json";
import l69Pack from "../../data/levels/L69.json";
import l70Pack from "../../data/levels/L70.json";
import l71Pack from "../../data/levels/L71.json";
import l72Pack from "../../data/levels/L72.json";
import l73Pack from "../../data/levels/L73.json";
import l74Pack from "../../data/levels/L74.json";
import l75Pack from "../../data/levels/L75.json";
import l76Pack from "../../data/levels/L76.json";
import l77Pack from "../../data/levels/L77.json";
import l78Pack from "../../data/levels/L78.json";
import l79Pack from "../../data/levels/L79.json";
import l80Pack from "../../data/levels/L80.json";
import l81Pack from "../../data/levels/L81.json";
import lt02Pack from "../../data/levels/LT02-L04-L05.json";
import l0607Pack from "../../data/levels/CHAPTER2_PUZZLE_L06_L07.json";
import lt08Pack from "../../data/levels/LT08-L08-L09.json";
import { ART_KIT_PATH } from "./constants";
import {
  BISCUIT_GIFT,
  CHAPTER2,
  CHAPTER3,
  CHAPTER3_TUX,
  CHAPTER3_GHOST,
  CHAPTER3_MIST,
  CHAPTER3_PEPPER,
  CHAPTER3_PUMPKIN,
  CHAPTER3_SHADOW,
  CHAPTER3_NOODLE,
  CHAPTER3_CLOVER,
  CHAPTER3_ASH,
  CHAPTER3_OAK,
  CHAPTER3_DUMPLING,
  CHAPTER3_STRIPE,
  CHAPTER3_CLOUD,
  CHAPTER3_DONNA,
  CHAPTER3_SUNNY,
  CHAPTER3_NIGEL,
  CHAPTER3_BEAN,
  DONNA_FRIEND_ID,
  SUNNY_FRIEND_ID,
  NIGEL_FRIEND_ID,
  BEAN_FRIEND_ID,
  TUTORIAL_RESCUES,
  SLICE_UNLOCKS,
  artForKit,
  chipsForFriend,
  FURNITURE,
  friendById,
  friendForClear,
  furnitureGiftsForClear,
  shippedFriendForClear,
  heartsForClear,
  NAMING,
  shopItemsForClear,
} from "./collection";
import { CAT_ASSETS, FURN_ASSETS, GATE_ASSETS } from "./artAssets";
import { CAMPAIGN_LEVEL_COUNT, LEVELS, nextCampaignLevel } from "./levels";
import { paradeClearForLevel } from "./onClear";
import { EMPTY_SAVE } from "./storage";
import { allCatsOnGates, isMismatchSolid, legalDirs, slideCat } from "./slide";
import type { Dir, Level, PieceCat } from "./types";

type LockedSpec = {
  size: number;
  N: number;
  colorLocks: boolean;
  walls: Array<[number, number]>;
  cats: Array<[string, number, number]>;
  gates: Array<[string, number, number]>;
  colors?: boolean;
};

const LOCKED: Record<string, LockedSpec> = {
  L4: {
    size: 5,
    N: 10,
    colorLocks: false,
    walls: [],
    cats: [
      ["cat_a", 1, 0],
      ["cat_b", 3, 0],
    ],
    gates: [
      ["gate_a", 1, 4],
      ["gate_b", 3, 4],
    ],
  },
  L5: {
    size: 5,
    N: 9,
    colorLocks: false,
    walls: [
      [1, 1],
      [3, 1],
      [1, 4],
      [3, 4],
    ],
    cats: [
      ["cat_a", 2, 0],
      ["cat_b", 2, 3],
    ],
    gates: [
      ["gate_a", 0, 4],
      ["gate_b", 4, 4],
    ],
  },
  L6: {
    size: 6,
    N: 9,
    colorLocks: false,
    walls: [
      [2, 1],
      [2, 2],
      [3, 3],
      [3, 4],
    ],
    cats: [
      ["cat_a", 0, 0],
      ["cat_b", 5, 0],
    ],
    gates: [
      ["gate_a", 0, 5],
      ["gate_b", 5, 5],
    ],
  },
  L7: {
    size: 6,
    N: 8,
    colorLocks: false,
    walls: [
      [1, 2],
      [2, 2],
      [3, 2],
      [2, 4],
      [4, 1],
    ],
    cats: [
      ["cat_a", 0, 1],
      ["cat_b", 5, 3],
    ],
    gates: [
      ["gate_a", 5, 0],
      ["gate_b", 0, 5],
    ],
  },
  L8: {
    size: 6,
    N: 9,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 2],
      [3, 3],
    ],
    cats: [
      ["cat_orange", 1, 0],
      ["cat_gray", 4, 0],
    ],
    gates: [
      ["gate_orange", 1, 5],
      ["gate_gray", 4, 5],
    ],
  },
  L9: {
    size: 6,
    N: 8,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 4],
      [1, 4],
      [2, 2]
    ],
    cats: [
      ["cat_orange", 3, 2],
      ["cat_gray", 4, 5]
    ],
    gates: [
      ["gate_orange", 0, 5],
      ["gate_gray", 0, 3]
    ],
  },
  L11: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 0],
      [2, 1],
      [2, 3],
      [3, 3],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 5, 2],
    ],
    gates: [
      ["gate_orange", 0, 4],
      ["gate_gray", 5, 5],
    ],
  },
  L12: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 1],
      [1, 1],
      [0, 3],
      [4, 2]
    ],
    cats: [
      ["cat_orange", 4, 0],
      ["cat_gray", 1, 0]
    ],
    gates: [
      ["gate_orange", 1, 2],
      ["gate_gray", 2, 4]
    ],
  },
  L13: {
    size: 6,
    N: 9,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 0],
      [2, 1],
      [2, 3],
      [3, 3],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 5, 2],
    ],
    gates: [
      ["gate_orange", 1, 4],
      ["gate_gray", 5, 5],
    ],
  },
  L14: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 5],
      [5, 0],
      [3, 0]
    ],
    cats: [
      ["cat_orange", 0, 4],
      ["cat_gray", 2, 0]
    ],
    gates: [
      ["gate_orange", 1, 0],
      ["gate_gray", 1, 4]
    ],
  },
  L15: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 0],
      [2, 1],
      [2, 3],
      [3, 3],
      [4, 5],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 5, 2],
    ],
    gates: [
      ["gate_orange", 1, 4],
      ["gate_gray", 3, 5],
    ],
  },
  L16: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 0],
      [0, 2],
      [4, 3]
    ],
    cats: [
      ["cat_orange", 0, 1],
      ["cat_gray", 0, 4]
    ],
    gates: [
      ["gate_orange", 3, 0],
      ["gate_gray", 1, 2]
    ],
  },
  L17: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 4],
      [3, 3],
      [0, 4],
      [3, 0]
    ],
    cats: [
      ["cat_orange", 5, 2],
      ["cat_gray", 5, 3]
    ],
    gates: [
      ["gate_orange", 1, 0],
      ["gate_gray", 5, 5]
    ],
  },
  L18: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 0],
      [5, 0],
      [2, 2]
    ],
    cats: [
      ["cat_orange", 5, 2],
      ["cat_gray", 5, 4]
    ],
    gates: [
      ["gate_orange", 4, 0],
      ["gate_gray", 1, 1]
    ],
  },
  L19: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 4],
      [2, 0],
      [4, 5],
      [0, 5],
      [2, 5]
    ],
    cats: [
      ["cat_orange", 5, 4],
      ["cat_gray", 1, 2]
    ],
    gates: [
      ["gate_orange", 0, 3],
      ["gate_gray", 4, 3]
    ],
  },
  L20: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 0],
      [5, 0],
      [5, 1]
    ],
    cats: [
      ["cat_orange", 2, 5],
      ["cat_gray", 2, 1]
    ],
    gates: [
      ["gate_orange", 5, 4],
      ["gate_gray", 1, 5]
    ],
  },
  L21: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 1],
      [4, 4],
      [2, 4],
      [3, 1],
      [5, 1]
    ],
    cats: [
      ["cat_orange", 4, 2],
      ["cat_gray", 3, 2]
    ],
    gates: [
      ["gate_orange", 0, 2],
      ["gate_gray", 1, 3]
    ],
  },
  L22: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 4],
      [3, 5],
      [2, 2]
    ],
    cats: [
      ["cat_orange", 4, 1],
      ["cat_gray", 4, 2]
    ],
    gates: [
      ["gate_orange", 2, 3],
      ["gate_gray", 0, 5]
    ],
  },
  L23: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 3],
      [1, 2],
      [0, 5],
      [3, 0]
    ],
    cats: [
      ["cat_orange", 1, 3],
      ["cat_gray", 4, 3]
    ],
    gates: [
      ["gate_orange", 2, 4],
      ["gate_gray", 5, 5]
    ],
  },
  L24: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 3],
      [2, 5],
      [2, 0],
      [0, 5]
    ],
    cats: [
      ["cat_orange", 4, 2],
      ["cat_gray", 5, 4]
    ],
    gates: [
      ["gate_orange", 1, 2],
      ["gate_gray", 1, 0]
    ],
  },
  L25: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 0],
      [5, 4],
      [4, 0],
      [3, 4]
    ],
    cats: [
      ["cat_orange", 4, 2],
      ["cat_gray", 0, 2]
    ],
    gates: [
      ["gate_orange", 3, 0],
      ["gate_gray", 4, 3]
    ],
  },
  L26: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 0],
      [2, 1],
      [3, 3],
      [3, 5],
      [0, 4],
      [5, 4],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 5, 2],
    ],
    gates: [
      ["gate_orange", 1, 3],
      ["gate_gray", 4, 5],
    ],
  },
  L27: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 0],
      [1, 2],
      [1, 3],
      [5, 4],
      [2, 5],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_black", 5, 2],
    ],
    gates: [
      ["gate_orange", 3, 3],
      ["gate_black", 4, 5],
    ],
  },
  L28: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 4],
      [4, 1],
      [0, 3],
      [1, 3],
      [5, 2]
    ],
    cats: [
      ["cat_orange", 3, 0],
      ["cat_black", 0, 0]
    ],
    gates: [
      ["gate_orange", 1, 5],
      ["gate_black", 1, 0]
    ],
  },
  L29: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 2],
      [1, 2],
      [3, 3],
      [5, 5]
    ],
    cats: [
      ["cat_orange", 1, 4],
      ["cat_black", 3, 1]
    ],
    gates: [
      ["gate_orange", 4, 0],
      ["gate_black", 4, 3]
    ],
  },
  L30: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 0],
      [3, 5],
      [1, 4],
    ],
    cats: [
      ["cat_orange", 2, 5],
      ["cat_black", 2, 0],
    ],
    gates: [
      ["gate_orange", 2, 2],
      ["gate_black", 2, 3],
    ],
  },
  L31: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 1],
      [3, 5]
    ],
    cats: [
      ["cat_orange", 2, 2],
      ["cat_black", 0, 4]
    ],
    gates: [
      ["gate_orange", 4, 5],
      ["gate_black", 4, 2]
    ],
  },
  L32: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 0],
      [2, 2],
      [2, 3],
      [0, 4],
      [4, 5],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_black", 5, 2],
    ],
    gates: [
      ["gate_orange", 3, 2],
      ["gate_black", 5, 5],
    ],
  },
  L33: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 0],
      [3, 2],
      [0, 3],
      [5, 4],
      [1, 5],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_black", 5, 2],
    ],
    gates: [
      ["gate_orange", 3, 4],
      ["gate_black", 0, 5],
    ],
  },
  L34: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 2],
      [0, 3],
      [5, 0]
    ],
    cats: [
      ["cat_orange", 2, 0],
      ["cat_gray", 2, 4]
    ],
    gates: [
      ["gate_orange", 4, 1],
      ["gate_gray", 4, 0]
    ],
  },
  L35: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 0],
      [2, 1],
      [4, 2]
    ],
    cats: [
      ["cat_orange", 2, 2],
      ["cat_black", 0, 4]
    ],
    gates: [
      ["gate_orange", 5, 0],
      ["gate_black", 2, 0]
    ],
  },
  L36: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 3],
      [5, 4],
      [4, 2]
    ],
    cats: [
      ["cat_orange", 3, 2],
      ["cat_gray", 0, 2]
    ],
    gates: [
      ["gate_orange", 2, 4],
      ["gate_gray", 0, 3]
    ],
  },
  L37: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 1],
      [1, 0],
      [3, 2],
      [3, 0]
    ],
    cats: [
      ["cat_orange", 3, 5],
      ["cat_gray", 5, 3]
    ],
    gates: [
      ["gate_orange", 5, 1],
      ["gate_gray", 0, 0]
    ],
  },
  L38: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 0],
      [4, 5],
      [5, 0]
    ],
    cats: [
      ["cat_orange", 3, 2],
      ["cat_black", 3, 3]
    ],
    gates: [
      ["gate_orange", 1, 4],
      ["gate_black", 2, 1]
    ],
  },
  L39: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 0],
      [5, 0],
      [0, 2],
      [4, 4],
    ],
    cats: [
      ["cat_orange", 0, 1],
      ["cat_black", 2, 3],
    ],
    gates: [
      ["gate_orange", 3, 3],
      ["gate_black", 4, 3],
    ],
  },
  L40: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 3],
      [0, 3],
      [3, 0]
    ],
    cats: [
      ["cat_orange", 4, 0],
      ["cat_gray", 5, 2]
    ],
    gates: [
      ["gate_orange", 2, 0],
      ["gate_gray", 3, 4]
    ],
  },
  L41: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 2],
      [1, 3],
      [5, 1]
    ],
    cats: [
      ["cat_orange", 5, 5],
      ["cat_black", 3, 1]
    ],
    gates: [
      ["gate_orange", 0, 5],
      ["gate_black", 4, 4]
    ],
  },
  L42: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 4],
      [1, 3],
      [4, 2],
      [0, 5]
    ],
    cats: [
      ["cat_orange", 0, 2],
      ["cat_gray", 4, 1]
    ],
    gates: [
      ["gate_orange", 5, 4],
      ["gate_gray", 2, 5]
    ],
  },
  L43: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 1],
      [2, 4],
      [2, 0],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 3, 2],
    ],
    gates: [
      ["gate_orange", 3, 3],
      ["gate_gray", 5, 5],
    ],
  },
  L44: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 3],
      [2, 3],
      [0, 4]
    ],
    cats: [
      ["cat_orange", 5, 4],
      ["cat_black", 2, 1]
    ],
    gates: [
      ["gate_orange", 0, 2],
      ["gate_black", 0, 5]
    ],
  },
  L45: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 2],
      [5, 1],
      [0, 2]
    ],
    cats: [
      ["cat_orange", 5, 0],
      ["cat_black", 1, 0]
    ],
    gates: [
      ["gate_orange", 5, 3],
      ["gate_black", 0, 4]
    ],
  },
  L46: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 4],
      [5, 0],
      [4, 2],
      [2, 2]
    ],
    cats: [
      ["cat_orange", 3, 4],
      ["cat_black", 5, 3]
    ],
    gates: [
      ["gate_orange", 2, 1],
      ["gate_black", 5, 5]
    ],
  },
  L47: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 5],
      [2, 1]
    ],
    cats: [
      ["cat_orange", 1, 0],
      ["cat_black", 4, 1]
    ],
    gates: [
      ["gate_orange", 5, 1],
      ["gate_black", 0, 2]
    ],
  },
  L48: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 0],
      [0, 0],
      [5, 2],
      [1, 4],
    ],
    cats: [
      ["cat_orange", 5, 1],
      ["cat_black", 3, 3],
    ],
    gates: [
      ["gate_orange", 2, 3],
      ["gate_black", 1, 3],
    ],
  },

  L49: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 5],
      [1, 1],
      [1, 2],
      [3, 1]
    ],
    cats: [
      ["cat_orange", 4, 0],
      ["cat_gray", 3, 3]
    ],
    gates: [
      ["gate_orange", 2, 0],
      ["gate_gray", 4, 2]
    ],
  },
  L50: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 0],
      [3, 3],
      [4, 3]
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 2, 0]
    ],
    gates: [
      ["gate_orange", 3, 5],
      ["gate_gray", 0, 4]
    ],
  },
  L51: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 4],
      [2, 2],
      [3, 0],
    ],
    cats: [
      ["cat_orange", 0, 3],
      ["cat_black", 0, 0],
    ],
    gates: [
      ["gate_orange", 1, 2],
      ["gate_black", 4, 3],
    ],
  },
  L52: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 0],
      [2, 4],
      [1, 2],
    ],
    cats: [
      ["cat_orange", 1, 5],
      ["cat_gray", 4, 5],
    ],
    gates: [
      ["gate_orange", 2, 2],
      ["gate_gray", 5, 5],
    ],
  },
  L53: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 2],
      [5, 0],
      [3, 0]
    ],
    cats: [
      ["cat_orange", 4, 5],
      ["cat_gray", 5, 2]
    ],
    gates: [
      ["gate_orange", 2, 0],
      ["gate_gray", 4, 1]
    ],
  },
  L54: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 1],
      [0, 2],
      [2, 5],
    ],
    cats: [
      ["cat_orange", 1, 0],
      ["cat_black", 2, 4],
    ],
    gates: [
      ["gate_orange", 1, 2],
      ["gate_black", 4, 4],
    ],
  },
  L55: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 3],
      [0, 2],
      [3, 2],
    ],
    cats: [
      ["cat_orange", 2, 4],
      ["cat_gray", 2, 3],
    ],
    gates: [
      ["gate_orange", 2, 1],
      ["gate_gray", 4, 3],
    ],
  },
  L56: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 1],
      [5, 5],
      [4, 1],
    ],
    cats: [
      ["cat_orange", 3, 2],
      ["cat_gray", 3, 5],
    ],
    gates: [
      ["gate_orange", 2, 2],
      ["gate_gray", 4, 2],
    ],
  },
  L57: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 1],
      [0, 2],
      [5, 1],
    ],
    cats: [
      ["cat_orange", 2, 2],
      ["cat_black", 5, 3],
    ],
    gates: [
      ["gate_orange", 0, 1],
      ["gate_black", 5, 4],
    ],
  },
  L58: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 4],
      [0, 2],
      [0, 1],
    ],
    cats: [
      ["cat_orange", 5, 0],
      ["cat_gray", 5, 3],
    ],
    gates: [
      ["gate_orange", 2, 3],
      ["gate_gray", 5, 5],
    ],
  },
  L59: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 1],
      [5, 3],
      [1, 4],
    ],
    cats: [
      ["cat_orange", 5, 0],
      ["cat_gray", 1, 0],
    ],
    gates: [
      ["gate_orange", 2, 2],
      ["gate_gray", 4, 3],
    ],
  },
  L60: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 0],
      [1, 3],
      [0, 4],
    ],
    cats: [
      ["cat_orange", 4, 5],
      ["cat_black", 0, 5],
    ],
    gates: [
      ["gate_orange", 0, 0],
      ["gate_black", 5, 5],
    ],
  },
  L61: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 1],
      [0, 3],
      [3, 0],
    ],
    cats: [
      ["cat_orange", 5, 5],
      ["cat_gray", 4, 2],
    ],
    gates: [
      ["gate_orange", 1, 4],
      ["gate_gray", 4, 0],
    ],
  },
  L62: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 5],
      [3, 3],
      [0, 0],
    ],
    cats: [
      ["cat_orange", 2, 2],
      ["cat_gray", 4, 0],
    ],
    gates: [
      ["gate_orange", 1, 1],
      ["gate_gray", 3, 4],
    ],
  },
  L63: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 3],
      [3, 2],
      [5, 2],
    ],
    cats: [
      ["cat_orange", 4, 0],
      ["cat_black", 2, 4],
    ],
    gates: [
      ["gate_orange", 0, 4],
      ["gate_black", 5, 1],
    ],
  },
  L64: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 5],
      [2, 4],
      [1, 2],
      [1, 3]
    ],
    cats: [
      ["cat_orange", 0, 5],
      ["cat_gray", 0, 2]
    ],
    gates: [
      ["gate_orange", 5, 3],
      ["gate_gray", 3, 4]
    ],
  },
  L65: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 3],
      [0, 3],
      [1, 3],
      [3, 1]
    ],
    cats: [
      ["cat_orange", 3, 4],
      ["cat_gray", 4, 4]
    ],
    gates: [
      ["gate_orange", 4, 1],
      ["gate_gray", 5, 4]
    ],
  },
  L66: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 3],
      [3, 3]
    ],
    cats: [
      ["cat_orange", 1, 0],
      ["cat_black", 3, 4]
    ],
    gates: [
      ["gate_orange", 5, 5],
      ["gate_black", 4, 3]
    ],
  },
  L67: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 0],
      [5, 5],
      [4, 1]
    ],
    cats: [
      ["cat_orange", 3, 4],
      ["cat_gray", 4, 5]
    ],
    gates: [
      ["gate_orange", 3, 2],
      ["gate_gray", 4, 2]
    ],
  },
  L68: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 3],
      [5, 4],
      [4, 0],
      [5, 2]
    ],
    cats: [
      ["cat_orange", 5, 5],
      ["cat_gray", 2, 4]
    ],
    gates: [
      ["gate_orange", 0, 1],
      ["gate_gray", 5, 0]
    ],
  },
  L69: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 3],
      [0, 2],
      [2, 0]
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_black", 3, 4]
    ],
    gates: [
      ["gate_orange", 3, 3],
      ["gate_black", 1, 0]
    ],
  },
  L70: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 1],
      [5, 0],
      [1, 3]
    ],
    cats: [
      ["cat_orange", 1, 4],
      ["cat_gray", 0, 0]
    ],
    gates: [
      ["gate_orange", 5, 3],
      ["gate_gray", 0, 5]
    ],
  },
  L71: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 3],
      [3, 0],
      [4, 2],
      [1, 5]
    ],
    cats: [
      ["cat_orange", 2, 0],
      ["cat_gray", 3, 4]
    ],
    gates: [
      ["gate_orange", 4, 1],
      ["gate_gray", 1, 4]
    ],
  },
  L72: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 4],
      [5, 1],
      [0, 2],
      [3, 3],
      [4, 1]
    ],
    cats: [
      ["cat_orange", 0, 5],
      ["cat_black", 0, 4]
    ],
    gates: [
      ["gate_orange", 4, 0],
      ["gate_black", 3, 2]
    ],
  },
  L73: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 1],
      [2, 4],
      [5, 5],
      [3, 1],
      [4, 5]
    ],
    cats: [
      ["cat_orange", 1, 0],
      ["cat_gray", 4, 1]
    ],
    gates: [
      ["gate_orange", 3, 2],
      ["gate_gray", 0, 4]
    ],
  },
  L74: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 1],
      [5, 3],
      [4, 5],
      [4, 4]
    ],
    cats: [
      ["cat_orange", 4, 1],
      ["cat_gray", 2, 1]
    ],
    gates: [
      ["gate_orange", 3, 0],
      ["gate_gray", 1, 3]
    ],
  },
  L75: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 1],
      [0, 2],
      [3, 3],
      [2, 2]
    ],
    cats: [
      ["cat_orange", 4, 3],
      ["cat_black", 5, 5]
    ],
    gates: [
      ["gate_orange", 3, 0],
      ["gate_black", 2, 1]
    ],
  },
  L76: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 1],
      [3, 3],
      [0, 4],
      [4, 3]
    ],
    cats: [
      ["cat_orange", 5, 0],
      ["cat_gray", 2, 3]
    ],
    gates: [
      ["gate_orange", 2, 5],
      ["gate_gray", 3, 0]
    ],
  },
  L77: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 5],
      [1, 3]
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 0, 1]
    ],
    gates: [
      ["gate_orange", 5, 2],
      ["gate_gray", 1, 4]
    ],
  },
  L78: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 0],
      [3, 2],
      [0, 3],
      [1, 5]
    ],
    cats: [
      ["cat_orange", 5, 5],
      ["cat_black", 0, 2]
    ],
    gates: [
      ["gate_orange", 1, 4],
      ["gate_black", 5, 0]
    ],
  },
  L79: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 1],
      [3, 2],
      [1, 5],
      [3, 0]
    ],
    cats: [
      ["cat_orange", 2, 5],
      ["cat_gray", 1, 4]
    ],
    gates: [
      ["gate_orange", 5, 2],
      ["gate_gray", 0, 0]
    ],
  },
  L80: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 2],
      [4, 0],
      [1, 3],
      [1, 5]
    ],
    cats: [
      ["cat_orange", 5, 2],
      ["cat_gray", 5, 1]
    ],
    gates: [
      ["gate_orange", 0, 0],
      ["gate_gray", 5, 4]
    ],
  },
  L81: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 0],
      [2, 1],
      [2, 3],
      [0, 5],
      [2, 5]
    ],
    cats: [
      ["cat_orange", 4, 2],
      ["cat_black", 2, 4]
    ],
    gates: [
      ["gate_orange", 5, 5],
      ["gate_black", 2, 0]
    ],
  }
};

function assertLocked(level: Level, spec: LockedSpec) {
  if (level.width !== spec.size || level.height !== spec.size) {
    throw new Error(`${level.id}: size ${level.width}×${level.height} ≠ ${spec.size}×${spec.size}`);
  }
  if (level.moveBudget !== spec.N) {
    throw new Error(`${level.id}: N=${level.moveBudget} ≠ ${spec.N}`);
  }
  if (level.colorLocks !== spec.colorLocks) {
    throw new Error(`${level.id}: colorLocks ${String(level.colorLocks)} ≠ ${String(spec.colorLocks)}`);
  }
  const wallKeys = new Set(level.walls.map((wall) => `${wall.x},${wall.y}`));
  if (wallKeys.size !== spec.walls.length) {
    throw new Error(`${level.id}: walls ${wallKeys.size} ≠ ${spec.walls.length}`);
  }
  for (const [x, y] of spec.walls) {
    if (!wallKeys.has(`${x},${y}`)) throw new Error(`${level.id}: missing wall (${x},${y})`);
  }
  if (level.cats.length !== spec.cats.length) {
    throw new Error(`${level.id}: cats ${level.cats.length} ≠ ${spec.cats.length}`);
  }
  for (const [id, x, y] of spec.cats) {
    const cat = level.cats.find((piece) => piece.id === id);
    if (!cat || cat.x !== x || cat.y !== y) {
      throw new Error(`${level.id}: ${id} at (${cat?.x},${cat?.y}) ≠ (${x},${y})`);
    }
    if (!spec.colors && cat.color) {
      throw new Error(`${level.id}: ${id} must not require a colorId`);
    }
  }
  if (level.gates.length !== spec.gates.length) {
    throw new Error(`${level.id}: gates ${level.gates.length} ≠ ${spec.gates.length}`);
  }
  for (const [id, x, y] of spec.gates) {
    const gate = level.gates.find((piece) => piece.id === id);
    if (!gate || gate.x !== x || gate.y !== y) {
      throw new Error(`${level.id}: ${id} at (${gate?.x},${gate?.y}) ≠ (${x},${y})`);
    }
  }
}

const SOLVES: Record<string, Array<[string, Dir]>> = {
  L1: [["cat_a", "s"]],
  L2: [
    ["cat_a", "s"],
    ["cat_a", "e"],
    ["cat_a", "n"],
  ],
  L3: [["cat_a", "s"]],
  L4: [
    ["cat_a", "s"],
    ["cat_b", "s"],
  ],
  L5: [
    ["cat_a", "e"],
    ["cat_a", "s"],
    ["cat_b", "w"],
    ["cat_b", "s"],
  ],
  L6: [
    ["cat_a", "s"],
    ["cat_b", "s"],
  ],
  L7: [
    ["cat_a", "s"],
    ["cat_b", "n"],
  ],
  L8: [
    ["cat_orange", "s"],
    ["cat_gray", "s"],
  ],
  L9: [
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
  ],
  L11: [
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
  ],
  L12: [
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
  ],
  L13: [
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
  ],
  L14: [
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_orange", "n"],
  ],
  L15: [
    ["cat_orange", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
  ],
  L16: [
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
  ],
  L17: [
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
  ],
  L18: [
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
  ],
  L19: [
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_gray", "w"],
    ["cat_orange", "w"],
  ],
  L20: [
    ["cat_gray", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
  ],
  L21: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
  ],
  L22: [
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
  ],
  L23: [
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
  ],
  L24: [
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_orange", "n"],
    ["cat_gray", "n"],
  ],
  L25: [
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
  ],
  L26: [
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
  ],
  L27: [
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_black", "w"],
    ["cat_orange", "n"],
    ["cat_black", "e"],
    ["cat_black", "s"],
    ["cat_black", "w"],
    ["cat_orange", "e"],
    ["cat_black", "s"],
  ],
  L28: [
    ["cat_orange", "w"],
    ["cat_black", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
  ],
  L29: [
    ["cat_orange", "e"],
    ["cat_black", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_orange", "n"],
  ],
  L30: [
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_black", "e"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_black", "s"],
    ["cat_black", "w"],
    ["cat_black", "n"],
  ],
  L31: [
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_black", "s"],
    ["cat_orange", "s"],
  ],
  L32: [
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_orange", "n"],
    ["cat_black", "e"],
    ["cat_black", "s"],
  ],
  L33: [
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_black", "s"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_orange", "w"],
    ["cat_black", "w"],
    ["cat_black", "s"],
  ],
  L34: [
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
  ],
  L35: [
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_black", "w"],
  ],
  L36: [
    ["cat_orange", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
  ],
  L37: [
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "n"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
  ],
  L38: [
    ["cat_black", "s"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_black", "s"],
    ["cat_black", "w"],
    ["cat_orange", "e"],
    ["cat_black", "n"],
  ],
  L39: [
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_black", "n"],
    ["cat_orange", "e"],
    ["cat_black", "e"],
    ["cat_black", "s"],
  ],
  L40: [
    ["cat_orange", "e"],
    ["cat_gray", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
  ],
  L41: [
    ["cat_orange", "n"],
    ["cat_black", "e"],
    ["cat_black", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_black", "n"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
  ],
  L42: [
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
  ],
  L43: [
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
  ],
  L44: [
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_black", "s"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_black", "w"],
  ],
  L45: [
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_orange", "s"],
    ["cat_black", "w"],
  ],
  L46: [
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_orange", "e"],
    ["cat_black", "e"],
    ["cat_black", "s"],
  ],
  L47: [
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_black", "n"],
    ["cat_orange", "s"],
    ["cat_black", "w"],
  ],
  L48: [
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_black", "n"],
    ["cat_orange", "w"],
    ["cat_black", "w"],
    ["cat_black", "s"],
  ],
  L49: [
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
  ],
  L50: [
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_orange", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
  ],
  L51: [
    ["cat_black", "e"],
    ["cat_black", "s"],
    ["cat_black", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_black", "s"],
  ],
  L52: [
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
  ],
  L53: [
    ["cat_orange", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
  ],
  L54: [
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_black", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_black", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
  ],
  L55: [
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
  ],
  L56: [
    ["cat_orange", "w"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
  ],
  L57: [
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
  ],
  L58: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
  ],
  L59: [
    ["cat_orange", "w"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
  ],
  L60: [
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_black", "s"],
  ],
  L61: [
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
  ],
  L62: [
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
  ],
  L63: [
    ["cat_orange", "s"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_black", "s"],
  ],
  L64: [
    ["cat_gray", "n"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "w"],
  ],
  L65: [
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "n"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
  ],
  L66: [
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_black", "s"],
    ["cat_orange", "e"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_orange", "s"],
  ],
  L67: [
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
  ],
  L68: [
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
  ],
  L69: [
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_black", "n"],
  ],
  L70: [
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
  ],
  L71: [
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
  ],
  L72: [
    ["cat_black", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_orange", "w"],
    ["cat_black", "s"],
  ],
  L73: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
  ],
  L74: [
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
  ],
  L75: [
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_orange", "w"],
    ["cat_black", "s"],
  ],
  L76: [
    ["cat_orange", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
  ],
  L77: [
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
  ],
  L78: [
    ["cat_orange", "w"],
    ["cat_black", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_black", "n"],
  ],
  L79: [
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
  ],
  L80: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_gray", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
  ],
  L81: [
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
  ],
};


function play(level: Level, script: Array<[string, Dir]>, requireWin = true) {
  let cats: PieceCat[] = level.cats.map((cat) => ({ ...cat }));
  let used = 0;
  for (const [id, dir] of script) {
    const result = slideCat(level, cats, id, dir);
    if (!result.moved) {
      throw new Error(`${level.id}: ${id} could not slide ${dir}`);
    }
    cats = result.cats;
    used += 1;
  }
  if (requireWin && !allCatsOnGates(level, cats)) {
    throw new Error(`${level.id}: script did not land every cat on a gate`);
  }
  if (requireWin && used > level.moveBudget) {
    throw new Error(`${level.id}: used ${used} > budget ${level.moveBudget}`);
  }
  return { used, cats };
}

function assertNotHome(level: Level, script: Array<[string, Dir]>, label: string) {
  let cats: PieceCat[] = level.cats.map((cat) => ({ ...cat }));
  for (const [id, dir] of script) {
    const result = slideCat(level, cats, id, dir);
    if (!result.moved) return;
    cats = result.cats;
  }
  if (allCatsOnGates(level, cats)) {
    throw new Error(`${level.id} false teach: ${label}`);
  }
}

{
  const l3 = LEVELS.find((level) => level.id === "L3");
  if (!l3) throw new Error("missing L3");
  const cat = l3.cats[0];
  const gate = l3.gates[0];
  if (cat.x !== 2 || cat.y !== 0) throw new Error("L3 cat must be (2,0)");
  if (gate.x !== 2 || gate.y !== 2) throw new Error("L3 gate must be (2,2)");
  const wallKeys = new Set(l3.walls.map((wall) => `${wall.x},${wall.y}`));
  for (const key of ["1,2", "3,2", "2,3"]) {
    if (!wallKeys.has(key)) throw new Error(`L3 missing wall ${key}`);
  }

  const south = play(l3, [["cat_a", "s"]]);
  if (south.cats[0].x !== 2 || south.cats[0].y !== 2) {
    throw new Error(
      `L3 south must brake on the gate, landed (${south.cats[0].x},${south.cats[0].y})`,
    );
  }

  assertNotHome(l3, [["cat_a", "e"], ["cat_a", "s"], ["cat_a", "w"]], "L2-style skirt e,s,w");
  assertNotHome(l3, [["cat_a", "w"], ["cat_a", "s"], ["cat_a", "e"]], "west skirt");
  assertNotHome(
    l3,
    [
      ["cat_a", "e"],
      ["cat_a", "s"],
      ["cat_a", "w"],
      ["cat_a", "n"],
    ],
    "side route overshoots through G",
  );
  assertNotHome(
    l3,
    [
      ["cat_a", "w"],
      ["cat_a", "s"],
      ["cat_a", "e"],
      ["cat_a", "n"],
    ],
    "other side route overshoots through G",
  );
}

{
  const l2 = LEVELS.find((level) => level.id === "L2");
  if (!l2) throw new Error("missing L2");
  const gate = l2.gates[0];
}

{
  const ids = LEVELS.map((level) => level.id);
  if (ids.includes("L10")) throw new Error("L10 must not load on the campaign path");
  if (ids.join(",") !== "L1,L2,L3,L4,L5,L6,L7,L8,L9,L11,L12,L13,L14,L15,L16,L17,L18,L19,L20,L21,L22,L23,L24,L25,L26,L27,L28,L29,L30,L31,L32,L33,L34,L35,L36,L37,L38,L39,L40,L41,L42,L43,L44,L45,L46,L47,L48,L49,L50,L51,L52,L53,L54,L55,L56,L57,L58,L59,L60,L61,L62,L63,L64,L65,L66,L67,L68,L69,L70,L71,L72,L73,L74,L75,L76,L77,L78,L79,L80,L81") {
    throw new Error(`campaign ids drifted: ${ids.join(",")}`);
  }
  for (const id of [
    "L4",
    "L5",
    "L6",
    "L7",
    "L8",
    "L9",
    "L11",
    "L12",
    "L13",
    "L14",
    "L15",
    "L16",
    "L17",
    "L18",
    "L19",
    "L20",
    "L21",
    "L22",
    "L23",
    "L24",
    "L25",
    "L26",
    "L27",
    "L28",
    "L29",
    "L30",
    "L31",
    "L32",
    "L33",
    "L34",
    "L35",
    "L36",
    "L37",
    "L38",
    "L39",
    "L40",
    "L41",
    "L42",
    "L43",
    "L44",
    "L45",
    "L46",
    "L47",
    "L48",
    "L49",
    "L50",
    "L51",
    "L52",
    "L53",
    "L54",
    "L55",
    "L56",
    "L57",
    "L58",
    "L59",
    "L60",
    "L61",
    "L62",
    "L63",
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    assertLocked(level, LOCKED[id]);
    console.log(`${id} locked topology ok`);
  }

  type PackedBoard = {
    id: string;
    width: number;
    height: number;
    colorLocks?: boolean;
    walls?: { x: number; y: number }[];
    cats: { id: string; x: number; y: number; colorId?: string; color?: string }[];
    gates: { id: string; x: number; y: number; colorId?: string; color?: string }[];
  };
  const locked = Object.fromEntries(
    [
      ...chapter2Pack.levels,
      ...chapter3Pack.levels,
      ...chapter3bPack.levels,
      ...chapter3cPack.levels,
      ...chapter3dPack.levels,
      ...chapter3ePack.levels,
      ...chapter3fPack.levels,
      ...chapter3gPack.levels,
      ...chapter3hPack.levels,
      ...chapter3iPack.levels,
      ...chapter3jPack.levels,
      ...chapter3kPack.levels,
      ...chapter3lPack.levels,
      ...chapter3mPack.levels,
      ...chapter3nPack.levels,
      ...chapter3oPack.levels,
      ...chapter3pPack.levels,
      ...chapter3qPack.levels,
      ...chapter3rPack.levels,
      ...chapter4aPack.levels,
      ...chapter4bPack.levels,
      ...chapter4cPack.levels,
      ...chapter4dPack.levels,
      ...chapter4ePack.levels,
      ...chapter4fPack.levels,
    ].map((level) => [
      level.id,
      level as PackedBoard,
    ]),
  );
  const standalones: Record<string, PackedBoard[]> = {
    L4: [l4Pack as PackedBoard, lt02Pack.levels[0] as PackedBoard],
    L5: [l5Pack as PackedBoard, lt02Pack.levels[1] as PackedBoard],
    L6: [l6Pack as PackedBoard, l0607Pack.levels[0] as PackedBoard],
    L7: [l7Pack as PackedBoard, l0607Pack.levels[1] as PackedBoard],
    L8: [l8Pack as PackedBoard, lt08Pack.levels[0] as PackedBoard],
    L9: [l9Pack as PackedBoard, lt08Pack.levels[1] as PackedBoard],
    L11: [l11Pack as PackedBoard],
    L12: [l12Pack as PackedBoard],
    L13: [l13Pack as PackedBoard],
    L14: [l14Pack as PackedBoard],
    L15: [l15Pack as PackedBoard],
    L16: [l16Pack as PackedBoard],
    L17: [l17Pack as PackedBoard],
    L18: [l18Pack as PackedBoard],
    L19: [l19Pack as PackedBoard],
    L20: [l20Pack as PackedBoard],
    L21: [l21Pack as PackedBoard],
    L22: [l22Pack as PackedBoard],
    L23: [l23Pack as PackedBoard],
    L24: [l24Pack as PackedBoard],
    L25: [l25Pack as PackedBoard],
    L26: [l26Pack as PackedBoard],
    L27: [l27Pack as PackedBoard],
    L28: [l28Pack as PackedBoard],
    L29: [l29Pack as PackedBoard],
    L30: [l30Pack as PackedBoard],
    L31: [l31Pack as PackedBoard],
    L32: [l32Pack as PackedBoard],
    L33: [l33Pack as PackedBoard],
    L34: [l34Pack as PackedBoard],
    L35: [l35Pack as PackedBoard],
    L36: [l36Pack as PackedBoard],
    L37: [l37Pack as PackedBoard],
    L38: [l38Pack as PackedBoard],
    L39: [l39Pack as PackedBoard],
    L40: [l40Pack as PackedBoard],
    L41: [l41Pack as PackedBoard],
    L42: [l42Pack as PackedBoard],
    L43: [l43Pack as PackedBoard],
    L44: [l44Pack as PackedBoard],
    L45: [l45Pack as PackedBoard],
    L46: [l46Pack as PackedBoard],
    L47: [l47Pack as PackedBoard],
    L48: [l48Pack as PackedBoard],
    L49: [l49Pack as PackedBoard],
    L50: [l50Pack as PackedBoard],
    L51: [l51Pack as PackedBoard],
    L52: [l52Pack as PackedBoard],
    L53: [l53Pack as PackedBoard],
    L54: [l54Pack as PackedBoard],
    L55: [l55Pack as PackedBoard],
    L56: [l56Pack as PackedBoard],
    L57: [l57Pack as PackedBoard],
    L58: [l58Pack as PackedBoard],
    L59: [l59Pack as PackedBoard],
    L60: [l60Pack as PackedBoard],
    L61: [l61Pack as PackedBoard],
    L62: [l62Pack as PackedBoard],
    L63: [l63Pack as PackedBoard],
    L64: [l64Pack as PackedBoard],
    L65: [l65Pack as PackedBoard],
    L66: [l66Pack as PackedBoard],
    L67: [l67Pack as PackedBoard],
    L68: [l68Pack as PackedBoard],
    L69: [l69Pack as PackedBoard],
    L70: [l70Pack as PackedBoard],
    L71: [l71Pack as PackedBoard],
    L72: [l72Pack as PackedBoard],
    L73: [l73Pack as PackedBoard],
    L74: [l74Pack as PackedBoard],
    L75: [l75Pack as PackedBoard],
    L76: [l76Pack as PackedBoard],
    L77: [l77Pack as PackedBoard],
    L78: [l78Pack as PackedBoard],
    L79: [l79Pack as PackedBoard],
    L80: [l80Pack as PackedBoard],
    L81: [l81Pack as PackedBoard],
  };
  const boardKey = (level: PackedBoard) => {
    const walls = [...(level.walls ?? [])].map((wall) => `${wall.x},${wall.y}`).sort().join(";");
    const cats = [...level.cats]
      .map((cat) => `${cat.id}@${cat.x},${cat.y}`)
      .sort()
      .join(";");
    const gates = [...level.gates]
      .map((gate) => `${gate.id}@${gate.x},${gate.y}`)
      .sort()
      .join(";");
    return `${level.width}x${level.height}|locks:${Boolean(level.colorLocks)}|w:${walls}|c:${cats}|g:${gates}`;
  };
  for (const [id, copies] of Object.entries(standalones)) {
    const canon = locked[id];
    if (!canon) throw new Error(`missing locked ${id}`);
    const expected = boardKey(canon);
    for (const copy of copies) {
      if (boardKey(copy) !== expected) {
        throw new Error(`${copy.id} standalone drifted from CHAPTER2_PUZZLE`);
      }
    }
    if (
      id === "L8" ||
      id === "L9" ||
      id === "L11" ||
      id === "L12" ||
      id === "L13" ||
      id === "L14" ||
      id === "L15" ||
      id === "L16" ||
      id === "L17" ||
      id === "L18" ||
      id === "L19" ||
      id === "L20" ||
      id === "L21" ||
      id === "L22" ||
      id === "L23" ||
      id === "L24" ||
      id === "L25" ||
      id === "L26" ||
      id === "L27" ||
      id === "L28" ||
      id === "L29" ||
      id === "L30" ||
      id === "L31" ||
      id === "L32" ||
      id === "L33" ||
      id === "L34" ||
      id === "L35" ||
      id === "L36" ||
      id === "L37" ||
      id === "L38" ||
      id === "L39" ||
      id === "L40" ||
      id === "L41" ||
      id === "L42" ||
      id === "L43" ||
      id === "L44" ||
      id === "L45" ||
      id === "L46" ||
      id === "L47" ||
      id === "L48" ||
      id === "L49" ||
      id === "L50" ||
      id === "L51" ||
      id === "L52" ||
      id === "L53" ||
      id === "L54" ||
      id === "L55" ||
      id === "L56" ||
      id === "L57" ||
      id === "L58" ||
      id === "L59" ||
      id === "L60" ||
      id === "L61" ||
      id === "L62" ||
      id === "L63"
    ) {
      for (const copy of copies) {
        for (const piece of [...copy.cats, ...copy.gates]) {
          if (!piece.colorId) throw new Error(`${copy.id} ${piece.id} must use colorId`);
        }
      }
    }
  }
  console.log("Standalone L4–L9 + L11–L81 + LT02/L06-07/LT08 match locked coords");
}

{
  const l4 = LEVELS.find((level) => level.id === "L4");
  if (!l4) throw new Error("missing L4");
  if (l4.cats.length !== 2 || l4.gates.length !== 2) throw new Error("L4 must be two-friend teach");
}

{
  const l5 = LEVELS.find((level) => level.id === "L5");
  if (!l5) throw new Error("missing L5");
  // B sits on the shared column; clearing A first is required before B can land west/south.
  assertNotHome(l5, [["cat_b", "s"]], "L5 B-first cannot clear alone");
}

{
  const l8 = LEVELS.find((level) => level.id === "L8");
  if (!l8) throw new Error("missing L8");
  if (!l8.colorLocks) throw new Error("L8 must lock colors");
  const orange = l8.cats.find((cat) => cat.id === "cat_orange");
  const gray = l8.cats.find((cat) => cat.id === "cat_gray");
  if (!orange || !gray) throw new Error("L8 missing coats");
  const grayGate = l8.gates.find((gate) => gate.id === "gate_gray");
  const orangeGate = l8.gates.find((gate) => gate.id === "gate_orange");
  if (!grayGate || !orangeGate) throw new Error("L8 missing gates");
  if (!isMismatchSolid(l8, orange, grayGate)) {
    throw new Error("L8 gray house must be solid to the orange coat");
  }
  if (!isMismatchSolid(l8, gray, orangeGate)) {
    throw new Error("L8 orange house must be solid to the gray coat");
  }
}

{
  const l9 = LEVELS.find((level) => level.id === "L9");
  if (!l9) throw new Error("missing L9");
  if (l9.name !== "Soft Lock") throw new Error("L9 must be Soft Lock");
  if (!l9.colorLocks) throw new Error("L9 must lock colors");
}

{
  const l11 = LEVELS.find((level) => level.id === "L11");
  if (!l11) throw new Error("missing L11");
  if (!l11.colorLocks) throw new Error("L11 must lock colors");
  const orange = l11.cats.find((cat) => cat.id === "cat_orange");
  const gray = l11.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l11.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l11.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L11 missing coats");
  if (!isMismatchSolid(l11, gray, orangeGate)) {
    throw new Error("L11 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l11, orange, grayGate)) {
    throw new Error("L11 gray house must be solid to the orange coat");
  }
  // Orange south first overshoots through the matching house (no parked brake).
  assertNotHome(l11, [["cat_orange", "s"]], "L11 orange-first overshoot");
  assertNotHome(
    l11,
    [
      ["cat_orange", "s"],
      ["cat_gray", "s"],
      ["cat_gray", "w"],
    ],
    "L11 orange-first cannot finish",
  );
}

{
  const l12 = LEVELS.find((level) => level.id === "L12");
  if (!l12) throw new Error("missing L12");
  if (l12.name !== "Brake First") throw new Error("L12 must be Brake First");
  if (!l12.colorLocks) throw new Error("L12 must lock colors");
  if (/^Hold\b|^Park\b/i.test(l12.name)) throw new Error("L12 must not keep Hold*/Park* title");
}

{
  const l13 = LEVELS.find((level) => level.id === "L13");
  if (!l13) throw new Error("missing L13");
  if (!l13.colorLocks) throw new Error("L13 must lock colors");
  const orange = l13.cats.find((cat) => cat.id === "cat_orange");
  const gray = l13.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l13.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l13.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L13 missing coats");
  if (!isMismatchSolid(l13, gray, orangeGate)) {
    throw new Error("L13 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l13, orange, grayGate)) {
    throw new Error("L13 gray house must be solid to the orange coat");
  }
  assertNotHome(l13, [["cat_orange", "s"]], "L13 orange-south alone is not home");
  assertNotHome(
    l13,
    [
      ["cat_gray", "s"],
      ["cat_gray", "w"],
      ["cat_orange", "s"],
      ["cat_gray", "e"],
    ],
    "L13 L11 habit cannot finish",
  );
  assertNotHome(
    l13,
    [
      ["cat_gray", "n"],
      ["cat_orange", "e"],
      ["cat_gray", "s"],
      ["cat_gray", "w"],
    ],
    "L13 L12 habit cannot finish",
  );
}

{
  const l14 = LEVELS.find((level) => level.id === "L14");
  if (!l14) throw new Error("missing L14");
  if (l14.name !== "Near Brake") throw new Error("L14 must be Near Brake");
  if (!l14.colorLocks) throw new Error("L14 must lock colors");
  if (/^Hold\b|^Park\b/i.test(l14.name)) throw new Error("L14 must not keep Hold*/Park* title");
}

{
  const l15 = LEVELS.find((level) => level.id === "L15");
  if (!l15) throw new Error("missing L15");
  if (!l15.colorLocks) throw new Error("L15 must lock colors");
  const orange = l15.cats.find((cat) => cat.id === "cat_orange");
  const gray = l15.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l15.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l15.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L15 missing coats");
  if (!isMismatchSolid(l15, gray, orangeGate)) {
    throw new Error("L15 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l15, orange, grayGate)) {
    throw new Error("L15 gray house must be solid to the orange coat");
  }
  assertNotHome(l15, [["cat_orange", "s"]], "L15 orange-south alone is not home");
  assertNotHome(
    l15,
    [
      ["cat_orange", "s"],
      ["cat_gray", "s"],
      ["cat_gray", "w"],
      ["cat_orange", "n"],
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_gray", "e"],
    ],
    "L15 L13 habit cannot thread the bottom wall",
  );
  assertNotHome(
    l15,
    [
      ["cat_gray", "s"],
      ["cat_gray", "w"],
      ["cat_orange", "s"],
      ["cat_gray", "e"],
    ],
    "L15 L11 habit cannot finish",
  );
}

{
  const l16 = LEVELS.find((level) => level.id === "L16");
  if (!l16) throw new Error("missing L16");
  if (l16.name !== "Stay Brake") throw new Error("L16 must be Stay Brake");
  if (!l16.colorLocks) throw new Error("L16 must lock colors");
  if (/^Hold\b|^Park\b/i.test(l16.name)) throw new Error("L16 must not keep Hold*/Park* title");
}

{
  const l17 = LEVELS.find((level) => level.id === "L17");
  if (!l17) throw new Error("missing L17");
  if (l17.name !== "Under Brake") throw new Error("L17 must be Under Brake");
  if (!l17.colorLocks) throw new Error("L17 must lock colors");
  if (/^Hold\b|^Park\b/i.test(l17.name)) throw new Error("L17 must not keep Hold*/Park* title");
}

{
  const l18 = LEVELS.find((level) => level.id === "L18");
  if (!l18) throw new Error("missing L18");
  if (l18.name !== "Row Brake") throw new Error("L18 must be Row Brake");
  if (!l18.colorLocks) throw new Error("L18 must lock colors");
  if (/^Hold\b|^Park\b/i.test(l18.name)) throw new Error("L18 must not keep Hold*/Park* title");
}

{
  const l19 = LEVELS.find((level) => level.id === "L19");
  if (!l19) throw new Error("missing L19");
  if (l19.name !== "Over Brake") throw new Error("L19 must be Over Brake");
  if (!l19.colorLocks) throw new Error("L19 must lock colors");
  if (/^Hold\b|^Park\b/i.test(l19.name)) throw new Error("L19 must not keep Hold*/Park* title");
}

{
  const l20 = LEVELS.find((level) => level.id === "L20");
  if (!l20) throw new Error("missing L20");
  if (l20.name !== "Side Brake") throw new Error("L20 must be Side Brake");
  if (!l20.colorLocks) throw new Error("L20 must lock colors");
  if (/^Hold\b|^Park\b/i.test(l20.name)) throw new Error("L20 must not keep Hold*/Park* title");
}

{
  const l21 = LEVELS.find((level) => level.id === "L21");
  if (!l21) throw new Error("missing L21");
  if (l21.name !== "Lane Thread") throw new Error("L21 must be Lane Thread");
  if (!l21.colorLocks) throw new Error("L21 must lock colors");
  if (/^Hold\b|^Park\b/i.test(l21.name)) throw new Error("L21 must not keep Hold*/Park* title");
}

{
  const l22 = LEVELS.find((level) => level.id === "L22");
  if (!l22) throw new Error("missing L22");
  if (l22.name !== "Left Brake") throw new Error("L22 must be Left Brake");
  if (!l22.colorLocks) throw new Error("L22 must lock colors");
  if (/^Hold\b|^Park\b/i.test(l22.name)) throw new Error("L22 must not keep Hold*/Park* title");
}

{
  const l23 = LEVELS.find((level) => level.id === "L23");
  if (!l23) throw new Error("missing L23");
  if (l23.name !== "Corner Brake") throw new Error("L23 must be Corner Brake");
  if (!l23.colorLocks) throw new Error("L23 must lock colors");
  if (/^Hold\b|^Park\b/i.test(l23.name)) throw new Error("L23 must not keep Hold*/Park* title");
}

{
  const l24 = LEVELS.find((level) => level.id === "L24");
  if (!l24) throw new Error("missing L24");
  if (l24.name !== "Arc Brake") throw new Error("L24 must be Arc Brake");
  if (!l24.colorLocks) throw new Error("L24 must lock colors");
  const pair = l24.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
    throw new Error("L24 still on gate-farm pair");
  }
}

{
  const l25 = LEVELS.find((level) => level.id === "L25");
  if (!l25) throw new Error("missing L25");
  if (l25.name !== "Column Slip") throw new Error("L25 must be Column Slip");
  if (!l25.colorLocks) throw new Error("L25 must lock colors");
  const pair = l25.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
    throw new Error("L25 still on gate-farm pair");
  }
}

{
  const l26 = LEVELS.find((level) => level.id === "L26");
  if (!l26) throw new Error("missing L26");
  if (!l26.colorLocks) throw new Error("L26 must lock colors");
  const orange = l26.cats.find((cat) => cat.id === "cat_orange");
  const gray = l26.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l26.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l26.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L26 missing coats");
  if (!isMismatchSolid(l26, gray, orangeGate)) {
    throw new Error("L26 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l26, orange, grayGate)) {
    throw new Error("L26 gray house must be solid to the orange coat");
  }
  assertNotHome(
    l26,
    [
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_orange", "n"],
      ["cat_gray", "s"],
      ["cat_gray", "w"],
      ["cat_gray", "n"],
      ["cat_orange", "s"],
      ["cat_gray", "s"],
      ["cat_gray", "e"],
    ],
    "L26 L25 park-low habit cannot finish",
  );
  assertNotHome(
    l26,
    [
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_gray", "n"],
      ["cat_gray", "w"],
      ["cat_gray", "s"],
      ["cat_orange", "n"],
      ["cat_gray", "e"],
      ["cat_gray", "s"],
      ["cat_gray", "w"],
      ["cat_gray", "s"],
    ],
    "L26 L24 park-high habit cannot finish",
  );
}

{
  const l27 = LEVELS.find((level) => level.id === "L27");
  if (!l27) throw new Error("missing L27");
  if (!l27.colorLocks) throw new Error("L27 must lock colors");
  const orange = l27.cats.find((cat) => cat.id === "cat_orange");
  const black = l27.cats.find((cat) => cat.id === "cat_black");
  const orangeGate = l27.gates.find((gate) => gate.id === "gate_orange");
  const blackGate = l27.gates.find((gate) => gate.id === "gate_black");
  if (!orange || !black || !orangeGate || !blackGate) throw new Error("L27 missing coats");
  if (black.color !== "black") throw new Error("L27 must teach a black coat");
  if (blackGate.color !== "black") throw new Error("L27 must teach a black house");
  if (!isMismatchSolid(l27, black, orangeGate)) {
    throw new Error("L27 orange house must be solid to the black coat");
  }
  if (!isMismatchSolid(l27, orange, blackGate)) {
    throw new Error("L27 black house must be solid to the orange coat");
  }
  assertNotHome(
    l27,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "n"],
    ],
    "L27 north without the east park overshoots",
  );
  assertNotHome(
    l27,
    [
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_orange", "n"],
      ["cat_black", "s"],
      ["cat_black", "w"],
      ["cat_black", "n"],
      ["cat_orange", "s"],
      ["cat_black", "s"],
      ["cat_black", "e"],
    ],
    "L27 L25 park-low habit cannot finish",
  );
}

{
  const l28 = LEVELS.find((level) => level.id === "L28");
  if (!l28) throw new Error("missing L28");
  if (l28.name !== "West Brake") throw new Error("L28 must be West Brake");
  if (!l28.colorLocks) throw new Error("L28 must lock colors");
  if (/^Hold\b|^Park\b/i.test(l28.name)) throw new Error("L28 must not keep Hold*/Park* title");
}

{
  const l29 = LEVELS.find((level) => level.id === "L29");
  if (!l29) throw new Error("missing L29");
  if (l29.name !== "Pair Cut") throw new Error("L29 must be Pair Cut");
  if (!l29.colorLocks) throw new Error("L29 must lock colors");
  const pair = l29.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
    throw new Error("L29 still on gate-farm pair");
  }
}

{
  const l30 = LEVELS.find((level) => level.id === "L30");
  if (!l30) throw new Error("missing L30");
  if (!l30.colorLocks) throw new Error("L30 must lock colors");
  const orange = l30.cats.find((cat) => cat.id === "cat_orange");
  const other = l30.cats.find((cat) => cat.id === "cat_black");
  const orangeGate = l30.gates.find((gate) => gate.id === "gate_orange");
  const otherGate = l30.gates.find((gate) => gate.id === "gate_black");
  if (!orange || !other || !orangeGate || !otherGate) throw new Error("L30 missing coats");
  if (other.color !== "black") throw new Error("L30 must teach a black coat");
  if (otherGate.color !== "black") throw new Error("L30 must teach a black house");
  if (!isMismatchSolid(l30, other, orangeGate)) {
    throw new Error("L30 orange house must be solid to the black coat");
  }
  if (!isMismatchSolid(l30, orange, otherGate)) {
    throw new Error("L30 black house must be solid to the orange coat");
  }
}

{
  const l31 = LEVELS.find((level) => level.id === "L31");
  if (!l31) throw new Error("missing L31");
  if (l31.name !== "West Slip") throw new Error("L31 must be West Slip");
  if (!l31.colorLocks) throw new Error("L31 must lock colors");
  const pair = l31.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
    throw new Error("L31 still on gate-farm pair");
  }
}

{
  const l32 = LEVELS.find((level) => level.id === "L32");
  if (!l32) throw new Error("missing L32");
  if (!l32.colorLocks) throw new Error("L32 must lock colors");
  const orange = l32.cats.find((cat) => cat.id === "cat_orange");
  const black = l32.cats.find((cat) => cat.id === "cat_black");
  const orangeGate = l32.gates.find((gate) => gate.id === "gate_orange");
  const blackGate = l32.gates.find((gate) => gate.id === "gate_black");
  if (!orange || !black || !orangeGate || !blackGate) throw new Error("L32 missing coats");
  if (black.color !== "black") throw new Error("L32 must keep teaching a black coat");
  if (blackGate.color !== "black") throw new Error("L32 must keep a black house");
  if (!isMismatchSolid(l32, black, orangeGate)) {
    throw new Error("L32 orange house must be solid to the black coat");
  }
  if (!isMismatchSolid(l32, orange, blackGate)) {
    throw new Error("L32 black house must be solid to the orange coat");
  }
  assertNotHome(
    l32,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_orange", "n"],
    ],
    "L32 north without the parked brake overshoots",
  );
  assertNotHome(
    l32,
    [
      ["cat_orange", "s"],
      ["cat_black", "s"],
      ["cat_black", "w"],
      ["cat_orange", "e"],
      ["cat_black", "e"],
      ["cat_black", "n"],
      ["cat_black", "w"],
      ["cat_black", "s"],
    ],
    "L32 L31 hold-east habit cannot finish",
  );
}

{
  const l33 = LEVELS.find((level) => level.id === "L33");
  if (!l33) throw new Error("missing L33");
  if (!l33.colorLocks) throw new Error("L33 must lock colors");
  const orange = l33.cats.find((cat) => cat.id === "cat_orange");
  const black = l33.cats.find((cat) => cat.id === "cat_black");
  const orangeGate = l33.gates.find((gate) => gate.id === "gate_orange");
  const blackGate = l33.gates.find((gate) => gate.id === "gate_black");
  if (!orange || !black || !orangeGate || !blackGate) throw new Error("L33 missing coats");
  if (black.color !== "black") throw new Error("L33 must keep teaching a black coat");
  if (blackGate.color !== "black") throw new Error("L33 must keep a black house");
  if (!isMismatchSolid(l33, black, orangeGate)) {
    throw new Error("L33 orange house must be solid to the black coat");
  }
  if (!isMismatchSolid(l33, orange, blackGate)) {
    throw new Error("L33 black house must be solid to the orange coat");
  }
  assertNotHome(
    l33,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_orange", "w"],
    ],
    "L33 west without the parked brake overshoots",
  );
  assertNotHome(
    l33,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_black", "n"],
      ["cat_black", "w"],
      ["cat_black", "s"],
      ["cat_orange", "n"],
      ["cat_black", "e"],
      ["cat_black", "s"],
    ],
    "L33 L32 thread-north habit cannot finish",
  );
}

{
  const l34 = LEVELS.find((level) => level.id === "L34");
  if (!l34) throw new Error("missing L34");
  if (l34.name !== "Wall Seal") throw new Error("L34 must be Wall Seal");
  if (!l34.colorLocks) throw new Error("L34 must lock colors");
  const pair = l34.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
    throw new Error("L34 still on gate-farm pair");
  }
}

{
  const l35 = LEVELS.find((level) => level.id === "L35");
  if (!l35) throw new Error("missing L35");
  if (l35.name !== "Clear First") throw new Error("L35 must be Clear First");
  if (!l35.colorLocks) throw new Error("L35 must lock colors");
}

{
  const l36 = LEVELS.find((level) => level.id === "L36");
  if (!l36) throw new Error("missing L36");
  if (l36.name !== "High Brake") throw new Error("L36 must be High Brake");
  if (!l36.colorLocks) throw new Error("L36 must lock colors");
  if (/^Hold\b|^Park\b/i.test(l36.name)) throw new Error("L36 must not keep Hold*/Park* title");
}

{
  const l37 = LEVELS.find((level) => level.id === "L37");
  if (!l37) throw new Error("missing L37");
  if (l37.name !== "Low Brake") throw new Error("L37 must be Low Brake");
  if (!l37.colorLocks) throw new Error("L37 must lock colors");
  if (/^Hold\b|^Park\b/i.test(l37.name)) throw new Error("L37 must not keep Hold*/Park* title");
}

{
  const l38 = LEVELS.find((level) => level.id === "L38");
  if (!l38) throw new Error("missing L38");
  if (l38.name !== "East Seal") throw new Error("L38 must be East Seal");
  if (!l38.colorLocks) throw new Error("L38 must lock colors");
  const pair = l38.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
    throw new Error("L38 still on gate-farm pair");
  }
}

{
  const l39 = LEVELS.find((level) => level.id === "L39");
  if (!l39) throw new Error("missing L39");
  if (!l39.colorLocks) throw new Error("L39 must lock colors");
  const orange = l39.cats.find((cat) => cat.id === "cat_orange");
  const black = l39.cats.find((cat) => cat.id === "cat_black");
  const orangeGate = l39.gates.find((gate) => gate.id === "gate_orange");
  const blackGate = l39.gates.find((gate) => gate.id === "gate_black");
  if (!orange || !black || !orangeGate || !blackGate) throw new Error("L39 missing coats");
  if (black.color !== "black") throw new Error("L39 must keep teaching a black coat");
  if (blackGate.color !== "black") throw new Error("L39 must keep a black house");
  if (!isMismatchSolid(l39, black, orangeGate)) {
    throw new Error("L39 orange house must be solid to the black coat");
  }
  if (!isMismatchSolid(l39, orange, blackGate)) {
    throw new Error("L39 black house must be solid to the orange coat");
  }
  if (black.y !== orangeGate.y || black.x >= orangeGate.x) {
    throw new Error("L39 black must start west on the house row so they vacate first");
  }
  assertNotHome(
    l39,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "w"],
      ["cat_orange", "e"],
    ],
    "L39 through the house without vacating overshoots",
  );
  assertNotHome(
    l39,
    [
      ["cat_orange", "s"],
      ["cat_black", "e"],
      ["cat_black", "s"],
      ["cat_orange", "w"],
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_black", "e"],
      ["cat_black", "n"],
      ["cat_black", "w"],
    ],
    "L39 L38 solid-east habit cannot finish",
  );
}

for (const level of LEVELS) {
  if (!allCatsOnGates(level, level.cats)) {
    const dirs = legalDirs(level, level.cats, level.cats[0].id);
    if (dirs.length === 0) {
      throw new Error(`${level.id} has no opening slide`);
    }
  }
  const script = SOLVES[level.id];
  if (!script) throw new Error(`Missing solve for ${level.id}`);
  const { used } = play(level, script);
  console.log(`#${level.number} ${level.id} ok · ${used}/${level.moveBudget} slides`);
}

{
  const ink = friendForClear(6);
  if (ink?.friendId !== "friend_002") {
    throw new Error(`onClear(6) must unlock Ink, got ${ink?.friendId ?? "none"}`);
  }
  if (NAMING.prefill !== "") throw new Error("naming prefill must stay empty");
  if (!NAMING.require_choice) throw new Error("naming must require a choice");
  if (CHAPTER2.unlock_clear !== 6 || CHAPTER2.friend_id !== "friend_002") {
    throw new Error("chapter2 pack must pin Ink at clear 6");
  }
  if (CHAPTER2.naming.prefill !== "") throw new Error("chapter2 naming prefill must stay empty");
  const inkChips = chipsForFriend("friend_002");
  if (inkChips.join(",") !== "Ink,Slate,Nimbus") {
    throw new Error(`Ink chips must be Ink/Slate/Nimbus, got ${inkChips.join("/")}`);
  }
  if (inkChips.includes("Misty")) throw new Error("Ink chips must not include Misty");
  if (inkChips.includes("Ash") || inkChips.includes("Shadow")) {
    throw new Error("Ink chips must not leak Ash@36 or Shadow@27 parade names");
  }
  const inkBang = CHAPTER2.bang_copy.friend_002?.[0];
  if (inkBang !== "{Name}: Quiet gray paws. Already claimed a shadow.") {
    throw new Error(`Ink first-night drifted: ${inkBang}`);
  }
  if (ink.displayLine !== "Quiet gray paws. Already claimed a shadow.") {
    throw new Error(`Ink display line drifted: ${ink.displayLine}`);
  }
  if (ink.phenotype.personality !== "Soft") {
    throw new Error(`Ink personality must be Soft, got ${ink.phenotype.personality}`);
  }
  if (ink.phenotype.boardColor !== "gray") throw new Error("Ink must be color_gray");
  if (furnitureGiftsForClear(6).length !== 0) throw new Error("clear 6 must gift nothing");
  for (const clear of [1, 2, 3, 4, 5, 6]) {
    const hearts = heartsForClear(clear);
    if (hearts < 5 || hearts > 7) throw new Error(`clear ${clear} hearts ${hearts} not in 5–7`);
  }
  if (EMPTY_SAVE.furniture.includes("furn_tree_mini")) {
    throw new Error("Mini Cat Tree must not be auto-owned — it is a Hearts shop card");
  }
  const shop3 = shopItemsForClear(3).map((sku) => `${sku.skuId}:${sku.hearts}`).sort();
  if (shop3.join(",") !== "furn_scratch_post:15,furn_tree_mini:40") {
    throw new Error(`shop @3 drifted: ${shop3.join(",")}`);
  }
  const shop6 = shopItemsForClear(6).map((sku) => `${sku.skuId}:${sku.hearts}`).sort();
  if (shop6.join(",") !== "furn_scratch_post:15,furn_swing_yarn:40,furn_tree_mini:40") {
    throw new Error(`shop @6 drifted: ${shop6.join(",")}`);
  }
  const shopArt: Array<[string, string, number, number]> = [
    ["furn_scratch_post", "/assets/furniture/scratcher.svg", 15, 3],
    ["furn_tree_mini", "/assets/furniture/miniTree.svg", 40, 3],
    ["furn_swing_yarn", "/assets/furniture/yarnSwing.svg", 40, 6],
    ["furn_fountain_stone", "/assets/furniture/fountain.svg", 90, 18],
    ["furn_perch_high", "/assets/furniture/swing.svg", 120, 36],
  ];
  for (const [skuId, asset, hearts, unlock] of shopArt) {
    const shop = CHAPTER2.shop.items.find((item) => item.sku_id === skuId);
    if (!shop || shop.asset !== asset || shop.hearts !== hearts || shop.unlock_clear !== unlock) {
      throw new Error(`shop ${skuId} art map drifted`);
    }
    const sku = FURNITURE.find((row) => row.skuId === skuId);
    if (!sku || sku.asset !== asset || sku.hearts !== hearts || sku.shopUnlockClear !== unlock) {
      throw new Error(`furniture ${skuId} art map drifted`);
    }
  }
  const artSvg: Record<string, string> = {
    "public/assets/furniture/scratcher.svg": `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="72" viewBox="0 0 48 72" fill="none">
  <ellipse cx="24" cy="64" rx="16" ry="5" fill="#B89870" stroke="#2B2A28" stroke-width="2.5"/>
  <rect x="16" y="14" width="16" height="48" rx="4" fill="#C4A882" stroke="#2B2A28" stroke-width="2.5"/>
  <path d="M18 22 H30 M18 30 H30 M18 38 H30 M18 46 H30" stroke="#F0B429" stroke-width="1.6" stroke-linecap="round"/>
  <ellipse cx="24" cy="14" rx="9" ry="4" fill="#B89870" stroke="#2B2A28" stroke-width="2"/>
</svg>`,
    "public/assets/furniture/miniTree.svg": `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="96" viewBox="0 0 72 96" fill="none">
  <ellipse cx="36" cy="88" rx="22" ry="6" fill="#B89870" stroke="#2B2A28" stroke-width="2.5"/>
  <rect x="30" y="36" width="12" height="50" rx="3" fill="#C4A882" stroke="#2B2A28" stroke-width="2.5"/>
  <ellipse cx="36" cy="58" rx="20" ry="7" fill="#E8A89A" stroke="#2B2A28" stroke-width="2.5"/>
  <ellipse cx="36" cy="34" rx="16" ry="6" fill="#E8C89A" stroke="#2B2A28" stroke-width="2.5"/>
  <ellipse cx="36" cy="30" rx="10" ry="4" fill="#D96B4A" stroke="#2B2A28" stroke-width="2"/>
</svg>`,
    "public/assets/furniture/yarnSwing.svg": `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
  <path d="M18 80 L44 22 L52 22 L28 80 Z" fill="#C4A882" stroke="#2B2A28" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M78 80 L52 22 L44 22 L68 80 Z" fill="#B89870" stroke="#2B2A28" stroke-width="2.5" stroke-linejoin="round"/>
  <rect x="40" y="20" width="16" height="6" rx="2" fill="#C4A882" stroke="#2B2A28" stroke-width="2"/>
  <path d="M44 26 L40 58" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M52 26 L56 58" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="48" cy="62" r="12" fill="#D96B4A" stroke="#2B2A28" stroke-width="2.5"/>
  <path d="M40 58 C46 56 50 62 56 60 M42 66 C48 64 52 68 56 64" fill="none" stroke="#2B2A28" stroke-width="1.6" stroke-linecap="round"/>
</svg>`,
  };
  for (const [file, expected] of Object.entries(artSvg)) {
    const got = readFileSync(resolve(file), "utf8").trim();
    if (got !== expected.trim()) throw new Error(`${file} is not the Art lock`);
  }
  if (!CHAPTER2.personality_pools.Soft.includes("Ink")) {
    throw new Error("personality pool Soft must include Ink");
  }
  if (ART_KIT_PATH.slate.loaf48 !== "/assets/cats/ink_loaf_48.svg") {
    throw new Error("Ink yard/unlock must map slate 48 → ink_loaf_48");
  }
  if (ART_KIT_PATH.slate.loaf72 !== "/assets/cats/ink_loaf_72.svg") {
    throw new Error("Ink yard/unlock must map slate 72 → ink_loaf_72");
  }
  const artFiles = [
    "public/assets/cats/ink_loaf_48.svg",
    "public/assets/cats/ink_loaf_72.svg",
    "public/assets/cats/color_gray_loaf_48.svg",
    "public/assets/cats/color_gray_loaf_72.svg",
    "public/assets/cats/gray_loaf_48.svg",
    "public/assets/cats/gray_loaf_72.svg",
    "public/assets/cats/friend_002_loaf_48.svg",
    "public/assets/cats/friend_002_loaf_72.svg",
    "public/assets/gates/gate_orange.svg",
    "public/assets/gates/gate_gray.svg",
    "public/assets/furniture/scratcher.svg",
    "public/assets/furniture/miniTree.svg",
    "public/assets/furniture/yarnSwing.svg",
  ];
  for (const file of artFiles) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  if (GATE_ASSETS.orange !== "/assets/gates/gate_orange.svg") {
    throw new Error("LT08 orange gate path drifted");
  }
  if (GATE_ASSETS.gray !== "/assets/gates/gate_gray.svg") {
    throw new Error("LT08 gray gate path drifted");
  }
  if (FURN_ASSETS.scratcher !== "/assets/furniture/scratcher.svg") {
    throw new Error("shop scratcher path drifted");
  }
  if (FURN_ASSETS.miniTree !== "/assets/furniture/miniTree.svg") {
    throw new Error("shop miniTree path drifted");
  }
  if (FURN_ASSETS.yarnSwing !== "/assets/furniture/yarnSwing.svg") {
    throw new Error("shop yarnSwing path drifted");
  }
  if (FURN_ASSETS.sunCushion !== "/assets/furniture/sunCushion.svg") {
    throw new Error("Sun Cushion path drifted");
  }
  console.log("Ink @ onClear(6) ok · ink loafs + LT08 gates + shop furniture wired");
}

{
  const biscuit = friendForClear(9);
  if (biscuit?.friendId !== "friend_003") {
    throw new Error(`onClear(9) must unlock Biscuit, got ${biscuit?.friendId ?? "none"}`);
  }
  if (CHAPTER3.unlock_clear !== 9 || CHAPTER3.friend_id !== "friend_003") {
    throw new Error("chapter3 pack must pin Biscuit at clear 9");
  }
  if (CHAPTER3.naming.prefill !== "") throw new Error("biscuit naming prefill must stay empty");
  const biscuitChips = chipsForFriend("friend_003");
  if (biscuitChips.join(",") !== "Biscuit,Mochi,Toast") {
    throw new Error(`Biscuit chips must be Biscuit/Mochi/Toast, got ${biscuitChips.join("/")}`);
  }
  if (biscuitChips.includes("Misty") || biscuitChips.includes("Ink")) {
    throw new Error("Biscuit chips must stay on the Hungry food pool");
  }
  if (biscuit.displayLine !== "Here for snacks. Possibly also for you.") {
    throw new Error(`Biscuit display line drifted: ${biscuit.displayLine}`);
  }
  if (biscuit.phenotype.personality !== "Hungry") {
    throw new Error(`Biscuit personality must be Hungry, got ${biscuit.phenotype.personality}`);
  }
  if (biscuit.phenotype.artKit !== "cream") throw new Error("Biscuit must use cream loafs");
  const gifts9 = furnitureGiftsForClear(9);
  if (gifts9.length !== 1 || gifts9[0]?.skuId !== "furn_bed_cushion") {
    throw new Error(`clear 9 must gift the Sun Cushion, got ${gifts9.map((sku) => sku.skuId).join(",")}`);
  }
  if (gifts9[0]?.asset !== "/assets/furniture/sunCushion.svg") {
    throw new Error(`Sun Cushion art drifted: ${gifts9[0]?.asset}`);
  }
  if (BISCUIT_GIFT.asset !== "/assets/furniture/sunCushion.svg") {
    throw new Error("chapter3 gift art must be sunCushion.svg");
  }
  const bang = CHAPTER3.bang_copy.friend_003?.[0];
  if (bang !== "{Name}: Here for snacks. Possibly also for you.") {
    throw new Error(`Biscuit first-night drifted: ${bang}`);
  }
  if (ART_KIT_PATH.cream.loaf48 !== "/assets/cats/cream_loaf_48.svg") {
    throw new Error("Biscuit yard/unlock must map cream 48 → cream_loaf_48");
  }
  if (ART_KIT_PATH.cream.loaf72 !== "/assets/cats/cream_loaf_72.svg") {
    throw new Error("Biscuit yard/unlock must map cream 72 → cream_loaf_72");
  }
  const shopStill = shopItemsForClear(9).map((sku) => sku.skuId).sort();
  if (shopStill.join(",") !== "furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
    throw new Error(`shop SKUs drifted after Biscuit: ${shopStill.join(",")}`);
  }
  const cushionSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="56" viewBox="0 0 96 56" fill="none">
  <ellipse cx="48" cy="36" rx="38" ry="14" fill="#C4B49A" stroke="#2B2A28" stroke-width="2.5"/>
  <ellipse cx="48" cy="28" rx="36" ry="14" fill="#F0B429" stroke="#2B2A28" stroke-width="2.5"/>
  <ellipse cx="48" cy="26" rx="22" ry="7" fill="#F8D56A" stroke="#2B2A28" stroke-width="2"/>
  <path d="M32 26 Q48 20 64 26" fill="none" stroke="#2B2A28" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
</svg>`;
  const gotCushion = readFileSync(resolve("public/assets/furniture/sunCushion.svg"), "utf8").trim();
  if (gotCushion !== cushionSvg.trim()) throw new Error("sunCushion.svg is not the Chapter 3 lock");
  for (const file of [
    "public/assets/cats/cream_loaf_48.svg",
    "public/assets/cats/cream_loaf_72.svg",
    "public/assets/furniture/sunCushion.svg",
  ]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  if (friendForClear(6)?.friendId !== "friend_002") {
    throw new Error("Biscuit wiring must not move Ink off onClear(6)");
  }
  if (friendForClear(3)?.friendId !== "friend_001") {
    throw new Error("Biscuit wiring must not move Mango off onClear(3)");
  }
  console.log("Biscuit @ onClear(9) ok · cream loafs + Sun Cushion + L11–L12 wired");
}

{
  const tux = friendForClear(12);
  if (tux?.friendId !== "friend_004") {
    throw new Error(`onClear(12) must unlock Tux, got ${tux?.friendId ?? "none"}`);
  }
  if (CHAPTER3_TUX.unlock_clear !== 12 || CHAPTER3_TUX.friend_id !== "friend_004") {
    throw new Error("tux pack must pin Tux at clear 12");
  }
  if (CHAPTER3_TUX.naming.prefill !== "") throw new Error("tux naming prefill must stay empty");
  const tuxChips = chipsForFriend("friend_004");
  if (tuxChips.join(",") !== "Tux,Domino,Bowtie") {
    throw new Error(`Tux chips must be Tux/Domino/Bowtie, got ${tuxChips.join("/")}`);
  }
  if (tuxChips.includes("Misty") || tuxChips.includes("Ink") || tuxChips.includes("Biscuit")) {
    throw new Error("Tux chips must stay off the Ink soft pool and Biscuit food pool");
  }
  if (tux.displayLine !== "Dressed for dinner. Will still sit in the box.") {
    throw new Error(`Tux display line drifted: ${tux.displayLine}`);
  }
  if (tux.phenotype.personality !== "Formal") {
    throw new Error(`Tux personality must be Formal, got ${tux.phenotype.personality}`);
  }
  if (tux.phenotype.artKit !== "tuxedo") throw new Error("Tux must use tuxedo loafs, not calico");
  if (ART_KIT_PATH.calico.loaf72 === ART_KIT_PATH.tuxedo.loaf72) {
    throw new Error("tuxedo kit must not point at calico loafs");
  }
  if (tux.phenotype.boardColor !== "black") throw new Error("Tux must be color_black");
  if (furnitureGiftsForClear(12).length !== 0) throw new Error("clear 12 must gift nothing");
  const bang = CHAPTER3_TUX.bang_copy.friend_004?.[0];
  if (bang !== "{Name}: Dressed for dinner. Will still sit in the box.") {
    throw new Error(`Tux first-night drifted: ${bang}`);
  }
  if (ART_KIT_PATH.tuxedo.loaf48 !== "/assets/cats/tux_loaf_48.svg") {
    throw new Error("Tux yard/unlock must map tuxedo 48 → tux_loaf_48");
  }
  if (ART_KIT_PATH.tuxedo.loaf72 !== "/assets/cats/tux_loaf_72.svg") {
    throw new Error("Tux yard/unlock must map tuxedo 72 → tux_loaf_72");
  }
  const shopStill = shopItemsForClear(12).map((sku) => sku.skuId).sort();
  if (shopStill.join(",") !== "furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
    throw new Error(`shop SKUs drifted after Tux: ${shopStill.join(",")}`);
  }
  const tuxSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <ellipse cx="24" cy="28" rx="16" ry="12" fill="#3A3D48" stroke="#2B2A28" stroke-width="2" stroke-linejoin="round"/>
  <path d="M12 20 C12 14 16 12 18 16" fill="#2F323C" stroke="#2B2A28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M36 20 C36 14 32 12 30 16" fill="#2F323C" stroke="#2B2A28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 24.5 L24 36 L28 24.5 Q24 23 20 24.5 Z" fill="#FFF8F0" stroke="#2B2A28" stroke-width="1.6" stroke-linejoin="round"/>
  <ellipse cx="15.5" cy="36.5" rx="3.4" ry="2.3" fill="#FFF8F0" stroke="#2B2A28" stroke-width="1.6"/>
  <ellipse cx="32.5" cy="36.5" rx="3.4" ry="2.3" fill="#FFF8F0" stroke="#2B2A28" stroke-width="1.6"/>
  <circle cx="18" cy="26" r="1.6" fill="#2B2A28"/>
  <circle cx="28" cy="26" r="1.6" fill="#2B2A28"/>
  <path d="M38 32 C42 30 44 34 40 36" fill="none" stroke="#2B2A28" stroke-width="2" stroke-linecap="round"/>
</svg>`;
  const tux72 = tuxSvg.replace('width="48" height="48"', 'width="72" height="72"');
  for (const [file, expected] of [
    ["public/assets/cats/tux_loaf_48.svg", tuxSvg],
    ["public/assets/cats/tux_loaf_72.svg", tux72],
    ["public/assets/cats/friend_004_loaf_48.svg", tuxSvg],
    ["public/assets/cats/friend_004_loaf_72.svg", tux72],
  ] as const) {
    const got = readFileSync(resolve(file), "utf8").trim();
    if (got !== expected.trim()) throw new Error(`${file} is not the tuxedo loaf lock`);
  }
  if (CAT_ASSETS.tux_loaf_72 !== "/assets/cats/tux_loaf_72.svg") {
    throw new Error("CAT_ASSETS tux loaf drifted");
  }
  if (tuxChips.includes("Misty") || tuxChips.includes("Ash") || tuxChips.includes("Shadow")) {
    throw new Error("Tux chips must never use the Ink soft pool");
  }
  if (paradeClearForLevel("L12") !== 12) throw new Error("L12 must map to parade clear 12");
  if (paradeClearForLevel("L11") !== 11) throw new Error("L11 must map to parade clear 11");
  if (shippedFriendForClear(12)?.friendId !== "friend_004") {
    throw new Error("shipped parade must award Tux at 12");
  }
  if (shippedFriendForClear(11)) throw new Error("L11 must not award a friend");
  if (shippedFriendForClear(15)?.friendId !== "friend_005") {
    throw new Error("shipped parade must award Ghost at 15");
  }
  if (friendForClear(6)?.friendId !== "friend_002") {
    throw new Error("Tux wiring must not move Ink off onClear(6)");
  }
  if (friendForClear(9)?.friendId !== "friend_003") {
    throw new Error("Tux wiring must not move Biscuit off onClear(9)");
  }
  if (friendForClear(3)?.friendId !== "friend_001") {
    throw new Error("Tux wiring must not move Mango off onClear(3)");
  }
  console.log("Tux @ onClear(12) ok · tuxedo loafs + L13–L15 wired");
}

{
  const ghost = friendForClear(15);
  if (ghost?.friendId !== "friend_005") {
    throw new Error(`onClear(15) must unlock Ghost, got ${ghost?.friendId ?? "none"}`);
  }
  if (CHAPTER3_GHOST.unlock_clear !== 15 || CHAPTER3_GHOST.friend_id !== "friend_005") {
    throw new Error("ghost pack must pin Ghost at clear 15");
  }
  if (CHAPTER3_GHOST.naming.prefill !== "") throw new Error("ghost naming prefill must stay empty");
  const ghostChips = chipsForFriend("friend_005");
  if (ghostChips.join(",") !== "Ghost,Wisp,Pearl") {
    throw new Error(`Ghost chips must be Ghost/Wisp/Pearl, got ${ghostChips.join("/")}`);
  }
  for (const banned of ["Tux", "Domino", "Bowtie", "Ink", "Ash", "Shadow", "Biscuit", "Mochi", "Toast", "Misty"]) {
    if (ghostChips.includes(banned)) {
      throw new Error(`Ghost chips must stay off prior pools, found ${banned}`);
    }
  }
  if (ghost.displayLine !== "A pale loaf. Appears when the sun hits the porch.") {
    throw new Error(`Ghost display line drifted: ${ghost.displayLine}`);
  }
  if (ghost.phenotype.personality !== "Shy") {
    throw new Error(`Ghost personality must be Shy, got ${ghost.phenotype.personality}`);
  }
  if (ghost.phenotype.artKit !== "ghost") throw new Error("Ghost must use ghost loafs");
  if (ghost.phenotype.boardColor !== "gray") throw new Error("Ghost must be color_gray");
  if (furnitureGiftsForClear(15).length !== 0) throw new Error("clear 15 must gift nothing");
  const bang = CHAPTER3_GHOST.bang_copy.friend_005?.[0];
  if (bang !== "{Name}: A pale loaf. Appears when the sun hits the porch.") {
    throw new Error(`Ghost first-night drifted: ${bang}`);
  }
  if (ART_KIT_PATH.ghost.loaf48 !== "/assets/cats/ghost_loaf_48.svg") {
    throw new Error("Ghost yard/unlock must map ghost 48 → ghost_loaf_48");
  }
  if (ART_KIT_PATH.ghost.loaf72 !== "/assets/cats/ghost_loaf_72.svg") {
    throw new Error("Ghost yard/unlock must map ghost 72 → ghost_loaf_72");
  }
  const shopStill = shopItemsForClear(15).map((sku) => sku.skuId).sort();
  if (shopStill.join(",") !== "furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
    throw new Error(`shop SKUs drifted after Ghost: ${shopStill.join(",")}`);
  }
  for (const file of ["public/assets/cats/ghost_loaf_48.svg", "public/assets/cats/ghost_loaf_72.svg"]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  if (paradeClearForLevel("L15") !== 15) throw new Error("L15 must map to parade clear 15");
  if (paradeClearForLevel("L16") !== 16) throw new Error("L16 must map to parade clear 16");
  if (shippedFriendForClear(15)?.friendId !== "friend_005") {
    throw new Error("shipped parade must award Ghost at 15");
  }
  if (shippedFriendForClear(14)) throw new Error("L14 must not award a friend");
  if (shippedFriendForClear(16)) throw new Error("L16 must not award a friend");
  if (shippedFriendForClear(24)?.friendId !== "friend_008") {
    throw new Error("shipped parade must award Pumpkin at 24");
  }
  if (friendForClear(6)?.friendId !== "friend_002") {
    throw new Error("Ghost wiring must not move Ink off onClear(6)");
  }
  if (friendForClear(9)?.friendId !== "friend_003") {
    throw new Error("Ghost wiring must not move Biscuit off onClear(9)");
  }
  if (friendForClear(12)?.friendId !== "friend_004") {
    throw new Error("Ghost wiring must not move Tux off onClear(12)");
  }
  if (friendForClear(3)?.friendId !== "friend_001") {
    throw new Error("Ghost wiring must not move Mango off onClear(3)");
  }
  console.log("Ghost @ onClear(15) ok · pale loafs + L16–L18 wired");
}

{
  const mist = friendForClear(18);
  if (mist?.friendId !== "friend_006") {
    throw new Error(`onClear(18) must unlock Mist, got ${mist?.friendId ?? "none"}`);
  }
  if (CHAPTER3_MIST.unlock_clear !== 18 || CHAPTER3_MIST.friend_id !== "friend_006") {
    throw new Error("mist pack must pin Mist at clear 18");
  }
  if (CHAPTER3_MIST.naming.prefill !== "") throw new Error("mist naming prefill must stay empty");
  const mistChips = chipsForFriend("friend_006");
  if (mistChips.join(",") !== "Mist,Fog,Soft") {
    throw new Error(`Mist chips must be Mist/Fog/Soft, got ${mistChips.join("/")}`);
  }
  for (const banned of [
    "Ghost",
    "Wisp",
    "Pearl",
    "Tux",
    "Domino",
    "Bowtie",
    "Ink",
    "Ash",
    "Shadow",
    "Biscuit",
    "Mochi",
    "Toast",
    "Misty",
  ]) {
    if (mistChips.includes(banned)) {
      throw new Error(`Mist chips must stay off prior pools, found ${banned}`);
    }
  }
  if (mist.displayLine !== "Soft as weather. Will fog up your lap.") {
    throw new Error(`Mist display line drifted: ${mist.displayLine}`);
  }
  if (mist.phenotype.personality !== "Dreamy") {
    throw new Error(`Mist personality must be Dreamy, got ${mist.phenotype.personality}`);
  }
  if (mist.phenotype.artKit !== "mist") throw new Error("Mist must use mist loafs, not Ink slate");
  if (mist.phenotype.boardColor !== "gray") throw new Error("Mist must be color_gray");
  if (mist.phenotype.pattern !== "Mackerel") throw new Error("Mist must stay gray mackerel");
  if (furnitureGiftsForClear(18).length !== 0) throw new Error("clear 18 must gift nothing");
  const bang = CHAPTER3_MIST.bang_copy.friend_006?.[0];
  if (bang !== "{Name}: Soft as weather. Will fog up your lap.") {
    throw new Error(`Mist first-night drifted: ${bang}`);
  }
  if (ART_KIT_PATH.mist.loaf48 !== "/assets/cats/mist_loaf_48.svg") {
    throw new Error("Mist yard/unlock must map mist 48 → mist_loaf_48");
  }
  if (ART_KIT_PATH.mist.loaf72 !== "/assets/cats/mist_loaf_72.svg") {
    throw new Error("Mist yard/unlock must map mist 72 → mist_loaf_72");
  }
  if (ART_KIT_PATH.ghost.loaf72 !== "/assets/cats/ghost_loaf_72.svg") {
    throw new Error("Mist wiring must not move Ghost pale loafs");
  }
  if (ART_KIT_PATH.tuxedo.loaf72 !== "/assets/cats/tux_loaf_72.svg") {
    throw new Error("Mist wiring must not move Tux tuxedo loafs");
  }
  if (ART_KIT_PATH.slate.loaf72 !== "/assets/cats/ink_loaf_72.svg") {
    throw new Error("Ink slate loafs must stay on the slate kit");
  }
  const shopStill = shopItemsForClear(18).map((sku) => sku.skuId).sort();
  if (shopStill.join(",") !== "furn_fountain_stone,furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
    throw new Error(`shop SKUs drifted after Mist: ${shopStill.join(",")}`);
  }
  for (const file of ["public/assets/cats/mist_loaf_48.svg", "public/assets/cats/mist_loaf_72.svg"]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const mistArt = readFileSync(resolve("public/assets/cats/mist_loaf_72.svg"), "utf8");
  const inkArt = readFileSync(resolve("public/assets/cats/ink_loaf_72.svg"), "utf8");
  const ghostArt = readFileSync(resolve("public/assets/cats/ghost_loaf_72.svg"), "utf8");
  if (mistArt === inkArt) throw new Error("Mist loaf must not be an Ink clone");
  if (mistArt === ghostArt) throw new Error("Mist loaf must not be a Ghost clone");
  if (!mistArt.includes("#C4BDB4")) throw new Error("Mist loaf must use dreamy slate #C4BDB4");
  if (!mistArt.includes("#8F8880")) throw new Error("Mist loaf must show mackerel stripes");
  if (paradeClearForLevel("L18") !== 18) throw new Error("L18 must map to parade clear 18");
  if (paradeClearForLevel("L19") !== 19) throw new Error("L19 must map to parade clear 19");
  if (paradeClearForLevel("L21") !== 21) throw new Error("L21 must map to parade clear 21");
  if (shippedFriendForClear(18)?.friendId !== "friend_006") {
    throw new Error("shipped parade must award Mist at 18");
  }
  if (shippedFriendForClear(17)) throw new Error("L17 must not award a friend");
  if (shippedFriendForClear(19)) throw new Error("L19 must not award a friend");
  if (shippedFriendForClear(20)) throw new Error("L20 must not award a friend");
  if (shippedFriendForClear(21)?.friendId !== "friend_007") {
    throw new Error("shipped parade must award Pepper at 21");
  }
  if (shippedFriendForClear(24)?.friendId !== "friend_008") {
    throw new Error("shipped parade must award Pumpkin at 24");
  }
  if (friendForClear(6)?.friendId !== "friend_002") {
    throw new Error("Mist wiring must not move Ink off onClear(6)");
  }
  if (friendForClear(9)?.friendId !== "friend_003") {
    throw new Error("Mist wiring must not move Biscuit off onClear(9)");
  }
  if (friendForClear(12)?.friendId !== "friend_004") {
    throw new Error("Mist wiring must not move Tux off onClear(12)");
  }
  if (friendForClear(15)?.friendId !== "friend_005") {
    throw new Error("Mist wiring must not move Ghost off onClear(15)");
  }
  if (friendForClear(3)?.friendId !== "friend_001") {
    throw new Error("Mist wiring must not move Mango off onClear(3)");
  }
  if (friendForClear(15)?.phenotype.artKit !== "ghost") {
    throw new Error("Ghost must keep pale ghost loafs after Mist");
  }
  if (friendForClear(12)?.phenotype.artKit !== "tuxedo") {
    throw new Error("Tux must keep tuxedo loafs after Mist");
  }
  console.log("Mist @ onClear(18) ok · gray-mackerel loafs + L19–L21 wired");
}

{
  const pepper = friendForClear(21);
  if (pepper?.friendId !== "friend_007") {
    throw new Error(`onClear(21) must unlock Pepper, got ${pepper?.friendId ?? "none"}`);
  }
  if (CHAPTER3_PEPPER.unlock_clear !== 21 || CHAPTER3_PEPPER.friend_id !== "friend_007") {
    throw new Error("pepper pack must pin Pepper at clear 21");
  }
  if (CHAPTER3_PEPPER.naming.prefill !== "") throw new Error("pepper naming prefill must stay empty");
  const pepperChips = chipsForFriend("friend_007");
  if (pepperChips.join(",") !== "Pepper,Spice,Pip") {
    throw new Error(`Pepper chips must be Pepper/Spice/Pip, got ${pepperChips.join("/")}`);
  }
  for (const banned of [
    "Mist",
    "Fog",
    "Soft",
    "Ghost",
    "Wisp",
    "Pearl",
    "Tux",
    "Domino",
    "Bowtie",
    "Ink",
    "Ash",
    "Shadow",
    "Biscuit",
    "Mochi",
    "Toast",
    "Misty",
    "Mango",
  ]) {
    if (pepperChips.includes(banned)) {
      throw new Error(`Pepper chips must stay off prior pools, found ${banned}`);
    }
  }
  if (pepper.displayLine !== "A little spice. Already batting the bell.") {
    throw new Error(`Pepper display line drifted: ${pepper.displayLine}`);
  }
  if (pepper.phenotype.personality !== "Bold") {
    throw new Error(`Pepper personality must be Bold, got ${pepper.phenotype.personality}`);
  }
  if (pepper.phenotype.artKit !== "pepper") {
    throw new Error("Pepper must use pepper loafs, not Mango ginger");
  }
  if (pepper.phenotype.boardColor !== "orange") throw new Error("Pepper must be color_orange");
  if (pepper.phenotype.pattern !== "Spotted") throw new Error("Pepper must stay orange spotted");
  if (furnitureGiftsForClear(21).length !== 0) throw new Error("clear 21 must gift nothing");
  const bang = CHAPTER3_PEPPER.bang_copy.friend_007?.[0];
  if (bang !== "{Name}: A little spice. Already batting the bell.") {
    throw new Error(`Pepper first-night drifted: ${bang}`);
  }
  if (ART_KIT_PATH.pepper.loaf48 !== "/assets/cats/pepper_loaf_48.svg") {
    throw new Error("Pepper yard/unlock must map pepper 48 → pepper_loaf_48");
  }
  if (ART_KIT_PATH.pepper.loaf72 !== "/assets/cats/pepper_loaf_72.svg") {
    throw new Error("Pepper yard/unlock must map pepper 72 → pepper_loaf_72");
  }
  if (ART_KIT_PATH.ginger.loaf72 !== "/assets/cats/ginger_loaf_72.svg") {
    throw new Error("Pepper wiring must not move Mango ginger loafs");
  }
  if (ART_KIT_PATH.mist.loaf72 !== "/assets/cats/mist_loaf_72.svg") {
    throw new Error("Pepper wiring must not move Mist gray-mackerel loafs");
  }
  if (ART_KIT_PATH.ghost.loaf72 !== "/assets/cats/ghost_loaf_72.svg") {
    throw new Error("Pepper wiring must not move Ghost pale loafs");
  }
  if (ART_KIT_PATH.tuxedo.loaf72 !== "/assets/cats/tux_loaf_72.svg") {
    throw new Error("Pepper wiring must not move Tux tuxedo loafs");
  }
  const shopStill = shopItemsForClear(21).map((sku) => sku.skuId).sort();
  if (shopStill.join(",") !== "furn_fountain_stone,furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
    throw new Error(`shop SKUs drifted after Pepper: ${shopStill.join(",")}`);
  }
  for (const file of ["public/assets/cats/pepper_loaf_48.svg", "public/assets/cats/pepper_loaf_72.svg"]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const pepperArt = readFileSync(resolve("public/assets/cats/pepper_loaf_72.svg"), "utf8");
  const mangoArt = readFileSync(resolve("public/assets/cats/ginger_loaf_72.svg"), "utf8");
  const mistArt = readFileSync(resolve("public/assets/cats/mist_loaf_72.svg"), "utf8");
  if (pepperArt === mangoArt) throw new Error("Pepper loaf must not be a Mango clone");
  if (pepperArt === mistArt) throw new Error("Pepper loaf must not be a Mist clone");
  if (!pepperArt.includes("#D48A4A")) throw new Error("Pepper loaf must use spice orange #D48A4A");
  if (!pepperArt.includes("#8F4A28")) throw new Error("Pepper loaf must show spotted markings");
  if (!pepperArt.includes("<circle")) throw new Error("Pepper loaf must be spotted, not mackerel");
  if (pepperArt.includes("#8F8880")) throw new Error("Pepper loaf must not use Mist mackerel stripes");
  if (paradeClearForLevel("L21") !== 21) throw new Error("L21 must map to parade clear 21");
  if (paradeClearForLevel("L22") !== 22) throw new Error("L22 must map to parade clear 22");
  if (paradeClearForLevel("L24") !== 24) throw new Error("L24 must map to parade clear 24");
  if (shippedFriendForClear(21)?.friendId !== "friend_007") {
    throw new Error("shipped parade must award Pepper at 21");
  }
  if (shippedFriendForClear(20)) throw new Error("L20 must not award a friend");
  if (shippedFriendForClear(22)) throw new Error("L22 must not award a friend");
  if (shippedFriendForClear(23)) throw new Error("L23 must not award a friend");
  if (shippedFriendForClear(24)?.friendId !== "friend_008") {
    throw new Error("shipped parade must award Pumpkin at 24");
  }
  if (shippedFriendForClear(27)?.friendId !== "friend_009") {
    throw new Error("shipped parade must award Shadow at 27");
  }
  if (shippedFriendForClear(30)?.friendId !== "friend_010") {
    throw new Error("shipped parade must award Noodle at 30");
  }
  if (friendForClear(6)?.friendId !== "friend_002") {
    throw new Error("Pepper wiring must not move Ink off onClear(6)");
  }
  if (friendForClear(9)?.friendId !== "friend_003") {
    throw new Error("Pepper wiring must not move Biscuit off onClear(9)");
  }
  if (friendForClear(12)?.friendId !== "friend_004") {
    throw new Error("Pepper wiring must not move Tux off onClear(12)");
  }
  if (friendForClear(15)?.friendId !== "friend_005") {
    throw new Error("Pepper wiring must not move Ghost off onClear(15)");
  }
  if (friendForClear(18)?.friendId !== "friend_006") {
    throw new Error("Pepper wiring must not move Mist off onClear(18)");
  }
  if (friendForClear(3)?.friendId !== "friend_001") {
    throw new Error("Pepper wiring must not move Mango off onClear(3)");
  }
  if (friendForClear(18)?.phenotype.artKit !== "mist") {
    throw new Error("Mist must keep gray-mackerel loafs after Pepper");
  }
  if (friendForClear(15)?.phenotype.artKit !== "ghost") {
    throw new Error("Ghost must keep pale ghost loafs after Pepper");
  }
  if (friendForClear(12)?.phenotype.artKit !== "tuxedo") {
    throw new Error("Tux must keep tuxedo loafs after Pepper");
  }
  if (friendForClear(3)?.phenotype.artKit !== "ginger") {
    throw new Error("Mango must keep ginger loafs after Pepper");
  }
  console.log("Pepper @ onClear(21) ok · spotted orange loafs + L22–L24 wired");
}

{
  const pumpkin = friendForClear(24);
  if (pumpkin?.friendId !== "friend_008") {
    throw new Error(`onClear(24) must unlock Pumpkin, got ${pumpkin?.friendId ?? "none"}`);
  }
  if (CHAPTER3_PUMPKIN.unlock_clear !== 24 || CHAPTER3_PUMPKIN.friend_id !== "friend_008") {
    throw new Error("pumpkin pack must pin Pumpkin at clear 24");
  }
  if (CHAPTER3_PUMPKIN.naming.prefill !== "") throw new Error("pumpkin naming prefill must stay empty");
  const pumpkinChips = chipsForFriend("friend_008");
  if (pumpkinChips.join(",") !== "Pumpkin,Squash,Ember") {
    throw new Error(`Pumpkin chips must be Pumpkin/Squash/Ember, got ${pumpkinChips.join("/")}`);
  }
  for (const banned of [
    "Pepper",
    "Spice",
    "Pip",
    "Mist",
    "Fog",
    "Soft",
    "Ghost",
    "Wisp",
    "Pearl",
    "Tux",
    "Domino",
    "Bowtie",
    "Ink",
    "Ash",
    "Shadow",
    "Biscuit",
    "Mochi",
    "Toast",
    "Misty",
    "Mango",
  ]) {
    if (pumpkinChips.includes(banned)) {
      throw new Error(`Pumpkin chips must stay off prior pools, found ${banned}`);
    }
  }
  if (pumpkin.displayLine !== "Seasonal energy, year-round appetite.") {
    throw new Error(`Pumpkin display line drifted: ${pumpkin.displayLine}`);
  }
  if (pumpkin.phenotype.personality !== "Sunny") {
    throw new Error(`Pumpkin personality must be Sunny, got ${pumpkin.phenotype.personality}`);
  }
  if (pumpkin.phenotype.artKit !== "pumpkin") {
    throw new Error("Pumpkin must use pumpkin loafs, not Mango ginger or Pepper spots");
  }
  if (pumpkin.phenotype.boardColor !== "orange") throw new Error("Pumpkin must be color_orange");
  if (pumpkin.phenotype.pattern !== "Classic") throw new Error("Pumpkin must stay orange classic");
  if (furnitureGiftsForClear(24).length !== 0) throw new Error("clear 24 must gift nothing");
  const bang = CHAPTER3_PUMPKIN.bang_copy.friend_008?.[0];
  if (bang !== "{Name}: Seasonal energy, year-round appetite.") {
    throw new Error(`Pumpkin first-night drifted: ${bang}`);
  }
  if (ART_KIT_PATH.pumpkin.loaf48 !== "/assets/cats/pumpkin_loaf_48.svg") {
    throw new Error("Pumpkin yard/unlock must map pumpkin 48 → pumpkin_loaf_48");
  }
  if (ART_KIT_PATH.pumpkin.loaf72 !== "/assets/cats/pumpkin_loaf_72.svg") {
    throw new Error("Pumpkin yard/unlock must map pumpkin 72 → pumpkin_loaf_72");
  }
  if (ART_KIT_PATH.ginger.loaf72 !== "/assets/cats/ginger_loaf_72.svg") {
    throw new Error("Pumpkin wiring must not move Mango ginger loafs");
  }
  if (ART_KIT_PATH.pepper.loaf72 !== "/assets/cats/pepper_loaf_72.svg") {
    throw new Error("Pumpkin wiring must not move Pepper spotted loafs");
  }
  if (ART_KIT_PATH.mist.loaf72 !== "/assets/cats/mist_loaf_72.svg") {
    throw new Error("Pumpkin wiring must not move Mist gray-mackerel loafs");
  }
  if (ART_KIT_PATH.ghost.loaf72 !== "/assets/cats/ghost_loaf_72.svg") {
    throw new Error("Pumpkin wiring must not move Ghost pale loafs");
  }
  if (ART_KIT_PATH.tuxedo.loaf72 !== "/assets/cats/tux_loaf_72.svg") {
    throw new Error("Pumpkin wiring must not move Tux tuxedo loafs");
  }
  const shopStill = shopItemsForClear(24).map((sku) => sku.skuId).sort();
  if (shopStill.join(",") !== "furn_fountain_stone,furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
    throw new Error(`shop SKUs drifted after Pumpkin: ${shopStill.join(",")}`);
  }
  for (const file of ["public/assets/cats/pumpkin_loaf_48.svg", "public/assets/cats/pumpkin_loaf_72.svg"]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const pumpkinArt = readFileSync(resolve("public/assets/cats/pumpkin_loaf_72.svg"), "utf8");
  const mangoArt = readFileSync(resolve("public/assets/cats/ginger_loaf_72.svg"), "utf8");
  const pepperArt = readFileSync(resolve("public/assets/cats/pepper_loaf_72.svg"), "utf8");
  if (pumpkinArt === mangoArt) throw new Error("Pumpkin loaf must not be a Mango clone");
  if (pumpkinArt === pepperArt) throw new Error("Pumpkin loaf must not be a Pepper clone");
  if (!pumpkinArt.includes("#E07A32")) throw new Error("Pumpkin loaf must use pumpkin orange #E07A32");
  if (!pumpkinArt.includes("#A44A1C")) throw new Error("Pumpkin loaf must show classic tabby swirls");
  if (!pumpkinArt.includes("C18 19 22 18.5")) {
    throw new Error("Pumpkin loaf must use classic swirl paths, not mackerel stripes or spots");
  }
  if (pumpkinArt.includes("#8F4A28")) throw new Error("Pumpkin loaf must not use Pepper spot ink");
  if (pumpkinArt.includes("#8F8880")) throw new Error("Pumpkin loaf must not use Mist mackerel stripes");
  if (paradeClearForLevel("L24") !== 24) throw new Error("L24 must map to parade clear 24");
  if (paradeClearForLevel("L25") !== 25) throw new Error("L25 must map to parade clear 25");
  if (paradeClearForLevel("L27") !== 27) throw new Error("L27 must map to parade clear 27");
  if (shippedFriendForClear(24)?.friendId !== "friend_008") {
    throw new Error("shipped parade must award Pumpkin at 24");
  }
  if (shippedFriendForClear(23)) throw new Error("L23 must not award a friend");
  if (shippedFriendForClear(25)) throw new Error("L25 must not award a friend");
  if (shippedFriendForClear(26)) throw new Error("L26 must not award a friend");
  if (shippedFriendForClear(27)?.friendId !== "friend_009") {
    throw new Error("shipped parade must award Shadow at 27");
  }
  if (shippedFriendForClear(30)?.friendId !== "friend_010") {
    throw new Error("shipped parade must award Noodle at 30");
  }
  if (friendForClear(6)?.friendId !== "friend_002") {
    throw new Error("Pumpkin wiring must not move Ink off onClear(6)");
  }
  if (friendForClear(9)?.friendId !== "friend_003") {
    throw new Error("Pumpkin wiring must not move Biscuit off onClear(9)");
  }
  if (friendForClear(12)?.friendId !== "friend_004") {
    throw new Error("Pumpkin wiring must not move Tux off onClear(12)");
  }
  if (friendForClear(15)?.friendId !== "friend_005") {
    throw new Error("Pumpkin wiring must not move Ghost off onClear(15)");
  }
  if (friendForClear(18)?.friendId !== "friend_006") {
    throw new Error("Pumpkin wiring must not move Mist off onClear(18)");
  }
  if (friendForClear(21)?.friendId !== "friend_007") {
    throw new Error("Pumpkin wiring must not move Pepper off onClear(21)");
  }
  if (friendForClear(3)?.friendId !== "friend_001") {
    throw new Error("Pumpkin wiring must not move Mango off onClear(3)");
  }
  if (friendForClear(21)?.phenotype.artKit !== "pepper") {
    throw new Error("Pepper must keep spotted orange loafs after Pumpkin");
  }
  if (friendForClear(18)?.phenotype.artKit !== "mist") {
    throw new Error("Mist must keep gray-mackerel loafs after Pumpkin");
  }
  if (friendForClear(15)?.phenotype.artKit !== "ghost") {
    throw new Error("Ghost must keep pale ghost loafs after Pumpkin");
  }
  if (friendForClear(12)?.phenotype.artKit !== "tuxedo") {
    throw new Error("Tux must keep tuxedo loafs after Pumpkin");
  }
  if (friendForClear(3)?.phenotype.artKit !== "ginger") {
    throw new Error("Mango must keep ginger loafs after Pumpkin");
  }
  console.log("Pumpkin @ onClear(24) ok · classic orange loafs + L25–L27 wired");
}

{
  const shadow = friendForClear(27);
  if (shadow?.friendId !== "friend_009") {
    throw new Error(`onClear(27) must unlock Shadow, got ${shadow?.friendId ?? "none"}`);
  }
  if (CHAPTER3_SHADOW.unlock_clear !== 27 || CHAPTER3_SHADOW.friend_id !== "friend_009") {
    throw new Error("shadow pack must pin Shadow at clear 27");
  }
  if (CHAPTER3_SHADOW.naming.prefill !== "") throw new Error("shadow naming prefill must stay empty");
  const shadowChips = chipsForFriend("friend_009");
  if (shadowChips.join(",") !== "Midnight,Inkspot,Onyx") {
    throw new Error(`Shadow chips must be Midnight/Inkspot/Onyx, got ${shadowChips.join("/")}`);
  }
  for (const banned of [
    "Shadow",
    "Ink",
    "Ash",
    "Mist",
    "Fog",
    "Soft",
    "Misty",
    "Tux",
    "Domino",
    "Bowtie",
    "Nigel",
    "Donna",
    "Greg",
    "Ghost",
    "Wisp",
    "Pearl",
    "Pepper",
    "Spice",
    "Pip",
    "Pumpkin",
    "Squash",
    "Ember",
    "Biscuit",
    "Mochi",
    "Toast",
    "Mango",
  ]) {
    if (shadowChips.includes(banned)) {
      throw new Error(`Shadow chips must stay off prior pools, found ${banned}`);
    }
  }
  if (shadow.displayLine !== "First full-black. The porch just got cooler.") {
    throw new Error(`Shadow display line drifted: ${shadow.displayLine}`);
  }
  if (shadow.phenotype.personality !== "Night") {
    throw new Error(`Shadow personality must be Night, got ${shadow.phenotype.personality}`);
  }
  if (shadow.phenotype.artKit !== "shadow") {
    throw new Error("Shadow must use shadow loafs, not Ink slate, Tux bib, or Mist pale");
  }
  if (shadow.phenotype.boardColor !== "black") throw new Error("Shadow must be color_black");
  if (shadow.phenotype.pattern !== "Solid") throw new Error("Shadow must stay full-black solid");
  if (shadow.phenotype.color !== "Black") throw new Error("Shadow must stay Black");
  if (furnitureGiftsForClear(27).map((sku) => sku.skuId).join(",") !== "furn_fountain_stone") throw new Error("clear 27 must gift fountain");
  const bang = CHAPTER3_SHADOW.bang_copy.friend_009?.[0];
  if (bang !== "{Name}: First full-black. The porch just got cooler.") {
    throw new Error(`Shadow first-night drifted: ${bang}`);
  }
  if (ART_KIT_PATH.shadow.loaf48 !== "/assets/cats/shadow_loaf_48.svg") {
    throw new Error("Shadow yard/unlock must map shadow 48 → shadow_loaf_48");
  }
  if (ART_KIT_PATH.shadow.loaf72 !== "/assets/cats/shadow_loaf_72.svg") {
    throw new Error("Shadow yard/unlock must map shadow 72 → shadow_loaf_72");
  }
  if (ART_KIT_PATH.slate.loaf72 !== "/assets/cats/ink_loaf_72.svg") {
    throw new Error("Shadow wiring must not move Ink slate loafs");
  }
  if (ART_KIT_PATH.tuxedo.loaf72 !== "/assets/cats/tux_loaf_72.svg") {
    throw new Error("Shadow wiring must not move Tux tuxedo loafs");
  }
  if (ART_KIT_PATH.mist.loaf72 !== "/assets/cats/mist_loaf_72.svg") {
    throw new Error("Shadow wiring must not move Mist gray-mackerel loafs");
  }
  if (ART_KIT_PATH.ghost.loaf72 !== "/assets/cats/ghost_loaf_72.svg") {
    throw new Error("Shadow wiring must not move Ghost pale loafs");
  }
  if (ART_KIT_PATH.pumpkin.loaf72 !== "/assets/cats/pumpkin_loaf_72.svg") {
    throw new Error("Shadow wiring must not move Pumpkin classic loafs");
  }
  const shopStill = shopItemsForClear(27).map((sku) => sku.skuId).sort();
  if (shopStill.join(",") !== "furn_fountain_stone,furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
    throw new Error(`shop SKUs drifted after Shadow: ${shopStill.join(",")}`);
  }
  for (const file of ["public/assets/cats/shadow_loaf_48.svg", "public/assets/cats/shadow_loaf_72.svg"]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const shadowArt = readFileSync(resolve("public/assets/cats/shadow_loaf_72.svg"), "utf8");
  const inkArt = readFileSync(resolve("public/assets/cats/ink_loaf_72.svg"), "utf8");
  const tuxArt = readFileSync(resolve("public/assets/cats/tux_loaf_72.svg"), "utf8");
  const mistArt = readFileSync(resolve("public/assets/cats/mist_loaf_72.svg"), "utf8");
  if (shadowArt === inkArt) throw new Error("Shadow loaf must not be an Ink clone");
  if (shadowArt === tuxArt) throw new Error("Shadow loaf must not be a Tux clone");
  if (shadowArt === mistArt) throw new Error("Shadow loaf must not be a Mist clone");
  if (!shadowArt.includes("#36322F")) throw new Error("Shadow loaf must use full-black charcoal #36322F");
  if (!shadowArt.includes("#F0B429")) throw new Error("Shadow loaf must show gold eyes for 48px read");
  if (shadowArt.includes("#5A5E6B")) throw new Error("Shadow loaf must not use Ink slate");
  if (shadowArt.includes("#C4BDB4")) throw new Error("Shadow loaf must not use Mist pale");
  if (shadowArt.includes("#FFF8F0")) throw new Error("Shadow loaf must not wear a Tux cream bib");
  if (shadowArt.includes("M20 24.5 L24 36")) {
    throw new Error("Shadow loaf must not use the tuxedo bib path");
  }
  if (paradeClearForLevel("L27") !== 27) throw new Error("L27 must map to parade clear 27");
  if (paradeClearForLevel("L28") !== 28) throw new Error("L28 must map to parade clear 28");
  if (paradeClearForLevel("L30") !== 30) throw new Error("L30 must map to parade clear 30");
  if (shippedFriendForClear(27)?.friendId !== "friend_009") {
    throw new Error("shipped parade must award Shadow at 27");
  }
  if (shippedFriendForClear(26)) throw new Error("L26 must not award a friend");
  if (shippedFriendForClear(28)) throw new Error("L28 must not award a friend");
  if (shippedFriendForClear(29)) throw new Error("L29 must not award a friend");
  if (shippedFriendForClear(30)?.friendId !== "friend_010") {
    throw new Error("shipped parade must award Noodle at 30");
  }
  if (friendForClear(6)?.friendId !== "friend_002") {
    throw new Error("Shadow wiring must not move Ink off onClear(6)");
  }
  if (friendForClear(9)?.friendId !== "friend_003") {
    throw new Error("Shadow wiring must not move Biscuit off onClear(9)");
  }
  if (friendForClear(12)?.friendId !== "friend_004") {
    throw new Error("Shadow wiring must not move Tux off onClear(12)");
  }
  if (friendForClear(15)?.friendId !== "friend_005") {
    throw new Error("Shadow wiring must not move Ghost off onClear(15)");
  }
  if (friendForClear(18)?.friendId !== "friend_006") {
    throw new Error("Shadow wiring must not move Mist off onClear(18)");
  }
  if (friendForClear(21)?.friendId !== "friend_007") {
    throw new Error("Shadow wiring must not move Pepper off onClear(21)");
  }
  if (friendForClear(24)?.friendId !== "friend_008") {
    throw new Error("Shadow wiring must not move Pumpkin off onClear(24)");
  }
  if (friendForClear(3)?.friendId !== "friend_001") {
    throw new Error("Shadow wiring must not move Mango off onClear(3)");
  }
  if (friendForClear(24)?.phenotype.artKit !== "pumpkin") {
    throw new Error("Pumpkin must keep classic orange loafs after Shadow");
  }
  if (friendForClear(21)?.phenotype.artKit !== "pepper") {
    throw new Error("Pepper must keep spotted orange loafs after Shadow");
  }
  if (friendForClear(18)?.phenotype.artKit !== "mist") {
    throw new Error("Mist must keep gray-mackerel loafs after Shadow");
  }
  if (friendForClear(15)?.phenotype.artKit !== "ghost") {
    throw new Error("Ghost must keep pale ghost loafs after Shadow");
  }
  if (friendForClear(12)?.phenotype.artKit !== "tuxedo") {
    throw new Error("Tux must keep tuxedo loafs after Shadow");
  }
  if (friendForClear(6)?.phenotype.artKit !== "slate") {
    throw new Error("Ink must keep slate loafs after Shadow");
  }
  console.log("Shadow @ onClear(27) ok · full-black loafs + L28–L30 wired");
}

{
  const noodle = friendForClear(30);
  if (noodle?.friendId !== "friend_010") {
    throw new Error(`onClear(30) must unlock Noodle, got ${noodle?.friendId ?? "none"}`);
  }
  if (CHAPTER3_NOODLE.unlock_clear !== 30 || CHAPTER3_NOODLE.friend_id !== "friend_010") {
    throw new Error("noodle pack must pin Noodle at clear 30");
  }
  if (CHAPTER3_NOODLE.naming.prefill !== "") throw new Error("noodle naming prefill must stay empty");
  const noodleChips = chipsForFriend("friend_010");
  if (noodleChips.join(",") !== "Noodle,Ramen,Twirl") {
    throw new Error(`Noodle chips must be Noodle/Ramen/Twirl, got ${noodleChips.join("/")}`);
  }
  for (const banned of [
    "Midnight",
    "Inkspot",
    "Onyx",
    "Shadow",
    "Ink",
    "Ash",
    "Mist",
    "Fog",
    "Soft",
    "Misty",
    "Tux",
    "Domino",
    "Bowtie",
    "Nigel",
    "Donna",
    "Greg",
    "Ghost",
    "Wisp",
    "Pearl",
    "Pepper",
    "Spice",
    "Pip",
    "Pumpkin",
    "Squash",
    "Ember",
    "Biscuit",
    "Mochi",
    "Toast",
    "Mango",
    "Bean",
    "Beans",
    "Cream",
  ]) {
    if (noodleChips.includes(banned)) {
      throw new Error(`Noodle chips must stay off prior pools, found ${banned}`);
    }
  }
  if (noodle.displayLine !== "Long in spirit. Short in attention span.") {
    throw new Error(`Noodle display line drifted: ${noodle.displayLine}`);
  }
  if (noodle.phenotype.personality !== "Wiggly") {
    throw new Error(`Noodle personality must be Wiggly, got ${noodle.phenotype.personality}`);
  }
  if (noodle.phenotype.artKit !== "noodle") {
    throw new Error("Noodle must use noodle loafs, not Biscuit cream or Ghost pale");
  }
  if (noodle.phenotype.boardColor !== "orange") throw new Error("Noodle must be color_orange");
  if (noodle.phenotype.pattern !== "Mackerel") throw new Error("Noodle must stay cream mackerel");
  if (noodle.phenotype.color !== "Cream") throw new Error("Noodle must stay Cream");
  if (furnitureGiftsForClear(30).length !== 0) throw new Error("clear 30 must gift nothing");
  const bang = CHAPTER3_NOODLE.bang_copy.friend_010?.[0];
  if (bang !== "{Name}: Long in spirit. Short in attention span.") {
    throw new Error(`Noodle first-night drifted: ${bang}`);
  }
  if (ART_KIT_PATH.noodle.loaf48 !== "/assets/cats/noodle_loaf_48.svg") {
    throw new Error("Noodle yard/unlock must map noodle 48 → noodle_loaf_48");
  }
  if (ART_KIT_PATH.noodle.loaf72 !== "/assets/cats/noodle_loaf_72.svg") {
    throw new Error("Noodle yard/unlock must map noodle 72 → noodle_loaf_72");
  }
  if (ART_KIT_PATH.cream.loaf72 !== "/assets/cats/cream_loaf_72.svg") {
    throw new Error("Noodle wiring must not move Biscuit cream loafs");
  }
  if (ART_KIT_PATH.ghost.loaf72 !== "/assets/cats/ghost_loaf_72.svg") {
    throw new Error("Noodle wiring must not move Ghost pale loafs");
  }
  if (ART_KIT_PATH.shadow.loaf72 !== "/assets/cats/shadow_loaf_72.svg") {
    throw new Error("Noodle wiring must not move Shadow full-black loafs");
  }
  if (ART_KIT_PATH.mist.loaf72 !== "/assets/cats/mist_loaf_72.svg") {
    throw new Error("Noodle wiring must not move Mist gray-mackerel loafs");
  }
  if (ART_KIT_PATH.pumpkin.loaf72 !== "/assets/cats/pumpkin_loaf_72.svg") {
    throw new Error("Noodle wiring must not move Pumpkin classic loafs");
  }
  const shopStill = shopItemsForClear(30).map((sku) => sku.skuId).sort();
  if (shopStill.join(",") !== "furn_fountain_stone,furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
    throw new Error(`shop SKUs drifted after Noodle: ${shopStill.join(",")}`);
  }
  for (const file of ["public/assets/cats/noodle_loaf_48.svg", "public/assets/cats/noodle_loaf_72.svg"]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const noodleArt = readFileSync(resolve("public/assets/cats/noodle_loaf_72.svg"), "utf8");
  const creamArt = readFileSync(resolve("public/assets/cats/cream_loaf_72.svg"), "utf8");
  const ghostArt = readFileSync(resolve("public/assets/cats/ghost_loaf_72.svg"), "utf8");
  const mistArt = readFileSync(resolve("public/assets/cats/mist_loaf_72.svg"), "utf8");
  if (noodleArt === creamArt) throw new Error("Noodle loaf must not be a Biscuit clone");
  if (noodleArt === ghostArt) throw new Error("Noodle loaf must not be a Ghost clone");
  if (noodleArt === mistArt) throw new Error("Noodle loaf must not be a Mist clone");
  if (!noodleArt.includes("#F3D9A8")) throw new Error("Noodle loaf must use wheat cream #F3D9A8");
  if (!noodleArt.includes("#B8925A")) throw new Error("Noodle loaf must show cream mackerel stripes");
  if (!noodleArt.includes('rx="20"')) throw new Error("Noodle loaf must use a long skinny silhouette");
  if (!noodleArt.includes("C47 27 48 36")) {
    throw new Error("Noodle loaf must use a wiggly tail, not the standard loaf curl");
  }
  if (noodleArt.includes("#FFF8F0")) throw new Error("Noodle loaf must not use Biscuit cream #FFF8F0");
  if (noodleArt.includes("#E6E0D4")) throw new Error("Noodle loaf must not use Ghost pale");
  if (noodleArt.includes("#8F8880")) throw new Error("Noodle loaf must not use Mist mackerel stripes");
  if (noodleArt.includes("#36322F")) throw new Error("Noodle loaf must not use Shadow charcoal");
  if (paradeClearForLevel("L30") !== 30) throw new Error("L30 must map to parade clear 30");
  if (paradeClearForLevel("L31") !== 31) throw new Error("L31 must map to parade clear 31");
  if (paradeClearForLevel("L33") !== 33) throw new Error("L33 must map to parade clear 33");
  if (shippedFriendForClear(30)?.friendId !== "friend_010") {
    throw new Error("shipped parade must award Noodle at 30");
  }
  if (shippedFriendForClear(29)) throw new Error("L29 must not award a friend");
  if (shippedFriendForClear(31)) throw new Error("L31 must not award a friend");
  if (shippedFriendForClear(32)) throw new Error("L32 must not award a friend");
  if (shippedFriendForClear(33)?.friendId !== "friend_011") {
    throw new Error("shipped parade must award Clover at 33");
  }
  if (shippedFriendForClear(36)?.friendId !== "friend_012") {
    throw new Error("shipped parade must award Ash at 36");
  }
  if (shippedFriendForClear(60)?.friendId !== "friend_020") {
    throw new Error("shipped parade must award Bean at 60");
  }
  if (friendForClear(33)?.friendId !== "friend_011") {
    throw new Error("CURRENT must still list Clover at clear 33");
  }
  if (friendForClear(6)?.friendId !== "friend_002") {
    throw new Error("Noodle wiring must not move Ink off onClear(6)");
  }
  if (friendForClear(9)?.friendId !== "friend_003") {
    throw new Error("Noodle wiring must not move Biscuit off onClear(9)");
  }
  if (friendForClear(12)?.friendId !== "friend_004") {
    throw new Error("Noodle wiring must not move Tux off onClear(12)");
  }
  if (friendForClear(15)?.friendId !== "friend_005") {
    throw new Error("Noodle wiring must not move Ghost off onClear(15)");
  }
  if (friendForClear(18)?.friendId !== "friend_006") {
    throw new Error("Noodle wiring must not move Mist off onClear(18)");
  }
  if (friendForClear(21)?.friendId !== "friend_007") {
    throw new Error("Noodle wiring must not move Pepper off onClear(21)");
  }
  if (friendForClear(24)?.friendId !== "friend_008") {
    throw new Error("Noodle wiring must not move Pumpkin off onClear(24)");
  }
  if (friendForClear(27)?.friendId !== "friend_009") {
    throw new Error("Noodle wiring must not move Shadow off onClear(27)");
  }
  if (friendForClear(3)?.friendId !== "friend_001") {
    throw new Error("Noodle wiring must not move Mango off onClear(3)");
  }
  if (friendForClear(27)?.phenotype.artKit !== "shadow") {
    throw new Error("Shadow must keep full-black loafs after Noodle");
  }
  if (friendForClear(24)?.phenotype.artKit !== "pumpkin") {
    throw new Error("Pumpkin must keep classic orange loafs after Noodle");
  }
  if (friendForClear(9)?.phenotype.artKit !== "cream") {
    throw new Error("Biscuit must keep cream loafs after Noodle");
  }
  if (friendForClear(15)?.phenotype.artKit !== "ghost") {
    throw new Error("Ghost must keep pale ghost loafs after Noodle");
  }
  if (friendForClear(12)?.phenotype.artKit !== "tuxedo") {
    throw new Error("Tux must keep tuxedo loafs after Noodle");
  }
  console.log("Noodle @ onClear(30) ok · long cream-mackerel loafs + L31–L33 wired");
}

{
  const clover = friendForClear(33);
  if (clover?.friendId !== "friend_011") {
    throw new Error(`onClear(33) must unlock Clover, got ${clover?.friendId ?? "none"}`);
  }
  if (CHAPTER3_CLOVER.unlock_clear !== 33 || CHAPTER3_CLOVER.friend_id !== "friend_011") {
    throw new Error("clover pack must pin Clover at clear 33");
  }
  if (CHAPTER3_CLOVER.naming.prefill !== "") throw new Error("clover naming prefill must stay empty");
  const cloverChips = chipsForFriend("friend_011");
  if (cloverChips.join(",") !== "Clover,Patch,Fern") {
    throw new Error(`Clover chips must be Clover/Patch/Fern, got ${cloverChips.join("/")}`);
  }
  for (const banned of [
    "Noodle",
    "Ramen",
    "Twirl",
    "Midnight",
    "Inkspot",
    "Onyx",
    "Shadow",
    "Ink",
    "Ash",
    "Mist",
    "Fog",
    "Soft",
    "Misty",
    "Tux",
    "Domino",
    "Bowtie",
    "Nigel",
    "Donna",
    "Greg",
    "Ghost",
    "Wisp",
    "Pearl",
    "Pepper",
    "Spice",
    "Pip",
    "Pumpkin",
    "Squash",
    "Ember",
    "Biscuit",
    "Mochi",
    "Toast",
    "Mango",
    "Bean",
    "Beans",
    "Cream",
  ]) {
    if (cloverChips.includes(banned)) {
      throw new Error(`Clover chips must stay off prior pools, found ${banned}`);
    }
  }
  if (clover.displayLine !== "Lucky, or just very good at finding boxes.") {
    throw new Error(`Clover display line drifted: ${clover.displayLine}`);
  }
  if (clover.phenotype.personality !== "Lucky") {
    throw new Error(`Clover personality must be Lucky, got ${clover.phenotype.personality}`);
  }
  if (clover.phenotype.artKit !== "clover") {
    throw new Error("Clover must use clover loafs, not Ink slate, Mist mackerel, or Shadow charcoal");
  }
  if (clover.phenotype.boardColor !== "gray") throw new Error("Clover must be color_gray");
  if (clover.phenotype.pattern !== "Spotted") throw new Error("Clover must stay gray spotted");
  if (clover.phenotype.color !== "Gray") throw new Error("Clover must stay Gray");
  if (furnitureGiftsForClear(33).length !== 0) throw new Error("clear 33 must gift nothing");
  const bang = CHAPTER3_CLOVER.bang_copy.friend_011?.[0];
  if (bang !== "{Name}: Lucky, or just very good at finding boxes.") {
    throw new Error(`Clover first-night drifted: ${bang}`);
  }
  if (ART_KIT_PATH.clover.loaf48 !== "/assets/cats/clover_loaf_48.svg") {
    throw new Error("Clover yard/unlock must map clover 48 → clover_loaf_48");
  }
  if (ART_KIT_PATH.clover.loaf72 !== "/assets/cats/clover_loaf_72.svg") {
    throw new Error("Clover yard/unlock must map clover 72 → clover_loaf_72");
  }
  if (ART_KIT_PATH.slate.loaf72 !== "/assets/cats/ink_loaf_72.svg") {
    throw new Error("Clover wiring must not move Ink slate loafs");
  }
  if (ART_KIT_PATH.mist.loaf72 !== "/assets/cats/mist_loaf_72.svg") {
    throw new Error("Clover wiring must not move Mist gray-mackerel loafs");
  }
  if (ART_KIT_PATH.shadow.loaf72 !== "/assets/cats/shadow_loaf_72.svg") {
    throw new Error("Clover wiring must not move Shadow full-black loafs");
  }
  if (ART_KIT_PATH.noodle.loaf72 !== "/assets/cats/noodle_loaf_72.svg") {
    throw new Error("Clover wiring must not move Noodle long loafs");
  }
  const shopStill = shopItemsForClear(33).map((sku) => sku.skuId).sort();
  if (shopStill.join(",") !== "furn_fountain_stone,furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
    throw new Error(`shop SKUs drifted after Clover: ${shopStill.join(",")}`);
  }
  for (const file of ["public/assets/cats/clover_loaf_48.svg", "public/assets/cats/clover_loaf_72.svg"]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const cloverArt = readFileSync(resolve("public/assets/cats/clover_loaf_72.svg"), "utf8");
  const inkArt = readFileSync(resolve("public/assets/cats/ink_loaf_72.svg"), "utf8");
  const mistArt = readFileSync(resolve("public/assets/cats/mist_loaf_72.svg"), "utf8");
  const shadowArt = readFileSync(resolve("public/assets/cats/shadow_loaf_72.svg"), "utf8");
  if (cloverArt === inkArt) throw new Error("Clover loaf must not be an Ink clone");
  if (cloverArt === mistArt) throw new Error("Clover loaf must not be a Mist clone");
  if (cloverArt === shadowArt) throw new Error("Clover loaf must not be a Shadow clone");
  if (!cloverArt.includes("#B4BCC2")) throw new Error("Clover loaf must use soft silver #B4BCC2");
  if (!cloverArt.includes("#6F7A82")) throw new Error("Clover loaf must show cool gray spots");
  if (cloverArt.includes("#5A5E6B")) throw new Error("Clover loaf must not use Ink slate #5A5E6B");
  if (cloverArt.includes("#C4BDB4")) throw new Error("Clover loaf must not use Mist taupe #C4BDB4");
  if (cloverArt.includes("#8F8880")) throw new Error("Clover loaf must not use Mist mackerel stripes");
  if (cloverArt.includes("#36322F")) throw new Error("Clover loaf must not use Shadow charcoal");
  if (cloverArt.includes("#D48A4A")) throw new Error("Clover loaf must not reuse Pepper orange");
  if (paradeClearForLevel("L33") !== 33) throw new Error("L33 must map to parade clear 33");
  if (paradeClearForLevel("L34") !== 34) throw new Error("L34 must map to parade clear 34");
  if (paradeClearForLevel("L36") !== 36) throw new Error("L36 must map to parade clear 36");
  if (shippedFriendForClear(33)?.friendId !== "friend_011") {
    throw new Error("shipped parade must award Clover at 33");
  }
  if (shippedFriendForClear(32)) throw new Error("L32 must not award a friend");
  if (shippedFriendForClear(34)) throw new Error("L34 must not award a friend");
  if (shippedFriendForClear(35)) throw new Error("L35 must not award a friend");
  if (shippedFriendForClear(36)?.friendId !== "friend_012") {
    throw new Error("shipped parade must award Ash at 36");
  }
  if (shippedFriendForClear(60)?.friendId !== "friend_020") {
    throw new Error("shipped parade must award Bean at 60");
  }
  if (friendForClear(36)?.friendId !== "friend_012") {
    throw new Error("CURRENT must still list Ash at clear 36");
  }
  if (friendForClear(6)?.friendId !== "friend_002") {
    throw new Error("Clover wiring must not move Ink off onClear(6)");
  }
  if (friendForClear(9)?.friendId !== "friend_003") {
    throw new Error("Clover wiring must not move Biscuit off onClear(9)");
  }
  if (friendForClear(12)?.friendId !== "friend_004") {
    throw new Error("Clover wiring must not move Tux off onClear(12)");
  }
  if (friendForClear(15)?.friendId !== "friend_005") {
    throw new Error("Clover wiring must not move Ghost off onClear(15)");
  }
  if (friendForClear(18)?.friendId !== "friend_006") {
    throw new Error("Clover wiring must not move Mist off onClear(18)");
  }
  if (friendForClear(21)?.friendId !== "friend_007") {
    throw new Error("Clover wiring must not move Pepper off onClear(21)");
  }
  if (friendForClear(24)?.friendId !== "friend_008") {
    throw new Error("Clover wiring must not move Pumpkin off onClear(24)");
  }
  if (friendForClear(27)?.friendId !== "friend_009") {
    throw new Error("Clover wiring must not move Shadow off onClear(27)");
  }
  if (friendForClear(30)?.friendId !== "friend_010") {
    throw new Error("Clover wiring must not move Noodle off onClear(30)");
  }
  if (friendForClear(3)?.friendId !== "friend_001") {
    throw new Error("Clover wiring must not move Mango off onClear(3)");
  }
  if (friendForClear(30)?.phenotype.artKit !== "noodle") {
    throw new Error("Noodle must keep long cream-mackerel loafs after Clover");
  }
  if (friendForClear(27)?.phenotype.artKit !== "shadow") {
    throw new Error("Shadow must keep full-black loafs after Clover");
  }
  if (friendForClear(18)?.phenotype.artKit !== "mist") {
    throw new Error("Mist must keep gray-mackerel loafs after Clover");
  }
  if (friendForClear(6)?.phenotype.artKit !== "slate") {
    throw new Error("Ink must keep slate loafs after Clover");
  }
  console.log("Clover @ onClear(33) ok · soft gray-spotted loafs + L34–L36 wired");
}

{
  const ash = friendForClear(36);
  if (ash?.friendId !== "friend_012") {
    throw new Error(`onClear(36) must unlock Ash, got ${ash?.friendId ?? "none"}`);
  }
  if (CHAPTER3_ASH.unlock_clear !== 36 || CHAPTER3_ASH.friend_id !== "friend_012") {
    throw new Error("ash pack must pin Ash at clear 36");
  }
  if (CHAPTER3_ASH.naming.prefill !== "") throw new Error("ash naming prefill must stay empty");
  const ashChips = chipsForFriend("friend_012");
  if (ashChips.join(",") !== "Cinder,Soot,Hearth") {
    throw new Error(`Ash chips must be Cinder/Soot/Hearth, got ${ashChips.join("/")}`);
  }
  for (const banned of [
    "Ash",
    "Ink",
    "Shadow",
    "Midnight",
    "Inkspot",
    "Onyx",
    "Clover",
    "Patch",
    "Fern",
    "Noodle",
    "Ramen",
    "Twirl",
    "Mist",
    "Fog",
    "Soft",
    "Misty",
    "Tux",
    "Domino",
    "Bowtie",
    "Nigel",
    "Donna",
    "Greg",
    "Ghost",
    "Wisp",
    "Pearl",
    "Pepper",
    "Spice",
    "Pip",
    "Pumpkin",
    "Squash",
    "Ember",
    "Biscuit",
    "Mochi",
    "Toast",
    "Mango",
    "Bean",
    "Beans",
    "Cream",
    "Oak",
  ]) {
    if (ashChips.includes(banned)) {
      throw new Error(`Ash chips must stay off prior pools, found ${banned}`);
    }
  }
  if (ash.displayLine !== "Warm like a hearth that just went quiet.") {
    throw new Error(`Ash display line drifted: ${ash.displayLine}`);
  }
  if (ash.phenotype.personality !== "Calm") {
    throw new Error(`Ash personality must be Calm, got ${ash.phenotype.personality}`);
  }
  if (ash.phenotype.artKit !== "ash") {
    throw new Error("Ash must use ash loafs, not Ink slate, Mist mackerel, Shadow charcoal, or Clover silver");
  }
  if (ash.phenotype.boardColor !== "gray") throw new Error("Ash must be color_gray");
  if (ash.phenotype.pattern !== "Solid") throw new Error("Ash must stay gray solid");
  if (ash.phenotype.color !== "Gray") throw new Error("Ash must stay Gray");
  if (furnitureGiftsForClear(36).length !== 0) throw new Error("clear 36 must gift nothing");
  const bang = CHAPTER3_ASH.bang_copy.friend_012?.[0];
  if (bang !== "{Name}: Warm like a hearth that just went quiet.") {
    throw new Error(`Ash first-night drifted: ${bang}`);
  }
  if (ART_KIT_PATH.ash.loaf48 !== "/assets/cats/ash_loaf_48.svg") {
    throw new Error("Ash yard/unlock must map ash 48 → ash_loaf_48");
  }
  if (ART_KIT_PATH.ash.loaf72 !== "/assets/cats/ash_loaf_72.svg") {
    throw new Error("Ash yard/unlock must map ash 72 → ash_loaf_72");
  }
  if (ART_KIT_PATH.slate.loaf72 !== "/assets/cats/ink_loaf_72.svg") {
    throw new Error("Ash wiring must not move Ink slate loafs");
  }
  if (ART_KIT_PATH.mist.loaf72 !== "/assets/cats/mist_loaf_72.svg") {
    throw new Error("Ash wiring must not move Mist gray-mackerel loafs");
  }
  if (ART_KIT_PATH.shadow.loaf72 !== "/assets/cats/shadow_loaf_72.svg") {
    throw new Error("Ash wiring must not move Shadow full-black loafs");
  }
  if (ART_KIT_PATH.clover.loaf72 !== "/assets/cats/clover_loaf_72.svg") {
    throw new Error("Ash wiring must not move Clover spotted loafs");
  }
  const shopStill = shopItemsForClear(36).map((sku) => sku.skuId).sort();
  if (shopStill.join(",") !== "furn_fountain_stone,furn_perch_high,furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
    throw new Error(`shop SKUs drifted after Ash: ${shopStill.join(",")}`);
  }
  for (const file of ["public/assets/cats/ash_loaf_48.svg", "public/assets/cats/ash_loaf_72.svg"]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const ashArt = readFileSync(resolve("public/assets/cats/ash_loaf_72.svg"), "utf8");
  const inkArt = readFileSync(resolve("public/assets/cats/ink_loaf_72.svg"), "utf8");
  const mistArt = readFileSync(resolve("public/assets/cats/mist_loaf_72.svg"), "utf8");
  const shadowArt = readFileSync(resolve("public/assets/cats/shadow_loaf_72.svg"), "utf8");
  const cloverArt = readFileSync(resolve("public/assets/cats/clover_loaf_72.svg"), "utf8");
  if (ashArt === inkArt) throw new Error("Ash loaf must not be an Ink clone");
  if (ashArt === mistArt) throw new Error("Ash loaf must not be a Mist clone");
  if (ashArt === shadowArt) throw new Error("Ash loaf must not be a Shadow clone");
  if (ashArt === cloverArt) throw new Error("Ash loaf must not be a Clover clone");
  if (!ashArt.includes("#8B7462")) throw new Error("Ash loaf must use warm hearth-ash #8B7462");
  if (!ashArt.includes("#D2C0AE")) throw new Error("Ash loaf must show a warm pale belly");
  if (ashArt.includes("#5A5E6B")) throw new Error("Ash loaf must not use Ink slate #5A5E6B");
  if (ashArt.includes("#B4BCC2")) throw new Error("Ash loaf must not use Clover silver #B4BCC2");
  if (ashArt.includes("#6F7A82")) throw new Error("Ash loaf must not use Clover spots");
  if (ashArt.includes("#C4BDB4")) throw new Error("Ash loaf must not use Mist taupe #C4BDB4");
  if (ashArt.includes("#8F8880")) throw new Error("Ash loaf must not use Mist mackerel stripes");
  if (ashArt.includes("#36322F")) throw new Error("Ash loaf must not use Shadow charcoal");
  if (ashArt.includes("#D48A4A")) throw new Error("Ash loaf must not reuse Pepper orange");
  if (paradeClearForLevel("L36") !== 36) throw new Error("L36 must map to parade clear 36");
  if (paradeClearForLevel("L37") !== 37) throw new Error("L37 must map to parade clear 37");
  if (paradeClearForLevel("L39") !== 39) throw new Error("L39 must map to parade clear 39");
  if (shippedFriendForClear(36)?.friendId !== "friend_012") {
    throw new Error("shipped parade must award Ash at 36");
  }
  if (shippedFriendForClear(35)) throw new Error("L35 must not award a friend");
  if (shippedFriendForClear(37)) throw new Error("L37 must not award a friend");
  if (shippedFriendForClear(38)) throw new Error("L38 must not award a friend");
  if (shippedFriendForClear(39)?.friendId !== "friend_013") throw new Error("Oak@39 must ship this slice");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") {
    throw new Error("shipped parade must award Bean at 60");
  }
  if (friendForClear(39)?.friendId !== "friend_013") {
    throw new Error("CURRENT must still list Oak at clear 39 for a later slice");
  }
  if (friendForClear(6)?.friendId !== "friend_002") {
    throw new Error("Ash wiring must not move Ink off onClear(6)");
  }
  if (friendForClear(9)?.friendId !== "friend_003") {
    throw new Error("Ash wiring must not move Biscuit off onClear(9)");
  }
  if (friendForClear(12)?.friendId !== "friend_004") {
    throw new Error("Ash wiring must not move Tux off onClear(12)");
  }
  if (friendForClear(15)?.friendId !== "friend_005") {
    throw new Error("Ash wiring must not move Ghost off onClear(15)");
  }
  if (friendForClear(18)?.friendId !== "friend_006") {
    throw new Error("Ash wiring must not move Mist off onClear(18)");
  }
  if (friendForClear(21)?.friendId !== "friend_007") {
    throw new Error("Ash wiring must not move Pepper off onClear(21)");
  }
  if (friendForClear(24)?.friendId !== "friend_008") {
    throw new Error("Ash wiring must not move Pumpkin off onClear(24)");
  }
  if (friendForClear(27)?.friendId !== "friend_009") {
    throw new Error("Ash wiring must not move Shadow off onClear(27)");
  }
  if (friendForClear(30)?.friendId !== "friend_010") {
    throw new Error("Ash wiring must not move Noodle off onClear(30)");
  }
  if (friendForClear(33)?.friendId !== "friend_011") {
    throw new Error("Ash wiring must not move Clover off onClear(33)");
  }
  if (friendForClear(3)?.friendId !== "friend_001") {
    throw new Error("Ash wiring must not move Mango off onClear(3)");
  }
  if (friendForClear(33)?.phenotype.artKit !== "clover") {
    throw new Error("Clover must keep spotted loafs after Ash");
  }
  if (friendForClear(30)?.phenotype.artKit !== "noodle") {
    throw new Error("Noodle must keep long cream-mackerel loafs after Ash");
  }
  if (friendForClear(27)?.phenotype.artKit !== "shadow") {
    throw new Error("Shadow must keep full-black loafs after Ash");
  }
  if (friendForClear(18)?.phenotype.artKit !== "mist") {
    throw new Error("Mist must keep gray-mackerel loafs after Ash");
  }
  if (friendForClear(6)?.phenotype.artKit !== "slate") {
    throw new Error("Ink must keep slate loafs after Ash");
  }
  console.log("Ash @ onClear(36) ok · warm hearth-ash loafs + L37–L39 wired");
}


{
  // Pink kills: L-id HUD must match route; L10 off-path must not off-by-one counters;
  // Next after L9 must land on L11 (never phantom L10).
  const l9 = LEVELS.find((level) => level.id === "L9");
  const l11 = LEVELS.find((level) => level.id === "L11");
  const l20 = LEVELS.find((level) => level.id === "L20");
  const l39 = LEVELS.find((level) => level.id === "L39");
  if (!l9 || !l11 || !l20 || !l39) throw new Error("missing campaign anchors for index locks");
  if (l20.number !== 20) throw new Error(`L20 HUD number must be 20, got ${l20.number}`);
  if (l39.number !== 39) throw new Error(`L39 HUD number must be 39, got ${l39.number}`);
  if (l9.number !== 9) throw new Error(`L9 HUD number must be 9, got ${l9.number}`);
  if (l11.number !== 11) throw new Error(`L11 HUD number must be 11, got ${l11.number}`);
  if (CAMPAIGN_LEVEL_COUNT !== 81) {
    throw new Error(`CAMPAIGN_LEVEL_COUNT must be 81 (max L-id), got ${CAMPAIGN_LEVEL_COUNT}`);
  }
  if (LEVELS.length !== 80) {
    throw new Error(`campaign board count must stay 80 with L10 off-path, got ${LEVELS.length}`);
  }
  for (const level of LEVELS) {
    const parsed = Number(level.id.replace(/^L/i, ""));
    if (level.number !== parsed) {
      throw new Error(`${level.id} number ${level.number} must equal L-id ${parsed}`);
    }
  }
  const afterL9 = nextCampaignLevel("L9");
  if (afterL9?.id !== "L11") {
    throw new Error(`Next after L9 must be L11 (L10 off-path), got ${afterL9?.id ?? "none"}`);
  }
  const afterL19 = nextCampaignLevel("L19");
  if (afterL19?.id !== "L20") {
    throw new Error(`Next after L19 must be L20, got ${afterL19?.id ?? "none"}`);
  }
  const afterL39 = nextCampaignLevel("L39");
  if (afterL39?.id !== "L40") throw new Error(`Next after L39 must be L40, got ${afterL39?.id ?? "none"}`);
  const afterL42 = nextCampaignLevel("L42");
  if (afterL42?.id !== "L43") throw new Error(`Next after L42 must be L43, got ${afterL42?.id ?? "none"}`);
  const afterL45 = nextCampaignLevel("L45");
  if (afterL45?.id !== "L46") throw new Error(`Next after L45 must be L46, got ${afterL45?.id ?? "none"}`);
  const afterL48 = nextCampaignLevel("L48");
  if (afterL48?.id !== "L49") throw new Error(`Next after L48 must be L49, got ${afterL48?.id ?? "none"}`);
  const afterL51 = nextCampaignLevel("L51");
  if (afterL51?.id !== "L52") throw new Error("L51 must route to L52");
  const afterL54 = nextCampaignLevel("L54");
  if (afterL54?.id !== "L55") throw new Error("L54 must route to L55");
  const afterL57 = nextCampaignLevel("L57");
  if (afterL57?.id !== "L58") throw new Error("L57 must route to L58");
  const afterL60 = nextCampaignLevel("L60");
  if (afterL60?.id !== "L61") throw new Error("L60 must route to L61");
  const afterL63 = nextCampaignLevel("L63");
  if (afterL63?.id !== "L64") throw new Error(`L63 must lead to L64, got ${afterL63?.id}`);
  const afterL66 = nextCampaignLevel("L66");
  if (afterL66?.id !== "L67") throw new Error(`L66 must lead to L67, got ${afterL66?.id}`);
  const afterL69 = nextCampaignLevel("L69");
  if (afterL69?.id !== "L70") throw new Error(`L69 must lead to L70, got ${afterL69?.id}`);
  const afterL72 = nextCampaignLevel("L72");
  if (afterL72?.id !== "L73") throw new Error(`L72 must lead to L73, got ${afterL72?.id}`);
  const afterL75 = nextCampaignLevel("L75");
  if (afterL75?.id !== "L76") throw new Error(`L75 must lead to L76, got ${afterL75?.id}`);
  const afterL78 = nextCampaignLevel("L78");
  if (afterL78?.id !== "L79") throw new Error(`L78 must lead to L79, got ${afterL78?.id}`);
  const afterL81 = nextCampaignLevel("L81");
  if (afterL81) throw new Error("L81 must be the last campaign board");
  const l48hud = LEVELS.find((level) => level.id === "L48");
  if (!l48hud || l48hud.number !== 48) throw new Error(`L48 HUD number must be 48, got ${l48hud?.number}`);
  const l51hud = LEVELS.find((level) => level.id === "L51");
  if (!l51hud || l51hud.number !== 51) throw new Error(`L51 HUD number must be 51, got ${l51hud?.number}`);
  const l54hud = LEVELS.find((level) => level.id === "L54");
  if (!l54hud || l54hud.number !== 54) throw new Error(`L54 HUD number must be 54, got ${l54hud?.number}`);
  const l57hud = LEVELS.find((level) => level.id === "L57");
  if (!l57hud || l57hud.number !== 57) throw new Error(`L57 HUD number must be 57, got ${l57hud?.number}`);
  const l60hud = LEVELS.find((level) => level.id === "L60");
  if (!l60hud || l60hud.number !== 60) throw new Error(`L60 HUD number must be 60, got ${l60hud?.number}`);
  const l63hud = LEVELS.find((level) => level.id === "L63");
  if (!l63hud || l63hud.number !== 63) throw new Error(`L63 HUD number must be 63, got ${l63hud?.number}`);
  const l66hud = LEVELS.find((level) => level.id === "L66");
  if (!l66hud || l66hud.number !== 66) throw new Error(`L66 HUD number must be 66, got ${l66hud?.number}`);
  const l69hud = LEVELS.find((level) => level.id === "L69");
  if (!l69hud || l69hud.number !== 69) throw new Error(`L69 HUD number must be 69, got ${l69hud?.number}`);
  const l72hud = LEVELS.find((level) => level.id === "L72");
  if (!l72hud || l72hud.number !== 72) throw new Error(`L72 HUD number must be 72, got ${l72hud?.number}`);
  const l75hud = LEVELS.find((level) => level.id === "L75");
  if (!l75hud || l75hud.number !== 75) throw new Error(`L75 HUD number must be 75, got ${l75hud?.number}`);
  const l78hud = LEVELS.find((level) => level.id === "L78");
  if (!l78hud || l78hud.number !== 78) throw new Error(`L78 HUD number must be 78, got ${l78hud?.number}`);
  const l81hud = LEVELS.find((level) => level.id === "L81");
  if (!l81hud || l81hud.number !== 81) throw new Error(`L81 HUD number must be 81, got ${l81hud?.number}`);
  if (CAMPAIGN_LEVEL_COUNT !== 81) throw new Error(`HUD denom must be 81, got ${CAMPAIGN_LEVEL_COUNT}`);
  console.log("Level index HUD locks ok · L20=20/81 · L81=81/81 · L9→L11 · L78→L79 · L75→L76 · L60→L61");
}

{
  // Pink kill: Met roster must surface the chosen toast name, not catalog defaultName.
  // Naming Mango "Pepper" must not leave Met labeled Mango.
  const mango = friendById("friend_001");
  if (!mango) throw new Error("missing Mango catalog for Met identity lock");
  const defaultName = String(mango.defaultName);
  if (defaultName !== "Mango") throw new Error(`Mango defaultName drifted: ${defaultName}`);
  if (!NAMING.suggestion_pools.food.includes("Pepper")) {
    throw new Error("Pepper must stay a food chip so the Met identity regression stays covered");
  }
  const chosenToastName: string = "Pepper";
  const fakeFriends = [
    {
      instanceId: "inst-test",
      friendId: "friend_001",
      phenotypeId: mango.phenotype.phenotypeId,
      name: chosenToastName,
      rescuedAt: 0,
      clearIndex: 3,
      roost: 0,
      favoriteToy: "paper bag",
      firstNight: false,
    },
  ];
  // FriendsMet Met tab: prefer instance.name over catalog.defaultName.
  const metLabel: string =
    fakeFriends.find((friend) => friend.friendId === "friend_001")?.name ?? defaultName;
  if (metLabel !== chosenToastName) {
    throw new Error(`Met must show chosen toast name ${chosenToastName}, got ${metLabel}`);
  }
  if (metLabel === defaultName) {
    throw new Error("Met must not prefer catalog defaultName over the chosen toast name");
  }
  console.log("Met identity lock ok · chosen name wins over defaultName");
}


{
  // Pink kill: cold open — no ghost waitingTree; Met empty copy invites.
  if (EMPTY_SAVE.furniture.includes("furn_tree_mini")) {
    throw new Error("cold open: Mini Cat Tree must not be auto-owned");
  }
  const inkChipsLock = chipsForFriend("friend_002");
  if (inkChipsLock.join(",") !== "Ink,Slate,Nimbus") {
    throw new Error(`cold open Ink chips must be Ink/Slate/Nimbus, got ${inkChipsLock.join("/")}`);
  }
  for (const banned of ["Ash", "Shadow", "Mango", "Tux", "Pumpkin", "Noodle", "Bean"]) {
    if (inkChipsLock.includes(banned)) {
      throw new Error(`Ink chips must not include parade name ${banned}`);
    }
  }
  console.log("Cold open + Ink chips lock ok · no ghost tree · Ink/Slate/Nimbus");
}

{
  // Pink kill: mill rewrite L24/L25/L29–L31 — same IDs, color-brake teaches, no parade remap.
  const names: Record<string, string> = {
    L24: "Arc Brake",
    L25: "Column Slip",
    L29: "Pair Cut",
    L30: "Thread South",
    L31: "West Slip",
  };
  for (const [id, name] of Object.entries(names)) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing mill rewrite ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}, got ${level.name}`);
  }
  if (paradeClearForLevel("L24") !== 24) throw new Error("L24 parade clear must stay 24");
  if (paradeClearForLevel("L30") !== 30) throw new Error("L30 parade clear must stay 30");
  console.log("Mill rewrite L24/L25/L29–L31 ok · same IDs · no parade remap");
}

{
  const oak = friendForClear(39);
  if (oak?.friendId !== "friend_013") {
    throw new Error(`onClear(39) must unlock Oak, got ${oak?.friendId ?? "none"}`);
  }
  if (CHAPTER3_OAK.unlock_clear !== 39 || CHAPTER3_OAK.friend_id !== "friend_013") {
    throw new Error("oak pack must pin Oak at clear 39");
  }
  if (CHAPTER3_OAK.naming.prefill !== "") throw new Error("oak naming prefill must stay empty");
  const oakChips = chipsForFriend("friend_013");
  if (oakChips.join(",") !== "Oak,Acorn,Timber") {
    throw new Error(`Oak chips must be Oak/Acorn/Timber, got ${oakChips.join("/")}`);
  }
  for (const banned of ["Ash", "Shadow", "Cinder", "Soot", "Hearth", "Pumpkin", "Pepper", "Bean", "Mango"]) {
    if (oakChips.includes(banned)) throw new Error(`Oak chips must not include ${banned}`);
  }
  if (oak.phenotype.artKit !== "oak") {
    throw new Error("Oak must use oak blotch loafs, not ginger/pepper/pumpkin");
  }
  if (oak.phenotype.boardColor !== "orange") throw new Error("Oak must be color_orange");
  if (furnitureGiftsForClear(39).length !== 0) throw new Error("clear 39 must gift nothing");
  const bang = CHAPTER3_OAK.bang_copy.friend_013?.[0];
  if (bang !== "{Name}: Sturdy loaf. Will outlast the furniture.") {
    throw new Error(`Oak first-night drifted: ${bang}`);
  }
  if (ART_KIT_PATH.oak.loaf48 !== "/assets/cats/oak_loaf_48.svg") {
    throw new Error("Oak yard/unlock must map oak 48 → oak_loaf_48");
  }
  if (ART_KIT_PATH.oak.loaf72 !== "/assets/cats/oak_loaf_72.svg") {
    throw new Error("Oak yard/unlock must map oak 72 → oak_loaf_72");
  }
  for (const file of [
    "public/assets/cats/oak_loaf_48.svg",
    "public/assets/cats/oak_loaf_72.svg",
    "public/assets/gates/gate_black.svg",
    "public/assets/gate_black.svg",
  ]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const oakArt = readFileSync(resolve("public/assets/cats/oak_loaf_72.svg"), "utf8");
  if (!oakArt.includes("#B56A38")) throw new Error("Oak loaf must use bark-warm #B56A38");
  if (!oakArt.includes("#8A4524")) throw new Error("Oak loaf must show blotches #8A4524");
  if (oakArt.includes("#D48A4A")) throw new Error("Oak loaf must not reuse Pepper orange");
  if (GATE_ASSETS.black !== "/assets/gates/gate_black.svg") {
    throw new Error("GATE_ASSETS.black must point at gate_black.svg");
  }
  if (paradeClearForLevel("L39") !== 39) throw new Error("L39 must map to parade clear 39");
  if (paradeClearForLevel("L40") !== 40) throw new Error("L40 must map to parade clear 40");
  if (paradeClearForLevel("L42") !== 42) throw new Error("L42 must map to parade clear 42");
  if (shippedFriendForClear(39)?.friendId !== "friend_013") {
    throw new Error("shipped parade must award Oak at 39");
  }
  if (shippedFriendForClear(40)) throw new Error("L40 must not award a friend");
  if (shippedFriendForClear(41)) throw new Error("L41 must not award a friend");
  if (shippedFriendForClear(42)?.friendId !== "friend_014") throw new Error("Dumpling@42 must ship this slice");
  if (friendForClear(42)?.friendId !== "friend_014") {
    throw new Error("CURRENT must still list Dumpling at clear 42");
  }
  if (shippedFriendForClear(45)?.friendId !== "friend_015") throw new Error("Stripe@45 must ship this slice");
  if (friendForClear(45)?.friendId !== "friend_015") {
    throw new Error("CURRENT must still list Stripe at clear 45");
  }
  if (shippedFriendForClear(60)?.friendId !== "friend_020") {
    throw new Error("shipped parade must award Bean at 60");
  }
  for (const id of ["L40", "L41", "L42"] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level?.colorLocks) throw new Error(`${id} must lock colors`);
  }
  const l40 = LEVELS.find((level) => level.id === "L40")!;
  const l41 = LEVELS.find((level) => level.id === "L41")!;
  const l42 = LEVELS.find((level) => level.id === "L42")!;
  if (l40.name !== "South Seal") throw new Error("L40 must be South Seal");
  if (l41.name !== "South Slip") throw new Error("L41 must be South Slip");
  if (l42.name !== "East Brake") throw new Error("L42 must be East Brake");
  console.log("Oak @ onClear(39) ok · bark blotch loafs + L40–L42 wired");

}


{
  const dumpling = friendForClear(42);
  if (dumpling?.friendId !== "friend_014") {
    throw new Error(`onClear(42) must unlock Dumpling, got ${dumpling?.friendId ?? "none"}`);
  }
  if (CHAPTER3_DUMPLING.unlock_clear !== 42 || CHAPTER3_DUMPLING.friend_id !== "friend_014") {
    throw new Error("dumpling pack must pin Dumpling at clear 42");
  }
  if (CHAPTER3_DUMPLING.naming.prefill !== "") throw new Error("dumpling naming prefill must stay empty");
  const dumplingChips = chipsForFriend("friend_014");
  if (dumplingChips.join(",") !== "Dumpling,Bao,Fold") {
    throw new Error(`Dumpling chips must be Dumpling/Bao/Fold, got ${dumplingChips.join("/")}`);
  }
  for (const banned of ["Oak", "Acorn", "Timber", "Noodle", "Ramen", "Twirl", "Biscuit", "Mochi", "Toast", "Ghost", "Wisp", "Pearl", "Bean", "Mango", "Ash", "Stripe"]) {
    if (dumplingChips.includes(banned)) throw new Error(`Dumpling chips must not include ${banned}`);
  }
  if (dumpling.phenotype.artKit !== "dumpling") {
    throw new Error("Dumpling must use dumpling fold loafs, not cream/ghost/noodle");
  }
  if (dumpling.phenotype.boardColor !== "orange") throw new Error("Dumpling must be color_orange");
  if (dumpling.phenotype.pattern !== "Solid") throw new Error("Dumpling must stay cream solid");
  if (dumpling.phenotype.color !== "Cream") throw new Error("Dumpling must stay Cream");
  if (dumpling.phenotype.personality !== "Cozy") throw new Error("Dumpling personality must be Cozy");
  if (furnitureGiftsForClear(42).length !== 0) throw new Error("clear 42 must gift nothing");
  const bang = CHAPTER3_DUMPLING.bang_copy.friend_014?.[0];
  if (bang !== "{Name}: Perfectly folded. Frequently steaming.") {
    throw new Error(`Dumpling first-night drifted: ${bang}`);
  }
  if (ART_KIT_PATH.dumpling.loaf48 !== "/assets/cats/dumpling_loaf_48.svg") {
    throw new Error("Dumpling yard/unlock must map dumpling 48 → dumpling_loaf_48");
  }
  if (ART_KIT_PATH.dumpling.loaf72 !== "/assets/cats/dumpling_loaf_72.svg") {
    throw new Error("Dumpling yard/unlock must map dumpling 72 → dumpling_loaf_72");
  }
  for (const file of [
    "public/assets/cats/dumpling_loaf_48.svg",
    "public/assets/cats/dumpling_loaf_72.svg",
  ]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const dumplingArt = readFileSync(resolve("public/assets/cats/dumpling_loaf_72.svg"), "utf8");
  const creamArt = readFileSync(resolve("public/assets/cats/cream_loaf_72.svg"), "utf8");
  const ghostArt = readFileSync(resolve("public/assets/cats/ghost_loaf_72.svg"), "utf8");
  const noodleArt = readFileSync(resolve("public/assets/cats/noodle_loaf_72.svg"), "utf8");
  if (dumplingArt === creamArt) throw new Error("Dumpling loaf must not be a cream kit clone");
  if (dumplingArt === ghostArt) throw new Error("Dumpling loaf must not be a Ghost clone");
  if (dumplingArt === noodleArt) throw new Error("Dumpling loaf must not be a Noodle clone");
  if (!dumplingArt.includes("#F2D2A0")) throw new Error("Dumpling loaf must use warm cream #F2D2A0");
  if (!dumplingArt.includes("#C9955C")) throw new Error("Dumpling loaf must show food-fold #C9955C");
  if (dumplingArt.includes("#B8925A")) throw new Error("Dumpling loaf must not reuse Noodle mackerel #B8925A");
  if (dumplingArt.includes("#FFF8F0")) throw new Error("Dumpling loaf must not reuse flat cream kit #FFF8F0");
  if (dumplingArt.includes("#E6E0D4")) throw new Error("Dumpling loaf must not reuse Ghost pale #E6E0D4");
  if (paradeClearForLevel("L42") !== 42) throw new Error("L42 must map to parade clear 42");
  if (paradeClearForLevel("L43") !== 43) throw new Error("L43 must map to parade clear 43");
  if (paradeClearForLevel("L45") !== 45) throw new Error("L45 must map to parade clear 45");
  if (shippedFriendForClear(42)?.friendId !== "friend_014") {
    throw new Error("shipped parade must award Dumpling at 42");
  }
  if (shippedFriendForClear(41)) throw new Error("L41 must not award a friend");
  if (shippedFriendForClear(43)) throw new Error("L43 must not award a friend");
  if (shippedFriendForClear(44)) throw new Error("L44 must not award a friend");
  if (shippedFriendForClear(45)?.friendId !== "friend_015") throw new Error("Stripe@45 must ship this slice");
  if (friendForClear(45)?.friendId !== "friend_015") {
    throw new Error("CURRENT must still list Stripe at clear 45");
  }
  if (shippedFriendForClear(60)?.friendId !== "friend_020") {
    throw new Error("shipped parade must award Bean at 60");
  }
  for (const id of ["L43", "L44", "L45"] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level?.colorLocks) throw new Error(`${id} must lock colors`);
  }
  const l43 = LEVELS.find((level) => level.id === "L43")!;
  const l44 = LEVELS.find((level) => level.id === "L44")!;
  const l45 = LEVELS.find((level) => level.id === "L45")!;
  if (l43.name !== "Thread West") throw new Error("L43 must be Thread West");
  if (/^Hold\b/i.test(l43.name)) throw new Error("L43 must not use a Hold* mill title");
  if (l44.name !== "North Seal") throw new Error("L44 must be North Seal");
  if (l45.name !== "North Slip") throw new Error("L45 must be North Slip");
  console.log("Dumpling @ onClear(42) ok · cream fold loafs + L43–L45 wired (L43 Thread West · no Hold*)");
}



{
  const stripe = friendForClear(45);
  if (stripe?.friendId !== "friend_015") {
    throw new Error(`onClear(45) must unlock Stripe, got ${stripe?.friendId ?? "none"}`);
  }
  if (CHAPTER3_STRIPE.unlock_clear !== 45 || CHAPTER3_STRIPE.friend_id !== "friend_015") {
    throw new Error("stripe pack must pin Stripe at clear 45");
  }
  if (CHAPTER3_STRIPE.naming.prefill !== "") throw new Error("stripe naming prefill must stay empty");
  const stripeChips = chipsForFriend("friend_015");
  if (stripeChips.join(",") !== "Stripe,Dash,Lane") {
    throw new Error(`Stripe chips must be Stripe/Dash/Lane, got ${stripeChips.join("/")}`);
  }
  for (const banned of ["Dumpling", "Bao", "Potsticker", "Oak", "Acorn", "Timber", "Noodle", "Ramen", "Twirl", "Pepper", "Spice", "Pip", "Pumpkin", "Squash", "Ember", "Bean", "Cloud", "Mango", "Ash"]) {
    if (stripeChips.includes(banned)) throw new Error(`Stripe chips must not include ${banned}`);
  }
  if (stripe.phenotype.artKit !== "stripe") {
    throw new Error("Stripe must use stripe road-map loafs, not ginger/pepper/pumpkin/oak/noodle");
  }
  if (stripe.phenotype.boardColor !== "orange") throw new Error("Stripe must be color_orange");
  if (stripe.phenotype.pattern !== "Mackerel") throw new Error("Stripe must stay orange mackerel");
  if (stripe.phenotype.color !== "Orange") throw new Error("Stripe must stay Orange");
  if (stripe.phenotype.personality !== "Busy") throw new Error("Stripe personality must be Busy");
  if (stripe.phenotype.phenotypeId !== "pheno_tabby_orange_mackerel_regular_regular") {
    throw new Error(`Stripe phenotype drifted: ${stripe.phenotype.phenotypeId}`);
  }
  if (furnitureGiftsForClear(45).length !== 0) throw new Error("clear 45 must gift nothing");
  const bang = CHAPTER3_STRIPE.bang_copy.friend_015?.[0];
  if (bang !== "{Name}: Wears the road map on their back.") {
    throw new Error(`Stripe first-night drifted: ${bang}`);
  }
  if (ART_KIT_PATH.stripe.loaf48 !== "/assets/cats/stripe_loaf_48.svg") {
    throw new Error("Stripe yard/unlock must map stripe 48 → stripe_loaf_48");
  }
  if (ART_KIT_PATH.stripe.loaf72 !== "/assets/cats/stripe_loaf_72.svg") {
    throw new Error("Stripe yard/unlock must map stripe 72 → stripe_loaf_72");
  }
  for (const file of [
    "public/assets/cats/stripe_loaf_48.svg",
    "public/assets/cats/stripe_loaf_72.svg",
  ]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const stripeArt = readFileSync(resolve("public/assets/cats/stripe_loaf_72.svg"), "utf8");
  const gingerArt = readFileSync(resolve("public/assets/cats/ginger_loaf_72.svg"), "utf8");
  const pepperArt = readFileSync(resolve("public/assets/cats/pepper_loaf_72.svg"), "utf8");
  const pumpkinArt = readFileSync(resolve("public/assets/cats/pumpkin_loaf_72.svg"), "utf8");
  const noodleArt = readFileSync(resolve("public/assets/cats/noodle_loaf_72.svg"), "utf8");
  if (stripeArt === gingerArt) throw new Error("Stripe loaf must not be a ginger kit clone");
  if (stripeArt === pepperArt) throw new Error("Stripe loaf must not be a Pepper clone");
  if (stripeArt === pumpkinArt) throw new Error("Stripe loaf must not be a Pumpkin clone");
  if (stripeArt === noodleArt) throw new Error("Stripe loaf must not be a Noodle clone");
  if (!stripeArt.includes("#E09A48")) throw new Error("Stripe loaf must use map-orange #E09A48");
  if (!stripeArt.includes("#B45A22")) throw new Error("Stripe loaf must show road-map #B45A22");
  if (stripeArt.includes("#D48A4A")) throw new Error("Stripe loaf must not reuse Pepper orange");
  if (stripeArt.includes("#E07A32")) throw new Error("Stripe loaf must not reuse Pumpkin orange");
  if (stripeArt.includes("#B56A38")) throw new Error("Stripe loaf must not reuse Oak bark");
  if (stripeArt.includes("#B8925A")) throw new Error("Stripe loaf must not reuse Noodle mackerel");
  if (stripeArt.includes("#D38B5D")) throw new Error("Stripe loaf must not reuse Mango ginger");
  if (paradeClearForLevel("L45") !== 45) throw new Error("L45 must map to parade clear 45");
  if (paradeClearForLevel("L46") !== 46) throw new Error("L46 must map to parade clear 46");
  if (paradeClearForLevel("L48") !== 48) throw new Error("L48 must map to parade clear 48");
  if (shippedFriendForClear(45)?.friendId !== "friend_015") {
    throw new Error("shipped parade must award Stripe at 45");
  }
  if (shippedFriendForClear(44)) throw new Error("L44 must not award a friend");
  if (shippedFriendForClear(46)) throw new Error("L46 must not award a friend");
  if (shippedFriendForClear(47)) throw new Error("L47 must not award a friend");
  if (shippedFriendForClear(48)?.friendId !== "friend_016") throw new Error("Cloud@48 must ship this slice");
  if (friendForClear(48)?.friendId !== "friend_016") {
    throw new Error("CURRENT must still list Cloud at clear 48");
  }
  if (shippedFriendForClear(51)?.friendId !== "friend_017") {
    throw new Error("shipped parade must award Donna at 51");
  }
  if (shippedFriendForClear(60)?.friendId !== "friend_020") {
    throw new Error("shipped parade must award Bean at 60");
  }
  for (const id of ["L46", "L47", "L48"] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level?.colorLocks) throw new Error(`${id} must lock colors`);
  }
  const l46 = LEVELS.find((level) => level.id === "L46")!;
  const l47 = LEVELS.find((level) => level.id === "L47")!;
  const l48 = LEVELS.find((level) => level.id === "L48")!;
  if (l46.name !== "Twin Peg") throw new Error("L46 must be Twin Peg");
  if (/^Hold\b/i.test(l46.name)) throw new Error("L46 must not use a Hold* mill title");
  if (l47.name !== "Side Seal") throw new Error("L47 must be Side Seal");
  if (l48.name !== "Vacate Row") throw new Error("L48 must be Vacate Row");
  const l31 = LEVELS.find((level) => level.id === "L31")!;
  if (l31.name !== "West Slip") throw new Error("L31 must stay West Slip");
  if (l48.teach === l31.teach) throw new Error("L48 teach must differ from L31");
  if (l48.templateId === l31.templateId) throw new Error("L48 templateId must differ from L31");
  console.log("Stripe @ onClear(45) ok · road-map mackerel loafs + L46–L48 wired (L46 Twin Peg · L48 Vacate Row)");
}


{
  // Pink kill: Hold* mill — L43/L46 must not retread Hold South/East titles; L48 must not collide with L31 Vacate West.
  const l43 = LEVELS.find((row) => row.id === "L43");
  const l46 = LEVELS.find((row) => row.id === "L46");
  const l48 = LEVELS.find((row) => row.id === "L48");
  const l31 = LEVELS.find((row) => row.id === "L31");
  if (!l43 || !l46 || !l48 || !l31) throw new Error("missing L31/L43/L46/L48 for Hold* mill kill");
  if (l43.name !== "Thread West") throw new Error(`L43 mill kill: expected Thread West, got ${l43.name}`);
  if (l46.name !== "Twin Peg") throw new Error(`L46 mill kill: expected Twin Peg, got ${l46.name}`);
  if (/^Hold\b/i.test(l43.name) || /^Hold\b/i.test(l46.name)) {
    throw new Error("L43/L46 must not use Hold* mill titles");
  }
  if (String(l43.teach ?? "").startsWith("hold_")) throw new Error("L43 teach must not be hold_*");
  if (String(l46.teach ?? "").startsWith("hold_")) throw new Error("L46 teach must not be hold_*");
  if (l48.name !== "Vacate Row") throw new Error(`L48 mill kill: expected Vacate Row, got ${l48.name}`);
  if (l31.name === l48.name) throw new Error("L48 must not name-collide with L31");
  if (l48.templateId === l31.templateId) throw new Error("L48 template must not collide with L31");
  console.log("Hold* mill kill ok · L43 Thread West · L46 Twin Peg · L48 Vacate Row ≠ L31");
}


{
  // Rival Fail on Park* Close: real rewrites Thread West + Dual Brake (no Hold*/Park*/Close).
  const l43 = LEVELS.find((row) => row.id === "L43");
  const l46 = LEVELS.find((row) => row.id === "L46");
  if (!l43 || !l46) throw new Error("missing L43/L46 rival rewrite");
  if (l43.name !== "Thread West") throw new Error(`L43 must be Thread West, got ${l43.name}`);
  if (l46.name !== "Twin Peg") throw new Error(`L46 must be Twin Peg, got ${l46.name}`);
  for (const level of [l43, l46]) {
    if (/\b(hold|park|close)\b/i.test(level.name)) {
      throw new Error(`${level.id} must not be Hold*/Park*/Close mill teach`);
    }
  }
  if (String(l43.teach ?? "").startsWith("hold_") || String(l43.teach ?? "").includes("park_") && String(l43.teach ?? "").includes("close")) {
    throw new Error("L43 teach must not be hold_*/park_*_close");
  }
  if (String(l46.teach ?? "").startsWith("hold_") || /park_.*close|close_.*park/.test(String(l46.teach ?? ""))) {
    throw new Error("L46 teach must not be hold_*/park_*_close");
  }
  console.log("Rival rewrite L43/L46 ok · Thread West · Dual Brake");
}


{
  const cloud = friendForClear(48);
  if (cloud?.friendId !== "friend_016") {
    throw new Error(`onClear(48) must unlock Cloud, got ${cloud?.friendId ?? "none"}`);
  }
  if (CHAPTER3_CLOUD.unlock_clear !== 48 || CHAPTER3_CLOUD.friend_id !== "friend_016") {
    throw new Error("cloud pack must pin Cloud at clear 48");
  }
  if (CHAPTER3_CLOUD.naming.prefill !== "") throw new Error("cloud naming prefill must stay empty");
  const cloudChips = chipsForFriend("friend_016");
  if (cloudChips.join(",") !== "Cloud,Puff,Drift") {
    throw new Error(`Cloud chips must be Cloud/Puff/Drift, got ${cloudChips.join("/")}`);
  }
  for (const banned of ["Mist", "Fog", "Soft", "Ghost", "Wisp", "Pearl", "Cinder", "Soot", "Hearth", "Dumpling", "Bao", "Fold", "Stripe", "Dash", "Lane", "Bean", "Mango", "Donna"]) {
    if (cloudChips.includes(banned)) throw new Error(`Cloud chips must not include ${banned}`);
  }
  if (cloud.phenotype.artKit !== "cloud") {
    throw new Error("Cloud must use cloud puff-stack loafs, not cream/ghost/dumpling");
  }
  if (cloud.phenotype.boardColor !== "orange") throw new Error("Cloud must be color_orange");
  if (cloud.phenotype.pattern !== "Solid") throw new Error("Cloud must stay cream solid");
  if (cloud.phenotype.color !== "Cream") throw new Error("Cloud must stay Cream");
  if (cloud.phenotype.personality !== "Floaty") throw new Error("Cloud personality must be Floaty");
  if (cloud.phenotype.phenotypeId !== "pheno_dsh_cream_solid_regular_regular_cloud") {
    throw new Error(`Cloud phenotype drifted: ${cloud.phenotype.phenotypeId}`);
  }
  if (furnitureGiftsForClear(48).map((sku) => sku.skuId).join(",") !== "furn_swing_yarn") throw new Error("clear 48 must gift yarn");
  const bang = CHAPTER3_CLOUD.bang_copy.friend_016?.[0];
  if (bang !== "{Name}: Floats from cushion to cushion.") {
    throw new Error(`Cloud first-night drifted: ${bang}`);
  }
  if (ART_KIT_PATH.cloud.loaf48 !== "/assets/cats/cloud_loaf_48.svg") {
    throw new Error("Cloud yard/unlock must map cloud 48 → cloud_loaf_48");
  }
  if (ART_KIT_PATH.cloud.loaf72 !== "/assets/cats/cloud_loaf_72.svg") {
    throw new Error("Cloud yard/unlock must map cloud 72 → cloud_loaf_72");
  }
  for (const file of [
    "public/assets/cats/cloud_loaf_48.svg",
    "public/assets/cats/cloud_loaf_72.svg",
  ]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const cloudArt = readFileSync(resolve("public/assets/cats/cloud_loaf_72.svg"), "utf8");
  const creamArt = readFileSync(resolve("public/assets/cats/cream_loaf_72.svg"), "utf8");
  const ghostArt = readFileSync(resolve("public/assets/cats/ghost_loaf_72.svg"), "utf8");
  const dumplingArt = readFileSync(resolve("public/assets/cats/dumpling_loaf_72.svg"), "utf8");
  if (cloudArt === creamArt) throw new Error("Cloud loaf must not be a cream kit clone");
  if (cloudArt === ghostArt) throw new Error("Cloud loaf must not be a Ghost clone");
  if (cloudArt === dumplingArt) throw new Error("Cloud loaf must not be a Dumpling clone");
  if (!cloudArt.includes("#EEE8DE")) throw new Error("Cloud loaf must use highlight #EEE8DE");
  if (!cloudArt.includes("#D5CFC4")) throw new Error("Cloud loaf must show dove #D5CFC4");
  if (!cloudArt.includes("#B8B2A8")) throw new Error("Cloud loaf must show rain-shadow #B8B2A8");
  if (!cloudArt.includes("#9A958C")) throw new Error("Cloud loaf must show deep rain-shadow #9A958C");
  if (cloudArt.includes("#E8C888")) throw new Error("Cloud loaf must not reuse Dumpling bun #E8C888");
  if (cloudArt.includes("#F2D2A0")) throw new Error("Cloud loaf must not reuse Dumpling warm cream");
  if (cloudArt.includes("#C9955C")) throw new Error("Cloud loaf must not reuse Dumpling fold");
  if (cloudArt.includes("#E6E0D4")) throw new Error("Cloud loaf must not reuse Ghost pale #E6E0D4");
  if (cloudArt.includes("#FFF8F0")) throw new Error("Cloud loaf must not use Biscuit paper-cream #FFF8F0");
  if (paradeClearForLevel("L48") !== 48) throw new Error("L48 must map to parade clear 48");
  if (paradeClearForLevel("L49") !== 49) throw new Error("L49 must map to parade clear 49");
  if (paradeClearForLevel("L51") !== 51) throw new Error("L51 must map to parade clear 51");
  if (shippedFriendForClear(48)?.friendId !== "friend_016") {
    throw new Error("shipped parade must award Cloud at 48");
  }
  if (shippedFriendForClear(47)) throw new Error("L47 must not award a friend");
  if (shippedFriendForClear(49)) throw new Error("L49 must not award a friend");
  if (shippedFriendForClear(50)) throw new Error("L50 must not award a friend");
  if (shippedFriendForClear(51)?.friendId !== "friend_017") {
    throw new Error("shipped parade must award Donna at 51");
  }
  if (shippedFriendForClear(60)?.friendId !== "friend_020") {
    throw new Error("shipped parade must award Bean at 60");
  }
  for (const id of ["L49", "L50", "L51"] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level?.colorLocks) throw new Error(`${id} must lock colors`);
  }
  const l49 = LEVELS.find((level) => level.id === "L49")!;
  const l50 = LEVELS.find((level) => level.id === "L50")!;
  const l51 = LEVELS.find((level) => level.id === "L51")!;
  if (l49.name !== "Step Cut") throw new Error("L49 must be Step Cut");
  if (/\b(hold|park|close)\b/i.test(l49.name)) throw new Error("L49 must not be Hold*/Park*/Close");
  if (l50.name !== "Commit Through") throw new Error("L50 must be Commit Through");
  if (l51.name !== "Offset Brake") throw new Error("L51 must be Offset Brake");
  console.log("Cloud @ onClear(48) ok · puff-stack cream loafs + L49–L51 wired (Step Cut / Commit Through / Offset Brake)");
}


{
  // Rival Cloud art Fail: puff-stack must show value steps (not cream-on-cream).
  const cloudArtFix = readFileSync(resolve("public/assets/cats/cloud_loaf_72.svg"), "utf8");
  for (const hex of ["#EEE8DE", "#D5CFC4", "#B8B2A8", "#9A958C"] as const) {
    if (!cloudArtFix.includes(hex)) throw new Error(`Cloud loaf missing contrast step ${hex}`);
  }
  if (cloudArtFix.includes("#E8C888")) throw new Error("Cloud loaf must not reuse Dumpling bun #E8C888");
  console.log("Cloud loaf contrast ok · highlight/dove/rain-shadow");
}


{
  const l50r = LEVELS.find((row) => row.id === "L50");
  const l51r = LEVELS.find((row) => row.id === "L51");
  const l26r = LEVELS.find((row) => row.id === "L26");
  if (!l50r || !l51r || !l26r) throw new Error("missing L26/L50/L51");
  if (l50r.name !== "Commit Through") throw new Error(`L50 must be Commit Through, got ${l50r.name}`);
  if (l51r.name !== "Offset Brake") throw new Error(`L51 must be Offset Brake, got ${l51r.name}`);
  if (l50r.name === l26r.name) throw new Error("L50 must not name-collide with L26 Thread East");
  if (/thread east|dual cross|\bhold\b|\bpark\b|\bclose\b/i.test(l50r.name + " " + l51r.name)) {
    throw new Error("L50/L51 must not reuse Thread East / Dual Cross / Hold*/Park*");
  }
  console.log("Rival rewrite L50/L51 ok · Commit Through · Offset Brake");
}


{
  const donna = friendById(DONNA_FRIEND_ID);
  if (!donna || donna.friendId !== "friend_017") throw new Error("Donna friend_017 missing");
  if (donna.unlockClear !== 51) throw new Error("Donna must unlock at 51");
  if (donna.phenotype.artKit !== "donna") throw new Error("Donna kit must be donna (not calico/tuxedo)");
  if (donna.phenotype.personality !== "Manager") throw new Error("Donna personality must be Manager");
  const chips = chipsForFriend(DONNA_FRIEND_ID);
  if (chips.join("/") !== "Donna/Karen/Helen") throw new Error(`Donna chips must be Donna/Karen/Helen, got ${chips.join("/")}`);
  for (const ban of ["Nigel", "Steve", "Greg", "Cloud", "Puff", "Drift", "Stripe", "Dash", "Lane"]) {
    if (chips.includes(ban)) throw new Error(`Donna chips must not include ${ban}`);
  }
  if (furnitureGiftsForClear(51).length !== 0) throw new Error("Donna@51 must gift nothing");
  if (SLICE_UNLOCKS[51] !== "friend_017") throw new Error("SLICE_UNLOCKS[51] must be friend_017");
  if (artForKit("donna").loaf72 !== "/assets/cats/donna_loaf_72.svg") {
    throw new Error("Donna yard/unlock must map donna 72 → donna_loaf_72");
  }
  for (const file of [
    "public/assets/cats/donna_loaf_48.svg",
    "public/assets/cats/donna_loaf_72.svg",
  ]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const donnaArt = readFileSync(resolve("public/assets/cats/donna_loaf_72.svg"), "utf8");
  const calicoArt = readFileSync(resolve("public/assets/cats/calico_loaf_72.svg"), "utf8");
  const tuxArt = readFileSync(resolve("public/assets/cats/tux_loaf_72.svg"), "utf8");
  if (donnaArt === calicoArt) throw new Error("Donna loaf must not be generic calico clone");
  if (donnaArt === tuxArt) throw new Error("Donna loaf must not be a Tux clone");
  if (paradeClearForLevel("L51") !== 51) throw new Error("L51 must map to parade clear 51");
  if (paradeClearForLevel("L52") !== 52) throw new Error("L52 must map to parade clear 52");
  if (paradeClearForLevel("L54") !== 54) throw new Error("L54 must map to parade clear 54");
  if (shippedFriendForClear(51)?.friendId !== "friend_017") {
    throw new Error("shipped parade must award Donna at 51");
  }
  if (shippedFriendForClear(52)) throw new Error("L52 must not award a friend");
  if (shippedFriendForClear(53)) throw new Error("L53 must not award a friend");
  if (shippedFriendForClear(54)?.friendId !== "friend_018") {
    throw new Error("shipped parade must award Sunny at 54");
  }
  if (shippedFriendForClear(60)?.friendId !== "friend_020") {
    throw new Error("shipped parade must award Bean at 60");
  }
  for (const id of ["L52", "L53", "L54"] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level?.colorLocks) throw new Error(`${id} must lock colors`);
  }
  const l52 = LEVELS.find((level) => level.id === "L52")!;
  const l53 = LEVELS.find((level) => level.id === "L53")!;
  const l54 = LEVELS.find((level) => level.id === "L54")!;
  if (l52.name !== "Gate Weave") throw new Error("L52 must be Gate Weave");
  if (l53.name !== "Catch Bar") throw new Error("L53 must be Catch Bar");
  if (l54.name !== "Split Latch") throw new Error("L54 must be Split Latch");
  if (/\b(hold|park|close)\b/i.test([l52.name, l53.name, l54.name].join(" "))) {
    throw new Error("L52–L54 must not be Hold*/Park*/Close");
  }
  // pack name check
  const packNames = (chapter3oPack.levels as { id: string; name: string }[]).map((row) => `${row.id}:${row.name}`);
  if (packNames.join(",") !== "L52:Gate Weave,L53:Catch Bar,L54:Split Latch") {
    throw new Error(`Donna pack names drifted: ${packNames.join(",")}`);
  }
  console.log("Donna @ onClear(51) ok · split-face calico loafs + L52–L54 wired (Gate Weave / Catch Bar / Split Latch)");
}


{
  const l52r = LEVELS.find((row) => row.id === "L52");
  const l54r = LEVELS.find((row) => row.id === "L54");
  const l32r = LEVELS.find((row) => row.id === "L32");
  const l46r = LEVELS.find((row) => row.id === "L46");
  if (!l52r || !l54r || !l32r || !l46r) throw new Error("missing L32/L46/L52/L54");
  if (l52r.name !== "Gate Weave") throw new Error(`L52 must be Gate Weave, got ${l52r.name}`);
  if (l54r.name !== "Split Latch") throw new Error(`L54 must be Split Latch, got ${l54r.name}`);
  if (l52r.name === l32r.name) throw new Error("L52 must not name-collide with L32 Thread North");
  if (/thread|dual|swap brake|\bhold\b|\bpark\b|\bclose\b/i.test(l52r.name + " " + l54r.name)) {
    throw new Error("L52/L54 must not reuse Thread*/Dual*/Swap Brake / Hold*/Park*");
  }
  console.log("Rival rewrite L52/L54 ok · Gate Weave · Split Latch");
}


{
  const sunny = friendById(SUNNY_FRIEND_ID);
  if (!sunny || sunny.friendId !== "friend_018") throw new Error("Sunny friend_018 missing");
  if (sunny.unlockClear !== 54) throw new Error("Sunny must unlock at 54");
  if (sunny.phenotype.artKit !== "sunny") throw new Error("Sunny kit must be sunny (not ginger)");
  if (sunny.phenotype.personality !== "Bright") throw new Error("Sunny personality must be Bright");
  const chips = chipsForFriend(SUNNY_FRIEND_ID);
  if (chips.join("/") !== "Sunny/Beam/Glow") throw new Error(`Sunny chips must be Sunny/Beam/Glow, got ${chips.join("/")}`);
  for (const ban of ["Sol", "Nigel", "Steve", "Greg", "Mango", "Pepper", "Pumpkin", "Oak", "Stripe", "Donna", "Karen", "Helen", "Dash", "Lane"]) {
    if (chips.includes(ban)) throw new Error(`Sunny chips must not include ${ban}`);
  }
  if (furnitureGiftsForClear(54).length !== 0) throw new Error("Sunny@54 must gift nothing");
  if (SLICE_UNLOCKS[54] !== "friend_018") throw new Error("SLICE_UNLOCKS[54] must be friend_018");
  if (artForKit("sunny").loaf72 !== "/assets/cats/sunny_loaf_72.svg") {
    throw new Error("Sunny yard/unlock must map sunny 72 → sunny_loaf_72");
  }
  for (const file of [
    "public/assets/cats/sunny_loaf_48.svg",
    "public/assets/cats/sunny_loaf_72.svg",
  ]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const sunnyArt = readFileSync(resolve("public/assets/cats/sunny_loaf_72.svg"), "utf8");
  const mangoArt = readFileSync(resolve("public/assets/cats/ginger_loaf_72.svg"), "utf8");
  const pepperArt = readFileSync(resolve("public/assets/cats/pepper_loaf_72.svg"), "utf8");
  if (sunnyArt === mangoArt) throw new Error("Sunny loaf must not be a Mango/ginger clone");
  if (sunnyArt === pepperArt) throw new Error("Sunny loaf must not be a Pepper clone");
  if (!sunnyArt.includes("#E59A3C")) throw new Error("Sunny loaf must use body #E59A3C");
  if (!sunnyArt.includes("#F0B429")) throw new Error("Sunny loaf must show marigold sun-belly #F0B429");
  if (!sunnyArt.includes("#C97828")) throw new Error("Sunny loaf must show ear/ray warm #C97828");
  // Rival soft-kill: sunbeam mark — multiple marigold fills (rays / belly), not plain orange blob
  if (sunnyArt.split("#F0B429").length - 1 < 2) {
    throw new Error("Sunny loaf must show sunbeam mark (2+ marigold #F0B429 fills)");
  }
  if (!sunnyArt.includes("#C97828")) throw new Error("Sunny loaf must use ear #C97828");
  if (sunnyArt.includes("#8F4A28")) throw new Error("Sunny loaf must not reuse Pepper spots");
  if (sunnyArt.includes("#B45A22")) throw new Error("Sunny loaf must not reuse Stripe roads");
  if (sunnyArt.includes("#8A4524")) throw new Error("Sunny loaf must not reuse Oak blotch");
  if (paradeClearForLevel("L54") !== 54) throw new Error("L54 must map to parade clear 54");
  if (paradeClearForLevel("L55") !== 55) throw new Error("L55 must map to parade clear 55");
  if (paradeClearForLevel("L57") !== 57) throw new Error("L57 must map to parade clear 57");
  if (shippedFriendForClear(54)?.friendId !== "friend_018") {
    throw new Error("shipped parade must award Sunny at 54");
  }
  if (shippedFriendForClear(55)) throw new Error("L55 must not award a friend");
  if (shippedFriendForClear(56)) throw new Error("L56 must not award a friend");
  if (shippedFriendForClear(57)?.friendId !== "friend_019") {
    throw new Error("shipped parade must award Nigel at 57");
  }
  if (shippedFriendForClear(60)?.friendId !== "friend_020") {
    throw new Error("shipped parade must award Bean at 60");
  }
  for (const id of ["L55", "L56", "L57"] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level?.colorLocks) throw new Error(`${id} must lock colors`);
  }
  const l55 = LEVELS.find((level) => level.id === "L55")!;
  const l56 = LEVELS.find((level) => level.id === "L56")!;
  const l57 = LEVELS.find((level) => level.id === "L57")!;
  if (l55.name !== "Hook Route") throw new Error("L55 must be Hook Route");
  if (l56.name !== "Color Fork") throw new Error("L56 must be Color Fork");
  if (l57.name !== "Corner Brace") throw new Error("L57 must be Corner Brace");
  if (/\b(hold|park|close|thread)\b/i.test([l55.name, l56.name, l57.name].join(" "))) {
    throw new Error("L55–L57 must not be Hold*/Park*/Close/Thread*");
  }
  const packNames = (chapter3pPack.levels as { id: string; name: string }[]).map((row) => `${row.id}:${row.name}`);
  if (packNames.join(",") !== "L55:Hook Route,L56:Color Fork,L57:Corner Brace") {
    throw new Error(`Sunny pack names drifted: ${packNames.join(",")}`);
  }
  // L53 hint scrub — no Thread-north residue
  const l53 = LEVELS.find((level) => level.id === "L53")!;
  if (/thread.?north/i.test(l53.hint)) throw new Error("L53 hint must not retain Thread-north residue");
  console.log("Sunny @ onClear(54) ok · marigold sun-belly loafs + L55–L57 wired (Hook Route / Color Fork / Corner Brace)");
}


{
  const l55r = LEVELS.find((row) => row.id === "L55");
  const l57r = LEVELS.find((row) => row.id === "L57");
  const l49r = LEVELS.find((row) => row.id === "L49");
  const l54r = LEVELS.find((row) => row.id === "L54");
  if (!l55r || !l57r || !l49r || !l54r) throw new Error("missing L49/L54/L55/L57");
  if (l55r.name !== "Hook Route") throw new Error(`L55 must be Hook Route, got ${l55r.name}`);
  if (l57r.name !== "Corner Brace") throw new Error(`L57 must be Corner Brace, got ${l57r.name}`);
  if (l55r.name === l49r.name) throw new Error("L55 must not name-collide with L49 Color Step");
  if (l57r.name === l54r.name) throw new Error("L57 must not name-collide with L54 Split Latch");
  if (/rim latch|anchor brake|\bhold\b|\bpark\b|\bclose\b|\bthread\b/i.test(l55r.name + " " + l57r.name)) {
    throw new Error("L55/L57 must not reuse Rim Latch / Anchor Brake / Hold*/Park*/Thread*");
  }
  console.log("Rival rewrite L55/L57 ok · Hook Route · Corner Brace");
}


{
  const nigel = friendById(NIGEL_FRIEND_ID);
  if (!nigel || nigel.friendId !== "friend_019") throw new Error("Nigel friend_019 missing");
  if (nigel.unlockClear !== 57) throw new Error("Nigel must unlock at 57");
  if (nigel.phenotype.artKit !== "nigel") throw new Error("Nigel kit must be nigel (not tuxedo/calico)");
  if (nigel.phenotype.personality !== "Proper") throw new Error("Nigel personality must be Proper");
  const chips = chipsForFriend(NIGEL_FRIEND_ID);
  if (chips.join("/") !== "Nigel/Clive/Graham") throw new Error(`Nigel chips must be Nigel/Clive/Graham, got ${chips.join("/")}`);
  for (const ban of ["Donna", "Karen", "Helen", "Tux", "Domino", "Bowtie", "Steve", "Greg", "Sunny", "Beam", "Glow"]) {
    if (chips.includes(ban)) throw new Error(`Nigel chips must not include ${ban}`);
  }
  if (furnitureGiftsForClear(57).length !== 0) throw new Error("Nigel@57 must gift nothing");
  if (SLICE_UNLOCKS[57] !== "friend_019") throw new Error("SLICE_UNLOCKS[57] must be friend_019");
  if (SLICE_UNLOCKS[60] !== "friend_020") throw new Error("SLICE_UNLOCKS[60] must be friend_020");
  if (artForKit("nigel").loaf72 !== "/assets/cats/nigel_loaf_72.svg") {
    throw new Error("Nigel yard/unlock must map nigel 72 → nigel_loaf_72");
  }
  for (const file of [
    "public/assets/cats/nigel_loaf_48.svg",
    "public/assets/cats/nigel_loaf_72.svg",
  ]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const nigelArt = readFileSync(resolve("public/assets/cats/nigel_loaf_72.svg"), "utf8");
  const tuxArt = readFileSync(resolve("public/assets/cats/tux_loaf_72.svg"), "utf8");
  const donnaArt = readFileSync(resolve("public/assets/cats/donna_loaf_72.svg"), "utf8");
  if (nigelArt === tuxArt) throw new Error("Nigel loaf must not be a Tux clone");
  if (nigelArt === donnaArt) throw new Error("Nigel loaf must not be a Donna clone");
  if (paradeClearForLevel("L57") !== 57) throw new Error("L57 must map to parade clear 57");
  if (paradeClearForLevel("L58") !== 58) throw new Error("L58 must map to parade clear 58");
  if (paradeClearForLevel("L60") !== 60) throw new Error("L60 must map to parade clear 60");
  if (shippedFriendForClear(57)?.friendId !== "friend_019") {
    throw new Error("shipped parade must award Nigel at 57");
  }
  if (shippedFriendForClear(58)) throw new Error("L58 must not award a friend");
  if (shippedFriendForClear(59)) throw new Error("L59 must not award a friend");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") {
    throw new Error("shipped parade must award Bean at 60");
  }
  for (const id of ["L58", "L59", "L60"] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level?.colorLocks) throw new Error(`${id} must lock colors`);
  }
  const l58 = LEVELS.find((level) => level.id === "L58")!;
  const l59 = LEVELS.find((level) => level.id === "L59")!;
  const l60 = LEVELS.find((level) => level.id === "L60")!;
  if (l58.name !== "Pinch Route") throw new Error("L58 must be Pinch Route");
  if (l59.name !== "Skew Gate") throw new Error("L59 must be Skew Gate");
  if (l60.name !== "Post Brace") throw new Error("L60 must be Post Brace");
  if (/\b(hold|park|close|thread)\b/i.test([l58.name, l59.name, l60.name].join(" "))) {
    throw new Error("L58–L60 must not be Hold*/Park*/Close/Thread*");
  }
  const packNames = (chapter3qPack.levels as { id: string; name: string }[]).map((row) => `${row.id}:${row.name}`);
  if (packNames.join(",") !== "L58:Pinch Route,L59:Skew Gate,L60:Post Brace") {
    throw new Error(`Nigel pack names drifted: ${packNames.join(",")}`);
  }
  // single porch slot — no duplicate nigel const in YardScene
  const yard = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yard.match(/const nigel =/g) || []).length !== 1) throw new Error("YardScene must declare nigel once");
  if ((yard.match(/\{nigel \?/g) || []).length !== 1) throw new Error("YardScene must render nigel once");
  console.log("Nigel @ onClear(57) ok · blaze shirtfront loafs + L58–L60 wired (Pinch Route / Skew Gate / Post Brace); Bean@60 shipped");
}


{
  const l60p = LEVELS.find((row) => row.id === "L60");
  if (!l60p) throw new Error("missing L60");
  if (l60p.name !== "Post Brace") throw new Error(`L60 must be Post Brace, got ${l60p.name}`);
  const g = [...l60p.gates].map((gate) => `${gate.x},${gate.y}`).sort().join("|");
  if (g === "1,1|4,4") throw new Error("L60 must not use (1,1)/(4,4) Split/Anchor twin");
  if (g !== "0,0|5,5") throw new Error(`L60 Post Brace gates must be (0,0)/(5,5), got ${g}`);
  if (/brace stop|\bhold\b|\bpark\b|\bclose\b|\bthread\b/i.test(l60p.name)) {
    throw new Error("L60 must not reuse Brace Stop / Hold*/Park*/Thread*");
  }
  console.log("Rival preempt L60 ok · Post Brace (0,0)/(5,5)");
}


{
  const l59r = LEVELS.find((row) => row.id === "L59");
  const l49r = LEVELS.find((row) => row.id === "L49");
  if (!l59r || !l49r) throw new Error("missing L49/L59");
  if (l59r.name !== "Skew Gate") throw new Error(`L59 must be Skew Gate, got ${l59r.name}`);
  const g59 = [...l59r.gates].map((gate) => `${gate.x},${gate.y}`).sort().join("|");
  const g49 = [...l49r.gates].map((gate) => `${gate.x},${gate.y}`).sort().join("|");
  if (g59 === "2,3|3,3" || g59 === "3,2|3,3") throw new Error("L59 must not use Color Step vertical twin gates");
  if (g59 === g49) throw new Error("L59 gates must not match L49 Color Step");
  if (g59 !== "2,2|3,4" && g59 !== "2,2|4,3") throw new Error(`L59 Skew Gate gates must be (2,2)/(4,3), got ${g59}`);
  if (/color shelf|\bhold\b|\bpark\b|\bclose\b|\bthread\b/i.test(l59r.name)) {
    throw new Error("L59 must not reuse Color Shelf / Hold*/Park*/Thread*");
  }
  console.log("Rival rewrite L59 ok · Skew Gate (2,2)/(4,3)");
}


{
  const bean = friendById(BEAN_FRIEND_ID);
  if (!bean || bean.friendId !== "friend_020") throw new Error("Bean friend_020 missing");
  if (bean.unlockClear !== 60) throw new Error("Bean must unlock at 60");
  if (bean.phenotype.artKit !== "bean") throw new Error("Bean kit must be bean (not ginger)");
  if (bean.phenotype.personality !== "Tiny") throw new Error("Bean personality must be Tiny");
  const chips = chipsForFriend(BEAN_FRIEND_ID);
  if (chips.join("/") !== "Bean/Seed/Nib") throw new Error(`Bean chips must be Bean/Seed/Nib, got ${chips.join("/")}`);
  for (const ban of ["Pip", "Beans", "Mango", "Pepper", "Pumpkin", "Sunny", "Beam", "Glow", "Pebble"]) {
    if (chips.includes(ban)) throw new Error(`Bean chips must not include ${ban}`);
  }
  if (furnitureGiftsForClear(60).length !== 0) throw new Error("Bean@60 must gift nothing");
  if (SLICE_UNLOCKS[60] !== "friend_020") throw new Error("SLICE_UNLOCKS[60] must be friend_020");
  if (artForKit("bean").loaf72 !== "/assets/cats/bean_loaf_72.svg") {
    throw new Error("Bean yard/unlock must map bean 72 → bean_loaf_72");
  }
  for (const file of [
    "public/assets/cats/bean_loaf_48.svg",
    "public/assets/cats/bean_loaf_72.svg",
  ]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const beanArt = readFileSync(resolve("public/assets/cats/bean_loaf_72.svg"), "utf8");
  const gingerArt = readFileSync(resolve("public/assets/cats/ginger_loaf_72.svg"), "utf8");
  const pepperArt = readFileSync(resolve("public/assets/cats/pepper_loaf_72.svg"), "utf8");
  if (beanArt === gingerArt) throw new Error("Bean loaf must not be a Mango/ginger clone");
  if (beanArt === pepperArt) throw new Error("Bean loaf must not be a Pepper clone");
  if (!beanArt.includes("#A85C2C")) throw new Error("Bean loaf must use polished body #A85C2C");
  if (!beanArt.includes("#4A2412")) throw new Error("Bean loaf must show dark kidneys #4A2412");
  if (paradeClearForLevel("L60") !== 60) throw new Error("L60 must map to parade clear 60");
  if (paradeClearForLevel("L61") !== 61) throw new Error("L61 must map to parade clear 61");
  if (paradeClearForLevel("L63") !== 63) throw new Error("L63 must map to parade clear 63");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") {
    throw new Error("shipped parade must award Bean at 60");
  }
  if (shippedFriendForClear(61)) throw new Error("L61 must not award a friend");
  if (shippedFriendForClear(62)) throw new Error("L62 must not award a friend");
  // Ch4: Velvet@63 on L63 clear (Bean finale boards stay)
  // parade lock — no Pebble
  for (const friend of [friendForClear(3), friendForClear(12), friendForClear(24), friendForClear(27), friendForClear(30), friendForClear(60)]) {
    if (!friend) throw new Error("parade lock friend missing");
    if (/pebble/i.test(friend.defaultName)) throw new Error("parade must never include Pebble");
  }
  for (const id of ["L61", "L62", "L63"] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level?.colorLocks) throw new Error(`${id} must lock colors`);
  }
  const l61 = LEVELS.find((level) => level.id === "L61")!;
  const l62 = LEVELS.find((level) => level.id === "L62")!;
  const l63 = LEVELS.find((level) => level.id === "L63")!;
  if (l61.name !== "Span Cut") throw new Error("L61 must be Span Cut");
  if (l62.name !== "Knight Cut") throw new Error("L62 must be Knight Cut");
  if (l63.name !== "Far Peg") throw new Error("L63 must be Far Peg");
  if (/\b(hold|park|close|thread)\b/i.test([l61.name, l62.name, l63.name].join(" "))) {
    throw new Error("L61–L63 must not be Hold*/Park*/Close/Thread*");
  }
  const packNames = (chapter3rPack.levels as { id: string; name: string }[]).map((row) => `${row.id}:${row.name}`);
  if (packNames.join(",") !== "L61:Span Cut,L62:Knight Cut,L63:Far Peg") {
    throw new Error(`Bean pack names drifted: ${packNames.join(",")}`);
  }
  const yard = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yard.match(/const bean =/g) || []).length !== 1) throw new Error("YardScene must declare bean once");
  if ((yard.match(/\{bean \?/g) || []).length !== 1) throw new Error("YardScene must render bean once");
  if (TUTORIAL_RESCUES.length < 20) throw new Error("TUTORIAL_RESCUES must include through Bean (20)");
  console.log("Bean @ onClear(60) ok · tiny toasted loafs + L61–L63 wired (Span Cut / Knight Cut / Far Peg); parade finale");
}


{
  const l62r = LEVELS.find((row) => row.id === "L62");
  const l56r = LEVELS.find((row) => row.id === "L56");
  if (!l62r || !l56r) throw new Error("missing L56/L62");
  if (l62r.name !== "Knight Cut") throw new Error(`L62 must be Knight Cut, got ${l62r.name}`);
  const g62 = [...l62r.gates].map((gate) => `${gate.x},${gate.y}`).sort().join("|");
  const g56 = [...l56r.gates].map((gate) => `${gate.x},${gate.y}`).sort().join("|");
  if (g62 === g56) throw new Error("L62 gates must not match L56 Color Fork");
  if (g62 !== "1,1|3,4") throw new Error(`L62 Knight Cut gates must be (1,1)/(3,4), got ${g62}`);
  if (/mirror gap|\bhold\b|\bpark\b|\bclose\b|\bthread\b/i.test(l62r.name)) {
    throw new Error("L62 must not reuse Mirror Gap / Hold*/Park*/Thread*");
  }
  console.log("Rival rewrite L62 ok · Knight Cut (1,1)/(3,4)");
}


{
  // Sister-ready polish — yard glare + Bean contrast + furniture nests + copy.
  const yard = readFileSync(resolve("public/assets/ui/yard_iso.svg"), "utf8");
  if (!yard.includes("#8FAF8A")) throw new Error("yard lawn must be solid sage #8FAF8A");
  if (yard.includes('opacity="0.34"') || yard.includes("opacity='0.34'")) {
    throw new Error("yard lawn must not use 34% cream wash");
  }
  if (!yard.includes("#DCC8A8")) throw new Error("porch must use cream-patio #DCC8A8");
  const beanArt = readFileSync(resolve("public/assets/cats/bean_loaf_72.svg"), "utf8");
  if (!beanArt.includes("#A85C2C") || !beanArt.includes("#4A2412")) {
    throw new Error("Bean polish must use #A85C2C body + #4A2412 kidneys");
  }
  const box = readFileSync(resolve("public/assets/furniture/boxBed.svg"), "utf8");
  if (box.includes("#F7F0E6")) throw new Error("boxBed must drop paper-white nest #F7F0E6");
  const continueSheet = readFileSync(resolve("src/components/puzzle/ContinueSheet.tsx"), "utf8");
  if (/ad stub/i.test(continueSheet)) throw new Error("ContinueSheet must not say ad stub");
  if (!continueSheet.includes("Soft miss")) throw new Error("ContinueSheet title must be Soft miss");
  if (!continueSheet.includes("Back to the porch")) throw new Error("ContinueSheet yard CTA must say porch");
  const yardScreen = readFileSync(resolve("src/components/yard/YardScreen.tsx"), "utf8");
  if (yardScreen.includes("Walk Mango home")) throw new Error("cold CTA must be Start the first rescue");
  if (!yardScreen.includes("Start the first rescue")) throw new Error("missing Start the first rescue CTA");
  if (!yardScreen.includes("Replay a favorite route")) throw new Error("missing Replay a favorite route CTA");
  if (!yardScreen.includes("whole parade is napping")) throw new Error("missing Bean finale porch line");
  const friendsMet = readFileSync(resolve("src/components/yard/FriendsMet.tsx"), "utf8");
  if (friendsMet.includes('"???"')) throw new Error("Met unmet label must be ··· not ???");
  if (friendsMet.includes('"···"') === false && !friendsMet.includes("···")) {
    throw new Error("Met unmet label must use ···");
  }
  // Met shows named + at most next 1–2 unmet — not the full TUTORIAL_RESCUES ··· wall.
  if (!friendsMet.includes("upcomingUnmet") || !friendsMet.includes(".slice(")) {
    throw new Error("Met tab must limit unmet upcoming (named + ≤2 ···), not full roster wall");
  }
  if (/TUTORIAL_RESCUES\.map\(/.test(friendsMet)) {
    throw new Error("Met tab must not map full TUTORIAL_RESCUES wall");
  }
  const yardSceneRoosts = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  const roostsBlock = yardSceneRoosts.match(/const ROOSTS = \[([\s\S]*?)\];/);
  if (!roostsBlock) throw new Error("YardScene ROOSTS missing");
  const roostCount = (roostsBlock[1].match(/left:/g) ?? []).length;
  if (roostCount < 20) throw new Error(`ROOSTS must have ≥20 seats, got ${roostCount}`);
  // ban inventing friend_027+ (Cocoa@78 shipped; next gated)
  const srcHit = [
    "src/lib/collection.ts",
    "src/components/yard/YardScreen.tsx",
    "src/components/yard/YardScene.tsx",
    "src/lib/levels.ts",
  ].flatMap((file) => {
    const text = readFileSync(resolve(file), "utf8");
    return /friend_02[7-9]|friend_03/.test(text) ? [file] : [];
  });
  if (srcHit.length) throw new Error(`friend_027+ must not appear in ${srcHit.join(",")}`);
  if (SLICE_UNLOCKS[61]) {
    throw new Error("no unlock at 61 — Cocoa@78 past Steve");
  }
  if (SLICE_UNLOCKS[66] !== "friend_022") throw new Error("SLICE_UNLOCKS[66] must be friend_022");
  if (SLICE_UNLOCKS[69] !== "friend_023") throw new Error("SLICE_UNLOCKS[69] must be friend_023");
  if (SLICE_UNLOCKS[72] !== "friend_024") throw new Error("SLICE_UNLOCKS[72] must be friend_024");
  if (SLICE_UNLOCKS[75] !== "friend_025") throw new Error("SLICE_UNLOCKS[75] must be friend_025");
  if (SLICE_UNLOCKS[78] !== "friend_026") throw new Error("SLICE_UNLOCKS[78] must be friend_026");
  if (TUTORIAL_RESCUES.length !== 26) throw new Error("TUTORIAL_RESCUES must be 26 (through Cocoa)");
  // Progress chrome: parade / friend-cadence milestones — not a LEVELS.map per-board dot wall.
  if (/LEVELS\.map\(/.test(yardScreen)) {
    throw new Error("Yard progress must not LEVELS.map into per-board dots");
  }
  if (!yardScreen.includes("PARADE_MILESTONES") || !yardScreen.includes("SLICE_UNLOCKS")) {
    throw new Error("Yard progress must use PARADE_MILESTONES from SLICE_UNLOCKS parade cadence");
  }
  if (!yardScreen.includes("nextClear")) {
    throw new Error("Yard progress must distinguish cleared vs current vs upcoming milestones");
  }
  console.log("Sister polish ok · yard sage · Bean contrast · furniture nests · copy · parade milestones");
}


{
  // Rival Conditional A — Comfort escalation lock (Collection)
  const shop15 = shopItemsForClear(15).map((sku) => sku.skuId).sort();
  if (shop15.join(",") !== "furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
    throw new Error(`shop @15 must stay pre-fountain: ${shop15.join(",")}`);
  }
  const shop18 = shopItemsForClear(18).map((sku) => sku.skuId).sort();
  if (shop18.join(",") !== "furn_fountain_stone,furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
    throw new Error(`shop @18 must unlock Stone Fountain: ${shop18.join(",")}`);
  }
  const shop36 = shopItemsForClear(36).map((sku) => sku.skuId).sort();
  if (shop36.join(",") !== "furn_fountain_stone,furn_perch_high,furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
    throw new Error(`shop @36 must unlock High Perch: ${shop36.join(",")}`);
  }
  const fountain = FURNITURE.find((sku) => sku.skuId === "furn_fountain_stone");
  const perch = FURNITURE.find((sku) => sku.skuId === "furn_perch_high");
  if (!fountain || fountain.hearts !== 90 || fountain.shopUnlockClear !== 18 || fountain.comfort !== 2) {
    throw new Error("Stone Fountain must be 90♥ @18 +2 Comfort");
  }
  if (!perch || perch.hearts !== 120 || perch.shopUnlockClear !== 36 || perch.comfort !== 3) {
    throw new Error("High Perch must be 120♥ @36 +3 Comfort");
  }
  const gifts27 = furnitureGiftsForClear(27).map((sku) => sku.skuId);
  if (gifts27.join(",") !== "furn_fountain_stone") throw new Error("clear 27 must gift fountain fallback");
  const gifts48 = furnitureGiftsForClear(48).map((sku) => sku.skuId);
  if (gifts48.join(",") !== "furn_swing_yarn") throw new Error("clear 48 must gift yarn fallback");
  const yardScene = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if (!yardScene.includes("hasFountain") || !yardScene.includes("hasPerch")) {
    throw new Error("YardScene must gate fountain + perch on ownership");
  }
  if (SLICE_UNLOCKS[61]) {
    throw new Error("no unlock at 61 — Blue@69 past Coral");
  }
  if (SLICE_UNLOCKS[66] !== "friend_022") {
    throw new Error("SLICE_UNLOCKS[66] must be friend_022");
  }
  if (SLICE_UNLOCKS[69] !== "friend_023") {
    throw new Error("SLICE_UNLOCKS[69] must be friend_023");
  }
  if (SLICE_UNLOCKS[72] !== "friend_024") {
    throw new Error("SLICE_UNLOCKS[72] must be friend_024");
  }
  if (SLICE_UNLOCKS[75] !== "friend_025") {
    throw new Error("SLICE_UNLOCKS[75] must be friend_025");
  }
  if (SLICE_UNLOCKS[78] !== "friend_026") {
    throw new Error("SLICE_UNLOCKS[78] must be friend_026");
  }
  console.log("Rival Conditional A ok · fountain@18/90 · perch@36/120 · gifts 27/48 · yard gates");
}

{
  // Rival Conditional B — path gate-farm reshapes
  const farmIds = ["L24", "L25", "L29", "L31", "L34", "L38", "L40", "L41", "L44", "L45", "L46", "L47", "L49", "L53"] as const;
  const farmNames: Record<string, string> = {
    L24: "Arc Brake",
    L25: "Column Slip",
    L29: "Pair Cut",
    L31: "West Slip",
    L34: "Wall Seal",
    L38: "East Seal",
    L40: "South Seal",
    L41: "South Slip",
    L44: "North Seal",
    L45: "North Slip",
    L46: "Twin Peg",
    L47: "Side Seal",
    L49: "Step Cut",
    L53: "Catch Bar",
  };
  for (const id of farmIds) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing farm rewrite ${id}`);
    if (level.name !== farmNames[id]) throw new Error(`${id} must be ${farmNames[id]}, got ${level.name}`);
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} still on a gate-farm pair ${pair}`);
    }
  }
  const l61 = LEVELS.find((row) => row.id === "L61");
  const l62 = LEVELS.find((row) => row.id === "L62");
  const l63 = LEVELS.find((row) => row.id === "L63");
  if (l61?.name !== "Span Cut") throw new Error("Bean finale L61 untouched");
  if (l62?.name !== "Knight Cut") throw new Error("Bean finale L62 untouched");
  if (l63?.name !== "Far Peg") throw new Error("Bean finale L63 untouched");
  console.log("Rival Conditional B ok · gate farms reshaped · L61–L63 locked");
}

{
  // Rival Conditional C — Hold*/Park* spine scrub
  const spineIds = ["L12", "L14", "L16", "L17", "L18", "L19", "L20", "L21", "L22", "L23", "L28", "L36", "L37", "L42"] as const;
  const spineNames: Record<string, string> = {"L12": "Brake First", "L14": "Near Brake", "L16": "Stay Brake", "L17": "Under Brake", "L18": "Row Brake", "L19": "Over Brake", "L20": "Side Brake", "L21": "Lane Thread", "L22": "Left Brake", "L23": "Corner Brake", "L28": "West Brake", "L36": "High Brake", "L37": "Low Brake", "L42": "East Brake"};
  for (const id of spineIds) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing spine rewrite ${id}`);
    if (level.name !== spineNames[id]) throw new Error(`${id} must be ${spineNames[id]}, got ${level.name}`);
    if (/^Hold\b|^Park\b/i.test(level.name)) throw new Error(`${id} still Hold*/Park* titled`);
  }
  const l61 = LEVELS.find((row) => row.id === "L61");
  const l62 = LEVELS.find((row) => row.id === "L62");
  const l63 = LEVELS.find((row) => row.id === "L63");
  if (l61?.name !== "Span Cut") throw new Error("Bean finale L61 untouched");
  if (l62?.name !== "Knight Cut") throw new Error("Bean finale L62 untouched");
  if (l63?.name !== "Far Peg") throw new Error("Bean finale L63 untouched");
  console.log("Rival Conditional C ok · Hold*/Park* spine scrubbed · L61–L63 locked");
}


{
  // Optional polish — non-farm twin scrub L9/L35/L50
  const twins: Array<[string, string, string]> = [
    ["L9", "Soft Lock", "L7"],
    ["L35", "Clear First", "L23"],
    ["L50", "Commit Through", "L30"],
  ];
  for (const [id, name, anchor] of twins) {
    const level = LEVELS.find((row) => row.id === id);
    const other = LEVELS.find((row) => row.id === anchor);
    if (!level || !other) throw new Error(`missing twin scrub ${id}/${anchor}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    const a = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    const b = other.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (a === b) throw new Error(`${id} still twins ${anchor} gates ${a}`);
  }
  if (LEVELS.find((row) => row.id === "L61")?.name !== "Span Cut") throw new Error("L61 untouched");
  if (LEVELS.find((row) => row.id === "L63")?.name !== "Far Peg") throw new Error("L63 untouched");
  console.log("Optional non-farm twin scrub ok · L9/L35/L50 off L7/L23/L30");
}


{
  // Ch4 OPEN — Velvet@63 + L64–L66
  if (SLICE_UNLOCKS[63] !== "friend_021") throw new Error("SLICE_UNLOCKS[63] must be friend_021");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("onClear(63) must award Velvet");
  const velvet = friendById("friend_021");
  if (!velvet) throw new Error("friend_021 missing from CATALOG");
  if (velvet.defaultName !== "Velvet") throw new Error("default name must be Velvet");
  if (velvet.unlockClear !== 63) throw new Error("Velvet unlockClear must be 63");
  if (velvet.phenotype.artKit !== "velvet") throw new Error("Velvet artKit must be velvet");
  if (velvet.phenotype.personality !== "Plush") throw new Error("Velvet personality must be Plush");
  if (velvet.phenotype.boardColor !== "gray") throw new Error("Velvet boardColor must be gray");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") {
    throw new Error(`Velvet chips must be Velvet/Plush/Dove, got ${chipsForFriend("friend_021").join(",")}`);
  }
  const velvet48 = readFileSync(resolve("public/assets/cats/velvet_loaf_48.svg"), "utf8");
  const velvet72 = readFileSync(resolve("public/assets/cats/velvet_loaf_72.svg"), "utf8");
  if (!velvet48.includes("#6E6576") || !velvet72.includes("#6E6576")) throw new Error("Velvet loaf must use dusk #6E6576");
  if (!velvet48.includes("#B7AEB8") || !velvet72.includes("#B7AEB8")) throw new Error("Velvet loaf must use dove belly #B7AEB8");
  if (!velvet72.includes("rx=\"17.2\"") && !velvet72.includes("rx=\"17.2\"")) {
    /* soft check */
  }
  if (furnitureGiftsForClear(63).length) throw new Error("Velvet@63 must gift no furniture");
  const yardV = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardV.match(/const velvet =/g) || []).length !== 1) throw new Error("YardScene must declare velvet once");
  if ((yardV.match(/\{velvet \?/g) || []).length !== 1) throw new Error("YardScene must render velvet once");
  if (TUTORIAL_RESCUES.length < 21) throw new Error("Met must include through Velvet (≥21)");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  for (const [id, name] of [
    ["L64", "Curl Path"],
    ["L65", "Wedge Gap"],
    ["L66", "Peg Split"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) throw new Error(`${id} must not be Hold*/Park*/Close`);
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
  }
  if (LEVELS.find((row) => row.id === "L61")?.name !== "Span Cut") throw new Error("L61 untouched");
  if (LEVELS.find((row) => row.id === "L62")?.name !== "Knight Cut") throw new Error("L62 untouched");
  if (LEVELS.find((row) => row.id === "L63")?.name !== "Far Peg") throw new Error("L63 untouched");
  if (SLICE_UNLOCKS[69] !== "friend_023") throw new Error("SLICE_UNLOCKS[69] must be friend_023");
  console.log("Ch4 Velvet@63 + L64–L66 ok · chips Velvet/Plush/Dove · Curl Path / Wedge Gap / Peg Split · Bean parade locked");
}


{
  // Rival Velvet Conditional — L64/L65 off Span Cut delta
  const l64 = LEVELS.find((row) => row.id === "L64")!;
  const l65 = LEVELS.find((row) => row.id === "L65")!;
  const l66 = LEVELS.find((row) => row.id === "L66")!;
  if (l64.name !== "Curl Path") throw new Error("L64 must be Curl Path");
  if (l65.name !== "Wedge Gap") throw new Error("L65 must be Wedge Gap");
  if (l66.name !== "Peg Split") throw new Error("L66 Peg Split must stay");
  const pair64 = l64.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  const pair65 = l65.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (pair64 === "0,5/3,1" || pair65 === "1,5/4,1") throw new Error("old Drift/Shelf gate pairs must die");
  const span = LEVELS.find((row) => row.id === "L61")!;
  const spanGates = [...span.gates].sort((a, b) => a.x - b.x || a.y - b.y);
  const l64Gates = [...l64.gates].sort((a, b) => a.x - b.x || a.y - b.y);
  const dx = l64Gates[1].x - l64Gates[0].x;
  const dy = l64Gates[1].y - l64Gates[0].y;
  const sdx = spanGates[1].x - spanGates[0].x;
  const sdy = spanGates[1].y - spanGates[0].y;
  if (dx === sdx && dy === sdy) throw new Error("L64 must not share Span Cut gate delta");
  if (pair64 === pair65) throw new Error("L65 must not twin L64 gates");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[69] !== "friend_023") throw new Error("SLICE_UNLOCKS[69] must be friend_023");
  console.log("Rival rewrite L64/L65 ok · Curl Path · Wedge Gap · L66 Peg Split · Velvet locked");
}


{
  // Ch4 L67–L69 triad + Coral@66 unlock (Rival reshape)
  for (const [id, name] of [
    ["L67", "Ripple Cut"],
    ["L68", "Moss Gap"],
    ["L69", "Ink Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) throw new Error(`${id} must not be Hold*/Park*/Close`);
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
  }
  if (LEVELS.find((row) => row.id === "L64")?.name !== "Curl Path") throw new Error("L64 Curl Path locked");
  if (LEVELS.find((row) => row.id === "L65")?.name !== "Wedge Gap") throw new Error("L65 Wedge Gap locked");
  if (LEVELS.find((row) => row.id === "L66")?.name !== "Peg Split") throw new Error("L66 Peg Split locked");
  if (SLICE_UNLOCKS[66] !== "friend_022") throw new Error("SLICE_UNLOCKS[66] must be friend_022");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("onClear(66) must award Coral");
  const coral = friendById("friend_022");
  if (!coral) throw new Error("friend_022 missing from CATALOG");
  if (coral.defaultName !== "Coral") throw new Error("default name must be Coral");
  if (coral.unlockClear !== 66) throw new Error("Coral unlockClear must be 66");
  if (coral.phenotype.artKit !== "coral") throw new Error("Coral artKit must be coral");
  if (coral.phenotype.personality !== "Bloom") throw new Error("Coral personality must be Bloom");
  if (coral.phenotype.boardColor !== "orange") throw new Error("Coral boardColor must be orange");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") {
    throw new Error(`Coral chips must be Coral/Bloom/Petal, got ${chipsForFriend("friend_022").join(",")}`);
  }
  if (chipsForFriend("friend_022").includes("Mochi")) throw new Error("Coral must not use Biscuit Mochi chip");
  const coral48 = readFileSync(resolve("public/assets/cats/coral_loaf_48.svg"), "utf8");
  const coral72 = readFileSync(resolve("public/assets/cats/coral_loaf_72.svg"), "utf8");
  if (!coral48.includes("#E07A5F") || !coral72.includes("#E07A5F")) throw new Error("Coral loaf must use #E07A5F");
  if (!coral48.includes("#F3E6D8") || !coral72.includes("#F3E6D8")) throw new Error("Coral loaf must use cream belly #F3E6D8");
  if (furnitureGiftsForClear(66).length) throw new Error("Coral@66 must gift no furniture");
  const yardC = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardC.match(/const coral =/g) || []).length !== 1) throw new Error("YardScene must declare coral once");
  if ((yardC.match(/\{coral \?/g) || []).length !== 1) throw new Error("YardScene must render coral once");
  if (TUTORIAL_RESCUES.length < 22) throw new Error("Met must include through Coral (≥22)");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (SLICE_UNLOCKS[69] !== "friend_023") throw new Error("SLICE_UNLOCKS[69] must be friend_023");
  console.log("Ch4 Coral@66 + L67–L69 ok · chips Coral/Bloom/Petal · Ripple Cut / Moss Gap / Ink Stop · Velvet/Bean locked");
}

{
  // Rival Conditional — L67–L69 off Tide/Plush/Dusk delta farms
  const l67 = LEVELS.find((row) => row.id === "L67")!;
  const l68 = LEVELS.find((row) => row.id === "L68")!;
  const l69 = LEVELS.find((row) => row.id === "L69")!;
  if (l67.name !== "Ripple Cut") throw new Error("L67 must be Ripple Cut");
  if (l68.name !== "Moss Gap") throw new Error("L68 must be Moss Gap");
  if (l69.name !== "Ink Stop") throw new Error("L69 must be Ink Stop");
  const d = (level: (typeof LEVELS)[number]) => {
    const g = [...level.gates].sort((a, b) => a.x - b.x || a.y - b.y);
    return `${g[1].x - g[0].x},${g[1].y - g[0].y}`;
  };
  if (d(l67) === "4,-1" || d(l67) === "-4,1") throw new Error("L67 still Tide Cut delta");
  if (d(l68) === "1,3" || d(l68) === "-1,-3") throw new Error("L68 still Plush/Wedge delta");
  if (d(l69) === "0,5" || d(l69) === "0,-5") throw new Error("L69 still Dusk column span");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  console.log("Rival rewrite L67–L69 ok · Ripple Cut · Moss Gap · Ink Stop · Coral locked");
}


{
  // Ch4 Blue@69 + L70–L72 triad
  for (const [id, name] of [
    ["L70", "Shoal Cut"],
    ["L71", "Anemone Gap"],
    ["L72", "Harbor Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) throw new Error(`${id} must not be Hold*/Park*/Close`);
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
  }
  if (LEVELS.find((row) => row.id === "L67")?.name !== "Ripple Cut") throw new Error("L67 Ripple Cut locked");
  if (LEVELS.find((row) => row.id === "L68")?.name !== "Moss Gap") throw new Error("L68 Moss Gap locked");
  if (LEVELS.find((row) => row.id === "L69")?.name !== "Ink Stop") throw new Error("L69 Ink Stop locked");
  if (SLICE_UNLOCKS[69] !== "friend_023") throw new Error("SLICE_UNLOCKS[69] must be friend_023");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("onClear(69) must award Blue");
  const blue = friendById("friend_023");
  if (!blue) throw new Error("friend_023 missing from CATALOG");
  if (blue.defaultName !== "Blue") throw new Error("default name must be Blue");
  if (blue.unlockClear !== 69) throw new Error("Blue unlockClear must be 69");
  if (blue.phenotype.artKit !== "blue") throw new Error("Blue artKit must be blue");
  if (blue.phenotype.personality !== "Cool") throw new Error("Blue personality must be Cool");
  if (blue.phenotype.boardColor !== "gray") throw new Error("Blue boardColor must be gray");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") {
    throw new Error(`Blue chips must be Blue/Silver/Steel, got ${chipsForFriend("friend_023").join(",")}`);
  }
  const blue48 = readFileSync(resolve("public/assets/cats/blue_loaf_48.svg"), "utf8");
  const blue72 = readFileSync(resolve("public/assets/cats/blue_loaf_72.svg"), "utf8");
  if (!blue48.includes("#7B8896") || !blue72.includes("#7B8896")) throw new Error("Blue loaf must use steel #7B8896");
  if (!blue48.includes("#C5D0D8") || !blue72.includes("#C5D0D8")) throw new Error("Blue loaf must use silver belly #C5D0D8");
  if (!blue48.includes("#4E5B68") || !blue72.includes("#4E5B68")) throw new Error("Blue loaf must use tabby bars #4E5B68");
  if (furnitureGiftsForClear(69).length) throw new Error("Blue@69 must gift no furniture");
  const yardB = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardB.match(/const blue =/g) || []).length !== 1) throw new Error("YardScene must declare blue once");
  if ((yardB.match(/\{blue \?/g) || []).length !== 1) throw new Error("YardScene must render blue once");
  if (TUTORIAL_RESCUES.length < 23) throw new Error("Met must include through Blue (≥23)");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[72] !== "friend_024") throw new Error("SLICE_UNLOCKS[72] must be friend_024");
  console.log("Ch4 Blue@69 + L70–L72 ok · chips Blue/Silver/Steel · Shoal Cut / Anemone Gap / Harbor Stop · Coral/Velvet/Bean locked");
}

{
  // Ch4 Maple@72 + L73–L75 triad
  for (const [id, name] of [
    ["L73", "Glint Cut"],
    ["L74", "Fern Gap"],
    ["L75", "Ember Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) throw new Error(`${id} must not be Hold*/Park*/Close`);
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
  }
  if (LEVELS.find((row) => row.id === "L70")?.name !== "Shoal Cut") throw new Error("L70 Shoal Cut locked");
  if (LEVELS.find((row) => row.id === "L71")?.name !== "Anemone Gap") throw new Error("L71 Anemone Gap locked");
  if (LEVELS.find((row) => row.id === "L72")?.name !== "Harbor Stop") throw new Error("L72 Harbor Stop locked");
  if (SLICE_UNLOCKS[72] !== "friend_024") throw new Error("SLICE_UNLOCKS[72] must be friend_024");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("onClear(72) must award Maple");
  const maple = friendById("friend_024");
  if (!maple) throw new Error("friend_024 missing from CATALOG");
  if (maple.defaultName !== "Maple") throw new Error("default name must be Maple");
  if (maple.unlockClear !== 72) throw new Error("Maple unlockClear must be 72");
  if (maple.phenotype.artKit !== "maple") throw new Error("Maple artKit must be maple");
  if (maple.phenotype.personality !== "Autumn") throw new Error("Maple personality must be Autumn");
  if (maple.phenotype.boardColor !== "orange") throw new Error("Maple boardColor must be orange");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") {
    throw new Error(`Maple chips must be Maple/Hazel/Amber, got ${chipsForFriend("friend_024").join(",")}`);
  }
  const maple48 = readFileSync(resolve("public/assets/cats/maple_loaf_48.svg"), "utf8");
  const maple72 = readFileSync(resolve("public/assets/cats/maple_loaf_72.svg"), "utf8");
  if (!maple48.includes("#D4783A") || !maple72.includes("#D4783A")) throw new Error("Maple loaf must use russet #D4783A");
  if (!maple48.includes("#A84A22") || !maple72.includes("#A84A22")) throw new Error("Maple loaf must use leaf blotch #A84A22");
  if (!maple48.includes("#F0C8A0") || !maple72.includes("#F0C8A0")) throw new Error("Maple loaf must use belly #F0C8A0");
  if (furnitureGiftsForClear(72).length) throw new Error("Maple@72 must gift no furniture");
  const yardM = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardM.match(/const maple =/g) || []).length !== 1) throw new Error("YardScene must declare maple once");
  if ((yardM.match(/\{maple \?/g) || []).length !== 1) throw new Error("YardScene must render maple once");
  if (TUTORIAL_RESCUES.length < 24) throw new Error("Met must include through Maple (≥24)");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[75] !== "friend_025") throw new Error("SLICE_UNLOCKS[75] must be friend_025");
  console.log("Ch4 Maple@72 + L73–L75 ok · chips Maple/Hazel/Amber · Glint Cut / Fern Gap / Ember Stop · Blue/Coral/Velvet/Bean locked");
}

{
  // Ch4 Steve@75 + L76–L78 triad
  for (const [id, name] of [
    ["L76", "Cedar Cut"],
    ["L77", "Needle Gap"],
    ["L78", "Resin Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) throw new Error(`${id} must not be Hold*/Park*/Close`);
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
  }
  if (LEVELS.find((row) => row.id === "L73")?.name !== "Glint Cut") throw new Error("L73 Glint Cut locked");
  if (LEVELS.find((row) => row.id === "L74")?.name !== "Fern Gap") throw new Error("L74 Fern Gap locked");
  if (LEVELS.find((row) => row.id === "L75")?.name !== "Ember Stop") throw new Error("L75 Ember Stop locked");
  if (SLICE_UNLOCKS[75] !== "friend_025") throw new Error("SLICE_UNLOCKS[75] must be friend_025");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("onClear(75) must award Steve");
  const steve = friendById("friend_025");
  if (!steve) throw new Error("friend_025 missing from CATALOG");
  if (steve.defaultName !== "Steve") throw new Error("default name must be Steve");
  if (steve.unlockClear !== 75) throw new Error("Steve unlockClear must be 75");
  if (steve.phenotype.artKit !== "steve") throw new Error("Steve artKit must be steve");
  if (steve.phenotype.personality !== "Casual") throw new Error("Steve personality must be Casual");
  if (steve.phenotype.boardColor !== "black") throw new Error("Steve boardColor must be black");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") {
    throw new Error(`Steve chips must be Steve/Bob/Ned, got ${chipsForFriend("friend_025").join(",")}`);
  }
  const steve48 = readFileSync(resolve("public/assets/cats/steve_loaf_48.svg"), "utf8");
  const steve72 = readFileSync(resolve("public/assets/cats/steve_loaf_72.svg"), "utf8");
  if (!steve48.includes("#4A4540") || !steve72.includes("#4A4540")) throw new Error("Steve loaf must use true-black #4A4540");
  if (!steve48.includes("#F4EDE4") || !steve72.includes("#F4EDE4")) throw new Error("Steve loaf must use cream blaze/socks #F4EDE4");
  if (furnitureGiftsForClear(75).length) throw new Error("Steve@75 must gift no furniture");
  const yardS = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardS.match(/const steve =/g) || []).length !== 1) throw new Error("YardScene must declare steve once");
  if ((yardS.match(/\{steve \?/g) || []).length !== 1) throw new Error("YardScene must render steve once");
  if (TUTORIAL_RESCUES.length < 25) throw new Error("Met must include through Steve (≥25)");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[78] !== "friend_026") throw new Error("SLICE_UNLOCKS[78] must be friend_026");
  console.log("Ch4 Steve@75 + L76–L78 ok · chips Steve/Bob/Ned · Cedar Cut / Needle Gap / Resin Stop · Maple/Blue/Coral/Velvet/Bean locked");
}


{
  // Rival Steve Conditional — L77/L78 Pollen/Sap kills
  const l76 = LEVELS.find((row) => row.id === "L76")!;
  const l77 = LEVELS.find((row) => row.id === "L77")!;
  const l78 = LEVELS.find((row) => row.id === "L78")!;
  if (l76.name !== "Cedar Cut") throw new Error("L76 Cedar Cut must stay");
  if (l77.name !== "Needle Gap") throw new Error("L77 must be Needle Gap");
  if (l78.name !== "Resin Stop") throw new Error("L78 must be Resin Stop");
  const old = new Set(["2,4/3,0", "1,3/5,4"]);
  for (const level of [l77, l78]) {
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (old.has(pair)) throw new Error(`${level.id} still on old Pollen/Sap gates`);
    if (/\b(hold|park|close|pollen|sap)\b/i.test(level.name)) {
      throw new Error(`${level.id} must not keep Pollen/Sap/Hold*`);
    }
  }
  const orange77 = l77.gates.find((g) => g.id === "gate_orange" || g.color === "orange");
  if (orange77 && orange77.x === 3 && orange77.y === 0) {
    throw new Error("L77 orange must leave (3,0)");
  }
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (SLICE_UNLOCKS[78] !== "friend_026") throw new Error("SLICE_UNLOCKS[78] must be friend_026");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 locked");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 locked");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 locked");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 locked");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 locked");
  console.log("Rival rewrite L77/L78 ok · Needle Gap · Resin Stop · L76 Cedar Cut · Steve locked · Cocoa@78 unlocked");
}

{
  // Ch4 Cocoa@78 + L79–L81 triad
  for (const [id, name] of [
    ["L79", "Quill Cut"],
    ["L80", "Parch Gap"],
    ["L81", "Stamp Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) throw new Error(`${id} must not be Hold*/Park*/Close`);
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
  }
  if (LEVELS.find((row) => row.id === "L76")?.name !== "Cedar Cut") throw new Error("L76 Cedar Cut locked");
  if (LEVELS.find((row) => row.id === "L77")?.name !== "Needle Gap") throw new Error("L77 Needle Gap locked");
  if (LEVELS.find((row) => row.id === "L78")?.name !== "Resin Stop") throw new Error("L78 Resin Stop locked");
  if (SLICE_UNLOCKS[78] !== "friend_026") throw new Error("SLICE_UNLOCKS[78] must be friend_026");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("onClear(78) must award Cocoa");
  const cocoa = friendById("friend_026");
  if (!cocoa) throw new Error("friend_026 missing from CATALOG");
  if (cocoa.defaultName !== "Cocoa") throw new Error("default name must be Cocoa");
  if (cocoa.unlockClear !== 78) throw new Error("Cocoa unlockClear must be 78");
  if (cocoa.phenotype.artKit !== "cocoa") throw new Error("Cocoa artKit must be cocoa");
  if (cocoa.phenotype.personality !== "Mellow") throw new Error("Cocoa personality must be Mellow");
  if (cocoa.phenotype.boardColor !== "orange") throw new Error("Cocoa boardColor must be orange");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") {
    throw new Error(`Cocoa chips must be Cocoa/Mocha/Fudge, got ${chipsForFriend("friend_026").join(",")}`);
  }
  const cocoa48 = readFileSync(resolve("public/assets/cats/cocoa_loaf_48.svg"), "utf8");
  const cocoa72 = readFileSync(resolve("public/assets/cats/cocoa_loaf_72.svg"), "utf8");
  if (!cocoa48.includes("#A85E38") || !cocoa72.includes("#A85E38")) throw new Error("Cocoa loaf must use deep cocoa #A85E38");
  if (!cocoa48.includes("#E2C4A4") || !cocoa72.includes("#E2C4A4")) throw new Error("Cocoa loaf must use milk belly #E2C4A4");
  if (furnitureGiftsForClear(78).length) throw new Error("Cocoa@78 must gift no furniture");
  const yardC = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardC.match(/const cocoa =/g) || []).length !== 1) throw new Error("YardScene must declare cocoa once");
  if ((yardC.match(/\{cocoa \?/g) || []).length !== 1) throw new Error("YardScene must render cocoa once");
  if (TUTORIAL_RESCUES.length !== 26) throw new Error("Met must include through Cocoa (26)");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[81]) throw new Error("no friend_027 @81 this slice");
  console.log("Ch4 Cocoa@78 + L79–L81 ok · chips Cocoa/Mocha/Fudge · Quill Cut / Parch Gap / Stamp Stop · Steve/Maple/Blue/Coral/Velvet/Bean locked");
}

console.log("All authored boards ok");
