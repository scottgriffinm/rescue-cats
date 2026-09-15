/**
 * Search unique 6×6 LT02+LT08 boards for L274–L276.
 * Run: npx tsx scripts/gen-chapter4-verbena-levels.mjs
 */
import { writeFileSync } from "node:fs";
import { LEVELS } from "../src/lib/levels.ts";
import { allCatsOnGates, legalDirs, slideCat } from "../src/lib/slide.ts";

const DIRS = ["n", "e", "s", "w"];

function stateKey(cats) {
  return [...cats]
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((c) => `${c.id}:${c.x},${c.y}`)
    .join("|");
}

function uniqueShortest(level) {
  const start = level.cats.map((c) => ({ ...c }));
  const queue = [{ cats: start, depth: 0, path: [] }];
  const best = new Map();
  best.set(stateKey(start), { depth: 0, paths: 1 });
  let min = Infinity;
  let sample = null;
  while (queue.length) {
    const cur = queue.shift();
    if (cur.depth > 12 || cur.depth > min) continue;
    const curKey = stateKey(cur.cats);
    if (allCatsOnGates(level, cur.cats) && cur.depth > 0) {
      if (cur.depth < min) {
        min = cur.depth;
        sample = cur.path;
      }
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
          queue.push({
            cats: next.cats,
            depth: nextDepth,
            path: [...cur.path, [cat.id, dir]],
          });
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
      const part = key.split("|").find((p) => p.startsWith(`${c.id}:`));
      const [x, y] = part.split(":")[1].split(",").map(Number);
      return { ...c, x, y };
    });
    if (allCatsOnGates(level, colored)) count += info.paths;
  }
  return { min, count, path: sample };
}

function gatePair(level) {
  return level.gates.map((g) => `${g.x},${g.y}`).sort().join("/");
}

function wallKey(level) {
  return [...level.walls].map((w) => `${w.x},${w.y}`).sort().join(";");
}

function occKey(level) {
  return [...level.cats, ...level.gates].map((p) => `${p.x},${p.y}`).sort().join(";");
}

const bannedPairs = new Set();
const bannedWalls = new Set();
const bannedOcc = new Set();
for (const level of LEVELS) {
  bannedPairs.add(gatePair(level));
  bannedWalls.add(wallKey(level));
  bannedOcc.add(occKey(level));
}

function cells() {
  const out = [];
  for (let y = 0; y < 6; y++) for (let x = 0; x < 6; x++) out.push({ x, y });
  return out;
}

function pickDistinct(rng, list, n, extraBlocked = new Set()) {
  const used = new Set(extraBlocked);
  const picked = [];
  let guard = 0;
  while (picked.length < n && guard++ < 80) {
    const c = list[rng() % list.length];
    const k = `${c.x},${c.y}`;
    if (used.has(k)) continue;
    used.add(k);
    picked.push(c);
  }
  return picked.length === n ? picked : null;
}

function mulberry32(a) {
  return function rng() {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return (t ^ (t >>> 14)) >>> 0;
  };
}

function makeLevel({ id, name, walls, cats, gates, teach }) {
  return {
    id,
    name,
    width: 6,
    height: 6,
    moveBudget: 11,
    nudges: 3,
    colorLocks: true,
    templateId: `LT02_LT08_${teach}`,
    walls,
    blockers: [],
    cats: cats.map((c) => ({
      id: `cat_${c.color}`,
      x: c.x,
      y: c.y,
      color: c.color,
      colorId: `color_${c.color}`,
    })),
    gates: gates.map((g) => ({
      id: `gate_${g.color}`,
      x: g.x,
      y: g.y,
      color: g.color,
      colorId: `color_${g.color}`,
    })),
    teach,
  };
}

function okCommon(level, { stop = false }) {
  const pair = gatePair(level);
  if (bannedPairs.has(pair)) return false;
  if (bannedWalls.has(wallKey(level))) return false;
  if (level.gates.every((g) => g.y === 5) || level.gates.every((g) => g.x === 5)) return false;
  if (stop) {
    if (bannedOcc.has(occKey(level))) return false;
    if (occKey(level).split(";").includes("5,5")) return false;
    if (level.gates[0].y === level.gates[1].y) return false;
    if (level.gates[0].x === level.gates[1].x) return false;
  }
  return true;
}

