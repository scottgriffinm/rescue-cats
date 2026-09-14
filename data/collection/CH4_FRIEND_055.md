# Ch4 — friend_055 Magnolia@165 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Jasmine@162  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_055` |
| unlock_clear | **165** |
| default_name | **Magnolia** |
| tier | C |
| color / pattern | Gray / Freckled (warm cream-magnolia loaf + blush freckles — not Jasmine ivory-blossom, Bergamot citrus-cream, Chamomile cream-gold, Lavender lilac-gray, Catnip meadow-green, Mint mint-frost, Ivory sheer, Rosemary dusty-needle, Thyme dusty-twig, Marjoram dusty-leaf, Oregano wild-dusty, Tarragon olive-spear, Dill dill-frond, Parsley leaf-curl, Lovage celery-stem, Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green, Clover) |
| personality | Bowl-soft |
| board_color | gray |
| art_kit | `magnolia` (warm cream-magnolia loaf `#F7E8D2` + blush freckles `#C48A7A` — not Jasmine `#F4EFE6/#7A6B4E`, Bergamot `#F0C98A/#9A5A1A`, Chamomile `#E8D5A3/#8A6B2E`, Lavender `#B8A0C8/#5A3F6E`, Catnip `#8FBF9A/#2F5C3A`, Mint `#7EC8A3/#2F6B52`, Ivory `#EBE3C4/#C9C09A`, Rosemary `#7A9B88/#2F463C`, Thyme `#A3B57C/#4E5C36`, Marjoram `#8FA86A/#3F5230`, Oregano `#7A9A4E/#4A5C2E`, Tarragon `#6B8F4E/#2F4A28`, Dill `#8FBF7A/#4A6B3E`, Parsley `#6FA86A/#3F6B3C`, Lovage `#9CB87A/#5E7348`, Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Soft cream. Already claimed the magnolia bowl. |

## Chips
**Magnolia / Cream / Blush**

Ban: Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Coral/Bloom/Petal · Pebble · all prior pools.

## Bang
```
"{Name}: Soft cream. Already claimed the magnolia bowl."
"{Name}: Looks yard-bright. Owns the bowl."
```
Yard: `{Name} claimed the magnolia bowl.`

## Gift
None @165.

## Cadence
Jasmine@162 → L163–L165 → **Magnolia@165** on L165 clear → L166–L168 triad. No friend_056 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_magnolia_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[165]=friend_055`  
3. lockChips + Met + single magnolia-bowl slot  
4. verify no Jasmine collision; Jasmine…Bean unchanged; no Pebble  
5. CAMPAIGN through L168; `verify:levels` green
