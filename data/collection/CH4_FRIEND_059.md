# Ch4 — friend_059 Peony@177 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Camellia@174  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_059` |
| unlock_clear | **177** |
| default_name | **Peony** |
| tier | C |
| color / pattern | Gray / Freckled (blush-petal loaf + seed freckles — not Camellia deep rose-wax, Hibiscus tea-rose, Gardenia porcelain-leaf, Magnolia cream-blush, Jasmine ivory-blossom, Lavender lilac-gray) |
| personality | Petal-soft |
| board_color | gray |
| art_kit | `peony` (blush-petal loaf `#E8B4C8` + seed freckles `#5A3048` — not Camellia `#C45A6A/#5A2030` or `#F3C8CC`, Hibiscus `#D46A8A/#5A1F3A` or `#C24A6E/#EBB0C2`, Gardenia `#F6F1E8/#4F6B4A` or `#FFFBF3`, Magnolia `#F7E8D2/#C48A7A` or `#F2D4C4/#6E3A42`, Jasmine `#F4EFE6/#7A6B4E`, Lavender `#B8A0C8/#5A3F6E`) |
| display_line | Soft petal. Already claimed the peony bowl. |

## Chips
**Peony / Bud / Satin**

Ban: Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Coral/Bloom/Petal · Pebble · all prior pools.

## Bang
```
"{Name}: Soft petal. Already claimed the peony bowl."
"{Name}: Looks yard-bright. Owns the bowl."
```
Yard: `{Name} claimed the peony bowl.`

## Gift
None @177.

## Cadence
Camellia@174 → L175–L177 → **Peony@177** on L177 clear → L178–L180 triad. No friend_060 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_peony_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[177]=friend_059`  
3. lockChips + Met + single peony-bowl slot  
4. verify no Camellia collision; Camellia…Bean unchanged; no Pebble  
5. CAMPAIGN through L180; `verify:levels` green
