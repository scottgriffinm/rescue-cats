# Ch4 — friend_098 Cleome@294 LOCKED
**Owner:** Cat Collection Lead  
**After:** Celosia@291  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_098` |
| unlock_clear | **294** |
| default_name | **Cleome** |
| tier | C |
| color / pattern | Whisk / Pod (spider-whisk loaf + whisk freckles — not Celosia, Phlox, Salvia, Pansy) |
| personality | Cleome-soft |
| board_color | orange |
| art_kit | `cleome` (spider-whisk loaf `#C868E0` + whisk freckles `#2A1030` — not Celosia `#E04070/#2A1018`, not Phlox `#D878A8/#3A1830`, not Salvia `#6B4C9A/#2A1838`, not Pansy `#6B5ACD/#1A1030`) |
| display_line | Whisk soft. Already claimed the cleome pod. |

## Chips
**Cleome / Whisk / Pod** — empty prefill, `require_choice`, `lockChips`

Ban: Celosia/Plume/Comb · Phlox/Floret/Bank · Lantana/Umbel/Mound · Calendula/Petal/Tin · Salvia/Sage/Torch · Impatiens/Busy/Box · Verbena/Spike/Pot · Pansy/Face/Saucer · Petunia/Flare/Basket · Nasturtium/Pepper/Tray · Geranium/Cluster/Sill · Freesia/Trumpet/Vase · Ranunculus/Layer/Nest · Begonia/Ruffle/Planter · Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools.

## Bang
```
"{Name}: Whisk soft. Already claimed the cleome pod."
"{Name}: Looks yard-soft. Owns the pod."
```
Yard: `{Name} claimed the cleome pod.` — single cleome-pod slot

## Gift
None @294.

## Cadence
Celosia@291 → L292–L294 → **Cleome@294** on L294 clear → L295–L297 triad. No friend_099 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_cleome_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[294]=friend_098`  
3. lockChips + Met + single cleome-pod slot  
4. verify no Celosia collision; Celosia…Bean unchanged; no Pebble  
5. CAMPAIGN through L297; `verify:levels` green
