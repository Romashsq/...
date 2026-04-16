"use client";

import Link from "next/link";
import {
  BookOpen,
  Flame,
  Star,
  Trophy,
  ArrowRight,
  Clock,
  CheckCircle2,
  Target,
  Play,
  ChevronRight,
  Zap,
  CalendarDays,
  TrendingUp,
  Lock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatXP } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";

// ============================================
// ТИПЫ
// ============================================

interface ModuleItem {
  id: string;
  emoji: string;
  title: string;
  completedLessons: number;
  totalLessons: number;
  progress: number;
}

interface RecentProgressItem {
  id: string;
  moduleEmoji: string;
  lessonTitle: string;
  xpReward: number;
}

interface AchievementItem {
  id: string;
  emoji: string;
  title: string;
  xpReward: number;
}

interface NextLessonData {
  lessonId: string;
  moduleEmoji: string;
  lessonTitle: string;
  moduleTitle: string;
  durationMinutes?: number;
  xpReward?: number;
}

interface Props {
  userName: string | null;
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  completedLessons: number;
  totalLessons: number;
  overallProgress: number;
  level: number;
  levelTitle: string;
  nextLevelXP: number;
  xpProgress: number;
  modules: ModuleItem[];
  recentProgress: RecentProgressItem[];
  achievements: AchievementItem[];
  nextLesson: NextLessonData | null;
}

// ============================================
// HELPER: streak week dots
// ============================================

