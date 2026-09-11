"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSave } from "@/components/providers/SaveProvider";
import { nextLevel } from "@/lib/levels";

export default function PlayPage() {
  const router = useRouter();
  const { save, hydrated } = useSave();

  useEffect(() => {
    if (!hydrated) return;
    router.replace(`/level/${nextLevel(save.completedIds).id}`);
  }, [hydrated, router, save.completedIds]);

  return (
    <div className="cream-wash grid min-h-dvh place-items-center text-ink">
      <p className="font-display tracking-wide">Finding the next rescue…</p>
    </div>
  );
}
