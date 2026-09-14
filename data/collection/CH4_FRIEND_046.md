# Ch4 — friend_046 Marjoram@138 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Oregano@135  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_046` |
| unlock_clear | **138** |
| default_name | **Marjoram** |
| tier | C |
| color / pattern | Gray / Freckled (soft dusty-marjoram green + tiny leaf freckles — not Oregano wild-dusty, Tarragon olive-spear, Dill dill-frond, Parsley leaf-curl, Lovage celery-stem, Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green, Clover) |
| personality | Peel-soft |
| board_color | gray |
| art_kit | `marjoram` (soft dusty-marjoram loaf `#8FA86A` + tiny leaf freckles `#3F5230` — not Oregano `#7A9A4E/#4A5C2E`, Tarragon `#6B8F4E/#2F4A28`, Dill `#8FBF7A/#4A6B3E`, Parsley `#6FA86A/#3F6B3C`, Lovage `#9CB87A/#5E7348`, Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Soft dusty. Already claimed the pizza peel. |

## Chips
**Marjoram / Softleaf / Peel**

Ban: Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Sorrel/Dock/Zest · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Basil/Pesto/Herb · Clay/Brick/Terra · Ivory/Sheer · Juniper/Moss/Sage · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Clover/Patch/Fern · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools.

## Bang
```
"{Name}: Soft dusty. Already claimed the pizza peel."
"{Name}: Looks soft-leafed. Owns the pizza peel."
```
Yard: `{Name} claimed the pizza peel.`

## Gift
None @138.

## Cadence
Oregano@135 → L136–L138 → **Marjoram@138** on L138 clear → L139–L141 triad. No friend_047 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_marjoram_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[138]=friend_046`  
3. lockChips + Met + single pizza-peel slot  
4. verify no Oregano collision; Oregano…Bean unchanged; no Pebble  
5. CAMPAIGN through L141; `verify:levels` green
