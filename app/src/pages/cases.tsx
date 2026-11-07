import { Banknote, CircleAlert, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/bits/spotlight-card";
import { Reveal } from "@/components/bits/reveal";
import { caseStacks } from "@/data/content";

const ECONOMICS = [
  {
    icon: Banknote,
    title: "Бесплатно",
    text: "Русский стек (GigaChat, Kandinsky, Шедеврум, SaluteSpeech) и open-source на своём GPU закрывают весь цикл за 0 ₽.",
  },
  {
    icon: Wallet,
    title: "От $10 до $100/мес",
    text: "Комфортный профессиональный бюджет: 2–4 подписки уровня Suno Pro ($10), Runway Standard ($15), ElevenLabs Creator ($22).",
  },
  {
    icon: CircleAlert,
    title: "Скрытые затраты",
    text: "Оплата из РФ: посредники берут комиссию 10–20%; генерация видео у лидеров стоит ~$0.3–0.5 за секунду (Veo 3.1 — до $24/мин).",
  },
];

const LIMITS = [
  "Режиссура длинных консистентных сцен — видеомодели держат continuity в пределах 5–30 секунд.",
  "Уникальный авторский дизайн — модели воспроизводят усреднённые стили; бренд-идентичность всё ещё делает человек.",
  "Факты и актуальность — LLM галлюцинируют, поэтому публичные тексты проходят человеческий фактчек.",
  "Юридическая чистота — для коммерции использовать модели с лицензионными данными и коммерческими лицензиями.",
];

export default function CasesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Раздел 5"
        title="Практические кейсы: четыре связки"
        description="Готовые сквозные пайплайны создания мультимедиа-продукта — от сценария до монтажа — под разный бюджет и уровень барьеров."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {caseStacks.map((stack, i) => (
          <Reveal key={stack.id} delay={i * 0.06}>
            <SpotlightCard className="h-full p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold">{stack.title}</p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{stack.subtitle}</p>
                </div>
                <Badge
                  variant="outline"
                  className={
                    stack.badge === "РФ"
                      ? "border-emerald-600/30 bg-emerald-600/10 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300"
                      : stack.badge === "Китай"
                        ? "border-rose-600/30 bg-rose-600/10 text-rose-700 dark:border-rose-400/30 dark:bg-rose-400/10 dark:text-rose-300"
                        : stack.badge === "OSS"
                          ? "border-amber-600/30 bg-amber-600/10 text-amber-700 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-600 dark:text-amber-300"
                          : "border-sky-600/30 bg-sky-600/10 text-sky-700 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-300"
                  }
                >
                  {stack.badge}
                </Badge>
              </div>
              <ol className="mt-5 grid gap-2.5">
                {stack.steps.map((s, j) => (
                  <li key={s.tool} className="flex items-baseline gap-3 text-sm">
                    <span className="flex size-6 shrink-0 translate-y-0.5 items-center justify-center rounded-full border border-zinc-200 dark:border-white/10 bg-white/5 font-mono text-[11px] text-indigo-600 dark:text-indigo-300">
                      {j + 1}
                    </span>
                    <span className="font-medium text-zinc-100">{s.tool}</span>
                    <span className="text-zinc-500">— {s.role}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-5 border-t border-white/5 pt-4 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                {stack.note}
              </p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      {/* Экономика */}
      <div className="mt-20">
        <SectionHeading
          eyebrow="Экономика"
          title="Сколько стоит ИИ-продакшен"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ECONOMICS.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06}>
              <SpotlightCard className="h-full p-6">
                <e.icon className="size-5 text-indigo-600 dark:text-indigo-300" />
                <p className="mt-3 font-semibold">{e.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{e.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Границы */}
      <div className="mt-20">
        <SectionHeading
          eyebrow="Трезвый взгляд"
          title="Границы применимости"
          description="Где ИИ в 2026 году пока проигрывает человеку — и что с этим делать."
        />
        <div className="mt-10 grid gap-3">
          {LIMITS.map((l, i) => (
            <Reveal key={l} delay={i * 0.04}>
              <div className="flex items-start gap-3 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4">
                <CircleAlert className="mt-0.5 size-4.5 shrink-0 text-amber-600 dark:text-amber-300" />
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
