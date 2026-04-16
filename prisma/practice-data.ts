// ============================================
// ПРАКТИЧЕСКИЕ ЗАДАНИЯ ПО УРОКАМ
// Ключ: "moduleOrder-lessonOrder"
// Модули с практикой: 2, 3, 4, 6, 7, 9
// ============================================

interface PracticeTaskData {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

export const PRACTICE_DATA: Record<string, PracticeTaskData[]> = {

  // ── MODULE 2: Prompt Engineering ──────────────────────────────

  "2-1": [
    {
      title: "Сравни три промпта",
      titleEn: "Compare three prompts",
      description:
        "Напиши три разных промпта для одной задачи (например, «напиши email партнёру»): плохой, средний и хороший. Сделай скриншот результатов из ChatGPT или Claude и загрузи его.",
      descriptionEn:
        "Write three different prompts for the same task (e.g. 'write a partner email'): bad, average and good. Take a screenshot of the results from ChatGPT or Claude and upload it.",
    },
    {
      title: "Сформулируй свой промпт-провал",
      titleEn: "Share your worst prompt",
      description:
        "Вспомни (или придумай) ситуацию, когда AI дал плохой ответ. Опиши промпт и почему он не сработал — вставь в комментарий.",
      descriptionEn:
        "Think of (or make up) a case where AI gave a poor response. Describe the prompt and why it failed — paste it as a comment.",
    },
  ],

  "2-2": [
    {
      title: "Создай структурированный промпт",
      titleEn: "Create a structured prompt",
      description:
        "Напиши промпт с пятью элементами: Роль, Контекст, Задача, Формат, Ограничения. Тема на выбор. Загрузи скриншот промпта и ответа AI.",
      descriptionEn:
        "Write a prompt with five elements: Role, Context, Task, Format, Constraints. Choose any topic. Upload a screenshot of the prompt and AI response.",
    },
    {
      title: "Протестируй формат вывода",
      titleEn: "Test output format",
      description:
        "Попроси AI один и тот же текст оформить: а) таблицей, б) маркированным списком, в) JSON. Загрузи скриншот трёх вариантов.",
      descriptionEn:
        "Ask AI to format the same content as: a) a table, b) a bullet list, c) JSON. Upload a screenshot of all three outputs.",
    },
  ],

  "2-3": [
    {
      title: "Zero-shot vs Few-shot",
      titleEn: "Zero-shot vs Few-shot",
      description:
        "Выбери задачу классификации или перевода. Сделай zero-shot запрос и few-shot запрос с 2–3 примерами. Сравни качество ответов — загрузи скриншот обоих.",
      descriptionEn:
        "Choose a classification or translation task. Make a zero-shot request and a few-shot request with 2–3 examples. Compare the quality — upload a screenshot of both.",
    },
  ],

  "2-4": [
    {
      title: "Chain-of-Thought на сложной задаче",
      titleEn: "Chain-of-Thought on a complex task",
      description:
        "Возьми задачу с логикой или математикой. Реши её: а) обычным промптом, б) добавив «думай шаг за шагом». Загрузи скриншот разницы в ответах.",
      descriptionEn:
        "Take a logic or math problem. Solve it: a) with a plain prompt, b) adding 'think step by step'. Upload a screenshot showing the difference in answers.",
    },
  ],

  "2-5": [
    {
      title: "Создай системный промпт",
      titleEn: "Create a system prompt",
      description:
        "Придумай персонажа-ассистента (например, «строгий бизнес-консультант» или «дружелюбный учитель»). Напиши system prompt и протестируй в API Playground или Claude. Загрузи скриншот.",
      descriptionEn:
        "Invent an assistant persona (e.g. 'strict business consultant' or 'friendly teacher'). Write a system prompt and test it in API Playground or Claude. Upload a screenshot.",
    },
  ],

  "2-6": [
    {
      title: "Отладь нерабочий промпт",
      titleEn: "Debug a broken prompt",
      description:
        "Возьми любой плохо работающий промпт. Применяя методологию итерации из урока, улучши его за 3 шага. Загрузи скриншот каждой итерации.",
      descriptionEn:
        "Take any poorly performing prompt. Using the iteration methodology from the lesson, improve it in 3 steps. Upload a screenshot of each iteration.",
    },
  ],

  "2-7": [
    {
      title: "Исправь антипаттерны",
      titleEn: "Fix the anti-patterns",
      description:
        "Найди в интернете (или придумай) промпт с 2–3 типичными ошибками из урока. Исправь их и сравни результаты. Загрузи скриншоты до и после.",
      descriptionEn:
        "Find (or make up) a prompt with 2–3 common mistakes from the lesson. Fix them and compare results. Upload before/after screenshots.",
    },
  ],

  // ── MODULE 3: Vibe Coding ──────────────────────────────────────

  "3-1": [
    {
      title: "Исследуй vibe coding инструменты",
      titleEn: "Explore vibe coding tools",
      description:
        "Зайди на сайты Cursor, Windsurf и Replit. Сделай скриншоты их главных страниц и опиши в комментарии, какой инструмент тебе понравился больше всего и почему.",
      descriptionEn:
        "Visit the Cursor, Windsurf and Replit websites. Take screenshots of their homepages and describe in a comment which tool appeals to you most and why.",
    },
  ],

  "3-2": [
    {
      title: "Сравни инструменты на практике",
      titleEn: "Compare tools in practice",
      description:
        "Выбери один бесплатный vibe coding инструмент. Создай простейший проект (hello world / todo list). Загрузи скриншот созданного приложения.",
      descriptionEn:
        "Choose one free vibe coding tool. Create a simple project (hello world / todo list). Upload a screenshot of the created app.",
    },
    {
      title: "Напиши промпт для создания приложения",
      titleEn: "Write an app-creation prompt",
      description:
        "Составь подробный промпт для Cursor/Replit для создания простого приложения на своё усмотрение. Сохрани промпт и вставь в комментарий.",
      descriptionEn:
        "Write a detailed prompt for Cursor/Replit to create a simple app of your choice. Save the prompt and paste it as a comment.",
    },
  ],

  "3-3": [
    {
      title: "Установи и настрой Cursor",
      titleEn: "Install and configure Cursor",
      description:
        "Скачай и установи Cursor AI. Настрой .cursorrules файл. Загрузи скриншот интерфейса Cursor с открытым проектом.",
      descriptionEn:
        "Download and install Cursor AI. Configure a .cursorrules file. Upload a screenshot of Cursor's interface with a project open.",
    },
  ],

  "3-4": [
    {
      title: "Создай лендинг только промптами",
      titleEn: "Build a landing page with prompts only",
      description:
        "Используй Cursor или Replit Agent, чтобы создать лендинг для любого продукта/сервиса. Запрещено писать код вручную. Загрузи скриншот готового сайта.",
      descriptionEn:
        "Use Cursor or Replit Agent to create a landing page for any product/service. Manual coding is not allowed. Upload a screenshot of the finished site.",
    },
    {
      title: "Опиши процесс создания",
      titleEn: "Describe the creation process",
      description:
        "Запиши промпты, которые ты использовал для создания лендинга (не менее 3 итераций). Вставь их в комментарий.",
      descriptionEn:
        "Write down the prompts you used to create the landing page (at least 3 iterations). Paste them as a comment.",
    },
  ],

  "3-5": [
    {
      title: "Задеплой сайт на Vercel",
      titleEn: "Deploy a site to Vercel",
      description:
        "Задеплой любой проект на Vercel через GitHub. Загрузи ссылку на задеплоенный сайт и скриншот дашборда Vercel.",
      descriptionEn:
        "Deploy any project to Vercel via GitHub. Upload the link to the deployed site and a screenshot of the Vercel dashboard.",
    },
  ],

  "3-6": [
    {
      title: "Создай схему базы данных с помощью AI",
      titleEn: "Design a database schema with AI",
      description:
        "Опиши AI свою идею приложения. Попроси его спроектировать схему базы данных. Загрузи скриншот диалога и итоговой схемы.",
      descriptionEn:
        "Describe your app idea to AI. Ask it to design a database schema. Upload a screenshot of the conversation and resulting schema.",
    },
  ],

  // ── MODULE 4: APIs & Integrations ─────────────────────────────

  "4-1": [
    {
      title: "Изучи API документацию",
      titleEn: "Explore API documentation",
      description:
        "Зайди на platform.openai.com или console.anthropic.com. Найди документацию по Chat Completions API. Сделай скриншот примера запроса и ответа.",
      descriptionEn:
        "Go to platform.openai.com or console.anthropic.com. Find the Chat Completions API documentation. Take a screenshot of an example request and response.",
    },
  ],

  "4-2": [
    {
      title: "Отправь первый запрос к OpenAI API",
      titleEn: "Send your first OpenAI API request",
      description:
        "Получи API ключ OpenAI (или используй Anthropic). Сделай первый запрос через API Playground или curl. Загрузи скриншот успешного ответа.",
      descriptionEn:
        "Get an OpenAI API key (or use Anthropic). Make your first request via API Playground or curl. Upload a screenshot of a successful response.",
    },
    {
      title: "Поиграй с параметрами",
      titleEn: "Experiment with parameters",
      description:
        "Измени temperature (0.1, 0.9, 1.5) и max_tokens для одного и того же промпта. Загрузи скриншот разных результатов.",
      descriptionEn:
        "Change the temperature (0.1, 0.9, 1.5) and max_tokens for the same prompt. Upload a screenshot of the different results.",
    },
  ],

  "4-3": [
    {
      title: "Сравни Claude и GPT",
      titleEn: "Compare Claude and GPT",
      description:
        "Задай один и тот же сложный вопрос Claude и ChatGPT. Сравни качество ответов. Загрузи скриншоты обоих ответов и напиши вывод в комментарии.",
      descriptionEn:
        "Ask the same complex question to Claude and ChatGPT. Compare the quality of responses. Upload screenshots of both answers and write your conclusion as a comment.",
    },
  ],

  "4-4": [
    {
      title: "Создай сценарий в Make",
      titleEn: "Create a scenario in Make",
      description:
        "Зарегистрируйся на make.com (бесплатный план). Создай простой сценарий, подключив хотя бы 2 сервиса. Загрузи скриншот готового сценария.",
      descriptionEn:
        "Sign up at make.com (free plan). Create a simple scenario connecting at least 2 services. Upload a screenshot of the finished scenario.",
    },
  ],

  "4-5": [
    {
      title: "Реализуй простой RAG",
      titleEn: "Implement a simple RAG",
      description:
        "Возьми любой текстовый документ (FAQ, статья). Создай промпт, который использует его как контекст для ответа на вопросы. Загрузи скриншот диалога.",
      descriptionEn:
        "Take any text document (FAQ, article). Create a prompt that uses it as context for answering questions. Upload a screenshot of the dialogue.",
    },
  ],

  "4-6": [
    {
      title: "Установи n8n",
      titleEn: "Set up n8n",
      description:
        "Установи n8n локально через npx или Docker. Создай простой workflow. Загрузи скриншот интерфейса с созданным workflow.",
      descriptionEn:
        "Install n8n locally via npx or Docker. Create a simple workflow. Upload a screenshot of the interface with your workflow.",
    },
  ],

  // ── MODULE 6: Advanced Prompt Engineering ─────────────────────

  "6-1": [
    {
      title: "Создай мета-промпт",
      titleEn: "Create a meta-prompt",
      description:
        "Напиши мета-промпт, который генерирует промпты для твоей профессиональной области. Протестируй его в Claude/ChatGPT. Загрузи скриншот результата.",
      descriptionEn:
        "Write a meta-prompt that generates prompts for your professional field. Test it in Claude/ChatGPT. Upload a screenshot of the result.",
    },
    {
      title: "Автоматически улучши промпт",
      titleEn: "Auto-improve a prompt",
      description:
        "Возьми слабый промпт. Используй AI, чтобы он сам предложил улучшения (технику APE из урока). Загрузи скриншот итерации улучшения.",
      descriptionEn:
        "Take a weak prompt. Use AI to suggest improvements itself (the APE technique from the lesson). Upload a screenshot of the improvement iteration.",
    },
  ],

  "6-2": [
    {
      title: "Получи JSON ответ от AI",
      titleEn: "Get a JSON response from AI",
      description:
        "Создай промпт, который заставляет AI вернуть данные строго в формате JSON. Попробуй вложенную структуру. Загрузи скриншот промпта и ответа.",
      descriptionEn:
        "Create a prompt that makes AI return data strictly in JSON format. Try a nested structure. Upload a screenshot of the prompt and response.",
    },
  ],

  "6-3": [
    {
      title: "Проведи A/B тест промптов",
      titleEn: "Run an A/B prompt test",
      description:
        "Создай два варианта промпта для одной задачи. Протестируй каждый 3 раза. Загрузи скриншоты результатов и напиши, какой промпт победил.",
      descriptionEn:
        "Create two prompt variants for the same task. Test each one 3 times. Upload screenshots of results and write which prompt won.",
    },
  ],

  "6-4": [
    {
      title: "Создай контент-план с AI",
      titleEn: "Create a content plan with AI",
      description:
        "Используй промпты из урока для создания контент-плана на месяц для любого бизнеса или личного бренда. Загрузи результат (скриншот или файл).",
      descriptionEn:
        "Use the prompts from the lesson to create a one-month content plan for any business or personal brand. Upload the result (screenshot or file).",
    },
  ],

  "6-5": [
    {
      title: "Code Review через AI",
      titleEn: "Code review via AI",
      description:
        "Возьми любой фрагмент кода (свой или из интернета). Используй AI для code review, рефакторинга и документации. Загрузи скриншот до и после.",
      descriptionEn:
        "Take any code snippet (yours or from the internet). Use AI for code review, refactoring and documentation. Upload before/after screenshots.",
    },
  ],

  "6-6": [
    {
      title: "Создай библиотеку промптов",
      titleEn: "Build a prompt library",
      description:
        "Собери минимум 5 промптов, которые ты будешь использовать регулярно. Оформи их в структурированный документ (Notion, Google Doc или файл). Загрузи файл или ссылку.",
      descriptionEn:
        "Collect at least 5 prompts you will use regularly. Organize them into a structured document (Notion, Google Doc or file). Upload the file or link.",
    },
  ],

  // ── MODULE 7: Business Automation ─────────────────────────────

  "7-1": [
    {
      title: "Проведи бизнес-аудит",
      titleEn: "Conduct a business audit",
      description:
        "Выбери реальный или вымышленный бизнес. Используя методологию урока, определи 3–5 задач, которые можно автоматизировать с AI. Рассчитай примерную экономию времени. Загрузи результат.",
      descriptionEn:
        "Choose a real or fictional business. Using the lesson methodology, identify 3–5 tasks that can be automated with AI. Calculate approximate time savings. Upload your result.",
    },
  ],

  "7-2": [
    {
      title: "Настрой AI-чатбот",
      titleEn: "Set up an AI chatbot",
      description:
        "Создай простой FAQ-чатбот для любого бизнеса, используя ChatGPT Custom GPT или Poe. Загрузи ссылку на чатбот или скриншот интерфейса.",
      descriptionEn:
        "Create a simple FAQ chatbot for any business using ChatGPT Custom GPT or Poe. Upload a link to the chatbot or a screenshot of the interface.",
    },
  ],

  "7-3": [
    {
      title: "Автоматизируй создание контента",
      titleEn: "Automate content creation",
      description:
        "Создай контент-план и напиши первые 3 поста для любой соцсети, используя только AI. Загрузи готовый контент (файл или скриншот).",
      descriptionEn:
        "Create a content plan and write the first 3 posts for any social network using only AI. Upload the finished content (file or screenshot).",
    },
  ],

  "7-4": [
    {
      title: "Персонализированный email с AI",
      titleEn: "Personalized email with AI",
      description:
        "Создай шаблон персонализированного email для лидов с переменными (имя, компания, боль). Используй AI для генерации 5 вариантов. Загрузи результат.",
      descriptionEn:
        "Create a personalized lead email template with variables (name, company, pain point). Use AI to generate 5 variations. Upload your result.",
    },
  ],

  "7-5": [
    {
      title: "Финансовый анализ с AI",
      titleEn: "Financial analysis with AI",
      description:
        "Возьми любые финансовые данные (реальные или вымышленные). Попроси AI проанализировать их и дать рекомендации. Загрузи скриншот анализа.",
      descriptionEn:
        "Take any financial data (real or fictional). Ask AI to analyze it and give recommendations. Upload a screenshot of the analysis.",
    },
  ],

  "7-6": [
    {
      title: "Автоматизируй скрининг резюме",
      titleEn: "Automate resume screening",
      description:
        "Создай промпт для скрининга резюме под конкретную вакансию. Протестируй на 3 вымышленных кандидатах. Загрузи скриншот результатов.",
      descriptionEn:
        "Create a prompt for screening resumes for a specific job opening. Test it on 3 fictional candidates. Upload a screenshot of the results.",
    },
  ],

  // ── MODULE 9: Final Projects ───────────────────────────────────

  "9-1": [
    {
      title: "Задеплой Telegram бота",
      titleEn: "Deploy a Telegram bot",
      description:
        "Создай и задеплой Telegram бота, используя Telegram Bot API + любой AI. Загрузи ссылку на бота (@username) и скриншот диалога с ботом.",
      descriptionEn:
        "Create and deploy a Telegram bot using the Telegram Bot API + any AI. Upload the bot link (@username) and a screenshot of a conversation with it.",
    },
    {
      title: "Документация проекта",
      titleEn: "Project documentation",
      description:
        "Напиши короткое README для своего Telegram бота: что делает, как использовать, технологии. Загрузи файл или вставь текст в комментарий.",
      descriptionEn:
        "Write a short README for your Telegram bot: what it does, how to use it, technologies. Upload the file or paste the text as a comment.",
    },
  ],

  "9-2": [
    {
      title: "Задеплой SaaS продукт",
      titleEn: "Deploy a SaaS product",
      description:
        "Создай и задеплой AI SaaS продукт на Vercel. Загрузи ссылку на рабочее приложение и скриншот ключевого функционала.",
      descriptionEn:
        "Create and deploy an AI SaaS product on Vercel. Upload a link to the working app and a screenshot of the key feature.",
    },
    {
      title: "Подключи оплату",
      titleEn: "Connect payments",
      description:
        "Подключи Stripe к своему SaaS (можно в тестовом режиме). Загрузи скриншот страницы оплаты или Stripe Dashboard.",
      descriptionEn:
        "Connect Stripe to your SaaS (test mode is fine). Upload a screenshot of the payment page or Stripe Dashboard.",
    },
  ],

  "9-3": [
    {
      title: "Создай агента-автоматизатора",
      titleEn: "Build an automation agent",
      description:
        "Создай агента, который автоматически мониторит что-то и отправляет отчёты. Загрузи скриншот работы агента и пример сгенерированного отчёта.",
      descriptionEn:
        "Create an agent that automatically monitors something and sends reports. Upload a screenshot of the agent running and an example generated report.",
    },
  ],

  "9-4": [
    {
      title: "Финальный проект — портфолио",
      titleEn: "Final project — portfolio",
      description:
        "Создай страницу портфолио (Notion, GitHub Pages или отдельный сайт), где представлены все 3 проекта курса с описанием и ссылками. Загрузи ссылку на портфолио.",
      descriptionEn:
        "Create a portfolio page (Notion, GitHub Pages, or a standalone site) showcasing all 3 course projects with descriptions and links. Upload the portfolio link.",
    },
    {
      title: "Итоговый отчёт о пройденном пути",
      titleEn: "Final learning journey report",
      description:
        "Напиши короткое эссе (200–400 слов): что ты узнал на курсе, как изменилось твоё отношение к AI, какие планы на будущее. Загрузи текст или файл.",
      descriptionEn:
        "Write a short essay (200–400 words): what you learned in the course, how your view of AI has changed, your plans for the future. Upload the text or file.",
    },
  ],
};
