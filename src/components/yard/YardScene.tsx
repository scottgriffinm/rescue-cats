"use client";

import { CardboardBox, CatTree, CheckIn, Swing } from "@/components/art/Furniture";
import { CatSvg } from "@/components/art/CatSvg";
import type { UnlockedCat } from "@/lib/types";

const ROOSTS: Array<{ left: string; top: string; pose: "sit" | "loaf"; facing?: "e" | "w" }> = [
  { left: "18%", top: "46%", pose: "loaf" },
  { left: "58%", top: "38%", pose: "sit" },
  { left: "40%", top: "58%", pose: "sit", facing: "w" },
  { left: "70%", top: "62%", pose: "loaf" },
  { left: "8%", top: "64%", pose: "sit" },
  { left: "48%", top: "28%", pose: "loaf" },
];

export function YardScene({ cats }: { cats: UnlockedCat[] }) {
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[340px]">
      <div className="absolute inset-x-6 bottom-6 top-16 rounded-[45%] border border-ink/10 bg-[#EFE6D8]/70" />

      <div className="absolute left-[8%] top-[6%] w-[46%]">
        <Swing className="w-full" />
      </div>
      <div className="absolute right-[6%] top-[10%] w-[28%]">
        <CatTree className="w-full" />
      </div>
      <div className="absolute bottom-[18%] left-[10%] w-[38%]">
        <CardboardBox className="w-full" />
      </div>

      {cats.length === 0 ? (
        <p className="absolute inset-x-8 top-[46%] text-center font-display text-lg text-ink/35">
          The yard is waiting.
        </p>
      ) : null}

      {cats.map((cat) => {
        const roost = ROOSTS[cat.roost % ROOSTS.length];
        return (
          <div
            key={cat.id}
            className="absolute w-[72px] -translate-x-1/2 -translate-y-1/2"
            style={{ left: roost.left, top: roost.top }}
          >
            <CatSvg
              coat={cat.coat}
              pose={roost.pose}
              facing={roost.facing}
              className="h-[72px] w-[72px]"
            />
            {cat.roost === 0 ? (
              <CheckIn className="absolute -right-1 -top-3 h-6 w-6" />
            ) : null}
            <p className="mt-0.5 text-center font-display text-[11px] tracking-wide text-ink/70">
              {cat.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
