# Comfort escalation — Rival yard-tidy kill
**Owner:** Cat Collection Lead (coord Art porch kit)  
**Status:** READY  
**Pack JSON:** `/workspace/cat-game/data/shop/COMFORT_ESCALATION.json`  
**Locks:** soft Hearts only; no IAP / heart packs; **no friend_021**; **no Pebble**; parade untouched

## Kill
Full parade + ~120♥ still shows Comfort ~2.

## Cause
1. `furn_fountain_stone` + `furn_perch_high` live in CURRENT with prices but **not** in `CHAPTER2.shop.items` → `shopUnlockClear` undefined → never sold.
2. `YardScene` always draws `fountain` as scenery — ownership never gates it; High Perch never placed from save.

## Ship (Engineer)
### Shop
Extend shop items (chapter2 shop or imported escalation JSON):
| SKU | Unlock clear | Hearts | Comfort |
|-----|-------------:|-------:|--------:|
| Stone Fountain | 18 (Mist) | 90 | 2 |
| High Perch | 36 (Ash) | **120** (shop override; was 200) | 3 |

Keep existing: scratch@3 / tree@3 / yarn@6.

### Gifts (`furnitureGiftsForClear`)
| Clear | Gift | Rule |
|------:|------|------|
| 3 | Box | keep |
| 9 | Sun Cushion | keep |
| 27 | Stone Fountain | if not already owned |
| 48 | Yarn Swing | if not already owned |
| other friend clears | nothing | keep |

### Yard placement
- Gate fountain: `{hasFountain && <FurnitureImg file="fountain" …/>}` — remove always-on decor fountain.
- Add `hasPerch` / `hasFountain` props from `YardScreen` (`furn_perch_high`, `furn_fountain_stone`).
- Place High Perch (`swing` asset) when owned — one clear porch slot (don’t stack on yarn).

### Copy (optional one-liners)
- Buy fountain: “Water on the porch. Comfort climbs.”
- Buy perch: “A high seat. Someone will claim it.”
- Gift fountain @27: “{Name} found a fountain for the yard.”

### Art
Art pack: `/workspace/cat-game-art/packs/comfort-escalation/` — High Perch rewrites `swing.svg` (tall post + marigold seat, not a second yarn swing). Fountain stays `fountain.svg`. No `perch.svg`. No friend_021.

## Verify
1. Fresh run to Mist@18 → fountain appears in Hearts shop at 90♥.
2. Buy fountain → Comfort +2 and fountain sprite appears (wasn’t there before buy).
3. Ash@36 → perch in shop at 120♥; buy → Comfort +3 + perch sprite.
4. Skip fountain buys → Shadow@27 gifts fountain once.
5. Full owned set Comfort meter > 2 (target ~10–12).
6. `rg friend_021` clean; economy still soft_hearts / no IAP.

## Non-goals
No friend_021. No parade remaps. No CURRENT friend list edits.
