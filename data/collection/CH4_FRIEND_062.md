# Ch4 — friend_062 Zinnia@186 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Dahlia@183  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_062` |
| unlock_clear | **186** |
| default_name | **Zinnia** |
| tier | C |
| color / pattern | Orange / Freckled (sunlit coral-tangerine loaf + ember freckles — not Dahlia wine-burgundy, Azalea fuchsia-magenta, Peony blush-petal, Camellia deep rose-wax, Hibiscus tea-rose, Gardenia porcelain-leaf, Magnolia blush) |
| personality | Urn-soft |
| board_color | orange |
| art_kit | `zinnia` (sunlit coral-tangerine loaf `#E85A2A` + ember freckles `#3A1808` — not Dahlia `#8B2E4A/#2A1018` or `#C86A80`, Azalea `#B84A8C/#3F1830` or `#E8A0C4`, Peony `#E8B4C8/#5A3048` or `#F7DCE6`, Camellia `#C45A6A/#5A2030` or `#F3C8CC`, Hibiscus `#D46A8A/#5A1F3A` or `#C24A6E/#EBB0C2`, Gardenia `#F6F1E8/#4F6B4A` or `#FFFBF3`, Magnolia `#F7E8D2/#C48A7A`) |
| display_line | Sunlit coral. Already claimed the zinnia urn. |

## Chips
**Zinnia / Quill / Gleam**

Ban: Dahlia/Spire/Ember · Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Coral/Bloom/Petal · Pebble · all prior pools.

## Bang
```
"{Name}: Sunlit coral. Already claimed the zinnia urn."
"{Name}: Looks yard-bright. Owns the urn."
```
Yard: `{Name} claimed the zinnia urn.`

## Gift
None @186.

## Cadence
Dahlia@183 → L184–L186 → **Zinnia@186** on L186 clear → L187–L189 triad. No friend_063 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_zinnia_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[186]=friend_062`  
3. lockChips + Met + single zinnia-urn slot  
4. verify no Dahlia collision; Dahlia…Bean unchanged; no Pebble  
5. CAMPAIGN through L189; `verify:levels` green
