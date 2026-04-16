import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

// ============================================
// СХЕМА ВАЛИДАЦИИ
// ============================================

const registerSchema = z.object({
  name: z.string().min(2, "Имя минимум 2 символа").max(50),
  email: z.string().email("Неверный формат email"),
  password: z
    .string()
    .min(6, "Пароль минимум 6 символов")
    .max(100, "Пароль слишком длинный"),
});

// ============================================
// POST /api/auth/register
// ============================================

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Валидация входных данных
    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0].message },
        { status: 400 }
      );
    }

    const { name, email, password } = parsed.data;

    // Проверяем, не занят ли email
    const existingUser = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Пользователь с таким email уже существует" },
        { status: 409 }
      );
    }

    // Хешируем пароль (10 раундов — баланс безопасности и скорости)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаём пользователя
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        role: "student",
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      { message: "Регистрация прошла успешно", user },
      { status: 201 }
    );
  } catch (error) {
    console.error("[REGISTER_ERROR]", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
