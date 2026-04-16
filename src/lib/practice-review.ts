import OpenAI from "openai";
import { prisma } from "@/lib/prisma";

// ============================================
// ТИПЫ
// ============================================

export interface AiReview {
  rating: "excellent" | "good" | "needs_work";
  feedback: string;   // основная обратная связь (2-3 предложения)
  tips: string[];     // 2-3 конкретных совета
  locale: string;
}

// ============================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================

function getClient(): OpenAI {
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY ?? "placeholder" });
}

// Загружаем изображение по URL для отправки в GPT-4o (мультимодальность)
async function fetchImageAsBase64(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.startsWith("image/")) return null;
    const buffer = await res.arrayBuffer();
    const b64 = Buffer.from(buffer).toString("base64");
    return `data:${contentType};base64,${b64}`;
  } catch {
    return null;
  }
}

// ============================================
// ОСНОВНАЯ ФУНКЦИЯ РЕВЬЮ
// ============================================

export async function generatePracticeReview(
  submissionId: string,
  locale: "ru" | "en" = "ru"
): Promise<AiReview> {
  const submission = await prisma.practiceSubmission.findUnique({
    where: { id: submissionId },
    include: {
      task: {
        select: {
          title: true,
          titleEn: true,
          description: true,
          descriptionEn: true,
        },
      },
    },
  });

  if (!submission) throw new Error("Submission not found");

  const taskTitle =
    locale === "en" ? (submission.task.titleEn ?? submission.task.title) : submission.task.title;
  const taskDescription =
    locale === "en"
      ? (submission.task.descriptionEn ?? submission.task.description)
      : submission.task.description;

  const isRu = locale === "ru";

  const systemPrompt = isRu
    ? `Ты ментор на образовательной платформе по вайбкодингу с Claude AI.
Проверяешь практические задания студентов. Твои ревью:
- Конкретные и по делу (не воды)
- Поддерживающие, но честные
- На русском языке
- Ответ строго в JSON без markdown`
    : `You are a mentor on a vibe coding education platform.
You review students' practice submissions. Your reviews are:
- Specific and to the point (no fluff)
- Encouraging but honest
- In English
- Answer strictly in JSON, no markdown`;

  const outputSchema = `{
  "rating": "excellent" | "good" | "needs_work",
  "feedback": "string (2-3 sentences)",
  "tips": ["tip1", "tip2", "tip3"]
}`;

  // Строим детали сабмита
  const submissionDetails: string[] = [];
  if (submission.type === "link" && submission.linkUrl) {
    submissionDetails.push(isRu ? `Ссылка: ${submission.linkUrl}` : `Link: ${submission.linkUrl}`);
  }
  if ((submission.type === "file" || submission.type === "screenshot") && submission.fileName) {
    submissionDetails.push(isRu ? `Файл: ${submission.fileName}` : `File: ${submission.fileName}`);
  }
  if (submission.comment) {
    submissionDetails.push(isRu
      ? `Комментарий студента: ${submission.comment}`
      : `Student comment: ${submission.comment}`);
  }

  const userText = isRu
    ? `Задание: ${taskTitle}\nОписание: ${taskDescription}\n\nСтудент отправил:\n${submissionDetails.join("\n") || "Без комментария"}\n\nПроверь и верни JSON:\n${outputSchema}`
    : `Task: ${taskTitle}\nDescription: ${taskDescription}\n\nStudent submitted:\n${submissionDetails.join("\n") || "No comment"}\n\nReview and return JSON:\n${outputSchema}`;

  // Строим контент сообщения
  type UserContent = OpenAI.ChatCompletionContentPart[];
  const content: UserContent = [{ type: "text", text: userText }];

  // Если скриншот — добавляем изображение
  if (submission.type === "screenshot" && submission.fileUrl) {
    const dataUrl = await fetchImageAsBase64(submission.fileUrl);
    if (dataUrl) {
      content.push({ type: "image_url", image_url: { url: dataUrl, detail: "low" } });
    }
  }

  const client = getClient();
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini", // быстро и дёшево для ревью
    max_tokens: 512,
    temperature: 0.4,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content },
    ],
  });

  const raw = response.choices[0]?.message?.content ?? "{}";

  let parsed: AiReview;
  try {
    const obj = JSON.parse(raw);
    parsed = {
      rating: ["excellent", "good", "needs_work"].includes(obj.rating) ? obj.rating : "good",
      feedback: String(obj.feedback ?? ""),
      tips: Array.isArray(obj.tips) ? obj.tips.map(String).slice(0, 3) : [],
      locale,
    };
  } catch {
    parsed = {
      rating: "good",
      feedback: isRu
        ? "Работа принята. Продолжай практиковаться!"
        : "Work received. Keep practicing!",
      tips: [],
      locale,
    };
  }

  // Сохраняем в БД
  await prisma.practiceSubmission.update({
    where: { id: submissionId },
    data: {
      aiReview: JSON.stringify(parsed),
      aiReviewAt: new Date(),
    },
  });

  return parsed;
}
