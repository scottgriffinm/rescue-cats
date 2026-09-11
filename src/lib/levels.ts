import teach from "../../data/levels/L01-L03.json";
import l03 from "../../data/levels/L03.json";
import chapter2 from "../../data/levels/CHAPTER2_PUZZLE_L04_L09.json";
import chapter3 from "../../data/levels/CHAPTER3_PUZZLE_L11_L12.json";
import chapter3b from "../../data/levels/CHAPTER3_PUZZLE_L13_L15.json";
import chapter3c from "../../data/levels/CHAPTER3_PUZZLE_L16_L18.json";
import chapter3d from "../../data/levels/CHAPTER3_PUZZLE_L19_L21.json";
import chapter3e from "../../data/levels/CHAPTER3_PUZZLE_L22_L24.json";
import chapter3f from "../../data/levels/CHAPTER3_PUZZLE_L25_L27.json";
import chapter3g from "../../data/levels/CHAPTER3_PUZZLE_L28_L30.json";
import chapter3h from "../../data/levels/CHAPTER3_PUZZLE_L31_L33.json";
import chapter3i from "../../data/levels/CHAPTER3_PUZZLE_L34_L36.json";
import chapter3j from "../../data/levels/CHAPTER3_PUZZLE_L37_L39.json";
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
  L16: "HOLD STILL",
  L17: "HOLD SOUTH",
  L18: "PARK ACROSS",
  L19: "HOLD NORTH",
  L20: "HOLD EAST",
  L21: "THREAD PARK",
  L22: "HOLD WEST",
  L23: "HOLD CORNER",
  L24: "PARK HIGH",
  L25: "PARK LOW",
  L26: "THREAD EAST",
  L27: "THREAD BLACK",
  L28: "PARK WEST",
  L29: "HOLD NORTH",
  L30: "HOLD SOUTH",
  L31: "HOLD EAST",
  L32: "THREAD NORTH",
  L33: "THREAD WEST",
  L34: "SOLID WEST",
  L35: "VACATE FIRST",
  L36: "PARK ABOVE",
  L37: "PARK BELOW",
  L38: "SOLID EAST",
  L39: "VACATE EAST",
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
  L16: "They are already the brake. Move them first and you slide through.",
  L17: "Hold the cell under the house. The far edge overshoots.",
  L18: "Park on the same row. Walls force the setup — then hold the next cell.",
  L19: "Hold the cell above the house. South-first habits overshoot.",
  L20: "Park east of the house. Slide through and you miss the stop.",
  L21: "Park to brake the south lane, then thread west onto the house.",
  L22: "Park west of the house. Slide through and you miss the stop.",
  L23: "Hold the corner cell above the house. The open south lane overshoots.",
  L24: "Climb and park the high cell. North without the brake slides through.",
  L25: "Park the cell under the house. South without the brake slides through.",
  L26: "Park above, then thread the east lane. The west wall pair is a dead gap.",
  L27: "Black is a third lock color. Park east of the house, then thread south.",
  L28: "Park west of the house. L27's east park slides through.",
  L29: "Hold the cell above the house. West-first habits miss the stop.",
  L30: "Park under the house. North without the south brake slides through.",
  L31: "Park east of the house. L30's south park slides through.",
  L32: "Park above, then thread north. L31's east park slides through.",
  L33: "Sit past the house, then park west. North-first habits miss the stop.",
  L34: "The gray house is the west brake. Park a friend there and gray overshoots.",
  L35: "Leave the house column, then park west. L34's solid-west slide goes through.",
  L36: "Sit past south, then park above. L35's west park misses the stop.",
  L37: "Sit past north, then park below. L36's park-above misses the stop.",
  L38: "The black house is the east brake. Park a friend there and black overshoots.",
  L39: "Leave the house row, then the east solid. L38's solid-east slide goes through.",
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
  ...chapter3c.levels,
  ...chapter3d.levels,
  ...chapter3e.levels,
  ...chapter3f.levels,
  ...chapter3g.levels,
  ...chapter3h.levels,
  ...chapter3i.levels,
  ...chapter3j.levels,
] as RawLevel[];

export const LEVELS: Level[] = authored.map(hydrate);

export const MOVE_BUDGET_TABLE = budgets.levels;

export function getLevel(id: string) {
  return LEVELS.find((level) => level.id === id);
}

export function nextLevel(completedIds: string[]) {
  return LEVELS.find((level) => !completedIds.includes(level.id)) ?? LEVELS[LEVELS.length - 1];
}
