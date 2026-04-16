import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { AchievementsClient } from "./achievements-client";

export default async function AchievementsPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const [allAchievements, userAchievements] = await Promise.all([
    prisma.achievement.findMany({ orderBy: { xpReward: "asc" } }),
    prisma.userAchievement.findMany({
      where: { userId: session.user.id },
      include: { achievement: true },
      orderBy: { earnedAt: "desc" },
    }),
  ]);

  const earnedIds = new Set(userAchievements.map((ua) => ua.achievementId));
  const totalCount = allAchievements.length;
  const earnedCount = userAchievements.length;
  const completionPercent = totalCount > 0 ? (earnedCount / totalCount) * 100 : 0;
  const totalXPFromAchievements = userAchievements.reduce(
    (acc, ua) => acc + ua.achievement.xpReward,
    0
  );

  return (
    <AchievementsClient
      earnedAchievements={userAchievements.map((ua) => ({
        id: ua.id,
        emoji: ua.achievement.emoji,
        title: ua.achievement.title,
        description: ua.achievement.description,
        xpReward: ua.achievement.xpReward,
        earnedAt: ua.earnedAt.toISOString(),
      }))}
      lockedAchievements={allAchievements
        .filter((a) => !earnedIds.has(a.id))
        .map((a) => ({
          id: a.id,
          emoji: a.emoji,
          title: a.title,
          description: a.description,
          xpReward: a.xpReward,
          isSecret: a.isSecret,
        }))}
      totalCount={totalCount}
      totalXPFromAchievements={totalXPFromAchievements}
      completionPercent={completionPercent}
    />
  );
}
