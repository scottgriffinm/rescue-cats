# Ch4 — friend_047 Thyme@141 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Marjoram@138  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_047` |
| unlock_clear | **141** |
| default_name | **Thyme** |
| tier | C |
| color / pattern | Gray / Freckled (soft dusty-thyme gray-green + tiny twig freckles — not Marjoram dusty-leaf, Oregano wild-dusty, Tarragon olive-spear, Dill dill-frond, Parsley leaf-curl, Lovage celery-stem, Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green, Clover) |
| personality | Jar-tiny |
| board_color | gray |
| art_kit | `thyme` (soft dusty-thyme loaf `#A3B57C` + tiny twig freckles `#4E5C36` — not Marjoram `#8FA86A/#3F5230`, Oregano `#7A9A4E/#4A5C2E`, Tarragon `#6B8F4E/#2F4A28`, Dill `#8FBF7A/#4A6B3E`, Parsley `#6FA86A/#3F6B3C`, Lovage `#9CB87A/#5E7348`, Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Tiny dusty. Already claimed the thyme jar. |

## Chips
**Thyme / Pinch / Twig**

Ban: Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Sorrel/Dock/Zest · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Basil/Pesto/Herb · Clay/Brick/Terra · Ivory/Sheer · Juniper/Moss/Sage · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Clover/Patch/Fern · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools.

## Bang
```
"{Name}: Tiny dusty. Already claimed the thyme jar."
"{Name}: Looks kitchen-tiny. Owns the jar."
```
Yard: `{Name} claimed the thyme jar.`

## Gift
None @141.

## Cadence
Marjoram@138 → L139–L141 → **Thyme@141** on L141 clear → L142–L144 triad. No friend_048 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_thyme_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[141]=friend_047`  
3. lockChips + Met + single thyme-jar slot  
4. verify no Marjoram collision; Marjoram…Bean unchanged; no Pebble  
5. CAMPAIGN through L144; `verify:levels` green
