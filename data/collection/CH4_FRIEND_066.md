# Ch4 — friend_066 Lotus@198 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Orchid@195  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_066` |
| unlock_clear | **198** |
| default_name | **Lotus** |
| tier | C |
| color / pattern | Orange / Freckled (pale pink-lotus loaf + pond freckles — not Orchid blush-orchid, Iris indigo-violet, Aster periwinkle-lilac, Peony blush-petal, Zinnia sunlit coral-tangerine, Dahlia wine-burgundy, Azalea fuchsia-magenta, Camellia/Hibiscus/Gardenia/Magnolia shipped kits) |
| personality | Lotus-soft |
| board_color | orange |
| art_kit | `lotus` (pale pink-lotus loaf `#F2B8C8` + pond freckles `#4A2840` — not Orchid `#C989B8/#3A2038` or `#EAC8DC`, Iris `#5B4F9A/#1C1630` or `#B6A8DE`, Aster `#7B6BB5/#2A2040` or `#C8B8EE`, Peony `#E8B4C8/#5A3048` or `#F7DCE6`, Zinnia `#E85A2A/#3A1808`, Dahlia `#8B2E4A/#2A1018`, Azalea `#B84A8C/#3F1830`, Camellia `#C45A6A/#5A2030`, Hibiscus tea-rose, Gardenia porcelain, Magnolia blush) |
| display_line | Pond soft. Already claimed the lotus pad. |

## Chips
**Lotus / Pad / Ripple**

Ban: Orchid/Spur/Veil · Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Coral/Bloom · Pebble · all prior pools. Lotus chip is CEO-locked on Lotus.

## Bang
```
"{Name}: Pond soft. Already claimed the lotus pad."
"{Name}: Looks yard-cool. Owns the pad."
```
Yard: `{Name} claimed the lotus pad.`

## Gift
None @198.

## Cadence
Orchid@195 → L196–L198 → **Lotus@198** on L198 clear → L199–L201 triad. No friend_067 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_lotus_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[198]=friend_066`  
3. lockChips + Met + single lotus-pad slot  
4. verify no Orchid collision; Orchid…Bean unchanged; no Pebble  
5. CAMPAIGN through L201; `verify:levels` green
