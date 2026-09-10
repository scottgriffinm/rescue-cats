import { cellKey } from "./directions";
import type { Cell, Dir, Level } from "./types";

const DIR_GLYPH: Record<string, { dir: Dir; locked?: boolean }> = {
  ">": { dir: "e" },
  "<": { dir: "w" },
  "^": { dir: "n" },
  v: { dir: "s" },
  E: { dir: "e", locked: true },
  W: { dir: "w", locked: true },
  N: { dir: "n", locked: true },
  S: { dir: "s", locked: true },
};

function parseGrid(map: string): {
  width: number;
  height: number;
  cells: Record<string, Cell>;
} {
  const rows = map
    .trim()
    .split("\n")
    .map((row) => row.trim().split(/\s+/));
  const height = rows.length;
  const width = rows[0]?.length ?? 0;
  const cells: Record<string, Cell> = {};

  rows.forEach((row, y) => {
    row.forEach((glyph, x) => {
      if (glyph === "." || glyph === "#") return;
      if (glyph === "G") {
        cells[cellKey(x, y)] = { kind: "goal" };
        return;
      }
      const arrow = DIR_GLYPH[glyph];
      if (!arrow) {
        throw new Error(`Unknown glyph "${glyph}" at ${x},${y}`);
      }
      cells[cellKey(x, y)] = {
        kind: "path",
        dir: arrow.dir,
        locked: arrow.locked,
      };
    });
  });

  return { width, height, cells };
}

function level(
  partial: Omit<Level, "width" | "height" | "cells"> & { map: string },
): Level {
  const parsed = parseGrid(partial.map);
  return {
    id: partial.id,
    number: partial.number,
    title: partial.title,
    headline: partial.headline,
    hint: partial.hint,
    moves: partial.moves,
    start: partial.start,
    ...parsed,
  };
}

export const LEVELS: Level[] = [
  level({
    id: "one-tap",
    number: 1,
    title: "One Tap",
    headline: "LOVE IT!",
    hint: "Tap an arrow to turn it. Point the path toward the little house, then rescue.",
    moves: 1,
    start: { x: 0, y: 0 },
    map: `
      > > . .
      . > > G
      . . . .
    `,
  }),
  level({
    id: "the-loop",
    number: 2,
    title: "The Loop",
    headline: "DON'T LOOP",
    hint: "This path chases its tail. Break the circle so it spills into home.",
    moves: 1,
    start: { x: 0, y: 0 },
    map: `
      > > v .
      ^ . ^ G
      ^ < < .
    `,
  }),
  level({
    id: "two-turns",
    number: 3,
    title: "Two Turns",
    headline: "PLAN AHEAD",
    hint: "One fix still loops. Spend both turns — half a route is a trap.",
    moves: 2,
    start: { x: 0, y: 0 },
    map: `
      > > > . .
      . > > < .
      . . > > G
    `,
  }),
  level({
    id: "locked-paths",
    number: 4,
    title: "Locked Paths",
    headline: "WORK AROUND",
    hint: "Thick arrows are bolted down. Spend your three turns on the ones that still spin.",
    moves: 3,
    start: { x: 0, y: 0 },
    map: `
      > > E . .
      . ^ S . .
      . . > > .
      . . . > G
    `,
  }),
  level({
    id: "tight-gate",
    number: 5,
    title: "Tight Gate",
    headline: "CAN YOU SAVE THIS CAT?",
    hint: "Four turns, a locked spine, and a decoy highway. Trace the whole rescue before you spend.",
    moves: 4,
    start: { x: 0, y: 0 },
    map: `
      E > > . . .
      . E > E . .
      . . ^ E > .
      . . . . > G
      . . . . > .
    `,
  }),
];

export function getLevel(id: string) {
  return LEVELS.find((item) => item.id === id);
}

export function nextLevel(completedIds: string[]) {
  return LEVELS.find((item) => !completedIds.includes(item.id)) ?? LEVELS[LEVELS.length - 1];
}

export function levelByNumber(number: number) {
  return LEVELS.find((item) => item.number === number);
}
