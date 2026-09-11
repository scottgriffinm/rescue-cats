import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import chapter2Pack from "../../data/levels/CHAPTER2_PUZZLE_L04_L09.json";
import chapter3Pack from "../../data/levels/CHAPTER3_PUZZLE_L11_L12.json";
import l4Pack from "../../data/levels/L4.json";
import l5Pack from "../../data/levels/L5.json";
import l6Pack from "../../data/levels/L6.json";
import l7Pack from "../../data/levels/L7.json";
import l8Pack from "../../data/levels/L8.json";
import l9Pack from "../../data/levels/L9.json";
import l11Pack from "../../data/levels/L11.json";
import l12Pack from "../../data/levels/L12.json";
import lt02Pack from "../../data/levels/LT02-L04-L05.json";
import l0607Pack from "../../data/levels/CHAPTER2_PUZZLE_L06_L07.json";
import lt08Pack from "../../data/levels/LT08-L08-L09.json";
import { ART_KIT_PATH } from "./constants";
import {
  BISCUIT_GIFT,
  CHAPTER2,
  CHAPTER3,
  chipsForFriend,
  FURNITURE,
  friendForClear,
  furnitureGiftsForClear,
  heartsForClear,
  NAMING,
  shopItemsForClear,
} from "./collection";
import { FURN_ASSETS, GATE_ASSETS } from "./artAssets";
import { LEVELS } from "./levels";
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
  if (ids.join(",") !== "L1,L2,L3,L4,L5,L6,L7,L8,L9,L11,L12") {
    throw new Error(`campaign ids drifted: ${ids.join(",")}`);
  }
  for (const id of ["L4", "L5", "L6", "L7", "L8", "L9", "L11", "L12"] as const) {
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
    [...chapter2Pack.levels, ...chapter3Pack.levels].map((level) => [
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
    if (id === "L8" || id === "L9" || id === "L11" || id === "L12") {
      for (const copy of copies) {
        for (const piece of [...copy.cats, ...copy.gates]) {
          if (!piece.colorId) throw new Error(`${copy.id} ${piece.id} must use colorId`);
        }
      }
    }
  }
  console.log("Standalone L4–L9 + L11–L12 + LT02/L06-07/LT08 match locked coords");
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
  if (inkChips.join(",") !== "Ink,Ash,Shadow") {
    throw new Error(`Ink chips must be Ink/Ash/Shadow, got ${inkChips.join("/")}`);
  }
  if (inkChips.includes("Misty")) throw new Error("Ink chips must not include Misty");
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

console.log("All authored boards ok");
