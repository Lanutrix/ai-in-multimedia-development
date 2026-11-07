import { REGION_META } from "@/data/tools";
import { pipelineSteps } from "@/data/content";
import { Reveal } from "@/components/bits/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export default function PipelinePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Раздел 3"
        title="ИИ на этапах производства"
        description="Разработка мультимедиа-продукта — конвейер из десяти этапов. На каждом ИИ уже сегодня экономит часы и дни: ниже — конкретные инструменты по регионам."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {pipelineSteps.map((step, i) => (
          <Reveal key={step.title} delay={(i % 2) * 0.07}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-white/20">
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/10">
                  <step.icon className="size-5 text-indigo-300" />
                </span>
                <p className="font-semibold">{step.title}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.text}</p>
              <div className="mt-4 grid gap-1.5 border-t border-white/5 pt-4">
                {(
                  [
                    ["Мир", step.intl, REGION_META.INTL.dotClass],
                    ["РФ", step.ru, REGION_META.RU.dotClass],
                    ["Китай", step.cn, REGION_META.CN.dotClass],
                  ] as const
                ).map(([label, toolsList, dot]) => (
                  <div key={label} className="flex items-baseline gap-2 text-xs">
                    <span className="flex w-14 shrink-0 items-center gap-1.5 font-medium text-zinc-300">
                      <span className={`size-1.5 rounded-full ${dot}`} />
                      {label}
                    </span>
                    <span className="font-mono text-zinc-500">{toolsList}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="glass rounded-2xl p-6">
          <p className="text-sm leading-relaxed text-zinc-300">
            <span className="font-semibold text-white">Практический вывод.</span>{" "}
            Максимальный эффект ИИ даёт не в одной точке, а в связке: сценарий
            (LLM) → концепт-арт (image) → видео (video) → звук (music) → озвучка
            (TTS) → монтаж. Полные связки под бюджет — в разделе{" "}
            <span className="text-indigo-300">«Кейсы»</span>.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
