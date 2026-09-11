# Rescue Cats

Mobile-first Next.js slice: slide cats into yard gates, then invite them onto a paper porch.

Playable beat: **LT01 L1–L3 → name Mango at clear 3 → LT02 L4–L7 → name Ink at clear 6 → LT08 L8–L9 + starter shop.** Collection: `collection_CURRENT.json`.

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
| `/level/L1` … `/level/L9` | Slide-budget boards (LT01 teach, locked LT02 / LT08 packs) |

Tap a cat, then swipe or tap the footer D-pad. They slide until a wall, blocker, another cat, or the edge. Gates do not stop a slide — rest on the house to win.

## Vercel

Standard Next.js. Build: `npm run build`. No env vars.

## Design locks

See [DESIGN.md](./DESIGN.md). Collection source of truth: `data/collection_CURRENT.json`. Do not load `collection_v1_pack.json`.
