# Ch4 — friend_035 Briar@105 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Thistle@102  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_035` |
| unlock_clear | **105** |
| default_name | **Briar** |
| tier | C |
| color / pattern | Orange / Freckled (warm russet-brown + cool vine-tip freckles — not Pumpkin swirl, Pepper spice spots, Cocoa fudge, Maple amber, Thistle lilac, Plum gloss, Fig cream) |
| personality | Tangled |
| board_color | orange |
| art_kit | `briar` (warm russet-brown loaf `#8E4C2E` + cool vine-tip freckles `#2E6B5A` — not Pumpkin, Pepper, Cocoa, Maple, Thistle, Plum, or Fig) |
| display_line | Tangled soft. Already claimed the bramble gap. |

## Chips
**Briar / Thorn / Hedge**

Ban: Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Basil/Pesto/Herb · Clay/Brick/Terra · Ivory/Lace/Sheer · Juniper/Moss/Sage · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Clover/Patch/Fern · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools

## Bang
```
"{Name}: Tangled soft. Already claimed the bramble gap."
"{Name}: Looks thorny. Kneads like a pillow."
```
Yard: `{Name} claimed the bramble gap.`

## Gift
None @105.

## Cadence
Thistle@102 → L103–L105 → **Briar@105** on L105 clear → L106–L108 triad. No friend_036 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_briar_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[105]=friend_035`  
3. lockChips + Met + single porch slot  
4. verify no Thistle collision; Thistle…Bean unchanged; no Pebble  
5. CAMPAIGN through L108; `verify:levels` green
