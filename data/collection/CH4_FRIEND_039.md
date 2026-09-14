# Ch4 — friend_039 Fennel@117 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Sorrel@114  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_039` |
| unlock_clear | **117** |
| default_name | **Fennel** |
| tier | C |
| color / pattern | Gray / Freckled (pale cream-gold + soft frond freckles — not Sorrel lemon-green, Ivory wash, Fig cream, Basil herb, Juniper moss, Sunny orange, Linen) |
| personality | Anise-soft |
| board_color | gray |
| art_kit | `fennel` (pale cream-gold loaf `#E6C86E` + soft frond freckles `#8A7C38` — not Sorrel `#C8D24A`, Ivory `#EBE3C4`, Fig `#C9B08C`, Basil `#7A9B6A`, Juniper `#7E8F86`, Sunny `#E59A3C`, or Linen `#B4BAC2`) |
| display_line | Soft anise. Already claimed the frond stoop. |

## Chips
**Fennel / Frond / Anise**

Ban: Sorrel/Dock/Zest · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Basil/Pesto/Herb · Clay/Brick/Terra · Ivory/Lace/Sheer · Juniper/Moss/Sage · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Clover/Patch/Fern · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools

## Bang
```
"{Name}: Soft anise. Already claimed the frond stoop."
"{Name}: Looks delicate. Owns the breeze."
```
Yard: `{Name} claimed the frond stoop.`

## Gift
None @117.

## Cadence
Sorrel@114 → L115–L117 → **Fennel@117** on L117 clear → L118–L120 triad. No friend_040 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_fennel_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[117]=friend_039`  
3. lockChips + Met + single frond-stoop slot  
4. verify no Sorrel collision; Sorrel…Bean unchanged; no Pebble  
5. CAMPAIGN through L120; `verify:levels` green
