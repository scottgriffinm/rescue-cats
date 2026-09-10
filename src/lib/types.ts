export type Dir = "n" | "e" | "s" | "w";

export type Vec = { x: number; y: number };

export type Coat = "calico" | "cream" | "gray" | "tuxedo" | "peach" | "ink";

export type CellKind = "path" | "goal";

export type Cell = {
  kind: CellKind;
  dir?: Dir;
  locked?: boolean;
};

export type Level = {
  id: string;
  number: number;
  title: string;
  headline: string;
  hint: string;
  width: number;
  height: number;
  moves: number;
  start: Vec;
  cells: Record<string, Cell>;
};

export type SimStatus = "win" | "loop" | "stuck" | "off";

export type SimResult = {
  status: SimStatus;
  path: Vec[];
};

export type UnlockedCat = {
  id: string;
  name: string;
  coat: Coat;
  roost: number;
};

export type SaveState = {
  version: 1;
  completedIds: string[];
  cats: UnlockedCat[];
  pendingUnlocks: number;
};

export type Phase = "editing" | "running" | "won" | "lost";
