# Международные (западные) ИИ-сервисы для мультимедиа

> Дата проверки: **2026-11-06**. Метод: веб-поиск + официальные сайты/документация.
> Формат согласован со схемой `Tool` из [website-blueprint.md](../website-blueprint.md).

## Сводка о рынке (конец 2026)

- **Видео:** OpenAI свернула Sora (приложение закрыто 26.04.2026, API отключён 24.09.2026 — перераспределение вычислительных ресурсов). Лидер сегмента — Google **Veo 3.1** (нативный звук, ~$24 за минуту), за ним Runway **Gen-4.5** и китайские Kling 4.0 / Seedance 2.5. Растут мульти-модельные агрегаторы (Higgsfield, «новый Pika»).
- **Музыка:** «лицензионный перелом» — Suno **v6** обучена на лицензионной музыке (сделки с Warner, BMG, Believe); Udio после иска UMG свернула прежний сервис.
- **LLM:** OpenAI **GPT-6 «Astra»** (03.09.2026) + быстрые Sol/Luna; Google **Gemini 3** (актуальная диалоговая 3.8 Live, сент. 2026); Anthropic — Claude Opus 4.5 (24.11.2025) и линейка нового поколения (по последним данным Sonnet 5/Opus 5); xAI — **Grok 4.7**.
- **Изображения:** тренд — «рассуждающая» генерация с точным текстом: **Nano Banana 2.1** (окт. 2026), **Midjourney V8/V8.1** (нативный 2K), **FLUX.2 / FLUX 3 Klein** с открытыми весами, Ideogram 4.x, мульти-модельный Adobe Firefly (30+ сторонних моделей).

## Каталог

| Сервис | Разработчик | Категория | Версия (дата) | Цена | Доступ из РФ | URL |
|---|---|---|---|---|---|---|
| ChatGPT | OpenAI | LLM, изображения | GPT-6 Astra (09.2026); Sol/Luna (09.2026) | Free; Plus $20; Pro; API | Нет (двойная блокировка с 09.2026); VPN/агрегаторы | chatgpt.com |
| Gemini | Google | LLM, image, video | Gemini 3 / 3.8 Live (09.2026); Veo 3.1; Nano Banana 2.1 | Free; AI Pro ~$20; Ultra | Нет (гео-блок); VPN | gemini.google.com |
| Claude | Anthropic | LLM | Opus 4.5 (11.2025); Sonnet 5/Opus 5* | Free; Pro $20; API | Нет (гео-блок); VPN/агрегаторы | claude.ai |
| Copilot | Microsoft | LLM, офис | база GPT-5.6 (07.2026) | Free; M365 Premium | Ограниченно (продажи в РФ приостановлены) | copilot.microsoft.com |
| Grok | xAI | LLM, image, video | Grok 4.7 (09.2026); Imagine Video 1.5 (06.2026) | Free (базово); X Premium+; API | Частично (сайт открывается) | x.ai |
| Perplexity | Perplexity AI | Поиск/LLM | Computer (интеграция M365, 04.2026) | Free; Pro $20 | Сайт открывается; оплата — посредники | perplexity.ai |
| Midjourney | Midjourney | Изображения, video | V8/V8.1 (04.2026), нативный 2K | $10–120/мес | VPN; оплата — виртуальные карты | midjourney.com |
| FLUX | Black Forest Labs | Изображения | FLUX.2 [pro] (11.2025); FLUX 3 Klein (10.2026) | По API (fal.ai и др.) | Через посредников-API; веса открыты | bfl.ai |
| Adobe Firefly | Adobe | Изображения, video, дизайн | Image Model 2 (01.2026); Custom Models (10.2026) | Free-лимиты; от ~$10/мес | Нет (Adobe ушла из РФ в 2022) | firefly.adobe.com |
| Ideogram | Ideogram AI | Изображения | 4.0 open-weight (06.2026); флагман 4.5 | Free; от $15/мес | Через VPN | ideogram.ai |
| Krea | Krea AI | Мульти-хаб | Krea 3 (10.2026) | Free; от ~$10/мес | Через VPN | krea.ai |
| Leonardo | Leonardo.Ai | Изображения/видео-хаб | Nano Banana 2.1 на платформе (10.2026) | Free 150 ток./день; от $12/мес | Через VPN | leonardo.ai |
| Sora | OpenAI | Видео | **Закрыт** (04.2026 / API 09.2026) | — | Неактуально | — |
| Runway | Runway AI | Видео | Gen-4.5 | Free 125 кр.; $15–95/мес | VPN; оплата — посредники | runway.com |
| Luma | Luma Labs | Видео | Ray3.2 (06.2026); Luma Scenes (08.2026) | От $30/мес | VPN | lumalabs.ai |
| Pika | Pika Labs | Видео/мульти-хаб | Рестарт 17.09.2026: Seedance 2.5, Kling 4.0, Veo 3.1, Wan 3.0 | Free; платные тарифы | Через VPN | pika.art |
| Higgsfield | Higgsfield AI | Видео-агрегатор | Seedance 2.5, Kling 4.0 и др. | $5–29/мес | Через VPN | higgsfield.ai |
| Suno | Suno Inc. | Музыка | v6 (09.2026, лицензионная); Studio 2.0 (08.2026) | Free; Pro $10/мес | **Работает без VPN**; оплата — посредники | suno.com |
| Udio | Udio (Unum) | Музыка | Свёрнут после сделки с UMG (загрузки отключены 10.2025) | — | Неактуально | udio.com |
| ElevenLabs | ElevenLabs | TTS, музыка, дубляж | Eleven v3 (+v4*); Eleven Music | Free 10k кр.; $6–990/мес | VPN; оплата — посредники | elevenlabs.io |
| OpenAI TTS | OpenAI | Речь/STT | gpt-realtime-2.1 (2026) | По API | VPN | platform.openai.com |
| HeyGen | HeyGen | Аватары | Avatar IV/V (2026) | Free 3 видео/мес; $29–149/мес | VPN | heygen.com |
| Synthesia | Synthesia | Аватары | Платформа 2026, кастом-аватары со Starter | Free; $29/мес | VPN | synthesia.io |
| D-ID | D-ID | Аватары/агенты | V4 Expressive Visual Agents (03.2026) | От ~$5.90/мес | VPN | d-id.com |
| Descript | Descript | Монтаж/подкасты | Платформа 2026 (eye contact, ремонт реплик) | Free; ~$15–24/мес | VPN | descript.com |
| CapCut | ByteDance | Монтаж | AI-генерация на моделях ByteDance (2026) | Free; Pro | **Работает в РФ без VPN**; Pro — посредники | capcut.com |
| Topaz | Topaz Labs | Апскейл/реставрация | «Next-Gen» (04.2026): Bloom, Starlight | Разовые/подписка | VPN | topazlabs.com |

