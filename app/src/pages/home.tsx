import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Brain,
  Clapperboard,
  Film,
  Globe2,
  Info,
  Scale,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { Marquee } from "@/components/magic/marquee";
import { SplitText } from "@/components/bits/split-text";
import { BlurText } from "@/components/bits/blur-text";
import { SpotlightCard } from "@/components/bits/spotlight-card";
import { Reveal } from "@/components/bits/reveal";
import { StatCard } from "@/components/shared/stat-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { REGION_META, highlights, regionPath, tools } from "@/data/tools";

const barrierFree = tools.filter(
  (t) => t.russia === "native" || t.russia === "local",
).length;

const SECTIONS = [
  {
    icon: Brain,
    title: "Технологические основы",
    desc: "Как работают LLM, диффузия и видеомодели — без формул",
    to: "/basics",
  },
  {
    icon: Workflow,
    title: "Этапы производства",
    desc: "Где ИИ встраивается в разработку мультимедиа-продукта",
    to: "/pipeline",
  },
  {
    icon: Boxes,
    title: "Каталог инструментов",
    desc: "62 сервиса: Россия, Китай, мир, open-source",
    to: "/tools",
  },
  {
    icon: BarChart3,
    title: "Сравнительные таблицы",
    desc: "9 категорий × 4 региона + готовые связки",
    to: "/comparison",
  },
  {
    icon: Film,
    title: "Практические кейсы",
    desc: "Четыре стека от бесплатного до мирового топа",
    to: "/cases",
  },
  {
    icon: Scale,
    title: "Этика и право",
    desc: "243-ФЗ, маркировка, лицензии моделей",
    to: "/ethics",
  },
  {
    icon: TrendingUp,
    title: "Тренды 2026+",
    desc: "Мультимодальность, агенты, real-time, on-device",
    to: "/trends",
  },
  {
    icon: Info,
    title: "О проекте",
    desc: "Методология, глоссарий, источники",
    to: "/about",
  },
];

const FINDINGS = [
  {
    title: "Видео научилось говорить",
    text: "Главное событие 2025–2026: звук «по умолчанию» в видеомоделях. OpenAI закрыла Sora — нишу делят Veo 3.1, Kling 4.0 и Seedance 2.5. В России GigaChat уже генерирует видео со звуком в Full HD бесплатно.",
  },
  {
    title: "Китай — второй центр генеративного ИИ",
    text: "Китайские модели доминируют в открытых весах (Wan 2.2, Qwen-Image, ACE-Step) и топах видео. Из России это самый доступный «зарубежный» вариант: чаты работают без VPN, Kimi принимает карту «Мир».",
  },
  {
    title: "Полный русский стек существует",
    text: "GigaChat + Kandinsky/Шедеврум + SaluteSpeech + ERA2 Music закрывают весь цикл производства без VPN и в рублях. Слабые места — музыка и сложные видеосцены.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <AuroraBackground />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28">
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-6xl">
            <SplitText text="Искусственный интеллект" />{" "}
            <SplitText
              text="в разработке мультимедиа-продуктов"
              delay={0.2}
              wordClassName="text-gradient"
            />
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            <BlurText
              text="Что генеративный ИИ умеет сегодня и чем его применять: интерактивный каталог из 62 сервисов — российских, китайских, международных и open-source — с проверенными версиями, ценами и доступностью из России."
              delay={0.35}
            />
          </p>
          <Reveal delay={0.5} className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-400 hover:to-violet-400"
              render={<Link to="/tools" />}
            >
              Открыть каталог <ArrowRight className="ml-1 size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/15 bg-white/5 hover:bg-white/10"
              render={<Link to="/comparison" />}
            >
              Сравнительные таблицы
            </Button>
          </Reveal>

          <Reveal delay={0.65} className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <StatCard icon={Boxes} value={tools.length} label="сервисов в каталоге" />
            <StatCard icon={Globe2} value={4} label="региона исследования" />
            <StatCard icon={Brain} value={9} label="категорий инструментов" />
            <StatCard icon={Sparkles} value={barrierFree} label="доступны без барьеров" />
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-white/5 bg-zinc-950/60 py-5">
        <Marquee>
          {highlights().map((t) => (
            <span
              key={t.id}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-zinc-300"
            >
              <span className={`size-1.5 rounded-full ${REGION_META[t.region].dotClass}`} />
              {t.name}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Регионы */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Каталог"
          title="Четыре региона — четыре стратегии"
          description="Каждый регион ресёрча — это свой баланс качества, цены и доступности. Выбирайте под свою задачу."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(REGION_META) as Array<keyof typeof REGION_META>).map(
            (region, i) => {
              const meta = REGION_META[region];
              const count = tools.filter((t) => t.region === region).length;
              const desc: Record<string, string> = {
                RU: "Без VPN и в рублях: GigaChat, Kandinsky, Шедеврум, SaluteSpeech",
                CN: "Лидеры видео и открытых весов: Kling, Seedance, DeepSeek, Qwen",
                INTL: "Топ качества каждой категории: GPT-6, Veo 3.1, Midjourney, Suno",
                OSS: "Локально, бесплатно, приватно: ComfyUI, Wan 2.2, ACE-Step",
              };
              return (
                <Reveal key={region} delay={i * 0.08}>
                  <Link to={regionPath(region)} className="block h-full">
                    <SpotlightCard className="h-full p-5">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm font-semibold">
                          <span className={`size-2 rounded-full ${meta.dotClass}`} />
                          {meta.label}
                        </span>
                        <span className="text-2xl font-bold text-zinc-200">{count}</span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{desc[region]}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs text-indigo-300">
                        Смотреть <ArrowRight className="size-3" />
                      </span>
                    </SpotlightCard>
                  </Link>
                </Reveal>
              );
            },
          )}
        </div>
      </section>

      {/* Что внутри */}
      <section className="border-t border-white/5 bg-zinc-950/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Структура" title="Что внутри исследования" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.to} delay={i * 0.05}>
                <Link to={s.to} className="block h-full">
                  <SpotlightCard className="h-full p-5">
                    <s.icon className="size-5 text-indigo-300" />
                    <p className="mt-3 font-semibold">{s.title}</p>
                    <p className="mt-1.5 text-sm text-zinc-400">{s.desc}</p>
                  </SpotlightCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Выводы */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Главные выводы"
          title="Состояние рынка — ноябрь 2026"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {FINDINGS.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <SpotlightCard className="h-full p-6">
                <p className="text-lg font-semibold text-zinc-100">{f.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{f.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <div className="glass flex flex-col items-start gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Clapperboard className="mt-0.5 size-5 shrink-0 text-cyan-300" />
              <p className="text-sm leading-relaxed text-zinc-300">
                <span className="font-semibold text-white">Сквозной кейс:</span>{" "}
                четыре готовых стека — от бесплатного русского до мирового топа —
                собраны в разделе кейсов, шаг за шагом.
              </p>
            </div>
            <Button
              variant="outline"
              className="shrink-0 border-white/15 bg-white/5 hover:bg-white/10"
              render={<Link to="/cases" />}
            >
              Смотреть кейсы <ArrowRight className="ml-1 size-4" />
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
