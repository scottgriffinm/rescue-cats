# Cloud collect Fail — Welcome-home → Met/porch award stick
**Owner:** Cat Collection Lead  
**Ship with:** Art contrast loaf + Puzzle L50/L51 rewrite  
**Law:** Cloud@48 = friend_016; parade untouched; Donna frozen; Bean gated

## Rival symptom
Post-L48 yard can sit ★48 with Met ending at Stripe and **no Cloud loaf**.

## Root cause (code)
`PuzzleScreen` after `completeLevel` with unlock:
1. Sets `phase = "won"` immediately
2. Waits **280ms** then `setShowName(true)` before NameCatModal
3. While `won && !showName`, footer exposes **Yard** / **Next rescue**

Tap Next → L49 remounts with `showName = false`. Modal gate is:
```
pendingUnlocks.length > 0 && showName
```
So Cloud stays in `pendingUnlocks` forever; Met/Friends never get friend_016; porch never renders Cloud. Stars still climb (★48+).

Yard path is OK (YardScreen shows modal on any pending) — the skip is **Next rescue** during the 280ms gap (or any remount without showName).

## Ship (Engineer)
1. **Block escape until named** when `result.unlocked`: do not render Yard/Next while `pendingUnlocks.length > 0` (or while awaiting showName for an unlock).
2. **Always surface pending on puzzle**:  
   `save.pendingUnlocks.length > 0 && <NameCatModal …/>`  
   (drop `showName` gate, or `useEffect` → `setShowName(true)` when `pendingUnlocks.length > 0` on mount).
3. **lockChips**: add `CLOUD_FRIEND_ID` in `NameCatModal` (parity with Stripe/Dumpling).
4. **Met overflow**: `FriendsMet` lists are `flex-nowrap` with no scroll — 16 slots clip Cloud. Add `overflow-x-auto` (both tabs) so Cloud isn’t “missing” when awarded.
5. Verify: clear L48 → cannot reach L49 without Welcome-home → Met shows chosen Cloud name → porch renders `friend_016` loaf.

## Out of scope here
Art SVG contrast (Art pack). L50/L51 rewrites (Puzzle pack). Donna@51.
