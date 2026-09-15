# Ch4 — friend_065 Orchid@195 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Iris@192  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_065` |
| unlock_clear | **195** |
| default_name | **Orchid** |
| tier | C |
| color / pattern | Gray / Freckled (blush-orchid loaf + dusk freckles — not Iris indigo-violet, Aster periwinkle-lilac, Zinnia sunlit coral-tangerine, Dahlia wine-burgundy, Azalea fuchsia-magenta, Peony blush-petal, Camellia/Hibiscus/Gardenia/Magnolia shipped kits) |
| personality | Orchid-soft |
| board_color | gray |
| art_kit | `orchid` (blush-orchid loaf `#C989B8` + dusk freckles `#3A2038` — not Iris `#5B4F9A/#1C1630` or `#B6A8DE`, Aster `#7B6BB5/#2A2040` or `#C8B8EE`, Zinnia `#E85A2A/#3A1808` or `#F4A06A`, Dahlia `#8B2E4A/#2A1018` or `#C86A80`, Azalea `#B84A8C/#3F1830` or `#E8A0C4`, Peony `#E8B4C8/#5A3048` or `#F7DCE6`, Camellia `#C45A6A/#5A2030`, Hibiscus tea-rose, Gardenia porcelain, Magnolia blush) |
| display_line | Soft blush. Already claimed the orchid spike. |

## Chips
**Orchid / Spur / Veil**

Ban: Iris/Blade/Dew · Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Coral/Bloom · Pebble · all prior pools. Orchid chip is CEO-locked on Orchid.

## Bang
```
"{Name}: Soft blush. Already claimed the orchid spike."
"{Name}: Looks yard-cool. Owns the spike."
```
Yard: `{Name} claimed the orchid spike.`

## Gift
None @195.

## Cadence
Iris@192 → L193–L195 → **Orchid@195** on L195 clear → L196–L198 triad. No friend_066 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_orchid_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[195]=friend_065`  
3. lockChips + Met + single orchid-spike slot  
4. verify no Iris collision; Iris…Bean unchanged; no Pebble  
5. CAMPAIGN through L198; `verify:levels` green
