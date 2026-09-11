# Chapter 3 puzzle index

Campaign continues **L1–L9 → Biscuit @ 9 → L11–L12**. **L10 is not on the path.** Grid origin is top-left. Slides stop on **wall | cat | edge** only. Matching gates never brake. On color-lock boards, a **mismatch house is a solid**. A parked friend is the brake onto a mid-board matching house.

| Id | Pack | Teach | Color locks |
| --- | --- | --- | --- |
| L11 | `CHAPTER3_PUZZLE_L11_L12.json` / `L11.json` | Color Brake — park past the house, then slide on | yes · mismatch solid |
| L12 | `CHAPTER3_PUZZLE_L11_L12.json` / `L12.json` | Park First — hold the far cell or you overshoot | yes · mismatch solid |

`CHAPTER3_PUZZLE_L11_L12.json` is the **campaign import** after the locked L4–L9 pack. Pink plays L11 next after L9.

## Collection / art (same beat)

- Biscuit (`friend_003`) at `onClear(9)` — chips **Biscuit / Mochi / Toast**
- First-night: `{Name}: Here for snacks. Possibly also for you.`
- Gift: Sun Cushion · `sunCushion.svg` (box + cushion + two or more loafs on the porch)
- Hearts shop SKUs unchanged: scratcher / miniTree / yarnSwing

## Engine

Same `src/lib/slide.ts`. No new verbs.
