# Rescue Cats — design locks

Studio freeze for the vertical slice. Puzzle + Collection cadence + Art pack v1 are **LOCKED**. Later parade name-shuffles (Pebble, etc.) are ignored.

## Puzzle — LOCKED (Template 01 / LT01 Teach Slide)

**Verb: slide-budget routing.** Tap a cat, then slide them one cardinal direction until they hit a **wall, blocker, another cat, or the board edge**. Matching gates do **not** stop a slide — occupy a matching gate at rest to win. Sliding through a matching house or overshooting continues. On LT08 color-lock boards, a **mismatch house is a solid**.

- **Win:** every cat sits on a yard-gate tile, in ≤ N slides.
- **Cost:** the move counter decrements once per slide start (illegal / zero-length slides are free).
- **Soft fail:** budget exhausted with cats still off-gate → 1 X, free retry of the same printed board. Xs persist per level.
- **3 Xs:** continue sheet — 1 ticket **or** optional rewarded-ad **stub** (UI only). **Never** ads mid-puzzle.
- **Stars:** leftover slides → 3★ if leftover ≥ ceil(N/2), 2★ if leftover ≥ ceil(N/4), else 1★. Stars unlock **yard cosmetics only**, never cats or campaign gates.
- **Nudges / color locks:** encoded on the L1–48 budget table; inactive on authored LT01 boards. Board colors normalize to `orange | gray | black`.

Authoritative teach boards: `data/levels/L01-L03.json` (studio handoff). L2 is a two-cell wall run (Template 01 prose said “1 wall”; the JSON is the lock). L4–L9 continue the locked Chapter 2 packs. L11–L51 are the Chapter 3 color-brake boards (budgets from `data/levels/move_budget_L01-L30.json`). Engine: `src/lib/slide.ts`. Unique clears emit `onClear(clearIndex)` from `src/lib/onClear.ts`. Parade friends key off the level number so L12 awards Tux, L15 awards Ghost, L18 awards Mist, L21 awards Pepper, L24 awards Pumpkin, L27 awards Shadow, L30 awards Noodle, L33 awards Clover, L36 awards Ash, L39 awards Oak, L42 awards Dumpling, L45 awards Stripe, and L48 awards Cloud even though L10 is off the path.

Acceptance: slide stops on wall / cat / edge only; gates never brake; counter decrements once per slide start; win = all cats on gates at rest; budget exhaust → X and board reset (Xs persist per level); no mid-puzzle ads.

L3 topology (5×5, top-left origin): cat (2,0), gate (2,2), walls (1,2)(3,2)(2,3). Only clear is south — the wall south of G brakes you ON the gate. Side routes overshoot through G. L1/L2 win via an edge cell behind the house.

## Chapter 2 — OPEN (sister-ready campaign)

Continuous build past the Mango slice. Same slide engine (stop on wall | cat | edge only).

- **L4–L5 LT02 two-cat collision.** A parked cat is a brake: the slider stops on the adjacent cell. Order matters — move the brake first and the other overshoots through the house.
- **L6–L7 route depth.** Blocked straight lanes; authored solves are 8-slide corridors.
- **L8–L9 LT08 color locks.** JSON uses `color_orange` / `color_gray`. Orange coat → orange house. The near house is the wrong coat and acts as a **solid**. Matching houses still do not brake.
- **L10** stays the tight-pair closer and is **not** on the campaign path.
- **onClear(6) → Ink (`friend_002`).** Naming is still a choice (empty prefill + chips). Pack: `data/chapter2_ink_shop_bang.json`. Each new friend gets their own yard `!` copy variants. Hearts shop starter (sisal post, 15♥) opens at clear 6.

## Chapter 3 — OPEN (sister-ready next slice)

Same slide engine. Campaign after L9 is **L11–L51** (skip L10).

