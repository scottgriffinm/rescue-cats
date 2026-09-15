# Ch4 — friend_076 Marigold@228 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Snapdragon@225  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_076` |
| unlock_clear | **228** |
| default_name | **Marigold** |
| tier | C |
| color / pattern | Sun / Freckled (sun marigold loaf + seed freckles — not Snapdragon garden-jaw, Zinnia zinnia-quill, Bergamot citrus-cream, Lily pollen gold) |
| personality | Marigold-soft |
| board_color | orange |
| art_kit | `marigold` (sun marigold loaf `#F0A020` + seed freckles `#4A3010` — not Snapdragon `#E07050/#3A2010`, Zinnia `#E85A2A/#3A1808`, Bergamot `#F0C98A/#9A5A1A`, Lily pollen gold `#C8A84A/#C4B06A`) |
| display_line | Sun gold. Already claimed the marigold pot. |

## Chips
**Marigold / Gold / Pot**

Ban: Snapdragon/Jaw/Perch · Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Sage · Sorrel/Dock/Zest · Clover/Fern · Coral/Bloom · Pebble · all prior pools. Marigold / Gold / Pot chips are CEO-locked on Marigold.

## Bang
```
"{Name}: Sun gold. Already claimed the marigold pot."
"{Name}: Looks yard-cool. Owns the pot."
```
Yard: `{Name} claimed the marigold pot.`

## Gift
None @228.

## Cadence
Snapdragon@225 → L226–L228 → **Marigold@228** on L228 clear → L229–L231 triad. No friend_077 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_marigold_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[228]=friend_076`  
3. lockChips + Met + single marigold-pot slot  
4. verify no Snapdragon collision; Snapdragon…Bean unchanged; no Pebble  
5. CAMPAIGN through L231; `verify:levels` green
