import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Box,
  Brain,
  Clapperboard,
  Image as ImageIcon,
  Languages,
  Lightbulb,
  Mic,
  Music,
  Palette,
  PenLine,
  TestTube2,
  Video,
  Waypoints,
  Zap,
  Cpu,
  Globe,
  ShieldCheck,
} from "lucide-react";

/* ============ /basics — история ============ */

export interface HistoryItem {
  year: string;
  title: string;
  text: string;
}

export const history: HistoryItem[] = [
  {
    year: "2014",
    title: "GAN — машины учатся «рисовать»",
    text: "Генеративно-состязательные сети Иэна Гудфеллоу: две сети соревнуются, и одна научается создавать изображения, неотличимые от реальных.",
  },
  {
    year: "2017",
    title: "Трансформер — революция внимания",
    text: "Статья «Attention Is All You Need» задаёт архитектуру трансформера — основу всех современных языковых и мультимодальных моделей.",
  },
  {
    year: "2020–2022",
    title: "Диффузионные модели",
    text: "DDPM, DALL-E 2, Imagen и Stable Diffusion делают генерацию изображений массовой: текст → картинка за секунды, веса — в открытый доступ.",
  },
  {
    year: "2022",
    title: "ChatGPT меняет всё",
    text: "Разговорный ИИ становится массовым продуктом: 100 млн пользователей за два месяца. Старт глобальной гонки генеративного ИИ.",
  },
  {
    year: "2023–2024",
    title: "Мультимодальность",
    text: "GPT-4V видит изображения, Sora показывает текст→видео, китайский Kling и Suno с музыкой выходят на рынок. Модели учатся видеть, слышать и говорить.",
  },
  {
    year: "2025–2026",
    title: "Зрелость: звук, агенты, открытые модели",
    text: "Видео со звуком по умолчанию (Veo 3.1, Seedance 2.5, Kling 4.0), GPT-6, закрытие Sora, агентные фреймворки и китайские открытые модели во главе рейтингов.",
  },
];

/* ============ /basics — классы моделей ============ */

export interface ModelClass {
  icon: LucideIcon;
  title: string;
  text: string;
  examples: string;
}

export const modelClasses: ModelClass[] = [
  {
    icon: Bot,
    title: "LLM — язык и логика",
    text: "Трансформеры, обученные на тексте. Пишут сценарии, код, ТЗ, ведут диалог, анализируют. Основа «понимания» в мультимодальных системах.",
    examples: "GPT-6 · Claude · GigaChat · DeepSeek · Qwen",
  },
  {
    icon: ImageIcon,
    title: "Диффузионные модели — изображения",
    text: "Учатся « denoising»: превращают шум в картинку, управляемую текстом промпта. Сегодня — с рассуждением и точным текстом на изображении.",
    examples: "Midjourney V8 · FLUX · Kandinsky 6.0 · Seedream 5.0",
  },
  {
    icon: Video,
    title: "Генерация видео",
    text: "Диффузия в латентном пространстве видео + трансформер: текст→видео и image-to-video, в 2026 — сразу со звуком и мультишотностью.",
    examples: "Veo 3.1 · Kling 4.0 · Seedance 2.5 · Wan 2.2",
  },
  {
    icon: Music,
    title: "Аудио: музыка и речь",
    text: "Музыкальные генераторы пишут песни с вокалом; TTS-модели синтезируют речь и клонируют голос по короткой записи.",
    examples: "Suno v6 · ACE-Step · ElevenLabs · SaluteSpeech",
  },
  {
    icon: Box,
    title: "3D-генерация",
    text: "Image-to-3D и text-to-3D создают меши для игр, AR/VR и конфигураторов — то, что раньше занимало недели моделирования.",
    examples: "Tripo · Rodin · Hunyuan3D",
  },
];

/* ============ /basics — ограничения ============ */

