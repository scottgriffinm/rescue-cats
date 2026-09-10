import Link from "next/link";
import { PhoneFrame } from "@/components/shell/PhoneFrame";

export default function NotFound() {
  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <h1 className="font-display text-3xl tracking-wide">Wrong path</h1>
        <p className="mt-2 text-sm text-ink/55">
          That route wandered off the paper.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-2xl bg-ink px-5 py-3 font-display text-paper"
        >
          Back to the yard
        </Link>
      </div>
    </PhoneFrame>
  );
}
