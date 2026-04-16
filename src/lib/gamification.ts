import { prisma } from "./prisma";

// ============================================
// GAMIFICATION SERVICE
// Управляет XP, стриками и достижениями
// ============================================

export class GamificationService {

  // ──────────────────────────────────────────
  // ОТМЕТИТЬ УРОК КАК ЗАВЕРШЁННЫЙ
  // ──────────────────────────────────────────

  static async completeLesson(
    userId: string,
    lessonId: string,
    timeSpent: number
  ): Promise<{
    xpEarned: number;
    newAchievements: Array<{ title: string; emoji: string; xpReward: number }>;
    streakUpdated: boolean;
    newStreak: number;
  }> {
    // Проверяем, не завершён ли урок уже
    const existingProgress = await prisma.lessonProgress.findUnique({
      where: { userId_lessonId: { userId, lessonId } },
    });

    if (existingProgress?.completed) {
      return { xpEarned: 0, newAchievements: [], streakUpdated: false, newStreak: 0 };
    }

    // Получаем данные урока
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      select: { xpReward: true },
    });

    if (!lesson) throw new Error("Lesson not found");

    const xpEarned = lesson.xpReward;
    const now = new Date();

    // Обновляем или создаём прогресс урока
    await prisma.lessonProgress.upsert({
      where: { userId_lessonId: { userId, lessonId } },
      update: {
        completed: true,
        completedAt: now,
        timeSpent,
        xpEarned,
      },
      create: {
        userId,
        lessonId,
        completed: true,
        completedAt: now,
        timeSpent,
        xpEarned,
      },
    });

    // Обновляем пользователя: XP и стрик
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { totalXP: true, currentStreak: true, longestStreak: true, lastActiveAt: true },
    });

    if (!user) throw new Error("User not found");

    // Вычисляем стрик
    const { newStreak, streakUpdated } = this.calculateStreak(
      user.currentStreak,
      user.lastActiveAt
    );

    await prisma.user.update({
      where: { id: userId },
      data: {
        totalXP: { increment: xpEarned },
        currentStreak: newStreak,
        longestStreak: Math.max(user.longestStreak, newStreak),
        lastActiveAt: now,
      },
    });

    // Проверяем и выдаём достижения
    const newAchievements = await this.checkAndGrantAchievements(userId);

    return { xpEarned, newAchievements, streakUpdated, newStreak };
  }

  // ──────────────────────────────────────────
  // ВЫЧИСЛЕНИЕ СТРИКА
  // ──────────────────────────────────────────

  private static calculateStreak(
    currentStreak: number,
    lastActiveAt: Date | null
  ): { newStreak: number; streakUpdated: boolean } {
    if (!lastActiveAt) {
      return { newStreak: 1, streakUpdated: true };
    }

    const now = new Date();
    const lastDate = new Date(lastActiveAt);
    const diffDays = Math.floor(
      (now.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 0) {
      // Уже занимался сегодня
      return { newStreak: currentStreak, streakUpdated: false };
    } else if (diffDays === 1) {
      // Последовательный день
      return { newStreak: currentStreak + 1, streakUpdated: true };
    } else {
      // Пропущен день — сброс стрика
      return { newStreak: 1, streakUpdated: true };
    }
  }

  // ──────────────────────────────────────────
  // ПРОВЕРКА И ВЫДАЧА ДОСТИЖЕНИЙ
  // ──────────────────────────────────────────

  private static async checkAndGrantAchievements(
    userId: string
  ): Promise<Array<{ title: string; emoji: string; xpReward: number }>> {
    // Получаем все достижения и уже полученные пользователем
    const [allAchievements, userAchievements, user] = await Promise.all([
      prisma.achievement.findMany(),
      prisma.userAchievement.findMany({
        where: { userId },
        select: { achievementId: true },
      }),
      prisma.user.findUnique({
        where: { id: userId },
        select: {
          totalXP: true,
          currentStreak: true,
          lessonProgress: {
            where: { completed: true },
            select: { lessonId: true, lesson: { select: { moduleId: true } } },
          },
        },
      }),
    ]);

    if (!user) return [];

    const earnedIds = new Set(userAchievements.map((ua) => ua.achievementId));
    const newAchievements: Array<{ title: string; emoji: string; xpReward: number }> = [];

    for (const achievement of allAchievements) {
      if (earnedIds.has(achievement.id)) continue;

      const condition = JSON.parse(achievement.condition) as {
        type: string;
        value: number;
      };

      let earned = false;

      switch (condition.type) {
        case "lessons_count":
          earned = user.lessonProgress.length >= condition.value;
          break;

        case "streak_days":
          earned = user.currentStreak >= condition.value;
          break;

        case "module_complete": {
          // Проверяем, завершён ли конкретный модуль
          const module = await prisma.module.findFirst({
            where: { order: condition.value },
            select: {
              id: true,
              lessons: { where: { isPublished: true }, select: { id: true } },
            },
          });
          if (module) {
            const completedInModule = user.lessonProgress.filter(
              (p) => p.lesson.moduleId === module.id
            ).length;
            earned = completedInModule >= module.lessons.length && module.lessons.length > 0;
          }
          break;
        }

        case "all_modules_complete": {
          const totalModules = await prisma.module.count({ where: { isPublished: true } });
          const uniqueModules = new Set(user.lessonProgress.map((p) => p.lesson.moduleId));
          earned = uniqueModules.size >= totalModules;
          break;
        }
      }

      if (earned) {
        await prisma.userAchievement.create({
          data: { userId, achievementId: achievement.id },
        });

        // Добавляем XP за достижение
        await prisma.user.update({
          where: { id: userId },
          data: { totalXP: { increment: achievement.xpReward } },
        });

        newAchievements.push({
          title: achievement.title,
          emoji: achievement.emoji,
          xpReward: achievement.xpReward,
        });
      }
    }

    return newAchievements;
  }
}
