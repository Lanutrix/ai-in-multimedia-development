import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Box,
  Image as ImageIcon,
  Layers,
  Mic,
  Music,
  Palette,
  Video,
} from "lucide-react";

export type Region = "RU" | "CN" | "INTL" | "OSS";

export type Category =
  | "llm"
  | "image"
  | "video"
  | "music"
  | "voice"
  | "avatar"
  | "3d"
  | "design"
  | "platform";

/** Доступность из России */
export type Availability = "native" | "vpn" | "partial" | "local";

export interface Tool {
  id: string;
  name: string;
  developer: string;
  region: Region;
  category: Category;
  description: string;
  features: string[];
  version?: string;
  pricing: string;
  russia: Availability;
  url?: string;
  highlight?: boolean;
}

/* ---------------- Метаданные ---------------- */

export const REGION_META: Record<
  Region,
  { label: string; labelShort: string; badgeClass: string; dotClass: string }
> = {
  RU: {
    label: "Россия",
    labelShort: "РФ",
    badgeClass: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    dotClass: "bg-emerald-400",
  },
  CN: {
    label: "Китай",
    labelShort: "Китай",
    badgeClass: "border-rose-400/30 bg-rose-400/10 text-rose-300",
    dotClass: "bg-rose-400",
  },
  INTL: {
    label: "Международные",
    labelShort: "Мир",
    badgeClass: "border-sky-400/30 bg-sky-400/10 text-sky-300",
    dotClass: "bg-sky-400",
  },
  OSS: {
    label: "Open-source",
    labelShort: "OSS",
    badgeClass: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    dotClass: "bg-amber-400",
  },
};

export const AVAILABILITY_META: Record<
  Availability,
  { label: string; className: string }
> = {
  native: {
    label: "Работает в РФ без VPN",
    className: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  },
  vpn: {
    label: "VPN + зарубежная карта",
    className: "border-rose-400/30 bg-rose-400/10 text-rose-300",
  },
  partial: {
    label: "Частично доступен",
    className: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  },
  local: {
    label: "Локальный запуск",
    className: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
  },
};

export const CATEGORY_META: Record<
  Category,
  { label: string; icon: LucideIcon }
> = {
  llm: { label: "Текст и LLM", icon: Bot },
  image: { label: "Изображения", icon: ImageIcon },
  video: { label: "Видео", icon: Video },
  music: { label: "Музыка и аудио", icon: Music },
  voice: { label: "Речь и озвучка", icon: Mic },
  avatar: { label: "Аватары", icon: Layers },
  "3d": { label: "3D", icon: Box },
  design: { label: "Дизайн и монтаж", icon: Palette },
  platform: { label: "Платформы", icon: Layers },
};

export const CATEGORY_ORDER: Category[] = [
  "llm",
  "image",
  "video",
  "music",
  "voice",
  "avatar",
  "3d",
  "design",
  "platform",
];

/* ---------------- Каталог ---------------- */

