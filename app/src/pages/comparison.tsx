import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { Reveal } from "@/components/bits/reveal";
import {
  AVAILABILITY_META,
  CATEGORY_META,
  CATEGORY_ORDER,
  REGION_META,
  type Availability,
  type Category,
  tools,
} from "@/data/tools";

export default function ComparisonPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Раздел 4.5"
        title="Сводные сравнительные таблицы"
        description="Все 62 сервиса каталога, сгруппированные по девяти категориям. Данные зафиксированы 06.11.2026."
      />

      <Reveal className="mt-8">
        <div className="glass flex flex-wrap items-center gap-2 rounded-2xl p-4">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Доступность из РФ:
          </span>
          {(Object.keys(AVAILABILITY_META) as Availability[]).map((a) => (
            <Badge key={a} variant="outline" className={AVAILABILITY_META[a].className}>
              {AVAILABILITY_META[a].label}
            </Badge>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-14">
        {CATEGORY_ORDER.map((category: Category) => {
          const list = tools.filter((t) => t.category === category);
          if (list.length === 0) return null;
          return (
            <Reveal key={category}>
              <section>
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = CATEGORY_META[category].icon;
                    return (
                      <span className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                        <Icon className="size-4.5 text-indigo-300" />
                      </span>
                    );
                  })()}
                  <h2 className="text-2xl font-bold tracking-tight">
                    {CATEGORY_META[category].label}
                    <span className="ml-2 text-base font-normal text-zinc-500">
                      {list.length}
                    </span>
                  </h2>
                </div>
                <div className="mt-5">
                  <ComparisonTable
                    headers={["Сервис", "Регион", "Версия", "Цена", "Доступ из РФ"]}
                    rows={list.map((t) => [
                      t.name,
                      REGION_META[t.region].labelShort,
                      t.version ?? "—",
                      t.pricing,
                      AVAILABILITY_META[t.russia].label,
                    ])}
                  />
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
