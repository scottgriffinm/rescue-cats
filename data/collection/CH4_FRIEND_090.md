# Ch4 — friend_090 Pansy@270 LOCKED
**Owner:** Cat Collection Lead  
**After:** Petunia@267  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_090` |
| unlock_clear | **270** |
| default_name | **Pansy** |
| tier | C |
| color / pattern | Face / Saucer (face loaf + blot freckles — not Petunia, Violet, Wisteria, Clematis) |
| personality | Pansy-soft |
| board_color | orange |
| art_kit | `pansy` (face loaf `#6B5ACD` + blot freckles `#1A1030` — not Petunia `#C070E0/#3A1848`, not Violet `#7A5A9A/#2A1A40`, not Wisteria `#B8A0E8/#3A2868`, not Clematis `#7EC8E8/#1A3A58`) |
| display_line | Face soft. Already claimed the pansy saucer. |

## Chips
**Pansy / Face / Saucer**

Ban: Petunia/Flare/Basket · Nasturtium/Pepper/Tray · Geranium/Cluster/Sill · Freesia/Trumpet/Vase · Ranunculus/Layer/Nest · Begonia/Ruffle/Planter · Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools. Pansy / Face / Saucer chips are CEO-locked on Pansy.

## Bang
```
"{Name}: Face soft. Already claimed the pansy saucer."
"{Name}: Looks yard-soft. Owns the saucer."
```
Yard: `{Name} claimed the pansy saucer.` — single pansy-saucer slot

## Gift
None @270.

## Cadence
Petunia@267 → L268–L270 → **Pansy@270** on L270 clear → L271–L273 triad. No friend_091 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_pansy_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[270]=friend_090`  
3. lockChips + Met + single pansy-saucer slot  
4. verify no Petunia collision; Petunia…Bean unchanged; no Pebble  
5. CAMPAIGN through L273; `verify:levels` green
