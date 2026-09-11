/**
 * Chapter 3 beat: L33 → Clover@33 naming + eleven-cat yard, then L34–L36.
 * Bean and Ash must not unlock.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter3-clover";
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
    "L30",
    "L31",
    "L32",
  ],
  clearCount: 31,
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
    {
      instanceId: "inst-noodle",
      friendId: "friend_010",
      phenotypeId: "pheno_dsh_cream_mackerel_regular_regular",
      name: "Noodle",
      rescuedAt: Date.now(),
      clearIndex: 30,
      roost: 9,
      favoriteToy: "loose string",
      firstNight: false,
    },
  ],
  pendingUnlocks: [],
  hearts: 120,
  stars: 70,
  tickets: 1,
  furniture: ["furn_box_cardboard", "furn_scratch_post", "furn_bed_cushion"],
  cosmetics: [],
  levelStrikes: {},
  seenCoach: true,
  bubbles: ["Noodle wriggled onto the porch."],
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
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--window-size=350,760"],
  defaultViewport: { width: 350, height: 760, deviceScaleFactor: 2 },
});

try {
  const page = await browser.newPage();
  page.setDefaultTimeout(15000);
  await page.goto(BASE, { waitUntil: "networkidle0" });
  await page.evaluate((save) => {
    localStorage.setItem("rescue-cats.save.v2", JSON.stringify(save));
  }, SEED);
  await page.reload({ waitUntil: "networkidle0" });

  await page.goto(`${BASE}/level/L33`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("THREAD WEST"));
  await shot(page, "01_l33_before_clover");
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
  console.log("clover naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`Clover prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled");
  if (modal.line !== "Lucky, or just very good at finding boxes.") {
    throw new Error(`Clover display line drifted: ${modal.line}`);
  }
  if (modal.chips.join(",") !== "Clover,Patch,Fern") {
    throw new Error(`Clover chips must be Clover/Patch/Fern, got ${modal.chips.join("/")}`);
  }
  if (
    modal.chips.includes("Bean") ||
    modal.chips.includes("Ash") ||
    modal.chips.includes("Noodle") ||
    modal.chips.includes("Shadow") ||
    modal.chips.includes("Mist")
  ) {
    throw new Error("Clover chips collided with Bean/Ash/Noodle/Shadow/Mist pools");
  }
  if (!modal.hero.includes("/assets/cats/clover_loaf_72.svg")) {
    throw new Error(`Clover hero missing spotted loaf: ${modal.hero}`);
  }
  if (modal.hero.includes("/assets/cats/ink_loaf_72.svg")) {
    throw new Error("Clover hero must not use the Ink loaf");
  }
  if (modal.hero.includes("/assets/cats/mist_loaf_72.svg")) {
    throw new Error("Clover hero must not use the Mist loaf");
  }
  if (modal.hero.includes("/assets/cats/shadow_loaf_72.svg")) {
    throw new Error("Clover hero must not use the Shadow loaf");
  }
  await shot(page, "02_clover_naming");

  await page.click('[aria-label="Name suggestions"] button');
  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () =>
      (document.body.innerText || "").includes("Clover") &&
      ((document.body.innerText || "").includes("moved in") ||
        (document.body.innerText || "").includes("are home") ||
        (document.body.innerText || "").includes("is home") ||
        (document.body.innerText || "").includes("found a box on the porch")),
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
  if (!yard.save.friends.some((friend) => friend.friendId === "friend_011")) {
    throw new Error("Clover was not named");
  }
  if (yard.save.friends.find((friend) => friend.friendId === "friend_011")?.name !== "Clover") {
    throw new Error("Clover name was not kept");
  }
  if (yard.save.friends.length < 11) {
    throw new Error("porch must have eleven named friends after Clover");
  }
  if (yard.friendsRow.wrap) {
    throw new Error("Friends/Met row must stay on one line at 350px phone width");
  }
  if (yard.friendsRow.count < 11) {
    throw new Error("Friends row must show eleven cats");
  }
  if (yard.friendsRow.width > 350) {
    throw new Error(`Friends row overflowed 350px phone width: ${yard.friendsRow.width}`);
  }
  const giftedNew = yard.save.furniture.filter(
    (sku) => !["furn_box_cardboard", "furn_scratch_post", "furn_bed_cushion"].includes(sku),
  );
  if (giftedNew.length !== 0) {
    throw new Error(`clear 33 must gift nothing, got ${giftedNew.join(",")}`);
  }
  if (!yard.imgs.includes("/assets/cats/clover_loaf_72.svg")) {
    throw new Error("yard missing Clover spotted loaf");
  }
  if (!yard.imgs.includes("/assets/cats/noodle_loaf_72.svg")) {
    throw new Error("yard missing Noodle long loaf after Clover");
  }
  if (!yard.imgs.includes("/assets/cats/shadow_loaf_72.svg")) {
    throw new Error("yard missing Shadow full-black loaf after Clover");
  }
  if (!yard.imgs.includes("/assets/cats/pumpkin_loaf_72.svg")) {
    throw new Error("yard missing Pumpkin classic loaf after Clover");
  }
  if (!yard.imgs.includes("/assets/cats/pepper_loaf_72.svg")) {
    throw new Error("yard missing Pepper spotted loaf after Clover");
  }
  if (!yard.imgs.includes("/assets/cats/mist_loaf_72.svg")) {
    throw new Error("yard missing Mist gray-mackerel loaf after Clover");
  }
  if (!yard.imgs.includes("/assets/cats/ghost_loaf_72.svg")) {
    throw new Error("yard missing Ghost pale loaf after Clover");
  }
  if (!yard.imgs.includes("/assets/cats/tux_loaf_72.svg")) {
    throw new Error("yard missing Tux tuxedo loaf after Clover");
  }
  if (!yard.imgs.includes("/assets/cats/cream_loaf_72.svg")) {
    throw new Error("yard missing Biscuit cream loaf after Clover");
  }
  if (!yard.imgs.includes("/assets/cats/ink_loaf_72.svg")) {
    throw new Error("yard missing Ink loaf after Clover");
  }
  if (!yard.imgs.includes("/assets/furniture/boxBed.svg")) {
    throw new Error("yard missing Mango box after Clover");
  }
  if (!yard.imgs.includes("/assets/furniture/sunCushion.svg")) {
    throw new Error("yard missing Sun Cushion after Clover");
  }
  if (!yard.imgs.includes("/assets/ui/bubble_bang.svg")) {
    throw new Error("yard missing Clover first-night !");
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
  if (yard.text.includes("Bean") && /New friend/i.test(yard.text)) {
    throw new Error("Bean UI must not open after Clover");
  }
  if (!yard.text.includes("Solid West") && !/Continue · Solid West/i.test(yard.text)) {
    throw new Error("L34 Solid West must be next on the campaign path");
  }
  await shot(page, "03_clover_yard");

  await page.goto(`${BASE}/level/L34`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("SOLID WEST"));
  await shot(page, "04_l34_solid_west");
  await play(
    page,
    [
      ["orange", "ArrowLeft"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["orange", "ArrowUp"],
      ["orange", "ArrowLeft"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowRight"],
    ],
    "Home",
  );

  await page.goto(`${BASE}/level/L35`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("VACATE FIRST"));
  await play(
    page,
    [
      ["orange", "ArrowDown"],
      ["orange", "ArrowRight"],
      ["black", "ArrowLeft"],
      ["black", "ArrowDown"],
      ["black", "ArrowRight"],
      ["orange", "ArrowLeft"],
      ["black", "ArrowDown"],
      ["black", "ArrowRight"],
    ],
    "Home",
  );
  await shot(page, "05_l35_win");

  await page.goto(`${BASE}/level/L36`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("PARK ABOVE"));
  await play(
    page,
    [
      ["orange", "ArrowLeft"],
      ["orange", "ArrowDown"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowUp"],
      ["gray", "ArrowLeft"],
      ["gray", "ArrowDown"],
      ["orange", "ArrowUp"],
      ["gray", "ArrowRight"],
      ["gray", "ArrowDown"],
    ],
    "Home",
  );
  await shot(page, "06_l36_win");

  const after = await page.evaluate(() => ({
    save: JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
    text: document.body.innerText,
  }));
  if (
    !after.save.completedIds.includes("L34") ||
    !after.save.completedIds.includes("L35") ||
    !after.save.completedIds.includes("L36")
  ) {
    throw new Error(`L34–L36 not marked complete: ${after.save.completedIds.join(",")}`);
  }
  if (after.save.completedIds.includes("L10")) {
    throw new Error("L10 must stay off the campaign path");
  }
  if (after.save.friends.some((friend) => friend.friendId === "friend_020")) {
    throw new Error("Bean must not unlock this slice");
  }
  if (after.save.pendingUnlocks.some((pending) => pending.friendId === "friend_020")) {
    throw new Error("L36 clear must not queue Bean naming");
  }
  if (after.save.friends.some((friend) => friend.friendId === "friend_012")) {
    throw new Error("Ash must not unlock this slice");
  }
  if (after.save.pendingUnlocks.some((pending) => pending.friendId === "friend_012")) {
    throw new Error("L36 clear must not queue Ash naming");
  }
  if (after.text.includes("New friend!")) {
    throw new Error("L36 must not open a Bean or Ash naming modal");
  }
  if (after.save.friends.filter((friend) => friend.friendId === "friend_011").length !== 1) {
    throw new Error("L36 must not unlock a Clover duplicate");
  }
  writeFileSync(join(OUT, "report.json"), JSON.stringify({ ok: true, modal }, null, 2));
  console.log("CHAPTER 3 L33 + CLOVER + L34-36 OK");
} catch (error) {
  console.error("CHAPTER 3 CLOVER FAIL", error);
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
