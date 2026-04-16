import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const editSchema = z.object({
  type: z.enum(["file", "screenshot", "link"]).optional(),
  fileUrl: z.string().optional(),
  fileName: z.string().optional(),
  fileSize: z.number().optional(),
  linkUrl: z.string().url().optional(),
  comment: z.string().max(1000).optional(),
});

// PATCH /api/practice/submission/[submissionId] — редактировать
export async function PATCH(
  req: NextRequest,
  { params }: { params: { submissionId: string } }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const submission = await prisma.practiceSubmission.findFirst({
    where: { id: params.submissionId, userId: session.user.id, status: "active" },
  });
  if (!submission) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const body = await req.json();
  const parsed = editSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid data" }, { status: 400 });

  const updated = await prisma.practiceSubmission.update({
    where: { id: params.submissionId },
    data: { ...parsed.data },
  });

  return NextResponse.json({ submission: updated });
}

// DELETE /api/practice/submission/[submissionId] — отмена
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { submissionId: string } }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const submission = await prisma.practiceSubmission.findFirst({
    where: { id: params.submissionId, userId: session.user.id },
  });
  if (!submission) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await prisma.practiceSubmission.update({
    where: { id: params.submissionId },
    data: { status: "cancelled" },
  });

  return NextResponse.json({ ok: true });
}
