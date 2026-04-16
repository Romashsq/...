import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { SettingsClient } from "./settings-client";

// ============================================
// PAGE COMPONENT (Server)
// ============================================

export default async function SettingsPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      totalXP: true,
    },
  });

  if (!user) redirect("/login");

  return (
    <SettingsClient
      initialName={user.name ?? ""}
      email={user.email}
      role={user.role}
      createdAt={user.createdAt.toISOString()}
      totalXP={user.totalXP}
    />
  );
}
