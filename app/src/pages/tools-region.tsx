import { useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToolCard } from "@/components/shared/tool-card";
import { Reveal } from "@/components/bits/reveal";
import { BlurText } from "@/components/bits/blur-text";
import { SplitText } from "@/components/bits/split-text";
import {
  CATEGORY_META,
  CATEGORY_ORDER,
  REGION_META,
  byRegion,
  type Category,
  type Region,
} from "@/data/tools";

const REGION_KEY: Record<string, Region> = {
  russia: "RU",
  china: "CN",
  international: "INTL",
  opensource: "OSS",
};

const REGION_SUMMARY: Record<Region, { eyebrow: string; text: string }> = {
  RU: {
    eyebrow: "Раздел 4.2 · особое внимание",
    text: "Российский рынок за 2025–2026 перешёл от догоняющих демо к промышленным мультимодальным продуктам: видео со звуком, агентные платформы, зрелые речевые API. Всё работает из России без VPN и оплачивается в рублях. Слабые места — музыка (локализованные движки) и сложные видеосцены.",
  },
  CN: {
    eyebrow: "Раздел 4.3 · особое внимание",
    text: "Китай — второй центр генеративного ИИ: доминирование в открытых весах (Wan, Qwen-Image, HunyuanImage, ACE-Step) и половина топа мировых видеомоделей. Веб-чаты работают из РФ без VPN, Kimi принимает карты «Мир», для видеосервисов есть международные версии.",
  },
  INTL: {
    eyebrow: "Раздел 4.1",
    text: "Западные сервисы задают качество каждой категории: GPT-6, Veo 3.1, Midjourney V8, Suno v6, ElevenLabs. Из России доступны через VPN и зарубежные карты; исключения без VPN — Suno, CapCut и частично Grok.",
  },
  OSS: {
    eyebrow: "Раздел 4.4",
    text: "Открытые модели — путь без барьеров: локальный запуск на своём GPU, нулевая стоимость генерации, полная приватность, никаких блокировок. Внимание к лицензиям: Apache/MIT — можно в коммерцию, CC-BY-NC — нельзя.",
  },
};

export default function ToolsRegionPage() {
  const { region: param } = useParams<{ region: string }>();
  const region = param ? REGION_KEY[param] : undefined;
  const [category, setCategory] = useState<string>("all");

  const list = useMemo(() => (region ? byRegion(region) : []), [region]);
  const categories = useMemo(
    () =>
      CATEGORY_ORDER.filter((c) => list.some((t) => t.category === c)),
    [list],
  );
  const filtered = useMemo(
    () => (category === "all" ? list : list.filter((t) => t.category === category)),
    [list, category],
  );

  if (!region) return <Navigate to="/tools" replace />;

  const meta = REGION_META[region];
  const summary = REGION_SUMMARY[region];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex items-center gap-3">
        <span className={`size-3 rounded-full ${meta.dotClass}`} />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          {summary.eyebrow}
        </p>
      </div>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        <SplitText text={`${meta.label}: ${list.length} инструментов`} />
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        <BlurText text={summary.text} delay={0.15} />
      </p>

      <Tabs value={category} onValueChange={setCategory} className="mt-10">
        <TabsList className="h-auto flex-wrap justify-start gap-1 border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-1.5">
          <TabsTrigger
            value="all"
            className="text-xs data-[state=active]:bg-zinc-900 data-[state=active]:text-zinc-50 dark:data-[state=active]:bg-white/15 dark:data-[state=active]:text-white"
          >
            Все ({list.length})
          </TabsTrigger>
          {categories.map((c: Category) => (
            <TabsTrigger
              key={c}
              value={c}
              className="text-xs data-[state=active]:bg-zinc-900 data-[state=active]:text-zinc-50 dark:data-[state=active]:bg-white/15 dark:data-[state=active]:text-white"
            >
              {CATEGORY_META[c].label} ({list.filter((t) => t.category === c).length})
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((tool, i) => (
          <Reveal key={tool.id} delay={Math.min(i, 6) * 0.05}>
            <ToolCard tool={tool} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-zinc-500">
          В этой категории пока пусто.
        </p>
      )}
    </div>
  );
}
