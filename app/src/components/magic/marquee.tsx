import { cn } from "@/lib/utils";

/** Бесконечная бегущая строка в стиле Magic UI «Marquee» (паузится при hover). */
export function Marquee({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("marquee-mask overflow-hidden", className)}>
      <div className="animate-marquee flex w-max items-center gap-4 hover:[animation-play-state:paused]">
        {children}
        {children}
      </div>
    </div>
  );
}
