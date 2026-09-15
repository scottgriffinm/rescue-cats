# Ch4 — friend_083 Anemone@249 LOCKED
**Owner:** Cat Collection Lead  
**After:** Wisteria@246  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_083` |
| unlock_clear | **249** |
| default_name | **Anemone** |
| tier | C |
| color / pattern | Wind / Bowl (windflower loaf + dark freckles — not Wisteria cascade, Cosmos airy, Peony bud, Clematis vine) |
| personality | Anemone-soft |
| board_color | gray |
| art_kit | `anemone` (windflower loaf `#F0A8C8` + dark freckles `#4A2038` — not Wisteria `#B8A0E8/#3A2868`, not Cosmos `#E8A0C0/#5A2848`, not Peony `#E8B4C8/#5A3048`, not Clematis `#7EC8E8/#1A3A58`) |
| display_line | Wind soft. Already claimed the anemone bowl. |

## Chips
**Anemone / Wind / Bowl**

Ban: Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools. Anemone / Wind / Bowl chips are CEO-locked on Anemone.

## Bang
```
"{Name}: Wind soft. Already claimed the anemone bowl."
"{Name}: Looks yard-soft. Owns the bowl."
```
Yard: `{Name} claimed the anemone bowl.` — single anemone-bowl slot

## Gift
None @249.

## Cadence
Wisteria@246 → L247–L249 → **Anemone@249** on L249 clear → L250–L252 triad. No friend_084 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_anemone_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[249]=friend_083`  
3. lockChips + Met + single anemone-bowl slot  
4. verify no Wisteria collision; Wisteria…Bean unchanged; no Pebble  
5. CAMPAIGN through L252; `verify:levels` green
