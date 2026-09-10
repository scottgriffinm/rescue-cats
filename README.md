# Rescue Cats

A mobile-first puzzle slice: rewire arrow paths to rescue a cat, then invite them into a paper yard. Built as a Vercel-ready Next.js prototype — strategic enough to outgrow easy arrow toys, still in service of the collect loop.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Client-side save in `localStorage` (no auth, no backend)

## Screens

| Route | What |
| --- | --- |
| `/` | Yard hub — empty furniture, then named cats |
| `/play` | Jumps to the next unsolved level |
| `/level/[id]` | Puzzle board, lives, rewire budget |

Clear **two unique levels** to name a cat (configurable in `src/lib/constants.ts`).

## Local

```bash
npm install
npm run dev
```

Dev server defaults to [http://127.0.0.1:43173](http://127.0.0.1:43173). Primary layout is 390px wide; desktop shows the same card on charcoal.

```bash
npm run build
npm start
```

`npm start` also binds **43173**.

## Vercel

This is a standard Next.js app. From a connected Git repo:

1. Import the project in Vercel (Framework Preset: Next.js).
2. Build command: `npm run build`
3. Output: Next.js default
4. No environment variables required

Or from the CLI:

```bash
npx vercel
```

## Design notes

Puzzle rules and art direction are provisional. See [DESIGN.md](./DESIGN.md) for what design leads can swap without breaking the yard loop.

## Levels

Five hand-authored boards in `src/lib/levels.ts`, tutorial → medium:

1. One Tap
2. The Loop
3. Two Turns
4. Locked Paths
5. Tight Gate

To check a map still solves inside its turn budget:

```bash
npx tsx src/lib/verify-levels.ts
```