- **L11 Color Brake.** Mid-board matching house. Park a friend past the house — matching coats still slide through.
- **L12 Park First.** Hold the far cell so the slider stops on their house. Overshoot if you go first.
- **L13 Step Off.** Leave the edge house to brake the mid-board matching house.
- **L14 Park Close.** Hold the adjacent cell — L12's far-edge park overshoots a closer house.
- **L15 Thread Bottom.** Park the mid house, then thread the bottom wall.
- **L16 Hold Still.** The friend already sits as the brake. Move them first and the mid house overshoots.
- **L17 Hold South.** Park under the house — L12's far-edge park overshoots.
- **L18 Park Across.** Hold the next cell on the same row after the walls force the setup.
- **L19 Hold North.** Park above the mid house — south-first habits overshoot.
- **L20 Hold East.** Park east of the house. Slide through and you miss the stop.
- **L21 Thread Park.** Park to brake the south lane, then thread west onto the house.
- **L22 Hold West.** Park west of the house. Slide through and you miss the stop.
- **L23 Hold Corner.** Hold the corner cell above the house — the open south lane overshoots.
- **L24 Color Brake.** Gray house is the west solid. Climb into the color stop — park-high habits miss it.
- **L25 Vacate Column.** Leave the house column, then the south solid. Park-low alone overshoots.
- **L26 Thread East.** Park above, then thread the east lane onto the house.
- **L27 Thread Black.** First black coat + black house. Park east, then thread south.
- **L28 Park West.** Park west of the house. L27's east park slides through.
- **L29 Color Cross.** Black and orange lock adjacent. Hold-north habits miss the cross.
- **L30 Thread South.** Thread onto the south black solid. Hold-south alone is not enough.
- **L31 Vacate West.** Leave before the west black solid works. Hold-east habits miss the vacate.
- **L32 Thread North.** Park above, then thread the north lane onto the house.
- **L33 Thread West.** Sit past the house, then park west. North-first habits miss the stop.
- **L34 Solid West.** The gray house is the west brake. Park a friend there and gray overshoots.
- **L35 Vacate First.** Leave the house column, then park west. L34's solid-west slide goes through.
- **L36 Park Above.** Sit past south, then park above. L35's west park misses the stop.
- **L37 Park Below.** Sit past north, then park below. L36's park-above misses the stop.
- **L38 Solid East.** The black house is the east brake. Park a friend there and black overshoots.
- **L39 Vacate East.** Leave the house row, then the east solid. L38's solid-east slide goes through.
- **L40 Solid South.** The gray house is the south brake. East-row vacate habits from L39 miss the stop.
- **L41 Vacate South.** Leave the house column first, then the south solid.
- **L42 Park East.** Hold the cell east of the mid house.
- **L43 Thread West.** Park close under the mid house — L42 park-east overshoots. (Hold* mill title killed.)
- **L44 Solid North.** The black house is the north brake.
- **L45 Vacate North.** Leave the house column first, then the north solid.
- **L46 Dual Brake.** Park east of the mid house — L45 vacate-north overshoots. (Hold* mill title killed.)
- **L47 Solid West.** The black house is the west brake.
- **L48 Vacate Row.** Leave the house row first, then the west solid (≠ L31 Vacate West).
- **L49 Color Step.** Gray mismatch solid is the setup step — vacate-row habits miss.
- **L50 Latch Through.** East corridor onto the mid house.
- **L51 Offset Brake.**
- **L52 Thread North.**
- **L53 Color Latch.**
- **L54 Swap Brake.**
- **Donna@51** — split-face calico loaf; chips Donna/Karen/Helen; no gift. Orange/black color-cross dual brake.
- **onClear(9) → Biscuit (`friend_003`).** Cream loaf, chips Biscuit / Mochi / Toast, Sun Cushion gift. Pack: `data/chapter3_biscuit_bang.json`.
- **onClear(12) → Tux (`friend_004`) after L12.** Tuxedo loaf, chips Tux / Domino / Bowtie, no furniture gift. Pack: `data/chapter3_tux_bang.json`.
- **onClear(15) → Ghost (`friend_005`) after L15.** Pale gray-cream loaf, chips Ghost / Wisp / Pearl, no furniture gift. Pack: `data/chapter3_ghost_bang.json`.
- **onClear(18) → Mist (`friend_006`) after L18.** Gray-mackerel loaf, chips Mist / Fog / Soft, no furniture gift. Pack: `data/chapter3_mist_bang.json`.
- **onClear(21) → Pepper (`friend_007`) after L21.** Orange spotted loaf, chips Pepper / Spice / Pip, no furniture gift. Pack: `data/chapter3_pepper_bang.json`.
- **onClear(24) → Pumpkin (`friend_008`) after L24.** Orange classic loaf, chips Pumpkin / Squash / Ember, no furniture gift. Pack: `data/chapter3_pumpkin_bang.json`.
- **onClear(27) → Shadow (`friend_009`) after L27.** Full-black loaf, chips Midnight / Inkspot / Onyx, no furniture gift. Pack: `data/chapter3_shadow_bang.json`.
- **onClear(30) → Noodle (`friend_010`) after L30.** Long cream-mackerel loaf, chips Noodle / Ramen / Twirl, no furniture gift. Pack: `data/chapter3_noodle_bang.json`.
- **onClear(33) → Clover (`friend_011`) after L33.** Soft gray-spotted loaf, chips Clover / Patch / Fern, no furniture gift. Pack: `data/chapter3_clover_bang.json`.
- **onClear(36) → Ash (`friend_012`) after L36.** Warm hearth-ash loaf, chips Cinder / Soot / Hearth, no furniture gift. Pack: `data/chapter3_ash_bang.json`.
- **onClear(39) → Oak (`friend_013`) after L39.** Bark-warm classic blotch loaf, chips Oak / Acorn / Timber, no furniture gift. Pack: `data/chapter3_oak_bang.json`.
- **onClear(42) → Dumpling (`friend_014`) after L42.** Plump cream-fold loaf, chips Dumpling / Bao / Potsticker, no furniture gift. Pack: `data/chapter3_dumpling_bang.json`.
- **onClear(45) → Stripe (`friend_015`) after L45.** Orange road-map mackerel loaf, chips Stripe / Dash / Lane, no furniture gift. Pack: `data/chapter3_stripe_bang.json`.
- **onClear(48) → Cloud (`friend_016`) after L48.** Puff-stack cream loaf, chips Cloud / Puff / Drift, no furniture gift. Pack: `data/chapter3_cloud_bang.json`. Donna@51 and Bean@60 ship later.

