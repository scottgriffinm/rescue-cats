"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { NameCatModal } from "@/components/puzzle/NameCatModal";
import { LivesRow } from "@/components/puzzle/LivesRow";
import { PuzzleBoard } from "@/components/puzzle/PuzzleBoard";
import { PhoneFrame } from "@/components/shell/PhoneFrame";
import { Button } from "@/components/ui/Button";
import { useSave } from "@/components/providers/SaveProvider";
import { cn } from "@/lib/cn";
import { STARTING_LIVES } from "@/lib/constants";
import { rotateDir } from "@/lib/directions";
import { LEVELS } from "@/lib/levels";
import { collectRotatable, initialDirs, simulate } from "@/lib/simulate";
import { canRewire, rewiredCount } from "@/lib/solve";
import type { Dir, Level, Phase, Vec } from "@/lib/types";

const FAIL_COPY = {
  loop: "Stuck in a loop!",
  stuck: "That's a dead end.",
  off: "They walked off the paper.",
} as const;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function PuzzleScreen({ level }: { level: Level }) {
  const router = useRouter();
  const { save, completeLevel } = useSave();
  const original = useMemo(() => initialDirs(level), [level]);
  const rotatable = useMemo(() => collectRotatable(level), [level]);
  const [dirs, setDirs] = useState<Record<string, Dir>>(original);
  const [lives, setLives] = useState(STARTING_LIVES);
  const [phase, setPhase] = useState<Phase>("editing");
  const [cat, setCat] = useState<Vec>(level.start);
  const [selected, setSelected] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(level.hint);
  const [showName, setShowName] = useState(false);
  const [justUnlocked, setJustUnlocked] = useState(false);
  const runId = useRef(0);

  const preview = useMemo(() => simulate(level, dirs).path, [level, dirs]);
  const spent = rewiredCount(original, dirs, rotatable);
  const remaining = level.moves - spent;
  const facing: "e" | "w" =
    (dirs[`${cat.x},${cat.y}`] ?? original[`${cat.x},${cat.y}`]) === "w"
      ? "w"
      : "e";

  function resetBoard() {
    setDirs(original);
    setCat(level.start);
    setSelected(null);
    setPhase("editing");
  }

  function rotate(key: string) {
    if (phase !== "editing") return;
    if (!canRewire(original, dirs, rotatable, key, level.moves)) {
      setToast("No turns left — undo a rewire first.");
      return;
    }
    setSelected(key);
    setDirs((current) => ({ ...current, [key]: rotateDir(current[key]) }));
  }

  async function rescue() {
    if (phase !== "editing") return;
    const id = ++runId.current;
    const result = simulate(level, dirs);
    setPhase("running");
    setToast(null);
    for (const step of result.path) {
      if (runId.current !== id) return;
      setCat(step);
      await sleep(240);
    }
    if (runId.current !== id) return;

    if (result.status === "win") {
      setPhase("won");
      setToast(`Safe! ${result.path.length}-step rescue.`);
      const outcome = completeLevel(level.id);
      if (outcome.unlocked) {
        setJustUnlocked(true);
        setShowName(true);
      }
      return;
    }

    const nextLives = lives - 1;
    setLives(nextLives);
    setToast(FAIL_COPY[result.status]);
    if (nextLives <= 0) {
      setPhase("lost");
      return;
    }
    await sleep(420);
    if (runId.current !== id) return;
    resetBoard();
  }

  const next = LEVELS.find((item) => item.number === level.number + 1);

  return (
    <PhoneFrame>
      <header className="flex items-center justify-between px-4 pt-4">
        <Link
          href="/"
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-white text-xl"
          aria-label="Back to yard"
        >
          ×
        </Link>
        <div className="text-center">
          <p className="font-display text-[11px] tracking-[0.2em] text-ink/45">
            LEVEL {level.number} / {LEVELS.length}
          </p>
          <p className="font-display text-sm">{level.title}</p>
        </div>
        <LivesRow lives={lives} />
      </header>

      <div className="px-5 pt-6 text-center">
        <h1 className="font-display text-[1.65rem] leading-none tracking-wide">
          {level.headline}
        </h1>
        <p className="mt-3 text-sm text-ink/60">
          {remaining} {remaining === 1 ? "turn" : "turns"} to rewire
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-center px-4 py-5">
        <PuzzleBoard
          level={level}
          dirs={dirs}
          cat={cat}
          preview={phase === "editing" ? preview : [cat]}
          selected={selected}
          disabled={phase !== "editing"}
          facing={facing}
          onRotate={rotate}
        />
      </div>

      <div className="px-5 pb-3">
        <div
          className={cn(
            "min-h-12 text-center text-sm",
            phase === "won" && "text-moss",
            phase === "lost" && "text-terracotta",
            phase === "editing" && "text-ink/55",
          )}
        >
          {toast}
        </div>
      </div>

      <footer className="flex gap-2 px-5 pb-6">
        {phase === "lost" ? (
          <Button className="flex-1" onClick={() => { setLives(STARTING_LIVES); resetBoard(); setToast(level.hint); }}>
            Try a new route
          </Button>
        ) : phase === "won" && !justUnlocked ? (
          <>
            <Button variant="paper" className="flex-1" onClick={() => router.push("/")}>
              Yard
            </Button>
            <Button
              className="flex-1"
              onClick={() => router.push(next ? `/level/${next.id}` : "/")}
            >
              {next ? "Next rescue" : "See the yard"}
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="paper"
              className="w-28"
              disabled={phase !== "editing" || spent === 0}
              onClick={resetBoard}
            >
              Reset
            </Button>
            <Button
              className="flex-1"
              disabled={phase !== "editing"}
              onClick={() => void rescue()}
            >
              Rescue
            </Button>
          </>
        )}
      </footer>

      {save.pendingUnlocks > 0 && showName ? (
        <NameCatModal key={save.cats.length} onNamed={() => router.push("/")} />
      ) : null}
    </PhoneFrame>
  );
}
