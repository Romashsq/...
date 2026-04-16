"use client";

import { ChatAssistant } from "./chat-assistant";
import { useSession } from "next-auth/react";
import { calculateLevel } from "@/lib/utils";

interface Props {
  totalXP?: number;
  currentStreak?: number;
}

export function ChatWrapper({ totalXP = 0, currentStreak = 0 }: Props) {
  const { data: session } = useSession();
  if (!session) return null;

  const { level, title } = calculateLevel(totalXP);

  const context = `User: ${session.user?.name ?? "Student"} | Level: ${level} (${title}) | XP: ${totalXP} | Streak: ${currentStreak} days`;

  return <ChatAssistant userContext={context} />;
}