\* — «по последним доступным данным» (единичные источники, без официального подтверждения).

## Детальные карточки

### ChatGPT (OpenAI) — LLM, изображения, голос
- **Версии:** GPT-6 «Astra» (03.09.2026, первый уровень «Critical» в системной карте); быстрые GPT-6 Sol/Luna (22.09.2026). GPT-5.1/5.5 выведены из чата.
- **Возможности:** текст, код, генерация изображений (GPT Image), голосовой режим, поиск.
- **Цены:** Free / Plus $20 / Pro / Business, API по токенам.
- **Из РФ:** двойная блокировка — сам OpenAI не обслуживает РФ, с сентября 2026 блокировка и со стороны российских регуляторов (обход через DNS не работает); VPN-IP распознаются. Нужны «чистые» residential-IP или агрегаторы.

### Gemini (Google) — мультимодальная экосистема
- **Версии:** Gemini 3 (флагман), Gemini 3.8 Live (15.09.2026) для живых диалогов.
- **Внутри:** **Veo 3.1** — видео до 8 сек, до 4K, нативный звук (free-уровень API закрыт 22.10.2026); **Nano Banana 2.1** (10.2026, на Gemini 3.6 Flash) — редактирование изображений.
- **Цены:** Free / AI Pro / AI Ultra.
- **Из РФ:** Google блокирует российские IP в веб-версии, приложении и API.

### Claude (Anthropic) — LLM
- **Версии:** Opus 4.5 (24.11.2025, $5/$25 за 1M токенов, 80.9% SWE-bench Verified); линейка Haiku 4.5 / Sonnet 5 / Opus 5 — по последним доступным данным.
- **Из РФ:** регион не поддерживается; VPN/агрегаторы.

### Grok / Grok Imagine (xAI) — LLM + генерация
- **Версии:** Grok 4.7 (21.09.2026); Grok 5 не вышел. Imagine Video 1.5 (16.06.2026): 6-сек 720p за ~25 сек; Image 2.0 (08.2026). Публичный Imagine API (docs.x.ai).
- **Из РФ:** сайт, по последним данным, открывается; регистрация через аккаунт X.

### Midjourney — изображения + видео
- **V8/V8.1 (2026):** в ~5 раз быстрее V7, нативный HD 2K, лучший рендеринг текста; видео — оживление изображения (5 сек, продление до 21 сек).
- **Цены:** Basic $10 / Standard $30 / Pro $60 / Mega $120 в месяц.
- **Из РФ:** VPN + виртуальные карты/посредники.

### Adobe Firefly — мульти-модельный хаб для дизайна
- **Image Model 2** (01.2026); каталог 30+ сторонних моделей (Kling 3.0, Nano Banana 2, Veo, Runway Gen-4.5); Custom Models (10.2026) — обучение на своих изображениях; AI Assistant (агент).
- **Из РФ:** «Not available in your region» (Adobe ушла из РФ в 2022).

### Runway — видео и пост-продакшен
- **Gen-4.5** (флагман; «Gen-5» не существует): text/image-to-video, 2–10 сек, 1280p, сильная temporal-консистентность; интеграции в Krea и Firefly.
- **Цены 2026:** Free 125 кредитов; Standard $15; Pro $35; Max $95 (Unlimited упразднён 01.06.2026).