Retarget later templates by swapping JSON + keeping the slide helper.

## Collection bible v0 — implemented (non-blocking opens)

Cited so Collection Lead can swap content without touching puzzle code. Data model in `src/lib/types.ts`:

- `Phenotype` — breed, coat color/pattern, body, tail, eye accent, personality beat
- `FriendInstance` — name, phenotypeId, rescuedAt, optional `favoriteToy`
- `FurnitureSKU`, `YardComfort`, `UnlockFlags` (`mangoNamed`, `porchUnlocked`)

First sixteen rescues (`TUTORIAL_RESCUES`) are a curated C/B, Regular-body parade: Mango, Ink, Biscuit, Tux, Ghost, Mist, Pepper, Pumpkin, Shadow, Noodle, Clover, Ash, Oak, Dumpling, Stripe, Cloud. Naming modal reveals the personality line, suggests a name (pools include Mochi / Bean / Pip-adjacent food names), Confirm → yard drop-in + `"{Name} moved in!"` and a first-night !. Session return can show 1–3 ! bubbles.

Onboarding furniture: mini tree is placed free so L1–L2 are not barren. Cardboard box lands with Mango at clear 3; Sun Cushion with Biscuit at clear 9. Yarn swing stays a Hearts shop stub.

Cadence is Collection v1.1: cat every 3 unique clears for the first 20, Hearts on every clear. Porch/Lawn only. Comfort on the HUD. Friends / Met tabs list named instances vs the tutorial twelve.

Pity / rarity: `src/lib/pity.ts` stubs only (`soft_pity_c_streak` 12, `force_a_by_clear` 25, SS weight 0).

### Collection policy — LOCKED

Types: `CollectionLocks` in `src/lib/types.ts`. Values: `COLLECTION_LOCKS`.

1. **Soft Hearts only.** No Heart packs, no IAP, no paid currency in the prototype. Hearts come from unique clears and spend on furniture SKUs.
2. **Duplicate names always allowed.** Each rescue is a new `FriendInstance`. Commons are never auto-merged. Renaming to an existing name is fine.
3. **SS rarity = milestones first.** Not a seasonal calendar. Random SS weight is 0.

