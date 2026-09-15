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
  [291, "friend_097", "Celosia@291 must stay"],
  [288, "friend_096", "Phlox@288 must stay"],
  [285, "friend_095", "Lantana@285 must stay"],
  [282, "friend_094", "Calendula@282 must stay"],
  [279, "friend_093", "Salvia@279 must stay"],
  [276, "friend_092", "Impatiens@276 must stay"],
  [273, "friend_091", "Verbena@273 must stay"],
  [270, "friend_090", "Pansy@270 must stay"],
  [267, "friend_089", "Petunia@267 must stay"],
  [264, "friend_088", "Nasturtium@264 must stay"],
  [261, "friend_087", "Geranium@261 must stay"],
  [258, "friend_086", "Freesia@258 must stay"],
  [255, "friend_085", "Ranunculus@255 must stay"],
  [252, "friend_084", "Begonia@252 must stay"],
  [249, "friend_083", "Anemone@249 must stay"],
  [246, "friend_082", "Wisteria@246 must stay"],
  [243, "friend_081", "Clematis@243 must stay"],
  [240, "friend_080", "Cosmos@240 must stay"],
  [237, "friend_079", "Buttercup@237 must stay"],
  [234, "friend_078", "Primrose@234 must stay"],
  [231, "friend_077", "Heather@231 must stay"],
  [228, "friend_076", "Marigold@228 must stay"],
  [225, "friend_075", "Snapdragon@225 must stay"],
  [222, "friend_074", "Bluebell@222 must stay"],
  [219, "friend_073", "Foxglove@219 must stay"],
  [216, "friend_072", "Hyacinth@216 must stay"],
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
  ["friend_097", "Celosia,Plume,Comb", "Celosia chips untouched"],
  ["friend_096", "Phlox,Floret,Bank", "Phlox chips untouched"],
  ["friend_095", "Lantana,Umbel,Mound", "Lantana chips untouched"],
  ["friend_094", "Calendula,Petal,Tin", "Calendula chips untouched"],
  ["friend_093", "Salvia,Sage,Torch", "Salvia chips untouched"],
  ["friend_092", "Impatiens,Busy,Box", "Impatiens chips untouched"],
  ["friend_091", "Verbena,Spike,Pot", "Verbena chips untouched"],
  ["friend_090", "Pansy,Face,Saucer", "Pansy chips untouched"],
  ["friend_089", "Petunia,Flare,Basket", "Petunia chips untouched"],
  ["friend_088", "Nasturtium,Pepper,Tray", "Nasturtium chips untouched"],
  ["friend_087", "Geranium,Cluster,Sill", "Geranium chips untouched"],
  ["friend_086", "Freesia,Trumpet,Vase", "Freesia chips untouched"],
  ["friend_085", "Ranunculus,Layer,Nest", "Ranunculus chips untouched"],
  ["friend_084", "Begonia,Ruffle,Planter", "Begonia chips untouched"],
  ["friend_083", "Anemone,Wind,Bowl", "Anemone chips untouched"],
  ["friend_082", "Wisteria,Cascade,Arbor", "Wisteria chips untouched"],
  ["friend_081", "Clematis,Vine,Trellis", "Clematis chips untouched"],
  ["friend_080", "Cosmos,Airy,Ray", "Cosmos chips untouched"],
  ["friend_079", "Buttercup,Meadow,Gloss", "Buttercup chips untouched"],
  ["friend_078", "Primrose,Pale,Dish", "Primrose chips untouched"],
  ["friend_077", "Heather,Moor,Sprig", "Heather chips untouched"],
  ["friend_076", "Marigold,Gold,Pot", "Marigold chips untouched"],
  ["friend_075", "Snapdragon,Jaw,Perch", "Snapdragon chips untouched"],
  ["friend_074", "Bluebell,Cloche,Ring", "Bluebell chips untouched"],
  ["friend_073", "Foxglove,Tower,Throat", "Foxglove chips untouched"],
  ["friend_072", "Hyacinth,Cluster,Bell", "Hyacinth chips untouched"],
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

