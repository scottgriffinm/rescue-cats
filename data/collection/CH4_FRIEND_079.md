# Ch4 — friend_079 Buttercup@237 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Primrose@234  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_079` |
| unlock_clear | **237** |
| default_name | **Buttercup** |
| tier | C |
| color / pattern | Meadow / Gloss (meadow buttercup loaf + gloss freckles — not Primrose pale, Marigold sun-gold, Bergamot citrus, Zinnia flame) |
| personality | Buttercup-soft |
| board_color | gray |
| art_kit | `buttercup` (meadow buttercup loaf `#F5D030` + gloss freckles `#6A4A10` — not Primrose `#F2D4A0/#8A5A20`, Marigold `#F0A020/#4A3010`, Bergamot `#F0C98A/#9A5A1A`, Zinnia `#E85A2A/#3A1808`) |
| display_line | Meadow bright. Already claimed the buttercup cup. |

## Chips
**Buttercup / Meadow / Gloss**

Ban: Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl · Lovage/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Sage · Sorrel/Dock/Zest · Clover/Fern · Coral/Bloom · Pebble · all prior pools. Buttercup / Meadow / Gloss chips are CEO-locked on Buttercup.

## Bang
```
"{Name}: Meadow bright. Already claimed the buttercup cup."
"{Name}: Looks yard-cool. Owns the cup."
```
Yard: `{Name} claimed the buttercup cup.`

## Gift
None @237.

## Cadence
Primrose@234 → L235–L237 → **Buttercup@237** on L237 clear → L238–L240 triad. No friend_080 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_buttercup_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[237]=friend_079`  
3. lockChips + Met + single buttercup-cup slot  
4. verify no Primrose collision; Primrose…Bean unchanged; no Pebble  
5. CAMPAIGN through L240; `verify:levels` green
