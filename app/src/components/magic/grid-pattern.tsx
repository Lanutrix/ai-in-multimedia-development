/** Тонкая сетка в стиле Magic UI «Grid Pattern». */
export function GridPattern() {
  return (
    <svg className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <pattern
          id="grid-pattern"
          width="64"
          height="64"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M64 0H0V64"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
}
