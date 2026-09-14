# Ch4 — friend_061 Dahlia@183 READY TO SHIP
**Owner:** Cat Collection Lead  
**After:** Azalea@180  
**Parade through Bean stands; no Pebble.** Soft hearts only. No gift.

## Lock
| Field | Value |
|-------|-------|
| friend_id | `friend_061` |
| unlock_clear | **183** |
| default_name | **Dahlia** |
| tier | C |
| color / pattern | Gray / Freckled (deep wine-burgundy loaf + dusk freckles — not Azalea fuchsia-magenta, Peony blush-petal, Camellia deep rose-wax, Hibiscus tea-rose, Gardenia porcelain-leaf) |
| personality | Vase-soft |
| board_color | gray |
| art_kit | `dahlia` (deep wine-burgundy loaf `#8B2E4A` + dusk freckles `#2A1018` — not Azalea `#B84A8C/#3F1830` or `#E8A0C4`, Peony `#E8B4C8/#5A3048` or `#F7DCE6`, Camellia `#C45A6A/#5A2030` or `#F3C8CC`, Hibiscus `#D46A8A/#5A1F3A` or `#C24A6E/#EBB0C2`, Gardenia `#F6F1E8/#4F6B4A` or `#FFFBF3`) |
| display_line | Deep wine. Already claimed the dahlia vase. |

## Chips
**Dahlia / Spire / Ember**

Ban: Azalea/Fizz/Flare · Peony/Bud/Satin · Camellia/Wax/Rose · Gardenia/Snow/Velvet · Hibiscus/Roselle/Punch · Magnolia/Cream/Blush · Jasmine/Blossom/Honey · Bergamot/Citrus/Earl · Chamomile/Daisy/Tea · Lavender/Bloom/Calm · Catnip/Nip/Dream · Mint/Chill/Frost · Ivory/Lace/Sheer · Rosemary/Needle/Woody · Thyme/Pinch/Twig · Marjoram/Softleaf/Peel · Oregano/Wild/Bunch · Tarragon/Spear/Bitters · Dill/Frondlet/Seed · Parsley/Curl/Sprig · Lovage/Stem/Rib · Chervil/Frill/Lace · Fennel/Frond/Anise · Basil/Pesto/Herb · Nettle/Sting/Leaf · Ivy/Tendril/Climb · Juniper/Moss/Sage · Sorrel/Dock/Zest · Clover/Patch/Fern · Coral/Bloom/Petal · Pebble · all prior pools.

## Bang
```
"{Name}: Deep wine. Already claimed the dahlia vase."
"{Name}: Looks yard-bright. Owns the vase."
```
Yard: `{Name} claimed the dahlia vase.`

## Gift
None @183.

## Cadence
Azalea@180 → L181–L183 → **Dahlia@183** on L183 clear → L184–L186 triad. No friend_062 invent in this PR.

## Engineer (when unparked)
1. `data/chapter4_dahlia_bang.json` (+ collection copy)  
2. `SLICE_UNLOCKS[183]=friend_061`  
3. lockChips + Met + single dahlia-vase slot  
4. verify no Azalea collision; Azalea…Bean unchanged; no Pebble  
5. CAMPAIGN through L186; `verify:levels` green
