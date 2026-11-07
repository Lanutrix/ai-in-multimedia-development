# Blueprint сайта

Архитектура будущего сайта-исследования. Составляется заранее, чтобы ресёрч сразу вёл в нужную структуру данных.

---

## Стек

| Слой | Выбор | Зачем |
|------|-------|-------|
| База | **React 18 + TypeScript + Vite** | быстрый dev-цикл, статическая сборка |
| Роутинг | **react-router-dom** | многостраничность с «честными» URL |
| Стили | **Tailwind CSS** | стилизация, адаптивная вёрстка |
| UI-примитивы | **shadcn/ui** | Button, Card, Tabs, Table, Accordion, Dialog, Badge, Tooltip, Select |
| Фоновые эффекты | **Magic UI** | Aurora, Particles, GridPattern, BorderBeam, Marquee, NumberTicker, ShimmerButton |
| Текст/интерактив | **React Bits** | SplitText, BlurText, CountUp, SpotlightCard, AnimatedList |
| Иконки | **Lucide Icons** | единый стиль, единый импорт |
| Контент данных | типизированные `src/data/*.ts` | каталог инструментов генерируется из ресёрча |
| Деплой | статика: ZCode Sites / GitHub Pages / Vercel | без бэкенда |

> Примечание: Magic UI и React Bits — библиотеки «copy-paste» компонентов, работают поверх Tailwind; конфликтов между собой нет.

## Дерево страниц (12 страниц)

```
/                      Главная — hero, анимация, карта разделов, ключевые цифры
/basics                Как работает генеративный ИИ (история, классы моделей)
/pipeline              ИИ на этапах производства мультимедиа-продукта
/tools                 Каталог: обзор, фильтры по категории и региону
/tools/international   Международные сервисы
/tools/russia          Российские сервисы
/tools/china           Китайские сервисы
/tools/opensource      Open-source стек
/cases                 Практические кейсы и сквозной пайплайн
/comparison            Сводные сравнительные таблицы
/ethics                Этика, право, ограничения
/trends                Тренды 2026+
/about                 О проекте, глоссарий, источники
```

## Ключевые компоненты

- `Layout` — Navbar (blur при скролле, мобильное меню) + Footer
- `ToolCard` — карточка сервиса: имя, разработчик, флаг/регион, категория-бейдж, описание, список возможностей, версия, цена, «доступность из РФ», ссылка
- `RegionTabs` / `CategoryFilter` — навигация по каталогу
- `ComparisonTable` — адаптивная таблица со sticky-первой колонкой
- `Timeline` — история генеративного ИИ (`/basics`)
- `StepFlow` — этапы производства с иконками (`/pipeline`)
- `StatCard` + NumberTicker — ключевые цифры на главной
- `FaqAccordion` — на `/ethics` и `/about`
- `Marquee` — лента логотипов/названий сервисов на главной

## Дизайн-система

- **Тема:** тёмная по умолчанию (стандарт для ИИ-эстетики), переключатель light — опционально
- **Палитра:** фон `zinc-950`, поверхности `white/5` + `border-white/10`, акцент — градиент индиго → фиолетовый → циан
- **Типографика:** заголовки — Manrope/Inter (Bold), текст — Inter, термины и код — JetBrains Mono
- **Радиусы:** 12–16px, glassmorphism-карточки, мягкое свечение акцента
- **Адаптив:** от 360px до 1920px; бургер-меню на мобиле; таблицы — горизонтальный скролл
- **Анимации:** умеренно — фоны (Aurora/Particles) только на hero, текстовые анимации на заголовках страниц, hover-эффекты на карточках; уважение `prefers-reduced-motion`

## Модель данных (мост «ресёрч → сайт»)

Ресёрч ведётся по этой схеме, затем переносится в `src/data/tools.ts`:

```ts
interface Tool {
  id: string;                    // slug: "gigachat", "kling-ai"
  name: string;
  developer: string;             // "Сбер", "Kuaishou"
  country: "RU" | "CN" | "INTL" | "OSS";
  category: Category;            // "llm" | "image" | "video" | "music" | "voice" | "avatar" | "3d" | "design" | "platform"
  tags: string[];
  description: string;           // 1–2 предложения для карточки
  features: string[];            // 3–6 пунктов
  latestVersion?: string;        // "GigaChat Max (09.2026)"
  pricing: {                     // модель доступа
    model: "free" | "freemium" | "subscription" | "api" | "opensource" | "mixed";
    price?: string;              // "0 ₽ / Pro 1990 ₽·мес"
    freeTier?: string;
  };
  availability: {
    web: string;                 // URL
    api?: boolean;
    russia: "native" | "vpn" | "payment-issue" | "blocked" | "mirror"; // доступность из РФ
    internationalVersion?: string; // для CN-сервисов, напр. klingai.com
  };
  openSource?: { license: string; repo?: string };
  sources: string[];             // ссылки из ресёрча
}
```

## Порядок работ (после ресёрча)

1. Каркас: Vite + Tailwind + shadcn/ui + роутинг + Layout
2. Данные: `tools.ts` из ресёрча
3. Страницы по порядку: `/` → `/tools/*` → `/comparison` → `/basics` → `/pipeline` → `/cases` → `/ethics` → `/trends` → `/about`
4. Анимации Magic UI / React Bits поверх готовых страниц
5. Приёмка: мобильные ширины, Lighthouse, деплой
