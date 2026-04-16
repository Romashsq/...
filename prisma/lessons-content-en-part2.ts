// English lesson content — VibeCode Academy — Part 2 (modules 6-10)

export const LESSON_CONTENT_EN_PART2: Record<string, string> = {

  // ===== MODULE 6 — Building Projects from Scratch =====

  "6-1": `# Vibecoding Methodology — From Idea to Code

Vibe coding without a method is just hoping. With a method, you build faster and with fewer dead ends. Here's the workflow that works.

## The 5-Step Methodology

**Step 1: Define the product clearly**
Write one sentence: "This app lets [user] do [action] so that [outcome]."
Example: "This app lets freelancers track their invoices so they know who owes them money."

Vague idea → you'll build the wrong thing. Clear definition → you build what you need.

**Step 2: List the features (MVP only)**
Write the minimum features for the app to work:
- User can add an invoice (client, amount, due date)
- User can mark invoice as paid
- Dashboard shows total owed

Resist adding "nice to have" features. Ship simple. Improve later.

**Step 3: Define the data model**
What data does the app store?
\`\`\`
Invoice: id, clientName, amount, dueDate, isPaid, userId
User: id, email, passwordHash
\`\`\`
This becomes your Prisma schema.

**Step 4: Plan the pages/routes**
\`\`\`
/ → Landing / Login
/dashboard → Invoice list
/invoices/new → Create invoice form
/invoices/[id] → Invoice detail
\`\`\`

**Step 5: Build in order**
1. Set up project (Next.js + Prisma + Auth)
2. Database schema
3. API routes
4. Pages (start ugly, fix design later)
5. Deploy when core features work

## Starting Every Project with Claude

After you have your 5-step plan, give it to Claude:

> I'm building an invoice tracker. Here's the spec:
> - Users: email/password auth
> - Data model: [paste your model]
> - Pages: [paste your routes]
> Stack: Next.js 14, TypeScript, Prisma (SQLite), Tailwind, NextAuth
>
> Start by generating the Prisma schema and the project folder structure.

Claude takes it from there.

## Why Methodology Matters

Without method: you start building, realize you need auth, add auth, realize the database schema is wrong, rebuild it, lose 3 hours.

With method: auth is planned from day one. Schema is designed before a line of code is written.

> **Main idea:** 30 minutes of planning saves 5 hours of rebuilding. The methodology isn't extra work — it's how experienced builders operate.`,

  "6-2": `# Telegram Bot with AI in 1 Hour

Telegram bots are the fastest way to launch an AI product. No frontend to build, no hosting complexity — just a Python script and 900M potential users.

## What We're Building

An AI assistant bot:
- Responds to any text message with Claude
- /start command with welcome message
- Remembers conversation context per user

## Prerequisites

- Python installed (3.10+)
- Telegram account
- Anthropic API key

## Step 1: Create the Bot (2 min)

1. Open Telegram → search @BotFather
2. Send \`/newbot\`
3. Choose a name and username
4. Copy the token: \`123456789:ABCdef...\`

## Step 2: Project Setup (3 min)

\`\`\`bash
mkdir ai-bot && cd ai-bot
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate
pip install aiogram anthropic python-dotenv
\`\`\`

**.env:**
\`\`\`
BOT_TOKEN=123456789:ABCdef...
ANTHROPIC_API_KEY=sk-ant-...
\`\`\`

## Step 3: The Bot Code

\`\`\`python
import asyncio
import os
from dotenv import load_dotenv
from aiogram import Bot, Dispatcher, Router, F
from aiogram.types import Message
from aiogram.filters import CommandStart
from anthropic import AsyncAnthropic

load_dotenv()

bot = Bot(token=os.getenv("BOT_TOKEN"))
dp = Dispatcher()
router = Router()
dp.include_router(router)
client = AsyncAnthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

# Store conversation history per user
histories: dict[int, list] = {}

@router.message(CommandStart())
async def start(message: Message):
    await message.answer(
        "👋 Hi! I'm an AI assistant powered by Claude.\\n"
        "Ask me anything — I'll help."
    )

@router.message(F.text)
async def handle_message(message: Message):
    user_id = message.from_user.id
    if user_id not in histories:
        histories[user_id] = []

    histories[user_id].append({
        "role": "user",
        "content": message.text
    })

    # Keep last 10 messages for context
    history = histories[user_id][-10:]

    thinking = await message.answer("⏳ Thinking...")

    response = await client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=1024,
        system="You are a helpful AI assistant in Telegram. Answer concisely.",
        messages=history,
    )

    reply = response.content[0].text
    histories[user_id].append({"role": "assistant", "content": reply})

    await thinking.delete()
    await message.answer(reply)

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
\`\`\`

## Step 4: Run It

\`\`\`bash
python bot.py
\`\`\`

Open Telegram, message your bot. It responds with Claude.

## Enhancements to Try

- Add /reset command to clear history
- Stream the response word by word
- Add rate limiting (max 20 messages per user per day)
- Store history in SQLite so it persists after restart

> **Main idea:** Telegram + Claude = AI product in 1 hour. No frontend, no deployment complexity. This is the fastest path from idea to working product.`,

  "6-3": `# Landing Page — A Selling Website

A landing page is the simplest product you can build — one HTML file that converts visitors into customers or leads. With vibe coding, you can build one in 20 minutes.

## What Makes a Good Landing Page

**Above the fold (visible without scrolling):**
- Headline: what you offer in 5-8 words
- Subheadline: who it's for and what benefit they get
- CTA button: one clear action (Sign Up, Get Started, Buy)
- Hero image or visual

**Below the fold:**
- Social proof (testimonials, logos, numbers)
- Feature/benefit section
- Pricing (if applicable)
- FAQ
- Second CTA

## The Prompt to Build a Landing Page

\`\`\`
Create a complete landing page for a SaaS product called "InvoiceZap".
Tagline: "Send invoices in 30 seconds"
Target audience: freelancers who waste time on invoicing

Sections:
1. Hero: headline, subheadline, "Start Free Trial" button
2. Features: 3 feature cards (Fast, Professional, Gets You Paid)
3. Social proof: 3 testimonials
4. Pricing: Free ($0) and Pro ($12/month) tiers
5. FAQ: 4 questions
6. Footer with links

Style: dark background (#0a0a0a), accent color #6366f1 (indigo),
Inter font, modern SaaS aesthetic.

Output: single HTML file with embedded CSS. No frameworks.
\`\`\`

## From Static to Next.js

Once you have the HTML, convert to Next.js:

> Convert this HTML landing page to a Next.js component.
> Use Tailwind CSS classes instead of inline styles.
> Create a separate section component for each major section.

## Deploy in 5 Minutes

1. \`git init && git add . && git commit -m "landing page"\`
2. Push to GitHub
3. Go to vercel.com → "Add New Project" → connect your repo
4. Deploy

Your landing page is live with a vercel.app URL.

## Iteration Workflow

Deploy the first version fast, then iterate:
- Add Google Analytics (\`@vercel/analytics\`)
- A/B test headlines (ask Claude for 5 alternatives)
- Add email capture form (connect to Mailchimp API or Resend)
- Optimize for SEO (ask Claude for meta tags and OG images)

> **Main idea:** A landing page is a hypothesis. Ship it fast, get feedback, iterate. Vibe coding makes the iteration cycle so fast that you can test multiple versions in one day.`,

  "6-4": `# Web App on Next.js

A landing page is a brochure. A web app is a product. Here's how to go from idea to full web application with vibe coding.

## What "Full Web App" Means

A complete Next.js web app has:
- **Authentication** — users can sign up and log in
- **Database** — data persists between sessions
- **API routes** — server logic
- **Pages** — UI that updates based on data
- **Deployment** — accessible to anyone

This is what you're building in this lesson.

## The Stack

\`\`\`
Next.js 14        → framework, routing, server components
TypeScript        → type safety
Prisma            → database ORM
SQLite (dev)      → local database
NextAuth v5       → authentication
Tailwind CSS      → styling
Vercel            → deployment
\`\`\`

## Starting Prompt for Claude

\`\`\`
Create a complete Next.js 14 web app for a simple task manager.

Requirements:
- Stack: Next.js 14 App Router, TypeScript, Prisma SQLite, NextAuth v5, Tailwind
- Auth: email/password login + Google OAuth
- Features:
  * Create, complete, delete tasks
  * Tasks belong to users (each user sees only their tasks)
  * Dashboard showing task count and completion rate

Generate:
1. prisma/schema.prisma
2. src/lib/auth.ts (NextAuth config)
3. src/app/api/auth/[...nextauth]/route.ts
4. src/app/api/tasks/route.ts (GET + POST)
5. src/app/api/tasks/[id]/route.ts (PATCH + DELETE)
6. src/app/dashboard/page.tsx
7. src/components/TaskList.tsx
\`\`\`

## Working Through It Step by Step

Claude will generate the files. Work through them:

1. **Run Prisma migrations:**
\`\`\`bash
npx prisma db push
\`\`\`

2. **Test each endpoint** with a REST client or browser

3. **When something breaks**, paste the error to Claude

4. **Iterate on UI** after core functionality works

## Common Issues and Claude Fixes

**"NextAuth session is undefined in server component"**
> My NextAuth session returns undefined in a server component. Here's the code: [paste]

**"Prisma query returns null"**
> My Prisma query returns null but the data exists. Schema: [paste] Query: [paste]

**"TypeScript errors after Prisma migration"**
> After running prisma db push, I'm getting TypeScript errors: [paste errors]

## The 80/20 Rule for Web Apps

80% of any web app is:
- CRUD operations (Create, Read, Update, Delete)
- Authentication
- Basic UI

Get these right and the remaining 20% (search, advanced features, optimization) is easy to add incrementally.

> **Main idea:** A Next.js web app seems complex but follows the same pattern every time: schema → API routes → pages. Once you see the pattern, building new apps becomes fast.`,

  "6-5": `# Deploy to Vercel — Site Online in 5 Minutes

Building locally is step one. Your app needs to live on the internet. Vercel is the fastest, simplest deployment platform for Next.js apps.

## Why Vercel

- **Zero configuration** — detects Next.js automatically
- **Automatic deployments** — push to GitHub → site updates
- **Free tier** — generous limits for hobby projects
- **Edge network** — fast globally
- **Built by the Next.js team** — best Next.js support

## Step 1: Push to GitHub

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
gh repo create my-app --public --push
# or manually create repo on github.com and push
\`\`\`

## Step 2: Deploy to Vercel

1. Go to vercel.com
2. Click "Add New Project"
3. Click "Import" next to your GitHub repo
4. Vercel auto-detects Next.js settings
5. Click "Deploy"

Wait 60-90 seconds. Your app is live at \`your-project.vercel.app\`.

## Step 3: Add Environment Variables

Your app uses secrets (.env). Add them to Vercel:

1. Project dashboard → Settings → Environment Variables
2. Add each variable:
   - \`NEXTAUTH_SECRET\` = run \`openssl rand -base64 32\` to generate
   - \`NEXTAUTH_URL\` = \`https://your-project.vercel.app\`
   - \`ANTHROPIC_API_KEY\` = your key
   - etc.
3. Redeploy (Deployments → Redeploy)

## Automatic Deployments

After initial setup, every \`git push\` triggers a new deployment:

\`\`\`bash
# Make a change
git add .
git commit -m "Fix login bug"
git push
# Vercel deploys automatically, site updates in ~60 seconds
\`\`\`

## Preview Deployments

Every Pull Request gets its own preview URL. Share with stakeholders before merging to main.

## Custom Domain

1. Buy a domain (Namecheap, Cloudflare)
2. Vercel project → Settings → Domains → Add
3. Follow DNS instructions
4. Your app runs at \`yourdomain.com\`

## Vercel Limitations on Free Tier

- Serverless function execution: 10 seconds max
- 100 GB bandwidth/month
- No background jobs/cron on free tier

For production apps with real traffic: Vercel Pro ($20/month) or Hobby is usually enough.

> **Main idea:** Vercel + GitHub = automatic deployment pipeline in 5 minutes. Every push is a deployment. Ship faster, iterate faster.`,

  "6-6": `# Supabase — Database Without Pain

SQLite works great locally. For production with real users, you need a cloud database. Supabase is PostgreSQL with a beautiful interface, auth system, and generous free tier.

## What is Supabase

Supabase is an open-source Firebase alternative. You get:
- **PostgreSQL database** — real relational database
- **Auth system** — magic links, social login, phone
- **Storage** — file uploads (images, documents)
- **Realtime** — live updates via WebSockets
- **Edge Functions** — serverless functions (like Vercel but Supabase-native)
- **Dashboard** — visual database browser and editor

## Setting Up Supabase

1. Go to supabase.com → "Start your project"
2. Create organization
3. Click "New project"
4. Choose region, set database password
5. Wait ~2 minutes for setup

## Connecting to Your Next.js App

**Install:**
\`\`\`bash
npm install @supabase/supabase-js
\`\`\`

**.env:**
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...  # server-side only
\`\`\`

Find these in: Supabase dashboard → Settings → API

**Client setup:**
\`\`\`typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
\`\`\`

## Basic CRUD Operations

\`\`\`typescript
// Insert
const { data, error } = await supabase
  .from('tasks')
  .insert({ title: 'Buy groceries', user_id: userId });

// Select
const { data: tasks } = await supabase
  .from('tasks')
  .select('*')
  .eq('user_id', userId)
  .order('created_at', { ascending: false });

// Update
await supabase
  .from('tasks')
  .update({ completed: true })
  .eq('id', taskId);

// Delete
await supabase
  .from('tasks')
  .delete()
  .eq('id', taskId);
\`\`\`

## Supabase vs Prisma

| | Supabase | Prisma + SQLite |
|--|---------|-----------------|
| Setup | Cloud, instant | Local file |
| Production | Ready | Needs PostgreSQL migration |
| Realtime | Built-in | Manual |
| Auth | Built-in | NextAuth needed |
| Dashboard | Yes | Prisma Studio |

For quick projects: Supabase. For complex apps with existing Prisma schemas: migrate to Prisma + PostgreSQL.

> **Main idea:** Supabase removes the hardest parts of production database management. Free tier covers most hobby projects indefinitely.`,

  "6-7": `# Stripe — Accept Payments

A product that can't accept money isn't a business. Stripe is the standard payment infrastructure for the internet. Here's how to add it to your app.

## Stripe Concepts

**Payment Intent:** a payment transaction
**Customer:** a Stripe representation of your user
**Price:** a product's price (one-time or recurring)
**Checkout Session:** a Stripe-hosted payment page
**Webhook:** Stripe calls your server when events happen (payment succeeded, subscription cancelled, etc.)

## Setup

\`\`\`bash
npm install stripe @stripe/stripe-js
\`\`\`

**.env:**
\`\`\`
STRIPE_SECRET_KEY=sk_test_...    # from Stripe dashboard
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...  # from Stripe webhooks section
\`\`\`

Always use test keys (\`sk_test_\`) during development.

## Checkout Session (Simplest Payment Flow)

**API route:**
\`\`\`typescript
// src/app/api/checkout/route.ts
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const { priceId } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: 'subscription',  // or 'payment' for one-time
    success_url: \`\${process.env.NEXT_PUBLIC_URL}/success\`,
    cancel_url: \`\${process.env.NEXT_PUBLIC_URL}/pricing\`,
  });

  return Response.json({ url: session.url });
}
\`\`\`

**Frontend:**
\`\`\`typescript
const handleSubscribe = async () => {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    body: JSON.stringify({ priceId: 'price_xxx' }),
    headers: { 'Content-Type': 'application/json' }
  });
  const { url } = await res.json();
  window.location.href = url;  // redirect to Stripe checkout
};
\`\`\`

## Webhook Handler

After payment, Stripe calls your webhook:

\`\`\`typescript
// src/app/api/webhooks/stripe/route.ts
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  const event = stripe.webhooks.constructEvent(
    body, sig, process.env.STRIPE_WEBHOOK_SECRET!
  );

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    // Grant access to user
    // e.g., update user.isPro = true in your database
  }

  return Response.json({ received: true });
}
\`\`\`

## Testing

Use Stripe test card: \`4242 4242 4242 4242\`, any expiry, any CVC.

Test the full flow locally with Stripe CLI:
\`\`\`bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
\`\`\`

> **Main idea:** The checkout session pattern covers 80% of payment use cases. Stripe handles PCI compliance, fraud detection, and global payments — you just redirect to their page.`,

  "6-8": `# From Idea to Launch in a Week — Checklist

This checklist condenses everything from the module into a repeatable launch process. Use it for every project.

## Day 1: Definition and Setup

☐ Write the one-sentence product description
☐ List 3-5 MVP features (no more)
☐ Define the data model
☐ Set up Next.js project with full stack:
  \`\`\`bash
  npx create-next-app@latest my-app --typescript --tailwind --app --src-dir
  cd my-app && npm install prisma @prisma/client next-auth
  \`\`\`
☐ Create GitHub repo and push
☐ Write .cursorrules file

## Day 2: Backend

☐ Prisma schema designed and pushed (\`npx prisma db push\`)
☐ NextAuth configured (credentials + Google)
☐ All API routes created and manually tested
☐ .env set up with all required variables

## Day 3: Frontend

☐ Main pages created (list view, detail view, form)
☐ Authentication pages (login, register)
☐ Basic Tailwind styling (working, not polished)
☐ All pages connected to real API routes

## Day 4: Testing and Fixing

☐ Full user flow tested: register → create → use → delete
☐ Error states handled (empty states, 404, network errors)
☐ Mobile layout checked (responsive)
☐ TypeScript compilation passing (\`npx tsc --noEmit\`)

## Day 5: Deploy

☐ Environment variables added to Vercel
☐ Deployed to Vercel, all features work in production
☐ Custom domain configured (optional)
☐ Analytics added (Vercel Analytics, one line)

## Day 6: Polish

☐ Landing page / onboarding for new users
☐ README written
☐ Screenshots/demo recorded

## Day 7: Launch

☐ Share on Twitter/X, LinkedIn
☐ Post in relevant communities
☐ Send to 5 potential users for feedback

## Common Things That Delay Launches

**Feature creep:** You thought of 5 more features. Ship without them. Add later.

**Perfectionism:** The design isn't perfect. Ship anyway. Real users reveal what matters.

**Auth rabbit hole:** Spent 2 days on OAuth. Use NextAuth — it works.

**Database indecision:** SQLite locally, Supabase/PlanetScale for production. Stop debating.

> **Main idea:** A shipped MVP beats a perfect product that never launches. The checklist exists to keep you moving forward, not stuck in refinement.`,

  // ===== MODULE 7 — Claude Code — Development Agent =====

  "7-1": `# What is Claude Code and Why You Need It

Claude Code is not Claude in a browser. It's an AI agent that lives in your terminal and has full access to your computer, your files, and your development tools.

## The Fundamental Difference

**Claude.ai (web):**
- You paste code
- Claude suggests changes
- You manually copy-paste the changes
- You run commands yourself

**Claude Code (terminal):**
- Claude reads your entire codebase directly
- Claude writes files directly
- Claude runs commands in your terminal
- You review and approve

Claude Code removes the copy-paste layer. The agent does the work end-to-end.

## What Claude Code Can Do

- Read any file in your project
- Write and edit files directly
- Run terminal commands (\`npm install\`, \`git commit\`, etc.)
- Run your tests and fix failing ones
- Search your codebase for patterns
- Use tools via MCP (browser, databases, APIs)
- Run multiple subagents in parallel
- Manage its own memory between sessions

## Real Example

Without Claude Code:
> You: "How should I structure the auth middleware?"
> Claude: "Here's how you could do it: [code]"
> You: copy code, paste into file, fix imports, run it, paste errors back

With Claude Code:
> You: "Add JWT middleware to all /api routes except /api/auth"
> Claude Code: reads your routes, writes the middleware, updates route files, runs the build to check for errors, reports "Done, all routes protected"

## Getting Started: Subscription

Claude Code requires an Anthropic subscription:
- **Pro ($20/month):** 5x usage limits, good for learning
- **Max ($100/month):** unlimited usage for serious work

At console.anthropic.com or claude.ai/settings.

## The Right Mental Model

Think of Claude Code as a junior developer who:
- Has read every programming book ever written
- Learns your codebase in seconds
- Never gets tired
- Needs clear task descriptions to work well
- Should be supervised (review changes before committing)

> **Main idea:** Claude Code is a paradigm shift from "AI helps me code" to "AI codes while I direct." The learning curve pays back in 10x productivity.`,

  "7-2": `# Installation and First Run of Claude Code

Getting Claude Code running takes about 5 minutes. After that you're in a new world.

## Prerequisites

- Node.js 18+ installed (\`node --version\` to check)
- Terminal (any: Windows Terminal, iTerm2, VS Code terminal)
- Anthropic account with Pro or Max subscription

## Installation

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

Verify it installed:
\`\`\`bash
claude --version
\`\`\`

## First Launch

Navigate to a project folder:
\`\`\`bash
cd my-project
claude
\`\`\`

On first launch:
1. Claude asks you to authorize via browser
2. Log in with your Anthropic account
3. Redirected back to terminal — you're authenticated

## The Interface

Claude Code shows:
\`\`\`
╭─────────────────────────────╮
│ Claude Code                 │
│ Type / for commands         │
╰─────────────────────────────╯

> _
\`\`\`

Type your task and press Enter. Claude starts working.

## Your First Task

In a project with some files, try:
\`\`\`
> Analyze this codebase and give me a brief overview of its structure
\`\`\`

Claude Code will:
1. Read your files
2. Understand the project structure
3. Give you a summary

Then try:
\`\`\`
> Fix any TypeScript errors you find
\`\`\`

Watch Claude find and fix them autonomously.

## Stopping Claude

- **Escape** — interrupt current operation
- **Ctrl+C** — exit Claude Code

## The Two Modes

**Terminal mode:** \`claude\` in your project folder. Full autonomy, runs commands.

**VS Code extension:** Available in the VS Code marketplace. More visual, same capabilities.

Most power users prefer the terminal — it's where Claude Code was designed to run.

> **Main idea:** The installation takes 5 minutes. The learning to use it well takes a few days. Start with simple tasks and build up to autonomous, complex work.`,

  "7-3": `# Main Commands and Slash Commands

Claude Code has a set of built-in commands that control its behavior. These are worth knowing.

## Slash Commands

Type \`/\` to see all available commands:

### /help
Shows all available commands with descriptions.

### /clear
Clears the conversation history. Use when starting a new unrelated task — smaller context = faster, cheaper.

### /compact
Compresses long conversation history into a summary. Keeps context but uses fewer tokens.

### /init
Analyzes your project and creates a \`CLAUDE.md\` file — a system prompt that persists between sessions.

\`\`\`bash
/init
\`\`\`

Claude reads your codebase, understands the stack and structure, writes CLAUDE.md. Now every future session starts with this context.

### /memory
Opens your memory files for editing. Persistent facts Claude remembers between sessions.

### /plan
Switches to Plan Mode. Claude creates a detailed plan before doing anything. Approve the plan, then Claude executes.

\`\`\`bash
/plan Add user notifications system
\`\`\`

Claude outlines steps → you approve → it executes.

### /bug
Report a bug in Claude Code itself (sends feedback to Anthropic).

## Project Commands

Beyond slash commands, you can reference things with \`@\`:

\`\`\`
@src/components/Button.tsx — Fix the TypeScript error in this file
\`\`\`

Claude reads exactly that file and focuses on it.

## Terminal Commands Inside Claude

You can ask Claude to run terminal commands:

\`\`\`
Run the tests and fix any failures
\`\`\`

Claude runs \`npm test\`, reads the output, fixes the code, runs tests again. Repeats until tests pass.

## Keyboard Shortcuts

- **Up arrow** — previous command (like terminal history)
- **Ctrl+L** — clear screen
- **Escape** — interrupt current operation

## Custom Slash Commands (Skills)

You can create your own slash commands in \`.claude/commands/\`:

\`\`\`markdown
<!-- .claude/commands/deploy.md -->
Run the full test suite. If tests pass, build the project and push to GitHub.
If anything fails, report what failed and stop.
\`\`\`

Now \`/deploy\` runs your full deploy workflow.

> **Main idea:** /init and /plan are the two most valuable commands. /init sets up persistent context. /plan ensures complex tasks are executed thoughtfully.`,

  "7-4": `# How Claude Code Reads and Understands Your Project

Claude Code doesn't just see files you manually share — it actively explores your codebase. Understanding how it does this helps you work with it more effectively.

## The Indexing Process

When you start Claude Code in a project, it:
1. Reads the directory structure
2. Identifies the tech stack (package.json, requirements.txt, etc.)
3. Reads CLAUDE.md if it exists
4. Starts building an understanding of the codebase

It doesn't read every file upfront — it reads files as needed during a task.

## How Claude Explores Your Code

When you give a task, Claude:

1. **Identifies relevant files** — searches by filename, imports, content
2. **Reads them** — understands the code structure, types, dependencies
3. **Makes changes** — edits files or creates new ones
4. **Verifies** — may run the build or tests to confirm changes work

## The Role of CLAUDE.md

\`CLAUDE.md\` is like a briefing document that Claude reads at the start of every session:

\`\`\`markdown
# Project: Task Manager SaaS

## Stack
- Next.js 14 App Router, TypeScript strict
- Prisma + SQLite (dev), PostgreSQL (prod)
- NextAuth v5, Tailwind CSS

## Key Architecture Decisions
- All API routes in src/app/api/
- Shared types in src/types/
- Database client singleton in src/lib/prisma.ts
- Auth helper in src/lib/auth.ts

## Code Standards
- Always TypeScript, no 'any'
- Functional components only
- Prisma for all DB operations
- Error handling on all async operations

## Current State
- Auth: working
- Tasks CRUD: working
- Notifications: TODO
\`\`\`

With this, Claude starts every session knowing your project inside-out.

## Large Codebases

For projects with hundreds of files, Claude is selective:
- Prioritizes files related to the current task
- Uses the project structure to navigate intelligently
- Won't read unrelated files (stays focused)

If Claude misses something, just tell it:
\`\`\`
Also check src/lib/permissions.ts — the logic there affects this feature
\`\`\`

## Context Window Management

Claude Code automatically manages context:
- Compresses old conversation when context gets large
- Keeps the most relevant recent context
- Uses /compact when you switch to a new task

> **Main idea:** Claude Code understands codebases like a senior developer joining a project — it explores, reads, understands, then acts. CLAUDE.md makes it an expert from day one.`,

  "7-5": `# Hooks — Automate Routine Tasks

Claude Code hooks are shell commands that run automatically at specific events. They're how you automate the routine parts of development.

## What Are Hooks?

Hooks are triggers:
- **Before a tool runs** — validate, log, block
- **After a tool runs** — post-process, notify, cleanup
- **On session start/end** — setup, teardown

## Hook Configuration

Hooks are configured in \`.claude/settings.json\` (project-level) or \`~/.claude/settings.json\` (global):

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Writing file: $CLAUDE_TOOL_INPUT_FILE_PATH'"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write $CLAUDE_TOOL_INPUT_FILE_PATH"
          }
        ]
      }
    ]
  }
}
\`\`\`

## Practical Hook Examples

**Auto-format after every file write:**
\`\`\`json
{
  "PostToolUse": [{
    "matcher": "Write",
    "hooks": [{ "type": "command", "command": "npx prettier --write $CLAUDE_TOOL_INPUT_FILE_PATH" }]
  }]
}
\`\`\`

**Run tests after editing test files:**
\`\`\`json
{
  "PostToolUse": [{
    "matcher": "Write",
    "hooks": [{
      "type": "command",
      "command": "if [[ '$CLAUDE_TOOL_INPUT_FILE_PATH' == *'.test.'* ]]; then npm test -- --testPathPattern=$CLAUDE_TOOL_INPUT_FILE_PATH; fi"
    }]
  }]
}
\`\`\`

**Block editing production config:**
\`\`\`json
{
  "PreToolUse": [{
    "matcher": "Edit",
    "hooks": [{
      "type": "command",
      "command": "if [[ '$CLAUDE_TOOL_INPUT_FILE_PATH' == *'production'* ]]; then echo 'Blocked: cannot edit production config' && exit 1; fi"
    }]
  }]
}
\`\`\`

## Notification Hooks

When Claude finishes a long task:
\`\`\`json
{
  "Notification": [{
    "hooks": [{
      "type": "command",
      "command": "osascript -e 'display notification \"Claude Code task complete\" with title \"Claude Code\"'"
    }]
  }]
}
\`\`\`

## Getting Started

Start simple: just add auto-formatting. It's the most immediately useful hook and has zero risk.

Ask Claude Code:
\`\`\`
Set up a PostToolUse hook that formats TypeScript files with prettier after every write
\`\`\`

Claude Code writes the hook configuration for you.

> **Main idea:** Hooks are like an automation layer around your AI agent. Once you taste auto-formatting on every save, you'll never go back.`,

  "7-6": `# Skills — Extend Agent Capabilities

Skills are reusable slash commands you define with natural language. Write the instructions once, invoke them forever with a short command.

## What Skills Do

Without skills:
> Every session: "When you're done, run the tests, if they pass do git add . && commit with a descriptive message and push to GitHub"

With a skill (/commit):
> Type /commit. Done.

Skills encode your workflows into reusable commands.

## Creating a Skill

Create a Markdown file in \`.claude/commands/\`:

\`\`\`markdown
<!-- .claude/commands/commit.md -->
# Commit and Push

1. Run the test suite: npm test
2. If any tests fail, stop and report which tests failed
3. If all tests pass:
   - Run: git status to see what changed
   - Run: git diff --cached to review staged changes
   - Create a descriptive commit message based on the changes
   - Run: git add . && git commit -m "[your message]"
   - Run: git push
4. Report what was committed
\`\`\`

Now type \`/commit\` and Claude executes this workflow.

## Essential Skills to Create

**\`.claude/commands/deploy.md\`:**
\`\`\`markdown
Full deployment workflow:
1. Run TypeScript check: npx tsc --noEmit
2. Run tests: npm test
3. If either fails, stop and report
4. If all pass: git add . && git commit -m "Deploy" && git push
5. Wait 60 seconds for Vercel deployment
6. Report deployment complete
\`\`\`

**\`.claude/commands/review.md\`:**
\`\`\`markdown
Code review the changes since the last commit:
1. Run: git diff HEAD
2. Review for:
   - TypeScript type safety issues
   - Missing error handling
   - Security issues (exposed secrets, SQL injection, XSS)
   - Performance problems
   - Code style inconsistencies
3. List issues found, ordered by severity
\`\`\`

**\`.claude/commands/fix-types.md\`:**
\`\`\`markdown
Fix all TypeScript errors in the project:
1. Run: npx tsc --noEmit
2. For each error, fix it properly (no 'as any' or '!')
3. Re-run tsc to verify all errors are resolved
4. Report what was changed
\`\`\`

## Skills with Parameters

Skills can accept arguments:

\`\`\`markdown
<!-- .claude/commands/test-feature.md -->
Run tests for the specified feature: $ARGUMENTS

1. Run: npm test -- --testPathPattern="$ARGUMENTS"
2. Show the test results
3. If any fail, analyze why and suggest fixes
\`\`\`

Usage: \`/test-feature auth\` runs auth-related tests.

> **Main idea:** Skills are your development workflow encoded as commands. The best developers have a library of skills that make their most common tasks one command away.`,

  "7-7": `# Memory — Persistent Agent Memory

Claude Code can remember things between sessions. This memory system means you don't have to re-explain your project every time you start a new session.

## Types of Memory in Claude Code

### 1. CLAUDE.md (Project Memory)
The main memory file, read at the start of every session:
\`\`\`
project root/
  CLAUDE.md          ← read every session
  .claude/
    CLAUDE.md        ← also read (project-level overrides)
\`\`\`

### 2. User Memory (~/.claude/CLAUDE.md)
Global preferences that apply to all projects:
\`\`\`markdown
# My Preferences (applies to all projects)

## Communication Style
- Be concise. No lengthy explanations unless asked.
- When writing code, include no comments unless logic is non-obvious
- Use emojis sparingly

## Default Stack
- Next.js 14 + TypeScript + Tailwind for web apps
- Python + aiogram for Telegram bots
- Prefer async/await over callbacks

## Security
- Always use parameterized queries
- Never log API keys or tokens
- Always add .env to .gitignore
\`\`\`

### 3. In-Session Context
Everything discussed in the current session. Claude remembers it until you use /clear.

## Using /memory

\`\`\`bash
/memory
\`\`\`

Opens your memory file in an editor. You can add, edit, or remove entries.

Or tell Claude directly:
\`\`\`
Remember: in this project, we use Zod for all input validation at API boundaries
\`\`\`

Claude adds this to the memory file automatically.

## What to Put in Memory

**Project-level (CLAUDE.md):**
- Tech stack and versions
- Architecture decisions
- Current development priorities
- What's working, what's in progress

**Global memory:**
- Preferred code style
- Communication preferences
- Common patterns you always use
- Security rules you want enforced

## What NOT to Put in Memory

- Temporary task details (use the current session for this)
- Information that changes frequently (Claude might act on stale info)
- Code snippets (link to the file instead)

## Example: Starting a Productive Session

With a good CLAUDE.md:
\`\`\`
You: Add email notifications when a task is due tomorrow
Claude: [reads CLAUDE.md, knows the stack, architecture, current state]
        [starts working immediately, no setup questions]
\`\`\`

Without CLAUDE.md:
\`\`\`
You: Add email notifications when a task is due tomorrow
Claude: What's the tech stack? What email service are you using?
        Where are tasks stored? What's the user model?
\`\`\`

The difference is 5-10 minutes of setup on every session.

> **Main idea:** Memory is what turns Claude Code from a stateless assistant into a persistent team member who knows your project. Set it up once, benefit forever.`,

  // ===== MODULE 8 — Subagents and Multi-agent Systems =====

  "8-1": `# What is an AI Agent — Difference from a Chatbot

"Agent" is one of the most overused words in AI. Let's be precise about what it means and why it matters for vibe coding.

## Chatbot vs Agent

**A chatbot:**
- Responds to messages
- Has no persistent goals
- Can't take actions in the world
- Each response is independent
- You do the work, it advises

**An AI agent:**
- Has a goal to accomplish
- Plans steps to achieve the goal
- Takes actions autonomously
- Uses tools (browser, terminal, files)
- Iterates until the goal is achieved
- You set the goal, it does the work

## The Three Things That Make an Agent

**1. LLM Core** — the reasoning brain (Claude, GPT-4)

**2. Tools** — what the agent can do:
- Read/write files
- Run commands
- Browse the web
- Query databases
- Call APIs

**3. Feedback Loop** — the agent observes results and adjusts:
\`\`\`
Goal → Plan → Action → Observe Result → Adjust → Action → ...
\`\`\`

## Claude Code as an Agent

Claude Code is an agent:
- **Goal:** "Build a user authentication system"
- **Plan:** creates schema, API routes, components
- **Tools:** file editor, terminal, test runner
- **Feedback:** runs build, reads errors, fixes them
- **Done when:** all tests pass, no TypeScript errors

Compare this to ChatGPT in the browser: it suggests code, you do everything else.

## The Spectrum of Agency

\`\`\`
Chatbot ←————————————————→ Full Agent
(pure Q&A)  (suggestions)  (supervised  (autonomous
                            execution)    AI worker)
\`\`\`

Claude Code sits at "supervised execution" — it acts, but you approve major decisions.

## Why Agents Matter for Builders

With a chatbot: you multiply your speed by 2-3x
With an agent: you multiply your output by 5-10x

The difference isn't incremental — it's architectural. You shift from "programmer who uses AI" to "director of an AI worker."

> **Main idea:** An agent is not a smarter chatbot — it's a different kind of collaboration. You set goals, the agent pursues them. Your job becomes directing and reviewing, not coding.`,

  "8-2": `# Subagents — Delegate Tasks to Specialists

A subagent is a separate AI instance launched to handle a specific subtask. Multi-agent systems combine multiple subagents for parallelism and specialization.

## Why Subagents?

**Problem 1: Context limits**
A 200k context window sounds huge. But a large codebase + long conversation fills it. Solution: split work across multiple agents, each with fresh context.

**Problem 2: Specialization**
A single general agent switching between "write backend code" and "write tests" is less effective than two specialized agents.

**Problem 3: Parallelism**
One agent works sequentially. Five agents working in parallel finish 5x faster (approximately).

## How Claude Code Uses Subagents

The Agent tool in Claude Code launches subagents:

\`\`\`
Main agent: I need to add a notification system.
→ Launch subagent 1: "Design the database schema for notifications"
→ Launch subagent 2: "Write API endpoints for notifications"
→ Launch subagent 3: "Write tests for the notification system"
(all three run in parallel)
← Wait for all to complete
← Combine results
\`\`\`

## Launching a Subagent (in Claude Code)

\`\`\`
Build a complete notification system in parallel:
- Launch subagent for: designing Prisma schema for notifications
- Launch subagent for: API routes (GET list, POST create, PATCH mark-read)
- Launch subagent for: React components (NotificationBell, NotificationList)
All should follow patterns in @codebase
\`\`\`

Claude Code handles the orchestration.

## Designing for Subagents

For subagents to work well:
- Each task should be **independent** (minimal dependencies on other agents' work)
- Each task should be **completable** without knowing what others are doing
- Give each subagent enough context to work autonomously

**Good split:** schema / API / frontend (independent)
**Bad split:** "first half of the code" / "second half" (sequential dependency)

## Worktrees for Parallel Agents

For true parallel file editing, use Git worktrees (covered in module 16):
\`\`\`bash
git worktree add ../feature-notifications feature/notifications
git worktree add ../feature-tests feature/tests
\`\`\`

Each agent works in its own directory, no file conflicts.

> **Main idea:** Subagents multiply your velocity. What takes one agent an hour can take five agents 15 minutes. Learn to decompose tasks for parallel execution.`,

  "8-3": `# Create an Agent Team in Claude Code

An agent team is a set of specialized agents with defined roles, each with its own instructions and focus area. Here's how to build one.

## The Team Pattern

Most effective teams have:
- **Orchestrator** — receives the task, coordinates
- **Specialists** — each focused on one domain
- **Reviewer** — checks quality before completion

## Creating Agents in Claude Code

Agents live in \`.claude/agents/\`:

\`\`\`markdown
<!-- .claude/agents/backend-dev.md -->
---
name: backend-dev
description: Expert in API routes, database, and server logic
tools: Read, Write, Edit, Bash
---

You are a senior backend developer specializing in Next.js API routes and Prisma.

Your responsibilities:
- Design and implement API endpoints
- Write Prisma queries and schema migrations
- Handle server-side authentication and authorization
- Write integration tests for API routes

Standards:
- Always use TypeScript with strict types
- Handle all error cases with proper HTTP status codes
- Never expose sensitive data in API responses
- Use Prisma transactions for multi-step operations
\`\`\`

\`\`\`markdown
<!-- .claude/agents/frontend-dev.md -->
---
name: frontend-dev
description: Expert in React components, Tailwind, and UI
tools: Read, Write, Edit
---

You are a senior frontend developer specializing in Next.js and React.

Your responsibilities:
- Build React components and pages
- Implement responsive UI with Tailwind CSS
- Handle client-side state management
- Ensure accessibility and good UX

Standards:
- Functional components only
- Tailwind only, no inline styles
- Loading and error states for all async operations
- Mobile-first responsive design
\`\`\`

## Using the Team

\`\`\`
Using the backend-dev agent, add a notifications API endpoint.
Then using the frontend-dev agent, build the notification bell component.
\`\`\`

Or let the orchestrator decide:
\`\`\`
Add a complete notification system. Use the appropriate agents for
backend API and frontend components.
\`\`\`

## A Minimal But Effective Team

For most projects, three agents are enough:

1. **backend-dev** — API routes, database, server logic
2. **frontend-dev** — components, pages, UI
3. **reviewer** — checks TypeScript, security, code quality

This team covers 90% of web application development.

> **Main idea:** Agent teams let you scale work without scaling complexity. Define the team once, then direct them as a group on every project.`,

  "8-4": `# Parallel Execution — Multiple Agents Simultaneously

Sequential agents are fast. Parallel agents are transformative. Here's how to run multiple agents simultaneously.

## Sequential vs Parallel

**Sequential (default):**
\`\`\`
Task A → done → Task B → done → Task C → done
Total time: A + B + C
\`\`\`

**Parallel:**
\`\`\`
Task A ─────────→ done
Task B ──────→ done      (all start at the same time)
Task C ───────────→ done
Total time: max(A, B, C)
\`\`\`

For three 10-minute tasks: sequential = 30 min, parallel = 10 min.

## How to Request Parallel Execution

\`\`\`
Execute these three tasks in parallel using separate subagents:

1. Add user profile page at /profile showing name, email, join date
2. Add settings page at /settings for notification preferences
3. Add activity log showing last 20 user actions

Each task is independent. Use existing auth and database patterns from @codebase.
\`\`\`

Claude Code launches three subagents simultaneously, each working on one task.

## Git Worktrees for True Parallelism

If multiple agents edit the same files, they'll conflict. Git worktrees give each agent its own directory:

\`\`\`bash
# Create worktrees for parallel work
git worktree add ../work-profile feature/profile
git worktree add ../work-settings feature/settings
git worktree add ../work-activity feature/activity
\`\`\`

Each Claude Code session works in its own worktree:
\`\`\`bash
# Terminal 1
cd ../work-profile && claude

# Terminal 2
cd ../work-settings && claude

# Terminal 3
cd ../work-activity && claude
\`\`\`

## Merging Parallel Work

After all agents finish:
\`\`\`bash
git checkout main
git merge feature/profile
git merge feature/settings
git merge feature/activity
\`\`\`

Resolve any conflicts (usually minimal if tasks were well-separated).

## Designing Good Parallel Tasks

**Good candidates for parallelism:**
- Different pages/routes
- Different features with minimal shared code
- Writing tests while main agent writes code
- Documentation while agent builds features

**Bad candidates:**
- Tasks that modify the same files
- Tasks with dependencies (B needs A's output)
- Incremental work on the same function

> **Main idea:** Parallel agents change the economics of building software. A 2-hour project becomes a 30-minute project. Design your tasks for parallelism and you compound the speed advantage.`,

  "8-5": `# MCP (Model Context Protocol) — Extend Agent Tools

The default Claude Code toolset covers files and terminal. MCP (Model Context Protocol) extends it with anything: browser control, database access, GitHub, Slack, calendar, and more.

## What MCP Is

MCP is an open standard for connecting tools to AI agents. It's like USB for AI — any MCP-compatible tool connects to any MCP-compatible agent.

Published by Anthropic, adopted by Cursor, Windsurf, and others.

## Built-in vs MCP Tools

**Claude Code built-in:**
- Read, Write, Edit files
- Bash (terminal commands)
- Web search (basic)

**Via MCP:**
- Browser automation (Playwright)
- GitHub API
- Database queries
- Slack messages
- Google Calendar
- Notion, Jira, Linear
- Custom tools you build

## Installing MCP Servers

\`\`\`bash
# Browser control
claude mcp add playwright npx @playwright/mcp@latest

# GitHub
claude mcp add github npx @anthropic-ai/mcp-server-github

# Filesystem with expanded access
claude mcp add filesystem npx @anthropic-ai/mcp-server-filesystem
\`\`\`

## Browser Automation with MCP

After installing Playwright MCP, Claude can:
\`\`\`
Navigate to our staging site at localhost:3000, log in as test@example.com,
create a new task called "Test Task", then take a screenshot to confirm it appears
in the list.
\`\`\`

Claude controls the browser — clicks, types, waits, screenshots — without you touching anything.

## GitHub MCP

\`\`\`
Check our GitHub repo for any open issues labeled 'bug',
summarize the top 3 most voted ones, and create a priority list.
\`\`\`

Claude reads your GitHub issues directly.

## Building Custom MCP Servers

If you have a specific tool need, build an MCP server:
\`\`\`typescript
// Your custom MCP server exposes tools to Claude
// Claude can then call your custom functions
\`\`\`

Ask Claude to help:
> Help me build an MCP server that connects to my PostgreSQL database and exposes tools for querying users and orders

> **Main idea:** MCP transforms Claude Code from a coding tool into a general automation agent. With browser control, database access, and GitHub integration, the scope of what you can automate becomes vast.`,

  "8-6": `# Practice: Multi-agent System for a Real Project

Let's put it all together: a complete multi-agent system that builds a real feature. This is the culmination of modules 7-8.

## The Task

Build a complete "User Dashboard" feature with:
- User stats (lessons completed, XP earned, streak)
- Recent activity feed
- Notifications bell with unread count

## Setting Up the Agent Team

First, create the agents:

\`\`\`markdown
<!-- .claude/agents/architect.md -->
---
name: architect
description: Plans implementation before coding
---
You design the implementation plan. Analyze @codebase, propose the schema
changes, API routes, and component structure. Output a structured plan only —
no code.
\`\`\`

\`\`\`markdown
<!-- .claude/agents/backend.md -->
---
name: backend
description: API routes and database
---
Implement backend changes: Prisma schema, API routes, server logic.
Follow existing patterns in @codebase. TypeScript, error handling required.
\`\`\`

\`\`\`markdown
<!-- .claude/agents/frontend.md -->
---
name: frontend
description: React components and pages
---
Build UI components and pages. Tailwind CSS, functional components,
loading/error states required. Follow existing component patterns.
\`\`\`

## The Workflow

**Phase 1: Architecture (architect agent)**
\`\`\`
Using the architect agent: design the implementation plan for a User Dashboard
with stats, activity feed, and notifications. Analyze @codebase for existing
patterns. Output schema changes, API routes needed, and component list.
\`\`\`

**Phase 2: Backend + Frontend in parallel**
\`\`\`
Based on the architect's plan:
- Backend agent: implement Prisma schema changes and all API routes
- Frontend agent: build the dashboard components using mock data first
Run both in parallel.
\`\`\`

**Phase 3: Integration**
\`\`\`
Connect the frontend components to the real API endpoints.
Fix any TypeScript errors. Test the full flow.
\`\`\`

## Measuring Results

Track how long this would take:
- Without agents: estimate 4-6 hours
- With sequential agent: ~90 minutes
- With parallel agents: ~45 minutes

The time savings compound as you build more complex features.

## What to Do When Agents Make Mistakes

1. Don't restart — agents can fix their own mistakes
2. Describe what's wrong specifically
3. Reference the exact file and line if possible
4. Ask for the fix, not a rewrite

\`\`\`
The notifications API returns the wrong count. In src/app/api/notifications/route.ts,
the query is counting all notifications not just unread ones. Fix the WHERE clause.
\`\`\`

> **Main idea:** Multi-agent workflows aren't for every task — they're for features that are large enough to benefit from parallelism. Aim for tasks that take an agent 20+ minutes, then split them.`,

  "8-7": `# Advanced Agent Patterns

Beyond basic agent delegation, there are proven patterns that experienced users apply. These patterns handle complex scenarios that simple "give task, get result" workflows don't cover.

## Pattern 1: Plan-Execute-Review

Three-phase workflow for risky or complex changes:

\`\`\`
Phase 1 — PLAN ONLY:
Analyze the codebase and create a detailed plan to add Stripe subscriptions.
List every file you'll create or modify. Do NOT write any code yet.

[Review the plan]

Phase 2 — EXECUTE:
Execute the plan you described. Start with the database schema.

Phase 3 — REVIEW:
Review all changes made. Check for TypeScript errors, security issues,
missing error handling. Fix anything found.
\`\`\`

Using /plan mode makes this explicit.

## Pattern 2: Test-Driven Development

Write tests first, then implement:

\`\`\`
Write comprehensive tests for a subscription management API:
- Test creating a subscription
- Test cancelling a subscription
- Test webhook handling for payment failures
Do NOT implement the API yet, just the tests.
\`\`\`

Then:
\`\`\`
Implement the subscription API to make all those tests pass.
Run the tests after each implementation step.
\`\`\`

## Pattern 3: Incremental Safety

For critical systems, make changes incrementally:

\`\`\`
Add Stripe webhooks. Constraint: do not modify any existing files.
Only create new files and new routes.
\`\`\`

Zero risk of breaking existing functionality.

## Pattern 4: Context Injection

For agents that need specific knowledge:

\`\`\`
Before starting: read these files to understand the patterns:
- @src/app/api/users/route.ts (API pattern to follow)
- @src/lib/auth.ts (how auth works)
- @prisma/schema.prisma (current schema)

Now add a friends/following system following these exact patterns.
\`\`\`

## Pattern 5: Checkpoint Commits

For long-running tasks:

\`\`\`
Build the notification system. After completing each phase,
create a git commit with a descriptive message before starting
the next phase. This way we can roll back if needed.
\`\`\`

Every completed phase has a rollback point.

## When to Use Which Pattern

| Scenario | Pattern |
|----------|---------|
| New complex feature | Plan-Execute-Review |
| Risky changes to critical code | Incremental Safety |
| API or business logic | TDD |
| Rewrite/migration | Checkpoint Commits |
| Agent making wrong choices | Context Injection |

> **Main idea:** These patterns are engineering judgment encoded into prompts. They're what separates "using AI" from "using AI well." Add them to your repertoire one at a time.`,

  // ===== MODULE 10 — Master Claude Code: Introduction =====

  "10-1": `# What is Claude Code — Full Breakdown

Module 10 goes deeper on Claude Code. If module 7 was "how to use it," module 10 is "how to master it."

## Claude Code's Architecture

Claude Code is not a simple chatbot wrapper. It's an agent runtime:

\`\`\`
User Input
    ↓
Claude LLM (reasoning layer)
    ↓
Tool Calls (actions the agent takes)
    ├── Read / Write / Edit files
    ├── Bash (run terminal commands)
    ├── WebSearch / WebFetch
    ├── Agent (launch subagents)
    └── MCP tools (browser, DB, etc.)
    ↓
Observe results → reason → next tool call
    ↓
Complete when goal is achieved
\`\`\`

This loop runs autonomously until the task is done or Claude asks for input.

## Permission System

Claude Code has three permission modes:

**Ask before anything (safest):**
Claude asks permission before every file edit and terminal command. Slowest, but you see everything.

**Edit Automatic (recommended):**
Claude edits files freely, but asks before running terminal commands. Best for most development work.

**Bypass Permissions (fastest):**
Claude does everything autonomously. Use for well-defined, low-risk tasks only.

Switch with: \`/permissions\` or in settings.

## The Tool Suite in Detail

| Tool | What it does |
|------|-------------|
| Read | Reads file contents |
| Write | Creates new files |
| Edit | Makes targeted edits (more reliable than Write for modifications) |
| Bash | Runs any shell command |
| WebSearch | Searches the web |
| WebFetch | Downloads a URL |
| Agent | Launches a subagent |
| MCP tools | Browser, DB, GitHub, etc. |

## Thinking Mode

For complex architectural decisions:

\`\`\`
Think deeply about the best database schema design for a multi-tenant SaaS.
Consider: data isolation, query performance, and migration complexity.
\`\`\`

Claude spends more tokens reasoning before responding. Slower but better decisions.

## What Makes It Different from Cursor

| | Cursor | Claude Code |
|--|--------|-------------|
| Where it runs | Inside VS Code | In terminal |
| File access | Current project | Any directory |
| Autonomy | Medium | High |
| MCP support | Yes | Yes |
| Best for | Interactive editing | Autonomous tasks |

> **Main idea:** Claude Code is a full agent runtime, not a code completion tool. Mastering it means understanding the permission model, tool suite, and when to give it full autonomy vs supervised control.`,

  "10-2": `# Comparison with Competitors: Cursor, Windsurf, Copilot

The AI coding tool landscape changes fast. Here's a clear-eyed comparison as of 2025.

## The Main Players

### Claude Code
- **Model:** Claude (Anthropic)
- **Where:** Terminal, VS Code extension
- **Strengths:** Deep autonomy, MCP ecosystem, best for large codebases, agent teams
- **Weaknesses:** Terminal learning curve, requires Anthropic subscription
- **Price:** Included in Claude Pro ($20/month) or Max ($100/month)

### Cursor
- **Model:** Claude 3.5 Sonnet, GPT-4o (configurable)
- **Where:** Standalone IDE (VS Code fork)
- **Strengths:** Best UI/UX, Tab autocomplete, Composer, mainstream adoption
- **Weaknesses:** Subscription on top of VS Code investment
- **Price:** Free tier (limited), Pro $20/month

### Windsurf
- **Model:** Codeium's models + Claude/GPT-4
- **Where:** Standalone IDE
- **Strengths:** Cascade agent mode, often faster than Cursor, generous free tier
- **Weaknesses:** Less polished than Cursor, smaller community
- **Price:** Free (limited), Pro $15/month

### GitHub Copilot
- **Model:** GPT-4o (primarily)
- **Where:** VS Code extension, JetBrains, terminal
- **Strengths:** Deep GitHub integration, enterprise features, widely adopted
- **Weaknesses:** Less autonomous than Claude Code, primarily autocomplete-focused
- **Price:** $10/month (individual), $19/user/month (business)

## Decision Framework

**Use Claude Code when:**
- Autonomous multi-step tasks
- Large codebases requiring full understanding
- Building agent teams and workflows
- Need MCP integrations

**Use Cursor when:**
- Primary daily coding tool
- Best UX is important
- Team already on VS Code

**Use Windsurf when:**
- Budget matters (generous free tier)
- Want Cascade-style agent mode in an IDE
- Trying alternatives to Cursor

**Use Copilot when:**
- Enterprise environment requiring GitHub integration
- JetBrains user
- Already have GitHub team subscription

## The Real Answer: Combine Them

Many professional vibe coders use:
- **Cursor** — interactive daily coding
- **Claude Code** — autonomous tasks and complex features

They're not competing — they're complementary.

> **Main idea:** No single tool wins on all dimensions. Claude Code is the best for autonomous agency. Cursor is the best all-in-one IDE experience. Most serious builders use both.`,

  "10-3": `# Pricing and Subscriptions — What to Choose

AI coding tools cost money. Here's how to think about the investment and get maximum value.

## Claude Code Pricing

Claude Code is accessed through your Anthropic subscription:

**Claude Pro ($20/month)**
- 5x more usage than free
- Access to all Claude models
- Claude Code access (limited usage)
- Good for: learning, part-time projects

**Claude Max ($100/month)**
- 5x more usage than Pro (25x free)
- Faster response times
- Good for: full-time vibe coding, professional work

**API (pay-per-use)**
- $3/MTok for Sonnet input, $15/MTok output
- No monthly cap
- Good for: unpredictable usage patterns, running agents in CI/CD

For reference: writing a complete feature (~50k tokens total) costs ~$0.90 with Sonnet API.

## Cursor Pricing

**Hobby (Free)**
- 2,000 autocomplete uses/month
- 50 slow model requests
- Good for: trying it out

**Pro ($20/month)**
- Unlimited autocomplete
- 500 fast requests/month
- Claude 3.5 Sonnet access
- Good for: daily use

**Business ($40/user/month)**
- Team features, admin controls
- Good for: teams

## The Real Cost Question

Don't ask "how much does this cost?" Ask "how much does this cost per hour of my time saved?"

At $40/month (Claude Max + Cursor Pro):
- If you save 5 hours/week: $40 / 20 hours = $2/hour saved
- If your time is worth $50/hour: you're getting $1,000 value from $40

The ROI is obvious for anyone building products professionally.

## Free Tier Strategy

If you're starting out:
1. Claude.ai free tier for learning prompting
2. Cursor free tier for editing
3. This platform's AI assistant for course questions

Upgrade when you hit limits consistently — that's the signal you're productive enough to justify the cost.

## Which to Start With?

**Absolute beginner:** Claude.ai free + Cursor free
**Serious learner:** Claude Pro ($20) + Cursor Pro ($20)
**Professional vibe coder:** Claude Max ($100) + Cursor Pro ($20)

Total for professional setup: $120/month. For anyone billing clients or selling products, this pays back in the first hour.

> **Main idea:** Treat AI tool subscriptions as professional tools, not entertainment subscriptions. A $100/month tool that saves you 20 hours/month is not an expense — it's a $900/month profit center.`,

  "10-4": `# Claude Code as Personal AI Assistant

Beyond coding, Claude Code is a general-purpose AI agent on your computer. This lesson explores the non-obvious ways to use it.

## Beyond Code

Claude Code can work with any file, not just code:

**Writing and documents:**
\`\`\`
Read all the markdown files in /docs and create a comprehensive
README.md that summarizes the project for new contributors
\`\`\`

**Data analysis:**
\`\`\`
Read the CSV files in /data, analyze trends, and create a
summary report in markdown with key insights
\`\`\`

**Research and synthesis:**
\`\`\`
Search the web for the latest Next.js 15 features, compare with
what we're using in this project, and create a migration guide
\`\`\`

## Automation Scripts

Ask Claude Code to write and run automation:

\`\`\`
Write a script that:
1. Finds all .png images in the /public folder
2. Optimizes them using sharp (install if needed)
3. Reports the before/after file sizes

Then run the script.
\`\`\`

Claude writes the script, installs dependencies, runs it, reports results.

## Project Management

\`\`\`
Read all the TODO comments in the codebase,
organize them by priority and file,
create a TASKS.md with them categorized as High/Medium/Low
\`\`\`

\`\`\`
Look at git log for the last month.
Summarize what was built, what took the most time,
and identify patterns in how I work
\`\`\`

## Codebase Onboarding

When joining a new project:
\`\`\`
I'm new to this codebase. Read the main files and give me:
1. What this project does
2. The main tech stack
3. How to run it locally
4. The 5 most important files to understand first
5. Any obvious technical debt to be aware of
\`\`\`

## The "Personal CTO" Pattern

For architecture decisions:
\`\`\`
I'm building a SaaS for [description]. I have [constraints].

Act as a CTO reviewing my plan:
[describe your current approach]

What would you do differently? What risks do you see?
What should I prioritize?
\`\`\`

Claude gives opinionated strategic advice, not just technical answers.

## Setting Up for Personal Productivity

In your global \`~/.claude/CLAUDE.md\`:
\`\`\`markdown
## Personal Assistant Preferences
- I'm a software developer building SaaS products
- I prefer concise, direct answers
- When reviewing code, prioritize security and performance
- For strategic questions, give your honest opinion
- Time zone: UTC+2
\`\`\`

> **Main idea:** Claude Code isn't just a coding tool — it's a capable general-purpose agent on your machine. The more you treat it as an autonomous worker (not just a code completer), the more value you extract.`,
};
