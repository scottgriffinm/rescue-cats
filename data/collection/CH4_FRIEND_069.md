# Ch4 — friend_069 Violet@207 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Tulip@204  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_069` |
| unlock_clear | **207** |
| default_name | **Violet** |
| tier | C |
| color / pattern | Gray / Freckled (woodland violet loaf + leaf freckles — not Tulip spring-pink, Iris indigo-violet, Aster lilac, Orchid blush, Lavender kits) |
| personality | Violet-soft |
| board_color | gray |
| art_kit | `violet` (woodland violet loaf `#6B4AA0` + leaf freckles `#1E2A18` — not Tulip `#E07090/#2A4020`, Iris `#5B4F9A/#1C1630`, Aster `#7B6BB5/#2A2040`, Orchid blush, Lavender kits) |
| display_line | Woodland soft. Already claimed the violet patch. |

## Chips
**Violet / Patch / Moss**

Ban: Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Sage · Sorrel/Dock/Zest · Clover/Fern · Coral/Bloom · Pebble · all prior pools. Patch chip is CEO-locked on Violet (do not ban Patch here). Moss chip is CEO-locked on Violet (do not ban Moss here). Violet chip is CEO-locked on Violet.

## Bang
```
"{Name}: Woodland soft. Already claimed the violet patch."
"{Name}: Looks yard-cool. Owns the patch."
```
Yard: `{Name} claimed the violet patch.`

## Gift
None @207.

## Cadence
Tulip@204 → L205–L207 → **Violet@207** on L207 clear → L208–L210 triad. No friend_070 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_violet_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[207]=friend_069`  
3. lockChips + Met + single violet-patch slot  
4. verify no Tulip collision; Tulip…Bean unchanged; no Pebble  
5. CAMPAIGN through L210; `verify:levels` green
