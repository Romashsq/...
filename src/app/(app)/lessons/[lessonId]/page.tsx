import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import { LessonViewer } from "./lesson-viewer";

// ============================================
// DATA FETCHING
// ============================================

async function getLessonData(lessonId: string, userId: string) {
  const [lesson, quiz, quizAttempt, practiceTasks] = await Promise.all([
    prisma.lesson.findUnique({
      where: { id: lessonId, isPublished: true },
      include: {
        module: {
          select: {
            id: true,
            title: true,
            titleEn: true,
            emoji: true,
            order: true,
            lessons: {
              where: { isPublished: true },
              orderBy: { order: "asc" },
              select: { id: true, title: true, titleEn: true, order: true },
            },
          },
        },
        progress: {
          where: { userId },
          select: { completed: true, completedAt: true, timeSpent: true },
        },
      },
    }),
    prisma.quiz.findUnique({
      where: { lessonId },
      include: {
        questions: {
          orderBy: { order: "asc" },
          select: { id: true, text: true, options: true, order: true },
        },
      },
    }),
    prisma.quizAttempt.findUnique({
      where: { userId_lessonId: { userId, lessonId } },
      select: { score: true, total: true, xpEarned: true },
    }),
    prisma.practiceTask.findMany({
      where: { lessonId },
      orderBy: { order: "asc" },
      include: {
        submissions: {
          where: { userId, status: "active" },
          orderBy: { submittedAt: "desc" },
          take: 1,
        },
      },
    }),
  ]);

  return { lesson, quiz, quizAttempt, practiceTasks };
}

// ============================================
// PAGE COMPONENT
// ============================================

interface Props {
  params: { lessonId: string };
}

export default async function LessonPage({ params }: Props) {
  const session = await auth();
  if (!session) redirect("/login");

  const { lesson, quiz, quizAttempt, practiceTasks } = await getLessonData(
    params.lessonId,
    session.user.id
  );
  if (!lesson) notFound();

  const progress = lesson.progress[0] ?? null;

  // Найти следующий урок
  const currentIndex = lesson.module.lessons.findIndex(
    (l) => l.id === lesson.id
  );
  const nextLesson = lesson.module.lessons[currentIndex + 1] ?? null;

  // Если это последний урок модуля — найти следующий модуль
  const nextModule = !nextLesson
    ? await prisma.module.findFirst({
        where: { order: lesson.module.order + 1, isPublished: true },
        select: { id: true },
      })
    : null;

  // Парсим options из JSON-строки для каждого вопроса
  const quizData = quiz
    ? {
        id: quiz.id,
        xpReward: quiz.xpReward,
        questions: quiz.questions.map((q) => ({
          ...q,
          options: JSON.parse(q.options) as string[],
        })),
      }
    : null;

  // Сериализуем practiceTasks (даты → строки, type → union)
  const practiceTasksData = practiceTasks.map((task) => ({
    ...task,
    submissions: task.submissions.map((s) => ({
      ...s,
      type: s.type as "file" | "screenshot" | "link",
      submittedAt: s.submittedAt.toISOString(),
      updatedAt: s.updatedAt.toISOString(),
    })),
  }));

  return (
    <LessonViewer
      lesson={lesson}
      progress={progress}
      nextLesson={nextLesson}
      nextModuleId={nextModule?.id ?? null}
      userId={session.user.id}
      quiz={quizData}
      quizAttempt={quizAttempt ?? null}
      practiceTasks={practiceTasksData}
    />
  );
}
