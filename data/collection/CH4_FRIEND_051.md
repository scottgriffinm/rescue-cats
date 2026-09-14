# Ch4 — friend_051 Lavender@153 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Catnip@150  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_051` |
| unlock_clear | **153** |
| default_name | **Lavender** |
| tier | C |
| color / pattern | Gray / Freckled (soft lilac-gray loaf + tiny petal freckles — not Catnip meadow-green, Mint mint-frost, Rosemary dusty-needle, Thyme dusty-twig, Marjoram dusty-leaf, Oregano wild-dusty, Tarragon olive-spear, Dill dill-frond, Parsley leaf-curl, Lovage celery-stem, Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green, Clover) |
| personality | Bundle-soft |
| board_color | gray |
| art_kit | `lavender` (soft lilac-gray loaf `#B8A0C8` + tiny petal freckles `#5A3F6E` — not Catnip `#8FBF9A/#2F5C3A`, Mint `#7EC8A3/#2F6B52`, Rosemary `#7A9B88/#2F463C`, Thyme `#A3B57C/#4E5C36`, Marjoram `#8FA86A/#3F5230`, Oregano `#7A9A4E/#4A5C2E`, Tarragon `#6B8F4E/#2F4A28`, Dill `#8FBF7A/#4A6B3E`, Parsley `#6FA86A/#3F6B3C`, Lovage `#9CB87A/#5E7348`, Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Soft lilac. Already claimed the lavender bundle. |

## Chips
**Lavender / Bloom / Calm**

Ban: Catnip/Nip/Dream · Mint/Chill/Frost · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Clay/Brick/Terra · Ivory/Sheer · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools. (Bloom chip is CEO-locked on Lavender.)

## Bang
```
"{Name}: Soft lilac. Already claimed the lavender bundle."
"{Name}: Looks yard-happy. Owns the bundle."
```
Yard: `{Name} claimed the lavender bundle.`

## Gift
None @153.

## Cadence
Catnip@150 → L151–L153 → **Lavender@153** on L153 clear → L154–L156 triad. No friend_052 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_lavender_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[153]=friend_051`  
3. lockChips + Met + single lavender-bundle slot  
4. verify no Catnip collision; Catnip…Bean unchanged; no Pebble  
5. CAMPAIGN through L156; `verify:levels` green
