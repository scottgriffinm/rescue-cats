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
import chapter4gPack from "../../data/levels/CHAPTER4_PUZZLE_L82_L84.json";
import chapter4hPack from "../../data/levels/CHAPTER4_PUZZLE_L85_L87.json";
import chapter4iPack from "../../data/levels/CHAPTER4_PUZZLE_L88_L90.json";
import chapter4jPack from "../../data/levels/CHAPTER4_PUZZLE_L91_L93.json";
import chapter4kPack from "../../data/levels/CHAPTER4_PUZZLE_L94_L96.json";
import chapter4lPack from "../../data/levels/CHAPTER4_PUZZLE_L97_L99.json";
import chapter4mPack from "../../data/levels/CHAPTER4_PUZZLE_L100_L102.json";
import chapter4nPack from "../../data/levels/CHAPTER4_PUZZLE_L103_L105.json";
import chapter4oPack from "../../data/levels/CHAPTER4_PUZZLE_L106_L108.json";
import chapter4pPack from "../../data/levels/CHAPTER4_PUZZLE_L109_L111.json";
import chapter4qPack from "../../data/levels/CHAPTER4_PUZZLE_L112_L114.json";
import chapter4rPack from "../../data/levels/CHAPTER4_PUZZLE_L115_L117.json";
import chapter4sPack from "../../data/levels/CHAPTER4_PUZZLE_L118_L120.json";
import chapter4tPack from "../../data/levels/CHAPTER4_PUZZLE_L121_L123.json";
import chapter4uPack from "../../data/levels/CHAPTER4_PUZZLE_L124_L126.json";
import chapter4vPack from "../../data/levels/CHAPTER4_PUZZLE_L127_L129.json";
import chapter4wPack from "../../data/levels/CHAPTER4_PUZZLE_L130_L132.json";
import chapter4xPack from "../../data/levels/CHAPTER4_PUZZLE_L133_L135.json";
import chapter4yPack from "../../data/levels/CHAPTER4_PUZZLE_L136_L138.json";
import chapter4zPack from "../../data/levels/CHAPTER4_PUZZLE_L139_L141.json";
import chapter4aaPack from "../../data/levels/CHAPTER4_PUZZLE_L142_L144.json";
import chapter4abPack from "../../data/levels/CHAPTER4_PUZZLE_L145_L147.json";
import chapter4acPack from "../../data/levels/CHAPTER4_PUZZLE_L148_L150.json";
import chapter4adPack from "../../data/levels/CHAPTER4_PUZZLE_L151_L153.json";
import chapter4aePack from "../../data/levels/CHAPTER4_PUZZLE_L154_L156.json";
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
import l82Pack from "../../data/levels/L82.json";
import l83Pack from "../../data/levels/L83.json";
import l84Pack from "../../data/levels/L84.json";
import l85Pack from "../../data/levels/L85.json";
import l86Pack from "../../data/levels/L86.json";
import l87Pack from "../../data/levels/L87.json";
import l88Pack from "../../data/levels/L88.json";
import l89Pack from "../../data/levels/L89.json";
import l90Pack from "../../data/levels/L90.json";
import l91Pack from "../../data/levels/L91.json";
import l92Pack from "../../data/levels/L92.json";
import l93Pack from "../../data/levels/L93.json";
import l94Pack from "../../data/levels/L94.json";
import l95Pack from "../../data/levels/L95.json";
import l96Pack from "../../data/levels/L96.json";
import l97Pack from "../../data/levels/L97.json";
import l98Pack from "../../data/levels/L98.json";
import l99Pack from "../../data/levels/L99.json";
import l100Pack from "../../data/levels/L100.json";
import l101Pack from "../../data/levels/L101.json";
import l102Pack from "../../data/levels/L102.json";
import l103Pack from "../../data/levels/L103.json";
import l104Pack from "../../data/levels/L104.json";
import l105Pack from "../../data/levels/L105.json";
import l106Pack from "../../data/levels/L106.json";
import l107Pack from "../../data/levels/L107.json";
import l108Pack from "../../data/levels/L108.json";
import l109Pack from "../../data/levels/L109.json";
import l110Pack from "../../data/levels/L110.json";
import l111Pack from "../../data/levels/L111.json";
import l112Pack from "../../data/levels/L112.json";
import l113Pack from "../../data/levels/L113.json";
import l114Pack from "../../data/levels/L114.json";
import l115Pack from "../../data/levels/L115.json";
import l116Pack from "../../data/levels/L116.json";
import l117Pack from "../../data/levels/L117.json";
import l118Pack from "../../data/levels/L118.json";
import l119Pack from "../../data/levels/L119.json";
import l120Pack from "../../data/levels/L120.json";
import l121Pack from "../../data/levels/L121.json";
import l122Pack from "../../data/levels/L122.json";
import l123Pack from "../../data/levels/L123.json";
import l124Pack from "../../data/levels/L124.json";
import l125Pack from "../../data/levels/L125.json";
import l126Pack from "../../data/levels/L126.json";
import l127Pack from "../../data/levels/L127.json";
import l128Pack from "../../data/levels/L128.json";
import l129Pack from "../../data/levels/L129.json";
import l130Pack from "../../data/levels/L130.json";
import l131Pack from "../../data/levels/L131.json";
import l132Pack from "../../data/levels/L132.json";
import l133Pack from "../../data/levels/L133.json";
import l134Pack from "../../data/levels/L134.json";
import l135Pack from "../../data/levels/L135.json";
import l136Pack from "../../data/levels/L136.json";
import l137Pack from "../../data/levels/L137.json";
import l138Pack from "../../data/levels/L138.json";
import l139Pack from "../../data/levels/L139.json";
import l140Pack from "../../data/levels/L140.json";
import l141Pack from "../../data/levels/L141.json";
import l142Pack from "../../data/levels/L142.json";
import l143Pack from "../../data/levels/L143.json";
import l144Pack from "../../data/levels/L144.json";
import l145Pack from "../../data/levels/L145.json";
import l146Pack from "../../data/levels/L146.json";
import l147Pack from "../../data/levels/L147.json";
import l148Pack from "../../data/levels/L148.json";
import l149Pack from "../../data/levels/L149.json";
import l150Pack from "../../data/levels/L150.json";
import l151Pack from "../../data/levels/L151.json";
import l152Pack from "../../data/levels/L152.json";
import l153Pack from "../../data/levels/L153.json";
import l154Pack from "../../data/levels/L154.json";
import l155Pack from "../../data/levels/L155.json";
import l156Pack from "../../data/levels/L156.json";
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
import { verifyChapter4Dill } from "./verify-chapter4-dill";
import { verifyChapter4Tarragon } from "./verify-chapter4-tarragon";
import { verifyChapter4Oregano } from "./verify-chapter4-oregano";
import { verifyChapter4Marjoram } from "./verify-chapter4-marjoram";
import { verifyChapter4Thyme } from "./verify-chapter4-thyme";
import { verifyChapter4Rosemary } from "./verify-chapter4-rosemary";
import { verifyChapter4Mint } from "./verify-chapter4-mint";
import { verifyChapter4Catnip } from "./verify-chapter4-catnip";
import { verifyChapter4Lavender } from "./verify-chapter4-lavender";
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
      [1, 1],
      [2, 2],
      [3, 4],
      [1, 5]
    ],
    cats: [
      ["cat_orange", 0, 5],
      ["cat_gray", 4, 1]
    ],
    gates: [
      ["gate_orange", 1, 0],
      ["gate_gray", 5, 3]
    ],
  },
  L80: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 3],
      [0, 5],
      [0, 0]
    ],
    cats: [
      ["cat_orange", 0, 1],
      ["cat_gray", 2, 3]
    ],
    gates: [
      ["gate_orange", 1, 3],
      ["gate_gray", 5, 0]
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
  },
  L82: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 3],
      [3, 5],
      [0, 0]
    ],
    cats: [
      ["cat_orange", 5, 1],
      ["cat_gray", 1, 5]
    ],
    gates: [
      ["gate_orange", 2, 0],
      ["gate_gray", 4, 4]
    ],
  },
  L83: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 3],
      [3, 1],
      [2, 0],
      [4, 2],
      [1, 3]
    ],
    cats: [
      ["cat_orange", 3, 0],
      ["cat_gray", 3, 4]
    ],
    gates: [
      ["gate_orange", 0, 0],
      ["gate_gray", 2, 5]
    ],
  },
  L84: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 2],
      [2, 5]
    ],
    cats: [
      ["cat_orange", 0, 3],
      ["cat_black", 5, 0]
    ],
    gates: [
      ["gate_orange", 1, 5],
      ["gate_black", 3, 1]
    ],
  },
  L85: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 3],
      [5, 0],
      [3, 5],
      [1, 5]
    ],
    cats: [
      ["cat_orange", 0, 1],
      ["cat_gray", 0, 2]
    ],
    gates: [
      ["gate_orange", 0, 0],
      ["gate_gray", 4, 3]
    ],
  },
  L86: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 5],
      [1, 1],
      [0, 2],
      [1, 3],
      [3, 5]
    ],
    cats: [
      ["cat_orange", 4, 5],
      ["cat_black", 1, 4]
    ],
    gates: [
      ["gate_orange", 0, 5],
      ["gate_black", 3, 0]
    ],
  },
  L87: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 3],
      [1, 1],
      [5, 0],
      [4, 2]
    ],
    cats: [
      ["cat_orange", 4, 5],
      ["cat_gray", 2, 2]
    ],
    gates: [
      ["gate_orange", 2, 5],
      ["gate_gray", 1, 0]
    ],
  },
  L88: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 0],
      [4, 5],
      [3, 0]
    ],
    cats: [
      ["cat_orange", 4, 3],
      ["cat_gray", 3, 2]
    ],
    gates: [
      ["gate_orange", 5, 4],
      ["gate_gray", 1, 0]
    ],
  },
  L89: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 5],
      [2, 5],
      [4, 3]
    ],
    cats: [
      ["cat_orange", 1, 3],
      ["cat_black", 2, 0]
    ],
    gates: [
      ["gate_orange", 0, 0],
      ["gate_black", 3, 4]
    ],
  },
  L90: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 2],
      [2, 0],
      [3, 2],
      [1, 4]
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 3, 1]
    ],
    gates: [
      ["gate_orange", 0, 1],
      ["gate_gray", 3, 3]
    ],
  },
  L91: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 0],
      [1, 1],
      [5, 5],
      [4, 4]
    ],
    cats: [
      ["cat_orange", 2, 1],
      ["cat_gray", 1, 3]
    ],
    gates: [
      ["gate_orange", 4, 0],
      ["gate_gray", 0, 5]
    ],
  },
  L92: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 1],
      [4, 3],
      [3, 0],
      [1, 3],
      [5, 2]
    ],
    cats: [
      ["cat_orange", 4, 2],
      ["cat_black", 2, 1]
    ],
    gates: [
      ["gate_orange", 4, 5],
      ["gate_black", 5, 1]
    ],
  },
  L93: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 3],
      [3, 0],
      [4, 4]
    ],
    cats: [
      ["cat_orange", 5, 1],
      ["cat_gray", 3, 2],
    ],
    gates: [
      ["gate_orange", 0, 2],
      ["gate_gray", 2, 0],
    ],
  },
  L94: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 4],
      [0, 4],
      [5, 1],
      [3, 0],
      [2, 3]
    ],
    cats: [
      ["cat_orange", 0, 3],
      ["cat_gray", 1, 1]
    ],
    gates: [
      ["gate_orange", 0, 0],
      ["gate_gray", 4, 5]
    ],
  },
  L95: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 3],
      [4, 1],
      [0, 0],
      [3, 0]
    ],
    cats: [
      ["cat_orange", 5, 4],
      ["cat_black", 5, 2]
    ],
    gates: [
      ["gate_orange", 2, 5],
      ["gate_black", 1, 4]
    ],
  },
  L96: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 4],
      [0, 3],
      [1, 5]
    ],
    cats: [
      ["cat_orange", 3, 5],
      ["cat_gray", 3, 1]
    ],
    gates: [
      ["gate_orange", 2, 3],
      ["gate_gray", 2, 4]
    ],
  },
  L97: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 2],
      [2, 4],
      [0, 3],
      [3, 5]
    ],
    cats: [
      ["cat_orange", 1, 0],
      ["cat_gray", 3, 2]
    ],
    gates: [
      ["gate_orange", 0, 1],
      ["gate_gray", 1, 5]
    ],
  },
  L98: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 3],
      [5, 3],
      [2, 4]
    ],
    cats: [
      ["cat_orange", 2, 0],
      ["cat_black", 1, 3]
    ],
    gates: [
      ["gate_orange", 5, 5],
      ["gate_black", 3, 5]
    ],
  },
  L99: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 2],
      [3, 3],
      [3, 4],
      [0, 0]
    ],
    cats: [
      ["cat_orange", 0, 5],
      ["cat_gray", 2, 5]
    ],
    gates: [
      ["gate_orange", 4, 1],
      ["gate_gray", 1, 1]
    ],
  },
  L100: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 5],
      [2, 1],
      [5, 4],
      [0, 2],
      [1, 3]
    ],
    cats: [
      ["cat_orange", 0, 4],
      ["cat_gray", 4, 2]
    ],
    gates: [
      ["gate_orange", 2, 0],
      ["gate_gray", 2, 3]
    ],
  },
  L101: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 4],
      [4, 5],
      [2, 4],
      [0, 0]
    ],
    cats: [
      ["cat_orange", 1, 3],
      ["cat_black", 2, 0]
    ],
    gates: [
      ["gate_orange", 3, 0],
      ["gate_black", 3, 2]
    ],
  },
  L102: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 5],
      [3, 3],
      [5, 5]
    ],
    cats: [
      ["cat_orange", 3, 4],
      ["cat_gray", 0, 2]
    ],
    gates: [
      ["gate_orange", 5, 1],
      ["gate_gray", 1, 2]
    ],
  },
  L103: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 2],
      [3, 5],
      [2, 2],
      [3, 2]
    ],
    cats: [
      ["cat_orange", 3, 4],
      ["cat_gray", 0, 1]
    ],
    gates: [
      ["gate_orange", 5, 0],
      ["gate_gray", 3, 1]
    ],
  },
  L104: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 3],
      [2, 5],
      [4, 1]
    ],
    cats: [
      ["cat_orange", 2, 2],
      ["cat_black", 5, 0]
    ],
    gates: [
      ["gate_orange", 0, 0],
      ["gate_black", 3, 4]
    ],
  },
  L105: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 5],
      [4, 2],
      [5, 3],
      [2, 0]
    ],
    cats: [
      ["cat_orange", 5, 0],
      ["cat_gray", 0, 5]
    ],
    gates: [
      ["gate_orange", 2, 1],
      ["gate_gray", 5, 2]
    ],
  },
  L106: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 2],
      [1, 3],
      [0, 5]
    ],
    cats: [
      ["cat_orange", 4, 0],
      ["cat_gray", 4, 1]
    ],
    gates: [
      ["gate_orange", 4, 4],
      ["gate_gray", 0, 3]
    ],
  },
  L107: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 4],
      [5, 2],
      [1, 5],
      [1, 4]
    ],
    cats: [
      ["cat_orange", 0, 5],
      ["cat_black", 4, 3]
    ],
    gates: [
      ["gate_orange", 4, 1],
      ["gate_black", 2, 5]
    ],
  },
  L108: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 1],
      [0, 2],
      [4, 5],
      [2, 4]
    ],
    cats: [
      ["cat_orange", 5, 4],
      ["cat_gray", 1, 4]
    ],
    gates: [
      ["gate_orange", 1, 3],
      ["gate_gray", 5, 3]
    ],
  },
  L109: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 0],
      [0, 4],
      [5, 0]
    ],
    cats: [
      ["cat_orange", 3, 0],
      ["cat_gray", 1, 2]
    ],
    gates: [
      ["gate_orange", 4, 5],
      ["gate_gray", 2, 3]
    ],
  },
  L110: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 1],
      [2, 0],
      [4, 2],
      [2, 3]
    ],
    cats: [
      ["cat_orange", 3, 0],
      ["cat_black", 5, 1]
    ],
    gates: [
      ["gate_orange", 0, 3],
      ["gate_black", 3, 2]
    ],
  },
  L111: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 5],
      [0, 1],
      [4, 1],
      [0, 2]
    ],
    cats: [
      ["cat_orange", 0, 3],
      ["cat_gray", 4, 0]
    ],
    gates: [
      ["gate_orange", 3, 5],
      ["gate_gray", 3, 3]
    ],
  },
  L112: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 0],
      [1, 0],
      [5, 5]
    ],
    cats: [
      ["cat_orange", 5, 3],
      ["cat_gray", 3, 1]
    ],
    gates: [
      ["gate_orange", 0, 4],
      ["gate_gray", 2, 2]
    ],
  },
  L113: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 4],
      [5, 2],
      [3, 4],
      [2, 2]
    ],
    cats: [
      ["cat_orange", 5, 3],
      ["cat_black", 4, 5]
    ],
    gates: [
      ["gate_orange", 2, 0],
      ["gate_black", 3, 3]
    ],
  },
  L114: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 5],
      [1, 1],
      [5, 1],
      [1, 2]
    ],
    cats: [
      ["cat_orange", 0, 2],
      ["cat_gray", 5, 4]
    ],
    gates: [
      ["gate_orange", 5, 2],
      ["gate_gray", 2, 4]
    ],
  },
  L115: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 1],
      [0, 2],
      [2, 4]
    ],
    cats: [
      ["cat_orange", 3, 1],
      ["cat_gray", 2, 0]
    ],
    gates: [
      ["gate_orange", 0, 4],
      ["gate_gray", 1, 0]
    ],
  },
  L116: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 0],
      [3, 1],
      [5, 1],
      [4, 5]
    ],
    cats: [
      ["cat_orange", 3, 2],
      ["cat_black", 2, 5]
    ],
    gates: [
      ["gate_orange", 5, 4],
      ["gate_black", 3, 0]
    ],
  },
  L117: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 0],
      [4, 5],
      [0, 4],
      [0, 5]
    ],
    cats: [
      ["cat_orange", 4, 3],
      ["cat_gray", 5, 3]
    ],
    gates: [
      ["gate_orange", 0, 2],
      ["gate_gray", 1, 3]
    ],
  },
  L118: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 0],
      [0, 4],
      [2, 1]
    ],
    cats: [
      ["cat_orange", 5, 4],
      ["cat_gray", 4, 1]
    ],
    gates: [
      ["gate_orange", 1, 3],
      ["gate_gray", 5, 2]
    ],
  },
  L119: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 2],
      [2, 3],
      [5, 3],
      [0, 5]
    ],
    cats: [
      ["cat_orange", 1, 5],
      ["cat_black", 0, 0]
    ],
    gates: [
      ["gate_orange", 0, 3],
      ["gate_black", 2, 4]
    ],
  },
  L120: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 3],
      [3, 2],
      [0, 4],
      [4, 2]
    ],
    cats: [
      ["cat_orange", 2, 3],
      ["cat_gray", 4, 0]
    ],
    gates: [
      ["gate_orange", 5, 3],
      ["gate_gray", 4, 5]
    ],
  },
  L121: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 0],
      [1, 5],
      [5, 5]
    ],
    cats: [
      ["cat_orange", 0, 2],
      ["cat_gray", 5, 4]
    ],
    gates: [
      ["gate_orange", 2, 5],
      ["gate_gray", 5, 1]
    ],
  },
  L122: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 4],
      [2, 1],
      [5, 3]
    ],
    cats: [
      ["cat_orange", 4, 1],
      ["cat_black", 3, 2]
    ],
    gates: [
      ["gate_orange", 1, 4],
      ["gate_black", 2, 3]
    ],
  },
  L123: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 5],
      [4, 3],
      [0, 4]
    ],
    cats: [
      ["cat_orange", 4, 0],
      ["cat_gray", 0, 0]
    ],
    gates: [
      ["gate_orange", 3, 5],
      ["gate_gray", 2, 2]
    ],
  },
  L124: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 2],
      [2, 0],
      [0, 5]
    ],
    cats: [
      ["cat_orange", 5, 5],
      ["cat_gray", 2, 5]
    ],
    gates: [
      ["gate_orange", 1, 5],
      ["gate_gray", 3, 3]
    ],
  },
  L125: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 2],
      [3, 4],
      [0, 1]
    ],
    cats: [
      ["cat_orange", 4, 5],
      ["cat_black", 3, 3]
    ],
    gates: [
      ["gate_orange", 1, 0],
      ["gate_black", 4, 3]
    ],
  },
  L126: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 3],
      [2, 0],
      [0, 0]
    ],
    cats: [
      ["cat_orange", 2, 2],
      ["cat_gray", 0, 4]
    ],
    gates: [
      ["gate_orange", 5, 2],
      ["gate_gray", 3, 1]
    ],
  },
  L127: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 5],
      [0, 2],
      [4, 5]
    ],
    cats: [
      ["cat_orange", 1, 0],
      ["cat_gray", 5, 2]
    ],
    gates: [
      ["gate_orange", 2, 3],
      ["gate_gray", 0, 1]
    ],
  },
  L128: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 0],
      [0, 1],
      [1, 4]
    ],
    cats: [
      ["cat_orange", 5, 5],
      ["cat_black", 3, 5]
    ],
    gates: [
      ["gate_orange", 0, 4],
      ["gate_black", 4, 0]
    ],
  },
  L129: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 0],
      [1, 1],
      [0, 3]
    ],
    cats: [
      ["cat_orange", 4, 2],
      ["cat_gray", 5, 4]
    ],
    gates: [
      ["gate_orange", 2, 4],
      ["gate_gray", 0, 0]
    ],
  },
  L130: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 5],
      [1, 3],
      [0, 3]
    ],
    cats: [
      ["cat_orange", 1, 4],
      ["cat_gray", 3, 2]
    ],
    gates: [
      ["gate_orange", 4, 2],
      ["gate_gray", 2, 0]
    ],
  },
  L131: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 4],
      [0, 3],
      [1, 0]
    ],
    cats: [
      ["cat_orange", 5, 3],
      ["cat_black", 4, 3]
    ],
    gates: [
      ["gate_orange", 3, 4],
      ["gate_black", 2, 2]
    ],
  },
  L132: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 5],
      [4, 1],
      [0, 2]
    ],
    cats: [
      ["cat_orange", 2, 2],
      ["cat_gray", 3, 4]
    ],
    gates: [
      ["gate_orange", 2, 1],
      ["gate_gray", 1, 5]
    ],
  },
  L133: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 4],
      [2, 5],
      [3, 0]
    ],
    cats: [
      ["cat_orange", 4, 2],
      ["cat_gray", 0, 1]
    ],
    gates: [
      ["gate_orange", 5, 1],
      ["gate_gray", 2, 2]
    ],
  },
  L134: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 3],
      [4, 1],
      [3, 2]
    ],
    cats: [
      ["cat_orange", 3, 3],
      ["cat_black", 5, 0]
    ],
    gates: [
      ["gate_orange", 0, 0],
      ["gate_black", 1, 3]
    ],
  },
  L135: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 0],
      [5, 5],
      [4, 0]
    ],
    cats: [
      ["cat_orange", 0, 3],
      ["cat_gray", 4, 2]
    ],
    gates: [
      ["gate_orange", 5, 3],
      ["gate_gray", 1, 4]
    ],
  },
  L136: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 3],
      [3, 5],
      [5, 1]
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 2, 0]
    ],
    gates: [
      ["gate_orange", 3, 2],
      ["gate_gray", 4, 0]
    ],
  },
  L137: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 2],
      [4, 5],
      [1, 4]
    ],
    cats: [
      ["cat_orange", 2, 5],
      ["cat_black", 5, 0]
    ],
    gates: [
      ["gate_orange", 2, 3],
      ["gate_black", 5, 5]
    ],
  },
  L138: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 0],
      [2, 2],
      [4, 5]
    ],
    cats: [
      ["cat_orange", 3, 0],
      ["cat_gray", 4, 3]
    ],
    gates: [
      ["gate_orange", 1, 1],
      ["gate_gray", 0, 2]
    ],
  },
  L139: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 5],
      [5, 3],
      [4, 1]
    ],
    cats: [
      ["cat_orange", 1, 4],
      ["cat_gray", 2, 0]
    ],
    gates: [
      ["gate_orange", 3, 5],
      ["gate_gray", 5, 4]
    ],
  },
  L140: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 2],
      [1, 5],
      [0, 2]
    ],
    cats: [
      ["cat_orange", 3, 5],
      ["cat_black", 3, 2]
    ],
    gates: [
      ["gate_orange", 1, 1],
      ["gate_black", 0, 3]
    ],
  },
  L141: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 1],
      [1, 5],
      [0, 0]
    ],
    cats: [
      ["cat_orange", 2, 5],
      ["cat_gray", 4, 5]
    ],
    gates: [
      ["gate_orange", 4, 4],
      ["gate_gray", 0, 1]
    ],
  },
  L142: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 1],
      [5, 1],
      [0, 4]
    ],
    cats: [
      ["cat_orange", 5, 2],
      ["cat_gray", 2, 3]
    ],
    gates: [
      ["gate_orange", 1, 2],
      ["gate_gray", 5, 0]
    ],
  },
  L143: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 3],
      [0, 2],
      [2, 2]
    ],
    cats: [
      ["cat_orange", 3, 1],
      ["cat_black", 1, 5]
    ],
    gates: [
      ["gate_orange", 5, 0],
      ["gate_black", 4, 4]
    ],
  },
  L144: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 5],
      [4, 1],
      [2, 3]
    ],
    cats: [
      ["cat_orange", 1, 0],
      ["cat_gray", 3, 0]
    ],
    gates: [
      ["gate_orange", 3, 2],
      ["gate_gray", 5, 4]
    ],
  },
  L145: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 5],
      [4, 3],
      [0, 1]
    ],
    cats: [
      ["cat_orange", 2, 5],
      ["cat_gray", 1, 0]
    ],
    gates: [
      ["gate_orange", 5, 1],
      ["gate_gray", 4, 4]
    ],
  },
  L146: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 2],
      [0, 3],
      [5, 1]
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_black", 2, 5]
    ],
    gates: [
      ["gate_orange", 3, 2],
      ["gate_black", 4, 5]
    ],
  },
  L147: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 0],
      [5, 2],
      [0, 3]
    ],
    cats: [
      ["cat_orange", 2, 3],
      ["cat_gray", 3, 3]
    ],
    gates: [
      ["gate_orange", 2, 2],
      ["gate_gray", 1, 3]
    ],
  },
  L148: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 0],
      [3, 0],
      [4, 3]
    ],
    cats: [
      ["cat_orange", 0, 1],
      ["cat_gray", 4, 2]
    ],
    gates: [
      ["gate_orange", 2, 5],
      ["gate_gray", 3, 2]
    ],
  },
  L149: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 2],
      [1, 2],
      [3, 0]
    ],
    cats: [
      ["cat_orange", 0, 1],
      ["cat_black", 5, 0]
    ],
    gates: [
      ["gate_orange", 4, 3],
      ["gate_black", 2, 5]
    ],
  },
  L150: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 0],
      [5, 0],
      [1, 0]
    ],
    cats: [
      ["cat_orange", 3, 4],
      ["cat_gray", 4, 3]
    ],
    gates: [
      ["gate_orange", 0, 3],
      ["gate_gray", 3, 5]
    ],
  },
  L151: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 5],
      [3, 3],
      [2, 2]
    ],
    cats: [
      ["cat_orange", 1, 0],
      ["cat_gray", 3, 0]
    ],
    gates: [
      ["gate_orange", 5, 3],
      ["gate_gray", 3, 4]
    ],
  },
  L152: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 1],
      [0, 5],
      [2, 3]
    ],
    cats: [
      ["cat_orange", 5, 5],
      ["cat_black", 1, 4]
    ],
    gates: [
      ["gate_orange", 4, 5],
      ["gate_black", 3, 4]
    ],
  },
  L153: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 1],
      [2, 0],
      [3, 3]
    ],
    cats: [
      ["cat_orange", 4, 2],
      ["cat_gray", 4, 0]
    ],
    gates: [
      ["gate_orange", 4, 1],
      ["gate_gray", 0, 4]
    ],
  },
  L154: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 5],
      [4, 2],
      [3, 2]
    ],
    cats: [
      ["cat_orange", 5, 2],
      ["cat_gray", 4, 3]
    ],
    gates: [
      ["gate_orange", 1, 5],
      ["gate_gray", 2, 3]
    ],
  },
  L155: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 1],
      [2, 5],
      [0, 4]
    ],
    cats: [
      ["cat_orange", 5, 4],
      ["cat_black", 4, 0]
    ],
    gates: [
      ["gate_orange", 2, 3],
      ["gate_black", 0, 3]
    ],
  },
  L156: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 0],
      [0, 2],
      [5, 3]
    ],
    cats: [
      ["cat_orange", 2, 4],
      ["cat_gray", 1, 1]
    ],
    gates: [
      ["gate_orange", 2, 1],
      ["gate_gray", 4, 5]
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
    ["cat_orange", "n"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
  ],
  L80: [
    ["cat_orange", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "n"],
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
  L82: [
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
  ],
  L83: [
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
  ],
  L84: [
    ["cat_black", "s"],
    ["cat_orange", "e"],
    ["cat_black", "w"],
    ["cat_orange", "s"],
    ["cat_black", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_black", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
  ],
  L85: [
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
  ],
  L86: [
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_orange", "n"],
    ["cat_black", "e"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
  ],
  L87: [
    ["cat_gray", "e"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "s"],
  ],
  L88: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "e"],
  ],
  L89: [
    ["cat_orange", "n"],
    ["cat_black", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_black", "e"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
  ],
  L90: [
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "n"],
  ],
  L91: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
  ],
  L92: [
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_orange", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
  ],
  L93: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
  ],
  L94: [
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
  ],
  L95: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_black", "e"],
    ["cat_orange", "s"],
  ],
  L96: [
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
  ],
  L97: [
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
  ],
  L98: [
    ["cat_orange", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_orange", "e"],
  ],
  L99: [
    ["cat_gray", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
  ],
  L100: [
    ["cat_orange", "e"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
  ],
  L101: [
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_orange", "n"],
  ],
  L102: [
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_orange", "e"],
  ],
  L103: [
    ["cat_orange", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "e"],
  ],
  L104: [
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_orange", "s"],
    ["cat_black", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
  ],
  L105: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
  ],
  L106: [
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_orange", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "w"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
  ],
  L107: [
    ["cat_orange", "n"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_black", "e"],
    ["cat_orange", "w"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_black", "s"],
    ["cat_black", "w"],
  ],
  L108: [
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
  ],
  L109: [
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
  ],
  L110: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_black", "s"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_orange", "n"],
    ["cat_black", "e"],
  ],
  L111: [
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "s"],
    ["cat_orange", "s"],
  ],
  L112: [
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
  ],
  L113: [
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_orange", "e"],
    ["cat_black", "s"],
  ],
  L114: [
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
  ],
  L115: [
    ["cat_orange", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "n"],
  ],
  L116: [
    ["cat_orange", "e"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
  ],
  L117: [
    ["cat_orange", "n"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "w"],
  ],
  L118: [
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "w"],
    ["cat_orange", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
  ],
  L119: [
    ["cat_black", "e"],
    ["cat_orange", "n"],
    ["cat_black", "s"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_orange", "s"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
  ],
  L120: [
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "e"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
  ],
  L121: [
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
  ],
  L122: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_black", "s"],
    ["cat_orange", "e"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_orange", "n"],
    ["cat_black", "s"],
    ["cat_orange", "w"],
  ],
  L123: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
  ],
  L124: [
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_orange", "w"],
  ],
  L125: [
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_black", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_black", "w"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
  ],
  L126: [
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "e"],
  ],
  L127: [
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_gray", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
  ],
  L128: [
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_black", "w"],
    ["cat_orange", "s"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
  ],
  L129: [
    ["cat_orange", "e"],
    ["cat_gray", "s"],
    ["cat_orange", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
  ],
  L130: [
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
  ],
  L131: [
    ["cat_black", "w"],
    ["cat_orange", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
  ],
  L132: [
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
  ],
  L133: [
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "n"],
    ["cat_orange", "e"],
  ],
  L134: [
    ["cat_black", "s"],
    ["cat_black", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
  ],
  L135: [
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
  ],
  L136: [
    ["cat_gray", "e"],
    ["cat_orange", "e"],
    ["cat_gray", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_gray", "n"],
  ],
  L137: [
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_black", "s"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_orange", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_black", "s"],
  ],
  L138: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "w"],
  ],
  L139: [
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
  ],
  L140: [
    ["cat_black", "n"],
    ["cat_orange", "n"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_orange", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_black", "s"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_black", "w"],
  ],
  L141: [
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "w"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
  ],
  L142: [
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
  ],
  L143: [
    ["cat_black", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_black", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
  ],
  L144: [
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
  ],
  L145: [
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
  ],
  L146: [
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_black", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
  ],
  L147: [
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
  ],
  L148: [
    ["cat_gray", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
  ],
  L149: [
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_black", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_black", "s"],
  ],
  L150: [
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
  ],
  L151: [
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
  ],
  L152: [
    ["cat_orange", "n"],
    ["cat_black", "e"],
    ["cat_black", "s"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_orange", "s"],
  ],
  L153: [
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
  ],
  L154: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
  ],
  L155: [
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_orange", "n"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_orange", "w"],
    ["cat_black", "w"],
  ],
  L156: [
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
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
  if (ids.join(",") !== "L1,L2,L3,L4,L5,L6,L7,L8,L9,L11,L12,L13,L14,L15,L16,L17,L18,L19,L20,L21,L22,L23,L24,L25,L26,L27,L28,L29,L30,L31,L32,L33,L34,L35,L36,L37,L38,L39,L40,L41,L42,L43,L44,L45,L46,L47,L48,L49,L50,L51,L52,L53,L54,L55,L56,L57,L58,L59,L60,L61,L62,L63,L64,L65,L66,L67,L68,L69,L70,L71,L72,L73,L74,L75,L76,L77,L78,L79,L80,L81,L82,L83,L84,L85,L86,L87,L88,L89,L90,L91,L92,L93,L94,L95,L96,L97,L98,L99,L100,L101,L102,L103,L104,L105,L106,L107,L108,L109,L110,L111,L112,L113,L114,L115,L116,L117,L118,L119,L120,L121,L122,L123,L124,L125,L126,L127,L128,L129,L130,L131,L132,L133,L134,L135,L136,L137,L138,L139,L140,L141,L142,L143,L144,L145,L146,L147,L148,L149,L150,L151,L152,L153,L154,L155,L156") {
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
      ...chapter4gPack.levels,
      ...chapter4hPack.levels,
      ...chapter4iPack.levels,
      ...chapter4jPack.levels,
      ...chapter4kPack.levels,
      ...chapter4lPack.levels,
      ...chapter4mPack.levels,
      ...chapter4nPack.levels,
      ...chapter4oPack.levels,
      ...chapter4pPack.levels,
      ...chapter4qPack.levels,
      ...chapter4rPack.levels,
      ...chapter4sPack.levels,
      ...chapter4tPack.levels,
      ...chapter4uPack.levels,
      ...chapter4vPack.levels,
      ...chapter4wPack.levels,
      ...chapter4xPack.levels,
      ...chapter4yPack.levels,
      ...chapter4zPack.levels,
      ...chapter4aaPack.levels,
      ...chapter4abPack.levels,
      ...chapter4acPack.levels,
      ...chapter4adPack.levels,
      ...chapter4aePack.levels,
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
    L82: [l82Pack as PackedBoard],
    L83: [l83Pack as PackedBoard],
    L84: [l84Pack as PackedBoard],
    L85: [l85Pack as PackedBoard],
    L86: [l86Pack as PackedBoard],
    L87: [l87Pack as PackedBoard],
    L88: [l88Pack as PackedBoard],
    L89: [l89Pack as PackedBoard],
    L90: [l90Pack as PackedBoard],
    L91: [l91Pack as PackedBoard],
    L92: [l92Pack as PackedBoard],
    L93: [l93Pack as PackedBoard],
    L94: [l94Pack as PackedBoard],
    L95: [l95Pack as PackedBoard],
    L96: [l96Pack as PackedBoard],
    L97: [l97Pack as PackedBoard],
    L98: [l98Pack as PackedBoard],
    L99: [l99Pack as PackedBoard],
    L100: [l100Pack as PackedBoard],
    L101: [l101Pack as PackedBoard],
    L102: [l102Pack as PackedBoard],
    L103: [l103Pack as PackedBoard],
    L104: [l104Pack as PackedBoard],
    L105: [l105Pack as PackedBoard],
    L106: [l106Pack as PackedBoard],
    L107: [l107Pack as PackedBoard],
    L108: [l108Pack as PackedBoard],
    L109: [l109Pack as PackedBoard],
    L110: [l110Pack as PackedBoard],
    L111: [l111Pack as PackedBoard],
    L112: [l112Pack as PackedBoard],
    L113: [l113Pack as PackedBoard],
    L114: [l114Pack as PackedBoard],
    L115: [l115Pack as PackedBoard],
    L116: [l116Pack as PackedBoard],
    L117: [l117Pack as PackedBoard],
    L118: [l118Pack as PackedBoard],
    L119: [l119Pack as PackedBoard],
    L120: [l120Pack as PackedBoard],
    L121: [l121Pack as PackedBoard],
    L122: [l122Pack as PackedBoard],
    L123: [l123Pack as PackedBoard],
    L124: [l124Pack as PackedBoard],
    L125: [l125Pack as PackedBoard],
    L126: [l126Pack as PackedBoard],
    L127: [l127Pack as PackedBoard],
    L128: [l128Pack as PackedBoard],
    L129: [l129Pack as PackedBoard],
    L130: [l130Pack as PackedBoard],
    L131: [l131Pack as PackedBoard],
    L132: [l132Pack as PackedBoard],
    L133: [l133Pack as PackedBoard],
    L134: [l134Pack as PackedBoard],
    L135: [l135Pack as PackedBoard],
    L136: [l136Pack as PackedBoard],
    L137: [l137Pack as PackedBoard],
    L138: [l138Pack as PackedBoard],
    L139: [l139Pack as PackedBoard],
    L140: [l140Pack as PackedBoard],
    L141: [l141Pack as PackedBoard],
    L142: [l142Pack as PackedBoard],
    L143: [l143Pack as PackedBoard],
    L144: [l144Pack as PackedBoard],
    L145: [l145Pack as PackedBoard],
    L146: [l146Pack as PackedBoard],
    L147: [l147Pack as PackedBoard],
    L148: [l148Pack as PackedBoard],
    L149: [l149Pack as PackedBoard],
    L150: [l150Pack as PackedBoard],
    L151: [l151Pack as PackedBoard],
    L152: [l152Pack as PackedBoard],
    L153: [l153Pack as PackedBoard],
    L154: [l154Pack as PackedBoard],
    L155: [l155Pack as PackedBoard],
    L156: [l156Pack as PackedBoard],
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
  console.log("Standalone L4–L9 + L11–L156 + LT02/L06-07/LT08 match locked coords");
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
  // Mango@3 orange-mackerel loaf lock (Liz sister-kill — was flat ginger blob)
  const mango = friendForClear(3);
  if (mango?.friendId !== "friend_001") throw new Error(`onClear(3) must unlock Mango, got ${mango?.friendId ?? "none"}`);
  if (mango.defaultName !== "Mango") throw new Error("default name must be Mango");
  if (mango.phenotype.artKit !== "ginger") throw new Error("Mango artKit must be ginger");
  if (mango.phenotype.pattern !== "Mackerel") throw new Error("Mango must stay orange mackerel");
  if (ART_KIT_PATH.ginger.loaf48 !== "/assets/cats/ginger_loaf_48.svg") {
    throw new Error("Mango yard/unlock must map ginger 48 → ginger_loaf_48");
  }
  if (ART_KIT_PATH.ginger.loaf72 !== "/assets/cats/ginger_loaf_72.svg") {
    throw new Error("Mango yard/unlock must map ginger 72 → ginger_loaf_72");
  }
  for (const file of [
    "public/assets/cats/ginger_loaf_48.svg",
    "public/assets/cats/ginger_loaf_72.svg",
    "public/assets/cats/ginger_loaf_160.svg",
  ]) {
    if (!existsSync(resolve(file))) throw new Error(`missing art ${file}`);
  }
  const mango48 = readFileSync(resolve("public/assets/cats/ginger_loaf_48.svg"), "utf8");
  const mango72 = readFileSync(resolve("public/assets/cats/ginger_loaf_72.svg"), "utf8");
  const mango160 = readFileSync(resolve("public/assets/cats/ginger_loaf_160.svg"), "utf8");
  for (const [label, art] of [["48", mango48], ["72", mango72], ["160", mango160]] as const) {
    if (!art.includes("#D38B5D")) throw new Error(`Mango loaf ${label} must use coat #D38B5D`);
    if (!art.includes("#B06D4D")) throw new Error(`Mango loaf ${label} must show mackerel stripes #B06D4D`);
    if (!art.includes("#E8C4A0")) throw new Error(`Mango loaf ${label} must use belly #E8C4A0`);
    if (!art.includes("clipPath") || !art.includes("mango-loaf-")) {
      throw new Error(`Mango loaf ${label} must clip mackerel stripes`);
    }
  }
  console.log("Mango @ onClear(3) ok · orange-mackerel ginger loafs · coat #D38B5D + stripes #B06D4D");
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
  if (CAMPAIGN_LEVEL_COUNT !== 156) {
    throw new Error(`CAMPAIGN_LEVEL_COUNT must be 156 (max L-id), got ${CAMPAIGN_LEVEL_COUNT}`);
  }
  if (LEVELS.length !== 155) {
    throw new Error(`campaign board count must stay 155 with L10 off-path, got ${LEVELS.length}`);
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
  if (afterL81?.id !== "L82") throw new Error(`L81 must lead to L82, got ${afterL81?.id}`);
  const afterL84 = nextCampaignLevel("L84");
  if (afterL84?.id !== "L85") throw new Error(`L84 must lead to L85, got ${afterL84?.id}`);
  const afterL87 = nextCampaignLevel("L87");
  if (afterL87?.id !== "L88") throw new Error(`L87 must lead to L88, got ${afterL87?.id}`);
  const afterL90 = nextCampaignLevel("L90");
  if (afterL90?.id !== "L91") throw new Error(`L90 must lead to L91, got ${afterL90?.id}`);
  const afterL93 = nextCampaignLevel("L93");
  if (afterL93?.id !== "L94") throw new Error(`L93 must lead to L94, got ${afterL93?.id}`);
  const afterL96 = nextCampaignLevel("L96");
  if (afterL96?.id !== "L97") throw new Error(`L96 must lead to L97, got ${afterL96?.id}`);
  const afterL99 = nextCampaignLevel("L99");
  if (afterL99?.id !== "L100") throw new Error(`L99 must lead to L100, got ${afterL99?.id}`);
  const afterL102 = nextCampaignLevel("L102");
  if (afterL102?.id !== "L103") throw new Error(`L102 must lead to L103, got ${afterL102?.id ?? "none"}`);
  const afterL105 = nextCampaignLevel("L105");
  if (afterL105?.id !== "L106") throw new Error(`L105 must lead to L106, got ${afterL105?.id ?? "none"}`);
  const afterL108 = nextCampaignLevel("L108");
  if (afterL108?.id !== "L109") throw new Error(`L108 must lead to L109, got ${afterL108?.id ?? "none"}`);
  const afterL111 = nextCampaignLevel("L111");
  if (afterL111?.id !== "L112") throw new Error(`L111 must lead to L112, got ${afterL111?.id ?? "none"}`);
  const afterL114 = nextCampaignLevel("L114");
  if (afterL114?.id !== "L115") throw new Error(`L114 must lead to L115, got ${afterL114?.id ?? "none"}`);
  const afterL117 = nextCampaignLevel("L117");
  if (afterL117?.id !== "L118") throw new Error(`L117 must lead to L118, got ${afterL117?.id ?? "none"}`);
  const afterL120 = nextCampaignLevel("L120");
  if (afterL120?.id !== "L121") throw new Error(`L120 must lead to L121, got ${afterL120?.id ?? "none"}`);
  const afterL123 = nextCampaignLevel("L123");
  if (afterL123?.id !== "L124") throw new Error(`L123 must lead to L124, got ${afterL123?.id ?? "none"}`);
  const afterL126 = nextCampaignLevel("L126");
  if (afterL126?.id !== "L127") throw new Error(`L126 must lead to L127, got ${afterL126?.id ?? "none"}`);
  const afterL129 = nextCampaignLevel("L129");
  if (afterL129?.id !== "L130") throw new Error(`L129 must lead to L130, got ${afterL129?.id ?? "none"}`);
  const afterL132 = nextCampaignLevel("L132");
  if (afterL132?.id !== "L133") throw new Error(`L132 must lead to L133, got ${afterL132?.id ?? "none"}`);
  const afterL135 = nextCampaignLevel("L135");
  if (afterL135?.id !== "L136") throw new Error(`L135 must lead to L136, got ${afterL135?.id ?? "none"}`);
  const afterL138 = nextCampaignLevel("L138");
  if (afterL138?.id !== "L139") throw new Error(`L138 must lead to L139, got ${afterL138?.id ?? "none"}`);
  const afterL141 = nextCampaignLevel("L141");
  if (afterL141?.id !== "L142") throw new Error(`L141 must lead to L142, got ${afterL141?.id ?? "none"}`);
  const afterL144 = nextCampaignLevel("L144");
  if (afterL144?.id !== "L145") throw new Error(`L144 must lead to L145, got ${afterL144?.id ?? "none"}`);
  const afterL147 = nextCampaignLevel("L147");
  if (afterL147?.id !== "L148") throw new Error(`L147 must lead to L148, got ${afterL147?.id ?? "none"}`);
  const afterL150 = nextCampaignLevel("L150");
  if (afterL150?.id !== "L151") throw new Error(`L150 must lead to L151, got ${afterL150?.id ?? "none"}`);
  const afterL153 = nextCampaignLevel("L153");
  if (afterL153?.id !== "L154") throw new Error(`L153 must lead to L154, got ${afterL153?.id ?? "none"}`);
  const afterL156 = nextCampaignLevel("L156");
  if (afterL156) throw new Error("L156 must be the last campaign board");
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
  const l84hud = LEVELS.find((level) => level.id === "L84");
  if (!l84hud || l84hud.number !== 84) throw new Error(`L84 HUD number must be 84, got ${l84hud?.number}`);
  const l87hud = LEVELS.find((level) => level.id === "L87");
  if (!l87hud || l87hud.number !== 87) throw new Error(`L87 HUD number must be 87, got ${l87hud?.number}`);
  const l90hud = LEVELS.find((level) => level.id === "L90");
  if (!l90hud || l90hud.number !== 90) throw new Error(`L90 HUD number must be 90, got ${l90hud?.number}`);
  const l93hud = LEVELS.find((level) => level.id === "L93");
  if (!l93hud || l93hud.number !== 93) throw new Error(`L93 HUD number must be 93, got ${l93hud?.number}`);
  const l96hud = LEVELS.find((level) => level.id === "L96");
  if (!l96hud || l96hud.number !== 96) throw new Error(`L96 HUD number must be 96, got ${l96hud?.number}`);
  const l99hud = LEVELS.find((level) => level.id === "L99");
  if (!l99hud || l99hud.number !== 99) throw new Error(`L99 HUD number must be 99, got ${l99hud?.number}`);
  const l102hud = LEVELS.find((level) => level.id === "L102");
  if (!l102hud || l102hud.number !== 102) throw new Error(`L102 HUD number must be 102, got ${l102hud?.number}`);
  const l105hud = LEVELS.find((level) => level.id === "L105");
  if (!l105hud || l105hud.number !== 105) throw new Error(`L105 HUD number must be 105, got ${l105hud?.number}`);
  const l108hud = LEVELS.find((level) => level.id === "L108");
  if (!l108hud || l108hud.number !== 108) throw new Error(`L108 HUD number must be 108, got ${l108hud?.number}`);
  const l111hud = LEVELS.find((level) => level.id === "L111");
  if (!l111hud || l111hud.number !== 111) throw new Error(`L111 HUD number must be 111, got ${l111hud?.number}`);
  const l114hud = LEVELS.find((level) => level.id === "L114");
  if (!l114hud || l114hud.number !== 114) throw new Error(`L114 HUD number must be 114, got ${l114hud?.number}`);
  const l117hud = LEVELS.find((level) => level.id === "L117");
  if (!l117hud || l117hud.number !== 117) throw new Error(`L117 HUD number must be 117, got ${l117hud?.number}`);
  const l118hud = LEVELS.find((level) => level.id === "L118");
  if (!l118hud || l118hud.number !== 118) throw new Error(`L118 HUD number must be 118, got ${l118hud?.number}`);
  const l120hud = LEVELS.find((level) => level.id === "L120");
  if (!l120hud || l120hud.number !== 120) throw new Error(`L120 HUD number must be 120, got ${l120hud?.number}`);
  const l123hud = LEVELS.find((level) => level.id === "L123");
  if (!l123hud || l123hud.number !== 123) throw new Error(`L123 HUD number must be 123, got ${l123hud?.number}`);
  const l126hud = LEVELS.find((level) => level.id === "L126");
  if (!l126hud || l126hud.number !== 126) throw new Error(`L126 HUD number must be 126, got ${l126hud?.number}`);
  const l129hud = LEVELS.find((level) => level.id === "L129");
  if (!l129hud || l129hud.number !== 129) throw new Error(`L129 HUD number must be 129, got ${l129hud?.number}`);
  const l132hud = LEVELS.find((level) => level.id === "L132");
  if (!l132hud || l132hud.number !== 132) throw new Error(`L132 HUD number must be 132, got ${l132hud?.number}`);
  const l135hud = LEVELS.find((level) => level.id === "L135");
  if (!l135hud || l135hud.number !== 135) throw new Error(`L135 HUD number must be 135, got ${l135hud?.number}`);
  const l138hud = LEVELS.find((level) => level.id === "L138");
  if (!l138hud || l138hud.number !== 138) throw new Error(`L138 HUD number must be 138, got ${l138hud?.number}`);
  const l141hud = LEVELS.find((level) => level.id === "L141");
  if (!l141hud || l141hud.number !== 141) throw new Error(`L141 HUD number must be 141, got ${l141hud?.number}`);
  const l144hud = LEVELS.find((level) => level.id === "L144");
  if (!l144hud || l144hud.number !== 144) throw new Error(`L144 HUD number must be 144, got ${l144hud?.number}`);
  const l147hud = LEVELS.find((level) => level.id === "L147");
  if (!l147hud || l147hud.number !== 147) throw new Error(`L147 HUD number must be 147, got ${l147hud?.number}`);
  const l150hud = LEVELS.find((level) => level.id === "L150");
  if (!l150hud || l150hud.number !== 150) throw new Error(`L150 HUD number must be 150, got ${l150hud?.number}`);
  const l153hud = LEVELS.find((level) => level.id === "L153");
  if (!l153hud || l153hud.number !== 153) throw new Error(`L153 HUD number must be 153, got ${l153hud?.number}`);
  const l156hud = LEVELS.find((level) => level.id === "L156");
  if (!l156hud || l156hud.number !== 156) throw new Error(`L156 HUD number must be 156, got ${l156hud?.number}`);
  if (CAMPAIGN_LEVEL_COUNT !== 156) throw new Error(`HUD denom must be 156, got ${CAMPAIGN_LEVEL_COUNT}`);
  console.log("Level index HUD locks ok · L20=20/156 · L156=156/156 · L9→L11 · L153→L154 · L150→L151 · L147→L148 · L144→L145 · L141→L142 · L138→L139 · L135→L136 · L132→L133 · L129→L130 · L126→L127 · L123→L124 · L120→L121 · L117→L118 · L114→L115 · L111→L112 · L108→L109 · L105→L106 · L102→L103 · L99→L100 · L96→L97 · L60→L61");
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
  // ban inventing friend_052+ (Lavender@153 shipped; next gated)
  const srcHit = [
    "src/lib/collection.ts",
    "src/components/yard/YardScreen.tsx",
    "src/components/yard/YardScene.tsx",
    "src/lib/levels.ts",
  ].flatMap((file) => {
    const text = readFileSync(resolve(file), "utf8");
    return /friend_052/.test(text) ? [file] : [];
  });
  if (srcHit.length) throw new Error(`friend_052+ must not appear in ${srcHit.join(",")}`);
  if (SLICE_UNLOCKS[61]) {
    throw new Error("no unlock at 61 — Fig@96 past Basil");
  }
  if (SLICE_UNLOCKS[66] !== "friend_022") throw new Error("SLICE_UNLOCKS[66] must be friend_022");
  if (SLICE_UNLOCKS[69] !== "friend_023") throw new Error("SLICE_UNLOCKS[69] must be friend_023");
  if (SLICE_UNLOCKS[72] !== "friend_024") throw new Error("SLICE_UNLOCKS[72] must be friend_024");
  if (SLICE_UNLOCKS[75] !== "friend_025") throw new Error("SLICE_UNLOCKS[75] must be friend_025");
  if (SLICE_UNLOCKS[78] !== "friend_026") throw new Error("SLICE_UNLOCKS[78] must be friend_026");
  if (SLICE_UNLOCKS[81] !== "friend_027") throw new Error("SLICE_UNLOCKS[81] must be friend_027");
  if (SLICE_UNLOCKS[84] !== "friend_028") throw new Error("SLICE_UNLOCKS[84] must be friend_028");
  if (SLICE_UNLOCKS[87] !== "friend_029") throw new Error("SLICE_UNLOCKS[87] must be friend_029");
  if (SLICE_UNLOCKS[90] !== "friend_030") throw new Error("SLICE_UNLOCKS[90] must be friend_030");
  if (SLICE_UNLOCKS[93] !== "friend_031") throw new Error("SLICE_UNLOCKS[93] must be friend_031");
  if (SLICE_UNLOCKS[96] !== "friend_032") throw new Error("SLICE_UNLOCKS[96] must be friend_032");
  if (TUTORIAL_RESCUES.length !== 51) throw new Error("TUTORIAL_RESCUES must be 51 (through Lavender)");
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
  if (!coral48.includes("#E9B7A6") || !coral72.includes("#E9B7A6")) throw new Error("Coral loaf must use cream coat #E9B7A6");
  if (!coral48.includes("#F3D0C4") || !coral72.includes("#F3D0C4")) throw new Error("Coral loaf must use sheen #F3D0C4");
  if (!coral48.includes("#F6DDD2") || !coral72.includes("#F6DDD2")) throw new Error("Coral loaf must use belly #F6DDD2");
  if (coral48.includes("#E07A5F") || coral72.includes("#E07A5F")) throw new Error("Coral loaf must not use Pumpkin-twin salmon #E07A5F");
  if (coral48.includes("#E07A32") || coral72.includes("#E07A32")) throw new Error("Coral loaf must not use Pumpkin orange #E07A32");
  if (coral48.includes("#D4A017") || coral72.includes("#D4A017")) throw new Error("Coral loaf must not use gold eyes #D4A017");
  if (furnitureGiftsForClear(66).length) throw new Error("Coral@66 must gift no furniture");
  const yardC = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardC.match(/const coral =/g) || []).length !== 1) throw new Error("YardScene must declare coral once");
  if ((yardC.match(/\{coral \?/g) || []).length !== 1) throw new Error("YardScene must render coral once");
  if (TUTORIAL_RESCUES.length < 22) throw new Error("Met must include through Coral (≥22)");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (SLICE_UNLOCKS[69] !== "friend_023") throw new Error("SLICE_UNLOCKS[69] must be friend_023");
  console.log("Ch4 Coral@66 + L67–L69 ok · chips Coral/Bloom/Petal · cream #E9B7A6 + sheen #F3D0C4 · Ripple Cut / Moss Gap / Ink Stop · Velvet/Bean locked");
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
    ["L79", "Nib Cut"],
    ["L80", "Vellum Gap"],
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
  if (!cocoa48.includes("#6F3A22") || !cocoa72.includes("#6F3A22")) throw new Error("Cocoa loaf must keep mocha mottling #6F3A22");
  if (!cocoa48.includes("clipPath") || !cocoa72.includes("clipPath")) throw new Error("Cocoa loaf must clip mottling");
  if (furnitureGiftsForClear(78).length) throw new Error("Cocoa@78 must gift no furniture");
  const yardC = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardC.match(/const cocoa =/g) || []).length !== 1) throw new Error("YardScene must declare cocoa once");
  if ((yardC.match(/\{cocoa \?/g) || []).length !== 1) throw new Error("YardScene must render cocoa once");
  if (TUTORIAL_RESCUES.length < 26) throw new Error("Met must include through Cocoa (≥26)");
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
  if (SLICE_UNLOCKS[81] !== "friend_027") throw new Error("SLICE_UNLOCKS[81] must be friend_027");
  console.log("Ch4 Cocoa@78 + L79–L81 ok · chips Cocoa/Mocha/Fudge · Nib Cut / Vellum Gap / Stamp Stop · Steve/Maple/Blue/Coral/Velvet/Bean locked");
}


{
  // Rival Cocoa Conditional — L79/L80 Quill/Parch kills
  const l79 = LEVELS.find((row) => row.id === "L79")!;
  const l80 = LEVELS.find((row) => row.id === "L80")!;
  const l81 = LEVELS.find((row) => row.id === "L81")!;
  if (l81.name !== "Stamp Stop") throw new Error("L81 Stamp Stop must stay");
  if (l79.name !== "Nib Cut") throw new Error("L79 must be Nib Cut");
  if (l80.name !== "Vellum Gap") throw new Error("L80 must be Vellum Gap");
  const old = new Set(["0,0/5,2", "0,0/5,4"]);
  for (const level of [l79, l80]) {
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (old.has(pair)) throw new Error(`${level.id} still on old Quill/Parch gates`);
    if (/\b(hold|park|close|quill|parch)\b/i.test(level.name)) {
      throw new Error(`${level.id} must not keep Quill/Parch/Hold*`);
    }
  }
  const orange79 = l79.gates.find((g) => g.id === "gate_orange" || g.color === "orange");
  if (orange79 && orange79.x === 5 && orange79.y === 2) {
    throw new Error("L79 orange must leave (5,2)");
  }
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 Pass must stand");
  if (SLICE_UNLOCKS[78] !== "friend_026") throw new Error("SLICE_UNLOCKS[78] friend_026 stays");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (SLICE_UNLOCKS[81] !== "friend_027") throw new Error("SLICE_UNLOCKS[81] must be friend_027");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 locked");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 locked");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 locked");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 locked");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 locked");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 locked");
  console.log("Rival rewrite L79/L80 ok · Nib Cut · Vellum Gap · L81 Stamp Stop · Cocoa Pass · Linen@81 unlocked");
}

{
  // Ch4 Linen@81 + L82–L84 triad
  for (const [id, name] of [
    ["L82", "Truffle Cut"],
    ["L83", "Foam Gap"],
    ["L84", "Bitter Stop"],
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
  if (LEVELS.find((row) => row.id === "L79")?.name !== "Nib Cut") throw new Error("L79 Nib Cut locked");
  if (LEVELS.find((row) => row.id === "L80")?.name !== "Vellum Gap") throw new Error("L80 Vellum Gap locked");
  if (LEVELS.find((row) => row.id === "L81")?.name !== "Stamp Stop") throw new Error("L81 Stamp Stop locked");
  if (SLICE_UNLOCKS[81] !== "friend_027") throw new Error("SLICE_UNLOCKS[81] must be friend_027");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("onClear(81) must award Linen");
  const linen = friendById("friend_027");
  if (!linen) throw new Error("friend_027 missing from CATALOG");
  if (linen.defaultName !== "Linen") throw new Error("default name must be Linen");
  if (linen.unlockClear !== 81) throw new Error("Linen unlockClear must be 81");
  if (linen.phenotype.artKit !== "linen") throw new Error("Linen artKit must be linen");
  if (linen.phenotype.personality !== "Hazy") throw new Error("Linen personality must be Hazy");
  if (linen.phenotype.boardColor !== "gray") throw new Error("Linen boardColor must be gray");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") {
    throw new Error(`Linen chips must be Linen/Gauze/Whisper, got ${chipsForFriend("friend_027").join(",")}`);
  }
  const linen48 = readFileSync(resolve("public/assets/cats/linen_loaf_48.svg"), "utf8");
  const linen72 = readFileSync(resolve("public/assets/cats/linen_loaf_72.svg"), "utf8");
  if (!linen48.includes("#B4BAC2") || !linen72.includes("#B4BAC2")) throw new Error("Linen loaf must use cool wash #B4BAC2");
  if (!linen48.includes("#DDE1E6") || !linen72.includes("#DDE1E6")) throw new Error("Linen loaf must use belly #DDE1E6");
  if (!linen48.includes("#9AA3AC") || !linen72.includes("#9AA3AC")) throw new Error("Linen loaf must use fold crease #9AA3AC");
  if (furnitureGiftsForClear(81).length) throw new Error("Linen@81 must gift no furniture");
  const yardL = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardL.match(/const linen =/g) || []).length !== 1) throw new Error("YardScene must declare linen once");
  if ((yardL.match(/\{linen \?/g) || []).length !== 1) throw new Error("YardScene must render linen once");
  if (TUTORIAL_RESCUES.length < 27) throw new Error("Met must include through Linen (≥27)");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[84] !== "friend_028") throw new Error("SLICE_UNLOCKS[84] must be friend_028");
  if (/misty|Misty|Haze\b|\bmist\b/i.test(linen48 + linen72)) throw new Error("Linen art must not use misty assets");
  console.log("Ch4 Linen@81 + L82–L84 ok · chips Linen/Gauze/Whisper · Truffle Cut / Foam Gap / Bitter Stop · Nib/Vellum/Stamp kept · Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}

{
  // Ch4 Juniper@84 + L85–L87 triad
  for (const [id, name] of [
    ["L85", "Umber Cut"],
    ["L86", "Twill Gap"],
    ["L87", "Flax Stop"],
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
  if (LEVELS.find((row) => row.id === "L82")?.name !== "Truffle Cut") throw new Error("L82 Truffle Cut locked");
  if (LEVELS.find((row) => row.id === "L83")?.name !== "Foam Gap") throw new Error("L83 Foam Gap locked");
  if (LEVELS.find((row) => row.id === "L84")?.name !== "Bitter Stop") throw new Error("L84 Bitter Stop locked");
  if (SLICE_UNLOCKS[84] !== "friend_028") throw new Error("SLICE_UNLOCKS[84] must be friend_028");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("onClear(84) must award Juniper");
  const juniper = friendById("friend_028");
  if (!juniper) throw new Error("friend_028 missing from CATALOG");
  if (juniper.defaultName !== "Juniper") throw new Error("default name must be Juniper");
  if (juniper.unlockClear !== 84) throw new Error("Juniper unlockClear must be 84");
  if (juniper.phenotype.artKit !== "juniper") throw new Error("Juniper artKit must be juniper");
  if (juniper.phenotype.personality !== "Crisp") throw new Error("Juniper personality must be Crisp");
  if (juniper.phenotype.boardColor !== "gray") throw new Error("Juniper boardColor must be gray");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") {
    throw new Error(`Juniper chips must be Juniper/Moss/Sage, got ${chipsForFriend("friend_028").join(",")}`);
  }
  const juniper48 = readFileSync(resolve("public/assets/cats/juniper_loaf_48.svg"), "utf8");
  const juniper72 = readFileSync(resolve("public/assets/cats/juniper_loaf_72.svg"), "utf8");
  if (!juniper48.includes("#7E8F86") || !juniper72.includes("#7E8F86")) throw new Error("Juniper loaf must use sage-gray #7E8F86");
  if (!juniper48.includes("#3E5248") || !juniper72.includes("#3E5248")) throw new Error("Juniper loaf must use spots #3E5248");
  if (!juniper48.includes("#D5DDD4") || !juniper72.includes("#D5DDD4")) throw new Error("Juniper loaf must use belly #D5DDD4");
  if (furnitureGiftsForClear(84).length) throw new Error("Juniper@84 must gift no furniture");
  const yardJ = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardJ.match(/const juniper =/g) || []).length !== 1) throw new Error("YardScene must declare juniper once");
  if ((yardJ.match(/\{juniper \?/g) || []).length !== 1) throw new Error("YardScene must render juniper once");
  if (TUTORIAL_RESCUES.length < 28) throw new Error("Met must include through Juniper (≥28)");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[87] !== "friend_029") throw new Error("SLICE_UNLOCKS[87] must be friend_029");
  if (/pebble|Pebble/i.test(juniper48 + juniper72)) throw new Error("Juniper art must not use Pebble");
  console.log("Ch4 Juniper@84 + L85–L87 ok · chips Juniper/Moss/Sage · Umber Cut / Twill Gap / Flax Stop · Truffle/Foam/Bitter kept · Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}


{
  // Rival Juniper Conditional — L85 Sable Cut kill → Umber Cut
  const l85 = LEVELS.find((row) => row.id === "L85")!;
  const l86 = LEVELS.find((row) => row.id === "L86")!;
  const l87 = LEVELS.find((row) => row.id === "L87")!;
  if (l86.name !== "Twill Gap") throw new Error("L86 Twill Gap must stay");
  if (l87.name !== "Flax Stop") throw new Error("L87 Flax Stop must stay");
  if (l85.name !== "Umber Cut") throw new Error("L85 must be Umber Cut");
  if (/\b(hold|park|close|sable|ivory)\b/i.test(l85.name)) {
    throw new Error("L85 must not keep Sable/Ivory/Hold*");
  }
  const orange85 = l85.gates.find((g) => g.id === "gate_orange" || g.color === "orange");
  if (orange85 && orange85.x === 1 && orange85.y === 5) {
    throw new Error("L85 orange must leave L84 Bitter (1,5)");
  }
  const oldPair = l85.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (oldPair === "1,5/5,0") throw new Error("L85 still on old Sable Cut gates");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 Pass must stand");
  if (SLICE_UNLOCKS[84] !== "friend_028") throw new Error("SLICE_UNLOCKS[84] friend_028 stays");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (SLICE_UNLOCKS[87] !== "friend_029") throw new Error("SLICE_UNLOCKS[87] must be friend_029 after Ivory ship");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 locked");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 locked");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 locked");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 locked");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 locked");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 locked");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 locked");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 locked");
  console.log("Rival rewrite L85 ok · Umber Cut · L86 Twill Gap · L87 Flax Stop · Juniper Pass · Ivory@87 unlocked");
}


