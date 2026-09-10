# Rescue Cats — design locks

Studio freeze for the vertical slice. Puzzle + Collection cadence + Art pack v1 are **LOCKED**. Later parade name-shuffles (Pebble, etc.) are ignored.

## Puzzle — LOCKED (Template 01 / LT01 Teach Slide)

**Verb: slide-budget routing.** Tap a cat, then slide them one cardinal direction until they hit a **wall, blocker, another cat, or the board edge**. Matching yard gates also stop a slide (`matched_gate_stop`).

- **Win:** every cat sits on a yard-gate tile, in ≤ N slides.
- **Cost:** the move counter decrements once per slide start (illegal / zero-length slides are free).
- **Soft fail:** budget exhausted with cats still off-gate → 1 X, free retry of the same printed board. Xs persist per level.
- **3 Xs:** continue sheet — 1 ticket **or** optional rewarded-ad **stub** (UI only). **Never** ads mid-puzzle.
- **Stars:** leftover slides → 3★ if leftover ≥ ceil(N/2), 2★ if leftover ≥ ceil(N/4), else 1★. Stars unlock **yard cosmetics only**, never cats or campaign gates.
- **Nudges / color locks:** encoded on the L1–30 budget table; inactive on authored LT01 boards. Board colors normalize to `orange | gray | black`.

Authoritative teach boards: `data/levels/L01-L03.json` (verbatim studio handoff). L4–L5 extend the same template. Move table: `data/levels/move_budget_L01-L30.json`. Engine: `src/lib/slide.ts`.

Retarget when a later template arrives by swapping JSON + keeping the slide helper.

## Collection — LOCKED (CURRENT v1.2, CEO freeze)

Load **`data/collection_CURRENT.json` only**. `collection_v1_pack.json` is a deprecated stub (it still says Mango @ clear 1 — **do not implement that**).

CEO override for the slice:

- First named friend **Mango (`friend_001`) at `onClear(3)`** after LT01 L1–L3.
- Parade: Mango@3, Ink@6, Biscuit@9, Tux@12, Ghost@15, Mist@18, Pepper@21, Pumpkin@24, Shadow@27, Noodle@30, … Bean@60.
- After cat 20, unlock every 5 clears (data-ready; not reached in this slice).
- Hearts on **every** unique clear (band table in CURRENT). Soft Hearts only — no IAP.
- Always allow duplicate names; never auto-merge.
- SS rarity = milestone-first (weights stubbed; SS = 0 in random table).
- Furniture gifts: cardboard box (`boxBed.svg`) with Mango @ 3; Sun Cushion @ 9 with Biscuit. No second gift on the Mango unlock.
- Data model: `Phenotype`, `FriendInstance`, `FurnitureSKU`, `YardComfort`, `UnlockFlags`.

Open / non-blocking: Heart packs, seasonal SS, L12+ name reshuffles.

## Art — LOCKED (Art pack v1)

Palette (CSS variables in `src/app/globals.css`):

| Token | Hex |
| --- | --- |
| paper | `#F7F0E6` |
| ink | `#2B2A28` |
| clay | `#E8A89A` |
| sage | `#8FAF8A` |
| marigold | `#F0B429` |
| path | `#D96B4A` |
| mist | `#C4BDB4` |
| wood | `#E2D4C2` |

Kill list: pure-white voids, pure-black outlines, arcade-red fail Xs (use clay `fail_mark`).

Assets live under `public/assets/{cats,furniture,ui}/` and can be swapped in place:

- Puzzle cats: `calico_belly_72.svg` only
- Mango: `ginger_loaf_48/72`
- Yard: `boxBed`, `fence`, `postBell`, `swing` + loafs
- UI: `btn_primary` language, `input_name`, `star_marigold`, `hand_cursor`, `fail_*`, `bubble_bang`

## Playable beat

L1 Straight Shot → L2 Setup Slide → L3 Wall as Brake → **name Mango** → yard with boxBed. Hearts accrue on 1 and 2; the friend lands on 3.
