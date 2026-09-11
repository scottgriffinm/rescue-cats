# Chapter 2 puzzle index

Campaign boards L4–L9 (plus L10 closer). Grid origin is top-left. Slides stop on **wall | cat | edge** only. Matching gates never brake. On LT08 boards, a **mismatch house is a solid**.

| Id | Pack | Teach | Color locks |
| --- | --- | --- | --- |
| L4 | `LT02-L04-L05.json` / `L4.json` | Two-cat collision — parked cat is the brake | no |
| L5 | `LT02-L04-L05.json` / `L5.json` | Collision order — park the brake first | no |
| L6 | `CHAPTER2_PUZZLE_L06_L07.json` / `CHAPTER2_L6.json` / `L6.json` | Route depth — long corridor | no |
| L7 | `CHAPTER2_PUZZLE_L06_L07.json` / `CHAPTER2_L7.json` / `L7.json` | Twin corridors | no |
| L8 | `LT08-L08-L09.json` / `L8.json` | Color lock — orange / gray | yes · mismatch solid |
| L9 | `LT08-L08-L09.json` / `L9.json` | Color swap | yes · mismatch solid |
| L10 | `L10.json` | Tight pair closer | yes · mismatch solid |

## Collection / art (same beat)

- Ink (`friend_002`) at `onClear(6)` with naming choice — `../chapter2_ink_shop_bang.json`
- Hearts shop starter (sisal post, 15♥) unlocks at clear 6
- First-night `!` copy is per-friend
- Ink slate loafs + tinted gates — `CHAPTER2_ART_INK_GATES.md`

## Engine

`src/lib/slide.ts` — `isMismatchSolid` only when `colorLocks` is true.
