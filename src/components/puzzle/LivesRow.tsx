import { STARTING_LIVES } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function LivesRow({ lives }: { lives: number }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${lives} lives left`}>
      {Array.from({ length: STARTING_LIVES }, (_, i) => {
        const lost = i < STARTING_LIVES - lives;
        return (
          <span
            key={i}
            className={cn(
              "grid h-7 w-7 place-items-center rounded-full border-2 border-ink font-display text-sm",
              lost ? "bg-terracotta text-paper" : "bg-white text-ink/25",
            )}
          >
            {lost ? "×" : ""}
          </span>
        );
      })}
    </div>
  );
}
