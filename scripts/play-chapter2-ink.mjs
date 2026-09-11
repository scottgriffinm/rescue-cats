/**
 * Chapter 2 beat: L4–L6 collision / route → name Ink → yard ! and tomorrow hook.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter2-ink";
const CHROME = process.env.CHROME_PATH ?? "/usr/bin/google-chrome";

mkdirSync(OUT, { recursive: true });

const DIR_LABEL = {
  ArrowDown: "Slide south",
  ArrowRight: "Slide east",
  ArrowUp: "Slide north",
  ArrowLeft: "Slide west",
};

const SEED = {
  version: 2,
  completedIds: ["L1", "L2", "L3"],
  clearCount: 3,
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
  ],
  pendingUnlocks: [],
  hearts: 15,
  stars: 9,
  tickets: 1,
  furniture: ["furn_tree_mini", "furn_box_cardboard"],
  cosmetics: [],
  levelStrikes: {},
  seenCoach: true,
  bubbles: ["Mango moved in!"],
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

async function play(page, steps, winText) {
  for (const [color, key] of steps) {
    await page.click(`[aria-label="Select ${color} cat"]`);
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

  await page.goto(`${BASE}/level/L4`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("Cat as Brake"));
  await shot(page, "01_l4_collision");
  await play(
    page,
    [
      ["orange", "ArrowDown"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowDown"],
    ],
    "Home",
  );
  await shot(page, "02_l4_win");

  await page.goto(`${BASE}/level/L5`, { waitUntil: "networkidle0" });
  await play(
    page,
    [
      ["orange", "ArrowRight"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["orange", "ArrowDown"],
    ],
    "Home",
  );

  await page.goto(`${BASE}/level/L6`, { waitUntil: "networkidle0" });
  await play(
    page,
    [
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowUp"],
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
      ctaDisabled: Boolean(card.querySelector("button[type='submit']")?.disabled),
    };
  });
  console.log("ink naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`Ink prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled");
  if (!modal.line?.includes("Quiet paws")) throw new Error("missing Ink display line");
  if (!modal.hero.includes("/assets/cats/slate_loaf_72.svg")) {
    throw new Error(`Ink hero missing slate loaf: ${modal.hero}`);
  }
  await shot(page, "03_ink_naming");

  await page.$eval("input", (el) => {
    el.focus();
    el.value = "";
    el.dispatchEvent(new Event("input", { bubbles: true }));
  });
  await page.type("input", "Ink");
  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () => (document.body.innerText || "").includes("Ink are home")
      || (document.body.innerText || "").includes("Ink is home")
      || (document.body.innerText || "").includes("Mango & Ink"),
    { timeout: 8000 },
  );
  const yard = await page.evaluate(() => ({
    text: document.body.innerText,
    imgs: [...document.querySelectorAll("img")].map((img) => img.getAttribute("src")),
    save: JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
  }));
  console.log("yard friends", yard.save.friends.map((f) => f.friendId));
  if (!yard.save.friends.some((friend) => friend.friendId === "friend_002")) {
    throw new Error("Ink was not named");
  }
  if (yard.save.friends.find((friend) => friend.friendId === "friend_002")?.name !== "Ink") {
    throw new Error("Ink name was not kept");
  }
  if (!yard.imgs.includes("/assets/cats/slate_loaf_72.svg")) {
    throw new Error("yard missing Ink slate loaf");
  }
  if (!yard.imgs.includes("/assets/ui/bubble_bang.svg")) {
    throw new Error("yard missing Ink first-night !");
  }
  await shot(page, "04_ink_yard");
  writeFileSync(join(OUT, "report.json"), JSON.stringify({ ok: true, modal }, null, 2));
  console.log("CHAPTER 2 INK OK");
} catch (error) {
  console.error("CHAPTER 2 FAIL", error);
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
