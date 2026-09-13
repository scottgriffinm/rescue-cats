# Ch4 — friend_036 Ivy@108 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Briar@105  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_036` |
| unlock_clear | **108** |
| default_name | **Ivy** |
| tier | C |
| color / pattern | Black / Spotted (cool deep green-black + pale cream tendril freckles — not Shadow flat black, Plum gloss purple-black, Basil herb-green, Juniper moss, Briar russet, Thistle lilac, Fig cream) |
| personality | Climb-soft |
| board_color | black |
| art_kit | `ivy` (cool deep green-black loaf `#1A2C24` + pale cream tendril freckles `#F3E8C8` — not Shadow, Plum, Basil, Juniper, Briar `#8E4C2E`, Thistle, or Fig) |
| display_line | Climbs soft. Already claimed the porch rail. |

## Chips
**Ivy / Tendril / Climb**

Ban: Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Basil/Pesto/Herb · Clay/Brick/Terra · Ivory/Lace/Sheer · Juniper/Moss/Sage · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Clover/Patch/Fern · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools

## Bang
```
"{Name}: Climbs soft. Already claimed the porch rail."
"{Name}: Looks wild. Naps in the shade."
```
Yard: `{Name} claimed the porch rail.`

## Gift
None @108.

## Cadence
Briar@105 → L106–L108 → **Ivy@108** on L108 clear → L109–L111 triad. No friend_037 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_ivy_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[108]=friend_036`  
3. lockChips + Met + single porch slot  
4. verify no Briar collision; Briar…Bean unchanged; no Pebble  
5. CAMPAIGN through L111; `verify:levels` green