function StreakWeek({ streak }: { streak: number }) {
  const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const today = new Date().getDay();
  // 0=Sun,1=Mon..6=Sat → convert to Mon-based
  const todayIdx = today === 0 ? 6 : today - 1;

  return (
    <div className="flex items-center gap-1.5">
      {days.map((d, i) => {
        const isToday = i === todayIdx;
        // Show streak days going backwards from today
        const daysAgo = todayIdx - i;
        const active = daysAgo >= 0 && daysAgo < streak;
        return (
          <div key={d} className="flex flex-col items-center gap-1">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-medium transition-all
                ${isToday
                  ? "bg-orange-500 text-white ring-2 ring-orange-500/30"
                  : active
                  ? "bg-orange-500/20 text-orange-400"
                  : "bg-white/5 text-gray-600"
                }`}
            >
              {active ? "🔥" : d[0]}
            </div>
            <span className="text-[9px] text-gray-600">{d}</span>
          </div>
        );
      })}
    </div>
  );
}

// ============================================
// DASHBOARD CLIENT COMPONENT
// ============================================

export function DashboardClient({
  userName,
  totalXP,
  currentStreak,
  longestStreak,
  completedLessons,
  totalLessons,
  overallProgress,
  level,
  levelTitle,
  nextLevelXP,
  xpProgress,
  modules,
  recentProgress,
  achievements,
  nextLesson,
}: Props) {
  const { t } = useTranslation();

  const isNewUser = completedLessons === 0;
  const firstName = userName?.split(" ")[0] ?? t("nav.student");

  // Текущий активный модуль
  const activeModule = modules.find(m => m.progress > 0 && m.progress < 100) ?? modules[0];

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      {/* ── Приветствие ── */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-syne text-2xl md:text-3xl font-bold text-white">
            {isNewUser ? `Добро пожаловать, ${firstName}! 👋` : `С возвращением, ${firstName}! 👋`}
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            {isNewUser
              ? "Начни своё путешествие в мир вайбкодинга прямо сейчас"
              : `Ты прошёл ${completedLessons} из ${totalLessons} уроков — продолжай в том же духе!`
            }
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-400 bg-white/5 rounded-xl px-4 py-2 flex-shrink-0">
          <CalendarDays className="w-4 h-4" />
          <span>{new Date().toLocaleDateString("ru-RU", { weekday: "long", day: "numeric", month: "long" })}</span>
        </div>
      </div>

      {/* ── HERO: Следующий урок (главный блок) ── */}
      {nextLesson ? (
        <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/60 via-[#070810] to-[#070810] p-6 md:p-8">
          {/* Декор */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-medium uppercase tracking-wider">
                  {completedLessons === 0 ? "Первый урок" : "Продолжай учиться"}
                </span>
              </div>
              <h2 className="font-syne text-xl md:text-2xl font-bold text-white mb-1 leading-tight">
                {nextLesson.moduleEmoji} {nextLesson.lessonTitle}
              </h2>
              <p className="text-gray-400 text-sm mb-4">{nextLesson.moduleTitle}</p>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                {nextLesson.durationMinutes && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{nextLesson.durationMinutes} мин</span>
                  </div>
                )}
                {nextLesson.xpReward && (
                  <div className="flex items-center gap-1.5 text-emerald-500">
                    <Star className="w-3.5 h-3.5" />
                    <span>+{nextLesson.xpReward} XP</span>
                  </div>
                )}
              </div>

              <Link href={`/lessons/${nextLesson.lessonId}`}>
                <Button size="lg" className="gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all">
                  <Play className="w-4 h-4 fill-current" />
                  {completedLessons === 0 ? "Начать первый урок" : "Продолжить урок"}
                </Button>
              </Link>
            </div>

            {/* Прогресс по курсу */}
            <div className="md:w-56 flex-shrink-0 bg-white/5 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-xs font-medium">Прогресс курса</span>
                <span className="text-emerald-400 text-sm font-bold">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="h-2 mb-3" />
              <div className="flex justify-between text-xs text-gray-500">
                <span>{completedLessons} пройдено</span>
                <span>{totalLessons - completedLessons} осталось</span>
              </div>
              <div className="mt-3 pt-3 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Target className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Уровень {level} — {levelTitle}</span>
                </div>
                <Progress value={xpProgress} className="h-1 mt-2" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Курс завершён */
        <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 to-[#070810] p-8 text-center">
          <div className="text-5xl mb-4">🏆</div>
          <h2 className="font-syne text-2xl font-bold text-white mb-2">Курс пройден!</h2>
          <p className="text-gray-400 mb-4">Ты прошёл все уроки. Невероятный результат!</p>
          <Link href="/courses">
            <Button>Посмотреть сертификат</Button>
          </Link>
        </div>
      )}

      {/* ── Статистика + Стрик ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Стрик */}
        <Card className="p-5 md:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Flame className="w-4 h-4 text-orange-400" />
              </div>
              <span className="text-gray-400 text-sm font-medium">Серия дней</span>
            </div>
            <div className="font-syne text-2xl font-bold text-white">
              {currentStreak}<span className="text-sm font-normal text-gray-500 ml-1">дн.</span>
            </div>
          </div>
          <StreakWeek streak={currentStreak} />
          {longestStreak > 0 && (
            <p className="text-xs text-gray-600 mt-3">Рекорд: {longestStreak} дней</p>
          )}
        </Card>

        {/* XP и уровень */}
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="text-gray-400 text-sm font-medium">Опыт</span>
          </div>
          <div className="font-syne text-2xl font-bold text-white mb-2">{formatXP(totalXP)} XP</div>
          <div className="flex justify-between text-xs text-gray-500 mb-1.5">
            <span>Ур. {level} · {levelTitle}</span>
            <span>{formatXP(nextLevelXP)} XP</span>
          </div>
          <Progress value={xpProgress} className="h-1.5" />
        </Card>

        {/* Достижения */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Trophy className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-gray-400 text-sm font-medium">Достижения</span>
            </div>
            <Link href="/achievements" className="text-emerald-400 text-xs hover:underline">
              Все →
            </Link>
          </div>
          {achievements.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {achievements.slice(0, 6).map((a) => (
                <span key={a.id} title={a.title} className="text-xl cursor-default hover:scale-125 transition-transform">
                  {a.emoji}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-xs">Пройди первые уроки чтобы получить достижения</p>
          )}
          <p className="text-xs text-gray-500 mt-3">{achievements.length} заработано</p>
        </Card>
      </div>

      {/* ── Основной контент: Модули + Активность ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Программа курса */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-syne text-lg font-semibold text-white">Программа курса</h2>
            <Link href="/courses" className="text-emerald-400 text-sm hover:underline flex items-center gap-1">
              Все модули <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-2">
            {modules.map((mod, idx) => {
              const isActive = mod.id === activeModule?.id && mod.progress > 0 && mod.progress < 100;
              const isDone = mod.progress === 100;
              const isLocked = idx > 0 && modules[idx - 1].progress < 100 && mod.completedLessons === 0;

              return (
                <Link key={mod.id} href={`/courses/${mod.id}`} className="block">
                  <div className={`flex items-center gap-4 px-4 py-3 rounded-xl border transition-all duration-200 cursor-pointer group
                    ${isActive
                      ? "border-emerald-500/40 bg-emerald-500/8 hover:bg-emerald-500/12"
                      : isDone
                      ? "border-emerald-500/15 bg-emerald-500/4 hover:bg-emerald-500/8"
                      : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10"
                    }`}
                  >
                    {/* Иконка статуса */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm
                      ${isDone
                        ? "bg-emerald-500/20 text-emerald-400"
                        : isActive
                        ? "bg-emerald-500/30 text-emerald-300"
                        : "bg-white/5 text-gray-500"
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="w-4 h-4" /> : isLocked ? <Lock className="w-3 h-3" /> : <span>{mod.emoji}</span>}
                    </div>

                    {/* Инфо */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className={`text-sm font-medium truncate transition-colors
                          ${isActive ? "text-emerald-300" : isDone ? "text-gray-300" : "text-gray-400 group-hover:text-gray-200"}`}
                        >
                          {mod.title}
                        </span>
                        <span className="text-xs text-gray-600 flex-shrink-0">{mod.completedLessons}/{mod.totalLessons}</span>
                      </div>
                      <Progress
                        value={mod.progress}
                        className={`h-1 ${isDone ? "opacity-50" : ""}`}
                      />
                    </div>

                    {isActive && (
                      <div className="flex-shrink-0">
                        <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-1 rounded-full">
                          <TrendingUp className="w-3 h-3" />
                          Активный
                        </div>
                      </div>
                    )}
                    {!isActive && (
                      <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-gray-500 flex-shrink-0 transition-colors" />
                    )}
                  </div>
                </Link>
              );
            })}

            <Link href="/courses">
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/5 text-gray-500 text-sm hover:text-gray-300 hover:border-white/10 transition-all">
                Смотреть все модули ({modules.length})
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="space-y-4">

          {/* Как устроен курс — для новичков */}
          {isNewUser && (
            <Card className="p-5 border-blue-500/20 bg-blue-500/5">
              <h3 className="font-syne font-semibold text-white text-sm mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                Как устроен курс
              </h3>
              <ol className="space-y-3">
                {[
                  { step: "1", text: "Проходи уроки по порядку", icon: "📖" },
                  { step: "2", text: "Выполняй практические задания", icon: "✍️" },
                  { step: "3", text: "Отвечай на квизы — зарабатывай XP", icon: "⚡" },
                  { step: "4", text: "Получи сертификат по итогу", icon: "🏆" },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3 text-sm">
                    <span className="text-lg leading-none flex-shrink-0">{item.icon}</span>
                    <span className="text-gray-300 leading-tight">{item.text}</span>
                  </li>
                ))}
              </ol>
              <Link href="/courses" className="block mt-4">
                <Button className="w-full" size="sm">
                  Смотреть все уроки
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </Link>
            </Card>
          )}

          {/* Недавние уроки */}
          {recentProgress.length > 0 && (
            <Card>
              <CardHeader className="pb-2 pt-4 px-4">
                <CardTitle className="text-sm text-gray-400 font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Недавно пройдено
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 space-y-2">
                {recentProgress.slice(0, 5).map((p) => (
                  <div key={p.id} className="flex items-center gap-2.5 group">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-400 text-xs truncate flex-1 group-hover:text-gray-300 transition-colors">
                      {p.moduleEmoji} {p.lessonTitle}
                    </span>
                    <Badge variant="secondary" className="text-[10px] flex-shrink-0 bg-emerald-500/10 text-emerald-400 border-0">
                      +{p.xpReward}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Таблица лидеров */}
          <Card className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm text-gray-400 font-medium flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                Таблица лидеров
              </h3>
              <Link href="/leaderboard" className="text-emerald-400 text-xs hover:underline">Все →</Link>
            </div>
            <p className="text-gray-500 text-xs">Соревнуйся с другими студентами по XP</p>
            <Link href="/leaderboard" className="block mt-3">
              <Button variant="outline" size="sm" className="w-full text-xs">
                Смотреть рейтинг
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
