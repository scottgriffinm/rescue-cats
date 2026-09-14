/**
 * Chapter 4 beat: L111 → Nettle@111 naming, then L112–L114.
 * Next friend must not unlock. L10 stays off-path. localStorage only.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter4-nettle";
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
  ...Array.from({ length: 100 }, (_, i) => `L${i + 11}`),
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
  bubbles: ["Ivy claimed the porch rail."],
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

  await page.goto(`${BASE}/level/L111`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("PORCH STOP"));
  await shot(page, "01_l111_before_nettle");
  await play(
    page,
    [
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["gray", "ArrowLeft"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["orange", "ArrowUp"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowDown"],
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
  console.log("nettle naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`Nettle prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled");
  if (modal.line !== "Stings soft. Already claimed the shady under-rail.") {
    throw new Error(`Nettle display line drifted: ${modal.line}`);
  }
  if (modal.chips.join(",") !== "Nettle,Sting,Leaf") {
    throw new Error(`Nettle chips must be Nettle/Sting/Leaf, got ${modal.chips.join("/")}`);
  }
  if (
    modal.chips.includes("Ivy") ||
    modal.chips.includes("Tendril") ||
    modal.chips.includes("Climb") ||
    modal.chips.includes("Pebble") ||
    modal.chips.includes("Briar")
  ) {
    throw new Error("Nettle chips collided with Ivy/Briar/Pebble pools");
  }
  if (!modal.hero.includes("/assets/cats/nettle_loaf_72.svg")) {
    throw new Error(`Nettle hero missing sage-green-gray loaf: ${modal.hero}`);
  }
  if (modal.hero.includes("/assets/cats/ivy_loaf_72.svg")) {
    throw new Error("Nettle hero must not use the Ivy loaf");
  }
  if (modal.hero.includes("/assets/cats/basil_loaf_72.svg")) {
    throw new Error("Nettle hero must not use the Basil loaf");
  }
  await shot(page, "02_nettle_naming");

  await page.click('[aria-label="Name suggestions"] button');
  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () =>
      (document.body.innerText || "").includes("Nettle") &&
      ((document.body.innerText || "").includes("under-rail") ||
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
  if (!yard.save.friends.some((friend) => friend.friendId === "friend_037")) {
    throw new Error("Nettle was not named");
  }
  if (yard.save.friends.find((friend) => friend.friendId === "friend_037")?.name !== "Nettle") {
    throw new Error("Nettle name was not kept");
  }
  if (yard.save.friends.some((friend) => friend.friendId === "friend_038")) {
    throw new Error("friend_038 must not unlock");
  }
  if (
    !yard.imgs.includes("/assets/cats/nettle_loaf_72.svg") &&
    !yard.imgs.includes("/assets/cats/nettle_loaf_48.svg")
  ) {
    throw new Error(`yard missing Nettle sage-green-gray loaf: ${yard.imgs.filter((src) => src?.includes("loaf")).join(",")}`);
  }
  if (!yard.text.includes("under-rail") && !yard.text.includes("Nettle")) {
    throw new Error("yard missing Nettle under-rail line");
  }
  if (yard.phoneFrame) throw new Error("GameShell must stay full-viewport");
  await shot(page, "03_nettle_yard");

  await page.goto(`${BASE}/level/L112`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("STEM CUT"));
  await play(
    page,
    [
      ["orange", "ArrowLeft"],
      ["orange", "ArrowDown"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
    ],
    "Home",
  );

  await page.goto(`${BASE}/level/L113`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("STING GAP"));
  await play(
    page,
    [
      ["orange", "ArrowLeft"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowLeft"],
      ["black", "ArrowLeft"],
      ["black", "ArrowUp"],
      ["black", "ArrowRight"],
      ["black", "ArrowUp"],
      ["black", "ArrowLeft"],
      ["orange", "ArrowRight"],
      ["black", "ArrowDown"],
    ],
    "Home",
  );
  await shot(page, "04_l113_win");

  await page.goto(`${BASE}/level/L114`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("UNDER STOP"));
  await play(
    page,
    [
      ["orange", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["orange", "ArrowLeft"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
    ],
    "Home",
  );
  await shot(page, "05_l114_win");

  const after = await page.evaluate(() => ({
    save: JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
    text: document.body.innerText,
    storageKeys: Object.keys(localStorage),
  }));
  for (const id of ["L111", "L112", "L113", "L114"]) {
    if (!after.save.completedIds.includes(id)) {
      throw new Error(`${id} not marked complete: ${after.save.completedIds.join(",")}`);
    }
  }
  if (after.save.completedIds.includes("L10")) {
    throw new Error("L10 must stay off the campaign path");
  }
  if (after.save.friends.some((friend) => friend.friendId === "friend_038")) {
    throw new Error("friend_038 must not unlock this slice");
  }
  if (after.save.pendingUnlocks.some((pending) => pending.friendId === "friend_038")) {
    throw new Error("L114 clear must not queue the next friend");
  }
  if (after.text.includes("New friend!")) {
    throw new Error("L114 must not open a next-friend naming modal");
  }
  if (after.save.friends.filter((friend) => friend.friendId === "friend_037").length !== 1) {
    throw new Error("L114 must not unlock a Nettle duplicate");
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
  console.log("CHAPTER 4 L111 + NETTLE + L112-114 OK");
} catch (error) {
  console.error("CHAPTER 4 NETTLE FAIL", error);
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
