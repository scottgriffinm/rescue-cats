# Chapter 3 puzzle index

Campaign continues **L1–L9 → Biscuit @ 9 → L11–L12 → Tux @ 12 → L13–L15**. **L10 is not on the path.** Grid origin is top-left. Slides stop on **wall | cat | edge** only. Matching gates never brake. On color-lock boards, a **mismatch house is a solid**. A parked friend is the brake onto a mid-board matching house.

| Id | Pack | Teach | Color locks |
| --- | --- | --- | --- |
| L11 | `CHAPTER3_PUZZLE_L11_L12.json` / `L11.json` | Color Brake — park past the house, then slide on | yes · mismatch solid |
| L12 | `CHAPTER3_PUZZLE_L11_L12.json` / `L12.json` | Park First — hold the far cell or you overshoot | yes · mismatch solid |
| L13 | `CHAPTER3_PUZZLE_L13_L15.json` / `L13.json` | Step Off — leave the edge house to brake the mid one | yes · mismatch solid |
| L14 | `CHAPTER3_PUZZLE_L13_L15.json` / `L14.json` | Park Close — hold the next cell, not the far edge | yes · mismatch solid |
| L15 | `CHAPTER3_PUZZLE_L13_L15.json` / `L15.json` | Thread Bottom — park the mid house, then thread the wall | yes · mismatch solid |

`CHAPTER3_PUZZLE_L11_L12.json` is the **campaign import** after the locked L4–L9 pack. `CHAPTER3_PUZZLE_L13_L15.json` continues after L12. Pink plays L11 next after L9.

## Collection / art (same beat)

- Biscuit (`friend_003`) at `onClear(9)` — chips **Biscuit / Mochi / Toast**
- First-night: `{Name}: Here for snacks. Possibly also for you.`
- Gift: Sun Cushion · `sunCushion.svg` (box + cushion + two or more loafs on the porch)
- Tux (`friend_004`) at `onClear(12)` after **L12** — chips **Tux / Domino / Bowtie**, tuxedo loaf, no furniture gift
- First-night: `{Name}: Dressed for dinner. Will still sit in the box.`
- Porch shows four friends when owned (Mango / Ink / Biscuit / Tux) plus box, cushion, and shop props
- Hearts shop SKUs unchanged: scratcher 15♥ + mini tree 40♥ from clear ≥3; yarn swing 40♥ from clear ≥6. Mini Cat Tree is a shop card when not owned (not an auto-grant).
- Ghost @ 15 ships in a later slice

## Engine

Same `src/lib/slide.ts`. No new verbs.
