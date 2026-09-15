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

export function verifyChapter4Phlox(solves: Record<string, Array<[string, Dir]>>) {
  const titles = LEVELS.map((row) => row.name);
  for (const title of ["Floret Cut", "Bank Gap", "Spray Stop"] as const) {
    if (titles.filter((name) => name === title).length !== 1) {
      throw new Error(`${title} must be unique across campaign titles`);
    }
  }
  for (const prior of [
    "Umbel Cut",
    "Mound Gap",
    "Bunch Stop",
    "Disk Cut",
    "Tin Gap",
    "Disc Stop",
    "Sage Cut",
    "Torch Gap",
    "Bract Stop",
  ] as const) {
    if (titles.filter((name) => name === prior).length !== 1) {
      throw new Error(`${prior} must stay unique`);
    }
  }
  for (const banned of [
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
    if (["L289", "L290", "L291"].some((id) => LEVELS.find((row) => row.id === id)?.name === banned)) {
      throw new Error(`Phlox triad must not reuse ${banned}`);
    }
  }
  const bannedPairs = new Set(
    LEVELS.filter((row) => !["L289", "L290", "L291"].includes(row.id)).map(gatePair),
  );
  for (const [id, name] of [
    ["L289", "Floret Cut"],
    ["L290", "Bank Gap"],
    ["L291", "Spray Stop"],
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
    if (/umbel cut|mound gap|bunch stop|disk cut|tin gap|disc stop|sage cut|torch gap|bract stop|lantana (cut|gap|stop)|calendula (cut|gap|stop)|salvia (cut|gap|stop)|impatiens (cut|gap|stop)|busy cut|box gap|touch stop|verbena (cut|gap|stop)|spike cut|urn gap|taper stop|petal cut/i.test(level.name)) {
      throw new Error(`${id} must not be Umbel/Mound/Bunch/Disk/Tin/Disc/Sage/Torch/Bract and prior triad names`);
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
  if (LEVELS.find((row) => row.id === "L286")?.name !== "Umbel Cut") throw new Error("L286 Umbel Cut locked");
  if (LEVELS.find((row) => row.id === "L287")?.name !== "Mound Gap") throw new Error("L287 Mound Gap locked");
  if (LEVELS.find((row) => row.id === "L288")?.name !== "Bunch Stop") throw new Error("L288 Bunch Stop locked");
  if (LEVELS.find((row) => row.id === "L283")?.name !== "Disk Cut") throw new Error("L283 Disk Cut locked");
  if (LEVELS.find((row) => row.id === "L284")?.name !== "Tin Gap") throw new Error("L284 Tin Gap locked");
  if (LEVELS.find((row) => row.id === "L285")?.name !== "Disc Stop") throw new Error("L285 Disc Stop locked");
  if (LEVELS.find((row) => row.id === "L280")?.name !== "Sage Cut") throw new Error("L280 Sage Cut locked");
  if (LEVELS.find((row) => row.id === "L281")?.name !== "Torch Gap") throw new Error("L281 Torch Gap locked");
  if (LEVELS.find((row) => row.id === "L282")?.name !== "Bract Stop") throw new Error("L282 Bract Stop locked");
  if (SLICE_UNLOCKS[288] !== "friend_096") throw new Error("SLICE_UNLOCKS[288] must be friend_096");
  if (shippedFriendForClear(288)?.friendId !== "friend_096") throw new Error("onClear(288) must award Phlox");
  const phlox = friendById("friend_096");
  if (!phlox) throw new Error("friend_096 missing from CATALOG");
  if (phlox.defaultName !== "Phlox") throw new Error("default name must be Phlox");
  if (phlox.unlockClear !== 288) throw new Error("Phlox unlockClear must be 288");
  if (phlox.phenotype.artKit !== "phlox") throw new Error("Phlox artKit must be phlox");
  if (phlox.phenotype.personality !== "Phlox-soft") throw new Error("Phlox personality must be Phlox-soft");
  if (phlox.phenotype.boardColor !== "orange") throw new Error("Phlox boardColor must be orange");
  if (phlox.phenotype.color !== "Floret") throw new Error("Phlox color must be Floret");
  if (phlox.phenotype.pattern !== "Bank") throw new Error("Phlox pattern must be Bank");
  if (chipsForFriend("friend_096").join(",") !== "Phlox,Floret,Bank") {
    throw new Error(`Phlox chips must be Phlox/Floret/Bank, got ${chipsForFriend("friend_096").join(",")}`);
  }
  if (chipsForFriend("friend_096").some((c) => /lantana|^umbel$|^mound$|calendula|^petal$|^tin$|salvia|^sage$|^torch$|impatiens|^busy$|^box$|verbena|^spike$|^pot$|pansy|^face$|^saucer$|petunia|^flare$|^basket$|nasturtium|^pepper$|^tray$|geranium|^cluster$|^sill$|freesia|^trumpet$|^vase$|ranunculus|^layer$|^nest$|begonia|^ruffle$|^planter$|anemone|^wind$|^bowl$|wisteria|^cascade$|^arbor$|clematis|^vine$|^trellis$|cosmos|^airy$|^ray$|buttercup|^meadow$|^gloss$|primrose|^pale$|^dish$|heather|^moor$|^sprig$|marigold|^gold$|snapdragon|^jaw$|^perch$|bluebell|^cloche$|^ring$|foxglove|^tower$|^throat$|hyacinth|^bell$|crocus|^saffron$|^tip$|lily|^pollen$|^crest$|violet|^patch$|^moss$|tulip|^stem$|^glow$|poppy|^capsule$|^silk$|lotus|^pad$|^ripple$|orchid|^spur$|^veil$|iris|^blade$|^dew$|aster|^drift$|zinnia|^quill$|^gleam$|dahlia|^spire$|^ember$|azalea|^fizz$|peony|^bud$|^satin$|camellia|^wax$|^rose$|gardenia|^snow$|^velvet$|hibiscus|^roselle$|^punch$|magnolia|^cream$|^blush$|jasmine|^blossom$|^honey$|bergamot|^citrus$|^earl$|chamomile|^daisy$|^tea$|lavender|^bloom$|^calm$|catnip|^nip$|^dream$|mint|chill|^frost$|^ivory$|^lace$|^sheer$|rosemary|needle|^woody$|thyme|pinch|^twig$|marjoram|softleaf|^peel$|oregano|wild|^bunch$|tarragon|spear|bitters|dill|frondlet|^seed$|parsley|curl|lovage|^rib$|chervil|frill|lace|fennel|^frond$|anise|pebble|^fern$|^clover$|^juniper$/i.test(c))) {
    throw new Error("Phlox chips must ban Lantana/Umbel/Mound and all prior pools/Pebble");
  }
  const loaf48 = readFileSync(resolve("public/assets/cats/phlox_loaf_48.svg"), "utf8");
  const loaf72 = readFileSync(resolve("public/assets/cats/phlox_loaf_72.svg"), "utf8");
  if (!loaf48.includes("#D878A8") || !loaf72.includes("#D878A8")) throw new Error("Phlox loaf must use coat #D878A8");
  if (!loaf48.includes("#3A1830") || !loaf72.includes("#3A1830")) throw new Error("Phlox loaf must use floret freckles #3A1830");
  if (!loaf48.includes("#FFF3E6") || !loaf72.includes("#FFF3E6")) throw new Error("Phlox loaf must use belly #FFF3E6");
  for (const hex of ["#E86040", "#3A1810", "#FF6B9A", "#2A4018", "#C060A0", "#2A1030", "#6B5ACD", "#1A1030", "#F4A020", "#5A3010", "#F07830", "#3A2810", "#E87868", "#3A2818"]) {
    if (loaf48.includes(hex) || loaf72.includes(hex)) throw new Error(`Phlox loaf must not use prior coat ${hex}`);
  }
  if (furnitureGiftsForClear(288).length) throw new Error("Phlox@288 must gift no furniture");
  const yardG = readFileSync(resolve("src/components/yard/YardScene.tsx"), "utf8");
  if ((yardG.match(/const phlox =/g) || []).length !== 1) throw new Error("YardScene must declare phlox once");
  if ((yardG.match(/\{phlox \?/g) || []).length !== 1) throw new Error("YardScene must render phlox once");
  if ((yardG.match(/const lantana =/g) || []).length !== 1) throw new Error("YardScene must keep lantana once");
  if ((yardG.match(/\{lantana \?/g) || []).length !== 1) throw new Error("YardScene must keep lantana once");
  if ((yardG.match(/const calendula =/g) || []).length !== 1) throw new Error("YardScene must keep calendula once");
  if ((yardG.match(/\{calendula \?/g) || []).length !== 1) throw new Error("YardScene must keep calendula once");
  if (TUTORIAL_RESCUES.length !== 96) throw new Error("Met must include through Phlox (96)");
  for (const [clear, friendId, message] of PRIOR_UNLOCKS) {
    if (shippedFriendForClear(clear)?.friendId !== friendId) throw new Error(message);
  }
  for (const [friendId, chips, message] of PRIOR_CHIPS) {
    if (chipsForFriend(friendId).join(",") !== chips) throw new Error(message);
  }
  if (SLICE_UNLOCKS[285] !== "friend_095") throw new Error("SLICE_UNLOCKS[285] must be friend_095");
  if (SLICE_UNLOCKS[288] !== "friend_096") throw new Error("SLICE_UNLOCKS[288] must be friend_096");
  if (SLICE_UNLOCKS[291]) throw new Error("no friend_097 @291 this slice");
  if (/pebble|Pebble/i.test(loaf48 + loaf72)) throw new Error("Phlox art must not use Pebble");
  if (/lantana|calendula|salvia|impatiens|verbena|pansy|petunia|nasturtium|geranium|begonia|marigold|buttercup/i.test(loaf48 + loaf72)) {
    throw new Error("Phlox art must not collide Lantana/Calendula and prior flower marks");
  }
  const l289 = LEVELS.find((r) => r.id === "L289")!;
  const l290 = LEVELS.find((r) => r.id === "L290")!;
  const l291 = LEVELS.find((r) => r.id === "L291")!;
  if (/\b(umbel|mound|bunch|disk|tin|disc|sage|torch|bract|calendula|salvia|busy|box|touch|spike|urn|taper|face|saucer|blotch|flare|basket|frill|petal|cluster|clump)\b/i.test(l289.name)) {
    throw new Error("L289 must not reuse Umbel/Mound/Bunch/Disk/Tin/Disc/Sage/Torch/Bract and prior triad names");
  }
  if (gatePair(l289) !== "3,3/5,2") throw new Error(`L289 gates must be delta (2, 1) pair, got ${gatePair(l289)}`);
  if (gatePair(l290) !== "1,1/3,5") throw new Error(`L290 gates must be delta (2, 4) pair, got ${gatePair(l290)}`);
  if (gatePair(l291) !== "3,5/4,3") throw new Error(`L291 gates must be delta (1, 2) pair, got ${gatePair(l291)}`);
  const occ291 = [...l291.cats, ...l291.gates].map((p) => `${p.x},${p.y}`).sort().join(";");
  const priorOcc = new Set(
    LEVELS.filter((row) => /stop/i.test(row.name) && row.id !== "L291").map((row) =>
      [...row.cats, ...row.gates].map((p) => `${p.x},${p.y}`).sort().join(";"),
    ),
  );
  if (priorOcc.has(occ291)) throw new Error("L291 Spray must not twin a prior Stop occupancy");
  if (occ291.split(";").includes("5,5")) throw new Error("L291 Spray must be off Nori seat (5,5)");
  if (l291.gates[0].y === l291.gates[1].y) throw new Error("L291 Spray must not same-row Nest");
  if (l291.gates[0].x === l291.gates[1].x) throw new Error("L291 Spray must not column Porch");
  if (l289.cats[0].x === l289.cats[1].x) throw new Error("L289 Floret must not stacked-column Vine");

  if (solves.L289[0][0] === "cat_gray") {
    throw new Error("L289 Floret Cut must not open gray-first (Umbel Cut clone)");
  }
  if (solves.L289[0][0] === "cat_orange" && solves.L289[0][1] === "n") {
    throw new Error("L289 Floret Cut must not open orange-north (Disk Cut clone)");
  }
  if (solves.L289[0][0] === "cat_orange" && solves.L289[0][1] === "s") {
    throw new Error("L289 Floret Cut must not open orange-south (Busy Cut clone)");
  }
  if (solves.L289[0][0] === "cat_orange" && solves.L289[0][1] === "w") {
    throw new Error("L289 Floret Cut must not open orange-west (Bunch Stop clone)");
  }
  if (solves.L290[0][0] === "cat_black") {
    throw new Error("L290 Bank Gap must not open black-first (Mound Gap clone)");
  }
  if (solves.L290[0][0] === "cat_gray" && solves.L290[0][1] === "w") {
    throw new Error("L290 Bank Gap must not open gray-west (Umbel Cut clone)");
  }
  if (solves.L290[0][0] === "cat_gray" && solves.L290[0][1] === "n") {
    throw new Error("L290 Bank Gap must not open gray-north (Tin Gap clone)");
  }
  if (solves.L290[0][0] === "cat_gray" && solves.L290[0][1] === "s") {
    throw new Error("L290 Bank Gap must not open gray-south (Sage Cut clone)");
  }
  if (solves.L291[0][0] === "cat_orange") {
    throw new Error("L291 Spray Stop must not open orange-first (Bunch Stop clone)");
  }
  if (solves.L291[0][0] === "cat_black" && solves.L291[0][1] === "n") {
    throw new Error("L291 Spray Stop must not open black-north (Disc Stop clone)");
  }
  if (solves.L291[0][0] === "cat_black" && solves.L291[0][1] === "w") {
    throw new Error("L291 Spray Stop must not open black-west (Torch Gap clone)");
  }
  if (solves.L291[0][0] === "cat_black" && solves.L291[0][1] === "s") {
    throw new Error("L291 Spray Stop must not open black-south (Touch Stop clone)");
  }
  if (solves.L289[0][0] !== "cat_orange") {
    throw new Error("L289 Floret Cut must open orange-first");
  }
  if (solves.L290[0][0] !== "cat_gray") {
    throw new Error("L290 Bank Gap must open gray-first");
  }
  if (solves.L291[0][0] !== "cat_black") {
    throw new Error("L291 Spray Stop must open black-first");
  }
  for (const level of [l289, l290, l291]) {
    if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) {
      throw new Error(`${level.id} must not WRAP/edge-twin Nori/Medlar`);
    }
    if (level.width !== 6 || level.height !== 6) throw new Error(`${level.id} must be 6×6`);
    if (!level.templateId.startsWith("LT02_LT08_")) throw new Error(`${level.id} must be LT02+LT08`);
  }
  const wallKeyO = (level: Level) => [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
  const priorWallsO = LEVELS.filter((row) => !["L289", "L290", "L291"].includes(row.id)).map(wallKeyO);
  for (const id of ["L289", "L290", "L291"] as const) {
    const key = wallKeyO(LEVELS.find((r) => r.id === id)!);
    if (priorWallsO.includes(key)) throw new Error(`${id} wall twin of a prior board`);
  }
  if (ART_KIT_PATH.phlox.loaf48 !== "/assets/cats/phlox_loaf_48.svg") throw new Error("ART_KIT_PATH.phlox loaf48");
  if (ART_KIT_PATH.phlox.loaf72 !== "/assets/cats/phlox_loaf_72.svg") throw new Error("ART_KIT_PATH.phlox loaf72");
  if (ART_KIT_PATH.lantana.loaf48 !== "/assets/cats/lantana_loaf_48.svg") throw new Error("ART_KIT_PATH.lantana loaf48");
  if (ART_KIT_PATH.calendula.loaf48 !== "/assets/cats/calendula_loaf_48.svg") throw new Error("ART_KIT_PATH.calendula loaf48");
  const saveG = readFileSync(resolve("src/components/providers/SaveProvider.tsx"), "utf8");
  if (!saveG.includes("phlox bank")) throw new Error("SaveProvider must yard-bubble phlox bank for Phlox");
  if (!saveG.includes("lantana mound")) throw new Error("SaveProvider must yard-bubble lantana mound for Lantana");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_096.md"))) throw new Error("missing CH4_FRIEND_096.md");
  if (!existsSync(resolve("data/collection/CH4_FRIEND_095.md"))) throw new Error("missing CH4_FRIEND_095.md");
  if (!existsSync(resolve("data/collection/chapter4_phlox_bang.json"))) throw new Error("missing collection phlox bang");
  if (!existsSync(resolve("data/chapter4_phlox_bang.json"))) throw new Error("missing chapter4_phlox_bang.json");
  if (!existsSync(resolve("public/assets/furniture/phloxBank.svg"))) throw new Error("missing phlox-bank yard SVG");
  if (!existsSync(resolve("public/assets/ui/star_phlox.svg"))) throw new Error("missing star_phlox");
  const bank = readFileSync(resolve("public/assets/furniture/phloxBank.svg"), "utf8");
  if (!bank.includes("#D878A8") || !bank.includes("#3A1830")) throw new Error("phlox bank must use cluster-panicle #D878A8 + floret #3A1830");
  const nameModalG = readFileSync(resolve("src/components/puzzle/NameCatModal.tsx"), "utf8");
  if (!nameModalG.includes("PHLOX_FRIEND_ID")) throw new Error("NameCatModal must lockChips Phlox");
  if (!nameModalG.includes("LANTANA_FRIEND_ID")) throw new Error("NameCatModal must keep lockChips Lantana");
  const shellC = readFileSync(resolve("src/components/shell/GameShell.tsx"), "utf8");
  if (!shellC.includes("Full-viewport") && !shellC.includes("full-viewport") && !shellC.includes("min-h-dvh")) {
    throw new Error("GameShell must stay full-viewport");
  }
  if (/iphone-frame|device-bezel|phone-shell/i.test(shellC)) {
    throw new Error("GameShell must not add a phone frame");
  }
  console.log("Ch4 Phlox@288 + L289–L291 ok · chips Phlox/Floret/Bank · coat #D878A8 + floret freckles #3A1830 · Floret Cut / Bank Gap / Spray Stop · unique vs Umbel Cut / Mound Gap / Bunch Stop / Disk Cut / Tin Gap / Disc Stop · Lantana/Calendula/Salvia/Impatiens/Verbena/Pansy/Petunia and prior locked · no friend_097 · parade Bean stands");
}
