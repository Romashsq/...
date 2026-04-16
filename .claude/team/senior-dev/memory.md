# Сеньор Разработчик — Память

## Стек (зафиксировано)
- Next.js 14.2.18 (App Router) — НЕ v15
- `next.config.mjs` (не .ts — v14 не поддерживает)
- `experimental.serverComponentsExternalPackages` (не `serverExternalPackages` — это v15)
- `@/*` → `./src/*`
- SQLite сейчас, PostgreSQL в прод

## Критические правила кода
- Resend: ТОЛЬКО через `getResend()` — не `new Resend()` на уровне модуля (крашит билд)
- Lesson content с backtick → в `lessons-content.ts` (не в seed.ts template literals)
- NextAuth v5: JWT strategy обязательна для Credentials provider
- SQLite: JSON хранится как string, `JSON.parse()` в рантайме

## Бэклог задач (из аудита 2026-03-25)
### 🔴 Критично (до запуска)
- [ ] Интеграция Stripe Checkout
- [ ] Middleware: проверка доступа к платным урокам
- [ ] Миграция на PostgreSQL (Neon/Supabase)
- [ ] Замена local file upload → Cloudflare R2 / Supabase Storage

### 🟠 Важно
- [ ] Rate limiting: `/api/chat`, `/api/auth/register`, `/api/quiz/*/submit`
- [ ] Генерация PDF сертификатов (@react-pdf/renderer)
- [ ] Заменить самодельный Markdown-парсер в чате на react-markdown
- [ ] Локализовать `timeAgo()` для EN

### 🟡 Нужно
- [ ] Admin-панель (проверка HomeworkSubmission, PracticeSubmission)
- [ ] Добавить textEn/optionsEn в QuizQuestion (миграция схемы)
- [ ] Пересмотреть @@unique на QuizAttempt (разрешить пересдачу)

### 🟢 Желательно
- [ ] Unit/integration тесты (GamificationService приоритет)
- [ ] Уровни 6-10 (сейчас потолок 10 000 XP)

## Выполненные задачи
| Дата | Задача | PR/коммит |
|------|--------|-----------|
| — | — | — |