function search(spec) {
  const all = cells();
  for (let seed = spec.seed; seed < spec.seed + 600000; seed++) {
    const rng = mulberry32(seed);
    const walls = pickDistinct(rng, all, 3);
    if (!walls) continue;
    const wallSet = new Set(walls.map((w) => `${w.x},${w.y}`));
    const free = all.filter((c) => !wallSet.has(`${c.x},${c.y}`));
    const cats = pickDistinct(rng, free, 2);
    if (!cats) continue;
    const catSet = new Set(cats.map((c) => `${c.x},${c.y}`));
    const gates = pickDistinct(rng, free, 2, catSet);
    if (!gates) continue;
    if (spec.kind === "cut" && cats[0].x === cats[1].x) continue;

    const level = makeLevel({
      id: spec.id,
      name: spec.name,
      walls,
      cats: spec.colors.map((color, i) => ({ ...cats[i], color })),
      gates: spec.colors.map((color, i) => ({ ...gates[i], color })),
      teach: spec.teach,
    });
    if (!okCommon(level, { stop: spec.kind === "stop" })) continue;

    const unique = uniqueShortest(level);
    if (!unique.path || unique.count !== 1) continue;
    if (unique.min < 10 || unique.min > 11) continue;
    const first = unique.path[0];
    if (first[0] !== spec.openCat) continue;
    if (spec.banFirst?.some((b) => b[0] === first[0] && b[1] === first[1])) continue;
    if (spec.requireDir && first[1] !== spec.requireDir) continue;

    bannedPairs.add(gatePair(level));
    bannedWalls.add(wallKey(level));
    bannedOcc.add(occKey(level));
    return { level, unique, seed };
  }
  return null;
}

const jobs = [
  {
    id: "L274",
    name: "Spike Cut",
    teach: "spike_cut_gray",
    colors: ["orange", "gray"],
    kind: "cut",
    openCat: "cat_gray",
    requireDir: "e",
    banFirst: [
      ["cat_orange", "n"],
      ["cat_orange", "s"],
      ["cat_orange", "w"],
      ["cat_orange", "e"],
      ["cat_gray", "w"],
      ["cat_gray", "s"],
      ["cat_gray", "n"],
    ],
    seed: 6201,
  },
  {
    id: "L275",
    name: "Pot Gap",
    teach: "pot_gap_black",
    colors: ["orange", "black"],
    kind: "gap",
    openCat: "cat_black",
    requireDir: "s",
    banFirst: [
      ["cat_gray", "n"],
      ["cat_gray", "e"],
      ["cat_gray", "w"],
      ["cat_gray", "s"],
      ["cat_black", "n"],
      ["cat_black", "e"],
      ["cat_black", "w"],
    ],
    seed: 7201,
  },
  {
    id: "L276",
    name: "Taper Stop",
    teach: "taper_stop_orange",
    colors: ["orange", "black"],
    kind: "stop",
    openCat: "cat_orange",
    requireDir: "e",
    banFirst: [
      ["cat_black", "e"],
      ["cat_black", "n"],
      ["cat_black", "s"],
      ["cat_black", "w"],
      ["cat_orange", "w"],
      ["cat_orange", "s"],
      ["cat_orange", "n"],
    ],
    seed: 8201,
  },
];

const found = [];
for (const job of jobs) {
  console.log("search", job.id, job.name);
  let hit = search(job);
  if (!hit && job.requireDir) {
    console.log("relax dir", job.id);
    hit = search({ ...job, requireDir: undefined, seed: job.seed + 80000 });
  }
  if (!hit) {
    console.error("FAILED", job.id);
    process.exit(1);
  }
  found.push(hit);
  console.log(
    JSON.stringify(
      {
        id: hit.level.id,
        seed: hit.seed,
        min: hit.unique.min,
        count: hit.unique.count,
        first: hit.unique.path[0],
        pair: gatePair(hit.level),
        walls: wallKey(hit.level),
        occ: occKey(hit.level),
        path: hit.unique.path,
        level: hit.level,
      },
      null,
      2,
    ),
  );
}

