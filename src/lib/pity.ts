/**
 * Rarity / pity stubs. SS is CEO-locked to **milestones first**
 * (not a seasonal calendar). Random SS weight stays 0.
 *
 * Later random clears (after forced first_20) should:
 *   - roll `tier_weights_random` (SS = 0)
 *   - after `soft_pity_c_streak` (12) C-only rolls, force B+
 *   - `force_a_by_clear` 25 guarantees an A if none has dropped
 *   - grant SS only from `ss_milestones` in collection_CURRENT.json
 */

export const PITY = {
  softPityCStreak: 12,
  forceAByClear: 25,
  ssRandomWeight: 0,
  ssSource: "milestones" as const,
  seasonalCalendar: false,
  tutorialTiers: ["C", "B"] as const,
};

export function shouldForceUpgrade(cStreak: number) {
  return cStreak >= PITY.softPityCStreak;
}
