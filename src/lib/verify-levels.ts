import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import chapter2Pack from "../../data/levels/CHAPTER2_PUZZLE_L04_L09.json";
import chapter3Pack from "../../data/levels/CHAPTER3_PUZZLE_L11_L12.json";
import chapter3bPack from "../../data/levels/CHAPTER3_PUZZLE_L13_L15.json";
import chapter3cPack from "../../data/levels/CHAPTER3_PUZZLE_L16_L18.json";
import chapter3dPack from "../../data/levels/CHAPTER3_PUZZLE_L19_L21.json";
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
  chipsForFriend,
  FURNITURE,
  friendForClear,
  furnitureGiftsForClear,
  shippedFriendForClear,
  heartsForClear,
  NAMING,
  shopItemsForClear,
} from "./collection";
import { CAT_ASSETS, FURN_ASSETS, GATE_ASSETS } from "./artAssets";
import { LEVELS } from "./levels";
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
  if (ids.join(",") !== "L1,L2,L3,L4,L5,L6,L7,L8,L9,L11,L12,L13,L14,L15,L16,L17,L18,L19,L20,L21") {
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
      id === "L21"
    ) {
      for (const copy of copies) {
        for (const piece of [...copy.cats, ...copy.gates]) {
          if (!piece.colorId) throw new Error(`${copy.id} ${piece.id} must use colorId`);
        }
      }
    }
  }
  console.log("Standalone L4–L9 + L11–L21 + LT02/L06-07/LT08 match locked coords");
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
  if (shippedFriendForClear(24)) throw new Error("Pumpkin@24 must stay unshipped this slice");
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
  if (shippedFriendForClear(21)) throw new Error("Pepper@21 must stay unshipped this slice");
  if (shippedFriendForClear(24)) throw new Error("Pumpkin@24 must stay unshipped this slice");
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

console.log("All authored boards ok");
