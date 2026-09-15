# Ch4 — friend_072 Hyacinth@216 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Crocus@213  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_072` |
| unlock_clear | **216** |
| default_name | **Hyacinth** |
| tier | C |
| color / pattern | Cluster / Freckled (cluster hyacinth loaf + bloom freckles — not Crocus saffron-crocus, Lily ivory-lily, Violet woodland-purple, Iris blade-purple, Aster lavender) |
| personality | Hyacinth-soft |
| board_color | orange |
| art_kit | `hyacinth` (cluster hyacinth loaf `#5A6EC8` + bloom freckles `#1E2448` — not Crocus `#C45A9A/#2A1830`, Violet `#6B4AA0/#1E2A18`, Iris `#5B4F9A/#1C1630`, Aster `#7B6BB5/#2A2040`, Lily ivory) |
| display_line | Cluster cool. Already claimed the hyacinth spike. |

## Chips
**Hyacinth / Cluster / Bell**

Ban: Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Sage · Sorrel/Dock/Zest · Clover/Fern · Coral/Bloom · Pebble · all prior pools. Hyacinth / Cluster / Bell chips are CEO-locked on Hyacinth.

## Bang
```
"{Name}: Cluster cool. Already claimed the hyacinth spike."
"{Name}: Looks yard-cool. Owns the spike."
```
Yard: `{Name} claimed the hyacinth spike.`

## Gift
None @216.

## Cadence
Crocus@213 → L214–L216 → **Hyacinth@216** on L216 clear → L217–L219 triad. No friend_073 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_hyacinth_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[216]=friend_072`  
3. lockChips + Met + single hyacinth-spike slot  
4. verify no Crocus collision; Crocus…Bean unchanged; no Pebble  
5. CAMPAIGN through L219; `verify:levels` green
