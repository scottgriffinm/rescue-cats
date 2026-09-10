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

Authoritative teach boards: `data/levels/L01-L03.json` (studio handoff). L2 is a two-cell wall run (Template 01 prose said “1 wall”; the JSON is the lock). L4–L10 continue LT01. Move table: `data/levels/move_budget_L01-L30.json` (L11–30 budgets + nudge/colorLock stubs only). Engine: `src/lib/slide.ts`. Unique clears emit `onClear(clearIndex)` from `src/lib/onClear.ts`.

Acceptance: slide stops on wall / cat / edge; counter decrements once per slide start; win = all cats on gates; budget exhaust → X and board reset (Xs persist per level); no mid-puzzle ads.

Retarget when a later template arrives by swapping JSON + keeping the slide helper.

## Collection bible v0 — implemented (non-blocking opens)

Cited so Collection Lead can swap content without touching puzzle code. Data model in `src/lib/types.ts`:

- `Phenotype` — breed, coat color/pattern, body, tail, eye accent, personality beat
- `FriendInstance` — name, phenotypeId, rescuedAt, optional `favoriteToy`
- `FurnitureSKU`, `YardComfort`, `UnlockFlags` (`mangoNamed`, `porchUnlocked`)

First five rescues (`TUTORIAL_RESCUES`) are a curated C/B, Regular-body parade: Mango, Ink, Biscuit, Tux, Ghost. Naming modal reveals the personality line, suggests a name (pools include Mochi / Bean / Pip-adjacent food names), Confirm → yard drop-in + `"{Name} moved in!"` and a first-night !. Session return can show 1–3 ! bubbles.

Onboarding furniture: mini tree is placed free so L1–L2 are not barren. Cardboard box lands with Mango at clear 3; Sun Cushion with Biscuit at clear 9. Yarn swing stays a Hearts shop stub.

Cadence is the **CEO override** below — not the Collection v1 forced parade. Hearts on every unique clear (band table in the pack). Porch/Lawn only. Comfort on the HUD. Friends / Met tabs list named instances vs the tutorial five.

Pity / rarity: `src/lib/pity.ts` stubs only (`soft_pity_c_streak` 12, `force_a_by_clear` 25, SS weight 0).

### Collection policy — LOCKED

Types: `CollectionLocks` in `src/lib/types.ts`. Values: `COLLECTION_LOCKS`.

1. **Soft Hearts only.** No Heart packs, no IAP, no paid currency in the prototype. Hearts come from unique clears and spend on furniture SKUs.
2. **Duplicate names always allowed.** Each rescue is a new `FriendInstance`. Commons are never auto-merged. Renaming to an existing name is fine.
3. **SS rarity = milestones first.** Not a seasonal calendar. Random SS weight is 0.

## Collection — CEO cadence override (authoritative for this slice)

`data/collection_v1_pack.json` is still the content pack (names, phenotypes, naming strings, Hearts bands), but its cadence is **conflicting** and must not be implemented as written:

- Pack says `first_friend.unlock_clear: 1` and `cadence_clears_1_30.forced` unlocks cats on clears 1, 2, 3, 4, 5, 6…
- Pack gifts the box at clear 1 and Sun Cushion at clear 3

**CEO lock (engine: `CEO_CADENCE` in `src/lib/collection.ts`):**

- No rescue at unique clear 1 or 2 — those clears are puzzle-only (Hearts only).
- First named friend is **Mango (`friend_001`) at `onClear(3)`**, after LT01 L1–L3.
- Cats 1–20 map by index: cat *n* unlocks at clear `3*n` (Mango@3, Ink@6, Biscuit@9, Tux@12, … Bean@60).
- After cat 20, switch to every 5 (not reached in this slice).
- Furniture: box (`furn_box_cardboard` / `boxBed.svg`) with Mango @ 3; Sun Cushion (`furn_bed_cushion`) with Biscuit @ 9. Yard is not empty after clear 3.
- Hearts still award on every unique clear per the pack bands. Cats only on the every-3 cadence.
- Naming modal strings stay exact from the pack. Soft Hearts only; duplicate names always allowed.

Do not “fix” the v1 JSON in place this slice — treat `unlock_clear: 1` as stale.

## Art — LOCKED (Art pack v1 + Asset List v1)

