import { PrismaClient } from "@prisma/client";
import { LESSON_CONTENT } from "./lessons-content";
import { LESSON_CONTENT_EN } from "./lessons-content-en";
import { LESSON_CONTENT_EN_PART2 } from "./lessons-content-en-part2";
import { LESSON_CONTENT_EN_PART3 } from "./lessons-content-en-part3";
import { LESSON_CONTENT_EN_PART4 } from "./lessons-content-en-part4";
import { QUIZ_DATA } from "./quiz-data";
import { PRACTICE_DATA } from "./practice-data";

const prisma = new PrismaClient();

// ============================================
// TYPES
// ============================================

interface LessonMeta {
  order: number;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  durationMinutes: number;
  isFree: boolean;
  xpReward: number;
}

interface ModuleMeta {
  order: number;
  emoji: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  lessons: LessonMeta[];
}

// Helper: get lesson content or placeholder
function getContent(moduleOrder: number, lessonOrder: number): string {
  const key = `${moduleOrder}-${lessonOrder}`;
  return LESSON_CONTENT[key] ?? `# ${key}\n\nContent for this lesson is coming soon.`;
}

function getContentEn(moduleOrder: number, lessonOrder: number): string | undefined {
  const key = `${moduleOrder}-${lessonOrder}`;
  return (
    LESSON_CONTENT_EN[key] ??
    LESSON_CONTENT_EN_PART2[key] ??
    LESSON_CONTENT_EN_PART3[key] ??
    LESSON_CONTENT_EN_PART4[key]
  );
}

// ============================================
// COURSE STRUCTURE
// ============================================

