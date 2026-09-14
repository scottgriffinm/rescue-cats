# Ch4 — friend_058 Camellia@174 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Gardenia@171  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_058` |
| unlock_clear | **174** |
| default_name | **Camellia** |
| tier | C |
| color / pattern | Orange / Freckled (deep rose-camellia loaf + wax freckles — not Gardenia porcelain-leaf, Hibiscus tea-rose, Magnolia cream-blush, Jasmine ivory-blossom, Lavender lilac-gray) |
| personality | Tray-soft |
| board_color | orange |
| art_kit | `camellia` (deep rose-camellia loaf `#C45A6A` + wax freckles `#5A2030` — not Gardenia `#F6F1E8/#4F6B4A` or `#FFFBF3`, Hibiscus `#D46A8A/#5A1F3A` or `#C24A6E/#EBB0C2`, Magnolia `#F7E8D2/#C48A7A` or `#F2D4C4/#6E3A42`, Jasmine `#F4EFE6/#7A6B4E`, Lavender `#B8A0C8/#5A3F6E`) |
| display_line | Soft wax. Already claimed the camellia tray. |

## Chips
**Camellia / Wax / Rose**

Ban: Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Coral/Bloom/Petal · Pebble · all prior pools.

## Bang
```
"{Name}: Soft wax. Already claimed the camellia tray."
"{Name}: Looks yard-bright. Owns the tray."
```
Yard: `{Name} claimed the camellia tray.`

## Gift
None @174.

## Cadence
Gardenia@171 → L172–L174 → **Camellia@174** on L174 clear → L175–L177 triad. No friend_059 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_camellia_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[174]=friend_058`  
3. lockChips + Met + single camellia-tray slot  
4. verify no Gardenia collision; Gardenia…Bean unchanged; no Pebble  
5. CAMPAIGN through L177; `verify:levels` green