Art pack v1 is the palette lock. **Art Asset List v1** is the file lock. Comps replace SVGs in `public/assets/{cats,furniture,ui}/`. Strokes are ink-warm `#2B2A28`. Base width 390 CSS px.

Priority order (shipped):

1. CSS variables for the Art pack palette (`src/app/globals.css`)
2. `cat.pose.loaf` @48 — cream `#FFF8F0`, ginger `#D38B5D`, slate `#5A5E6B`, calico (cream + clay `#E8A89A` + slate blobs). Art Director SVG pack v1 is the file lock (verbatim under `public/assets/`). Mango = `ginger_loaf`. Optional hero: `ginger_loaf_160.svg`.
3. `cat.pose.belly` @72 calico — puzzle board cats only (`calico_belly_72.svg`)
4. Furniture woodblock: `boxBed` 96×72, `swing` 96×96, `postBell` 48×96 (bell marigold + mist), `fence` 120×48 tileable
5. UI: `btn_primary` (h 44, ink stroke, paper fill), `input_name`, `fail_mark` (28 clay fill + ink X — not arcade red), `star_marigold`, `hand_cursor`
6. Extra chrome: `fail_empty` (ink stroke only), `bubble_bang` (clay + ink !), header accent word = clay, puzzle card paper-cream radius 24, outer frame `#1A1918`

Export paths: `cats/{breed}_{pose}_{size}.svg`, `furniture/{id}.svg`, `ui/{id}.svg`. Registry: `src/lib/artAssets.ts`.

Palette is wired as CSS variables on `:root` and as Tailwind tokens (`bg-paper`, `text-ink`, `bg-path`, …) in `src/app/globals.css`.

| Token | Hex | Use |
| --- | --- | --- |
| `--paper` | `#F7F0E6` | Screen / board / modal background. Never a pure-white void. |
| `--ink` | `#2B2A28` | Text and UI chrome. Never a pure-black outline. |
| `--clay` | `#E8A89A` | Soft fail marks, clay accents, header accent word. |
| `--sage` | `#8FAF8A` | Lawn, fountain water, success / coach pips. |
| `--marigold` | `#F0B429` | Stars, highlights. |
| `--path` | `#D96B4A` | Puzzle path / gate accents. |
| `--mist` | `#C4BDB4` | Secondary chrome, muted pills. |
| `--wood` | `#E2D4C2` | Furniture, walls, porch boards. |

### Line / fill

Warm charcoal strokes (`#2B2A28`), rounded caps, slight wobble. Flat fills — no gradients, no neon, no glossy arcade chrome.

### Cats

Bean / loaf silhouettes, readable at 48px. Puzzle cats use `public/assets/cats/calico_belly_72.svg` only. Yard friends use loaf SVGs (`ginger_loaf_48/72` for Mango, plus cream / slate / calico).

### Furniture (chunky woodblock)

| Piece | File | Notes |
| --- | --- | --- |
| Box | `public/assets/furniture/boxBed.svg` | Gifted with Mango at unique clear 3 (CEO). |
| Swing | `public/assets/furniture/swing.svg` | Shop stub; also stands in for the free onboarding tree. |
| Fountain | `public/assets/furniture/fountain.svg` | Shop stub + lawn fixture on the isometric yard. |
| Post + bell | `public/assets/furniture/postBell.svg` | Shop stub / yard trim. |
| Fence | `public/assets/furniture/fence.svg` | Shop stub / yard trim. |

### Screens

- **Puzzle:** cream paper card (`paper-card`) with path-colored inset accents and path gates.
- **Unlock / name modal:** cream paper card, wood-ink input, paper+ink buttons.
- **Yard:** cream isometric porch + sage lawn (`yard_iso.svg`), woodblock furniture, loaf cats.

### Kill list (do not ship)

- Pure-white void backgrounds
- Pure-black outlines
- Arcade-red fail Xs — use clay `fail_mark.svg` / path-soft treatment instead

Puzzle fail marks sit on cream `fail_empty.svg` slots. Continue sheet never uses a red X. Hand cursor fill is paper, not white.

Assets live under `public/assets/{cats,furniture,ui}/` and can be swapped in place.

## Playable beat

L1 Straight Shot → L2 Setup Slide → L3 Wall as Brake → **name Mango** + boxBed. Hearts on 1 and 2; the friend lands on 3. L4–L10 stay on LT01. Biscuit + Sun Cushion wait until unique clear 9.