const courseData: ModuleMeta[] = [
  // ──────────────────────────────────────────
  // MODULE 0 — ДОБРО ПОЖАЛОВАТЬ В ВАЙБКОДИНГ
  // ──────────────────────────────────────────
  {
    order: 0,
    emoji: "🚀",
    title: "Добро пожаловать в Вайбкодинг",
    titleEn: "Welcome to Vibecoding",
    description:
      "Вводный модуль: что такое вайбкодинг, что ты построишь в этом курсе и как работает платформа.",
    descriptionEn:
      "Intro module: what vibecoding is, what you'll build in this course, and how the platform works.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 50,
        durationMinutes: 10,
        title: "Что такое вайбкодинг и почему это революция",
        titleEn: "What is Vibecoding and why it's a revolution",
        description:
          "История термина от Андрея Карпатого. Почему вайбкодинг меняет правила игры в разработке.",
        descriptionEn:
          "Andrej Karpathy coined the term. Why vibecoding changes the rules of software development.",
      },
      {
        order: 2,
        isFree: true,
        xpReward: 50,
        durationMinutes: 12,
        title: "Что ты построишь в этом курсе",
        titleEn: "What you'll build in this course",
        description:
          "Роадмап от нуля до запущенного проекта. Реальные примеры того, что создают студенты.",
        descriptionEn:
          "Roadmap from zero to a launched project. Real examples of what students build.",
      },
      {
        order: 3,
        isFree: true,
        xpReward: 50,
        durationMinutes: 8,
        title: "Как работает эта платформа",
        titleEn: "How this platform works",
        description:
          "Структура курса, система прогресса, XP, ачивки и сертификат.",
        descriptionEn:
          "Course structure, progress system, XP, achievements, and certificate.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 1 — ТВОЯ РАБОЧАЯ СРЕДА
  // ──────────────────────────────────────────
  {
    order: 1,
    emoji: "💻",
    title: "Твоя рабочая среда",
    titleEn: "Your Dev Environment",
    description:
      "Настраиваем инструменты разработчика: IDE, редакторы кода, терминал и файловая структура проекта.",
    descriptionEn:
      "Setting up developer tools: IDE, code editors, terminal, and project file structure.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 50,
        durationMinutes: 10,
        title: "Что такое IDE — редактор кода",
        titleEn: "What is an IDE — code editor explained",
        description:
          "Зачем нужен редактор кода и чем он отличается от обычного текстового файла.",
        descriptionEn:
          "Why you need a code editor and how it differs from a plain text file.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 75,
        durationMinutes: 15,
        title: "VS Code — установка и первый запуск",
        titleEn: "VS Code — installation and first launch",
        description:
          "Скачиваем, устанавливаем и настраиваем VS Code. Основные расширения для начала работы.",
        descriptionEn:
          "Download, install, and configure VS Code. Essential extensions to get started.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 75,
        durationMinutes: 12,
        title: "Cursor — AI-первый редактор кода",
        titleEn: "Cursor — AI-first code editor",
        description:
          "Что такое Cursor и чем он принципиально отличается от VS Code. Обзор возможностей.",
        descriptionEn:
          "What Cursor is and how it fundamentally differs from VS Code. Feature overview.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 75,
        durationMinutes: 18,
        title: "Установка Cursor и настройка",
        titleEn: "Installing Cursor and configuration",
        description:
          "Скачиваем Cursor, настраиваем модели, подключаем API ключи. Первый запуск.",
        descriptionEn:
          "Download Cursor, configure models, connect API keys. First launch.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 75,
        durationMinutes: 15,
        title: "Терминал — не бойся командной строки",
        titleEn: "Terminal — don't fear the command line",
        description:
          "Базовые команды терминала которые нужны каждый день. PowerShell, bash, zsh.",
        descriptionEn:
          "Basic terminal commands you need every day. PowerShell, bash, zsh.",
      },
      {
        order: 6,
        isFree: false,
        xpReward: 75,
        durationMinutes: 12,
        title: "Файловая структура проекта",
        titleEn: "Project file structure",
        description:
          "Как организованы файлы в типичном веб-проекте. Что за что отвечает.",
        descriptionEn:
          "How files are organized in a typical web project. What does what.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 2 — CLAUDE AI — ТВОЙ ГЛАВНЫЙ ПАРТНЁР
  // ──────────────────────────────────────────
  {
    order: 2,
    emoji: "🤖",
    title: "Claude AI — твой главный партнёр",
    titleEn: "Claude AI — Your Main Partner",
    description:
      "Осваиваем Claude AI: веб-интерфейс, модели, промпты, Projects и работа с файлами.",
    descriptionEn:
      "Master Claude AI: web interface, models, prompts, Projects, and working with files.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 50,
        durationMinutes: 12,
        title: "Что такое Claude и чем он лучше ChatGPT",
        titleEn: "What is Claude and why it's better than ChatGPT",
        description:
          "Сравнение Claude и ChatGPT для задач разработки. Почему Claude предпочтительнее для кода.",
        descriptionEn:
          "Comparing Claude and ChatGPT for development tasks. Why Claude is preferred for code.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 75,
        durationMinutes: 10,
        title: "Claude.ai — веб-интерфейс (начинаем бесплатно)",
        titleEn: "Claude.ai — web interface (start for free)",
        description:
          "Регистрируемся на claude.ai, изучаем интерфейс, делаем первые запросы.",
        descriptionEn:
          "Register on claude.ai, explore the interface, make first requests.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 75,
        durationMinutes: 15,
        title: "Модели Claude: Haiku, Sonnet, Opus — когда какую использовать",
        titleEn: "Claude models: Haiku, Sonnet, Opus — when to use which",
        description:
          "Разница между моделями по скорости, цене и качеству. Выбираем правильную под задачу.",
        descriptionEn:
          "Differences between models in speed, price, and quality. Choose the right one for the task.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 75,
        durationMinutes: 18,
        title: "Как правильно общаться с Claude",
        titleEn: "How to effectively communicate with Claude",
        description:
          "Техники эффективных промптов для разработки. Что работает, а что нет.",
        descriptionEn:
          "Effective prompt techniques for development. What works and what doesn't.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 100,
        durationMinutes: 15,
        title: "System Prompt — задаём контекст и роль",
        titleEn: "System Prompt — setting context and role",
        description:
          "Как задать Claude роль эксперта. System prompt для разных задач разработки.",
        descriptionEn:
          "How to give Claude an expert role. System prompts for different dev tasks.",
      },
      {
        order: 6,
        isFree: false,
        xpReward: 100,
        durationMinutes: 20,
        title: "Projects в Claude — организуем работу",
        titleEn: "Projects in Claude — organize your work",
        description:
          "Claude Projects как постоянный контекст для проекта. Настройка и лучшие практики.",
        descriptionEn:
          "Claude Projects as persistent project context. Setup and best practices.",
      },
      {
        order: 7,
        isFree: false,
        xpReward: 100,
        durationMinutes: 14,
        title: "Загрузка файлов и изображений",
        titleEn: "Uploading files and images",
        description:
          "Загружаем код, скриншоты, документацию. Claude анализирует и помогает с проектом.",
        descriptionEn:
          "Upload code, screenshots, documentation. Claude analyzes and helps with your project.",
      },
      {
        order: 8,
        isFree: false,
        xpReward: 100,
        durationMinutes: 12,
        title: "Лимиты и ограничения — как работать умнее",
        titleEn: "Limits and constraints — work smarter",
        description:
          "Контекстное окно, лимиты запросов, стратегии экономии токенов.",
        descriptionEn:
          "Context window, request limits, token-saving strategies.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 3 — CURSOR — ВАЙБКОДИНГ НА МАКСИМАЛКАХ
  // ──────────────────────────────────────────
  {
    order: 3,
    emoji: "⚡",
    title: "Cursor — вайбкодинг на максималках",
    titleEn: "Cursor — Vibecoding Maxed Out",
    description:
      "Полное освоение Cursor: Chat, Composer, Agent Mode, Rules и работа с контекстом.",
    descriptionEn:
      "Master Cursor completely: Chat, Composer, Agent Mode, Rules, and context management.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 50,
        durationMinutes: 12,
        title: "Chat, Composer и Agent Mode — в чём разница",
        titleEn: "Chat, Composer and Agent Mode — what's the difference",
        description:
          "Три режима работы Cursor. Когда использовать каждый из них для максимальной эффективности.",
        descriptionEn:
          "Three Cursor modes. When to use each for maximum efficiency.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 75,
        durationMinutes: 15,
        title: "Tab автодополнение — пишем код в 10x быстрее",
        titleEn: "Tab autocomplete — code 10x faster",
        description:
          "Умное автодополнение Cursor на практике. Как принимать и отклонять предложения.",
        descriptionEn:
          "Cursor's smart autocomplete in practice. How to accept and reject suggestions.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 75,
        durationMinutes: 18,
        title: "Cursor Rules — учим ИИ работать как надо",
        titleEn: "Cursor Rules — teach AI to work your way",
        description:
          "Создаём .cursorrules файл. Задаём стиль кода, стек технологий и предпочтения.",
        descriptionEn:
          "Create .cursorrules file. Set code style, tech stack, and preferences.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 100,
        durationMinutes: 15,
        title: "Контекст: @files, @docs, @web, @codebase",
        titleEn: "Context: @files, @docs, @web, @codebase",
        description:
          "Как подключать нужный контекст к запросам. @-команды которые меняют качество ответов.",
        descriptionEn:
          "How to connect the right context to requests. @-commands that improve response quality.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 100,
        durationMinutes: 30,
        title: "Первый проект: приложение на Next.js за 30 минут",
        titleEn: "First project: Next.js app in 30 minutes",
        description:
          "Строим полноценное React/Next.js приложение с нуля только с помощью промптов. Практика вайбкодинга.",
        descriptionEn:
          "Build a full React/Next.js app from scratch using only prompts. Vibecoding in practice.",
      },
      {
        order: 6,
        isFree: false,
        xpReward: 100,
        durationMinutes: 20,
        title: "Работа с ошибками через ИИ",
        titleEn: "Debugging with AI",
        description:
          "Как правильно описывать баги Claude. Техники отладки с помощью AI.",
        descriptionEn:
          "How to properly describe bugs to Claude. AI-assisted debugging techniques.",
      },
      {
        order: 7,
        isFree: false,
        xpReward: 100,
        durationMinutes: 22,
        title: "Composer для больших изменений",
        titleEn: "Composer for large changes",
        description:
          "Composer Mode для рефакторинга и крупных изменений в кодовой базе.",
        descriptionEn:
          "Composer Mode for refactoring and large-scale codebase changes.",
      },
      {
        order: 8,
        isFree: false,
        xpReward: 125,
        durationMinutes: 25,
        title: "Agent Mode — полная автоматизация",
        titleEn: "Agent Mode — full automation",
        description:
          "Agent Mode берёт задачу и выполняет её самостоятельно. Настройка и лучшие практики.",
        descriptionEn:
          "Agent Mode takes a task and executes it autonomously. Setup and best practices.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 4 — ЧТО ТАКОЕ API
  // ──────────────────────────────────────────
  {
    order: 4,
    emoji: "🔌",
    title: "Что такое API",
    titleEn: "What is an API",
    description:
      "Понимаем API без страха: REST, ключи, безопасность и первые запросы к Anthropic API.",
    descriptionEn:
      "Understanding APIs without fear: REST, keys, security, and first Anthropic API requests.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 50,
        durationMinutes: 12,
        title: "API — простое объяснение для нетехнарей",
        titleEn: "API — simple explanation for non-technical people",
        description:
          "API как официант в ресторане. Как сервисы общаются друг с другом простыми словами.",
        descriptionEn:
          "API as a restaurant waiter. How services communicate with each other in plain words.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 75,
        durationMinutes: 18,
        title: "REST API: запросы, ответы, коды статуса",
        titleEn: "REST API: requests, responses, status codes",
        description:
          "GET, POST, PUT, DELETE. HTTP статусы 200/404/500. Что такое JSON.",
        descriptionEn:
          "GET, POST, PUT, DELETE. HTTP statuses 200/404/500. What is JSON.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 75,
        durationMinutes: 15,
        title: "API ключи и безопасность — .env файлы",
        titleEn: "API keys and security — .env files",
        description:
          "Как хранить секреты в .env файлах. Почему нельзя коммитить ключи в Git.",
        descriptionEn:
          "How to store secrets in .env files. Why you must never commit keys to Git.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 100,
        durationMinutes: 20,
        title: "Anthropic API — подключаемся к Claude программно",
        titleEn: "Anthropic API — connect to Claude programmatically",
        description:
          "Получаем API ключ, изучаем документацию, делаем первый запрос через Cursor.",
        descriptionEn:
          "Get an API key, explore docs, make the first request through Cursor.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 100,
        durationMinutes: 25,
        title: "Первый запрос к API — пишем AI-чат",
        titleEn: "First API request — build an AI chat",
        description:
          "Строим простой AI-чат на Node.js с Anthropic API. Полный разбор кода.",
        descriptionEn:
          "Build a simple AI chat on Node.js with Anthropic API. Full code walkthrough.",
      },
      {
        order: 6,
        isFree: false,
        xpReward: 100,
        durationMinutes: 18,
        title: "Популярные API: OpenAI, Telegram, Stripe",
        titleEn: "Popular APIs: OpenAI, Telegram, Stripe",
        description:
          "Обзор ключевых API которые используются в большинстве проектов вайбкодеров.",
        descriptionEn:
          "Overview of key APIs used in most vibecoding projects.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 5 — GITHUB — КОНТРОЛЬ ВЕРСИЙ
  // ──────────────────────────────────────────
  {
    order: 5,
    emoji: "🐱",
    title: "GitHub — контроль версий",
    titleEn: "GitHub — Version Control",
    description:
      "Git и GitHub без паники: репозитории, коммиты, ветки и бесплатный хостинг на GitHub Pages.",
    descriptionEn:
      "Git and GitHub without panic: repositories, commits, branches, and free hosting on GitHub Pages.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 50,
        durationMinutes: 10,
        title: "Зачем нужен Git и GitHub — простое объяснение",
        titleEn: "Why Git and GitHub — simple explanation",
        description:
          "Git как машина времени для кода. Зачем нужен контроль версий в реальных проектах.",
        descriptionEn:
          "Git as a time machine for code. Why version control matters in real projects.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 75,
        durationMinutes: 12,
        title: "Ключевые понятия: репозиторий, коммит, ветка",
        titleEn: "Key concepts: repository, commit, branch",
        description:
          "Словарь Git-разработчика. Репозиторий, коммит, ветка, merge — объясняем на примерах.",
        descriptionEn:
          "Git developer vocabulary. Repository, commit, branch, merge — explained with examples.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 75,
        durationMinutes: 15,
        title: "Создаём аккаунт и первый репозиторий",
        titleEn: "Create an account and first repository",
        description:
          "Регистрация на GitHub, создание репозитория, первый коммит через интерфейс.",
        descriptionEn:
          "Sign up for GitHub, create a repository, make your first commit through the interface.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 75,
        durationMinutes: 18,
        title: "Основные команды Git с помощью ИИ",
        titleEn: "Basic Git commands with AI help",
        description:
          "git init, add, commit, push — объясняем Claude что нужно сделать и он пишет команды.",
        descriptionEn:
          "git init, add, commit, push — tell Claude what to do and it writes the commands.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 100,
        durationMinutes: 14,
        title: "GitHub Desktop — для тех кто не любит терминал",
        titleEn: "GitHub Desktop — for those who hate the terminal",
        description:
          "Визуальный интерфейс для Git. Коммиты, ветки и sync без единой команды в терминале.",
        descriptionEn:
          "Visual Git interface. Commits, branches, and sync without a single terminal command.",
      },
      {
        order: 6,
        isFree: false,
        xpReward: 100,
        durationMinutes: 16,
        title: "Push и Pull — работаем с удалённым репозиторием",
        titleEn: "Push and Pull — work with remote repository",
        description:
          "Синхронизация локального и удалённого репозитория. Разрешение конфликтов.",
        descriptionEn:
          "Sync local and remote repository. Resolve conflicts.",
      },
      {
        order: 7,
        isFree: false,
        xpReward: 100,
        durationMinutes: 15,
        title: "GitHub Pages — бесплатный хостинг для твоих проектов",
        titleEn: "GitHub Pages — free hosting for your projects",
        description:
          "Деплоим статический сайт на GitHub Pages за 5 минут. Бесплатный домен и SSL.",
        descriptionEn:
          "Deploy a static site to GitHub Pages in 5 minutes. Free domain and SSL.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 6 — СОЗДАНИЕ ПРОЕКТОВ С НУЛЯ
  // ──────────────────────────────────────────
  {
    order: 6,
    emoji: "🏗️",
    title: "Создание проектов с нуля",
    titleEn: "Building Projects from Scratch",
    description:
      "Методология вайбкодинга: от идеи до запущенного продукта с базой данных и оплатой.",
    descriptionEn:
      "Vibecoding methodology: from idea to launched product with database and payments.",
    lessons: [
      {
        order: 1,
        isFree: false,
        xpReward: 100,
        durationMinutes: 15,
        title: "Методология вайбкодинга — от идеи до кода",
        titleEn: "Vibecoding methodology — from idea to code",
        description:
          "Как правильно декомпозировать задачу для AI. Порядок разработки проекта с нуля.",
        descriptionEn:
          "How to properly break down tasks for AI. Project development order from scratch.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 100,
        durationMinutes: 45,
        title: "Telegram бот с AI за 1 час",
        titleEn: "Telegram bot with AI in 1 hour",
        description:
          "Строим Telegram бота с Claude AI: команды, диалоги, контекст разговора.",
        descriptionEn:
          "Build a Telegram bot with Claude AI: commands, dialogs, conversation context.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 100,
        durationMinutes: 30,
        title: "Landing Page — продающий сайт",
        titleEn: "Landing Page — a selling website",
        description:
          "Создаём конверсионный лендинг с нуля. HTML/CSS/JS через промпты.",
        descriptionEn:
          "Create a converting landing page from scratch. HTML/CSS/JS through prompts.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 100,
        durationMinutes: 35,
        title: "Веб-приложение на Next.js",
        titleEn: "Web app on Next.js",
        description:
          "Строим полноценное веб-приложение с роутингом и компонентами через Cursor.",
        descriptionEn:
          "Build a full web app with routing and components through Cursor.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 100,
        durationMinutes: 20,
        title: "Деплой на Vercel — сайт онлайн за 5 минут",
        titleEn: "Deploy to Vercel — site online in 5 minutes",
        description:
          "GitHub + Vercel = автоматический деплой. Бесплатный хостинг для твоих проектов.",
        descriptionEn:
          "GitHub + Vercel = automatic deployment. Free hosting for your projects.",
      },
      {
        order: 6,
        isFree: false,
        xpReward: 125,
        durationMinutes: 25,
        title: "Supabase — база данных без боли",
        titleEn: "Supabase — database without pain",
        description:
          "Supabase как бэкенд без бэкенда. Настройка БД, аутентификация, API.",
        descriptionEn:
          "Supabase as a backend-less backend. DB setup, authentication, API.",
      },
      {
        order: 7,
        isFree: false,
        xpReward: 125,
        durationMinutes: 25,
        title: "Stripe — принимаем оплату",
        titleEn: "Stripe — accept payments",
        description:
          "Интегрируем Stripe в проект через Cursor. Платёжные формы и webhooks.",
        descriptionEn:
          "Integrate Stripe through Cursor. Payment forms and webhooks.",
      },
      {
        order: 8,
        isFree: false,
        xpReward: 150,
        durationMinutes: 20,
        title: "От идеи до запуска за неделю — чеклист",
        titleEn: "From idea to launch in a week — checklist",
        description:
          "Полный чеклист запуска продукта. MVP за 7 дней с вайбкодингом.",
        descriptionEn:
          "Full product launch checklist. MVP in 7 days with vibecoding.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 7 — CLAUDE CODE — АГЕНТ ДЛЯ РАЗРАБОТКИ
  // ──────────────────────────────────────────
  {
    order: 7,
    emoji: "🧠",
    title: "Claude Code — агент для разработки",
    titleEn: "Claude Code — Development Agent",
    description:
      "Осваиваем Claude Code: установка, команды, хуки, скиллы и постоянная память агента.",
    descriptionEn:
      "Master Claude Code: installation, commands, hooks, skills, and persistent agent memory.",
    lessons: [
      {
        order: 1,
        isFree: false,
        xpReward: 100,
        durationMinutes: 12,
        title: "Что такое Claude Code и зачем он нужен",
        titleEn: "What is Claude Code and why you need it",
        description:
          "Claude Code vs Cursor — когда что использовать. Уникальные возможности агента.",
        descriptionEn:
          "Claude Code vs Cursor — when to use which. Unique agent capabilities.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 100,
        durationMinutes: 20,
        title: "Установка и первый запуск Claude Code",
        titleEn: "Installation and first run of Claude Code",
        description:
          "Устанавливаем Claude Code через npm, настраиваем, запускаем первый агент.",
        descriptionEn:
          "Install Claude Code via npm, configure, run your first agent.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 100,
        durationMinutes: 18,
        title: "Основные команды и слэш-команды",
        titleEn: "Main commands and slash commands",
        description:
          "Все слэш-команды Claude Code. /help, /clear, /commit и другие — разбираем на практике.",
        descriptionEn:
          "All Claude Code slash commands. /help, /clear, /commit and more — in practice.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 100,
        durationMinutes: 22,
        title: "Как Claude Code читает и понимает проект",
        titleEn: "How Claude Code reads and understands your project",
        description:
          "CLAUDE.md, context loading, индексация кодовой базы. Как агент понимает твой проект.",
        descriptionEn:
          "CLAUDE.md, context loading, codebase indexing. How the agent understands your project.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 125,
        durationMinutes: 25,
        title: "Хуки (Hooks) — автоматизируем рутину",
        titleEn: "Hooks — automate routine tasks",
        description:
          "Pre/post хуки для автоматизации: форматирование, тесты, валидация при каждом изменении.",
        descriptionEn:
          "Pre/post hooks for automation: formatting, tests, validation on every change.",
      },
      {
        order: 6,
        isFree: false,
        xpReward: 125,
        durationMinutes: 22,
        title: "Скиллы (Skills) — расширяем возможности агента",
        titleEn: "Skills — extend agent capabilities",
        description:
          "Создаём кастомные скиллы для Claude Code. Переиспользуемые инструкции для агента.",
        descriptionEn:
          "Create custom skills for Claude Code. Reusable instructions for the agent.",
      },
      {
        order: 7,
        isFree: false,
        xpReward: 125,
        durationMinutes: 20,
        title: "Мемори (Memory) — постоянная память агента",
        titleEn: "Memory — persistent agent memory",
        description:
          "MEMORY.md и система памяти Claude Code. Агент помнит контекст между сессиями.",
        descriptionEn:
          "MEMORY.md and the Claude Code memory system. Agent remembers context between sessions.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 8 — СУБАГЕНТЫ И МУЛЬТИАГЕНТНЫЕ СИСТЕМЫ
  // ──────────────────────────────────────────
  {
    order: 8,
    emoji: "🤝",
    title: "Субагенты и мультиагентные системы",
    titleEn: "Subagents and Multi-agent Systems",
    description:
      "AI агенты, делегирование задач, команды агентов, MCP и продвинутые паттерны.",
    descriptionEn:
      "AI agents, task delegation, agent teams, MCP, and advanced patterns.",
    lessons: [
      {
        order: 1,
        isFree: false,
        xpReward: 100,
        durationMinutes: 14,
        title: "Что такое AI агент — отличие от чат-бота",
        titleEn: "What is an AI agent — difference from a chatbot",
        description:
          "Агент планирует, выбирает инструменты и действует. Паттерн ReAct объясняем просто.",
        descriptionEn:
          "An agent plans, chooses tools, and acts. The ReAct pattern explained simply.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 100,
        durationMinutes: 18,
        title: "Субагенты — делегируем задачи специалистам",
        titleEn: "Subagents — delegate tasks to specialists",
        description:
          "Как разбить большую задачу на субагентов. Паттерн оркестратор-воркер.",
        descriptionEn:
          "How to split a big task into subagents. Orchestrator-worker pattern.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 100,
        durationMinutes: 25,
        title: "Создаём команду агентов в Claude Code",
        titleEn: "Create an agent team in Claude Code",
        description:
          "Практика: создаём команду из CEO, разработчика и тестировщика в Claude Code.",
        descriptionEn:
          "Practice: create a team with CEO, developer, and tester in Claude Code.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 125,
        durationMinutes: 22,
        title: "Параллельное выполнение — несколько агентов одновременно",
        titleEn: "Parallel execution — multiple agents simultaneously",
        description:
          "Запускаем несколько агентов параллельно. Как это ускоряет разработку в разы.",
        descriptionEn:
          "Run multiple agents in parallel. How this speeds up development many times over.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 125,
        durationMinutes: 20,
        title: "MCP (Model Context Protocol) — расширяем инструменты агентов",
        titleEn: "MCP (Model Context Protocol) — extend agent tools",
        description:
          "MCP серверы для браузера, базы данных, GitHub. Подключаем внешние инструменты к агентам.",
        descriptionEn:
          "MCP servers for browser, database, GitHub. Connect external tools to agents.",
      },
      {
        order: 6,
        isFree: false,
        xpReward: 150,
        durationMinutes: 30,
        title: "Практика: мультиагентная система для реального проекта",
        titleEn: "Practice: multi-agent system for a real project",
        description:
          "Строим мультиагентную систему для реального проекта от начала до конца.",
        descriptionEn:
          "Build a multi-agent system for a real project from start to finish.",
      },
      {
        order: 7,
        isFree: false,
        xpReward: 150,
        durationMinutes: 20,
        title: "Продвинутые паттерны работы с агентами",
        titleEn: "Advanced agent patterns",
        description:
          "Checkpoints, самоверификация, retry-логика. Как сделать агентов надёжными.",
        descriptionEn:
          "Checkpoints, self-verification, retry logic. How to make agents reliable.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 10 — МАСТЕР CLAUDE CODE: ВВЕДЕНИЕ
  // ──────────────────────────────────────────
  {
    order: 10,
    emoji: "⚡",
    title: "Мастер Claude Code: Знакомство",
    titleEn: "Master Claude Code: Introduction",
    description:
      "Что такое Claude Code, зачем он нужен и чем отличается от конкурентов. Тарифы и подписки.",
    descriptionEn:
      "What Claude Code is, why you need it, and how it differs from competitors. Plans and pricing.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 75,
        durationMinutes: 15,
        title: "Что такое Claude Code — полный разбор",
        titleEn: "What is Claude Code — full breakdown",
        description:
          "CLI-инструмент с доступом к терминалу. Как ИИ управляет компьютером и пишет код.",
        descriptionEn:
          "CLI tool with terminal access. How AI controls your computer and writes code.",
      },
      {
        order: 2,
        isFree: true,
        xpReward: 75,
        durationMinutes: 12,
        title: "Сравнение с конкурентами: Cursor, Windsurf, Copilot",
        titleEn: "Comparison with competitors: Cursor, Windsurf, Copilot",
        description:
          "Обзор всех популярных AI-инструментов для разработки. Почему именно Claude Code.",
        descriptionEn:
          "Overview of all popular AI dev tools. Why Claude Code specifically.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 75,
        durationMinutes: 14,
        title: "Тарифы и подписки — что выбрать",
        titleEn: "Pricing and subscriptions — what to choose",
        description:
          "Разбор подписок $20, $100, $200 в месяц. API vs подписка. Как не переплатить.",
        descriptionEn:
          "Breakdown of $20, $100, $200/month plans. API vs subscription. How not to overpay.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 75,
        durationMinutes: 10,
        title: "Claude Code как личный ИИ-ассистент",
        titleEn: "Claude Code as personal AI assistant",
        description:
          "Не только кодинг: бронирование, управление файлами, автоматизация задач через агента.",
        descriptionEn:
          "Not just coding: booking, file management, task automation through the agent.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 11 — УСТАНОВКА И ПЕРВЫЙ ЗАПУСК
  // ──────────────────────────────────────────
  {
    order: 11,
    emoji: "🛠️",
    title: "Установка и первый запуск",
    titleEn: "Installation and First Launch",
    description:
      "Устанавливаем VS Code, расширение Claude Code и настраиваем первый запуск. Терминал vs расширение.",
    descriptionEn:
      "Install VS Code, the Claude Code extension, and configure the first launch. Terminal vs extension.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 75,
        durationMinutes: 15,
        title: "Установка VS Code и расширения Claude Code",
        titleEn: "Installing VS Code and the Claude Code extension",
        description:
          "Пошаговая установка VS Code и расширения Claude Code. Авторизация через подписку.",
        descriptionEn:
          "Step-by-step installation of VS Code and the Claude Code extension. Authenticate via subscription.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 75,
        durationMinutes: 12,
        title: "Установка через терминал (npm install)",
        titleEn: "Installation via terminal (npm install)",
        description:
          "Альтернативный способ — npm install @anthropic-ai/claude-code. Запуск командой claude.",
        descriptionEn:
          "Alternative method — npm install @anthropic-ai/claude-code. Launch with the claude command.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 75,
        durationMinutes: 10,
        title: "Что такое IDE — разбор для новичков",
        titleEn: "What is an IDE — explained for beginners",
        description:
          "IDE = файловый менеджер + редактор кода + терминал + AI чат. Как это всё связано.",
        descriptionEn:
          "IDE = file manager + code editor + terminal + AI chat. How it all connects.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 75,
        durationMinutes: 12,
        title: "Терминал vs Расширение — что выбрать",
        titleEn: "Terminal vs Extension — what to choose",
        description:
          "Сравнение двух режимов работы. Когда нужен терминал, когда хватает расширения.",
        descriptionEn:
          "Comparison of two work modes. When you need the terminal, when the extension is enough.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 100,
        durationMinutes: 14,
        title: "Голосовой ввод — общаемся с агентом голосом",
        titleEn: "Voice input — talk to the agent by voice",
        description:
          "AquaVoice и встроенный voice mode в терминале. Настройка голосового управления.",
        descriptionEn:
          "AquaVoice and built-in voice mode in the terminal. Setting up voice control.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 12 — ИНТЕРФЕЙС И РЕЖИМЫ РАБОТЫ
  // ──────────────────────────────────────────
  {
    order: 12,
    emoji: "🎛️",
    title: "Интерфейс и режимы работы",
    titleEn: "Interface and Work Modes",
    description:
      "Все режимы Claude Code: Ask, Edit, Bypass Permissions, Plan Mode, Thinking Mode. Как работать эффективно.",
    descriptionEn:
      "All Claude Code modes: Ask, Edit, Bypass Permissions, Plan Mode, Thinking Mode. How to work efficiently.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 75,
        durationMinutes: 12,
        title: "Обзор интерфейса чата Claude Code",
        titleEn: "Claude Code chat interface overview",
        description:
          "История диалогов, вкладки, прикрепление файлов, смена модели, account usage.",
        descriptionEn:
          "Conversation history, tabs, file attachments, model switching, account usage.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 75,
        durationMinutes: 10,
        title: "Режим Ask Before Edits — контроль каждого шага",
        titleEn: "Ask Before Edits mode — control every step",
        description:
          "Агент спрашивает разрешение перед каждым действием. Когда это полезно.",
        descriptionEn:
          "The agent asks permission before each action. When this is useful.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 75,
        durationMinutes: 10,
        title: "Режим Edit Automatic — умный автопилот",
        titleEn: "Edit Automatic mode — smart autopilot",
        description:
          "Файлы редактирует без вопросов, но спрашивает перед командами в терминале.",
        descriptionEn:
          "Edits files without asking, but asks before running terminal commands.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 100,
        durationMinutes: 15,
        title: "Bypass Permissions — полный автопилот",
        titleEn: "Bypass Permissions — full autopilot",
        description:
          "Самый мощный режим: агент делает всё без вопросов. Настройка, риски, когда использовать.",
        descriptionEn:
          "The most powerful mode: agent does everything without asking. Setup, risks, when to use.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 100,
        durationMinutes: 14,
        title: "Plan Mode — сначала план, потом действие",
        titleEn: "Plan Mode — plan first, then act",
        description:
          "Агент составляет подробный план перед реализацией. Почему это надёжнее.",
        descriptionEn:
          "The agent creates a detailed plan before implementing. Why this is more reliable.",
      },
      {
        order: 6,
        isFree: false,
        xpReward: 100,
        durationMinutes: 12,
        title: "Thinking Mode и Fast Mode",
        titleEn: "Thinking Mode and Fast Mode",
        description:
          "Режим размышления для сложных задач. Fast Mode — в 2.5 раза быстрее, но дороже.",
        descriptionEn:
          "Thinking mode for complex tasks. Fast Mode — 2.5x faster but more expensive.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 13 — CLAUDE.MD И СИСТЕМНЫЙ ПРОМПТ
  // ──────────────────────────────────────────
  {
    order: 13,
    emoji: "📝",
    title: "CLAUDE.md — мозг твоего агента",
    titleEn: "CLAUDE.md — the brain of your agent",
    description:
      "Системный промпт, который читается при каждом сообщении. Основа любого проекта с Claude Code.",
    descriptionEn:
      "The system prompt read with every message. The foundation of any Claude Code project.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 75,
        durationMinutes: 12,
        title: "Что такое CLAUDE.md и зачем он нужен",
        titleEn: "What is CLAUDE.md and why you need it",
        description:
          "Системный промпт = инструкции для агента. Как это работает под капотом.",
        descriptionEn:
          "System prompt = instructions for the agent. How it works under the hood.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 75,
        durationMinutes: 14,
        title: "Создаём CLAUDE.md с нуля",
        titleEn: "Creating CLAUDE.md from scratch",
        description:
          "Что писать в CLAUDE.md: контекст проекта, стиль кода, правила, стек технологий.",
        descriptionEn:
          "What to write in CLAUDE.md: project context, code style, rules, tech stack.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 100,
        durationMinutes: 12,
        title: "Команда /init — автогенерация CLAUDE.md",
        titleEn: "The /init command — auto-generate CLAUDE.md",
        description:
          "Claude сам изучает проект и создаёт описание. Практика с реальным репозиторием.",
        descriptionEn:
          "Claude studies the project and creates a description itself. Practice with a real repository.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 100,
        durationMinutes: 15,
        title: "Папка .claude — полная кастомизация агента",
        titleEn: "The .claude folder — full agent customization",
        description:
          "Структура папки .claude: skills, agents, settings. Создаём собственную команду агентов.",
        descriptionEn:
          "Structure of the .claude folder: skills, agents, settings. Build your own agent team.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 14 — КОНТЕКСТНОЕ ОКНО
  // ──────────────────────────────────────────
  {
    order: 14,
    emoji: "🧩",
    title: "Контекстное окно — управляем памятью агента",
    titleEn: "Context Window — managing agent memory",
    description:
      "Что попадает в контекст, как управлять им и почему это критически важно для качества работы.",
    descriptionEn:
      "What goes into the context, how to manage it, and why it's critical for output quality.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 75,
        durationMinutes: 14,
        title: "Что такое контекстное окно — простым языком",
        titleEn: "What is the context window — in plain language",
        description:
          "Оперативная память агента. Токены, лимиты, что происходит когда контекст заполнен.",
        descriptionEn:
          "The agent's working memory. Tokens, limits, what happens when context fills up.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 100,
        durationMinutes: 15,
        title: "Что попадает в контекст и как этим управлять",
        titleEn: "What goes into context and how to manage it",
        description:
          "Файлы, история диалога, CLAUDE.md. Как не тратить контекст впустую.",
        descriptionEn:
          "Files, conversation history, CLAUDE.md. How not to waste context.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 100,
        durationMinutes: 12,
        title: "Status Line и эффективная часть контекста",
        titleEn: "Status Line and effective context usage",
        description:
          "Статус-строка показывает использование контекста. Эффективные техники управления.",
        descriptionEn:
          "The status line shows context usage. Effective techniques for context management.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 15 — MCP, SKILLS И SUBAGENTS
  // ──────────────────────────────────────────
  {
    order: 15,
    emoji: "🔧",
    title: "MCP, Skills и Subagents",
    titleEn: "MCP, Skills, and Subagents",
    description:
      "Расширяем возможности Claude Code: подключаем браузер через MCP, создаём Skills, запускаем субагентов.",
    descriptionEn:
      "Extend Claude Code capabilities: connect browser via MCP, create Skills, launch subagents.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 100,
        durationMinutes: 15,
        title: "Что такое MCP (Model Context Protocol)",
        titleEn: "What is MCP (Model Context Protocol)",
        description:
          "Протокол для подключения внешних инструментов к агенту. Браузер, БД, GitHub и другие.",
        descriptionEn:
          "Protocol for connecting external tools to the agent. Browser, database, GitHub and more.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 100,
        durationMinutes: 18,
        title: "Подключаем браузер через MCP",
        titleEn: "Connecting a browser via MCP",
        description:
          "Claude управляет браузером: открывает сайты, заполняет формы, делает скриншоты.",
        descriptionEn:
          "Claude controls the browser: opens sites, fills forms, takes screenshots.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 100,
        durationMinutes: 14,
        title: "Skills — создаём переиспользуемые инструкции",
        titleEn: "Skills — create reusable instructions",
        description:
          "Skills = slash-команды с инструкциями. Как создать /deploy, /review, /test.",
        descriptionEn:
          "Skills = slash commands with instructions. How to create /deploy, /review, /test.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 125,
        durationMinutes: 16,
        title: "Subagents — делегируем задачи",
        titleEn: "Subagents — delegate tasks",
        description:
          "Субагент — это отдельный Claude для подзадачи. Параллельная работа нескольких агентов.",
        descriptionEn:
          "A subagent is a separate Claude for a subtask. Multiple agents working in parallel.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 125,
        durationMinutes: 18,
        title: "Agent Teams — команды агентов",
        titleEn: "Agent Teams — teams of agents",
        description:
          "CEO, разработчик, тестировщик — каждый агент со своей специализацией и инструкциями.",
        descriptionEn:
          "CEO, developer, tester — each agent with its own specialization and instructions.",
      },
      {
        order: 6,
        isFree: false,
        xpReward: 150,
        durationMinutes: 20,
        title: "Практика: мультиагентная система с нуля",
        titleEn: "Practice: multi-agent system from scratch",
        description:
          "Собираем команду агентов для реального проекта. Параллельное выполнение задач.",
        descriptionEn:
          "Assemble an agent team for a real project. Parallel task execution.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 16 — ПРОДВИНУТЫЕ ТЕХНИКИ
  // ──────────────────────────────────────────
  {
    order: 16,
    emoji: "🚀",
    title: "Продвинутые техники Claude Code",
    titleEn: "Advanced Claude Code Techniques",
    description:
      "Git Worktree, советы создателей, автоматизация CI/CD. От уверенного пользователя до эксперта.",
    descriptionEn:
      "Git Worktree, creator tips, CI/CD automation. From confident user to expert.",
    lessons: [
      {
        order: 1,
        isFree: false,
        xpReward: 125,
        durationMinutes: 16,
        title: "Git Worktree — параллельная разработка в изолированных ветках",
        titleEn: "Git Worktree — parallel development in isolated branches",
        description:
          "Несколько агентов работают в разных ветках одновременно. Ускоряем разработку в разы.",
        descriptionEn:
          "Multiple agents work in different branches simultaneously. Speed up development many times.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 125,
        durationMinutes: 14,
        title: "GitHub Actions — автоматизируем деплой",
        titleEn: "GitHub Actions — automate deployment",
        description:
          "Claude Code + GitHub Actions = автодеплой при каждом коммите. Настройка CI/CD.",
        descriptionEn:
          "Claude Code + GitHub Actions = auto-deploy on every commit. Setting up CI/CD.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 150,
        durationMinutes: 18,
        title: "Советы от создателей Claude Code",
        titleEn: "Tips from the creators of Claude Code",
        description:
          "Официальные рекомендации Anthropic: как правильно работать с агентом, что делать при ошибках.",
        descriptionEn:
          "Official Anthropic recommendations: how to work with the agent properly, what to do on errors.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 200,
        durationMinutes: 25,
        title: "Финальная практика: полноценный проект с Claude Code",
        titleEn: "Final practice: complete project with Claude Code",
        description:
          "Собираем всё вместе: CLAUDE.md + MCP + Skills + Subagents. Реальный проект от А до Я.",
        descriptionEn:
          "Put it all together: CLAUDE.md + MCP + Skills + Subagents. A real project from A to Z.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 17 — ВЫБОР IDE
  // ──────────────────────────────────────────
  {
    order: 17,
    emoji: "🖥️",
    title: "Выбор IDE — твой инструмент разработки",
    titleEn: "Choosing an IDE — Your Development Tool",
    description:
      "Обзор всех популярных AI-IDE: VS Code, Cursor, Windsurf, Bolt. Как выбрать то, что подходит именно тебе.",
    descriptionEn:
      "Overview of all popular AI IDEs: VS Code, Cursor, Windsurf, Bolt. How to pick what suits you best.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 50,
        durationMinutes: 10,
        title: "Что такое IDE и зачем она нужна вайбкодеру",
        titleEn: "What is an IDE and why vibe coders need one",
        description:
          "IDE = рабочее место разработчика. Объясняем что внутри и почему это важно для вайбкодинга.",
        descriptionEn:
          "IDE = a developer's workstation. What's inside and why it matters for vibe coding.",
      },
      {
        order: 2,
        isFree: true,
        xpReward: 75,
        durationMinutes: 15,
        title: "Полный обзор AI-IDE: VS Code, Cursor, Windsurf, Bolt, Replit",
        titleEn: "Full AI IDE overview: VS Code, Cursor, Windsurf, Bolt, Replit",
        description:
          "Сравнительная таблица всех популярных инструментов. Плюсы, минусы, для кого каждый подходит.",
        descriptionEn:
          "Comparison table of all popular tools. Pros, cons, who each one is best for.",
      },
      {
        order: 3,
        isFree: true,
        xpReward: 50,
        durationMinutes: 8,
        title: "Как выбрать IDE под себя — личный выбор каждого",
        titleEn: "How to choose your IDE — a personal decision",
        description:
          "Нет правильного или неправильного выбора. Как решить что использовать исходя из твоих целей.",
        descriptionEn:
          "There's no right or wrong choice. How to decide based on your goals.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 18 — VS CODE ГАЙД
  // ──────────────────────────────────────────
  {
    order: 18,
    emoji: "💙",
    title: "VS Code — гайд для вайбкодера",
    titleEn: "VS Code — Guide for Vibe Coders",
    description:
      "Полная настройка VS Code под вайбкодинг: расширения, горячие клавиши, интеграция с Claude Code и GitHub Copilot.",
    descriptionEn:
      "Complete VS Code setup for vibe coding: extensions, keyboard shortcuts, Claude Code and GitHub Copilot integration.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 75,
        durationMinutes: 12,
        title: "Установка и первичная настройка VS Code",
        titleEn: "Installing and initial setup of VS Code",
        description:
          "Скачиваем, устанавливаем, выбираем тему. Обзор интерфейса для полного новичка.",
        descriptionEn:
          "Download, install, choose a theme. Interface overview for complete beginners.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 75,
        durationMinutes: 14,
        title: "Топ расширений для вайбкодинга в VS Code",
        titleEn: "Top extensions for vibe coding in VS Code",
        description:
          "Claude Code, Prettier, ESLint, GitLens, Auto Rename Tag — расширения которые реально нужны.",
        descriptionEn:
          "Claude Code, Prettier, ESLint, GitLens, Auto Rename Tag — extensions you actually need.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 75,
        durationMinutes: 12,
        title: "Горячие клавиши и трюки VS Code",
        titleEn: "VS Code keyboard shortcuts and tricks",
        description:
          "Мультикурсор, встроенный терминал, поиск по проекту, сплит-экран. Работаем в 2 раза быстрее.",
        descriptionEn:
          "Multi-cursor, built-in terminal, project search, split screen. Work twice as fast.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 100,
        durationMinutes: 15,
        title: "VS Code + Claude Code — идеальная связка",
        titleEn: "VS Code + Claude Code — the perfect combo",
        description:
          "Настройка Claude Code расширения, bypass permissions, работа с несколькими вкладками.",
        descriptionEn:
          "Configure the Claude Code extension, bypass permissions, work with multiple tabs.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 100,
        durationMinutes: 12,
        title: "GitHub Copilot в VS Code",
        titleEn: "GitHub Copilot in VS Code",
        description:
          "Встроенный AI от Microsoft как дополнение. Когда использовать Copilot, а когда Claude Code.",
        descriptionEn:
          "Microsoft's built-in AI as a supplement. When to use Copilot vs Claude Code.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 19 — CURSOR ГАЙД
  // ──────────────────────────────────────────
  {
    order: 19,
    emoji: "⚡",
    title: "Cursor — AI IDE для вайбкодинга",
    titleEn: "Cursor — AI IDE for Vibe Coding",
    description:
      "Cursor — самая популярная AI IDE. Полный гайд: установка, режимы Composer и Chat, Rules, подключение Claude.",
    descriptionEn:
      "Cursor — the most popular AI IDE. Full guide: installation, Composer and Chat modes, Rules, connecting Claude.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 75,
        durationMinutes: 12,
        title: "Что такое Cursor и почему его все используют",
        titleEn: "What is Cursor and Why Everyone Uses It",
        description:
          "История Cursor, почему он стал стандартом вайбкодинга. Чем отличается от VS Code.",
        descriptionEn:
          "The story of Cursor, why it became the vibe coding standard. How it differs from VS Code.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 75,
        durationMinutes: 14,
        title: "Установка Cursor и первый проект",
        titleEn: "Installing Cursor and Your First Project",
        description:
          "Скачиваем, настраиваем, авторизуемся. Создаём первый файл и пишем код с AI.",
        descriptionEn:
          "Download, configure, authenticate. Create your first file and write code with AI.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 75,
        durationMinutes: 15,
        title: "Режим Chat vs Composer — в чём разница",
        titleEn: "Chat vs Composer Mode — What's the Difference",
        description:
          "Chat для вопросов, Composer для изменений кода. Когда использовать каждый режим.",
        descriptionEn:
          "Chat for questions, Composer for code changes. When to use each mode.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 100,
        durationMinutes: 14,
        title: "Cursor Rules — аналог CLAUDE.md",
        titleEn: "Cursor Rules — The CLAUDE.md Equivalent",
        description:
          "Файл .cursorrules: как написать системный промпт для Cursor. Примеры для разных стеков.",
        descriptionEn:
          "The .cursorrules file: how to write a system prompt for Cursor. Examples for different stacks.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 100,
        durationMinutes: 12,
        title: "Подключаем Claude в Cursor",
        titleEn: "Connecting Claude to Cursor",
        description:
          "Cursor по умолчанию использует GPT-4. Как переключить на Claude Sonnet/Opus через API.",
        descriptionEn:
          "Cursor uses GPT-4 by default. How to switch to Claude Sonnet/Opus via API.",
      },
      {
        order: 6,
        isFree: false,
        xpReward: 100,
        durationMinutes: 16,
        title: "Cursor + Claude Code — двойная мощь",
        titleEn: "Cursor + Claude Code — Double Power",
        description:
          "Cursor для интерактивного кодинга, Claude Code для автономных задач. Как совмещать.",
        descriptionEn:
          "Cursor for interactive coding, Claude Code for autonomous tasks. How to combine them.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 20 — WINDSURF ГАЙД
  // ──────────────────────────────────────────
  {
    order: 20,
    emoji: "🌊",
    title: "Windsurf — IDE от Codeium",
    titleEn: "Windsurf — IDE by Codeium",
    description:
      "Windsurf (Codeium) — быстрый конкурент Cursor с уникальным Cascade режимом. Полный гайд по установке и работе.",
    descriptionEn:
      "Windsurf (Codeium) — a fast Cursor competitor with a unique Cascade mode. Full installation and usage guide.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 75,
        durationMinutes: 10,
        title: "Windsurf — что это и чем отличается от Cursor",
        titleEn: "Windsurf — What It Is and How It Differs from Cursor",
        description:
          "История Codeium и Windsurf. Главное отличие: Cascade — агентный режим прямо в IDE.",
        descriptionEn:
          "The story of Codeium and Windsurf. Key difference: Cascade — an agent mode built right into the IDE.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 75,
        durationMinutes: 12,
        title: "Установка и настройка Windsurf",
        titleEn: "Installing and Configuring Windsurf",
        description:
          "Скачиваем Windsurf, авторизуемся, настраиваем модель. Обзор интерфейса.",
        descriptionEn:
          "Download Windsurf, authenticate, configure the model. Interface overview.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 100,
        durationMinutes: 15,
        title: "Cascade — агентный режим Windsurf",
        titleEn: "Cascade — Windsurf's Agent Mode",
        description:
          "Cascade отличается от обычного чата: агент видит весь проект и действует самостоятельно.",
        descriptionEn:
          "Cascade is different from regular chat: the agent sees the whole project and acts autonomously.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 100,
        durationMinutes: 14,
        title: "Windsurf Rules и настройка под проект",
        titleEn: "Windsurf Rules and Project Configuration",
        description:
          "Системный промпт для Windsurf, правила кодирования, настройка под конкретный стек.",
        descriptionEn:
          "System prompt for Windsurf, coding rules, configuration for a specific stack.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 100,
        durationMinutes: 12,
        title: "Тарифы Windsurf — что бесплатно, что платно",
        titleEn: "Windsurf Plans — What's Free, What's Paid",
        description:
          "Сравнение бесплатного и платного планов. Windsurf vs Cursor по цене и возможностям.",
        descriptionEn:
          "Comparing free and paid plans. Windsurf vs Cursor by price and features.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 21 — BOLT И LOVABLE
  // ──────────────────────────────────────────
  {
    order: 21,
    emoji: "🔥",
    title: "Bolt.new и Lovable — вайбкодинг в браузере",
    titleEn: "Bolt.new and Lovable — Vibe Coding in the Browser",
    description:
      "No-install инструменты для вайбкодинга прямо в браузере. Идеально для быстрых прототипов и лендингов.",
    descriptionEn:
      "No-install tools for vibe coding right in the browser. Perfect for quick prototypes and landing pages.",
    lessons: [
      {
        order: 1,
        isFree: true,
        xpReward: 75,
        durationMinutes: 10,
        title: "Bolt.new — полноценный проект за 5 минут",
        titleEn: "Bolt.new — A Full Project in 5 Minutes",
        description:
          "Bolt.new запускает Next.js/React проект прямо в браузере. Деплой в один клик на Netlify.",
        descriptionEn:
          "Bolt.new runs a Next.js/React project right in the browser. One-click deploy to Netlify.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 75,
        durationMinutes: 12,
        title: "Практика с Bolt: строим лендинг",
        titleEn: "Practice with Bolt: Building a Landing Page",
        description:
          "От пустого окна до готового лендинга за один сеанс. Итеративные правки через промпты.",
        descriptionEn:
          "From blank canvas to finished landing page in one session. Iterative edits through prompts.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 75,
        durationMinutes: 12,
        title: "Lovable — UI-ориентированный вайбкодинг",
        titleEn: "Lovable — UI-Focused Vibe Coding",
        description:
          "Lovable специализируется на красивом UI. Создаём приложение с нуля через описание.",
        descriptionEn:
          "Lovable specializes in beautiful UI. Build an app from scratch through description.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 100,
        durationMinutes: 14,
        title: "Когда использовать Bolt/Lovable, а когда VS Code/Cursor",
        titleEn: "When to Use Bolt/Lovable vs VS Code/Cursor",
        description:
          "Браузерные инструменты vs локальные IDE. Сравнение для разных типов задач и проектов.",
        descriptionEn:
          "Browser tools vs local IDEs. Comparison for different task types and project scales.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // MODULE 9 — ФИНАЛЬНЫЕ ПРОЕКТЫ
  // ──────────────────────────────────────────
  {
    order: 9,
    emoji: "🎓",
    title: "Финальные проекты",
    titleEn: "Final Projects",
    description:
      "Применяем всё на практике: три реальных проекта, монетизация и финальный экзамен.",
    descriptionEn:
      "Put it all into practice: three real projects, monetization, and the final exam.",
    lessons: [
      {
        order: 1,
        isFree: false,
        xpReward: 150,
        durationMinutes: 45,
        title: "Проект 1: AI-ассистент в Telegram",
        titleEn: "Project 1: AI assistant in Telegram",
        description:
          "Полный туториал: Telegram Bot API + Claude + память + команды. Деплой на сервер.",
        descriptionEn:
          "Full tutorial: Telegram Bot API + Claude + memory + commands. Deploy to server.",
      },
      {
        order: 2,
        isFree: false,
        xpReward: 150,
        durationMinutes: 50,
        title: "Проект 2: SaaS инструмент с оплатой",
        titleEn: "Project 2: SaaS tool with payments",
        description:
          "Next.js + Anthropic API + Stripe + Vercel. Полноценный платный продукт.",
        descriptionEn:
          "Next.js + Anthropic API + Stripe + Vercel. A full-featured paid product.",
      },
      {
        order: 3,
        isFree: false,
        xpReward: 150,
        durationMinutes: 40,
        title: "Проект 3: Агент-автоматизатор",
        titleEn: "Project 3: Automation agent",
        description:
          "Мультиагентная система для мониторинга и автоматизации рабочих процессов.",
        descriptionEn:
          "Multi-agent system for monitoring and automating workflows.",
      },
      {
        order: 4,
        isFree: false,
        xpReward: 150,
        durationMinutes: 20,
        title: "Монетизация и следующие шаги",
        titleEn: "Monetization and next steps",
        description:
          "Как монетизировать навыки вайбкодинга: фриланс, SaaS, консалтинг, обучение.",
        descriptionEn:
          "How to monetize vibecoding skills: freelance, SaaS, consulting, teaching.",
      },
      {
        order: 5,
        isFree: false,
        xpReward: 500,
        durationMinutes: 30,
        title: "Финальный экзамен и сертификат",
        titleEn: "Final exam and certificate",
        description:
          "Тест по всем модулям. Получаешь сертификат VibeCode Academy вайбкодера.",
        descriptionEn:
          "Test covering all modules. Earn your VibeCode Academy certificate.",
      },
    ],
  },
];

// ============================================
// ACHIEVEMENTS
// ============================================

const achievementsData = [
  {
    slug: "first-step",
    title: "First Step",
    description: "Complete your first lesson",
    emoji: "🌱",
    xpReward: 100,
    condition: JSON.stringify({ type: "lessons_count", value: 1 }),
    isSecret: false,
  },
  {
    slug: "week-streak",
    title: "Week Streak",
    description: "Study 7 days in a row",
    emoji: "🔥",
    xpReward: 200,
    condition: JSON.stringify({ type: "streak_days", value: 7 }),
    isSecret: false,
  },
  {
    slug: "curious-mind",
    title: "Curious Mind",
    description: "Complete 10 lessons",
    emoji: "🧐",
    xpReward: 150,
    condition: JSON.stringify({ type: "lessons_count", value: 10 }),
    isSecret: false,
  },
  {
    slug: "ai-basics",
    title: "AI Basics Master",
    description: "Complete the AI Fundamentals module",
    emoji: "🧠",
    xpReward: 500,
    condition: JSON.stringify({ type: "module_complete", value: 1 }),
    isSecret: false,
  },
  {
    slug: "vibe-coder",
    title: "Vibe Coder",
    description: "Complete the Vibe Coding module",
    emoji: "⚡",
    xpReward: 500,
    condition: JSON.stringify({ type: "module_complete", value: 3 }),
    isSecret: false,
  },
  {
    slug: "agent-master",
    title: "Agent Master",
    description: "Complete the AI Agents module",
    emoji: "🤖",
    xpReward: 500,
    condition: JSON.stringify({ type: "module_complete", value: 5 }),
    isSecret: false,
  },
  {
    slug: "prompt-master",
    title: "Prompt Master",
    description: "Complete all 10 modules",
    emoji: "👑",
    xpReward: 1000,
    condition: JSON.stringify({ type: "all_modules_complete", value: 10 }),
    isSecret: false,
  },
  {
    slug: "graduate",
    title: "VibeCode Graduate",
    description: "Earn the prompt engineer certificate",
    emoji: "🎓",
    xpReward: 2000,
    condition: JSON.stringify({ type: "certificate_earned", value: 1 }),
    isSecret: false,
  },
  {
    slug: "night-owl",
    title: "Night Owl",
    description: "Study after midnight",
    emoji: "🦉",
    xpReward: 50,
    condition: JSON.stringify({ type: "study_after_midnight", value: 1 }),
    isSecret: true,
  },
  {
    slug: "speed-runner",
    title: "Speed Runner",
    description: "Complete 5 lessons in one day",
    emoji: "⚡",
    xpReward: 150,
    condition: JSON.stringify({ type: "lessons_per_day", value: 5 }),
    isSecret: true,
  },
];

// ============================================
// MAIN — SEED DATABASE
// ============================================

async function main(): Promise<void> {
  console.log("🌱 Seeding database...\n");

  // Clear old data
  await prisma.practiceSubmission.deleteMany();
  await prisma.practiceTask.deleteMany();
  await prisma.quizAttempt.deleteMany();
  await prisma.quizQuestion.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.userAchievement.deleteMany();
  await prisma.lessonProgress.deleteMany();
  await prisma.studySession.deleteMany();
  await prisma.achievement.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.module.deleteMany();
  console.log("🗑️  Old data cleared");

  // Create achievements
  for (const achievement of achievementsData) {
    await prisma.achievement.create({ data: achievement });
  }
  console.log(`✅ Created ${achievementsData.length} achievements`);

  // Create modules and lessons
  let totalLessons = 0;

  for (const moduleData of courseData) {
    const module = await prisma.module.create({
      data: {
        title: moduleData.title,
        titleEn: moduleData.titleEn,
        description: moduleData.description,
        descriptionEn: moduleData.descriptionEn,
        emoji: moduleData.emoji,
        order: moduleData.order,
      },
    });

    for (const lessonMeta of moduleData.lessons) {
      const contentEn = getContentEn(moduleData.order, lessonMeta.order);
      const lesson = await prisma.lesson.create({
        data: {
          title: lessonMeta.title,
          titleEn: lessonMeta.titleEn,
          description: lessonMeta.description,
          descriptionEn: lessonMeta.descriptionEn,
          content: getContent(moduleData.order, lessonMeta.order),
          contentEn: contentEn,
          durationMinutes: lessonMeta.durationMinutes,
          order: lessonMeta.order,
          isFree: lessonMeta.isFree,
          xpReward: lessonMeta.xpReward,
          moduleId: module.id,
        },
      });
      totalLessons++;

      const key = `${moduleData.order}-${lessonMeta.order}`;

      // Seed quiz (теоретические модули: 0, 1, 5, 8)
      const quizQuestions = QUIZ_DATA[key];
      if (quizQuestions) {
        const quiz = await prisma.quiz.create({
          data: { lessonId: lesson.id, xpReward: 20 },
        });
        for (let i = 0; i < quizQuestions.length; i++) {
          const q = quizQuestions[i];
          await prisma.quizQuestion.create({
            data: {
              quizId: quiz.id,
              text: q.text,
              options: JSON.stringify(q.options),
              correctIndex: q.correctIndex,
              explanation: q.explanation,
              order: i,
            },
          });
        }
      }

      // Seed practice tasks (практические модули: 2, 3, 4, 6, 7, 9)
      const practiceTasks = PRACTICE_DATA[key];
      if (practiceTasks) {
        for (let i = 0; i < practiceTasks.length; i++) {
          const task = practiceTasks[i];
          await prisma.practiceTask.create({
            data: {
              lessonId: lesson.id,
              title: task.title,
              titleEn: task.titleEn,
              description: task.description,
              descriptionEn: task.descriptionEn,
              order: i + 1,
            },
          });
        }
      }
    }

    console.log(
      `  📦 Module [${moduleData.order}] "${moduleData.title}": ${moduleData.lessons.length} lessons`
    );
  }

  console.log(`\n✅ Created ${courseData.length} modules`);
  console.log(`✅ Created ${totalLessons} lessons`);
  console.log("\n🎉 Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
