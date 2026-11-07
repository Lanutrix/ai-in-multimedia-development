import { AlertTriangle, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/bits/reveal";
import { SpotlightCard } from "@/components/bits/spotlight-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { history, limitations, modelClasses } from "@/data/content";

export default function BasicsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Раздел 2"
        title="Как работает генеративный ИИ"
        description="Минимум теории, необходимой чтобы осознанно выбирать инструменты: короткая история, классы моделей и их ограничения."
      />

      {/* История */}
      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <h3 className="text-xl font-semibold">Двенадцать лет до зрелости</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Генеративный ИИ прошёл путь от эксперимента до продакшен-инструмента
            за двенадцать лет. Каждая волна технологий открывала новый тип
            контента: изображения → текст → видео → звук → 3D.
          </p>
          <div className="glass mt-6 rounded-2xl p-5">
            <GraduationCap className="size-5 text-indigo-600 dark:text-indigo-300" />
            <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Ключевая идея: все генеративные модели обучаются на огромных
              массивах данных, а промпт — это «руль», которым вы направляете
              модель в выученном ею пространстве смыслов.
            </p>
          </div>
        </Reveal>
        <div className="relative border-l border-zinc-200 dark:border-white/10 pl-6">
          {history.map((h, i) => (
            <Reveal key={h.year} delay={i * 0.05} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[31px] top-1 size-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
              <p className="font-mono text-xs text-indigo-600 dark:text-indigo-300">{h.year}</p>
              <p className="mt-1 font-semibold">{h.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Классы моделей */}
      <div className="mt-20">
        <SectionHeading eyebrow="Зоопарк моделей" title="Пять классов генеративных моделей" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modelClasses.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <SpotlightCard className="h-full p-6">
                <span className="flex size-11 items-center justify-center rounded-xl border border-zinc-200 dark:border-white/10 bg-white/5">
                  <m.icon className="size-5 text-indigo-600 dark:text-indigo-300" />
                </span>
                <p className="mt-4 font-semibold">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{m.text}</p>
                <p className="mt-3 font-mono text-xs text-cyan-300/80">{m.examples}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Ограничения */}
      <div className="mt-20">
        <SectionHeading
          eyebrow="Трезвый взгляд"
          title="Что ИИ пока делает плохо"
          description="Знание ограничений экономит часы работы: их обходят выбором инструмента, референсами и финальной ручной доработкой."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {limitations.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.05}>
              <div className="flex h-full gap-4 rounded-2xl border border-amber-500/30 bg-amber-500/[0.07] p-5 dark:border-amber-400/20 dark:bg-amber-400/[0.04]">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-300" />
                <div>
                  <p className="font-semibold">{l.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{l.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
