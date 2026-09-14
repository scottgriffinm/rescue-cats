# Ch4 — friend_044 Tarragon@132 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Dill@129  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_044` |
| unlock_clear | **132** |
| default_name | **Tarragon** |
| tier | C |
| color / pattern | Gray / Freckled (deep olive-spear + spear freckles — not Dill dill-frond, Parsley leaf-curl, Lovage celery-stem, Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green, Clover) |
| personality | Spear-soft |
| board_color | gray |
| art_kit | `tarragon` (deep olive-spear loaf `#6B8F4E` + spear freckles `#2F4A28` — not Dill `#8FBF7A/#4A6B3E`, Parsley `#6FA86A/#3F6B3C`, Lovage `#9CB87A/#5E7348`, Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Soft spear. Already claimed the vinegar cruet. |

## Chips
**Tarragon / Spear / Bitters**

Ban: Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Sorrel/Dock/Zest · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Basil/Pesto/Herb · Clay/Brick/Terra · Ivory/Sheer · Juniper/Moss/Sage · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Clover/Patch/Fern · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools.

## Bang
```
"{Name}: Soft spear. Already claimed the vinegar cruet."
"{Name}: Looks spear-cut. Owns the cruet."
```
Yard: `{Name} claimed the vinegar cruet.`

## Gift
None @132.

## Cadence
Dill@129 → L130–L132 → **Tarragon@132** on L132 clear → L133–L135 triad. No friend_045 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_tarragon_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[132]=friend_044`  
3. lockChips + Met + single vinegar-cruet slot  
4. verify no Dill collision; Dill…Bean unchanged; no Pebble  
5. CAMPAIGN through L135; `verify:levels` green
