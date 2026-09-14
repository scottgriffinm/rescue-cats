# Ch4 — friend_037 Nettle@111 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Ivy@108  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_037` |
| unlock_clear | **111** |
| default_name | **Nettle** |
| tier | C |
| color / pattern | Gray / Freckled (sage-green-gray + pale leaf-tip freckles — not Ivy deep green-black, Basil herb-green, Juniper moss, Thistle lilac, Mist mackerel, Clover silver spots, Linen wash) |
| personality | Sting-soft |
| board_color | gray |
| art_kit | `nettle` (sage-green-gray loaf `#6A7D6E` + pale leaf-tip freckles `#D7E4C4` — not Ivy `#1A2C24`, Basil `#7A9B6A`, Juniper `#7E8F86`, Thistle `#A394B0`, Mist `#C4BDB4`, Clover `#B4BCC2`, or Linen `#B4BAC2`) |
| display_line | Stings soft. Already claimed the shady under-rail. |

## Chips
**Nettle / Sting / Leaf**

Ban: Ivy/Tendril/Climb · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Basil/Pesto/Herb · Clay/Brick/Terra · Ivory/Lace/Sheer · Juniper/Moss/Sage · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Clover/Patch/Fern · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools

## Bang
```
"{Name}: Stings soft. Already claimed the shady under-rail."
"{Name}: Looks leafy. Sleeps under the rail."
```
Yard: `{Name} claimed the shady under-rail.`

## Gift
None @111.

## Cadence
Ivy@108 → L109–L111 → **Nettle@111** on L111 clear → L112–L114 triad. No friend_038 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_nettle_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[111]=friend_037`  
3. lockChips + Met + single under-rail slot  
4. verify no Ivy collision; Ivy…Bean unchanged; no Pebble  
5. CAMPAIGN through L114; `verify:levels` green
