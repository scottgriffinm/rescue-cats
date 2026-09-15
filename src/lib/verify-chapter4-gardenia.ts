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
  [168, "friend_056", "Hibiscus@168 must stay"],
  [165, "friend_055", "Magnolia@165 must stay"],
  [162, "friend_054", "Jasmine@162 must stay"],
  [159, "friend_053", "Bergamot@159 must stay"],
  [156, "friend_052", "Chamomile@156 must stay"],
  [153, "friend_051", "Lavender@153 must stay"],
  [150, "friend_050", "Catnip@150 must stay"],
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
  ["friend_056", "Hibiscus,Roselle,Punch", "Hibiscus chips untouched"],
  ["friend_055", "Magnolia,Cream,Blush", "Magnolia chips untouched"],
  ["friend_054", "Jasmine,Blossom,Honey", "Jasmine chips untouched"],
  ["friend_053", "Bergamot,Citrus,Earl", "Bergamot chips untouched"],
  ["friend_052", "Chamomile,Daisy,Tea", "Chamomile chips untouched"],
  ["friend_051", "Lavender,Bloom,Calm", "Lavender chips untouched"],
  ["friend_050", "Catnip,Nip,Dream", "Catnip chips untouched"],
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
  "3,4/5,3", "3,4/4,5", "0,4/4,1",
  "1,5/2,3", "0,3/2,3", "2,1/4,5",
  "4,1/4,3", "0,1/3,2", "1,5/3,1",
  "2,1/3,5", "2,4/4,0", "1,2/5,3",
  "1,4/5,5", "3,5/4,0", "1,4/5,1",
  "1,0/1,2", "0,4/2,5", "0,1/1,3",
  "0,2/4,3", "0,2/4,4", "0,2/2,3",
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

