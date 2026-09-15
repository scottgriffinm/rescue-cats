# Ch4 — friend_068 Tulip@204 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Poppy@201  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_068` |
| unlock_clear | **204** |
| default_name | **Tulip** |
| tier | C |
| color / pattern | Orange / Freckled (spring tulip loaf + stem freckles — not Poppy scarlet, Lotus pale-pink, Orchid blush-orchid, Iris indigo-violet) |
| personality | Tulip-soft |
| board_color | orange |
| art_kit | `tulip` (spring tulip loaf `#E07090` + stem freckles `#2A4020` — not Poppy `#D94A5A/#3A1218`, Lotus `#F2B8C8/#4A2840`, Orchid `#C989B8/#3A2038` or `#EAC8DC`, Iris `#5B4F9A/#1C1630`) |
| display_line | Spring bright. Already claimed the tulip vase. |

## Chips
**Tulip / Stem / Glow**

Ban: Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Coral/Bloom · Pebble · all prior pools. Stem chip is CEO-locked on Tulip (do not ban Stem here). Tulip chip is CEO-locked on Tulip.

## Bang
```
"{Name}: Spring bright. Already claimed the tulip vase."
"{Name}: Looks yard-cool. Owns the vase."
```
Yard: `{Name} claimed the tulip vase.`

## Gift
None @204.

## Cadence
Poppy@201 → L202–L204 → **Tulip@204** on L204 clear → L205–L207 triad. No friend_069 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_tulip_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[204]=friend_068`  
3. lockChips + Met + single tulip-vase slot  
4. verify no Poppy collision; Poppy…Bean unchanged; no Pebble  
5. CAMPAIGN through L207; `verify:levels` green
