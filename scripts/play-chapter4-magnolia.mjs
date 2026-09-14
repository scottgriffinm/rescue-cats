/**
 * Chapter 4 beat: L165 → Magnolia@165 naming, then L166–L168.
 * Next friend must not unlock. L10 stays off-path. localStorage only.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter4-magnolia";
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
  ...Array.from({ length: 154 }, (_, i) => `L${i + 11}`),
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
  bubbles: ["Jasmine claimed the jasmine bloom."],
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

  await page.goto(`${BASE}/level/L165`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("BLOOM STOP"));
  await shot(page, "01_l165_before_magnolia");
  await play(
    page,
    [
      ["gray", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowDown"],
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
  console.log("magnolia naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`Magnolia prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled");
  if (modal.line !== "Soft cream. Already claimed the magnolia bowl.") {
    throw new Error(`Magnolia display line drifted: ${modal.line}`);
  }
  if (modal.chips.join(",") !== "Magnolia,Cream,Blush") {
    throw new Error(`Magnolia chips must be Magnolia/Cream/Blush, got ${modal.chips.join("/")}`);
  }
  if (
    modal.chips.includes("Jasmine") ||
    modal.chips.includes("Blossom") ||
    modal.chips.includes("Honey") ||
    modal.chips.includes("Bergamot") ||
    modal.chips.includes("Citrus") ||
    modal.chips.includes("Earl") ||
    modal.chips.includes("Chamomile") ||
    modal.chips.includes("Daisy") ||
    modal.chips.includes("Tea") ||
    modal.chips.includes("Lavender") ||
    modal.chips.includes("Bloom") ||
    modal.chips.includes("Calm") ||
    modal.chips.includes("Catnip") ||
    modal.chips.includes("Nip") ||
    modal.chips.includes("Dream") ||
    modal.chips.includes("Mint") ||
    modal.chips.includes("Chill") ||
    modal.chips.includes("Frost") ||
    modal.chips.includes("Ivory") ||
    modal.chips.includes("Sheer") ||
    modal.chips.includes("Pebble")
  ) {
    throw new Error("Magnolia chips collided with Jasmine/Bergamot/Chamomile/Lavender/Catnip/Mint/Ivory/Pebble pools");
  }
  if (!modal.hero.includes("/assets/cats/magnolia_loaf_72.svg")) {
    throw new Error(`Magnolia hero missing cream-magnolia loaf: ${modal.hero}`);
  }
  if (modal.hero.includes("/assets/cats/jasmine_loaf_72.svg")) {
    throw new Error("Magnolia hero must not use the Jasmine loaf");
  }
  if (modal.hero.includes("/assets/cats/bergamot_loaf_72.svg")) {
    throw new Error("Magnolia hero must not use the Bergamot loaf");
  }
  if (modal.hero.includes("/assets/cats/chamomile_loaf_72.svg")) {
    throw new Error("Magnolia hero must not use the Chamomile loaf");
  }
  if (modal.hero.includes("/assets/cats/lavender_loaf_72.svg")) {
    throw new Error("Magnolia hero must not use the Lavender loaf");
  }
  if (modal.hero.includes("/assets/cats/catnip_loaf_72.svg")) {
    throw new Error("Magnolia hero must not use the Catnip loaf");
  }
  if (modal.hero.includes("/assets/cats/mint_loaf_72.svg")) {
    throw new Error("Magnolia hero must not use the Mint loaf");
  }
  if (modal.hero.includes("/assets/cats/ivory_loaf_72.svg")) {
    throw new Error("Magnolia hero must not use the Ivory loaf");
  }
  await shot(page, "02_magnolia_naming");

  await page.click('[aria-label="Name suggestions"] button');
  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () =>
      (document.body.innerText || "").includes("Magnolia") &&
      ((document.body.innerText || "").includes("bowl") ||
        (document.body.innerText || "").includes("magnolia") ||
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
  if (!yard.save.friends.some((friend) => friend.friendId === "friend_055")) {
    throw new Error("Magnolia was not named");
  }
  if (yard.save.friends.find((friend) => friend.friendId === "friend_055")?.name !== "Magnolia") {
    throw new Error("Magnolia name was not kept");
  }
  if (yard.save.friends.some((friend) => friend.friendId === "friend_056")) {
    throw new Error("friend_056 must not unlock");
  }
  if (
    !yard.imgs.includes("/assets/cats/magnolia_loaf_72.svg") &&
    !yard.imgs.includes("/assets/cats/magnolia_loaf_48.svg")
  ) {
    throw new Error(`yard missing Magnolia cream-magnolia loaf: ${yard.imgs.filter((src) => src?.includes("loaf")).join(",")}`);
  }
  if (!yard.text.includes("bowl") && !yard.text.includes("Magnolia")) {
    throw new Error("yard missing Magnolia magnolia bowl line");
  }
  if (yard.phoneFrame) throw new Error("GameShell must stay full-viewport");
  await shot(page, "03_magnolia_yard");

  await page.goto(`${BASE}/level/L166`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("CREAM CUT"));
  await play(
    page,
    [
      ["orange", "ArrowLeft"],
      ["orange", "ArrowUp"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowLeft"],
    ],
    "Home",
  );

  await page.goto(`${BASE}/level/L167`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("BLUSH GAP"));
  await play(
    page,
    [
      ["black", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["black", "ArrowUp"],
      ["black", "ArrowLeft"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["black", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowLeft"],
      ["orange", "ArrowDown"],
    ],
    "Home",
  );
  await shot(page, "04_l167_win");

  await page.goto(`${BASE}/level/L168`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("BOWL STOP"));
  await play(
    page,
    [
      ["gray", "ArrowRight"],
      ["gray", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowLeft"],
    ],
    "Home",
  );
  await shot(page, "05_l168_win");

  const after = await page.evaluate(() => ({
    save: JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
    text: document.body.innerText,
    storageKeys: Object.keys(localStorage),
  }));
  for (const id of ["L165", "L166", "L167", "L168"]) {
    if (!after.save.completedIds.includes(id)) {
      throw new Error(`${id} not marked complete: ${after.save.completedIds.join(",")}`);
    }
  }
  if (after.save.completedIds.includes("L10")) {
    throw new Error("L10 must stay off the campaign path");
  }
  if (after.save.friends.some((friend) => friend.friendId === "friend_056")) {
    throw new Error("friend_056 must not unlock this slice");
  }
  if (after.save.pendingUnlocks.some((pending) => pending.friendId === "friend_056")) {
    throw new Error("L168 clear must not queue the next friend");
  }
  if (after.text.includes("New friend!")) {
    throw new Error("L168 must not open a next-friend naming modal");
  }
  if (after.save.friends.filter((friend) => friend.friendId === "friend_055").length !== 1) {
    throw new Error("L168 must not unlock a Magnolia duplicate");
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
  console.log("CHAPTER 4 L165 + MAGNOLIA + L166-168 OK");
} catch (error) {
  console.error("CHAPTER 4 MAGNOLIA FAIL", error);
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
