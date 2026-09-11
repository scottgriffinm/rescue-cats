# Chapter 2 puzzle index

Campaign boards **L4–L9** load from the locked split packs. Grid origin is top-left. Slides stop on **wall | cat | edge** only. Matching gates never brake. On LT08 boards, a **mismatch house is a solid**. **L10 is not on the Chapter 2 path.**

| Id | Pack | Teach | Color locks |
| --- | --- | --- | --- |
| L4 | `LT02-L04-L05.json` / `L4.json` | Two Friends — 5×5 N=10, no colorIds | no |
| L5 | `LT02-L04-L05.json` / `L5.json` | Collision Order — vacate the column | no |
| L6 | `CHAPTER2_PUZZLE_L06_L07.json` / `L6.json` | Bigger Yard — 6×6 N=9, 2 walls | no |
| L7 | `CHAPTER2_PUZZLE_L06_L07.json` / `L7.json` | Tight Routes — 6×6 N=8, 2 walls | no |
| L8 | `LT08-L08-L09.json` / `L8.json` | My Gate Only — orange / gray | yes · mismatch solid |
| L9 | `LT08-L08-L09.json` / `L9.json` | Wrong Order Soft-Lock | yes · mismatch solid |

`CHAPTER2_PUZZLE_L04_L09.json` mirrors the same topologies but is **not** the campaign import.

## Collection / art (same beat)

- Ink (`friend_002`) at `onClear(6)` — chips **Ink / Ash / Shadow** (never Misty)
- First-night: `{Name}: Quiet gray paws. Already claimed a shadow.`
- Hearts shop starter (sisal post, 15♥) unlocks at clear 6
- Furniture map: scratcher / miniTree / yarnSwing
- Ink loafs + tinted gates (`--gate-orange #D38B5D` / `--gate-gray #5A5E6B`)

## Engine

`src/lib/slide.ts` — `isMismatchSolid` only when `colorLocks` is true.
