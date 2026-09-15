# Ch4 — friend_095 Lantana@285 LOCKED
**Owner:** Cat Collection Lead  
**After:** Calendula@282  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_095` |
| unlock_clear | **285** |
| default_name | **Lantana** |
| tier | C |
| color / pattern | Umbel / Mound (lantana loaf + umbel freckles — not Calendula, Nasturtium, Begonia, Marigold) |
| personality | Lantana-soft |
| board_color | gray |
| art_kit | `lantana` (cluster-mix loaf `#E86040` + umbel freckles `#3A1810` — not Calendula `#F4A020/#5A3010`, not Nasturtium `#F07830/#3A2810`, not Begonia `#E87868/#3A2818`, not Marigold `#E8A020/#5A3A10`) |
| display_line | Umbel soft. Already claimed the lantana mound. |

## Chips
**Lantana / Umbel / Mound** — empty prefill, `require_choice`, `lockChips`

Ban: Calendula/Petal/Tin · Salvia/Sage/Torch · Impatiens/Busy/Box · Verbena/Spike/Pot · Pansy/Face/Saucer · Petunia/Flare/Basket · Nasturtium/Pepper/Tray · Geranium/Cluster/Sill · Freesia/Trumpet/Vase · Ranunculus/Layer/Nest · Begonia/Ruffle/Planter · Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools.

## Bang
```
"{Name}: Umbel soft. Already claimed the lantana mound."
"{Name}: Looks yard-soft. Owns the mound."
```
Yard: `{Name} claimed the lantana mound.` — single lantana-mound slot

## Gift
None @285.

## Cadence
Calendula@282 → L283–L285 → **Lantana@285** on L285 clear → L286–L288 triad. No friend_096 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_lantana_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[285]=friend_095`  
3. lockChips + Met + single lantana-mound slot  
4. verify no Calendula collision; Calendula…Bean unchanged; no Pebble  
5. CAMPAIGN through L288; `verify:levels` green
