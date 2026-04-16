"use client";

import Link from "next/link";
import { BookOpen, Clock, Star, Layers } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

// ============================================
// ТИПЫ
// ============================================

interface LessonResult {
  id: string;
  title: string;
  description: string | null;
  durationMinutes: number;
  xpReward: number;
  isFree: boolean;
  isCompleted: boolean;
  moduleEmoji: string;
  moduleTitle: string;
}

interface ModuleResult {
  id: string;
  emoji: string;
  title: string;
  description: string | null;
  lessonsCount: number;
}

interface Props {
  q: string;
  lessons: LessonResult[];
  modules: ModuleResult[];
}

// ============================================
// SEARCH RESULTS CLIENT COMPONENT
// ============================================

export function SearchResults({ q, lessons, modules }: Props) {
  const { t } = useTranslation();
  const hasResults = lessons.length > 0 || modules.length > 0;
  const hasQuery = q.length >= 2;

  return (
    <div className="mt-8">
      {!hasQuery && (
        <p className="text-gray-500 text-center py-12">{t("search.minChars")}</p>
      )}

      {hasQuery && !hasResults && (
        <p className="text-gray-500 text-center py-12">
          {t("search.noResults", { q })}
        </p>
      )}

      {/* Модули */}
      {modules.length > 0 && (
        <section className="mb-8">
          <h2 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            {t("search.modules")} ({modules.length})
          </h2>
          <div className="space-y-2">
            {modules.map((mod) => (
              <Link
                key={mod.id}
                href={`/courses/${mod.id}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all group"
              >
                <span className="text-2xl">{mod.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium group-hover:text-emerald-400 transition-colors truncate">
                    {mod.title}
                  </p>
                  <p className="text-gray-500 text-sm truncate">{mod.description}</p>
                </div>
                <span className="text-gray-600 text-xs flex-shrink-0">
                  {mod.lessonsCount} {t("search.lessonsCount")}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Уроки */}
      {lessons.length > 0 && (
        <section>
          <h2 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3 flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5" />
            {t("search.lessons")} ({lessons.length})
          </h2>
          <div className="space-y-2">
            {lessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/lessons/${lesson.id}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-sm">
                  {lesson.moduleEmoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium group-hover:text-emerald-400 transition-colors truncate">
                    {lesson.title}
                  </p>
                  <p className="text-gray-500 text-xs truncate mb-2">{lesson.moduleTitle}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {lesson.durationMinutes} {t("search.min")}
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600">
                      <Star className="w-3 h-3" />
                      +{lesson.xpReward} XP
                    </span>
                    {lesson.isCompleted && (
                      <span className="text-emerald-500">{t("search.completed")}</span>
                    )}
                    {lesson.isFree && (
                      <span className="text-emerald-600">{t("search.free")}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
