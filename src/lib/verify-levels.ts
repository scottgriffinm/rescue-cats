import { LEVELS } from "./levels";
import { allCatsOnGates, legalDirs, slideCat } from "./slide";
import type { Dir, Level, PieceCat, Vec } from "./types";

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

/** Locked Chapter 2 topologies — fail if any coord drifts. */
const LOCKED: Record<
  string,
  {
    width: number;
    height: number;
    moveBudget: number;
    colorLocks: boolean;
    walls: Vec[];
    cats: Array<{ id: string; x: number; y: number; color?: string }>;
    gates: Array<{ id: string; x: number; y: number; color?: string }>;
  }
> = {
  L4: {
    width: 5,
    height: 5,
    moveBudget: 10,
    colorLocks: false,
    walls: [],
    cats: [
      { id: "cat_a", x: 1, y: 0 },
      { id: "cat_b", x: 3, y: 0 },
    ],
    gates: [
      { id: "gate_a", x: 1, y: 4 },
      { id: "gate_b", x: 3, y: 4 },
    ],
  },
  L5: {
    width: 5,
    height: 5,
    moveBudget: 9,
    colorLocks: false,
    walls: [
      { x: 1, y: 1 },
      { x: 3, y: 1 },
      { x: 1, y: 4 },
      { x: 3, y: 4 },
    ],
    cats: [
      { id: "cat_a", x: 2, y: 0 },
      { id: "cat_b", x: 2, y: 3 },
    ],
    gates: [
      { id: "gate_a", x: 0, y: 4 },
      { id: "gate_b", x: 4, y: 4 },
    ],
  },
  L6: {
    width: 6,
    height: 6,
    moveBudget: 9,
    colorLocks: false,
    walls: [
      { x: 2, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
    ],
    cats: [
      { id: "cat_a", x: 0, y: 0 },
      { id: "cat_b", x: 5, y: 0 },
    ],
    gates: [
      { id: "gate_a", x: 0, y: 5 },
      { id: "gate_b", x: 5, y: 5 },
    ],
  },
  L7: {
    width: 6,
    height: 6,
    moveBudget: 8,
    colorLocks: false,
    walls: [
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 3, y: 2 },
      { x: 2, y: 4 },
      { x: 4, y: 1 },
    ],
    cats: [
      { id: "cat_a", x: 0, y: 1 },
      { id: "cat_b", x: 5, y: 3 },
    ],
    gates: [
      { id: "gate_a", x: 5, y: 0 },
      { id: "gate_b", x: 0, y: 5 },
    ],
  },
  L8: {
    width: 6,
    height: 6,
    moveBudget: 9,
    colorLocks: true,
    walls: [
      { x: 2, y: 2 },
      { x: 3, y: 3 },
    ],
    cats: [
      { id: "cat_orange", x: 1, y: 0, color: "orange" },
      { id: "cat_gray", x: 4, y: 0, color: "gray" },
    ],
    gates: [
      { id: "gate_orange", x: 1, y: 5, color: "orange" },
      { id: "gate_gray", x: 4, y: 5, color: "gray" },
    ],
  },
  L9: {
    width: 6,
    height: 6,
    moveBudget: 8,
    colorLocks: true,
    walls: [
      { x: 2, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 4 },
    ],
    cats: [
      { id: "cat_orange", x: 0, y: 0, color: "orange" },
      { id: "cat_gray", x: 5, y: 2, color: "gray" },
    ],
    gates: [
      { id: "gate_orange", x: 5, y: 0, color: "orange" },
      { id: "gate_gray", x: 0, y: 5, color: "gray" },
    ],
  },
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

function wallKeys(level: Level) {
  return new Set(level.walls.map((wall) => `${wall.x},${wall.y}`));
}

function vecKey(pos: Vec) {
  return `${pos.x},${pos.y}`;
}

function assertLocked(level: Level) {
  const locked = LOCKED[level.id];
  if (!locked) return;
  if (level.width !== locked.width || level.height !== locked.height) {
    throw new Error(`${level.id} size ${level.width}×${level.height} != ${locked.width}×${locked.height}`);
  }
  if (level.moveBudget !== locked.moveBudget) {
    throw new Error(`${level.id} budget ${level.moveBudget} != ${locked.moveBudget}`);
  }
  if (level.colorLocks !== locked.colorLocks) {
    throw new Error(`${level.id} colorLocks ${level.colorLocks} != ${locked.colorLocks}`);
  }
  const gotWalls = [...wallKeys(level)].sort().join("|");
  const wantWalls = locked.walls
    .map(vecKey)
    .sort()
    .join("|");
  if (gotWalls !== wantWalls) {
    throw new Error(`${level.id} walls ${gotWalls || "(none)"} != ${wantWalls || "(none)"}`);
  }
  if (level.cats.length !== locked.cats.length || level.gates.length !== locked.gates.length) {
    throw new Error(`${level.id} piece count drifted`);
  }
  for (const cat of locked.cats) {
    const got = level.cats.find((item) => item.id === cat.id);
    if (!got || got.x !== cat.x || got.y !== cat.y) {
      throw new Error(`${level.id} ${cat.id} at (${got?.x},${got?.y}) != (${cat.x},${cat.y})`);
    }
    if (cat.color && got.color !== cat.color) {
      throw new Error(`${level.id} ${cat.id} color ${got.color} != ${cat.color}`);
    }
  }
  for (const gate of locked.gates) {
    const got = level.gates.find((item) => item.id === gate.id);
    if (!got || got.x !== gate.x || got.y !== gate.y) {
      throw new Error(`${level.id} ${gate.id} at (${got?.x},${got?.y}) != (${gate.x},${gate.y})`);
    }
    if (gate.color && got.color !== gate.color) {
      throw new Error(`${level.id} ${gate.id} color ${got.color} != ${gate.color}`);
    }
  }
}

{
  const l3 = LEVELS.find((level) => level.id === "L3");
  if (!l3) throw new Error("missing L3");
  const cat = l3.cats[0];
  const gate = l3.gates[0];
  if (cat.x !== 2 || cat.y !== 0) throw new Error("L3 cat must be (2,0)");
  if (gate.x !== 2 || gate.y !== 2) throw new Error("L3 gate must be (2,2)");
  const keys = wallKeys(l3);
  for (const key of ["1,2", "3,2", "2,3"]) {
    if (!keys.has(key)) throw new Error(`L3 missing wall ${key}`);
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

if (LEVELS.some((level) => level.id === "L10")) {
  throw new Error("L10 must not load on the Chapter 2 path");
}

for (const id of ["L4", "L5", "L6", "L7", "L8", "L9"]) {
  const level = LEVELS.find((item) => item.id === id);
  if (!level) throw new Error(`missing ${id}`);
  assertLocked(level);
}

{
  const l9 = LEVELS.find((level) => level.id === "L9");
  if (!l9) throw new Error("missing L9");
  const slam = slideCat(l9, l9.cats, "cat_orange", "s");
  if (allCatsOnGates(l9, slam.cats)) {
    throw new Error("L9 south must not be a free dual-home");
  }
}

for (const level of LEVELS) {
  if (!allCatsOnGates(level, level.cats)) {
    const dirs = legalDirs(level, level.cats, level.cats[0].id);
    const anyOpen = level.cats.some((cat) => legalDirs(level, level.cats, cat.id).length > 0);
    if (level.cats.length === 1 && dirs.length === 0) {
      throw new Error(`${level.id} has no opening slide`);
    }
    if (!anyOpen) throw new Error(`${level.id} has no opening slide`);
  }
  const script = SOLVES[level.id];
  if (!script) throw new Error(`Missing solve for ${level.id}`);
  const { used } = play(level, script);
  console.log(`#${level.number} ${level.id} ok · ${used}/${level.moveBudget} slides`);
}

console.log("All authored boards ok");
