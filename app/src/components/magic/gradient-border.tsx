import { cn } from "@/lib/utils";

/** Градиентная рамка-обёртка (акцент для выделенных карточек). */
export function GradientBorder({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-gradient-to-r from-indigo-500/50 via-violet-500/50 to-cyan-400/50 p-px",
        className,
      )}
    >
      <div className="h-full rounded-[15px] bg-zinc-950">{children}</div>
    </div>
  );
}
