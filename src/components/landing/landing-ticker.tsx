"use client";

import { useEffect, useState } from "react";

const EVENTS = [
  { user: "Анна К.", action: "завершила урок", item: "Промпты для кода", xp: "+150 XP", emoji: "⚡" },
  { user: "Дмитрий П.", action: "получил достижение", item: "Огненная серия", xp: "🔥", emoji: "🏆" },
  { user: "Мария С.", action: "прошла модуль", item: "Промпт-инженерия", xp: "+500 XP", emoji: "🎯" },
  { user: "Иван Н.", action: "завершил урок", item: "Vibe Coding — старт", xp: "+120 XP", emoji: "⚡" },
  { user: "Елена В.", action: "вышла в топ-10", item: "Таблица лидеров", xp: "🏅", emoji: "📊" },
  { user: "Алексей М.", action: "завершил квиз", item: "ИИ-агенты: основы", xp: "+80 XP", emoji: "🧠" },
  { user: "Ольга Р.", action: "запустила проект", item: "Telegram-бот на Claude", xp: "+300 XP", emoji: "🚀" },
  { user: "Сергей Т.", action: "получил сертификат", item: "Промпт-инженер", xp: "🎓", emoji: "🏆" },
];

export function LandingTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % EVENTS.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const event = EVENTS[index];

  return (
    <div className="flex items-center justify-center gap-3 px-6 h-9">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
      <div
        className="flex items-center gap-2 text-sm text-gray-400 transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <span className="font-medium text-white">{event.user}</span>
        <span>{event.action}</span>
        <span className="text-gray-600">·</span>
        <span className="text-emerald-400 font-medium">{event.item}</span>
        <span className="text-gray-600">·</span>
        <span className="text-emerald-400 font-mono text-xs">{event.xp}</span>
      </div>
    </div>
  );
}
