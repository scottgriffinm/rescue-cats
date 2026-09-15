# Ch4 — friend_073 Foxglove@219 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Hyacinth@216  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_073` |
| unlock_clear | **219** |
| default_name | **Foxglove** |
| tier | C |
| color / pattern | Spotted / Freckled (spotted foxglove loaf + throat freckles — not Hyacinth cluster-hyacinth, Crocus saffron-crocus, Orchid orchid-mauve, Tulip tulip-pink, Peony blush) |
| personality | Foxglove-soft |
| board_color | gray |
| art_kit | `foxglove` (spotted foxglove loaf `#D478A0` + throat freckles `#3A2030` — not Hyacinth `#5A6EC8/#1E2448`, Crocus `#C45A9A/#2A1830`, Orchid `#C989B8/#3A2038`, Tulip `#E07090/#2A4020`, Peony blush) |
| display_line | Spotted soft. Already claimed the foxglove tower. |

## Chips
**Foxglove / Tower / Throat**

Ban: Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Sage · Sorrel/Dock/Zest · Clover/Fern · Coral/Bloom · Pebble · all prior pools. Foxglove / Tower / Throat chips are CEO-locked on Foxglove.

## Bang
```
"{Name}: Spotted soft. Already claimed the foxglove tower."
"{Name}: Looks yard-cool. Owns the tower."
```
Yard: `{Name} claimed the foxglove tower.`

## Gift
None @219.

## Cadence
Hyacinth@216 → L217–L219 → **Foxglove@219** on L219 clear → L220–L222 triad. No friend_074 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_foxglove_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[219]=friend_073`  
3. lockChips + Met + single foxglove-tower slot  
4. verify no Hyacinth collision; Hyacinth…Bean unchanged; no Pebble  
5. CAMPAIGN through L222; `verify:levels` green
