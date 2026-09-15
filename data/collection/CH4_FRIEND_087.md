# Ch4 — friend_087 Geranium@261 LOCKED
**Owner:** Cat Collection Lead  
**After:** Freesia@258  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_087` |
| unlock_clear | **261** |
| default_name | **Geranium** |
| tier | C |
| color / pattern | Cluster / Sill (cluster loaf + leaf freckles — not Freesia trumpet, Begonia ruffle, Poppy silk, Camellia wax) |
| personality | Geranium-soft |
| board_color | gray |
| art_kit | `geranium` (cluster loaf `#E05070` + leaf freckles `#2A4018` — not Freesia `#F5E080/#6A5020`, not Begonia `#E87868/#3A2818`, not Poppy `#D94A5A/#3A1218`, not Camellia `#C45A6A/#5A2030`) |
| display_line | Cluster soft. Already claimed the geranium sill. |

## Chips
**Geranium / Cluster / Sill**

Ban: Freesia/Trumpet/Vase · Ranunculus/Layer/Nest · Begonia/Ruffle/Planter · Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools. Geranium / Cluster / Sill chips are CEO-locked on Geranium.

Note: Hyacinth uses Cluster chip — ban holds; Geranium Cluster chip is the new lockChips set only for this friend.

## Bang
```
"{Name}: Cluster soft. Already claimed the geranium sill."
"{Name}: Looks yard-soft. Owns the sill."
```
Yard: `{Name} claimed the geranium sill.` — single geranium-sill slot

## Gift
None @261.

## Cadence
Freesia@258 → L259–L261 → **Geranium@261** on L261 clear → L262–L264 triad. No friend_088 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_geranium_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[261]=friend_087`  
3. lockChips + Met + single geranium-sill slot  
4. verify no Freesia collision; Freesia…Bean unchanged; no Pebble  
5. CAMPAIGN through L264; `verify:levels` green
