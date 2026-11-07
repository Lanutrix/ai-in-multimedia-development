# Российские ИИ-сервисы для мультимедиа

> Дата проверки: **2026-11-06**. Метод: 15 веб-поисков + официальные сайты (отчёт исследовательского агента).
> Главный плюс для практики: всё работает из России без VPN и оплачивается рублями.

## Сводка по отрасли (2025–2026)

- **От демо к продакшену:** рынок перешёл от «догоняющих демо» к промышленным мультимодальным продуктам. Ключевой сдвиг — **генерация видео со звуком**: GigaChat (Сбер) генерирует видео со звуком в Full HD бесплатно, Kandinsky 6.0 Image/Video встроены в чат без лимитов.
- **Агентизация:** Яндекс переупаковал YandexGPT в «Алису AI» с пользовательскими ИИ-агентами (28.10.2025); МТС выпустила Cotype Pro 2.5 с агентными возможностями; Сбер развивает агентный фреймворк GigaChain (интеграция с Deep Agents, 08.2026).
- **Гибриды и агрегаторы:** в музыке и дубляже чисто российских моделей мало — нишу заняли локализованные продукты (ERA2 Music на движке Suno, SONATA) и рублёвые агрегаторы без VPN (GPTunneL, Syntx.ai, Umnik.ai, Gerwin AI, APIHOST).
- **Уровень зрелости:** текст и изображения — зрелые; видео и музыка — ранние/средние; корпоративные платформы — активно развиваются. В сложных сценах российские видеомодели уступают Kling/Veo, но для соцсетей их достаточно.

## Каталог

| Сервис | Разработчик | Категория | Версия (дата) | Доступ | URL |
|---|---|---|---|---|---|
| GigaChat | Сбер | LLM + мультимедиа | 2.0 / 2 Max (13.03.2025); API-обновления 10.2026 | Бесплатно с лимитами; API от 1950 ₽/3 млн ток. | giga.chat |
| Kandinsky | Сбер | Изображения + видео | 6.0 Image/Video (28.04.2026) | Бесплатно в GigaChat, без лимитов; open-source | github.com/ai-forever |
| Алиса AI (экс-YandexGPT) | Яндекс | LLM + изображения + видео | Alice AI (28.10.2025) | Бесплатно; Алиса Плюс 199 ₽/мес | alice.yandex.ru |
| Шедеврум / YandexART | Яндекс | Изображения + видео | YandexART 2.5 / 2.5 Pro (2026) | Бесплатно | shedevrum.ai |
| Cotype | МТС (MWS AI) | LLM для бизнеса | Cotype Pro 2.5 (10.2025) | B2B: подписка, on-premise | cotype.ru |
| SaluteSpeech | Сбер | TTS/STT | обновления 2025–2026 | API, платные пакеты | salutespeech.com |
| Yandex SpeechKit | Яндекс | TTS/STT/агенты | API v3; Playground (06.2025) | Pay-as-you-go | yandex.cloud/services/speechkit |
| ERA2 Music | ERA2* | Музыка/песни | движок Suno v4/v6, рус. адаптация | Фримиум, без регистрации | music.era2.ai |
| SONATA | —* | Музыка (рус. вокал) | на базе SUNO 5.5* | Фримиум | — |
| iVox Studio | iVox* | Озвучка/дубляж | актуальна в 2026* | Подписка | — |
| Genve.ai | Genve* | Проф. ИИ-дубляж | —* | B2B/подписка | genve.ai |
| GenSolution AI | GenSolution | Аватары/двойники | —* | B2B, под ключ | gensolution.ru |
| Slidy AI | Slidy | ИИ-презентации | актуальна в 2026 | Фримиум | slidy.ai |
| VK (ИИ-функции) | VK | Поиск + креативы | ИИ-поиск (07.2026); нейрокреативы (06.2025) | Встроено | vk.com |
| Нейрошлюз РТК | Ростелеком | Корп. платформа ИИ | продвижение в 2026 (~25 моделей) | Корпоративный | rt.ru |
| Yandex Cloud AI Studio | Яндекс | Облачная AI-платформа | обновление 09.2025 (no-code агенты) | Cloud, pay-as-you-go | aistudio.yandex.ru |
| GigaChain | Сбер | SDK/агентный фреймворк | Deep Agents (08.2026) | Open source + GigaChat API | developers.sber.ru |

