/**
 * Chapter 3 beat: L30 → Noodle@30 naming + ten-cat yard, then L31–L33.
 * Bean must not unlock.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter3-noodle";
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
    "L24",
    "L25",
    "L26",
    "L27",
    "L28",
    "L29",
  ],
  clearCount: 28,
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
    {
      instanceId: "inst-pumpkin",
      friendId: "friend_008",
      phenotypeId: "pheno_dsh_orange_classic_regular_regular",
      name: "Pumpkin",
      rescuedAt: Date.now(),
      clearIndex: 24,
      roost: 7,
      favoriteToy: "fallen leaf",
      firstNight: false,
    },
    {
      instanceId: "inst-shadow",
      friendId: "friend_009",
      phenotypeId: "pheno_dsh_black_solid_regular_regular",
      name: "Midnight",
      rescuedAt: Date.now(),
      clearIndex: 27,
      roost: 8,
      favoriteToy: "moonbeam",
      firstNight: false,
    },
  ],
  pendingUnlocks: [],
  hearts: 110,
  stars: 64,
  tickets: 1,
  furniture: ["furn_box_cardboard", "furn_scratch_post", "furn_bed_cushion"],
  cosmetics: [],
  levelStrikes: {},
  seenCoach: true,
  bubbles: ["Midnight slipped onto the porch."],
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

  await page.goto(`${BASE}/level/L30`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("HOLD SOUTH"));
  await shot(page, "01_l30_before_noodle");
  await play(
    page,
    [
      ["orange", "ArrowRight"],
      ["black", "ArrowUp"],
      ["black", "ArrowLeft"],
      ["black", "ArrowDown"],
      ["black", "ArrowLeft"],
      ["orange", "ArrowDown"],
      ["black", "ArrowRight"],
      ["black", "ArrowDown"],
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
  console.log("noodle naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`Noodle prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled");
  if (modal.line !== "Long in spirit. Short in attention span.") {
    throw new Error(`Noodle display line drifted: ${modal.line}`);
  }
  if (modal.chips.join(",") !== "Noodle,Ramen,Twirl") {
    throw new Error(`Noodle chips must be Noodle/Ramen/Twirl, got ${modal.chips.join("/")}`);
  }
  if (modal.chips.includes("Bean") || modal.chips.includes("Midnight") || modal.chips.includes("Shadow")) {
    throw new Error("Noodle chips collided with Bean/Shadow/Ink pools");
  }
  if (!modal.hero.includes("/assets/cats/noodle_loaf_72.svg")) {
    throw new Error(`Noodle hero missing long loaf: ${modal.hero}`);
  }
  if (modal.hero.includes("/assets/cats/cream_loaf_72.svg")) {
    throw new Error("Noodle hero must not use the Biscuit loaf");
  }
  if (modal.hero.includes("/assets/cats/ghost_loaf_72.svg")) {
    throw new Error("Noodle hero must not use the Ghost loaf");
  }
  if (modal.hero.includes("/assets/cats/shadow_loaf_72.svg")) {
    throw new Error("Noodle hero must not use the Shadow loaf");
  }
  await shot(page, "02_noodle_naming");

  await page.click('[aria-label="Name suggestions"] button');
  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () =>
      (document.body.innerText || "").includes("Noodle") &&
      ((document.body.innerText || "").includes("moved in") ||
        (document.body.innerText || "").includes("are home") ||
        (document.body.innerText || "").includes("is home") ||
        (document.body.innerText || "").includes("wriggled onto the porch")),
    { timeout: 8000 },
  );

  const yard = await page.evaluate(() => ({
    text: document.body.innerText,
    imgs: [...document.querySelectorAll("img")].map((img) => img.getAttribute("src")),
    save: JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
    friendsRow: (() => {
      const row = document.querySelector("ul.flex");
      if (!row) return { wrap: true, count: 0, width: 0 };
      const style = getComputedStyle(row);
      return {
        wrap: style.flexWrap !== "nowrap",
        count: row.querySelectorAll("li").length,
        width: row.getBoundingClientRect().width,
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
  if (!yard.save.friends.some((friend) => friend.friendId === "friend_010")) {
    throw new Error("Noodle was not named");
  }
  if (yard.save.friends.find((friend) => friend.friendId === "friend_010")?.name !== "Noodle") {
    throw new Error("Noodle name was not kept");
  }
  if (yard.save.friends.length < 10) {
    throw new Error("porch must have ten named friends after Noodle");
  }
  if (yard.friendsRow.wrap) {
    throw new Error("Friends/Met row must stay on one line at phone width");
  }
  if (yard.friendsRow.count < 10) {
    throw new Error("Friends row must show ten cats");
  }
  if (yard.friendsRow.width > 390) {
    throw new Error(`Friends row overflowed phone width: ${yard.friendsRow.width}`);
  }
  const giftedNew = yard.save.furniture.filter(
    (sku) => !["furn_box_cardboard", "furn_scratch_post", "furn_bed_cushion"].includes(sku),
  );
  if (giftedNew.length !== 0) {
    throw new Error(`clear 30 must gift nothing, got ${giftedNew.join(",")}`);
  }
  if (!yard.imgs.includes("/assets/cats/noodle_loaf_72.svg")) {
    throw new Error("yard missing Noodle long loaf");
  }
  if (!yard.imgs.includes("/assets/cats/shadow_loaf_72.svg")) {
    throw new Error("yard missing Shadow full-black loaf after Noodle");
  }
  if (!yard.imgs.includes("/assets/cats/pumpkin_loaf_72.svg")) {
    throw new Error("yard missing Pumpkin classic loaf after Noodle");
  }
  if (!yard.imgs.includes("/assets/cats/pepper_loaf_72.svg")) {
    throw new Error("yard missing Pepper spotted loaf after Noodle");
  }
  if (!yard.imgs.includes("/assets/cats/mist_loaf_72.svg")) {
    throw new Error("yard missing Mist gray-mackerel loaf after Noodle");
  }
  if (!yard.imgs.includes("/assets/cats/ghost_loaf_72.svg")) {
    throw new Error("yard missing Ghost pale loaf after Noodle");
  }
  if (!yard.imgs.includes("/assets/cats/tux_loaf_72.svg")) {
    throw new Error("yard missing Tux tuxedo loaf after Noodle");
  }
  if (!yard.imgs.includes("/assets/cats/cream_loaf_72.svg")) {
    throw new Error("yard missing Biscuit cream loaf after Noodle");
  }
  if (!yard.imgs.includes("/assets/cats/ink_loaf_72.svg")) {
    throw new Error("yard missing Ink loaf after Noodle");
  }
  if (!yard.imgs.includes("/assets/furniture/boxBed.svg")) {
    throw new Error("yard missing Mango box after Noodle");
  }
  if (!yard.imgs.includes("/assets/furniture/sunCushion.svg")) {
    throw new Error("yard missing Sun Cushion after Noodle");
  }
  if (!yard.imgs.includes("/assets/ui/bubble_bang.svg")) {
    throw new Error("yard missing Noodle first-night !");
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
  if (!yard.text.includes("Hold East") && !/Continue · Hold East/i.test(yard.text)) {
    throw new Error("L31 Hold East must be next on the campaign path");
  }
  await shot(page, "03_noodle_yard");

  await page.goto(`${BASE}/level/L31`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("HOLD EAST"));
  await shot(page, "04_l31_hold_east");
  await play(
    page,
    [
      ["orange", "ArrowDown"],
      ["black", "ArrowDown"],
      ["black", "ArrowLeft"],
      ["orange", "ArrowRight"],
      ["black", "ArrowRight"],
      ["black", "ArrowUp"],
      ["black", "ArrowLeft"],
      ["black", "ArrowDown"],
    ],
    "Home",
  );

  await page.goto(`${BASE}/level/L32`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("THREAD NORTH"));
  await play(
    page,
    [
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["black", "ArrowUp"],
      ["black", "ArrowLeft"],
      ["black", "ArrowDown"],
      ["orange", "ArrowUp"],
      ["black", "ArrowRight"],
      ["black", "ArrowDown"],
    ],
    "Home",
  );
  await shot(page, "05_l32_win");

  await page.goto(`${BASE}/level/L33`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("THREAD WEST"));
  await play(
    page,
    [
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["black", "ArrowDown"],
      ["black", "ArrowLeft"],
      ["black", "ArrowDown"],
      ["black", "ArrowRight"],
      ["orange", "ArrowLeft"],
      ["black", "ArrowLeft"],
      ["black", "ArrowDown"],
    ],
    "Home",
  );
  await shot(page, "06_l33_win");

  const after = await page.evaluate(() => ({
    save: JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
    text: document.body.innerText,
  }));
  if (
    !after.save.completedIds.includes("L31") ||
    !after.save.completedIds.includes("L32") ||
    !after.save.completedIds.includes("L33")
  ) {
    throw new Error(`L31–L33 not marked complete: ${after.save.completedIds.join(",")}`);
  }
  if (after.save.completedIds.includes("L10")) {
    throw new Error("L10 must stay off the campaign path");
  }
  if (after.save.friends.some((friend) => friend.friendId === "friend_020")) {
    throw new Error("Bean must not unlock this slice");
  }
  if (after.save.pendingUnlocks.some((pending) => pending.friendId === "friend_020")) {
    throw new Error("L33 clear must not queue Bean naming");
  }
  if (after.save.friends.some((friend) => friend.friendId === "friend_011")) {
    throw new Error("Clover must not unlock this slice");
  }
  if (after.save.pendingUnlocks.some((pending) => pending.friendId === "friend_011")) {
    throw new Error("L33 clear must not queue Clover naming");
  }
  if (after.text.includes("New friend!")) {
    throw new Error("L33 must not open a Bean naming modal");
  }
  if (after.save.friends.filter((friend) => friend.friendId === "friend_010").length !== 1) {
    throw new Error("L33 must not unlock a Noodle duplicate");
  }
  writeFileSync(join(OUT, "report.json"), JSON.stringify({ ok: true, modal }, null, 2));
  console.log("CHAPTER 3 L30 + NOODLE + L31-33 OK");
} catch (error) {
  console.error("CHAPTER 3 NOODLE FAIL", error);
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
