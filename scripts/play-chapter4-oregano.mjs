/**
 * Chapter 4 beat: L135 → Oregano@135 naming, then L136–L138.
 * Next friend must not unlock. L10 stays off-path. localStorage only.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter4-oregano";
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
  ...Array.from({ length: 124 }, (_, i) => `L${i + 11}`),
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
  bubbles: ["Tarragon claimed the vinegar cruet."],
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

  await page.goto(`${BASE}/level/L135`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("CRUET STOP"));
  await shot(page, "01_l135_before_oregano");
  await play(
    page,
    [
      ["gray", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowLeft"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
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
  console.log("oregano naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`Oregano prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled");
  if (modal.line !== "Wild dusty. Already claimed the pizza stone.") {
    throw new Error(`Oregano display line drifted: ${modal.line}`);
  }
  if (modal.chips.join(",") !== "Oregano,Wild,Bunch") {
    throw new Error(`Oregano chips must be Oregano/Wild/Bunch, got ${modal.chips.join("/")}`);
  }
  if (
    modal.chips.includes("Tarragon") ||
    modal.chips.includes("Spear") ||
    modal.chips.includes("Bitters") ||
    modal.chips.includes("Dill") ||
    modal.chips.includes("Frondlet") ||
    modal.chips.includes("Seed") ||
    modal.chips.includes("Parsley") ||
    modal.chips.includes("Curl") ||
    modal.chips.includes("Sprig") ||
    modal.chips.includes("Lovage") ||
    modal.chips.includes("Frond") ||
    modal.chips.includes("Fennel") ||
    modal.chips.includes("Pebble") ||
    modal.chips.includes("Chervil")
  ) {
    throw new Error("Oregano chips collided with Tarragon/Dill/Parsley/Lovage/Fennel/Chervil/Pebble pools");
  }
  if (!modal.hero.includes("/assets/cats/oregano_loaf_72.svg")) {
    throw new Error(`Oregano hero missing wild-oregano loaf: ${modal.hero}`);
  }
  if (modal.hero.includes("/assets/cats/tarragon_loaf_72.svg")) {
    throw new Error("Oregano hero must not use the Tarragon loaf");
  }
  if (modal.hero.includes("/assets/cats/dill_loaf_72.svg")) {
    throw new Error("Oregano hero must not use the Dill loaf");
  }
  if (modal.hero.includes("/assets/cats/parsley_loaf_72.svg")) {
    throw new Error("Oregano hero must not use the Parsley loaf");
  }
  if (modal.hero.includes("/assets/cats/lovage_loaf_72.svg")) {
    throw new Error("Oregano hero must not use the Lovage loaf");
  }
  if (modal.hero.includes("/assets/cats/chervil_loaf_72.svg")) {
    throw new Error("Oregano hero must not use the Chervil loaf");
  }
  if (modal.hero.includes("/assets/cats/fennel_loaf_72.svg")) {
    throw new Error("Oregano hero must not use the Fennel loaf");
  }
  if (modal.hero.includes("/assets/cats/basil_loaf_72.svg")) {
    throw new Error("Oregano hero must not use the Basil loaf");
  }
  if (modal.hero.includes("/assets/cats/nettle_loaf_72.svg")) {
    throw new Error("Oregano hero must not use the Nettle loaf");
  }
  await shot(page, "02_oregano_naming");

  await page.click('[aria-label="Name suggestions"] button');
  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () =>
      (document.body.innerText || "").includes("Oregano") &&
      ((document.body.innerText || "").includes("pizza") ||
        (document.body.innerText || "").includes("stone") ||
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
  if (!yard.save.friends.some((friend) => friend.friendId === "friend_045")) {
    throw new Error("Oregano was not named");
  }
  if (yard.save.friends.find((friend) => friend.friendId === "friend_045")?.name !== "Oregano") {
    throw new Error("Oregano name was not kept");
  }
  if (yard.save.friends.some((friend) => friend.friendId === "friend_046")) {
    throw new Error("friend_046 must not unlock");
  }
  if (
    !yard.imgs.includes("/assets/cats/oregano_loaf_72.svg") &&
    !yard.imgs.includes("/assets/cats/oregano_loaf_48.svg")
  ) {
    throw new Error(`yard missing Oregano wild-oregano loaf: ${yard.imgs.filter((src) => src?.includes("loaf")).join(",")}`);
  }
  if (!yard.text.includes("pizza") && !yard.text.includes("Oregano")) {
    throw new Error("yard missing Oregano pizza stone line");
  }
  if (yard.phoneFrame) throw new Error("GameShell must stay full-viewport");
  await shot(page, "03_oregano_yard");

  await page.goto(`${BASE}/level/L136`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("STONE CUT"));
  await play(
    page,
    [
      ["gray", "ArrowRight"],
      ["orange", "ArrowRight"],
      ["gray", "ArrowLeft"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["gray", "ArrowUp"],
    ],
    "Home",
  );

  await page.goto(`${BASE}/level/L137`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("WILD GAP"));
  await play(
    page,
    [
      ["orange", "ArrowLeft"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["black", "ArrowDown"],
      ["black", "ArrowLeft"],
      ["black", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["black", "ArrowUp"],
      ["black", "ArrowRight"],
      ["black", "ArrowDown"],
    ],
    "Home",
  );
  await shot(page, "04_l137_win");

  await page.goto(`${BASE}/level/L138`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("PIZZA STOP"));
  await play(
    page,
    [
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["orange", "ArrowUp"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowLeft"],
      ["orange", "ArrowDown"],
      ["gray", "ArrowLeft"],
    ],
    "Home",
  );
  await shot(page, "05_l138_win");

  const after = await page.evaluate(() => ({
    save: JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
    text: document.body.innerText,
    storageKeys: Object.keys(localStorage),
  }));
  for (const id of ["L135", "L136", "L137", "L138"]) {
    if (!after.save.completedIds.includes(id)) {
      throw new Error(`${id} not marked complete: ${after.save.completedIds.join(",")}`);
    }
  }
  if (after.save.completedIds.includes("L10")) {
    throw new Error("L10 must stay off the campaign path");
  }
  if (after.save.friends.some((friend) => friend.friendId === "friend_046")) {
    throw new Error("friend_046 must not unlock this slice");
  }
  if (after.save.pendingUnlocks.some((pending) => pending.friendId === "friend_046")) {
    throw new Error("L138 clear must not queue the next friend");
  }
  if (after.text.includes("New friend!")) {
    throw new Error("L138 must not open a next-friend naming modal");
  }
  if (after.save.friends.filter((friend) => friend.friendId === "friend_045").length !== 1) {
    throw new Error("L138 must not unlock an Oregano duplicate");
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
  console.log("CHAPTER 4 L135 + OREGANO + L136-138 OK");
} catch (error) {
  console.error("CHAPTER 4 OREGANO FAIL", error);
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
