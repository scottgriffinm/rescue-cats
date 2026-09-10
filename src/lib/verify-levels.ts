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
  L3: [
    ["cat_a", "e"],
    ["cat_a", "s"],
    ["cat_a", "w"],
  ],
  L4: [
    ["cat_a", "s"],
    ["cat_b", "s"],
  ],
  L5: [
    ["cat_b", "s"],
    ["cat_a", "e"],
    ["cat_a", "s"],
    ["cat_a", "w"],
    ["cat_a", "s"],
  ],
  L6: [
    ["cat_a", "e"],
    ["cat_b", "w"],
  ],
  L7: [
    ["cat_a", "w"],
    ["cat_a", "s"],
    ["cat_a", "e"],
    ["cat_b", "e"],
    ["cat_b", "s"],
    ["cat_b", "w"],
  ],
  L8: [
    ["cat_a", "s"],
    ["cat_b", "s"],
  ],
  L9: [
    ["cat_a", "e"],
    ["cat_b", "w"],
  ],
  L10: [
    ["cat_a", "n"],
    ["cat_a", "e"],
    ["cat_b", "s"],
    ["cat_b", "w"],
  ],
};

function play(level: Level, script: Array<[string, Dir]>) {
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
  if (!allCatsOnGates(level, cats)) {
    throw new Error(`${level.id}: script did not land every cat on a gate`);
  }
  if (used > level.moveBudget) {
    throw new Error(`${level.id}: used ${used} > budget ${level.moveBudget}`);
  }
  return used;
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
  const used = play(level, script);
  console.log(`#${level.number} ${level.id} ok · ${used}/${level.moveBudget} slides`);
}

console.log("All authored boards ok");
