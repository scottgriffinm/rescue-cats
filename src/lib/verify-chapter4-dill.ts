import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { ART_KIT_PATH } from "./constants";
import {
  SLICE_UNLOCKS,
  TUTORIAL_RESCUES,
  chipsForFriend,
  friendById,
  furnitureGiftsForClear,
  shippedFriendForClear,
} from "./collection";
import { LEVELS } from "./levels";
import type { Dir } from "./types";

const PRIOR_UNLOCKS: Array<[number, string, string]> = [
  [126, "friend_042", "Parsley@126 must stay"],
  [123, "friend_041", "Lovage@123 must stay"],
  [120, "friend_040", "Chervil@120 must stay"],
  [117, "friend_039", "Fennel@117 must stay"],
  [114, "friend_038", "Sorrel@114 must stay"],
  [111, "friend_037", "Nettle@111 must stay"],
  [108, "friend_036", "Ivy@108 must stay"],
  [105, "friend_035", "Briar@105 must stay"],
  [102, "friend_034", "Thistle@102 must stay"],
  [99, "friend_033", "Plum@99 must stay"],
  [96, "friend_032", "Fig@96 must stay"],
  [93, "friend_031", "Basil@93 must stay"],
  [90, "friend_030", "Clay@90 must stay"],
  [87, "friend_029", "Ivory@87 must stay"],
  [84, "friend_028", "Juniper@84 must stay"],
  [81, "friend_027", "Linen@81 must stay"],
  [78, "friend_026", "Cocoa@78 must stay"],
  [75, "friend_025", "Steve@75 must stay"],
  [72, "friend_024", "Maple@72 must stay"],
  [69, "friend_023", "Blue@69 must stay"],
  [66, "friend_022", "Coral@66 must stay"],
  [63, "friend_021", "Velvet@63 must stay"],
  [60, "friend_020", "Bean@60 parade lock"],
  [3, "friend_001", "Mango@3 parade lock"],
  [12, "friend_004", "Tux@12 parade lock"],
  [24, "friend_008", "Pumpkin@24 parade lock"],
  [27, "friend_009", "Shadow@27 parade lock"],
  [30, "friend_010", "Noodle@30 parade lock"],
];

const PRIOR_CHIPS: Array<[string, string, string]> = [
  ["friend_042", "Parsley,Curl,Sprig", "Parsley chips untouched"],
  ["friend_041", "Lovage,Stem,Rib", "Lovage chips untouched"],
  ["friend_040", "Chervil,Frill,Lace", "Chervil chips untouched"],
  ["friend_039", "Fennel,Frond,Anise", "Fennel chips untouched"],
  ["friend_038", "Sorrel,Dock,Zest", "Sorrel chips untouched"],
  ["friend_037", "Nettle,Sting,Leaf", "Nettle chips untouched"],
  ["friend_036", "Ivy,Tendril,Climb", "Ivy chips untouched"],
  ["friend_035", "Briar,Thorn,Hedge", "Briar chips untouched"],
  ["friend_034", "Thistle,Burr,Bramble", "Thistle chips untouched"],
  ["friend_033", "Plum,Damson,Stone", "Plum chips untouched"],
  ["friend_032", "Fig,Olive,Pit", "Fig chips untouched"],
  ["friend_031", "Basil,Pesto,Herb", "Basil chips untouched"],
  ["friend_030", "Clay,Brick,Terra", "Clay chips untouched"],
  ["friend_029", "Ivory,Lace,Sheer", "Ivory chips untouched"],
  ["friend_028", "Juniper,Moss,Sage", "Juniper chips untouched"],
  ["friend_027", "Linen,Gauze,Whisper", "Linen chips untouched"],
  ["friend_026", "Cocoa,Mocha,Fudge", "Cocoa chips untouched"],
  ["friend_025", "Steve,Bob,Ned", "Steve chips untouched"],
  ["friend_024", "Maple,Hazel,Amber", "Maple chips untouched"],
  ["friend_023", "Blue,Silver,Steel", "Blue chips untouched"],
  ["friend_022", "Coral,Bloom,Petal", "Coral chips untouched"],
  ["friend_021", "Velvet,Plush,Dove", "Velvet chips untouched"],
];

