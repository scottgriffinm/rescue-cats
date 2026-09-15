# Ch4 — friend_086 Freesia@258 LOCKED
**Owner:** Cat Collection Lead  
**After:** Ranunculus@255  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_086` |
| unlock_clear | **258** |
| default_name | **Freesia** |
| tier | C |
| color / pattern | Trumpet / Vase (trumpet loaf + throat freckles — not Ranunculus layer, Buttercup meadow, Primrose pale, Marigold gold) |
| personality | Freesia-soft |
| board_color | orange |
| art_kit | `freesia` (trumpet loaf `#F5E080` + throat freckles `#6A5020` — not Ranunculus `#F4A0B8/#5A2840`, not Buttercup `#F5D030/#6A4A10`, not Primrose `#F2D4A0/#8A5A20`, not Marigold `#E8A020/#5A3A10`) |
| display_line | Trumpet soft. Already claimed the freesia vase. |

## Chips
**Freesia / Trumpet / Vase**

Ban: Ranunculus/Layer/Nest · Begonia/Ruffle/Planter · Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools. Freesia / Trumpet / Vase chips are CEO-locked on Freesia.

## Bang
```
"{Name}: Trumpet soft. Already claimed the freesia vase."
"{Name}: Looks yard-soft. Owns the vase."
```
Yard: `{Name} claimed the freesia vase.` — single freesia-vase slot

## Gift
None @258.

## Cadence
Ranunculus@255 → L256–L258 → **Freesia@258** on L258 clear → L259–L261 triad. No friend_087 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_freesia_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[258]=friend_086`  
3. lockChips + Met + single freesia-vase slot  
4. verify no Ranunculus collision; Ranunculus…Bean unchanged; no Pebble  
5. CAMPAIGN through L261; `verify:levels` green
