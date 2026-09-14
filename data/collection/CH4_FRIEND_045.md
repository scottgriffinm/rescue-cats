# Ch4 — friend_045 Oregano@135 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Tarragon@132  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_045` |
| unlock_clear | **135** |
| default_name | **Oregano** |
| tier | C |
| color / pattern | Orange / Freckled (warm wild-oregano green + dusty freckles — not Tarragon olive-spear, Dill dill-frond, Parsley leaf-curl, Lovage celery-stem, Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green, Clover) |
| personality | Wild-soft |
| board_color | orange |
| art_kit | `oregano` (warm wild-oregano loaf `#7A9A4E` + dusty freckles `#4A5C2E` — not Tarragon `#6B8F4E/#2F4A28`, Dill `#8FBF7A/#4A6B3E`, Parsley `#6FA86A/#3F6B3C`, Lovage `#9CB87A/#5E7348`, Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Wild dusty. Already claimed the pizza stone. |

## Chips
**Oregano / Wild / Bunch**

Ban: Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Sorrel/Dock/Zest · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Basil/Pesto/Herb · Clay/Brick/Terra · Ivory/Sheer · Juniper/Moss/Sage · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Clover/Patch/Fern · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools.

## Bang
```
"{Name}: Wild dusty. Already claimed the pizza stone."
"{Name}: Looks wild-cut. Owns the pizza stone."
```
Yard: `{Name} claimed the pizza stone.`

## Gift
None @135.

## Cadence
Tarragon@132 → L133–L135 → **Oregano@135** on L135 clear → L136–L138 triad. No friend_046 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_oregano_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[135]=friend_045`  
3. lockChips + Met + single pizza-stone slot  
4. verify no Tarragon collision; Tarragon…Bean unchanged; no Pebble  
5. CAMPAIGN through L138; `verify:levels` green
