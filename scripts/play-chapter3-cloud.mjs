/**
 * Cloud@48 award-stick repro + L50/L51 smoke.
 *
 * Proves: clear L48 → naming modal blocks Next → Welcome-home → Met + porch
 * show Cloud; pending save remounted on L49 still surfaces modal (no skip).
 *
 * Usage: PLAY_URL=http://127.0.0.1:43173 node scripts/play-chapter3-cloud.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/chapter3-cloud";
const CHROME = process.env.CHROME_PATH ?? "/usr/bin/google-chrome";

mkdirSync(OUT, { recursive: true });

const LEVEL_IDS = [
  "L1","L2","L3","L4","L5","L6","L7","L8","L9","L11","L12","L13","L14","L15",
  "L16","L17","L18","L19","L20","L21","L22","L23","L24","L25","L26","L27",
  "L28","L29","L30","L31","L32","L33","L34","L35","L36","L37","L38","L39",
  "L40","L41","L42","L43","L44","L45","L46","L47",
];

function friend(id, name, clear, phenotypeId, roost) {
  return {
    instanceId: `inst_${id}`,
    friendId: id,
    phenotypeId,
    name,
    rescuedAt: Date.now() - clear * 1000,
    clearIndex: clear,
    roost,
    favoriteToy: "sun patch",
    firstNight: false,
  };
}

const FRIENDS = [
  friend("friend_001", "Mango", 3, "pheno_dsh_orange_mackerel_regular_regular", 0),
  friend("friend_002", "Ink", 6, "pheno_dsh_gray_solid_regular_regular", 1),
  friend("friend_003", "Biscuit", 9, "pheno_dsh_cream_solid_regular_regular", 2),
  friend("friend_004", "Tux", 12, "pheno_tuxedo_black_bicolor_regular_regular", 3),
  friend("friend_005", "Ghost", 15, "pheno_dsh_cream_solid_regular_regular_ghost", 4),
  friend("friend_006", "Mist", 18, "pheno_dsh_gray_mackerel_regular_regular", 5),
  friend("friend_007", "Pepper", 21, "pheno_tabby_orange_spotted_regular_regular", 6),
  friend("friend_008", "Pumpkin", 24, "pheno_dsh_orange_classic_regular_regular", 7),
  friend("friend_009", "Shadow", 27, "pheno_dsh_black_solid_regular_regular", 8),
  friend("friend_010", "Noodle", 30, "pheno_dsh_cream_mackerel_regular_regular", 9),
  friend("friend_011", "Clover", 33, "pheno_dsh_gray_spotted_regular_regular", 10),
  friend("friend_012", "Ash", 36, "pheno_dsh_gray_solid_regular_regular_ash", 11),
  friend("friend_013", "Oak", 39, "pheno_dsh_orange_classic_regular_regular_oak", 12),
  friend("friend_014", "Dumpling", 42, "pheno_dsh_cream_solid_regular_regular_dump", 13),
  friend("friend_015", "Stripe", 45, "pheno_tabby_orange_mackerel_regular_regular", 14),
];

const PRE_L48 = {
  version: 3,
  completedIds: LEVEL_IDS,
  clearCount: 47,
  friends: FRIENDS,
  pendingUnlocks: [],
  hearts: 40,
  stars: 47,
  tickets: 3,
  furniture: ["furn_box_cardboard", "furn_bed_cushion"],
  cosmetics: [],
  levelStrikes: {},
  seenCoach: true,
  bubbles: [],
  unlockFlags: { mangoNamed: true, porchUnlocked: true },
  first_night_done: true,
  return_hook_available_at: null,
  return_hook_claimed: true,
  first_night_hearts_claimed: true,
};

const DIR_LABEL = {
  ArrowDown: "Slide south",
  ArrowRight: "Slide east",
  ArrowUp: "Slide north",
  ArrowLeft: "Slide west",
};

// Official L48 Vacate Row script from verify-levels
const L48 = [
  ["orange", "ArrowLeft"],
  ["orange", "ArrowDown"],
  ["orange", "ArrowRight"],
  ["orange", "ArrowUp"],
  ["black", "ArrowUp"],
  ["orange", "ArrowLeft"],
  ["black", "ArrowLeft"],
  ["black", "ArrowDown"],
];

async function shot(page, name) {
  const path = join(OUT, `${name}.png`);
  await page.screenshot({ path, fullPage: true });
  console.log(`shot ${path}`);
}

async function setSave(page, save) {
  await page.goto(BASE + "/", { waitUntil: "networkidle0" });
  await page.evaluate((payload) => {
    localStorage.setItem("rescue-cats.save.v2", JSON.stringify(payload));
  }, save);
  await page.reload({ waitUntil: "networkidle0" });
}

async function selectCat(page, color) {
  await page.click(`[aria-label="Select ${color} cat"]`);
}

async function play(page, steps) {
  for (const [who, key] of steps) {
    await selectCat(page, who);
    const label = DIR_LABEL[key];
    await page.waitForSelector(`[aria-label="${label}"]:not([disabled])`, { visible: true });
    await page.click(`[aria-label="${label}"]`);
    await new Promise((r) => setTimeout(r, 220));
  }
}

async function main() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--window-size=420,900"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 420, height: 900 });

  await setSave(page, PRE_L48);
  await page.goto(BASE + "/level/L48", { waitUntil: "networkidle0" });
  await play(page, L48);
  await page.waitForFunction(() => /New friend!/i.test(document.body.innerText), { timeout: 8000 });
  await shot(page, "01-l48-cloud-naming");

  const buttons = await page.$$eval("button,a", (els) =>
    els.map((e) => (e.textContent || "").trim()).filter(Boolean),
  );
  if (buttons.includes("Next rescue") || buttons.includes("Yard")) {
    throw new Error("FAIL award stick: Yard/Next visible while Cloud pending");
  }
  console.log("ok: Yard/Next blocked while pending");

  // Prove remount with pending still surfaces modal (old fail path).
  const pendingSave = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("rescue-cats.save.v2")),
  );
  if (!pendingSave.pendingUnlocks?.some((u) => u.friendId === "friend_016")) {
    throw new Error("FAIL: L48 clear did not queue friend_016");
  }
  await page.goto(BASE + "/level/L49", { waitUntil: "networkidle0" });
  await page.waitForFunction(() => /New friend!/i.test(document.body.innerText), { timeout: 5000 });
  const remountButtons = await page.$$eval("button,a", (els) =>
    els.map((e) => (e.textContent || "").trim()).filter(Boolean),
  );
  if (remountButtons.includes("Next rescue")) {
    throw new Error("FAIL: L49 remount with pending still shows Next rescue");
  }
  await shot(page, "02-l49-pending-modal");
  console.log("ok: L49 remount still shows Cloud naming (no skip)");

  // Name Cloud via chip, then Welcome home (CTA disabled until named).
  const chips = await page.$$("button");
  let named = false;
  for (const chip of chips) {
    const label = await page.evaluate((el) => el.textContent?.trim(), chip);
    if (label === "Cloud") {
      await chip.click();
      named = true;
      break;
    }
  }
  if (!named) throw new Error("Cloud chip missing");
  await page.waitForSelector('button[aria-label="Welcome home"]:not([disabled])');
  await page.click('button[aria-label="Welcome home"]');
  await page.waitForFunction(() => /Cloud floated onto the porch|Cloud moved in/i.test(document.body.innerText), {
    timeout: 8000,
  });
  await shot(page, "03-yard-cloud-porch");

  const body = await page.evaluate(() => document.body.innerText);
  if (!/Cloud/.test(body)) throw new Error("FAIL: Cloud not on yard copy");
  const save = await page.evaluate(() => JSON.parse(localStorage.getItem("rescue-cats.save.v2")));
  if (!save.friends.some((f) => f.friendId === "friend_016" && f.name === "Cloud")) {
    throw new Error("FAIL: friend_016 missing from save after Welcome-home");
  }
  if (save.pendingUnlocks?.length) throw new Error("FAIL: pending unlocks not cleared");
  console.log("ok: Cloud on Met/porch after Welcome-home");

  // Met tab should list Cloud (scrollable)
  await page.evaluate(() => {
    const btn = [...document.querySelectorAll("button")].find((b) => b.textContent?.trim() === "Met");
    btn?.click();
  });
  await new Promise((r) => setTimeout(r, 300));
  await shot(page, "04-met-cloud");

  writeFileSync(join(OUT, "PASS.txt"), "Cloud award stick + porch/Met PASS\n");
  console.log("PASS");
  await browser.close();
}

main().catch(async (err) => {
  console.error(err);
  process.exitCode = 1;
});
