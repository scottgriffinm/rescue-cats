import { UiIcon } from "@/components/art/Sprite";
import { STARTING_LIVES } from "@/lib/constants";

export function LivesRow({ strikes }: { strikes: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${STARTING_LIVES - strikes} lives left`}>
      {Array.from({ length: STARTING_LIVES }, (_, i) => (
        <UiIcon
          key={i}
          name={i < strikes ? "fail_mark" : "fail_empty"}
          className={i < strikes ? "clay-pop h-7 w-7" : "h-7 w-7"}
        />
      ))}
    </div>
  );
}