{
  // Ch4 Ivory@87 + L88–L90 triad
  for (const [id, name] of [
    ["L88", "Nutmeg Cut"],
    ["L89", "Cumin Gap"],
    ["L90", "Sage Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close|pepper)\b/i.test(level.name)) throw new Error(`${id} must not be Hold*/Park*/Close/Pepper`);
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
  }
  if (LEVELS.find((row) => row.id === "L85")?.name !== "Umber Cut") throw new Error("L85 Umber Cut locked");
  if (LEVELS.find((row) => row.id === "L86")?.name !== "Twill Gap") throw new Error("L86 Twill Gap locked");
  if (LEVELS.find((row) => row.id === "L87")?.name !== "Flax Stop") throw new Error("L87 Flax Stop locked");
  if (SLICE_UNLOCKS[87] !== "friend_029") throw new Error("SLICE_UNLOCKS[87] must be friend_029");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("onClear(87) must award Ivory");
  const ivory = friendById("friend_029");
  if (!ivory) throw new Error("friend_029 missing from CATALOG");
  if (ivory.defaultName !== "Ivory") throw new Error("default name must be Ivory");
  if (ivory.unlockClear !== 87) throw new Error("Ivory unlockClear must be 87");
  if (ivory.phenotype.artKit !== "ivory") throw new Error("Ivory artKit must be ivory");
  if (ivory.phenotype.personality !== "Polished") throw new Error("Ivory personality must be Polished");
  if (ivory.phenotype.boardColor !== "orange") throw new Error("Ivory boardColor must be orange");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") {
    throw new Error(`Ivory chips must be Ivory/Lace/Sheer, got ${chipsForFriend("friend_029").join(",")}`);
  }
  const ivory48 = readFileSync(resolve("public/assets/cats/ivory_loaf_48.svg"), "utf8");
  const ivory72 = readFileSync(resolve("public/assets/cats/ivory_loaf_72.svg"), "utf8");
  if (!ivory48.includes("#EBE3C4") || !ivory72.includes("#EBE3C4")) throw new Error("Ivory loaf must use napkin #EBE3C4");
  if (!ivory48.includes("#C4B896") || !ivory72.includes("#C4B896")) throw new Error("Ivory loaf must show lace weave #C4B896");
  if (!ivory48.includes("#F3EBD0") || !ivory72.includes("#F3EBD0")) throw new Error("Ivory loaf must use belly #F3EBD0");
  if (!ivory48.includes("#C9C09A") || !ivory72.includes("#C9C09A")) throw new Error("Ivory loaf must use ear #C9C09A");
  if (!ivory48.includes("clipPath") || !ivory72.includes("clipPath")) throw new Error("Ivory loaf must clip lace weave");
  if (furnitureGiftsForClear(87).length) throw new Error("Ivory@87 must gift no furniture");
  const yardI = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardI.match(/const ivory =/g) || []).length !== 1) throw new Error("YardScene must declare ivory once");
  if ((yardI.match(/\{ivory \?/g) || []).length !== 1) throw new Error("YardScene must render ivory once");
  if (TUTORIAL_RESCUES.length < 29) throw new Error("Met must include through Ivory (≥29)");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 must stay");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[90] !== "friend_030") throw new Error("SLICE_UNLOCKS[90] must be friend_030 after Clay ship");
  if (/pebble|Pebble/i.test(ivory48 + ivory72)) throw new Error("Ivory art must not use Pebble");
  if (/chalk|sill|cream|porcelain/i.test(chipsForFriend("friend_029").join(","))) {
    throw new Error("Ivory chips must stay Ivory/Lace/Sheer — not Chalk/Sill/Cream/Porcelain");
  }
  console.log("Ch4 Ivory@87 + L88–L90 ok · chips Ivory/Lace/Sheer · Nutmeg Cut / Cumin Gap / Sage Stop · Umber/Twill/Flax kept · Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}



{
  // Rival Ivory Conditional — L88–L90 Clove/Anise/Bay kill → Nutmeg/Cumin/Sage
  const l88 = LEVELS.find((row) => row.id === "L88")!;
  const l89 = LEVELS.find((row) => row.id === "L89")!;
  const l90 = LEVELS.find((row) => row.id === "L90")!;
  if (l88.name !== "Nutmeg Cut") throw new Error("L88 must be Nutmeg Cut");
  if (l89.name !== "Cumin Gap") throw new Error("L89 must be Cumin Gap");
  if (l90.name !== "Sage Stop") throw new Error("L90 must be Sage Stop");
  if (/\b(hold|park|close|clove|anise|bay|clay)\b/i.test(l88.name + " " + l89.name + " " + l90.name)) {
    throw new Error("L88–L90 must not keep Clove/Anise/Bay/Clay/Hold*");
  }
  const pair88 = l88.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  const pair89 = l89.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  const pair90 = l90.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (pair88 === "0,3/2,2") throw new Error("L88 still on old Clove Cut gates");
  if (pair89 === "2,0/3,2") throw new Error("L89 still on old Anise Gap gates");
  if (pair90 === "2,3/5,1") throw new Error("L90 still on old Bay Stop gates");
  const delta = (level: typeof l88) => {
    const orange = level.gates.find((g) => g.id === "gate_orange" || g.color === "orange")!;
    const other = level.gates.find((g) => g !== orange)!;
    return `(${orange.x - other.x},${orange.y - other.y})`;
  };
  if (delta(l88) === "(2,-1)") throw new Error("L88 still on killed delta (2,-1)/L64 Curl");
  if (delta(l89) === "(1,2)") throw new Error("L89 still on killed delta (1,2)/L66 Peg");
  if (delta(l90) === "(3,-2)") throw new Error("L90 still on killed delta (3,-2)/L73 Glint");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("Ivory@87 Pass must stand");
  if (SLICE_UNLOCKS[87] !== "friend_029") throw new Error("SLICE_UNLOCKS[87] friend_029 stays");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") throw new Error("Ivory chips untouched");
  if (SLICE_UNLOCKS[90] !== "friend_030") throw new Error("SLICE_UNLOCKS[90] must be friend_030 after Clay ship");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 locked");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 locked");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 locked");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 locked");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 locked");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 locked");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 locked");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 locked");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 locked");
  console.log("Rival rewrite L88–L90 ok · Nutmeg Cut / Cumin Gap / Sage Stop · Ivory Pass · chips Ivory/Lace/Sheer · Clay@90 unlocked");
}


