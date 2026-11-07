# Open-source инструменты (локальный запуск)

> Дата проверки: **2026-11-06**. Открытые модели — без барьеров для РФ: не требуют оплаты и не блокируются. Ключевая ценность для разработки мультимедиа-продуктов: полный контроль, приватность, отсутствие платы за генерацию.

## Каталог

| Инструмент | Разработчик | Категория | Версия (дата) | Лицензия | URL |
|---|---|---|---|---|---|
| Stable Diffusion 3.5 | Stability AI | Изображения | 3.5 Large/Medium/Turbo | Community (бесплатно при выручке <$1M) | huggingface.co/stabilityai |
| SDXL | Stability AI | Изображения | 1.0 (жив как база для LoRA) | OpenRAIL++ | huggingface.co |
| FLUX.1 [dev] | Black Forest Labs | Изображения | 12B (эталон качества) | Некоммерческая (коммерция — платная) | huggingface.co/black-forest-labs |
| FLUX.2 [dev] | Black Forest Labs | Изображения | 32B (11.2025) | Открытые веса, некоммерческая | github.com/black-forest-labs/flux2 |
| FLUX 3 Image Klein | Black Forest Labs | Изображения | 5.6B (10.2026) | Открытые веса | huggingface.co |
| ComfyUI | Comfy Org | UI/пайплайны | актуальная (GDC 2026: App View, NVFP4) | GPL-3.0 | github.com/comfyanonymous/ComfyUI |
| Forge / A1111 | lllyasviel / AUTOMATIC1111 | UI | Forge заморожен (07.2025); A1111 — legacy | AGPL-3.0 | github.com/lllyasviel/stable-diffusion-webui-forge |
| Wan 2.1/2.2 | Alibaba (Tongyi) | Видео | Wan 2.2 — лучшая открытая для коммерции; Wan 2.5 — только API | Apache 2.0 | github.com/Wan-Video |
| HunyuanVideo | Tencent | Видео | 1.5 (открыта) | Tencent Community | github.com/Tencent-Hunyuan |
| LTX-Video / LTX-2 | Lightricks | Видео | LTX-2.5 22B (720p на ~16 ГБ VRAM) | Открытые веса, огранич. | ltx.io |
| CogVideoX | Zhipu AI (THUDM) | Видео | до 5B параметров | Apache 2.0 / кастомная (5B) | github.com/THUDM/CogVideo |
| Open-Sora | HPC-AI Tech | Видео | активная разработка | Apache-2.0 (код) | github.com/hpcaitech/Open-Sora |
| Stable Audio Open → 3.0 | Stability AI | Аудио/музыка | 3.0 — 4 открытые модели (05.2026), до ~6 мин | Открытые веса, лиценз. данные | stability.ai |
| ACE-Step | ACE Studio + StepFun | Музыка | 1.5 (01.2026) | **MIT** | github.com/ace-step/ACE-Step-1.5 |
| MMAudio | Cheng et al. | Video-to-audio | v0.1 (~6 ГБ) / V2 через fal | Research | github.com/hkchengrex/MMAudio |
| AudioCraft / MusicGen | Meta | Музыка/SFX | обновление 07.2025 (ветеран, без вокала) | CC-BY-NC / MIT (код) | github.com/facebookresearch/audiocraft |
| Whisper | OpenAI | STT | large-v3 / v3-turbo (~8× быстрее) | MIT | github.com/openai/whisper |
| XTTS-v2 | Coqui | TTS/клонинг | v2 | Coqui Public Model (некомм.) | huggingface.co/coqui |
| GPT-SoVITS | RVC-Boss | TTS/клонинг | v4 (клон с 5 сек аудио) | MIT | github.com/RVC-Boss/GPT-SoVITS |
| F5-TTS | SWivid | TTS/клонинг | актуальная; 3–8 ГБ VRAM | CC-BY-NC | github.com/SWivid/F5-TTS |
| RVC | RVC-Project | Смена голоса | v2 (реалтайм ~170 мс) | MIT | github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI |
| Chatterbox | Resemble AI | TTS | актуальная (продакшен-стандарт) | MIT | github.com/resemble-ai/chatterbox |
| Ollama / LM Studio | Ollama / LM Studio | Запуск LLM | актуальные | MIT / freeware | ollama.com, lmstudio.ai |
| Llama / Qwen (локально) | Meta / Alibaba | Локальные LLM | Llama 4; Qwen 3.5–3.8 (27B — оптимум «для дома») | Llama License / Apache 2.0 | ollama.com/library |

## Ключевые карточки

- **ComfyUI** — де-факто стандарт локальной генерации: нодные пайплайны для изображений и видео (Wan 2.2, FLUX.2, Hunyuan); в 2026 — App View, NVFP4-модели для RTX. A1111/Forge фактически заброшены.
- **Wan 2.2 (Alibaba, Apache 2.0)** — лучший открытый выбор для коммерческого видео; Wan 2.5 синхронизирует звук, но только через API Alibaba Cloud.
- **HunyuanVideo 1.5 (Tencent)** — конкурирует на средних GPU; **LTX-2.5** — компромисс качества и VRAM; **CogVideoX** популярен за скромные требования.
- **ACE-Step 1.5 (MIT)** — главная открытая музыкальная модель 2026: вокал/инструментал, фиксация BPM/тональности, качество «около Suno» на потребительском железе (8 шагов диффузии, ~6.3 ГБ), интеграция в ComfyUI.
- **MMAudio** — стандарт генерации Foley/озвучки для видео из открытых моделей.
- **TTS:** Chatterbox (MIT) — лучший для продакшена; F5-TTS и XTTS-v2 — сильный клонинг, но некоммерческие лицензии; GPT-SoVITS v4 — клон с 5 сек аудио (кит/англ/яп/кор); RVC v2 — реалтайм-смена голоса.
- **Whisper large-v3-turbo** — безальтернативный локальный STT (MIT, 99+ языков).
- **Локальные LLM:** Ollama / LM Studio + Qwen 3.x (оптимум), Llama 4, Gemma, DeepSeek, gpt-oss.

## Особенности лицензий (важно для коммерческих продуктов)

- **Можно коммерчески:** Wan 2.2 (Apache 2.0), ACE-Step (MIT), Chatterbox (MIT), GPT-SoVITS (MIT), RVC (MIT), Whisper (MIT), ComfyUI (GPL-3.0 — код UI), Qwen open (Apache 2.0), SD 3.5 (Community, выручка <$1M).
- **Нельзя/ограничено коммерчески:** FLUX.1 [dev] и FLUX.2 [dev] (некоммерческие веса; коммерция через лицензию BFL), XTTS-v2, F5-TTS (CC-BY-NC), MusicGen (CC-BY-NC).
- **Пограничное:** SDXL (OpenRAIL++ — с ограничениями по использованию), HunyuanVideo/LTX (кастомные community-лицензии — читать перед продакшеном).

## Инфраструктура для РФ

- Локальный стек работает автономно: не требует оплаты, не блокируется.
- Hugging Face формально не заблокирован, но в дек. 2025 были проблемы с подключением; после блокировки PyPI (июнь 2026) команды используют зеркало **GitVerse**.
