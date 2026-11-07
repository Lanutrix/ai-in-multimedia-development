import { GridPattern } from "./grid-pattern";

/** Анимированный фон в стиле Magic UI «Aurora»: два плавающих цветовых пятна + сетка. */
export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <GridPattern />
      <div className="absolute -top-1/4 left-1/4 h-[60vh] w-[60vh] rounded-full bg-indigo-400/30 blur-[120px] animate-aurora-1 dark:bg-indigo-600/25" />
      <div className="absolute -top-1/3 right-1/4 h-[55vh] w-[55vh] rounded-full bg-violet-400/25 blur-[120px] animate-aurora-2 dark:bg-violet-600/20" />
      <div className="absolute bottom-0 left-1/3 h-[40vh] w-[50vh] rounded-full bg-cyan-300/25 blur-[110px] animate-aurora-1 dark:bg-cyan-500/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 dark:via-zinc-950/30 dark:to-zinc-950" />
    </div>
  );
}
