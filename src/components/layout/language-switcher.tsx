"use client";

import { useLanguageStore } from "@/store/language-store";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguageStore();

  return (
    <div className="flex items-center gap-0.5 bg-white/5 border border-white/10 rounded-lg px-1 py-1">
      <button
        onClick={() => setLocale("ru")}
        className={`px-2 py-0.5 rounded text-xs font-semibold transition-all ${
          locale === "ru"
            ? "bg-emerald-500/20 text-emerald-400"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-2 py-0.5 rounded text-xs font-semibold transition-all ${
          locale === "en"
            ? "bg-emerald-500/20 text-emerald-400"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        EN
      </button>
    </div>
  );
}
