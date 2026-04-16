import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const submitSchema = z.object({
  answers: z.array(z.number().int().min(0)),
});

// POST /api/quiz/[lessonId]/submit — проверить ответы и выдать XP
export async function POST(
  req: NextRequest,
  { params }: { params: { lessonId: string } }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const parsed = submitSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid answers" }, { status: 400 });
  }

  const { answers } = parsed.data;
  const userId = session.user.id;

  // Проверяем: уже проходил?
  const existing = await prisma.quizAttempt.findUnique({
    where: { userId_lessonId: { userId, lessonId: params.lessonId } },
  });
  if (existing) {
    return NextResponse.json(
      { error: "Already attempted" },
      { status: 409 }
    );
  }

  // Получаем квиз с правильными ответами
  const quiz = await prisma.quiz.findUnique({
    where: { lessonId: params.lessonId },
    include: { questions: { orderBy: { order: "asc" } } },
  });

  if (!quiz) {
    return NextResponse.json({ error: "Quiz not found" }, { status: 404 });
  }

  // Проверяем ответы
  const results = quiz.questions.map((q, i) => {
    const selected = answers[i] ?? -1;
    const correct = selected === q.correctIndex;
    return {
      correct,
      selectedIndex: selected,
      correctIndex: q.correctIndex,
      explanation: q.explanation ?? null,
    };
  });

  const score = results.filter((r) => r.correct).length;
  const total = quiz.questions.length;
  const xpEarned = total > 0 ? Math.round(quiz.xpReward * score / total) : 0;

  // Сохраняем попытку и обновляем XP в транзакции
  await prisma.$transaction([
    prisma.quizAttempt.create({
      data: { userId, lessonId: params.lessonId, score, total, xpEarned },
    }),
    prisma.user.update({
      where: { id: userId },
      data: { totalXP: { increment: xpEarned } },
    }),
  ]);

  return NextResponse.json({ score, total, xpEarned, results });
}
