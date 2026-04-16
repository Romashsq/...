# Дизайнер — Память

## Дизайн-система (актуально)
- Акцент: LIME (#84cc16 = lime-500, #a3e635 = lime-400)
- Тёмный фон: #070810
- Светлый фон: #F7FAF3
- Шрифты: Inter (тело), Syne (заголовки), JetBrains Mono (код)
- Tailwind: `emerald-*` классы ремаппированы на lime в tailwind.config.ts

## Известные проблемы (из аудита 2026-03-25)
- [ ] В dashboard-client.tsx есть `text-emerald-400`, `bg-emerald-500/20` — не ремаппировано
- [ ] Email-шаблон в email.ts хардкодит `#10B981` (emerald) вместо lime
- [ ] Мобильная адаптивность не проверена (<375px): sidebar, lesson-viewer, quiz
- [ ] Empty states не проработаны: achievements и leaderboard при 0 данных
- [ ] Loading states: skeleton/spinner не консистентны везде
- [ ] Сертификат: визуал не разработан (а на лендинге обещан)

## Что уже хорошо
- Anti-flash script для тёмной темы в layout.tsx
- Toast-уведомления при XP/ачивках
- Прогресс-бар внутри урока

## Выполненные задачи
| Дата | Задача |
|------|--------|
| — | — |
