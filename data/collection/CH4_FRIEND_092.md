# Ch4 — friend_092 Impatiens@276 LOCKED
**Owner:** Cat Collection Lead  
**After:** Verbena@273  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_092` |
| unlock_clear | **276** |
| default_name | **Impatiens** |
| tier | C |
| color / pattern | Busy / Box (busy loaf + leaf freckles — not Verbena, Begonia, Geranium, Anemone) |
| personality | Impatiens-soft |
| board_color | orange |
| art_kit | `impatiens` (busy loaf `#FF6B9A` + leaf freckles `#2A4018` — not Verbena `#C05090/#3A1830`, not Begonia `#E87868/#3A2818`, not Geranium `#E05070/#2A4018`, not Anemone `#F0A8C8/#4A2038`) |
| display_line | Busy soft. Already claimed the impatiens box. |

## Chips
**Impatiens / Busy / Box** — empty prefill, `require_choice`, `lockChips`

Ban: Verbena/Spike/Pot · Pansy/Face/Saucer · Petunia/Flare/Basket · Nasturtium/Pepper/Tray · Geranium/Cluster/Sill · Freesia/Trumpet/Vase · Ranunculus/Layer/Nest · Begonia/Ruffle/Planter · Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools.

## Bang
```
"{Name}: Busy soft. Already claimed the impatiens box."
"{Name}: Looks yard-soft. Owns the box."
```
Yard: `{Name} claimed the impatiens box.` — single impatiens-box slot

## Gift
None @276.

## Cadence
Verbena@273 → L274–L276 → **Impatiens@276** on L276 clear → L277–L279 triad. No friend_093 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_impatiens_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[276]=friend_092`  
3. lockChips + Met + single impatiens-box slot  
4. verify no Verbena collision; Verbena…Bean unchanged; no Pebble  
5. CAMPAIGN through L279; `verify:levels` green
