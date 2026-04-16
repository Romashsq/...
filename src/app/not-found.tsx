"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center px-6">
      {/* Фон */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center space-y-6">
        {/* Логотип */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
            <Zap className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* 404 */}
        <div className="font-syne text-8xl font-bold text-white/10 select-none leading-none">
          404
        </div>

        <div>
          <h1 className="font-syne text-3xl font-bold text-white mb-3">
            {t("errors.notFound")}
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            {t("errors.notFoundDesc")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/dashboard">
            <Button size="lg">{t("errors.toDashboard")}</Button>
          </Link>
          <Link href="/">
            <Button variant="outline" size="lg">
              {t("errors.toHome")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
