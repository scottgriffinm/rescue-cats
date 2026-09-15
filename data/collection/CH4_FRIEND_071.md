# Ch4 — friend_071 Crocus@213 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Lily@210  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_071` |
| unlock_clear | **213** |
| default_name | **Crocus** |
| tier | C |
| color / pattern | Saffron / Freckled (saffron-crocus loaf + tip freckles — not Lily ivory-lily, Violet woodland-purple, Tulip spring-pink, Azalea fuchsia, Orchid blush) |
| personality | Crocus-soft |
| board_color | gray |
| art_kit | `crocus` (saffron-crocus loaf `#C45A9A` + tip freckles `#2A1830` — not Lily `#F5F0E6/#C8A84A`, Violet `#6B4AA0/#1E2A18`, Tulip `#E07090/#2A4020`, Azalea fuchsia, Orchid blush) |
| display_line | Saffron soft. Already claimed the crocus cup. |

## Chips
**Crocus / Saffron / Tip**

Ban: Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Sage · Sorrel/Dock/Zest · Clover/Fern · Coral/Bloom · Pebble · all prior pools. Crocus / Saffron / Tip chips are CEO-locked on Crocus.

## Bang
```
"{Name}: Saffron soft. Already claimed the crocus cup."
"{Name}: Looks yard-cool. Owns the cup."
```
Yard: `{Name} claimed the crocus cup.`

## Gift
None @213.

## Cadence
Lily@210 → L211–L213 → **Crocus@213** on L213 clear → L214–L216 triad. No friend_072 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_crocus_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[213]=friend_071`  
3. lockChips + Met + single crocus-cup slot  
4. verify no Lily collision; Lily…Bean unchanged; no Pebble  
5. CAMPAIGN through L216; `verify:levels` green