export const limitations: { title: string; text: string }[] = [
  {
    title: "Галлюцинации",
    text: "LLM уверенно выдумывают факты и источники. Для продакшена обязателен фактчек — особенно в текстах для публикаций.",
  },
  {
    title: "Консистентность персонажей",
    text: "Одно и то же лицо/объект в разных кадрах — трудная задача. Помогают референсы (Seedance до 9 изображений) и редактирование (Nano Banana).",
  },
  {
    title: "Артефакты и физика",
    text: "Руки, текст на заднем плане, сложные движения камеры. Качество растёт от версии к версии, но финальный кадр всё ещё требует отбора.",
  },
  {
    title: "Понимание контекста",
    text: "Модели слабо проверяют актуальность данных (срез знаний) и локальные реалии; русский промпт — плюс российских моделей.",
  },
];

/* ============ /pipeline — этапы производства ============ */

export interface PipelineStep {
  icon: LucideIcon;
  title: string;
  text: string;
  intl: string;
  ru: string;
  cn: string;
}

export const pipelineSteps: PipelineStep[] = [
  {
    icon: Lightbulb,
    title: "1. Идеация и исследование",
    text: "Мозговой штурм, анализ аудитории и конкурентов, формулировка концепции продукта.",
    intl: "ChatGPT · Gemini · Perplexity",
    ru: "GigaChat · Алиса AI",
    cn: "DeepSeek · Qwen · Kimi",
  },
  {
    icon: PenLine,
    title: "2. Сценарий и копирайтинг",
    text: "Сценарий ролика, тексты лендинга, посты, технические задания.",
    intl: "Claude · ChatGPT",
    ru: "GigaChat 2 Max",
    cn: "Qwen 3.8 Max",
  },
  {
    icon: Palette,
    title: "3. Концепт-арт и раскадровка",
    text: "Визуальный стиль, мудборды, сториборды будущих сцен.",
    intl: "Midjourney V8 · FLUX",
    ru: "Kandinsky 6.0 · Шедеврум",
    cn: "Seedream 5.0 · Qwen-Image 3.0",
  },
  {
    icon: ImageIcon,
    title: "4. Визуальные ассеты",
    text: "Иллюстрации, баннеры, обложки, мокапы интерфейсов.",
    intl: "Firefly · Nano Banana 2.1",
    ru: "Kandinsky 6.0",
    cn: "HunyuanImage 3.0",
  },
  {
    icon: Clapperboard,
    title: "5. Видео и анимация",
    text: "Генерация роликов, оживление статики, апскейл и монтаж.",
    intl: "Veo 3.1 · Runway Gen-4.5 · CapCut",
    ru: "GigaChat видео · Kandinsky Video",
    cn: "Kling 4.0 · Seedance 2.5 · Hailuo H3",
  },
  {
    icon: Music,
    title: "6. Музыка и звук",
    text: "Саундтрек, джинглы, звуковой дизайн, Foley-эффекты.",
    intl: "Suno v6 · Stable Audio",
    ru: "ERA2 Music · GigaChat",
    cn: "MiniMax Music 3",
  },
  {
    icon: Mic,
    title: "7. Речь и дубляж",
    text: "Озвучка, клонирование голоса, переозвучка на другие языки.",
    intl: "ElevenLabs v3 · HeyGen",
    ru: "SaluteSpeech · SpeechKit · Genve",
    cn: "MiniMax Audio · CosyVoice 3",
  },
  {
    icon: Box,
    title: "8. 3D и интерактив",
    text: "Ассеты для игр, AR/VR-сцен, конфигураторов и выставочных стендов.",
    intl: "Meshy · Luma",
    ru: "—",
    cn: "Tripo 3.1 · Rodin · Hunyuan3D",
  },
  {
    icon: Languages,
    title: "9. Локализация",
    text: "Перевод, субтитры, переозвучка под рынки.",
    intl: "ElevenLabs Dubbing · HeyGen",
    ru: "SpeechKit · iVox Studio",
    cn: "Fish Audio",
  },
  {
    icon: TestTube2,
    title: "10. Тестирование и итерации",
    text: "A/B-варианты креативов, правки по фидбеку, метрики.",
    intl: "LLM-аналитика",
    ru: "GigaChat",
    cn: "DeepSeek",
  },
];

