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
import { allCatsOnGates, legalDirs, slideCat } from "./slide";
import type { Dir, Level, PieceCat } from "./types";

const PRIOR_UNLOCKS: Array<[number, string, string]> = [
  [147, "friend_049", "Mint@147 must stay"],
  [144, "friend_048", "Rosemary@144 must stay"],
  [141, "friend_047", "Thyme@141 must stay"],
  [138, "friend_046", "Marjoram@138 must stay"],
  [135, "friend_045", "Oregano@135 must stay"],
  [132, "friend_044", "Tarragon@132 must stay"],
  [129, "friend_043", "Dill@129 must stay"],
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
  ["friend_049", "Mint,Chill,Frost", "Mint chips untouched"],
  ["friend_048", "Rosemary,Needle,Woody", "Rosemary chips untouched"],
  ["friend_047", "Thyme,Pinch,Twig", "Thyme chips untouched"],
  ["friend_046", "Marjoram,Softleaf,Peel", "Marjoram chips untouched"],
  ["friend_045", "Oregano,Wild,Bunch", "Oregano chips untouched"],
  ["friend_044", "Tarragon,Spear,Bitters", "Tarragon chips untouched"],
  ["friend_043", "Dill,Frondlet,Seed", "Dill chips untouched"],
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
  "2,0/4,2", "2,2/3,4", "1,5/2,1",
  "2,2/5,1", "0,0/1,3", "1,4/5,3",
  "3,2/4,0", "2,3/5,5", "0,2/1,1",
  "3,5/5,4", "0,3/1,1", "0,1/4,4",
  "1,2/5,0", "4,4/5,0", "3,2/5,4",
  "4,4/5,1", "3,2/4,5", "1,3/2,2",
  "2,5/3,2", "2,5/4,3", "0,3/3,5",
]);

function stateKey(cats: PieceCat[]) {
  return [...cats].sort((a, b) => a.id.localeCompare(b.id)).map((c) => `${c.id}:${c.x},${c.y}`).join("|");
}

function uniqueShortestCount(level: Level) {
  const start = level.cats.map((c) => ({ ...c }));
  const queue: Array<{ cats: PieceCat[]; depth: number }> = [{ cats: start, depth: 0 }];
  const best = new Map<string, { depth: number; paths: number }>();
  best.set(stateKey(start), { depth: 0, paths: 1 });
  let min = Infinity;
  while (queue.length) {
    const cur = queue.shift()!;
    if (cur.depth > 12 || cur.depth > min) continue;
    const curKey = stateKey(cur.cats);
    if (allCatsOnGates(level, cur.cats) && cur.depth > 0) {
      if (cur.depth < min) min = cur.depth;
      continue;
    }
    for (const cat of cur.cats) {
      for (const dir of legalDirs(level, cur.cats, cat.id)) {
        const next = slideCat(level, cur.cats, cat.id, dir);
        if (!next.moved) continue;
        const key = stateKey(next.cats);
        const nextDepth = cur.depth + 1;
        const incoming = best.get(curKey)?.paths ?? 1;
        const prev = best.get(key);
        if (!prev || nextDepth < prev.depth) {
          best.set(key, { depth: nextDepth, paths: incoming });
          queue.push({ cats: next.cats, depth: nextDepth });
        } else if (nextDepth === prev.depth) {
          prev.paths += incoming;
        }
      }
    }
  }
  let count = 0;
  for (const [key, info] of best) {
    if (info.depth !== min) continue;
    const colored = start.map((c) => {
      const part = key.split("|").find((p) => p.startsWith(`${c.id}:`))!;
      const [x, y] = part.split(":")[1].split(",").map(Number);
      return { ...c, x, y };
    });
    if (allCatsOnGates(level, colored)) count += info.paths;
  }
  return { min, count };
}

