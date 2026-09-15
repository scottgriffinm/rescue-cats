# Ch4 — friend_091 Verbena@273 LOCKED
**Owner:** Cat Collection Lead  
**After:** Pansy@270  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_091` |
| unlock_clear | **273** |
| default_name | **Verbena** |
| tier | C |
| color / pattern | Spike / Pot (spike loaf + stem freckles — not Pansy, Petunia, Foxglove, Cosmos) |
| personality | Verbena-soft |
| board_color | gray |
| art_kit | `verbena` (spike loaf `#C05090` + stem freckles `#3A1830` — not Pansy `#6B5ACD/#1A1030`, not Petunia `#C070E0/#3A1848`, not Foxglove `#D478A0/#3A2030`, not Cosmos `#E8A0C0/#5A2848`) |
| display_line | Spike soft. Already claimed the verbena pot. |

## Chips
**Verbena / Spike / Pot**

Ban: Pansy/Face/Saucer · Petunia/Flare/Basket · Nasturtium/Pepper/Tray · Geranium/Cluster/Sill · Freesia/Trumpet/Vase · Ranunculus/Layer/Nest · Begonia/Ruffle/Planter · Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools. Verbena / Spike / Pot chips are CEO-locked on Verbena. Marigold uses Gold/Pot chips — Pot chip here is new lockChips only.

## Bang
```
"{Name}: Spike soft. Already claimed the verbena pot."
"{Name}: Looks yard-soft. Owns the pot."
```
Yard: `{Name} claimed the verbena pot.` — single verbena-pot slot

## Gift
None @273.

## Cadence
Pansy@270 → L271–L273 → **Verbena@273** on L273 clear → L274–L276 triad. No friend_092 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_verbena_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[273]=friend_091`  
3. lockChips + Met + single verbena-pot slot  
4. verify no Pansy collision; Pansy…Bean unchanged; no Pebble  
5. CAMPAIGN through L276; `verify:levels` green
