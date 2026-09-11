/**
 * Chapter 3 beat: L9 → Biscuit@9 naming + Sun Cushion yard, then L11–L12.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter3-biscuit";
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
  completedIds: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8"],
  clearCount: 8,
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
  ],
  pendingUnlocks: [],
  hearts: 40,
  stars: 18,
  tickets: 1,
  furniture: ["furn_box_cardboard", "furn_scratch_post"],
  cosmetics: [],
  levelStrikes: {},
  seenCoach: true,
  bubbles: ["Ink is already on the porch."],
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

  await page.goto(`${BASE}/level/L9`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("WRONG ORDER"));
  await shot(page, "01_l9_before_biscuit");
  await play(
    page,
    [
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
  console.log("biscuit naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`Biscuit prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled");
  if (modal.line !== "Here for snacks. Possibly also for you.") {
    throw new Error(`Biscuit display line drifted: ${modal.line}`);
  }
  if (modal.chips.join(",") !== "Biscuit,Mochi,Toast") {
    throw new Error(`Biscuit chips must be Biscuit/Mochi/Toast, got ${modal.chips.join("/")}`);
  }
  if (!modal.hero.includes("/assets/cats/cream_loaf_72.svg")) {
    throw new Error(`Biscuit hero missing cream loaf: ${modal.hero}`);
  }
  await shot(page, "02_biscuit_naming");

  await page.click('[aria-label="Name suggestions"] button');
  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () =>
      (document.body.innerText || "").includes("Biscuit") &&
      ((document.body.innerText || "").includes("moved in") ||
        (document.body.innerText || "").includes("are home") ||
        (document.body.innerText || "").includes("is home")),
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
  if (!yard.save.friends.some((friend) => friend.friendId === "friend_003")) {
    throw new Error("Biscuit was not named");
  }
  if (yard.save.friends.find((friend) => friend.friendId === "friend_003")?.name !== "Biscuit") {
    throw new Error("Biscuit name was not kept");
  }
  if (yard.save.friends.length < 2) {
    throw new Error("porch must have two or more named friends after Biscuit");
  }
  if (!yard.save.furniture.includes("furn_bed_cushion")) {
    throw new Error("Sun Cushion was not gifted at clear 9");
  }
  if (!yard.imgs.includes("/assets/furniture/sunCushion.svg")) {
    throw new Error("yard missing Sun Cushion art");
  }
  if (!yard.imgs.includes("/assets/cats/cream_loaf_72.svg")) {
    throw new Error("yard missing Biscuit cream loaf");
  }
  if (!yard.imgs.includes("/assets/cats/ink_loaf_72.svg")) {
    throw new Error("yard missing Ink loaf after Biscuit");
  }
  if (!yard.imgs.includes("/assets/furniture/boxBed.svg")) {
    throw new Error("yard missing Mango box after Biscuit");
  }
  if (!yard.imgs.includes("/assets/ui/bubble_bang.svg")) {
    throw new Error("yard missing Biscuit first-night !");
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
  if (!yard.text.includes("40♥") && !yard.text.includes("Buy for 40")) {
    throw new Error("Mini Cat Tree 40♥ CTA missing");
  }
  await shot(page, "03_biscuit_yard");

  await page.goto(`${BASE}/level/L11`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("COLOR BRAKE"));
  await shot(page, "04_l11_color_brake");
  await play(
    page,
    [
      ["gray", "ArrowDown"],
      ["gray", "ArrowLeft"],
      ["orange", "ArrowDown"],
      ["gray", "ArrowRight"],
    ],
    "Home",
  );

  await page.goto(`${BASE}/level/L12`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("PARK FIRST"));
  await play(
    page,
    [
      ["gray", "ArrowUp"],
      ["orange", "ArrowRight"],
      ["gray", "ArrowDown"],
      ["gray", "ArrowLeft"],
    ],
    "Home",
  );
  await shot(page, "05_l12_win");

  const after = await page.evaluate(() => JSON.parse(localStorage.getItem("rescue-cats.save.v2")));
  if (!after.completedIds.includes("L11") || !after.completedIds.includes("L12")) {
    throw new Error(`L11–L12 not marked complete: ${after.completedIds.join(",")}`);
  }
  if (after.completedIds.includes("L10")) {
    throw new Error("L10 must stay off the campaign path");
  }
  writeFileSync(join(OUT, "report.json"), JSON.stringify({ ok: true, modal }, null, 2));
  console.log("CHAPTER 3 L9 + BISCUIT + L11-12 OK");
} catch (error) {
  console.error("CHAPTER 3 FAIL", error);
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
