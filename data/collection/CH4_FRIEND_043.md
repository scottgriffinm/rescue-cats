# Ch4 — friend_043 Dill@129 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Parsley@126  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_043` |
| unlock_clear | **129** |
| default_name | **Dill** |
| tier | C |
| color / pattern | Gray / Freckled (dill-frond soft green + seed freckles — not Parsley leaf-curl, Lovage celery-stem, Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green, Clover) |
| personality | Seed-soft |
| board_color | gray |
| art_kit | `dill` (dill-frond soft green loaf `#8FBF7A` + seed freckles `#4A6B3E` — not Parsley `#6FA86A/#3F6B3C`, Lovage `#9CB87A/#5E7348`, Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Soft frond. Already claimed the pickle jar ledge. |

## Chips
**Dill / Frondlet / Seed**

Ban: Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Sorrel/Dock/Zest · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Basil/Pesto/Herb · Clay/Brick/Terra · Ivory/Sheer · Juniper/Moss/Sage · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Clover/Patch/Fern · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools. Use **Frondlet** not Frond.

## Bang
```
"{Name}: Soft frond. Already claimed the pickle jar ledge."
"{Name}: Looks seed-cut. Owns the ledge."
```
Yard: `{Name} claimed the pickle jar ledge.`

## Gift
None @129.

## Cadence
Parsley@126 → L127–L129 → **Dill@129** on L129 clear → L130–L132 triad. No friend_044 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_dill_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[129]=friend_043`  
3. lockChips + Met + single pickle-jar-ledge slot  
4. verify no Parsley collision; Parsley…Bean unchanged; no Pebble  
5. CAMPAIGN through L132; `verify:levels` green