/* ============ /cases — связки инструментов ============ */

export interface CaseStack {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  steps: { tool: string; role: string }[];
  note: string;
}

export const caseStacks: CaseStack[] = [
  {
    id: "russia",
    title: "A. Бесплатный русский стек",
    subtitle: "Без VPN, оплата в рублях — минимум барьеров",
    badge: "РФ",
    steps: [
      { tool: "GigaChat", role: "сценарий, тексты, видео со звуком" },
      { tool: "Kandinsky 6.0 / Шедеврум", role: "изображения и анимация" },
      { tool: "SaluteSpeech / SpeechKit", role: "озвучка" },
      { tool: "ERA2 Music", role: "песня и саундтрек" },
      { tool: "CapCut", role: "монтаж" },
    ],
    note: "Стоимость: 0 ₽. Идеален для учебных проектов и быстрого контента для соцсетей.",
  },
  {
    id: "world",
    title: "B. Мировой топ-качество",
    subtitle: "Лучшие результаты каждой категории",
    badge: "Мир",
    steps: [
      { tool: "GPT-6 / Gemini 3", role: "сценарий" },
      { tool: "Midjourney V8", role: "визуальный стиль" },
      { tool: "Veo 3.1 / Kling 4.0", role: "видео" },
      { tool: "Suno v6", role: "музыка" },
      { tool: "ElevenLabs v3", role: "речь и дубляж" },
      { tool: "HeyGen", role: "аватар-ведущий" },
      { tool: "Descript", role: "монтаж" },
    ],
    note: "Стоимость: от ~$100/мес при полном стеке. Требуются VPN и зарубежная карта; Suno и CapCut работают без VPN.",
  },
  {
    id: "china",
    title: "C. Китайский экономный стек",
    subtitle: "80% качества топа за ~30% цены",
    badge: "Китай",
    steps: [
      { tool: "DeepSeek V4 / Qwen 3.8", role: "сценарий (без VPN)" },
      { tool: "Qwen-Image 3.0 / Seedream 5.0", role: "изображения" },
      { tool: "Seedance 2.5 / Hailuo H3", role: "видео" },
      { tool: "MiniMax Music 3", role: "музыка" },
      { tool: "MiniMax Audio", role: "речь" },
      { tool: "Tripo", role: "3D-ассеты" },
    ],
    note: "Чаты — бесплатно без VPN; видеосервисы — через международные версии и посредников оплаты.",
  },
  {
    id: "oss",
    title: "D. Локальный open-source",
    subtitle: "Приватно, бесплатно, автономно — нужен свой GPU",
    badge: "OSS",
    steps: [
      { tool: "Ollama + Qwen3.8-27B", role: "текст локально" },
      { tool: "ComfyUI + FLUX / Wan 2.2", role: "изображения и видео" },
      { tool: "ACE-Step 1.5", role: "музыка (MIT)" },
      { tool: "Chatterbox / F5-TTS + Whisper", role: "речь и субтитры" },
      { tool: "Hunyuan3D", role: "3D" },
    ],
    note: "Стоимость: 0 ₽ + электричество. Полная приватность и никаких блокировок; для коммерции проверять лицензии (Wan — Apache 2.0, ACE-Step — MIT).",
  },
];

/* ============ /ethics ============ */

export interface EthicsSection {
  icon: LucideIcon;
  title: string;
  paragraphs: string[];
}

