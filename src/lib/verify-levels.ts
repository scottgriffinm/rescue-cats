import { CHAPTER2, friendForClear, NAMING } from "./collection";
import { LEVELS } from "./levels";
import { allCatsOnGates, isMismatchSolid, legalDirs, slideCat } from "./slide";
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
    ["cat_b", "e"],
    ["cat_b", "s"],
  ],
  L5: [
    ["cat_a", "e"],
    ["cat_b", "s"],
    ["cat_a", "w"],
    ["cat_a", "s"],
  ],
  L6: [
    ["cat_a", "s"],
    ["cat_a", "e"],
    ["cat_a", "s"],
    ["cat_a", "w"],
    ["cat_b", "n"],
    ["cat_b", "w"],
    ["cat_b", "n"],
    ["cat_b", "e"],
  ],
  L7: [
    ["cat_a", "s"],
    ["cat_a", "e"],
    ["cat_a", "s"],
    ["cat_a", "w"],
    ["cat_b", "s"],
    ["cat_b", "w"],
    ["cat_b", "s"],
    ["cat_b", "e"],
  ],
  L8: [
    ["cat_a", "e"],
    ["cat_b", "w"],
  ],
  L9: [
    ["cat_b", "w"],
    ["cat_b", "s"],
    ["cat_b", "w"],
    ["cat_a", "e"],
    ["cat_a", "s"],
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
  const l4 = LEVELS.find((level) => level.id === "L4");
  if (!l4) throw new Error("missing L4");
  assertNotHome(l4, [["cat_b", "e"], ["cat_b", "s"], ["cat_a", "s"]], "L4 B-first overshoots A through the gate");
}

{
  const l5 = LEVELS.find((level) => level.id === "L5");
  if (!l5) throw new Error("missing L5");
  assertNotHome(l5, [["cat_b", "s"], ["cat_a", "e"], ["cat_a", "w"], ["cat_a", "s"]], "L5 B-first overshoots");
}

{
  const l8 = LEVELS.find((level) => level.id === "L8");
  if (!l8) throw new Error("missing L8");
  if (!l8.colorLocks) throw new Error("L8 must lock colors");
  const orange = l8.cats.find((cat) => cat.id === "cat_a");
  const gray = l8.cats.find((cat) => cat.id === "cat_b");
  if (!orange || !gray) throw new Error("L8 missing coats");
  if (!isMismatchSolid(l8, orange, { x: 0, y: 4 })) {
    throw new Error("L8 gray house must be solid to the orange coat");
  }
  if (!isMismatchSolid(l8, gray, { x: 4, y: 0 })) {
    throw new Error("L8 orange house must be solid to the gray coat");
  }
  const south = slideCat(l8, l8.cats, "cat_a", "s");
  const orangeAfter = south.cats.find((cat) => cat.id === "cat_a");
  if (!orangeAfter || orangeAfter.x !== 0 || orangeAfter.y !== 3) {
    throw new Error(
      `L8 orange south must stop before the gray house, landed (${orangeAfter?.x},${orangeAfter?.y})`,
    );
  }
  assertNotHome(l8, [["cat_a", "s"], ["cat_b", "n"]], "L8 near houses are the wrong coat");
}

{
  const l9 = LEVELS.find((level) => level.id === "L9");
  if (!l9) throw new Error("missing L9");
  if (!l9.colorLocks) throw new Error("L9 must lock colors");
  const gray = l9.cats.find((cat) => cat.id === "cat_b");
  if (!gray) throw new Error("L9 missing gray coat");
  if (!isMismatchSolid(l9, gray, { x: 4, y: 4 })) {
    throw new Error("L9 orange house must be solid to the gray coat");
  }
  const bSouth = slideCat(l9, l9.cats, "cat_b", "s");
  const grayAfter = bSouth.cats.find((cat) => cat.id === "cat_b");
  if (!grayAfter || grayAfter.x !== 4 || grayAfter.y !== 3) {
    throw new Error(
      `L9 gray south must stop before the orange house, landed (${grayAfter?.x},${grayAfter?.y})`,
    );
  }
  assertNotHome(l9, [["cat_a", "s"], ["cat_b", "s"]], "L9 south sits on the wrong coat");
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
  console.log("Ink @ onClear(6) ok · naming is a choice · shop starter ready");
}

console.log("All authored boards ok");
