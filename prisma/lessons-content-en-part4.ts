// English lesson content — VibeCode Academy — Part 4 (modules 17-21)

export const LESSON_CONTENT_EN_PART4: Record<string, string> = {

  // ===== MODULE 17 — Choosing an IDE =====

  "17-1": `# Why Do You Actually Need an IDE?

When you start coding with AI, the first question is — **where do you write the code?** Notepad? An online editor? Or a dedicated program?

An IDE (Integrated Development Environment) is your workshop. This is where you write, run, debug, and deploy code.

## What Is an IDE?

An IDE is a code editor with superpowers:

- **Syntax highlighting** — code reads like text, not a jumble of symbols
- **Autocomplete** — type 3 letters, the IDE suggests 10 options
- **Debugger** — pause code at any point and inspect what's happening
- **Terminal** — run commands without leaving the editor
- **Git integration** — view changes, make commits right here
- **Extensions** — thousands of plugins for any task

## IDE + AI = Superpower

Before, an IDE helped you write code faster. Now with AI integration, an IDE **writes code for you** while you focus on the problem.

This fundamentally changes the approach:
- You describe WHAT needs to be done
- AI writes HOW to implement it
- You review and guide

## What We'll Cover in This Block

Over the next modules we'll explore 4 tools:

| Tool | Type | What Makes It Special |
|------|------|-----------------------|
| VS Code + Claude Code | Classic IDE | Flexibility, full control |
| Cursor | AI-native IDE | Chat + Composer, Rules |
| Windsurf | AI-native IDE | Cascade agent, simplicity |
| Bolt.new / Lovable | Online builders | Instant start, no setup |

## The Golden Rule of This Block

> **There is no "best" tool. There is a tool that works for you right now.**

Professionals often use multiple tools simultaneously — each for its type of task. Don't obsess over picking the "right" one — try a few and feel what resonates.`,

  "17-2": `# IDE Comparison: VS Code, Cursor, Windsurf, Bolt

Let's break down each tool honestly — pros, cons, and who it's best for.

## VS Code + Claude Code

**VS Code** is the world's most popular editor (used by over 70% of developers). Microsoft makes it free and open source.

**Claude Code** is a CLI tool from Anthropic that runs in the terminal inside VS Code.

### Pros
- Free (VS Code) + included in Claude subscription
- Thousands of extensions for any task
- Works with any language and framework
- Full control over everything
- Huge community and documentation

### Cons
- Requires setup (install extensions, configure Claude Code)
- Claude Code works via terminal — less intuitive at first

### Who It's For
Developers who want flexibility and are ready to learn professional tools.

---

## Cursor

**Cursor** is a fork of VS Code with built-in AI. It looks like VS Code but AI is integrated at the interface level, not as an extension.

### Pros
- Familiar interface for VS Code users
- Chat (questions about code) + Composer (changes to files)
- Rules — you can set rules for how AI should behave
- Works well with existing projects

### Cons
- Paid ($20/month for Pro)
- Sometimes slower than direct Claude Code
- You depend on Cursor as a company

### Who It's For
Those who want AI directly in the VS Code interface without a terminal.

---

## Windsurf

**Windsurf** is a new AI-native editor from Codeium. Focus on "Cascade" — an agentic mode.

### Pros
- Cascade mode: AI reads files itself, runs commands, fixes errors
- Very simple interface
- Free tier available

### Cons
- Young product (fewer extensions)
- Cascade sometimes does too much on its own

### Who It's For
Those who want maximum automation with minimal configuration.

---

## Bolt.new / Lovable

**Bolt.new** and **Lovable** are online builders. Open a browser, describe an app, get ready code.

### Pros
- Zero installations — works in the browser
- Start in 5 minutes
- Great for prototypes and landing pages

### Cons
- Limited control over code
- Hard to customize for specific requirements
- Paid for serious use

### Who It's For
Quick prototypes, landing pages, when you need results right now.

---

## Summary

Here's a quick cheat sheet:

\`\`\`
Just getting started?            → Bolt.new
Want full control?               → VS Code + Claude Code
Want AI inside the VS Code UI?   → Cursor
Want maximum automation?         → Windsurf
\`\`\``,

  "17-3": `# How to Choose Your Tool — A Personal Decision

This lesson is about **making a decision** — not about what's correct, but what works for you specifically.

## Questions That Will Help You Choose

### 1. Are You a Beginner or Do You Already Code?

**Beginner (first month)**
→ Start with Bolt.new or Lovable. They give fast results and motivation to keep going. Then move to Cursor or VS Code.

**Some experience**
→ Go straight to VS Code + Claude Code or Cursor. This builds the right habits from the start.

### 2. What Is Your Budget?

**Free**: VS Code + Claude Code (if you have a Claude subscription), Windsurf (basic tier)
**$10–20/month**: Cursor Pro, Bolt.new Pro
**Already paying for Claude**: VS Code + Claude Code is the best value — already included

### 3. What Will You Build?

**Landing pages, portfolio sites** → Bolt.new / Lovable
**Web apps** → Cursor or VS Code + Claude Code
**Full products** → VS Code + Claude Code (maximum flexibility)
**Experiments** → Windsurf (quickly test ideas)

### 4. How Important Is Control?

Want to understand every line of code → VS Code + Claude Code
Want results, details later → Bolt.new / Windsurf

## Recommended Path for Beginners

\`\`\`
Week 1–2:  Bolt.new — build 2–3 landing pages / prototypes
Week 3–4:  Cursor — experience AI in a real editor
Month 2+:  VS Code + Claude Code — for serious projects
\`\`\`

## Remember the Most Important Thing

A tool is a **means**, not an end. The best tool is the one you actually use and that helps you build projects.

Don't spend a week choosing an IDE. Pick any from the list and start building a real project. After a month you'll know exactly what you need.

> This module is an overview of options. The next modules are detailed guides for each tool. Check the ones that interest you, skip the rest. It's your choice.`,

  // ===== MODULE 18 — VS Code Guide =====

  "18-1": `# VS Code — Installation and First Launch

VS Code (Visual Studio Code) is an editor from Microsoft used by millions of developers worldwide. It's free, fast, and extensible.

## Installation

1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Click the big Download button for your OS
3. Run the installer, leave defaults
4. On Windows, check:
   - ✅ Add to PATH
   - ✅ Register Code as an editor for supported file types
   - ✅ Add "Open with Code" action to Windows Explorer

## First Launch

After installing, open VS Code. You'll see the Welcome Screen with several tabs.

### What to Configure Right Away

**Color Theme**: Ctrl+K → Ctrl+T (or gear icon → Color Theme)
- Dark+ (default dark) — the classic
- One Dark Pro — popular dark theme (install separately)

**Code Font**:
- Settings → Editor: Font Family → \`JetBrains Mono\`, \`Fira Code\`, or \`Cascadia Code\`
- Enable ligatures: Editor: Font Ligatures → true

**Auto Save**:
- Settings → Files: Auto Save → afterDelay

## Interface Layout

\`\`\`
┌─────────────────────────────────────┐
│  Activity Bar  │  Explorer/Editor   │
│  (left panel)  │                    │
│  📁 Files      │  [Your code]       │
│  🔍 Search     │                    │
│  🔀 Git        │                    │
│  🐛 Debug      │                    │
│  🧩 Extensions │                    │
├────────────────┴───────────────────┤
│  Terminal (bottom panel)            │
└─────────────────────────────────────┘
\`\`\`

## Opening a Project Folder

The most important skill — opening a folder (not a file):
- **File → Open Folder** (or Ctrl+K, Ctrl+O)
- Or drag a folder into VS Code's window
- Or in the terminal: \`code .\` (opens the current folder)

## Command Palette

**Ctrl+Shift+P** — the most important shortcut in VS Code.

You can find ANY command here: change theme, format a file, install an extension, open settings.

Memorize this shortcut — you'll use it constantly.`,

  "18-2": `# Extensions Everyone Needs

Extensions (plugins) add new capabilities. VS Code without extensions is a basic editor. With extensions — a full-featured development environment.

## How to Install an Extension

1. Click the Extensions icon in the left panel (or Ctrl+Shift+X)
2. Type the name in the search box
3. Click Install

## Essential Extensions

### For All Developers

**Prettier — Code Formatter**
- Automatically formats code
- After installing: Settings → Default Formatter → Prettier
- Enable Format on Save

**ESLint**
- Finds errors in JavaScript/TypeScript while you write
- Underlines problem areas in red

**GitLens**
- Shows who changed every line of code and when
- File history, blame annotations

**Error Lens**
- Shows errors directly on the line, no need to hover

### For Web Development

**ES7+ React/Redux/React-Native snippets**
- Fast snippets: rfc → React Function Component

**Tailwind CSS IntelliSense**
- Tailwind class autocomplete
- Color preview right in the editor

**Auto Rename Tag**
- Rename an opening tag — the closing tag changes automatically

**CSS Peek**
- Ctrl+click on a CSS class → jump to its definition

### For Convenience

**Material Icon Theme**
- Beautiful icons for files and folders

**Bracket Pair Colorizer** (built into VS Code since 1.67)
- Different colored brackets — easier to read nested code

**Indent Rainbow**
- Colors indentation levels — makes nesting visible

## Syncing Settings

If you work on multiple computers:
- Settings Sync (built-in) — syncs extensions and settings via GitHub
- Click the avatar at the bottom of the left panel → Turn on Settings Sync`,

  "18-3": `# Keyboard Shortcuts That Will Change Your Life

Keyboard shortcuts are the difference between "I'm coding" and "I'm slowly typing." You don't need to learn them all at once. Learn the 10 most important — they cover 80% of your work.

## Navigation

| Shortcut | Action |
|----------|--------|
| Ctrl+P | Open file by name (quick search) |
| Ctrl+Shift+P | Command Palette (all commands) |
| Ctrl+G | Go to line number |
| Ctrl+Shift+E | Switch to Explorer |
| Ctrl+\` | Open/close terminal |
| Ctrl+B | Hide/show sidebar |

## Editing

| Shortcut | Action |
|----------|--------|
| Alt+↑/↓ | Move line up/down |
| Shift+Alt+↑/↓ | Copy line up/down |
| Ctrl+D | Select next occurrence of word |
| Ctrl+Shift+L | Select ALL occurrences of word |
| Ctrl+/ | Toggle line comment |
| Ctrl+Shift+K | Delete line |
| Ctrl+Enter | Insert line below (without moving cursor) |

## Search and Replace

| Shortcut | Action |
|----------|--------|
| Ctrl+F | Search in file |
| Ctrl+H | Search and replace in file |
| Ctrl+Shift+F | Search across entire project |
| Ctrl+Shift+H | Replace across entire project |

## Multi-Cursor (Superpower)

**Alt+Click** — place an additional cursor where you click

**Ctrl+Alt+↑/↓** — add a cursor on the line above/below

**Ctrl+D** (multiple times) — select multiple identical words and edit them simultaneously

Example: need to rename a variable in 5 places — select it, press Ctrl+D five times, now type — changes everywhere.

## Snippets and Emmet

In HTML files:
- \`!\` + Tab → full HTML boilerplate
- \`div.container>ul>li*5\` + Tab → div with ul and 5 li items

In React/JS:
- \`rfc\` + Tab → React Function Component (with ES7+ snippets extension)
- \`useEffect\` + Tab → useEffect hook

## Useful Shortcut Settings

Open Keyboard Shortcuts: Ctrl+K → Ctrl+S

You can rebind any key here. For example, many developers remap formatting to Ctrl+S (saving already formats if Format on Save is enabled).`,

  "18-4": `# Claude Code in VS Code

Claude Code is a CLI tool from Anthropic. It runs directly in VS Code's terminal and turns it into an AI assistant that knows your project.

## Installing Claude Code

Open the terminal in VS Code (Ctrl+\`) and run:

\`\`\`bash
npm install -g @anthropic/claude-code
\`\`\`

Verify after install:
\`\`\`bash
claude --version
\`\`\`

## Setup

Claude Code needs an API key from Anthropic (or works through a Claude Max subscription).

\`\`\`bash
claude config set api-key YOUR_API_KEY
\`\`\`

Or just run \`claude\` for the first time — it will prompt you to sign in.

## Running Claude Code

Open your project folder in VS Code. Open the terminal. Run:

\`\`\`bash
claude
\`\`\`

That's it. Claude Code now knows your project and is ready to help.

## Core Commands

\`\`\`bash
claude                    # Start interactive mode
claude "do X"             # One task and exit
claude --continue         # Continue previous conversation
\`\`\`

## How to Work Effectively

### Be Specific About Tasks
❌ "Make it better"
✅ "Add email validation to the registration form — the field must contain @ and a domain"

### Give Context
\`\`\`
I'm building a Next.js app. In src/app/page.tsx I need to add a Hero section component with a headline, subheadline, and CTA button. Use Tailwind CSS, dark theme.
\`\`\`

### Iterate
Don't write one giant task. Break it into steps:
1. "Create the component"
2. "Add animation"
3. "Make it responsive for mobile"

## Reviewing Changes

Claude Code shows exactly what it will change before applying. You see a diff and can approve or reject.

The VS Code Git panel (Ctrl+Shift+G) shows all changed files with added/removed lines highlighted.

## CLAUDE.md — Project Context

Create a CLAUDE.md file in the project root — Claude will read it on every launch:

\`\`\`markdown
# My Project

## Stack
- Next.js 14, TypeScript, Tailwind CSS
- Prisma + SQLite

## Code Style
- Components in src/components/
- Pages in src/app/
- Use Tailwind, not CSS files

## Important
- Always TypeScript, not JavaScript
- English comments
\`\`\`

More about CLAUDE.md — in the "CLAUDE.md Magic" module.`,

  "18-5": `# GitHub Copilot vs Claude Code — Which to Choose?

If you work in VS Code, sooner or later you'll face the question: install Copilot or use Claude Code? Let's compare honestly.

## GitHub Copilot

**What it is**: AI autocomplete from GitHub/Microsoft, works like a very smart IntelliSense.

**How it works**: Looks at code around your cursor → suggests a continuation directly in the editor (gray text) → press Tab to accept.

### Copilot's Strengths
- **Built into the coding flow** — no switching required
- **Real-time autocomplete** — suggests options as you type
- **Knows standard patterns well** — CRUD operations, React hooks, SQL queries
- **Copilot Chat** — ask questions right inside VS Code

### Copilot's Weaknesses
- $10/month (or $19 for Business)
- Works line-by-line/function-by-function, doesn't "understand" the whole project
- Less context — doesn't read the entire codebase

## Claude Code

**What it is**: An AI agent that understands the entire project and can handle complex multi-step tasks.

### Claude Code's Strengths
- **Understands the whole project** — reads all files, knows the architecture
- **Multi-step tasks** — "add authentication" and it does everything: DB schema, API, UI
- **Explains what it's doing** — you see reasoning, not just results
- **CLAUDE.md** — you can set context and rules

### Claude Code's Weaknesses
- Works through the terminal (not inline autocomplete)
- You need to explicitly describe tasks

## Using Both Together

Many professionals use both tools:

| Task | Tool |
|------|------|
| Write a function by a template | Copilot (Tab autocomplete) |
| Add a new feature to the project | Claude Code |
| Fix a bug | Claude Code (knows context) |
| Write tests | Copilot + Claude Code |
| Refactor architecture | Claude Code |

## Recommendation

If you have a Claude subscription → use Claude Code, it's more powerful.

If you want smooth inline autocomplete in the editor → add Copilot as a supplement.

If your budget is limited → Claude Code gives more value for complex projects.`,

  // ===== MODULE 19 — Cursor AI IDE =====

  "19-1": `# Cursor — The IDE That Understands Your Code

Cursor is a code editor built from scratch for AI-assisted development. It looks like VS Code (it's a fork), but AI is integrated at the interface level, not as an extension.

## What Makes Cursor Special

In plain VS Code + Claude Code you write tasks in the terminal. In Cursor you get two AI modes right in the interface:

**Chat** — you talk with the AI about your code. Ask questions, request explanations, ask it to write — the AI sees your project and responds in context.

**Composer** — AI makes changes directly to files. You describe what's needed, Cursor shows a diff (what will change), you accept or reject.

## How Cursor Differs from "VS Code + Extension"

| | VS Code + Copilot | VS Code + Claude Code | Cursor |
|--|--|--|--|
| Project context | Partial | Full | Full |
| Interface | In editor | In terminal | In editor |
| File changes | One at a time | Multiple | Multiple |
| Familiarity | Familiar | New approach | Almost like VS Code |

## Who Cursor Is For

✅ You already know VS Code and want AI without switching to the terminal
✅ You want to see changes in a convenient diff format
✅ You do many iterations on code
✅ The UI/UX of your tools matters to you

## Cursor's Limitations

- Paid ($20/month for Pro with unlimited requests)
- Sometimes slower than direct Claude API
- You depend on Cursor Inc. as a company

## Cursor vs Claude Code

Importantly: **Cursor and Claude Code are not competitors — they're different approaches**.

Claude Code is an agent that autonomously handles tasks. Cursor is an editor with a built-in AI chat.

Many developers use Cursor as their editor and run Claude Code in the terminal inside Cursor for complex tasks. The best of both worlds.`,

  "19-2": `# Installing and Configuring Cursor

## Installation

1. Go to [cursor.com](https://cursor.com)
2. Click Download for your OS
3. Install like any regular app

On first launch, Cursor will offer to:
- Import settings from VS Code (recommended — keeps all extensions and theme)
- Choose an AI model
- Sign in to your account

## Model Configuration

Cursor works with several models. For the best quality, choose Claude:

Settings (Ctrl+Shift+J) → Models → select **claude-3-5-sonnet** or **claude-opus-4**

## Importing from VS Code

If you already use VS Code:
1. Cursor → Preferences → Import VS Code Settings
2. All extensions, theme, keyboard shortcuts — transferred automatically

## Cursor Interface Layout

Cursor looks like VS Code but with additional elements:

\`\`\`
┌────────────────────────────────────────┐
│  Sidebar │  Editor                     │
│          │                             │
│          │  [Your code]                │
│          │                             │
├──────────┴──────────────────────────── ┤
│  Chat Panel (right side when open)     │
└────────────────────────────────────────┘
\`\`\`

**Chat** opens with Ctrl+L
**Composer** opens with Ctrl+I (or Ctrl+Shift+I for a separate window)

## Project Indexing

When you open a folder, Cursor **indexes all files** — reads and memorizes the project structure. This takes about a minute.

After indexing, AI knows all the files, functions, and components in your project — and can reference them without explicit instructions.

Indexing status is visible in the bottom right (icon with file count).

## Cursor Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+L | Open Chat |
| Ctrl+I | Open Composer (inline) |
| Ctrl+Shift+I | Open Composer (separate window) |
| Ctrl+K | AI suggestion at current position |
| @ in chat | Reference a file/function |

## First Test

Open your project. Press Ctrl+L. Type:

\`\`\`
What does this project do? Describe the architecture.
\`\`\`

Cursor will read all the files and give a description. If the answer is accurate — indexing is working.`,

  "19-3": `# Chat vs Composer — When to Use Each

Cursor has two AI modes. Understanding the difference means using the tool correctly.

## Chat (Ctrl+L)

**For conversation and questions.**

Chat is a dialogue. You ask, AI answers. Code appears in the response as text — you decide what to do with it (copy, apply).

### When to Use Chat
- Explain what code does: "What does this function do?"
- Understand an error: "Why is there a TypeScript error here?"
- Ask about approach: "What's the best way to implement pagination?"
- Write and discuss code: "Write a sort function, let's discuss the options"
- Learn: "Explain how useEffect works"

### File References in Chat

In chat you can use @ to add a file to context:

\`\`\`
@src/components/Button.tsx explain the props of this component
\`\`\`

\`\`\`
@package.json what dependencies does the project have?
\`\`\`

---

## Composer (Ctrl+I)

**For real changes to code.**

Composer is for when you want the AI to **make changes to files**. You describe the task, Cursor shows what will change (diff), you accept.

### When to Use Composer
- Add a new component
- Refactor a function
- Add error handling
- Change styles
- Any real changes to the codebase

### How Composer Works

1. Open Composer (Ctrl+I)
2. Describe the task in detail
3. Cursor shows a plan of changes
4. Click Apply — changes are applied to files
5. Review; if something is wrong — click Reject and try again

## Practice: Chat → Composer

The right workflow:

\`\`\`
1. Chat: "What's the best way to add authentication to my Next.js project?"
   → AI explains approaches, you choose

2. Composer: "Add JWT authentication using the approach we discussed"
   → AI makes changes to files
\`\`\`

Use Chat to **think**, Composer to **do**.`,

  "19-4": `# Rules — Teach Cursor Your Standards

Rules is one of Cursor's most powerful features. You describe rules for how AI should behave in your project — and it follows them in every response.

## What Rules Are

Rules are instructions that Cursor reads before every response. Similar to CLAUDE.md in Claude Code, but built into the Cursor interface.

Example rules:
- "Always use TypeScript, never JavaScript"
- "Use Tailwind CSS for styles"
- "Write components as functional, not class-based"
- "Add JSDoc comments to public functions"
- "Don't use any in TypeScript"

## How to Configure Rules

### Global Rules (for all projects)
Cursor Settings → Rules for AI → enter rules in the text field

### Project-Specific Rules
Create a **.cursorrules** file in the project root:

\`\`\`
# Rules for This Project

## Stack
- Next.js 14 with App Router
- TypeScript (strict mode)
- Tailwind CSS for all styles
- Prisma + PostgreSQL

## Code Style
- Use functional React components
- Prefer async/await over promises
- Use English for variable names, English for comments
- Add TypeScript types everywhere

## Prohibited
- No CSS files — Tailwind only
- No class-based components
- No var — only const and let
- No any in TypeScript

## Structure
- Components in src/components/
- Hooks in src/hooks/
- Utilities in src/lib/
\`\`\`

## Examples of Good Rules

### For a React/Next.js Project
\`\`\`
This is a Next.js 14 project with TypeScript and Tailwind CSS.
Use App Router, not Pages Router.
Server Components by default, 'use client' only when interactivity is needed.
Tailwind only for styles, no inline styles and no CSS modules.
\`\`\`

### For Code Strictness
\`\`\`
Always add TypeScript types.
Handle errors in async functions with try/catch.
Add loading and error states to components.
\`\`\`

## Why Rules Matter

Without Rules, Cursor "guesses" your style every time. It'll add CSS modules when you use Tailwind. Write JavaScript when you need TypeScript.

With Rules — every response matches your standards from the first try. Fewer corrections, more results.`,

  "19-5": `# Claude in Cursor — The Best Combination

Cursor supports multiple AI models. Claude from Anthropic is the best choice for most development tasks.

## How to Select Claude in Cursor

Settings (Ctrl+Shift+J) → Models

Available Claude models:
- **claude-opus-4** — the most intelligent, for complex tasks
- **claude-sonnet-4-5** — balance of speed and quality (recommended for daily work)
- **claude-haiku-4-5** — fast, for simple tasks

## Why Claude Is Better Than GPT in Cursor

**Context window**: Claude supports 200K tokens — that's an entire large project. GPT-4 supports 128K.

**Instruction following**: Claude adheres more consistently to the Rules you've set. Less improvisation.

**Error-free code**: Claude makes fewer syntax errors in TypeScript and modern JavaScript.

**Explanations**: Claude explains what it's doing and why — easier to learn from and easier to verify results.

## Practical Examples

### Refactoring Task (Composer)
\`\`\`
This component is too large, split it into several smaller components.
Each component in its own file. Preserve all functionality.
@src/components/Dashboard.tsx
\`\`\`

### New Feature Task (Composer)
\`\`\`
Add dark mode to the app.
- Use localStorage to save the preference
- Add a toggle button in the header
- Use CSS variables for colors
\`\`\`

### Question in Chat
\`\`\`
@src/lib/auth.ts why isn't the Google OAuth authentication working?
Here's the error: [paste error]
\`\`\`

## Switching Models on the Fly

In Chat and Composer you can change the model mid-conversation:

Click the model name in the Chat panel → select another

Use Opus for complex architectural decisions, Sonnet for daily development, Haiku for quick fixes.

## Tips for Better Results

**Add files via @**: Cursor is smarter when it knows exactly which files are involved

**Describe the expected result**: "The component should animate on appearance" is better than "add animation"

**Iterate**: Don't write one huge task. Work in small steps and verify each one.`,

  "19-6": `# Cursor + Claude Code — A Powerful Duo

Cursor and Claude Code are not competitors. Used together, they cover any development task imaginable.

## How It Works

**Cursor** is your editor. Here you view code, make edits through Chat/Composer, and review changes.

**Claude Code** is the agent in the terminal. You run it inside Cursor and give it large autonomous tasks.

The terminal inside Cursor is a regular terminal. Cursor + Claude Code works exactly the same as VS Code + Claude Code.

## When to Use Cursor Chat/Composer

- Changes to 1–3 files
- When you want to see a diff before applying
- Questions about code
- Iterative refinement of a component

## When to Use Claude Code in Cursor's Terminal

- Large task touching 10+ files
- Need to run commands (npm install, prisma migrate)
- A completely new feature from scratch
- Autonomous work while you're doing something else

## A Sample Work Day

\`\`\`
9:00 AM   Claude Code: "Create a new profile page with API"
          → Claude Code creates DB schema, API routes, page, components

10:30 AM  Cursor Composer: "Improve the design of the ProfileCard component"
          → Make visual tweaks via convenient diff

11:00 AM  Cursor Chat: "Why is there a TypeScript error here?"
          → Quickly resolve the issue

11:30 AM  Claude Code: "Add tests for the new API routes"
          → Runs autonomously while you review other code
\`\`\`

## Setup for Comfortable Work

In Cursor: View → Terminal (or Ctrl+\`)

Start Claude Code:
\`\`\`bash
claude
\`\`\`

Now you have two AIs running simultaneously:
- Left (or bottom): Cursor Chat/Composer for targeted edits
- Bottom in terminal: Claude Code for large tasks

## Module Summary

Cursor is a great tool if:
- You want a familiar VS Code interface with built-in AI
- You value a convenient diff when reviewing changes
- You work on projects where full code context matters

Remember: tools are a means, not an end. Use what helps you build great projects.`,

  // ===== MODULE 20 — Windsurf IDE =====

  "20-1": `# Windsurf — The IDE with a Cascade Agent

Windsurf is a new AI-native editor from Codeium. Its standout feature is **Cascade** mode, which works like a true autonomous agent.

## What Is Windsurf?

Windsurf is a code editor (also a VS Code fork) where AI doesn't just answer questions — it **acts on its own**: reads files, runs commands, fixes errors, and iterates.

## Cascade — The Main Feature

In other editors AI waits for your instructions. In Windsurf, **Cascade** works differently:

1. You give a high-level task
2. Cascade reads the necessary files **on its own**
3. Makes changes
4. Runs commands (npm install, tests)
5. Sees errors → fixes them → checks again
6. Reports back when done

This is the closest experience to "hire a developer."

## How Windsurf Differs from Cursor

| | Cursor | Windsurf |
|--|--|--|
| Approach | You guide, AI helps | AI acts, you supervise |
| Interface | Chat + Composer separately | Cascade (all-in-one) |
| Autonomy | Moderate | High |
| Simplicity | More settings | Easier to start |

## When Windsurf Wins

**Large features from scratch**: "Add a notification system" — Cascade figures out what to create, no need to explain each step.

**Bug fixing**: Cascade reads the error stack, finds the root cause, fixes it, verifies the fix works.

**Refactoring**: Breaking a large file into modules — Cascade understands dependencies and handles it correctly.

## Limitations

- Young product (fewer extensions than VS Code)
- Cascade sometimes does too much → requires monitoring
- Free tier is limited (paid plan after that)

## Who It's For

Windsurf is an excellent fit if you:
- Want maximum automation
- Dislike fiddling with settings
- Build MVPs or prototypes quickly
- Want "tell it what you need — get the result"`,

  "20-2": `# Installation and First Steps in Windsurf

## Installation

1. Go to [codeium.com/windsurf](https://codeium.com/windsurf)
2. Click Download
3. Install like any regular app

On first launch:
- Create a Codeium account (free)
- Import settings from VS Code if needed

## Windsurf Interface

Windsurf looks like VS Code with one key difference — the **Cascade panel** on the right or at the bottom.

\`\`\`
┌─────────────────────────────────────────┐
│  Explorer  │  Editor         │ Cascade  │
│            │                 │          │
│            │  [Your code]    │ [Chat    │
│            │                 │  with    │
│            │                 │  agent]  │
├────────────┴─────────────────┴──────────┤
│  Terminal                               │
└─────────────────────────────────────────┘
\`\`\`

**Cascade** opens with Ctrl+L (or the icon in the right panel).

## First Project

Open a project folder: File → Open Folder

Windsurf will start indexing — this takes about a minute. After that, Cascade knows the entire project structure.

## Two Cascade Modes

**Write mode** (default): Cascade makes changes to files. Use this for real tasks.

**Chat mode**: Conversation only, no changes. Use this for questions.

Switch using the button at the bottom of the Cascade panel.

## First Task

Open Cascade (Ctrl+L). Type:

\`\`\`
Explain the structure of this project. What are the main components?
\`\`\`

Cascade will read the files and respond. If it's a Next.js project — it'll describe pages, components, API routes.

## How Cascade Works with Files

Cascade **decides on its own** which files to read. You don't need to specify files explicitly (though you can).

Example:
\`\`\`
Add an "Export to PDF" button on the dashboard page
\`\`\`

Cascade will:
1. Find the dashboard file
2. Look at what components exist
3. Determine which PDF library to use
4. Install the needed package
5. Add the button

You see every action in real time.`,

  "20-3": `# Cascade Mode — Agentic Development

Cascade is not just a chat with AI. It's an agent that acts autonomously. Understanding how Cascade works means using Windsurf at full power.

## How Cascade Thinks

Regular AI chat: question → answer → done.

Cascade: task → plan → execute steps → verify → on error — fix → result.

This is the **agent loop**:
\`\`\`
Task
  ↓
Reads needed files
  ↓
Plans changes
  ↓
Makes changes
  ↓
Verifies (runs commands)
  ↓
Error? → fixes and checks again
  ↓
Done
\`\`\`

## What Cascade Can Do Independently

- Read any project files
- Create new files
- Edit existing files
- Run terminal commands (npm, git, tests)
- See command output and respond
- Search the web (if given permission)

## Example: Add Authentication

Instead of explaining every step, you write:

\`\`\`
Add Google OAuth authentication to this Next.js app.
Use NextAuth.js. After login redirect to /dashboard.
\`\`\`

Cascade:
1. Reads package.json → sees NextAuth is not installed
2. Runs \`npm install next-auth\`
3. Reads existing pages → understands structure
4. Creates src/app/api/auth/[...nextauth]/route.ts
5. Creates /login page with Google button
6. Updates .env.example with required variables
7. Adds middleware to protect routes
8. Reports what needs to be added to .env

## Controlling Cascade

**Approve/Reject**: Cascade shows each file change — you can accept or reject.

**Pause**: You can stop at any moment if you see Cascade going in the wrong direction.

**Checkpoint**: Windsurf makes snapshots of state — you can roll back.

## Tips

**Be specific about the result, not the process**:
❌ "Create auth.ts file, add a function to it..."
✅ "Add authentication — the user should be able to log in via Google"

**Set constraints**:
"Only use libraries already in package.json"
"Don't modify existing components, only add new ones"

**Review key changes**: Cascade is fast, but you are the architect. Verify the logic is correct.`,

  "20-4": `# Rules in Windsurf — Configure Your Agent

Like Cursor, Windsurf lets you set rules for AI behavior. This is especially important for Cascade — the more precise the rules, the better the autonomous decisions.

## The .windsurfrules File

Create a **.windsurfrules** file in the project root:

\`\`\`
# Project: [Name]

## Technologies
- Next.js 14 App Router
- TypeScript (strict mode, no any)
- Tailwind CSS (no CSS modules)
- Prisma + PostgreSQL

## Architecture
- Server Components by default
- 'use client' only for interactive components
- API routes in src/app/api/
- Components in src/components/
- Utilities in src/lib/

## Code Style
- async/await, not .then()
- Functional components, not class components
- Named exports (not default exports for components)
- English comments

## Prohibited
- No console.log in production code
- No any in TypeScript
- No inline styles
- No var (only const/let)

## On Errors
- Show full error stack
- Explain the cause
- Suggest a fix
\`\`\`

## Global Rules

Windsurf Settings → Cascade → Global Rules

Here you write rules that apply to all projects. For example:

\`\`\`
Always explain what you're doing and why.
Prefer simple solutions over complex ones.
If there are multiple approaches — suggest options.
\`\`\`

## Rules vs CLAUDE.md vs .cursorrules

All three are different formats for the same idea: give AI project context.

| File | Used For |
|------|----------|
| CLAUDE.md | Claude Code in terminal |
| .cursorrules | Cursor Chat/Composer |
| .windsurfrules | Windsurf Cascade |

If you use multiple tools — keep all three files in the project. They don't conflict.

## Example: Rules for a Startup

\`\`\`
# Startup Rules

## Priority
Speed over perfection. MVP first, refactoring later.

## UI
Use shadcn/ui components if they're already in the project.
Mobile first.

## Database
Always add indexes on fields used for searching.
Soft delete (deletedAt field) instead of real deletion.

## Security
Always validate on the server.
Never trust data from the client.
\`\`\``,

  "20-5": `# Windsurf Pricing — When to Upgrade to Pro

## Free Tier

Windsurf offers a free tier with limitations:
- Limited number of Cascade requests per month
- Access to basic models

For learning and small projects — this is enough.

## Pro Plan (~$15/month)

- Unlimited Cascade requests
- Access to powerful models (Claude, GPT-4)
- Priority speed

## When to Upgrade to Pro

**Stay on free if**:
- You're just learning
- 1–2 small projects per month
- Not earning from projects yet

**Upgrade to Pro if**:
- Working on a commercial project
- Using Windsurf every day
- Hitting limits (requests run out before month's end)

## Tool Pricing Comparison

| Tool | Price | What's Included |
|------|-------|-----------------|
| VS Code + Claude Code | $20/mo (Claude Max) | Claude Code + Sonnet/Opus |
| Cursor | $20/mo | Cursor Pro, all models |
| Windsurf | $15/mo | Cascade Pro, all models |
| Bolt.new | $20/mo | Pro limits |

## What to Choose by Price

If you already pay for Claude subscription → VS Code + Claude Code is already included, no extra payment.

If you want to try an AI IDE → Windsurf is cheaper than Cursor with comparable features.

## Windsurf Summary

Windsurf is an excellent choice for:
- Those who want maximum automation
- Projects that need to build features fast
- Beginners who don't want to deal with setup

Most importantly remember: like all other IDEs — it's a tool. Experiment, use what works for you.`,

  // ===== MODULE 21 — Bolt.new + Lovable =====

  "21-1": `# Bolt.new — Build Apps in the Browser

Bolt.new is an online builder from StackBlitz where you describe an app in plain text and get a working codebase in minutes. No installations, no environment setup.

## What Is Bolt.new?

Bolt.new works directly in the browser:
- Open bolt.new
- Describe what you want to build
- AI generates a complete project (Next.js, React, Vue — your choice)
- See a live preview immediately
- Iterate — ask for changes

## Why Use This If You Have VS Code and Claude Code?

**Speed of start**: Bolt.new doesn't need Node.js, Git, or an editor installed. Open a browser — you're already coding.

**Great for prototypes**: Want to show an idea to a client? 20 minutes in Bolt.new vs 2 hours of environment setup.

**Quick experiments**: Try a new library or concept without polluting your main project.

## What You Can Build in Bolt.new

- Landing pages with animations
- Dashboards with charts
- Forms with validation
- CRUD apps with a database
- REST API with a frontend
- Clones of popular services (for learning)

## Bolt.new's Limitations

**Complexity**: Very large projects become hard to manage. AI loses context with many files.

**Customization**: Some specific requirements are hard to explain to a builder.

**Deployment**: Bolt.new helps with deployment, but is limited to Netlify/Vercel. Custom servers are harder.

**Price**: Free tier is limited (tokens), then $20+/month.

## Bolt.new vs Claude Code

| | Bolt.new | Claude Code |
|--|--|--|
| Start | 0 setup | Needs installation |
| Speed | Instant prototype | Slightly slower |
| Control | Limited | Full |
| Projects | Small/medium | Any size |
| Price | Limited free | Included in Claude |

Rule of thumb: **Bolt.new for starting and prototyping, Claude Code for production**.`,

  "21-2": `# Practice: Build a Landing Page in Bolt.new in 20 Minutes

The best way to understand a tool is to build a real project. Let's create a landing page for an imaginary SaaS product.

## Preparation

Open [bolt.new](https://bolt.new) in your browser. Sign in (via GitHub).

## Step 1: First Prompt

In the input field, write a detailed description:

\`\`\`
Create a landing page for a SaaS product called "TaskFlow" — a task management tool for teams.

Page structure:
1. Hero section — headline "Manage your team without the chaos", subheadline, CTA buttons
2. Section with 3 key features (cards with icons)
3. Pricing section (3 plans: Free, Pro $19, Team $49)
4. Testimonials section (3 cards)
5. Footer with links

Stack: React + Tailwind CSS
Design: dark, modern, purple-blue palette
Should look professional and convincing
\`\`\`

## Step 2: Iterate

Bolt.new will create the first version in 1–2 minutes. Now let's improve:

\`\`\`
Add a gradient background in the hero section (from dark blue to purple).
Make the buttons more prominent — add a glow effect on hover.
Add scroll-triggered section animations.
\`\`\`

## Step 3: Add Realism

\`\`\`
Replace icons with Lucide React icons (they should already be in the project).
Add real avatars in the testimonials section — use UI Avatars API.
Add an email signup form in the footer.
\`\`\`

## Step 4: Mobile Version

\`\`\`
Check how it looks on mobile (320px).
Fix the navigation — add a hamburger menu for mobile.
\`\`\`

## What You Get

In 20 minutes and 4 iterations — a complete landing page that looks like it was made by a designer.

## Download and Continue Locally

Bolt.new has a **Download** button — downloads the entire project as a zip.

After downloading:
\`\`\`bash
cd taskflow-landing
npm install
npm run dev
\`\`\`

Now you can work on the project locally in VS Code + Claude Code.

## Takeaway

Bolt.new is ideal for:
- Quick project starts
- Demonstrating a concept
- Learning (you see results immediately)

After prototyping — move to a local environment for serious development.`,

  "21-3": `# Lovable — Build Apps with Text and Voice

Lovable (lovable.dev) is another AI app builder, a competitor to Bolt.new. Lovable's focus is on creating "lovable" products that look professional out of the box.

## How Lovable Differs from Bolt.new

**Bolt.new** — more technical, for developers who want control over the code.

**Lovable** — more product-focused, emphasis on beautiful UI and fast results.

| | Bolt.new | Lovable |
|--|--|--|
| Audience | Dev-oriented | Product-oriented |
| UI quality | Good | Excellent out of the box |
| Code flexibility | High | Medium |
| Best for | Prototypes with code | Beautiful applications |
| GitHub integration | Yes | Yes |
| Deployment | Netlify, Vercel | Lovable hosting |

## How Lovable Works

1. Open [lovable.dev](https://lovable.dev)
2. Describe your application
3. Lovable generates a React + Tailwind + shadcn/ui app
4. Iterate through chat
5. Deploy with one click

## Lovable's Strengths

**shadcn/ui out of the box**: Lovable uses shadcn/ui components — this means professional design without effort.

**Backend integration**: Lovable integrates well with Supabase — database, authentication, storage.

**Design by default**: Generates beautiful interfaces without detailed design descriptions.

## Example: Create a Dashboard

\`\`\`
Create a dashboard for e-commerce analytics:
- Metric cards (sales, orders, conversion, AOV)
- Line chart of sales over 30 days
- Table of recent orders
- Sidebar navigation

Use a dark theme, professional appearance.
\`\`\`

In 2–3 minutes — a complete dashboard with real UI components.

## Supabase Integration

Lovable can configure Supabase automatically:

\`\`\`
Add email/password authentication.
Create an orders table in Supabase and connect it to the orders table.
\`\`\`

Lovable will:
- Create the schema in Supabase
- Write the queries
- Set up authentication

## When to Choose Lovable Over Bolt.new

→ Want beautiful UI without effort → Lovable
→ Need quick Supabase integration → Lovable
→ Need more control over the code → Bolt.new
→ Want to download and customize locally → Bolt.new`,

  "21-4": `# When to Use What — The Final Guide

You've met all 4 tools. Now the most important thing — knowing when to reach for each one.

## Quick Reference

\`\`\`
Task                                   Tool
────────────────────────────────────────────────────
Show an idea to a client in an hour    Bolt.new
Beautiful UI prototype                 Lovable
Working MVP over a weekend             Bolt.new or Lovable
Serious production project             VS Code + Claude Code
Large codebase refactoring             VS Code + Claude Code
Iterative work on a feature            Cursor
New feature on autopilot               Windsurf Cascade
Learning and want to see results       Bolt.new
\`\`\`

## Typical Developer Paths

### Path 1: Fast Startup

\`\`\`
1. Bolt.new/Lovable → prototype in a day (show investors/clients)
2. VS Code + Claude Code → turn prototype into production
3. Cursor/Windsurf → daily feature development
\`\`\`

### Path 2: Learning

\`\`\`
1. Bolt.new → first projects, see what code looks like
2. Cursor → learn to understand and modify code
3. VS Code + Claude Code → full control
\`\`\`

### Path 3: Freelancer

\`\`\`
1. Bolt.new → fast landing pages for clients
2. VS Code + Claude Code → complex projects with custom logic
3. Windsurf → autonomous development when you have many tasks
\`\`\`

## Core Principles

**Don't wait for the "perfect" tool**: Pick any and start building a project. The right tool reveals itself in the process, not before it.

**Tools complement each other**: There's no rule "use only one." Professionals mix tools based on the task.

**Context decides everything**: Bolt.new for a prototype and VS Code for production — that's not a contradiction, that's a smart workflow.

**Mastery lies in describing tasks**: Whatever tool you choose — the ability to clearly describe a task to AI matters more than the tool itself. This is a universal skill.

## What's Next

You've completed the entire developer tools block. Now you have:
- VS Code and Claude Code for professional work
- Cursor for AI-native development in a familiar interface
- Windsurf for maximum automation
- Bolt.new and Lovable for quick prototypes

Move on to the final projects — apply everything you've learned in practice.`,

};