function gatePair(level: Level) {
  return level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
}

export function verifyChapter4Cleome(solves: Record<string, Array<[string, Dir]>>) {
  const titles = LEVELS.map((row) => row.name);
  for (const title of ["Whisk Cut", "Pod Gap", "Spider Stop"] as const) {
    if (titles.filter((name) => name === title).length !== 1) {
      throw new Error(`${title} must be unique across campaign titles`);
    }
  }
  for (const prior of [
    "Plume Cut",
    "Comb Gap",
    "Flame Stop",
    "Floret Cut",
    "Bank Gap",
    "Spray Stop",
    "Umbel Cut",
    "Mound Gap",
    "Bunch Stop",
  ] as const) {
    if (titles.filter((name) => name === prior).length !== 1) {
      throw new Error(`${prior} must stay unique`);
    }
  }
  for (const banned of [
    "Plume Cut",
    "Comb Gap",
    "Flame Stop",
    "Floret Cut",
    "Bank Gap",
    "Spray Stop",
    "Umbel Cut",
    "Mound Gap",
    "Bunch Stop",
    "Disk Cut",
    "Tin Gap",
    "Disc Stop",
    "Sage Cut",
    "Torch Gap",
    "Bract Stop",
    "Busy Cut",
    "Box Gap",
    "Touch Stop",
    "Petal Cut",
    "Spike Cut",
    "Urn Gap",
    "Taper Stop",
  ] as const) {
    if (["L295", "L296", "L297"].some((id) => LEVELS.find((row) => row.id === id)?.name === banned)) {
      throw new Error(`Cleome triad must not reuse ${banned}`);
    }
  }
  const bannedPairs = new Set(
    LEVELS.filter((row) => !["L295", "L296", "L297"].includes(row.id)).map(gatePair),
  );
  for (const [id, name] of [
    ["L295", "Whisk Cut"],
    ["L296", "Pod Gap"],
    ["L297", "Spider Stop"],
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
    if (/plume cut|comb gap|flame stop|floret cut|bank gap|spray stop|umbel cut|mound gap|bunch stop|disk cut|tin gap|disc stop|sage cut|torch gap|bract stop|celosia (cut|gap|stop)|phlox (cut|gap|stop)|lantana (cut|gap|stop)|calendula (cut|gap|stop)|salvia (cut|gap|stop)|impatiens (cut|gap|stop)|busy cut|box gap|touch stop|verbena (cut|gap|stop)|spike cut|urn gap|taper stop|petal cut/i.test(level.name)) {
      throw new Error(`${id} must not be Plume/Comb/Flame/Floret/Bank/Spray and prior triad names`);
    }
    if (/cluster cut|clump cut|\bcluster\b|\bclump\b|\bfrill\b|tendril|ruffle stop/i.test(level.name)) {
      throw new Error(`${id} must not reuse Tendril/Ruffle/Clump/Cluster/Frill titles`);
    }
    const pair = gatePair(level);
    if (bannedPairs.has(pair)) throw new Error(`${id} must not twin a prior gate pair (${pair})`);
    const unique = uniqueShortestCount(level);
    if (unique.count !== 1) throw new Error(`${id} must have a unique shortest (${unique.count} paths of ${unique.min})`);
    if (unique.min < 10 || unique.min > 11) throw new Error(`${id} shortest must be 10–11, got ${unique.min}`);
    if (level.moveBudget < unique.min) throw new Error(`${id} budget ${level.moveBudget} < shortest ${unique.min}`);
  }
  if (LEVELS.find((row) => row.id === "L292")?.name !== "Plume Cut") throw new Error("L292 Plume Cut locked");
  if (LEVELS.find((row) => row.id === "L293")?.name !== "Comb Gap") throw new Error("L293 Comb Gap locked");
  if (LEVELS.find((row) => row.id === "L294")?.name !== "Flame Stop") throw new Error("L294 Flame Stop locked");
  if (LEVELS.find((row) => row.id === "L289")?.name !== "Floret Cut") throw new Error("L289 Floret Cut locked");
  if (LEVELS.find((row) => row.id === "L290")?.name !== "Bank Gap") throw new Error("L290 Bank Gap locked");
  if (LEVELS.find((row) => row.id === "L291")?.name !== "Spray Stop") throw new Error("L291 Spray Stop locked");
  if (SLICE_UNLOCKS[294] !== "friend_098") throw new Error("SLICE_UNLOCKS[294] must be friend_098");
  if (shippedFriendForClear(294)?.friendId !== "friend_098") throw new Error("onClear(294) must award Cleome");
  const cleome = friendById("friend_098");
  if (!cleome) throw new Error("friend_098 missing from CATALOG");
  if (cleome.defaultName !== "Cleome") throw new Error("default name must be Cleome");
  if (cleome.unlockClear !== 294) throw new Error("Cleome unlockClear must be 294");
  if (cleome.phenotype.artKit !== "cleome") throw new Error("Cleome artKit must be cleome");
  if (cleome.phenotype.personality !== "Cleome-soft") throw new Error("Cleome personality must be Cleome-soft");
  if (cleome.phenotype.boardColor !== "orange") throw new Error("Cleome boardColor must be orange");
  if (cleome.phenotype.color !== "Whisk") throw new Error("Cleome color must be Whisk");
  if (cleome.phenotype.pattern !== "Pod") throw new Error("Cleome pattern must be Pod");
  if (chipsForFriend("friend_098").join(",") !== "Cleome,Whisk,Pod") {
    throw new Error(`Cleome chips must be Cleome/Whisk/Pod, got ${chipsForFriend("friend_098").join(",")}`);
  }
  if (chipsForFriend("friend_098").some((c) => /celosia|^plume$|^comb$|phlox|^floret$|^bank$|lantana|^umbel$|^mound$|calendula|^petal$|^tin$|salvia|^sage$|^torch$|impatiens|^busy$|^box$|verbena|^spike$|^pot$|pansy|^face$|^saucer$|petunia|^flare$|^basket$|nasturtium|^pepper$|^tray$|geranium|^cluster$|^sill$|freesia|^trumpet$|^vase$|ranunculus|^layer$|^nest$|begonia|^ruffle$|^planter$|anemone|^wind$|^bowl$|wisteria|^cascade$|^arbor$|clematis|^vine$|^trellis$|cosmos|^airy$|^ray$|buttercup|^meadow$|^gloss$|primrose|^pale$|^dish$|heather|^moor$|^sprig$|marigold|^gold$|snapdragon|^jaw$|^perch$|bluebell|^cloche$|^ring$|foxglove|^tower$|^throat$|hyacinth|^bell$|crocus|^saffron$|^tip$|lily|^pollen$|^crest$|violet|^patch$|^moss$|tulip|^stem$|^glow$|poppy|^capsule$|^silk$|lotus|^pad$|^ripple$|orchid|^spur$|^veil$|iris|^blade$|^dew$|aster|^drift$|zinnia|^quill$|^gleam$|dahlia|^spire$|^ember$|azalea|^fizz$|peony|^bud$|^satin$|camellia|^wax$|^rose$|gardenia|^snow$|^velvet$|hibiscus|^roselle$|^punch$|magnolia|^cream$|^blush$|jasmine|^blossom$|^honey$|bergamot|^citrus$|^earl$|chamomile|^daisy$|^tea$|lavender|^bloom$|^calm$|catnip|^nip$|^dream$|mint|chill|^frost$|^ivory$|^lace$|^sheer$|rosemary|needle|^woody$|thyme|pinch|^twig$|marjoram|softleaf|^peel$|oregano|wild|^bunch$|tarragon|spear|bitters|dill|frondlet|^seed$|parsley|curl|lovage|^rib$|chervil|frill|lace|fennel|^frond$|anise|pebble|^fern$|^clover$|^juniper$/i.test(c))) {
    throw new Error("Cleome chips must ban Celosia/Plume/Comb and all prior pools/Pebble");
  }
  const loaf48 = readFileSync(resolve("public/assets/cats/cleome_loaf_48.svg"), "utf8");
  const loaf72 = readFileSync(resolve("public/assets/cats/cleome_loaf_72.svg"), "utf8");
  if (!loaf48.includes("#C868E0") || !loaf72.includes("#C868E0")) throw new Error("Cleome loaf must use coat #C868E0");
  if (!loaf48.includes("#2A1030") || !loaf72.includes("#2A1030")) throw new Error("Cleome loaf must use whisk freckles #2A1030");
  if (!loaf48.includes("#FFF3E6") || !loaf72.includes("#FFF3E6")) throw new Error("Cleome loaf must use belly #FFF3E6");
  for (const hex of ["#E04070", "#2A1018", "#D878A8", "#3A1830", "#E86040", "#3A1810", "#FF6B9A", "#2A4018", "#6B4C9A", "#2A1838", "#C060A0", "#6B5ACD", "#1A1030", "#F4A020", "#5A3010", "#F07830", "#3A2810", "#E87868", "#3A2818"]) {
    if (loaf48.includes(hex) || loaf72.includes(hex)) throw new Error(`Cleome loaf must not use prior coat ${hex}`);
  }
  if (furnitureGiftsForClear(294).length) throw new Error("Cleome@294 must gift no furniture");
  const yardG = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardG.match(/const cleome =/g) || []).length !== 1) throw new Error("YardScene must declare cleome once");
  if ((yardG.match(/\{cleome \?/g) || []).length !== 1) throw new Error("YardScene must render cleome once");
  if ((yardG.match(/const celosia =/g) || []).length !== 1) throw new Error("YardScene must keep celosia once");
  if ((yardG.match(/\{celosia \?/g) || []).length !== 1) throw new Error("YardScene must keep celosia once");
  if ((yardG.match(/const phlox =/g) || []).length !== 1) throw new Error("YardScene must keep phlox once");
  if ((yardG.match(/\{phlox \?/g) || []).length !== 1) throw new Error("YardScene must keep phlox once");
  if (TUTORIAL_RESCUES.length !== 98) throw new Error("Met must include through Cleome (98)");
  for (const [clear, friendId, message] of PRIOR_UNLOCKS) {
    if (shippedFriendForClear(clear)?.friendId !== friendId) throw new Error(message);
  }
  for (const [friendId, chips, message] of PRIOR_CHIPS) {
    if (chipsForFriend(friendId).join(",") !== chips) throw new Error(message);
  }
  if (SLICE_UNLOCKS[291] !== "friend_097") throw new Error("SLICE_UNLOCKS[291] must be friend_097");
  if (SLICE_UNLOCKS[294] !== "friend_098") throw new Error("SLICE_UNLOCKS[294] must be friend_098");
  if (SLICE_UNLOCKS[297]) throw new Error("no friend_099 @297 this slice");
  if (/pebble|Pebble/i.test(loaf48 + loaf72)) throw new Error("Cleome art must not use Pebble");
  if (/celosia|phlox|lantana|calendula|salvia|impatiens|verbena|pansy|petunia|nasturtium|geranium|begonia|marigold|buttercup/i.test(loaf48 + loaf72)) {
    throw new Error("Cleome art must not collide Celosia/Phlox and prior flower marks");
  }
  const l295 = LEVELS.find((r) => r.id === "L295")!;
  const l296 = LEVELS.find((r) => r.id === "L296")!;
  const l297 = LEVELS.find((r) => r.id === "L297")!;
  if (/\b(plume|comb|flame|floret|bank|spray|umbel|mound|bunch|disk|tin|disc|sage|torch|bract|celosia|phlox|calendula|salvia|busy|box|touch|spike|urn|taper|face|saucer|blotch|flare|basket|frill|petal|cluster|clump)\b/i.test(l295.name)) {
    throw new Error("L295 must not reuse Plume/Comb/Flame/Floret/Bank/Spray and prior triad names");
  }
  if (gatePair(l295) !== "0,0/3,3") throw new Error(`L295 gates must be delta (3, 3) pair, got ${gatePair(l295)}`);
  if (gatePair(l296) !== "4,0/4,2") throw new Error(`L296 gates must be delta (0, 2) pair, got ${gatePair(l296)}`);
  if (gatePair(l297) !== "3,4/5,0") throw new Error(`L297 gates must be delta (2, 4) pair, got ${gatePair(l297)}`);
  const occ297 = [...l297.cats, ...l297.gates].map((p) => `${p.x},${p.y}`).sort().join(";");
  const priorOcc = new Set(
    LEVELS.filter((row) => /stop/i.test(row.name) && row.id !== "L297").map((row) =>
      [...row.cats, ...row.gates].map((p) => `${p.x},${p.y}`).sort().join(";"),
    ),
  );
  if (priorOcc.has(occ297)) throw new Error("L297 Spider must not twin a prior Stop occupancy");
  if (occ297.split(";").includes("5,5")) throw new Error("L297 Spider must be off Nori seat (5,5)");
  if (l297.gates[0].y === l297.gates[1].y) throw new Error("L297 Spider must not same-row Nest");
  if (l297.gates[0].x === l297.gates[1].x) throw new Error("L297 Spider must not column Porch");
  if (l295.cats[0].x === l295.cats[1].x) throw new Error("L295 Whisk must not stacked-column Vine");

  if (solves.L295[0][0] === "cat_gray") {
    throw new Error("L295 Whisk Cut must not open gray-first (Plume Cut clone)");
  }
  if (solves.L295[0][0] === "cat_orange" && solves.L295[0][1] === "s") {
    throw new Error("L295 Whisk Cut must not open orange-south (Flame Stop clone)");
  }
  if (solves.L295[0][0] === "cat_orange" && solves.L295[0][1] === "e") {
    throw new Error("L295 Whisk Cut must not open orange-east (Floret Cut clone)");
  }
  if (solves.L295[0][0] === "cat_orange" && solves.L295[0][1] === "n") {
    throw new Error("L295 Whisk Cut must not open orange-north (Disk Cut clone)");
  }
  if (solves.L296[0][0] === "cat_black") {
    throw new Error("L296 Pod Gap must not open black-first (Comb Gap clone)");
  }
  if (solves.L296[0][0] === "cat_gray" && solves.L296[0][1] === "e") {
    throw new Error("L296 Pod Gap must not open gray-east (Bank Gap clone)");
  }
  if (solves.L296[0][0] === "cat_gray" && solves.L296[0][1] === "n") {
    throw new Error("L296 Pod Gap must not open gray-north (Tin Gap clone)");
  }
  if (solves.L296[0][0] === "cat_gray" && solves.L296[0][1] === "w") {
    throw new Error("L296 Pod Gap must not open gray-west (Umbel Cut clone)");
  }
  if (solves.L297[0][0] === "cat_orange") {
    throw new Error("L297 Spider Stop must not open orange-first (Flame Stop clone)");
  }
  if (solves.L297[0][0] === "cat_black" && solves.L297[0][1] === "e") {
    throw new Error("L297 Spider Stop must not open black-east (Mound Gap / Spray Stop clone)");
  }
  if (solves.L297[0][0] === "cat_black" && solves.L297[0][1] === "s") {
    throw new Error("L297 Spider Stop must not open black-south (Comb Gap clone)");
  }
  if (solves.L297[0][0] === "cat_black" && solves.L297[0][1] === "n") {
    throw new Error("L297 Spider Stop must not open black-north (Disc Stop clone)");
  }
  if (solves.L295[0][0] !== "cat_orange") {
    throw new Error("L295 Whisk Cut must open orange-first");
  }
  if (solves.L296[0][0] !== "cat_gray") {
    throw new Error("L296 Pod Gap must open gray-first");
  }
  if (solves.L297[0][0] !== "cat_black") {
    throw new Error("L297 Spider Stop must open black-first");
  }
  for (const level of [l295, l296, l297]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
    if (level.width !== 6 || level.height !== 6) throw new Error(`${level.id} must be 6×6`);
    if (!level.templateId.startsWith("LT02_LT08_")) throw new Error(`${level.id} must be LT02+LT08`);
  }
  const wallKeyO = (level: Level) => [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsO = LEVELS.filter((row) => !["L295", "L296", "L297"].includes(row.id)).map(wallKeyO);
  for (const id of ["L295", "L296", "L297"] as const) {
    const key = wallKeyO(LEVELS.find((r) => r.id === id)!);
    if (priorWallsO.includes(key)) throw new Error(`${id} wall twin of a prior board`);
  }
  if (ART_KIT_PATH.cleome.loaf48 !== "/assets/cats/cleome_loaf_48.svg") throw new Error("ART_KIT_PATH.cleome loaf48");
  if (ART_KIT_PATH.cleome.loaf72 !== "/assets/cats/cleome_loaf_72.svg") throw new Error("ART_KIT_PATH.cleome loaf72");
  if (ART_KIT_PATH.celosia.loaf48 !== "/assets/cats/celosia_loaf_48.svg") throw new Error("ART_KIT_PATH.celosia loaf48");
  if (ART_KIT_PATH.phlox.loaf48 !== "/assets/cats/phlox_loaf_48.svg") throw new Error("ART_KIT_PATH.phlox loaf48");
  const saveG = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveG.includes("cleome pod")) throw new Error("SaveProvider must yard-bubble cleome pod for Cleome");
  if (!saveG.includes("celosia comb")) throw new Error("SaveProvider must yard-bubble celosia comb for Celosia");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_098.md"))) throw new Error("missing CH4_FRIEND_098.md");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_097.md"))) throw new Error("missing CH4_FRIEND_097.md");
  if (!existsSync(resolve("data/collection/chapter4_cleome_bang.json"))) throw new Error("missing collection cleome bang");
  if (!existsSync(resolve("data/chapter4_cleome_bang.json"))) throw new Error("missing chapter4_cleome_bang.json");
  if (!existsSync(resolve("public/assets/furniture/cleomePod.svg"))) throw new Error("missing cleome-pod yard SVG");
  if (!existsSync(resolve("public/assets/ui/star_cleome.svg"))) throw new Error("missing star_cleome");
  const pod = readFileSync(resolve("public/assets/furniture/cleomePod.svg"), "utf8");
  if (!pod.includes("#C868E0") || !pod.includes("#2A1030")) throw new Error("cleome pod must use spider-whisk #C868E0 + whisk #2A1030");
  const nameModalG = readFileSync(resolve("src/components/puzzle/NameCatModal.tsx"), "utf8");
  if (!nameModalG.includes("CLEOME_FRIEND_ID")) throw new Error("NameCatModal must lockChips Cleome");
  if (!nameModalG.includes("CELOSIA_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Celosia");
  const shellC = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shellC.includes("Full-viewport") && !shellC.includes("full-viewport") && !shellC.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shellC)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Cleome@294 + L295–L297 ok · chips Cleome/Whisk/Pod · coat #C868E0 + whisk freckles #2A1030 · Whisk Cut / Pod Gap / Spider Stop · unique vs Plume Cut / Comb Gap / Flame Stop / Floret Cut / Bank Gap / Spray Stop · Celosia/Phlox/Lantana/Calendula/Salvia/Impatiens/Verbena/Pansy/Petunia and prior locked · no friend_099 · parade Bean stands");
}
