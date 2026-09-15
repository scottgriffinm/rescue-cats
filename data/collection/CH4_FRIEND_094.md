# Ch4 — friend_094 Calendula@282 LOCKED
**Owner:** Cat Collection Lead  
**After:** Salvia@279  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_094` |
| unlock_clear | **282** |
| default_name | **Calendula** |
| tier | C |
| color / pattern | Petal / Tin (calendula loaf + petal freckles — not Salvia, Marigold, Buttercup, Nasturtium) |
| personality | Calendula-soft |
| board_color | orange |
| art_kit | `calendula` (marigold-cousin loaf `#F4A020` + petal freckles `#5A3010` — not Salvia `#6B4C9A/#2A1838`, not Marigold `#E8A020/#5A3A10` / `#F0A020/#4A3010`, not Buttercup `#F5D030/#6A4A10`, not Nasturtium `#F07830/#3A2810`) |
| display_line | Petal soft. Already claimed the calendula tin. |

## Chips
**Calendula / Petal / Tin** — empty prefill, `require_choice`, `lockChips`

Ban: Salvia/Sage/Torch · Impatiens/Busy/Box · Verbena/Spike/Pot · Pansy/Face/Saucer · Petunia/Flare/Basket · Nasturtium/Pepper/Tray · Geranium/Cluster/Sill · Freesia/Trumpet/Vase · Ranunculus/Layer/Nest · Begonia/Ruffle/Planter · Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools.

## Bang
```
"{Name}: Petal soft. Already claimed the calendula tin."
"{Name}: Looks yard-soft. Owns the tin."
```
Yard: `{Name} claimed the calendula tin.` — single calendula-tin slot

## Gift
None @282.

## Cadence
Salvia@279 → L280–L282 → **Calendula@282** on L282 clear → L283–L285 triad. No friend_095 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_calendula_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[282]=friend_094`  
3. lockChips + Met + single calendula-tin slot  
4. verify no Salvia collision; Salvia…Bean unchanged; no Pebble  
5. CAMPAIGN through L285; `verify:levels` green
