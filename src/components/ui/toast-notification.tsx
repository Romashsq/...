"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useNotificationStore } from "@/store/notification-store";
import { cn } from "@/lib/utils";

// ============================================
// ИКОНКИ И ЦВЕТА ПО ТИПУ
// ============================================

const typeStyles = {
  xp: "border-emerald-500/30 bg-emerald-500/10",
  achievement: "border-amber-500/30 bg-amber-500/10",
  streak: "border-orange-500/30 bg-orange-500/10",
  info: "border-blue-500/30 bg-blue-500/10",
  error: "border-red-500/30 bg-red-500/10",
};

// ============================================
// TOAST CONTAINER
// ============================================

export function ToastContainer() {
  const { notifications, remove } = useNotificationStore();

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none">
      {notifications.map((n) => (
        <ToastItem key={n.id} notification={n} onClose={() => remove(n.id)} />
      ))}
    </div>
  );
}

// ============================================
// ОТДЕЛЬНЫЙ TOAST
// ============================================

function ToastItem({
  notification,
  onClose,
}: {
  notification: { id: string; type: string; title: string; message?: string; emoji?: string };
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Небольшая задержка для CSS анимации входа
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const typeKey = notification.type as keyof typeof typeStyles;

  return (
    <div
      className={cn(
        "pointer-events-auto flex items-start gap-3 px-4 py-3 rounded-xl border backdrop-blur-sm",
        "shadow-lg transition-all duration-300",
        typeStyles[typeKey] ?? typeStyles.info,
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      )}
    >
      {notification.emoji && (
        <span className="text-xl flex-shrink-0 mt-0.5">{notification.emoji}</span>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold text-sm">{notification.title}</p>
        {notification.message && (
          <p className="text-gray-400 text-xs mt-0.5">{notification.message}</p>
        )}
      </div>
      <button
        onClick={onClose}
        className="flex-shrink-0 text-gray-500 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
