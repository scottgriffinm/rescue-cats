import teach from "../../data/levels/L01-L03.json";
import l03 from "../../data/levels/L03.json";
import extra from "../../data/levels/L04-L05.json";
import later from "../../data/levels/L06-L10.json";
import budgets from "../../data/levels/move_budget_L01-L30.json";
import { normalizeBoardColor } from "./colors";
import { TEMPLATE_ID } from "./constants";
import type { Level } from "./types";

function templateFor(id: string) {
  if (id === "L8" || id === "L9" || id === "L10") return "LT08_color_lock";
  if (id === "L4" || id === "L5" || id === "L6" || id === "L7") return "LT02_two_cat";
  return TEMPLATE_ID;
}

const HEADLINES: Record<string, string> = {
  L1: "STRAIGHT SHOT",
  L2: "GO AROUND",
  L3: "WALL AS BRAKE",
  L4: "TWO AT ONCE",
  L5: "MIND THE ORDER",
  L6: "MAKE ROOM",
  L7: "BOTH EDGES",
  L8: "MATCH THE GATE",
  L9: "CROSS COLORS",
  L10: "TIGHT PAIR",
};

const HINTS: Record<string, string> = {
  L1: "One idea: slide south. They stop in the little house.",
  L2: "One idea: walls block. Slide around — the edge behind the house is the brake.",
  L3: "The wall south of the house brakes you on the gate. Side routes slide through.",
  L4: "Two friends, two houses. Slide each one south — they do not push.",
  L5: "The west cat is boxed. Move the neighbor first, then vacate the lane.",
  L6: "Same vacate, bigger paper. The east-edge wall steals the easy home.",
  L7: "Opposite edges, two walls, eight slides. Stop on the adjacent tile.",
  L8: "Orange house, gray house. The other color is solid for that cat.",
  L9: "Houses swapped sides. A wrong-color slam wastes the budget.",
  L10: "Meet in the middle lanes, then peel off to the matching gates.",
};

type RawLevel = {
  id: string;
  name: string;
  width: number;
  height: number;
  moveBudget: number;
  nudges?: number;
  colorLocks?: boolean;
  walls?: { x: number; y: number }[];
  blockers?: { x: number; y: number }[];
  cats: { id: string; x: number; y: number; color?: string }[];
  gates: { id: string; x: number; y: number; color?: string }[];
  teach?: string;
};

function hydrate(raw: RawLevel, index: number): Level {
  const budgetRow = budgets.levels.find((row) => row.id === raw.id);
  return {
    id: raw.id,
    number: index + 1,
    name: raw.name,
    headline: HEADLINES[raw.id] ?? raw.name.toUpperCase(),
    hint: HINTS[raw.id] ?? "Slide every cat onto a yard gate.",
    templateId: templateFor(raw.id),
    width: raw.width,
    height: raw.height,
    moveBudget: budgetRow?.moveBudget ?? raw.moveBudget,
    nudges: budgetRow?.nudges ?? raw.nudges ?? 0,
    colorLocks: budgetRow?.colorLocks ?? raw.colorLocks ?? false,
    walls: raw.walls ?? [],
    blockers: raw.blockers ?? [],
    cats: raw.cats.map((cat) => ({ ...cat, color: normalizeBoardColor(cat.color) })),
    gates: raw.gates.map((gate) => ({ ...gate, color: normalizeBoardColor(gate.color) })),
    teach: raw.teach,
  };
}

const authored = [
  ...teach.levels.filter((level) => level.id !== "L3"),
  l03,
  ...extra.levels,
  ...later.levels,
] as RawLevel[];

export const LEVELS: Level[] = authored.map(hydrate);

export const MOVE_BUDGET_TABLE = budgets.levels;

export function getLevel(id: string) {
  return LEVELS.find((level) => level.id === id);
}

export function nextLevel(completedIds: string[]) {
  return LEVELS.find((level) => !completedIds.includes(level.id)) ?? LEVELS[LEVELS.length - 1];
}
