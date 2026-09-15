# Ch4 — friend_080 Cosmos@240 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Buttercup@237  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_080` |
| unlock_clear | **240** |
| default_name | **Cosmos** |
| tier | C |
| color / pattern | Airy / Ray (airy cosmos loaf + center freckles — not Buttercup meadow, Primrose pale, Peony petal, Orchid, Foxglove) |
| personality | Cosmos-soft |
| board_color | orange |
| art_kit | `cosmos` (airy cosmos loaf `#E8A0C0` + center freckles `#5A2848` — not Buttercup `#F5D030/#6A4A10`, not Primrose `#F2D4A0/#8A5A20`, not Peony `#E8B4C8/#5A3048`, not Orchid `#C989B8/#3A2038`, not Foxglove `#D478A0/#3A2030`) |
| display_line | Airy soft. Already claimed the cosmos stem. |

## Chips
**Cosmos / Airy / Ray**

Ban: Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl · Lovage/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Sage · Sorrel/Dock/Zest · Clover/Fern · Coral/Bloom · Pebble · all prior pools. Cosmos / Airy / Ray chips are CEO-locked on Cosmos.

## Bang
```
"{Name}: Airy soft. Already claimed the cosmos stem."
"{Name}: Looks yard-soft. Owns the stem."
```
Yard: `{Name} claimed the cosmos stem.` — single cosmos-stem slot (distinct from Iris stem via “cosmos stem”)

## Gift
None @240.

## Cadence
Buttercup@237 → L238–L240 → **Cosmos@240** on L240 clear → L241–L243 triad. No friend_081 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_cosmos_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[240]=friend_080`  
3. lockChips + Met + single cosmos-stem slot  
4. verify no Buttercup collision; Buttercup…Bean unchanged; no Pebble  
5. CAMPAIGN through L243; `verify:levels` green
