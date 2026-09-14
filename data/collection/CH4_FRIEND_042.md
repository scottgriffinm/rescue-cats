# Ch4 — friend_042 Parsley@126 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Lovage@123  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_042` |
| unlock_clear | **126** |
| default_name | **Parsley** |
| tier | C |
| color / pattern | Gray / Freckled (fresh parsley-leaf green + curl freckles — not Lovage celery-stem, Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green, Clover) |
| personality | Curl-soft |
| board_color | gray |
| art_kit | `parsley` (fresh parsley-leaf green loaf `#6FA86A` + curl freckles `#3F6B3C` — not Lovage `#9CB87A/#5E7348`, Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Fresh curl. Already claimed the garnish rail. |

## Chips
**Parsley / Curl / Sprig**

Ban: Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Sorrel/Dock/Zest · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Basil/Pesto/Herb · Clay/Brick/Terra · Ivory/Sheer · Juniper/Moss/Sage · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Clover/Patch/Fern · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools

## Bang
```
"{Name}: Fresh curl. Already claimed the garnish rail."
"{Name}: Looks curl-cut. Owns the rail."
```
Yard: `{Name} claimed the garnish rail.`

## Gift
None @126.

## Cadence
Lovage@123 → L124–L126 → **Parsley@126** on L126 clear → L127–L129 triad. No friend_043 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_parsley_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[126]=friend_042`  
3. lockChips + Met + single garnish-rail slot  
4. verify no Lovage collision; Lovage…Bean unchanged; no Pebble  
5. CAMPAIGN through L129; `verify:levels` green
