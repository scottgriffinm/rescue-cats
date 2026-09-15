"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { UiIcon } from "@/components/art/Sprite";
import { ContinueSheet } from "@/components/puzzle/ContinueSheet";
import { LivesRow } from "@/components/puzzle/LivesRow";
import { NameCatModal } from "@/components/puzzle/NameCatModal";
import { PuzzleBoard, type CatMotion } from "@/components/puzzle/PuzzleBoard";
import { SlidePad } from "@/components/puzzle/SlidePad";
import { useSave } from "@/components/providers/SaveProvider";
import { GameShell } from "@/components/shell/GameShell";
import { Button } from "@/components/ui/Button";
import { STARTING_LIVES } from "@/lib/constants";
import { CAMPAIGN_LEVEL_COUNT, LEVELS, nextCampaignLevel } from "@/lib/levels";
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

function nextPaint() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

function slideDurationMs(steps: number) {
  return Math.max(140, steps * 90);
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

  useEffect(() => {
    if (save.pendingUnlocks.length > 0) setShowName(true);
  }, [save.pendingUnlocks.length]);
  const [motion, setMotion] = useState<CatMotion | null>(null);
  const runId = useRef(0);

  const strikes = save.levelStrikes[level.id] ?? 0;
  const next = nextCampaignLevel(level.id);

  const onGates = useMemo(() => allCatsOnGates(level, cats), [level, cats]);

  function resetBoard() {
    runId.current += 1;
    setCats(cloneCats(level.cats));
    setRemaining(level.moveBudget);
    setSelected(level.cats[0]?.id ?? null);
    setPhase("playing");
    setToast(level.hint);
    setMotion(null);
  }

  async function slide(dir: Dir) {
    if (phase !== "playing" || !selected) return;
    const preview = slideCat(level, cats, selected, dir);
    if (!preview.moved) {
      setToast("Thump — that way is a wall.");
      return;
    }

    const id = ++runId.current;
    setPhase("sliding");
    if (!save.seenCoach) markCoachSeen();

    const nextRemaining = remaining - 1;
    setRemaining(nextRemaining);
    const durationMs = slideDurationMs(preview.path.length - 1);

    // 1) Kill any leftover left/top tween at the committed tile.
    // 2) Arm the new transition while still on that tile.
    // 3) Then commit the landing tile so CSS interpolates start→end.
    // Applying transition + destination in one paint skips the tween.
    setMotion({ id: selected, kind: "snap" });
    await nextPaint();
    if (runId.current !== id) return;

    setMotion({
      id: selected,
      kind: "slide",
      axis: dir === "n" || dir === "s" ? "y" : "x",
      durationMs,
    });
    await nextPaint();
    if (runId.current !== id) return;

    setCats(preview.cats);
    await sleep(durationMs);
    if (runId.current !== id) return;

    setMotion({ id: selected, kind: "settle" });
    await sleep(160);

    const landed = preview.cats;
    if (allCatsOnGates(level, landed)) {
      const stars = starRating(nextRemaining, level.moveBudget);
      setEarnedStars(stars);
      setPhase("won");
      setMotion({ id: selected, kind: "home" });
      setToast("Home — they settled on the gate.");
      const result = completeLevel(level.id, stars);
      if (result.unlocked) {
        await sleep(280);
        setShowName(true);
      }
      return;
    }

    if (nextRemaining <= 0) {
      const nextStrikes = addStrike(level.id);
      setToast("Soft miss. The paper resets — try another route.");
      if (nextStrikes >= STARTING_LIVES) {
        setPhase("continue");
        return;
      }
      await sleep(420);
      if (runId.current !== id) return;
      resetBoard();
      return;
    }

    setPhase("playing");
    setMotion(null);
    setToast(`${nextRemaining} slide${nextRemaining === 1 ? "" : "s"} left`);
  }

  function selectCat(id: string) {
    if (phase !== "playing") return;
    setSelected(id);
    const dirs = legalDirs(level, cats, id);
    if (dirs.length === 0) setToast("This one is boxed in.");
  }

  useEffect(() => {
    const KEY_DIR: Record<string, Dir> = {
      ArrowUp: "n",
      ArrowRight: "e",
      ArrowDown: "s",
      ArrowLeft: "w",
      w: "n",
      d: "e",
      s: "s",
      a: "w",
      W: "n",
      D: "e",
      S: "s",
      A: "w",
    };
    function onKey(event: KeyboardEvent) {
      if (phase !== "playing" || showName) return;
      const target = event.target;
      if (target instanceof HTMLElement && target.closest("input, textarea")) return;
      const dir = KEY_DIR[event.key];
      if (!dir) return;
      event.preventDefault();
      void slide(dir);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, showName, selected, remaining, cats, level]);

  return (
    <GameShell>
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
            LEVEL {level.number} / {CAMPAIGN_LEVEL_COUNT}
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
          motion={motion}
          onSelect={selectCat}
          onSlide={(dir) => void slide(dir)}
        />
        <SlidePad
          legal={selected ? legalDirs(level, cats, selected) : []}
          disabled={phase !== "playing"}
          dimmed={phase === "sliding" || phase === "won"}
          onSlide={(dir) => void slide(dir)}
        />
      </div>

      <p className="min-h-10 px-5 text-center text-sm text-ink/55">{toast}</p>

      <footer className="flex gap-2 px-5 pb-6">
        {phase === "won" && !showName && save.pendingUnlocks.length === 0 ? (
          <>
            <Link
              href="/"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-[10px] border-[2.5px] border-ink bg-paper bg-[url('/assets/ui/btn_primary.svg')] bg-[length:100%_100%] bg-no-repeat px-5 font-display text-base tracking-wide text-ink shadow-[0_3px_0_#2B2A28]"
            >
              Yard
            </Link>
            <Link
              href={next ? `/level/${next.id}` : "/"}
              className="inline-flex h-11 flex-1 items-center justify-center rounded-[10px] border-[2.5px] border-ink bg-paper bg-[url('/assets/ui/btn_primary.svg')] bg-[length:100%_100%] bg-no-repeat px-5 font-display text-base tracking-wide text-ink shadow-[0_3px_0_#2B2A28]"
            >
              {next ? "Next rescue" : "See the yard"}
            </Link>
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
        <div className="pointer-events-none absolute left-1/2 top-20 z-10 flex -translate-x-1/2 gap-1 sm:top-24">
          {Array.from({ length: earnedStars }, (_, i) => (
            <UiIcon key={i} name="star_calendula" className="h-7 w-7" />
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

      {save.pendingUnlocks.length > 0 ? (
        <NameCatModal key={save.friends.length} onNamed={() => router.push("/")} />
      ) : null}

      {onGates && phase === "playing" ? (
        <span className="sr-only">All cats are on gates</span>
      ) : null}
    </GameShell>
  );
}
