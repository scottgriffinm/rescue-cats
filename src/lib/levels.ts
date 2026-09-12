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
import chapter3o from "../../data/levels/CHAPTER3_PUZZLE_L52_L54.json";
import chapter3p from "../../data/levels/CHAPTER3_PUZZLE_L55_L57.json";
import chapter3q from "../../data/levels/CHAPTER3_PUZZLE_L58_L60.json";
import chapter3r from "../../data/levels/CHAPTER3_PUZZLE_L61_L63.json";
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
  L9: "SOFT LOCK",
  L11: "COLOR BRAKE",
  L12: "BRAKE FIRST",
  L13: "STEP OFF",
  L14: "NEAR BRAKE",
  L15: "THREAD BOTTOM",
  L16: "STAY BRAKE",
  L17: "UNDER BRAKE",
  L18: "ROW BRAKE",
  L19: "OVER BRAKE",
  L20: "SIDE BRAKE",
  L21: "LANE THREAD",
  L22: "LEFT BRAKE",
  L23: "CORNER BRAKE",
  L24: "ARC BRAKE",
  L25: "COLUMN SLIP",
  L26: "THREAD EAST",
  L27: "THREAD BLACK",
  L28: "WEST BRAKE",
  L29: "PAIR CUT",
  L30: "THREAD SOUTH",
  L31: "WEST SLIP",
  L32: "THREAD NORTH",
  L33: "THREAD WEST",
  L34: "WALL SEAL",
  L35: "CLEAR FIRST",
  L36: "HIGH BRAKE",
  L37: "LOW BRAKE",
  L38: "EAST SEAL",
  L39: "VACATE EAST",
  L40: "SOUTH SEAL",
  L41: "SOUTH SLIP",
  L42: "EAST BRAKE",
  L43: "THREAD WEST",
  L44: "NORTH SEAL",
  L45: "NORTH SLIP",
  L46: "TWIN PEG",
  L47: "SIDE SEAL",
  L48: "VACATE ROW",
  L49: "STEP CUT",
  L50: "COMMIT THROUGH",
  L51: "OFFSET BRAKE",
  L52: "GATE WEAVE",
  L53: "CATCH BAR",
  L54: "SPLIT LATCH",
  L55: "HOOK ROUTE",
  L56: "COLOR FORK",
  L57: "CORNER BRACE",
  L58: "PINCH ROUTE",
  L59: "SKEW GATE",
  L60: "POST BRACE",
  L61: "SPAN CUT",
  L62: "KNIGHT CUT",
  L63: "FAR PEG",
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
  L9: "Wrong house first soft-locks — unique gates off L7.",
  L11: "Park a friend past the house. Matching coats still slide through.",
  L12: "Brake first — hold the setup cell before the house.",
  L13: "Home is not done — step off the edge house to brake the mid one.",
  L14: "Near brake — closer stop than L12.",
  L15: "Park past the mid house, then thread the bottom wall.",
  L16: "Stay brake — they are already the stop.",
  L17: "Under brake — cell under the house, not the far edge.",
  L18: "Row brake — park the row, then the next cell.",
  L19: "Over brake — cell above; south-first overshoots.",
  L20: "Side brake — east stop; slide-through misses.",
  L21: "Lane thread — brake the south lane, then west.",
  L22: "Left brake — west stop; slide-through misses.",
  L23: "Corner brake — corner cell above the house.",
  L24: "Arc into the gray stop — mid-column parks sail past it.",
  L25: "Slip the column — leave before the solid lands.",
  L26: "Park above, then thread the east lane. The west wall pair is a dead gap.",
  L27: "Black is a third lock color. Park east of the house, then thread south.",
  L28: "West brake — off L27 east park habits.",
  L29: "Pair-cut orange/black — not a hold-north retread.",
  L30: "Thread onto the south black solid. Hold-south alone is not enough.",
  L31: "West slip off the black solid — vacate-west farm killed.",
  L32: "Park above, then thread north. L31's east park slides through.",
  L33: "Sit past the house, then park west. North-first habits miss the stop.",
  L34: "Seal on the wall — gray brake, unique pair.",
  L35: "Clear first, then the solid — unique gates off L23.",
  L36: "High brake — sit past south, then above.",
  L37: "Low brake — sit past north, then below.",
  L38: "East seal on black — unique pair, not a farm twin.",
  L39: "Leave the house row, then the east solid. L38's solid-east slide goes through.",
  L40: "South seal — gray brake off the old farm spine.",
  L41: "South slip — leave before the black solid.",
  L42: "East brake — east of mid house; vacate-south misses.",
  L43: "Thread west through the corridor. Park-east habits from L42 miss the gap.",
  L44: "North seal — black brake, unique pair.",
  L45: "Slip the column first — then the north solid catches you.",
  L46: "Twin peg — two distant brakes, not Dual Brake farm.",
  L47: "Side seal west — unique pair off L46.",
  L48: "Leave the house row first — then the west solid. Sliding the solid early sails through.",
  L49: "Step cut — not Color Step’s farm twin.",
  L50: "Commit through the corridor — unique gates off L30.",
  L51: "Offset brakes — houses are not adjacent. Dual-cross habits miss the gap.",
  L52: "Weave through offset gray gates. Thread-north habits miss the weave.",
  L53: "Catch bar on gray — latch without the farm pair.",
  L54: "Split latch — houses are not adjacent. Swap/Dual habits miss the gap.",
  L55: "Hook the gray route. Rim-latch / Color-step habits miss the hook.",
  L56: "Color fork — pick the gray branch. Rim-latch habits miss the fork.",
  L57: "Corner brace on far corners — not Split Latch twin. Dual habits miss.",
  L58: "Pinch the gray route. Corner-brace habits miss the pinch.",
  L59: "Skew the orange/gray houses — not Color Step’s vertical twin.",
  L60: "Post brace on far corners (0,0)/(5,5) — not the (1,1)/(4,4) twin.",
  L61: "Span cut across the gray gap. Post-brace habits miss the cut.",
  L62: "Knight-step the orange/gray houses — not Color Fork’s same-row twin.",
  L63: "Far peg on the black house. Offset — Dual habits miss.",
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
  ...chapter3o.levels,
  ...chapter3p.levels,
  ...chapter3q.levels,
  ...chapter3r.levels,
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
