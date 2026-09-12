> **🚨 CEO HANDOFF:** read [`CEO_HANDOFF_CHECKPOINT.md`](./CEO_HANDOFF_CHECKPOINT.md) first — pick up from Donna@51 (after Cloud@48).

# Rescue Cats

Full-viewport Next.js game: slide cats into yard gates, then invite them onto a paper porch. The website is the game — no phone-frame mock.

Chapter 3 continues: **L1–L3 → Mango @ 3 → L4–L5 collision → L6–L7 routes → Ink @ 6 → L8–L9 color locks → Biscuit @ 9 → L11–L12 color-brake → Tux @ 12 → L13–L15 → Ghost @ 15 → L16–L18 → Mist @ 18 → L19–L21 → Pepper @ 21 → L22–L24 → Pumpkin @ 24 → L25–L27 → Shadow @ 27 → L28–L30 → Noodle @ 30 → L31–L33 → Clover @ 33 → L34–L36 → Ash @ 36 → L37–L39 → Oak @ 39 → L40–L42 → Dumpling @ 42 → L43–L45 → Stripe @ 45 → L46–L48 → Cloud @ 48 → L49–L51.** L10 stays off the path. Packs: `data/levels/CHAPTER2_INDEX.md`, `data/levels/CHAPTER3_INDEX.md`. Collection: `collection_CURRENT.json`.

## Stack

Next.js App Router, TypeScript, Tailwind CSS. No auth. Progress is `localStorage` (`rescue-cats.save.v2`).

## Play

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:43173](http://127.0.0.1:43173) (mobile-first, fluid on desktop).

```bash
npm run build
npm start
npm run verify:levels
# optional playthroughs (needs Chrome + puppeteer-core)
# npm install --no-save puppeteer-core
# node scripts/play-mango-beat.mjs
# node scripts/play-chapter2-ink.mjs
# node scripts/play-chapter3-biscuit.mjs
# node scripts/play-chapter3-tux.mjs
# node scripts/play-chapter3-ghost.mjs
# node scripts/play-chapter3-mist.mjs
# node scripts/play-chapter3-pepper.mjs
# node scripts/play-chapter3-pumpkin.mjs
# node scripts/play-chapter3-shadow.mjs
# node scripts/play-chapter3-noodle.mjs
# node scripts/play-chapter3-clover.mjs
# node scripts/play-chapter3-ash.mjs
```

## Routes

| Route | What |
| --- | --- |
| `/` | Porch / lawn hub |
| `/play` | Next unsolved level |
| `/level/L1` … `/level/L9`, `/level/L11` … `/level/L51` | Slide-budget boards (LT01 teach, LT02 collision, LT08 color, Ch.3 color-brake). L10 is off-path. |

Tap a cat, then swipe or tap the footer D-pad. They slide until a wall, blocker, another cat, or the edge. Matching gates do not stop a slide — rest on the house to win. On color-lock boards, a wrong-color house is a solid.

## Vercel

Standard Next.js. Build: `npm run build`. No env vars.

## Design locks

See [DESIGN.md](./DESIGN.md). Collection source of truth: `data/collection_CURRENT.json`. Do not load `collection_v1_pack.json`.
