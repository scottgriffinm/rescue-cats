# Ch4 OPEN — friend_021 proposal (READY)
**Owner:** Cat Collection Lead  
**Status:** PROPOSAL LOCK for Art/Puzzle/Engineer  
**Path:** `/workspace/cat-game/data/collection/`  
**Parade through Bean stands:** Mango@3 Tux@12 Pumpkin@24 Shadow@27 Noodle@30 Bean@60 — **no Pebble**. Do not remap.

## Unlock
| Field | Value |
|-------|-------|
| friend_id | `friend_021` |
| unlock_clear | **63** (habit-break every 3 clears after Bean@60) |
| default_name | **Velvet** |
| tier | B |
| color / pattern | Gray / Solid |
| personality | Plush |
| board_color | gray |
| art_kit | `velvet` (new — not Ink slate, not Mist mackerel, not Ash hearth, not Clover spotted, not Cloud puff) |
| display_line | Soft as dusk. Already claimed the quietest corner. |

## Naming chips (locked)
**Velvet / Plush / Dove**

Ban: Mist/Fog/Soft · Ink/Slate/Nimbus · Cloud/Puff/Drift · Shadow/Midnight/Onyx · Clover/Patch/Fern · Ash/Cinder/Soot · Bean/Seed/Nib · Nigel/Clive/Graham · Donna/Karen/Helen · Pebble

require_choice true; Met chosen-name; award-stick (#40) must hold.

## Bang
```
friend_021:
  - "{Name}: Soft as dusk. Already claimed the quietest corner."
  - "{Name}: Arrived without a sound. The porch got quieter."
```
Yard bubble on name: `{Name} settled into the quiet corner.`

## Gift / economy
- **No furniture gift @63** (box@3, cushion@9, fountain@27, yarn@48 only)
- Soft hearts only; no IAP
- Comfort path unchanged this slice

## Cadence note
Bean@60 → L61–L63 (already shipped) → **Velvet@63** on L63 clear → Ch4 boards L64–L66 (Puzzle).  
If L63 Far Peg already awards nothing, Engineer wires `SLICE_UNLOCKS[63]=friend_021` so clearing L63 unlocks Velvet (parade key = level number). Confirm with Puzzle that L63 clear is the intended unlock beat (same pattern as Bean on L60).

## CURRENT law change
`collection_CURRENT.json` is FROZEN v1.2 / first_20. Ch4 extends:
1. Bump to `collection_v1.3` (or keep CURRENT + `data/chapter4_velvet_bang.json` as source of truth for 021+)
2. Append friend_021 to catalog / raise `TUTORIAL_RESCUES` slice to 21
3. Do **not** invent remaps of 001–020

## Engineer checklist
1. `data/chapter4_velvet_bang.json` from this pack  
2. `SLICE_UNLOCKS[63] = "friend_021"`  
3. NameCatModal lockChips + chipsForFriend  
4. YardScene single porch slot for friend_021  
5. Met through 21; overflow-x-auto  
6. verify: onClear(63)→Velvet; chips Velvet/Plush/Dove; no Pebble; Bean@60 unchanged  
7. Full-viewport; localStorage; no PhoneFrame; **no friend_022 until next brief**

## Art pack
`/workspace/cat-game-art/packs/velvet-63/` — dusk `#6E6576`, dove belly; chips Velvet/Plush/Dove.

## Art / Puzzle handoff
- @Cat Art Director: gray solid plush loaf kit `velvet` — soft silhouette, readable on sage lawn; not Mist/Ink/Ash/Cloud  
- @Cat Puzzle Lead: L64–L66 triad after Velvet@63; no Hold*/Park*/farm twins  
