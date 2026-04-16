import { Resend } from "resend";

// Lazy initialization — не бросает ошибку при сборке без API ключа
function getResend() {
  return new Resend(process.env.RESEND_API_KEY ?? "placeholder");
}

const FROM = process.env.RESEND_FROM_EMAIL ?? "noreply@vibecodeacademy.com";

// ============================================
// EMAIL TEMPLATES
// ============================================

function streakReminderHtml(name: string, streak: number, daysInactive: number): string {
  const firstName = name.split(" ")[0];
  const urgency = daysInactive >= 2 ? "сгорит сегодня" : "может сгореть";

  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Твой streak ${urgency}!</title>
</head>
<body style="margin:0;padding:0;background:#030712;font-family:Inter,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 20px;">

    <!-- Logo -->
    <div style="text-align:center;margin-bottom:32px;">
      <div style="display:inline-flex;align-items:center;gap:10px;">
        <div style="width:36px;height:36px;background:linear-gradient(135deg,#10B981,#047857);border-radius:10px;display:flex;align-items:center;justify-content:center;">
          <span style="color:white;font-size:18px;font-weight:bold;">V</span>
        </div>
        <span style="color:white;font-size:20px;font-weight:700;letter-spacing:-0.5px;">VibeCode Academy</span>
      </div>
    </div>

    <!-- Card -->
    <div style="background:#0F1117;border:1px solid #1F2937;border-radius:16px;padding:32px;">

      <!-- Flame icon -->
      <div style="text-align:center;margin-bottom:24px;">
        <div style="font-size:64px;line-height:1;">🔥</div>
      </div>

      <!-- Heading -->
      <h1 style="color:white;font-size:24px;font-weight:700;text-align:center;margin:0 0 8px 0;">
        Привет, ${firstName}!
      </h1>
      <p style="color:#9CA3AF;font-size:16px;text-align:center;margin:0 0 24px 0;">
        Твой streak <strong style="color:#F97316;">${streak} ${pluralDays(streak)}</strong> ${urgency}
      </p>

      <!-- Streak badge -->
      <div style="background:#7C2D12;border:1px solid #B45309;border-radius:12px;padding:16px;text-align:center;margin-bottom:24px;">
        <p style="color:#FED7AA;font-size:14px;margin:0 0 4px 0;">Текущий streak</p>
        <p style="color:#FDBA74;font-size:32px;font-weight:700;margin:0;">🔥 ${streak}</p>
      </div>

      <p style="color:#9CA3AF;font-size:14px;text-align:center;margin:0 0 24px 0;">
        Зайди сегодня и пройди хотя бы один урок, чтобы сохранить прогресс.
      </p>

      <!-- CTA Button -->
      <div style="text-align:center;">
        <a href="${process.env.NEXT_PUBLIC_APP_URL ?? "https://vibecodeacademy.com"}/dashboard"
           style="display:inline-block;background:linear-gradient(135deg,#10B981,#047857);color:white;text-decoration:none;padding:14px 32px;border-radius:10px;font-size:15px;font-weight:600;">
          Продолжить обучение →
        </a>
      </div>
    </div>

    <!-- Footer -->
    <p style="color:#374151;font-size:12px;text-align:center;margin-top:24px;">
      VibeCode Academy · Если не хочешь получать напоминания, измени настройки в профиле.
    </p>
  </div>
</body>
</html>`;
}

function pluralDays(n: number): string {
  if (n % 10 === 1 && n % 100 !== 11) return "день";
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return "дня";
  return "дней";
}

// ============================================
// SEND FUNCTIONS
// ============================================

export async function sendStreakReminderEmail(
  to: string,
  name: string,
  streak: number,
  daysInactive: number
): Promise<boolean> {
  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: FROM,
      to,
      subject: `🔥 Твой streak ${streak} ${pluralDays(streak)} сгорит сегодня!`,
      html: streakReminderHtml(name, streak, daysInactive),
    });

    if (error) {
      console.error("Resend error:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Email send failed:", err);
    return false;
  }
}
