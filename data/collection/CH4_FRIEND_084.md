# Ch4 — friend_084 Begonia@252 LOCKED
**Owner:** Cat Collection Lead  
**After:** Anemone@249  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_084` |
| unlock_clear | **252** |
| default_name | **Begonia** |
| tier | C |
| color / pattern | Ruffle / Planter (ruffle loaf + leaf freckles — not Anemone wind, Poppy capsule, Snapdragon jaw, Camellia wax) |
| personality | Begonia-soft |
| board_color | orange |
| art_kit | `begonia` (ruffle loaf `#E87868` + leaf freckles `#3A2818` — not Anemone `#F0A8C8/#4A2038`, not Poppy `#D94A5A/#3A1218`, not Snapdragon `#E07050/#3A2010`, not Camellia `#C45A6A/#5A2030`) |
| display_line | Ruffle soft. Already claimed the begonia planter. |

## Chips
**Begonia / Ruffle / Planter**

Ban: Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools. Begonia / Ruffle / Planter chips are CEO-locked on Begonia.

## Bang
```
"{Name}: Ruffle soft. Already claimed the begonia planter."
"{Name}: Looks yard-soft. Owns the planter."
```
Yard: `{Name} claimed the begonia planter.` — single begonia-planter slot

## Gift
None @252.

## Cadence
Anemone@249 → L250–L252 → **Begonia@252** on L252 clear → L253–L255 triad. No friend_085 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_begonia_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[252]=friend_084`  
3. lockChips + Met + single begonia-planter slot  
4. verify no Anemone collision; Anemone…Bean unchanged; no Pebble  
5. CAMPAIGN through L255; `verify:levels` green
