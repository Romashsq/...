import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { ChatWrapper } from "@/components/ai/chat-wrapper";

// ============================================
// APP LAYOUT — защищённая зона с sidebar
// Загружает userStats один раз и передаёт дочерним компонентам
// ============================================

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  // Загружаем актуальные данные пользователя (XP, streak)
  const userStats = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      totalXP: true,
      currentStreak: true,
      longestStreak: true,
      name: true,
      email: true,
      image: true,
    },
  });

  const stats = userStats ?? {
    totalXP: 0,
    currentStreak: 0,
    longestStreak: 0,
    name: session.user.name ?? null,
    email: session.user.email ?? null,
    image: session.user.image ?? null,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Декоративный фон */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/3 rounded-full blur-3xl" />
      </div>

      <Sidebar
        name={stats.name}
        email={stats.email}
        image={stats.image}
        totalXP={stats.totalXP}
        currentStreak={stats.currentStreak}
      />

      <div className="ml-0 md:ml-64 flex flex-col min-h-screen">
        <Header totalXP={stats.totalXP} currentStreak={stats.currentStreak} />
        <main className="flex-1 p-6 relative z-10">{children}</main>
      </div>

      <ChatWrapper totalXP={stats.totalXP} currentStreak={stats.currentStreak} />
    </div>
  );
}
