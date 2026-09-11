import teach from "../../data/levels/L01-L03.json";
import l03 from "../../data/levels/L03.json";
import extra from "../../data/levels/L04-L05.json";
import later from "../../data/levels/L06-L10.json";
import budgets from "../../data/levels/move_budget_L01-L30.json";
import { normalizeBoardColor } from "./colors";
import { TEMPLATE_ID } from "./constants";
import type { Level } from "./types";

const HEADLINES: Record<string, string> = {
  L1: "STRAIGHT SHOT",
  L2: "GO AROUND",
  L3: "WALL AS BRAKE",
  L4: "TWO AT ONCE",
  L5: "MIND THE ORDER",
  L6: "SWAP CORNERS",
  L7: "BOTH SIDES",
  L8: "MATCH THE GATE",
  L9: "WATCH THE POST",
  L10: "TIGHT PAIR",
};

const HINTS: Record<string, string> = {
  L1: "One idea: slide south. They stop in the little house.",
  L2: "One idea: walls block. Slide around — the edge behind the house is the brake.",
  L3: "The wall south of the house brakes you on the gate. Side routes slide through.",
  L4: "Both cats need a gate. Slide each one home.",
  L5: "Move the open-lane cat first. The other needs room to go around.",
  L6: "Each friend slides to the opposite corner gate.",
  L7: "Walls sit in the lanes. Walk around, then home.",
  L8: "Same slide — gates now remember a color (orange / gray).",
  L9: "A wall and a post split the paper. Opposite corners still work.",
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
    templateId: TEMPLATE_ID,
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
