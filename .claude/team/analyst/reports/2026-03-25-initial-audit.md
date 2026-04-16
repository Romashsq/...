# Аналитический отчёт — Первичный аудит проекта
**Дата:** 2026-03-25
**Версия:** v1.0

---

## КТО МЫ
VibeCode Academy — образовательная платформа нового поколения, которая обучает AI/Vibe Coding. Сам продукт является демонстрацией навыков которым обучает.

**Аудитория:** Маркетологи, предприниматели, фрилансеры, люди без техбэкграунда которые хотят создавать продукты с AI.

**Ценностное предложение:** "За 4–6 недель научишься создавать продукты с помощью AI без написания кода и начнёшь зарабатывать на этом."

---

## ЧТО МЫ ДЕЛАЕМ

### Контент (10 модулей, 58 уроков)
| Модуль | Тема |
|--------|------|
| 0 | Welcome to the World of AI |
| 1 | AI Fundamentals |
| 2 | Prompt Engineering |
| 3 | Vibe Coding (Cursor, Bolt.new, Lovable) |
| 4 | APIs & Integrations (OpenAI, Make.com, Zapier) |
| 5 | AI Agents (LangChain, CrewAI) |
| 6 | AI Design (Midjourney) |
| 7 | Business Automation |
| 8 | Portfolio & Monetization |
| 9 | Final Project |

**Первые 3 модуля (17 уроков) — бесплатны.** Остальное — freemium (платный доступ не реализован технически).

### Реализованный функционал
- Auth: Email + Google OAuth (NextAuth v5)
- Уроки: Markdown-рендер, таймер, навигация prev/next
- Прогресс: по урокам, модулям, общий %
- Геймификация: XP, уровни (5 уровней), стрики, 10 достижений
- Квизы: после уроков, +20 XP, одна попытка
- Практические задания: загрузка файлов/скриншотов/ссылок
- AI-ассистент: GPT-4o-mini, стриминг, история в БД
- Лидерборд, поиск, профиль, достижения
- Настройки (смена имени)
- Email-напоминания при сгоревшем стрике (Resend)
- i18n: RU + EN
- Тёмная / светлая тема
- Лендинг с отзывами, FAQ, программой курса

---

## КАК МЫ ДЕЛАЕМ

### Стек
- Next.js 14.2 (App Router), TypeScript, Tailwind CSS
- Prisma 6 + SQLite (dev) / PostgreSQL-совместимо
- NextAuth v5 beta, bcryptjs, Zod
- Zustand (state + persist), Framer Motion, Recharts
- OpenAI SDK, Resend, react-markdown

### Архитектура
- Server/Client разделение: page.tsx (server) → *-client.tsx (client)
- GamificationService: static class (OOP)
- 17 таблиц в БД, нормализованная схема
- i18n: клиентский через Zustand + useTranslation() hook

---

## СИЛЬНЫЕ СТОРОНЫ
- AI-ассистент со стримингом и персистентной историей — дифференцирующая фича
- Полноценный gamification loop (XP + стрики + email)
- Двуязычность с хорошей архитектурой
- Лендинг готов к конверсии
- Чистый код: Server/Client разделение, Zod-валидация, lazy Resend init
- StudySession + timeSpent — данные для аналитики уже собираются

---

## КРИТИЧЕСКИЕ БЛОКЕРЫ (до запуска)
1. **Нет платёжной системы** — Stripe не интегрирован, платные уроки открыты всем
2. **SQLite не работает в serverless прод** (Vercel)
3. **Загрузка файлов на локальный диск** — сбрасывается при деплое

---

## СЕРЬЁЗНЫЕ ПРОБЛЕМЫ
4. Нет rate limiting на /api/chat (OpenAI) и /api/auth
5. Сертификат заявлен на лендинге — не реализован в коде
6. Квиз: одна попытка навсегда (@@unique[userId, lessonId])
7. timeAgo() — только русский текст при EN-языке
8. i18n не работает для SEO (клиентский Zustand, нет SSR)
9. Нет admin-панели (role: admin есть в схеме, но нет UI)
10. QuizQuestion нет textEn/optionsEn — квизы только на RU

---

## ТЕХНИЧЕСКИЙ ДОЛГ
11. Самодельный Markdown-парсер в чате вместо react-markdown
12. QuizQuestion.options — JSON-строка в SQLite (нет нормализации)
13. Нет тестов (unit/integration/e2e)
14. Отзывы на лендинге — фиктивные ("Anna K.", "Dmitry P.")

---

## РАСПРЕДЕЛЕНИЕ ЗАДАЧ
| Приоритет | Задача | Кто |
|-----------|--------|-----|
| 🔴 | Платёжная система | CEO → Senior Dev |
| 🔴 | Защита платных уроков | Senior Dev |
| 🔴 | PostgreSQL + file storage | DevOps + Senior Dev |
| 🟠 | Rate limiting | Senior Dev |
| 🟠 | Сертификат PDF | Senior Dev + Designer |
| 🟠 | EN-квизы | Teacher |
| 🟡 | Admin-панель | Senior Dev |
| 🟡 | Цветовой аудит (emerald→lime) | Designer |
| 🟡 | Аналитика (Posthog/GA) | Marketer + BA |
| 🟢 | Тесты | Senior Dev |
| 🟢 | Email onboarding-воронка | Marketer |
