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
  [213, "friend_071", "Crocus@213 must stay"],
  [210, "friend_070", "Lily@210 must stay"],
  [207, "friend_069", "Violet@207 must stay"],
  [204, "friend_068", "Tulip@204 must stay"],
  [201, "friend_067", "Poppy@201 must stay"],
  [198, "friend_066", "Lotus@198 must stay"],
  [195, "friend_065", "Orchid@195 must stay"],
  [192, "friend_064", "Iris@192 must stay"],
  [189, "friend_063", "Aster@189 must stay"],
  [186, "friend_062", "Zinnia@186 must stay"],
  [183, "friend_061", "Dahlia@183 must stay"],
  [180, "friend_060", "Azalea@180 must stay"],
  [177, "friend_059", "Peony@177 must stay"],
  [174, "friend_058", "Camellia@174 must stay"],
  [171, "friend_057", "Gardenia@171 must stay"],
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
  ["friend_071", "Crocus,Saffron,Tip", "Crocus chips untouched"],
  ["friend_070", "Lily,Pollen,Crest", "Lily chips untouched"],
  ["friend_069", "Violet,Patch,Moss", "Violet chips untouched"],
  ["friend_068", "Tulip,Stem,Glow", "Tulip chips untouched"],
  ["friend_067", "Poppy,Capsule,Silk", "Poppy chips untouched"],
  ["friend_066", "Lotus,Pad,Ripple", "Lotus chips untouched"],
  ["friend_065", "Orchid,Spur,Veil", "Orchid chips untouched"],
  ["friend_064", "Iris,Blade,Dew", "Iris chips untouched"],
  ["friend_063", "Aster,Petal,Drift", "Aster chips untouched"],
  ["friend_062", "Zinnia,Quill,Gleam", "Zinnia chips untouched"],
  ["friend_061", "Dahlia,Spire,Ember", "Dahlia chips untouched"],
  ["friend_060", "Azalea,Fizz,Flare", "Azalea chips untouched"],
  ["friend_059", "Peony,Bud,Satin", "Peony chips untouched"],
  ["friend_058", "Camellia,Wax,Rose", "Camellia chips untouched"],
  ["friend_057", "Gardenia,Snow,Velvet", "Gardenia chips untouched"],
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
  "2,3/3,5", "2,3/5,3", "0,0/1,1",
  "2,5/3,4", "2,1/2,5", "1,0/4,1",
  "4,1/5,5", "2,2/5,3", "0,4/4,3",
  "2,0/3,4", "0,3/1,4", "3,5/4,4",
  "2,0/2,1", "2,5/4,4", "2,4/3,1",
  "3,1/4,4", "1,1/4,5", "1,4/5,0",
  "0,0/1,4", "1,1/3,0", "2,1/3,0",
  "1,2/4,0", "1,1/5,3", "1,0/4,2",
  "0,5/4,1", "2,0/3,1", "3,4/4,1",
  "2,4/4,3", "2,4/3,0", "0,4/2,3",
  "3,5/5,3", "0,0/4,4", "1,2/2,5",
  "4,1/5,2", "4,4/5,2", "3,5/4,1",
  "0,0/1,2", "3,0/4,1", "0,5/1,4",
  "2,3/5,0", "1,4/4,1", "0,2/3,1",
  "1,4/3,0", "4,2/5,1", "1,1/2,0",
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