function cellLines(items) {
  return items.map((c) => `    { "x": ${c.x}, "y": ${c.y} }`).join(",\n");
}

function pieceLines(items) {
  return items
    .map(
      (c) =>
        `    { "id": "${c.id}", "x": ${c.x}, "y": ${c.y}, "color": "${c.color}", "colorId": "${c.colorId}" }`,
    )
    .join(",\n");
}

function standaloneJson(level) {
  return `{
  "id": "${level.id}",
  "name": "${level.name}",
  "width": 6,
  "height": 6,
  "moveBudget": 11,
  "nudges": 3,
  "colorLocks": true,
  "templateId": "${level.templateId}",
  "walls": [
${cellLines(level.walls)}
  ],
  "blockers": [],
  "cats": [
${pieceLines(level.cats)}
  ],
  "gates": [
${pieceLines(level.gates)}
  ],
  "teach": "${level.teach}"
}
`;
}

const pack = {
  schema: "rescue_cats.level_pack.v1",
  status: "SHIP READY",
  source: "Pansy Pass — L274–L276 need",
  chapter: 4,
  title: "Chapter 4 boards L274–L276",
  notes:
    "L274 Spike Cut / L275 Pot Gap / L276 Taper Stop — habit-break vs Face Cut orange-first / Saucer Gap gray-first / Blotch Stop black-first; not Verbena Cut/Gap/Stop; not Face/Saucer/Blotch/Frill/Tendril/Pane/Tube/Fold/Leaf/Whirl/Droop/Star/Floret/Petal/Stem/Cup/Clump/Cluster/Ruffle; Taper Stop avoids Pot Stop (Marigold); L275 CEO-locked Pot Gap (L230 Marigold already uses that display title); no WRAP/edge twin of Nori/Medlar; L276 occupancy off Cup/Pad/Pond/Vase/Bloom/Thicket/Anther/Stigma/Raceme/Glove/Chime/Dragon/Seed/Heath/Ruff/Petal/Floret/Star/Droop/Whirl/Leaf/Fold/Tube/Pane/Tendril/Frill/Blotch twins and Nori (5,5).",
  levels: found.map((hit) => hit.level),
  teaches: {
    spike_cut_gray: "Gray first; orange cuts after the spike.",
    pot_gap_black: "Black first then orange threads the pot gap.",
    taper_stop_orange: "Orange first; black seats the taper.",
  },
  solver: {
    min_slides: Object.fromEntries(found.map((hit) => [hit.level.id, hit.unique.min])),
  },
  deltas: Object.fromEntries(
    found.map((hit) => {
      const [a, b] = hit.level.gates;
      return [hit.level.id, `(${Math.abs(a.x - b.x)}, ${Math.abs(a.y - b.y)})`];
    }),
  ),
};

writeFileSync(
  "data/levels/CHAPTER4_PUZZLE_L274_L276.json",
  `${JSON.stringify(pack, null, 2)}\n`,
);
for (const hit of found) {
  writeFileSync(`data/levels/${hit.level.id}.json`, standaloneJson(hit.level));
}
writeFileSync(
  "/tmp/verbena-solves.json",
  `${JSON.stringify(
    {
      solves: Object.fromEntries(found.map((hit) => [hit.level.id, hit.unique.path])),
      first: Object.fromEntries(found.map((hit) => [hit.level.id, hit.unique.path[0]])),
      pairs: Object.fromEntries(found.map((hit) => [hit.level.id, gatePair(hit.level)])),
      occ: Object.fromEntries(found.map((hit) => [hit.level.id, occKey(hit.level)])),
      walls: Object.fromEntries(found.map((hit) => [hit.level.id, wallKey(hit.level)])),
      mins: Object.fromEntries(found.map((hit) => [hit.level.id, hit.unique.min])),
    },
    null,
    2,
  )}\n`,
);
console.log("wrote L274–L276 JSON + /tmp/verbena-solves.json");
