/**
 * Chapter 4 beat: L285 → Lantana@285 naming, then L286–L288.
 * Next friend must not unlock. L10 stays off-path. localStorage only.
 * L282 queues Calendula pending. Do not invent friend_096.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter4-lantana";
const CHROME = process.env.CHROME_PATH ?? "/usr/bin/google-chrome";

mkdirSync(OUT, { recursive: true });

const DIR_LABEL = {
  ArrowDown: "Slide south",
  ArrowRight: "Slide east",
  ArrowUp: "Slide north",
  ArrowLeft: "Slide west",
};

const PARADE = [
  ["friend_001", "Mango", 3],
  ["friend_002", "Ink", 6],
  ["friend_003", "Biscuit", 9],
  ["friend_004", "Tux", 12],
  ["friend_005", "Ghost", 15],
  ["friend_006", "Mist", 18],
  ["friend_007", "Pepper", 21],
  ["friend_008", "Pumpkin", 24],
  ["friend_009", "Midnight", 27],
  ["friend_010", "Noodle", 30],
  ["friend_011", "Clover", 33],
  ["friend_012", "Cinder", 36],
  ["friend_013", "Oak", 39],
  ["friend_014", "Dumpling", 42],
  ["friend_015", "Stripe", 45],
  ["friend_016", "Cloud", 48],
  ["friend_017", "Donna", 51],
  ["friend_018", "Sunny", 54],
  ["friend_019", "Nigel", 57],
  ["friend_020", "Bean", 60],
  ["friend_021", "Velvet", 63],
  ["friend_022", "Coral", 66],
  ["friend_023", "Blue", 69],
  ["friend_024", "Maple", 72],
  ["friend_025", "Steve", 75],
  ["friend_026", "Cocoa", 78],
  ["friend_027", "Linen", 81],
  ["friend_028", "Juniper", 84],
  ["friend_029", "Ivory", 87],
  ["friend_030", "Clay", 90],
  ["friend_031", "Basil", 93],
  ["friend_032", "Fig", 96],
  ["friend_033", "Plum", 99],
  ["friend_034", "Thistle", 102],
  ["friend_035", "Briar", 105],
  ["friend_036", "Ivy", 108],
  ["friend_037", "Nettle", 111],
  ["friend_038", "Sorrel", 114],
  ["friend_039", "Fennel", 117],
  ["friend_040", "Chervil", 120],
  ["friend_041", "Lovage", 123],
  ["friend_042", "Parsley", 126],
  ["friend_043", "Dill", 129],
  ["friend_044", "Tarragon", 132],
  ["friend_045", "Oregano", 135],
  ["friend_046", "Marjoram", 138],
  ["friend_047", "Thyme", 141],
  ["friend_048", "Rosemary", 144],
  ["friend_049", "Mint", 147],
  ["friend_050", "Catnip", 150],
  ["friend_051", "Lavender", 153],
  ["friend_052", "Chamomile", 156],
  ["friend_053", "Bergamot", 159],
  ["friend_054", "Jasmine", 162],
  ["friend_055", "Magnolia", 165],
  ["friend_056", "Hibiscus", 168],
  ["friend_057", "Gardenia", 171],
  ["friend_058", "Camellia", 174],
  ["friend_059", "Peony", 177],
  ["friend_060", "Azalea", 180],
  ["friend_061", "Dahlia", 183],
  ["friend_062", "Zinnia", 186],
  ["friend_063", "Aster", 189],
  ["friend_064", "Iris", 192],
  ["friend_065", "Orchid", 195],
  ["friend_066", "Lotus", 198],
  ["friend_067", "Poppy", 201],
  ["friend_068", "Tulip", 204],
  ["friend_069", "Violet", 207],
  ["friend_070", "Lily", 210],
  ["friend_071", "Crocus", 213],
  ["friend_072", "Hyacinth", 216],
  ["friend_073", "Foxglove", 219],
  ["friend_074", "Bluebell", 222],
  ["friend_075", "Snapdragon", 225],
  ["friend_076", "Marigold", 228],
  ["friend_077", "Heather", 231],
  ["friend_078", "Primrose", 234],
  ["friend_079", "Buttercup", 237],
  ["friend_080", "Cosmos", 240],
  ["friend_081", "Clematis", 243],
  ["friend_082", "Wisteria", 246],
  ["friend_083", "Anemone", 249],
  ["friend_084", "Begonia", 252],
  ["friend_085", "Ranunculus", 255],
  ["friend_086", "Freesia", 258],
  ["friend_087", "Geranium", 261],
  ["friend_088", "Nasturtium", 264],
  ["friend_089", "Petunia", 267],
  ["friend_090", "Pansy", 270],
  ["friend_091", "Verbena", 273],
  ["friend_092", "Impatiens", 276],
  ["friend_093", "Salvia", 279],
  ["friend_094", "Calendula", 282],
];

const completedIds = [
  "L1",
  "L2",
  "L3",
  "L4",
  "L5",
  "L6",
  "L7",
  "L8",
  "L9",
  ...Array.from({ length: 274 }, (_, i) => `L${i + 11}`),
];

const SEED = {
  version: 3,
  completedIds,
  clearCount: completedIds.length,
  friends: PARADE.map(([friendId, name, clearIndex], roost) => ({
    instanceId: `inst-${friendId}`,
    friendId,
    phenotypeId: `pheno-${friendId}`,
    name,
    rescuedAt: Date.now(),
    clearIndex,
    roost,
    favoriteToy: "sun patch",
    firstNight: false,
  })),
  pendingUnlocks: [],
  hearts: 400,
  stars: 220,
  tickets: 1,
  furniture: ["furn_box_cardboard", "furn_scratch_post", "furn_bed_cushion"],
  cosmetics: [],
  levelStrikes: {},
  seenCoach: true,
  bubbles: ["Calendula claimed the calendula tin."],
  unlockFlags: { mangoNamed: true, porchUnlocked: true },
  first_night_done: true,
  return_hook_available_at: null,
  return_hook_claimed: false,
  first_night_hearts_claimed: true,
};

async function shot(page, name) {
  const path = join(OUT, `${name}.png`);
  await page.screenshot({ path, fullPage: true });
  console.log(`shot ${path}`);
}

async function selectCat(page, who) {
  await page.click(`[aria-label="Select ${who} cat"]`);
}

async function play(page, steps, winText) {
  for (const [who, key] of steps) {
    await selectCat(page, who);
    const label = DIR_LABEL[key];
    await page.waitForSelector(`[aria-label="${label}"]:not([disabled])`, { visible: true });
    await page.click(`[aria-label="${label}"]`);
    await new Promise((r) => setTimeout(r, 700));
  }
  await page.waitForFunction(
    (text) => (document.body.innerText || "").includes(text),
    { timeout: 8000 },
    winText,
  );
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--window-size=390,844"],
  defaultViewport: { width: 390, height: 844, deviceScaleFactor: 2 },
});

try {
  const page = await browser.newPage();
  page.setDefaultTimeout(20000);
  await page.goto(BASE, { waitUntil: "networkidle0" });
  await page.evaluate((save) => {
    localStorage.setItem("rescue-cats.save.v2", JSON.stringify(save));
  }, SEED);
  await page.reload({ waitUntil: "networkidle0" });


  await page.goto(`${BASE}/level/L285`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("DISC STOP"));
  await shot(page, "01_l285_before_lantana");
  await play(
    page,
    [
      ["black", "ArrowUp"],
      ["black", "ArrowLeft"],
      ["black", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["orange", "ArrowDown"],
      ["black", "ArrowRight"],
      ["black", "ArrowUp"],
      ["black", "ArrowLeft"],
      ["orange", "ArrowRight"],
      ["black", "ArrowUp"],
    ],
    "New friend!",
  );

  const modal = await page.evaluate(() => {
    const card = document.querySelector("h2")?.closest("div.paper-card") ?? document.body;
    return {
      title: card.querySelector("h2")?.textContent?.trim(),
      line: card.querySelector("p")?.textContent?.trim(),
      input: card.querySelector("input")?.value,
      hero: [...card.querySelectorAll("img")].map((img) => img.getAttribute("src")),
      chips: [...card.querySelectorAll('[aria-label="Name suggestions"] button')].map((el) =>
        el.textContent?.trim(),
      ),
      ctaDisabled: Boolean(card.querySelector("button[type='submit']")?.disabled),
    };
  });
  console.log("lantana naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`Lantana prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled");
  if (modal.line !== "Umbel soft. Already claimed the lantana mound.") {
    throw new Error(`Lantana display line drifted: ${modal.line}`);
  }
  if (modal.chips.join(",") !== "Lantana,Umbel,Mound") {
    throw new Error(`Lantana chips must be Lantana/Umbel/Mound, got ${modal.chips.join("/")}`);
  }
  const bannedChips = [
    "Calendula", "Petal", "Tin", "Salvia", "Sage", "Torch", "Impatiens", "Busy", "Box", "Verbena", "Spike", "Pot", "Pansy", "Face", "Saucer", "Petunia", "Flare", "Basket",
    "Nasturtium", "Pepper", "Tray", "Geranium", "Cluster", "Sill", "Freesia", "Trumpet", "Vase",
    "Ranunculus", "Layer", "Nest", "Begonia", "Ruffle", "Planter", "Anemone", "Wind", "Bowl",
    "Wisteria", "Cascade", "Arbor", "Clematis", "Vine", "Trellis", "Cosmos", "Airy", "Ray",
    "Buttercup", "Meadow", "Gloss", "Primrose", "Pale", "Dish", "Heather", "Moor", "Sprig",
    "Marigold", "Gold", "Snapdragon", "Jaw", "Perch", "Bluebell", "Cloche", "Ring",
    "Foxglove", "Tower", "Throat", "Hyacinth", "Bell", "Crocus", "Saffron", "Tip",
    "Lily", "Pollen", "Crest", "Violet", "Patch", "Moss", "Tulip", "Stem", "Glow",
    "Poppy", "Capsule", "Silk", "Lotus", "Pad", "Ripple", "Orchid", "Spur", "Veil",
    "Iris", "Blade", "Dew", "Aster", "Drift", "Zinnia", "Quill", "Gleam",
    "Dahlia", "Spire", "Ember", "Azalea", "Fizz", "Peony", "Bud", "Satin",
    "Camellia", "Wax", "Rose", "Gardenia", "Snow", "Velvet", "Hibiscus", "Roselle", "Punch",
    "Magnolia", "Cream", "Blush", "Jasmine", "Blossom", "Honey", "Chamomile", "Daisy", "Tea",
    "Lavender", "Bloom", "Calm", "Pebble",
  ];
  if (modal.chips.some((chip) => bannedChips.includes(chip))) {
    throw new Error("Lantana chips collided with Calendula/Salvia/Impatiens and prior pools");
  }
  if (!modal.hero.some((src) => src?.includes("lantana_loaf"))) {
    throw new Error(`Lantana hero missing lantana loaf: ${modal.hero}`);
  }
  if (modal.hero.some((src) => src?.includes("calendula_loaf"))) {
    throw new Error("Lantana hero must not use the Calendula loaf");
  }
  if (modal.hero.some((src) => src?.includes("salvia_loaf"))) {
    throw new Error("Lantana hero must not use the Salvia loaf");
  }
  if (modal.hero.some((src) => src?.includes("nasturtium_loaf"))) {
    throw new Error("Lantana hero must not use the Nasturtium loaf");
  }
  if (modal.hero.some((src) => src?.includes("begonia_loaf"))) {
    throw new Error("Lantana hero must not use the Begonia loaf");
  }
  if (modal.hero.some((src) => src?.includes("marigold_loaf"))) {
    throw new Error("Lantana hero must not use the Marigold loaf");
  }
  await shot(page, "02_lantana_naming");
  await page.click('[aria-label="Name suggestions"] button');
  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () =>
      (document.body.innerText || "").includes("Lantana") &&
      ((document.body.innerText || "").includes("mound") ||
        (document.body.innerText || "").includes("lantana") ||
        (document.body.innerText || "").includes("moved in") ||
        (document.body.innerText || "").includes("are home") ||
        (document.body.innerText || "").includes("is home")),
    { timeout: 8000 },
  );

  const yard = await page.evaluate(() => ({
    text: document.body.innerText,
    imgs: [...document.querySelectorAll("img")].map((img) => img.getAttribute("src")),
    save: JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
    phoneFrame: Boolean(document.querySelector("[data-phone-frame], .phone-frame, .device-bezel")),
  }));
  if (!yard.save.friends.some((friend) => friend.friendId === "friend_095")) {
    throw new Error("Lantana was not named");
  }
  if (yard.save.friends.find((friend) => friend.friendId === "friend_095")?.name !== "Lantana") {
    throw new Error("Lantana name was not kept");
  }
  if (yard.save.friends.some((friend) => friend.friendId === "friend_096")) {
    throw new Error("friend_096 must not unlock");
  }
  if (
    !yard.imgs.includes("/assets/cats/lantana_loaf_72.svg") &&
    !yard.imgs.includes("/assets/cats/lantana_loaf_48.svg")
  ) {
    throw new Error(`yard missing Lantana loaf: ${yard.imgs.filter((src) => src?.includes("loaf")).join(",")}`);
  }
  if (!yard.text.includes("mound") && !yard.text.includes("Lantana")) {
    throw new Error("yard missing Lantana lantana mound line");
  }
  if (yard.phoneFrame) throw new Error("GameShell must stay full-viewport");
  await shot(page, "03_lantana_yard");

  await page.goto(`${BASE}/level/L286`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("UMBEL CUT"));
  await play(
    page,
    [
      ["gray", "ArrowLeft"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowUp"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowLeft"],
    ],
    "Home",
  );

  await page.goto(`${BASE}/level/L287`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("MOUND GAP"));
  await play(
    page,
    [
      ["black", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["black", "ArrowLeft"],
      ["black", "ArrowDown"],
      ["black", "ArrowRight"],
      ["black", "ArrowUp"],
      ["black", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
    ],
    "Home",
  );
  await shot(page, "04_l287_win");

  await page.goto(`${BASE}/level/L288`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("BUNCH STOP"));
  await play(
    page,
    [
      ["orange", "ArrowLeft"],
      ["black", "ArrowDown"],
      ["black", "ArrowRight"],
      ["black", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["black", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowLeft"],
      ["orange", "ArrowDown"],
    ],
    "Home",
  );
  await shot(page, "05_l288_win");

  const after = await page.evaluate(() => ({
    save: JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
    text: document.body.innerText,
    storageKeys: Object.keys(localStorage),
    hud: document.body.innerText,
  }));
  for (const id of ["L285", "L286", "L287", "L288"]) {
    if (!after.save.completedIds.includes(id)) {
      throw new Error(`${id} not marked complete: ${after.save.completedIds.join(",")}`);
    }
  }
  if (after.save.completedIds.includes("L10")) {
    throw new Error("L10 must stay off the campaign path");
  }
  if (after.save.friends.some((friend) => friend.friendId === "friend_096")) {
    throw new Error("friend_096 must not unlock this slice");
  }
  if (after.save.pendingUnlocks.some((pending) => pending.friendId === "friend_096")) {
    throw new Error("L288 clear must not queue the next friend");
  }
  if (after.text.includes("New friend!")) {
    throw new Error("L288 must not open a next-friend naming modal");
  }
  if (after.save.friends.filter((friend) => friend.friendId === "friend_095").length !== 1) {
    throw new Error("L288 must not unlock a Lantana duplicate");
  }
  if (!after.hud.includes("288") && !after.text.includes("288")) {
    throw new Error("Campaign HUD must show through 288 after L288 clear");
  }
  const paradeLocks = {
    friend_001: 3,
    friend_004: 12,
    friend_008: 24,
    friend_009: 27,
    friend_010: 30,
    friend_020: 60,
  };
  for (const [friendId, clearIndex] of Object.entries(paradeLocks)) {
    const friend = after.save.friends.find((row) => row.friendId === friendId);
    if (!friend || friend.clearIndex !== clearIndex) {
      throw new Error(`parade lock ${friendId}@${clearIndex} drifted`);
    }
  }
  if (!after.storageKeys.includes("rescue-cats.save.v2")) {
    throw new Error("progress must stay on localStorage");
  }
  writeFileSync(join(OUT, "report.json"), JSON.stringify({ ok: true, modal }, null, 2));
  console.log("CHAPTER 4 L285 + LANTANA + L286-288 OK");
} catch (error) {
  console.error("CHAPTER 4 LANTANA FAIL", error);
  try {
    const page = (await browser.pages()).at(-1);
    if (page) {
      console.error("page text:\n", await page.evaluate(() => document.body.innerText));
      await page.screenshot({ path: join(OUT, "FAIL.png"), fullPage: true });
    }
  } catch {
    /* ignore */
  }
  process.exitCode = 1;
} finally {
  await browser.close();
}
