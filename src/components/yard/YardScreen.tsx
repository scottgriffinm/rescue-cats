"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { NameCatModal } from "@/components/puzzle/NameCatModal";
import { useSave } from "@/components/providers/SaveProvider";
import { PhoneFrame } from "@/components/shell/PhoneFrame";
import { Button } from "@/components/ui/Button";
import { YardScene } from "@/components/yard/YardScene";
import { LEVELS, nextLevel } from "@/lib/levels";

export function YardScreen() {
  const router = useRouter();
  const { save, hydrated, resetProgress } = useSave();
  const upcoming = nextLevel(save.completedIds);
  const cleared = save.completedIds.length;
  const allDone = cleared >= LEVELS.length;
  const empty = save.cats.length === 0;

  return (
    <PhoneFrame>
      <header className="px-6 pt-8 text-center">
        <p className="font-display text-[11px] tracking-[0.28em] text-ink/40">
          PAPER YARD
        </p>
        <h1 className="mt-1 font-display text-[2.15rem] leading-none tracking-wide">
          RESCUE <span className="text-tan">CATS</span>
        </h1>
        <p className="mt-3 text-sm text-ink/55">
          {empty
            ? "Clear two puzzles, then invite a friend home."
            : allDone
              ? "Everyone who needed saving is napping in the sun."
              : `${save.cats.length} friend${save.cats.length === 1 ? "" : "s"} in the yard.`}
        </p>
      </header>

      <div className="flex flex-1 items-center">
        {hydrated ? (
          <YardScene cats={save.cats} />
        ) : (
          <div className="mx-auto h-40 w-40 animate-pulse rounded-full bg-ink/5" />
        )}
      </div>

      <div className="flex justify-center gap-1.5 px-6">
        {LEVELS.map((level) => {
          const done = save.completedIds.includes(level.id);
          const current = upcoming.id === level.id && !allDone;
          return (
            <Link
              key={level.id}
              href={`/level/${level.id}`}
              className={`h-2.5 rounded-full border border-ink transition-all ${
                done
                  ? "w-6 bg-tan"
                  : current
                    ? "w-8 bg-ink"
                    : "w-2.5 bg-white"
              }`}
              aria-label={`Level ${level.number}${done ? " cleared" : ""}`}
            />
          );
        })}
      </div>

      <footer className="space-y-3 px-5 pb-7 pt-5">
        <Button
          className="w-full"
          onClick={() => router.push(allDone ? `/level/${LEVELS[0].id}` : `/level/${upcoming.id}`)}
        >
          {cleared === 0
            ? "Rescue the first cat"
            : allDone
              ? "Replay the routes"
              : `Continue · Level ${upcoming.number}`}
        </Button>
        {cleared > 0 ? (
          <button
            type="button"
            onClick={resetProgress}
            className="w-full text-center text-xs text-ink/40 underline-offset-2 hover:text-ink/70 hover:underline"
          >
            Reset paper yard
          </button>
        ) : null}
      </footer>

      {save.pendingUnlocks > 0 ? (
        <NameCatModal key={save.cats.length} onNamed={() => undefined} />
      ) : null}
    </PhoneFrame>
  );
}
