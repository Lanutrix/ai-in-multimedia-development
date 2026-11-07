import { BookOpen, Code2, Database, Target } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/bits/spotlight-card";
import { Reveal } from "@/components/bits/reveal";
import { aboutFacts, glossary, sourceGroups } from "@/data/content";

const TECH_STACK = [
  "React 19 + TypeScript + Vite",
  "Tailwind CSS",
  "shadcn/ui",
  "Magic UI (aurora, marquee, number ticker)",
  "React Bits (split text, blur text, spotlight card)",
  "Lucide Icons",
  "Framer Motion (пакет motion)",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Раздел 8"
        title="О проекте"
        description="Учебное исследование «Возможности и средства применения искусственного интеллекта в разработке мультимедиа-продуктов», оформленное в виде интерактивного сайта."
      />

      <Reveal className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {aboutFacts.map((f) => (
          <div key={f.label} className="glass rounded-2xl p-5">
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{f.value}</p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{f.label}</p>
          </div>
        ))}
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        <Reveal>
          <SpotlightCard className="h-full p-6">
            <Target className="size-5 text-indigo-600 dark:text-indigo-300" />
            <p className="mt-3 font-semibold">Цель</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Систематизировать возможности генеративного ИИ на каждом этапе
              разработки мультимедиа-продукта и составить актуальный каталог
              инструментов с особым вниманием к российским и китайским сервисам.
            </p>
          </SpotlightCard>
        </Reveal>
        <Reveal delay={0.06}>
          <SpotlightCard className="h-full p-6">
            <Database className="size-5 text-indigo-600 dark:text-indigo-300" />
            <p className="mt-3 font-semibold">Методология</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Веб-исследование по трём направлениям (РФ, Китай, мир + open-source):
              официальные сайты, changelog, деловые СМИ, отраслевые обзоры.
              Неподтверждённые данные помечены; всё зафиксировано с датой проверки.
            </p>
          </SpotlightCard>
        </Reveal>
        <Reveal delay={0.12}>
          <SpotlightCard className="h-full p-6">
            <Code2 className="size-5 text-indigo-600 dark:text-indigo-300" />
            <p className="mt-3 font-semibold">Технология сайта</p>
            <ul className="mt-2 grid gap-1.5">
              {TECH_STACK.map((t) => (
                <li key={t} className="font-mono text-xs text-zinc-600 dark:text-zinc-400">
                  {t}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>
      </div>

      {/* Глоссарий */}
      <div className="mt-20">
        <SectionHeading eyebrow="Материалы" title="Глоссарий терминов" />
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {glossary.map((g, i) => (
            <Reveal key={g.term} delay={(i % 2) * 0.04}>
              <div className="h-full rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4">
                <p className="font-mono text-sm font-semibold text-indigo-600 dark:text-indigo-300">{g.term}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{g.def}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Источники */}
      <div className="mt-20">
        <SectionHeading
          eyebrow="Материалы"
          title="Источники"
          description="Полные списки с URL хранятся в файлах ресёрча проекта (docs/research/)."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {sourceGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="size-4 text-indigo-600 dark:text-indigo-300" />
                  <p className="font-semibold">{group.title}</p>
                </div>
                <ul className="mt-4 grid gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
