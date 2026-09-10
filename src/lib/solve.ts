import { DIRS } from "./directions";
import { collectRotatable, initialDirs, simulate } from "./simulate";
import type { Dir, Level } from "./types";

export function minSolve(level: Level) {
  const rotatable = collectRotatable(level);
  const original = initialDirs(level);

  let best: { minMoves: number; dirs: Record<string, Dir> } | null = null;

  function search(index: number, changes: number, dirs: Record<string, Dir>) {
    if (best && changes >= best.minMoves) return;
    if (index === rotatable.length) {
      if (simulate(level, dirs).status === "win") {
        best = { minMoves: changes, dirs };
      }
      return;
    }

    const key = rotatable[index];
    const printed = original[key];

    dirs[key] = printed;
    search(index + 1, changes, dirs);

    if (changes < level.moves) {
      for (const dir of DIRS) {
        if (dir === printed) continue;
        dirs[key] = dir;
        search(index + 1, changes + 1, dirs);
      }
    }

    dirs[key] = printed;
  }

  search(0, 0, { ...original });

  if (!best) {
    return { solvable: false, minMoves: Infinity, dirs: original };
  }
  const solved = best as { minMoves: number; dirs: Record<string, Dir> };
  return { solvable: true, minMoves: solved.minMoves, dirs: solved.dirs };
}

export function rewiredCount(
  original: Record<string, Dir>,
  current: Record<string, Dir>,
  rotatable: string[],
) {
  return rotatable.filter((key) => current[key] !== original[key]).length;
}

export function canRewire(
  original: Record<string, Dir>,
  current: Record<string, Dir>,
  rotatable: string[],
  key: string,
  budget: number,
) {
  if (!rotatable.includes(key)) return false;
  if (current[key] !== original[key]) return true;
  return rewiredCount(original, current, rotatable) < budget;
}
