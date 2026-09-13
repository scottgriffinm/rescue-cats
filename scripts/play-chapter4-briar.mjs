/**
 * Chapter 4 beat: L105 → Briar@105 naming, then L106–L108.
 * Next friend must not unlock. L10 stays off-path. localStorage only.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter4-briar";
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
  ...Array.from({ length: 94 }, (_, i) => `L${i + 11}`),
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
  bubbles: ["Thistle claimed the fence-post perch."],
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

  await page.goto(`${BASE}/level/L105`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("PERCH STOP"));
  await shot(page, "01_l105_before_briar");
  await play(
    page,
    [
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
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
  console.log("briar naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`Briar prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled");
  if (modal.line !== "Tangled soft. Already claimed the bramble gap.") {
    throw new Error(`Briar display line drifted: ${modal.line}`);
  }
  if (modal.chips.join(",") !== "Briar,Thorn,Hedge") {
    throw new Error(`Briar chips must be Briar/Thorn/Hedge, got ${modal.chips.join("/")}`);
  }
  if (
    modal.chips.includes("Thistle") ||
    modal.chips.includes("Burr") ||
    modal.chips.includes("Bramble") ||
    modal.chips.includes("Pebble") ||
    modal.chips.includes("Plum")
  ) {
    throw new Error("Briar chips collided with Thistle/Plum/Pebble pools");
  }
  if (!modal.hero.includes("/assets/cats/briar_loaf_72.svg")) {
    throw new Error(`Briar hero missing russet loaf: ${modal.hero}`);
  }
  if (modal.hero.includes("/assets/cats/pumpkin_loaf_72.svg")) {
    throw new Error("Briar hero must not use the Pumpkin loaf");
  }
  if (modal.hero.includes("/assets/cats/thistle_loaf_72.svg")) {
    throw new Error("Briar hero must not use the Thistle loaf");
  }
  await shot(page, "02_briar_naming");

  await page.click('[aria-label="Name suggestions"] button');
  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () =>
      (document.body.innerText || "").includes("Briar") &&
      ((document.body.innerText || "").includes("bramble gap") ||
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
  if (!yard.save.friends.some((friend) => friend.friendId === "friend_035")) {
    throw new Error("Briar was not named");
  }
  if (yard.save.friends.find((friend) => friend.friendId === "friend_035")?.name !== "Briar") {
    throw new Error("Briar name was not kept");
  }
  if (yard.save.friends.some((friend) => friend.friendId === "friend_036")) {
    throw new Error("friend_036 must not unlock");
  }
  if (
    !yard.imgs.includes("/assets/cats/briar_loaf_72.svg") &&
    !yard.imgs.includes("/assets/cats/briar_loaf_48.svg")
  ) {
    throw new Error(`yard missing Briar russet loaf: ${yard.imgs.filter((src) => src?.includes("loaf")).join(",")}`);
  }
  if (!yard.text.includes("bramble gap") && !yard.text.includes("Briar")) {
    throw new Error("yard missing Briar bramble-gap line");
  }
  if (yard.phoneFrame) throw new Error("GameShell must stay full-viewport");
  await shot(page, "03_briar_yard");

  await page.goto(`${BASE}/level/L106`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("VINE CUT"));
  await play(
    page,
    [
      ["orange", "ArrowRight"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowRight"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowUp"],
    ],
    "Home",
  );

  await page.goto(`${BASE}/level/L107`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("THORN GAP"));
  await play(
    page,
    [
      ["orange", "ArrowUp"],
      ["black", "ArrowLeft"],
      ["black", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["black", "ArrowRight"],
      ["orange", "ArrowLeft"],
      ["black", "ArrowDown"],
      ["black", "ArrowRight"],
      ["black", "ArrowDown"],
      ["black", "ArrowLeft"],
    ],
    "Home",
  );
  await shot(page, "04_l107_win");

  await page.goto(`${BASE}/level/L108`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("NEST STOP"));
  await play(
    page,
    [
      ["gray", "ArrowDown"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowUp"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["orange", "ArrowUp"],
      ["gray", "ArrowLeft"],
      ["orange", "ArrowRight"],
      ["gray", "ArrowRight"],
    ],
    "Home",
  );
  await shot(page, "05_l108_win");

  const after = await page.evaluate(() => ({
    save: JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
    text: document.body.innerText,
    storageKeys: Object.keys(localStorage),
  }));
  for (const id of ["L105", "L106", "L107", "L108"]) {
    if (!after.save.completedIds.includes(id)) {
      throw new Error(`${id} not marked complete: ${after.save.completedIds.join(",")}`);
    }
  }
  if (after.save.completedIds.includes("L10")) {
    throw new Error("L10 must stay off the campaign path");
  }
  if (after.save.friends.some((friend) => friend.friendId === "friend_036")) {
    throw new Error("friend_036 must not unlock this slice");
  }
  if (after.save.pendingUnlocks.some((pending) => pending.friendId === "friend_036")) {
    throw new Error("L108 clear must not queue the next friend");
  }
  if (after.text.includes("New friend!")) {
    throw new Error("L108 must not open a next-friend naming modal");
  }
  if (after.save.friends.filter((friend) => friend.friendId === "friend_035").length !== 1) {
    throw new Error("L108 must not unlock a Briar duplicate");
  }
  if (!after.storageKeys.includes("rescue-cats.save.v2")) {
    throw new Error("progress must stay on localStorage");
  }
  writeFileSync(join(OUT, "report.json"), JSON.stringify({ ok: true, modal }, null, 2));
  console.log("CHAPTER 4 L105 + BRIAR + L106-108 OK");
} catch (error) {
  console.error("CHAPTER 4 BRIAR FAIL", error);
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
