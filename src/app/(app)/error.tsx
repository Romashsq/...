"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function AppError({ error, reset }: ErrorProps) {
  const { t } = useTranslation();

  useEffect(() => {
    console.error("[APP_ERROR]", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 space-y-6">
      <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
        <AlertTriangle className="w-7 h-7 text-red-400" />
      </div>

      <div>
        <h2 className="font-syne text-2xl font-bold text-white mb-2">
          {t("errors.somethingWrong")}
        </h2>
        <p className="text-gray-400 max-w-md">
          {t("errors.errorDesc")}
        </p>
      </div>

      <div className="flex gap-3">
        <Button onClick={reset}>{t("errors.tryAgain")}</Button>
        <Button variant="outline" onClick={() => window.history.back()}>
          {t("errors.back")}
        </Button>
      </div>
    </div>
  );
}
