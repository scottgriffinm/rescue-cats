import teach from "../../data/levels/L01-L03.json";
import l03 from "../../data/levels/L03.json";
import chapter2 from "../../data/levels/CHAPTER2_PUZZLE_L04_L09.json";
import chapter3 from "../../data/levels/CHAPTER3_PUZZLE_L11_L12.json";
import chapter3b from "../../data/levels/CHAPTER3_PUZZLE_L13_L15.json";
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
  L6: "BIGGER YARD",
  L7: "TIGHT ROUTES",
  L8: "MY GATE ONLY",
  L9: "WRONG ORDER SOFT-LOCK",
  L11: "COLOR BRAKE",
  L12: "PARK FIRST",
  L13: "STEP OFF",
  L14: "PARK CLOSE",
  L15: "THREAD BOTTOM",
};

const HINTS: Record<string, string> = {
  L1: "One idea: slide south. They stop in the little house.",
  L2: "One idea: walls block. Slide around — the edge behind the house is the brake.",
  L3: "The wall south of the house brakes you on the gate. Side routes slide through.",
  L4: "Two friends, two houses. Slide each down.",
  L5: "Order matters — vacate the column before your friend can land.",
  L6: "Bigger board. Pillars force a longer route.",
  L7: "Crossed houses. Tight budget.",
  L8: "Orange for orange, gray for gray.",
  L9: "Wrong house first soft-locks. Match coats in order.",
  L11: "Park a friend past the house. Matching coats still slide through.",
  L12: "Hold the far cell first. Slide through your house and you overshoot.",
  L13: "Home is not done — step off the edge house to brake the mid one.",
  L14: "Hold the next cell, not the far edge. The house sits closer than L12.",
  L15: "Park past the mid house, then thread the bottom wall.",
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
  ...chapter2.levels,
  ...chapter3.levels,
  ...chapter3b.levels,
] as RawLevel[];

export const LEVELS: Level[] = authored.map(hydrate);

export const MOVE_BUDGET_TABLE = budgets.levels;

export function getLevel(id: string) {
  return LEVELS.find((level) => level.id === id);
}

export function nextLevel(completedIds: string[]) {
  return LEVELS.find((level) => !completedIds.includes(level.id)) ?? LEVELS[LEVELS.length - 1];
}
