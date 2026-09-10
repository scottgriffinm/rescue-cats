import type { Dir, Vec } from "./types";

export const DIRS: Dir[] = ["n", "e", "s", "w"];

export const DIR_DELTA: Record<Dir, Vec> = {
  n: { x: 0, y: -1 },
  e: { x: 1, y: 0 },
  s: { x: 0, y: 1 },
  w: { x: -1, y: 0 },
};

export const DIR_ANGLE: Record<Dir, number> = {
  n: -90,
  e: 0,
  s: 90,
  w: 180,
};

export function cellKey(x: number, y: number) {
  return `${x},${y}`;
}

export function parseKey(key: string): Vec {
  const [x, y] = key.split(",").map(Number);
  return { x, y };
}

export function rotateDir(dir: Dir): Dir {
  return DIRS[(DIRS.indexOf(dir) + 1) % DIRS.length];
}

export function step(from: Vec, dir: Dir): Vec {
  const delta = DIR_DELTA[dir];
  return { x: from.x + delta.x, y: from.y + delta.y };
}

export function sameVec(a: Vec, b: Vec) {
  return a.x === b.x && a.y === b.y;
}
