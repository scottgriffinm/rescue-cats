# Ch4 — friend_089 Petunia@267 LOCKED
**Owner:** Cat Collection Lead  
**After:** Nasturtium@264  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_089` |
| unlock_clear | **267** |
| default_name | **Petunia** |
| tier | C |
| color / pattern | Flare / Basket (trumpet-flare loaf + throat freckles — not Nasturtium pepper, Freesia, Wisteria, Orchid) |
| personality | Petunia-soft |
| board_color | gray |
| art_kit | `petunia` (trumpet-flare loaf `#C070E0` + throat freckles `#3A1848` — not Nasturtium `#F07830/#3A2810`, not Freesia `#F5E080/#6A5020`, not Wisteria `#B8A0E8/#3A2868`, not Orchid `#C989B8/#3A2038`) |
| display_line | Flare soft. Already claimed the petunia basket. |

## Chips
**Petunia / Flare / Basket**

Ban: Nasturtium/Pepper/Tray · Geranium/Cluster/Sill · Freesia/Trumpet/Vase · Ranunculus/Layer/Nest · Begonia/Ruffle/Planter · Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools. Petunia / Flare / Basket chips are CEO-locked on Petunia.

## Bang
```
"{Name}: Flare soft. Already claimed the petunia basket."
"{Name}: Looks yard-soft. Owns the basket."
```
Yard: `{Name} claimed the petunia basket.` — single petunia-basket slot

## Gift
None @267.

## Cadence
Nasturtium@264 → L265–L267 → **Petunia@267** on L267 clear → L268–L270 triad. No friend_090 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_petunia_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[267]=friend_089`  
3. lockChips + Met + single petunia-basket slot  
4. verify no Nasturtium collision; Nasturtium…Bean unchanged; no Pebble  
5. CAMPAIGN through L270; `verify:levels` green
