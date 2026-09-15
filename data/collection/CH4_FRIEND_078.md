# Ch4 — friend_078 Primrose@234 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Heather@231  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_078` |
| unlock_clear | **234** |
| default_name | **Primrose** |
| tier | C |
| color / pattern | Pale / Freckled (pale primrose loaf + center freckles — not Heather moor, Marigold sun-gold, Bergamot citrus, Lily pollen, Chamomile cream) |
| personality | Primrose-soft |
| board_color | orange |
| art_kit | `primrose` (pale primrose loaf `#F2D4A0` + center freckles `#8A5A20` — not Heather `#9A5A8A/#2A1830`, Marigold `#F0A020/#4A3010`, Bergamot `#F0C98A/#9A5A1A`, Lily `#F5F0E6/#C8A84A`, Chamomile cream) |
| display_line | Pale soft. Already claimed the primrose dish. |

## Chips
**Primrose / Pale / Dish**

Ban: Heather/Moor/Sprig · Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl · Lovage/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Sage · Sorrel/Dock/Zest · Clover/Fern · Coral/Bloom · Pebble · all prior pools. Primrose / Pale / Dish chips are CEO-locked on Primrose.

## Bang
```
"{Name}: Pale soft. Already claimed the primrose dish."
"{Name}: Looks yard-cool. Owns the dish."
```
Yard: `{Name} claimed the primrose dish.`

## Gift
None @234.

## Cadence
Heather@231 → L232–L234 → **Primrose@234** on L234 clear → L235–L237 triad. No friend_079 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_primrose_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[234]=friend_078`  
3. lockChips + Met + single primrose-dish slot  
4. verify no Heather collision; Heather…Bean unchanged; no Pebble  
5. CAMPAIGN through L237; `verify:levels` green
