# Ch4 — friend_093 Salvia@279 LOCKED
**Owner:** Cat Collection Lead  
**After:** Impatiens@276  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_093` |
| unlock_clear | **279** |
| default_name | **Salvia** |
| tier | C |
| color / pattern | Sage / Torch (sage loaf + torch freckles — not Impatiens, Verbena, Lavender, Pansy) |
| personality | Salvia-soft |
| board_color | gray |
| art_kit | `salvia` (sage loaf `#6B4C9A` + torch freckles `#2A1838` — not Impatiens `#FF6B9A/#2A4018`, not Verbena `#C05090/#3A1830`, not Lavender `#9B7EBD/#3A2A58`, not Pansy `#6B5ACD/#1A1030`) |
| display_line | Sage soft. Already claimed the salvia torch. |

## Chips
**Salvia / Sage / Torch** — empty prefill, `require_choice`, `lockChips`

Ban: Impatiens/Busy/Box · Verbena/Spike/Pot · Pansy/Face/Saucer · Petunia/Flare/Basket · Nasturtium/Pepper/Tray · Geranium/Cluster/Sill · Freesia/Trumpet/Vase · Ranunculus/Layer/Nest · Begonia/Ruffle/Planter · Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools.

## Bang
```
"{Name}: Sage soft. Already claimed the salvia torch."
"{Name}: Looks yard-soft. Owns the torch."
```
Yard: `{Name} claimed the salvia torch.` — single salvia-torch slot

## Gift
None @279.

## Cadence
Impatiens@276 → L277–L279 → **Salvia@279** on L279 clear → L280–L282 triad. No friend_094 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_salvia_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[279]=friend_093`  
3. lockChips + Met + single salvia-torch slot  
4. verify no Impatiens collision; Impatiens…Bean unchanged; no Pebble  
5. CAMPAIGN through L282; `verify:levels` green
