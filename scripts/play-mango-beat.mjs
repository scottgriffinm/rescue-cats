/**
 * Headless playthrough: L1 → L2 → L3 → name Mango → yard with boxBed.
 * Uses system Chrome so we do not add a browser toolchain to the app.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { default: puppeteer } = require("puppeteer-core");

const BASE = process.env.PLAY_URL ?? "http://127.0.0.1:43173";
const OUT = process.env.PLAY_OUT ?? "/tmp/mango-beat";
const CHROME = process.env.CHROME_PATH ?? "/usr/bin/google-chrome";

mkdirSync(OUT, { recursive: true });

const shots = [];

async function shot(page, name) {
  const path = join(OUT, `${name}.png`);
  await page.screenshot({ path, fullPage: true });
  shots.push(path);
  console.log(`shot ${path}`);
}

async function waitToast(page, needle, ms = 4000) {
  await page.waitForFunction(
    (text) => (document.body.innerText || "").includes(text),
    { timeout: ms },
    needle,
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
  page.setDefaultTimeout(12000);

  await page.goto(BASE, { waitUntil: "networkidle0" });
  await page.evaluate(() => localStorage.removeItem("rescue-cats.save.v2"));
  await page.reload({ waitUntil: "networkidle0" });
  await page.waitForSelector("a[href='/level/L1']");
  await shot(page, "01_empty_porch");

  const srcs = await page.evaluate(() =>
    [...document.querySelectorAll("img")].map((img) => img.getAttribute("src")),
  );
  console.log("porch imgs", srcs);

  await page.click("a[href='/level/L1']");
  await page.waitForSelector('[aria-label="Select cat"]');
  const puzzleCat = await page.$eval('[aria-label="Select cat"] img', (img) => img.getAttribute("src"));
  if (puzzleCat !== "/assets/cats/calico_belly_72.svg") {
    throw new Error(`L1 puzzle cat is ${puzzleCat}, expected calico_belly_72`);
  }
  await shot(page, "02_l1_calico_belly");

  const DIR_LABEL = {
    ArrowDown: "Slide south",
    ArrowRight: "Slide east",
    ArrowUp: "Slide north",
    ArrowLeft: "Slide west",
  };

  const play = async (keys, winText) => {
    await page.click('[aria-label="Select cat"]');
    for (const key of keys) {
      const label = DIR_LABEL[key];
      await page.waitForSelector(`[aria-label="${label}"]`, { visible: true });
      await page.click(`[aria-label="${label}"]`);
      await new Promise((r) => setTimeout(r, 900));
    }
    await waitToast(page, winText, 8000);
  };

  await play(["ArrowDown"], "Home");
  await shot(page, "03_l1_win");
  await page.click("a[href='/level/L2']");
  await page.waitForFunction(() => document.body.innerText.includes("Setup Slide"));
  await page.waitForSelector('[aria-label="Select cat"]');

  await play(["ArrowDown", "ArrowRight", "ArrowUp"], "Home");
  await shot(page, "04_l2_win");
  await page.click("a[href='/level/L3']");
  await page.waitForFunction(() => document.body.innerText.includes("Wall as Brake"));
  await page.waitForSelector('[aria-label="Select cat"]');

  await play(["ArrowDown"], "Home");
  await page.waitForSelector("h2");
  const modal = await page.evaluate(() => {
    const card = document.querySelector("h2")?.closest("div.paper-card") ?? document.body;
    const title = card.querySelector("h2")?.textContent?.trim();
    const hero = [...card.querySelectorAll("img")].map((img) => img.getAttribute("src"));
    const cta = card.querySelector("button[type='submit']");
    const input = card.querySelector("input")?.value;
    return {
      title,
      hero,
      cta: cta?.textContent?.trim(),
      input,
      ctaDisabled: Boolean(cta?.disabled),
    };
  });
  console.log("naming", modal);
  if (modal.title !== "New friend!") throw new Error(`title ${modal.title}`);
  if (modal.input !== "") throw new Error(`name prefilled ${modal.input}`);
  if (!modal.ctaDisabled) throw new Error("Welcome home should stay disabled until a name is chosen");
  if (modal.cta !== "Welcome home") throw new Error(`cta ${modal.cta}`);
  const shuffle = await page.evaluate(() => {
    const btn = [...document.querySelectorAll("button")].find((el) =>
      (el.textContent || "").includes("Shuffle"),
    );
    btn?.click();
    return btn?.textContent?.trim() ?? null;
  });
  if (!shuffle) throw new Error("missing shuffle names control");
  await page.waitForFunction(() => {
    const input = document.querySelector("input");
    const cta = document.querySelector("button[type='submit']");
    return Boolean(input?.value.trim()) && !cta?.disabled;
  });
  await page.$eval("input", (el) => {
    el.focus();
    el.value = "";
    el.dispatchEvent(new Event("input", { bubbles: true }));
  });
  await page.type("input", "Mango");
  if (!modal.hero.includes("/assets/cats/ginger_loaf_72.svg")) {
    throw new Error(`Mango hero missing ginger_loaf_72: ${modal.hero.join(",")}`);
  }
  if (modal.hero.includes("/assets/cats/calico_belly_72.svg")) {
    throw new Error("calico belly leaked onto naming modal");
  }
  if (!modal.hero.includes("/assets/ui/star_marigold.svg")) {
    throw new Error("naming missing star_marigold");
  }
  await shot(page, "05_mango_naming");

  await page.click('button[type="submit"]');
  await page.waitForFunction(
    () => (document.body.innerText || "").includes("Mango is home. Tomorrow"),
    { timeout: 8000 },
  );
  const yard = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll("img")].map((img) => img.getAttribute("src"));
    const text = document.body.innerText;
    return { imgs, text };
  });
  console.log("yard imgs", yard.imgs);
  if (!yard.imgs.includes("/assets/cats/ginger_loaf_72.svg")) {
    throw new Error("yard missing ginger_loaf_72 Mango");
  }
  if (!yard.imgs.includes("/assets/furniture/boxBed.svg")) {
    throw new Error("yard missing boxBed");
  }
  if (!yard.imgs.includes("/assets/ui/bubble_bang.svg")) {
    throw new Error("yard missing first-night ! bubble");
  }
  if (!yard.text.includes("Mango is home. Tomorrow")) {
    throw new Error("yard missing tomorrow / next-clear hook");
  }
  if (yard.text.includes("Sun Cushion") && yard.imgs.filter((s) => s === "/assets/furniture/boxBed.svg").length > 1) {
    throw new Error("second gift suspected on Mango unlock");
  }
  const save = await page.evaluate(() => JSON.parse(localStorage.getItem("rescue-cats.save.v2")));
  console.log("save furniture", save.furniture, "friends", save.friends, "clears", save.completedIds);
  if (save.completedIds.join() !== "L1,L2,L3") throw new Error("clears not L1-L3");
  if (save.friends.length !== 1 || save.friends[0].friendId !== "friend_001") {
    throw new Error("expected named friend_001");
  }
  if (save.friends[0].name !== "Mango") throw new Error(`named ${save.friends[0].name}`);
  if (!save.bubbles.some((line) => line.includes("will still be here in the morning"))) {
    throw new Error("save missing tomorrow_hook bubble");
  }
  if (!save.furniture.includes("furn_box_cardboard")) throw new Error("box not owned");
  const extras = save.furniture.filter(
    (id) => id !== "furn_box_cardboard" && id !== "furn_tree_mini",
  );
  if (extras.length) throw new Error(`unexpected furniture gifts: ${extras.join(",")}`);
  await shot(page, "06_yard_mango_boxbed");

  writeFileSync(
    join(OUT, "report.json"),
    JSON.stringify({ ok: true, shots, puzzleCat, modal, furniture: save.furniture }, null, 2),
  );
  console.log("MANGO BEAT OK");
} catch (error) {
  console.error("MANGO BEAT FAIL", error);
  try {
    const pages = await browser.pages();
    const page = pages.at(-1);
    if (page) {
      const text = await page.evaluate(() => document.body.innerText);
      console.error("page text:\n", text);
      await page.screenshot({ path: join(OUT, "FAIL.png"), fullPage: true });
    }
  } catch {
    /* ignore */
  }
  process.exitCode = 1;
} finally {
  await browser.close();
}
