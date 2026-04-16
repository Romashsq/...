"use client";

import { Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useTranslation } from "@/hooks/use-translation";

// ============================================
// ТИПЫ
// ============================================

interface EarnedAchievement {
  id: string;
  emoji: string;
  title: string;
  description: string;
  xpReward: number;
  earnedAt: string;
}

interface LockedAchievement {
  id: string;
  emoji: string;
  title: string;
  description: string;
  xpReward: number;
  isSecret: boolean;
}

interface Props {
  earnedAchievements: EarnedAchievement[];
  lockedAchievements: LockedAchievement[];
  totalCount: number;
  totalXPFromAchievements: number;
  completionPercent: number;
}

// ============================================
// ACHIEVEMENTS CLIENT COMPONENT
// ============================================

export function AchievementsClient({
  earnedAchievements,
  lockedAchievements,
  totalCount,
  totalXPFromAchievements,
  completionPercent,
}: Props) {
  const { t } = useTranslation();
  const earnedCount = earnedAchievements.length;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="font-syne text-3xl font-bold text-white flex items-center gap-3">
          <Trophy className="w-8 h-8 text-amber-400" />
          {t("achievements.title")}
        </h1>
        <p className="text-gray-400 mt-1">{t("achievements.subtitle")}</p>
      </div>

      {/* Общий прогресс */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white font-medium">{t("achievements.collection")}</span>
          <span className="text-gray-400 text-sm">{earnedCount} / {totalCount}</span>
        </div>
        <Progress value={completionPercent} />
        <p className="text-gray-500 text-sm mt-2">
          {t("achievements.totalXP")}{" "}
          <span className="text-emerald-400">{totalXPFromAchievements} XP</span>
        </p>
      </Card>

      {/* Заработанные */}
      {earnedCount > 0 && (
        <div>
          <h2 className="font-syne text-lg font-semibold text-white mb-4">
            ✅ {t("achievements.earned")} ({earnedCount})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {earnedAchievements.map((a) => (
              <Card
                key={a.id}
                className="p-5 border-amber-500/30 bg-amber-500/5 hover:border-amber-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{a.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-syne font-bold text-white mb-1">{a.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{a.description}</p>
                    <div className="flex items-center gap-2">
                      <Badge>+{a.xpReward} XP</Badge>
                      <span className="text-gray-600 text-xs">
                        {new Date(a.earnedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Заблокированные */}
      <div>
        <h2 className="font-syne text-lg font-semibold text-white mb-4">
          🔒 {t("achievements.locked")} ({lockedAchievements.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lockedAchievements.map((a) => (
            <Card key={a.id} className="p-5 opacity-50 hover:opacity-70 transition-all">
              <div className="flex items-start gap-4">
                <span className="text-4xl grayscale">{a.emoji}</span>
                <div className="flex-1">
                  <h3 className="font-syne font-bold text-white mb-1">
                    {a.isSecret ? "???" : a.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {a.isSecret ? t("achievements.secret") : a.description}
                  </p>
                  <Badge variant="secondary">+{a.xpReward} XP</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
