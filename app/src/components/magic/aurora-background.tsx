import { GridPattern } from "./grid-pattern";

/** Анимированный фон в стиле Magic UI «Aurora»: два плавающих цветовых пятна + сетка. */
export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <GridPattern />
      <div className="absolute -top-1/4 left-1/4 h-[60vh] w-[60vh] rounded-full bg-indigo-600/25 blur-[120px] animate-aurora-1" />
      <div className="absolute -top-1/3 right-1/4 h-[55vh] w-[55vh] rounded-full bg-violet-600/20 blur-[120px] animate-aurora-2" />
      <div className="absolute bottom-0 left-1/3 h-[40vh] w-[50vh] rounded-full bg-cyan-500/15 blur-[110px] animate-aurora-1" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/30 to-zinc-950" />
    </div>
  );
}
