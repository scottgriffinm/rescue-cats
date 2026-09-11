/**
 * Chapter 3 beat: L21 → Pepper@21 naming + seven-cat yard, then L22–L24.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter3-pepper";
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
  ],
  clearCount: 19,
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
  ],
  pendingUnlocks: [],
  hearts: 74,
  stars: 42,
  tickets: 1,
  furniture: ["furn_box_cardboard", "furn_scratch_post", "furn_bed_cushion"],
  cosmetics: [],
  levelStrikes: {},
  seenCoach: true,
  bubbles: ["Mist fogged onto the porch."],
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

  await page.goto(`${BASE}/level/L21`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("THREAD PARK"));
  await shot(page, "01_l21_before_pepper");
  await play(
    page,
    [
      ["gray", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowLeft"],
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
  console.log("pepper naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`Pepper prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled");
  if (modal.line !== "A little spice. Already batting the bell.") {
    throw new Error(`Pepper display line drifted: ${modal.line}`);
  }
  if (modal.chips.join(",") !== "Pepper,Spice,Pip") {
    throw new Error(`Pepper chips must be Pepper/Spice/Pip, got ${modal.chips.join("/")}`);
  }
  if (!modal.hero.includes("/assets/cats/pepper_loaf_72.svg")) {
    throw new Error(`Pepper hero missing spotted orange loaf: ${modal.hero}`);
  }
  if (modal.hero.includes("/assets/cats/ginger_loaf_72.svg")) {
    throw new Error("Pepper hero must not use the Mango loaf");
  }
  if (modal.hero.includes("/assets/cats/mist_loaf_72.svg")) {
    throw new Error("Pepper hero must not use the Mist loaf");
  }
  await shot(page, "02_pepper_naming");

  await page.click('[aria-label="Name suggestions"] button');
  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () =>
      (document.body.innerText || "").includes("Pepper") &&
      ((document.body.innerText || "").includes("moved in") ||
        (document.body.innerText || "").includes("are home") ||
        (document.body.innerText || "").includes("is home") ||
        (document.body.innerText || "").includes("batted the bell")),
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
  if (!yard.save.friends.some((friend) => friend.friendId === "friend_007")) {
    throw new Error("Pepper was not named");
  }
  if (yard.save.friends.find((friend) => friend.friendId === "friend_007")?.name !== "Pepper") {
    throw new Error("Pepper name was not kept");
  }
  if (yard.save.friends.length < 7) {
    throw new Error("porch must have seven named friends after Pepper");
  }
  if (yard.friendsRow.wrap) {
    throw new Error("Friends/Met row must stay on one line at phone width");
  }
  if (yard.friendsRow.count < 7) {
    throw new Error("Friends row must show seven cats");
  }
  const giftedNew = yard.save.furniture.filter(
    (sku) => !["furn_box_cardboard", "furn_scratch_post", "furn_bed_cushion"].includes(sku),
  );
  if (giftedNew.length !== 0) {
    throw new Error(`clear 21 must gift nothing, got ${giftedNew.join(",")}`);
  }
  if (!yard.imgs.includes("/assets/cats/pepper_loaf_72.svg")) {
    throw new Error("yard missing Pepper spotted loaf");
  }
  if (!yard.imgs.includes("/assets/cats/mist_loaf_72.svg")) {
    throw new Error("yard missing Mist gray-mackerel loaf after Pepper");
  }
  if (!yard.imgs.includes("/assets/cats/ghost_loaf_72.svg")) {
    throw new Error("yard missing Ghost pale loaf after Pepper");
  }
  if (!yard.imgs.includes("/assets/cats/tux_loaf_72.svg")) {
    throw new Error("yard missing Tux tuxedo loaf after Pepper");
  }
  if (!yard.imgs.includes("/assets/cats/cream_loaf_72.svg")) {
    throw new Error("yard missing Biscuit cream loaf after Pepper");
  }
  if (!yard.imgs.includes("/assets/cats/ink_loaf_72.svg")) {
    throw new Error("yard missing Ink loaf after Pepper");
  }
  if (!yard.imgs.includes("/assets/furniture/boxBed.svg")) {
    throw new Error("yard missing Mango box after Pepper");
  }
  if (!yard.imgs.includes("/assets/furniture/sunCushion.svg")) {
    throw new Error("yard missing Sun Cushion after Pepper");
  }
  if (!yard.imgs.includes("/assets/ui/bubble_bang.svg")) {
    throw new Error("yard missing Pepper first-night !");
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
  if (!yard.text.includes("Hold West") && !/Continue · Hold West/i.test(yard.text)) {
    throw new Error("L22 Hold West must be next on the campaign path");
  }
  await shot(page, "03_pepper_yard");

  await page.goto(`${BASE}/level/L22`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("HOLD WEST"));
  await shot(page, "04_l22_hold_west");
  await play(
    page,
    [
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowRight"],
    ],
    "Home",
  );

  await page.goto(`${BASE}/level/L23`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("HOLD CORNER"));
  await play(
    page,
    [
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["orange", "ArrowUp"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowDown"],
    ],
    "Home",
  );
  await shot(page, "05_l23_win");

  await page.goto(`${BASE}/level/L24`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("PARK HIGH"));
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
    "Home",
  );
  await shot(page, "06_l24_win");

  const after = await page.evaluate(() => JSON.parse(localStorage.getItem("rescue-cats.save.v2")));
  if (!after.completedIds.includes("L22") || !after.completedIds.includes("L23") || !after.completedIds.includes("L24")) {
    throw new Error(`L22–L24 not marked complete: ${after.completedIds.join(",")}`);
  }
  if (after.completedIds.includes("L10")) {
    throw new Error("L10 must stay off the campaign path");
  }
  if (after.friends.some((friend) => friend.friendId === "friend_008")) {
    throw new Error("Pumpkin must not unlock this slice");
  }
  if (after.pendingUnlocks.some((pending) => pending.friendId === "friend_008")) {
    throw new Error("L24 clear must not queue Pumpkin naming");
  }
  if (after.friends.filter((friend) => friend.friendId === "friend_007").length !== 1) {
    throw new Error("L24 must not unlock a Pepper duplicate");
  }
  writeFileSync(join(OUT, "report.json"), JSON.stringify({ ok: true, modal }, null, 2));
  console.log("CHAPTER 3 L21 + PEPPER + L22-24 OK");
} catch (error) {
  console.error("CHAPTER 3 PEPPER FAIL", error);
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
