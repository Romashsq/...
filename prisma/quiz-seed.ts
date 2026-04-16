import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ============================================
// КВИЗЫ — SEED ДАННЫЕ
// Структура: moduleOrder → lessonOrder → вопросы
// ============================================

interface QuizSeedData {
  moduleOrder: number;
  lessonOrder: number;
  xpReward: number;
  questions: Array<{
    text: string;
    options: string[];
    correctIndex: number;
    explanation?: string;
    order: number;
  }>;
}

const quizData: QuizSeedData[] = [
  // MODULE 0, LESSON 1 — "Почему 2025 год изменил всё"
  {
    moduleOrder: 0,
    lessonOrder: 1,
    xpReward: 20,
    questions: [
      {
        order: 1,
        text: "Что отличает современные LLM от традиционного программирования?",
        options: [
          "Они быстрее работают",
          "Они обучены на огромных объёмах текста и понимают контекст",
          "Они написаны на Python",
          "Они используют больше памяти",
        ],
        correctIndex: 1,
        explanation: "LLM (Large Language Models) обучены на миллиардах примеров и способны понимать и генерировать текст в контексте.",
      },
      {
        order: 2,
        text: "Что такое Vibe Coding?",
        options: [
          "Программирование под музыку",
          "Стиль разработки с помощью ИИ без глубоких знаний кода",
          "Особый язык программирования",
          "Метод тестирования приложений",
        ],
        correctIndex: 1,
        explanation: "Vibe Coding — это подход, при котором разработчик описывает задачу словами, а ИИ генерирует код.",
      },
      {
        order: 3,
        text: "Какой навык стал критически важным в 2025 году?",
        options: [
          "Знание HTML и CSS",
          "Умение работать с искусственным интеллектом",
          "Навыки работы в Excel",
          "Программирование на Java",
        ],
        correctIndex: 1,
        explanation: "Умение эффективно использовать ИИ-инструменты стало одним из самых востребованных навыков на рынке труда.",
      },
    ],
  },

  // MODULE 0, LESSON 2 — "Что ты построишь к концу курса"
  {
    moduleOrder: 0,
    lessonOrder: 2,
    xpReward: 20,
    questions: [
      {
        order: 1,
        text: "Что такое промпт-инжиниринг?",
        options: [
          "Написание кода на Python",
          "Искусство составления запросов к ИИ для получения нужного результата",
          "Настройка серверов",
          "Дизайн интерфейсов",
        ],
        correctIndex: 1,
        explanation: "Промпт-инжиниринг — это навык формулирования запросов к ИИ так, чтобы получать точные и полезные ответы.",
      },
      {
        order: 2,
        text: "Какой тип проектов можно создать с помощью Cursor AI?",
        options: [
          "Только простые скрипты",
          "Только веб-сайты",
          "Полноценные веб-приложения, боты, автоматизации",
          "Только мобильные приложения",
        ],
        correctIndex: 2,
        explanation: "Cursor AI позволяет создавать полноценные приложения любого типа с минимальными знаниями программирования.",
      },
    ],
  },

  // MODULE 1, LESSON 1 — Основы ИИ
  {
    moduleOrder: 1,
    lessonOrder: 1,
    xpReward: 25,
    questions: [
      {
        order: 1,
        text: "Что такое нейронная сеть?",
        options: [
          "Сеть компьютеров в офисе",
          "Математическая модель, имитирующая работу нейронов мозга",
          "Протокол интернета",
          "База данных",
        ],
        correctIndex: 1,
        explanation: "Нейронная сеть — это набор алгоритмов, имитирующих работу человеческого мозга для распознавания паттернов.",
      },
      {
        order: 2,
        text: "Что означает аббревиатура LLM?",
        options: [
          "Large Linux Module",
          "Low Level Memory",
          "Large Language Model",
          "Logical Learning Machine",
        ],
        correctIndex: 2,
        explanation: "LLM — Large Language Model (Большая языковая модель). Примеры: GPT-4, Claude, Gemini.",
      },
      {
        order: 3,
        text: "Что такое обучение с учителем (supervised learning)?",
        options: [
          "Обучение ИИ под присмотром учителя в школе",
          "Обучение модели на размеченных данных с правильными ответами",
          "Обучение без данных",
          "Метод оптимизации кода",
        ],
        correctIndex: 1,
        explanation: "Supervised learning — модель учится на парах «вход-правильный ответ», чтобы предсказывать результаты для новых данных.",
      },
    ],
  },

  // MODULE 2, LESSON 1 — Промпт-инжиниринг
  {
    moduleOrder: 2,
    lessonOrder: 1,
    xpReward: 25,
    questions: [
      {
        order: 1,
        text: "Что делает промпт более эффективным?",
        options: [
          "Использование заглавных букв",
          "Чёткий контекст, конкретная задача и желаемый формат ответа",
          "Как можно более короткий текст",
          "Добавление смайликов",
        ],
        correctIndex: 1,
        explanation: "Эффективный промпт содержит контекст (кто ты), задачу (что сделать) и формат (как ответить).",
      },
      {
        order: 2,
        text: "Что такое System Prompt?",
        options: [
          "Системное сообщение об ошибке",
          "Инструкция, задающая роль и поведение ИИ в начале диалога",
          "Команда для перезагрузки ИИ",
          "Технический запрос к серверу",
        ],
        correctIndex: 1,
        explanation: "System Prompt — это скрытая инструкция, которую получает ИИ перед разговором. Задаёт его роль, стиль и ограничения.",
      },
      {
        order: 3,
        text: "Что означает параметр Temperature в API?",
        options: [
          "Температуру процессора сервера",
          "Скорость ответа ИИ",
          "Степень случайности и креативности ответов (0 = точно, 1 = творчески)",
          "Количество токенов в ответе",
        ],
        correctIndex: 2,
        explanation: "Temperature: 0 — детерминированные точные ответы, 1 — более творческие и разнообразные. Для кода используют 0, для текстов — 0.7-1.",
      },
    ],
  },

  // MODULE 3, LESSON 1 — Vibe Coding
  {
    moduleOrder: 3,
    lessonOrder: 1,
    xpReward: 25,
    questions: [
      {
        order: 1,
        text: "Что такое Cursor AI?",
        options: [
          "Онлайн-курс по программированию",
          "IDE с встроенным ИИ для написания кода",
          "Язык программирования",
          "Браузер с ИИ",
        ],
        correctIndex: 1,
        explanation: "Cursor — это редактор кода (IDE) на основе VS Code, с глубокой интеграцией ИИ для автодополнения и генерации кода.",
      },
      {
        order: 2,
        text: "Что позволяет делать Vibe Coding?",
        options: [
          "Создавать приложения без компьютера",
          "Создавать рабочие приложения, описывая задачу на естественном языке",
          "Автоматически публиковать приложения",
          "Заменить всех программистов",
        ],
        correctIndex: 1,
        explanation: "Vibe Coding позволяет создавать приложения, описывая что нужно сделать словами, — ИИ генерирует код.",
      },
    ],
  },

  // MODULE 4, LESSON 1 — API
  {
    moduleOrder: 4,
    lessonOrder: 1,
    xpReward: 25,
    questions: [
      {
        order: 1,
        text: "Что такое API?",
        options: [
          "Язык программирования",
          "Интерфейс для взаимодействия между программами",
          "База данных",
          "Операционная система",
        ],
        correctIndex: 1,
        explanation: "API (Application Programming Interface) — это набор правил, по которым программы общаются друг с другом.",
      },
      {
        order: 2,
        text: "Что такое API-ключ?",
        options: [
          "Физический USB-ключ безопасности",
          "Секретный токен для аутентификации при обращении к API",
          "Пароль от Wi-Fi",
          "Лицензия на использование программы",
        ],
        correctIndex: 1,
        explanation: "API-ключ — это уникальная строка, которая идентифицирует тебя при запросах к API. Храни его в тайне!",
      },
      {
        order: 3,
        text: "Что такое REST API?",
        options: [
          "API для управления сном компьютера",
          "Архитектурный стиль для создания веб-сервисов через HTTP",
          "Особый тип базы данных",
          "Протокол шифрования",
        ],
        correctIndex: 1,
        explanation: "REST (Representational State Transfer) — архитектурный стиль, использующий HTTP методы (GET, POST, PUT, DELETE) для работы с ресурсами.",
      },
    ],
  },
];