export function verifyChapter4Catnip(solves: Record<string, Array<[string, Dir]>>) {
  for (const [id, name] of [
    ["L151", "Nip Cut"],
    ["L152", "Dream Gap"],
    ["L153", "Pouch Stop"],
  ] as const) {
    const level = LEVELS.find((row) => row.id === id);
    if (!level) throw new Error(`missing ${id}`);
    if (level.name !== name) throw new Error(`${id} must be ${name}`);
    if (!level.colorLocks) throw new Error(`${id} must lock colors`);
    if (level.nudges !== 3) throw new Error(`${id} must have 3 nudges`);
    if (level.moveBudget < 11 || level.moveBudget > 12) {
      throw new Error(`${id} budget must be 11–12, got ${level.moveBudget}`);
    }
    if (/\b(hold|park|close)\b/i.test(level.name)) {
      throw new Error(`${id} must not be Hold*/Park*/Close`);
    }
    if (/catnip (cut|gap|stop)/i.test(level.name)) {
      throw new Error(`${id} must not be Catnip Cut/Gap/Stop`);
    }
    if (/chill cut|frost gap|tin stop|mint (cut|gap|stop)|needle cut|woody gap|pot stop|rosemary (cut|gap|stop)|pinch cut|twig gap|jar stop|thyme (cut|gap|stop)|marjoram (cut|gap|stop)|softleaf cut|dusty gap|peel stop|oregano (cut|gap|stop)|stone cut|wild gap|pizza stop|tarragon (cut|gap|stop)|spear cut|bitters gap|cruet stop|dill (cut|gap|stop)|seed cut|frondlet gap|ledge stop|parsley (cut|gap|stop)|curl cut|sprig gap|garnish stop/i.test(level.name)) {
      throw new Error(`${id} must not reuse prior triad names`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (BANNED_PAIRS.has(pair)) throw new Error(`${id} must not twin a prior gate pair (${pair})`);
    const unique = uniqueShortestCount(level);
    if (unique.count !== 1) throw new Error(`${id} must have a unique shortest (${unique.count} paths of ${unique.min})`);
    if (unique.min < 10 || unique.min > 11) throw new Error(`${id} shortest must be 10–11, got ${unique.min}`);
    if (level.moveBudget < unique.min) throw new Error(`${id} budget ${level.moveBudget} < shortest ${unique.min}`);
  }
  if (LEVELS.find((row) => row.id === "L148")?.name !== "Chill Cut") throw new Error("L148 Chill Cut locked");
  if (LEVELS.find((row) => row.id === "L149")?.name !== "Frost Gap") throw new Error("L149 Frost Gap locked");
  if (LEVELS.find((row) => row.id === "L150")?.name !== "Tin Stop") throw new Error("L150 Tin Stop locked");
  if (LEVELS.find((row) => row.id === "L147")?.name !== "Pot Stop") throw new Error("L147 Pot Stop locked");
  if (LEVELS.find((row) => row.id === "L144")?.name !== "Jar Stop") throw new Error("L144 Jar Stop locked");
  if (LEVELS.find((row) => row.id === "L141")?.name !== "Peel Stop") throw new Error("L141 Peel Stop locked");
  if (LEVELS.find((row) => row.id === "L140")?.name !== "Dusty Gap") throw new Error("L140 Dusty Gap locked");
  if (LEVELS.find((row) => row.id === "L139")?.name !== "Softleaf Cut") throw new Error("L139 Softleaf Cut locked");
  if (LEVELS.find((row) => row.id === "L138")?.name !== "Pizza Stop") throw new Error("L138 Pizza Stop locked");
  if (LEVELS.find((row) => row.id === "L135")?.name !== "Cruet Stop") throw new Error("L135 Cruet Stop locked");
  if (LEVELS.find((row) => row.id === "L132")?.name !== "Ledge Stop") throw new Error("L132 Ledge Stop locked");
  if (LEVELS.find((row) => row.id === "L129")?.name !== "Garnish Stop") throw new Error("L129 Garnish Stop locked");
  if (LEVELS.find((row) => row.id === "L126")?.name !== "Bed Stop") throw new Error("L126 Bed Stop locked");
  if (SLICE_UNLOCKS[150] !== "friend_050") throw new Error("SLICE_UNLOCKS[150] must be friend_050");
  if (shippedFriendForClear(150)?.friendId !== "friend_050") throw new Error("onClear(150) must award Catnip");
  const catnip = friendById("friend_050");
  if (!catnip) throw new Error("friend_050 missing from CATALOG");
  if (catnip.defaultName !== "Catnip") throw new Error("default name must be Catnip");
  if (catnip.unlockClear !== 150) throw new Error("Catnip unlockClear must be 150");
  if (catnip.phenotype.artKit !== "catnip") throw new Error("Catnip artKit must be catnip");
  if (catnip.phenotype.personality !== "Pouch-soft") throw new Error("Catnip personality must be Pouch-soft");
  if (catnip.phenotype.boardColor !== "gray") throw new Error("Catnip boardColor must be gray");
  if (catnip.phenotype.color !== "Gray") throw new Error("Catnip color must be Gray");
  if (catnip.phenotype.pattern !== "Freckled") throw new Error("Catnip pattern must be Freckled");
  if (chipsForFriend("friend_050").join(",") !== "Catnip,Nip,Dream") {
    throw new Error(`Catnip chips must be Catnip/Nip/Dream, got ${chipsForFriend("friend_050").join(",")}`);
  }
  if (chipsForFriend("friend_050").some((c) => /mint|chill|^frost$|rosemary|needle|^woody$|thyme|pinch|^twig$|marjoram|softleaf|^peel$|oregano|wild|^bunch$|tarragon|spear|bitters|dill|frondlet|^seed$|parsley|curl|sprig|lovage|stem|rib|chervil|frill|lace|fennel|^frond$|anise|pebble|^sage$/i.test(c))) {
    throw new Error("Catnip chips must ban Mint/Chill/Frost/Rosemary/Needle/Woody/Thyme/Pinch/Twig/Marjoram/Softleaf/Peel/Oregano/Wild/Bunch/Tarragon/Spear/Bitters/Dill/Frondlet/Seed/Parsley/Curl/Sprig/Lovage/Chervil/Fennel/Frond/Pebble/Sage");
  }
  const catnip48 = readFileSync(resolve("public/assets/cats/catnip_loaf_48.svg"), "utf8");
  const catnip72 = readFileSync(resolve("public/assets/cats/catnip_loaf_72.svg"), "utf8");
  if (!catnip48.includes("#8FBF9A") || !catnip72.includes("#8FBF9A")) throw new Error("Catnip loaf must use soft meadow-green coat #8FBF9A");
  if (!catnip48.includes("#2F5C3A") || !catnip72.includes("#2F5C3A")) throw new Error("Catnip loaf must use tiny petal freckles #2F5C3A");
  if (!catnip48.includes("#DCEFE2") || !catnip72.includes("#DCEFE2")) throw new Error("Catnip loaf must use belly #DCEFE2");
  for (const hex of ["#7EC8A3", "#2F6B52", "#D4F4E8", "#7A9B88", "#2F463C", "#C8D6CE", "#A3B57C", "#4E5C36", "#D2D8B0", "#8FA86A", "#3F5230", "#D8D4A8", "#7A9A4E", "#4A5C2E", "#6B8F4E", "#2F4A28", "#C4D6A4", "#8FBF7A", "#4A6B3E", "#6FA86A", "#3F6B3C", "#9CB87A", "#5E7348", "#C6D9B4", "#5E7F52", "#E6C86E", "#7A9B6A", "#6A7D6E", "#1A2C24", "#7E8F86", "#C8D24A"]) {
    if (catnip48.includes(hex) || catnip72.includes(hex)) throw new Error(`Catnip loaf must not use prior herb coat ${hex}`);
  }
  if (furnitureGiftsForClear(150).length) throw new Error("Catnip@150 must gift no furniture");
  const yardC = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardC.match(/const catnip =/g) || []).length !== 1) throw new Error("YardScene must declare catnip once");
  if ((yardC.match(/\{catnip \?/g) || []).length !== 1) throw new Error("YardScene must render catnip once");
  if (TUTORIAL_RESCUES.length !== 83) throw new Error("Met must include through Catnip (50)");
  for (const [clear, friendId, message] of PRIOR_UNLOCKS) {
    if (shippedFriendForClear(clear)?.friendId !== friendId) throw new Error(message);
  }
  for (const [friendId, chips, message] of PRIOR_CHIPS) {
    if (chipsForFriend(friendId).join(",") !== chips) throw new Error(message);
  }
  if (SLICE_UNLOCKS[153] !== "friend_051") throw new Error("SLICE_UNLOCKS[153] must be friend_051 after Lavender ship");
  if (SLICE_UNLOCKS[156] !== "friend_052") throw new Error("SLICE_UNLOCKS[156] must be friend_052 after Chamomile ship");
  if (SLICE_UNLOCKS[159] !== "friend_053") throw new Error("SLICE_UNLOCKS[159] must be friend_053 after Bergamot ship");
  if (SLICE_UNLOCKS[162] !== "friend_054") throw new Error("SLICE_UNLOCKS[162] must be friend_054 after Jasmine ship");
  if (SLICE_UNLOCKS[165] !== "friend_055") throw new Error("SLICE_UNLOCKS[165] must be friend_055 after Magnolia ship");
  if (SLICE_UNLOCKS[168] !== "friend_056") throw new Error("SLICE_UNLOCKS[168] must be friend_056 after Hibiscus ship");
  if (SLICE_UNLOCKS[171] !== "friend_057") throw new Error("SLICE_UNLOCKS[171] must be friend_057 after Gardenia ship");
  if (SLICE_UNLOCKS[174] !== "friend_058") throw new Error("SLICE_UNLOCKS[174] must be friend_058 after Camellia ship");
  if (/pebble|Pebble/i.test(catnip48 + catnip72)) throw new Error("Catnip art must not use Pebble");
  if (/mint|chill|frost|rosemary|needle|woody|thyme|pinch|twig|marjoram|softleaf|peel|oregano|wild|bunch|tarragon|spear|bitters|dill|parsley|curl|sprig|lovage|stem|rib|chervil|frill|lace|fennel|anise/i.test(catnip48 + catnip72)) {
    throw new Error("Catnip art must not collide Mint/Rosemary/Thyme/Marjoram/Oregano/Tarragon/Dill/Parsley/Lovage/Chervil/Fennel marks");
  }
  const l151 = LEVELS.find((r) => r.id === "L151")!;
  const l152 = LEVELS.find((r) => r.id === "L152")!;
  const l153 = LEVELS.find((r) => r.id === "L153")!;
  if (/chill|frost|tin|needle|woody|pot|pinch|twig|jar|softleaf|dusty|peel|stone|wild|pizza|spear|bitters|cruet|seed|frondlet|ledge|garnish|bed/i.test([l151.name, l152.name, l153.name].join(","))) {
    throw new Error("L151–L153 must not reuse Chill/Frost/Tin/Needle/Woody/Pot/Pinch/Twig/Jar/Softleaf/Dusty/Peel/Stone/Wild/Pizza/Spear/Bitters/Cruet/Seed/Frondlet/Ledge/Garnish/Bed names");
  }
  const catnipGatePair = (level: typeof l151) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (catnipGatePair(l151) !== "3,4/5,3") throw new Error(`L151 gates must be delta (2,-1) pair, got ${catnipGatePair(l151)}`);
  if (catnipGatePair(l152) !== "3,4/4,5") throw new Error(`L152 gates must be delta (1,1) pair, got ${catnipGatePair(l152)}`);
  if (catnipGatePair(l153) !== "0,4/4,1") throw new Error(`L153 gates must be delta (4,-3) pair, got ${catnipGatePair(l153)}`);
  const occ153 = new Set([
    ...l153.cats.map((c) => `${c.x},${c.y}`),
    ...l153.gates.map((g) => `${g.x},${g.y}`),
  ]);
  if (occ153.has("5,5")) throw new Error("L153 Pouch must be off Nori seat (5,5)");
  if (occ153.has("5,0") || occ153.has("0,5")) throw new Error("L153 Pouch must be off Perch seats");
  if (occ153.has("5,1") || occ153.has("1,2")) throw new Error("L153 Pouch must be off Medlar seats");
  if (occ153.has("0,0") || occ153.has("2,4")) throw new Error("L153 Pouch must be off Garnish Stop seats");
  if (occ153.has("3,1") || occ153.has("5,2")) throw new Error("L153 Pouch must be off Bed Stop seats");
  if (occ153.has("1,5") || occ153.has("2,1")) throw new Error("L153 Pouch must be off Ledge Stop seats");
  if (occ153.has("1,4") || occ153.has("5,3")) throw new Error("L153 Pouch must be off Cruet Stop seats");
  if (occ153.has("1,1") || occ153.has("0,2")) throw new Error("L153 Pouch must be off Pizza Stop seats");
  if (occ153.has("0,1") || occ153.has("4,4")) throw new Error("L153 Pouch must be off Peel Stop seats");
  if (occ153.has("2,5") || occ153.has("4,5")) throw new Error("L153 Pouch must be off Peel Stop cats");
  if (occ153.has("3,2") || occ153.has("5,4")) throw new Error("L153 Pouch must be off Jar Stop seats");
  if (occ153.has("1,0") || occ153.has("3,0")) throw new Error("L153 Pouch must be off Jar Stop cats");
  if (occ153.has("1,3") || occ153.has("2,2")) throw new Error("L153 Pouch must be off Pot Stop seats");
  if (occ153.has("2,3") || occ153.has("3,3")) throw new Error("L153 Pouch must be off Pot Stop cats");
  if (occ153.has("0,3") || occ153.has("3,5")) throw new Error("L153 Pouch must be off Tin Stop seats");
  if (occ153.has("3,4") || occ153.has("4,3")) throw new Error("L153 Pouch must be off Tin Stop cats");
  if (l153.gates[0].y === l153.gates[1].y) throw new Error("L153 Pouch must not same-row Nest");
  if (l153.gates[0].x === l153.gates[1].x) throw new Error("L153 Pouch must not column Porch");
  if (l151.cats[0].x === l151.cats[1].x) throw new Error("L151 Nip must not stacked-column Vine");
  if (solves.L151[0][0] === "cat_gray" && solves.L151[0][1] === "n") {
    throw new Error("L151 Nip Cut must not open gray-north (Chill clone)");
  }
  if (solves.L151[0][0] === "cat_orange" && solves.L151[0][1] === "n") {
    throw new Error("L151 Nip Cut must not open orange-north (Needle clone)");
  }
  if (solves.L151[0][0] === "cat_gray" && solves.L151[0][1] === "w") {
    throw new Error("L151 Nip Cut must not open gray-west (Pinch clone)");
  }
  if (solves.L151[0][0] === "cat_orange" && solves.L151[0][1] === "e") {
    throw new Error("L151 Nip Cut must not open orange-east (Softleaf clone)");
  }
  if (solves.L151[0][0] === "cat_gray" && solves.L151[0][1] === "e") {
    throw new Error("L151 Nip Cut must not open gray-east (Stone clone)");
  }
  if (solves.L151[0][0] === "cat_orange" && solves.L151[0][1] === "w") {
    throw new Error("L151 Nip Cut must not open orange-west (Spear clone)");
  }
  if (solves.L152[0][0] === "cat_orange" && solves.L152[0][1] === "e") {
    throw new Error("L152 Dream Gap must not open orange-east (Frost clone)");
  }
  if (solves.L152[0][0] === "cat_black" && solves.L152[0][1] === "e") {
    throw new Error("L152 Dream Gap must not open black-east (Twig clone)");
  }
  if (solves.L152[0][0] === "cat_black" && solves.L152[0][1] === "n") {
    throw new Error("L152 Dream Gap must not open black-north (Dusty clone)");
  }
  if (solves.L152[0][0] === "cat_orange" && solves.L152[0][1] === "w") {
    throw new Error("L152 Dream Gap must not open orange-west (Wild clone)");
  }
  if (solves.L152[0][0] === "cat_black" && solves.L152[0][1] === "s") {
    throw new Error("L152 Dream Gap must not open black-south (Bitters clone)");
  }
  if (solves.L152[0][0] === "cat_orange" && solves.L152[0][1] === "s") {
    throw new Error("L152 Dream Gap must not open orange-south (Woody clone)");
  }
  for (const level of [l151, l152, l153]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
    if (level.width !== 6 || level.height !== 6) throw new Error(`${level.id} must be 6×6`);
    if (!level.templateId.startsWith("LT02_LT08_")) throw new Error(`${level.id} must be LT02+LT08`);
  }
  const wallKeyC = (level: typeof l151) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsC = ["L148", "L149", "L150", "L145", "L146", "L147", "L142", "L143", "L144", "L139", "L140", "L141"].map((id) => wallKeyC(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L151", "L152", "L153"] as const) {
    const key = wallKeyC(LEVELS.find((r) => r.id === id)!);
    if (priorWallsC.includes(key)) throw new Error(`${id} wall twin of L139–L150`);
  }
  if (ART_KIT_PATH.catnip.loaf48 !== "/assets/cats/catnip_loaf_48.svg") throw new Error("ART_KIT_PATH.catnip loaf48");
  if (ART_KIT_PATH.catnip.loaf72 !== "/assets/cats/catnip_loaf_72.svg") throw new Error("ART_KIT_PATH.catnip loaf72");
  if (ART_KIT_PATH.mint.loaf48 !== "/assets/cats/mint_loaf_48.svg") throw new Error("Mint kit must stay");
  const saveC = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveC.includes("catnip pouch")) throw new Error("SaveProvider must yard-bubble catnip pouch for Catnip");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_050.md"))) throw new Error("missing CH4_FRIEND_050.md");
  if (!existsSync(resolve("data/collection/chapter4_catnip_bang.json"))) throw new Error("missing collection catnip bang");
  if (!existsSync(resolve("data/chapter4_catnip_bang.json"))) throw new Error("missing chapter4_catnip_bang.json");
  const nameModalC = readFileSync(resolve("src/components/puzzle/NameCatModal.tsx"), "utf8");
  if (!nameModalC.includes("CATNIP_FRIEND_ID")) throw new Error("NameCatModal must lockChips Catnip");
  if (!nameModalC.includes("MINT_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Mint");
  const shellC = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shellC.includes("Full-viewport") && !shellC.includes("full-viewport") && !shellC.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shellC)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Catnip@150 + L151–L153 ok · chips Catnip/Nip/Dream · coat #8FBF9A + tiny petal freckles #2F5C3A · Nip Cut / Dream Gap / Pouch Stop · Mint/Rosemary/Thyme/Marjoram/Oregano/Tarragon/Dill/Parsley/Lovage/Chervil/Fennel/Sorrel/Nettle/Ivy/Briar/Thistle/Plum/Fig/Basil/Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}
