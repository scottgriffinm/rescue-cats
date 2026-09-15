# Ch4 — friend_074 Bluebell@222 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Foxglove@219  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_074` |
| unlock_clear | **222** |
| default_name | **Bluebell** |
| tier | C |
| color / pattern | Woodland / Tipped (woodland bluebell loaf + tip freckles — not Foxglove spotted-foxglove, Hyacinth cluster-hyacinth, Violet violet-patch, Iris iris-blade, Aster aster-petal) |
| personality | Bluebell-soft |
| board_color | orange |
| art_kit | `bluebell` (woodland bluebell loaf `#4A7EC8` + tip freckles `#1A2848` — not Foxglove `#D478A0/#3A2030`, Hyacinth `#5A6EC8/#1E2448`, Violet `#6B4AA0/#1E2A18`, Iris `#5B4F9A/#1C1630`, Aster `#7B6BB5/#2A2040`) |
| display_line | Woodland blue. Already claimed the bluebell cloche. |

## Chips
**Bluebell / Cloche / Ring**

Ban: Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Sage · Sorrel/Dock/Zest · Clover/Fern · Coral/Bloom · Pebble · all prior pools. Bluebell / Cloche / Ring chips are CEO-locked on Bluebell.

## Bang
```
"{Name}: Woodland blue. Already claimed the bluebell cloche."
"{Name}: Looks yard-cool. Owns the cloche."
```
Yard: `{Name} claimed the bluebell cloche.`

## Gift
None @222.

## Cadence
Foxglove@219 → L220–L222 → **Bluebell@222** on L222 clear → L223–L225 triad. No friend_075 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_bluebell_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[222]=friend_074`  
3. lockChips + Met + single bluebell-cloche slot  
4. verify no Foxglove collision; Foxglove…Bean unchanged; no Pebble  
5. CAMPAIGN through L225; `verify:levels` green
