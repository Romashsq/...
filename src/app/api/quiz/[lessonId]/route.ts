import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/quiz/[lessonId] — получить квиз (без correctIndex)
export async function GET(
  _req: NextRequest,
  { params }: { params: { lessonId: string } }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const quiz = await prisma.quiz.findUnique({
    where: { lessonId: params.lessonId },
    include: {
      questions: {
        orderBy: { order: "asc" },
        select: {
          id: true,
          text: true,
          options: true,
          order: true,
          // correctIndex и explanation НЕ отдаём клиенту до ответа
        },
      },
    },
  });

  if (!quiz) {
    return NextResponse.json({ quiz: null });
  }

  // Парсим options из JSON-строки
  const questions = quiz.questions.map((q) => ({
    ...q,
    options: JSON.parse(q.options) as string[],
  }));

  // Была ли попытка у этого пользователя
  const attempt = await prisma.quizAttempt.findUnique({
    where: {
      userId_lessonId: {
        userId: session.user.id,
        lessonId: params.lessonId,
      },
    },
    select: { score: true, total: true, xpEarned: true },
  });

  return NextResponse.json({
    quiz: { id: quiz.id, xpReward: quiz.xpReward, questions },
    attempt,
  });
}
