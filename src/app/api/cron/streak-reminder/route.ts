import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendStreakReminderEmail } from "@/lib/email";

// Этот endpoint вызывается Vercel Cron каждый день в 10:00 UTC
// Вручную: curl -H "Authorization: Bearer $CRON_SECRET" /api/cron/streak-reminder

export async function GET(req: NextRequest) {
  // Проверяем авторизацию
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Ищем пользователей которые:
  // 1. Имеют активный streak (currentStreak > 0)
  // 2. Не заходили 2+ дней
  // 3. Имеют email
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  const usersAtRisk = await prisma.user.findMany({
    where: {
      currentStreak: { gt: 0 },
      lastActiveAt: { lte: twoDaysAgo },
    },
    select: {
      id: true,
      email: true,
      name: true,
      currentStreak: true,
      lastActiveAt: true,
    },
  });

  let sent = 0;
  let failed = 0;

  for (const user of usersAtRisk) {

    const lastActive = user.lastActiveAt ?? new Date(0);
    const daysInactive = Math.floor(
      (Date.now() - lastActive.getTime()) / (1000 * 60 * 60 * 24)
    );

    const displayName = user.name ?? user.email.split("@")[0];

    const ok = await sendStreakReminderEmail(
      user.email,
      displayName,
      user.currentStreak,
      daysInactive
    );

    if (ok) {
      sent++;
    } else {
      failed++;
    }
  }

  console.log(
    `[cron/streak-reminder] Отправлено: ${sent}, ошибок: ${failed}, всего пользователей: ${usersAtRisk.length}`
  );

  return NextResponse.json({
    success: true,
    total: usersAtRisk.length,
    sent,
    failed,
  });
}