export const tools: Tool[] = [
  /* ===== Россия ===== */
  {
    id: "gigachat",
    name: "GigaChat",
    developer: "Сбер",
    region: "RU",
    category: "llm",
    description:
      "Флагманский русскоязычный ассистент Сбера: тексты и код, генерация изображений, музыки и видео со звуком в Full HD — бесплатно.",
    features: [
      "Видео со звуком в Full HD бесплатно",
      "Понимает аудио напрямую (2.0)",
      "Контекст до 128K у 2 Max",
      "Интеграция в мессенджер Max, Telegram, API",
    ],
    version: "2 Max (03.2025)",
    pricing: "Бесплатно с лимитами; API от 1950 ₽/мес",
    russia: "native",
    url: "https://giga.chat",
    highlight: true,
  },
  {
    id: "kandinsky",
    name: "Kandinsky",
    developer: "Сбер",
    region: "RU",
    category: "image",
    description:
      "Семейство моделей Сбера для генерации изображений и видео; версия 6.0 встроена в GigaChat и работает без лимитов.",
    features: [
      "Изображения по тексту и редактирование",
      "Видеогенерация со звуком (6.0 Video)",
      "Около 20 готовых стилей",
      "Открытые веса на GitHub",
    ],
    version: "6.0 (04.2026)",
    pricing: "Бесплатно",
    russia: "native",
    url: "https://github.com/ai-forever",
    highlight: true,
  },
  {
    id: "alice",
    name: "Алиса AI",
    developer: "Яндекс",
    region: "RU",
    category: "llm",
    description:
      "Универсальный ассистент Яндекса (экс-YandexGPT): тексты, изображения, оживление фото и пользовательские ИИ-агенты.",
    features: [
      "Тексты, пересказ, поиск",
      "Генерация изображений",
      "Оживление фото (фото → MP4)",
      "Пользовательские ИИ-агенты",
    ],
    version: "Alice AI (10.2025)",
    pricing: "Бесплатно; Алиса Плюс 199 ₽/мес",
    russia: "native",
    url: "https://alice.yandex.ru",
    highlight: true,
  },
  {
    id: "shedevrum",
    name: "Шедеврум",
    developer: "Яндекс",
    region: "RU",
    category: "image",
    description:
      "Генерация изображений и видео по описанию на модели YandexART 2.5; хорошо понимает русский язык.",
    features: [
      "Text-to-image и text-to-video",
      "Клипы из видео, изображений и Фильтрумов",
      "Движение камеры и объектов в кадре",
      "Интеграция с Алисой AI",
    ],
    version: "YandexART 2.5 (2026)",
    pricing: "Бесплатно",
    russia: "native",
    url: "https://shedevrum.ai",
    highlight: true,
  },
  {
    id: "cotype",
    name: "Cotype",
    developer: "МТС (MWS AI)",
    region: "RU",
    category: "llm",
    description:
      "Корпоративная LLM МТС с агентными помощниками, 100+ бизнес-сценариями и развёртыванием on-premise.",
    features: [
      "Агентные ИИ-помощники",
      "Работа с документами компании",
      "On-premise в контуре клиента",
      "Ассистент разработчика Kodify 2",
    ],
    version: "Pro 2.5 (10.2025)",
    pricing: "B2B: подписка / on-premise",
    russia: "native",
    url: "https://cotype.ru",
  },
  {
    id: "salutespeech",
    name: "SaluteSpeech",
    developer: "Сбер",
    region: "RU",
    category: "voice",
    description:
      "Платформа синтеза и распознавания речи: десятки голосов, потоковое распознавание, API для продуктов.",
    features: [
      "TTS с множеством голосов",
      "STT, включая потоковый",
      "Асинхронная обработка длинных аудио",
      "Интеграция в телефонию и роботов",
    ],
    pricing: "API с пакетами; тестовая квота",
    russia: "native",
    url: "https://salutespeech.com",
  },
  {
    id: "speechkit",
    name: "Yandex SpeechKit",
    developer: "Яндекс",
    region: "RU",
    category: "voice",
    description:
      "Речевая платформа Яндекса: синтез и распознавание на 15+ языках, уникальный голос бренда, конструктор голосовых агентов.",
    features: [
      "Brand Voice — голос бренда",
      "Синтез по шаблонам с переменными",
      "SpeechKit Hybrid для колл-центров",
      "AI Speech — голосовые агенты",
    ],
    version: "API v3",
    pricing: "Pay-as-you-go",
    russia: "native",
    url: "https://yandex.cloud/services/speechkit",
  },
  {
    id: "era2-music",
    name: "ERA2 Music",
    developer: "ERA2",
    region: "RU",
    category: "music",
    description:
      "Российский генератор песен на движке Suno с русской адаптацией: трек с вокалом и аранжировкой за минуту.",
    features: [
      "Русскоязычный вокал",
      "Шаблоны под поводы и стили",
      "Генерация без регистрации",
      "Родственный ERA2 Voice — клон голоса",
    ],
    pricing: "Фримиум",
    russia: "native",
    url: "https://music.era2.ai",
  },
  {
    id: "era2-voice",
    name: "ERA2 Voice",
    developer: "ERA2",
    region: "RU",
    category: "voice",
    description: "Клонирование голоса по короткому аудиофрагменту.",
    features: ["Клон по короткой записи", "Русский язык", "Без VPN"],
    pricing: "Фримиум",
    russia: "native",
    url: "https://era2.ai",
  },
  {
    id: "genve",
    name: "Genve.ai",
    developer: "Genve",
    region: "RU",
    category: "voice",
    description:
      "Профессиональный ИИ-дубляж: автоматическая транскрибация, перевод и генерация клонированного голоса диктора.",
    features: ["Транскрибация", "Перевод", "Клонированный голос диктора"],
    pricing: "B2B / подписка",
    russia: "native",
    url: "https://genve.ai",
  },
  {
    id: "gensolution",
    name: "GenSolution AI",
    developer: "GenSolution",
    region: "RU",
    category: "avatar",
    description:
      "Говорящие 3D-цифровые аватары для видео, презентаций и бизнеса; интеграция под ключ.",
    features: ["3D-аватары", "Синтез голоса", "B2B-интеграция"],
    pricing: "B2B, по запросу",
    russia: "native",
    url: "https://gensolution.ru",
  },
  {
    id: "slidy",
    name: "Slidy AI",
    developer: "Slidy",
    region: "RU",
    category: "design",
    description:
      "Российская нейросеть для презентаций: слайды, документы, изображения и видео в одном месте.",
    features: ["Генерация слайдов", "PPTX/PDF", "Русский язык"],
    pricing: "Фримиум",
    russia: "native",
    url: "https://slidy.ai",
  },
  {
    id: "ai-studio",
    name: "Yandex Cloud AI Studio",
    developer: "Яндекс",
    region: "RU",
    category: "platform",
    description:
      "Облачная платформа для агентов и генеративных моделей: Model Gallery, GPU, no-code-конструктор агентов.",
    features: ["Model Gallery", "No-code агенты (09.2025)", "GPU-инфраструктура"],
    pricing: "Cloud, pay-as-you-go",
    russia: "native",
    url: "https://aistudio.yandex.ru",
  },
  {
    id: "gigachain",
    name: "GigaChain",
    developer: "Сбер",
    region: "RU",
    category: "platform",
    description:
      "Открытый SDK для LLM-приложений и агентов на базе GigaChat (LangChain/LangGraph); интеграция с Deep Agents.",
    features: [
      "LangChain/LangGraph/LangChain4j",
      "MCP-серверы",
      "Интеграция с Deep Agents (08.2026)",
    ],
    version: "Deep Agents (08.2026)",
    pricing: "Open source + тарифы GigaChat API",
    russia: "native",
    url: "https://developers.sber.ru/docs/ru/gigachain/overview",
  },

  /* ===== Международные ===== */
  {
    id: "chatgpt",
    name: "ChatGPT",
    developer: "OpenAI",
    region: "INTL",
    category: "llm",
    description:
      "Эталонный универсальный ассистент: GPT-6 «Astra» — тексты, код, изображения и голос в одном чате.",
    features: [
      "GPT-6 Astra + быстрые Sol/Luna",
      "Генерация изображений (GPT Image)",
      "Голосовой режим",
      "API по токенам",
    ],
    version: "GPT-6 (09.2026)",
    pricing: "Free; Plus $20/мес",
    russia: "vpn",
    url: "https://chatgpt.com",
    highlight: true,
  },
  {
    id: "gemini",
    name: "Gemini",
    developer: "Google",
    region: "INTL",
    category: "llm",
    description:
      "Мультимодальная экосистема Google: ассистент Gemini 3, видео Veo 3.1 и изображения Nano Banana 2.1.",
    features: [
      "Gemini 3 / 3.8 Live",
      "Veo 3.1 — видео с нативным звуком",
      "Nano Banana 2.1 — редактирование фото",
      "Интеграция с Workspace",
    ],
    version: "3 (2026)",
    pricing: "Free; AI Pro ~$20/мес",
    russia: "vpn",
    url: "https://gemini.google.com",
    highlight: true,
  },
  {
    id: "claude",
    name: "Claude",
    developer: "Anthropic",
    region: "INTL",
    category: "llm",
    description:
      "LLM Anthropic с сильными рассуждениями и письмом; фаворит для работы с текстом и кодом.",
    features: ["Opus 4.5 и линейка 5.x", "Артефакты — мини-приложения", "API"],
    version: "Opus 4.5 (11.2025)",
    pricing: "Free; Pro $20/мес",
    russia: "vpn",
    url: "https://claude.ai",
  },
  {
    id: "grok",
    name: "Grok",
    developer: "xAI",
    region: "INTL",
    category: "llm",
    description:
      "Ассистент xAI с быстрым генератором изображений и видео Grok Imagine (6-сек ролики за ~25 секунд).",
    features: [
      "Grok 4.7 — диалоги и код",
      "Imagine Video 1.5 — быстрое видео",
      "Публичный Imagine API",
    ],
    version: "4.7 (09.2026)",
    pricing: "Free (базово)",
    russia: "partial",
    url: "https://x.ai",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    developer: "Midjourney",
    region: "INTL",
    category: "image",
    description:
      "Эталон художественной генерации изображений: V8 в пять раз быстрее V7, нативный 2K и видеомодель.",
    features: [
      "Нативный HD 2K",
      "Точный рендеринг текста",
      "Video: оживление изображения до 21 сек",
      "Веб-редактор",
    ],
    version: "V8/V8.1 (04.2026)",
    pricing: "от $10/мес",
    russia: "vpn",
    url: "https://midjourney.com",
    highlight: true,
  },
  {
    id: "flux",
    name: "FLUX",
    developer: "Black Forest Labs",
    region: "INTL",
    category: "image",
    description:
      "Семейство моделей от авторов Stable Diffusion: от открытых весов (dev) до pro-API с точным текстом.",
    features: [
      "FLUX.2 [dev] — открытые веса 32B",
      "FLUX 3 Klein — быстрая версия",
      "Мульти-референсное редактирование",
      "До 4 Мп",
    ],
    version: "FLUX.2 / FLUX 3 (2026)",
    pricing: "API; открытые веса",
    russia: "vpn",
    url: "https://bfl.ai",
  },
  {
    id: "firefly",
    name: "Adobe Firefly",
    developer: "Adobe",
    region: "INTL",
    category: "design",
    description:
      "Генерация для дизайнеров: обучена на лицензионных данных, хаб из 30+ сторонних моделей, интеграция с Adobe.",
    features: [
      "Легально для коммерции",
      "Custom Models — обучение на своих данных",
      "Каталог сторонних моделей",
      "Интеграция с Photoshop/Premiere",
    ],
    version: "Image Model 2 (01.2026)",
    pricing: "Free-лимиты; от $10/мес",
    russia: "vpn",
    url: "https://firefly.adobe.com",
  },
  {
    id: "runway",
    name: "Runway",
    developer: "Runway AI",
    region: "INTL",
    category: "video",
    description:
      "Профессиональная видеостудия: Gen-4.5 с лучшей консистентностью кадров плюс инструменты пост-продакшена.",
    features: [
      "Gen-4.5: text/image-to-video",
      "Inpainting и motion brush",
      "2–10 сек, 1280p",
      "Интеграции в Krea и Firefly",
    ],
    version: "Gen-4.5",
    pricing: "Free 125 кр.; от $15/мес",
    russia: "vpn",
    url: "https://runway.com",
    highlight: true,
  },
  {
    id: "luma",
    name: "Luma Dream Machine",
    developer: "Luma Labs",
    region: "INTL",
    category: "video",
    description:
      "Видеогенерация с акцентом на кейфреймы и непрерывность монтажных склеек; HDR.",
    features: ["Ray3.2", "Кейфреймы и склейки", "HDR", "Luma Scenes"],
    version: "Ray3.2 (06.2026)",
    pricing: "от $30/мес",
    russia: "vpn",
    url: "https://lumalabs.ai",
  },
  {
    id: "suno",
    name: "Suno",
    developer: "Suno Inc.",
    region: "INTL",
    category: "music",
    description:
      "Лидер ИИ-музыки: v6 обучена на лицензионной музыке (Warner, BMG, Believe); песни с вокалом и Studio 2.0.",
    features: [
      "Песни с вокалом по тексту",
      "Лицензионные данные (v6)",
      "Studio 2.0 — редактор",
      "Работает из РФ без VPN",
    ],
    version: "v6 (09.2026)",
    pricing: "Free; Pro $10/мес",
    russia: "native",
    url: "https://suno.com",
    highlight: true,
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    developer: "ElevenLabs",
    region: "INTL",
    category: "voice",
    description:
      "Эталон синтеза речи: экспрессивная v3 с эмоциями, клонирование голоса, музыка и дубляж на десятки языков.",
    features: [
      "TTS v3 с аудиотегами",
      "Клонирование голоса",
      "Eleven Music — песни",
      "Дубляж с сохранением голоса",
    ],
    version: "v3",
    pricing: "Free 10k кр.; от $5/мес",
    russia: "vpn",
    url: "https://elevenlabs.io",
    highlight: true,
  },
  {
    id: "heygen",
    name: "HeyGen",
    developer: "HeyGen",
    region: "INTL",
    category: "avatar",
    description:
      "Фотореалистичные ИИ-аватары (Avatar IV/V) для видео-презентаций, обучения и маркетинга.",
    features: ["Аватары из фото", "Синхронизация губ", "API", "Шаблоны видео"],
    version: "Avatar IV/V (2026)",
    pricing: "Free 3 видео/мес; от $29/мес",
    russia: "vpn",
    url: "https://heygen.com",
  },
  {
    id: "synthesia",
    name: "Synthesia",
    developer: "Synthesia",
    region: "INTL",
    category: "avatar",
    description:
      "Корпоративные видео с ИИ-аватарами: стандарт для обучения и внутренних коммуникаций.",
    features: ["Кастомные аватары", "140+ языков", "Шаблоны обучения"],
    pricing: "Free; от $29/мес",
    russia: "vpn",
    url: "https://synthesia.io",
  },
  {
    id: "descript",
    name: "Descript",
    developer: "Descript",
    region: "INTL",
    category: "design",
    description:
      "Монтаж видео «как документ»: правка текста правит видео; удаление слов-паразитов, коррекция взгляда.",
    features: [
      "Монтаж по транскрипту",
      "Eye contact и ремонт реплик",
      "Запись и подкасты",
    ],
    pricing: "Free; от $15/мес",
    russia: "vpn",
    url: "https://descript.com",
  },
  {
    id: "capcut",
    name: "CapCut",
    developer: "ByteDance",
    region: "INTL",
    category: "design",
    description:
      "Популярный видеоредактор со встроенной ИИ-генерацией; полностью работает в России без VPN.",
    features: [
      "AI-генерация видео (2026)",
      "Автосубтитры и шаблоны",
      "Работает в РФ без VPN",
    ],
    pricing: "Free; Pro по подписке",
    russia: "native",
    url: "https://capcut.com",
    highlight: true,
  },
  {
    id: "perplexity",
    name: "Perplexity",
    developer: "Perplexity AI",
    region: "INTL",
    category: "llm",
    description:
      "ИИ-поиск с ответами и источниками — полезен на этапе исследования и фактчекинга.",
    features: ["Ответы со ссылками", "Focus-режимы", "Pro-поиск"],
    pricing: "Free; Pro $20/мес",
    russia: "partial",
    url: "https://perplexity.ai",
  },

  /* ===== Китай ===== */
  {
    id: "deepseek",
    name: "DeepSeek",
    developer: "DeepSeek AI",
    region: "CN",
    category: "llm",
    description:
      "Легенда открытых моделей: MoE-семейство V4/V4.1 Flash с топ-рассуждениями и дешёвым API; чат работает из РФ без VPN.",
    features: [
      "Открытые веса (MoE)",
      "Сильные рассуждения и код",
      "Дешёвый API",
      "Без VPN из РФ",
    ],
    version: "V4.1 Flash (2026)",
    pricing: "Бесплатно; API по токенам",
    russia: "native",
    url: "https://chat.deepseek.com",
    highlight: true,
  },
  {
    id: "qwen",
    name: "Qwen",
    developer: "Alibaba",
    region: "CN",
    category: "llm",
    description:
      "Семейство Qwen 3.8: флагман Max на 2.4 трлн параметров, открытые версии Apache-2.0 и мультимодальность.",
    features: [
      "Qwen 3.8 Max (08.2026)",
      "Открытая Qwen3.8-27B",
      "Веб-чат без VPN",
      "Экосистема: изображения, видео, TTS",
    ],
    version: "3.8 Max (08.2026)",
    pricing: "Бесплатно; API Alibaba Cloud",
    russia: "native",
    url: "https://chat.qwen.ai",
    highlight: true,
  },
  {
    id: "kimi",
    name: "Kimi",
    developer: "Moonshot AI",
    region: "CN",
    category: "llm",
    description:
      "Ассистент с сильными рассуждениями; с ноября 2026 подписку можно оплатить картой «Мир».",
    features: ["Длинный контекст", "Агентные режимы", "Оплата картой «Мир»"],
    version: "K3 (2026)",
    pricing: "Free; подписка («Мир»)",
    russia: "native",
    url: "https://kimi.com",
  },
  {
    id: "glm",
    name: "GLM",
    developer: "Zhipu AI",
    region: "CN",
    category: "llm",
    description:
      "Открытые модели GLM-5.x: рассуждения, код и агентные сценарии; открытые веса.",
    features: ["Открытые веса", "Агентные сценарии", "Междунар. чат z.ai"],
    version: "GLM-5.3",
    pricing: "Free; открытые веса",
    russia: "partial",
    url: "https://chat.z.ai",
  },
  {
    id: "ernie",
    name: "ERNIE Bot",
    developer: "Baidu",
    region: "CN",
    category: "llm",
    description:
      "Флагманский чат-бот Baidu (文心一言); интегрирован в поиск и экосистему компании.",
    features: ["ERNIE 5.1", "Мультимодальность", "Кит. рынок"],
    version: "5.1 (2026)",
    pricing: "Free; API",
    russia: "partial",
    url: "https://yiyan.baidu.com",
  },
  {
    id: "doubao",
    name: "Doubao",
    developer: "ByteDance",
    region: "CN",
    category: "llm",
    description:
      "Массовый ИИ-ассистент ByteDance (豆包) — самый популярный ИИ-приложение Китая.",
    features: ["Мультимодальный ассистент", "Генерация изображений", "Кит. рынок"],
    version: "1.5 Pro и новее",
    pricing: "Бесплатно",
    russia: "partial",
    url: "https://doubao.com",
  },
  {
    id: "seedream",
    name: "Seedream",
    developer: "ByteDance",
    region: "CN",
    category: "image",
    description:
      "Генерация и редактирование изображений: 4K, рассуждающая генерация и точная мелкая типографика.",
    features: [
      "4K-вывод",
      "Референсные изображения",
      "Точная типографика (4.5)",
      "Через Dreamina и API",
    ],
    version: "5.0 (2026)",
    pricing: "Через Dreamina / API",
    russia: "vpn",
    url: "https://seed.bytedance.com",
    highlight: true,
  },
  {
    id: "qwen-image",
    name: "Qwen-Image",
    developer: "Alibaba",
    region: "CN",
    category: "image",
    description:
      "Лидер открытой генерации изображений: читаемый текст до 10 px, 12 языков, промпты до 4500 токенов.",
    features: [
      "Открытые веса",
      "Текст на кит. и англ. до 10 px",
      "Дешёвая генерация (~$0.03)",
      "Редактирование в одной архитектуре",
    ],
    version: "3.0 (02.2026)",
    pricing: "Открытые веса; API",
    russia: "native",
    url: "https://huggingface.co/Qwen/Qwen-Image",
    highlight: true,
  },
  {
    id: "hunyuan-image",
    name: "HunyuanImage",
    developer: "Tencent",
    region: "CN",
    category: "image",
    description:
      "Крупнейшая открытая image-модель: 80B MoE с фотореализмом и текстом на двух языках.",
    features: ["80B MoE", "До 1536 px", "Открытая", "Self-hosting"],
    version: "3.0 (2025)",
    pricing: "Открытая",
    russia: "local",
    url: "https://github.com/Tencent-Hunyuan",
  },
  {
    id: "kling",
    name: "Kling AI",
    developer: "Kuaishou",
    region: "CN",
    category: "video",
    description:
      "Один из лучших видеогенераторов мира: реалистичное движение, звук, международная версия сайта.",
    features: [
      "Топ мировых рейтингов",
      "Реалистичная физика движения",
      "Звук в видео",
      "Free ~66 кредитов/день",
    ],
    version: "4.0 (2026)",
    pricing: "Free-кредиты; подписка",
    russia: "vpn",
    url: "https://klingai.com",
    highlight: true,
  },
  {
    id: "seedance",
    name: "Seedance",
    developer: "ByteDance",
    region: "CN",
    category: "video",
    description:
      "Видеогенерация ByteDance: ролики 4–30 секунд с нативным звуком, до 4K и мультишотностью.",
    features: [
      "4–30 сек за одну генерацию",
      "Звук по умолчанию",
      "До 9 изображений-референсов",
      "720p / 1080p / 4K",
    ],
    version: "2.5 (07.2026)",
    pricing: "Через Dreamina / API",
    russia: "vpn",
    url: "https://seed.bytedance.com",
    highlight: true,
  },
  {
    id: "hailuo",
    name: "Hailuo AI",
    developer: "MiniMax",
    region: "CN",
    category: "video",
    description:
      "Видеомодель H3: нативные 2K со стереозвуком, мультишотные сцены и диалоги на 11 языках.",
    features: [
      "5–15 сек в 2K",
      "Стереозвук",
      "Диалоги на 11 языках",
      "Управление камерой",
    ],
    version: "H3 (2026)",
    pricing: "Free (watermark); подписка",
    russia: "vpn",
    url: "https://hailuoai.com",
  },
  {
    id: "vidu",
    name: "Vidu",
    developer: "Shengshu",
    region: "CN",
    category: "video",
    description:
      "Видеоплатформа со звуком (Q4) и первой real-time интерактивной моделью S1 — управление персонажем голосом.",
    features: ["Нативный звук (Q4)", "Real-time генерация (S1)", "Бесконечная длительность"],
    version: "Q4 / S1 (2026)",
    pricing: "Free; подписка",
    russia: "vpn",
    url: "https://vidu.com",
  },
  {
    id: "pixverse",
    name: "PixVerse",
    developer: "AIsphere",
    region: "CN",
    category: "video",
    description:
      "Быстрая генерация клипов и стилизованных анимаций; конкурирует с флагманами по цене.",
    features: ["Клипы и анимации", "Стили и эффекты", "Free-тир"],
    version: "V5+ (2026)",
    pricing: "Free; подписка",
    russia: "vpn",
    url: "https://pixverse.ai",
  },
  {
    id: "minimax-music",
    name: "MiniMax Music",
    developer: "MiniMax",
    region: "CN",
    category: "music",
    description:
      "Генерация полных треков с вокалом и хором до 5 минут за один запуск.",
    features: ["Вокал и хор", "Треки до 5 мин", "Покадровая композиция"],
    version: "Music 3 (2026)",
    pricing: "Подписка / API",
    russia: "vpn",
    url: "https://minimax.io",
  },
  {
    id: "minimax-audio",
    name: "MiniMax Audio",
    developer: "MiniMax",
    region: "CN",
    category: "voice",
    description:
      "TTS и клонирование голоса студийного качества; Speech 2.5 — один из лучших голосовых движков.",
    features: ["Клонирование голоса", "Мультиязычность", "API"],
    version: "Speech 2.5",
    pricing: "Freemium; API",
    russia: "vpn",
    url: "https://minimax.io",
  },
  {
    id: "tripo",
    name: "Tripo",
    developer: "VAST",
    region: "CN",
    category: "3d",
    description:
      "Генерация 3D из текста и изображения: game-ready меши и детальные hero-ассеты.",
    features: ["Text/Image-to-3D", "Game-ready меши", "H3.1 — hero-ассеты"],
    version: "3.1 / H3.1 (2026)",
    pricing: "Free-кредиты; подписка",
    russia: "vpn",
    url: "https://tripo3d.ai",
  },
  {
    id: "jimeng",
    name: "Jimeng / Dreamina",
    developer: "ByteDance",
    region: "CN",
    category: "platform",
    description:
      "Потребительская платформа ByteDance (即梦): изображения и видео на моделях Seedream/Seedance с ежедневными бесплатными кредитами.",
    features: [
      "Модели Seedream и Seedance",
      "Ежедневные бесплатные кредиты",
      "Междунар. версия Dreamina",
    ],
    pricing: "Free-кредиты; ~$18/мес",
    russia: "vpn",
    url: "https://dreamina.capcut.com",
  },

  /* ===== Open-source ===== */
  {
    id: "comfyui",
    name: "ComfyUI",
    developer: "Comfy Org",
    region: "OSS",
    category: "platform",
    description:
      "Нодовая среда локальной генерации — де-факто стандарт для пайплайнов изображений и видео.",
    features: [
      "Нодовые пайплайны",
      "Wan, FLUX, Hunyuan — всё в одном",
      "App View и NVFP4 (2026)",
      "GPL-3.0",
    ],
    pricing: "Бесплатно (GPL-3.0)",
    russia: "local",
    url: "https://github.com/comfyanonymous/ComfyUI",
    highlight: true,
  },
  {
    id: "flux-dev",
    name: "FLUX.1/2 [dev]",
    developer: "Black Forest Labs",
    region: "OSS",
    category: "image",
    description:
      "Эталон качества среди открытых image-моделей; веса некоммерческие — коммерция через лицензию BFL.",
    features: ["12B / 32B версии", "Точный текст", "LoRA-экосистема"],
    pricing: "Открытые веса (некомм.)",
    russia: "local",
    url: "https://huggingface.co/black-forest-labs",
  },
  {
    id: "sdxl",
    name: "SDXL / SD 3.5",
    developer: "Stability AI",
    region: "OSS",
    category: "image",
    description:
      "Классика открытой генерации с огромной экосистемой LoRA и ControlNet.",
    features: ["LoRA и ControlNet", "Лёгкие требования", "Community-лицензия"],
    pricing: "Бесплатно (Community)",
    russia: "local",
    url: "https://huggingface.co/stabilityai",
  },
  {
    id: "wan",
    name: "Wan 2.2",
    developer: "Alibaba",
    region: "OSS",
    category: "video",
    description:
      "Лучшая открытая видеомодель для коммерции: лицензия Apache 2.0, звук в версиях 2.5/3.0 (через API).",
    features: [
      "Apache 2.0 — можно в коммерцию",
      "Text/Image-to-video",
      "Интеграция в ComfyUI",
    ],
    version: "2.2 (2025–2026)",
    pricing: "Бесплатно (Apache-2.0)",
    russia: "local",
    url: "https://github.com/Wan-Video",
    highlight: true,
  },
  {
    id: "hunyuan-video",
    name: "HunyuanVideo",
    developer: "Tencent",
    region: "OSS",
    category: "video",
    description:
      "Открытая видеомодель Tencent, конкурирующая с флагманами на средних GPU.",
    features: ["Открытая", "Средние GPU", "Экосистема Hunyuan (image, 3D)"],
    version: "1.5",
    pricing: "Открытая (community-лицензия)",
    russia: "local",
    url: "https://github.com/Tencent-Hunyuan",
  },
  {
    id: "ltx",
    name: "LTX-Video",
    developer: "Lightricks",
    region: "OSS",
    category: "video",
    description:
      "Быстрая открытая видеомодель: LTX-2.5 генерирует 720p на GPU с ~16 ГБ VRAM.",
    features: ["720p на 16 ГБ VRAM", "Скорость", "Открытые веса"],
    version: "2.5 (2026)",
    pricing: "Открытые веса",
    russia: "local",
    url: "https://ltx.io",
  },
  {
    id: "ace-step",
    name: "ACE-Step",
    developer: "ACE Studio + StepFun",
    region: "OSS",
    category: "music",
    description:
      "Главная открытая музыкальная модель: качество «около Suno» на потребительском железе, лицензия MIT.",
    features: [
      "Вокал и инструментал",
      "Фиксация BPM и тональности",
      "Работает на Mac/AMD/Intel/CUDA",
      "MIT — можно в коммерцию",
    ],
    version: "1.5 (01.2026)",
    pricing: "Бесплатно (MIT)",
    russia: "local",
    url: "https://github.com/ace-step/ACE-Step-1.5",
    highlight: true,
  },
  {
    id: "stable-audio",
    name: "Stable Audio",
    developer: "Stability AI",
    region: "OSS",
    category: "music",
    description:
      "Открытые аудиомодели: музыка и звуковые эффекты до ~6 минут на лицензионных данных.",
    features: ["Музыка и SFX", "До ~6 минут", "Открытые веса"],
    version: "3.0 (05.2026)",
    pricing: "Открытые веса",
    russia: "local",
    url: "https://stability.ai",
  },
  {
    id: "mmaudio",
    name: "MMAudio",
    developer: "Открытый проект",
    region: "OSS",
    category: "music",
    description:
      "Генерация Foley-звука и озвучки под готовое видео (video-to-audio).",
    features: ["Video-to-audio", "Синхронизация со сценой", "~6 ГБ модель"],
    pricing: "Открытая (research)",
    russia: "local",
    url: "https://github.com/hkchengrex/MMAudio",
  },
  {
    id: "whisper",
    name: "Whisper",
    developer: "OpenAI",
    region: "OSS",
    category: "voice",
    description:
      "Безальтернативный стандарт локального распознавания речи: 99+ языков, лицензия MIT.",
    features: ["99+ языков", "Субтитры и транскрипты", "v3-turbo — в 8 раз быстрее"],
    version: "large-v3-turbo",
    pricing: "Бесплатно (MIT)",
    russia: "local",
    url: "https://github.com/openai/whisper",
    highlight: true,
  },
  {
    id: "chatterbox",
    name: "Chatterbox",
    developer: "Resemble AI",
    region: "OSS",
    category: "voice",
    description:
      "Продакшен-TTS с эмоциями и контролем темпа; лицензия MIT — можно в коммерцию.",
    features: ["Эмоции", "Клонирование", "MIT"],
    pricing: "Бесплатно (MIT)",
    russia: "local",
    url: "https://github.com/resemble-ai/chatterbox",
  },
  {
    id: "gpt-sovits",
    name: "GPT-SoVITS",
    developer: "RVC-Boss",
    region: "OSS",
    category: "voice",
    description:
      "Клонирование голоса с 5 секунд аудио; популярен для дубляжа (кит/англ/яп/кор).",
    features: ["Клон с 5 сек", "Малоязычный фокус", "MIT"],
    version: "v4",
    pricing: "Бесплатно (MIT)",
    russia: "local",
    url: "https://github.com/RVC-Boss/GPT-SoVITS",
  },
  {
    id: "f5-tts",
    name: "F5-TTS",
    developer: "SWivid",
    region: "OSS",
    category: "voice",
    description:
      "Быстрый и качественный открытый TTS; работает на 3–8 ГБ VRAM (некомм. лицензия).",
    features: ["3–8 ГБ VRAM", "Клонирование", "CC-BY-NC"],
    pricing: "Бесплатно (CC-BY-NC)",
    russia: "local",
    url: "https://github.com/SWivid/F5-TTS",
  },
  {
    id: "ollama",
    name: "Ollama",
    developer: "Ollama",
    region: "OSS",
    category: "platform",
    description:
      "Локальный запуск LLM одной командой: Qwen, Llama, Gemma, DeepSeek — без облака и блокировок.",
    features: ["Одна команда — модель работает", "OpenAI-совместимый API", "MIT"],
    pricing: "Бесплатно (MIT)",
    russia: "local",
    url: "https://ollama.com",
    highlight: true,
  },
];

/* ---------------- Селекторы ---------------- */

/** Слаг региона в URL (роут: /tools/:region). */
export const REGION_SLUG: Record<Region, string> = {
  RU: "russia",
  CN: "china",
  INTL: "international",
  OSS: "opensource",
};

export const regionPath = (region: Region) => `/tools/${REGION_SLUG[region]}`;

export const byRegion = (region: Region) => tools.filter((t) => t.region === region);

export const highlights = () => tools.filter((t) => t.highlight);

export const countByRegion = (region: Region) => byRegion(region).length;
