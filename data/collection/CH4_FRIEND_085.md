# Ch4 — friend_085 Ranunculus@255 LOCKED
**Owner:** Cat Collection Lead  
**After:** Begonia@252  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_085` |
| unlock_clear | **255** |
| default_name | **Ranunculus** |
| tier | C |
| color / pattern | Layer / Nest (layered loaf + center freckles — not Begonia ruffle, Anemone wind, Peony bud, Cosmos airy) |
| personality | Ranunculus-soft |
| board_color | gray |
| art_kit | `ranunculus` (layered loaf `#F4A0B8` + center freckles `#5A2840` — not Begonia `#E87868/#3A2818`, not Anemone `#F0A8C8/#4A2038`, not Peony `#E8B4C8/#5A3048`, not Cosmos `#E8A0C0/#5A2848`) |
| display_line | Layer soft. Already claimed the ranunculus nest. |

## Chips
**Ranunculus / Layer / Nest**

Ban: Begonia/Ruffle/Planter · Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools. Ranunculus / Layer / Nest chips are CEO-locked on Ranunculus.

## Bang
```
"{Name}: Layer soft. Already claimed the ranunculus nest."
"{Name}: Looks yard-soft. Owns the nest."
```
Yard: `{Name} claimed the ranunculus nest.` — single ranunculus-nest slot

## Gift
None @255.

## Cadence
Begonia@252 → L253–L255 → **Ranunculus@255** on L255 clear → L256–L258 triad. No friend_086 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_ranunculus_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[255]=friend_085`  
3. lockChips + Met + single ranunculus-nest slot  
4. verify no Begonia collision; Begonia…Bean unchanged; no Pebble  
5. CAMPAIGN through L258; `verify:levels` green