## Collection — CEO FREEZE (CURRENT v1.2)

Load **`data/collection_CURRENT.json` only** (stamped FROZEN / v1.2 canonical). Ignore deprecated v1. If a stale `unlock_clear: 1` appears, ignore it.

Slice dopamine beat: **Mango @ `onClear(3)`** after teach L1–L3, then naming + box gift. Unlock table covers **3 / 6 / 9 / 12 / 15 / 18 / 21 / 24 / 27 / 30 / 33 / 36 / 39 / 42 / 45 / 48**. CURRENT is frozen and correct. **NO Pebble.** Parade: Mango@3, Ink@6, Biscuit@9, Tux@12, Ghost@15, Mist@18, Pepper@21, Pumpkin@24, Shadow@27 (first full-black), Noodle@30, Clover@33, Ash@36, Oak@39, Dumpling@42, Stripe@45, Cloud@48, … Bean@60. Ignore any chat saying Pebble.

Board color enums for the slice: `orange | gray | black`. LT08+ gates map to these strings; `color_orange` etc. normalize in `src/lib/colors.ts` + level hydrate.

- First named friend **Mango (`friend_001`) at `onClear(3)`** after LT01 L1–L3.
- Parade: Mango@3, Ink@6, Biscuit@9, Tux@12, Ghost@15, Mist@18, Pepper@21, Pumpkin@24, Shadow@27 (first full-black), Noodle@30, Clover@33, Ash@36, Oak@39, Dumpling@42, Stripe@45, Cloud@48, … Bean@60. **NO Pebble.**
- Clear 48 → 16 cats (through Cloud `friend_016`).
- Non-cat clears: Hearts only. Cats only on the every-3 cadence.
- Furniture gifts: cardboard box with Mango @ 3; Sun Cushion with Biscuit @ 9.
- Stars → yard cosmetics only.
- Soft Hearts; always allow duplicate names; SS milestone-first (random SS weight 0).

Display lines stay with the pack (Mango *“A sunny little explorer…”*, Ink *“Quiet paws…”*, Biscuit *“Here for snacks…”*, …).

## Art — LOCKED (Art pack v1 + Asset List v1)

Art pack v1 is the palette lock. **Art Asset List v1** is the file lock. Comps replace SVGs in `public/assets/{cats,furniture,ui}/`. Strokes are ink-warm `#2B2A28`. Mobile-first and fluid to desktop — the website **is** the game. Do not lock the site to a 390px phone mock.

Priority order (shipped):

1. CSS variables for the Art pack palette (`src/app/globals.css`)
2. `cat.pose.loaf` @48 — cream `#FFF8F0`, ginger `#D38B5D`, slate `#5A5E6B`, calico (cream + clay `#E8A89A` + slate blobs). Art Director SVG pack v1 is the file lock (verbatim under `public/assets/`). Mango = `ginger_loaf`. Optional hero: `ginger_loaf_160.svg`.
3. `cat.pose.belly` @72 calico — puzzle board cats only (`calico_belly_72.svg`). Ink yard art is `slate_loaf_48` / `slate_loaf_72`. LT08 houses use `gate_orange.svg` / `gate_gray.svg`.
4. Furniture woodblock: `boxBed` 96×72, `swing` 96×96, `postBell` 48×96 (bell marigold + mist), `fence` 120×48 tileable
5. UI: `btn_primary` (h 44, ink stroke, paper fill), `input_name`, `fail_mark` (28 clay fill + ink X — not arcade red), `star_marigold`, `hand_cursor`
6. Extra chrome: `fail_empty` (ink stroke only), `bubble_bang` (clay + ink !), header accent word = clay, puzzle card paper-cream radius 24. Full-bleed page `#E8DFD2` → cream cards `#F7F0E6`. **No PhoneFrame / device bezel / phone-in-a-void.** Ink outlines `#2B2A28`. Never mist `#C4BDB4`, pitch `#1A1918`, `#000`, or `#FFF` as stage fills.

Export paths: `cats/{breed}_{pose}_{size}.svg`, `furniture/{id}.svg`, `ui/{id}.svg`. Registry: `src/lib/artAssets.ts`.

Palette is wired as CSS variables on `:root` and as Tailwind tokens (`bg-paper`, `text-ink`, `bg-path`, …) in `src/app/globals.css`.

