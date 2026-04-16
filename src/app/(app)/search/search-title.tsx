"use client";

import { useTranslation } from "@/hooks/use-translation";

export function SearchTitle() {
  const { t } = useTranslation();
  return (
    <h1 className="font-syne font-bold text-2xl text-white mb-6">{t("search.title")}</h1>
  );
}
