# Ch4 — friend_088 Nasturtium@264 LOCKED
**Owner:** Cat Collection Lead  
**After:** Geranium@261  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_088` |
| unlock_clear | **264** |
| default_name | **Nasturtium** |
| tier | C |
| color / pattern | Pepper / Tray (pepper loaf + vine freckles — not Geranium cluster, Marigold gold, Begonia ruffle, Snapdragon jaw) |
| personality | Nasturtium-soft |
| board_color | orange |
| art_kit | `nasturtium` (pepper loaf `#F07830` + vine freckles `#3A2810` — not Geranium `#E05070/#2A4018`, not Marigold `#E8A020/#5A3A10`, not Begonia `#E87868/#3A2818`, not Snapdragon `#E07050/#3A2010`) |
| display_line | Pepper soft. Already claimed the nasturtium tray. |

## Chips
**Nasturtium / Pepper / Tray**

Ban: Geranium/Cluster/Sill · Freesia/Trumpet/Vase · Ranunculus/Layer/Nest · Begonia/Ruffle/Planter · Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools. Nasturtium / Pepper / Tray chips are CEO-locked on Nasturtium.

## Bang
```
"{Name}: Pepper soft. Already claimed the nasturtium tray."
"{Name}: Looks yard-soft. Owns the tray."
```
Yard: `{Name} claimed the nasturtium tray.` — single nasturtium-tray slot

## Gift
None @264.

## Cadence
Geranium@261 → L262–L264 → **Nasturtium@264** on L264 clear → L265–L267 triad. No friend_089 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_nasturtium_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[264]=friend_088`  
3. lockChips + Met + single nasturtium-tray slot  
4. verify no Geranium collision; Geranium…Bean unchanged; no Pebble  
5. CAMPAIGN through L267; `verify:levels` green
