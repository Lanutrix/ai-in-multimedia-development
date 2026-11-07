# Китайские ИИ-сервисы для мультимедиа (AIGC)

> Дата проверки: **2026-11-06**. Метод: веб-поиск + официальные источники.
> Китай — второй центр генеративного ИИ: открытые модели (Wan, Qwen-Image, HunyuanImage, ACE-Step) конкурируют с закрытыми западными, а потребительские сервисы часто дешевле западных аналогов.

## Сводка по индустрии (2025–2026)

- **Модельный ландшафт:** гонка флагманов — DeepSeek V4/V4.1 Flash, Qwen 3.8 Max (2.4 трлн параметров, авг. 2026), Kimi K3, GLM-5.3, ERNIE 5.1. Китайские модели доминируют в открытых весах.
- **Видео — сильнейший сегмент:** Seedance 2.5 и Kling 4.0 — главные конкуренты Google Veo 3.1 после закрытия Sora; независимые тесты ставят их в топ мировых рейтингов.
- **Изображения:** Seedream 5.0 и Qwen-Image 3.0 вышли одновременно (февраль 2026); Qwen-Image — лидер open-source сегмента, HunyuanImage 3.0 — крупнейшая открытая модель (80B MoE).
- **Потребительские приложения:** Doubao, Jimeng/Dreamina, Kling AI — массовые сервисы с бесплатными ежедневными кредитами.

## Каталог

| Сервис | Разработчик | Категория | Версия (дата) | Доступ | Междунар. версия | URL |
|---|---|---|---|---|---|---|
| DeepSeek | DeepSeek AI | LLM | V4 (04.2026), V4.1 Flash | Free; API; открытые веса | chat.deepseek.com | deepseek.com |
| Qwen | Alibaba | LLM, image, video | Qwen 3.8 Max (08.2026, 2.4T); Qwen3.8-27B (Apache-2.0) | Free; API Alibaba Cloud | chat.qwen.ai | qwen.ai |
| Kimi | Moonshot AI | LLM | K3 (после K2.6) | Free; подписка (**оплата картой «Мир»**) | kimi.com | moonshot.ai |
| GLM | Zhipu AI | LLM | GLM-5.3 | Free; API; открытые веса | chat.z.ai | zhipuai.cn |
| ERNIE (文心一言) | Baidu | LLM | ERNIE 5.1 | Free; API | — | yiyan.baidu.com |
| Doubao (豆包) | ByteDance | LLM/ассистент | Doubao 1.5 Pro и новее | Free (приложение) | — | doubao.com |
| Seedream / SeedEdit | ByteDance | Изображения | 4.0 (09.2025) → 4.5 → 5.0/5.0 Lite (4K) | Через API/приложения ByteDance | Dreamina | seed.bytedance.com |
| Qwen-Image | Alibaba | Изображения | 2.0/2.0 Pro → 3.0 (02.2026, ~$0.03/изобр.) | API; **открытые веса** | chat.qwen.ai | huggingface.co/Qwen |
| HunyuanImage | Tencent | Изображения | 3.0 (80B MoE, открытая, до 1536 px) | **Открытая** | — | github.com/Tencent-Hunyuan |
| Seedance | ByteDance | Видео | 2.0 (4K, мульти-шот) → 2.5 (31.07.2026: 4–30 сек, звук по умолч.) | Через Dreamina/API/агрегаторы | Dreamina | seed.bytedance.com |
| Kling (可灵) | Kuaishou | Видео | 3.0 → 4.0 (2026) | Free ~66 кр./день; подписка | **klingai.com** | klingai.com |
| Hailuo (海螺) | MiniMax | Видео | Hailuo 2.3 (10.2025) → H3 (2026: 2K, стерео, 11 языков) | Free (watermark); подписка | hailuoai.com | minimax.io |
| Vidu | Shengshu (生数) | Видео | Q4 (нативный звук); S1 (07.2026, real-time интерактив) | Free; подписка | vidu.com | vidu.cn |
| PixVerse | AIsphere (爱诗) | Видео | V5 (08.2025) и новее | Free; подписка | pixverse.ai | pixverse.cn |
| Wan (通义万相) | Alibaba | Видео (open-source) | Wan 2.2 (Apache 2.0); Wan 2.5/3.0 — API | Открытые веса / API | — | github.com/Wan-Video |
| HunyuanVideo | Tencent | Видео (open-source) | 1.5 (открыта) | **Открытая** | — | github.com/Tencent-Hunyuan |
| MiniMax Music | MiniMax | Музыка | Music 3 (до 5 мин трек с вокалом) | Подписка/API | minimax.io | minimax.io |
| SkyMusic | Kunlun Tech (天工) | Музыка | актуальная (песенная генерация) | Free; подписка | — | tiangong.cn |
| CosyVoice | Alibaba | TTS/клонинг | CosyVoice 3 (открыта, 18+ диалектов) | **Открытая**; online-версия | — | github.com/FunAudioLLM |
| IndexTTS | Bilibili | TTS/клонинг | IndexTTS2 (эмоции, industrial-grade) | **Открытая** | — | github.com/index-tts/index-tts |
| Fish Audio | Fish Audio | TTS/клонинг | Fish Speech (клон с ~10 сек аудио) | Open-source + облачный API | fish.audio | fish.audio |
| Tripo | VAST | 3D | Tripo 3.1 (game-ready), H3.1 (hero-ассеты) | Free-кредиты; подписка | tripo3d.ai | tripo3d.ai |
| Rodin (Hyper3D) | Deemos | 3D | Gen-2.5 (high-end реализм) | Free-кредиты; подписка | hyper3d.ai | hyper3d.ai |
| Hunyuan3D | Tencent | 3D | V3.1 Pro (20 free-кредитов) | Открытая + Pro-тариф | — | github.com/Tencent-Hunyuan |
| Jimeng (即梦) / Dreamina | ByteDance | Платформа image+video | актуальная; ~¥69/мес (CN) vs $18/мес (межд.) | Ежедневные free-кредиты | **dreamina.capcut.com** | jimeng.jianying.com |
| LiblibAI | Liblib | Сообщество моделей | актуальная | Freemium | liblib.art / liblibai.com | liblibai.com |

