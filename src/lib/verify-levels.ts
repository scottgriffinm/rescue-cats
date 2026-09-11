import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { ART_KIT_PATH } from "./constants";
import {
  CHAPTER2,
  chipsForFriend,
  friendForClear,
  furnitureGiftsForClear,
  heartsForClear,
  NAMING,
  shopItemsForClear,
} from "./collection";
import { GATE_ASSETS } from "./artAssets";
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
      [2, 2],
      [3, 3],
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
      [2, 2],
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
  if (ids.includes("L10")) throw new Error("L10 must not load on the Chapter 2 path");
  if (ids.includes("L6") || ids.includes("L7")) {
    throw new Error("L6–L7 are still authoring — do not load invented boards");
  }
  if (ids.join(",") !== "L1,L2,L3,L4,L5,L8,L9") {
    throw new Error(`campaign ids drifted: ${ids.join(",")}`);
  }
  for (const id of ["L4", "L5", "L8", "L9"] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    assertLocked(level, LOCKED[id]);
    console.log(`${id} locked topology ok`);
  }
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
  console.log("Ink @ onClear(6) ok · ink loafs + LT08 gates wired");
}

console.log("All authored boards ok");
