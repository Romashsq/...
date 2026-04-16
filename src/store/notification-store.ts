import { create } from "zustand";

// ============================================
// ТИПЫ
// ============================================

export type NotificationType = "xp" | "achievement" | "streak" | "info" | "error";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message?: string;
  emoji?: string;
}

interface NotificationStore {
  notifications: Notification[];
  add: (notification: Omit<Notification, "id">) => void;
  remove: (id: string) => void;
  clear: () => void;
}

// ============================================
// ZUSTAND STORE
// ============================================

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],

  add: (notification) => {
    const id = Math.random().toString(36).slice(2);
    set((state) => ({
      notifications: [...state.notifications, { ...notification, id }],
    }));

    // Авто-удаление через 4 секунды
    setTimeout(() => {
      set((state) => ({
        notifications: state.notifications.filter((n) => n.id !== id),
      }));
    }, 4000);
  },

  remove: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),

  clear: () => set({ notifications: [] }),
}));

// ============================================
// ХЕЛПЕРЫ — i18n-aware уведомления
// ============================================

function getLocale(): "ru" | "en" {
  try {
    const stored = localStorage.getItem("vibecode-language");
    if (stored) {
      const parsed = JSON.parse(stored) as { state?: { locale?: string } };
      if (parsed?.state?.locale === "en") return "en";
    }
  } catch {
    // ignore
  }
  return "ru";
}

export const notify = {
  xp: (amount: number) => {
    const locale = getLocale();
    useNotificationStore.getState().add({
      type: "xp",
      emoji: "⭐",
      title: `+${amount} XP`,
      message: locale === "en" ? "Lesson complete!" : "Урок завершён!",
    });
  },

  achievement: (title: string, emoji: string, xpReward: number) => {
    const locale = getLocale();
    useNotificationStore.getState().add({
      type: "achievement",
      emoji,
      title: locale === "en" ? `Achievement: ${title}` : `Достижение: ${title}`,
      message: `+${xpReward} XP`,
    });
  },

  streak: (days: number) => {
    const locale = getLocale();
    useNotificationStore.getState().add({
      type: "streak",
      emoji: "🔥",
      title: locale === "en" ? `${days}-day streak!` : `${days}-дневная серия!`,
      message: locale === "en" ? "Keep it up" : "Продолжай в том же духе",
    });
  },
};
