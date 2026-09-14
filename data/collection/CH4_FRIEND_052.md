# Ch4 — friend_052 Chamomile@156 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Lavender@153  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_052` |
| unlock_clear | **156** |
| default_name | **Chamomile** |
| tier | C |
| color / pattern | Gray / Freckled (soft cream-gold loaf + tiny petal freckles — not Lavender lilac-gray, Catnip meadow-green, Mint mint-frost, Rosemary dusty-needle, Thyme dusty-twig, Marjoram dusty-leaf, Oregano wild-dusty, Tarragon olive-spear, Dill dill-frond, Parsley leaf-curl, Lovage celery-stem, Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green, Clover) |
| personality | Cup-soft |
| board_color | gray |
| art_kit | `chamomile` (soft cream-gold loaf `#E8D5A3` + tiny petal freckles `#8A6B2E` — not Lavender `#B8A0C8/#5A3F6E`, Catnip `#8FBF9A/#2F5C3A`, Mint `#7EC8A3/#2F6B52`, Rosemary `#7A9B88/#2F463C`, Thyme `#A3B57C/#4E5C36`, Marjoram `#8FA86A/#3F5230`, Oregano `#7A9A4E/#4A5C2E`, Tarragon `#6B8F4E/#2F4A28`, Dill `#8FBF7A/#4A6B3E`, Parsley `#6FA86A/#3F6B3C`, Lovage `#9CB87A/#5E7348`, Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Soft cream. Already claimed the chamomile cup. |

## Chips
**Chamomile / Daisy / Tea**

Ban: Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Clay/Brick/Terra · Ivory/Sheer · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools. (Daisy chip is CEO-locked on Chamomile.)

## Bang
```
"{Name}: Soft cream. Already claimed the chamomile cup."
"{Name}: Looks yard-happy. Owns the cup."
```
Yard: `{Name} claimed the chamomile cup.`

## Gift
None @156.

## Cadence
Lavender@153 → L154–L156 → **Chamomile@156** on L156 clear → L157–L159 triad. No friend_053 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_chamomile_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[156]=friend_052`  
3. lockChips + Met + single chamomile-cup slot  
4. verify no Lavender collision; Lavender…Bean unchanged; no Pebble  
5. CAMPAIGN through L159; `verify:levels` green