### Luma / Pika / Higgsfield — видео-платформы
- **Luma Ray3.2** (09.06.2026): кейфреймы, непрерывность склеек, HDR; free-тира нет, от $30/мес.
- **Pika** (рестарт 17.09.2026): мульти-модельный хаб (Seedance 2.5, Kling 4.0, Veo 3.1, Wan 3.0 + собственная Pika 2.5), free-тир, мобильное приложение.
- **Higgsfield:** агрегатор (Seedance 2.5, Kling 4.0 и др.), $5–29/мес.

### Suno — музыка
- **v6 (09.09.2026):** первая модель, обученная на лицензионной музыке (Warner Music, BMG, Believe); Studio 2.0 (13.08.2026); Suno Speech (бета). Оценка $5.4B (06.2026).
- **Цены:** Free; Pro $10/мес. **Из РФ: сайт работает без VPN**, проблема только с оплатой.

### ElevenLabs — речь, музыка, дубляж
- **Eleven v3** — экспрессивная TTS (аудиотеги, мульти-спикерские диалоги); Eleven Music — песни с вокалом; дубляж с сохранением голоса.
- **Тарифы:** Free 10k кредитов; Starter $6; Creator $22; Pro $99; Scale $299; Business $990.
- **Из РФ:** VPN + посредники (Oplata Guru и др.).

### HeyGen / Synthesia / D-ID — аватары
- **HeyGen:** Avatar IV/V, Free 3 видео/мес, Creator $29, API $0.0167–0.0667/сек.
- **Synthesia:** кастомные аватары со Starter ($29/мес), фокус на корпоративном обучении.
- **D-ID:** V4 Expressive Visual Agents (03.2026), интерактивные разговорные видео; от $5.90/мес.

### Descript / CapCut / Topaz — монтаж
- **Descript:** монтаж «как документ», удаление слов-паразитов, коррекция взгляда; free-план.
- **CapCut:** в 2026 — встроенная AI-генерация видео; **в РФ работает без VPN**, Pro — через посредников.
- **Topaz:** «Next-Gen» (04.2026) — Bloom/Starlight для апскейла и реставрации видео, локальная обработка.

## Доступность из России — закономерности

1. **Двойная блокировка лидеров:** ChatGPT, Claude, Gemini, Midjourney, Adobe Firefly, ElevenLabs — гео-блок со стороны компаний + (для ChatGPT) блокировка российскими регуляторами с 09.2026.
2. **VPN менее надёжен:** OpenAI и др. распознают IP массовых VPN; работают только «чистые» residential-IP.
3. **Оплата — узкое место:** карты РФ не принимаются (Stripe и др.). Схемы: виртуальные карты зарубежных банков, посредники, зарубежные App Store/Google Play, B2B.
4. **Исключения без VPN:** **Suno** (сайт и генерация работают), **CapCut** (полностью функционален), сайты xAI/Grok.
5. **Агрегаторы:** западные модели продают русскоязычные сервисы с оплатой рублями (ограничения приватности и функциональности).

## Источники

- Sora (закрытие): [OpenAI Help Center](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation), [TechXplore](https://techxplore.com/news/2026-04-sora-shutdown-reveals-limits-ai.html)
- GPT-5.1: [openai.com](https://openai.com/index/gpt-5-1) · Runway Gen-4.5: [runway.com](https://runway.com/research/introducing-runway-gen-4.5) · Claude Opus 4.5: [anthropic.com](https://www.anthropic.com/news/claude-opus-4-5)
- Nano Banana 2.1: [The Decoder](https://the-decoder.com/googles-new-image-model-nano-banana-2-1-generates-better-images-for-less-money)
- FLUX.2: [HF](https://huggingface.co/black-forest-labs/FLUX.2-dev), [GitHub](https://github.com/black-forest-labs/flux2)
- Midjourney тарифы: [docs.midjourney.com](https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans) · Pika: [pika.art/blog](https://pika.art/blog/welcome-to-the-new-pika) · Grok Imagine: [x.ai](https://x.ai/news/grok-imagine-video-1-5)
- Suno v6: [TechCrunch](https://techcrunch.com/2026/09/09/suno-replaces-its-ai-models-with-a-new-one-trained-on-licensed-music-as-copyright-suits-pile-up) · Udio/UMG: [universalmusic.com](https://www.universalmusic.com/universal-music-group-and-udio-announce-udios-first-strategic-agreements-for-new-licensed-ai-music-creation-platform)
- Adobe Firefly: [helpx.adobe.com](https://helpx.adobe.com/firefly/web/whats-new/new-features/whats-new.html) · HeyGen/Synthesia: [сравнение](https://vidico.com/news/heygen-vs-synthesia)
- Доступ из РФ: [klerk.ru](https://www.klerk.ru/blogs/plati-po-vsemu-miru/715969/), [РБК](https://companies.rbc.ru/news/wFwHbTTO5V/), [vc.ru о CapCut](https://vc.ru/services/3027037-sposoby-oplaty-capcut-v-rossii)
