import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { CoursesClient } from "./courses-client";

// ============================================
// DATA FETCHING
// ============================================

async function getCoursesData(userId: string) {
  return prisma.module.findMany({
    where: { isPublished: true },
    orderBy: { order: "asc" },
    include: {
      lessons: {
        where: { isPublished: true },
        orderBy: { order: "asc" },
        select: {
          id: true,
          title: true,
          durationMinutes: true,
          isFree: true,
          xpReward: true,
          order: true,
          progress: {
            where: { userId },
            select: { completed: true },
          },
        },
      },
    },
  });
}

// ============================================
// PAGE COMPONENT
// ============================================

export default async function CoursesPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const modules = await getCoursesData(session.user.id);

  const moduleItems = modules.map((mod) => {
    const completedLessons = mod.lessons.filter((l) => l.progress[0]?.completed).length;
    const totalLessons = mod.lessons.length;
    return {
      id: mod.id,
      emoji: mod.emoji,
      title: mod.title,
      description: mod.description,
      completedLessons,
      totalLessons,
      progress: totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0,
      lessons: mod.lessons.map((l) => ({
        id: l.id,
        title: l.title,
        durationMinutes: l.durationMinutes,
        isFree: l.isFree,
        xpReward: l.xpReward,
        order: l.order,
        isCompleted: l.progress[0]?.completed ?? false,
      })),
    };
  });

  return <CoursesClient modules={moduleItems} />;
}
