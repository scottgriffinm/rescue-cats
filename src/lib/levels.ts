import teach from "../../data/levels/L01-L03.json";
import l03 from "../../data/levels/L03.json";
import lt02 from "../../data/levels/LT02-L04-L05.json";
import lt08 from "../../data/levels/LT08-L08-L09.json";
import budgets from "../../data/levels/move_budget_L01-L30.json";
import { normalizeBoardColor } from "./colors";
import { TEMPLATE_ID } from "./constants";
import type { Level } from "./types";

const HEADLINES: Record<string, string> = {
  L1: "STRAIGHT SHOT",
  L2: "GO AROUND",
  L3: "WALL AS BRAKE",
  L4: "TWO FRIENDS",
  L5: "COLLISION ORDER",
  L8: "MY GATE ONLY",
  L9: "WRONG ORDER SOFT-LOCK",
};

const HINTS: Record<string, string> = {
  L1: "One idea: slide south. They stop in the little house.",
  L2: "One idea: walls block. Slide around — the edge behind the house is the brake.",
  L3: "The wall south of the house brakes you on the gate. Side routes slide through.",
  L4: "Two friends, two houses. Slide each down.",
  L5: "Order matters — vacate the column before your friend can land.",
  L8: "Orange for orange, gray for gray.",
  L9: "Wrong house first soft-locks. Match coats in order.",
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
  cats: { id: string; x: number; y: number; color?: string; colorId?: string }[];
  gates: { id: string; x: number; y: number; color?: string; colorId?: string }[];
  teach?: string;
  templateId?: string;
};

function hydrate(raw: RawLevel, index: number): Level {
  const budgetRow = budgets.levels.find((row) => row.id === raw.id);
  return {
    id: raw.id,
    number: index + 1,
    name: raw.name,
    headline: HEADLINES[raw.id] ?? raw.name.toUpperCase(),
    hint: HINTS[raw.id] ?? "Slide every cat onto a yard gate.",
    templateId: raw.templateId ?? TEMPLATE_ID,
    width: raw.width,
    height: raw.height,
    moveBudget: budgetRow?.moveBudget ?? raw.moveBudget,
    nudges: budgetRow?.nudges ?? raw.nudges ?? 0,
    colorLocks: budgetRow?.colorLocks ?? raw.colorLocks ?? false,
    walls: raw.walls ?? [],
    blockers: raw.blockers ?? [],
    cats: raw.cats.map((cat) => ({
      ...cat,
      color: normalizeBoardColor(cat.colorId ?? cat.color),
    })),
    gates: raw.gates.map((gate) => ({
      ...gate,
      color: normalizeBoardColor(gate.colorId ?? gate.color),
    })),
    teach: raw.teach,
  };
}

const authored = [
  ...teach.levels.filter((level) => level.id !== "L3"),
  l03,
  ...lt02.levels,
  ...lt08.levels,
] as RawLevel[];

export const LEVELS: Level[] = authored.map(hydrate);

export const MOVE_BUDGET_TABLE = budgets.levels;

export function getLevel(id: string) {
  return LEVELS.find((level) => level.id === id);
}

export function nextLevel(completedIds: string[]) {
  return LEVELS.find((level) => !completedIds.includes(level.id)) ?? LEVELS[LEVELS.length - 1];
}