export function verifyChapter4Gardenia(solves: Record<string, Array<[string, Dir]>>) {
  for (const [id, name] of [
    ["L172", "Snow Drift"],
    ["L173", "Velvet Latch"],
    ["L174", "Dish Claim"],
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
    if (/gardenia (cut|gap|stop)/i.test(level.name)) {
      throw new Error(`${id} must not be Gardenia Cut/Gap/Stop`);
    }
    if (/roselle cut|punch gap|sip stop|hibiscus (cut|gap|stop)|cream cut|blush gap|bowl stop|magnolia (cut|gap|stop)|blossom cut|honey gap|bloom stop|jasmine (cut|gap|stop)|citrus cut|earl gap|saucer stop|bergamot (cut|gap|stop)|daisy cut|tea gap|cup stop|chamomile (cut|gap|stop)|bloom cut|calm gap|bundle stop|nip cut|dream gap|pouch stop|chill cut|frost gap|tin stop|lavender (cut|gap|stop)|catnip (cut|gap|stop)|mint (cut|gap|stop)|needle cut|woody gap|pot stop|rosemary (cut|gap|stop)|pinch cut|twig gap|jar stop|thyme (cut|gap|stop)|marjoram (cut|gap|stop)|softleaf cut|dusty gap|peel stop|oregano (cut|gap|stop)|stone cut|wild gap|pizza stop|tarragon (cut|gap|stop)|spear cut|bitters gap|cruet stop|dill (cut|gap|stop)|seed cut|frondlet gap|ledge stop|parsley (cut|gap|stop)|curl cut|sprig gap|garnish stop/i.test(level.name)) {
      throw new Error(`${id} must not reuse prior triad names`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (BANNED_PAIRS.has(pair)) throw new Error(`${id} must not twin a prior gate pair (${pair})`);
    const unique = uniqueShortestCount(level);
    if (unique.count !== 1) throw new Error(`${id} must have a unique shortest (${unique.count} paths of ${unique.min})`);
    if (unique.min < 10 || unique.min > 11) throw new Error(`${id} shortest must be 10–11, got ${unique.min}`);
    if (level.moveBudget < unique.min) throw new Error(`${id} budget ${level.moveBudget} < shortest ${unique.min}`);
  }
  if (LEVELS.find((row) => row.id === "L169")?.name !== "Roselle Cut") throw new Error("L169 Roselle Cut locked");
  if (LEVELS.find((row) => row.id === "L170")?.name !== "Punch Gap") throw new Error("L170 Punch Gap locked");
  if (LEVELS.find((row) => row.id === "L171")?.name !== "Sip Stop") throw new Error("L171 Sip Stop locked");
  if (LEVELS.find((row) => row.id === "L168")?.name !== "Bowl Stop") throw new Error("L168 Bowl Stop locked");
  if (LEVELS.find((row) => row.id === "L165")?.name !== "Bloom Stop") throw new Error("L165 Bloom Stop locked");
  if (LEVELS.find((row) => row.id === "L162")?.name !== "Saucer Stop") throw new Error("L162 Saucer Stop locked");
  if (LEVELS.find((row) => row.id === "L159")?.name !== "Cup Stop") throw new Error("L159 Cup Stop locked");
  if (LEVELS.find((row) => row.id === "L156")?.name !== "Bundle Stop") throw new Error("L156 Bundle Stop locked");
  if (LEVELS.find((row) => row.id === "L153")?.name !== "Pouch Stop") throw new Error("L153 Pouch Stop locked");
  if (LEVELS.find((row) => row.id === "L150")?.name !== "Tin Stop") throw new Error("L150 Tin Stop locked");
  if (LEVELS.find((row) => row.id === "L147")?.name !== "Pot Stop") throw new Error("L147 Pot Stop locked");
  if (SLICE_UNLOCKS[171] !== "friend_057") throw new Error("SLICE_UNLOCKS[171] must be friend_057");
  if (shippedFriendForClear(171)?.friendId !== "friend_057") throw new Error("onClear(171) must award Gardenia");
  const gardenia = friendById("friend_057");
  if (!gardenia) throw new Error("friend_057 missing from CATALOG");
  if (gardenia.defaultName !== "Gardenia") throw new Error("default name must be Gardenia");
  if (gardenia.unlockClear !== 171) throw new Error("Gardenia unlockClear must be 171");
  if (gardenia.phenotype.artKit !== "gardenia") throw new Error("Gardenia artKit must be gardenia");
  if (gardenia.phenotype.personality !== "Dish-soft") throw new Error("Gardenia personality must be Dish-soft");
  if (gardenia.phenotype.boardColor !== "gray") throw new Error("Gardenia boardColor must be gray");
  if (gardenia.phenotype.color !== "Gray") throw new Error("Gardenia color must be Gray");
  if (gardenia.phenotype.pattern !== "Freckled") throw new Error("Gardenia pattern must be Freckled");
  if (chipsForFriend("friend_057").join(",") !== "Gardenia,Snow,Velvet") {
    throw new Error(`Gardenia chips must be Gardenia/Snow/Velvet, got ${chipsForFriend("friend_057").join(",")}`);
  }
  if (chipsForFriend("friend_057").some((c) => /hibiscus|^roselle$|^punch$|magnolia|^cream$|^blush$|jasmine|^blossom$|^honey$|bergamot|^citrus$|^earl$|chamomile|^daisy$|^tea$|lavender|^bloom$|^calm$|catnip|^nip$|^dream$|mint|chill|^frost$|^ivory$|^lace$|^sheer$|rosemary|needle|^woody$|thyme|pinch|^twig$|marjoram|softleaf|^peel$|oregano|wild|^bunch$|tarragon|spear|bitters|dill|frondlet|^seed$|parsley|curl|sprig|lovage|stem|rib|chervil|frill|lace|fennel|^frond$|anise|pebble|^sage$/i.test(c))) {
    throw new Error("Gardenia chips must ban Hibiscus/Roselle/Punch/Magnolia/Cream/Blush/Jasmine/Blossom/Honey and all prior pools/Pebble/Sage");
  }
  const gardenia48 = readFileSync(resolve("public/assets/cats/gardenia_loaf_48.svg"), "utf8");
  const gardenia72 = readFileSync(resolve("public/assets/cats/gardenia_loaf_72.svg"), "utf8");
  if (!gardenia48.includes("#F6F1E8") || !gardenia72.includes("#F6F1E8")) throw new Error("Gardenia loaf must use soft porcelain coat #F6F1E8");
  if (!gardenia48.includes("#4F6B4A") || !gardenia72.includes("#4F6B4A")) throw new Error("Gardenia loaf must use tiny leaf freckles #4F6B4A");
  if (!gardenia48.includes("#FFFBF3") || !gardenia72.includes("#FFFBF3")) throw new Error("Gardenia loaf must use belly #FFFBF3");
  for (const hex of ["#D46A8A", "#5A1F3A", "#C24A6E", "#EBB0C2", "#F7E8D2", "#C48A7A", "#FFF4E4", "#E8B8A4", "#F2D4C4", "#6E3A42", "#F4EFE6", "#7A6B4E", "#FBF7EE", "#F0C98A", "#9A5A1A", "#FFF1C4", "#E8D5A3", "#8A6B2E", "#F7E8C4", "#C4A66A", "#B8A0C8", "#5A3F6E", "#EDE4F4", "#8A6AA8", "#8FBF9A", "#2F5C3A", "#DCEFE2", "#7EC8A3", "#2F6B52", "#D4F4E8", "#7A9B88", "#2F463C", "#C8D6CE", "#A3B57C", "#4E5C36", "#D2D8B0", "#8FA86A", "#3F5230", "#D8D4A8", "#7A9A4E", "#4A5C2E", "#6B8F4E", "#2F4A28", "#C4D6A4", "#8FBF7A", "#4A6B3E", "#6FA86A", "#3F6B3C", "#9CB87A", "#5E7348", "#C6D9B4", "#5E7F52", "#E6C86E", "#7A9B6A", "#6A7D6E", "#1A2C24", "#7E8F86", "#C8D24A", "#EBE3C4", "#C9C09A", "#F3EBD0"]) {
    if (gardenia48.includes(hex) || gardenia72.includes(hex)) throw new Error(`Gardenia loaf must not use prior herb coat ${hex}`);
  }
  if (furnitureGiftsForClear(171).length) throw new Error("Gardenia@171 must gift no furniture");
  const yardG = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardG.match(/const gardenia =/g) || []).length !== 1) throw new Error("YardScene must declare gardenia once");
  if ((yardG.match(/\{gardenia \?/g) || []).length !== 1) throw new Error("YardScene must render gardenia once");
  if (TUTORIAL_RESCUES.length !== 77) throw new Error("Met must include through Gardenia (57)");
  for (const [clear, friendId, message] of PRIOR_UNLOCKS) {
    if (shippedFriendForClear(clear)?.friendId !== friendId) throw new Error(message);
  }
  for (const [friendId, chips, message] of PRIOR_CHIPS) {
    if (chipsForFriend(friendId).join(",") !== chips) throw new Error(message);
  }
  if (SLICE_UNLOCKS[174] !== "friend_058") throw new Error("SLICE_UNLOCKS[174] must be friend_058 after Camellia ship");
  if (SLICE_UNLOCKS[177] !== "friend_059") throw new Error("SLICE_UNLOCKS[177] must be friend_059 after Peony ship");
  if (SLICE_UNLOCKS[180] !== "friend_060") throw new Error("SLICE_UNLOCKS[180] must be friend_060 after Azalea ship");
  if (SLICE_UNLOCKS[183] !== "friend_061") throw new Error("SLICE_UNLOCKS[183] must be friend_061 after Dahlia ship");
  if (SLICE_UNLOCKS[186] !== "friend_062") throw new Error("SLICE_UNLOCKS[186] must be friend_062 after Zinnia ship");
  if (SLICE_UNLOCKS[189] !== "friend_063") throw new Error("SLICE_UNLOCKS[189] must be friend_063 after Aster ship");
  if (SLICE_UNLOCKS[192] !== "friend_064") throw new Error("SLICE_UNLOCKS[192] must be friend_064 after Iris ship");
  if (/pebble|Pebble/i.test(gardenia48 + gardenia72)) throw new Error("Gardenia art must not use Pebble");
  if (/hibiscus|roselle|punch|magnolia|cream|blush|jasmine|blossom|honey|bergamot|citrus|earl|chamomile|daisy|tea|lavender|bloom|calm|catnip|mint|chill|frost|ivory|sheer|rosemary|needle|woody|thyme|pinch|twig|marjoram|softleaf|peel|oregano|wild|bunch|tarragon|spear|bitters|dill|parsley|curl|sprig|lovage|stem|rib|chervil|frill|lace|fennel|anise/i.test(gardenia48 + gardenia72)) {
    throw new Error("Gardenia art must not collide Hibiscus/Magnolia/Jasmine/Bergamot/Chamomile/Lavender/Catnip/Mint/Ivory/Rosemary/Thyme/Marjoram/Oregano/Tarragon/Dill/Parsley/Lovage/Chervil/Fennel marks");
  }
  const l172 = LEVELS.find((r) => r.id === "L172")!;
  const l173 = LEVELS.find((r) => r.id === "L173")!;
  const l174 = LEVELS.find((r) => r.id === "L174")!;
  if (/roselle|punch|sip|hibiscus|cream|blush|bowl|magnolia|blossom|honey|bloom|citrus|earl|saucer|daisy|tea|cup|calm|bundle|nip|dream|pouch|chill|frost|tin|needle|woody|pot|pinch|twig|jar|softleaf|dusty|peel|stone|wild|pizza|spear|bitters|cruet|seed|frondlet|ledge|garnish|bed/i.test([l172.name, l173.name, l174.name].join(","))) {
    throw new Error("L172–L174 must not reuse Roselle/Punch/Sip/Cream/Blush/Bowl/Cup/Bloom/Saucer and prior triad names");
  }
  const gardeniaGatePair = (level: typeof l172) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (gardeniaGatePair(l172) !== "2,3/3,5") throw new Error(`L172 gates must be delta (1, 2) pair, got ${gardeniaGatePair(l172)}`);
  if (gardeniaGatePair(l173) !== "2,3/5,3") throw new Error(`L173 gates must be delta (-3, 0) pair, got ${gardeniaGatePair(l173)}`);
  if (gardeniaGatePair(l174) !== "0,0/1,1") throw new Error(`L174 gates must be delta (-1, -1) pair, got ${gardeniaGatePair(l174)}`);
  const occ174 = new Set([
    ...l174.cats.map((c) => `${c.x},${c.y}`),
    ...l174.gates.map((g) => `${g.x},${g.y}`),
  ]);
  if (occ174.has("5,5")) throw new Error("L174 Dish must be off Nori seat (5,5)");
  if (occ174.has("2,2") || occ174.has("5,4") || occ174.has("2,3") || occ174.has("0,2")) {
    throw new Error("L174 Dish must be off Sip seats");
  }
  if (occ174.has("0,5") || occ174.has("5,0") || occ174.has("1,4") || occ174.has("5,1")) {
    throw new Error("L174 Dish must be off Bloom seats");
  }
  if (occ174.has("2,0") || occ174.has("2,5") || occ174.has("5,3") || occ174.has("1,2")) {
    throw new Error("L174 Dish must be off Saucer seats");
  }
  if (occ174.has("4,4") || occ174.has("5,2") || occ174.has("3,1") || occ174.has("1,5")) {
    throw new Error("L174 Dish must be off Cup seats");
  }
  if (occ174.has("3,2") || occ174.has("3,3") || occ174.has("0,1") || occ174.has("1,3")) {
    throw new Error("L174 Dish must be off Bowl seats");
  }
  if (l174.gates[0].y === l174.gates[1].y) throw new Error("L174 Dish must not same-row Nest");
  if (l174.gates[0].x === l174.gates[1].x) throw new Error("L174 Dish must not column Porch");
  if (l172.cats[0].x === l172.cats[1].x) throw new Error("L172 Snow must not stacked-column Vine");
  if (solves.L172[0][0] === "cat_gray" && solves.L172[0][1] === "e") {
    throw new Error("L172 Snow Drift must not open gray-east (Roselle clone)");
  }
  if (solves.L173[0][0] === "cat_orange" && solves.L173[0][1] === "s") {
    throw new Error("L173 Velvet Latch must not open orange-south (Punch clone)");
  }
  if (solves.L174[0][0] === "cat_orange" && solves.L174[0][1] === "e") {
    throw new Error("L174 Dish Claim must not open orange-east (Sip clone)");
  }
  for (const level of [l172, l173, l174]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
    if (level.width !== 6 || level.height !== 6) throw new Error(`${level.id} must be 6×6`);
    if (!level.templateId.startsWith("LT02_LT08_")) throw new Error(`${level.id} must be LT02+LT08`);
  }
  const wallKeyG = (level: typeof l172) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsG = ["L169", "L170", "L171", "L166", "L167", "L168", "L163", "L164", "L165", "L160", "L161", "L162", "L157", "L158", "L159", "L154", "L155", "L156", "L151", "L152", "L153", "L148", "L149", "L150", "L145", "L146", "L147", "L142", "L143", "L144", "L139", "L140", "L141"].map((id) => wallKeyG(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L172", "L173", "L174"] as const) {
    const key = wallKeyG(LEVELS.find((r) => r.id === id)!);
    if (priorWallsG.includes(key)) throw new Error(`${id} wall twin of L139–L171`);
  }
  if (ART_KIT_PATH.gardenia.loaf48 !== "/assets/cats/gardenia_loaf_48.svg") throw new Error("ART_KIT_PATH.gardenia loaf48");
  if (ART_KIT_PATH.gardenia.loaf72 !== "/assets/cats/gardenia_loaf_72.svg") throw new Error("ART_KIT_PATH.gardenia loaf72");
  if (ART_KIT_PATH.hibiscus.loaf48 !== "/assets/cats/hibiscus_loaf_48.svg") throw new Error("Hibiscus kit must stay");
  if (ART_KIT_PATH.magnolia.loaf48 !== "/assets/cats/magnolia_loaf_48.svg") throw new Error("Magnolia kit must stay");
  const saveG = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveG.includes("gardenia dish")) throw new Error("SaveProvider must yard-bubble gardenia dish for Gardenia");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_057.md"))) throw new Error("missing CH4_FRIEND_057.md");
  if (!existsSync(resolve("data/collection/chapter4_gardenia_bang.json"))) throw new Error("missing collection gardenia bang");
  if (!existsSync(resolve("data/chapter4_gardenia_bang.json"))) throw new Error("missing chapter4_gardenia_bang.json");
  const nameModalG = readFileSync(resolve("src/components/puzzle/NameCatModal.tsx"), "utf8");
  if (!nameModalG.includes("GARDENIA_FRIEND_ID")) throw new Error("NameCatModal must lockChips Gardenia");
  if (!nameModalG.includes("HIBISCUS_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Hibiscus");
  const shellG = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shellG.includes("Full-viewport") && !shellG.includes("full-viewport") && !shellG.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shellG)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Gardenia@171 + L172–L174 ok · chips Gardenia/Snow/Velvet · coat #F6F1E8 + leaf freckles #4F6B4A · Snow Drift / Velvet Latch / Dish Claim · Hibiscus/Magnolia/Jasmine/Bergamot/Chamomile/Lavender/Catnip/Mint/Ivory/Rosemary/Thyme/Marjoram/Oregano/Tarragon/Dill/Parsley/Lovage/Chervil/Fennel/Sorrel/Nettle/Ivy/Briar/Thistle/Plum/Fig/Basil/Clay/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}
