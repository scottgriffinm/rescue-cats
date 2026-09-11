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
      [2, 1],
      [2, 2],
      [3, 4],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 5, 2],
    ],
    gates: [
      ["gate_orange", 5, 0],
      ["gate_gray", 0, 5],
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
    N: 9,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 1],
      [2, 2],
      [3, 4],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 5, 2],
    ],
    gates: [
      ["gate_orange", 4, 0],
      ["gate_gray", 0, 5],
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
    N: 8,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 1],
      [2, 2],
      [3, 4],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 5, 2],
    ],
    gates: [
      ["gate_orange", 3, 0],
      ["gate_gray", 0, 5],
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
      ["gate_orange", 5, 3],
      ["gate_gray", 1, 5],
    ],
  },
  L17: {
    size: 6,
    N: 8,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 1],
      [2, 2],
      [3, 4],
      [5, 0],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 5, 2],
    ],
    gates: [
      ["gate_orange", 3, 0],
      ["gate_gray", 0, 4],
    ],
  },
  L18: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 1],
      [2, 2],
      [3, 4],
      [0, 4],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 5, 2],
    ],
    gates: [
      ["gate_orange", 1, 3],
      ["gate_gray", 5, 5],
    ],
  },
  L19: {
    size: 6,
    N: 9,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 0],
      [2, 1],
      [2, 2],
      [2, 5],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 5, 2],
    ],
    gates: [
      ["gate_orange", 3, 3],
      ["gate_gray", 1, 5],
    ],
  },
  L20: {
    size: 6,
    N: 8,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 0],
      [2, 1],
      [2, 2],
      [0, 4],
      [3, 4],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 5, 2],
    ],
    gates: [
      ["gate_orange", 2, 3],
      ["gate_gray", 5, 5],
    ],
  },
  L21: {
    size: 6,
    N: 12,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 0],
      [2, 1],
      [2, 3],
      [3, 3],
      [4, 5],
      [0, 4],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 5, 2],
    ],
    gates: [
      ["gate_orange", 4, 3],
      ["gate_gray", 1, 4],
    ],
  },
  L22: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 0],
      [2, 1],
      [2, 2],
      [3, 4],
      [2, 5],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 5, 2],
    ],
    gates: [
      ["gate_orange", 4, 3],
      ["gate_gray", 1, 5],
    ],
  },
  L23: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 0],
      [1, 2],
      [1, 3],
      [5, 3],
      [2, 5],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 5, 2],
    ],
    gates: [
      ["gate_orange", 2, 3],
      ["gate_gray", 4, 5],
    ],
  },
  L24: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 1],
      [5, 1],
      [0, 0],
    ],
    cats: [
      ["cat_orange", 0, 4],
      ["cat_gray", 1, 1],
    ],
    gates: [
      ["gate_orange", 3, 2],
      ["gate_gray", 2, 2],
    ],
  },
  L25: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 0],
      [2, 1],
      [4, 2],
    ],
    cats: [
      ["cat_orange", 4, 5],
      ["cat_gray", 2, 0],
    ],
    gates: [
      ["gate_orange", 3, 2],
      ["gate_gray", 3, 3],
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
      [2, 0],
      [2, 1],
      [2, 2],
      [3, 4],
      [2, 5],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_black", 5, 2],
    ],
    gates: [
      ["gate_orange", 4, 3],
      ["gate_black", 0, 5],
    ],
  },
  L29: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [5, 2],
      [0, 4],
      [2, 2],
    ],
    cats: [
      ["cat_orange", 5, 4],
      ["cat_black", 1, 1],
    ],
    gates: [
      ["gate_orange", 2, 3],
      ["gate_black", 3, 3],
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
      [5, 5],
      [4, 1],
    ],
    cats: [
      ["cat_orange", 3, 1],
      ["cat_black", 4, 3],
    ],
    gates: [
      ["gate_orange", 3, 2],
      ["gate_black", 2, 2],
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
      [1, 0],
      [0, 1],
      [5, 1],
      [4, 4],
      [2, 5],
    ],
    cats: [
      ["cat_orange", 5, 0],
      ["cat_gray", 0, 3],
    ],
    gates: [
      ["gate_orange", 3, 2],
      ["gate_gray", 2, 2],
    ],
  },
  L35: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 0],
      [1, 1],
      [5, 3],
      [0, 5],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_black", 2, 2],
    ],
    gates: [
      ["gate_orange", 2, 4],
      ["gate_black", 5, 5],
    ],
  },
  L36: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 0],
      [5, 1],
      [0, 3],
      [4, 5],
    ],
    cats: [
      ["cat_orange", 5, 0],
      ["cat_gray", 0, 1],
    ],
    gates: [
      ["gate_orange", 2, 3],
      ["gate_gray", 5, 5],
    ],
  },
  L37: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 0],
      [0, 2],
      [5, 4],
      [2, 5],
    ],
    cats: [
      ["cat_orange", 0, 0],
      ["cat_gray", 0, 4],
    ],
    gates: [
      ["gate_orange", 3, 2],
      ["gate_gray", 5, 5],
    ],
  },
  L38: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [1, 0],
      [5, 2],
      [0, 4],
      [3, 5],
    ],
    cats: [
      ["cat_orange", 5, 0],
      ["cat_black", 0, 1],
    ],
    gates: [
      ["gate_orange", 2, 3],
      ["gate_black", 3, 3],
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
      [1, 0],
      [5, 1],
      [0, 4],
      [4, 5],
    ],
    cats: [
      ["cat_orange", 5, 0],
      ["cat_gray", 0, 1],
    ],
    gates: [
      ["gate_orange", 3, 2],
      ["gate_gray", 3, 3],
    ],
  },
  L41: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 0],
      [5, 1],
      [1, 4],
      [4, 5],
    ],
    cats: [
      ["cat_orange", 5, 0],
      ["cat_black", 3, 1],
    ],
    gates: [
      ["gate_orange", 3, 2],
      ["gate_black", 3, 3],
    ],
  },
  L42: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [3, 2],
      [4, 5],
      [0, 0],
      [5, 1],
    ],
    cats: [
      ["cat_orange", 3, 1],
      ["cat_gray", 0, 4],
    ],
    gates: [
      ["gate_orange", 2, 3],
      ["gate_gray", 5, 5],
    ],
  },
  L43: {
    size: 6,
    N: 10,
    colorLocks: true,
    colors: true,
    walls: [
      [0, 1],
      [0, 2],
      [3, 2],
    ],
    cats: [
      ["cat_orange", 2, 2],
      ["cat_gray", 5, 3],
    ],
    gates: [
      ["gate_orange", 2, 3],
      ["gate_gray", 5, 5],
    ],
  },
  L44: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [2, 5],
      [2, 0],
      [4, 1],
    ],
    cats: [
      ["cat_orange", 5, 3],
      ["cat_black", 3, 4],
    ],
    gates: [
      ["gate_orange", 3, 3],
      ["gate_black", 3, 2],
    ],
  },
  L45: {
    size: 6,
    N: 11,
    colorLocks: true,
    colors: true,
    walls: [
      [4, 5],
      [4, 0],
      [5, 2],
    ],
    cats: [
      ["cat_orange", 5, 4],
      ["cat_black", 3, 5],
    ],
    gates: [
      ["gate_orange", 3, 3],
      ["gate_black", 3, 2],
    ],
  },

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
    ["cat_gray", "s"],
    ["cat_gray", "w"],
  ],
  L11: [
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
  ],
  L12: [
    ["cat_gray", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
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
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
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
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
  ],
  L17: [
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
  ],
  L18: [
    ["cat_orange", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
  ],
  L19: [
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
  ],
  L20: [
    ["cat_orange", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
  ],
  L21: [
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "w"],
  ],
  L22: [
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "w"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
  ],
  L23: [
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_gray", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
  ],
  L24: [
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
  ],
  L25: [
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "n"],
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
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "e"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_orange", "w"],
    ["cat_black", "w"],
    ["cat_black", "s"],
  ],
  L29: [
    ["cat_orange", "s"],
    ["cat_black", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_black", "e"],
    ["cat_black", "n"],
    ["cat_black", "w"],
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
    ["cat_orange", "w"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_black", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
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
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_orange", "w"],
    ["cat_gray", "n"],
    ["cat_gray", "e"],
  ],
  L35: [
    ["cat_orange", "s"],
    ["cat_orange", "e"],
    ["cat_black", "w"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_orange", "w"],
    ["cat_black", "s"],
    ["cat_black", "e"],
  ],
  L36: [
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_gray", "s"],
    ["cat_orange", "n"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
  ],
  L37: [
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "w"],
    ["cat_gray", "n"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
  ],
  L38: [
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
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
  ],
  L41: [
    ["cat_black", "e"],
    ["cat_black", "s"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_black", "s"],
    ["cat_black", "e"],
    ["cat_black", "n"],
  ],
  L42: [
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
    ["cat_gray", "n"],
    ["cat_orange", "e"],
    ["cat_gray", "e"],
    ["cat_gray", "s"],
  ],
  L43: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_orange", "n"],
    ["cat_gray", "w"],
    ["cat_orange", "e"],
    ["cat_gray", "s"],
    ["cat_gray", "e"],
  ],
  L44: [
    ["cat_orange", "s"],
    ["cat_orange", "w"],
    ["cat_black", "e"],
    ["cat_orange", "n"],
    ["cat_black", "n"],
    ["cat_black", "w"],
    ["cat_black", "s"],
  ],
  L45: [
    ["cat_orange", "w"],
    ["cat_orange", "s"],
    ["cat_black", "w"],
    ["cat_black", "n"],
    ["cat_orange", "e"],
    ["cat_orange", "n"],
    ["cat_black", "e"],
    ["cat_black", "s"],
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
  if (gate.x !== 4 || gate.y !== 0) {
    throw new Error("L2 gate must sit on the north-edge cell behind the house");
  }
}

{
  const ids = LEVELS.map((level) => level.id);
  if (ids.includes("L10")) throw new Error("L10 must not load on the campaign path");
  if (ids.join(",") !== "L1,L2,L3,L4,L5,L6,L7,L8,L9,L11,L12,L13,L14,L15,L16,L17,L18,L19,L20,L21,L22,L23,L24,L25,L26,L27,L28,L29,L30,L31,L32,L33,L34,L35,L36,L37,L38,L39,L40,L41,L42,L43,L44,L45") {
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
      id === "L45"
    ) {
      for (const copy of copies) {
        for (const piece of [...copy.cats, ...copy.gates]) {
          if (!piece.colorId) throw new Error(`${copy.id} ${piece.id} must use colorId`);
        }
      }
    }
  }
  console.log("Standalone L4–L9 + L11–L45 + LT02/L06-07/LT08 match locked coords");
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
  if (!l9.colorLocks) throw new Error("L9 must lock colors");
  const orange = l9.cats.find((cat) => cat.id === "cat_orange");
  const gray = l9.cats.find((cat) => cat.id === "cat_gray");
  if (!orange || !gray) throw new Error("L9 missing coats");
  const orangeGate = l9.gates.find((gate) => gate.id === "gate_orange");
  if (!orangeGate) throw new Error("L9 missing orange gate");
  if (!isMismatchSolid(l9, gray, orangeGate)) {
    throw new Error("L9 orange house must be solid to the gray coat");
  }
  // Orange straight south lands on gray house — wrong coat.
  assertNotHome(l9, [["cat_orange", "s"], ["cat_gray", "w"]], "L9 wrong-order soft-lock");
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
  if (!l12.colorLocks) throw new Error("L12 must lock colors");
  const orange = l12.cats.find((cat) => cat.id === "cat_orange");
  const gray = l12.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l12.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l12.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L12 missing coats");
  if (!isMismatchSolid(l12, orange, grayGate)) {
    throw new Error("L12 gray house must be solid to the orange coat");
  }
  if (!isMismatchSolid(l12, gray, orangeGate)) {
    throw new Error("L12 orange house must be solid to the gray coat");
  }
  // Orange east first slides through the matching house to the edge.
  assertNotHome(l12, [["cat_orange", "e"]], "L12 orange-first overshoot");
  assertNotHome(
    l12,
    [
      ["cat_orange", "e"],
      ["cat_gray", "s"],
      ["cat_gray", "w"],
    ],
    "L12 orange-first then gray-home",
  );
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
  if (!l14.colorLocks) throw new Error("L14 must lock colors");
  const orange = l14.cats.find((cat) => cat.id === "cat_orange");
  const gray = l14.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l14.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l14.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L14 missing coats");
  if (!isMismatchSolid(l14, gray, orangeGate)) {
    throw new Error("L14 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l14, orange, grayGate)) {
    throw new Error("L14 gray house must be solid to the orange coat");
  }
  // L12 habit: hold the far edge — orange overshoots the closer house.
  assertNotHome(
    l14,
    [
      ["cat_gray", "n"],
      ["cat_orange", "e"],
      ["cat_gray", "s"],
      ["cat_gray", "w"],
    ],
    "L14 L12 edge-park overshoots the closer house",
  );
  assertNotHome(l14, [["cat_orange", "e"]], "L14 orange-east alone overshoots");
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
  if (!l16.colorLocks) throw new Error("L16 must lock colors");
  const orange = l16.cats.find((cat) => cat.id === "cat_orange");
  const gray = l16.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l16.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l16.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L16 missing coats");
  if (!isMismatchSolid(l16, gray, orangeGate)) {
    throw new Error("L16 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l16, orange, grayGate)) {
    throw new Error("L16 gray house must be solid to the orange coat");
  }
  assertNotHome(l16, [["cat_orange", "s"]], "L16 orange-south alone is not home");
  assertNotHome(
    l16,
    [
      ["cat_gray", "w"],
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_orange", "n"],
    ],
    "L16 moving the parked brake first overshoots",
  );
  assertNotHome(
    l16,
    [
      ["cat_orange", "s"],
      ["cat_gray", "s"],
      ["cat_gray", "w"],
      ["cat_orange", "n"],
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_gray", "e"],
    ],
    "L16 L13 habit cannot finish",
  );
}

{
  const l17 = LEVELS.find((level) => level.id === "L17");
  if (!l17) throw new Error("missing L17");
  if (!l17.colorLocks) throw new Error("L17 must lock colors");
  const orange = l17.cats.find((cat) => cat.id === "cat_orange");
  const gray = l17.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l17.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l17.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L17 missing coats");
  if (!isMismatchSolid(l17, gray, orangeGate)) {
    throw new Error("L17 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l17, orange, grayGate)) {
    throw new Error("L17 gray house must be solid to the orange coat");
  }
  assertNotHome(l17, [["cat_orange", "e"]], "L17 orange-east alone overshoots");
  assertNotHome(
    l17,
    [
      ["cat_gray", "n"],
      ["cat_orange", "e"],
      ["cat_gray", "s"],
      ["cat_gray", "w"],
    ],
    "L17 L12 far-edge park overshoots",
  );
  assertNotHome(
    l17,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_orange", "n"],
      ["cat_gray", "w"],
      ["cat_gray", "n"],
      ["cat_gray", "e"],
      ["cat_gray", "s"],
    ],
    "L17 L16 hold-still habit cannot finish",
  );
}

{
  const l18 = LEVELS.find((level) => level.id === "L18");
  if (!l18) throw new Error("missing L18");
  if (!l18.colorLocks) throw new Error("L18 must lock colors");
  const orange = l18.cats.find((cat) => cat.id === "cat_orange");
  const gray = l18.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l18.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l18.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L18 missing coats");
  if (!isMismatchSolid(l18, gray, orangeGate)) {
    throw new Error("L18 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l18, orange, grayGate)) {
    throw new Error("L18 gray house must be solid to the orange coat");
  }
  assertNotHome(l18, [["cat_orange", "s"]], "L18 orange-south alone is not home");
  assertNotHome(
    l18,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_orange", "n"],
      ["cat_gray", "w"],
      ["cat_gray", "n"],
      ["cat_gray", "e"],
      ["cat_gray", "s"],
    ],
    "L18 L16 hold-still habit cannot finish",
  );
  assertNotHome(
    l18,
    [
      ["cat_orange", "s"],
      ["cat_gray", "s"],
      ["cat_gray", "w"],
      ["cat_gray", "n"],
      ["cat_orange", "e"],
      ["cat_orange", "n"],
      ["cat_orange", "w"],
      ["cat_orange", "n"],
    ],
    "L18 L17 hold-south habit cannot finish",
  );
}

{
  const l19 = LEVELS.find((level) => level.id === "L19");
  if (!l19) throw new Error("missing L19");
  if (!l19.colorLocks) throw new Error("L19 must lock colors");
  const orange = l19.cats.find((cat) => cat.id === "cat_orange");
  const gray = l19.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l19.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l19.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L19 missing coats");
  if (!isMismatchSolid(l19, gray, orangeGate)) {
    throw new Error("L19 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l19, orange, grayGate)) {
    throw new Error("L19 gray house must be solid to the orange coat");
  }
  assertNotHome(l19, [["cat_orange", "e"], ["cat_orange", "s"], ["cat_orange", "w"], ["cat_orange", "n"]], "L19 north without the parked brake overshoots");
  assertNotHome(
    l19,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_orange", "n"],
      ["cat_gray", "w"],
      ["cat_gray", "n"],
      ["cat_gray", "e"],
      ["cat_gray", "s"],
    ],
    "L19 L16 hold-still habit cannot finish",
  );
  assertNotHome(
    l19,
    [
      ["cat_orange", "s"],
      ["cat_gray", "s"],
      ["cat_gray", "w"],
      ["cat_gray", "n"],
      ["cat_orange", "e"],
      ["cat_orange", "n"],
      ["cat_orange", "w"],
      ["cat_orange", "n"],
    ],
    "L19 L17 hold-south habit cannot finish",
  );
}

{
  const l20 = LEVELS.find((level) => level.id === "L20");
  if (!l20) throw new Error("missing L20");
  if (!l20.colorLocks) throw new Error("L20 must lock colors");
  const orange = l20.cats.find((cat) => cat.id === "cat_orange");
  const gray = l20.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l20.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l20.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L20 missing coats");
  if (!isMismatchSolid(l20, gray, orangeGate)) {
    throw new Error("L20 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l20, orange, grayGate)) {
    throw new Error("L20 gray house must be solid to the orange coat");
  }
  assertNotHome(l20, [["cat_orange", "s"], ["cat_orange", "e"]], "L20 east without the parked brake overshoots");
  assertNotHome(
    l20,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_orange", "n"],
      ["cat_gray", "w"],
      ["cat_gray", "n"],
      ["cat_gray", "e"],
      ["cat_gray", "s"],
    ],
    "L20 L16 hold-still habit cannot finish",
  );
  assertNotHome(
    l20,
    [
      ["cat_orange", "s"],
      ["cat_gray", "w"],
      ["cat_gray", "s"],
      ["cat_gray", "w"],
      ["cat_orange", "e"],
      ["cat_gray", "e"],
      ["cat_gray", "s"],
    ],
    "L20 L18 park-across habit cannot finish",
  );
}

{
  const l21 = LEVELS.find((level) => level.id === "L21");
  if (!l21) throw new Error("missing L21");
  if (!l21.colorLocks) throw new Error("L21 must lock colors");
  const orange = l21.cats.find((cat) => cat.id === "cat_orange");
  const gray = l21.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l21.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l21.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L21 missing coats");
  if (!isMismatchSolid(l21, gray, orangeGate)) {
    throw new Error("L21 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l21, orange, grayGate)) {
    throw new Error("L21 gray house must be solid to the orange coat");
  }
  assertNotHome(l21, [["cat_orange", "s"]], "L21 orange-south alone is not home");
  assertNotHome(
    l21,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "w"],
      ["cat_gray", "w"],
      ["cat_orange", "n"],
      ["cat_gray", "n"],
      ["cat_gray", "w"],
      ["cat_gray", "s"],
      ["cat_gray", "e"],
    ],
    "L21 L19 hold-north habit cannot finish",
  );
  assertNotHome(
    l21,
    [
      ["cat_orange", "s"],
      ["cat_gray", "w"],
      ["cat_gray", "s"],
      ["cat_orange", "e"],
      ["cat_gray", "e"],
      ["cat_gray", "s"],
    ],
    "L21 L20 hold-east habit cannot finish",
  );
}

{
  const l22 = LEVELS.find((level) => level.id === "L22");
  if (!l22) throw new Error("missing L22");
  if (!l22.colorLocks) throw new Error("L22 must lock colors");
  const orange = l22.cats.find((cat) => cat.id === "cat_orange");
  const gray = l22.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l22.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l22.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L22 missing coats");
  if (!isMismatchSolid(l22, gray, orangeGate)) {
    throw new Error("L22 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l22, orange, grayGate)) {
    throw new Error("L22 gray house must be solid to the orange coat");
  }
  assertNotHome(
    l22,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_orange", "n"],
      ["cat_orange", "e"],
      ["cat_orange", "w"],
    ],
    "L22 west without the parked brake overshoots",
  );
  assertNotHome(
    l22,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "w"],
      ["cat_gray", "w"],
      ["cat_orange", "n"],
      ["cat_gray", "n"],
      ["cat_gray", "w"],
      ["cat_gray", "s"],
      ["cat_gray", "e"],
    ],
    "L22 L19 hold-north habit cannot finish",
  );
  assertNotHome(
    l22,
    [
      ["cat_orange", "s"],
      ["cat_gray", "w"],
      ["cat_gray", "s"],
      ["cat_orange", "e"],
      ["cat_gray", "e"],
      ["cat_gray", "s"],
    ],
    "L22 L20 hold-east habit cannot finish",
  );
}

{
  const l23 = LEVELS.find((level) => level.id === "L23");
  if (!l23) throw new Error("missing L23");
  if (!l23.colorLocks) throw new Error("L23 must lock colors");
  const orange = l23.cats.find((cat) => cat.id === "cat_orange");
  const gray = l23.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l23.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l23.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L23 missing coats");
  if (!isMismatchSolid(l23, gray, orangeGate)) {
    throw new Error("L23 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l23, orange, grayGate)) {
    throw new Error("L23 gray house must be solid to the orange coat");
  }
  assertNotHome(
    l23,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "n"],
    ],
    "L23 north without the corner park overshoots",
  );
  assertNotHome(
    l23,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_orange", "n"],
      ["cat_orange", "e"],
      ["cat_gray", "w"],
      ["cat_gray", "s"],
      ["cat_orange", "w"],
      ["cat_gray", "w"],
      ["cat_gray", "s"],
      ["cat_gray", "e"],
    ],
    "L23 L22 hold-west habit cannot finish",
  );
  assertNotHome(
    l23,
    [
      ["cat_gray", "w"],
      ["cat_gray", "s"],
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_gray", "e"],
      ["cat_gray", "s"],
      ["cat_gray", "e"],
      ["cat_gray", "n"],
      ["cat_gray", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "w"],
      ["cat_gray", "w"],
    ],
    "L23 L21 thread-park habit cannot finish",
  );
}

{
  const l24 = LEVELS.find((level) => level.id === "L24");
  if (!l24) throw new Error("missing L24");
  if (!l24.colorLocks) throw new Error("L24 must lock colors");
  const orange = l24.cats.find((cat) => cat.id === "cat_orange");
  const other = l24.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l24.gates.find((gate) => gate.id === "gate_orange");
  const otherGate = l24.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !other || !orangeGate || !otherGate) throw new Error("L24 missing coats");
  if (other.color !== "gray") throw new Error("L24 must teach a gray coat");
  if (otherGate.color !== "gray") throw new Error("L24 must teach a gray house");
  if (!isMismatchSolid(l24, other, orangeGate)) {
    throw new Error("L24 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l24, orange, otherGate)) {
    throw new Error("L24 gray house must be solid to the orange coat");
  }
}

{
  const l25 = LEVELS.find((level) => level.id === "L25");
  if (!l25) throw new Error("missing L25");
  if (!l25.colorLocks) throw new Error("L25 must lock colors");
  const orange = l25.cats.find((cat) => cat.id === "cat_orange");
  const other = l25.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l25.gates.find((gate) => gate.id === "gate_orange");
  const otherGate = l25.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !other || !orangeGate || !otherGate) throw new Error("L25 missing coats");
  if (other.color !== "gray") throw new Error("L25 must teach a gray coat");
  if (otherGate.color !== "gray") throw new Error("L25 must teach a gray house");
  if (!isMismatchSolid(l25, other, orangeGate)) {
    throw new Error("L25 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l25, orange, otherGate)) {
    throw new Error("L25 gray house must be solid to the orange coat");
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
  if (!l28.colorLocks) throw new Error("L28 must lock colors");
  const orange = l28.cats.find((cat) => cat.id === "cat_orange");
  const black = l28.cats.find((cat) => cat.id === "cat_black");
  const orangeGate = l28.gates.find((gate) => gate.id === "gate_orange");
  const blackGate = l28.gates.find((gate) => gate.id === "gate_black");
  if (!orange || !black || !orangeGate || !blackGate) throw new Error("L28 missing coats");
  if (black.color !== "black") throw new Error("L28 must keep teaching a black coat");
  if (blackGate.color !== "black") throw new Error("L28 must keep a black house");
  if (!isMismatchSolid(l28, black, orangeGate)) {
    throw new Error("L28 orange house must be solid to the black coat");
  }
  if (!isMismatchSolid(l28, orange, blackGate)) {
    throw new Error("L28 black house must be solid to the orange coat");
  }
  assertNotHome(
    l28,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "n"],
    ],
    "L28 through the house without the west park overshoots",
  );
  assertNotHome(
    l28,
    [
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
    "L28 L27 east-park habit cannot finish",
  );
}

{
  const l29 = LEVELS.find((level) => level.id === "L29");
  if (!l29) throw new Error("missing L29");
  if (!l29.colorLocks) throw new Error("L29 must lock colors");
  const orange = l29.cats.find((cat) => cat.id === "cat_orange");
  const other = l29.cats.find((cat) => cat.id === "cat_black");
  const orangeGate = l29.gates.find((gate) => gate.id === "gate_orange");
  const otherGate = l29.gates.find((gate) => gate.id === "gate_black");
  if (!orange || !other || !orangeGate || !otherGate) throw new Error("L29 missing coats");
  if (other.color !== "black") throw new Error("L29 must teach a black coat");
  if (otherGate.color !== "black") throw new Error("L29 must teach a black house");
  if (!isMismatchSolid(l29, other, orangeGate)) {
    throw new Error("L29 orange house must be solid to the black coat");
  }
  if (!isMismatchSolid(l29, orange, otherGate)) {
    throw new Error("L29 black house must be solid to the orange coat");
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
  if (!l31.colorLocks) throw new Error("L31 must lock colors");
  const orange = l31.cats.find((cat) => cat.id === "cat_orange");
  const other = l31.cats.find((cat) => cat.id === "cat_black");
  const orangeGate = l31.gates.find((gate) => gate.id === "gate_orange");
  const otherGate = l31.gates.find((gate) => gate.id === "gate_black");
  if (!orange || !other || !orangeGate || !otherGate) throw new Error("L31 missing coats");
  if (other.color !== "black") throw new Error("L31 must teach a black coat");
  if (otherGate.color !== "black") throw new Error("L31 must teach a black house");
  if (!isMismatchSolid(l31, other, orangeGate)) {
    throw new Error("L31 orange house must be solid to the black coat");
  }
  if (!isMismatchSolid(l31, orange, otherGate)) {
    throw new Error("L31 black house must be solid to the orange coat");
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
  if (!l34.colorLocks) throw new Error("L34 must lock colors");
  const orange = l34.cats.find((cat) => cat.id === "cat_orange");
  const gray = l34.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l34.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l34.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L34 missing coats");
  if (gray.color !== "gray") throw new Error("L34 must bring gray back as a lock color");
  if (grayGate.color !== "gray") throw new Error("L34 must keep a gray house");
  if (!isMismatchSolid(l34, gray, orangeGate)) {
    throw new Error("L34 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l34, orange, grayGate)) {
    throw new Error("L34 gray house must be solid to the orange coat");
  }
  if (orangeGate.x - grayGate.x !== 1 || orangeGate.y !== grayGate.y) {
    throw new Error("L34 gray house must sit west of the orange house");
  }
  assertNotHome(
    l34,
    [
      ["cat_gray", "n"],
      ["cat_gray", "e"],
    ],
    "L34 gray home first does not finish the board",
  );
  assertNotHome(
    l34,
    [
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
    "L34 L33 thread-west habit cannot finish",
  );
}

{
  const l35 = LEVELS.find((level) => level.id === "L35");
  if (!l35) throw new Error("missing L35");
  if (!l35.colorLocks) throw new Error("L35 must lock colors");
  const orange = l35.cats.find((cat) => cat.id === "cat_orange");
  const black = l35.cats.find((cat) => cat.id === "cat_black");
  const orangeGate = l35.gates.find((gate) => gate.id === "gate_orange");
  const blackGate = l35.gates.find((gate) => gate.id === "gate_black");
  if (!orange || !black || !orangeGate || !blackGate) throw new Error("L35 missing coats");
  if (black.color !== "black") throw new Error("L35 must keep teaching a black coat");
  if (blackGate.color !== "black") throw new Error("L35 must keep a black house");
  if (!isMismatchSolid(l35, black, orangeGate)) {
    throw new Error("L35 orange house must be solid to the black coat");
  }
  if (!isMismatchSolid(l35, orange, blackGate)) {
    throw new Error("L35 black house must be solid to the orange coat");
  }
  assertNotHome(
    l35,
    [
      ["cat_orange", "s"],
      ["cat_orange", "e"],
    ],
    "L35 through the house without vacating overshoots",
  );
  assertNotHome(
    l35,
    [
      ["cat_orange", "w"],
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_orange", "n"],
      ["cat_orange", "w"],
      ["cat_gray", "n"],
      ["cat_gray", "e"],
    ],
    "L35 L34 solid-west habit cannot finish",
  );
}

{
  const l36 = LEVELS.find((level) => level.id === "L36");
  if (!l36) throw new Error("missing L36");
  if (!l36.colorLocks) throw new Error("L36 must lock colors");
  const orange = l36.cats.find((cat) => cat.id === "cat_orange");
  const gray = l36.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l36.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l36.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L36 missing coats");
  if (gray.color !== "gray") throw new Error("L36 must keep teaching a gray coat");
  if (grayGate.color !== "gray") throw new Error("L36 must keep a gray house");
  if (!isMismatchSolid(l36, gray, orangeGate)) {
    throw new Error("L36 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l36, orange, grayGate)) {
    throw new Error("L36 gray house must be solid to the orange coat");
  }
  assertNotHome(
    l36,
    [
      ["cat_orange", "w"],
      ["cat_orange", "s"],
    ],
    "L36 through the house without the north park overshoots",
  );
  assertNotHome(
    l36,
    [
      ["cat_orange", "s"],
      ["cat_orange", "e"],
      ["cat_black", "w"],
      ["cat_black", "s"],
      ["cat_black", "e"],
      ["cat_orange", "w"],
      ["cat_black", "s"],
      ["cat_black", "e"],
    ],
    "L36 L35 vacate-first habit cannot finish",
  );
}

{
  const l37 = LEVELS.find((level) => level.id === "L37");
  if (!l37) throw new Error("missing L37");
  if (!l37.colorLocks) throw new Error("L37 must lock colors");
  const orange = l37.cats.find((cat) => cat.id === "cat_orange");
  const gray = l37.cats.find((cat) => cat.id === "cat_gray");
  const orangeGate = l37.gates.find((gate) => gate.id === "gate_orange");
  const grayGate = l37.gates.find((gate) => gate.id === "gate_gray");
  if (!orange || !gray || !orangeGate || !grayGate) throw new Error("L37 missing coats");
  if (gray.color !== "gray") throw new Error("L37 must keep teaching a gray coat");
  if (grayGate.color !== "gray") throw new Error("L37 must keep a gray house");
  if (!isMismatchSolid(l37, gray, orangeGate)) {
    throw new Error("L37 orange house must be solid to the gray coat");
  }
  if (!isMismatchSolid(l37, orange, grayGate)) {
    throw new Error("L37 gray house must be solid to the orange coat");
  }
  assertNotHome(
    l37,
    [
      ["cat_orange", "e"],
      ["cat_orange", "s"],
    ],
    "L37 through the house without the south park overshoots",
  );
  assertNotHome(
    l37,
    [
      ["cat_orange", "w"],
      ["cat_orange", "s"],
      ["cat_gray", "e"],
      ["cat_gray", "n"],
      ["cat_gray", "w"],
      ["cat_gray", "s"],
      ["cat_orange", "n"],
      ["cat_gray", "e"],
      ["cat_gray", "s"],
    ],
    "L37 L36 park-above habit cannot finish",
  );
}

{
  const l38 = LEVELS.find((level) => level.id === "L38");
  if (!l38) throw new Error("missing L38");
  if (!l38.colorLocks) throw new Error("L38 must lock colors");
  const orange = l38.cats.find((cat) => cat.id === "cat_orange");
  const black = l38.cats.find((cat) => cat.id === "cat_black");
  const orangeGate = l38.gates.find((gate) => gate.id === "gate_orange");
  const blackGate = l38.gates.find((gate) => gate.id === "gate_black");
  if (!orange || !black || !orangeGate || !blackGate) throw new Error("L38 missing coats");
  if (black.color !== "black") throw new Error("L38 must keep teaching a black coat");
  if (blackGate.color !== "black") throw new Error("L38 must keep a black house");
  if (!isMismatchSolid(l38, black, orangeGate)) {
    throw new Error("L38 orange house must be solid to the black coat");
  }
  if (!isMismatchSolid(l38, orange, blackGate)) {
    throw new Error("L38 black house must be solid to the orange coat");
  }
  if (blackGate.x - orangeGate.x !== 1 || blackGate.y !== orangeGate.y) {
    throw new Error("L38 black house must sit east of the orange house");
  }
  assertNotHome(
    l38,
    [
      ["cat_orange", "s"],
      ["cat_orange", "w"],
      ["cat_orange", "s"],
    ],
    "L38 through the house without the east solid overshoots",
  );
  assertNotHome(
    l38,
    [
      ["cat_orange", "e"],
      ["cat_gray", "e"],
      ["cat_gray", "s"],
      ["cat_gray", "w"],
      ["cat_gray", "n"],
      ["cat_orange", "s"],
      ["cat_gray", "s"],
      ["cat_gray", "e"],
    ],
    "L38 L37 park-below habit cannot finish",
  );
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
  if (blackGate.x - orangeGate.x !== 1 || blackGate.y !== orangeGate.y) {
    throw new Error("L39 black house must sit east of the orange house");
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
  <ellipse cx="24" cy="64" rx="16" ry="5" fill="#D4C6B4" stroke="#2B2A28" stroke-width="2.5"/>
  <rect x="16" y="14" width="16" height="48" rx="4" fill="#E2D4C2" stroke="#2B2A28" stroke-width="2.5"/>
  <path d="M18 22 H30 M18 30 H30 M18 38 H30 M18 46 H30" stroke="#2B2A28" stroke-width="1.5" stroke-linecap="round" opacity="0.45"/>
  <ellipse cx="24" cy="14" rx="9" ry="4" fill="#D9CBB8" stroke="#2B2A28" stroke-width="2"/>
</svg>`,
    "public/assets/furniture/miniTree.svg": `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="96" viewBox="0 0 72 96" fill="none">
  <ellipse cx="36" cy="88" rx="22" ry="6" fill="#D4C6B4" stroke="#2B2A28" stroke-width="2.5"/>
  <rect x="30" y="36" width="12" height="50" rx="3" fill="#E2D4C2" stroke="#2B2A28" stroke-width="2.5"/>
  <ellipse cx="36" cy="58" rx="20" ry="7" fill="#EDE4D8" stroke="#2B2A28" stroke-width="2.5"/>
  <ellipse cx="36" cy="34" rx="16" ry="6" fill="#F7F0E6" stroke="#2B2A28" stroke-width="2.5"/>
  <ellipse cx="36" cy="30" rx="10" ry="4" fill="#E8A89A" stroke="#2B2A28" stroke-width="2" opacity="0.85"/>
</svg>`,
    "public/assets/furniture/yarnSwing.svg": `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
  <path d="M18 80 L44 22 L52 22 L28 80 Z" fill="#E2D4C2" stroke="#2B2A28" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M78 80 L52 22 L44 22 L68 80 Z" fill="#D4C6B4" stroke="#2B2A28" stroke-width="2.5" stroke-linejoin="round"/>
  <rect x="40" y="20" width="16" height="6" rx="2" fill="#E2D4C2" stroke="#2B2A28" stroke-width="2"/>
  <path d="M44 26 L40 58" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M52 26 L56 58" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round"/>
  <rect x="32" y="56" width="32" height="10" rx="3" fill="#EDE4D8" stroke="#2B2A28" stroke-width="2.5"/>
  <rect x="34" y="58" width="28" height="4" rx="1.5" fill="#F7F0E6" opacity="0.8"/>
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
  <ellipse cx="48" cy="36" rx="38" ry="14" fill="#E2D4C2" stroke="#2B2A28" stroke-width="2.5"/>
  <ellipse cx="48" cy="28" rx="36" ry="14" fill="#F0B429" stroke="#2B2A28" stroke-width="2.5"/>
  <ellipse cx="48" cy="26" rx="22" ry="7" fill="#F7F0E6" stroke="#2B2A28" stroke-width="2"/>
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
  if (shopStill.join(",") !== "furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
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
  if (shopStill.join(",") !== "furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
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
  if (shopStill.join(",") !== "furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
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
  if (furnitureGiftsForClear(27).length !== 0) throw new Error("clear 27 must gift nothing");
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
  if (shopStill.join(",") !== "furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
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
  if (shopStill.join(",") !== "furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
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
  if (shippedFriendForClear(60)) throw new Error("Bean@60 must stay unshipped this slice");
  if (friendForClear(60)?.friendId !== "friend_020") {
    throw new Error("CURRENT must still list Bean at clear 60 for a later slice");
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
  if (shopStill.join(",") !== "furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
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
  if (shippedFriendForClear(60)) throw new Error("Bean@60 must stay unshipped this slice");
  if (friendForClear(60)?.friendId !== "friend_020") {
    throw new Error("CURRENT must still list Bean at clear 60 for a later slice");
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
  if (shopStill.join(",") !== "furn_scratch_post,furn_swing_yarn,furn_tree_mini") {
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
  if (shippedFriendForClear(60)) throw new Error("Bean@60 must stay unshipped this slice");
  if (friendForClear(60)?.friendId !== "friend_020") {
    throw new Error("CURRENT must still list Bean at clear 60 for a later slice");
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
  if (CAMPAIGN_LEVEL_COUNT !== 45) {
    throw new Error(`CAMPAIGN_LEVEL_COUNT must be 45 (max L-id), got ${CAMPAIGN_LEVEL_COUNT}`);
  }
  if (LEVELS.length !== 44) {
    throw new Error(`campaign board count must stay 44 with L10 off-path, got ${LEVELS.length}`);
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
  if (afterL45) throw new Error("L45 must be the last campaign board");
  const l45hud = LEVELS.find((level) => level.id === "L45");
  if (!l45hud || l45hud.number !== 45) throw new Error(`L45 HUD number must be 45, got ${l45hud?.number}`);
  console.log("Level index HUD locks ok · L20=20/45 · L45=45/45 · L9→L11 · L42→L43");
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
    L24: "Color Brake",
    L25: "Vacate Column",
    L29: "Color Cross",
    L30: "Thread South",
    L31: "Vacate West",
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
  if (shippedFriendForClear(45)) throw new Error("Stripe@45 must stay unshipped this slice");
  if (friendForClear(45)?.friendId !== "friend_015") {
    throw new Error("CURRENT must still list Stripe at clear 45 for a later slice");
  }
  if (shippedFriendForClear(60)) throw new Error("Bean@60 must stay unshipped this slice");
  if (friendForClear(60)?.friendId !== "friend_020") {
    throw new Error("CURRENT must still list Bean at clear 60 for a later slice");
  }
  for (const id of ["L40", "L41", "L42"] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level?.colorLocks) throw new Error(`${id} must lock colors`);
  }
  const l40 = LEVELS.find((level) => level.id === "L40")!;
  const l41 = LEVELS.find((level) => level.id === "L41")!;
  const l42 = LEVELS.find((level) => level.id === "L42")!;
  if (l40.name !== "Solid South") throw new Error("L40 must be Solid South");
  if (l41.name !== "Vacate South") throw new Error("L41 must be Vacate South");
  if (l42.name !== "Park East") throw new Error("L42 must be Park East");
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
  if (dumplingChips.join(",") !== "Dumpling,Bao,Potsticker") {
    throw new Error(`Dumpling chips must be Dumpling/Bao/Potsticker, got ${dumplingChips.join("/")}`);
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
  if (shippedFriendForClear(45)) throw new Error("L45 / Stripe@45 must stay unshipped this slice");
  if (friendForClear(45)?.friendId !== "friend_015") {
    throw new Error("CURRENT must still list Stripe at clear 45 for a later slice");
  }
  if (shippedFriendForClear(60)) throw new Error("Bean@60 must stay unshipped this slice");
  if (friendForClear(60)?.friendId !== "friend_020") {
    throw new Error("CURRENT must still list Bean at clear 60 for a later slice");
  }
  for (const id of ["L43", "L44", "L45"] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level?.colorLocks) throw new Error(`${id} must lock colors`);
  }
  const l43 = LEVELS.find((level) => level.id === "L43")!;
  const l44 = LEVELS.find((level) => level.id === "L44")!;
  const l45 = LEVELS.find((level) => level.id === "L45")!;
  if (l43.name !== "Hold South Close") throw new Error("L43 must be Hold South Close");
  if (l44.name !== "Solid North") throw new Error("L44 must be Solid North");
  if (l45.name !== "Vacate North") throw new Error("L45 must be Vacate North");
  console.log("Dumpling @ onClear(42) ok · cream fold loafs + L43–L45 wired");
}


console.log("All authored boards ok");
