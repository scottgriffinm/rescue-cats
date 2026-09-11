export type Dir = "n" | "e" | "s" | "w";

export type Vec = { x: number; y: number };

export type BoardColor = "orange" | "gray" | "black";

export type ArtKit = "ginger" | "cream" | "slate" | "calico" | "tuxedo" | "ghost" | "mist";

export type PieceCat = {
  id: string;
  x: number;
  y: number;
  color?: BoardColor;
};

export type Gate = {
  id: string;
  x: number;
  y: number;
  color?: BoardColor;
};

export type Level = {
  id: string;
  number: number;
  name: string;
  headline: string;
  hint: string;
  templateId: string;
  width: number;
  height: number;
  moveBudget: number;
  nudges: number;
  colorLocks: boolean;
  walls: Vec[];
  blockers: Vec[];
  cats: PieceCat[];
  gates: Gate[];
  teach?: string;
};

export type Phenotype = {
  phenotypeId: string;
  breed: string;
  color: string;
  pattern: string;
  body: string;
  tail: string;
  eyes: string;
  eyeAccent: string;
  personality: string;
  artKit: ArtKit;
  boardColor: BoardColor;
};

export type CatalogFriend = {
  friendId: string;
  defaultName: string;
  unlockClear: number;
  displayLine: string;
  tier: string;
  phenotype: Phenotype;
};

export type FriendInstance = {
  instanceId: string;
  friendId: string;
  phenotypeId: string;
  name: string;
  rescuedAt: number;
  clearIndex: number;
  roost: number;
  favoriteToy?: string;
  firstNight: boolean;
};

export type FurnitureSKU = {
  skuId: string;
  name: string;
  category: string;
  hearts: number;
  comfort: number;
  grantOnClear?: number;
  shopUnlockClear?: number;
  asset: string;
};

export type PendingUnlock = {
  friendId: string;
  clearIndex: number;
};

export type SaveState = {
  version: 3;
  completedIds: string[];
  clearCount: number;
  friends: FriendInstance[];
  pendingUnlocks: PendingUnlock[];
  hearts: number;
  stars: number;
  tickets: number;
  furniture: string[];
  cosmetics: string[];
  levelStrikes: Record<string, number>;
  seenCoach: boolean;
  bubbles: string[];
  unlockFlags: UnlockFlags;
  first_night_done: boolean;
  return_hook_available_at: number | null;
  return_hook_claimed: boolean;
  first_night_hearts_claimed: boolean;
};

export type YardComfort = {
  total: number;
};

export type UnlockFlags = {
  mangoNamed: boolean;
  porchUnlocked: boolean;
};

/** CEO-locked collection policy for the slice. Do not add IAP or merge paths. */
export type CollectionLocks = {
  economy: {
    currency: "soft_hearts";
    heartPacks: false;
    iap: false;
  };
  naming: {
    allowDuplicateNames: true;
    autoMergeCommons: false;
  };
  ssRarity: {
    source: "milestones";
    seasonalCalendar: false;
    randomSsWeight: 0;
  };
};

export type Phase = "playing" | "sliding" | "won" | "continue";
