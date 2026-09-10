# Rescue Cats

Mobile-first Next.js slice: slide cats into yard gates, then invite them onto a paper porch.

Locked studio beat: **LT01 L1 → name Mango + cardboard box; L3 → Biscuit + Sun Cushion.** Collection source: `data/collection_v1_pack.json`.

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
```

## Routes

| Route | What |
| --- | --- |
| `/` | Porch / lawn hub |
| `/play` | Next unsolved level |
| `/level/L1` … `/level/L10` | Slide-budget boards (LT01) |

Tap a cat, then swipe or tap a direction pip. They slide until a wall, blocker, another cat, or the edge (gates stop a matching slide).

## Vercel

Standard Next.js. Build: `npm run build`. No env vars.

## Design locks

See [DESIGN.md](./DESIGN.md). Collection source of truth: `data/collection_v1_pack.json`.
