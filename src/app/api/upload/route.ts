import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const MAX_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "application/pdf",
  "text/plain",
  "application/zip",
  "application/x-zip-compressed",
];

// POST /api/upload — загрузка файла
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });
  if (file.size > MAX_SIZE) return NextResponse.json({ error: "File too large (max 10 MB)" }, { status: 400 });
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json({ error: "File type not allowed" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Безопасное имя файла
  const ext = path.extname(file.name).toLowerCase();
  const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
  const userDir = path.join(process.cwd(), "public", "uploads", session.user.id);

  await mkdir(userDir, { recursive: true });
  await writeFile(path.join(userDir, safeName), buffer);

  const fileUrl = `/uploads/${session.user.id}/${safeName}`;

  return NextResponse.json({
    fileUrl,
    fileName: file.name,
    fileSize: file.size,
  });
}
