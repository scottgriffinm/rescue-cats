/**
 * Collection bible v0 rarity / pity stubs.
 * Not driven in the slice — first five rescues are a hand-authored C/B parade.
 *
 * Later random clears (after forced first_20) should:
 *   - roll `tier_weights_random` (SS weight is 0 — milestone-first, not seasonal)
 *   - after `soft_pity_c_streak` (12) C-only rolls, force B+
 *   - `force_a_by_clear` 25 guarantees an A if none has dropped
 *
 * Open Scott decisions (non-blocking for this slice):
 *   monetization / Heart packs, duplicate-name merge policy, SS calendar vs milestones.
 */

export const PITY = {
  softPityCStreak: 12,
  forceAByClear: 25,
  ssRandomWeight: 0,
  tutorialTiers: ["C", "B"] as const,
};

export function shouldForceUpgrade(cStreak: number) {
  return cStreak >= PITY.softPityCStreak;
}
