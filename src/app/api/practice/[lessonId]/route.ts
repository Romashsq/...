import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/practice/[lessonId] — список заданий + сабмиты пользователя
export async function GET(
  _req: NextRequest,
  { params }: { params: { lessonId: string } }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { lessonId } = params;

  const tasks = await prisma.practiceTask.findMany({
    where: { lessonId },
    orderBy: { order: "asc" },
    include: {
      submissions: {
        where: { userId: session.user.id, status: "active" },
        orderBy: { submittedAt: "desc" },
        take: 1,
      },
    },
  });

  return NextResponse.json({ tasks });
}
