# Ch4 — friend_082 Wisteria@246 LOCKED
**Owner:** Cat Collection Lead  
**After:** Clematis@243  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_082` |
| unlock_clear | **246** |
| default_name | **Wisteria** |
| tier | C |
| color / pattern | Cascade / Arbor (cascade loaf + deep freckles — not Clematis vine, Cosmos airy, Lavender bloom, Orchid spur) |
| personality | Wisteria-soft |
| board_color | orange |
| art_kit | `wisteria` (cascade loaf `#B8A0E8` + deep freckles `#3A2868` — not Clematis `#7EC8E8/#1A3A58`, not Cosmos `#E8A0C0/#5A2848`, not Lavender `#9B7EBD/#3A2A58`, not Orchid `#C989B8/#3A2038`) |
| display_line | Cascade soft. Already claimed the wisteria arbor. |

## Chips
**Wisteria / Cascade / Arbor**

Ban: Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools. Wisteria / Cascade / Arbor chips are CEO-locked on Wisteria.

## Bang
```
"{Name}: Cascade soft. Already claimed the wisteria arbor."
"{Name}: Looks yard-soft. Owns the arbor."
```
Yard: `{Name} claimed the wisteria arbor.` — single wisteria-arbor slot

## Gift
None @246.

## Cadence
Clematis@243 → L244–L246 → **Wisteria@246** on L246 clear → L247–L249 triad. No friend_083 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_wisteria_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[246]=friend_082`  
3. lockChips + Met + single wisteria-arbor slot  
4. verify no Clematis collision; Clematis…Bean unchanged; no Pebble  
5. CAMPAIGN through L249; `verify:levels` green
