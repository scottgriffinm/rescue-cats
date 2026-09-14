# Ch4 — friend_053 Bergamot@159 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Chamomile@156  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_053` |
| unlock_clear | **159** |
| default_name | **Bergamot** |
| tier | C |
| color / pattern | Orange / Freckled (warm citrus-cream loaf + tiny rind freckles — not Chamomile cream-gold, Lavender lilac-gray, Catnip meadow-green, Mint mint-frost, Rosemary dusty-needle, Thyme dusty-twig, Marjoram dusty-leaf, Oregano wild-dusty, Tarragon olive-spear, Dill dill-frond, Parsley leaf-curl, Lovage celery-stem, Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green, Clover) |
| personality | Saucer-soft |
| board_color | orange |
| art_kit | `bergamot` (warm citrus-cream loaf `#F0C98A` + tiny rind freckles `#9A5A1A` — not Chamomile `#E8D5A3/#8A6B2E`, Lavender `#B8A0C8/#5A3F6E`, Catnip `#8FBF9A/#2F5C3A`, Mint `#7EC8A3/#2F6B52`, Rosemary `#7A9B88/#2F463C`, Thyme `#A3B57C/#4E5C36`, Marjoram `#8FA86A/#3F5230`, Oregano `#7A9A4E/#4A5C2E`, Tarragon `#6B8F4E/#2F4A28`, Dill `#8FBF7A/#4A6B3E`, Parsley `#6FA86A/#3F6B3C`, Lovage `#9CB87A/#5E7348`, Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Bright citrus. Already claimed the bergamot saucer. |

## Chips
**Bergamot / Citrus / Earl**

Ban: Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Coral/Bloom/Petal · Pebble · all prior pools.

## Bang
```
"{Name}: Bright citrus. Already claimed the bergamot saucer."
"{Name}: Looks yard-bright. Owns the saucer."
```
Yard: `{Name} claimed the bergamot saucer.`

## Gift
None @159.

## Cadence
Chamomile@156 → L157–L159 → **Bergamot@159** on L159 clear → L160–L162 triad. No friend_054 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_bergamot_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[159]=friend_053`  
3. lockChips + Met + single bergamot-saucer slot  
4. verify no Chamomile collision; Chamomile…Bean unchanged; no Pebble  
5. CAMPAIGN through L162; `verify:levels` green
