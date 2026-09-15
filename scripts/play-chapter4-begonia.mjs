/**
 * Chapter 4 beat: L252 → Begonia@252 naming, then L253–L255.
 * Next friend must not unlock. L10 stays off-path. localStorage only.
 * L252 queues Begonia pending. L255 queues Ranunculus when friend_085 is present.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter4-begonia";
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
  ...Array.from({ length: 241 }, (_, i) => `L${i + 11}`),
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
  bubbles: ["Anemone claimed the anemone bowl."],
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


  await page.goto(`${BASE}/level/L252`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("WHIRL STOP"));
  await shot(page, "01_l252_before_begonia");
  await play(
    page,
    [
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["black", "ArrowLeft"],
      ["black", "ArrowDown"],
      ["black", "ArrowRight"],
      ["black", "ArrowDown"],
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
  console.log("begonia naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`Begonia prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled");
  if (modal.line !== "Ruffle soft. Already claimed the begonia planter.") {
    throw new Error(`Begonia display line drifted: ${modal.line}`);
  }
  if (modal.chips.join(",") !== "Begonia,Ruffle,Planter") {
    throw new Error(`Begonia chips must be Begonia/Ruffle/Planter, got ${modal.chips.join("/")}`);
  }
  if (
    modal.chips.includes("Buttercup") ||
    modal.chips.includes("Meadow") ||
    modal.chips.includes("Gloss") ||
    modal.chips.includes("Primrose") ||
    modal.chips.includes("Pale") ||
    modal.chips.includes("Dish") ||
    modal.chips.includes("Heather") ||
    modal.chips.includes("Moor") ||
    modal.chips.includes("Sprig") ||
    modal.chips.includes("Marigold") ||
    modal.chips.includes("Gold") ||
    modal.chips.includes("Pot") ||
    modal.chips.includes("Snapdragon") ||
    modal.chips.includes("Jaw") ||
    modal.chips.includes("Perch") ||
    modal.chips.includes("Bluebell") ||
    modal.chips.includes("Cloche") ||
    modal.chips.includes("Ring") ||
    modal.chips.includes("Foxglove") ||
    modal.chips.includes("Tower") ||
    modal.chips.includes("Throat") ||
    modal.chips.includes("Hyacinth") ||
    modal.chips.includes("Cluster") ||
    modal.chips.includes("Bell") ||
    modal.chips.includes("Crocus") ||
    modal.chips.includes("Saffron") ||
    modal.chips.includes("Tip") ||
    modal.chips.includes("Lily") ||
    modal.chips.includes("Pollen") ||
    modal.chips.includes("Crest") ||
    modal.chips.includes("Violet") ||
    modal.chips.includes("Patch") ||
    modal.chips.includes("Moss") ||
    modal.chips.includes("Tulip") ||
    modal.chips.includes("Stem") ||
    modal.chips.includes("Glow") ||
    modal.chips.includes("Poppy") ||
    modal.chips.includes("Capsule") ||
    modal.chips.includes("Silk") ||
    modal.chips.includes("Lotus") ||
    modal.chips.includes("Pad") ||
    modal.chips.includes("Ripple") ||
    modal.chips.includes("Orchid") ||
    modal.chips.includes("Spur") ||
    modal.chips.includes("Veil") ||
    modal.chips.includes("Iris") ||
    modal.chips.includes("Blade") ||
    modal.chips.includes("Dew") ||
    modal.chips.includes("Aster") ||
    modal.chips.includes("Petal") ||
    modal.chips.includes("Drift") ||
    modal.chips.includes("Zinnia") ||
    modal.chips.includes("Quill") ||
    modal.chips.includes("Gleam") ||
    modal.chips.includes("Dahlia") ||
    modal.chips.includes("Spire") ||
    modal.chips.includes("Ember") ||
    modal.chips.includes("Azalea") ||
    modal.chips.includes("Fizz") ||
    modal.chips.includes("Flare") ||
    modal.chips.includes("Peony") ||
    modal.chips.includes("Bud") ||
    modal.chips.includes("Satin") ||
    modal.chips.includes("Camellia") ||
    modal.chips.includes("Wax") ||
    modal.chips.includes("Rose") ||
    modal.chips.includes("Gardenia") ||
    modal.chips.includes("Snow") ||
    modal.chips.includes("Velvet") ||
    modal.chips.includes("Hibiscus") ||
    modal.chips.includes("Roselle") ||
    modal.chips.includes("Punch") ||
    modal.chips.includes("Magnolia") ||
    modal.chips.includes("Cream") ||
    modal.chips.includes("Blush") ||
    modal.chips.includes("Jasmine") ||
    modal.chips.includes("Blossom") ||
    modal.chips.includes("Honey") ||
    modal.chips.includes("Pebble") ||
    modal.chips.includes("Cosmos") ||
    modal.chips.includes("Airy") ||
    modal.chips.includes("Ray") ||
    modal.chips.includes("Clematis") ||
    modal.chips.includes("Vine") ||
    modal.chips.includes("Trellis") ||
    modal.chips.includes("Wisteria") ||
    modal.chips.includes("Cascade") ||
    modal.chips.includes("Arbor") ||
    modal.chips.includes("Anemone") ||
    modal.chips.includes("Wind") ||
    modal.chips.includes("Bowl")
  ) {
    throw new Error("Begonia chips collided with Anemone/Wisteria/Clematis/Cosmos/Buttercup/Primrose/Heather/Marigold/Snapdragon/Bluebell/Foxglove/Hyacinth/Crocus/Lily/Violet/Tulip/Poppy/Lotus/Orchid/Iris/Aster/Zinnia/Dahlia/Azalea/Peony/Camellia/Gardenia/Hibiscus/Magnolia/Jasmine/Pebble pools");
  }
  if (!modal.hero.includes("/assets/cats/begonia_loaf_72.svg")) {
    throw new Error(`Begonia hero missing ruffle loaf: ${modal.hero}`);
  }
  if (modal.hero.includes("/assets/cats/anemone_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Anemone loaf");
  }
  if (modal.hero.includes("/assets/cats/wisteria_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Wisteria loaf");
  }
  if (modal.hero.includes("/assets/cats/clematis_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Clematis loaf");
  }
  if (modal.hero.includes("/assets/cats/cosmos_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Cosmos loaf");
  }
  if (modal.hero.includes("/assets/cats/buttercup_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Buttercup loaf");
  }
  if (modal.hero.includes("/assets/cats/primrose_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Primrose loaf");
  }
  if (modal.hero.includes("/assets/cats/heather_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Heather loaf");
  }
  if (modal.hero.includes("/assets/cats/marigold_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Marigold loaf");
  }
  if (modal.hero.includes("/assets/cats/snapdragon_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Snapdragon loaf");
  }
  if (modal.hero.includes("/assets/cats/bluebell_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Bluebell loaf");
  }
  if (modal.hero.includes("/assets/cats/foxglove_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Foxglove loaf");
  }
  if (modal.hero.includes("/assets/cats/hyacinth_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Hyacinth loaf");
  }
  if (modal.hero.includes("/assets/cats/crocus_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Crocus loaf");
  }
  if (modal.hero.includes("/assets/cats/lily_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Lily loaf");
  }
  if (modal.hero.includes("/assets/cats/violet_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Violet loaf");
  }
  if (modal.hero.includes("/assets/cats/tulip_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Tulip loaf");
  }
  if (modal.hero.includes("/assets/cats/poppy_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Poppy loaf");
  }
  if (modal.hero.includes("/assets/cats/lotus_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Lotus loaf");
  }
  if (modal.hero.includes("/assets/cats/orchid_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Orchid loaf");
  }
  if (modal.hero.includes("/assets/cats/iris_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Iris loaf");
  }
  if (modal.hero.includes("/assets/cats/aster_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Aster loaf");
  }
  if (modal.hero.includes("/assets/cats/zinnia_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Zinnia loaf");
  }
  if (modal.hero.includes("/assets/cats/dahlia_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Dahlia loaf");
  }
  if (modal.hero.includes("/assets/cats/azalea_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Azalea loaf");
  }
  if (modal.hero.includes("/assets/cats/peony_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Peony loaf");
  }
  if (modal.hero.includes("/assets/cats/camellia_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Camellia loaf");
  }
  if (modal.hero.includes("/assets/cats/gardenia_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Gardenia loaf");
  }
  if (modal.hero.includes("/assets/cats/hibiscus_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Hibiscus loaf");
  }
  if (modal.hero.includes("/assets/cats/jasmine_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Jasmine loaf");
  }
  if (modal.hero.includes("/assets/cats/magnolia_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Magnolia loaf");
  }
  if (modal.hero.includes("/assets/cats/lavender_loaf_72.svg")) {
    throw new Error("Begonia hero must not use the Lavender loaf");
  }
  await shot(page, "02_begonia_naming");

  await page.click('[aria-label="Name suggestions"] button');
  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () =>
      (document.body.innerText || "").includes("Begonia") &&
      ((document.body.innerText || "").includes("planter") ||
        (document.body.innerText || "").includes("begonia") ||
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
  if (!yard.save.friends.some((friend) => friend.friendId === "friend_084")) {
    throw new Error("Begonia was not named");
  }
  if (yard.save.friends.find((friend) => friend.friendId === "friend_084")?.name !== "Begonia") {
    throw new Error("Begonia name was not kept");
  }
  if (yard.save.friends.some((friend) => friend.friendId === "friend_085")) {
    throw new Error("friend_085 must not unlock");
  }
  if (
    !yard.imgs.includes("/assets/cats/begonia_loaf_72.svg") &&
    !yard.imgs.includes("/assets/cats/begonia_loaf_48.svg")
  ) {
    throw new Error(`yard missing Begonia ruffle loaf: ${yard.imgs.filter((src) => src?.includes("loaf")).join(",")}`);
  }
  if (!yard.text.includes("planter") && !yard.text.includes("Begonia")) {
    throw new Error("yard missing Begonia begonia planter line");
  }
  if (yard.phoneFrame) throw new Error("GameShell must stay full-viewport");
  await shot(page, "03_begonia_yard");

  await page.goto(`${BASE}/level/L253`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("RUFFLE CUT"));
  await play(
    page,
    [
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowLeft"],
    ],
    "Home",
  );

  await page.goto(`${BASE}/level/L254`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("PLANTER GAP"));
  await play(
    page,
    [
      ["gray", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowUp"],
    ],
    "Home",
  );
  await shot(page, "04_l254_win");

  await page.goto(`${BASE}/level/L255`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("LEAF STOP"));
  await play(
    page,
    [
      ["black", "ArrowUp"],
      ["black", "ArrowRight"],
      ["black", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["black", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["black", "ArrowDown"],
      ["black", "ArrowRight"],
    ],
    "Home",
  );
  await shot(page, "05_l255_win");

  const after = await page.evaluate(() => ({
    save: JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
    text: document.body.innerText,
    storageKeys: Object.keys(localStorage),
    hud: document.body.innerText,
  }));
  for (const id of ["L252", "L253", "L254", "L255"]) {
    if (!after.save.completedIds.includes(id)) {
      throw new Error(`${id} not marked complete: ${after.save.completedIds.join(",")}`);
    }
  }
  if (after.save.completedIds.includes("L10")) {
    throw new Error("L10 must stay off the campaign path");
  }
  if (after.save.friends.some((friend) => friend.friendId === "friend_085")) {
    throw new Error("friend_085 must stay pending, not named, on the Begonia slice");
  }
  if (!after.save.pendingUnlocks.some((pending) => pending.friendId === "friend_085")) {
    throw new Error("L255 clear must queue Ranunculus when friend_085 is present");
  }
  if (after.save.pendingUnlocks.some((pending) => pending.friendId === "friend_086")) {
    throw new Error("L255 clear must not queue friend_086");
  }
  if (!after.text.includes("New friend!")) {
    throw new Error("L255 clear must show Ranunculus pending naming");
  }
  if (after.save.friends.filter((friend) => friend.friendId === "friend_084").length !== 1) {
    throw new Error("L255 must not unlock a Begonia duplicate");
  }
  if (!after.hud.includes("258") && !after.text.includes("258")) {
    throw new Error("Campaign HUD must show through 258 after L255 clear");
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
  console.log("CHAPTER 4 L252 + BEGONIA + L253-255 OK");
} catch (error) {
  console.error("CHAPTER 4 BEGONIA FAIL", error);
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
