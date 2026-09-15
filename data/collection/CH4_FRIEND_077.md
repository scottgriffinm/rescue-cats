# Ch4 — friend_077 Heather@231 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Marigold@228  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_077` |
| unlock_clear | **231** |
| default_name | **Heather** |
| tier | C |
| color / pattern | Moor / Freckled (moor heather loaf + tip freckles — not Marigold sun-gold, Lavender lilac, Violet moss-violet, Orchid orchid-veil, Crocus crocus-tip) |
| personality | Heather-soft |
| board_color | gray |
| art_kit | `heather` (moor heather loaf `#9A5A8A` + tip freckles `#2A1830` — not Marigold `#F0A020/#4A3010`, Lavender lilac `#B8A0C8/#5A3F6E`, Violet `#6B4AA0/#1E2A18`, Orchid `#C989B8/#3A2038`, Crocus `#C45A9A/#2A1830`) |
| display_line | Moor soft. Already claimed the heather sprig. |

## Chips
**Heather / Moor / Sprig**

Ban: Marigold/Gold/Pot · Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl · Lovage/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Sage · Sorrel/Dock/Zest · Clover/Fern · Coral/Bloom · Pebble · all prior pools. Heather / Moor / Sprig chips are CEO-locked on Heather.

## Bang
```
"{Name}: Moor soft. Already claimed the heather sprig."
"{Name}: Looks yard-cool. Owns the sprig."
```
Yard: `{Name} claimed the heather sprig.`

## Gift
None @231.

## Cadence
Marigold@228 → L229–L231 → **Heather@231** on L231 clear → L232–L234 triad. No friend_078 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_heather_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[231]=friend_077`  
3. lockChips + Met + single heather-sprig slot  
4. verify no Marigold collision; Marigold…Bean unchanged; no Pebble  
5. CAMPAIGN through L234; `verify:levels` green
