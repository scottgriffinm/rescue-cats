import { cn } from "@/lib/cn";

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex min-h-dvh justify-center bg-[#1A1918]">
      <div
        className={cn(
          "relative flex min-h-dvh w-full max-w-[390px] flex-col overflow-hidden bg-paper text-ink shadow-[0_0_0_1px_#1A1918,0_20px_60px_rgba(43,42,40,0.45)] md:my-5 md:min-h-[min(844px,calc(100dvh-40px))] md:rounded-[2rem]",
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
