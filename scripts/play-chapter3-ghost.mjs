/**
 * Chapter 3 beat: L15 → Ghost@15 naming + five-cat yard, then L16–L18.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter3-ghost";
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
  completedIds: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L11", "L12", "L13", "L14"],
  clearCount: 13,
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
  ],
  pendingUnlocks: [],
  hearts: 56,
  stars: 30,
  tickets: 1,
  furniture: ["furn_box_cardboard", "furn_scratch_post", "furn_bed_cushion"],
  cosmetics: [],
  levelStrikes: {},
  seenCoach: true,
  bubbles: ["Tux dressed for the porch."],
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

  await page.goto(`${BASE}/level/L15`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("THREAD BOTTOM"));
  await shot(page, "01_l15_before_ghost");
  await play(
    page,
    [
      ["orange", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowRight"],
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
  console.log("ghost naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`Ghost prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled");
  if (modal.line !== "A pale loaf. Appears when the sun hits the porch.") {
    throw new Error(`Ghost display line drifted: ${modal.line}`);
  }
  if (modal.chips.join(",") !== "Ghost,Wisp,Pearl") {
    throw new Error(`Ghost chips must be Ghost/Wisp/Pearl, got ${modal.chips.join("/")}`);
  }
  if (!modal.hero.includes("/assets/cats/ghost_loaf_72.svg")) {
    throw new Error(`Ghost hero missing pale loaf: ${modal.hero}`);
  }
  await shot(page, "02_ghost_naming");

  await page.click('[aria-label="Name suggestions"] button');
  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () =>
      (document.body.innerText || "").includes("Ghost") &&
      ((document.body.innerText || "").includes("moved in") ||
        (document.body.innerText || "").includes("are home") ||
        (document.body.innerText || "").includes("is home") ||
        (document.body.innerText || "").includes("appeared on the porch")),
    { timeout: 8000 },
  );

  const yard = await page.evaluate(() => ({
    text: document.body.innerText,
    imgs: [...document.querySelectorAll("img")].map((img) => img.getAttribute("src")),
    save: JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
  }));
  console.log(
    "yard friends",
    yard.save.friends.map((friend) => friend.friendId),
    "furniture",
    yard.save.furniture,
  );
  if (!yard.save.friends.some((friend) => friend.friendId === "friend_005")) {
    throw new Error("Ghost was not named");
  }
  if (yard.save.friends.find((friend) => friend.friendId === "friend_005")?.name !== "Ghost") {
    throw new Error("Ghost name was not kept");
  }
  if (yard.save.friends.length < 5) {
    throw new Error("porch must have five named friends after Ghost");
  }
  const giftedNew = yard.save.furniture.filter(
    (sku) => !["furn_box_cardboard", "furn_scratch_post", "furn_bed_cushion"].includes(sku),
  );
  if (giftedNew.length !== 0) {
    throw new Error(`clear 15 must gift nothing, got ${giftedNew.join(",")}`);
  }
  if (!yard.imgs.includes("/assets/cats/ghost_loaf_72.svg")) {
    throw new Error("yard missing Ghost pale loaf");
  }
  if (!yard.imgs.includes("/assets/cats/tux_loaf_72.svg")) {
    throw new Error("yard missing Tux tuxedo loaf after Ghost");
  }
  if (!yard.imgs.includes("/assets/cats/cream_loaf_72.svg")) {
    throw new Error("yard missing Biscuit cream loaf after Ghost");
  }
  if (!yard.imgs.includes("/assets/cats/ink_loaf_72.svg")) {
    throw new Error("yard missing Ink loaf after Ghost");
  }
  if (!yard.imgs.includes("/assets/furniture/boxBed.svg")) {
    throw new Error("yard missing Mango box after Ghost");
  }
  if (!yard.imgs.includes("/assets/furniture/sunCushion.svg")) {
    throw new Error("yard missing Sun Cushion after Ghost");
  }
  if (!yard.imgs.includes("/assets/ui/bubble_bang.svg")) {
    throw new Error("yard missing Ghost first-night !");
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
  if (!yard.text.includes("Hold Still") && !/Continue · Hold Still/i.test(yard.text)) {
    throw new Error("L16 Hold Still must be next on the campaign path");
  }
  await shot(page, "03_ghost_yard");

  await page.goto(`${BASE}/level/L16`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("HOLD STILL"));
  await shot(page, "04_l16_hold_still");
  await play(
    page,
    [
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowDown"],
    ],
    "Home",
  );

  await page.goto(`${BASE}/level/L17`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("HOLD SOUTH"));
  await play(
    page,
    [
      ["orange", "ArrowDown"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowLeft"],
      ["orange", "ArrowUp"],
    ],
    "Home",
  );
  await shot(page, "05_l17_win");

  await page.goto(`${BASE}/level/L18`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("PARK ACROSS"));
  await play(
    page,
    [
      ["orange", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["orange", "ArrowRight"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowDown"],
    ],
    "Home",
  );
  await shot(page, "06_l18_win");

  const after = await page.evaluate(() => JSON.parse(localStorage.getItem("rescue-cats.save.v2")));
  if (!after.completedIds.includes("L16") || !after.completedIds.includes("L17") || !after.completedIds.includes("L18")) {
    throw new Error(`L16–L18 not marked complete: ${after.completedIds.join(",")}`);
  }
  if (after.completedIds.includes("L10")) {
    throw new Error("L10 must stay off the campaign path");
  }
  if (after.friends.some((friend) => friend.friendId === "friend_008")) {
    throw new Error("Pumpkin must not unlock this slice");
  }
  writeFileSync(join(OUT, "report.json"), JSON.stringify({ ok: true, modal }, null, 2));
  console.log("CHAPTER 3 L15 + GHOST + L16-18 OK");
} catch (error) {
  console.error("CHAPTER 3 GHOST FAIL", error);
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