\* — «по последним доступным данным» (версия не подтверждена официально).

## Детальные карточки

### GigaChat (Сбер) — текст, аудио, видео
- **Возможности:** тексты и код на русском; **генерация видео со звуком в Full HD бесплатно**; прямая работа с аудио (GigaChat 2.0 понимает аудиовход без транскрибации); генерация песен и музыки; интеграция в мессенджер Max; веб, Telegram-бот, API.
- **Версии:** GigaChat 2.0 (13.03.2025); флагман **GigaChat 2 Max** (контекст 128K, до 8K на выход).
- **Доступ:** бесплатно с лимитами; API для физлиц — 3 млн токенов за 1950 ₽/мес; для бизнеса цены снижены втрое.

### Kandinsky (Сбер) — изображения и видео
- **Возможности:** генерация и редактирование изображений; видеогенерация со звуком (6.0 Video); ~20 готовых стилей; без лимитов.
- **Версии:** **Kandinsky 6.0 Image** (28.04.2026) — в GigaChat, бесплатно и быстрее прежних; Kandinsky 5.0; Kandinsky 4.0 (12.2024) — HD-видео до 12 сек; Kandinsky Video 1.1 — бета.
- **Доступ:** бесплатно через GigaChat; open-source веса на GitHub (ai-forever); API.

### Алиса AI / YandexGPT (Яндекс)
- **Возможности:** тексты; генерация изображений; «оживление» фото (фото → MP4); сборка простых видеороликов голосом; **пользовательские ИИ-агенты** (новшество 28.10.2025); интеграция в Станции и экосистему.
- **Версии:** бренд YandexGPT заменён на **Alice AI** (28.10.2025); YandexGPT 4 (10.2024); YandexGPT 5 Pro — по последним данным. Охват ~59 млн польз./мес.
- **Доступ:** бесплатно; «Алиса Плюс» 199 ₽/мес; «Буст» 100 ₽; «Алиса Про» от 100 ₽/мес (Pro+ 499–599 ₽).

### Шедеврум / YandexART (Яндекс)
- **Возможности:** text-to-image и text-to-video; клипы из видео, изображений и Фильтрумов; гибридная архитектура (свёрточная сеть + трансформер); движение камеры и объектов.
- **Версии:** YandexART 2.5 / 2.5 Pro (2026); обновление приложения 28.10.2026.
- **Доступ:** бесплатно; для бизнеса — платно; также внутри Алисы AI.

### Cotype (МТС / MWS AI) — корпоративная LLM
- **Возможности:** тексты, поиск и анализ документов; **агентные ИИ-помощники**; 100+ корпоративных сценариев; **on-premise**-развёртывание; Cotype Nano; ИИ-ассистент разработчика Kodify 2; речевая аналитика.
- **Версия:** Cotype Pro 2.5 (10.2025, Forbes). Инвестиции МТС в MWS AI — 1 млрд ₽ (06.2025).

### SaluteSpeech (Сбер) и Yandex SpeechKit — речь
- **SaluteSpeech:** TTS (много голосов), STT (включая потоковое), асинхронная обработка длинных аудио, интеграция в телефонию; API с пакетами, есть тестовая квота.
- **SpeechKit:** распознавание на 15+ языках; **Brand Voice** (уникальный голос бренда); SpeechKit Hybrid для колл-центров; **AI Speech** — конструктор голосовых агентов; API v3, Playground (06.2025).

### ERA2 Music и ниша музыки
- **ERA2 Music** — трек с вокалом, текстом и аранжировкой за минуту по описанию на русском; шаблоны под поводы; генерация без регистрации. Работает на движке **Suno v4/v6** с русской адаптацией (по обзорам). Родственный **ERA2 Voice** — клонирование голоса.
- **SONATA** — на базе SUNO 5.5 (по данным подборок). Чисто российских музыкальных моделей на рынке почти нет.

### ИИ-дубляж: iVox Studio, Genve.ai, VoxDub
- **iVox Studio** — озвучка перевода на 70 языках из браузера.
- **Genve.ai** — профдубляж: транскрибация → перевод → клонированный голос диктора.
- **VoxDub** — мобильный дубляж (клон голоса, 40+ языков); **APIHOST** — API-озвучка на российских моделях.

