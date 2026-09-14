# Ch4 — friend_049 Mint@147 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Rosemary@144  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_049` |
| unlock_clear | **147** |
| default_name | **Mint** |
| tier | C |
| color / pattern | Gray / Freckled (cool mint-frost loaf + tiny frost freckles — not Rosemary dusty-needle, Thyme dusty-twig, Marjoram dusty-leaf, Oregano wild-dusty, Tarragon olive-spear, Dill dill-frond, Parsley leaf-curl, Lovage celery-stem, Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green, Clover) |
| personality | Tin-cool |
| board_color | gray |
| art_kit | `mint` (cool mint-frost loaf `#7EC8A3` + tiny frost freckles `#2F6B52` — not Rosemary `#7A9B88/#2F463C`, Thyme `#A3B57C/#4E5C36`, Marjoram `#8FA86A/#3F5230`, Oregano `#7A9A4E/#4A5C2E`, Tarragon `#6B8F4E/#2F4A28`, Dill `#8FBF7A/#4A6B3E`, Parsley `#6FA86A/#3F6B3C`, Lovage `#9CB87A/#5E7348`, Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Cool frost. Already claimed the mint tin. |

## Chips
**Mint / Chill / Frost**

Ban: Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Briar/Thorn/Hedge · Thistle/Burr/Bramble · Plum/Damson/Stone · Fig/Olive/Pit · Clay/Brick/Terra · Ivory/Sheer · Linen/Gauze/Whisper · Cocoa/Mocha/Fudge · Steve/Bob/Ned · Maple/Hazel/Amber · Blue/Silver/Steel · Coral/Bloom/Petal · Velvet/Plush/Dove · Mist/Fog/Soft · Biscuit/Mochi/Toast · Dumpling/Bao/Fold · Ghost/Wisp/Pearl · Cloud/Puff/Drift · Donna/Nigel · Pebble · all prior pools.

## Bang
```
"{Name}: Cool frost. Already claimed the mint tin."
"{Name}: Looks kitchen-cool. Owns the tin."
```
Yard: `{Name} claimed the mint tin.`

## Gift
None @147.

## Cadence
Rosemary@144 → L145–L147 → **Mint@147** on L147 clear → L148–L150 triad. No friend_050 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_mint_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[147]=friend_049`  
3. lockChips + Met + single mint-tin slot  
4. verify no Rosemary collision; Rosemary…Bean unchanged; no Pebble  
5. CAMPAIGN through L150; `verify:levels` green
