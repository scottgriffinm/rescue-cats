"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { UiIcon } from "@/components/art/Sprite";
import { ContinueSheet } from "@/components/puzzle/ContinueSheet";
import { LivesRow } from "@/components/puzzle/LivesRow";
import { NameCatModal } from "@/components/puzzle/NameCatModal";
import { PuzzleBoard } from "@/components/puzzle/PuzzleBoard";
import { useSave } from "@/components/providers/SaveProvider";
import { PhoneFrame } from "@/components/shell/PhoneFrame";
import { Button } from "@/components/ui/Button";
import { STARTING_LIVES } from "@/lib/constants";
import { LEVELS } from "@/lib/levels";
import {
  allCatsOnGates,
  cloneCats,
  legalDirs,
  slideCat,
  starRating,
} from "@/lib/slide";
import type { Dir, Level, Phase, PieceCat } from "@/lib/types";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function PuzzleScreen({ level }: { level: Level }) {
  const router = useRouter();
  const { save, completeLevel, addStrike, markCoachSeen } = useSave();
  const [cats, setCats] = useState<PieceCat[]>(() => cloneCats(level.cats));
  const [remaining, setRemaining] = useState(level.moveBudget);
  const [selected, setSelected] = useState<string | null>(level.cats[0]?.id ?? null);
  const [phase, setPhase] = useState<Phase>("playing");
  const [toast, setToast] = useState<string | null>(level.hint);
  const [earnedStars, setEarnedStars] = useState(0);
  const [showName, setShowName] = useState(false);
  const runId = useRef(0);

  const strikes = save.levelStrikes[level.id] ?? 0;
  const next = LEVELS.find((item) => item.number === level.number + 1);

  const onGates = useMemo(() => allCatsOnGates(level, cats), [level, cats]);

  function resetBoard() {
    runId.current += 1;
    setCats(cloneCats(level.cats));
    setRemaining(level.moveBudget);
    setSelected(level.cats[0]?.id ?? null);
    setPhase("playing");
    setToast(level.hint);
  }

  async function slide(dir: Dir) {
    if (phase !== "playing" || !selected) return;
    const preview = slideCat(level, cats, selected, dir);
    if (!preview.moved) {
      setToast("That way is blocked.");
      return;
    }

    const id = ++runId.current;
    setPhase("sliding");
    if (!save.seenCoach) markCoachSeen();

    const nextRemaining = remaining - 1;
    setRemaining(nextRemaining);

    for (const step of preview.path) {
      if (runId.current !== id) return;
      setCats((current) =>
        current.map((cat) =>
          cat.id === selected ? { ...cat, x: step.x, y: step.y } : cat,
        ),
      );
      await sleep(90);
    }
    if (runId.current !== id) return;

    const landed = preview.cats;
    if (allCatsOnGates(level, landed)) {
      const stars = starRating(nextRemaining, level.moveBudget);
      setEarnedStars(stars);
      setPhase("won");
      setToast(`Home! ${stars} star${stars === 1 ? "" : "s"} from leftover slides.`);
      const result = completeLevel(level.id, stars);
      if (result.unlocked) setShowName(true);
      return;
    }

    if (nextRemaining <= 0) {
      const nextStrikes = addStrike(level.id);
      setToast("Out of slides.");
      if (nextStrikes >= STARTING_LIVES) {
        setPhase("continue");
        return;
      }
      await sleep(360);
      if (runId.current !== id) return;
      resetBoard();
      setToast("Try another route.");
      return;
    }

    setPhase("playing");
    setToast(`${nextRemaining} slide${nextRemaining === 1 ? "" : "s"} left`);
  }

  function selectCat(id: string) {
    if (phase !== "playing") return;
    setSelected(id);
    const dirs = legalDirs(level, cats, id);
    if (dirs.length === 0) setToast("This one is boxed in.");
  }

  return (
    <PhoneFrame>
      <header className="flex items-center justify-between px-4 pt-4">
        <Link
          href="/"
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-paper"
          aria-label="Back to yard"
        >
          <UiIcon name="icon_close" className="h-5 w-5" />
        </Link>
        <div className="text-center">
          <p className="font-display text-[11px] tracking-[0.2em] text-ink/45">
            LEVEL {level.number} / {LEVELS.length}
          </p>
          <p className="font-display text-sm">{level.name}</p>
        </div>
        <LivesRow strikes={strikes} />
      </header>

      <div className="px-5 pt-5 text-center">
        <h1 className="font-display text-[1.55rem] leading-none tracking-wide">
          {level.headline.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-clay">{level.headline.split(" ").slice(-1)}</span>
        </h1>
        <p className="mt-3 font-display text-sm text-ink/60">
          {remaining} / {level.moveBudget} slides
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-center px-4 py-4">
        <PuzzleBoard
          level={level}
          cats={cats}
          selected={selected}
          showCoach={!save.seenCoach && phase === "playing"}
          disabled={phase !== "playing"}
          onSelect={selectCat}
          onSlide={(dir) => void slide(dir)}
        />
      </div>

      <p className="min-h-10 px-5 text-center text-sm text-ink/55">{toast}</p>

      <footer className="flex gap-2 px-5 pb-6">
        {phase === "won" && !showName ? (
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
          <Button
            variant="paper"
            className="w-full"
            disabled={phase !== "playing"}
            onClick={resetBoard}
          >
            Reset board
          </Button>
        )}
      </footer>

      {phase === "won" && earnedStars > 0 ? (
        <div className="pointer-events-none absolute left-1/2 top-24 z-10 flex -translate-x-1/2 gap-1">
          {Array.from({ length: earnedStars }, (_, i) => (
            <UiIcon key={i} name="star_marigold" className="h-7 w-7" />
          ))}
        </div>
      ) : null}

      {phase === "continue" ? (
        <ContinueSheet
          levelId={level.id}
          onContinue={() => {
            resetBoard();
          }}
          onYard={() => router.push("/")}
        />
      ) : null}

      {save.pendingUnlocks.length > 0 && showName ? (
        <NameCatModal key={save.friends.length} onNamed={() => router.push("/")} />
      ) : null}

      {onGates && phase === "playing" ? (
        <span className="sr-only">All cats are on gates</span>
      ) : null}
    </PhoneFrame>
  );
}