### Аватары и презентации
- **GenSolution AI** — говорящие 3D-аватары для бизнеса (B2B, под ключ).
- **Slidy AI** и ниша ИИ-презентаций (WebAsk, 2026): Slidy, Presentacium, PREZA, Slider AI, Prezka, Prezmo — PPTX/PDF, подписки от сотен рублей. Стимул — недоступность Synthesia из РФ.

### Корпоративные платформы
- **Yandex Cloud AI Studio** — единая среда агентов и генеративных моделей: Model Gallery, GPU, no-code-агенты (09.2025), Python SDK; анонс Stackland (on-premises).
- **GigaChain (Сбер)** — открытый SDK (LangChain/LangGraph/LangChain4j), MCP-серверы, интеграция с Deep Agents (08.2026); langchain-gigachat — в топ-2% PyPI.
- **Также:** T-Bank AI Research (LLM речевой аналитики, лаборатория Omut AI, ИИ-центр в Китае), Нейрошлюз РТК (~25 нейросетей в одном окне), VK (ИИ-поиск 07.2026, нейрокреативы в рекламе).

## Выводы для проекта

1. Для учебного/коммерческого мультимедиа-продукта в РФ базовый стек **без VPN и в рублях**: GigaChat (текст+видео+музыка) + Kandinsky/Шедеврум (изображения) + SaluteSpeech/SpeechKit (озвучка) + ERA2 Music (песни).
2. Российские видеомодели годятся для короткого контента; для кинематографичного качества — китайские (Kling, Seedance, Hailuo) через международные версии или агрегаторы.
3. Классические TTS (SaluteSpeech/SpeechKit) — зрелые API для озвучки в продуктах; клонирование голоса — через ERA2 Voice / зарубежные аналоги.

## Источники

- [РБК — запуск Алисы AI](https://www.rbc.ru/technology_and_media/28/10/2025/68ffa3bc9a7947eb5a664902) · [Wikipedia — Alice AI](https://ru.wikipedia.org/wiki/Alice_AI) · [alice.yandex.ru](https://alice.yandex.ru)
- [Kandinsky 6.0 в GigaChat — vc.ru](https://vc.ru/ai/3041620-kandinsky-6-0-v-gigachate-risuy-besplatno-i-bez-limitov) · [СберПресс — Kandinsky 4.1](https://www.sberbank.ru/ru/sberpress/tekhnologii/article?newsID=3f732645-63b1-4961-9c44-ecdd37153dcf)
- [Шедеврум](https://shedevrum.ai) · [Яндекс Практикум — обзор](https://practicum.yandex.ru/blog/neyroset-yandexa-shedevrum-dlya-generacii-izobrazhenii)
- [Forbes — Cotype Pro 2.5](https://www.forbes.ru/tekhnologii/548799-mts-obnovila-svou-bol-suu-azykovuu-model-cotype-pro-2-5-dla-sozdania-ii-pomosnikov)
- [SaluteSpeech](https://salutespeech.com) ([changelog](https://developers.sber.ru/docs/ru/salutespeech/changelog)) · [Yandex SpeechKit](https://yandex.cloud/ru/services/speechkit)
- [Yandex Cloud AI Studio](https://aistudio.yandex.ru) · [GigaChain](https://developers.sber.ru/docs/ru/gigachain/overview)
- [ERA2 Music](https://music.era2.ai) · [Топ-5 музыкальных нейросетей — vc.ru](https://vc.ru/services/2678525-top-5-rossiyskih-neyrosetey-dlya-generatsii-muzyki)
- [T-Bank AI Research](https://ai.tbank.ru) · [Нейрошлюз РТК](https://www.company.rt.ru/press/news/d473880)
- [Аватары/дубляж — подборки vc.ru](https://vc.ru/ai/3096931-tsifrovoy-dvoynik-i-ii-avatar-luchshiye-neyroseti) · [WebAsk — ИИ-презентации 2026](https://webask.ru)
- [Топ-13 российских нейросетей для видео — vc.ru](https://vc.ru/eksperts/2758567-top-13-rossijskih-nejrosetej-dlja-generacii-video)
