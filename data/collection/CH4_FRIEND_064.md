# Ch4 — friend_064 Iris@192 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Aster@189  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_064` |
| unlock_clear | **192** |
| default_name | **Iris** |
| tier | C |
| color / pattern | Orange / Freckled (deep indigo-violet loaf + dusk freckles — not Aster periwinkle-lilac, Zinnia sunlit coral-tangerine, Dahlia wine-burgundy, Azalea fuchsia-magenta, Peony blush-petal, Lavender lilac, Camellia/Hibiscus/Gardenia/Magnolia shipped kits) |
| personality | Iris-soft |
| board_color | orange |
| art_kit | `iris` (deep indigo-violet loaf `#5B4F9A` + dusk freckles `#1C1630` — not Aster `#7B6BB5/#2A2040` or `#C8B8EE`, Zinnia `#E85A2A/#3A1808` or `#F4A06A`, Dahlia `#8B2E4A/#2A1018` or `#C86A80`, Azalea `#B84A8C/#3F1830` or `#E8A0C4`, Peony `#E8B4C8/#5A3048` or `#F7DCE6`, Lavender lilac, Camellia `#C45A6A/#5A2030`, Hibiscus tea-rose, Gardenia porcelain, Magnolia blush) |
| display_line | Soft indigo. Already claimed the iris stem. |

## Chips
**Iris / Blade / Dew**

Ban: Aster/Petal/Drift · Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Coral/Bloom · Pebble · all prior pools. Iris chip is CEO-locked on Iris.

## Bang
```
"{Name}: Soft indigo. Already claimed the iris stem."
"{Name}: Looks yard-cool. Owns the stem."
```
Yard: `{Name} claimed the iris stem.`

## Gift
None @192.

## Cadence
Aster@189 → L190–L192 → **Iris@192** on L192 clear → L193–L195 triad. No friend_065 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_iris_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[192]=friend_064`  
3. lockChips + Met + single iris-stem slot  
4. verify no Aster collision; Aster…Bean unchanged; no Pebble  
5. CAMPAIGN through L195; `verify:levels` green
