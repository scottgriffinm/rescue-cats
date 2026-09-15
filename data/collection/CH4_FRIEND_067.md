# Ch4 — friend_067 Poppy@201 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Lotus@198  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_067` |
| unlock_clear | **201** |
| default_name | **Poppy** |
| tier | C |
| color / pattern | Gray / Freckled (bold scarlet-poppy loaf + seed freckles — not Lotus pale-pink, Orchid blush-orchid, Iris indigo-violet, Aster periwinkle-lilac, Zinnia sunlit coral-tangerine, Dahlia wine-burgundy, Azalea/Peony/Camellia/Hibiscus shipped kits) |
| personality | Poppy-soft |
| board_color | gray |
| art_kit | `poppy` (bold scarlet-poppy loaf `#D94A5A` + seed freckles `#3A1218` — not Lotus `#F2B8C8/#4A2840`, Orchid `#C989B8/#3A2038` or `#EAC8DC`, Iris `#5B4F9A/#1C1630` or `#B6A8DE`, Aster `#7B6BB5/#2A2040` or `#C8B8EE`, Zinnia `#E85A2A/#3A1808`, Dahlia `#8B2E4A/#2A1018`, Azalea `#B84A8C/#3F1830`, Peony `#E8B4C8/#5A3048` or `#F7DCE6`, Camellia `#C45A6A/#5A2030`, Hibiscus tea-rose) |
| display_line | Field bright. Already claimed the poppy cup. |

## Chips
**Poppy / Capsule / Silk**

Ban: Lotus/Pad/Ripple · Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Coral/Bloom · Pebble · all prior pools. Poppy chip is CEO-locked on Poppy.

## Bang
```
"{Name}: Field bright. Already claimed the poppy cup."
"{Name}: Looks yard-cool. Owns the cup."
```
Yard: `{Name} claimed the poppy cup.`

## Gift
None @201.

## Cadence
Lotus@198 → L199–L201 → **Poppy@201** on L201 clear → L202–L204 triad. No friend_068 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_poppy_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[201]=friend_067`  
3. lockChips + Met + single poppy-cup slot  
4. verify no Lotus collision; Lotus…Bean unchanged; no Pebble  
5. CAMPAIGN through L204; `verify:levels` green
