# Ch4 — friend_040 Chervil@120 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Fennel@117  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_040` |
| unlock_clear | **120** |
| default_name | **Chervil** |
| tier | C |
| color / pattern | Gray / Freckled (pale herb-lace green + fine lace freckles — not Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Linen wash, Ivory sheer) |
| personality | Lace-soft |
| board_color | gray |
| art_kit | `chervil` (pale herb-lace green loaf `#C6D9B4` + fine lace freckles `#5E7F52` — not Fennel `#E6C86E`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, Linen `#B4BAC2`, or Ivory `#EBE3C4`) |
| display_line | Pale lace. Already claimed the herb sill. |

## Chips
**Chervil / Frill / Lace**

Ban: Fennel/Frond/Anise · Sorrel/Dock/Zest · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Basil/Pesto/Herb · Clay/Brick/Terra · Ivory/Sheer · Juniper/Moss/Sage · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Clover/Patch/Fern · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools

## Bang
```
"{Name}: Pale lace. Already claimed the herb sill."
"{Name}: Looks fine-cut. Owns the sill."
```
Yard: `{Name} claimed the herb sill.`

## Gift
None @120.

## Cadence
Fennel@117 → L118–L120 → **Chervil@120** on L120 clear → L121–L123 triad. No friend_041 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_chervil_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[120]=friend_040`  
3. lockChips + Met + single herb-sill slot  
4. verify no Fennel collision; Fennel…Bean unchanged; no Pebble  
5. CAMPAIGN through L123; `verify:levels` green
