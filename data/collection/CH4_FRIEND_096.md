# Ch4 — friend_096 Phlox@288 LOCKED
**Owner:** Cat Collection Lead  
**After:** Lantana@285  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_096` |
| unlock_clear | **288** |
| default_name | **Phlox** |
| tier | C |
| color / pattern | Floret / Bank (phlox loaf + floret freckles — not Lantana, Impatiens, Petunia, Pansy) |
| personality | Phlox-soft |
| board_color | orange |
| art_kit | `phlox` (cluster-panicle loaf `#D878A8` + floret freckles `#3A1830` — not Lantana `#E86040/#3A1810`, not Impatiens `#FF6B9A/#2A4018`, not Petunia `#C060A0/#2A1030`, not Pansy `#6B5ACD/#1A1030`) |
| display_line | Floret soft. Already claimed the phlox bank. |

## Chips
**Phlox / Floret / Bank** — empty prefill, `require_choice`, `lockChips`

Ban: Lantana/Umbel/Mound · Calendula/Petal/Tin · Salvia/Sage/Torch · Impatiens/Busy/Box · Verbena/Spike/Pot · Pansy/Face/Saucer · Petunia/Flare/Basket · Nasturtium/Pepper/Tray · Geranium/Cluster/Sill · Freesia/Trumpet/Vase · Ranunculus/Layer/Nest · Begonia/Ruffle/Planter · Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools.

## Bang
```
"{Name}: Floret soft. Already claimed the phlox bank."
"{Name}: Looks yard-soft. Owns the bank."
```
Yard: `{Name} claimed the phlox bank.` — single phlox-bank slot

## Gift
None @288.

## Cadence
Lantana@285 → L286–L288 → **Phlox@288** on L288 clear → L289–L291 triad. No friend_097 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_phlox_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[288]=friend_096`  
3. lockChips + Met + single phlox-bank slot  
4. verify no Lantana collision; Lantana…Bean unchanged; no Pebble  
5. CAMPAIGN through L291; `verify:levels` green
