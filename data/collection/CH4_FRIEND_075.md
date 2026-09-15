# Ch4 — friend_075 Snapdragon@225 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Bluebell@222  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_075` |
| unlock_clear | **225** |
| default_name | **Snapdragon** |
| tier | C |
| color / pattern | Garden / Freckled (garden snapdragon loaf + jaw freckles — not Bluebell woodland-tipped, Foxglove spotted-foxglove, Tulip tulip-glow, Zinnia zinnia-quill, Poppy poppy-silk) |
| personality | Snapdragon-soft |
| board_color | gray |
| art_kit | `snapdragon` (garden snapdragon loaf `#E07050` + jaw freckles `#3A2010` — not Bluebell `#4A7EC8/#1A2848`, Foxglove `#D478A0/#3A2030`, Tulip `#E07090/#2A4020`, Zinnia `#E85A2A/#3A1808`, Poppy `#D94A5A/#3A1218`) |
| display_line | Garden bright. Already claimed the snapdragon perch. |

## Chips
**Snapdragon / Jaw / Perch**

Ban: Bluebell/Cloche/Ring · Foxglove/Tower/Throat · Hyacinth/Cluster/Bell · Crocus/Saffron/Tip · Lily/Pollen/Crest · Violet/Patch/Moss · Tulip/Stem/Glow · Poppy/Capsule/Silk · Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Sage · Sorrel/Dock/Zest · Clover/Fern · Coral/Bloom · Pebble · all prior pools. Snapdragon / Jaw / Perch chips are CEO-locked on Snapdragon.

## Bang
```
"{Name}: Garden bright. Already claimed the snapdragon perch."
"{Name}: Looks yard-cool. Owns the perch."
```
Yard: `{Name} claimed the snapdragon perch.`

## Gift
None @225.

## Cadence
Bluebell@222 → L223–L225 → **Snapdragon@225** on L225 clear → L226–L228 triad. No friend_076 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_snapdragon_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[225]=friend_075`  
3. lockChips + Met + single snapdragon-perch slot  
4. verify no Bluebell collision; Bluebell…Bean unchanged; no Pebble  
5. CAMPAIGN through L228; `verify:levels` green
