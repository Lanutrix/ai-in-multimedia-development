import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToolCard } from "@/components/shared/tool-card";
import { Reveal } from "@/components/bits/reveal";
import { SpotlightCard } from "@/components/bits/spotlight-card";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  CATEGORY_META,
  CATEGORY_ORDER,
  REGION_META,
  regionPath,
  tools,
  type Category,
  type Region,
} from "@/data/tools";

const CRITERIA = [
  "Качество результатов",
  "Скорость",
  "Цена",
  "Доступность из России",
  "Лицензия",
  "API",
  "Зрелость продукта",
];

const REGION_DESC: Record<Region, string> = {
  RU: "Полный базовый стек без VPN и в рублях. Текст и изображения — зрелый уровень; видео и музыка — догоняют.",
  CN: "Второй центр генеративного ИИ: лидерство в открытых весах и топах видео. Самый доступный «зарубежный» вариант из РФ.",
  INTL: "Лучшие результаты каждой категории. Доступ — через VPN и зарубежные карты; исключения: Suno, CapCut, Grok.",
  OSS: "Запуск локально на своём GPU: бесплатно, приватно, без блокировок. Главное — проверить лицензию перед коммерцией.",
};

type RegionFilter = Region | "all";
type CategoryFilter = Category | "all";

export default function ToolsPage() {
  const [regionFilter, setRegionFilter] = useState<RegionFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");

  const regionList = useMemo(
    () =>
      regionFilter === "all"
        ? tools
        : tools.filter((t) => t.region === regionFilter),
    [regionFilter],
  );

  const categories = useMemo(
    () => CATEGORY_ORDER.filter((c) => regionList.some((t) => t.category === c)),
    [regionList],
  );

  const filtered = useMemo(
    () =>
      categoryFilter === "all"
        ? regionList
        : regionList.filter((t) => t.category === categoryFilter),
    [regionList, categoryFilter],
  );

  const handleRegionChange = (next: string) => {
    setRegionFilter(next as RegionFilter);
    // Сбрасываем категорию, если в новом регионе её нет
    const list =
      next === "all" ? tools : tools.filter((t) => t.region === (next as Region));
    if (
      categoryFilter !== "all" &&
      !list.some((t) => t.category === categoryFilter)
    ) {
      setCategoryFilter("all");
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Раздел 4"
        title="Каталог инструментов"
        description="62 сервиса, проверенные по состоянию на 06.11.2026: версии, цены, доступность из России. Фильтруйте весь список по региону и категории — или откройте глубокий разбор региона."
      />

      <Reveal className="mt-8">
        <div className="glass rounded-2xl p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
            <Compass className="size-4 text-indigo-300" />
            Методология отбора
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {CRITERIA.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Регионы — карточки с глубокими разборами */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {(Object.keys(REGION_META) as Region[]).map((region, i) => {
          const meta = REGION_META[region];
          const list = tools.filter((t) => t.region === region);
          return (
            <Reveal key={region} delay={i * 0.06}>
              <SpotlightCard className="h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2.5 text-lg font-semibold">
                    <span className={`size-2.5 rounded-full ${meta.dotClass}`} />
                    {meta.label}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">
                    {list.length} сервисов
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {REGION_DESC[region]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 border-white/15 bg-white/5 hover:bg-white/10"
                    render={
                      <Link
                        to="#catalog"
                        onClick={(e) => {
                          e.preventDefault();
                          setRegionFilter(region);
                          setCategoryFilter("all");
                          document
                            .getElementById("catalog")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      />
                    }
                  >
                    Показать в списке
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 gap-1 text-indigo-300 hover:text-indigo-200"
                    render={<Link to={regionPath(region)} />}
                  >
                    Глубокий разбор <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>

      {/* Весь каталог с фильтрами */}
      <section id="catalog" className="mt-20 scroll-mt-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Весь каталог
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                Показано {filtered.length} из {tools.length} · фильтры: регион + категория
              </p>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="gap-1 text-zinc-400 hover:text-white"
              render={
                <a href="#catalog" onClick={(e) => { e.preventDefault(); setRegionFilter("all"); setCategoryFilter("all"); }} />
              }
            >
              <ArrowDown className="size-3.5" /> Сбросить фильтры
            </Button>
          </div>
        </Reveal>

        {/* Фильтр по региону */}
        <Reveal className="mt-6">
          <Tabs value={regionFilter} onValueChange={handleRegionChange}>
            <TabsList className="h-auto flex-wrap justify-start gap-1 border border-white/10 bg-white/[0.04] p-1.5">
              <TabsTrigger
                value="all"
                className="text-xs data-[state=active]:bg-white/15 data-[state=active]:text-white"
              >
                Все регионы ({tools.length})
              </TabsTrigger>
              {(Object.keys(REGION_META) as Region[]).map((region) => (
                <TabsTrigger
                  key={region}
                  value={region}
                  className="text-xs data-[state=active]:bg-white/15 data-[state=active]:text-white"
                >
                  {REGION_META[region].label} (
                  {tools.filter((t) => t.region === region).length})
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </Reveal>

        {/* Фильтр по категории */}
        <Reveal className="mt-3">
          <Tabs value={categoryFilter} onValueChange={(v) => setCategoryFilter(v as CategoryFilter)}>
            <TabsList className="h-auto flex-wrap justify-start gap-1 border border-white/10 bg-white/[0.04] p-1.5">
              <TabsTrigger
                value="all"
                className="text-xs data-[state=active]:bg-white/15 data-[state=active]:text-white"
              >
                Все категории ({regionList.length})
              </TabsTrigger>
              {categories.map((c) => (
                <TabsTrigger
                  key={c}
                  value={c}
                  className="text-xs data-[state=active]:bg-white/15 data-[state=active]:text-white"
                >
                  {CATEGORY_META[c].label} (
                  {regionList.filter((t) => t.category === c).length})
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </Reveal>

        {/* Сетка инструментов */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((tool, i) => (
            <Reveal key={tool.id} delay={Math.min(i, 6) * 0.04}>
              <ToolCard tool={tool} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-zinc-500">
            Ничего не найдено — попробуйте сбросить фильтры.
          </p>
        )}
      </section>
    </div>
  );
}
