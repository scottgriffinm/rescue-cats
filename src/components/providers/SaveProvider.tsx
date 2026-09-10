"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { nextCoat, nextRoost } from "@/lib/cats";
import { UNLOCK_EVERY_N_CLEARS } from "@/lib/constants";
import { EMPTY_SAVE, loadSave, writeSave } from "@/lib/storage";
import type { SaveState, UnlockedCat } from "@/lib/types";

type Snapshot = {
  save: SaveState;
  hydrated: boolean;
};

type SaveApi = {
  save: SaveState;
  hydrated: boolean;
  completeLevel: (levelId: string) => { newlyCleared: boolean; unlocked: boolean };
  namePendingCat: (name: string) => UnlockedCat | null;
  resetProgress: () => void;
};

const SaveContext = createContext<SaveApi | null>(null);
const SERVER_SNAP: Snapshot = { save: EMPTY_SAVE, hydrated: false };

let snap: Snapshot = SERVER_SNAP;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return snap;
}

function getServerSnapshot() {
  return SERVER_SNAP;
}

function setSave(next: SaveState) {
  snap = { save: next, hydrated: true };
  writeSave(next);
  emit();
}

function hydrateFromStorage() {
  snap = { save: loadSave(), hydrated: true };
  emit();
}

export function SaveProvider({ children }: { children: React.ReactNode }) {
  const { save, hydrated } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    hydrateFromStorage();
  }, []);

  const api = useMemo<SaveApi>(
    () => ({
      save,
      hydrated,
      completeLevel: (levelId: string) => {
        const current = getSnapshot().save;
        if (current.completedIds.includes(levelId)) {
          return { newlyCleared: false, unlocked: false };
        }
        const completedIds = [...current.completedIds, levelId];
        const unlocked = completedIds.length % UNLOCK_EVERY_N_CLEARS === 0;
        setSave({
          ...current,
          completedIds,
          pendingUnlocks: current.pendingUnlocks + (unlocked ? 1 : 0),
        });
        return { newlyCleared: true, unlocked };
      },
      namePendingCat: (name: string) => {
        const current = getSnapshot().save;
        if (current.pendingUnlocks <= 0) return null;
        const cat: UnlockedCat = {
          id: `cat-${Date.now()}-${current.cats.length}`,
          name: name.trim() || "Mochi",
          coat: nextCoat(current.cats),
          roost: nextRoost(current.cats),
        };
        setSave({
          ...current,
          cats: [...current.cats, cat],
          pendingUnlocks: current.pendingUnlocks - 1,
        });
        return cat;
      },
      resetProgress: () => setSave(EMPTY_SAVE),
    }),
    [save, hydrated],
  );

  return <SaveContext.Provider value={api}>{children}</SaveContext.Provider>;
}

export function useSave() {
  const ctx = useContext(SaveContext);
  if (!ctx) throw new Error("useSave must be used within SaveProvider");
  return ctx;
}
