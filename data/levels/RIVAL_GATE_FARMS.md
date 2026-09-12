# Rival Conditional — gate-farm reshape pack
**Owner:** Puzzle Lead → Engineer  
**Status:** PACK READY · do not ship without official sols + `verify:levels`  
**Ban:** friend_021 · parade remap · Bean@60 · L61–L63

## Kill
Adjacent same-column / same-row house farms. Fingerprints:

- `((3,2)/(3,3))` vertical
- `((2,2)/(3,2))` horizontal
- `((2,3)/(3,3))` horizontal

## Listed boards (live pink / main)

| Pair | Boards (keep IDs) |
| --- | --- |
| (3,2)/(3,3) | L25 Vacate Column · L40 Solid South · L41 Vacate South · L44 Solid North · L45 Vacate North · L49 Color Step |
| (2,2)/(3,2) | L24 Color Brake · L31 Vacate West · L34 Solid West · L47 Solid West · L53 Color Latch |
| (2,3)/(3,3) | L29 Color Cross · L38 Solid East · L46 Dual Brake |

Also adjacent (not the three named farms; reshape if a twin of the above): L30 (2,2)/(2,3) · L39 (3,3)/(4,3) · L48 (1,3)/(2,3) · L50 (2,2)/(2,3).

## Ship rules
1. Keep level IDs and campaign order. Rename only if the teach verb changes.
2. New gate pairs must not reuse the three fingerprints, must not be a 1-cell slide of another listed pair, and must not collide with L59 (2,2)/(4,3), L60 (0,0)/(5,5), L62 (1,1)/(3,4).
3. Official sol under budget. Same slide engine. Color locks stay.
4. **Do not touch L61 / L62 / L63.**
5. Engineer owns the ship PR. This pack is the brief — no silent board JSON.

## Hand-off
`/workspace/studio-packs/rival-conditional/GATE_FARMS.md` (same brief).
