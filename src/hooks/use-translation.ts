"use client";

import { useLanguageStore } from "@/store/language-store";
import { translations, type Translations } from "@/lib/i18n/translations";

// Глубокое получение значения по dot-нотации: "lesson.completed"
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || typeof current !== "object") return path;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : path;
}

// Подстановка переменных: "Привет, {name}!" + { name: "Иван" } → "Привет, Иван!"
function interpolate(str: string, vars?: Record<string, string | number>): string {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`));
}

export function useTranslation() {
  const { locale } = useLanguageStore();
  const dict = translations[locale] as unknown as Record<string, unknown>;

  function t(key: string, vars?: Record<string, string | number>): string {
    const value = getNestedValue(dict, key);
    return interpolate(value, vars);
  }

  return { t, locale };
}

// Серверная утилита — для server components (не читает localStorage, всегда RU)
export function getTranslations(locale: "ru" | "en" = "ru"): Translations {
  return translations[locale];
}
