import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/bits/spotlight-card";
import { Reveal } from "@/components/bits/reveal";
import { trends } from "@/data/content";

export default function TrendsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Раздел 7"
        title="Тренды 2026 и дальше"
        description="Куда движется генеративный ИИ в мультимедиа — и что уже сегодня можно проверить на практике."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {trends.map((t, i) => (
          <Reveal key={t.title} delay={(i % 2) * 0.07}>
            <SpotlightCard className="h-full p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/10">
                  <t.icon className="size-5 text-indigo-600 dark:text-indigo-300" />
                </span>
                <p className="text-lg font-semibold">{t.title}</p>
              </div>
              <p className="mt-3.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{t.text}</p>
              <p className="mt-4 flex items-start gap-1.5 border-t border-white/5 pt-3.5 font-mono text-xs leading-relaxed text-cyan-700 dark:text-cyan-300/80">
                <ArrowUpRight className="mt-0.5 size-3.5 shrink-0" />
                {t.evidence}
              </p>
            </SpotlightCard>
          </Reveal>
        ))}

        {/* Шестая карточка — прогноз */}
        <Reveal delay={0.14}>
          <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 p-6 dark:from-indigo-600/30 dark:via-violet-600/20 dark:to-cyan-500/20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100">
                Прогноз
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                «Мультимедиа-продукт» и «ИИ-пайплайн» станут синонимами
              </p>
              <p className="mt-3 text-sm leading-relaxed text-indigo-100">
                Агентные пайплайны уже собирают ролик из сценария без участия
                человека между шагами. Следующая ступень — world models:
                генеративные движки вместо рендеринга. Знание ИИ-инструментов
                становится базовым навыком мультимедиа-разработчика — как когда-то
                знание графических редакторов.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
