import teach from "../../data/levels/L01-L03.json";
import extra from "../../data/levels/L04-L05.json";
import budgets from "../../data/levels/move_budget_L01-L30.json";
import { TEMPLATE_ID } from "./constants";
import type { Level } from "./types";

const HEADLINES: Record<string, string> = {
  L1: "LOVE IT!",
  L2: "GO AROUND",
  L3: "CAN YOU SAVE THIS CAT?",
  L4: "TWO AT ONCE",
  L5: "MIND THE ORDER",
};

const HINTS: Record<string, string> = {
  L1: "Tap the cat, then slide them south into the yard gate.",
  L2: "The wall blocks a straight shot. Slide around, then home.",
  L3: "Use the long way — the wall sits between you and the gate.",
  L4: "Both cats need a gate. Slide each one home.",
  L5: "Move the open-lane cat first. The other needs room to go around.",
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
    cats: raw.cats,
    gates: raw.gates,
    teach: raw.teach,
  };
}

const authored = [...teach.levels, ...extra.levels] as RawLevel[];

export const LEVELS: Level[] = authored.map(hydrate);

export const MOVE_BUDGET_TABLE = budgets.levels;

export function getLevel(id: string) {
  return LEVELS.find((level) => level.id === id);
}

export function nextLevel(completedIds: string[]) {
  return LEVELS.find((level) => !completedIds.includes(level.id)) ?? LEVELS[LEVELS.length - 1];
}