## Детальные карточки

### DeepSeek — LLM
- **V4 (24.04.2026)** — открытое MoE-семейство (вариант V4-Pro); **V4.1 Flash** — актуальная быстрая версия.
- Бесплатный веб-чат, дешёвый API, открытые веса. Один из главных мировых открытых LLM.
- **Из РФ:** работает без VPN; оплата API — зарубежная виртуальная карта.

### Qwen (Alibaba) — LLM + изображения + видео
- **Qwen 3.8 Max** (03.08.2026) — крупнейшая модель Alibaba (2.4 трлн параметров); **Qwen3.8-27B** — открытая версия Apache-2.0 (оптимум для локального запуска).
- Экосистема: **Qwen-Image 2.0/3.0** (лидер open-source изображений, рендеринг текста на 12 языках, промпты до 4500 токенов, ~$0.03/изображение), видеомодели Wan.
- **Из РФ:** веб-чат работает без VPN; API Alibaba Cloud — через виртуальные карты.

### Kimi (Moonshot AI) — LLM
- **K3** (после K2.6) — сильные рассуждения, длинный контекст.
- **Из РФ:** в ноябре 2026 Moonshot открыла оплату подписки картами **«Мир»** — редкий случай прямого платежа из РФ.

### Seedream / Seedance (ByteDance) — изображения и видео
- **Seedream 4.0** (09.2025): генерация + редактирование в одной архитектуре, референсные изображения; **4.5**: рендеринг мелкой типографики; **5.0/5.0 Lite**: 4K, рассуждающая генерация.
- **Seedance 2.0**: до 4K, мультишотность, до 9 изображений + 3 видео + 3 аудио как референсы; **Seedance 2.5** (31.07.2026): ролики 4–30 сек за одну генерацию, звук включён по умолчанию.
- Доступ: Dreamina (междунар.), Jimeng (Китай), API, агрегаторы.

### Kling (Kuaishou) — видео
- **Kling 3.0 → 4.0 (2026)** — топ мировых рейтингов видео-генерации (в сравнениях с Veo 3.1 и Seedance 2.5).
- Международная версия **klingai.com**: free ~66 кредитов в день (≈6 генераций), подписки и пакеты кредитов.
- **Из РФ:** международная версия доступна, оплата — виртуальные карты/посредники.

### Hailuo (MiniMax) — видео и музыка
- **Hailuo 2.3** (10.2025) — «генерация в один клик»; **H3** (2026): 5–15 сек в нативном 2K со стереозвуком, мультишотные сцены, диалоги на 11 языках, референсные персонажи, управление камерой. Тарифы H3 Max / H3; free-тир с watermark.
- **MiniMax Music 3**: полные треки с вокалом до 5 минут; **MiniMax Audio / Speech 2.5** — TTS/клонинг; **MiniMax Text/Hailuo-ассистент** — LLM-линейка.
- Международная версия: hailuoai.com / minimax.io.

### Vidu (Shengshu) — видео
- **Q4**: нативная генерация звука; **S1 (07.2026)**: real-time интерактивная генерация, управление персонажем голосом, бесконечная длительность.

