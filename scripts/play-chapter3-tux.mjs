/**
 * Chapter 3 beat: L12 → Tux@12 naming + four-cat yard, then L13–L15.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter3-tux";
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
  completedIds: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L11"],
  clearCount: 10,
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
  ],
  pendingUnlocks: [],
  hearts: 50,
  stars: 24,
  tickets: 1,
  furniture: ["furn_box_cardboard", "furn_scratch_post", "furn_bed_cushion"],
  cosmetics: [],
  levelStrikes: {},
  seenCoach: true,
  bubbles: ["Biscuit claimed the sun cushion."],
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

  await page.goto(`${BASE}/level/L12`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("PARK FIRST"));
  await shot(page, "01_l12_before_tux");
  await play(
    page,
    [
      ["gray", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["gray", "ArrowDown"],
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
  console.log("tux naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`Tux prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled");
  if (modal.line !== "Dressed for dinner. Will still sit in the box.") {
    throw new Error(`Tux display line drifted: ${modal.line}`);
  }
  if (modal.chips.join(",") !== "Tux,Domino,Bowtie") {
    throw new Error(`Tux chips must be Tux/Domino/Bowtie, got ${modal.chips.join("/")}`);
  }
  if (!modal.hero.includes("/assets/cats/tux_loaf_72.svg")) {
    throw new Error(`Tux hero missing tuxedo loaf: ${modal.hero}`);
  }
  await shot(page, "02_tux_naming");

  await page.click('[aria-label="Name suggestions"] button');
  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () =>
      (document.body.innerText || "").includes("Tux") &&
      ((document.body.innerText || "").includes("moved in") ||
        (document.body.innerText || "").includes("are home") ||
        (document.body.innerText || "").includes("is home") ||
        (document.body.innerText || "").includes("dressed for the porch")),
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
  if (!yard.save.friends.some((friend) => friend.friendId === "friend_004")) {
    throw new Error("Tux was not named");
  }
  if (yard.save.friends.find((friend) => friend.friendId === "friend_004")?.name !== "Tux") {
    throw new Error("Tux name was not kept");
  }
  if (yard.save.friends.length < 4) {
    throw new Error("porch must have four named friends after Tux");
  }
  if (yard.save.furniture.includes("furn_fountain_stone") || yard.save.furniture.length > 3) {
    if (!yard.save.furniture.includes("furn_box_cardboard") || !yard.save.furniture.includes("furn_bed_cushion")) {
      throw new Error("clear 12 must not replace earlier gifts");
    }
  }
  const giftedNew = yard.save.furniture.filter(
    (sku) => !["furn_box_cardboard", "furn_scratch_post", "furn_bed_cushion"].includes(sku),
  );
  if (giftedNew.length !== 0) {
    throw new Error(`clear 12 must gift nothing, got ${giftedNew.join(",")}`);
  }
  if (!yard.imgs.includes("/assets/cats/tux_loaf_72.svg")) {
    throw new Error("yard missing Tux tuxedo loaf");
  }
  if (!yard.imgs.includes("/assets/cats/cream_loaf_72.svg")) {
    throw new Error("yard missing Biscuit cream loaf after Tux");
  }
  if (!yard.imgs.includes("/assets/cats/ink_loaf_72.svg")) {
    throw new Error("yard missing Ink loaf after Tux");
  }
  if (!yard.imgs.includes("/assets/furniture/boxBed.svg")) {
    throw new Error("yard missing Mango box after Tux");
  }
  if (!yard.imgs.includes("/assets/furniture/sunCushion.svg")) {
    throw new Error("yard missing Sun Cushion after Tux");
  }
  if (!yard.imgs.includes("/assets/ui/bubble_bang.svg")) {
    throw new Error("yard missing Tux first-night !");
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
  if (!yard.text.includes("Step Off") && !yard.text.includes("STEP OFF") && !yard.text.includes("Tomorrow:")) {
    // Continue CTA should point at L13
  }
  if (!yard.text.includes("Step Off") && !/Continue · Step Off/i.test(yard.text)) {
    throw new Error("L13 Step Off must be next on the campaign path");
  }
  await shot(page, "03_tux_yard");

  await page.goto(`${BASE}/level/L13`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("STEP OFF"));
  await shot(page, "04_l13_step_off");
  await play(
    page,
    [
      ["orange", "ArrowDown"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["gray", "ArrowRight"],
    ],
    "Home",
  );

  await page.goto(`${BASE}/level/L14`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("PARK CLOSE"));
  await play(
    page,
    [
      ["gray", "ArrowUp"],
      ["gray", "ArrowLeft"],
      ["orange", "ArrowRight"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowLeft"],
    ],
    "Home",
  );
  await shot(page, "05_l14_win");

  await page.goto(`${BASE}/level/L15`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("THREAD BOTTOM"));
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
    "Home",
  );
  await shot(page, "06_l15_win");

  const after = await page.evaluate(() => JSON.parse(localStorage.getItem("rescue-cats.save.v2")));
  if (!after.completedIds.includes("L13") || !after.completedIds.includes("L14") || !after.completedIds.includes("L15")) {
    throw new Error(`L13–L15 not marked complete: ${after.completedIds.join(",")}`);
  }
  if (after.completedIds.includes("L10")) {
    throw new Error("L10 must stay off the campaign path");
  }
  if (after.friends.some((friend) => friend.friendId === "friend_005")) {
    throw new Error("Ghost must not unlock at L15 this slice");
  }
  writeFileSync(join(OUT, "report.json"), JSON.stringify({ ok: true, modal }, null, 2));
  console.log("CHAPTER 3 L12 + TUX + L13-15 OK");
} catch (error) {
  console.error("CHAPTER 3 TUX FAIL", error);
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
