# Ch4 — friend_056 Hibiscus@168 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Magnolia@165  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_056` |
| unlock_clear | **168** |
| default_name | **Hibiscus** |
| tier | C |
| color / pattern | Gray / Freckled (deep tea-rose loaf + tiny berry freckles — not Magnolia cream-blush, Jasmine ivory-blossom, Bergamot citrus-cream, Chamomile cream-gold, Lavender lilac-gray, Catnip meadow-green, Mint mint-frost, Ivory sheer, Rosemary dusty-needle, Thyme dusty-twig, Marjoram dusty-leaf, Oregano wild-dusty, Tarragon olive-spear, Dill dill-frond, Parsley leaf-curl, Lovage celery-stem, Chervil herb-lace, Fennel cream-gold, Basil herb-green, Nettle sage, Ivy deep green-black, Juniper moss, Sorrel lemon-green, Clover) |
| personality | Sip-soft |
| board_color | gray |
| art_kit | `hibiscus` (deep tea-rose loaf `#D46A8A` + tiny berry freckles `#5A1F3A` — not Magnolia `#F7E8D2/#C48A7A` or `#F2D4C4/#6E3A42`, Jasmine `#F4EFE6/#7A6B4E`, Bergamot `#F0C98A/#9A5A1A`, Chamomile `#E8D5A3/#8A6B2E`, Lavender `#B8A0C8/#5A3F6E`, Catnip `#8FBF9A/#2F5C3A`, Mint `#7EC8A3/#2F6B52`, Ivory `#EBE3C4/#C9C09A`, Rosemary `#7A9B88/#2F463C`, Thyme `#A3B57C/#4E5C36`, Marjoram `#8FA86A/#3F5230`, Oregano `#7A9A4E/#4A5C2E`, Tarragon `#6B8F4E/#2F4A28`, Dill `#8FBF7A/#4A6B3E`, Parsley `#6FA86A/#3F6B3C`, Lovage `#9CB87A/#5E7348`, Chervil `#C6D9B4/#5E7F52`, Fennel `#E6C86E/#8A7C38`, Basil `#7A9B6A`, Nettle `#6A7D6E`, Ivy `#1A2C24`, Juniper `#7E8F86`, or Sorrel `#C8D24A`) |
| display_line | Deep tea-rose. Already claimed the hibiscus cup. |

## Chips
**Hibiscus / Roselle / Punch**

Ban: Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Coral/Bloom/Petal · Pebble · all prior pools.

## Bang
```
"{Name}: Deep tea-rose. Already claimed the hibiscus cup."
"{Name}: Looks yard-bright. Owns the cup."
```
Yard: `{Name} claimed the hibiscus cup.`

## Gift
None @168.

## Cadence
Magnolia@165 → L166–L168 → **Hibiscus@168** on L168 clear → L169–L171 triad. No friend_057 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_hibiscus_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[168]=friend_056`  
3. lockChips + Met + single hibiscus-cup slot  
4. verify no Magnolia collision; Magnolia…Bean unchanged; no Pebble  
5. CAMPAIGN through L171; `verify:levels` green
