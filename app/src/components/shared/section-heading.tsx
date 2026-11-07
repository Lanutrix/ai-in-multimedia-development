import { BlurText } from "@/components/bits/blur-text";
import { SplitText } from "@/components/bits/split-text";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  center,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        <SplitText text={title} />
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          <BlurText text={description} delay={0.15} />
        </p>
      )}
    </div>
  );
}
