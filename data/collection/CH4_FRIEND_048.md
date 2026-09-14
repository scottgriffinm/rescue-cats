# Ch4 — friend_048 Rosemary@144 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Thyme@141  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_048` |
| unlock_clear | **144** |
| default_name | **Rosemary** |
| tier | C |
| color / pattern | Gray / Freckled (cool dusty-rosemary blue-green + tiny needle freckles — not Thyme dusty-twig, Marjoram dusty-leaf, Oregano wild-dusty, Tarragon olive-spear, Dill dill-frond, Parsley leaf-curl, Lovage celery-stem, Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green, Clover) |
| personality | Pot-cool |
| board_color | gray |
| art_kit | `rosemary` (cool dusty-rosemary loaf `#7A9B88` + tiny needle freckles `#2F463C` — not Thyme `#A3B57C/#4E5C36`, Marjoram `#8FA86A/#3F5230`, Oregano `#7A9A4E/#4A5C2E`, Tarragon `#6B8F4E/#2F4A28`, Dill `#8FBF7A/#4A6B3E`, Parsley `#6FA86A/#3F6B3C`, Lovage `#9CB87A/#5E7348`, Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Cool dusty. Already claimed the rosemary pot. |

## Chips
**Rosemary / Needle / Woody**

Ban: Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Clay/Brick/Terra · Ivory/Sheer · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools.

## Bang
```
"{Name}: Cool dusty. Already claimed the rosemary pot."
"{Name}: Looks kitchen-cool. Owns the pot."
```
Yard: `{Name} claimed the rosemary pot.`

## Gift
None @144.

## Cadence
Thyme@141 → L142–L144 → **Rosemary@144** on L144 clear → L145–L147 triad. No friend_049 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_rosemary_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[144]=friend_048`  
3. lockChips + Met + single rosemary-pot slot  
4. verify no Thyme collision; Thyme…Bean unchanged; no Pebble  
5. CAMPAIGN through L147; `verify:levels` green