// ============================================
// MAIN
// ============================================

async function main(): Promise<void> {
  console.log("🧩 Заполняем квизы...\n");

  // Удаляем старые квизы
  await prisma.quizAttempt.deleteMany();
  await prisma.quizQuestion.deleteMany();
  await prisma.quiz.deleteMany();
  console.log("🗑️  Старые квизы удалены");

  let created = 0;

  for (const qd of quizData) {
    // Найти урок по moduleOrder + lessonOrder
    const lesson = await prisma.lesson.findFirst({
      where: {
        order: qd.lessonOrder,
        module: { order: qd.moduleOrder },
      },
      select: { id: true, title: true },
    });

    if (!lesson) {
      console.warn(
        `  ⚠️  Урок не найден: module ${qd.moduleOrder}, lesson ${qd.lessonOrder}`
      );
      continue;
    }

    await prisma.quiz.create({
      data: {
        lessonId: lesson.id,
        xpReward: qd.xpReward,
        questions: {
          create: qd.questions.map((q) => ({
            text: q.text,
            options: JSON.stringify(q.options),
            correctIndex: q.correctIndex,
            explanation: q.explanation,
            order: q.order,
          })),
        },
      },
    });

    created++;
    console.log(
      `  ✅ Квиз создан для урока "${lesson.title}" (${qd.questions.length} вопросов)`
    );
  }

  console.log(`\n🎉 Создано ${created} квизов!`);
}

main()
  .catch((e) => {
    console.error("❌ Ошибка:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
