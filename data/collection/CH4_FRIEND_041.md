# Ch4 — friend_041 Lovage@123 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Chervil@120  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_041` |
| unlock_clear | **123** |
| default_name | **Lovage** |
| tier | C |
| color / pattern | Gray / Freckled (celery-stem green + rib freckles — not Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green) |
| personality | Rib-soft |
| board_color | gray |
| art_kit | `lovage` (celery-stem green loaf `#9CB87A` + rib freckles `#5E7348` — not Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Celery-stem green. Already claimed the rib bed. |

## Chips
**Lovage / Stem / Rib**

Ban: Chervil/Frill/Lace · Fennel/Frond/Anise · Sorrel/Dock/Zest · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Basil/Pesto/Herb · Clay/Brick/Terra · Ivory/Sheer · Juniper/Moss/Sage · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Clover/Patch/Fern · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools

## Bang
```
"{Name}: Celery-stem green. Already claimed the rib bed."
"{Name}: Looks stem-cut. Owns the bed."
```
Yard: `{Name} claimed the rib bed.`

## Gift
None @123.

## Cadence
Chervil@120 → L121–L123 → **Lovage@123** on L123 clear → L124–L126 triad. No friend_042 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_lovage_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[123]=friend_041`  
3. lockChips + Met + single rib-bed slot  
4. verify no Chervil collision; Chervil…Bean unchanged; no Pebble  
5. CAMPAIGN through L126; `verify:levels` green
