import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const SECTIONS = [
  { to: "/basics", label: "Технологические основы" },
  { to: "/pipeline", label: "Этапы производства" },
  { to: "/tools", label: "Каталог инструментов" },
  { to: "/comparison", label: "Сравнительные таблицы" },
  { to: "/cases", label: "Практические кейсы" },
  { to: "/ethics", label: "Этика и право" },
  { to: "/trends", label: "Тренды 2026+" },
];

const REGIONS = [
  { to: "/tools/russia", label: "Российские сервисы" },
  { to: "/tools/china", label: "Китайские сервисы" },
  { to: "/tools/international", label: "Международные сервисы" },
  { to: "/tools/opensource", label: "Open-source стек" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-zinc-100/70 dark:border-white/5 dark:bg-zinc-950/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400">
              <Sparkles className="size-4.5 text-white" />
            </span>
            <span className="font-bold">ИИ × Медиа</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Учебное исследование «Возможности и средства применения искусственного
            интеллекта в разработке мультимедиа-продуктов». Каталог из 62 сервисов
            с акцентом на российские и китайские инструменты.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Разделы</p>
          <ul className="mt-4 grid gap-2">
            {SECTIONS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Каталог по регионам</p>
          <ul className="mt-4 grid gap-2">
            {REGIONS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200/70 py-5 dark:border-white/5">
        <p className="mx-auto max-w-7xl px-4 text-xs text-zinc-500 sm:px-6">
          Данные ресёрча проверены 06.11.2026 · Цены и версии могут меняться —
          сверяйтесь с официальными сайтами · Исследование хранится в
          <code className="mx-1 rounded bg-zinc-200/70 dark:bg-white/5 px-1 py-0.5 font-mono">docs/research/</code>
        </p>
      </div>
    </footer>
  );
}
