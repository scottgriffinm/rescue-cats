import { cellKey, DIRS, step } from "./directions";
import { normalizeBoardColor } from "./colors";
import type { Dir, Gate, Level, PieceCat, Vec } from "./types";

export function inBounds(level: Pick<Level, "width" | "height">, pos: Vec) {
  return pos.x >= 0 && pos.y >= 0 && pos.x < level.width && pos.y < level.height;
}

export function blockedSet(level: Level) {
  const blocked = new Set<string>();
  for (const wall of level.walls) blocked.add(cellKey(wall.x, wall.y));
  for (const blocker of level.blockers) blocked.add(cellKey(blocker.x, blocker.y));
  return blocked;
}

function gateAt(level: Level, pos: Vec): Gate | undefined {
  return level.gates.find((gate) => gate.x === pos.x && gate.y === pos.y);
}

/** LT08: a mismatched colored house is solid for that cat. Matched houses never brake. */
export function mismatchedGateSolid(level: Level, cat: PieceCat, pos: Vec) {
  if (!level.colorLocks) return false;
  const gate = gateAt(level, pos);
  if (!gate) return false;
  const gateColor = normalizeBoardColor(gate.color);
  const catColor = normalizeBoardColor(cat.color);
  if (!gateColor || !catColor) return false;
  return gateColor !== catColor;
}

export function matchingGate(level: Level, cat: PieceCat, pos: Vec): Gate | undefined {
  const gate = gateAt(level, pos);
  if (!gate) return undefined;
  if (!level.colorLocks) return gate;
  const gateColor = normalizeBoardColor(gate.color);
  const catColor = normalizeBoardColor(cat.color);
  if (!gateColor || !catColor) return gate;
  return gateColor === catColor ? gate : undefined;
}

export function slideCat(
  level: Level,
  cats: PieceCat[],
  catId: string,
  dir: Dir,
): { cats: PieceCat[]; path: Vec[]; moved: boolean } {
  const me = cats.find((cat) => cat.id === catId);
  if (!me) return { cats, path: [], moved: false };

  const occupied = new Set(
    cats.filter((cat) => cat.id !== catId).map((cat) => cellKey(cat.x, cat.y)),
  );
  const blocked = blockedSet(level);
  const path: Vec[] = [{ x: me.x, y: me.y }];
  let current = { x: me.x, y: me.y };

  while (true) {
    const next = step(current, dir);
    if (!inBounds(level, next)) break;
    if (blocked.has(cellKey(next.x, next.y))) break;
    if (occupied.has(cellKey(next.x, next.y))) break;
    if (mismatchedGateSolid(level, me, next)) break;
    current = next;
    path.push({ ...current });
    // Gates never brake a slide. Win = occupy a matching gate at rest.
    // Unmatched / overshoot slides continue through the house.
  }

  const moved = path.length > 1;
  return {
    moved,
    path,
    cats: cats.map((cat) =>
      cat.id === catId ? { ...cat, x: current.x, y: current.y } : cat,
    ),
  };
}

export function legalDirs(level: Level, cats: PieceCat[], catId: string): Dir[] {
  return DIRS.filter((dir) => slideCat(level, cats, catId, dir).moved);
}

export function allCatsOnGates(level: Level, cats: PieceCat[]) {
  const used = new Set<string>();
  return cats.every((cat) => {
    const gate = matchingGate(level, cat, cat);
    if (!gate || used.has(gate.id)) return false;
    used.add(gate.id);
    return true;
  });
}

export function starRating(leftover: number, budget: number): 1 | 2 | 3 {
  if (leftover >= Math.ceil(budget / 2)) return 3;
  if (leftover >= Math.ceil(budget / 4)) return 2;
  return 1;
}

export function cloneCats(cats: PieceCat[]): PieceCat[] {
  return cats.map((cat) => ({ ...cat }));
}
