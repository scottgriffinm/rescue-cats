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
import chapter3k from "../../data/levels/CHAPTER3_PUZZLE_L40_L42.json";
import chapter3l from "../../data/levels/CHAPTER3_PUZZLE_L43_L45.json";
import chapter3m from "../../data/levels/CHAPTER3_PUZZLE_L46_L48.json";
import chapter3n from "../../data/levels/CHAPTER3_PUZZLE_L49_L51.json";
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
  L24: "COLOR BRAKE",
  L25: "VACATE COLUMN",
  L26: "THREAD EAST",
  L27: "THREAD BLACK",
  L28: "PARK WEST",
  L29: "COLOR CROSS",
  L30: "THREAD SOUTH",
  L31: "VACATE WEST",
  L32: "THREAD NORTH",
  L33: "THREAD WEST",
  L34: "SOLID WEST",
  L35: "VACATE FIRST",
  L36: "PARK ABOVE",
  L37: "PARK BELOW",
  L38: "SOLID EAST",
  L39: "VACATE EAST",
  L40: "SOLID SOUTH",
  L41: "VACATE SOUTH",
  L42: "PARK EAST",
  L43: "THREAD WEST",
  L44: "SOLID NORTH",
  L45: "VACATE NORTH",
  L46: "DUAL BRAKE",
  L47: "SOLID WEST",
  L48: "VACATE ROW",
  L49: "COLOR STEP",
  L50: "LATCH THROUGH",
  L51: "OFFSET BRAKE",
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
  L24: "Gray house is the west solid. Climb into the color stop — park-high habits miss it.",
  L25: "Leave the house column, then the south solid. Park-low alone overshoots.",
  L26: "Park above, then thread the east lane. The west wall pair is a dead gap.",
  L27: "Black is a third lock color. Park east of the house, then thread south.",
  L28: "Park west of the house. L27's east park slides through.",
  L29: "Black and orange lock adjacent. Hold-north habits miss the cross.",
  L30: "Thread onto the south black solid. Hold-south alone is not enough.",
  L31: "Leave before the west black solid works. Hold-east habits miss the vacate.",
  L32: "Park above, then thread north. L31's east park slides through.",
  L33: "Sit past the house, then park west. North-first habits miss the stop.",
  L34: "The gray house is the west brake. Park a friend there and gray overshoots.",
  L35: "Leave the house column, then park west. L34's solid-west slide goes through.",
  L36: "Sit past south, then park above. L35's west park misses the stop.",
  L37: "Sit past north, then park below. L36's park-above misses the stop.",
  L38: "The black house is the east brake. Park a friend there and black overshoots.",
  L39: "Leave the house row, then the east solid. L38's solid-east slide goes through.",
  L40: "The gray house is the south brake. East-row vacate habits from L39 miss the stop.",
  L41: "Leave the house column, then the south solid. L40's solid-south slide goes through.",
  L42: "Hold the cell east of the mid house. Vacate-south habits from L41 miss the park.",
  L43: "Thread west through the corridor. Park-east habits from L42 miss the gap.",
  L44: "The gray house is the north brake. Thread-west habits from L43 miss the stop.",
  L45: "Leave the house column, then the north solid. L44 solid-north slide goes through.",
  L46: "Two brakes in sequence — color-cross. Dual habits from one park miss both.",
  L47: "The black house is the west brake. Dual-brake habits from L46 miss the stop.",
  L48: "Leave the house row, then the west solid. L47's solid-west slide goes through — not L31's Vacate West.",
  L49: "Gray mismatch solid is the setup step. Vacate-row habits from L48 miss.",
  L50: "Latch through the gray solid. Thread-east habits miss the corridor.",
  L51: "Offset brakes — houses are not adjacent. Dual-cross habits miss the gap.",
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

function levelNumberFromId(id: string, fallbackIndex: number) {
  const match = /^L(\d+)$/i.exec(id);
  if (!match) return fallbackIndex + 1;
  return Number(match[1]);
}

function hydrate(raw: RawLevel, index: number): Level {
  const budgetRow = budgets.levels.find((row) => row.id === raw.id);
  return {
    id: raw.id,
    number: levelNumberFromId(raw.id, index),
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
  ...chapter3k.levels,
  ...chapter3l.levels,
  ...chapter3m.levels,
  ...chapter3n.levels,
] as RawLevel[];

export const LEVELS: Level[] = authored.map(hydrate);

/** Highest campaign L-number (L10 off-path does not shrink this). */
export const CAMPAIGN_LEVEL_COUNT = LEVELS.reduce(
  (max, level) => Math.max(max, level.number),
  0,
);

export const MOVE_BUDGET_TABLE = budgets.levels;

export function getLevel(id: string) {
  return LEVELS.find((level) => level.id === id);
}

/** Next board on the campaign path (array order — L9 → L11, never phantom L10). */
export function nextCampaignLevel(levelId: string) {
  const index = LEVELS.findIndex((level) => level.id === levelId);
  if (index < 0) return undefined;
  return LEVELS[index + 1];
}

export function nextLevel(completedIds: string[]) {
  return LEVELS.find((level) => !completedIds.includes(level.id)) ?? LEVELS[LEVELS.length - 1];
}
