# Rescue Cats

Mobile-first Next.js slice: slide cats into yard gates, then invite them onto a paper porch.

Chapter 2 is open: **L1–L3 → Mango @ 3 → L4–L5 collision → L6–L7 routes → L8–L9 color locks → Ink @ 6.** Packs: `data/levels/CHAPTER2_INDEX.md`. Collection: `collection_CURRENT.json`.

## Stack

Next.js App Router, TypeScript, Tailwind CSS. No auth. Progress is `localStorage` (`rescue-cats.save.v2`).

## Play

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:43173](http://127.0.0.1:43173) (390px primary).

```bash
npm run build
npm start
npm run verify:levels
# optional: L1→L3→Mango playthrough (needs Chrome + puppeteer-core)
# npm install --no-save puppeteer-core && node scripts/play-mango-beat.mjs
```

## Routes

| Route | What |
| --- | --- |
| `/` | Porch / lawn hub |
| `/play` | Next unsolved level |
| `/level/L1` … `/level/L10` | Slide-budget boards (LT01 teach, LT02 collision, LT08 color) |

Tap a cat, then swipe or tap the footer D-pad. They slide until a wall, blocker, another cat, or the edge. Matching gates do not stop a slide — rest on the house to win. On color-lock boards, a wrong-color house is a solid.

## Vercel

Standard Next.js. Build: `npm run build`. No env vars.

## Design locks

See [DESIGN.md](./DESIGN.md). Collection source of truth: `data/collection_CURRENT.json`. Do not load `collection_v1_pack.json`.