### Wan / HunyuanVideo — открытые видеомодели
- **Wan 2.2 (Alibaba, Apache 2.0)** — лучшая открытая видеомодель для коммерческого использования; Wan 2.5/3.0 (со звуком) — только через API.
- **HunyuanVideo 1.5 (Tencent)** — открытая, работает на средних GPU.

### Музыка: MiniMax Music 3, ACE-Step 1.5, SkyMusic
- **MiniMax Music 3** — треки с вокалом/хором до 5 минут (закрытая).
- **ACE-Step 1.5 (ACE Studio + StepFun, MIT)** — открытая, коммерческое качество на потребительском железе; см. [opensource.md](opensource.md).
- **SkyMusic (Kunlun Tech)** — песенная генерация для китайского рынка.

### TTS/клонинг голоса
- **CosyVoice 3 (Alibaba)** — открытая, 18+ китайских диалектов, межъязыковой клонинг.
- **IndexTTS2 (Bilibili)** — industrial-grade, управление эмоциями.
- **Fish Audio** — клон с ~10 сек референса; открытая модель + облачный API (TTS, SFX, озвучка).

### 3D-генерация
- **Tripo 3.1 / H3.1 (VAST)** — game-ready меши и hero-ассеты.
- **Rodin Gen-2.5 (Deemos/Hyper3D)** — high-end реализм.
- **Hunyuan3D V3.1 Pro (Tencent)** — открытая база + Pro-тариф.

### Платформы
- **Jimeng (即梦)/Dreamina** — потребительская платформа ByteDance (изображения + видео, модели Seedream/Seedance); в Китае ~¥69/мес, международная Dreamina — ~$18/мес, ежедневные бесплатные кредиты.
- **LiblibAI** — сообщество/хостинг моделей (аналог Civitai), коммерческая платформа.
- **腾讯智影 (Tencent Zhiying)** — цифровые люди/аватары для видео (китайский рынок).

## Доступность из России и международные версии

1. **Веб-чаты китайских LLM (Qwen, DeepSeek, Kimi) доступны без VPN**, базовые версии бесплатны.
2. **Kimi принимает карты «Мир»** (новость ноября 2026) — первый массовый случай прямой оплаты из РФ; для остальных — виртуальные зарубежные карты и посредники (PayFriend и др.).
3. **Видеосервисы:** международные версии (klingai.com, hailuoai.com, vidu.com, dreamina.capcut.com) открываются из РФ; оплата подписок — посредники. Китайские внутренние версии требуют китайский номер телефона (+86).
4. **Агрегаторы** (RouterAI и др.) дают доступ к китайским и западным моделям с оплатой российскими картами.
5. **Открытые веса** (Qwen-Image, Wan, Hunyuan, ACE-Step, CosyVoice, IndexTTS, Fish Speech) — без ограничений, запускаются локально.

## Источники

- Seedream/Seedance: [seed.bytedance.com](https://seed.bytedance.com/zh/seedream4_0)
- Сравнение китайских image-моделей 2026: [Layer3 Labs](https://www.layer3labs.io/comparisons/best-chinese-ai-models-for-image-generation), [Segmind](https://blog.segmind.com/seedream-4-qwen-image-ai-showdown)
- Qwen 3.8 Max: [Reuters](https://www.reuters.com/business/retail-consumer/alibaba-unveils-its-most-capable-ai-model-date-not-far-behind-moonshots-size-2026-08-03)
- Qwen-Image: [Hugging Face](https://huggingface.co/Qwen/Qwen-Image)
- HunyuanImage 3.0: [обзор](https://www.dreamega.ai/ru/models/hunyuan-image-3)
- Китайские LLM 2026: [myclaw.ai](https://myclaw.ai/blog/chinese-ai-model), [Medium](https://medium.com/coinmonks/chinas-top-ai-models-in-2026-deepseek-qwen-kimi-doubao-and-the-new-ai-race-08083866ac5a)
- IndexTTS: [GitHub](https://github.com/index-tts/index-tts) · ACE-Step 1.5: [GitHub](https://github.com/ace-step/ACE-Step-1.5) · CosyVoice: [FunAudioLLM](https://github.com/FunAudioLLM)
- 3D: [Rodin vs Tripo vs Hunyuan3D](https://www.3daistudio.com/blog/rodin-2-5-vs-tripo-vs-hunyuan-3d-comparison), [tripo3d.ai](https://www.tripo3d.ai)
- Доступ из РФ: [VK-новость об оплате Kimi картой «Мир»](https://vk.ru/wall-72378974_9692387)
- Jimeng/Dreamina и Kling тарифы: официальные сайты (dreamina.capcut.com, klingai.com, jimeng.jianying.com)
