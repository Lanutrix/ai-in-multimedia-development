import { useRef } from "react";
import { cn } from "@/lib/utils";

/** Карточка с подсветкой, следующей за курсором (стиль React Bits «Spotlight Card»). */
export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors duration-300 hover:border-white/20",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(129,140,248,0.13), transparent 65%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
