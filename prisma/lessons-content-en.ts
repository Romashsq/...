// English lesson content — VibeCode Academy — Modules 0-5

export const LESSON_CONTENT_EN: Record<string, string> = {

  // ===== MODULE 0 — Welcome to Vibecoding =====

  "0-1": `# What is Vibecoding and Why It's a Revolution

In February 2025, Andrej Karpathy — former AI Director at Tesla and OpenAI co-founder — wrote one post that changed everything. He described sitting with coffee, dictating an idea by voice, and AI writing the code. He called it **vibe coding** — coding by feel, by vibe.

Before this, software creation was the domain of programmers. You had to learn syntax, memorize hundreds of commands, understand architecture. Now the rules have changed forever.

## Why This Is a Revolution

Before, to create an app you had to: hire a developer, wait months, pay thousands of dollars. Or spend years learning yourself.

Now everything is different:

    Old world:  Idea → Find a developer → 3 months → $30,000 → Launch
    New world:  Idea → Prompt in Cursor → 3 days → $0 → Working product

25% of Y Combinator startups in 2025 have codebases written 95% with AI. This isn't the future — it's happening right now.

## What Vibe Coding Means

Vibe coding is when you:
- Describe what you want in plain English
- AI writes the code
- You review the result and give next instructions
- Repeat until the product is ready

You don't need to know JavaScript, Python, or any other language. You need to know **how to explain clearly**.

## Why Claude?

Among all AI assistants, Claude (Anthropic) stands out:
- **200k token context** — the entire codebase fits in one conversation
- **Honest** — says "I don't know" instead of making things up
- **Best for long projects** — doesn't lose track of context
- **Safety-first** — won't help create harmful things

Over the course we'll use Claude as the main tool. It's your AI partner.

## Your First Vibe Coding Session

Open claude.ai right now and write:

> Create a simple landing page for a coffee shop. Dark design, name "Morning Brew", with menu section (espresso, cappuccino, latte) and contact button.

Look at what it produces. That's vibe coding — you described, it created.

> **Main idea:** You don't need to become a programmer. You need to become someone who knows how to work with AI. That's a completely different and much more accessible skill.`,

  "0-2": `# What You'll Build in This Course

Theory without practice is dead weight. This course is structured so that every module ends with a real working artifact — not exercises in a textbook, but actual products.

## Your Learning Path

The course is split into 10 modules, each building on the previous:

    Modules 0-2:  Dev environment and getting to know Claude
    Modules 3-4:  Cursor + API — building complete products
    Modules 5-6:  GitHub, deployment, full dev cycle
    Modules 7-8:  Claude Code and multi-agent systems
    Module 9:     Final projects and monetization

Each module ends with a working artifact: a bot, a web app, or a deployed product.

## What You'll Be Able to Do

After this course you'll know how to:

- Work with Claude AI as a professional tool, not just a chatbot
- Write prompts that get results on the first try
- Build full web apps with Next.js and React using Cursor
- Connect APIs: Anthropic, Telegram, Stripe — without spending hours on docs
- Deploy projects to Vercel and use Supabase as a backend
- Debug errors with AI
- Run autonomous AI agents and multi-agent systems with Claude Code

## Your Practical Assignment

1. Open a notebook or phone notes app
2. Write one idea — what would you like to build after this course? A landing page, tool, or app
3. Write 3 words that describe this idea
4. Save it — we'll come back to it in the final module

This idea becomes your final project. Start thinking in that direction now.

> **Main idea:** Knowing your goal turns learning from exercises into a journey. You already know where you're going.`,

  "0-3": `# How This Platform Works

Before diving into the material, it's worth understanding how VibeCode Academy is set up. This will save you time and help you learn more effectively. Good tools are worth knowing inside out.

## Course Structure

The course has **10 modules**. Each module is a separate topic, for example "Dev Environment" or "Claude AI". Inside each module — 3 to 8 lessons.

Lessons go in order. This is important: each lesson assumes you've completed the previous one. Don't skip — a missed lesson creates gaps in understanding.

## Progress System

The platform tracks your progress automatically:

- **XP (experience)** — earned for every completed lesson
- **Level** — grows as XP accumulates
- **Streak** — days in a row you've studied
- **Achievements** — unlocked for special milestones

## How to Use the Platform Effectively

**Read the theory, then immediately practice.** Each lesson ends with a practical assignment. Do it before moving to the next lesson — don't skip the practice.

**Use the AI assistant.** The built-in Vibe AI chat is available at any time. You can ask questions about lesson material, ask for code explanations, or request more examples.

**Track your streak.** Daily study, even 20 minutes, beats sporadic marathon sessions. Consistency compounds.

## Technical Requirements

To complete this course you need:
- Computer (Windows, Mac, or Linux)
- Internet connection
- Free accounts: Claude.ai, GitHub
- VS Code or Cursor (we'll install these in module 1)

That's it. No special hardware, no paid subscriptions at the start.

> **Main idea:** The platform is a tool, not a goal. The goal is the skills you take away. Use everything available here to get maximum results.`,

  // ===== MODULE 1 — Your Dev Environment =====

  "1-1": `# What is an IDE — Code Editor Explained

When you start vibe coding, the first practical question is: where do you write code? Notepad? An online editor? A special program?

The answer is an **IDE** — Integrated Development Environment. This is your main work tool for the entire course and beyond.

## IDE in Simple Terms

An IDE is a code editor with superpowers:

- **Syntax highlighting** — code reads like text, not a jumble of symbols
- **Autocomplete** — type 3 letters, get 10 suggestions
- **Debugger** — pause code at any point and see what's happening
- **Terminal** — run commands without leaving the editor
- **File manager** — your entire project in one panel
- **AI integration** — Claude or Copilot right inside the editor

Without an IDE you write code in Notepad and run it in a separate terminal. With an IDE — everything in one place.

## The Most Popular IDEs

**VS Code** — free, from Microsoft. The standard for web development. Enormous extensions marketplace. Works on Windows, Mac, Linux. We'll install it in the next lesson.

**Cursor** — VS Code fork with built-in Claude/GPT-4. The vibe coding standard. We'll cover it deeply in module 3.

**Windsurf** — from Codeium. Fast, with Cascade agent mode. Good free tier.

**WebStorm** — paid, from JetBrains. Professional tool, overkill for beginners.

## Which One to Choose?

For this course: start with **VS Code**. It's free, well-documented, and the foundation for Cursor and Windsurf. Once you're comfortable, Cursor becomes your daily driver for vibe coding.

> **Main idea:** An IDE is your workshop. A good workshop doesn't make you a craftsman, but a bad one definitely holds you back.`,

  "1-2": `# VS Code — Installation and First Launch

VS Code is free, fast, and has millions of extensions. Installing it takes 5 minutes. Let's do it.

## Installation

1. Go to code.visualstudio.com
2. Click the big download button — it auto-detects your OS
3. Run the installer, click Next/Install
4. Launch VS Code

**Windows:** after install, VS Code appears in the Start menu
**Mac:** drag VS Code to Applications folder
**Linux:** follow distro-specific instructions on the site

## Interface Overview

When you first open VS Code, you see:

**Left sidebar (Activity Bar):**
- Explorer (folder icon) — your files
- Search (magnifying glass) — search across all files
- Source Control (branch icon) — Git integration
- Extensions (puzzle icon) — install extensions

**Main area:** where you edit files
**Bottom:** Terminal — command line inside VS Code
**Top:** Menu bar and tabs with open files

## Essential First Settings

Open settings: \`Ctrl+,\` (Windows) or \`Cmd+,\` (Mac)

Recommended settings for beginners:
- **Font size:** 14-16 (easier to read)
- **Auto save:** afterDelay (files save automatically)
- **Word wrap:** on (long lines wrap)

## Installing a Theme

Boring gray interface kills motivation. Let's fix that:

1. \`Ctrl+Shift+P\` → type "Color Theme"
2. Choose from the built-in list
3. Popular choices: Dark+ (default dark), One Dark Pro, Dracula

**Or install from marketplace:**
Press \`Ctrl+Shift+X\`, search "One Dark Pro", click Install.

## Your First File

1. \`File → New File\` (or \`Ctrl+N\`)
2. \`Ctrl+Shift+P\` → "Select Language Mode" → HTML
3. Type \`html:5\` and press Tab — VS Code generates a full HTML template

That's it. You have a working code editor. Next step: the terminal.

> **Main idea:** VS Code is your home base. Spend 10 minutes setting it up comfortably — you'll spend thousands of hours here.`,

  "1-3": `# Cursor — AI-First Code Editor

VS Code is great. Cursor is VS Code with Claude built in so deeply that AI becomes part of every action.

## What is Cursor?

Cursor is a fork of VS Code — it looks identical, all the same shortcuts and extensions work, but AI is woven into every action:

- **Tab** — AI completes not just a word but an entire logical block
- **Chat** — ask questions about your code without leaving the editor
- **Composer** — make changes across multiple files with one prompt
- **Agent Mode** — give a task and Cursor does everything autonomously

## Why Cursor is the Vibe Coding Standard

In 2024-2025 Cursor became the tool of choice for:
- Y Combinator startups
- Independent developers
- Development teams

The reason is simple: with Cursor you write code 3-5x faster. Not because you type faster, but because AI does 70-80% of the routine.

## Cursor vs VS Code

| Feature | VS Code | Cursor |
|---------|---------|--------|
| Price | Free | $20/month (free tier available) |
| AI | Via extension | Built-in deeply |
| Tab completion | Basic | Multiline prediction |
| Chat | Via extension | Native |
| Agent mode | No | Yes |

## When to Use Which?

**VS Code:** free projects, learning fundamentals, light editing
**Cursor:** serious vibe coding, full projects, when you need speed

For this course: start with VS Code, switch to Cursor in module 3 when we go deep on it.

> **Main idea:** Cursor isn't just an editor with AI — it's a different paradigm where AI is your pair programmer, not an assistant you occasionally ask for help.`,

  "1-4": `# Installing Cursor and Configuration

Installing Cursor takes 5 minutes. Configuration — another 10. After that you'll have the best vibe coding tool ready to go.

## Installation

1. Go to cursor.sh
2. Click Download for your OS
3. Install (it's identical to VS Code install)
4. Launch

On first launch Cursor asks: import VS Code settings? If you have VS Code configured — click Yes, everything transfers.

## Account Setup

Cursor offers two modes:
- **Free tier** — 2,000 autocomplete uses, 50 slow requests per month
- **Pro ($20/month)** — unlimited autocomplete, fast Claude/GPT-4 access

For learning: the free tier is enough. For serious projects: Pro pays for itself in the first week.

**Sign up:** cursor.sh → Sign In → create account

## Choosing a Model

In Cursor settings (Cursor → Settings → Cursor Settings):

**Models** section — choose your default model:
- \`claude-3.5-sonnet\` — best balance of speed and quality ✅
- \`gpt-4o\` — good alternative
- \`claude-3-opus\` — most powerful, slower

**Recommendation:** use Claude Sonnet as primary.

## Connecting Your Own API Key

If you have an Anthropic or OpenAI API key:
Settings → Models → Add API Key

This lets you use your own quota instead of Cursor's limits.

## First Test

1. Create a new file: \`test.js\`
2. Start typing: \`function greet\`
3. Press Tab — Cursor completes the function

You should see Cursor predicting what you want to write. That's Tab autocomplete working.

> **Main idea:** Cursor configured once saves hours every week. Take 15 minutes now — it pays back on day one.`,

  "1-5": `# Terminal — Don't Fear the Command Line

The terminal looks scary: black screen, blinking cursor, cryptic commands. But for vibe coding you only need 10-15 commands. Let's cover them.

## Why You Need the Terminal

Even with the best AI tools, some things only happen in the terminal:
- Installing packages (\`npm install\`)
- Running a dev server (\`npm run dev\`)
- Git operations (\`git push\`)
- Starting Claude Code (\`claude\`)

The good news: Claude handles the terminal too. Just describe what you want and it writes the command.

## Opening the Terminal

**In VS Code/Cursor:** \`Ctrl+\`\` (backtick) or View → Terminal
**Standalone:**
- Windows: search "cmd" or "PowerShell" in Start
- Mac: Spotlight → Terminal
- Linux: usually \`Ctrl+Alt+T\`

## The 10 Commands You Actually Need

\`\`\`bash
# Navigate
cd folder-name       # go into folder
cd ..                # go up one level
ls                   # list files (Mac/Linux)
dir                  # list files (Windows)

# Node.js / npm
npm install          # install project dependencies
npm run dev          # start dev server
npm run build        # build for production

# Git
git init             # initialize repo
git add .            # stage all changes
git commit -m "msg"  # save snapshot
git push             # upload to GitHub

# Files
mkdir folder-name    # create folder
touch file.txt       # create file (Mac/Linux)
\`\`\`

## Practical: Start a Dev Server

1. Open terminal in VS Code
2. Navigate to your project folder
3. Type \`npm install\` — installs dependencies
4. Type \`npm run dev\` — starts the server
5. Open browser at \`localhost:3000\`

Your project is running locally.

## When Something Goes Wrong

Don't panic. Copy the error, paste it to Claude:
> I'm getting this error in the terminal: [paste error]. How do I fix it?

Claude will explain what went wrong and give you the exact command to fix it.

> **Main idea:** The terminal is a tool, not a barrier. 10 commands cover 90% of what you'll ever need, and AI handles the rest.`,

  "1-6": `# Project File Structure

Every project is a folder with files organized in a specific structure. Understanding this structure helps you work with AI more effectively — you'll know exactly what file to ask Claude to edit.

## Basic Web Project Structure

\`\`\`
my-project/
├── src/              # your source code
│   ├── app/          # pages (Next.js)
│   ├── components/   # reusable UI pieces
│   └── lib/          # utilities, helpers
├── public/           # static files (images, icons)
├── prisma/           # database schema
├── package.json      # project config + dependencies
├── .env              # secret keys (never commit!)
├── .gitignore        # files Git should ignore
└── README.md         # project documentation
\`\`\`

## What Each File Does

**package.json** — the project's passport. Contains:
- Project name and version
- List of dependencies (libraries used)
- Scripts: \`npm run dev\`, \`npm run build\`, etc.

**.env** — secret environment variables:
\`\`\`
OPENAI_API_KEY=sk-...
DATABASE_URL=postgres://...
NEXTAUTH_SECRET=...
\`\`\`
This file stays on your machine and is never uploaded to GitHub.

**.gitignore** — list of files Git ignores:
\`\`\`
node_modules/    # 300MB of dependencies, don't upload
.env             # secrets
.next/           # build artifacts
\`\`\`

## Next.js Structure (what we use)

\`\`\`
src/app/
├── page.tsx         # homepage (route: /)
├── about/
│   └── page.tsx     # about page (route: /about)
├── api/
│   └── chat/
│       └── route.ts # API endpoint
└── layout.tsx       # shared layout wrapper
\`\`\`

Each folder = a route. File called \`page.tsx\` = the page at that route.

## How to Reference Files When Talking to Claude

The more precise you are, the better:

❌ "Fix the button"
✅ "In \`src/components/Button.tsx\`, the onClick handler isn't working — here's the code..."

Claude understands file paths and uses them to give more targeted help.

> **Main idea:** File structure is the map of your project. Knowing this map makes your AI conversations 2x more productive.`,

  // ===== MODULE 2 — Claude AI — Your Main Partner =====

  "2-1": `# What is Claude and Why It's Better Than ChatGPT

You'll work with Claude more than any other tool in this course. Let's understand what it actually is and why we chose it over the alternatives.

## The Anthropic Story

Anthropic was founded in 2021 by Dario Amodei, Daniela Amodei, and several former OpenAI researchers. They left OpenAI over disagreements about safety priorities.

Anthropic's core belief: AI should be **safe, honest, and helpful** — in that order. This philosophy shaped Claude's character.

## Claude's Key Strengths

**Honesty first.** Claude says "I don't know" instead of confidently making things up. For programming, this is critical — a hallucinated API method can waste hours of debugging.

**Massive context window.** Claude 3.5 Sonnet handles 200,000 tokens — roughly 500 pages of text. You can paste an entire codebase and discuss it in one conversation.

**Long-form reliability.** On tasks requiring sustained focus — writing a full app, analyzing a big document — Claude stays consistent where other models drift.

**Character and nuance.** Claude has genuine opinions, admits uncertainty, and reasons through complex tradeoffs instead of just pattern-matching.

## Claude vs ChatGPT vs Gemini

| Feature | Claude | ChatGPT | Gemini |
|---------|--------|---------|--------|
| Context window | 200k tokens | 128k tokens | 1M tokens |
| Code quality | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Honesty | High | Medium | Medium |
| Long projects | Excellent | Good | Good |

## Claude Models

- **Claude Haiku** — fast, cheap, good for simple tasks
- **Claude Sonnet** — best balance of speed and quality ✅ (our default)
- **Claude Opus** — most powerful, slower, more expensive

For vibe coding: **Sonnet** is the right choice 90% of the time.

## Free vs Paid

**Free (claude.ai):** limited messages per day, access to Sonnet
**Pro ($20/month):** more messages, priority access, Claude.ai Projects

Start free. Upgrade when you hit the daily limit regularly.

> **Main idea:** Claude isn't just a chatbot — it's a thinking partner. The better you learn to work with it, the faster you'll build things that previously required a team.`,

  "2-2": `# Claude.ai — Web Interface (Start for Free)

Claude.ai is the official Anthropic web interface. No installation needed — open a browser and start working. This is where most people first meet Claude.

## Getting Started

1. Go to claude.ai
2. Click "Start for Free"
3. Sign up with email or Google
4. You're in

The interface is minimal: a text field at the bottom, conversation in the center, model selector at the top.

## Key Interface Features

**New Chat** (top left) — start a fresh conversation
**History** (left sidebar) — all your previous conversations
**Model selector** (top) — choose Claude version
**Attach files** (paperclip icon) — upload documents, images, code files
**Projects** (left sidebar) — organized workspaces with persistent context

## How to Write Effective Prompts

The quality of Claude's response depends almost entirely on how you ask.

**Basic structure:**
\`\`\`
[Role/Context] + [Task] + [Format/Constraints]
\`\`\`

Example:
> You are an expert Next.js developer. Create a user authentication component with email and password fields. Use TypeScript, Tailwind CSS for styling. Include form validation and error handling.

Compare to:
> Make a login form

The first prompt gets production-ready code. The second gets a basic example.

## Uploading Files

Claude can analyze:
- **Code files** — paste code or attach .ts, .py, .js files
- **Images** — screenshots, diagrams, mockups
- **Documents** — PDFs, text files
- **CSV/Excel** — data analysis

Practical use: take a screenshot of a UI you like → ask Claude to recreate it in code.

## Conversation Memory

**Important:** Claude remembers everything within one conversation, but forgets between conversations. If you close a chat and open a new one — Claude starts fresh.

**Solution:** use Projects (covered in a later lesson) or start each new chat with context.

> **Main idea:** Claude.ai is your free daily driver. Learn to use it well before moving to paid tools — the skills transfer directly.`,

  "2-3": `# Claude Models: Haiku, Sonnet, Opus — When to Use Which

Anthropic releases Claude in three tiers. Each has a different speed/power tradeoff. Choosing the right model saves money and time.

## The Three Tiers

### Claude Haiku — Speed
The fastest and cheapest Claude model.

**Best for:**
- Simple questions with clear answers
- Code formatting, minor edits
- Classification tasks
- High-volume automation where cost matters

**Not for:** complex reasoning, architectural decisions, long documents

**Speed:** ~1-2 seconds | **Cost:** cheapest

### Claude Sonnet — Balance ✅
The workhorse. Best speed/quality ratio.

**Best for:**
- Writing full features and components
- Debugging complex bugs
- API integrations
- Most vibe coding tasks

This is the model we use 90% of the time in this course.

**Speed:** ~3-5 seconds | **Cost:** moderate

### Claude Opus — Power
The most capable Claude. Slower, more expensive.

**Best for:**
- Architecture decisions for large systems
- Deep analysis of complex codebases
- Nuanced reasoning where errors are costly
- Final review of critical code

**Speed:** ~8-15 seconds | **Cost:** highest

## Practical Workflow

\`\`\`
Quick question or small edit  →  Haiku
Feature development, debugging  →  Sonnet (default)
System design, complex problem  →  Opus
\`\`\`

## In Cursor

Cursor lets you switch models per-conversation:
- Default: Claude Sonnet (recommended)
- For quick autocomplete: Haiku in background
- For hard architectural questions: switch to Opus

## The Cost Reality

If you're using the claude.ai free tier or Cursor free tier, you don't pay directly. You're spending from a daily/monthly allowance.

When using the API directly (coming up in module 4):
- Haiku: ~$0.00025 per 1k tokens
- Sonnet: ~$0.003 per 1k tokens
- Opus: ~$0.015 per 1k tokens

For 99% of vibe coding projects, Sonnet stays affordable.

> **Main idea:** Sonnet is your default. Switch to Opus only when you need serious reasoning power. Use Haiku for repetitive automation tasks.`,

  "2-4": `# How to Effectively Communicate with Claude

The difference between a beginner and an expert Claude user isn't knowledge — it's communication. The same task can get a useless response or a production-ready solution depending on how you phrase the request.

## The Fundamental Rule

Claude responds to what you write, not what you mean. Be explicit.

**Vague:**
> Fix the bug

**Explicit:**
> In \`src/components/LoginForm.tsx\`, the form submits even when the email field is empty. The \`handleSubmit\` function at line 23 doesn't validate before calling the API. Add email format validation and show an error message below the field.

The second prompt gets a working fix. The first gets a question back.

## The 5-Part Prompt Structure

**1. Context** — who you are, what the project is
> I'm building a SaaS dashboard with Next.js 14 and Prisma...

**2. Specific task** — exactly what you need
> Create an API endpoint at \`/api/stats\` that returns...

**3. Constraints** — tech stack, style requirements
> Use TypeScript, follow the existing code style in \`src/lib/\`

**4. Examples** — show what good looks like
> Similar to the existing endpoint in \`src/app/api/users/route.ts\`

**5. Output format** — how you want the answer
> Give me the complete file, ready to paste. No explanation needed.

## Techniques That Work

**Roleplay:** "Act as a senior Next.js developer reviewing my code..."
**Step-by-step:** "Think through this step by step before writing code"
**Iteration:** "Good. Now add error handling and TypeScript types"
**Show your error:** Paste the exact error message, not a description of it

## Common Mistakes

❌ "Make it better" — better how? Be specific.
❌ "Add authentication" — which auth? Google? Email? JWT?
❌ One huge request — break complex tasks into steps
❌ Not providing context — always say what tech stack you're using

## The Iteration Mindset

Don't try to get everything in one prompt. Good vibe coding is a dialogue:

1. Request the main feature
2. Test it
3. Request specific improvements
4. Repeat

Claude remembers the whole conversation. Build on previous responses.

> **Main idea:** Prompting is a skill, not luck. Every prompt you write is practice. After 100 prompts you'll write them naturally, without thinking.`,

  "2-5": `# System Prompt — Setting Context and Role

A system prompt is instructions you give Claude before the conversation starts. It sets the context, role, and rules for everything that follows.

## Why System Prompts Matter

Without a system prompt, Claude is a general assistant.
With a system prompt, Claude becomes your specialized expert.

Compare:
- Without: "Here's some code, fix it" → generic response
- With: "You are a senior Next.js TypeScript developer on my SaaS project. The stack is Next.js 14, Prisma, Tailwind, deployed to Vercel. Always write TypeScript with strict types." → targeted, consistent help

## Where to Write System Prompts

**Claude.ai Projects:** Settings → System Prompt
**API calls:** \`system\` parameter
**Cursor:** in your \`.cursorrules\` file
**Claude Code:** in \`CLAUDE.md\`

## Anatomy of a Good System Prompt

\`\`\`markdown
## Role
You are a senior full-stack developer specializing in Next.js 14 and TypeScript.

## Project Context
This is a B2B SaaS platform for project management.
Stack: Next.js 14, TypeScript, Prisma (SQLite), Tailwind CSS, NextAuth v5.

## Code Standards
- Always use TypeScript with strict types
- Functional components only (no class components)
- Tailwind for all styling — no inline styles
- Descriptive variable names
- Error handling on all async operations

## Response Format
- Give complete files, not snippets
- No unnecessary explanations unless asked
- If something is unclear, ask before writing code
\`\`\`

## Practical Example

Here's a system prompt for a Telegram bot project:

\`\`\`
You are a Python backend developer building Telegram bots with aiogram 3.x.

Project: AI assistant bot with OpenAI integration
Stack: Python 3.11, aiogram 3.x, aiosqlite, python-dotenv

Rules:
- Always use async/await
- Include error handling in all handlers
- Use FSM for multi-step dialogs
- Comments in English

Give complete, runnable code only.
\`\`\`

## How to Iterate on System Prompts

Start simple, add rules as you discover Claude making mistakes:
1. First session: basic role + stack
2. After issues: add specific rules to prevent them
3. Over time: you build a tailored expert for your project

> **Main idea:** A well-written system prompt is a one-time investment that pays back on every single interaction.`,

  "2-6": `# Projects in Claude — Organize Your Work

Projects are Claude's answer to the "Claude forgets everything" problem. A Project stores context permanently — the system prompt, uploaded files, and conversation history stay between sessions.

## What is a Claude Project?

A Project is a persistent workspace:
- **System prompt** saved and applied to all conversations
- **Knowledge files** uploaded once, available always
- **Separate conversation history** — doesn't mix with your other chats

Think of it as a persistent context container for a specific project or role.

## Setting Up a Project

1. On claude.ai, click **Projects** in the sidebar
2. Click **New Project**
3. Give it a name (e.g., "My SaaS App" or "Telegram Bot")
4. Click **Set project instructions** — this is your system prompt
5. Click **Add content** — upload reference files

## What to Upload as Project Files

**For a web app project:**
- Current \`package.json\` (Claude knows your exact dependencies)
- \`prisma/schema.prisma\` (Claude knows your data models)
- Core component files
- Your \`.cursorrules\` or \`CLAUDE.md\`

**For a writing project:**
- Style guide
- Previous drafts
- Research notes

**For a bot project:**
- Main bot file structure
- Database schema
- Command list

## Practical Project Setup

Here's a minimal but effective project setup:

**Project name:** My Next.js SaaS

**Instructions:**
\`\`\`
You're helping build a SaaS analytics dashboard.
Stack: Next.js 14, TypeScript, Prisma (SQLite), Tailwind CSS, Recharts.
Auth: NextAuth v5 with Google + credentials.
Follow existing code style. Always provide complete TypeScript files.
\`\`\`

**Upload:** \`schema.prisma\`, \`package.json\`

Now every conversation in this project starts with full context.

## Free vs Pro Projects

**Free:** 1 project, limited file storage
**Pro ($20/month):** unlimited projects, more storage

For learning: one project is enough. For professional work, Pro is worth it.

> **Main idea:** Projects solve the biggest pain point in AI-assisted development — Claude losing context. Set one up for every serious project.`,

  "2-7": `# Uploading Files and Images

Claude isn't just a text tool — it can analyze code files, read PDFs, examine screenshots, and work with data. This unlocks a completely different class of capabilities.

## What Claude Can Process

**Code files:** .ts, .tsx, .js, .py, .sql, .json, .yaml — paste or attach
**Documents:** PDF, Word docs, plain text
**Images:** PNG, JPG, WEBP, GIF — screenshots, mockups, diagrams
**Data:** CSV, Excel (as text or file)

**Limits:** Files up to 30MB, images up to 20MB. Multiple files per conversation.

## How to Upload

In claude.ai: click the paperclip icon next to the message input → select file.

In the API: encode image as base64 or provide a URL.

In Cursor: use \`@\` to reference files from your project.

## The Most Useful Upload Workflows

**Screenshot → Code:**
Take a screenshot of a UI design → ask Claude to build it.
> [attach screenshot] "Recreate this UI using Next.js and Tailwind CSS. Match the layout, colors, and spacing exactly."

**Error screenshot:**
Screenshot your terminal error → Claude reads it better than copy-paste sometimes.

**Analyze existing code:**
Upload a file you didn't write → Claude explains it, suggests improvements, finds bugs.

**Document → structured data:**
Upload a PDF → extract structured information, tables, key points.

**CSV → analysis:**
Upload data → ask for trends, insights, calculations.

## Working with Entire Codebases

You can't upload 50 files at once to claude.ai, but you can:
1. Use Claude Code (module 7) — it reads your entire codebase natively
2. Use Cursor \`@codebase\` — indexes everything locally
3. Paste the most relevant files manually

## Practical Exercise

1. Take a screenshot of any website's UI you like
2. Upload it to claude.ai
3. Ask: "Recreate this layout in HTML and Tailwind CSS"
4. See how accurately Claude matches it

> **Main idea:** Claude with files is a fundamentally different tool. A screenshot becomes code. A PDF becomes structured data. An error becomes a fix.`,

  "2-8": `# Limits and Constraints — Work Smarter

Every AI tool has limits. Understanding them helps you avoid frustration and work within them effectively.

## Claude's Main Limits

**Context window:** 200,000 tokens (Claude 3.5 Sonnet)
In practice: ~150,000 words or roughly 500 pages of text. For 99% of conversations, this is unlimited.

**Rate limits on free tier:**
- claude.ai free: ~10-20 messages per day (varies)
- API: depends on your tier

**File upload:** 30MB per file, ~20 files per conversation

**No internet access:** Claude can't browse the web during a conversation (unless using tools/MCP integrations)

## Working Around the Context Limit

For very large projects where context fills up:
1. **Summarize** — "Summarize our progress so far in a compact format"
2. **Start a new chat** — paste the summary as starting context
3. **Use Claude Code** — it manages context automatically with intelligent compression
4. **Be selective** — don't paste entire files when you only need Claude to see specific functions

## Free Tier Strategies

When you're on a free tier and hit daily limits:
- Use Claude during your most productive hours
- Batch related questions into one detailed message
- Use the AI assistant built into this platform for quick questions
- Switch to Cursor free tier for code-specific work

## What Claude Doesn't Do (and What to Do Instead)

**Can't run code:** Claude writes code, it doesn't execute it. Use your terminal or Cursor's built-in run function.

**Can't access your database:** Describe the schema, paste relevant queries.

**Can't browse the web:** Paste documentation or error messages directly.

**Forgets between chats:** Use Projects or start each chat with context.

## The Right Mental Model

Think of Claude as an extremely knowledgeable colleague who:
- Has read every programming book and documentation
- Remembers everything in the current conversation
- Can't access external systems directly
- Works best when given specific, complete context

> **Main idea:** Every tool has constraints. Knowing Claude's constraints means you never waste time fighting them — you route around them.`,

  // ===== MODULE 3 — Cursor — Vibecoding Maxed Out =====

  "3-1": `# Chat, Composer and Agent Mode — What's the Difference

Cursor has three modes of working with AI. Each is for different scenarios. Using the wrong mode slows you down; using the right one speeds you up dramatically.

## Chat Mode

**What it is:** Conversational AI assistant that can see your codebase.

**How to open:** \`Ctrl+L\` (sidebar chat) or \`Ctrl+Shift+L\` (new chat)

**Best for:**
- Asking questions about code ("What does this function do?")
- Getting explanations ("Why is this causing a type error?")
- Planning ("How should I structure this feature?")
- Quick code snippets

**How it works:** Chat sees the files you've opened or explicitly referenced with @. It can suggest code changes but doesn't apply them automatically — you copy and paste.

## Composer Mode

**What it is:** AI that writes code and applies changes directly to files.

**How to open:** \`Ctrl+I\`

**Best for:**
- Writing new features
- Refactoring existing code
- Making changes across multiple files
- Anything where you want Claude to actually edit your files

**How it works:** You describe what you want. Composer shows diffs (what changed). You review and Accept or Reject each change.

## Agent Mode

**What it is:** Autonomous AI that plans and executes multi-step tasks.

**How to access:** In Composer, click the mode dropdown → Agent

**Best for:**
- "Build a complete user authentication system"
- "Add Stripe payments to this app"
- Multi-step features that touch many files
- Tasks where you're not sure what changes are needed

**How it works:** Agent analyzes your codebase, creates a plan, executes it step by step. It can run terminal commands, install packages, create and modify files.

## Which to Use When

\`\`\`
Question or exploration  →  Chat
Write/edit specific code  →  Composer
Complex multi-step task   →  Agent Mode
\`\`\`

> **Main idea:** Most vibe coding happens in Composer. Use Chat for thinking, Agent for big autonomous tasks.`,

  "3-2": `# Tab Autocomplete — Code 10x Faster

Cursor's Tab autocomplete is different from VS Code's. It doesn't just complete a word — it predicts an entire logical block based on context.

## How It Works

As you type, Cursor shows a gray ghost text suggestion. Press \`Tab\` to accept it.

But unlike normal autocomplete, Cursor predicts:
- The next line of code
- An entire function body
- The logical next step in your code
- Even multi-line completions

## Examples in Practice

**Writing a React component:**
You type: \`function UserCard({ user }):\`
Cursor predicts: the entire component with proper TypeScript types based on your existing components

**Writing API handlers:**
You start a new route handler, Cursor sees your existing routes and completes it in the same pattern.

**Tests:**
You write the first test case, Cursor suggests the next tests based on what makes sense to test.

## Accepting, Rejecting, and Partial Acceptance

- **Tab** — accept the full suggestion
- **Escape** — reject it
- **Ctrl+→** — accept word by word (partial acceptance)

Partial acceptance is powerful: accept the first half of a suggestion, modify the rest.

## Ghost Text Behavior

If Cursor's suggestion is wrong, just keep typing. The suggestion updates in real time as you type more characters.

The more you use Cursor, the better it gets at predicting what you want — it learns from your codebase's patterns.

## Making Cursor Better at Autocomplete

1. **Use it consistently** — don't fight it, work with it
2. **Good variable names** — descriptive names = better predictions
3. **Type annotations** — TypeScript types give Cursor more context
4. **Write comments first** — a comment describing the function helps Cursor complete it

## The 10x Faster Math

A typical line of code: 30-40 characters. With Tab accepting 80% of predictions:
- Normal typing: 30 keystrokes
- With Cursor: 3-5 keystrokes to accept

For a 500-line feature: hours become 30 minutes.

> **Main idea:** Tab autocomplete isn't just a convenience — it's a fundamental speed multiplier. Train yourself to check every gray suggestion before typing.`,

  "3-3": `# Cursor Rules — Teach AI to Work Your Way

Cursor Rules are project-specific instructions for the AI. Instead of explaining your stack and preferences every time, you write them once in a file — and Cursor follows them forever.

## What Cursor Rules Do

Rules tell Cursor:
- Your tech stack
- Coding conventions and style
- What patterns to use and avoid
- How to format responses
- Project-specific context

## The .cursorrules File

Create a file called \`.cursorrules\` in your project root. Everything in it becomes permanent context for all AI interactions in that project.

## Template for a Next.js Project

\`\`\`markdown
# Project Overview
This is a SaaS web application.

# Tech Stack
- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- Prisma with SQLite
- NextAuth v5

# Code Style
- Functional components only
- Always use TypeScript — never use 'any' type
- Tailwind for all styling, no CSS files or inline styles
- async/await over .then() chains
- Named exports (no default exports)
- Error handling on all async operations

# File Structure
- Pages in src/app/
- Components in src/components/
- Utilities in src/lib/
- Types in src/types/

# Response Format
- Always provide complete, production-ready files
- Include all imports
- TypeScript types required on all functions
- No placeholder comments like "// add logic here"
\`\`\`

## Rules for a Python/Telegram Bot Project

\`\`\`markdown
# Project
Telegram bot with AI assistant functionality

# Stack
- Python 3.11
- aiogram 3.x for Telegram
- aiosqlite for database
- OpenAI API for AI features

# Standards
- Always use async/await
- Type hints on all functions
- Error handling in all handlers
- Use FSM for multi-step interactions
- Keep handlers short, extract logic to separate functions

# Output
- Complete, runnable code
- Include all imports
- Comments explaining non-obvious logic
\`\`\`

## How to Build Great Rules

Start minimal. Add rules when you notice Cursor doing something you don't like:
- Cursor using class components? Add "use functional components only"
- Missing TypeScript types? Add "always include TypeScript types"
- Writing CSS files? Add "use Tailwind only"

Over time your rules file becomes a precise specification of exactly how you want code written.

> **Main idea:** Cursor Rules are a one-time investment. 30 minutes writing good rules saves hours of corrections in every future session.`,

  "3-4": `# Context: @files, @docs, @web, @codebase

Cursor's @ commands control what context the AI sees. The right context turns a generic response into a pinpoint solution.

## The @ Commands

### @files — Reference Specific Files
\`\`\`
@src/components/Button.tsx
\`\`\`
Include a specific file in context. Use when you want Claude to see a particular component, function, or configuration.

**When to use:** "Look at @src/lib/auth.ts and tell me why login is failing"

### @codebase — Index the Entire Project
\`\`\`
@codebase
\`\`\`
Cursor indexes your entire project and makes it searchable. Claude can then find relevant code across all files.

**When to use:** "Add a feature consistent with the patterns in @codebase"

First time you use @codebase, Cursor indexes your project (takes a few seconds).

### @docs — Reference Documentation
\`\`\`
@docs
\`\`\`
Add documentation sources. Cursor can reference official docs for libraries you use.

**Setup:** Cursor Settings → Features → Add docs URL

**When to use:** "Using @docs for Next.js, how do I implement server actions?"

### @web — Real-time Web Search
\`\`\`
@web
\`\`\`
Cursor searches the web and includes results in context.

**When to use:** "Check @web for the latest Stripe API changes for subscription billing"

### @git — Git History
\`\`\`
@git
\`\`\`
Include recent git commits and changes in context.

**When to use:** Debugging regressions, understanding what changed.

## Combining Context Sources

You can combine multiple @ references in one message:

\`\`\`
Looking at @src/app/api/payments/route.ts and @docs for Stripe,
update the webhook handler to support the new Stripe API format.
Check @web for the latest stripe-node changelog if needed.
\`\`\`

## Practical Workflow

**New feature:** \`@codebase Add user notifications following the existing patterns\`

**Bug fix:** \`@src/components/Form.tsx The validation isn't triggering — fix it\`

**Learning:** \`@src/lib/auth.ts Explain how this authentication flow works\`

**Update:** \`@docs Update the Prisma queries to use the latest API\`

> **Main idea:** @ context is the difference between Claude guessing and Claude knowing. Always give it the right files to look at.`,

  "3-5": `# First Project: Next.js App in 30 Minutes

Theory becomes real when you build something. This lesson: full Next.js app from scratch in 30 minutes using nothing but Cursor prompts.

## What We're Building

A task manager app with:
- Task list with add/complete/delete
- Local state (no database for now)
- Clean UI with Tailwind
- TypeScript throughout

## Step 1: Create the Project (5 min)

Open terminal in Cursor:

\`\`\`bash
npx create-next-app@latest task-manager --typescript --tailwind --app --src-dir
cd task-manager
code .
\`\`\`

Answer the prompts: Yes to TypeScript, Tailwind, App Router, src dir.

## Step 2: Set Up Cursor Rules (2 min)

Create \`.cursorrules\` in project root:

\`\`\`
Next.js 14 App Router, TypeScript strict, Tailwind CSS.
Functional components only. Complete files, no snippets.
\`\`\`

## Step 3: Build the App with Prompts

**Prompt 1 — Types:**
\`\`\`
Create a types.ts file in src/ with a Task interface:
id (string), title (string), completed (boolean), createdAt (Date)
\`\`\`

**Prompt 2 — Main component:**
\`\`\`
Create src/components/TaskManager.tsx — a full task manager component with:
- Input field to add new tasks
- List of tasks showing title and completion status
- Toggle completion on click
- Delete button per task
- Task count in header
Use useState for state. Tailwind styling, dark theme.
\`\`\`

**Prompt 3 — Replace homepage:**
\`\`\`
Update src/app/page.tsx to render the TaskManager component centered on the page.
Dark background (#0f0f0f).
\`\`\`

## Step 4: Run It

\`\`\`bash
npm run dev
\`\`\`

Open localhost:3000. You have a working app.

## Step 5: Iterate

Now ask Cursor to improve it:
- "Add animations when tasks are added/removed"
- "Add localStorage persistence so tasks survive refresh"
- "Add task priority (high/medium/low) with color coding"

Each prompt adds a feature in under a minute.

## What You Just Did

You built a full working app without:
- Writing TypeScript types manually
- Looking up Tailwind class names
- Remembering React hooks syntax
- Spending 2 hours on setup

This is vibe coding. You described the product. AI built it.

> **Main idea:** 30 minutes from zero to working app. As you add more context (Cursor Rules, @codebase), the speed increases further.`,

  "3-6": `# Debugging with AI

Bugs are inevitable. With AI, the time from "something's broken" to "it's fixed" shrinks from hours to minutes. Here's the workflow.

## The Core Principle

Don't describe the bug to Claude — show it. Paste:
1. The exact error message
2. The code that's causing it
3. What you expected to happen

## Common Error Types and How to Handle Them

### TypeScript Errors
\`\`\`
Type 'string | undefined' is not assignable to type 'string'.
\`\`\`

Prompt:
> I'm getting: "Type 'string | undefined' is not assignable to type 'string'"
> In this code: [paste the function]
> How do I fix this properly without using 'as string' or '!'?

### Runtime Errors
\`\`\`
TypeError: Cannot read properties of undefined (reading 'map')
\`\`\`

Prompt:
> Getting this error at runtime: "Cannot read properties of undefined (reading 'map')"
> This happens when [describe when it happens]
> Here's the component: [paste component]
> The data comes from: [paste API call]

### Build Errors
\`\`\`
Module not found: Can't resolve './components/Button'
\`\`\`

Prompt:
> Build failing with: "Module not found: Can't resolve './components/Button'"
> Project structure: [paste folder tree]
> The import in the file: [paste the import line]

## The Screenshot Method

Sometimes it's faster to screenshot the error:
1. Screenshot the red error in your browser or terminal
2. Attach it to Claude
3. Ask: "What's causing this and how do I fix it?"

Claude reads screenshots well — sometimes better than typed descriptions.

## When You Don't Understand the Error

Prompt:
> I got this error and I have no idea what it means:
> [paste full error]
> Explain what caused it in simple terms, then show the fix.

Claude will:
1. Explain the root cause
2. Show the fix
3. Explain why the fix works

## Preventing Bugs Before They Happen

After building a feature, ask:
> Review this code for potential bugs, edge cases, and TypeScript issues: [paste code]

This catches 60-70% of bugs before you even run the code.

> **Main idea:** Debugging with AI isn't "let AI fix my bugs" — it's a faster diagnostic process. The better you describe the problem, the faster you get the solution.`,

  "3-7": `# Composer for Large Changes

Cursor Chat is for questions. Composer is for doing. When you need to make changes across multiple files or do a substantial refactor, Composer is the right tool.

## Opening Composer

\`Ctrl+I\` — opens Composer in the sidebar

You'll see a text input and below it a list of files Composer has access to.

## How Composer Works

1. You describe the change you want
2. Composer analyzes your codebase
3. Shows you a diff: green = added, red = removed
4. You Accept or Reject each file's changes
5. Applied changes go to your actual files

**You're always in control.** Composer never makes changes without showing you the diff first.

## Adding Files to Composer Context

By default Composer sees your currently open files. To add more:
- Type \`@filename\` in the Composer input
- Or drag files into the Composer window

## Composer for Refactoring

**Example task:**
> Refactor all our API route handlers to use a consistent error handling pattern.
> Create a helper function \`handleApiError\` in src/lib/errors.ts and use it in all routes under src/app/api/.
> @src/app/api @src/lib

Composer will:
1. Create the error helper
2. Update all route files to use it
3. Show you diffs for all files
4. Let you review before applying

## Composer for Adding Features Across Files

**Example:**
> Add a "created by" field to tasks.
> Update: 1) Prisma schema to add createdBy (String), 2) the task creation API to save the current user's ID, 3) the TaskCard component to display the author.
> @prisma/schema.prisma @src/app/api/tasks/route.ts @src/components/TaskCard.tsx

One prompt, three files updated consistently.

## Best Practices

**Be specific about scope:** Name the exact files you want changed.
**Review diffs carefully:** Composer can miss nuances. Always review.
**Start with small changes:** Build confidence before using Composer on critical files.
**Stage after accepting:** \`git add .\` after accepting changes so you can roll back if needed.

> **Main idea:** Composer is how you make structural changes to a codebase fast. What used to take 30 minutes of manual editing happens in 2 minutes with careful review.`,

  "3-8": `# Agent Mode — Full Automation

Agent Mode is Cursor's most powerful feature. Give it a complex task and it plans, executes, fixes errors, and delivers. Minimal guidance required.

## What Agent Mode Does

Unlike Composer (which shows diffs and waits for approval), Agent Mode:
- Reads your codebase
- Makes a plan
- Executes step by step
- Runs terminal commands (\`npm install\`, etc.)
- Fixes its own errors if they occur
- Reports when done

## Opening Agent Mode

\`Ctrl+I\` → Click the mode dropdown at the top → Select "Agent"

Or just type @ Agent in the Composer input.

## What Agent Mode is Best For

**Complete features:**
> Build a complete blog system with: Prisma model for posts (title, content, slug, publishedAt), API routes for CRUD, a post list page, and individual post page. Use the existing auth system.

**Integrations:**
> Integrate Stripe for subscription billing. Add a pricing page with three tiers, checkout flow, and a webhook handler for subscription events.

**Migrations:**
> Migrate all our fetch calls to use React Query. Install the package, wrap the app in QueryClientProvider, and replace the 5 existing fetch hooks with useQuery hooks.

## How to Write Effective Agent Prompts

**1. Clear end goal:**
"When you're done, I should be able to create a user account and log in"

**2. Reference the codebase:**
"Follow the patterns you see in @codebase"

**3. Constraints:**
"Don't modify the existing auth system. Build around it."

**4. Scope limit:**
"Only touch files in src/app/api/ and src/components/"

## Watching Agent Work

You'll see Agent:
- Reading files (\`Reading src/app/api/...\`)
- Running commands (\`npm install stripe\`)
- Writing files
- Checking for errors and self-correcting

This can take 1-5 minutes for complex tasks. Let it run.

## When Things Go Wrong

If Agent goes off track:
1. Press Stop
2. Review what it changed (\`git diff\`)
3. Revert if needed (\`git checkout .\`)
4. Rephrase your prompt with clearer constraints

## The Right Mental Model

Agent Mode is not "fire and forget." It's "delegate with oversight":
- Start it on well-defined tasks
- Check in after major steps
- Review diffs before committing
- Test immediately after completion

> **Main idea:** Agent Mode does in minutes what would take hours manually. The skill is knowing which tasks to delegate and how to specify them clearly.`,

  // ===== MODULE 4 — What is an API =====

  "4-1": `# API — Simple Explanation for Non-Technical People

API is one of those terms that sounds technical but describes something you interact with every day. Understanding APIs unlocks an entire class of vibe coding possibilities.

## API in Real Life

When you use an ATM, you don't access the bank's entire database. You go through a machine that:
1. Accepts your request (withdraw cash)
2. Verifies your identity (PIN)
3. Communicates with the bank
4. Returns a result (cash + receipt)

That machine interface is essentially what an API is.

**API = Application Programming Interface**

A defined way for one piece of software to talk to another.

## Why APIs Matter for Vibe Coding

Without APIs you can only build things that live entirely in the browser.
With APIs you can:
- Add AI to your app (OpenAI/Anthropic APIs)
- Accept payments (Stripe API)
- Send Telegram messages (Telegram Bot API)
- Get weather, stock prices, maps
- Save data to a database service

APIs turn your frontend into a complete product.

## The Client-Server Model

\`\`\`
Your App (client)  →  Request  →  API Server
Your App (client)  ←  Response ←  API Server
\`\`\`

1. Your app sends a **request** (what you want)
2. The API server processes it
3. Returns a **response** (the result or an error)

## A Concrete Example

Getting the current Bitcoin price:

\`\`\`javascript
// Your app sends a request to this URL:
// https://api.coinbase.com/v2/prices/BTC-USD/spot

// The API returns:
{
  "data": {
    "amount": "67234.12",
    "currency": "USD"
  }
}
\`\`\`

Your app reads the number and displays it. Simple.

## Real APIs You'll Use in This Course

| API | What it does |
|-----|-------------|
| Anthropic API | Claude AI in your app |
| OpenAI API | GPT-4 in your app |
| Telegram Bot API | Create/control Telegram bots |
| Stripe API | Accept payments |
| GitHub API | Automate git operations |

> **Main idea:** An API is a contract between two pieces of software. Understanding this contract lets you connect your app to anything.`,

  "4-2": `# REST API: Requests, Responses, Status Codes

REST is the standard architecture for web APIs. Almost every API you'll use follows REST conventions. Learn these once, use them forever.

## The Four HTTP Methods

REST APIs use four main operations (CRUD):

| Method | Meaning | Example |
|--------|---------|---------|
| GET | Read/fetch data | Get all users |
| POST | Create new data | Create a new user |
| PUT/PATCH | Update existing data | Update user email |
| DELETE | Delete data | Delete a user |

## Anatomy of an API Request

\`\`\`
POST https://api.example.com/users
Content-Type: application/json
Authorization: Bearer sk-your-api-key

{
  "name": "Alex",
  "email": "alex@example.com"
}
\`\`\`

Parts:
- **Method:** POST (creating something)
- **URL:** the endpoint address
- **Headers:** metadata (content type, auth)
- **Body:** the data you're sending (JSON)

## HTTP Status Codes

Status codes tell you what happened:

\`\`\`
2xx — Success
200 OK              — request succeeded
201 Created         — new resource created
204 No Content      — success, nothing to return

4xx — Client errors (your mistake)
400 Bad Request     — invalid data sent
401 Unauthorized    — missing or invalid auth
403 Forbidden       — authenticated but no permission
404 Not Found       — resource doesn't exist
429 Too Many Requests — rate limited

5xx — Server errors (their mistake)
500 Internal Server Error — something broke on their end
503 Service Unavailable   — server is down
\`\`\`

## Making API Calls in JavaScript

\`\`\`javascript
// GET request
const response = await fetch('https://api.example.com/users');
const users = await response.json();

// POST request
const response = await fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({ name: 'Alex', email: 'alex@example.com' })
});

const newUser = await response.json();
console.log(response.status); // 201
\`\`\`

## Reading API Documentation

Every API has docs. They tell you:
- Available endpoints (URLs)
- Required and optional parameters
- Authentication method
- Example requests and responses
- Rate limits

You don't need to memorize docs — paste them to Claude and ask it to write the code.

> **Main idea:** REST is the grammar of web APIs. Once you understand GET/POST/status codes, every API you encounter speaks the same language.`,

  "4-3": `# API Keys and Security — .env Files

API keys are passwords for APIs. One leaked key can cost thousands of dollars in unauthorized usage. This lesson is about keeping them safe.

## What is an API Key?

An API key identifies and authenticates your application. It looks like:

\`\`\`
sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxxxxxx  (Anthropic)
sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  (OpenAI)
\`\`\`

Think of it as a credit card number for API usage. Guard it accordingly.

## The .env File

Never hardcode API keys in your source code. Use environment variables instead:

**.env file:**
\`\`\`
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...
DATABASE_URL=postgres://...
NEXTAUTH_SECRET=random-long-string
\`\`\`

**.gitignore file** (verify this exists in your project):
\`\`\`
.env
.env.local
.env.production
\`\`\`

This ensures \`.env\` is never committed to Git.

## Accessing .env Variables in Code

**Next.js (server-side):**
\`\`\`typescript
// In API routes or server components — direct access
const apiKey = process.env.ANTHROPIC_API_KEY;
\`\`\`

**Next.js (client-side — public variables only):**
\`\`\`typescript
// Must start with NEXT_PUBLIC_ to be available in browser
const publicKey = process.env.NEXT_PUBLIC_STRIPE_KEY;
\`\`\`

**Node.js:**
\`\`\`javascript
require('dotenv').config();
const apiKey = process.env.OPENAI_API_KEY;
\`\`\`

## Critical Rules

**Never:**
- Commit .env to Git
- Put API keys in client-side JavaScript
- Share API keys in chat or screenshots
- Use production keys for local development

**Always:**
- Create separate API keys for development and production
- Set usage limits on your API keys (OpenAI, Anthropic dashboards have this)
- Rotate keys immediately if you suspect they were leaked
- Use environment variables for all secrets

## Vercel Deployment (Environment Variables)

When you deploy to Vercel, your .env doesn't upload automatically:

1. Vercel dashboard → Your project → Settings → Environment Variables
2. Add each variable manually
3. Set the environment: Production, Preview, Development

## What Happens if a Key Leaks?

1. Someone finds it (GitHub scan bots find leaked keys in seconds)
2. They run up your API bill
3. You get a $5,000 invoice

Prevention: add usage spending limits on the API provider's dashboard. $50 limit = maximum possible damage.

> **Main idea:** .env + .gitignore is non-negotiable. Set it up before writing a single line of code that uses an API.`,

  "4-4": `# Anthropic API — Connect to Claude Programmatically

The Claude.ai web interface is great for conversation. The Anthropic API lets you integrate Claude into your own apps. This is how you build AI-powered products.

## Getting an API Key

1. Go to console.anthropic.com
2. Sign up / log in
3. Go to API Keys section
4. Click "Create Key"
5. Copy it immediately — it won't be shown again

Add to your .env:
\`\`\`
ANTHROPIC_API_KEY=sk-ant-api03-...
\`\`\`

## Installing the SDK

\`\`\`bash
npm install @anthropic-ai/sdk
\`\`\`

## Basic Usage

\`\`\`typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const message = await client.messages.create({
  model: 'claude-3-5-sonnet-20241022',
  max_tokens: 1024,
  messages: [
    { role: 'user', content: 'Explain what an API is in one sentence.' }
  ],
});

console.log(message.content[0].text);
\`\`\`

## Streaming Responses

For chat interfaces, streaming shows text as it generates:

\`\`\`typescript
const stream = client.messages.stream({
  model: 'claude-3-5-sonnet-20241022',
  max_tokens: 1024,
  messages: [{ role: 'user', content: userMessage }],
});

for await (const event of stream) {
  if (event.type === 'content_block_delta') {
    process.stdout.write(event.delta.text);
  }
}
\`\`\`

## System Prompts via API

\`\`\`typescript
const message = await client.messages.create({
  model: 'claude-3-5-sonnet-20241022',
  max_tokens: 2048,
  system: 'You are a helpful assistant for a coding education platform. Answer concisely.',
  messages: [
    { role: 'user', content: userMessage }
  ],
});
\`\`\`

## Pricing

Billed per token (roughly 4 characters = 1 token):

| Model | Input | Output |
|-------|-------|--------|
| Haiku | $0.25/MTok | $1.25/MTok |
| Sonnet | $3/MTok | $15/MTok |
| Opus | $15/MTok | $75/MTok |

For a typical chat message (500 tokens in, 500 out) with Sonnet: ~$0.009 (less than a cent).

Set a usage limit at console.anthropic.com to prevent surprises.

> **Main idea:** The Anthropic API is what turns "talking to Claude" into "Claude inside your product." Master this and you can build anything AI-powered.`,

  "4-5": `# First API Request — Build an AI Chat

Let's build something real: a working AI chat API endpoint in Next.js that streams Claude responses.

## What We're Building

A \`/api/chat\` endpoint that:
- Accepts a message
- Sends it to Claude
- Streams the response back
- Can be connected to any frontend

## Setup

Assuming you have a Next.js project with:
\`\`\`bash
npm install @anthropic-ai/sdk
\`\`\`

And in \`.env\`:
\`\`\`
ANTHROPIC_API_KEY=sk-ant-...
\`\`\`

## The API Route

\`\`\`typescript
// src/app/api/chat/route.ts
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const anthropicStream = client.messages.stream({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        messages,
      });

      for await (const event of anthropicStream) {
        if (event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta') {
          controller.enqueue(encoder.encode(event.delta.text));
        }
      }

      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
    },
  });
}
\`\`\`

## A Simple Frontend to Test It

\`\`\`tsx
// src/app/page.tsx
'use client';
import { useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setResponse('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages }),
    });

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    let fullResponse = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      fullResponse += decoder.decode(value);
      setResponse(fullResponse);
    }

    setMessages([...newMessages, { role: 'assistant', content: fullResponse }]);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="mb-4 min-h-[200px] border rounded p-4">
        {response || 'Response will appear here...'}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
          placeholder="Ask Claude anything..."
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
\`\`\`

## Testing

\`\`\`bash
npm run dev
\`\`\`

Open localhost:3000, type a message, press Enter. Watch Claude stream back.

You've built your first AI-powered app.

> **Main idea:** This pattern — POST endpoint + streaming response + frontend reader — is the foundation of every AI chat product. You'll use it in various forms throughout the course.`,

  "4-6": `# Popular APIs: OpenAI, Telegram, Stripe

Beyond Anthropic, three APIs appear in almost every vibe coding project. Let's understand each one.

## OpenAI API

Claude's main competitor. Worth knowing because:
- GPT-4o is excellent for many tasks
- Cursor uses OpenAI models by default
- Some tools only support OpenAI

**Key models:**
- \`gpt-4o\` — best GPT-4 model, multimodal (text + images)
- \`gpt-4o-mini\` — fast and cheap, great for production
- \`o1\` — reasoning model for complex problems

**SDK setup:**
\`\`\`bash
npm install openai
\`\`\`

\`\`\`typescript
import OpenAI from 'openai';
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const response = await client.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [{ role: 'user', content: 'Hello!' }],
});
\`\`\`

The API is very similar to Anthropic's — learning one teaches you the other.

## Telegram Bot API

Telegram has 900M+ users. Building a bot gives you an instant interface without building a frontend.

**Getting a bot token:**
1. Message @BotFather on Telegram
2. \`/newbot\`
3. Follow instructions → get your token

**Python SDK (aiogram 3.x — recommended):**
\`\`\`bash
pip install aiogram
\`\`\`

\`\`\`python
from aiogram import Bot, Dispatcher, Router
from aiogram.types import Message
from aiogram.filters import CommandStart

bot = Bot(token="YOUR_BOT_TOKEN")
router = Router()

@router.message(CommandStart())
async def start(message: Message):
    await message.answer("Hello! I'm your bot.")

dp = Dispatcher()
dp.include_router(router)

import asyncio
asyncio.run(dp.start_polling(bot))
\`\`\`

## Stripe API

The standard for payment processing. Used in everything from SaaS to e-commerce.

**Key concepts:**
- **Customer** — represents a user in Stripe
- **Payment Intent** — a payment transaction
- **Subscription** — recurring billing
- **Webhook** — Stripe calls your server when events happen

**Setup:**
\`\`\`bash
npm install stripe
\`\`\`

\`\`\`typescript
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Create a checkout session
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{ price: 'price_xxx', quantity: 1 }],
  mode: 'subscription',
  success_url: 'https://yourapp.com/success',
  cancel_url: 'https://yourapp.com/cancel',
});

// Redirect user to session.url
\`\`\`

## The "Ask Claude for the Code" Strategy

For any API:
1. Read the quickstart (5 minutes)
2. Tell Claude: "Using the [API name] SDK, help me [specific task]. Here's the docs: [paste relevant section]"
3. Claude writes the integration

You don't need to memorize API methods. You need to understand what the API can do.

> **Main idea:** OpenAI for AI, Telegram for distribution, Stripe for money. These three plus Anthropic cover 90% of vibe coding product needs.`,

  // ===== MODULE 5 — GitHub — Version Control =====

  "5-1": `# Why Git and GitHub — Simple Explanation

Git and GitHub sound like programmer tools. They are — but they're also the best backup system and collaboration tool ever invented. For vibe coding, you need them.

## The Problem Git Solves

You've just spent 3 hours building a feature. You make one more change. Everything breaks. You try to undo but can't remember what you changed.

Without Git: you're stuck.
With Git: \`git checkout .\` — everything restored in 2 seconds.

## Git vs GitHub — The Difference

**Git** is software installed on your computer. It tracks changes to your files.

**GitHub** is a website where you store your Git repositories online. It's the backup and collaboration layer.

Analogy: Git is like Word's "Track Changes." GitHub is like Google Docs — it stores everything in the cloud and lets others collaborate.

## Why Vibe Coders Need Git

**1. Safety net:** Every commit is a save point. Break something? Roll back.

**2. Deployment:** Vercel, Railway, and other hosting platforms deploy directly from GitHub. Push to GitHub → app updates automatically.

**3. Collaboration:** Work with others, or use GitHub Copilot (which reads your repo).

**4. Portfolio:** GitHub profile = professional portfolio for developers.

**5. Claude Code integration:** Claude Code uses Git heavily for safe, reversible operations.

## The Mental Model

Think of Git like video game save states:
- Each \`git commit\` is a save point
- \`git log\` shows all your save states
- \`git checkout [commit]\` loads an old save state
- \`git branch\` creates a parallel timeline

## Your First 10 Minutes with Git

\`\`\`bash
# In your project folder
git init                    # start tracking
git add .                   # stage all files
git commit -m "first save"  # create save point
\`\`\`

That's it. You now have version control.

> **Main idea:** Git is a time machine for your code. You'll use it every single day. 30 minutes learning it now prevents endless hours of lost work later.`,

  "5-2": `# Key Concepts: Repository, Commit, Branch

Git has its own vocabulary. These five concepts cover everything you need to know.

## Repository (Repo)

A repository is a project folder that Git is tracking. It contains:
- All your project files
- The entire history of every change ever made
- Configuration (.git folder — don't touch this)

\`\`\`bash
git init        # turn a folder into a repository
git clone URL   # download an existing repository
\`\`\`

## Commit

A commit is a snapshot of your project at a moment in time. Think of it as a save point with a label.

\`\`\`bash
git add .                        # stage changes (decide what to include)
git commit -m "Add login form"   # create the snapshot with a message
\`\`\`

**Good commit messages:**
- ✅ "Add user authentication with NextAuth"
- ✅ "Fix crash when user email is empty"
- ❌ "fix"
- ❌ "changes"
- ❌ "asdfsdf"

The message is for future you trying to find what changed when.

## Branch

A branch is a separate line of development. The default branch is called \`main\`.

\`\`\`bash
git branch feature/login    # create a branch
git checkout feature/login  # switch to it
# or combined:
git checkout -b feature/login

git checkout main           # go back to main
git merge feature/login     # merge the branch into main
\`\`\`

**When to use branches:**
- Building a new feature (so main always has working code)
- Experimenting (can be deleted without affecting main)
- Working with teammates (each person on their own branch)

## Working Tree, Staging, and History

Three "places" in Git:

\`\`\`
Working Tree  →  Staging (Index)  →  History
(your files)     (git add)           (git commit)
\`\`\`

1. **Working Tree:** files on your disk, with unsaved changes
2. **Staging:** changes you've chosen to include in the next commit
3. **History:** all your commits, permanent record

## Viewing History

\`\`\`bash
git log                  # all commits
git log --oneline        # compact view
git diff                 # what changed since last commit
git status               # current state of working tree
\`\`\`

> **Main idea:** Repository = project, Commit = save point, Branch = parallel timeline. These three concepts cover 90% of daily Git usage.`,

  "5-3": `# Create an Account and First Repository

Let's go from zero to a GitHub repository with your project in it.

## Create a GitHub Account

1. Go to github.com
2. Click "Sign up"
3. Enter email, create password
4. Choose a username — this becomes your developer identity
5. Verify email

**Username tips:** Use your real name or a professional handle. This is your developer portfolio URL: \`github.com/yourusername\`

## Create Your First Repository

**On GitHub:**
1. Click the **+** icon → "New repository"
2. Repository name: your project name (e.g., \`task-manager\`)
3. Description: one sentence about the project
4. Visibility: Public (visible to all) or Private
5. DO NOT initialize with README if you have existing code
6. Click "Create repository"

**From your local project:**
\`\`\`bash
# In your project folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/task-manager.git
git push -u origin main
\`\`\`

Your code is now on GitHub.

## The Standard Workflow After Setup

\`\`\`bash
# After making changes
git add .
git commit -m "Describe what you changed"
git push
\`\`\`

Three commands. Do this every time you finish a working chunk of code.

## README.md — Your Project's Homepage

GitHub displays README.md on your repository page. It's the first thing people see.

Simple README template:
\`\`\`markdown
# Task Manager

A simple task management app built with Next.js and Tailwind CSS.

## Features
- Add, complete, and delete tasks
- Persists between sessions
- Clean dark theme

## Tech Stack
- Next.js 14
- TypeScript
- Tailwind CSS

## Getting Started
\`\`\`bash
npm install
npm run dev
\`\`\`

Open http://localhost:3000
\`\`\`

Ask Claude to write your README: "Write a README.md for this project: [describe the project]"

> **Main idea:** GitHub is your professional portfolio. Every project you build should go here. Future employers, clients, and collaborators will look at this page.`,

  "5-4": `# Basic Git Commands with AI Help

You only need about 10 Git commands for daily vibe coding. Here they are, with Claude as backup for anything else.

## The Daily 10

\`\`\`bash
# Status and info
git status              # what's changed
git log --oneline       # commit history compact
git diff                # what exactly changed

# Saving work
git add .               # stage all changes
git add filename        # stage specific file
git commit -m "message" # create commit

# Remote (GitHub)
git push                # upload commits to GitHub
git pull                # download latest from GitHub

# Branches
git checkout -b name    # create and switch to branch
git checkout main       # switch back to main
git merge branch-name   # merge a branch into current

# Undo
git checkout .          # undo all unstaged changes
git reset HEAD~1        # undo last commit (keep changes)
\`\`\`

## Common Scenarios

**"I broke something and want to go back"**
\`\`\`bash
git checkout .          # revert all changes since last commit
\`\`\`

**"I want to go back to a specific commit"**
\`\`\`bash
git log --oneline       # find the commit hash
git checkout abc1234    # go to that commit
git checkout main       # come back to present
\`\`\`

**"Someone pushed to GitHub and I need their changes"**
\`\`\`bash
git pull
\`\`\`

**"I committed to the wrong branch"**
Ask Claude: "I committed to main but should have committed to feature/login. How do I fix this?"

## Using Claude for Git Help

For anything beyond the basic 10 commands, just ask:

> "I have changes in two branches that conflict. How do I resolve the merge conflict?"

> "I accidentally committed my .env file with API keys. How do I remove it from Git history?"

> "How do I revert the last 3 commits while keeping the code changes?"

Claude knows Git deeply. There's no need to memorize edge cases — describe the situation and get the exact commands.

## Connecting Git with Cursor

Cursor has a built-in Git panel (Source Control icon in sidebar):
- See changed files visually
- Stage and unstage with clicks
- Write commit messages
- Push with a button

For visual learners, this is faster than the terminal for basic operations.

> **Main idea:** Know the daily 10 commands cold. For everything else, describe the situation to Claude and get the exact solution.`,

  "5-5": `# GitHub Desktop — For Those Who Hate the Terminal

Not everyone loves typing commands. GitHub Desktop is an official GUI app that handles Git visually. Same power, no terminal required.

## Installing GitHub Desktop

1. Download from desktop.github.com
2. Install and launch
3. Sign in with your GitHub account
4. You're ready

## GitHub Desktop Interface

**Left sidebar:**
- Current repository (click to switch)
- Current branch
- Fetch origin (check for remote changes)

**Main area:**
- Changes tab — files changed, with diff view
- History tab — all commits with full diffs

**Bottom bar:**
- Summary field — your commit message
- Description — optional detail
- "Commit to [branch]" button

## The Visual Workflow

**Staging changes:**
Instead of \`git add .\`, you see a list of changed files with checkboxes. Uncheck files you don't want in this commit.

**Committing:**
Type your summary → click "Commit to main"

**Pushing:**
Click "Push origin" in the top right

**Creating branches:**
Current Branch dropdown → New Branch → type name

## Resolving Merge Conflicts Visually

When there's a conflict, GitHub Desktop shows:
- Which files have conflicts
- Opens them in your default editor
- Guides you through resolving each conflict

Much clearer than dealing with conflict markers in the terminal.

## When Desktop Falls Short

GitHub Desktop is great for:
- Basic commits, pushes, pulls
- Switching branches
- Viewing history and diffs

For complex operations (rebasing, cherry-picking, fixing broken history), you'll need the terminal — but Claude can write those commands for you.

## GitHub Desktop + Cursor Combo

Many vibe coders use:
- **Cursor** for writing code with AI
- **GitHub Desktop** for all Git operations

This works well: stay in your IDE for coding, switch to Desktop for version control.

> **Main idea:** If the terminal feels intimidating, GitHub Desktop removes that barrier completely. The important thing is actually using Git — the tool is secondary.`,

  "5-6": `# Push and Pull — Work with Remote Repository

When you have a GitHub remote, two operations matter most: push (upload your work) and pull (download others' work). Here's how they work and when things go wrong.

## Push — Upload Your Commits

\`\`\`bash
git push
\`\`\`

Uploads all commits that are on your local branch but not yet on GitHub.

**First push after creating a repo:**
\`\`\`bash
git push -u origin main
\`\`\`

The \`-u\` flag sets the upstream — after this, just \`git push\` works.

## Pull — Download Remote Changes

\`\`\`bash
git pull
\`\`\`

Downloads commits from GitHub that you don't have locally.

**When to pull:**
- Before starting work (get latest changes)
- When GitHub says you're behind
- After someone else pushed changes

## The Standard Daily Workflow

\`\`\`bash
# Start of work session
git pull                    # get latest

# During work
[make changes]
git add .
git commit -m "what changed"

# End of work session
git push                    # upload to GitHub
\`\`\`

## When Push Is Rejected

\`\`\`
! [rejected] main -> main (non-fast-forward)
\`\`\`

This means GitHub has commits you don't have locally.

**Fix:**
\`\`\`bash
git pull --rebase           # download and rebase your commits on top
git push
\`\`\`

## Merge Conflicts

When you and a remote have changed the same line differently:

\`\`\`
<<<<<<< HEAD
your version of the code
=======
their version of the code
>>>>>>> origin/main
\`\`\`

To resolve:
1. Edit the file to the correct version (delete the markers)
2. \`git add [file]\`
3. \`git commit -m "Resolve merge conflict"\`

Or let Claude help: paste the conflict section → "Help me resolve this Git merge conflict"

## GitHub's Insights

On your repository page:
- **Commits** — full history with author and message
- **Network graph** — visual branch diagram
- **Actions** — automated workflows (CI/CD)
- **Issues** — bug tracking

> **Main idea:** Push and pull are 90% of your GitHub interaction. Master these two, handle conflicts calmly, and version control becomes natural.`,

  "5-7": `# GitHub Pages — Free Hosting for Your Projects

GitHub Pages is free static hosting built into GitHub. Every repository can have a live website, no server required. Perfect for portfolios, landing pages, and demos.

## What GitHub Pages Supports

- Static HTML/CSS/JavaScript
- React apps (with build step)
- Next.js (static export mode)
- Any framework that produces static files

**Doesn't support:**
- Server-side code (Node.js, Python backends)
- Database connections
- Dynamic API routes

For full-stack apps, use Vercel (covered in module 6).

## Enable GitHub Pages

**Option 1 — Direct from main branch:**
1. Repository → Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: main, Folder: / (root) or /docs
4. Save → your site appears at \`username.github.io/repo-name\`

**Option 2 — GitHub Actions (for Next.js):**
In \`.github/workflows/deploy.yml\`:
\`\`\`yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: actions/deploy-pages@v2
\`\`\`

Ask Claude to generate the full workflow for your specific project.

## Building a Portfolio Page

GitHub Pages + your GitHub profile = complete developer portfolio.

**Portfolio page prompt for Claude:**
> Create a single-page portfolio in HTML/CSS/JavaScript.
> Name: [Your Name]. Skills: [list your skills from this course].
> Projects section with 2-3 cards. Dark theme, modern design.
> No frameworks, pure HTML/CSS/JS (for GitHub Pages).

Commit the HTML file, enable Pages, share the URL.

## Custom Domain

You can use your own domain with GitHub Pages:
1. Buy a domain (Namecheap, Google Domains)
2. Repository → Settings → Pages → Custom domain
3. Add DNS records as instructed

Free hosting + your own domain = professional presence.

> **Main idea:** GitHub Pages is zero-cost hosting that deploys automatically on every git push. For static projects, there's no reason not to have it set up.`,
};
