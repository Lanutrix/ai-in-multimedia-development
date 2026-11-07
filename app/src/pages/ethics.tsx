import { Scale } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/bits/spotlight-card";
import { Reveal } from "@/components/bits/reveal";
import { ethicsSections } from "@/data/content";

export default function EthicsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Раздел 6"
        title="Этика, право, ограничения"
        description="Что нужно знать, чтобы использовать ИИ в мультимедиа-продуктах безопасно: авторское право, маркировка в России, лицензии моделей и честные практики."
      />

      <Reveal className="mt-10">
        <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/[0.07] p-6 dark:border-indigo-400/25 dark:bg-indigo-400/[0.06]">
          <div className="flex items-center gap-2.5">
            <Scale className="size-5 text-indigo-600 dark:text-indigo-600 dark:text-indigo-300" />
            <p className="font-semibold text-zinc-900 dark:text-white">
              Главное изменение 2026 года: 243-ФЗ
            </p>
          </div>
          <p className="mt-2.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            С 1 сентября 2026 года в России действует Федеральный закон № 243-ФЗ
            «Об искусственном интеллекте». Обязательная маркировка ИИ-контента
            для платформ с аудиторией более 500 тыс. пользователей в день
            заработает с <span className="font-semibold text-white">1 марта 2027 года</span>{" "}
            — порядок и формат маркировки определяется отдельно.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {ethicsSections.map((s, i) => (
          <Reveal key={s.title} delay={(i % 2) * 0.07} className={i === 0 ? "lg:col-span-2" : ""}>
            <SpotlightCard className="h-full p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5">
                  <s.icon className="size-5 text-indigo-600 dark:text-indigo-300" />
                </span>
                <p className="font-semibold">{s.title}</p>
              </div>
              <div className="mt-4 grid gap-3">
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {p}
                  </p>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
