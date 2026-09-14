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
import chapter4a from "../../data/levels/CHAPTER4_PUZZLE_L64_L66.json";
import chapter4b from "../../data/levels/CHAPTER4_PUZZLE_L67_L69.json";
import chapter4c from "../../data/levels/CHAPTER4_PUZZLE_L70_L72.json";
import chapter4d from "../../data/levels/CHAPTER4_PUZZLE_L73_L75.json";
import chapter4e from "../../data/levels/CHAPTER4_PUZZLE_L76_L78.json";
import chapter4f from "../../data/levels/CHAPTER4_PUZZLE_L79_L81.json";
import chapter4g from "../../data/levels/CHAPTER4_PUZZLE_L82_L84.json";
import chapter4h from "../../data/levels/CHAPTER4_PUZZLE_L85_L87.json";
import chapter4i from "../../data/levels/CHAPTER4_PUZZLE_L88_L90.json";
import chapter4j from "../../data/levels/CHAPTER4_PUZZLE_L91_L93.json";
import chapter4k from "../../data/levels/CHAPTER4_PUZZLE_L94_L96.json";
import chapter4l from "../../data/levels/CHAPTER4_PUZZLE_L97_L99.json";
import chapter4m from "../../data/levels/CHAPTER4_PUZZLE_L100_L102.json";
import chapter4n from "../../data/levels/CHAPTER4_PUZZLE_L103_L105.json";
import chapter4o from "../../data/levels/CHAPTER4_PUZZLE_L106_L108.json";
import chapter4p from "../../data/levels/CHAPTER4_PUZZLE_L109_L111.json";
import chapter4q from "../../data/levels/CHAPTER4_PUZZLE_L112_L114.json";
import chapter4r from "../../data/levels/CHAPTER4_PUZZLE_L115_L117.json";
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
  L64: "CURL PATH",
  L65: "WEDGE GAP",
  L66: "PEG SPLIT",
  L67: "RIPPLE CUT",
  L68: "MOSS GAP",
  L69: "INK STOP",
  L70: "SHOAL CUT",
  L71: "ANEMONE GAP",
  L72: "HARBOR STOP",
  L73: "GLINT CUT",
  L74: "FERN GAP",
  L75: "EMBER STOP",
  L76: "CEDAR CUT",
  L77: "NEEDLE GAP",
  L78: "RESIN STOP",
  L79: "NIB CUT",
  L80: "VELLUM GAP",
  L81: "STAMP STOP",
  L82: "TRUFFLE CUT",
  L83: "FOAM GAP",
  L84: "BITTER STOP",
  L85: "UMBER CUT",
  L86: "TWILL GAP",
  L87: "FLAX STOP",
  L88: "NUTMEG CUT",
  L89: "CUMIN GAP",
  L90: "SAGE STOP",
  L91: "MARJORAM CUT",
  L92: "FENNEL GAP",
  L93: "LOVAGE STOP",
  L94: "CHIVE CUT",
  L95: "SAVORY GAP",
  L96: "DILL STOP",
  L97: "KELP CUT",
  L98: "NORI GAP",
  L99: "BRINE STOP",
  L100: "GREENGAGE CUT",
  L101: "SLOE GAP",
  L102: "MEDLAR STOP",
  L103: "FENCE CUT",
  L104: "BURR GAP",
  L105: "PERCH STOP",
  L106: "VINE CUT",
  L107: "THORN GAP",
  L108: "NEST STOP",
  L109: "RAIL CUT",
  L110: "SHADE GAP",
  L111: "PORCH STOP",
  L112: "STEM CUT",
  L113: "STING GAP",
  L114: "UNDER STOP",
  L115: "DOCK CUT",
  L116: "ZEST GAP",
  L117: "STOOP STOP",
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
  L64: "Curl path onto orange — not a Span Cut twin.",
  L65: "Wedge gap — gray seats east, not an L64 translate.",
  L66: "Peg split on far corners — dual habits miss.",
  L67: "Ripple cut — slide the gray before the orange docks.",
  L68: "Moss gap — leave the seam, then commit.",
  L69: "Ink stop on the black house — offset habits miss.",
  L70: "Shoal cut — shoal the route onto orange.",
  L71: "Anemone gap — gray seats after the Coral beat.",
  L72: "Harbor stop — orange/black harbor; not adjacent.",
  L73: "Glint cut — glint the route onto orange.",
  L74: "Fern gap — ferned gray gap after the Blue beat.",
  L75: "Ember stop — orange/black ember stops; not adjacent.",
  L76: "Cedar cut — cedar the route onto orange.",
  L77: "Needle gap — orange house off the Cedar (3,0) seat.",
  L78: "Resin stop — orange/black resin stops; not a Step Off twin.",
  L79: "Nib cut — nib the route onto orange.",
  L80: "Vellum gap — vellum gray gap after the Cocoa beat.",
  L81: "Stamp stop — orange/black stamp stops; not adjacent.",
  L82: "Truffle cut — truffle the route onto orange.",
  L83: "Foam gap — foam gray gap after the Cocoa beat.",
  L84: "Bitter stop — orange/black bitter stops; not adjacent.",
  L85: "Umber cut — umber the route onto orange.",
  L86: "Twill gap — twill black gap after the Linen beat.",
  L87: "Flax stop — orange/gray flax stops; not adjacent.",
  L88: "Nutmeg cut — nutmeg the route onto orange.",
  L89: "Cumin gap — cumin black gap after the Ivory beat.",
  L90: "Sage stop — orange/gray sage stops; not adjacent.",
  L91: "Marjoram cut — marjoram the route onto orange.",
  L92: "Fennel gap — fennel black gap after the Clay beat.",
  L93: "Lovage stop — orange/gray lovage stops; not Step Off (4,1).",
  L94: "Chive cut — chive the route onto orange; gray off Lovage (0,2).",
  L95: "Savory gap — savory black gap after the Basil beat.",
  L96: "Dill stop — orange/gray dill stops; not adjacent.",
  L97: "Kelp cut — kelp the route onto orange; gray off Dill (2,4).",
  L98: "Nori gap — nori black gap after the Fig beat; off Chive (4,5).",
  L99: "Brine stop — orange/gray brine stops; off Chive (4,5) / Lovage (0,2).",
  L100: "Greengage cut — greengage the route onto orange; habit-break Cut.",
  L101: "Sloe gap — sloe black gap after the Plum beat.",
  L102: "Medlar stop — orange/gray medlar stops; off Nori (5,5); not Hold*/Park*.",
  L103: "Fence cut — cut around the fence onto orange; not Greengage same-column.",
  L104: "Burr gap — burr black gap after the Thistle beat; black threads first.",
  L105: "Perch stop — orange/gray perch stops; off Medlar (5,1)/(1,2); not Hold*/Park*.",
  L106: "Vine cut — stacked column cut onto orange; not Fence horizontal brake.",
  L107: "Thorn gap — thorn black gap after the Briar beat; orange vacates first.",
  L108: "Nest stop — orange/gray nest stops; off Perch (5,0)/(0,5); not Hold*/Park*.",
  L109: "Rail cut — gray sits mid-rail; orange rails south then cuts; not Vine stacked column.",
  L110: "Shade gap — orange south-west first; black threads the shade after; not Thorn orange-north.",
  L111: "Porch stop — column porch seats; off Nest same-row; not Hold*/Park*.",
  L112: "Stem cut — orange west then south; gray threads the stem; not Rail south-then-cut.",
  L113: "Sting gap — orange west-north first; black stings after; not Shade orange-south-west.",
  L114: "Under stop — diagonal under-rail seats; off Porch column; not Hold*/Park*.",
  L115: "Dock cut — orange east first; gray docks after; not Stem west-then-south.",
  L116: "Zest gap — orange east then black threads; not Sting west-north, not Shade south-west.",
  L117: "Stoop stop — offset stoop seats; off Under diagonal; not Hold*/Park*.",
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
  ...chapter4a.levels,
  ...chapter4b.levels,
  ...chapter4c.levels,
  ...chapter4d.levels,
  ...chapter4e.levels,
  ...chapter4f.levels,
  ...chapter4g.levels,
  ...chapter4h.levels,
  ...chapter4i.levels,
  ...chapter4j.levels,
  ...chapter4k.levels,
  ...chapter4l.levels,
  ...chapter4m.levels,
  ...chapter4n.levels,
  ...chapter4o.levels,
  ...chapter4p.levels,
  ...chapter4q.levels,
  ...chapter4r.levels,
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
