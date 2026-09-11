import { cn } from "@/lib/cn";

/** Full-viewport game surface. The website is the game — no device bezel. */
export function GameShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="page-bg relative min-h-dvh w-full overflow-x-hidden text-ink">
      <div className="paper-dots pointer-events-none absolute inset-0 opacity-60" />
      <div
        className={cn(
          "relative mx-auto flex min-h-dvh w-full min-w-0 max-w-[34rem] flex-col",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
