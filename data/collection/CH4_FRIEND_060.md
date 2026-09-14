# Ch4 — friend_060 Azalea@180 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Peony@177  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_060` |
| unlock_clear | **180** |
| default_name | **Azalea** |
| tier | C |
| color / pattern | Orange / Freckled (vivid fuchsia-magenta loaf + pollen freckles — not Peony blush-petal, Camellia deep rose-wax, Hibiscus tea-rose, Gardenia porcelain-leaf, Magnolia cream-blush) |
| personality | Planter-soft |
| board_color | orange |
| art_kit | `azalea` (vivid fuchsia-magenta loaf `#B84A8C` + pollen freckles `#3F1830` — not Peony `#E8B4C8/#5A3048` or `#F7DCE6`, Camellia `#C45A6A/#5A2030` or `#F3C8CC`, Hibiscus `#D46A8A/#5A1F3A` or `#C24A6E/#EBB0C2`, Gardenia `#F6F1E8/#4F6B4A` or `#FFFBF3`, Magnolia `#F7E8D2/#C48A7A` or `#F2D4C4/#6E3A42`) |
| display_line | Bright fuchsia. Already claimed the azalea planter. |

## Chips
**Azalea / Fizz / Flare**

Ban: Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Coral/Bloom/Petal · Pebble · all prior pools.

## Bang
```
"{Name}: Bright fuchsia. Already claimed the azalea planter."
"{Name}: Looks yard-bright. Owns the planter."
```
Yard: `{Name} claimed the azalea planter.`

## Gift
None @180.

## Cadence
Peony@177 → L178–L180 → **Azalea@180** on L180 clear → L181–L183 triad. No friend_061 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_azalea_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[180]=friend_060`  
3. lockChips + Met + single azalea-planter slot  
4. verify no Peony collision; Peony…Bean unchanged; no Pebble  
5. CAMPAIGN through L183; `verify:levels` green
