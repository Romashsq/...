"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

interface SettingsFormProps {
  initialName: string;
}

export function SettingsForm({ initialName }: SettingsFormProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const [name, setName] = useState(initialName);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim().length < 2) {
      setError(t("settings.nameError"));
      return;
    }

    setLoading(true);
    setError("");
    setSaved(false);

    try {
      const res = await fetch("/api/user", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? t("settings.saveError"));
        return;
      }

      setSaved(true);
      router.refresh();
      setTimeout(() => setSaved(false), 3000);
    } catch {
      setError(t("settings.genericError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-sm text-gray-300 font-medium">{t("settings.name")}</label>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
            setSaved(false);
          }}
          placeholder={t("settings.namePlaceholder")}
          error={error}
        />
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" loading={loading} size="sm">
          {t("settings.save")}
        </Button>
        {saved && (
          <div className="flex items-center gap-1.5 text-emerald-400 text-sm">
            <CheckCircle2 className="w-4 h-4" />
            {t("settings.saved")}
          </div>
        )}
      </div>
    </form>
  );
}
