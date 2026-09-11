/**
 * Chapter 3 beat: L24 → Pumpkin@24 naming + eight-cat yard, then L25–L27.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter3-pumpkin";
const CHROME = process.env.CHROME_PATH ?? "/usr/bin/google-chrome";

mkdirSync(OUT, { recursive: true });

const DIR_LABEL = {
  ArrowDown: "Slide south",
  ArrowRight: "Slide east",
  ArrowUp: "Slide north",
  ArrowLeft: "Slide west",
};

const SEED = {
  version: 3,
  completedIds: [
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "L6",
    "L7",
    "L8",
    "L9",
    "L11",
    "L12",
    "L13",
    "L14",
    "L15",
    "L16",
    "L17",
    "L18",
    "L19",
    "L20",
    "L21",
    "L22",
    "L23",
  ],
  clearCount: 22,
  friends: [
    {
      instanceId: "inst-mango",
      friendId: "friend_001",
      phenotypeId: "pheno_dsh_orange_mackerel_regular_regular",
      name: "Mango",
      rescuedAt: Date.now(),
      clearIndex: 3,
      roost: 0,
      favoriteToy: "paper bag",
      firstNight: false,
    },
    {
      instanceId: "inst-ink",
      friendId: "friend_002",
      phenotypeId: "pheno_dsh_gray_solid_regular_regular",
      name: "Ink",
      rescuedAt: Date.now(),
      clearIndex: 6,
      roost: 1,
      favoriteToy: "wool cave",
      firstNight: false,
    },
    {
      instanceId: "inst-biscuit",
      friendId: "friend_003",
      phenotypeId: "pheno_dsh_cream_solid_regular_regular",
      name: "Biscuit",
      rescuedAt: Date.now(),
      clearIndex: 9,
      roost: 2,
      favoriteToy: "crinkle mouse",
      firstNight: false,
    },
    {
      instanceId: "inst-tux",
      friendId: "friend_004",
      phenotypeId: "pheno_tuxedo_black_bicolor_regular_regular",
      name: "Tux",
      rescuedAt: Date.now(),
      clearIndex: 12,
      roost: 3,
      favoriteToy: "bowtie",
      firstNight: false,
    },
    {
      instanceId: "inst-ghost",
      friendId: "friend_005",
      phenotypeId: "pheno_dsh_cream_solid_regular_regular_ghost",
      name: "Ghost",
      rescuedAt: Date.now(),
      clearIndex: 15,
      roost: 4,
      favoriteToy: "sunbeam",
      firstNight: false,
    },
    {
      instanceId: "inst-mist",
      friendId: "friend_006",
      phenotypeId: "pheno_dsh_gray_mackerel_regular_regular",
      name: "Mist",
      rescuedAt: Date.now(),
      clearIndex: 18,
      roost: 5,
      favoriteToy: "morning fog",
      firstNight: false,
    },
    {
      instanceId: "inst-pepper",
      friendId: "friend_007",
      phenotypeId: "pheno_tabby_orange_spotted_regular_regular",
      name: "Pepper",
      rescuedAt: Date.now(),
      clearIndex: 21,
      roost: 6,
      favoriteToy: "bell",
      firstNight: false,
    },
  ],
  pendingUnlocks: [],
  hearts: 88,
  stars: 50,
  tickets: 1,
  furniture: ["furn_box_cardboard", "furn_scratch_post", "furn_bed_cushion"],
  cosmetics: [],
  levelStrikes: {},
  seenCoach: true,
  bubbles: ["Pepper batted the bell."],
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
  if (who === 0 || who === 1) {
    const buttons = await page.$$('button[aria-label="Select cat"]');
    if (!buttons[who]) throw new Error(`missing uncolored cat ${who}`);
    await buttons[who].click();
    return;
  }
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
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--window-size=430,900"],
  defaultViewport: { width: 390, height: 844, deviceScaleFactor: 2 },
});

try {
  const page = await browser.newPage();
  page.setDefaultTimeout(15000);
  await page.goto(BASE, { waitUntil: "networkidle0" });
  await page.evaluate((save) => {
    localStorage.setItem("rescue-cats.save.v2", JSON.stringify(save));
  }, SEED);
  await page.reload({ waitUntil: "networkidle0" });

  await page.goto(`${BASE}/level/L24`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("PARK HIGH"));
  await shot(page, "01_l24_before_pumpkin");
  await play(
    page,
    [
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowUp"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowLeft"],
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
  console.log("pumpkin naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`Pumpkin prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled");
  if (modal.line !== "Seasonal energy, year-round appetite.") {
    throw new Error(`Pumpkin display line drifted: ${modal.line}`);
  }
  if (modal.chips.join(",") !== "Pumpkin,Squash,Ember") {
    throw new Error(`Pumpkin chips must be Pumpkin/Squash/Ember, got ${modal.chips.join("/")}`);
  }
  if (!modal.hero.includes("/assets/cats/pumpkin_loaf_72.svg")) {
    throw new Error(`Pumpkin hero missing classic orange loaf: ${modal.hero}`);
  }
  if (modal.hero.includes("/assets/cats/ginger_loaf_72.svg")) {
    throw new Error("Pumpkin hero must not use the Mango loaf");
  }
  if (modal.hero.includes("/assets/cats/pepper_loaf_72.svg")) {
    throw new Error("Pumpkin hero must not use the Pepper loaf");
  }
  await shot(page, "02_pumpkin_naming");

  await page.click('[aria-label="Name suggestions"] button');
  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () =>
      (document.body.innerText || "").includes("Pumpkin") &&
      ((document.body.innerText || "").includes("moved in") ||
        (document.body.innerText || "").includes("are home") ||
        (document.body.innerText || "").includes("is home") ||
        (document.body.innerText || "").includes("rolled in for the season")),
    { timeout: 8000 },
  );

  const yard = await page.evaluate(() => ({
    text: document.body.innerText,
    imgs: [...document.querySelectorAll("img")].map((img) => img.getAttribute("src")),
    save: JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
    friendsRow: (() => {
      const row = document.querySelector("ul.flex");
      if (!row) return { wrap: true, count: 0 };
      const style = getComputedStyle(row);
      return {
        wrap: style.flexWrap !== "nowrap",
        count: row.querySelectorAll("li").length,
      };
    })(),
  }));
  console.log(
    "yard friends",
    yard.save.friends.map((friend) => friend.friendId),
    "furniture",
    yard.save.furniture,
    "friends row",
    yard.friendsRow,
  );
  if (!yard.save.friends.some((friend) => friend.friendId === "friend_008")) {
    throw new Error("Pumpkin was not named");
  }
  if (yard.save.friends.find((friend) => friend.friendId === "friend_008")?.name !== "Pumpkin") {
    throw new Error("Pumpkin name was not kept");
  }
  if (yard.save.friends.length < 8) {
    throw new Error("porch must have eight named friends after Pumpkin");
  }
  if (yard.friendsRow.wrap) {
    throw new Error("Friends/Met row must stay on one line at phone width");
  }
  if (yard.friendsRow.count < 8) {
    throw new Error("Friends row must show eight cats");
  }
  const giftedNew = yard.save.furniture.filter(
    (sku) => !["furn_box_cardboard", "furn_scratch_post", "furn_bed_cushion"].includes(sku),
  );
  if (giftedNew.length !== 0) {
    throw new Error(`clear 24 must gift nothing, got ${giftedNew.join(",")}`);
  }
  if (!yard.imgs.includes("/assets/cats/pumpkin_loaf_72.svg")) {
    throw new Error("yard missing Pumpkin classic loaf");
  }
  if (!yard.imgs.includes("/assets/cats/pepper_loaf_72.svg")) {
    throw new Error("yard missing Pepper spotted loaf after Pumpkin");
  }
  if (!yard.imgs.includes("/assets/cats/mist_loaf_72.svg")) {
    throw new Error("yard missing Mist gray-mackerel loaf after Pumpkin");
  }
  if (!yard.imgs.includes("/assets/cats/ghost_loaf_72.svg")) {
    throw new Error("yard missing Ghost pale loaf after Pumpkin");
  }
  if (!yard.imgs.includes("/assets/cats/tux_loaf_72.svg")) {
    throw new Error("yard missing Tux tuxedo loaf after Pumpkin");
  }
  if (!yard.imgs.includes("/assets/cats/cream_loaf_72.svg")) {
    throw new Error("yard missing Biscuit cream loaf after Pumpkin");
  }
  if (!yard.imgs.includes("/assets/cats/ink_loaf_72.svg")) {
    throw new Error("yard missing Ink loaf after Pumpkin");
  }
  if (!yard.imgs.includes("/assets/furniture/boxBed.svg")) {
    throw new Error("yard missing Mango box after Pumpkin");
  }
  if (!yard.imgs.includes("/assets/furniture/sunCushion.svg")) {
    throw new Error("yard missing Sun Cushion after Pumpkin");
  }
  if (!yard.imgs.includes("/assets/ui/bubble_bang.svg")) {
    throw new Error("yard missing Pumpkin first-night !");
  }
  if (yard.imgs.includes("/assets/furniture/scratcher.svg") === false) {
    throw new Error("owned scratcher must stay on the porch");
  }
  if (!yard.text.includes("Mini Cat Tree")) {
    throw new Error("Mini Cat Tree shop card missing when not owned");
  }
  if (!yard.imgs.includes("/assets/furniture/miniTree.svg")) {
    throw new Error("Mini Cat Tree shop art must be miniTree.svg");
  }
  if (!yard.text.includes("Park Low") && !/Continue · Park Low/i.test(yard.text)) {
    throw new Error("L25 Park Low must be next on the campaign path");
  }
  await shot(page, "03_pumpkin_yard");

  await page.goto(`${BASE}/level/L25`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("PARK LOW"));
  await shot(page, "04_l25_park_low");
  await play(
    page,
    [
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["orange", "ArrowDown"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowRight"],
    ],
    "Home",
  );

  await page.goto(`${BASE}/level/L26`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("THREAD EAST"));
  await play(
    page,
    [
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowUp"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowDown"],
    ],
    "Home",
  );
  await shot(page, "05_l26_win");

  await page.goto(`${BASE}/level/L27`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("THREAD BLACK"));
  await play(
    page,
    [
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["black", "ArrowLeft"],
      ["orange", "ArrowUp"],
      ["black", "ArrowRight"],
      ["black", "ArrowDown"],
      ["black", "ArrowLeft"],
      ["orange", "ArrowRight"],
      ["black", "ArrowDown"],
    ],
    "Home",
  );
  await shot(page, "06_l27_win");

  const after = await page.evaluate(() => ({
    save: JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
    text: document.body.innerText,
  }));
  if (!after.save.completedIds.includes("L25") || !after.save.completedIds.includes("L26") || !after.save.completedIds.includes("L27")) {
    throw new Error(`L25–L27 not marked complete: ${after.save.completedIds.join(",")}`);
  }
  if (after.save.completedIds.includes("L10")) {
    throw new Error("L10 must stay off the campaign path");
  }
  if (after.save.friends.some((friend) => friend.friendId === "friend_009")) {
    throw new Error("Shadow must not unlock this slice");
  }
  if (after.save.pendingUnlocks.some((pending) => pending.friendId === "friend_009")) {
    throw new Error("L27 clear must not queue Shadow naming");
  }
  if (after.text.includes("New friend!")) {
    throw new Error("L27 must not open a Shadow naming modal");
  }
  if (after.save.friends.filter((friend) => friend.friendId === "friend_008").length !== 1) {
    throw new Error("L27 must not unlock a Pumpkin duplicate");
  }
  writeFileSync(join(OUT, "report.json"), JSON.stringify({ ok: true, modal }, null, 2));
  console.log("CHAPTER 3 L24 + PUMPKIN + L25-27 OK");
} catch (error) {
  console.error("CHAPTER 3 PUMPKIN FAIL", error);
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