export function verifyChapter4Hyacinth(solves: Record<string, Array<[string, Dir]>>) {
  for (const [id, name] of [
    ["L217", "Cluster Cut"],
    ["L218", "Bell Gap"],
    ["L219", "Raceme Stop"],
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
    if (/hyacinth (cut|gap|stop)/i.test(level.name)) {
      throw new Error(`${id} must not be Hyacinth Cut/Gap/Stop`);
    }
    if (/saffron cut|tip gap|stigma stop|crocus (cut|gap|stop)|pollen cut|crest gap|anther stop|lily (cut|gap|stop)|capsule cut|silk gap|cup stop|pad cut|ripple gap|pond stop|lotus (cut|gap|stop)|spur cut|veil gap|spike stop|orchid (cut|gap|stop)|blade cut|dew gap|stem stop|iris (cut|gap|stop)|petal cut|drift gap|dish stop|aster (cut|gap|stop)|quill cut|gleam gap|urn stop|zinnia (cut|gap|stop)|spire cut|ember gap|vase stop|dahlia (cut|gap|stop)|fizz cut|flare gap|planter stop|azalea (cut|gap|stop)|bud cut|satin gap|bowl stop|wax cut|rose gap|tray stop|snow drift|velvet latch|dish claim|gardenia (cut|gap|stop)|roselle cut|punch gap|sip stop|hibiscus (cut|gap|stop)|cream cut|blush gap|magnolia (cut|gap|stop)|blossom cut|honey gap|jasmine (cut|gap|stop)|citrus cut|earl gap|saucer stop|bergamot (cut|gap|stop)|daisy cut|tea gap|chamomile (cut|gap|stop)|bloom cut|calm gap|bundle stop|nip cut|dream gap|pouch stop|chill cut|frost gap|tin stop|lavender (cut|gap|stop)|catnip (cut|gap|stop)|mint (cut|gap|stop)|needle cut|woody gap|pot stop|rosemary (cut|gap|stop)|pinch cut|twig gap|jar stop|thyme (cut|gap|stop)|marjoram (cut|gap|stop)|softleaf cut|dusty gap|peel stop|oregano (cut|gap|stop)|stone cut|wild gap|pizza stop|tarragon (cut|gap|stop)|spear cut|bitters gap|cruet stop|dill (cut|gap|stop)|seed cut|frondlet gap|ledge stop|parsley (cut|gap|stop)|curl cut|sprig gap|garnish stop|peony (cut|gap|stop)|camellia (cut|gap|stop)|poppy (cut|gap|stop)|tulip (cut|gap|stop)|stem cut|glow gap|bloom stop|patch cut|moss gap|thicket stop|violet (cut|gap|stop)/i.test(level.name)) {
      throw new Error(`${id} must not reuse prior triad names`);
    }
    const pair = level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
    if (BANNED_PAIRS.has(pair)) throw new Error(`${id} must not twin a prior gate pair (${pair})`);
    const unique = uniqueShortestCount(level);
    if (unique.count !== 1) throw new Error(`${id} must have a unique shortest (${unique.count} paths of ${unique.min})`);
    if (unique.min < 10 || unique.min > 11) throw new Error(`${id} shortest must be 10–11, got ${unique.min}`);
    if (level.moveBudget < unique.min) throw new Error(`${id} budget ${level.moveBudget} < shortest ${unique.min}`);
  }
  if (LEVELS.find((row) => row.id === "L214")?.name !== "Saffron Cut") throw new Error("L214 Saffron Cut locked");
  if (LEVELS.find((row) => row.id === "L215")?.name !== "Tip Gap") throw new Error("L215 Tip Gap locked");
  if (LEVELS.find((row) => row.id === "L216")?.name !== "Stigma Stop") throw new Error("L216 Stigma Stop locked");
  if (LEVELS.find((row) => row.id === "L211")?.name !== "Pollen Cut") throw new Error("L211 Pollen Cut locked");
  if (LEVELS.find((row) => row.id === "L212")?.name !== "Crest Gap") throw new Error("L212 Crest Gap locked");
  if (LEVELS.find((row) => row.id === "L213")?.name !== "Anther Stop") throw new Error("L213 Anther Stop locked");
  if (LEVELS.find((row) => row.id === "L208")?.name !== "Patch Cut") throw new Error("L208 Patch Cut locked");
  if (LEVELS.find((row) => row.id === "L209")?.name !== "Moss Gap") throw new Error("L209 Moss Gap locked");
  if (LEVELS.find((row) => row.id === "L210")?.name !== "Thicket Stop") throw new Error("L210 Thicket Stop locked");
  if (LEVELS.find((row) => row.id === "L205")?.name !== "Stem Cut") throw new Error("L205 Stem Cut locked");
  if (LEVELS.find((row) => row.id === "L206")?.name !== "Glow Gap") throw new Error("L206 Glow Gap locked");
  if (LEVELS.find((row) => row.id === "L207")?.name !== "Bloom Stop") throw new Error("L207 Bloom Stop locked");
  if (LEVELS.find((row) => row.id === "L202")?.name !== "Capsule Cut") throw new Error("L202 Capsule Cut locked");
  if (LEVELS.find((row) => row.id === "L203")?.name !== "Silk Gap") throw new Error("L203 Silk Gap locked");
  if (LEVELS.find((row) => row.id === "L204")?.name !== "Cup Stop") throw new Error("L204 Cup Stop locked");
  if (LEVELS.find((row) => row.id === "L199")?.name !== "Pad Cut") throw new Error("L199 Pad Cut locked");
  if (LEVELS.find((row) => row.id === "L200")?.name !== "Ripple Gap") throw new Error("L200 Ripple Gap locked");
  if (LEVELS.find((row) => row.id === "L201")?.name !== "Pond Stop") throw new Error("L201 Pond Stop locked");
  if (LEVELS.find((row) => row.id === "L196")?.name !== "Spur Cut") throw new Error("L196 Spur Cut locked");
  if (LEVELS.find((row) => row.id === "L197")?.name !== "Veil Gap") throw new Error("L197 Veil Gap locked");
  if (LEVELS.find((row) => row.id === "L198")?.name !== "Spike Stop") throw new Error("L198 Spike Stop locked");
  if (LEVELS.find((row) => row.id === "L193")?.name !== "Blade Cut") throw new Error("L193 Blade Cut locked");
  if (LEVELS.find((row) => row.id === "L194")?.name !== "Dew Gap") throw new Error("L194 Dew Gap locked");
  if (LEVELS.find((row) => row.id === "L195")?.name !== "Stem Stop") throw new Error("L195 Stem Stop locked");
  if (LEVELS.find((row) => row.id === "L190")?.name !== "Petal Cut") throw new Error("L190 Petal Cut locked");
  if (LEVELS.find((row) => row.id === "L191")?.name !== "Drift Gap") throw new Error("L191 Drift Gap locked");
  if (LEVELS.find((row) => row.id === "L192")?.name !== "Dish Stop") throw new Error("L192 Dish Stop locked");
  if (LEVELS.find((row) => row.id === "L187")?.name !== "Quill Cut") throw new Error("L187 Quill Cut locked");
  if (LEVELS.find((row) => row.id === "L188")?.name !== "Gleam Gap") throw new Error("L188 Gleam Gap locked");
  if (LEVELS.find((row) => row.id === "L189")?.name !== "Urn Stop") throw new Error("L189 Urn Stop locked");
  if (LEVELS.find((row) => row.id === "L184")?.name !== "Spire Cut") throw new Error("L184 Spire Cut locked");
  if (LEVELS.find((row) => row.id === "L185")?.name !== "Ember Gap") throw new Error("L185 Ember Gap locked");
  if (LEVELS.find((row) => row.id === "L186")?.name !== "Vase Stop") throw new Error("L186 Vase Stop locked");
  if (LEVELS.find((row) => row.id === "L181")?.name !== "Fizz Cut") throw new Error("L181 Fizz Cut locked");
  if (LEVELS.find((row) => row.id === "L182")?.name !== "Flare Gap") throw new Error("L182 Flare Gap locked");
  if (LEVELS.find((row) => row.id === "L183")?.name !== "Planter Stop") throw new Error("L183 Planter Stop locked");
  if (LEVELS.find((row) => row.id === "L178")?.name !== "Bud Cut") throw new Error("L178 Bud Cut locked");
  if (LEVELS.find((row) => row.id === "L179")?.name !== "Satin Gap") throw new Error("L179 Satin Gap locked");
  if (LEVELS.find((row) => row.id === "L180")?.name !== "Bowl Stop") throw new Error("L180 Bowl Stop locked");
  if (LEVELS.find((row) => row.id === "L175")?.name !== "Wax Cut") throw new Error("L175 Wax Cut locked");
  if (LEVELS.find((row) => row.id === "L176")?.name !== "Rose Gap") throw new Error("L176 Rose Gap locked");
  if (LEVELS.find((row) => row.id === "L177")?.name !== "Tray Stop") throw new Error("L177 Tray Stop locked");
  if (LEVELS.find((row) => row.id === "L174")?.name !== "Dish Claim") throw new Error("L174 Dish Claim locked");
  if (LEVELS.find((row) => row.id === "L172")?.name !== "Snow Drift") throw new Error("L172 Snow Drift locked");
  if (LEVELS.find((row) => row.id === "L171")?.name !== "Sip Stop") throw new Error("L171 Sip Stop locked");
  if (LEVELS.find((row) => row.id === "L168")?.name !== "Bowl Stop") throw new Error("L168 Bowl Stop locked");
  if (LEVELS.find((row) => row.id === "L165")?.name !== "Bloom Stop") throw new Error("L165 Bloom Stop locked");
  if (LEVELS.find((row) => row.id === "L162")?.name !== "Saucer Stop") throw new Error("L162 Saucer Stop locked");
  if (SLICE_UNLOCKS[216] !== "friend_072") throw new Error("SLICE_UNLOCKS[216] must be friend_072");
  if (shippedFriendForClear(216)?.friendId !== "friend_072") throw new Error("onClear(216) must award Hyacinth");
  const hyacinth = friendById("friend_072");
  if (!hyacinth) throw new Error("friend_072 missing from CATALOG");
  if (hyacinth.defaultName !== "Hyacinth") throw new Error("default name must be Hyacinth");
  if (hyacinth.unlockClear !== 216) throw new Error("Hyacinth unlockClear must be 216");
  if (hyacinth.phenotype.artKit !== "hyacinth") throw new Error("Hyacinth artKit must be hyacinth");
  if (hyacinth.phenotype.personality !== "Hyacinth-soft") throw new Error("Hyacinth personality must be Hyacinth-soft");
  if (hyacinth.phenotype.boardColor !== "orange") throw new Error("Hyacinth boardColor must be orange");
  if (hyacinth.phenotype.color !== "Cluster") throw new Error("Hyacinth color must be Cluster");
  if (hyacinth.phenotype.pattern !== "Freckled") throw new Error("Hyacinth pattern must be Freckled");
  if (chipsForFriend("friend_072").join(",") !== "Hyacinth,Cluster,Bell") {
    throw new Error(`Hyacinth chips must be Hyacinth/Cluster/Bell, got ${chipsForFriend("friend_072").join(",")}`);
  }
  if (chipsForFriend("friend_072").some((c) => /crocus|^saffron$|^tip$|lily|^pollen$|^crest$|violet|^patch$|^moss$|tulip|^stem$|^glow$|poppy|^capsule$|^silk$|lotus|^pad$|^ripple$|orchid|^spur$|^veil$|iris|^blade$|^dew$|aster|^petal$|^drift$|zinnia|^quill$|^gleam$|dahlia|^spire$|^ember$|azalea|^fizz$|^flare$|peony|^bud$|^satin$|camellia|^wax$|^rose$|gardenia|^snow$|^velvet$|hibiscus|^roselle$|^punch$|magnolia|^cream$|^blush$|jasmine|^blossom$|^honey$|bergamot|^citrus$|^earl$|chamomile|^daisy$|^tea$|lavender|^bloom$|^calm$|catnip|^nip$|^dream$|mint|chill|^frost$|^ivory$|^lace$|^sheer$|rosemary|needle|^woody$|thyme|pinch|^twig$|marjoram|softleaf|^peel$|oregano|wild|^bunch$|tarragon|spear|bitters|dill|frondlet|^seed$|parsley|curl|sprig|lovage|^rib$|chervil|frill|lace|fennel|^frond$|anise|pebble|^sage$|^fern$|^clover$|^juniper$/i.test(c))) {
    throw new Error("Hyacinth chips must ban Crocus/Saffron/Tip/Lily/Pollen/Crest/Violet/Patch/Moss/Tulip/Stem/Glow/Poppy/Capsule/Silk/Lotus/Pad/Ripple/Orchid/Spur/Veil/Iris/Blade/Dew/Aster/Petal/Drift/Zinnia/Quill/Gleam/Dahlia/Spire/Ember/Azalea/Fizz/Flare/Peony/Bud/Satin/Camellia/Wax/Rose/Gardenia/Snow/Velvet/Hibiscus/Roselle/Punch/Magnolia/Cream/Blush/Jasmine/Blossom/Honey and all prior pools/Pebble/Sage");
  }
  const hyacinth48 = readFileSync(resolve("public/assets/cats/hyacinth_loaf_48.svg"), "utf8");
  const hyacinth72 = readFileSync(resolve("public/assets/cats/hyacinth_loaf_72.svg"), "utf8");
  if (!hyacinth48.includes("#5A6EC8") || !hyacinth72.includes("#5A6EC8")) throw new Error("Hyacinth loaf must use cluster-hyacinth coat #5A6EC8");
  if (!hyacinth48.includes("#1E2448") || !hyacinth72.includes("#1E2448")) throw new Error("Hyacinth loaf must use bloom freckles #1E2448");
  if (!hyacinth48.includes("#C8D2F0") || !hyacinth72.includes("#C8D2F0")) throw new Error("Hyacinth loaf must use belly #C8D2F0");
  for (const hex of ["#C45A9A", "#2A1830", "#F4C2DC", "#9A3A78", "#FFF0F8", "#F5F0E6", "#C8A84A", "#FFF8EC", "#C4B06A", "#FEF6DC", "#6B4AA0", "#1E2A18", "#D2C4EA", "#4A3078", "#F8F4FF", "#E07090", "#2A4020", "#F8C4D2", "#C44868", "#D94A5A", "#3A1218", "#F4B4B8", "#B02A3A", "#F2B8C8", "#4A2840", "#FAD6E0", "#D4899A", "#FFF5F8", "#C989B8", "#3A2038", "#EAC8DC", "#A86A96", "#FFE6F4", "#5B4F9A", "#1C1630", "#B6A8DE", "#3D3474", "#E4DCFF", "#7B6BB5", "#2A2040", "#C8B8EE", "#5A4A92", "#EDE6FF", "#E85A2A", "#3A1808", "#F4A06A", "#B33A14", "#8B2E4A", "#2A1018", "#C86A80", "#5C1832", "#B84A8C", "#3F1830", "#E8A0C4", "#7A2458", "#E8B4C8", "#5A3048", "#F7DCE6", "#C4789A", "#C45A6A", "#5A2030", "#F3C8CC", "#8E3848", "#F6F1E8", "#4F6B4A", "#FFFBF3", "#C5C0B2", "#D46A8A", "#5A1F3A", "#C24A6E", "#EBB0C2", "#F7E8D2", "#C48A7A", "#FFF4E4", "#E8B8A4", "#F2D4C4", "#6E3A42", "#F4EFE6", "#7A6B4E", "#FBF7EE", "#F0C98A", "#9A5A1A", "#FFF1C4", "#E8D5A3", "#8A6B2E", "#F7E8C4", "#C4A66A", "#B8A0C8", "#5A3F6E", "#EDE4F4", "#8A6AA8", "#8FBF9A", "#2F5C3A", "#DCEFE2", "#7EC8A3", "#2F6B52", "#D4F4E8", "#7A9B88", "#2F463C", "#C8D6CE", "#A3B57C", "#4E5C36", "#D2D8B0", "#8FA86A", "#3F5230", "#D8D4A8", "#7A9A4E", "#4A5C2E", "#6B8F4E", "#2F4A28", "#C4D6A4", "#8FBF7A", "#4A6B3E", "#6FA86A", "#3F6B3C", "#9CB87A", "#5E7348", "#C6D9B4", "#5E7F52", "#E6C86E", "#7A9B6A", "#6A7D6E", "#1A2C24", "#7E8F86", "#C8D24A", "#EBE3C4", "#C9C09A", "#F3EBD0"]) {
    if (hyacinth48.includes(hex) || hyacinth72.includes(hex)) throw new Error(`Hyacinth loaf must not use prior herb coat ${hex}`);
  }
  if (furnitureGiftsForClear(216).length) throw new Error("Hyacinth@216 must gift no furniture");
  const yardH = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardH.match(/const hyacinth =/g) || []).length !== 1) throw new Error("YardScene must declare hyacinth once");
  if ((yardH.match(/\{hyacinth \?/g) || []).length !== 1) throw new Error("YardScene must render hyacinth once");
  if ((yardH.match(/const crocus =/g) || []).length !== 1) throw new Error("YardScene must keep crocus once");
  if ((yardH.match(/const lily =/g) || []).length !== 1) throw new Error("YardScene must keep lily once");
  if ((yardH.match(/const violet =/g) || []).length !== 1) throw new Error("YardScene must keep violet once");
  if ((yardH.match(/const tulip =/g) || []).length !== 1) throw new Error("YardScene must keep tulip once");
  if ((yardH.match(/const poppy =/g) || []).length !== 1) throw new Error("YardScene must keep poppy once");
  if ((yardH.match(/const lotus =/g) || []).length !== 1) throw new Error("YardScene must keep lotus once");
  if ((yardH.match(/const orchid =/g) || []).length !== 1) throw new Error("YardScene must keep orchid once");
  if ((yardH.match(/const iris =/g) || []).length !== 1) throw new Error("YardScene must keep iris once");
  if (TUTORIAL_RESCUES.length !== 82) throw new Error("Met must include through Snapdragon (75)");
  for (const [clear, friendId, message] of PRIOR_UNLOCKS) {
    if (shippedFriendForClear(clear)?.friendId !== friendId) throw new Error(message);
  }
  for (const [friendId, chips, message] of PRIOR_CHIPS) {
    if (chipsForFriend(friendId).join(",") !== chips) throw new Error(message);
  }
  if (SLICE_UNLOCKS[216] !== "friend_072") throw new Error("SLICE_UNLOCKS[216] must be friend_072");
  if (SLICE_UNLOCKS[219] !== "friend_073") throw new Error("SLICE_UNLOCKS[219] must be friend_073 after Foxglove ship");
  if (/pebble|Pebble/i.test(hyacinth48 + hyacinth72)) throw new Error("Hyacinth art must not use Pebble");
  if (/crocus|saffron|stigma|lily|pollen|crest|anther|violet|patch|moss|thicket|tulip|stem|glow|poppy|capsule|silk|lotus|pad|ripple|orchid|spur|veil|iris|blade|dew|aster|petal|drift|zinnia|quill|gleam|dahlia|spire|ember|azalea|fizz|flare|peony|camellia|wax|gardenia|hibiscus|roselle|punch|magnolia|cream|blush|jasmine|blossom|honey|bergamot|citrus|earl|chamomile|daisy|tea|lavender|bloom|calm|catnip|mint|chill|frost|ivory|sheer|rosemary|needle|woody|thyme|pinch|twig|marjoram|softleaf|peel|oregano|wild|bunch|tarragon|spear|bitters|dill|parsley|curl|sprig|lovage|rib|chervil|frill|lace|fennel|anise/i.test(hyacinth48 + hyacinth72)) {
    throw new Error("Hyacinth art must not collide Crocus/Lily/Violet/Tulip/Poppy/Lotus/Orchid/Iris/Aster/Zinnia/Dahlia/Azalea/Peony/Camellia/Gardenia/Hibiscus/Magnolia/Jasmine/Bergamot/Chamomile/Lavender/Catnip/Mint/Ivory/Rosemary/Thyme/Marjoram/Oregano/Tarragon/Dill/Parsley/Lovage/Chervil/Fennel marks");
  }
  const l217 = LEVELS.find((r) => r.id === "L217")!;
  const l218 = LEVELS.find((r) => r.id === "L218")!;
  const l219 = LEVELS.find((r) => r.id === "L219")!;
  if (/\b(crocus|saffron|tip|stigma|lily|pollen|crest|anther|violet|patch|moss|thicket|tulip|stem|glow|bloom|pad|ripple|pond|lotus|spur|veil|spike|orchid|blade|dew|iris|petal|drift|dish|aster|quill|gleam|urn|zinnia|spire|ember|vase|dahlia|fizz|flare|planter|azalea|wax|rose|tray|snow|velvet|latch|claim|roselle|punch|sip|hibiscus|cream|blush|magnolia|blossom|honey|citrus|earl|saucer|daisy|tea|cup|capsule|silk|calm|bundle|nip|dream|pouch|chill|frost|tin|needle|woody|pot|pinch|twig|jar|softleaf|dusty|peel|stone|wild|pizza|spear|bitters|cruet|seed|frondlet|ledge|garnish|bed|gardenia|camellia|peony|bud|satin|bowl|poppy)\b/i.test([l217.name, l218.name].join(","))) {
    throw new Error("L217–L218 must not reuse Saffron/Tip/Stigma/Pollen/Crest/Anther/Patch/Moss/Thicket/Stem/Glow/Bloom/Capsule/Silk/Cup/Pad/Ripple/Pond/Lotus/Spur/Veil/Spike/Orchid/Blade/Dew/Iris/Petal/Drift/Dish/Aster/Quill/Gleam/Urn/Zinnia/Spire/Ember/Vase/Dahlia/Fizz/Flare/Planter/Azalea/Wax/Rose/Tray/Snow/Velvet/Roselle/Punch/Sip/Cream/Blush/Saucer/Peony/Bud/Satin/Bowl and prior triad names");
  }
  const hyacinthGatePair = (level: typeof l217) => level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
  if (hyacinthGatePair(l217) !== "4,0/5,4") throw new Error(`L217 gates must be delta (-1, -4) pair, got ${hyacinthGatePair(l217)}`);
  if (hyacinthGatePair(l218) !== "1,2/3,1") throw new Error(`L218 gates must be delta (2, -1) pair, got ${hyacinthGatePair(l218)}`);
  if (hyacinthGatePair(l219) !== "4,3/5,0") throw new Error(`L219 gates must be delta (-1, 3) pair, got ${hyacinthGatePair(l219)}`);
  const occ219 = [...l219.cats, ...l219.gates].map((p) => `${p.x},${p.y}`).sort().join(";");
  const priorOcc = new Set([
    "1,2;2,0;2,5;5,3",
    "0,5;2,4;4,3;4,5",
    "0,4;2,2;2,3;5,4",
    "1,3;2,4;3,1;3,3",
    "0,5;1,4;5,0;5,1",
    "0,3;3,4;4,0;4,1",
    "0,1;1,0;1,1;4,2",
    "2,1;3,0;5,1;5,2",
    "0,5;1,4;3,2;5,0",
    "1,5;3,5;4,4;4,5",
    "1,5;2,0;3,5;4,1",
    "0,5;1,4;2,1;3,2",
    "0,2;2,2;2,4;3,1",
    "0,4;1,1;2,0;3,5",
  ]);
  if (priorOcc.has(occ219)) throw new Error("L219 Raceme must not twin Cup/Pad/Pond/Vase/Bloom/Thicket/Anther/Stigma occupancy");
  if (occ219.split(";").includes("5,5")) throw new Error("L219 Raceme must be off Nori seat (5,5)");
  if (l219.gates[0].y === l219.gates[1].y) throw new Error("L219 Raceme must not same-row Nest");
  if (l219.gates[0].x === l219.gates[1].x) throw new Error("L219 Raceme must not column Porch");
  if (l217.cats[0].x === l217.cats[1].x) throw new Error("L217 Cluster must not stacked-column Vine");
  if (solves.L217[0][0] === "cat_black" && solves.L217[0][1] === "w") {
    throw new Error("L217 Cluster Cut must not open black-west (Pollen Cut clone)");
  }
  if (solves.L217[0][0] === "cat_gray" && solves.L217[0][1] === "w") {
    throw new Error("L217 Cluster Cut must not open gray-west (Pad Cut clone)");
  }
  if (solves.L217[0][0] === "cat_orange" && solves.L217[0][1] === "e") {
    throw new Error("L217 Cluster Cut must not open orange-east (Spur Cut clone)");
  }
  if (solves.L217[0][0] === "cat_gray" && solves.L217[0][1] === "n") {
    throw new Error("L217 Cluster Cut must not open gray-north (Blade Cut clone)");
  }
  if (solves.L217[0][0] === "cat_gray" && solves.L217[0][1] === "e") {
    throw new Error("L217 Cluster Cut must not open gray-east (Petal Cut clone)");
  }
  if (solves.L217[0][0] === "cat_orange" && solves.L217[0][1] === "n") {
    throw new Error("L217 Cluster Cut must not open orange-north (Quill Cut clone)");
  }
  if (solves.L217[0][0] === "cat_gray" && solves.L217[0][1] === "s") {
    throw new Error("L217 Cluster Cut must not open gray-south (Fizz Cut clone)");
  }
  if (solves.L217[0][0] === "cat_orange" && solves.L217[0][1] === "s") {
    throw new Error("L217 Cluster Cut must not open orange-south (Vase Stop clone)");
  }
  if (solves.L217[0][0] === "cat_black" && solves.L217[0][1] === "s") {
    throw new Error("L217 Cluster Cut must not open black-south (Stem Cut clone)");
  }
  if (solves.L217[0][0] === "cat_black" && solves.L217[0][1] === "e") {
    throw new Error("L217 Cluster Cut must not open black-east (Patch Cut clone)");
  }
  if (solves.L217[0][0] === "cat_orange" && solves.L217[0][1] === "w") {
    throw new Error("L217 Cluster Cut must not open orange-west (Saffron Cut clone)");
  }
  if (solves.L218[0][0] === "cat_gray" && solves.L218[0][1] === "w") {
    throw new Error("L218 Bell Gap must not open gray-west (Crest Gap clone)");
  }
  if (solves.L218[0][0] === "cat_black" && solves.L218[0][1] === "e") {
    throw new Error("L218 Bell Gap must not open black-east (Ripple Gap clone)");
  }
  if (solves.L218[0][0] === "cat_orange" && solves.L218[0][1] === "s") {
    throw new Error("L218 Bell Gap must not open orange-south (Veil Gap clone)");
  }
  if (solves.L218[0][0] === "cat_orange" && solves.L218[0][1] === "n") {
    throw new Error("L218 Bell Gap must not open orange-north (Dew Gap clone)");
  }
  if (solves.L218[0][0] === "cat_black" && solves.L218[0][1] === "w") {
    throw new Error("L218 Bell Gap must not open black-west (Gleam Gap clone)");
  }
  if (solves.L218[0][0] === "cat_black" && solves.L218[0][1] === "s") {
    throw new Error("L218 Bell Gap must not open black-south (Ember Gap clone)");
  }
  if (solves.L218[0][0] === "cat_orange" && solves.L218[0][1] === "w") {
    throw new Error("L218 Bell Gap must not open orange-west (Flare Gap clone)");
  }
  if (solves.L218[0][0] === "cat_gray" && solves.L218[0][1] === "e") {
    throw new Error("L218 Bell Gap must not open gray-east (Glow Gap clone)");
  }
  if (solves.L218[0][0] === "cat_gray" && solves.L218[0][1] === "n") {
    throw new Error("L218 Bell Gap must not open gray-north (Moss Gap clone)");
  }
  if (solves.L218[0][0] === "cat_orange" && solves.L218[0][1] === "e") {
    throw new Error("L218 Bell Gap must not open orange-east (Tip Gap clone)");
  }
  if (solves.L219[0][0] === "cat_black" && solves.L219[0][1] === "w") {
    throw new Error("L219 Raceme Stop must not open black-west (Anther Stop clone)");
  }
  if (solves.L219[0][0] === "cat_orange" && solves.L219[0][1] === "w") {
    throw new Error("L219 Raceme Stop must not open orange-west (Spike Stop clone)");
  }
  if (solves.L219[0][0] === "cat_gray" && solves.L219[0][1] === "n") {
    throw new Error("L219 Raceme Stop must not open gray-north (Dish Stop clone)");
  }
  if (solves.L219[0][0] === "cat_gray" && solves.L219[0][1] === "w") {
    throw new Error("L219 Raceme Stop must not open gray-west (Urn Stop clone)");
  }
  if (solves.L219[0][0] === "cat_orange" && solves.L219[0][1] === "n") {
    throw new Error("L219 Raceme Stop must not open orange-north (Planter Stop clone)");
  }
  if (solves.L219[0][0] === "cat_orange" && solves.L219[0][1] === "s") {
    throw new Error("L219 Raceme Stop must not open orange-south (Vase Stop clone)");
  }
  if (solves.L219[0][0] === "cat_gray" && solves.L219[0][1] === "s") {
    throw new Error("L219 Raceme Stop must not open gray-south (Dish Claim clone)");
  }
  if (solves.L219[0][0] === "cat_gray" && solves.L219[0][1] === "e") {
    throw new Error("L219 Raceme Stop must not open gray-east (Petal Cut clone)");
  }
  if (solves.L219[0][0] === "cat_black" && solves.L219[0][1] === "n") {
    throw new Error("L219 Raceme Stop must not open black-north (Bloom Stop clone)");
  }
  if (solves.L219[0][0] === "cat_black" && solves.L219[0][1] === "s") {
    throw new Error("L219 Raceme Stop must not open black-south (Thicket Stop clone)");
  }
  if (solves.L219[0][0] === "cat_orange" && solves.L219[0][1] === "e") {
    throw new Error("L219 Raceme Stop must not open orange-east (Stigma Stop clone)");
  }
  for (const level of [l217, l218, l219]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
    if (level.width !== 6 || level.height !== 6) throw new Error(`${level.id} must be 6×6`);
    if (!level.templateId.startsWith("LT02_LT08_")) throw new Error(`${level.id} must be LT02+LT08`);
  }
  const wallKeyO = (level: typeof l217) =>
    [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsO = ["L214", "L215", "L216", "L211", "L212", "L213", "L208", "L209", "L210", "L205", "L206", "L207", "L202", "L203", "L204", "L199", "L200", "L201", "L196", "L197", "L198", "L193", "L194", "L195", "L190", "L191", "L192", "L187", "L188", "L189", "L184", "L185", "L186", "L181", "L182", "L183", "L178", "L179", "L180", "L175", "L176", "L177", "L172", "L173", "L174", "L169", "L170", "L171", "L166", "L167", "L168", "L163", "L164", "L165", "L160", "L161", "L162", "L157", "L158", "L159", "L154", "L155", "L156", "L151", "L152", "L153", "L148", "L149", "L150", "L145", "L146", "L147", "L142", "L143", "L144", "L139", "L140", "L141"].map((id) => wallKeyO(LEVELS.find((r) => r.id === id)!));
  for (const id of ["L217", "L218", "L219"] as const) {
    const key = wallKeyO(LEVELS.find((r) => r.id === id)!);
    if (priorWallsO.includes(key)) throw new Error(`${id} wall twin of L139–L216`);
  }
  if (ART_KIT_PATH.hyacinth.loaf48 !== "/assets/cats/hyacinth_loaf_48.svg") throw new Error("ART_KIT_PATH.hyacinth loaf48");
  if (ART_KIT_PATH.hyacinth.loaf72 !== "/assets/cats/hyacinth_loaf_72.svg") throw new Error("ART_KIT_PATH.hyacinth loaf72");
  if (ART_KIT_PATH.crocus.loaf48 !== "/assets/cats/crocus_loaf_48.svg") throw new Error("Crocus kit must stay");
  if (ART_KIT_PATH.lily.loaf48 !== "/assets/cats/lily_loaf_48.svg") throw new Error("Lily kit must stay");
  if (ART_KIT_PATH.violet.loaf48 !== "/assets/cats/violet_loaf_48.svg") throw new Error("Violet kit must stay");
  if (ART_KIT_PATH.tulip.loaf48 !== "/assets/cats/tulip_loaf_48.svg") throw new Error("Tulip kit must stay");
  if (ART_KIT_PATH.poppy.loaf48 !== "/assets/cats/poppy_loaf_48.svg") throw new Error("Poppy kit must stay");
  if (ART_KIT_PATH.lotus.loaf48 !== "/assets/cats/lotus_loaf_48.svg") throw new Error("Lotus kit must stay");
  if (ART_KIT_PATH.orchid.loaf48 !== "/assets/cats/orchid_loaf_48.svg") throw new Error("Orchid kit must stay");
  if (ART_KIT_PATH.iris.loaf48 !== "/assets/cats/iris_loaf_48.svg") throw new Error("Iris kit must stay");
  if (ART_KIT_PATH.aster.loaf48 !== "/assets/cats/aster_loaf_48.svg") throw new Error("Aster kit must stay");
  if (ART_KIT_PATH.zinnia.loaf48 !== "/assets/cats/zinnia_loaf_48.svg") throw new Error("Zinnia kit must stay");
  if (ART_KIT_PATH.dahlia.loaf48 !== "/assets/cats/dahlia_loaf_48.svg") throw new Error("Dahlia kit must stay");
  if (ART_KIT_PATH.azalea.loaf48 !== "/assets/cats/azalea_loaf_48.svg") throw new Error("Azalea kit must stay");
  if (ART_KIT_PATH.peony.loaf48 !== "/assets/cats/peony_loaf_48.svg") throw new Error("Peony kit must stay");
  if (ART_KIT_PATH.camellia.loaf48 !== "/assets/cats/camellia_loaf_48.svg") throw new Error("Camellia kit must stay");
  if (ART_KIT_PATH.gardenia.loaf48 !== "/assets/cats/gardenia_loaf_48.svg") throw new Error("Gardenia kit must stay");
  if (ART_KIT_PATH.hibiscus.loaf48 !== "/assets/cats/hibiscus_loaf_48.svg") throw new Error("Hibiscus kit must stay");
  const saveH = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveH.includes("hyacinth spike")) throw new Error("SaveProvider must yard-bubble hyacinth spike for Hyacinth");
  if (!saveH.includes("crocus cup")) throw new Error("SaveProvider must keep crocus cup for Crocus");
  if (!saveH.includes("lily bowl")) throw new Error("SaveProvider must keep lily bowl for Lily");
  if (!saveH.includes("violet patch")) throw new Error("SaveProvider must keep violet patch for Violet");
  if (!saveH.includes("tulip vase")) throw new Error("SaveProvider must keep tulip vase for Tulip");
  if (!saveH.includes("poppy cup")) throw new Error("SaveProvider must keep poppy cup for Poppy");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_072.md"))) throw new Error("missing CH4_FRIEND_072.md");
  if (!existsSync(resolve("data/collection/chapter4_hyacinth_bang.json"))) throw new Error("missing collection hyacinth bang");
  if (!existsSync(resolve("data/chapter4_hyacinth_bang.json"))) throw new Error("missing chapter4_hyacinth_bang.json");
  const nameModalH = readFileSync(resolve("src/components/puzzle/NameCatModal.tsx"), "utf8");
  if (!nameModalH.includes("HYACINTH_FRIEND_ID")) throw new Error("NameCatModal must lockChips Hyacinth");
  if (!nameModalH.includes("CROCUS_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Crocus");
  if (!nameModalH.includes("LILY_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Lily");
  if (!nameModalH.includes("VIOLET_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Violet");
  if (!nameModalH.includes("TULIP_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Tulip");
  if (!nameModalH.includes("POPPY_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Poppy");
  if (!nameModalH.includes("LOTUS_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Lotus");
  if (!nameModalH.includes("ORCHID_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Orchid");
  if (!nameModalH.includes("IRIS_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Iris");
  const shellC = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shellC.includes("Full-viewport") && !shellC.includes("full-viewport") && !shellC.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shellC)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Hyacinth@216 + L217–L219 ok · chips Hyacinth/Cluster/Bell · coat #5A6EC8 + bloom freckles #1E2448 · Cluster Cut / Bell Gap / Raceme Stop · Crocus/Lily/Violet/Tulip/Poppy/Lotus/Orchid/Iris/Aster/Zinnia/Dahlia/Azalea/Peony/Camellia/Gardenia/Hibiscus/Magnolia/Jasmine/Bergamot/Chamomile/Lavender/Catnip/Mint/Ivory/Rosemary/Thyme/Marjoram/Oregano/Tarragon/Dill/Parsley/Lovage/Chervil/Fennel/Sorrel/Nettle/Ivy/Briar/Thistle/Plum/Fig/Basil/Clay/Juniper/Linen/Cocoa/Steve/Maple/Blue/Coral/Velvet/Bean locked");
}
