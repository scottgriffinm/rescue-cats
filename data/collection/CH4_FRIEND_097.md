# Ch4 — friend_097 Celosia@291 LOCKED
**Owner:** Cat Collection Lead  
**After:** Phlox@288  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_097` |
| unlock_clear | **291** |
| default_name | **Celosia** |
| tier | C |
| color / pattern | Plume / Comb (flame-plume loaf + comb freckles — not Phlox, Lantana, Impatiens, Salvia) |
| personality | Celosia-soft |
| board_color | gray |
| art_kit | `celosia` (flame-plume loaf `#E04070` + comb freckles `#2A1018` — not Phlox `#D878A8/#3A1830`, not Lantana `#E86040/#3A1810`, not Impatiens `#FF6B9A/#2A4018`, not Salvia `#6B4C9A/#2A1838`) |
| display_line | Plume soft. Already claimed the celosia comb. |

## Chips
**Celosia / Plume / Comb** — empty prefill, `require_choice`, `lockChips`

Ban: Phlox/Floret/Bank · Lantana/Umbel/Mound · Calendula/Petal/Tin · Salvia/Sage/Torch · Impatiens/Busy/Box · Verbena/Spike/Pot · Pansy/Face/Saucer · Petunia/Flare/Basket · Nasturtium/Pepper/Tray · Geranium/Cluster/Sill · Freesia/Trumpet/Vase · Ranunculus/Layer/Nest · Begonia/Ruffle/Planter · Anemone/Wind/Bowl · Wisteria/Cascade/Arbor · Clematis/Vine/Trellis · Cosmos/Airy/Ray · Buttercup/Meadow/Gloss · Primrose/Pale/Dish · Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Pebble · all prior pools.

## Bang
```
"{Name}: Plume soft. Already claimed the celosia comb."
"{Name}: Looks yard-soft. Owns the comb."
```
Yard: `{Name} claimed the celosia comb.` — single celosia-comb slot

## Gift
None @291.

## Cadence
Phlox@288 → L289–L291 → **Celosia@291** on L291 clear → L292–L294 triad. No friend_098 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_celosia_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[291]=friend_097`  
3. lockChips + Met + single celosia-comb slot  
4. verify no Phlox collision; Phlox…Bean unchanged; no Pebble  
5. CAMPAIGN through L294; `verify:levels` green
