# Ch4 — friend_081 Clematis@243 LOCKED
**Owner:** Cat Collection Lead  
**After:** Cosmos@240  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_081` |
| unlock_clear | **243** |
| default_name | **Clematis** |
| tier | C |
| color / pattern | Vine / Trellis (vine-star loaf + deep freckles — not Cosmos airy, Buttercup meadow, Bluebell cloche, Iris blade) |
| personality | Clematis-soft |
| board_color | gray |
| art_kit | `clematis` (vine-star loaf `#7EC8E8` + deep freckles `#1A3A58` — not Cosmos `#E8A0C0/#5A2848`, not Buttercup `#F5D030/#6A4A10`, not Bluebell `#4A7EC8/#1A2848`, not Iris `#5B4F9A/#1C1630`) |
| display_line | Vine soft. Already claimed the clematis trellis. |

## Chips
**Clematis / Vine / Trellis**

Ban: Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Pebble · all prior pools. Clematis / Vine / Trellis chips are CEO-locked on Clematis.

## Bang
```
"{Name}: Vine soft. Already claimed the clematis trellis."
"{Name}: Looks yard-soft. Owns the trellis."
```
Yard: `{Name} claimed the clematis trellis.` — single clematis-trellis slot

## Gift
None @243.

## Cadence
Cosmos@240 → L241–L243 → **Clematis@243** on L243 clear → L244–L246 triad. No friend_082 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_clematis_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[243]=friend_081`  
3. lockChips + Met + single clematis-trellis slot  
4. verify no Cosmos collision; Cosmos…Bean unchanged; no Pebble  
5. CAMPAIGN through L246; `verify:levels` green
