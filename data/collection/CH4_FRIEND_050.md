# Ch4 — friend_050 Catnip@150 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Mint@147  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_050` |
| unlock_clear | **150** |
| default_name | **Catnip** |
| tier | C |
| color / pattern | Gray / Freckled (soft meadow-green loaf + tiny petal freckles — not Mint mint-frost, Rosemary dusty-needle, Thyme dusty-twig, Marjoram dusty-leaf, Oregano wild-dusty, Tarragon olive-spear, Dill dill-frond, Parsley leaf-curl, Lovage celery-stem, Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green, Clover) |
| personality | Pouch-soft |
| board_color | gray |
| art_kit | `catnip` (soft meadow-green loaf `#8FBF9A` + tiny petal freckles `#2F5C3A` — not Mint `#7EC8A3/#2F6B52`, Rosemary `#7A9B88/#2F463C`, Thyme `#A3B57C/#4E5C36`, Marjoram `#8FA86A/#3F5230`, Oregano `#7A9A4E/#4A5C2E`, Tarragon `#6B8F4E/#2F4A28`, Dill `#8FBF7A/#4A6B3E`, Parsley `#6FA86A/#3F6B3C`, Lovage `#9CB87A/#5E7348`, Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Soft meadow. Already claimed the catnip pouch. |

## Chips
**Catnip / Nip / Dream**

Ban: Mint/Chill/Frost · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Clay/Brick/Terra · Ivory/Sheer · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools. (Sage name was dropped because Juniper already used Sage chip.)

## Bang
```
"{Name}: Soft meadow. Already claimed the catnip pouch."
"{Name}: Looks yard-happy. Owns the pouch."
```
Yard: `{Name} claimed the catnip pouch.`

## Gift
None @150.

## Cadence
Mint@147 → L148–L150 → **Catnip@150** on L150 clear → L151–L153 triad. No friend_051 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_catnip_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[150]=friend_050`  
3. lockChips + Met + single catnip-pouch slot  
4. verify no Mint collision; Mint…Bean unchanged; no Pebble  
5. CAMPAIGN through L153; `verify:levels` green
