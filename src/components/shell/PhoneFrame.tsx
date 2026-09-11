import { cn } from "@/lib/cn";

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="frame-void flex min-h-dvh justify-center p-3 md:p-5">
      <div className="phone-frame-shell w-full max-w-[406px] rounded-[2.15rem] p-2 shadow-[0_18px_50px_rgba(43,42,40,0.18)] md:my-2">
        <div className="stage-wash rounded-[1.85rem] p-1.5">
          <div
            className={cn(
              "cream-wash relative flex min-h-[min(820px,calc(100dvh-48px))] w-full max-w-[390px] flex-col overflow-hidden text-ink md:min-h-[min(844px,calc(100dvh-56px))] md:rounded-[1.7rem]",
              className,
            )}
          >
            <div className="paper-dots pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-none">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