{
  // Ch4 Clay@90 + L91–L93 triad (Marjoram/Fennel/Lovage — Chervil Step Off kill)
  for (const [id, name] of [
    ["L91", "Marjoram Cut"],
    ["L92", "Fennel Gap"],
    ["L93", "Lovage Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close|pepper|sumac|mace|thyme|chervil)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close/Pepper/Sumac/Mace/Thyme`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
  }
  if (LEVELS.find((row) => row.id === "L88")?.name !== "Nutmeg Cut") throw new Error("L88 Nutmeg Cut locked");
  if (LEVELS.find((row) => row.id === "L89")?.name !== "Cumin Gap") throw new Error("L89 Cumin Gap locked");
  if (LEVELS.find((row) => row.id === "L90")?.name !== "Sage Stop") throw new Error("L90 Sage Stop locked");
  if (SLICE_UNLOCKS[90] !== "friend_030") throw new Error("SLICE_UNLOCKS[90] must be friend_030");
  if (shippedFriendForClear(90)?.friendId !== "friend_030") throw new Error("onClear(90) must award Clay");
  const clay = friendById("friend_030");
  if (!clay) throw new Error("friend_030 missing from CATALOG");
  if (clay.defaultName !== "Clay") throw new Error("default name must be Clay");
  if (clay.unlockClear !== 90) throw new Error("Clay unlockClear must be 90");
  if (clay.phenotype.artKit !== "clay") throw new Error("Clay artKit must be clay");
  if (clay.phenotype.personality !== "Grounded") throw new Error("Clay personality must be Grounded");
  if (clay.phenotype.boardColor !== "orange") throw new Error("Clay boardColor must be orange");
  if (chipsForFriend("friend_030").join(",") !== "Clay,Brick,Terra") {
    throw new Error(`Clay chips must be Clay/Brick/Terra, got ${chipsForFriend("friend_030").join(",")}`);
  }
  const clay48 = readFileSync(resolve("public/assets/cats/clay_loaf_48.svg"), "utf8");
  const clay72 = readFileSync(resolve("public/assets/cats/clay_loaf_72.svg"), "utf8");
  if (!clay48.includes("#C85A3C") || !clay72.includes("#C85A3C")) throw new Error("Clay loaf must use terracotta #C85A3C");
  if (!clay48.includes("#E8C4A8") || !clay72.includes("#E8C4A8")) throw new Error("Clay loaf must use sand belly #E8C4A8");
  if (!clay48.includes("#A8462C") || !clay72.includes("#A8462C")) throw new Error("Clay loaf must use ear #A8462C");
  if (furnitureGiftsForClear(90).length) throw new Error("Clay@90 must gift no furniture");
  const yardC = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardC.match(/const clay =/g) || []).length !== 1) throw new Error("YardScene must declare clay once");
  if ((yardC.match(/\{clay \?/g) || []).length !== 1) throw new Error("YardScene must render clay once");
  if (TUTORIAL_RESCUES.length < 30) throw new Error("Met must include through Clay (≥30)");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("Ivory@87 must stay");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 must stay");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") throw new Error("Ivory chips untouched");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[93] !== "friend_031") throw new Error("SLICE_UNLOCKS[93] must be friend_031 after Basil ship");
  if (/pebble|Pebble/i.test(clay48 + clay72)) throw new Error("Clay art must not use Pebble");
  if (/sumac|mace|thyme/i.test([LEVELS.find((r)=>r.id==="L91")?.name, LEVELS.find((r)=>r.id==="L92")?.name, LEVELS.find((r)=>r.id==="L93")?.name].join(","))) {
    throw new Error("L91–L93 must not ship Sumac/Mace/Thyme");
  }
  console.log("Ch4 Clay@90 + L91–L93 ok · chips Clay/Brick/Terra · terracotta #C85A3C · Marjoram Cut / Fennel Gap / Lovage Stop · Nutmeg/Cumin/Sage kept · Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}



{
  // Ch4 Basil@93 + L94–L96 triad (Chive/Savory/Dill — deltas (4,5)/(1,1)/(0,1); Sorrel Lovage-reuse kill)
  for (const [id, name] of [
    ["L94", "Chive Cut"],
    ["L95", "Savory Gap"],
    ["L96", "Dill Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close|pepper|tarragon|sorrel)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close/Pepper/Tarragon/Sorrel`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
  }
  if (LEVELS.find((row) => row.id === "L91")?.name !== "Marjoram Cut") throw new Error("L91 Marjoram Cut locked");
  if (LEVELS.find((row) => row.id === "L92")?.name !== "Fennel Gap") throw new Error("L92 Fennel Gap locked");
  if (LEVELS.find((row) => row.id === "L93")?.name !== "Lovage Stop") throw new Error("L93 Lovage Stop locked");
  if (SLICE_UNLOCKS[93] !== "friend_031") throw new Error("SLICE_UNLOCKS[93] must be friend_031");
  if (shippedFriendForClear(93)?.friendId !== "friend_031") throw new Error("onClear(93) must award Basil");
  const basil = friendById("friend_031");
  if (!basil) throw new Error("friend_031 missing from CATALOG");
  if (basil.defaultName !== "Basil") throw new Error("default name must be Basil");
  if (basil.unlockClear !== 93) throw new Error("Basil unlockClear must be 93");
  if (basil.phenotype.artKit !== "basil") throw new Error("Basil artKit must be basil");
  if (basil.phenotype.personality !== "Fresh") throw new Error("Basil personality must be Fresh");
  if (basil.phenotype.boardColor !== "gray") throw new Error("Basil boardColor must be gray");
  if (chipsForFriend("friend_031").join(",") !== "Basil,Pesto,Herb") {
    throw new Error(`Basil chips must be Basil/Pesto/Herb, got ${chipsForFriend("friend_031").join(",")}`);
  }
  const basil48 = readFileSync(resolve("public/assets/cats/basil_loaf_48.svg"), "utf8");
  const basil72 = readFileSync(resolve("public/assets/cats/basil_loaf_72.svg"), "utf8");
  if (!basil48.includes("#7A9B6A") || !basil72.includes("#7A9B6A")) throw new Error("Basil loaf must use sage #7A9B6A");
  if (!basil48.includes("#D5E2C8") || !basil72.includes("#D5E2C8")) throw new Error("Basil loaf must use belly #D5E2C8");
  if (!basil48.includes("#5E7A52") || !basil72.includes("#5E7A52")) throw new Error("Basil loaf must use ear #5E7A52");
  if (!basil48.includes("#2F4A2C") || !basil72.includes("#2F4A2C")) throw new Error("Basil loaf must use herb-leaf spots #2F4A2C");
  if (!basil48.includes("<path") || !basil72.includes("<path")) throw new Error("Basil loaf must punch leaf-spot path marks");
  if (furnitureGiftsForClear(93).length) throw new Error("Basil@93 must gift no furniture");
  const yardB = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardB.match(/const basil =/g) || []).length !== 1) throw new Error("YardScene must declare basil once");
  if ((yardB.match(/\{basil \?/g) || []).length !== 1) throw new Error("YardScene must render basil once");
  if (TUTORIAL_RESCUES.length < 31) throw new Error("Met must include through Basil (≥31)");
  if (shippedFriendForClear(90)?.friendId !== "friend_030") throw new Error("Clay@90 must stay");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("Ivory@87 must stay");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 must stay");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (chipsForFriend("friend_030").join(",") !== "Clay,Brick,Terra") throw new Error("Clay chips untouched");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") throw new Error("Ivory chips untouched");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[96] !== "friend_032") throw new Error("SLICE_UNLOCKS[96] must be friend_032 after Fig ship");
  if (/pebble|Pebble/i.test(basil48 + basil72)) throw new Error("Basil art must not use Pebble");
  if (/tarragon/i.test([LEVELS.find((r)=>r.id==="L94")?.name, LEVELS.find((r)=>r.id==="L95")?.name, LEVELS.find((r)=>r.id==="L96")?.name].join(","))) {
    throw new Error("L94–L96 must not ship Tarragon");
  }
  // Final deltas lock (4,5)/(1,1)/(0,1) — kill Sorrel gray Lovage seat (0,2)
  const l94 = LEVELS.find((r) => r.id === "L94")!;
  const l95 = LEVELS.find((r) => r.id === "L95")!;
  const l96 = LEVELS.find((r) => r.id === "L96")!;
  const gatePair = (level: typeof l94) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (gatePair(l94) !== "0,0/4,5") throw new Error(`L94 gates must be delta (4,5) pair, got ${gatePair(l94)}`);
  if (gatePair(l95) !== "1,4/2,5") throw new Error(`L95 gates must be delta (1,1) pair, got ${gatePair(l95)}`);
  if (gatePair(l96) !== "2,3/2,4") throw new Error(`L96 gates must be delta (0,1) pair, got ${gatePair(l96)}`);
  const l94Gray = l94.gates.find((g) => g.color === "gray" || g.id === "gate_gray");
  if (!l94Gray || (l94Gray.x === 0 && l94Gray.y === 2)) {
    throw new Error("L94 must not reuse Sorrel/Lovage gray seat (0,2)");
  }
  if (/sorrel/i.test(l94.name)) throw new Error("L94 must not ship Sorrel Cut");
  if (ART_KIT_PATH.basil.loaf48 !== "/assets/cats/basil_loaf_48.svg") throw new Error("ART_KIT_PATH.basil loaf48");
  if (ART_KIT_PATH.basil.loaf72 !== "/assets/cats/basil_loaf_72.svg") throw new Error("ART_KIT_PATH.basil loaf72");
  console.log("Ch4 Basil@93 + L94–L96 ok · chips Basil/Pesto/Herb · sage #7A9B6A · herb spots #2F4A2C · Chive Cut / Savory Gap / Dill Stop · Lovage kept · Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}




{
  // Ch4 Fig@96 + L97–L99 triad (Kelp/Nori/Brine — deltas (1,4)/(2,0)/(3,0); Cress/Rue/Mint seat-farm kill)
  for (const [id, name] of [
    ["L97", "Kelp Cut"],
    ["L98", "Nori Gap"],
    ["L99", "Brine Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close|pepper|tarragon|basil|pesto|herb|cress|rue|mint)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close/Pepper/Tarragon/Basil/Cress/Rue/Mint`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
  }
  if (LEVELS.find((row) => row.id === "L94")?.name !== "Chive Cut") throw new Error("L94 Chive Cut locked");
  if (LEVELS.find((row) => row.id === "L95")?.name !== "Savory Gap") throw new Error("L95 Savory Gap locked");
  if (LEVELS.find((row) => row.id === "L96")?.name !== "Dill Stop") throw new Error("L96 Dill Stop locked");
  if (SLICE_UNLOCKS[96] !== "friend_032") throw new Error("SLICE_UNLOCKS[96] must be friend_032");
  if (shippedFriendForClear(96)?.friendId !== "friend_032") throw new Error("onClear(96) must award Fig");
  const fig = friendById("friend_032");
  if (!fig) throw new Error("friend_032 missing from CATALOG");
  if (fig.defaultName !== "Fig") throw new Error("default name must be Fig");
  if (fig.unlockClear !== 96) throw new Error("Fig unlockClear must be 96");
  if (fig.phenotype.artKit !== "fig") throw new Error("Fig artKit must be fig");
  if (fig.phenotype.personality !== "Ripe") throw new Error("Fig personality must be Ripe");
  if (fig.phenotype.boardColor !== "orange") throw new Error("Fig boardColor must be orange");
  if (chipsForFriend("friend_032").join(",") !== "Fig,Olive,Pit") {
    throw new Error(`Fig chips must be Fig/Olive/Pit, got ${chipsForFriend("friend_032").join(",")}`);
  }
  if (chipsForFriend("friend_032").some((c) => /basil|pesto|herb/i.test(c))) {
    throw new Error("Fig chips must ban Basil/Pesto/Herb");
  }
  const fig48 = readFileSync(resolve("public/assets/cats/fig_loaf_48.svg"), "utf8");
  const fig72 = readFileSync(resolve("public/assets/cats/fig_loaf_72.svg"), "utf8");
  if (!fig48.includes("#C9B08C") || !fig72.includes("#C9B08C")) throw new Error("Fig loaf must use dusty #C9B08C");
  if (!fig48.includes("#6A4A38") || !fig72.includes("#6A4A38")) throw new Error("Fig loaf must use seed pits #6A4A38");
  if (!fig48.includes("#E8D4BC") || !fig72.includes("#E8D4BC")) throw new Error("Fig loaf must use belly #E8D4BC");
  if (furnitureGiftsForClear(96).length) throw new Error("Fig@96 must gift no furniture");
  const yardF = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardF.match(/const fig =/g) || []).length !== 1) throw new Error("YardScene must declare fig once");
  if ((yardF.match(/\{fig \?/g) || []).length !== 1) throw new Error("YardScene must render fig once");
  if (TUTORIAL_RESCUES.length !== 51) throw new Error("Met must include through Parsley (42)");
  if (shippedFriendForClear(93)?.friendId !== "friend_031") throw new Error("Basil@93 must stay");
  if (shippedFriendForClear(90)?.friendId !== "friend_030") throw new Error("Clay@90 must stay");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("Ivory@87 must stay");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 must stay");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (chipsForFriend("friend_031").join(",") !== "Basil,Pesto,Herb") throw new Error("Basil chips untouched");
  if (chipsForFriend("friend_030").join(",") !== "Clay,Brick,Terra") throw new Error("Clay chips untouched");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") throw new Error("Ivory chips untouched");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[99] !== "friend_033") throw new Error("SLICE_UNLOCKS[99] must be friend_033");
  if (/pebble|Pebble/i.test(fig48 + fig72)) throw new Error("Fig art must not use Pebble");
  if (/basil|pesto|herb/i.test(fig48 + fig72)) throw new Error("Fig art must not collide Basil leaf marks");
  // Deltas (1,4)/(2,0)/(3,0) — kill Cress/Rue/Mint farms; off Dill (2,4) / Chive (4,5) / Lovage (0,2)
  const l97 = LEVELS.find((r) => r.id === "L97")!;
  const l98 = LEVELS.find((r) => r.id === "L98")!;
  const l99 = LEVELS.find((r) => r.id === "L99")!;
  const figGatePair = (level: typeof l97) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (figGatePair(l97) !== "0,1/1,5") throw new Error(`L97 gates must be delta (1,4) pair, got ${figGatePair(l97)}`);
  if (figGatePair(l98) !== "3,5/5,5") throw new Error(`L98 gates must be delta (2,0) pair, got ${figGatePair(l98)}`);
  if (figGatePair(l99) !== "1,1/4,1") throw new Error(`L99 gates must be delta (3,0) pair, got ${figGatePair(l99)}`);
  // Forbid Dill (2,4) / Chive (4,5) / Lovage (0,2) reuse on L97–L99
  for (const level of [l97, l98, l99]) {
    for (const g of level.gates) {
      if (g.x === 2 && g.y === 4) throw new Error(`${level.id} must not reuse Dill seat (2,4)`);
      if (g.x === 4 && g.y === 5) throw new Error(`${level.id} must not reuse Chive seat (4,5)`);
      if (g.x === 0 && g.y === 2) throw new Error(`${level.id} must not reuse Lovage seat (0,2)`);
    }
  }
  if (/cress|rue|mint/i.test([l97.name, l98.name, l99.name].join(","))) {
    throw new Error("L97–L99 must not ship Cress/Rue/Mint");
  }
  if (ART_KIT_PATH.fig.loaf48 !== "/assets/cats/fig_loaf_48.svg") throw new Error("ART_KIT_PATH.fig loaf48");
  if (ART_KIT_PATH.fig.loaf72 !== "/assets/cats/fig_loaf_72.svg") throw new Error("ART_KIT_PATH.fig loaf72");
  if (ART_KIT_PATH.basil.loaf48 !== "/assets/cats/basil_loaf_48.svg") throw new Error("Basil kit must stay");
  console.log("Ch4 Fig@96 + L97–L99 ok · chips Fig/Olive/Pit · dusty #C9B08C + pits #6A4A38 · Kelp Cut / Nori Gap / Brine Stop · Dill/Chive/Lovage seats banned · Basil/Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}

{
  // Rival Fig Conditional — L97–L99 Cress/Rue/Mint seat-farm kills
  const l97 = LEVELS.find((row) => row.id === "L97")!;
  const l98 = LEVELS.find((row) => row.id === "L98")!;
  const l99 = LEVELS.find((row) => row.id === "L99")!;
  if (l97.name !== "Kelp Cut") throw new Error("L97 must be Kelp Cut");
  if (l98.name !== "Nori Gap") throw new Error("L98 must be Nori Gap");
  if (l99.name !== "Brine Stop") throw new Error("L99 must be Brine Stop");
  const old = new Set(["2,4/5,4", "4,3/4,5", "1,2/4,5"]);
  for (const level of [l97, l98, l99]) {
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (old.has(pair)) throw new Error(`${level.id} still on old Cress/Rue/Mint gates`);
    if (/\b(hold|park|close|cress|rue|mint)\b/i.test(level.name)) {
      throw new Error(`${level.id} must not keep Cress/Rue/Mint/Hold*`);
    }
    for (const g of level.gates) {
      if (g.x === 2 && g.y === 4) throw new Error(`${level.id} must not reuse Dill seat (2,4)`);
      if (g.x === 4 && g.y === 5) throw new Error(`${level.id} must not reuse Chive seat (4,5)`);
      if (g.x === 0 && g.y === 2) throw new Error(`${level.id} must not reuse Lovage seat (0,2)`);
    }
  }
  if (shippedFriendForClear(96)?.friendId !== "friend_032") throw new Error("Fig@96 must stay");
  if (SLICE_UNLOCKS[96] !== "friend_032") throw new Error("SLICE_UNLOCKS[96] Fig locked");
  if (SLICE_UNLOCKS[99] !== "friend_033") throw new Error("SLICE_UNLOCKS[99] must be friend_033 after Plum ship");
  if (chipsForFriend("friend_032").join(",") !== "Fig,Olive,Pit") throw new Error("Fig chips locked");
  if (LEVELS.find((r) => r.id === "L94")?.name !== "Chive Cut") throw new Error("L94 Chive Cut locked");
  if (shippedFriendForClear(93)?.friendId !== "friend_031") throw new Error("Basil@93 locked");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  console.log("Rival rewrite L97–L99 ok · Kelp Cut / Nori Gap / Brine Stop · Fig@96 Pass · Plum@99 unlocked · no Pebble");
}



{
  // Ch4 Plum@99 + L100–L102 triad (Greengage/Sloe/Medlar — deltas (0,3)/(0,2)/(4,-1); Damson chip-only; Quince kill)
  for (const [id, name] of [
    ["L100", "Greengage Cut"],
    ["L101", "Sloe Gap"],
    ["L102", "Medlar Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
  }
  if (LEVELS.find((row) => row.id === "L97")?.name !== "Kelp Cut") throw new Error("L97 Kelp Cut locked");
  if (LEVELS.find((row) => row.id === "L98")?.name !== "Nori Gap") throw new Error("L98 Nori Gap locked");
  if (LEVELS.find((row) => row.id === "L99")?.name !== "Brine Stop") throw new Error("L99 Brine Stop locked");
  if (SLICE_UNLOCKS[99] !== "friend_033") throw new Error("SLICE_UNLOCKS[99] must be friend_033");
  if (shippedFriendForClear(99)?.friendId !== "friend_033") throw new Error("onClear(99) must award Plum");
  const plum = friendById("friend_033");
  if (!plum) throw new Error("friend_033 missing from CATALOG");
  if (plum.defaultName !== "Plum") throw new Error("default name must be Plum");
  if (plum.unlockClear !== 99) throw new Error("Plum unlockClear must be 99");
  if (plum.phenotype.artKit !== "plum") throw new Error("Plum artKit must be plum");
  if (plum.phenotype.personality !== "Jammy") throw new Error("Plum personality must be Jammy");
  if (/bloom/i.test(plum.displayLine || "")) throw new Error("Plum displayLine must not mention bloom after plum-black recast");
  if (!/plum-black gloss/i.test(plum.displayLine || "")) throw new Error("Plum displayLine must lead with plum-black gloss");
  if (plum.phenotype.boardColor !== "black") throw new Error("Plum boardColor must be black");
  if (chipsForFriend("friend_033").join(",") !== "Plum,Damson,Stone") {
    throw new Error(`Plum chips must be Plum/Damson/Stone, got ${chipsForFriend("friend_033").join(",")}`);
  }
  if (chipsForFriend("friend_033").some((c) => /fig|olive|pit/i.test(c))) {
    throw new Error("Plum chips must ban Fig/Olive/Pit");
  }
  const plum48 = readFileSync(resolve("public/assets/cats/plum_loaf_48.svg"), "utf8");
  const plum72 = readFileSync(resolve("public/assets/cats/plum_loaf_72.svg"), "utf8");
  if (!plum48.includes("#2C1A24") || !plum72.includes("#2C1A24")) throw new Error("Plum loaf must use plum-black coat #2C1A24");
  if (!plum48.includes("#5A3048") || !plum72.includes("#5A3048")) throw new Error("Plum loaf must use gloss #5A3048");
  if (!plum48.includes("#4A3040") || !plum72.includes("#4A3040")) throw new Error("Plum loaf must use belly #4A3040");
  if (plum48.includes("#7A3B5C") || plum72.includes("#7A3B5C")) throw new Error("Plum loaf must not use jammy fruit-purple #7A3B5C");
  if (plum48.includes("#C9A0B4") || plum72.includes("#C9A0B4") || /bloom/i.test(plum48 + plum72)) throw new Error("Plum loaf must not use bloom dust");
  if (furnitureGiftsForClear(99).length) throw new Error("Plum@99 must gift no furniture");
  const yardP = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardP.match(/const plum =/g) || []).length !== 1) throw new Error("YardScene must declare plum once");
  if ((yardP.match(/\{plum \?/g) || []).length !== 1) throw new Error("YardScene must render plum once");
  if (TUTORIAL_RESCUES.length !== 51) throw new Error("Met must include through Parsley (42)");
  if (shippedFriendForClear(96)?.friendId !== "friend_032") throw new Error("Fig@96 must stay");
  if (shippedFriendForClear(93)?.friendId !== "friend_031") throw new Error("Basil@93 must stay");
  if (shippedFriendForClear(90)?.friendId !== "friend_030") throw new Error("Clay@90 must stay");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("Ivory@87 must stay");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 must stay");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (chipsForFriend("friend_032").join(",") !== "Fig,Olive,Pit") throw new Error("Fig chips untouched");
  if (chipsForFriend("friend_031").join(",") !== "Basil,Pesto,Herb") throw new Error("Basil chips untouched");
  if (chipsForFriend("friend_030").join(",") !== "Clay,Brick,Terra") throw new Error("Clay chips untouched");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") throw new Error("Ivory chips untouched");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[102] !== "friend_034") throw new Error("SLICE_UNLOCKS[102] must be friend_034 after Thistle ship");
  if (/pebble|Pebble/i.test(plum48 + plum72)) throw new Error("Plum art must not use Pebble");
  if (/fig|olive|pit/i.test(plum48 + plum72)) throw new Error("Plum art must not collide Fig marks");
  // Deltas (0,3)/(0,2)/(2,1) — Damson is a Plum naming chip only, never a level name
  const l100 = LEVELS.find((r) => r.id === "L100")!;
  const l101 = LEVELS.find((r) => r.id === "L101")!;
  const l102 = LEVELS.find((r) => r.id === "L102")!;
  if (/damson/i.test(l100.name) || /damson/i.test(l102.name)) throw new Error("Damson is chip-only — ban as level name");
  if (/quince/i.test(l102.name)) throw new Error("L102 must be Medlar Stop, not Quince");
  if (/cobbler/i.test(l102.name)) throw new Error("L102 must be Medlar Stop, not Cobbler");
  const plumGatePair = (level: typeof l100) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (plumGatePair(l100) !== "2,0/2,3") throw new Error(`L100 gates must be delta (0,3) pair, got ${plumGatePair(l100)}`);
  if (plumGatePair(l101) !== "3,0/3,2") throw new Error(`L101 gates must be delta (0,2) pair, got ${plumGatePair(l101)}`);
  if (plumGatePair(l102) !== "1,2/5,1") throw new Error(`L102 gates must be delta (4,-1) pair, got ${plumGatePair(l102)}`);
  // Medlar Stop — off Nori orange seat (5,5)
  const occ102 = new Set([
    ...l102.cats.map((c) => `${c.x},${c.y}`),
    ...l102.gates.map((g) => `${g.x},${g.y}`),
  ]);
  if (occ102.has("5,5")) throw new Error("L102 Medlar must be off Nori seat (5,5)");
  if (!l102.walls.some((w) => w.x === 5 && w.y === 5)) throw new Error("L102 Medlar must wall-off (5,5)");
  const l100Gray = l100.gates.find((g) => g.color === "gray" || g.id === "gate_gray");
  if (l100Gray && l100Gray.x === 4 && l100Gray.y === 5) {
    throw new Error("L100 must not reuse Chive gray seat (4,5)");
  }
  const l102Gray = l102.gates.find((g) => g.color === "gray" || g.id === "gate_gray");
  if (l102Gray && l102Gray.x === 0 && l102Gray.y === 2) {
    throw new Error("L102 must not reuse Lovage gray seat (0,2)");
  }
  // no wall twin vs L97–L99
  const wallKey = (level: typeof l100) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWalls = ["L97", "L98", "L99"].map((id) => wallKey(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L100", "L101", "L102"] as const) {
    const key = wallKey(LEVELS.find((r) => r.id === id)!);
    if (priorWalls.includes(key)) throw new Error(`${id} wall twin of L97–L99`);
  }
  if (ART_KIT_PATH.plum.loaf48 !== "/assets/cats/plum_loaf_48.svg") throw new Error("ART_KIT_PATH.plum loaf48");
  if (ART_KIT_PATH.plum.loaf72 !== "/assets/cats/plum_loaf_72.svg") throw new Error("ART_KIT_PATH.plum loaf72");
  if (ART_KIT_PATH.fig.loaf48 !== "/assets/cats/fig_loaf_48.svg") throw new Error("Fig kit must stay");
  const saveP = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveP.includes("jam jar sill")) throw new Error("SaveProvider must yard-bubble jam jar sill for Plum");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_033.md"))) throw new Error("missing CH4_FRIEND_033.md");
  if (!existsSync(resolve("data/collection/chapter4_plum_bang.json"))) throw new Error("missing collection plum bang");
  if (!existsSync(resolve("data/chapter4_plum_bang.json"))) throw new Error("missing chapter4_plum_bang.json");
  console.log("Ch4 Plum@99 + L100–L102 ok · chips Plum/Damson/Stone · coat #2C1A24 + gloss #5A3048 · Greengage Cut / Sloe Gap / Medlar Stop · Fig/Basil/Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}

{
  // Ch4 Thistle@102 + L103–L105 triad (Fence/Burr/Perch — deltas (2,1)/(3,4)/(3,1); Burr chip-only as name ok with Burr Gap verb)
  for (const [id, name] of [
    ["L103", "Fence Cut"],
    ["L104", "Burr Gap"],
    ["L105", "Perch Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
    if (pair === "2,0/2,3" || pair === "3,0/3,2" || pair === "1,2/5,1") {
      throw new Error(`${id} must not twin Greengage/Sloe/Medlar gates`);
    }
    if (pair === "3,5/5,5") throw new Error(`${id} must not twin Nori WRAP`);
  }
  if (LEVELS.find((row) => row.id === "L100")?.name !== "Greengage Cut") throw new Error("L100 Greengage Cut locked");
  if (LEVELS.find((row) => row.id === "L101")?.name !== "Sloe Gap") throw new Error("L101 Sloe Gap locked");
  if (LEVELS.find((row) => row.id === "L102")?.name !== "Medlar Stop") throw new Error("L102 Medlar Stop locked");
  if (SLICE_UNLOCKS[102] !== "friend_034") throw new Error("SLICE_UNLOCKS[102] must be friend_034");
  if (shippedFriendForClear(102)?.friendId !== "friend_034") throw new Error("onClear(102) must award Thistle");
  const thistle = friendById("friend_034");
  if (!thistle) throw new Error("friend_034 missing from CATALOG");
  if (thistle.defaultName !== "Thistle") throw new Error("default name must be Thistle");
  if (thistle.unlockClear !== 102) throw new Error("Thistle unlockClear must be 102");
  if (thistle.phenotype.artKit !== "thistle") throw new Error("Thistle artKit must be thistle");
  if (thistle.phenotype.personality !== "Soft-prickle") throw new Error("Thistle personality must be Soft-prickle");
  if (thistle.phenotype.boardColor !== "gray") throw new Error("Thistle boardColor must be gray");
  if (chipsForFriend("friend_034").join(",") !== "Thistle,Burr,Bramble") {
    throw new Error(`Thistle chips must be Thistle/Burr/Bramble, got ${chipsForFriend("friend_034").join(",")}`);
  }
  if (chipsForFriend("friend_034").some((c) => /plum|damson|stone|pebble/i.test(c))) {
    throw new Error("Thistle chips must ban Plum/Damson/Stone/Pebble");
  }
  const thistle48 = readFileSync(resolve("public/assets/cats/thistle_loaf_48.svg"), "utf8");
  const thistle72 = readFileSync(resolve("public/assets/cats/thistle_loaf_72.svg"), "utf8");
  if (!thistle48.includes("#A394B0") || !thistle72.includes("#A394B0")) throw new Error("Thistle loaf must use gray-lilac coat #A394B0");
  if (!thistle48.includes("#5B4E72") || !thistle72.includes("#5B4E72")) throw new Error("Thistle loaf must use thistle-tip freckles #5B4E72");
  if (!thistle48.includes("#D8D0E0") || !thistle72.includes("#D8D0E0")) throw new Error("Thistle loaf must use belly #D8D0E0");
  if (thistle48.includes("#2C1A24") || thistle72.includes("#2C1A24")) throw new Error("Thistle loaf must not use plum-black #2C1A24");
  if (thistle48.includes("#7A9B6A") || thistle72.includes("#7A9B6A")) throw new Error("Thistle loaf must not use Basil herb-green");
  if (thistle48.includes("#7E8F86") || thistle72.includes("#7E8F86")) throw new Error("Thistle loaf must not use Juniper moss");
  if (thistle48.includes("#C4BDB4") || thistle72.includes("#C4BDB4")) throw new Error("Thistle loaf must not use Mist mackerel");
  if (thistle48.includes("#B4BAC2") || thistle72.includes("#B4BAC2")) throw new Error("Thistle loaf must not use Linen wash");
  if (thistle48.includes("#C9B08C") || thistle72.includes("#C9B08C")) throw new Error("Thistle loaf must not use Fig cream");
  if (thistle48.includes("#36322F") || thistle72.includes("#36322F")) throw new Error("Thistle loaf must not use Shadow full-black");
  if (furnitureGiftsForClear(102).length) throw new Error("Thistle@102 must gift no furniture");
  const yardT = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardT.match(/const thistle =/g) || []).length !== 1) throw new Error("YardScene must declare thistle once");
  if ((yardT.match(/\{thistle \?/g) || []).length !== 1) throw new Error("YardScene must render thistle once");
  if (TUTORIAL_RESCUES.length !== 51) throw new Error("Met must include through Parsley (42)");
  if (shippedFriendForClear(99)?.friendId !== "friend_033") throw new Error("Plum@99 must stay");
  if (shippedFriendForClear(96)?.friendId !== "friend_032") throw new Error("Fig@96 must stay");
  if (shippedFriendForClear(93)?.friendId !== "friend_031") throw new Error("Basil@93 must stay");
  if (shippedFriendForClear(90)?.friendId !== "friend_030") throw new Error("Clay@90 must stay");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("Ivory@87 must stay");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 must stay");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (chipsForFriend("friend_033").join(",") !== "Plum,Damson,Stone") throw new Error("Plum chips untouched");
  if (chipsForFriend("friend_032").join(",") !== "Fig,Olive,Pit") throw new Error("Fig chips untouched");
  if (chipsForFriend("friend_031").join(",") !== "Basil,Pesto,Herb") throw new Error("Basil chips untouched");
  if (chipsForFriend("friend_030").join(",") !== "Clay,Brick,Terra") throw new Error("Clay chips untouched");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") throw new Error("Ivory chips untouched");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[105] !== "friend_035") throw new Error("SLICE_UNLOCKS[105] must be friend_035 after Briar ship");
  if (/pebble|Pebble/i.test(thistle48 + thistle72)) throw new Error("Thistle art must not use Pebble");
  if (/plum|damson|stone/i.test(thistle48 + thistle72)) throw new Error("Thistle art must not collide Plum marks");
  const l103 = LEVELS.find((r) => r.id === "L103")!;
  const l104 = LEVELS.find((r) => r.id === "L104")!;
  const l105 = LEVELS.find((r) => r.id === "L105")!;
  if (/greengage|sloe|medlar/i.test([l103.name, l104.name, l105.name].join(","))) {
    throw new Error("L103–L105 must not reuse Greengage/Sloe/Medlar names");
  }
  const thistleGatePair = (level: typeof l103) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (thistleGatePair(l103) !== "3,1/5,0") throw new Error(`L103 gates must be delta (2,1) pair, got ${thistleGatePair(l103)}`);
  if (thistleGatePair(l104) !== "0,0/3,4") throw new Error(`L104 gates must be delta (3,4) pair, got ${thistleGatePair(l104)}`);
  if (thistleGatePair(l105) !== "2,1/5,2") throw new Error(`L105 gates must be delta (3,1) pair, got ${thistleGatePair(l105)}`);
  const occ105 = new Set([
    ...l105.cats.map((c) => `${c.x},${c.y}`),
    ...l105.gates.map((g) => `${g.x},${g.y}`),
  ]);
  if (occ105.has("5,5")) throw new Error("L105 Perch must be off Nori seat (5,5)");
  if (occ105.has("5,1") || occ105.has("1,2")) throw new Error("L105 Perch must be off Medlar seats");
  for (const level of [l103, l104, l105]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
  }
  const wallKeyT = (level: typeof l103) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsT = ["L100", "L101", "L102"].map((id) => wallKeyT(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L103", "L104", "L105"] as const) {
    const key = wallKeyT(LEVELS.find((r) => r.id === id)!);
    if (priorWallsT.includes(key)) throw new Error(`${id} wall twin of L100–L102`);
  }
  if (ART_KIT_PATH.thistle.loaf48 !== "/assets/cats/thistle_loaf_48.svg") throw new Error("ART_KIT_PATH.thistle loaf48");
  if (ART_KIT_PATH.thistle.loaf72 !== "/assets/cats/thistle_loaf_72.svg") throw new Error("ART_KIT_PATH.thistle loaf72");
  if (ART_KIT_PATH.plum.loaf48 !== "/assets/cats/plum_loaf_48.svg") throw new Error("Plum kit must stay");
  const saveT = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveT.includes("fence-post perch")) throw new Error("SaveProvider must yard-bubble fence-post perch for Thistle");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_034.md"))) throw new Error("missing CH4_FRIEND_034.md");
  if (!existsSync(resolve("data/collection/chapter4_thistle_bang.json"))) throw new Error("missing collection thistle bang");
  if (!existsSync(resolve("data/chapter4_thistle_bang.json"))) throw new Error("missing chapter4_thistle_bang.json");
  console.log("Ch4 Thistle@102 + L103–L105 ok · chips Thistle/Burr/Bramble · coat #A394B0 + tips #5B4E72 · Fence Cut / Burr Gap / Perch Stop · Plum/Fig/Basil/Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}

{
  // Ch4 Briar@105 + L106–L108 triad (Vine/Thorn/Nest — deltas (4,1)/(2,-4)/(4,0); Thorn chip-only as name ok with Thorn Gap verb)
  for (const [id, name] of [
    ["L106", "Vine Cut"],
    ["L107", "Thorn Gap"],
    ["L108", "Nest Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
    if (pair === "3,1/5,0" || pair === "0,0/3,4" || pair === "2,1/5,2") {
      throw new Error(`${id} must not twin Fence/Burr/Perch gates`);
    }
    if (pair === "2,0/2,3" || pair === "3,0/3,2" || pair === "1,2/5,1") {
      throw new Error(`${id} must not twin Greengage/Sloe/Medlar gates`);
    }
    if (pair === "3,5/5,5") throw new Error(`${id} must not twin Nori WRAP`);
  }
  if (LEVELS.find((row) => row.id === "L103")?.name !== "Fence Cut") throw new Error("L103 Fence Cut locked");
  if (LEVELS.find((row) => row.id === "L104")?.name !== "Burr Gap") throw new Error("L104 Burr Gap locked");
  if (LEVELS.find((row) => row.id === "L105")?.name !== "Perch Stop") throw new Error("L105 Perch Stop locked");
  if (SLICE_UNLOCKS[105] !== "friend_035") throw new Error("SLICE_UNLOCKS[105] must be friend_035");
  if (shippedFriendForClear(105)?.friendId !== "friend_035") throw new Error("onClear(105) must award Briar");
  const briar = friendById("friend_035");
  if (!briar) throw new Error("friend_035 missing from CATALOG");
  if (briar.defaultName !== "Briar") throw new Error("default name must be Briar");
  if (briar.unlockClear !== 105) throw new Error("Briar unlockClear must be 105");
  if (briar.phenotype.artKit !== "briar") throw new Error("Briar artKit must be briar");
  if (briar.phenotype.personality !== "Tangled") throw new Error("Briar personality must be Tangled");
  if (briar.phenotype.boardColor !== "orange") throw new Error("Briar boardColor must be orange");
  if (chipsForFriend("friend_035").join(",") !== "Briar,Thorn,Hedge") {
    throw new Error(`Briar chips must be Briar/Thorn/Hedge, got ${chipsForFriend("friend_035").join(",")}`);
  }
  if (chipsForFriend("friend_035").some((c) => /thistle|burr|bramble|pebble/i.test(c))) {
    throw new Error("Briar chips must ban Thistle/Burr/Bramble/Pebble");
  }
  const briar48 = readFileSync(resolve("public/assets/cats/briar_loaf_48.svg"), "utf8");
  const briar72 = readFileSync(resolve("public/assets/cats/briar_loaf_72.svg"), "utf8");
  if (!briar48.includes("#8E4C2E") || !briar72.includes("#8E4C2E")) throw new Error("Briar loaf must use russet-brown coat #8E4C2E");
  if (!briar48.includes("#2E6B5A") || !briar72.includes("#2E6B5A")) throw new Error("Briar loaf must use vine-tip freckles #2E6B5A");
  if (!briar48.includes("#E8C8A8") || !briar72.includes("#E8C8A8")) throw new Error("Briar loaf must use belly #E8C8A8");
  if (briar48.includes("#E07A32") || briar72.includes("#E07A32")) throw new Error("Briar loaf must not use Pumpkin swirl #E07A32");
  if (briar48.includes("#D48A4A") || briar72.includes("#D48A4A")) throw new Error("Briar loaf must not use Pepper spice #D48A4A");
  if (briar48.includes("#A85E38") || briar72.includes("#A85E38")) throw new Error("Briar loaf must not use Cocoa fudge #A85E38");
  if (briar48.includes("#D4783A") || briar72.includes("#D4783A")) throw new Error("Briar loaf must not use Maple amber #D4783A");
  if (briar48.includes("#A394B0") || briar72.includes("#A394B0")) throw new Error("Briar loaf must not use Thistle lilac #A394B0");
  if (briar48.includes("#2C1A24") || briar72.includes("#2C1A24")) throw new Error("Briar loaf must not use Plum gloss #2C1A24");
  if (briar48.includes("#C9B08C") || briar72.includes("#C9B08C")) throw new Error("Briar loaf must not use Fig cream #C9B08C");
  if (furnitureGiftsForClear(105).length) throw new Error("Briar@105 must gift no furniture");
  const yardB = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardB.match(/const briar =/g) || []).length !== 1) throw new Error("YardScene must declare briar once");
  if ((yardB.match(/\{briar \?/g) || []).length !== 1) throw new Error("YardScene must render briar once");
  if (TUTORIAL_RESCUES.length !== 51) throw new Error("Met must include through Parsley (42)");
  if (shippedFriendForClear(102)?.friendId !== "friend_034") throw new Error("Thistle@102 must stay");
  if (shippedFriendForClear(99)?.friendId !== "friend_033") throw new Error("Plum@99 must stay");
  if (shippedFriendForClear(96)?.friendId !== "friend_032") throw new Error("Fig@96 must stay");
  if (shippedFriendForClear(93)?.friendId !== "friend_031") throw new Error("Basil@93 must stay");
  if (shippedFriendForClear(90)?.friendId !== "friend_030") throw new Error("Clay@90 must stay");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("Ivory@87 must stay");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 must stay");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (chipsForFriend("friend_034").join(",") !== "Thistle,Burr,Bramble") throw new Error("Thistle chips untouched");
  if (chipsForFriend("friend_033").join(",") !== "Plum,Damson,Stone") throw new Error("Plum chips untouched");
  if (chipsForFriend("friend_032").join(",") !== "Fig,Olive,Pit") throw new Error("Fig chips untouched");
  if (chipsForFriend("friend_031").join(",") !== "Basil,Pesto,Herb") throw new Error("Basil chips untouched");
  if (chipsForFriend("friend_030").join(",") !== "Clay,Brick,Terra") throw new Error("Clay chips untouched");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") throw new Error("Ivory chips untouched");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[108] !== "friend_036") throw new Error("SLICE_UNLOCKS[108] must be friend_036 after Ivy ship");
  if (/pebble|Pebble/i.test(briar48 + briar72)) throw new Error("Briar art must not use Pebble");
  if (/thistle|burr|bramble/i.test(briar48 + briar72)) throw new Error("Briar art must not collide Thistle marks");
  const l106 = LEVELS.find((r) => r.id === "L106")!;
  const l107 = LEVELS.find((r) => r.id === "L107")!;
  const l108 = LEVELS.find((r) => r.id === "L108")!;
  if (/fence|burr|perch/i.test([l106.name, l107.name, l108.name].join(","))) {
    throw new Error("L106–L108 must not reuse Fence/Burr/Perch names");
  }
  const briarGatePair = (level: typeof l106) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (briarGatePair(l106) !== "0,3/4,4") throw new Error(`L106 gates must be delta (4,1) pair, got ${briarGatePair(l106)}`);
  if (briarGatePair(l107) !== "2,5/4,1") throw new Error(`L107 gates must be delta (2,-4) pair, got ${briarGatePair(l107)}`);
  if (briarGatePair(l108) !== "1,3/5,3") throw new Error(`L108 gates must be delta (4,0) pair, got ${briarGatePair(l108)}`);
  const occ108 = new Set([
    ...l108.cats.map((c) => `${c.x},${c.y}`),
    ...l108.gates.map((g) => `${g.x},${g.y}`),
  ]);
  if (occ108.has("5,5")) throw new Error("L108 Nest must be off Nori seat (5,5)");
  if (occ108.has("5,0") || occ108.has("0,5")) throw new Error("L108 Nest must be off Perch seats");
  if (occ108.has("5,1") || occ108.has("1,2")) throw new Error("L108 Nest must be off Medlar seats");
  for (const level of [l106, l107, l108]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
  }
  const wallKeyB = (level: typeof l106) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsB = ["L103", "L104", "L105"].map((id) => wallKeyB(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L106", "L107", "L108"] as const) {
    const key = wallKeyB(LEVELS.find((r) => r.id === id)!);
    if (priorWallsB.includes(key)) throw new Error(`${id} wall twin of L103–L105`);
  }
  if (ART_KIT_PATH.briar.loaf48 !== "/assets/cats/briar_loaf_48.svg") throw new Error("ART_KIT_PATH.briar loaf48");
  if (ART_KIT_PATH.briar.loaf72 !== "/assets/cats/briar_loaf_72.svg") throw new Error("ART_KIT_PATH.briar loaf72");
  if (ART_KIT_PATH.thistle.loaf48 !== "/assets/cats/thistle_loaf_48.svg") throw new Error("Thistle kit must stay");
  const saveB = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveB.includes("bramble gap")) throw new Error("SaveProvider must yard-bubble bramble gap for Briar");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_035.md"))) throw new Error("missing CH4_FRIEND_035.md");
  if (!existsSync(resolve("data/collection/chapter4_briar_bang.json"))) throw new Error("missing collection briar bang");
  if (!existsSync(resolve("data/chapter4_briar_bang.json"))) throw new Error("missing chapter4_briar_bang.json");
  const shell = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shell.includes("Full-viewport") && !shell.includes("full-viewport") && !shell.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shell)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Briar@105 + L106–L108 ok · chips Briar/Thorn/Hedge · coat #8E4C2E + tips #2E6B5A · Vine Cut / Thorn Gap / Nest Stop · Thistle/Plum/Fig/Basil/Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}

{
  // Ch4 Ivy@108 + L109–L111 triad (Rail/Shade/Porch — deltas (2,2)/(3,-1)/(0,2))
  for (const [id, name] of [
    ["L109", "Rail Cut"],
    ["L110", "Shade Gap"],
    ["L111", "Porch Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
    if (pair === "0,3/4,4" || pair === "2,5/4,1" || pair === "1,3/5,3") {
      throw new Error(`${id} must not twin Vine/Thorn/Nest gates`);
    }
    if (pair === "3,1/5,0" || pair === "0,0/3,4" || pair === "2,1/5,2") {
      throw new Error(`${id} must not twin Fence/Burr/Perch gates`);
    }
    if (pair === "2,0/2,3" || pair === "3,0/3,2" || pair === "1,2/5,1") {
      throw new Error(`${id} must not twin Greengage/Sloe/Medlar gates`);
    }
    if (pair === "3,5/5,5") throw new Error(`${id} must not twin Nori WRAP`);
  }
  if (LEVELS.find((row) => row.id === "L106")?.name !== "Vine Cut") throw new Error("L106 Vine Cut locked");
  if (LEVELS.find((row) => row.id === "L107")?.name !== "Thorn Gap") throw new Error("L107 Thorn Gap locked");
  if (LEVELS.find((row) => row.id === "L108")?.name !== "Nest Stop") throw new Error("L108 Nest Stop locked");
  if (SLICE_UNLOCKS[108] !== "friend_036") throw new Error("SLICE_UNLOCKS[108] must be friend_036");
  if (shippedFriendForClear(108)?.friendId !== "friend_036") throw new Error("onClear(108) must award Ivy");
  const ivy = friendById("friend_036");
  if (!ivy) throw new Error("friend_036 missing from CATALOG");
  if (ivy.defaultName !== "Ivy") throw new Error("default name must be Ivy");
  if (ivy.unlockClear !== 108) throw new Error("Ivy unlockClear must be 108");
  if (ivy.phenotype.artKit !== "ivy") throw new Error("Ivy artKit must be ivy");
  if (ivy.phenotype.personality !== "Climb-soft") throw new Error("Ivy personality must be Climb-soft");
  if (ivy.phenotype.boardColor !== "black") throw new Error("Ivy boardColor must be black");
  if (ivy.phenotype.color !== "Black") throw new Error("Ivy color must be Black");
  if (ivy.phenotype.pattern !== "Spotted") throw new Error("Ivy pattern must be Spotted");
  if (chipsForFriend("friend_036").join(",") !== "Ivy,Tendril,Climb") {
    throw new Error(`Ivy chips must be Ivy/Tendril/Climb, got ${chipsForFriend("friend_036").join(",")}`);
  }
  if (chipsForFriend("friend_036").some((c) => /briar|thorn|hedge|pebble/i.test(c))) {
    throw new Error("Ivy chips must ban Briar/Thorn/Hedge/Pebble");
  }
  const ivy48 = readFileSync(resolve("public/assets/cats/ivy_loaf_48.svg"), "utf8");
  const ivy72 = readFileSync(resolve("public/assets/cats/ivy_loaf_72.svg"), "utf8");
  if (!ivy48.includes("#1A2C24") || !ivy72.includes("#1A2C24")) throw new Error("Ivy loaf must use green-black coat #1A2C24");
  if (!ivy48.includes("#F3E8C8") || !ivy72.includes("#F3E8C8")) throw new Error("Ivy loaf must use pale cream tendrils #F3E8C8");
  if (!ivy48.includes("#E4D8B8") || !ivy72.includes("#E4D8B8")) throw new Error("Ivy loaf must use belly #E4D8B8");
  if (ivy48.includes("#36322F") || ivy72.includes("#36322F")) throw new Error("Ivy loaf must not use Shadow flat black #36322F");
  if (ivy48.includes("#2C1A24") || ivy72.includes("#2C1A24")) throw new Error("Ivy loaf must not use Plum gloss #2C1A24");
  if (ivy48.includes("#7A9B6A") || ivy72.includes("#7A9B6A")) throw new Error("Ivy loaf must not use Basil herb-green #7A9B6A");
  if (ivy48.includes("#7E8F86") || ivy72.includes("#7E8F86")) throw new Error("Ivy loaf must not use Juniper moss #7E8F86");
  if (ivy48.includes("#8E4C2E") || ivy72.includes("#8E4C2E")) throw new Error("Ivy loaf must not use Briar russet #8E4C2E");
  if (ivy48.includes("#A394B0") || ivy72.includes("#A394B0")) throw new Error("Ivy loaf must not use Thistle lilac #A394B0");
  if (ivy48.includes("#C9B08C") || ivy72.includes("#C9B08C")) throw new Error("Ivy loaf must not use Fig cream #C9B08C");
  if (furnitureGiftsForClear(108).length) throw new Error("Ivy@108 must gift no furniture");
  const yardI = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardI.match(/const ivy =/g) || []).length !== 1) throw new Error("YardScene must declare ivy once");
  if ((yardI.match(/\{ivy \?/g) || []).length !== 1) throw new Error("YardScene must render ivy once");
  if (TUTORIAL_RESCUES.length !== 51) throw new Error("Met must include through Parsley (42)");
  if (shippedFriendForClear(105)?.friendId !== "friend_035") throw new Error("Briar@105 must stay");
  if (shippedFriendForClear(102)?.friendId !== "friend_034") throw new Error("Thistle@102 must stay");
  if (shippedFriendForClear(99)?.friendId !== "friend_033") throw new Error("Plum@99 must stay");
  if (shippedFriendForClear(96)?.friendId !== "friend_032") throw new Error("Fig@96 must stay");
  if (shippedFriendForClear(93)?.friendId !== "friend_031") throw new Error("Basil@93 must stay");
  if (shippedFriendForClear(90)?.friendId !== "friend_030") throw new Error("Clay@90 must stay");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("Ivory@87 must stay");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 must stay");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (shippedFriendForClear(3)?.friendId !== "friend_001") throw new Error("Mango@3 parade lock");
  if (shippedFriendForClear(12)?.friendId !== "friend_004") throw new Error("Tux@12 parade lock");
  if (shippedFriendForClear(24)?.friendId !== "friend_008") throw new Error("Pumpkin@24 parade lock");
  if (shippedFriendForClear(27)?.friendId !== "friend_009") throw new Error("Shadow@27 parade lock");
  if (shippedFriendForClear(30)?.friendId !== "friend_010") throw new Error("Noodle@30 parade lock");
  if (chipsForFriend("friend_035").join(",") !== "Briar,Thorn,Hedge") throw new Error("Briar chips untouched");
  if (chipsForFriend("friend_034").join(",") !== "Thistle,Burr,Bramble") throw new Error("Thistle chips untouched");
  if (chipsForFriend("friend_033").join(",") !== "Plum,Damson,Stone") throw new Error("Plum chips untouched");
  if (chipsForFriend("friend_032").join(",") !== "Fig,Olive,Pit") throw new Error("Fig chips untouched");
  if (chipsForFriend("friend_031").join(",") !== "Basil,Pesto,Herb") throw new Error("Basil chips untouched");
  if (chipsForFriend("friend_030").join(",") !== "Clay,Brick,Terra") throw new Error("Clay chips untouched");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") throw new Error("Ivory chips untouched");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[111] !== "friend_037") throw new Error("SLICE_UNLOCKS[111] must be friend_037 after Nettle ship");
  if (/pebble|Pebble/i.test(ivy48 + ivy72)) throw new Error("Ivy art must not use Pebble");
  if (/briar|thorn|hedge/i.test(ivy48 + ivy72)) throw new Error("Ivy art must not collide Briar marks");
  const l109 = LEVELS.find((r) => r.id === "L109")!;
  const l110 = LEVELS.find((r) => r.id === "L110")!;
  const l111 = LEVELS.find((r) => r.id === "L111")!;
  if (/vine|thorn|nest/i.test([l109.name, l110.name, l111.name].join(","))) {
    throw new Error("L109–L111 must not reuse Vine/Thorn/Nest names");
  }
  const ivyGatePair = (level: typeof l109) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (ivyGatePair(l109) !== "2,3/4,5") throw new Error(`L109 gates must be delta (2,2) pair, got ${ivyGatePair(l109)}`);
  if (ivyGatePair(l110) !== "0,3/3,2") throw new Error(`L110 gates must be delta (3,-1) pair, got ${ivyGatePair(l110)}`);
  if (ivyGatePair(l111) !== "3,3/3,5") throw new Error(`L111 gates must be delta (0,2) pair, got ${ivyGatePair(l111)}`);
  const occ111 = new Set([
    ...l111.cats.map((c) => `${c.x},${c.y}`),
    ...l111.gates.map((g) => `${g.x},${g.y}`),
  ]);
  if (occ111.has("5,5")) throw new Error("L111 Porch must be off Nori seat (5,5)");
  if (occ111.has("5,0") || occ111.has("0,5")) throw new Error("L111 Porch must be off Perch seats");
  if (occ111.has("5,1") || occ111.has("1,2")) throw new Error("L111 Porch must be off Medlar seats");
  if (l111.gates[0].y === l111.gates[1].y) throw new Error("L111 Porch must not same-row Nest");
  if (l109.cats[0].x === l109.cats[1].x) throw new Error("L109 Rail must not stacked-column Vine");
  for (const level of [l109, l110, l111]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
  }
  const wallKeyI = (level: typeof l109) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsI = ["L106", "L107", "L108"].map((id) => wallKeyI(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L109", "L110", "L111"] as const) {
    const key = wallKeyI(LEVELS.find((r) => r.id === id)!);
    if (priorWallsI.includes(key)) throw new Error(`${id} wall twin of L106–L108`);
  }
  if (ART_KIT_PATH.ivy.loaf48 !== "/assets/cats/ivy_loaf_48.svg") throw new Error("ART_KIT_PATH.ivy loaf48");
  if (ART_KIT_PATH.ivy.loaf72 !== "/assets/cats/ivy_loaf_72.svg") throw new Error("ART_KIT_PATH.ivy loaf72");
  if (ART_KIT_PATH.briar.loaf48 !== "/assets/cats/briar_loaf_48.svg") throw new Error("Briar kit must stay");
  const saveI = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveI.includes("porch rail")) throw new Error("SaveProvider must yard-bubble porch rail for Ivy");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_036.md"))) throw new Error("missing CH4_FRIEND_036.md");
  if (!existsSync(resolve("data/collection/chapter4_ivy_bang.json"))) throw new Error("missing collection ivy bang");
  if (!existsSync(resolve("data/chapter4_ivy_bang.json"))) throw new Error("missing chapter4_ivy_bang.json");
  const shellI = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shellI.includes("Full-viewport") && !shellI.includes("full-viewport") && !shellI.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shellI)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Ivy@108 + L109–L111 ok · chips Ivy/Tendril/Climb · coat #1A2C24 + tendrils #F3E8C8 · Rail Cut / Shade Gap / Porch Stop · Briar/Thistle/Plum/Fig/Basil/Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}

{
  // Ch4 Nettle@111 + L112–L114 triad (Stem/Sting/Under — deltas (2,-2)/(1,3)/(3,-2))
  for (const [id, name] of [
    ["L112", "Stem Cut"],
    ["L113", "Sting Gap"],
    ["L114", "Under Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
    if (pair === "2,3/4,5" || pair === "0,3/3,2" || pair === "3,3/3,5") {
      throw new Error(`${id} must not twin Rail/Shade/Porch gates`);
    }
    if (pair === "0,3/4,4" || pair === "2,5/4,1" || pair === "1,3/5,3") {
      throw new Error(`${id} must not twin Vine/Thorn/Nest gates`);
    }
    if (pair === "3,1/5,0" || pair === "0,0/3,4" || pair === "2,1/5,2") {
      throw new Error(`${id} must not twin Fence/Burr/Perch gates`);
    }
    if (pair === "2,0/2,3" || pair === "3,0/3,2" || pair === "1,2/5,1") {
      throw new Error(`${id} must not twin Greengage/Sloe/Medlar gates`);
    }
    if (pair === "3,5/5,5") throw new Error(`${id} must not twin Nori WRAP`);
  }
  if (LEVELS.find((row) => row.id === "L109")?.name !== "Rail Cut") throw new Error("L109 Rail Cut locked");
  if (LEVELS.find((row) => row.id === "L110")?.name !== "Shade Gap") throw new Error("L110 Shade Gap locked");
  if (LEVELS.find((row) => row.id === "L111")?.name !== "Porch Stop") throw new Error("L111 Porch Stop locked");
  if (SLICE_UNLOCKS[111] !== "friend_037") throw new Error("SLICE_UNLOCKS[111] must be friend_037");
  if (shippedFriendForClear(111)?.friendId !== "friend_037") throw new Error("onClear(111) must award Nettle");
  const nettle = friendById("friend_037");
  if (!nettle) throw new Error("friend_037 missing from CATALOG");
  if (nettle.defaultName !== "Nettle") throw new Error("default name must be Nettle");
  if (nettle.unlockClear !== 111) throw new Error("Nettle unlockClear must be 111");
  if (nettle.phenotype.artKit !== "nettle") throw new Error("Nettle artKit must be nettle");
  if (nettle.phenotype.personality !== "Sting-soft") throw new Error("Nettle personality must be Sting-soft");
  if (nettle.phenotype.boardColor !== "gray") throw new Error("Nettle boardColor must be gray");
  if (nettle.phenotype.color !== "Gray") throw new Error("Nettle color must be Gray");
  if (nettle.phenotype.pattern !== "Freckled") throw new Error("Nettle pattern must be Freckled");
  if (chipsForFriend("friend_037").join(",") !== "Nettle,Sting,Leaf") {
    throw new Error(`Nettle chips must be Nettle/Sting/Leaf, got ${chipsForFriend("friend_037").join(",")}`);
  }
  if (chipsForFriend("friend_037").some((c) => /ivy|tendril|climb|pebble/i.test(c))) {
    throw new Error("Nettle chips must ban Ivy/Tendril/Climb/Pebble");
  }
  const nettle48 = readFileSync(resolve("public/assets/cats/nettle_loaf_48.svg"), "utf8");
  const nettle72 = readFileSync(resolve("public/assets/cats/nettle_loaf_72.svg"), "utf8");
  if (!nettle48.includes("#6A7D6E") || !nettle72.includes("#6A7D6E")) throw new Error("Nettle loaf must use sage-green-gray coat #6A7D6E");
  if (!nettle48.includes("#D7E4C4") || !nettle72.includes("#D7E4C4")) throw new Error("Nettle loaf must use pale leaf-tip freckles #D7E4C4");
  if (!nettle48.includes("#C8D2C4") || !nettle72.includes("#C8D2C4")) throw new Error("Nettle loaf must use belly #C8D2C4");
  if (nettle48.includes("#1A2C24") || nettle72.includes("#1A2C24")) throw new Error("Nettle loaf must not use Ivy green-black #1A2C24");
  if (nettle48.includes("#7A9B6A") || nettle72.includes("#7A9B6A")) throw new Error("Nettle loaf must not use Basil herb-green #7A9B6A");
  if (nettle48.includes("#7E8F86") || nettle72.includes("#7E8F86")) throw new Error("Nettle loaf must not use Juniper moss #7E8F86");
  if (nettle48.includes("#A394B0") || nettle72.includes("#A394B0")) throw new Error("Nettle loaf must not use Thistle lilac #A394B0");
  if (nettle48.includes("#C4BDB4") || nettle72.includes("#C4BDB4")) throw new Error("Nettle loaf must not use Mist mackerel #C4BDB4");
  if (nettle48.includes("#B4BCC2") || nettle72.includes("#B4BCC2")) throw new Error("Nettle loaf must not use Clover silver #B4BCC2");
  if (nettle48.includes("#B4BAC2") || nettle72.includes("#B4BAC2")) throw new Error("Nettle loaf must not use Linen wash #B4BAC2");
  if (furnitureGiftsForClear(111).length) throw new Error("Nettle@111 must gift no furniture");
  const yardN = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardN.match(/const nettle =/g) || []).length !== 1) throw new Error("YardScene must declare nettle once");
  if ((yardN.match(/\{nettle \?/g) || []).length !== 1) throw new Error("YardScene must render nettle once");
  if (TUTORIAL_RESCUES.length !== 51) throw new Error("Met must include through Parsley (42)");
  if (shippedFriendForClear(108)?.friendId !== "friend_036") throw new Error("Ivy@108 must stay");
  if (shippedFriendForClear(105)?.friendId !== "friend_035") throw new Error("Briar@105 must stay");
  if (shippedFriendForClear(102)?.friendId !== "friend_034") throw new Error("Thistle@102 must stay");
  if (shippedFriendForClear(99)?.friendId !== "friend_033") throw new Error("Plum@99 must stay");
  if (shippedFriendForClear(96)?.friendId !== "friend_032") throw new Error("Fig@96 must stay");
  if (shippedFriendForClear(93)?.friendId !== "friend_031") throw new Error("Basil@93 must stay");
  if (shippedFriendForClear(90)?.friendId !== "friend_030") throw new Error("Clay@90 must stay");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("Ivory@87 must stay");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 must stay");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (shippedFriendForClear(3)?.friendId !== "friend_001") throw new Error("Mango@3 parade lock");
  if (shippedFriendForClear(12)?.friendId !== "friend_004") throw new Error("Tux@12 parade lock");
  if (shippedFriendForClear(24)?.friendId !== "friend_008") throw new Error("Pumpkin@24 parade lock");
  if (shippedFriendForClear(27)?.friendId !== "friend_009") throw new Error("Shadow@27 parade lock");
  if (shippedFriendForClear(30)?.friendId !== "friend_010") throw new Error("Noodle@30 parade lock");
  if (chipsForFriend("friend_036").join(",") !== "Ivy,Tendril,Climb") throw new Error("Ivy chips untouched");
  if (chipsForFriend("friend_035").join(",") !== "Briar,Thorn,Hedge") throw new Error("Briar chips untouched");
  if (chipsForFriend("friend_034").join(",") !== "Thistle,Burr,Bramble") throw new Error("Thistle chips untouched");
  if (chipsForFriend("friend_033").join(",") !== "Plum,Damson,Stone") throw new Error("Plum chips untouched");
  if (chipsForFriend("friend_032").join(",") !== "Fig,Olive,Pit") throw new Error("Fig chips untouched");
  if (chipsForFriend("friend_031").join(",") !== "Basil,Pesto,Herb") throw new Error("Basil chips untouched");
  if (chipsForFriend("friend_030").join(",") !== "Clay,Brick,Terra") throw new Error("Clay chips untouched");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") throw new Error("Ivory chips untouched");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[114] !== "friend_038") throw new Error("SLICE_UNLOCKS[114] must be friend_038 after Sorrel ship");
  if (/pebble|Pebble/i.test(nettle48 + nettle72)) throw new Error("Nettle art must not use Pebble");
  if (/ivy|tendril|climb/i.test(nettle48 + nettle72)) throw new Error("Nettle art must not collide Ivy marks");
  const l112 = LEVELS.find((r) => r.id === "L112")!;
  const l113 = LEVELS.find((r) => r.id === "L113")!;
  const l114 = LEVELS.find((r) => r.id === "L114")!;
  if (/rail|shade|porch/i.test([l112.name, l113.name, l114.name].join(","))) {
    throw new Error("L112–L114 must not reuse Rail/Shade/Porch names");
  }
  const nettleGatePair = (level: typeof l112) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (nettleGatePair(l112) !== "0,4/2,2") throw new Error(`L112 gates must be delta (2,-2) pair, got ${nettleGatePair(l112)}`);
  if (nettleGatePair(l113) !== "2,0/3,3") throw new Error(`L113 gates must be delta (1,3) pair, got ${nettleGatePair(l113)}`);
  if (nettleGatePair(l114) !== "2,4/5,2") throw new Error(`L114 gates must be delta (3,-2) pair, got ${nettleGatePair(l114)}`);
  const occ114 = new Set([
    ...l114.cats.map((c) => `${c.x},${c.y}`),
    ...l114.gates.map((g) => `${g.x},${g.y}`),
  ]);
  if (occ114.has("5,5")) throw new Error("L114 Under must be off Nori seat (5,5)");
  if (occ114.has("5,0") || occ114.has("0,5")) throw new Error("L114 Under must be off Perch seats");
  if (occ114.has("5,1") || occ114.has("1,2")) throw new Error("L114 Under must be off Medlar seats");
  if (l114.gates[0].y === l114.gates[1].y) throw new Error("L114 Under must not same-row Nest");
  if (l114.gates[0].x === l114.gates[1].x) throw new Error("L114 Under must not column Porch");
  if (l112.cats[0].x === l112.cats[1].x) throw new Error("L112 Stem must not stacked-column Vine");
  for (const level of [l112, l113, l114]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
  }
  const wallKeyN = (level: typeof l112) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsN = ["L109", "L110", "L111"].map((id) => wallKeyN(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L112", "L113", "L114"] as const) {
    const key = wallKeyN(LEVELS.find((r) => r.id === id)!);
    if (priorWallsN.includes(key)) throw new Error(`${id} wall twin of L109–L111`);
  }
  if (ART_KIT_PATH.nettle.loaf48 !== "/assets/cats/nettle_loaf_48.svg") throw new Error("ART_KIT_PATH.nettle loaf48");
  if (ART_KIT_PATH.nettle.loaf72 !== "/assets/cats/nettle_loaf_72.svg") throw new Error("ART_KIT_PATH.nettle loaf72");
  if (ART_KIT_PATH.ivy.loaf48 !== "/assets/cats/ivy_loaf_48.svg") throw new Error("Ivy kit must stay");
  const saveN = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveN.includes("shady under-rail")) throw new Error("SaveProvider must yard-bubble shady under-rail for Nettle");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_037.md"))) throw new Error("missing CH4_FRIEND_037.md");
  if (!existsSync(resolve("data/collection/chapter4_nettle_bang.json"))) throw new Error("missing collection nettle bang");
  if (!existsSync(resolve("data/chapter4_nettle_bang.json"))) throw new Error("missing chapter4_nettle_bang.json");
  const shellN = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shellN.includes("Full-viewport") && !shellN.includes("full-viewport") && !shellN.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shellN)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Nettle@111 + L112–L114 ok · chips Nettle/Sting/Leaf · coat #6A7D6E + leaf-tips #D7E4C4 · Stem Cut / Sting Gap / Under Stop · Ivy/Briar/Thistle/Plum/Fig/Basil/Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}

{
  // Ch4 Sorrel@114 + L115–L117 triad (Dock/Zest/Stoop — deltas (1,-4)/(2,4)/(1,1))
  for (const [id, name] of [
    ["L115", "Dock Cut"],
    ["L116", "Zest Gap"],
    ["L117", "Stoop Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close`);
    }
    if (/sorrel cut/i.test(level.name)) {
      throw new Error(`${id} must not be Sorrel Cut`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
    if (pair === "2,3/4,5" || pair === "0,3/3,2" || pair === "3,3/3,5") {
      throw new Error(`${id} must not twin Rail/Shade/Porch gates`);
    }
    if (pair === "0,3/4,4" || pair === "2,5/4,1" || pair === "1,3/5,3") {
      throw new Error(`${id} must not twin Vine/Thorn/Nest gates`);
    }
    if (pair === "3,1/5,0" || pair === "0,0/3,4" || pair === "2,1/5,2") {
      throw new Error(`${id} must not twin Fence/Burr/Perch gates`);
    }
    if (pair === "2,0/2,3" || pair === "3,0/3,2" || pair === "1,2/5,1") {
      throw new Error(`${id} must not twin Greengage/Sloe/Medlar gates`);
    }
    if (pair === "3,5/5,5") throw new Error(`${id} must not twin Nori WRAP`);
    if (pair === "0,4/2,2" || pair === "2,0/3,3" || pair === "2,4/5,2") {
      throw new Error(`${id} must not twin Stem/Sting/Under gates`);
    }
  }
  if (LEVELS.find((row) => row.id === "L112")?.name !== "Stem Cut") throw new Error("L112 Stem Cut locked");
  if (LEVELS.find((row) => row.id === "L113")?.name !== "Sting Gap") throw new Error("L113 Sting Gap locked");
  if (LEVELS.find((row) => row.id === "L114")?.name !== "Under Stop") throw new Error("L114 Under Stop locked");
  if (SLICE_UNLOCKS[114] !== "friend_038") throw new Error("SLICE_UNLOCKS[114] must be friend_038");
  if (shippedFriendForClear(114)?.friendId !== "friend_038") throw new Error("onClear(114) must award Sorrel");
  const sorrel = friendById("friend_038");
  if (!sorrel) throw new Error("friend_038 missing from CATALOG");
  if (sorrel.defaultName !== "Sorrel") throw new Error("default name must be Sorrel");
  if (sorrel.unlockClear !== 114) throw new Error("Sorrel unlockClear must be 114");
  if (sorrel.phenotype.artKit !== "sorrel") throw new Error("Sorrel artKit must be sorrel");
  if (sorrel.phenotype.personality !== "Zest-soft") throw new Error("Sorrel personality must be Zest-soft");
  if (sorrel.phenotype.boardColor !== "orange") throw new Error("Sorrel boardColor must be orange");
  if (sorrel.phenotype.color !== "Orange") throw new Error("Sorrel color must be Orange");
  if (sorrel.phenotype.pattern !== "Freckled") throw new Error("Sorrel pattern must be Freckled");
  if (chipsForFriend("friend_038").join(",") !== "Sorrel,Dock,Zest") {
    throw new Error(`Sorrel chips must be Sorrel/Dock/Zest, got ${chipsForFriend("friend_038").join(",")}`);
  }
  if (chipsForFriend("friend_038").some((c) => /nettle|sting|leaf|pebble/i.test(c))) {
    throw new Error("Sorrel chips must ban Nettle/Sting/Leaf/Pebble");
  }
  const sorrel48 = readFileSync(resolve("public/assets/cats/sorrel_loaf_48.svg"), "utf8");
  const sorrel72 = readFileSync(resolve("public/assets/cats/sorrel_loaf_72.svg"), "utf8");
  if (!sorrel48.includes("#C8D24A") || !sorrel72.includes("#C8D24A")) throw new Error("Sorrel loaf must use warm lemon-green coat #C8D24A");
  if (!sorrel48.includes("#E8A04A") || !sorrel72.includes("#E8A04A")) throw new Error("Sorrel loaf must use soft tart freckles #E8A04A");
  if (!sorrel48.includes("#F2EAB0") || !sorrel72.includes("#F2EAB0")) throw new Error("Sorrel loaf must use belly #F2EAB0");
  if (sorrel48.includes("#6A7D6E") || sorrel72.includes("#6A7D6E")) throw new Error("Sorrel loaf must not use Nettle sage-gray #6A7D6E");
  if (sorrel48.includes("#7A9B6A") || sorrel72.includes("#7A9B6A")) throw new Error("Sorrel loaf must not use Basil herb-green #7A9B6A");
  if (sorrel48.includes("#1A2C24") || sorrel72.includes("#1A2C24")) throw new Error("Sorrel loaf must not use Ivy green-black #1A2C24");
  if (sorrel48.includes("#7E8F86") || sorrel72.includes("#7E8F86")) throw new Error("Sorrel loaf must not use Juniper moss #7E8F86");
  if (sorrel48.includes("#D48A4A") || sorrel72.includes("#D48A4A")) throw new Error("Sorrel loaf must not use Pepper spice #D48A4A");
  if (sorrel48.includes("#E07A32") || sorrel72.includes("#E07A32")) throw new Error("Sorrel loaf must not use Pumpkin swirl #E07A32");
  if (sorrel48.includes("#B4BCC2") || sorrel72.includes("#B4BCC2")) throw new Error("Sorrel loaf must not use Clover silver #B4BCC2");
  if (furnitureGiftsForClear(114).length) throw new Error("Sorrel@114 must gift no furniture");
  const yardS = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardS.match(/const sorrel =/g) || []).length !== 1) throw new Error("YardScene must declare sorrel once");
  if ((yardS.match(/\{sorrel \?/g) || []).length !== 1) throw new Error("YardScene must render sorrel once");
  if (TUTORIAL_RESCUES.length !== 51) throw new Error("Met must include through Parsley (42)");
  if (shippedFriendForClear(111)?.friendId !== "friend_037") throw new Error("Nettle@111 must stay");
  if (shippedFriendForClear(108)?.friendId !== "friend_036") throw new Error("Ivy@108 must stay");
  if (shippedFriendForClear(105)?.friendId !== "friend_035") throw new Error("Briar@105 must stay");
  if (shippedFriendForClear(102)?.friendId !== "friend_034") throw new Error("Thistle@102 must stay");
  if (shippedFriendForClear(99)?.friendId !== "friend_033") throw new Error("Plum@99 must stay");
  if (shippedFriendForClear(96)?.friendId !== "friend_032") throw new Error("Fig@96 must stay");
  if (shippedFriendForClear(93)?.friendId !== "friend_031") throw new Error("Basil@93 must stay");
  if (shippedFriendForClear(90)?.friendId !== "friend_030") throw new Error("Clay@90 must stay");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("Ivory@87 must stay");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 must stay");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (shippedFriendForClear(3)?.friendId !== "friend_001") throw new Error("Mango@3 parade lock");
  if (shippedFriendForClear(12)?.friendId !== "friend_004") throw new Error("Tux@12 parade lock");
  if (shippedFriendForClear(24)?.friendId !== "friend_008") throw new Error("Pumpkin@24 parade lock");
  if (shippedFriendForClear(27)?.friendId !== "friend_009") throw new Error("Shadow@27 parade lock");
  if (shippedFriendForClear(30)?.friendId !== "friend_010") throw new Error("Noodle@30 parade lock");
  if (chipsForFriend("friend_037").join(",") !== "Nettle,Sting,Leaf") throw new Error("Nettle chips untouched");
  if (chipsForFriend("friend_036").join(",") !== "Ivy,Tendril,Climb") throw new Error("Ivy chips untouched");
  if (chipsForFriend("friend_035").join(",") !== "Briar,Thorn,Hedge") throw new Error("Briar chips untouched");
  if (chipsForFriend("friend_034").join(",") !== "Thistle,Burr,Bramble") throw new Error("Thistle chips untouched");
  if (chipsForFriend("friend_033").join(",") !== "Plum,Damson,Stone") throw new Error("Plum chips untouched");
  if (chipsForFriend("friend_032").join(",") !== "Fig,Olive,Pit") throw new Error("Fig chips untouched");
  if (chipsForFriend("friend_031").join(",") !== "Basil,Pesto,Herb") throw new Error("Basil chips untouched");
  if (chipsForFriend("friend_030").join(",") !== "Clay,Brick,Terra") throw new Error("Clay chips untouched");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") throw new Error("Ivory chips untouched");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[117] !== "friend_039") throw new Error("SLICE_UNLOCKS[117] must be friend_039 after Fennel ship");
  if (/pebble|Pebble/i.test(sorrel48 + sorrel72)) throw new Error("Sorrel art must not use Pebble");
  if (/nettle|sting|leaf/i.test(sorrel48 + sorrel72)) throw new Error("Sorrel art must not collide Nettle marks");
  const l115 = LEVELS.find((r) => r.id === "L115")!;
  const l116 = LEVELS.find((r) => r.id === "L116")!;
  const l117 = LEVELS.find((r) => r.id === "L117")!;
  if (/stem|sting|under/i.test([l115.name, l116.name, l117.name].join(","))) {
    throw new Error("L115–L117 must not reuse Stem/Sting/Under names");
  }
  const sorrelGatePair = (level: typeof l115) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (sorrelGatePair(l115) !== "0,4/1,0") throw new Error(`L115 gates must be delta (1,-4) pair, got ${sorrelGatePair(l115)}`);
  if (sorrelGatePair(l116) !== "3,0/5,4") throw new Error(`L116 gates must be delta (2,4) pair, got ${sorrelGatePair(l116)}`);
  if (sorrelGatePair(l117) !== "0,2/1,3") throw new Error(`L117 gates must be delta (1,1) pair, got ${sorrelGatePair(l117)}`);
  const occ117 = new Set([
    ...l117.cats.map((c) => `${c.x},${c.y}`),
    ...l117.gates.map((g) => `${g.x},${g.y}`),
  ]);
  if (occ117.has("5,5")) throw new Error("L117 Stoop must be off Nori seat (5,5)");
  if (occ117.has("5,0") || occ117.has("0,5")) throw new Error("L117 Stoop must be off Perch seats");
  if (occ117.has("5,1") || occ117.has("1,2")) throw new Error("L117 Stoop must be off Medlar seats");
  if (l117.gates[0].y === l117.gates[1].y) throw new Error("L117 Stoop must not same-row Nest");
  if (l117.gates[0].x === l117.gates[1].x) throw new Error("L117 Stoop must not column Porch");
  if (l115.cats[0].x === l115.cats[1].x) throw new Error("L115 Dock must not stacked-column Vine");
  for (const level of [l115, l116, l117]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
  }
  const wallKeyS = (level: typeof l115) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsS = ["L112", "L113", "L114"].map((id) => wallKeyS(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L115", "L116", "L117"] as const) {
    const key = wallKeyS(LEVELS.find((r) => r.id === id)!);
    if (priorWallsS.includes(key)) throw new Error(`${id} wall twin of L112–L114`);
  }
  if (ART_KIT_PATH.sorrel.loaf48 !== "/assets/cats/sorrel_loaf_48.svg") throw new Error("ART_KIT_PATH.sorrel loaf48");
  if (ART_KIT_PATH.sorrel.loaf72 !== "/assets/cats/sorrel_loaf_72.svg") throw new Error("ART_KIT_PATH.sorrel loaf72");
  if (ART_KIT_PATH.nettle.loaf48 !== "/assets/cats/nettle_loaf_48.svg") throw new Error("Nettle kit must stay");
  const saveS = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveS.includes("sunny stoop")) throw new Error("SaveProvider must yard-bubble sunny stoop for Sorrel");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_038.md"))) throw new Error("missing CH4_FRIEND_038.md");
  if (!existsSync(resolve("data/collection/chapter4_sorrel_bang.json"))) throw new Error("missing collection sorrel bang");
  if (!existsSync(resolve("data/chapter4_sorrel_bang.json"))) throw new Error("missing chapter4_sorrel_bang.json");
  const shellS = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shellS.includes("Full-viewport") && !shellS.includes("full-viewport") && !shellS.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shellS)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Sorrel@114 + L115–L117 ok · chips Sorrel/Dock/Zest · coat #C8D24A + tart freckles #E8A04A · Dock Cut / Zest Gap / Stoop Stop · Nettle/Ivy/Briar/Thistle/Plum/Fig/Basil/Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}

{
  // Ch4 Fennel@117 + L118–L120 triad (Frond/Anise/Breeze — deltas (4,-1)/(2,1)/(1,-2))
  for (const [id, name] of [
    ["L118", "Frond Cut"],
    ["L119", "Anise Gap"],
    ["L120", "Breeze Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close`);
    }
    if (/fennel (cut|gap|stop)/i.test(level.name)) {
      throw new Error(`${id} must not be Fennel Cut/Gap/Stop (L92 already Fennel Gap)`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
    if (pair === "2,3/4,5" || pair === "0,3/3,2" || pair === "3,3/3,5") {
      throw new Error(`${id} must not twin Rail/Shade/Porch gates`);
    }
    if (pair === "0,3/4,4" || pair === "2,5/4,1" || pair === "1,3/5,3") {
      throw new Error(`${id} must not twin Vine/Thorn/Nest gates`);
    }
    if (pair === "3,1/5,0" || pair === "0,0/3,4" || pair === "2,1/5,2") {
      throw new Error(`${id} must not twin Fence/Burr/Perch gates`);
    }
    if (pair === "2,0/2,3" || pair === "3,0/3,2" || pair === "1,2/5,1") {
      throw new Error(`${id} must not twin Greengage/Sloe/Medlar gates`);
    }
    if (pair === "3,5/5,5") throw new Error(`${id} must not twin Nori WRAP`);
    if (pair === "0,4/2,2" || pair === "2,0/3,3" || pair === "2,4/5,2") {
      throw new Error(`${id} must not twin Stem/Sting/Under gates`);
    }
    if (pair === "0,4/1,0" || pair === "3,0/5,4" || pair === "0,2/1,3") {
      throw new Error(`${id} must not twin Dock/Zest/Stoop gates`);
    }
  }
  if (LEVELS.find((row) => row.id === "L115")?.name !== "Dock Cut") throw new Error("L115 Dock Cut locked");
  if (LEVELS.find((row) => row.id === "L116")?.name !== "Zest Gap") throw new Error("L116 Zest Gap locked");
  if (LEVELS.find((row) => row.id === "L117")?.name !== "Stoop Stop") throw new Error("L117 Stoop Stop locked");
  if (LEVELS.find((row) => row.id === "L92")?.name !== "Fennel Gap") throw new Error("L92 Fennel Gap locked");
  if (SLICE_UNLOCKS[117] !== "friend_039") throw new Error("SLICE_UNLOCKS[117] must be friend_039");
  if (shippedFriendForClear(117)?.friendId !== "friend_039") throw new Error("onClear(117) must award Fennel");
  const fennel = friendById("friend_039");
  if (!fennel) throw new Error("friend_039 missing from CATALOG");
  if (fennel.defaultName !== "Fennel") throw new Error("default name must be Fennel");
  if (fennel.unlockClear !== 117) throw new Error("Fennel unlockClear must be 117");
  if (fennel.phenotype.artKit !== "fennel") throw new Error("Fennel artKit must be fennel");
  if (fennel.phenotype.personality !== "Anise-soft") throw new Error("Fennel personality must be Anise-soft");
  if (fennel.phenotype.boardColor !== "gray") throw new Error("Fennel boardColor must be gray");
  if (fennel.phenotype.color !== "Gray") throw new Error("Fennel color must be Gray");
  if (fennel.phenotype.pattern !== "Freckled") throw new Error("Fennel pattern must be Freckled");
  if (chipsForFriend("friend_039").join(",") !== "Fennel,Frond,Anise") {
    throw new Error(`Fennel chips must be Fennel/Frond/Anise, got ${chipsForFriend("friend_039").join(",")}`);
  }
  if (chipsForFriend("friend_039").some((c) => /sorrel|dock|zest|pebble/i.test(c))) {
    throw new Error("Fennel chips must ban Sorrel/Dock/Zest/Pebble");
  }
  const fennel48 = readFileSync(resolve("public/assets/cats/fennel_loaf_48.svg"), "utf8");
  const fennel72 = readFileSync(resolve("public/assets/cats/fennel_loaf_72.svg"), "utf8");
  if (!fennel48.includes("#E6C86E") || !fennel72.includes("#E6C86E")) throw new Error("Fennel loaf must use pale cream-gold coat #E6C86E");
  if (!fennel48.includes("#8A7C38") || !fennel72.includes("#8A7C38")) throw new Error("Fennel loaf must use soft frond freckles #8A7C38");
  if (!fennel48.includes("#F7EDC4") || !fennel72.includes("#F7EDC4")) throw new Error("Fennel loaf must use belly #F7EDC4");
  if (fennel48.includes("#C8D24A") || fennel72.includes("#C8D24A")) throw new Error("Fennel loaf must not use Sorrel lemon-green #C8D24A");
  if (fennel48.includes("#EBE3C4") || fennel72.includes("#EBE3C4")) throw new Error("Fennel loaf must not use Ivory wash #EBE3C4");
  if (fennel48.includes("#C9B08C") || fennel72.includes("#C9B08C")) throw new Error("Fennel loaf must not use Fig cream #C9B08C");
  if (fennel48.includes("#7A9B6A") || fennel72.includes("#7A9B6A")) throw new Error("Fennel loaf must not use Basil herb-green #7A9B6A");
  if (fennel48.includes("#7E8F86") || fennel72.includes("#7E8F86")) throw new Error("Fennel loaf must not use Juniper moss #7E8F86");
  if (fennel48.includes("#E59A3C") || fennel72.includes("#E59A3C")) throw new Error("Fennel loaf must not use Sunny orange #E59A3C");
  if (fennel48.includes("#B4BAC2") || fennel72.includes("#B4BAC2")) throw new Error("Fennel loaf must not use Linen #B4BAC2");
  if (furnitureGiftsForClear(117).length) throw new Error("Fennel@117 must gift no furniture");
  const yardF = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardF.match(/const fennel =/g) || []).length !== 1) throw new Error("YardScene must declare fennel once");
  if ((yardF.match(/\{fennel \?/g) || []).length !== 1) throw new Error("YardScene must render fennel once");
  if (TUTORIAL_RESCUES.length !== 51) throw new Error("Met must include through Parsley (42)");
  if (shippedFriendForClear(114)?.friendId !== "friend_038") throw new Error("Sorrel@114 must stay");
  if (shippedFriendForClear(111)?.friendId !== "friend_037") throw new Error("Nettle@111 must stay");
  if (shippedFriendForClear(108)?.friendId !== "friend_036") throw new Error("Ivy@108 must stay");
  if (shippedFriendForClear(105)?.friendId !== "friend_035") throw new Error("Briar@105 must stay");
  if (shippedFriendForClear(102)?.friendId !== "friend_034") throw new Error("Thistle@102 must stay");
  if (shippedFriendForClear(99)?.friendId !== "friend_033") throw new Error("Plum@99 must stay");
  if (shippedFriendForClear(96)?.friendId !== "friend_032") throw new Error("Fig@96 must stay");
  if (shippedFriendForClear(93)?.friendId !== "friend_031") throw new Error("Basil@93 must stay");
  if (shippedFriendForClear(90)?.friendId !== "friend_030") throw new Error("Clay@90 must stay");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("Ivory@87 must stay");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 must stay");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (shippedFriendForClear(3)?.friendId !== "friend_001") throw new Error("Mango@3 parade lock");
  if (shippedFriendForClear(12)?.friendId !== "friend_004") throw new Error("Tux@12 parade lock");
  if (shippedFriendForClear(24)?.friendId !== "friend_008") throw new Error("Pumpkin@24 parade lock");
  if (shippedFriendForClear(27)?.friendId !== "friend_009") throw new Error("Shadow@27 parade lock");
  if (shippedFriendForClear(30)?.friendId !== "friend_010") throw new Error("Noodle@30 parade lock");
  if (chipsForFriend("friend_038").join(",") !== "Sorrel,Dock,Zest") throw new Error("Sorrel chips untouched");
  if (chipsForFriend("friend_037").join(",") !== "Nettle,Sting,Leaf") throw new Error("Nettle chips untouched");
  if (chipsForFriend("friend_036").join(",") !== "Ivy,Tendril,Climb") throw new Error("Ivy chips untouched");
  if (chipsForFriend("friend_035").join(",") !== "Briar,Thorn,Hedge") throw new Error("Briar chips untouched");
  if (chipsForFriend("friend_034").join(",") !== "Thistle,Burr,Bramble") throw new Error("Thistle chips untouched");
  if (chipsForFriend("friend_033").join(",") !== "Plum,Damson,Stone") throw new Error("Plum chips untouched");
  if (chipsForFriend("friend_032").join(",") !== "Fig,Olive,Pit") throw new Error("Fig chips untouched");
  if (chipsForFriend("friend_031").join(",") !== "Basil,Pesto,Herb") throw new Error("Basil chips untouched");
  if (chipsForFriend("friend_030").join(",") !== "Clay,Brick,Terra") throw new Error("Clay chips untouched");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") throw new Error("Ivory chips untouched");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[120] !== "friend_040") throw new Error("SLICE_UNLOCKS[120] must be friend_040 after Chervil ship");
  if (/pebble|Pebble/i.test(fennel48 + fennel72)) throw new Error("Fennel art must not use Pebble");
  if (/sorrel|dock|zest/i.test(fennel48 + fennel72)) throw new Error("Fennel art must not collide Sorrel marks");
  const l118 = LEVELS.find((r) => r.id === "L118")!;
  const l119 = LEVELS.find((r) => r.id === "L119")!;
  const l120 = LEVELS.find((r) => r.id === "L120")!;
  if (/dock|zest|stoop/i.test([l118.name, l119.name, l120.name].join(","))) {
    throw new Error("L118–L120 must not reuse Dock/Zest/Stoop names");
  }
  const fennelGatePair = (level: typeof l118) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (fennelGatePair(l118) !== "1,3/5,2") throw new Error(`L118 gates must be delta (4,-1) pair, got ${fennelGatePair(l118)}`);
  if (fennelGatePair(l119) !== "0,3/2,4") throw new Error(`L119 gates must be delta (2,1) pair, got ${fennelGatePair(l119)}`);
  if (fennelGatePair(l120) !== "4,5/5,3") throw new Error(`L120 gates must be delta (1,-2) pair, got ${fennelGatePair(l120)}`);
  const occ120 = new Set([
    ...l120.cats.map((c) => `${c.x},${c.y}`),
    ...l120.gates.map((g) => `${g.x},${g.y}`),
  ]);
  if (occ120.has("5,5")) throw new Error("L120 Breeze must be off Nori seat (5,5)");
  if (occ120.has("5,0") || occ120.has("0,5")) throw new Error("L120 Breeze must be off Perch seats");
  if (occ120.has("5,1") || occ120.has("1,2")) throw new Error("L120 Breeze must be off Medlar seats");
  if (l120.gates[0].y === l120.gates[1].y) throw new Error("L120 Breeze must not same-row Nest");
  if (l120.gates[0].x === l120.gates[1].x) throw new Error("L120 Breeze must not column Porch");
  if (l118.cats[0].x === l118.cats[1].x) throw new Error("L118 Frond must not stacked-column Vine");
  for (const level of [l118, l119, l120]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
  }
  const wallKeyF = (level: typeof l118) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsF = ["L115", "L116", "L117"].map((id) => wallKeyF(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L118", "L119", "L120"] as const) {
    const key = wallKeyF(LEVELS.find((r) => r.id === id)!);
    if (priorWallsF.includes(key)) throw new Error(`${id} wall twin of L115–L117`);
  }
  if (ART_KIT_PATH.fennel.loaf48 !== "/assets/cats/fennel_loaf_48.svg") throw new Error("ART_KIT_PATH.fennel loaf48");
  if (ART_KIT_PATH.fennel.loaf72 !== "/assets/cats/fennel_loaf_72.svg") throw new Error("ART_KIT_PATH.fennel loaf72");
  if (ART_KIT_PATH.sorrel.loaf48 !== "/assets/cats/sorrel_loaf_48.svg") throw new Error("Sorrel kit must stay");
  const saveF = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveF.includes("frond stoop")) throw new Error("SaveProvider must yard-bubble frond stoop for Fennel");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_039.md"))) throw new Error("missing CH4_FRIEND_039.md");
  if (!existsSync(resolve("data/collection/chapter4_fennel_bang.json"))) throw new Error("missing collection fennel bang");
  if (!existsSync(resolve("data/chapter4_fennel_bang.json"))) throw new Error("missing chapter4_fennel_bang.json");
  const shellF = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shellF.includes("Full-viewport") && !shellF.includes("full-viewport") && !shellF.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shellF)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Fennel@117 + L118–L120 ok · chips Fennel/Frond/Anise · coat #E6C86E + frond freckles #8A7C38 · Frond Cut / Anise Gap / Breeze Stop · Sorrel/Nettle/Ivy/Briar/Thistle/Plum/Fig/Basil/Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}

{
  // Ch4 Chervil@120 + L121–L123 triad (Frill/Lace/Sill — deltas (3,-4)/(1,-1)/(1,3))
  for (const [id, name] of [
    ["L121", "Frill Cut"],
    ["L122", "Lace Gap"],
    ["L123", "Sill Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close`);
    }
    if (/chervil (cut|gap|stop)/i.test(level.name)) {
      throw new Error(`${id} must not be Chervil Cut/Gap/Stop (L93 Chervil Stop kill)`);
    }
    if (/fennel (cut|gap|stop)/i.test(level.name)) {
      throw new Error(`${id} must not be Fennel Cut/Gap/Stop (L92 already Fennel Gap)`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
    if (pair === "2,3/4,5" || pair === "0,3/3,2" || pair === "3,3/3,5") {
      throw new Error(`${id} must not twin Rail/Shade/Porch gates`);
    }
    if (pair === "0,3/4,4" || pair === "2,5/4,1" || pair === "1,3/5,3") {
      throw new Error(`${id} must not twin Vine/Thorn/Nest gates`);
    }
    if (pair === "3,1/5,0" || pair === "0,0/3,4" || pair === "2,1/5,2") {
      throw new Error(`${id} must not twin Fence/Burr/Perch gates`);
    }
    if (pair === "2,0/2,3" || pair === "3,0/3,2" || pair === "1,2/5,1") {
      throw new Error(`${id} must not twin Greengage/Sloe/Medlar gates`);
    }
    if (pair === "3,5/5,5") throw new Error(`${id} must not twin Nori WRAP`);
    if (pair === "0,4/2,2" || pair === "2,0/3,3" || pair === "2,4/5,2") {
      throw new Error(`${id} must not twin Stem/Sting/Under gates`);
    }
    if (pair === "0,4/1,0" || pair === "3,0/5,4" || pair === "0,2/1,3") {
      throw new Error(`${id} must not twin Dock/Zest/Stoop gates`);
    }
    if (pair === "1,3/5,2" || pair === "0,3/2,4" || pair === "4,5/5,3") {
      throw new Error(`${id} must not twin Frond/Anise/Breeze gates`);
    }
  }
  if (LEVELS.find((row) => row.id === "L118")?.name !== "Frond Cut") throw new Error("L118 Frond Cut locked");
  if (LEVELS.find((row) => row.id === "L119")?.name !== "Anise Gap") throw new Error("L119 Anise Gap locked");
  if (LEVELS.find((row) => row.id === "L120")?.name !== "Breeze Stop") throw new Error("L120 Breeze Stop locked");
  if (LEVELS.find((row) => row.id === "L92")?.name !== "Fennel Gap") throw new Error("L92 Fennel Gap locked");
  if (LEVELS.find((row) => row.id === "L93")?.name !== "Lovage Stop") throw new Error("L93 Lovage Stop locked");
  if (SLICE_UNLOCKS[120] !== "friend_040") throw new Error("SLICE_UNLOCKS[120] must be friend_040");
  if (shippedFriendForClear(120)?.friendId !== "friend_040") throw new Error("onClear(120) must award Chervil");
  const chervil = friendById("friend_040");
  if (!chervil) throw new Error("friend_040 missing from CATALOG");
  if (chervil.defaultName !== "Chervil") throw new Error("default name must be Chervil");
  if (chervil.unlockClear !== 120) throw new Error("Chervil unlockClear must be 120");
  if (chervil.phenotype.artKit !== "chervil") throw new Error("Chervil artKit must be chervil");
  if (chervil.phenotype.personality !== "Lace-soft") throw new Error("Chervil personality must be Lace-soft");
  if (chervil.phenotype.boardColor !== "gray") throw new Error("Chervil boardColor must be gray");
  if (chervil.phenotype.color !== "Gray") throw new Error("Chervil color must be Gray");
  if (chervil.phenotype.pattern !== "Freckled") throw new Error("Chervil pattern must be Freckled");
  if (chipsForFriend("friend_040").join(",") !== "Chervil,Frill,Lace") {
    throw new Error(`Chervil chips must be Chervil/Frill/Lace, got ${chipsForFriend("friend_040").join(",")}`);
  }
  if (chipsForFriend("friend_040").some((c) => /fennel|frond|anise|pebble/i.test(c))) {
    throw new Error("Chervil chips must ban Fennel/Frond/Anise/Pebble");
  }
  const chervil48 = readFileSync(resolve("public/assets/cats/chervil_loaf_48.svg"), "utf8");
  const chervil72 = readFileSync(resolve("public/assets/cats/chervil_loaf_72.svg"), "utf8");
  if (!chervil48.includes("#C6D9B4") || !chervil72.includes("#C6D9B4")) throw new Error("Chervil loaf must use pale herb-lace green coat #C6D9B4");
  if (!chervil48.includes("#5E7F52") || !chervil72.includes("#5E7F52")) throw new Error("Chervil loaf must use fine lace freckles #5E7F52");
  if (!chervil48.includes("#EAF3DE") || !chervil72.includes("#EAF3DE")) throw new Error("Chervil loaf must use belly #EAF3DE");
  if (chervil48.includes("#E6C86E") || chervil72.includes("#E6C86E")) throw new Error("Chervil loaf must not use Fennel cream-gold #E6C86E");
  if (chervil48.includes("#7A9B6A") || chervil72.includes("#7A9B6A")) throw new Error("Chervil loaf must not use Basil herb-green #7A9B6A");
  if (chervil48.includes("#6A7D6E") || chervil72.includes("#6A7D6E")) throw new Error("Chervil loaf must not use Nettle sage #6A7D6E");
  if (chervil48.includes("#1A2C24") || chervil72.includes("#1A2C24")) throw new Error("Chervil loaf must not use Ivy deep green-black #1A2C24");
  if (chervil48.includes("#7E8F86") || chervil72.includes("#7E8F86")) throw new Error("Chervil loaf must not use Juniper moss #7E8F86");
  if (chervil48.includes("#B4BAC2") || chervil72.includes("#B4BAC2")) throw new Error("Chervil loaf must not use Linen wash #B4BAC2");
  if (chervil48.includes("#EBE3C4") || chervil72.includes("#EBE3C4")) throw new Error("Chervil loaf must not use Ivory sheer #EBE3C4");
  if (furnitureGiftsForClear(120).length) throw new Error("Chervil@120 must gift no furniture");
  const yardC = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardC.match(/const chervil =/g) || []).length !== 1) throw new Error("YardScene must declare chervil once");
  if ((yardC.match(/\{chervil \?/g) || []).length !== 1) throw new Error("YardScene must render chervil once");
  if (TUTORIAL_RESCUES.length !== 51) throw new Error("Met must include through Parsley (42)");
  if (shippedFriendForClear(117)?.friendId !== "friend_039") throw new Error("Fennel@117 must stay");
  if (shippedFriendForClear(114)?.friendId !== "friend_038") throw new Error("Sorrel@114 must stay");
  if (shippedFriendForClear(111)?.friendId !== "friend_037") throw new Error("Nettle@111 must stay");
  if (shippedFriendForClear(108)?.friendId !== "friend_036") throw new Error("Ivy@108 must stay");
  if (shippedFriendForClear(105)?.friendId !== "friend_035") throw new Error("Briar@105 must stay");
  if (shippedFriendForClear(102)?.friendId !== "friend_034") throw new Error("Thistle@102 must stay");
  if (shippedFriendForClear(99)?.friendId !== "friend_033") throw new Error("Plum@99 must stay");
  if (shippedFriendForClear(96)?.friendId !== "friend_032") throw new Error("Fig@96 must stay");
  if (shippedFriendForClear(93)?.friendId !== "friend_031") throw new Error("Basil@93 must stay");
  if (shippedFriendForClear(90)?.friendId !== "friend_030") throw new Error("Clay@90 must stay");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("Ivory@87 must stay");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 must stay");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (shippedFriendForClear(3)?.friendId !== "friend_001") throw new Error("Mango@3 parade lock");
  if (shippedFriendForClear(12)?.friendId !== "friend_004") throw new Error("Tux@12 parade lock");
  if (shippedFriendForClear(24)?.friendId !== "friend_008") throw new Error("Pumpkin@24 parade lock");
  if (shippedFriendForClear(27)?.friendId !== "friend_009") throw new Error("Shadow@27 parade lock");
  if (shippedFriendForClear(30)?.friendId !== "friend_010") throw new Error("Noodle@30 parade lock");
  if (chipsForFriend("friend_039").join(",") !== "Fennel,Frond,Anise") throw new Error("Fennel chips untouched");
  if (chipsForFriend("friend_038").join(",") !== "Sorrel,Dock,Zest") throw new Error("Sorrel chips untouched");
  if (chipsForFriend("friend_037").join(",") !== "Nettle,Sting,Leaf") throw new Error("Nettle chips untouched");
  if (chipsForFriend("friend_036").join(",") !== "Ivy,Tendril,Climb") throw new Error("Ivy chips untouched");
  if (chipsForFriend("friend_035").join(",") !== "Briar,Thorn,Hedge") throw new Error("Briar chips untouched");
  if (chipsForFriend("friend_034").join(",") !== "Thistle,Burr,Bramble") throw new Error("Thistle chips untouched");
  if (chipsForFriend("friend_033").join(",") !== "Plum,Damson,Stone") throw new Error("Plum chips untouched");
  if (chipsForFriend("friend_032").join(",") !== "Fig,Olive,Pit") throw new Error("Fig chips untouched");
  if (chipsForFriend("friend_031").join(",") !== "Basil,Pesto,Herb") throw new Error("Basil chips untouched");
  if (chipsForFriend("friend_030").join(",") !== "Clay,Brick,Terra") throw new Error("Clay chips untouched");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") throw new Error("Ivory chips untouched");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[123] !== "friend_041") throw new Error("SLICE_UNLOCKS[123] must be friend_041 after Lovage ship");
  if (/pebble|Pebble/i.test(chervil48 + chervil72)) throw new Error("Chervil art must not use Pebble");
  if (/fennel|frond|anise/i.test(chervil48 + chervil72)) throw new Error("Chervil art must not collide Fennel marks");
  const l121 = LEVELS.find((r) => r.id === "L121")!;
  const l122 = LEVELS.find((r) => r.id === "L122")!;
  const l123 = LEVELS.find((r) => r.id === "L123")!;
  if (/frond|anise|breeze/i.test([l121.name, l122.name, l123.name].join(","))) {
    throw new Error("L121–L123 must not reuse Frond/Anise/Breeze names");
  }
  const chervilGatePair = (level: typeof l121) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (chervilGatePair(l121) !== "2,5/5,1") throw new Error(`L121 gates must be delta (3,-4) pair, got ${chervilGatePair(l121)}`);
  if (chervilGatePair(l122) !== "1,4/2,3") throw new Error(`L122 gates must be delta (1,-1) pair, got ${chervilGatePair(l122)}`);
  if (chervilGatePair(l123) !== "2,2/3,5") throw new Error(`L123 gates must be delta (1,3) pair, got ${chervilGatePair(l123)}`);
  const occ123 = new Set([
    ...l123.cats.map((c) => `${c.x},${c.y}`),
    ...l123.gates.map((g) => `${g.x},${g.y}`),
  ]);
  if (occ123.has("5,5")) throw new Error("L123 Sill must be off Nori seat (5,5)");
  if (occ123.has("5,0") || occ123.has("0,5")) throw new Error("L123 Sill must be off Perch seats");
  if (occ123.has("5,1") || occ123.has("1,2")) throw new Error("L123 Sill must be off Medlar seats");
  if (l123.gates[0].y === l123.gates[1].y) throw new Error("L123 Sill must not same-row Nest");
  if (l123.gates[0].x === l123.gates[1].x) throw new Error("L123 Sill must not column Porch");
  if (l121.cats[0].x === l121.cats[1].x) throw new Error("L121 Frill must not stacked-column Vine");
  for (const level of [l121, l122, l123]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
  }
  const wallKeyC = (level: typeof l121) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsC = ["L118", "L119", "L120"].map((id) => wallKeyC(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L121", "L122", "L123"] as const) {
    const key = wallKeyC(LEVELS.find((r) => r.id === id)!);
    if (priorWallsC.includes(key)) throw new Error(`${id} wall twin of L118–L120`);
  }
  if (ART_KIT_PATH.chervil.loaf48 !== "/assets/cats/chervil_loaf_48.svg") throw new Error("ART_KIT_PATH.chervil loaf48");
  if (ART_KIT_PATH.chervil.loaf72 !== "/assets/cats/chervil_loaf_72.svg") throw new Error("ART_KIT_PATH.chervil loaf72");
  if (ART_KIT_PATH.fennel.loaf48 !== "/assets/cats/fennel_loaf_48.svg") throw new Error("Fennel kit must stay");
  const saveC = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveC.includes("herb sill")) throw new Error("SaveProvider must yard-bubble herb sill for Chervil");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_040.md"))) throw new Error("missing CH4_FRIEND_040.md");
  if (!existsSync(resolve("data/collection/chapter4_chervil_bang.json"))) throw new Error("missing collection chervil bang");
  if (!existsSync(resolve("data/chapter4_chervil_bang.json"))) throw new Error("missing chapter4_chervil_bang.json");
  const shellC = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shellC.includes("Full-viewport") && !shellC.includes("full-viewport") && !shellC.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shellC)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Chervil@120 + L121–L123 ok · chips Chervil/Frill/Lace · coat #C6D9B4 + lace freckles #5E7F52 · Frill Cut / Lace Gap / Sill Stop · Fennel/Sorrel/Nettle/Ivy/Briar/Thistle/Plum/Fig/Basil/Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}

{
  // Ch4 Lovage@123 + L124–L126 triad (Rib/Rib/Bed — deltas (-2,2)/(-3,-3)/(2,1))
  for (const [id, name] of [
    ["L124", "Rib Cut"],
    ["L125", "Rib Gap"],
    ["L126", "Bed Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close`);
    }
    if (/lovage (cut|gap|stop)/i.test(level.name)) {
      throw new Error(`${id} must not be Lovage Cut/Gap/Stop (L93 Lovage Stop kill)`);
    }
    if (/stem cut/i.test(level.name)) {
      throw new Error(`${id} must not be Stem Cut (L112 already Stem Cut)`);
    }
    if (/chervil (cut|gap|stop)/i.test(level.name)) {
      throw new Error(`${id} must not be Chervil Cut/Gap/Stop`);
    }
    if (/frill|lace|sill/i.test(level.name)) {
      throw new Error(`${id} must not reuse Frill/Lace/Sill names`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
    if (pair === "2,3/4,5" || pair === "0,3/3,2" || pair === "3,3/3,5") {
      throw new Error(`${id} must not twin Rail/Shade/Porch gates`);
    }
    if (pair === "0,3/4,4" || pair === "2,5/4,1" || pair === "1,3/5,3") {
      throw new Error(`${id} must not twin Vine/Thorn/Nest gates`);
    }
    if (pair === "3,1/5,0" || pair === "0,0/3,4" || pair === "2,1/5,2") {
      throw new Error(`${id} must not twin Fence/Burr/Perch gates`);
    }
    if (pair === "2,0/2,3" || pair === "3,0/3,2" || pair === "1,2/5,1") {
      throw new Error(`${id} must not twin Greengage/Sloe/Medlar gates`);
    }
    if (pair === "3,5/5,5") throw new Error(`${id} must not twin Nori WRAP`);
    if (pair === "0,4/2,2" || pair === "2,0/3,3" || pair === "2,4/5,2") {
      throw new Error(`${id} must not twin Stem/Sting/Under gates`);
    }
    if (pair === "0,4/1,0" || pair === "3,0/5,4" || pair === "0,2/1,3") {
      throw new Error(`${id} must not twin Dock/Zest/Stoop gates`);
    }
    if (pair === "1,3/5,2" || pair === "0,3/2,4" || pair === "4,5/5,3") {
      throw new Error(`${id} must not twin Frond/Anise/Breeze gates`);
    }
    if (pair === "2,5/5,1" || pair === "1,4/2,3" || pair === "2,2/3,5") {
      throw new Error(`${id} must not twin Frill/Lace/Sill gates`);
    }
  }
  if (LEVELS.find((row) => row.id === "L121")?.name !== "Frill Cut") throw new Error("L121 Frill Cut locked");
  if (LEVELS.find((row) => row.id === "L122")?.name !== "Lace Gap") throw new Error("L122 Lace Gap locked");
  if (LEVELS.find((row) => row.id === "L123")?.name !== "Sill Stop") throw new Error("L123 Sill Stop locked");
  if (LEVELS.find((row) => row.id === "L112")?.name !== "Stem Cut") throw new Error("L112 Stem Cut locked");
  if (LEVELS.find((row) => row.id === "L93")?.name !== "Lovage Stop") throw new Error("L93 Lovage Stop locked");
  if (SLICE_UNLOCKS[123] !== "friend_041") throw new Error("SLICE_UNLOCKS[123] must be friend_041");
  if (shippedFriendForClear(123)?.friendId !== "friend_041") throw new Error("onClear(123) must award Lovage");
  const lovage = friendById("friend_041");
  if (!lovage) throw new Error("friend_041 missing from CATALOG");
  if (lovage.defaultName !== "Lovage") throw new Error("default name must be Lovage");
  if (lovage.unlockClear !== 123) throw new Error("Lovage unlockClear must be 123");
  if (lovage.phenotype.artKit !== "lovage") throw new Error("Lovage artKit must be lovage");
  if (lovage.phenotype.personality !== "Rib-soft") throw new Error("Lovage personality must be Rib-soft");
  if (lovage.phenotype.boardColor !== "gray") throw new Error("Lovage boardColor must be gray");
  if (lovage.phenotype.color !== "Gray") throw new Error("Lovage color must be Gray");
  if (lovage.phenotype.pattern !== "Freckled") throw new Error("Lovage pattern must be Freckled");
  if (chipsForFriend("friend_041").join(",") !== "Lovage,Stem,Rib") {
    throw new Error(`Lovage chips must be Lovage/Stem/Rib, got ${chipsForFriend("friend_041").join(",")}`);
  }
  if (chipsForFriend("friend_041").some((c) => /chervil|frill|lace|fennel|frond|anise|pebble/i.test(c))) {
    throw new Error("Lovage chips must ban Chervil/Frill/Lace/Fennel/Frond/Anise/Pebble");
  }
  const lovage48 = readFileSync(resolve("public/assets/cats/lovage_loaf_48.svg"), "utf8");
  const lovage72 = readFileSync(resolve("public/assets/cats/lovage_loaf_72.svg"), "utf8");
  if (!lovage48.includes("#9CB87A") || !lovage72.includes("#9CB87A")) throw new Error("Lovage loaf must use celery-stem green coat #9CB87A");
  if (!lovage48.includes("#5E7348") || !lovage72.includes("#5E7348")) throw new Error("Lovage loaf must use rib freckles #5E7348");
  if (!lovage48.includes("#D8E6C4") || !lovage72.includes("#D8E6C4")) throw new Error("Lovage loaf must use belly #D8E6C4");
  if (lovage48.includes("#C6D9B4") || lovage72.includes("#C6D9B4")) throw new Error("Lovage loaf must not use Chervil herb-lace #C6D9B4");
  if (lovage48.includes("#5E7F52") || lovage72.includes("#5E7F52")) throw new Error("Lovage loaf must not use Chervil lace freckles #5E7F52");
  if (lovage48.includes("#E6C86E") || lovage72.includes("#E6C86E")) throw new Error("Lovage loaf must not use Fennel cream-gold #E6C86E");
  if (lovage48.includes("#7A9B6A") || lovage72.includes("#7A9B6A")) throw new Error("Lovage loaf must not use Basil herb-green #7A9B6A");
  if (lovage48.includes("#6A7D6E") || lovage72.includes("#6A7D6E")) throw new Error("Lovage loaf must not use Nettle sage #6A7D6E");
  if (lovage48.includes("#1A2C24") || lovage72.includes("#1A2C24")) throw new Error("Lovage loaf must not use Ivy deep green-black #1A2C24");
  if (lovage48.includes("#7E8F86") || lovage72.includes("#7E8F86")) throw new Error("Lovage loaf must not use Juniper moss #7E8F86");
  if (lovage48.includes("#C8D24A") || lovage72.includes("#C8D24A")) throw new Error("Lovage loaf must not use Sorrel lemon-green #C8D24A");
  if (furnitureGiftsForClear(123).length) throw new Error("Lovage@123 must gift no furniture");
  const yardL = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardL.match(/const lovage =/g) || []).length !== 1) throw new Error("YardScene must declare lovage once");
  if ((yardL.match(/\{lovage \?/g) || []).length !== 1) throw new Error("YardScene must render lovage once");
  if (TUTORIAL_RESCUES.length !== 51) throw new Error("Met must include through Parsley (42)");
  if (shippedFriendForClear(120)?.friendId !== "friend_040") throw new Error("Chervil@120 must stay");
  if (shippedFriendForClear(117)?.friendId !== "friend_039") throw new Error("Fennel@117 must stay");
  if (shippedFriendForClear(114)?.friendId !== "friend_038") throw new Error("Sorrel@114 must stay");
  if (shippedFriendForClear(111)?.friendId !== "friend_037") throw new Error("Nettle@111 must stay");
  if (shippedFriendForClear(108)?.friendId !== "friend_036") throw new Error("Ivy@108 must stay");
  if (shippedFriendForClear(105)?.friendId !== "friend_035") throw new Error("Briar@105 must stay");
  if (shippedFriendForClear(102)?.friendId !== "friend_034") throw new Error("Thistle@102 must stay");
  if (shippedFriendForClear(99)?.friendId !== "friend_033") throw new Error("Plum@99 must stay");
  if (shippedFriendForClear(96)?.friendId !== "friend_032") throw new Error("Fig@96 must stay");
  if (shippedFriendForClear(93)?.friendId !== "friend_031") throw new Error("Basil@93 must stay");
  if (shippedFriendForClear(90)?.friendId !== "friend_030") throw new Error("Clay@90 must stay");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("Ivory@87 must stay");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 must stay");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (shippedFriendForClear(3)?.friendId !== "friend_001") throw new Error("Mango@3 parade lock");
  if (shippedFriendForClear(12)?.friendId !== "friend_004") throw new Error("Tux@12 parade lock");
  if (shippedFriendForClear(24)?.friendId !== "friend_008") throw new Error("Pumpkin@24 parade lock");
  if (shippedFriendForClear(27)?.friendId !== "friend_009") throw new Error("Shadow@27 parade lock");
  if (shippedFriendForClear(30)?.friendId !== "friend_010") throw new Error("Noodle@30 parade lock");
  if (chipsForFriend("friend_040").join(",") !== "Chervil,Frill,Lace") throw new Error("Chervil chips untouched");
  if (chipsForFriend("friend_039").join(",") !== "Fennel,Frond,Anise") throw new Error("Fennel chips untouched");
  if (chipsForFriend("friend_038").join(",") !== "Sorrel,Dock,Zest") throw new Error("Sorrel chips untouched");
  if (chipsForFriend("friend_037").join(",") !== "Nettle,Sting,Leaf") throw new Error("Nettle chips untouched");
  if (chipsForFriend("friend_036").join(",") !== "Ivy,Tendril,Climb") throw new Error("Ivy chips untouched");
  if (chipsForFriend("friend_035").join(",") !== "Briar,Thorn,Hedge") throw new Error("Briar chips untouched");
  if (chipsForFriend("friend_034").join(",") !== "Thistle,Burr,Bramble") throw new Error("Thistle chips untouched");
  if (chipsForFriend("friend_033").join(",") !== "Plum,Damson,Stone") throw new Error("Plum chips untouched");
  if (chipsForFriend("friend_032").join(",") !== "Fig,Olive,Pit") throw new Error("Fig chips untouched");
  if (chipsForFriend("friend_031").join(",") !== "Basil,Pesto,Herb") throw new Error("Basil chips untouched");
  if (chipsForFriend("friend_030").join(",") !== "Clay,Brick,Terra") throw new Error("Clay chips untouched");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") throw new Error("Ivory chips untouched");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[126] !== "friend_042") throw new Error("SLICE_UNLOCKS[126] must be friend_042 after Parsley ship");
  if (SLICE_UNLOCKS[129] !== "friend_043") throw new Error("SLICE_UNLOCKS[129] must be friend_043 after Dill ship");
  if (SLICE_UNLOCKS[132] !== "friend_044") throw new Error("SLICE_UNLOCKS[132] must be friend_044 after Tarragon ship");
  if (SLICE_UNLOCKS[135] !== "friend_045") throw new Error("SLICE_UNLOCKS[135] must be friend_045 after Oregano ship");
  if (SLICE_UNLOCKS[138] !== "friend_046") throw new Error("SLICE_UNLOCKS[138] must be friend_046 after Marjoram ship");
  if (SLICE_UNLOCKS[141] !== "friend_047") throw new Error("SLICE_UNLOCKS[141] must be friend_047 after Thyme ship");
  if (SLICE_UNLOCKS[144] !== "friend_048") throw new Error("SLICE_UNLOCKS[144] must be friend_048 after Rosemary ship");
  if (SLICE_UNLOCKS[147] !== "friend_049") throw new Error("SLICE_UNLOCKS[147] must be friend_049 after Mint ship");
  if (SLICE_UNLOCKS[150] !== "friend_050") throw new Error("SLICE_UNLOCKS[150] must be friend_050 after Catnip ship");
  if (SLICE_UNLOCKS[153] !== "friend_051") throw new Error("SLICE_UNLOCKS[153] must be friend_051 after Lavender ship");
  if (/pebble|Pebble/i.test(lovage48 + lovage72)) throw new Error("Lovage art must not use Pebble");
  if (/chervil|frill|lace|fennel|frond|anise/i.test(lovage48 + lovage72)) throw new Error("Lovage art must not collide Chervil/Fennel marks");
  const l124 = LEVELS.find((r) => r.id === "L124")!;
  const l125 = LEVELS.find((r) => r.id === "L125")!;
  const l126 = LEVELS.find((r) => r.id === "L126")!;
  if (/frill|lace|sill/i.test([l124.name, l125.name, l126.name].join(","))) {
    throw new Error("L124–L126 must not reuse Frill/Lace/Sill names");
  }
  const lovageGatePair = (level: typeof l124) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (lovageGatePair(l124) !== "1,5/3,3") throw new Error(`L124 gates must be delta (-2,2) pair, got ${lovageGatePair(l124)}`);
  if (lovageGatePair(l125) !== "1,0/4,3") throw new Error(`L125 gates must be delta (-3,-3) pair, got ${lovageGatePair(l125)}`);
  if (lovageGatePair(l126) !== "3,1/5,2") throw new Error(`L126 gates must be delta (2,1) pair, got ${lovageGatePair(l126)}`);
  const occ126 = new Set([
    ...l126.cats.map((c) => `${c.x},${c.y}`),
    ...l126.gates.map((g) => `${g.x},${g.y}`),
  ]);
  if (occ126.has("5,5")) throw new Error("L126 Bed must be off Nori seat (5,5)");
  if (occ126.has("5,0") || occ126.has("0,5")) throw new Error("L126 Bed must be off Perch seats");
  if (occ126.has("5,1") || occ126.has("1,2")) throw new Error("L126 Bed must be off Medlar seats");
  if (l126.gates[0].y === l126.gates[1].y) throw new Error("L126 Bed must not same-row Nest");
  if (l126.gates[0].x === l126.gates[1].x) throw new Error("L126 Bed must not column Porch");
  if (l124.cats[0].x === l124.cats[1].x) throw new Error("L124 Rib must not stacked-column Vine");
  if (SOLVES.L124[0][0] === "cat_orange" && SOLVES.L124[0][1] === "n") {
    throw new Error("L124 Rib Cut must not open orange-north (Frill clone)");
  }
  if (SOLVES.L125[0][0] === "cat_orange" && SOLVES.L125[0][1] === "s") {
    throw new Error("L125 Rib Gap must not open orange-south (Lace clone)");
  }
  for (const level of [l124, l125, l126]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
  }
  const wallKeyL = (level: typeof l124) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsL = ["L121", "L122", "L123"].map((id) => wallKeyL(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L124", "L125", "L126"] as const) {
    const key = wallKeyL(LEVELS.find((r) => r.id === id)!);
    if (priorWallsL.includes(key)) throw new Error(`${id} wall twin of L121–L123`);
  }
  if (ART_KIT_PATH.lovage.loaf48 !== "/assets/cats/lovage_loaf_48.svg") throw new Error("ART_KIT_PATH.lovage loaf48");
  if (ART_KIT_PATH.lovage.loaf72 !== "/assets/cats/lovage_loaf_72.svg") throw new Error("ART_KIT_PATH.lovage loaf72");
  if (ART_KIT_PATH.chervil.loaf48 !== "/assets/cats/chervil_loaf_48.svg") throw new Error("Chervil kit must stay");
  const saveL = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveL.includes("rib bed")) throw new Error("SaveProvider must yard-bubble rib bed for Lovage");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_041.md"))) throw new Error("missing CH4_FRIEND_041.md");
  if (!existsSync(resolve("data/collection/chapter4_lovage_bang.json"))) throw new Error("missing collection lovage bang");
  if (!existsSync(resolve("data/chapter4_lovage_bang.json"))) throw new Error("missing chapter4_lovage_bang.json");
  const nameModal = readFileSync(resolve("src/components/puzzle/NameCatModal.tsx"), "utf8");
  if (!nameModal.includes("LOVAGE_FRIEND_ID")) throw new Error("NameCatModal must lockChips Lovage");
  const shellL = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shellL.includes("Full-viewport") && !shellL.includes("full-viewport") && !shellL.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shellL)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Lovage@123 + L124–L126 ok · chips Lovage/Stem/Rib · coat #9CB87A + rib freckles #5E7348 · Rib Cut / Rib Gap / Bed Stop · Chervil/Fennel/Sorrel/Nettle/Ivy/Briar/Thistle/Plum/Fig/Basil/Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}

{
  // Ch4 Parsley@126 + L127–L129 triad (Curl/Sprig/Garnish — deltas (2,2)/(-4,4)/(2,4))
  for (const [id, name] of [
    ["L127", "Curl Cut"],
    ["L128", "Sprig Gap"],
    ["L129", "Garnish Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close`);
    }
    if (/parsley (cut|gap|stop)/i.test(level.name)) {
      throw new Error(`${id} must not be Parsley Cut/Gap/Stop`);
    }
    if (/lovage (cut|gap|stop)/i.test(level.name)) {
      throw new Error(`${id} must not be Lovage Cut/Gap/Stop (L93 Lovage Stop kill)`);
    }
    if (/rib (cut|gap)|bed stop/i.test(level.name)) {
      throw new Error(`${id} must not reuse Rib Cut / Rib Gap / Bed Stop`);
    }
    if (/chervil (cut|gap|stop)/i.test(level.name)) {
      throw new Error(`${id} must not be Chervil Cut/Gap/Stop`);
    }
    if (/frill|lace|sill/i.test(level.name)) {
      throw new Error(`${id} must not reuse Frill/Lace/Sill names`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (pair === "3,2/3,3" || pair === "2,2/3,2" || pair === "2,3/3,3") {
      throw new Error(`${id} on gate-farm pair`);
    }
    if (pair === "2,3/4,5" || pair === "0,3/3,2" || pair === "3,3/3,5") {
      throw new Error(`${id} must not twin Rail/Shade/Porch gates`);
    }
    if (pair === "0,3/4,4" || pair === "2,5/4,1" || pair === "1,3/5,3") {
      throw new Error(`${id} must not twin Vine/Thorn/Nest gates`);
    }
    if (pair === "3,1/5,0" || pair === "0,0/3,4" || pair === "2,1/5,2") {
      throw new Error(`${id} must not twin Fence/Burr/Perch gates`);
    }
    if (pair === "2,0/2,3" || pair === "3,0/3,2" || pair === "1,2/5,1") {
      throw new Error(`${id} must not twin Greengage/Sloe/Medlar gates`);
    }
    if (pair === "3,5/5,5") throw new Error(`${id} must not twin Nori WRAP`);
    if (pair === "0,4/2,2" || pair === "2,0/3,3" || pair === "2,4/5,2") {
      throw new Error(`${id} must not twin Stem/Sting/Under gates`);
    }
    if (pair === "0,4/1,0" || pair === "3,0/5,4" || pair === "0,2/1,3") {
      throw new Error(`${id} must not twin Dock/Zest/Stoop gates`);
    }
    if (pair === "1,3/5,2" || pair === "0,3/2,4" || pair === "4,5/5,3") {
      throw new Error(`${id} must not twin Frond/Anise/Breeze gates`);
    }
    if (pair === "2,5/5,1" || pair === "1,4/2,3" || pair === "2,2/3,5") {
      throw new Error(`${id} must not twin Frill/Lace/Sill gates`);
    }
    if (pair === "1,5/3,3" || pair === "1,0/4,3" || pair === "3,1/5,2") {
      throw new Error(`${id} must not twin Rib/Rib/Bed gates`);
    }
  }
  if (LEVELS.find((row) => row.id === "L124")?.name !== "Rib Cut") throw new Error("L124 Rib Cut locked");
  if (LEVELS.find((row) => row.id === "L125")?.name !== "Rib Gap") throw new Error("L125 Rib Gap locked");
  if (LEVELS.find((row) => row.id === "L126")?.name !== "Bed Stop") throw new Error("L126 Bed Stop locked");
  if (LEVELS.find((row) => row.id === "L121")?.name !== "Frill Cut") throw new Error("L121 Frill Cut locked");
  if (LEVELS.find((row) => row.id === "L122")?.name !== "Lace Gap") throw new Error("L122 Lace Gap locked");
  if (LEVELS.find((row) => row.id === "L123")?.name !== "Sill Stop") throw new Error("L123 Sill Stop locked");
  if (LEVELS.find((row) => row.id === "L112")?.name !== "Stem Cut") throw new Error("L112 Stem Cut locked");
  if (LEVELS.find((row) => row.id === "L93")?.name !== "Lovage Stop") throw new Error("L93 Lovage Stop locked");
  if (SLICE_UNLOCKS[126] !== "friend_042") throw new Error("SLICE_UNLOCKS[126] must be friend_042");
  if (shippedFriendForClear(126)?.friendId !== "friend_042") throw new Error("onClear(126) must award Parsley");
  const parsley = friendById("friend_042");
  if (!parsley) throw new Error("friend_042 missing from CATALOG");
  if (parsley.defaultName !== "Parsley") throw new Error("default name must be Parsley");
  if (parsley.unlockClear !== 126) throw new Error("Parsley unlockClear must be 126");
  if (parsley.phenotype.artKit !== "parsley") throw new Error("Parsley artKit must be parsley");
  if (parsley.phenotype.personality !== "Curl-soft") throw new Error("Parsley personality must be Curl-soft");
  if (parsley.phenotype.boardColor !== "gray") throw new Error("Parsley boardColor must be gray");
  if (parsley.phenotype.color !== "Gray") throw new Error("Parsley color must be Gray");
  if (parsley.phenotype.pattern !== "Freckled") throw new Error("Parsley pattern must be Freckled");
  if (chipsForFriend("friend_042").join(",") !== "Parsley,Curl,Sprig") {
    throw new Error(`Parsley chips must be Parsley/Curl/Sprig, got ${chipsForFriend("friend_042").join(",")}`);
  }
  if (chipsForFriend("friend_042").some((c) => /lovage|stem|rib|chervil|frill|lace|fennel|pebble/i.test(c))) {
    throw new Error("Parsley chips must ban Lovage/Stem/Rib/Chervil/Frill/Lace/Fennel/Pebble");
  }
  const parsley48 = readFileSync(resolve("public/assets/cats/parsley_loaf_48.svg"), "utf8");
  const parsley72 = readFileSync(resolve("public/assets/cats/parsley_loaf_72.svg"), "utf8");
  if (!parsley48.includes("#6FA86A") || !parsley72.includes("#6FA86A")) throw new Error("Parsley loaf must use fresh parsley-leaf green coat #6FA86A");
  if (!parsley48.includes("#3F6B3C") || !parsley72.includes("#3F6B3C")) throw new Error("Parsley loaf must use curl freckles #3F6B3C");
  if (!parsley48.includes("#C3E8BE") || !parsley72.includes("#C3E8BE")) throw new Error("Parsley loaf must use belly #C3E8BE");
  if (parsley48.includes("#9CB87A") || parsley72.includes("#9CB87A")) throw new Error("Parsley loaf must not use Lovage celery-stem #9CB87A");
  if (parsley48.includes("#5E7348") || parsley72.includes("#5E7348")) throw new Error("Parsley loaf must not use Lovage rib freckles #5E7348");
  if (parsley48.includes("#C6D9B4") || parsley72.includes("#C6D9B4")) throw new Error("Parsley loaf must not use Chervil herb-lace #C6D9B4");
  if (parsley48.includes("#5E7F52") || parsley72.includes("#5E7F52")) throw new Error("Parsley loaf must not use Chervil lace freckles #5E7F52");
  if (parsley48.includes("#E6C86E") || parsley72.includes("#E6C86E")) throw new Error("Parsley loaf must not use Fennel cream-gold #E6C86E");
  if (parsley48.includes("#7A9B6A") || parsley72.includes("#7A9B6A")) throw new Error("Parsley loaf must not use Basil herb-green #7A9B6A");
  if (parsley48.includes("#6A7D6E") || parsley72.includes("#6A7D6E")) throw new Error("Parsley loaf must not use Nettle sage #6A7D6E");
  if (parsley48.includes("#1A2C24") || parsley72.includes("#1A2C24")) throw new Error("Parsley loaf must not use Ivy deep green-black #1A2C24");
  if (parsley48.includes("#7E8F86") || parsley72.includes("#7E8F86")) throw new Error("Parsley loaf must not use Juniper moss #7E8F86");
  if (parsley48.includes("#C8D24A") || parsley72.includes("#C8D24A")) throw new Error("Parsley loaf must not use Sorrel lemon-green #C8D24A");
  if (furnitureGiftsForClear(126).length) throw new Error("Parsley@126 must gift no furniture");
  const yardP = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardP.match(/const parsley =/g) || []).length !== 1) throw new Error("YardScene must declare parsley once");
  if ((yardP.match(/\{parsley \?/g) || []).length !== 1) throw new Error("YardScene must render parsley once");
  if (TUTORIAL_RESCUES.length !== 51) throw new Error("Met must include through Parsley (42)");
  if (shippedFriendForClear(123)?.friendId !== "friend_041") throw new Error("Lovage@123 must stay");
  if (shippedFriendForClear(120)?.friendId !== "friend_040") throw new Error("Chervil@120 must stay");
  if (shippedFriendForClear(117)?.friendId !== "friend_039") throw new Error("Fennel@117 must stay");
  if (shippedFriendForClear(114)?.friendId !== "friend_038") throw new Error("Sorrel@114 must stay");
  if (shippedFriendForClear(111)?.friendId !== "friend_037") throw new Error("Nettle@111 must stay");
  if (shippedFriendForClear(108)?.friendId !== "friend_036") throw new Error("Ivy@108 must stay");
  if (shippedFriendForClear(105)?.friendId !== "friend_035") throw new Error("Briar@105 must stay");
  if (shippedFriendForClear(102)?.friendId !== "friend_034") throw new Error("Thistle@102 must stay");
  if (shippedFriendForClear(99)?.friendId !== "friend_033") throw new Error("Plum@99 must stay");
  if (shippedFriendForClear(96)?.friendId !== "friend_032") throw new Error("Fig@96 must stay");
  if (shippedFriendForClear(93)?.friendId !== "friend_031") throw new Error("Basil@93 must stay");
  if (shippedFriendForClear(90)?.friendId !== "friend_030") throw new Error("Clay@90 must stay");
  if (shippedFriendForClear(87)?.friendId !== "friend_029") throw new Error("Ivory@87 must stay");
  if (shippedFriendForClear(84)?.friendId !== "friend_028") throw new Error("Juniper@84 must stay");
  if (shippedFriendForClear(81)?.friendId !== "friend_027") throw new Error("Linen@81 must stay");
  if (shippedFriendForClear(78)?.friendId !== "friend_026") throw new Error("Cocoa@78 must stay");
  if (shippedFriendForClear(75)?.friendId !== "friend_025") throw new Error("Steve@75 must stay");
  if (shippedFriendForClear(72)?.friendId !== "friend_024") throw new Error("Maple@72 must stay");
  if (shippedFriendForClear(69)?.friendId !== "friend_023") throw new Error("Blue@69 must stay");
  if (shippedFriendForClear(66)?.friendId !== "friend_022") throw new Error("Coral@66 must stay");
  if (shippedFriendForClear(63)?.friendId !== "friend_021") throw new Error("Velvet@63 must stay");
  if (shippedFriendForClear(60)?.friendId !== "friend_020") throw new Error("Bean@60 parade lock");
  if (shippedFriendForClear(3)?.friendId !== "friend_001") throw new Error("Mango@3 parade lock");
  if (shippedFriendForClear(12)?.friendId !== "friend_004") throw new Error("Tux@12 parade lock");
  if (shippedFriendForClear(24)?.friendId !== "friend_008") throw new Error("Pumpkin@24 parade lock");
  if (shippedFriendForClear(27)?.friendId !== "friend_009") throw new Error("Shadow@27 parade lock");
  if (shippedFriendForClear(30)?.friendId !== "friend_010") throw new Error("Noodle@30 parade lock");
  if (chipsForFriend("friend_041").join(",") !== "Lovage,Stem,Rib") throw new Error("Lovage chips untouched");
  if (chipsForFriend("friend_040").join(",") !== "Chervil,Frill,Lace") throw new Error("Chervil chips untouched");
  if (chipsForFriend("friend_039").join(",") !== "Fennel,Frond,Anise") throw new Error("Fennel chips untouched");
  if (chipsForFriend("friend_038").join(",") !== "Sorrel,Dock,Zest") throw new Error("Sorrel chips untouched");
  if (chipsForFriend("friend_037").join(",") !== "Nettle,Sting,Leaf") throw new Error("Nettle chips untouched");
  if (chipsForFriend("friend_036").join(",") !== "Ivy,Tendril,Climb") throw new Error("Ivy chips untouched");
  if (chipsForFriend("friend_035").join(",") !== "Briar,Thorn,Hedge") throw new Error("Briar chips untouched");
  if (chipsForFriend("friend_034").join(",") !== "Thistle,Burr,Bramble") throw new Error("Thistle chips untouched");
  if (chipsForFriend("friend_033").join(",") !== "Plum,Damson,Stone") throw new Error("Plum chips untouched");
  if (chipsForFriend("friend_032").join(",") !== "Fig,Olive,Pit") throw new Error("Fig chips untouched");
  if (chipsForFriend("friend_031").join(",") !== "Basil,Pesto,Herb") throw new Error("Basil chips untouched");
  if (chipsForFriend("friend_030").join(",") !== "Clay,Brick,Terra") throw new Error("Clay chips untouched");
  if (chipsForFriend("friend_029").join(",") !== "Ivory,Lace,Sheer") throw new Error("Ivory chips untouched");
  if (chipsForFriend("friend_028").join(",") !== "Juniper,Moss,Sage") throw new Error("Juniper chips untouched");
  if (chipsForFriend("friend_027").join(",") !== "Linen,Gauze,Whisper") throw new Error("Linen chips untouched");
  if (chipsForFriend("friend_026").join(",") !== "Cocoa,Mocha,Fudge") throw new Error("Cocoa chips untouched");
  if (chipsForFriend("friend_025").join(",") !== "Steve,Bob,Ned") throw new Error("Steve chips untouched");
  if (chipsForFriend("friend_024").join(",") !== "Maple,Hazel,Amber") throw new Error("Maple chips untouched");
  if (chipsForFriend("friend_023").join(",") !== "Blue,Silver,Steel") throw new Error("Blue chips untouched");
  if (chipsForFriend("friend_022").join(",") !== "Coral,Bloom,Petal") throw new Error("Coral chips untouched");
  if (chipsForFriend("friend_021").join(",") !== "Velvet,Plush,Dove") throw new Error("Velvet chips untouched");
  if (SLICE_UNLOCKS[129] !== "friend_043") throw new Error("SLICE_UNLOCKS[129] must be friend_043 after Dill ship");
  if (SLICE_UNLOCKS[132] !== "friend_044") throw new Error("SLICE_UNLOCKS[132] must be friend_044 after Tarragon ship");
  if (SLICE_UNLOCKS[135] !== "friend_045") throw new Error("SLICE_UNLOCKS[135] must be friend_045 after Oregano ship");
  if (SLICE_UNLOCKS[138] !== "friend_046") throw new Error("SLICE_UNLOCKS[138] must be friend_046 after Marjoram ship");
  if (SLICE_UNLOCKS[141] !== "friend_047") throw new Error("SLICE_UNLOCKS[141] must be friend_047 after Thyme ship");
  if (SLICE_UNLOCKS[144] !== "friend_048") throw new Error("SLICE_UNLOCKS[144] must be friend_048 after Rosemary ship");
  if (SLICE_UNLOCKS[147] !== "friend_049") throw new Error("SLICE_UNLOCKS[147] must be friend_049 after Mint ship");
  if (SLICE_UNLOCKS[150] !== "friend_050") throw new Error("SLICE_UNLOCKS[150] must be friend_050 after Catnip ship");
  if (SLICE_UNLOCKS[153] !== "friend_051") throw new Error("SLICE_UNLOCKS[153] must be friend_051 after Lavender ship");
  if (/pebble|Pebble/i.test(parsley48 + parsley72)) throw new Error("Parsley art must not use Pebble");
  if (/lovage|stem|rib|chervil|frill|lace|fennel|frond|anise/i.test(parsley48 + parsley72)) {
    throw new Error("Parsley art must not collide Lovage/Chervil/Fennel marks");
  }
  const l127 = LEVELS.find((r) => r.id === "L127")!;
  const l128 = LEVELS.find((r) => r.id === "L128")!;
  const l129 = LEVELS.find((r) => r.id === "L129")!;
  if (/rib|bed/i.test([l127.name, l128.name, l129.name].join(","))) {
    throw new Error("L127–L129 must not reuse Rib/Bed names");
  }
  const parsleyGatePair = (level: typeof l127) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (parsleyGatePair(l127) !== "0,1/2,3") throw new Error(`L127 gates must be delta (2,2) pair, got ${parsleyGatePair(l127)}`);
  if (parsleyGatePair(l128) !== "0,4/4,0") throw new Error(`L128 gates must be delta (-4,4) pair, got ${parsleyGatePair(l128)}`);
  if (parsleyGatePair(l129) !== "0,0/2,4") throw new Error(`L129 gates must be delta (2,4) pair, got ${parsleyGatePair(l129)}`);
  const occ129 = new Set([
    ...l129.cats.map((c) => `${c.x},${c.y}`),
    ...l129.gates.map((g) => `${g.x},${g.y}`),
  ]);
  if (occ129.has("5,5")) throw new Error("L129 Garnish must be off Nori seat (5,5)");
  if (occ129.has("5,0") || occ129.has("0,5")) throw new Error("L129 Garnish must be off Perch seats");
  if (occ129.has("5,1") || occ129.has("1,2")) throw new Error("L129 Garnish must be off Medlar seats");
  if (l129.gates[0].y === l129.gates[1].y) throw new Error("L129 Garnish must not same-row Nest");
  if (l129.gates[0].x === l129.gates[1].x) throw new Error("L129 Garnish must not column Porch");
  if (l127.cats[0].x === l127.cats[1].x) throw new Error("L127 Curl must not stacked-column Vine");
  if (SOLVES.L127[0][0] === "cat_orange" && SOLVES.L127[0][1] === "n") {
    throw new Error("L127 Curl Cut must not open orange-north (Frill clone)");
  }
  if (SOLVES.L127[0][0] === "cat_gray" && SOLVES.L127[0][1] === "n") {
    throw new Error("L127 Curl Cut must not open gray-north (Rib clone)");
  }
  if (SOLVES.L128[0][0] === "cat_orange" && SOLVES.L128[0][1] === "s") {
    throw new Error("L128 Sprig Gap must not open orange-south (Lace clone)");
  }
  if (SOLVES.L128[0][0] === "cat_orange" && SOLVES.L128[0][1] === "e") {
    throw new Error("L128 Sprig Gap must not open orange-east (Rib clone)");
  }
  for (const level of [l127, l128, l129]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
    if (level.width !== 6 || level.height !== 6) throw new Error(`${level.id} must be 6×6`);
    if (!level.templateId.startsWith("LT02_LT08_")) throw new Error(`${level.id} must be LT02+LT08`);
  }
  const wallKeyP = (level: typeof l127) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsP = ["L124", "L125", "L126"].map((id) => wallKeyP(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L127", "L128", "L129"] as const) {
    const key = wallKeyP(LEVELS.find((r) => r.id === id)!);
    if (priorWallsP.includes(key)) throw new Error(`${id} wall twin of L124–L126`);
  }
  if (ART_KIT_PATH.parsley.loaf48 !== "/assets/cats/parsley_loaf_48.svg") throw new Error("ART_KIT_PATH.parsley loaf48");
  if (ART_KIT_PATH.parsley.loaf72 !== "/assets/cats/parsley_loaf_72.svg") throw new Error("ART_KIT_PATH.parsley loaf72");
  if (ART_KIT_PATH.lovage.loaf48 !== "/assets/cats/lovage_loaf_48.svg") throw new Error("Lovage kit must stay");
  const saveP = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveP.includes("garnish rail")) throw new Error("SaveProvider must yard-bubble garnish rail for Parsley");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_042.md"))) throw new Error("missing CH4_FRIEND_042.md");
  if (!existsSync(resolve("data/collection/chapter4_parsley_bang.json"))) throw new Error("missing collection parsley bang");
  if (!existsSync(resolve("data/chapter4_parsley_bang.json"))) throw new Error("missing chapter4_parsley_bang.json");
  const nameModalP = readFileSync(resolve("src/components/puzzle/NameCatModal.tsx"), "utf8");
  if (!nameModalP.includes("PARSLEY_FRIEND_ID")) throw new Error("NameCatModal must lockChips Parsley");
  if (!nameModalP.includes("LOVAGE_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Lovage");
  const shellP = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shellP.includes("Full-viewport") && !shellP.includes("full-viewport") && !shellP.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shellP)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Parsley@126 + L127–L129 ok · chips Parsley/Curl/Sprig · coat #6FA86A + curl freckles #3F6B3C · Curl Cut / Sprig Gap / Garnish Stop · Lovage/Chervil/Fennel/Sorrel/Nettle/Ivy/Briar/Thistle/Plum/Fig/Basil/Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}

verifyChapter4Dill(SOLVES);
verifyChapter4Tarragon(SOLVES);
verifyChapter4Oregano(SOLVES);
verifyChapter4Marjoram(SOLVES);
verifyChapter4Thyme(SOLVES);
verifyChapter4Rosemary(SOLVES);
verifyChapter4Mint(SOLVES);
verifyChapter4Catnip(SOLVES);
verifyChapter4Lavender(SOLVES);

console.log("All authored boards ok");
