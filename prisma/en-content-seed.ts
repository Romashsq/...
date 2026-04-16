import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ============================================
// EN CONTENT — Module 0 (3 free lessons)
// ============================================

const MODULE_0_EN = {
  titleEn: "Welcome to the World of AI",
  descriptionEn:
    "Introductory module: why now is the best time to learn AI and what you'll achieve by the end of the course.",
};

const LESSONS_EN: Record<
  string,
  { titleEn: string; descriptionEn: string; contentEn: string }
> = {
  "lesson-0-1": {
    titleEn: "Why 2025 Changed Everything",
    descriptionEn:
      "Statistics, facts, and real examples: why AI skills became mandatory right now.",
    contentEn: `# Why 2025 Changed Everything

## The World Divided Into "Before" and "After"

In February 2025, Andrej Karpathy — former AI Director at Tesla and co-founder of OpenAI — published a post on X (Twitter) that changed development forever. He described his morning routine: sitting with coffee, dictating an idea by voice, while AI writes the code. He called it **vibe coding** — coding by feeling.

## Numbers That Change Everything

- **71%** of employers prefer candidates with AI skills
- **25%** of Y Combinator startups have codebases written 95% with AI
- **10x** — how much faster developers work with AI tools
- **$250,000/year** — what Anthropic pays prompt engineers

## What Specifically Changed

Before 2025, AI was a tool for specialists. You needed to know Python, understand machine learning, know APIs.

Now it's different:

    Old world:  Idea → Find a developer → 3 months → $30,000 → Launch
    New world:  Idea → Prompt in Cursor → 3 days → $0 → Launch

## Who's Already Using AI

**Enterprise:** McKinsey, Goldman Sachs, Microsoft — all major companies are implementing AI workflows.

**Small business:** Regular entrepreneurs build websites, bots, and automations without hiring developers.

**Freelancers:** One person with AI replaces a team of 3–5 people.

## Why Learn Right Now

In a year, the gap between those who can work with AI and those who can't will be insurmountable.

> 💡 **Key insight:** AI won't replace you. You'll be replaced by a person who knows how to work with AI.

## Practical Assignment

Before the next lesson, try visiting claude.ai or chatgpt.com and ask any question. Notice the quality of the response.`,
  },

  "lesson-0-2": {
    titleEn: "What You'll Build by the End of the Course",
    descriptionEn:
      "A roadmap from beginner to prompt engineer. Real student projects.",
    contentEn: `# What You'll Build by the End of the Course

## Your Path in 3 Months

This course isn't theory for the sake of theory. Every module ends with a practical project. By the end, you'll have **a portfolio of real working tools**.

## Projects You'll Create

### 🤖 Telegram Bot
A personal assistant in the messenger:
- Answers questions using your knowledge base
- Reminds you about tasks
- Analyzes documents and PDFs

### 🌐 Web Application
A full-featured SaaS tool:
- Landing page with registration form
- AI-powered functionality
- Payment processing via Stripe

### ⚙️ Automation Agent
An AI agent that automatically every day:
- Monitors brand mentions
- Analyzes sentiment
- Sends a summary to Telegram

## Technology Stack

| Tool | Purpose |
|------|---------|
| Cursor AI | Writing code with AI |
| Claude / GPT-4o | Language models |
| Make / n8n | No-code automation |
| Supabase | Cloud database |
| Vercel | Deploy in 2 minutes |
| Stripe | Payment processing |

## Progress Levels

    Beginner → Student → Practitioner → Expert → Master
      0 XP    500 XP     2000 XP     5000 XP   10000 XP

## Student Stories

**Anna, marketer:**
> "In a month I automated all content marketing. Saving 15 hours a week."

**Dmitry, entrepreneur:**
> "Built a SaaS for HR screening without hiring a developer. First $500 came within a week."

## What You Need to Start

- Computer with internet ✅
- Desire to learn ✅
- Programming experience — **not required** ✅

> 🎯 **Your goal:** in 3 months, confidently use AI to solve real-world problems.`,
  },

  "lesson-0-3": {
    titleEn: "How VibeCode Academy Works",
    descriptionEn:
      "Course structure, progress system, XP, achievements, and certificate.",
    contentEn: `# How VibeCode Academy Works

## Learning Structure

The course consists of **10 modules** and **60+ lessons**. Each module is a complete knowledge block.

    Module → Lessons → Practice → XP → Achievement → Next Module

## XP (Experience) System

For every action you earn **experience (XP)**:

| Action | XP |
|--------|-----|
| Complete a lesson | +50 XP |
| Finish a module | +500 XP |
| 7-day streak | +200 XP |
| First lesson | +100 XP (bonus) |
| Pass exam | +1000 XP |

## Streak — Consecutive Days of Study

Every day of learning increases your streak. 🔥 The streak resets if you skip a day.

## Achievements (Badges)

| Badge | Condition |
|-------|-----------|
| 🌱 First Step | Complete the first lesson |
| 🔥 Week Without Stopping | 7-day streak |
| 🧐 Curious Mind | 10 lessons |
| 🧠 Fundamentals Expert | Complete module 1 |
| ⚡ Vibe Coder | Complete module 3 |
| 🤖 Agent Tamer | Complete module 5 |
| 👑 Prompt Master | Complete all modules |
| 🎓 VibeCode Graduate | Earn the certificate |

## Free Lessons

The first **3 lessons of each module** are available for free.

## Certificate

After completing all modules and the final exam, you receive a **VibeCode Academy Prompt Engineer Certificate**.

## Tips for Effective Learning

1. **Study consistently** — 20 minutes a day is better than 3 hours once a week
2. **Don't skip practice** — do each assignment even if it seems simple
3. **Use the chat** — ask questions in the community
4. **Track your streak** — it's a powerful motivation tool

> 🚀 Ready to start? Your first lesson is waiting!`,
  },
};

// ============================================
// SEED FUNCTION
// ============================================

async function main() {
  console.log("🌍 Seeding EN content for module 0...");

  // Find module 0
  const module0 = await prisma.module.findFirst({
    where: { order: 0 },
    include: {
      lessons: {
        where: { isPublished: true },
        orderBy: { order: "asc" },
        take: 3,
      },
    },
  });

  if (!module0) {
    console.error("❌ Module 0 not found. Run db:seed first.");
    process.exit(1);
  }

  // Update module titleEn + descriptionEn
  await prisma.module.update({
    where: { id: module0.id },
    data: {
      titleEn: MODULE_0_EN.titleEn,
      descriptionEn: MODULE_0_EN.descriptionEn,
    },
  });
  console.log(`✅ Module 0: "${MODULE_0_EN.titleEn}"`);

  // Update lessons
  const lessonKeys = ["lesson-0-1", "lesson-0-2", "lesson-0-3"];

  for (let i = 0; i < module0.lessons.length && i < 3; i++) {
    const lesson = module0.lessons[i];
    const key = lessonKeys[i];
    const enData = LESSONS_EN[key];

    if (!enData) continue;

    await prisma.lesson.update({
      where: { id: lesson.id },
      data: {
        titleEn: enData.titleEn,
        descriptionEn: enData.descriptionEn,
        contentEn: enData.contentEn,
      },
    });
    console.log(`  ✅ Lesson ${i + 1}: "${enData.titleEn}"`);
  }

  console.log("\n✨ EN content seed complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