| Token | Hex | Use |
| --- | --- | --- |
| `--paper` | `#F7F0E6` | Puzzle / yard / naming cards. Never a pure-white void. |
| `--page-bg` | `#E8DFD2` | Full-bleed game page. Not a device bezel or phone-in-a-void. |
| `--ink` | `#2B2A28` | Text and UI chrome. Never a pure-black outline. |
| `--clay` | `#E8A89A` | Soft fail marks, clay accents, header accent word. |
| `--sage` | `#8FAF8A` | Lawn, fountain water, success / coach pips. |
| `--marigold` | `#F0B429` | Stars, highlights. |
| `--path` | `#D96B4A` | Puzzle path / gate accents. |
| `--mist` | `#C4BDB4` | Secondary chrome, muted pills. Never the page wrap. |
| `--wood` | `#E2D4C2` | Furniture, walls, porch boards. |

### Line / fill

Warm charcoal strokes (`#2B2A28`), rounded caps, slight wobble. Flat fills — no gradients, no neon, no glossy arcade chrome.

### Cats

Bean / loaf silhouettes, readable at 48px. Puzzle cats use `public/assets/cats/calico_belly_72.svg` only. Yard friends use loaf SVGs (`ginger_loaf_48/72` for Mango, cream for Biscuit, ink/slate for Ink, tuxedo black-and-cream for Tux, pale gray-cream for Ghost, gray-mackerel mist for Mist, spotted orange pepper for Pepper, classic orange swirls for Pumpkin, full-black shadow for Shadow, long cream-mackerel noodle for Noodle, soft gray-spotted clover for Clover, warm hearth-ash for Ash, plus calico).

### Furniture (chunky woodblock)

| Piece | File | Notes |
| --- | --- | --- |
| Box | `public/assets/furniture/boxBed.svg` | **Only** gift with Mango at unique clear 3. |
| Sun Cushion | `public/assets/furniture/sunCushion.svg` | **Only** gift with Biscuit at unique clear 9. |
| Swing | `public/assets/furniture/swing.svg` | Shop stub; also stands in for the free onboarding tree. |
| Fountain | `public/assets/furniture/fountain.svg` | Shop stub + lawn fixture on the isometric yard. |
| Post + bell | `public/assets/furniture/postBell.svg` | Shop stub / yard trim. |
| Fence | `public/assets/furniture/fence.svg` | Shop stub / yard trim. |

### Screens

- **Shell:** `GameShell` fills the viewport with page `#E8DFD2` + dots. Centered content, max ~34rem. Cream cards on top. Not a phone bezel.
- **Puzzle:** cream paper card (`paper-card`) with path-colored inset accents and path gates. Board scales with the column.
- **Unlock / name modal:** cream paper card, wood-ink input, paper+ink buttons.
- **Yard:** cream isometric porch + sage lawn (`yard_iso.svg`), woodblock furniture, loaf cats.

### Kill list (do not ship)

- PhoneFrame / device bezel / “phone in a void” presentation
- Pure-white void backgrounds
- Pitch `#1A1918` / `#000` / `#FFF` stage fills
- Mist `#C4BDB4` as the page / stage wrap
- Pure-black outlines
- Arcade-red fail Xs — use clay `fail_mark.svg` / path-soft treatment instead

Puzzle fail marks sit on cream `fail_empty.svg` slots. Continue sheet never uses a red X. Hand cursor fill is paper, not white.

Assets live under `public/assets/{cats,furniture,ui}/` and can be swapped in place.

## Playable beat (studio handoff)

L1 Straight Shot → L2 Setup Slide → L3 Wall as Brake → **name Mango** → yard with `boxBed`. Grid origin top-left, y down. Authored boards: `data/levels/L01-L03.json`.

Art mapping:

- `friend_001` Mango → `ginger_loaf_72` (hero / yard) + `ginger_loaf_48` (thumb); board color `orange`
- `furn_box_cardboard` → `boxBed.svg` (only gift on the Mango unlock)
- Naming chrome: `star_marigold` + `input_name` + `btn_primary`
- `calico_belly_72` = puzzle board cats only (not the Mango unlock)
