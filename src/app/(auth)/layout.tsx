import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Zap } from "lucide-react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Фоновые декорации */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/3 rounded-full blur-3xl" />
      </div>

      {/* Хедер с логотипом */}
      <header className="relative z-10 p-6">
        <Link href="/" className="inline-flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-emerald">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-syne font-bold text-white text-xl">
            VibeCode Academy
          </span>
        </Link>
      </header>

      {/* Контент */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        {children}
      </main>
    </div>
  );
}
