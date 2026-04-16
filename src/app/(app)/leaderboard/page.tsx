import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { calculateLevel } from "@/lib/utils";
import { LeaderboardClient } from "./leaderboard-client";

// ============================================
// DATA
// ============================================

async function getLeaderboard() {
  return prisma.user.findMany({
    orderBy: { totalXP: "desc" },
    take: 50,
    select: {
      id: true,
      name: true,
      email: true,
      totalXP: true,
      currentStreak: true,
      _count: {
        select: {
          lessonProgress: { where: { completed: true } },
        },
      },
    },
  });
}

// ============================================
// PAGE
// ============================================

export default async function LeaderboardPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const users = await getLeaderboard();
  const currentUserId = session.user.id;

  const userItems = users.map((user, index) => {
    const { level, title: levelTitle } = calculateLevel(user.totalXP);
    const displayName = user.name ?? user.email?.split("@")[0] ?? "Student";
    return {
      id: user.id,
      displayName,
      initial: displayName[0].toUpperCase(),
      totalXP: user.totalXP,
      currentStreak: user.currentStreak,
      level,
      levelTitle,
      lessonsCount: user._count.lessonProgress,
      isCurrentUser: user.id === currentUserId,
      rank: index + 1,
    };
  });

  return <LeaderboardClient users={userItems} />;
}

export const metadata = {
  title: "Leaderboard",
};
