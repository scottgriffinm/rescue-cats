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

Onboarding so the porch is not barren: **mini cat tree is placed free** from a fresh save (Comfort 2). Bible also asked for a free first box; CEO freeze moved the cardboard box to the Mango beat at clear 3 so that unlock still gifts furniture (no second gift on that unlock). Yarn swing + later shop rungs 15 / 40 / 90 / 200 sit in CURRENT as stubs.

Cadence (aligned with locked Puzzle pack): a `FriendInstance` every 3 unique clears for the first 20 cats, then every 5. Hearts on every clear (CURRENT bands; bible range 3–8 is covered on early clears). Porch/Lawn only. Comfort on the HUD. Friends / Met tabs list named instances vs the tutorial five.

Pity / rarity: `src/lib/pity.ts` stubs only (`soft_pity_c_streak` 12, `force_a_by_clear` 25, SS weight 0).

### Collection policy — LOCKED by CEO

Former bible v0 opens, now frozen. Types: `CollectionLocks` in `src/lib/types.ts`. Values: `COLLECTION_LOCKS` + `data/collection_CURRENT.json` → `locks`.

1. **Soft Hearts only.** No Heart packs, no IAP, no paid currency in the prototype. Hearts come from unique clears and spend on furniture SKUs.
2. **Duplicate names always allowed.** Each rescue is a new `FriendInstance`. Commons are never auto-merged.
3. **SS rarity = milestones first.** Not a seasonal calendar. Random SS weight is 0. Milestone stub: `ss_milestones` (clear 30) — not awarded in this slice.

## Collection — LOCKED (CURRENT v1.2, CEO freeze)

Load **`data/collection_CURRENT.json` only**. `collection_v1_pack.json` is a deprecated stub (it still says Mango @ clear 1 — **do not implement that**).

CEO override for the slice:

- First named friend **Mango (`friend_001`) at `onClear(3)`** after LT01 L1–L3.
- Parade: Mango@3, Ink@6, Biscuit@9, Tux@12, Ghost@15, Mist@18, Pepper@21, Pumpkin@24, Shadow@27, Noodle@30, … Bean@60.
- After cat 20, unlock every 5 clears (data-ready; not reached in this slice).
- Hearts on **every** unique clear (band table in CURRENT). Soft Hearts only — no IAP.
- Always allow duplicate names; never auto-merge.
- SS rarity = milestone-first (weights stubbed; SS = 0 in random table).
- Furniture gifts: cardboard box (`boxBed.svg`) with Mango @ 3; Sun Cushion @ 9 with Biscuit. No second gift on the Mango unlock. Mini tree is the free onboarding gift from bible v0.
- Data model: `Phenotype`, `FriendInstance`, `FurnitureSKU`, `YardComfort`, `UnlockFlags`, `CollectionLocks`.

Still later (not blocking): L12+ parade name reshuffles.

## Art — LOCKED (Art pack v1)

Art pack v1 is the theme lock. Numbered asset list can replace files in place; do not wait on it to theme.

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
| Box | `public/assets/furniture/boxBed.svg` | Gifted with Mango at unique clear 3. |
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

L1 Straight Shot → L2 Setup Slide → L3 Wall as Brake → **name Mango** → yard with boxBed. Hearts accrue on 1 and 2; the friend lands on 3. L4–L10 stay on LT01 (two-cat, collision, color-lock stubs).