export const ethicsSections: EthicsSection[] = [
  {
    icon: ShieldCheck,
    title: "Авторское право на ИИ-контент",
    paragraphs: [
      "Подходы различаются: Бюро авторских прав США требует человеческого вклада и не регистрирует чисто ИИ-произведения; ЕС в AI Act (2024) сделал ставку на прозрачность — ИИ-контент нужно помечать; в России правоприменение только формируется, и суды ориентируются на вклад автора в результат.",
      "Музыкальная индустрия показала «лицензионный перелом»: после исков Suno перевыпустила модель v6, обученную на лицензионной музыке (Warner, BMG, Believe), а Udio после урегулирования с Universal свернула прежний сервис. Вывод для продакшена: использовать инструменты с лицензионными данными — безопаснее для бизнеса.",
    ],
  },
  {
    icon: Globe,
    title: "Маркировка ИИ-контента в России",
    paragraphs: [
      "С 1 сентября 2026 года действует Федеральный закон № 243-ФЗ «Об искусственном интеллекте», регулирующий разработку и применение больших фундаментальных моделей.",
      "Обязательная маркировка контента, созданного ИИ, для платформ, ежедневно привлекающих более 500 тысяч пользователей, вступает в силу с 1 марта 2027 года — сервисам дали время на техническую реализацию. Порядок и формат размещения маркировки определяется отдельно.",
      "Практика для авторов уже сейчас: честно указывать использование ИИ в продукте — это и требование платформ, и знак качества.",
    ],
  },
  {
    icon: Brain,
    title: "Дипфейки и ответственность",
    paragraphs: [
      "Технологии клонирования голоса и аватаров удобно использовать в обучении и презентациях — и так же удобно для обмана. Используй клонирование только своего голоса или с явного согласия человека.",
      "Проверяй факты: LLM галлюцинируют. Для публичных материалов — редакторская проверка каждого ключевого утверждения.",
    ],
  },
  {
    icon: Cpu,
    title: "Лицензии моделей",
    paragraphs: [
      "«Открытая» не значит «коммерческая». Wan 2.2 (Apache 2.0), ACE-Step и Chatterbox (MIT), Whisper (MIT) можно использовать в продуктах. FLUX [dev], XTTS-v2, F5-TTS — некоммерческие лицензии: для бизнеса нужна платная лицензия или другой инструмент.",
      "Community-лицензии (Stable Diffusion, Hunyuan) имеют условия по выручке и использованию — читать перед продакшеном.",
    ],
  },
  {
    icon: Waypoints,
    title: "Этичные практики",
    paragraphs: [
      "Прозрачность: указывай, где использован ИИ. Уважение к авторам: не генерируй контент «в стиле живого художника» для коммерции. Данные: не загружай в публичные сервисы личные данные и коммерческую тайну — для чувствительных проектов существует локальный open-source стек.",
    ],
  },
];

/* ============ /trends ============ */

export interface Trend {
  icon: LucideIcon;
  title: string;
  text: string;
  evidence: string;
}

export const trends: Trend[] = [
  {
    icon: Zap,
    title: "Единые мультимодальные модели",
    text: "Одна модель понимает и создаёт текст, изображения, видео и звук — исчезает граница между «чат-ботом» и «генератором».",
    evidence: "GPT-6 · Gemini 3 · Seedream 5.0 (генерация + редактирование)",
  },
  {
    icon: Lightbulb,
    title: "Real-time генерация",
    text: "Видео создаётся не за минуты, а мгновенно — открывает интерактивных персонажей и живые миры.",
    evidence: "Vidu S1 (управление голосом, бесконечная длительность) · Grok Imagine (6 сек за 25 с)",
  },
  {
    icon: Waypoints,
    title: "Агентные пайплайны",
    text: "Из инструментов ИИ превращается в команду агентов: сам декомпозирует задачу, выбирает модели, выполняет.",
    evidence: "GigaChain + Deep Agents · Алиса AI (агенты) · Cotype Pro 2.5 · Pika как хаб моделей",
  },
  {
    icon: Cpu,
    title: "On-device и приватность",
    text: "Флагманское качество уходит на потребительские GPU: генерация без облака, подписок и передачи данных.",
    evidence: "Qwen3.8-27B · Wan 2.2 · ACE-Step 1.5 · LTX-2.5 (16 ГБ VRAM) · ComfyUI",
  },
  {
    icon: Globe,
    title: "Мультиполярность рынка",
    text: "Китай занимает половину топов видео и открытых моделей; Россия закрывает базовый стек своими сервисами; Запад — качество и экосистемы.",
    evidence: "Kling 4.0 · Seedance 2.5 · Qwen-Image · GigaChat · Kandinsky 6.0",
  },
];

