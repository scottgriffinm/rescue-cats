# Ch4 — friend_070 Lily@210 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Violet@207  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_070` |
| unlock_clear | **210** |
| default_name | **Lily** |
| tier | C |
| color / pattern | Ivory / Freckled (ivory-lily loaf + pollen freckles — not Violet woodland-purple, Gardenia porcelain, Jasmine ivory, Magnolia blush, Tulip spring-pink) |
| personality | Lily-soft |
| board_color | orange |
| art_kit | `lily` (ivory-lily loaf `#F5F0E6` + pollen freckles `#C8A84A` — not Violet `#6B4AA0/#1E2A18`, Gardenia porcelain, Jasmine ivory, Magnolia blush, Tulip `#E07090/#2A4020`) |
| display_line | Ivory soft. Already claimed the lily bowl. |

## Chips
**Lily / Pollen / Crest**

Ban: Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Sage · Sorrel/Dock/Zest · Clover/Fern · Coral/Bloom · Pebble · all prior pools. Lily / Pollen / Crest chips are CEO-locked on Lily.

## Bang
```
"{Name}: Ivory soft. Already claimed the lily bowl."
"{Name}: Looks yard-cool. Owns the bowl."
```
Yard: `{Name} claimed the lily bowl.`

## Gift
None @210.

## Cadence
Violet@207 → L208–L210 → **Lily@210** on L210 clear → L211–L213 triad. No friend_071 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_lily_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[210]=friend_070`  
3. lockChips + Met + single lily-bowl slot  
4. verify no Violet collision; Violet…Bean unchanged; no Pebble  
5. CAMPAIGN through L213; `verify:levels` green
