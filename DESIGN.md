# Rescue Cats — provisional design notes

Working title for Scott Griffin's cat-collecting puzzle. These rules and art notes are **placeholders for design leads**. Swap freely; the code is data-driven so the loop (clear → unlock → yard) can keep the same shell.

## Why this exists

Arrows & Cats keeps people for the cats, not the puzzles. The arrow boards there are too easy. This slice keeps the collect fantasy (name a cat, put them in a yard) and asks the puzzles to carry more planning: limited rewires, loops, locked highways, decoy exits.

## Provisional puzzle mechanic

**Arrow rewiring.** Each level is a grid of directed path segments. The cat follows whatever heading is printed on the tile they stand on. The player taps a tile to cycle its heading clockwise. **Turns are a rewire budget**, not a count of 90° ticks:

- Changing a tile away from its printed heading spends one turn.
- Further taps on that same tile are free.
- Cycling it back to the printed heading refunds the turn.
- Thick, bolted arrows are locked and cannot turn.

Press **Rescue** to walk the route. Reach the house to clear. A loop, dead end, or walk off the paper costs a life (3 strikes, then retry). A faint path preview shows the current plan while editing.

Unlock cadence: `UNLOCK_EVERY_N_CLEARS` in `src/lib/constants.ts` (default **2 unique clears**). Replay does not mint another cat.

Levels live in `src/lib/levels.ts` as ASCII maps. Glyphs: `> < ^ v` rotatable, `E W N S` locked, `G` goal, `.` empty paper.

### What Puzzle Lead can swap later

- Fire-an-arrow / drag-to-shoot instead of rewire-then-go
- Collision with other moving cats
- Shared turn pool across a chapter
- Combo scoring beyond "N-step rescue"

Keep the shell: lives row, level index, preview, win/lose toast, unlock every N clears.

## Provisional art direction

Elevate the kawaii hand-drawn / isometric doodle of the competitor refs — cleaner, warmer, more intentional. Never generic cute.

- Paper off-white `#F7F1E8`, ink `#1A1814`, tan `#C4A574`, terracotta `#C4785A`
- Thick friendly outlines, rounded mobile cards, 390px primary frame
- Cats and furniture are SVG shapes in `src/components/art/` so an art pass can replace them without touching rules
- Selective flat color on coats only; furniture stays paper + ink + kraft

### What Art Director can swap later

- Coat set and roost positions (`src/lib/cats.ts`, `YardScene`)
- Furniture drawings
- Title lockup (currently **RESCUE CATS** with tan on CATS)
- Motion: cat walk cycle, paper grain, check-in bubbles

## Collection loop

1. Yard is the hub (empty furniture → named cats).
2. Play the next authored level.
3. Every 2 unique clears, name a cat (default suggestion **Mochi**, then Nori, Dumpling…).
4. Confirm places them on a roost in the yard.

Progress is `localStorage` key `rescue-cats.save.v1`. No account.

## Open questions for leads

- Is clockwise-cycle the right input, or should a swipe set a heading in one gesture?
- Should failed runs keep the player's rewires or snap back to the printed map? (Currently snap back, lives persist.)
- How many roosts / furniture props before the yard needs rooms or pages?
