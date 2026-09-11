import { cn } from "@/lib/cn";

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="frame-void flex min-h-dvh justify-center">
      <div
        className={cn(
          "cream-wash relative flex min-h-dvh w-full max-w-[390px] flex-col overflow-hidden text-ink shadow-[0_0_0_1px_color-mix(in_srgb,var(--frame-void-soft)_92%,transparent),0_20px_60px_rgba(43,42,40,0.28)] md:my-5 md:min-h-[min(844px,calc(100dvh-40px))] md:rounded-[2rem]",
          className,
        )}
      >
        <div className="paper-dots pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-none">
          {children}
        </div>
      </div>
    </div>
  );
}