/* ============ /about — глоссарий ============ */

export const glossary: { term: string; def: string }[] = [
  { term: "AIGC", def: "AI-Generated Content — контент, созданный ИИ: тексты, изображения, видео, аудио, 3D." },
  { term: "LLM", def: "Large Language Model — большая языковая модель: ядро чат-ботов и текстовых ассистентов." },
  { term: "Диффузионная модель", def: "Модель, создающая изображение/видео из шума, шаг за шагом управляемая текстом промпта." },
  { term: "Промпт", def: "Текстовая инструкция для генеративной модели; качество промпта сильно влияет на результат." },
  { term: "Токен", def: "Единица текста для LLM (≈ слово или часть слова); в токенах считается контекст и цена API." },
  { term: "Мультимодальность", def: "Способность одной модели работать с несколькими типами данных: текстом, изображением, звуком." },
  { term: "Image-to-video", def: "Оживление статичного изображения в видеоролик." },
  { term: "TTS", def: "Text-to-Speech — синтез речи из текста; STT — обратный процесс (распознавание)." },
  { term: "Клонирование голоса", def: "Создание синтетической копии голоса по короткой аудиозаписи." },
  { term: "LoRA", def: "Low-Rank Adaptation — лёгкая дообученная «надстройка» над моделью для стиля/персонажа." },
  { term: "Open-source веса", def: "Публично доступные параметры модели — можно запускать локально; условия использования задаёт лицензия." },
  { term: "VRAM", def: "Объём видеопамяти GPU; определяет, какие модели реально запустить локально." },
  { term: "Агент", def: "ИИ-система, которая сама декомпозирует задачу и выполняет шаги инструментами." },
  { term: "Foley", def: "Звуковое оформление сцены (шаги, шелест); ИИ-модели типа MMAudio генерируют его автоматически." },
];

/* ============ О проекте ============ */

export const aboutFacts = [
  { label: "Сервисов в каталоге", value: "62" },
  { label: "Региона исследования", value: "4" },
  { label: "Категорий инструментов", value: "9" },
  { label: "Дата проверки данных", value: "06.11.2026" },
];

export const sourceGroups: { title: string; items: string[] }[] = [
  {
    title: "Официальные источники",
    items: [
      "developers.sber.ru — документация GigaChat, Kandinsky, SaluteSpeech, GigaChain",
      "yandex.cloud, aistudio.yandex.ru — SpeechKit, AI Studio",
      "seed.bytedance.com — Seedream, Seedance",
      "huggingface.co, github.com — открытые веса моделей",
      "help.openai.com, runway.com, bfl.ai, x.ai — релизы западных моделей",
    ],
  },
  {
    title: "СМИ и аналитика",
    items: [
      "РБК, Forbes, Reuters, TechCrunch — релизы и сделки (Алиса AI, Cotype Pro 2.5, Suno v6)",
      "vc.ru, Habr, Т—Ж, Яндекс Практикум — обзоры российских нейросетей",
      "Klerk.ru, platforms.su — 243-ФЗ «Об искусственном интеллекте»",
    ],
  },
  {
    title: "Полные списки источников",
    items: [
      "docs/research/russia.md — 19 ссылок",
      "docs/research/china.md — 12 ссылок",
      "docs/research/international.md — 15 ссылок",
      "docs/research/opensource.md — ссылки на репозитории и лицензии",
    ],
  },
];
