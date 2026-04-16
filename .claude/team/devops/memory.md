# DevOps — Память

## Текущее состояние инфраструктуры
- **Окружение:** только локальная разработка
- **БД:** SQLite (`prisma/dev.db`) — НЕ подходит для прод
- **Файлы:** локальный диск `public/uploads/` — НЕ подходит для serverless
- **Деплой:** не настроен

## Задачи до прод-запуска
- [ ] Выбрать хостинг: Vercel (рекомендовано для Next.js) / Railway
- [ ] Провизионировать PostgreSQL: Neon.tech (бесплатно) или Supabase
- [ ] Настроить env vars в prod: DATABASE_URL, OPENAI_API_KEY, NEXTAUTH_SECRET, RESEND_API_KEY, GOOGLE_CLIENT_ID/SECRET
- [ ] Файловое хранилище: Cloudflare R2 (дешевле всего) или Supabase Storage
- [ ] Настроить cron для `/api/cron/streak-reminder`
- [ ] Добавить заголовки безопасности (CSP, HSTS, X-Frame-Options)
- [ ] Мониторинг: Sentry или Vercel Analytics

## Критические проверки безопасности
- [ ] `.env` в `.gitignore` — проверить
- [ ] NEXTAUTH_SECRET минимум 32 символа, случайный
- [ ] Нет открытых API без `getServerSession()`
- [ ] Rate limiting на auth endpoints

## Настроенные сервисы
| Сервис | Статус | Настройки |
|--------|--------|-----------|
| Resend (email) | ⚠️ Требует ключ | RESEND_API_KEY в .env |
| OpenAI | ⚠️ Требует ключ | OPENAI_API_KEY в .env |
| Google OAuth | ⚠️ Требует настройку | GOOGLE_CLIENT_ID/SECRET |
| PostgreSQL | ❌ Не настроено | — |
| Cloudflare R2 | ❌ Не настроено | — |
