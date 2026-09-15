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

export function verifyChapter4Mint(solves: Record<string, Array<[string, Dir]>>) {
  for (const [id, name] of [
    ["L148", "Chill Cut"],
    ["L149", "Frost Gap"],
    ["L150", "Tin Stop"],
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
    if (/mint (cut|gap|stop)/i.test(level.name)) {
      throw new Error(`${id} must not be Mint Cut/Gap/Stop`);
    }
    if (/needle cut|woody gap|pot stop|rosemary (cut|gap|stop)|pinch cut|twig gap|jar stop|thyme (cut|gap|stop)|marjoram (cut|gap|stop)|softleaf cut|dusty gap|peel stop|oregano (cut|gap|stop)|stone cut|wild gap|pizza stop|tarragon (cut|gap|stop)|spear cut|bitters gap|cruet stop|dill (cut|gap|stop)|seed cut|frondlet gap|ledge stop|parsley (cut|gap|stop)|curl cut|sprig gap|garnish stop/i.test(level.name)) {
      throw new Error(`${id} must not reuse prior triad names`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (BANNED_PAIRS.has(pair)) throw new Error(`${id} must not twin a prior gate pair (${pair})`);
    const unique = uniqueShortestCount(level);
    if (unique.count !== 1) throw new Error(`${id} must have a unique shortest (${unique.count} paths of ${unique.min})`);
    if (unique.min < 10 || unique.min > 11) throw new Error(`${id} shortest must be 10–11, got ${unique.min}`);
    if (level.moveBudget < unique.min) throw new Error(`${id} budget ${level.moveBudget} < shortest ${unique.min}`);
  }
  if (LEVELS.find((row) => row.id === "L145")?.name !== "Needle Cut") throw new Error("L145 Needle Cut locked");
  if (LEVELS.find((row) => row.id === "L146")?.name !== "Woody Gap") throw new Error("L146 Woody Gap locked");
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
  if (SLICE_UNLOCKS[147] !== "friend_049") throw new Error("SLICE_UNLOCKS[147] must be friend_049");
  if (shippedFriendForClear(147)?.friendId !== "friend_049") throw new Error("onClear(147) must award Mint");
  const mint = friendById("friend_049");
  if (!mint) throw new Error("friend_049 missing from CATALOG");
  if (mint.defaultName !== "Mint") throw new Error("default name must be Mint");
  if (mint.unlockClear !== 147) throw new Error("Mint unlockClear must be 147");
  if (mint.phenotype.artKit !== "mint") throw new Error("Mint artKit must be mint");
  if (mint.phenotype.personality !== "Tin-cool") throw new Error("Mint personality must be Tin-cool");
  if (mint.phenotype.boardColor !== "gray") throw new Error("Mint boardColor must be gray");
  if (mint.phenotype.color !== "Gray") throw new Error("Mint color must be Gray");
  if (mint.phenotype.pattern !== "Freckled") throw new Error("Mint pattern must be Freckled");
  if (chipsForFriend("friend_049").join(",") !== "Mint,Chill,Frost") {
    throw new Error(`Mint chips must be Mint/Chill/Frost, got ${chipsForFriend("friend_049").join(",")}`);
  }
  if (chipsForFriend("friend_049").some((c) => /rosemary|needle|^woody$|thyme|pinch|^twig$|marjoram|softleaf|^peel$|oregano|wild|^bunch$|tarragon|spear|bitters|dill|frondlet|^seed$|parsley|curl|sprig|lovage|stem|rib|chervil|frill|lace|fennel|^frond$|anise|pebble/i.test(c))) {
    throw new Error("Mint chips must ban Rosemary/Needle/Woody/Thyme/Pinch/Twig/Marjoram/Softleaf/Peel/Oregano/Wild/Bunch/Tarragon/Spear/Bitters/Dill/Frondlet/Seed/Parsley/Curl/Sprig/Lovage/Chervil/Fennel/Frond/Pebble");
  }
  const mint48 = readFileSync(resolve("public/assets/cats/mint_loaf_48.svg"), "utf8");
  const mint72 = readFileSync(resolve("public/assets/cats/mint_loaf_72.svg"), "utf8");
  if (!mint48.includes("#7EC8A3") || !mint72.includes("#7EC8A3")) throw new Error("Mint loaf must use cool mint-frost coat #7EC8A3");
  if (!mint48.includes("#2F6B52") || !mint72.includes("#2F6B52")) throw new Error("Mint loaf must use tiny frost freckles #2F6B52");
  if (!mint48.includes("#D4F4E8") || !mint72.includes("#D4F4E8")) throw new Error("Mint loaf must use belly #D4F4E8");
  for (const hex of ["#7A9B88", "#2F463C", "#C8D6CE", "#A3B57C", "#4E5C36", "#D2D8B0", "#8FA86A", "#3F5230", "#D8D4A8", "#7A9A4E", "#4A5C2E", "#6B8F4E", "#2F4A28", "#C4D6A4", "#8FBF7A", "#4A6B3E", "#6FA86A", "#3F6B3C", "#9CB87A", "#5E7348", "#C6D9B4", "#5E7F52", "#E6C86E", "#7A9B6A", "#6A7D6E", "#1A2C24", "#7E8F86", "#C8D24A"]) {
    if (mint48.includes(hex) || mint72.includes(hex)) throw new Error(`Mint loaf must not use prior herb coat ${hex}`);
  }
  if (furnitureGiftsForClear(147).length) throw new Error("Mint@147 must gift no furniture");
  const yardM = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardM.match(/const mint =/g) || []).length !== 1) throw new Error("YardScene must declare mint once");
  if ((yardM.match(/\{mint \?/g) || []).length !== 1) throw new Error("YardScene must render mint once");
  if (TUTORIAL_RESCUES.length !== 68) throw new Error("Met must include through Mint (49)");
  for (const [clear, friendId, message] of PRIOR_UNLOCKS) {
    if (shippedFriendForClear(clear)?.friendId !== friendId) throw new Error(message);
  }
  for (const [friendId, chips, message] of PRIOR_CHIPS) {
    if (chipsForFriend(friendId).join(",") !== chips) throw new Error(message);
  }
  if (SLICE_UNLOCKS[150] !== "friend_050") throw new Error("SLICE_UNLOCKS[150] must be friend_050 after Catnip ship");
  if (SLICE_UNLOCKS[153] !== "friend_051") throw new Error("SLICE_UNLOCKS[153] must be friend_051 after Lavender ship");
  if (SLICE_UNLOCKS[156] !== "friend_052") throw new Error("SLICE_UNLOCKS[156] must be friend_052 after Chamomile ship");
  if (SLICE_UNLOCKS[159] !== "friend_053") throw new Error("SLICE_UNLOCKS[159] must be friend_053 after Bergamot ship");
  if (SLICE_UNLOCKS[162] !== "friend_054") throw new Error("SLICE_UNLOCKS[162] must be friend_054 after Jasmine ship");
  if (SLICE_UNLOCKS[165] !== "friend_055") throw new Error("SLICE_UNLOCKS[165] must be friend_055 after Magnolia ship");
  if (SLICE_UNLOCKS[168] !== "friend_056") throw new Error("SLICE_UNLOCKS[168] must be friend_056 after Hibiscus ship");
  if (SLICE_UNLOCKS[171] !== "friend_057") throw new Error("SLICE_UNLOCKS[171] must be friend_057 after Gardenia ship");
  if (SLICE_UNLOCKS[174] !== "friend_058") throw new Error("SLICE_UNLOCKS[174] must be friend_058 after Camellia ship");
  if (/pebble|Pebble/i.test(mint48 + mint72)) throw new Error("Mint art must not use Pebble");
  if (/rosemary|needle|woody|thyme|pinch|twig|marjoram|softleaf|peel|oregano|wild|bunch|tarragon|spear|bitters|dill|parsley|curl|sprig|lovage|stem|rib|chervil|frill|lace|fennel|anise/i.test(mint48 + mint72)) {
    throw new Error("Mint art must not collide Rosemary/Thyme/Marjoram/Oregano/Tarragon/Dill/Parsley/Lovage/Chervil/Fennel marks");
  }
  const l148 = LEVELS.find((r) => r.id === "L148")!;
  const l149 = LEVELS.find((r) => r.id === "L149")!;
  const l150 = LEVELS.find((r) => r.id === "L150")!;
  if (/needle|woody|pot|pinch|twig|jar|softleaf|dusty|peel|stone|wild|pizza|spear|bitters|cruet|seed|frondlet|ledge|garnish|bed/i.test([l148.name, l149.name, l150.name].join(","))) {
    throw new Error("L148–L150 must not reuse Needle/Woody/Pot/Pinch/Twig/Jar/Softleaf/Dusty/Peel/Stone/Wild/Pizza/Spear/Bitters/Cruet/Seed/Frondlet/Ledge/Garnish/Bed names");
  }
  const mintGatePair = (level: typeof l148) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (mintGatePair(l148) !== "2,5/3,2") throw new Error(`L148 gates must be delta (1,-3) pair, got ${mintGatePair(l148)}`);
  if (mintGatePair(l149) !== "2,5/4,3") throw new Error(`L149 gates must be delta (-2,2) pair, got ${mintGatePair(l149)}`);
  if (mintGatePair(l150) !== "0,3/3,5") throw new Error(`L150 gates must be delta (3,2) pair, got ${mintGatePair(l150)}`);
  const occ150 = new Set([
    ...l150.cats.map((c) => `${c.x},${c.y}`),
    ...l150.gates.map((g) => `${g.x},${g.y}`),
  ]);
  if (occ150.has("5,5")) throw new Error("L150 Tin must be off Nori seat (5,5)");
  if (occ150.has("5,0") || occ150.has("0,5")) throw new Error("L150 Tin must be off Perch seats");
  if (occ150.has("5,1") || occ150.has("1,2")) throw new Error("L150 Tin must be off Medlar seats");
  if (occ150.has("0,0") || occ150.has("2,4")) throw new Error("L150 Tin must be off Garnish Stop seats");
  if (occ150.has("3,1") || occ150.has("5,2")) throw new Error("L150 Tin must be off Bed Stop seats");
  if (occ150.has("1,5") || occ150.has("2,1")) throw new Error("L150 Tin must be off Ledge Stop seats");
  if (occ150.has("1,4") || occ150.has("5,3")) throw new Error("L150 Tin must be off Cruet Stop seats");
  if (occ150.has("1,1") || occ150.has("0,2")) throw new Error("L150 Tin must be off Pizza Stop seats");
  if (occ150.has("0,1") || occ150.has("4,4")) throw new Error("L150 Tin must be off Peel Stop seats");
  if (occ150.has("2,5") || occ150.has("4,5")) throw new Error("L150 Tin must be off Peel Stop cats");
  if (occ150.has("3,2") || occ150.has("5,4")) throw new Error("L150 Tin must be off Jar Stop seats");
  if (occ150.has("1,0") || occ150.has("3,0")) throw new Error("L150 Tin must be off Jar Stop cats");
  if (occ150.has("1,3") || occ150.has("2,2")) throw new Error("L150 Tin must be off Pot Stop seats");
  if (occ150.has("2,3") || occ150.has("3,3")) throw new Error("L150 Tin must be off Pot Stop cats");
  if (l150.gates[0].y === l150.gates[1].y) throw new Error("L150 Tin must not same-row Nest");
  if (l150.gates[0].x === l150.gates[1].x) throw new Error("L150 Tin must not column Porch");
  if (l148.cats[0].x === l148.cats[1].x) throw new Error("L148 Chill must not stacked-column Vine");
  if (solves.L148[0][0] === "cat_gray" && solves.L148[0][1] === "w") {
    throw new Error("L148 Chill Cut must not open gray-west (Pinch clone)");
  }
  if (solves.L148[0][0] === "cat_orange" && solves.L148[0][1] === "e") {
    throw new Error("L148 Chill Cut must not open orange-east (Softleaf clone)");
  }
  if (solves.L148[0][0] === "cat_gray" && solves.L148[0][1] === "e") {
    throw new Error("L148 Chill Cut must not open gray-east (Stone clone)");
  }
  if (solves.L148[0][0] === "cat_orange" && solves.L148[0][1] === "w") {
    throw new Error("L148 Chill Cut must not open orange-west (Spear clone)");
  }
  if (solves.L148[0][0] === "cat_orange" && solves.L148[0][1] === "n") {
    throw new Error("L148 Chill Cut must not open orange-north (Needle clone)");
  }
  if (solves.L149[0][0] === "cat_black" && solves.L149[0][1] === "e") {
    throw new Error("L149 Frost Gap must not open black-east (Twig clone)");
  }
  if (solves.L149[0][0] === "cat_black" && solves.L149[0][1] === "n") {
    throw new Error("L149 Frost Gap must not open black-north (Dusty clone)");
  }
  if (solves.L149[0][0] === "cat_orange" && solves.L149[0][1] === "w") {
    throw new Error("L149 Frost Gap must not open orange-west (Wild clone)");
  }
  if (solves.L149[0][0] === "cat_black" && solves.L149[0][1] === "s") {
    throw new Error("L149 Frost Gap must not open black-south (Bitters clone)");
  }
  if (solves.L149[0][0] === "cat_orange" && solves.L149[0][1] === "s") {
    throw new Error("L149 Frost Gap must not open orange-south (Woody clone)");
  }
  for (const level of [l148, l149, l150]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
    if (level.width !== 6 || level.height !== 6) throw new Error(`${level.id} must be 6×6`);
    if (!level.templateId.startsWith("LT02_LT08_")) throw new Error(`${level.id} must be LT02+LT08`);
  }
  const wallKeyM = (level: typeof l148) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsM = ["L145", "L146", "L147", "L142", "L143", "L144", "L139", "L140", "L141"].map((id) => wallKeyM(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L148", "L149", "L150"] as const) {
    const key = wallKeyM(LEVELS.find((r) => r.id === id)!);
    if (priorWallsM.includes(key)) throw new Error(`${id} wall twin of L139–L147`);
  }
  if (ART_KIT_PATH.mint.loaf48 !== "/assets/cats/mint_loaf_48.svg") throw new Error("ART_KIT_PATH.mint loaf48");
  if (ART_KIT_PATH.mint.loaf72 !== "/assets/cats/mint_loaf_72.svg") throw new Error("ART_KIT_PATH.mint loaf72");
  if (ART_KIT_PATH.rosemary.loaf48 !== "/assets/cats/rosemary_loaf_48.svg") throw new Error("Rosemary kit must stay");
  const saveM = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveM.includes("mint tin")) throw new Error("SaveProvider must yard-bubble mint tin for Mint");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_049.md"))) throw new Error("missing CH4_FRIEND_049.md");
  if (!existsSync(resolve("data/collection/chapter4_mint_bang.json"))) throw new Error("missing collection mint bang");
  if (!existsSync(resolve("data/chapter4_mint_bang.json"))) throw new Error("missing chapter4_mint_bang.json");
  const nameModalM = readFileSync(resolve("src/components/puzzle/NameCatModal.tsx"), "utf8");
  if (!nameModalM.includes("MINT_FRIEND_ID")) throw new Error("NameCatModal must lockChips Mint");
  if (!nameModalM.includes("ROSEMARY_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Rosemary");
  const shellM = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shellM.includes("Full-viewport") && !shellM.includes("full-viewport") && !shellM.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shellM)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Mint@147 + L148–L150 ok · chips Mint/Chill/Frost · coat #7EC8A3 + tiny frost freckles #2F6B52 · Chill Cut / Frost Gap / Tin Stop · Rosemary/Thyme/Marjoram/Oregano/Tarragon/Dill/Parsley/Lovage/Chervil/Fennel/Sorrel/Nettle/Ivy/Briar/Thistle/Plum/Fig/Basil/Clay/Ivory/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}
