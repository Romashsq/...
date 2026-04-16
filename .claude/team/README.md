# VibeCode Academy — Командная память

## Структура

```
.claude/
  agents/          ← определения агентов (системные промпты)
  team/
    _shared/       ← общая память всей команды
    ceo/           ← память CEO
    analyst/       ← память аналитика + отчёты
    marketer/      ← память маркетолога
    designer/      ← память дизайнера
    senior-dev/    ← память разработчика
    devops/        ← память девопса
    business-analyst/ ← память бизнес-аналитика
    teacher/       ← память преподавателя
```

## Общие файлы (_shared)

| Файл | Что хранит |
|------|-----------|
| [project-status.md](_shared/project-status.md) | Текущий статус по блокерам и задачам |
| [decisions-log.md](_shared/decisions-log.md) | Журнал всех принятых решений |

## Файлы каждого агента

| Агент | Память | Доп. файлы |
|-------|--------|------------|
| CEO | [memory.md](ceo/memory.md) | — |
| Аналитик | [memory.md](analyst/memory.md) | [reports/](analyst/reports/) |
| Маркетолог | [memory.md](marketer/memory.md) | — |
| Дизайнер | [memory.md](designer/memory.md) | — |
| Senior Dev | [memory.md](senior-dev/memory.md) | — |
| DevOps | [memory.md](devops/memory.md) | — |
| Бизнес Аналитик | [memory.md](business-analyst/memory.md) | — |
| Преподаватель | [memory.md](teacher/memory.md) | — |

## Как использовать

**Перед началом работы с агентом** — прочитай его memory.md
**После завершения задачи** — обнови memory.md и project-status.md
**Важное решение** — запиши в decisions-log.md
**Новый аудит/отчёт** — сохрани в `analyst/reports/ГГГГ-ММ-ДД-тема.md`
