import { cellKey, step } from "./directions";
import type { Cell, Dir, Level, SimResult, Vec } from "./types";

export function getCell(level: Level, x: number, y: number): Cell | undefined {
  return level.cells[cellKey(x, y)];
}

export function inBounds(level: Level, pos: Vec) {
  return pos.x >= 0 && pos.y >= 0 && pos.x < level.width && pos.y < level.height;
}

export function isGoal(level: Level, pos: Vec) {
  return getCell(level, pos.x, pos.y)?.kind === "goal";
}

export function simulate(
  level: Level,
  dirs: Record<string, Dir>,
): SimResult {
  const path: Vec[] = [{ ...level.start }];
  const seen = new Set<string>();
  let current = { ...level.start };

  for (let i = 0; i < level.width * level.height + 4; i++) {
    if (isGoal(level, current)) {
      return { status: "win", path };
    }

    const key = cellKey(current.x, current.y);
    const cell = getCell(level, current.x, current.y);
    const dir = dirs[key] ?? cell?.dir;

    if (!dir) {
      return { status: "stuck", path };
    }

    const signature = `${key}:${dir}`;
    if (seen.has(signature)) {
      return { status: "loop", path };
    }
    seen.add(signature);

    const next = step(current, dir);
    if (!inBounds(level, next)) {
      return { status: "off", path };
    }

    const nextCell = getCell(level, next.x, next.y);
    if (!nextCell) {
      return { status: "stuck", path };
    }

    current = next;
    path.push({ ...current });
  }

  return { status: "loop", path };
}

export function collectRotatable(level: Level) {
  return Object.entries(level.cells)
    .filter(([, cell]) => cell.kind === "path" && cell.dir && !cell.locked)
    .map(([key]) => key);
}

export function initialDirs(level: Level): Record<string, Dir> {
  const dirs: Record<string, Dir> = {};
  for (const [key, cell] of Object.entries(level.cells)) {
    if (cell.dir) dirs[key] = cell.dir;
  }
  return dirs;
}
