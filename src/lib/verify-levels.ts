import { LEVELS } from "./levels";
import { allCatsOnGates, legalDirs, slideCat } from "./slide";
import type { Dir, Level, PieceCat } from "./types";

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
    ["cat_b", "s"],
    ["cat_a", "e"],
    ["cat_a", "s"],
    ["cat_b", "w"],
  ],
  L6: [
    ["cat_b", "s"],
    ["cat_a", "e"],
    ["cat_a", "s"],
    ["cat_a", "w"],
    ["cat_b", "e"],
    ["cat_a", "s"],
    ["cat_a", "w"],
  ],
  L7: [
    ["cat_a", "e"],
    ["cat_a", "s"],
    ["cat_a", "e"],
    ["cat_b", "s"],
    ["cat_b", "w"],
    ["cat_b", "s"],
    ["cat_b", "w"],
  ],
  L8: [
    ["cat_a", "s"],
    ["cat_b", "s"],
  ],
  L9: [
    ["cat_a", "e"],
    ["cat_a", "s"],
    ["cat_a", "e"],
    ["cat_b", "w"],
    ["cat_b", "s"],
  ],
  L10: [
    ["cat_a", "n"],
    ["cat_a", "e"],
    ["cat_b", "s"],
    ["cat_b", "w"],
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

function wallKeys(level: Level) {
  return new Set(level.walls.map((wall) => `${wall.x},${wall.y}`));
}

function expectSize(level: Level, width: number, height: number, walls: number, budget: number) {
  if (level.width !== width || level.height !== height) {
    throw new Error(`${level.id} must be ${width}×${height}`);
  }
  if (level.walls.length !== walls) {
    throw new Error(`${level.id} expected ${walls} walls, got ${level.walls.length}`);
  }
  if (level.moveBudget !== budget) {
    throw new Error(`${level.id} budget ${level.moveBudget} != ${budget}`);
  }
  if (level.cats.length !== 2 || level.gates.length !== 2) {
    throw new Error(`${level.id} needs two cats and two gates`);
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

{
  const l4 = LEVELS.find((level) => level.id === "L4");
  if (!l4) throw new Error("missing L4");
  expectSize(l4, 5, 5, 0, 10);
  if (l4.colorLocks) throw new Error("L4 should not color-lock");
}

{
  const l5 = LEVELS.find((level) => level.id === "L5");
  if (!l5) throw new Error("missing L5");
  expectSize(l5, 5, 5, 1, 9);
  if (legalDirs(l5, l5.cats, "cat_a").length !== 0) {
    throw new Error("L5 west cat must start boxed until the neighbor vacates");
  }
  if (legalDirs(l5, l5.cats, "cat_b").length === 0) {
    throw new Error("L5 neighbor must be able to vacate");
  }
}

{
  const l6 = LEVELS.find((level) => level.id === "L6");
  const l7 = LEVELS.find((level) => level.id === "L7");
  if (!l6 || !l7) throw new Error("missing L6/L7");
  expectSize(l6, 6, 6, 2, 9);
  expectSize(l7, 6, 6, 2, 8);
  if (l6.colorLocks || l7.colorLocks) throw new Error("L6–7 stay LT02, no color lock");
}

{
  const l8 = LEVELS.find((level) => level.id === "L8");
  const l9 = LEVELS.find((level) => level.id === "L9");
  if (!l8 || !l9) throw new Error("missing L8/L9");
  expectSize(l8, 6, 6, 2, 9);
  expectSize(l9, 6, 6, 2, 8);
  if (!l8.colorLocks || !l9.colorLocks) throw new Error("L8–9 must color-lock");
  for (const level of [l8, l9]) {
    const colors = new Set(level.cats.map((cat) => cat.color));
    const gateColors = new Set(level.gates.map((gate) => gate.color));
    if (!colors.has("orange") || !colors.has("gray")) {
      throw new Error(`${level.id} needs orange + gray cats`);
    }
    if (!gateColors.has("orange") || !gateColors.has("gray")) {
      throw new Error(`${level.id} needs orange + gray gates`);
    }
  }
  const slam = slideCat(l9, l9.cats, "cat_a", "s");
  if (!slam.moved || slam.cats[0].y !== 4) {
    throw new Error("L9 orange south should brake before the gray house");
  }
  if (allCatsOnGates(l9, slam.cats)) {
    throw new Error("L9 wrong-color rest must not count as a win");
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