const BANNED_PAIRS = new Set([
  "3,2/3,3", "2,2/3,2", "2,3/3,3",
  "2,3/4,5", "0,3/3,2", "3,3/3,5",
  "0,3/4,4", "2,5/4,1", "1,3/5,3",
  "3,1/5,0", "0,0/3,4", "2,1/5,2",
  "2,0/2,3", "3,0/3,2", "1,2/5,1",
  "3,5/5,5",
  "0,4/2,2", "2,0/3,3", "2,4/5,2",
  "0,4/1,0", "3,0/5,4", "0,2/1,3",
  "1,3/5,2", "0,3/2,4", "4,5/5,3",
  "2,5/5,1", "1,4/2,3", "2,2/3,5",
  "1,5/3,3", "1,0/4,3", "3,1/5,2",
  "0,1/2,3", "0,4/4,0", "0,0/2,4",
]);

export function verifyChapter4Dill(solves: Record<string, Array<[string, Dir]>>) {
  for (const [id, name] of [
    ["L130", "Seed Cut"],
    ["L131", "Frondlet Gap"],
    ["L132", "Ledge Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (/\b(hold|park|close)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close`);
    }
    if (/dill (cut|gap|stop)/i.test(level.name)) {
      throw new Error(`${id} must not be Dill Cut/Gap/Stop`);
    }
    if (/parsley (cut|gap|stop)|curl cut|sprig gap|garnish stop|lovage (cut|gap|stop)|rib (cut|gap)|bed stop|chervil (cut|gap|stop)|frill|lace|sill/i.test(level.name)) {
      throw new Error(`${id} must not reuse prior triad names`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (BANNED_PAIRS.has(pair)) throw new Error(`${id} must not twin a prior gate pair (${pair})`);
  }
  if (LEVELS.find((row) => row.id === "L127")?.name !== "Curl Cut") throw new Error("L127 Curl Cut locked");
  if (LEVELS.find((row) => row.id === "L128")?.name !== "Sprig Gap") throw new Error("L128 Sprig Gap locked");
  if (LEVELS.find((row) => row.id === "L129")?.name !== "Garnish Stop") throw new Error("L129 Garnish Stop locked");
  if (LEVELS.find((row) => row.id === "L126")?.name !== "Bed Stop") throw new Error("L126 Bed Stop locked");
  if (LEVELS.find((row) => row.id === "L93")?.name !== "Lovage Stop") throw new Error("L93 Lovage Stop locked");
  if (SLICE_UNLOCKS[129] !== "friend_043") throw new Error("SLICE_UNLOCKS[129] must be friend_043");
  if (shippedFriendForClear(129)?.friendId !== "friend_043") throw new Error("onClear(129) must award Dill");
  const dill = friendById("friend_043");
  if (!dill) throw new Error("friend_043 missing from CATALOG");
  if (dill.defaultName !== "Dill") throw new Error("default name must be Dill");
  if (dill.unlockClear !== 129) throw new Error("Dill unlockClear must be 129");
  if (dill.phenotype.artKit !== "dill") throw new Error("Dill artKit must be dill");
  if (dill.phenotype.personality !== "Seed-soft") throw new Error("Dill personality must be Seed-soft");
  if (dill.phenotype.boardColor !== "gray") throw new Error("Dill boardColor must be gray");
  if (dill.phenotype.color !== "Gray") throw new Error("Dill color must be Gray");
  if (dill.phenotype.pattern !== "Freckled") throw new Error("Dill pattern must be Freckled");
  if (chipsForFriend("friend_043").join(",") !== "Dill,Frondlet,Seed") {
    throw new Error(`Dill chips must be Dill/Frondlet/Seed, got ${chipsForFriend("friend_043").join(",")}`);
  }
  if (chipsForFriend("friend_043").some((c) => /parsley|curl|sprig|lovage|stem|rib|chervil|frill|lace|fennel|^frond$|anise|pebble/i.test(c))) {
    throw new Error("Dill chips must ban Parsley/Curl/Sprig/Lovage/Chervil/Fennel/Frond/Pebble");
  }
  const dill48 = readFileSync(resolve("public/assets/cats/dill_loaf_48.svg"), "utf8");
  const dill72 = readFileSync(resolve("public/assets/cats/dill_loaf_72.svg"), "utf8");
  if (!dill48.includes("#8FBF7A") || !dill72.includes("#8FBF7A")) throw new Error("Dill loaf must use dill-frond soft green coat #8FBF7A");
  if (!dill48.includes("#4A6B3E") || !dill72.includes("#4A6B3E")) throw new Error("Dill loaf must use seed freckles #4A6B3E");
  if (!dill48.includes("#C9E4B6") || !dill72.includes("#C9E4B6")) throw new Error("Dill loaf must use belly #C9E4B6");
  for (const hex of ["#6FA86A", "#3F6B3C", "#9CB87A", "#5E7348", "#C6D9B4", "#5E7F52", "#E6C86E", "#7A9B6A", "#6A7D6E", "#1A2C24", "#7E8F86", "#C8D24A"]) {
    if (dill48.includes(hex) || dill72.includes(hex)) throw new Error(`Dill loaf must not use prior herb coat ${hex}`);
  }
  if (furnitureGiftsForClear(129).length) throw new Error("Dill@129 must gift no furniture");
  const yardD = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardD.match(/const dill =/g) || []).length !== 1) throw new Error("YardScene must declare dill once");
  if ((yardD.match(/\{dill \?/g) || []).length !== 1) throw new Error("YardScene must render dill once");
  if (TUTORIAL_RESCUES.length !== 75) throw new Error("Met must include through Dill (43)");
  for (const [clear, friendId, message] of PRIOR_UNLOCKS) {
    if (shippedFriendForClear(clear)?.friendId !== friendId) throw new Error(message);
  }
  for (const [friendId, chips, message] of PRIOR_CHIPS) {
    if (chipsForFriend(friendId).join(",") !== chips) throw new Error(message);
  }
  if (SLICE_UNLOCKS[132] !== "friend_044") throw new Error("SLICE_UNLOCKS[132] must be friend_044 after Tarragon ship");
  if (SLICE_UNLOCKS[135] !== "friend_045") throw new Error("SLICE_UNLOCKS[135] must be friend_045 after Oregano ship");
  if (SLICE_UNLOCKS[138] !== "friend_046") throw new Error("SLICE_UNLOCKS[138] must be friend_046 after Marjoram ship");
  if (SLICE_UNLOCKS[141] !== "friend_047") throw new Error("SLICE_UNLOCKS[141] must be friend_047 after Thyme ship");
  if (SLICE_UNLOCKS[144] !== "friend_048") throw new Error("SLICE_UNLOCKS[144] must be friend_048 after Rosemary ship");
  if (SLICE_UNLOCKS[147] !== "friend_049") throw new Error("SLICE_UNLOCKS[147] must be friend_049 after Mint ship");
  if (SLICE_UNLOCKS[150] !== "friend_050") throw new Error("SLICE_UNLOCKS[150] must be friend_050 after Catnip ship");
  if (SLICE_UNLOCKS[153] !== "friend_051") throw new Error("SLICE_UNLOCKS[153] must be friend_051 after Lavender ship");
  if (SLICE_UNLOCKS[156] !== "friend_052") throw new Error("SLICE_UNLOCKS[156] must be friend_052 after Chamomile ship");
  if (SLICE_UNLOCKS[159] !== "friend_053") throw new Error("SLICE_UNLOCKS[159] must be friend_053 after Bergamot ship");
  if (SLICE_UNLOCKS[162] !== "friend_054") throw new Error("SLICE_UNLOCKS[162] must be friend_054 after Jasmine ship");
  if (SLICE_UNLOCKS[165] !== "friend_055") throw new Error("SLICE_UNLOCKS[165] must be friend_055 after Magnolia ship");
  if (SLICE_UNLOCKS[168] !== "friend_056") throw new Error("SLICE_UNLOCKS[168] must be friend_056 after Hibiscus ship");
  if (SLICE_UNLOCKS[171] !== "friend_057") throw new Error("SLICE_UNLOCKS[171] must be friend_057 after Gardenia ship");
  if (SLICE_UNLOCKS[174] !== "friend_058") throw new Error("SLICE_UNLOCKS[174] must be friend_058 after Camellia ship");
  if (/pebble|Pebble/i.test(dill48 + dill72)) throw new Error("Dill art must not use Pebble");
  if (/parsley|curl|sprig|lovage|stem|rib|chervil|frill|lace|fennel|anise/i.test(dill48 + dill72)) {
    throw new Error("Dill art must not collide Parsley/Lovage/Chervil/Fennel marks");
  }
  const l130 = LEVELS.find((r) => r.id === "L130")!;
  const l131 = LEVELS.find((r) => r.id === "L131")!;
  const l132 = LEVELS.find((r) => r.id === "L132")!;
  if (/curl|sprig|garnish/i.test([l130.name, l131.name, l132.name].join(","))) {
    throw new Error("L130–L132 must not reuse Curl/Sprig/Garnish names");
  }
  const dillGatePair = (level: typeof l130) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (dillGatePair(l130) !== "2,0/4,2") throw new Error(`L130 gates must be delta (-2,-2) pair, got ${dillGatePair(l130)}`);
  if (dillGatePair(l131) !== "2,2/3,4") throw new Error(`L131 gates must be delta (-1,-2) pair, got ${dillGatePair(l131)}`);
  if (dillGatePair(l132) !== "1,5/2,1") throw new Error(`L132 gates must be delta (-1,4) pair, got ${dillGatePair(l132)}`);
  const occ132 = new Set([
    ...l132.cats.map((c) => `${c.x},${c.y}`),
    ...l132.gates.map((g) => `${g.x},${g.y}`),
  ]);
  if (occ132.has("5,5")) throw new Error("L132 Ledge must be off Nori seat (5,5)");
  if (occ132.has("5,0") || occ132.has("0,5")) throw new Error("L132 Ledge must be off Perch seats");
  if (occ132.has("5,1") || occ132.has("1,2")) throw new Error("L132 Ledge must be off Medlar seats");
  if (occ132.has("0,0") || occ132.has("2,4")) throw new Error("L132 Ledge must be off Garnish Stop seats");
  if (occ132.has("3,1") || occ132.has("5,2")) throw new Error("L132 Ledge must be off Bed Stop seats");
  if (l132.gates[0].y === l132.gates[1].y) throw new Error("L132 Ledge must not same-row Nest");
  if (l132.gates[0].x === l132.gates[1].x) throw new Error("L132 Ledge must not column Porch");
  if (l130.cats[0].x === l130.cats[1].x) throw new Error("L130 Seed must not stacked-column Vine");
  if (solves.L130[0][0] === "cat_orange" && solves.L130[0][1] === "s") {
    throw new Error("L130 Seed Cut must not open orange-south (Curl clone)");
  }
  if (solves.L130[0][0] === "cat_orange" && solves.L130[0][1] === "n") {
    throw new Error("L130 Seed Cut must not open orange-north (Frill clone)");
  }
  if (solves.L130[0][0] === "cat_gray" && solves.L130[0][1] === "n") {
    throw new Error("L130 Seed Cut must not open gray-north (Rib clone)");
  }
  if (solves.L131[0][0] === "cat_orange" && solves.L131[0][1] === "n") {
    throw new Error("L131 Frondlet Gap must not open orange-north (Sprig clone)");
  }
  if (solves.L131[0][0] === "cat_orange" && solves.L131[0][1] === "s") {
    throw new Error("L131 Frondlet Gap must not open orange-south (Lace clone)");
  }
  if (solves.L131[0][0] === "cat_orange" && solves.L131[0][1] === "e") {
    throw new Error("L131 Frondlet Gap must not open orange-east (Rib clone)");
  }
  for (const level of [l130, l131, l132]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
    if (level.width !== 6 || level.height !== 6) throw new Error(`${level.id} must be 6×6`);
    if (!level.templateId.startsWith("LT02_LT08_")) throw new Error(`${level.id} must be LT02+LT08`);
  }
  const wallKeyD = (level: typeof l130) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsD = ["L127", "L128", "L129"].map((id) => wallKeyD(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L130", "L131", "L132"] as const) {
    const key = wallKeyD(LEVELS.find((r) => r.id === id)!);
    if (priorWallsD.includes(key)) throw new Error(`${id} wall twin of L127–L129`);
  }
  if (ART_KIT_PATH.dill.loaf48 !== "/assets/cats/dill_loaf_48.svg") throw new Error("ART_KIT_PATH.dill loaf48");
  if (ART_KIT_PATH.dill.loaf72 !== "/assets/cats/dill_loaf_72.svg") throw new Error("ART_KIT_PATH.dill loaf72");
  if (ART_KIT_PATH.parsley.loaf48 !== "/assets/cats/parsley_loaf_48.svg") throw new Error("Parsley kit must stay");
  const saveD = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveD.includes("pickle jar ledge")) throw new Error("SaveProvider must yard-bubble pickle jar ledge for Dill");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_043.md"))) throw new Error("missing CH4_FRIEND_043.md");
  if (!existsSync(resolve("data/collection/chapter4_dill_bang.json"))) throw new Error("missing collection dill bang");
  if (!existsSync(resolve("data/chapter4_dill_bang.json"))) throw new Error("missing chapter4_dill_bang.json");
  const nameModalD = readFileSync(resolve("src/components/puzzle/NameCatModal.tsx"), "utf8");
  if (!nameModalD.includes("DILL_FRIEND_ID")) throw new Error("NameCatModal must lockChips Dill");
  if (!nameModalD.includes("PARSLEY_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Parsley");
  const shellD = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shellD.includes("Full-viewport") && !shellD.includes("full-viewport") && !shellD.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shellD)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Dill@129 + L130–L132 ok · chips Dill/Frondlet/Seed · coat #8FBF7A + seed freckles #4A6B3E · Seed Cut / Frondlet Gap / Ledge Stop · Parsley/Lovage/Chervil/Fennel/Sorrel/Nettle/Ivy/Briar/Thistle/Plum/Fig/Basil/Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}
