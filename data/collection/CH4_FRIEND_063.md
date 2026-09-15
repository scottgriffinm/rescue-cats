# Ch4 — friend_063 Aster@189 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Zinnia@186  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_063` |
| unlock_clear | **189** |
| default_name | **Aster** |
| tier | C |
| color / pattern | Gray / Freckled (cool periwinkle-lilac loaf + dusk freckles — not Zinnia sunlit coral-tangerine, Dahlia wine-burgundy, Azalea fuchsia-magenta, Peony blush-petal, Camellia deep rose-wax, Hibiscus tea-rose, Gardenia porcelain-leaf) |
| personality | Aster-soft |
| board_color | gray |
| art_kit | `aster` (cool periwinkle-lilac loaf `#7B6BB5` + dusk freckles `#2A2040` — not Zinnia `#E85A2A/#3A1808` or `#F4A06A`, Dahlia `#8B2E4A/#2A1018` or `#C86A80`, Azalea `#B84A8C/#3F1830` or `#E8A0C4`, Peony `#E8B4C8/#5A3048` or `#F7DCE6`, Camellia `#C45A6A/#5A2030` or `#F3C8CC`, Hibiscus `#D46A8A/#5A1F3A` or `#C24A6E/#EBB0C2`, Gardenia `#F6F1E8/#4F6B4A` or `#FFFBF3`) |
| display_line | Cool lilac. Already claimed the aster dish. |

## Chips
**Aster / Petal / Drift**

Ban: Zinnia/Quill/Gleam · Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Coral/Bloom · Pebble · all prior pools. Petal chip is CEO-locked on Aster.

## Bang
```
"{Name}: Cool lilac. Already claimed the aster dish."
"{Name}: Looks yard-cool. Owns the dish."
```
Yard: `{Name} claimed the aster dish.`

## Gift
None @189.

## Cadence
Zinnia@186 → L187–L189 → **Aster@189** on L189 clear → L190–L192 triad. No friend_064 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_aster_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[189]=friend_063`  
3. lockChips + Met + single aster-dish slot  
4. verify no Zinnia collision; Zinnia…Bean unchanged; no Pebble  
5. CAMPAIGN through L192; `verify:levels` green
