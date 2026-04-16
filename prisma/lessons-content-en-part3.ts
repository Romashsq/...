// English lesson content — VibeCode Academy — Part 3 (modules 11-16)

export const LESSON_CONTENT_EN_PART3: Record<string, string> = {

  // ─── MODULE 11 — INSTALLATION AND FIRST RUN ───

  "11-1": `# Installing VS Code and the Claude Code Extension

Welcome to the practical part of the course. In this lesson you will set up your main working environment from scratch.

## Why VS Code?

VS Code (Visual Studio Code) is the most popular code editor in the world — free, fast, and supported by thousands of extensions. Claude Code was built to work inside VS Code, so this is the natural starting point.

## Step 1 — Download and Install VS Code

1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Click the big **Download** button — it detects your OS automatically
3. Run the installer and accept the default options
4. On Windows, check **"Add to PATH"** during installation — this lets you open VS Code from the terminal

After installation, launch VS Code. You will see the Welcome tab.

## Step 2 — Install the Claude Code Extension

1. Open the **Extensions** panel: click the square icon in the left sidebar, or press \`Ctrl+Shift+X\` (Mac: \`Cmd+Shift+X\`)
2. Search for **"Claude Code"**
3. Click **Install** on the extension published by Anthropic

The extension adds a Claude icon to the Activity Bar on the left.

## Step 3 — Sign In

Click the Claude icon. You will be prompted to authenticate:

- If you have a **Claude.ai Pro or Team subscription** — click "Sign in with Claude.ai" and follow the browser flow
- If you use an **API key** — paste it into the key field and press Enter

Authentication happens once; your credentials are stored securely in the OS keychain.

## What You Now Have

| Component | Purpose |
|-----------|---------|
| VS Code | Editor, file manager, terminal |
| Claude Code extension | AI chat panel inside the editor |
| Authentication | Links the extension to your Claude subscription |

## Practical Check

Open any folder (\`File → Open Folder\`), then click the Claude icon and type:

\`\`\`
Hello! What files do you see in this project?
\`\`\`

If Claude responds with a list of files, everything is working correctly.

## Summary

You installed VS Code, added the Claude Code extension, and authenticated your account. In the next lesson you will learn an alternative installation method through the terminal — useful when you want to use Claude Code outside VS Code or in CI pipelines.
`,

  "11-2": `# Terminal Installation — npm install @anthropic-ai/claude-code

The VS Code extension is convenient, but Claude Code is also a standalone CLI tool that you can run directly in any terminal.

## Why Use the Terminal Version?

- Works in any editor — Vim, Neovim, Emacs, JetBrains IDEs, or no editor at all
- Runs in SSH sessions on remote servers
- Can be triggered from scripts, CI pipelines, and cron jobs
- Slightly faster startup than the extension for quick one-off tasks

## Prerequisites

You need Node.js 18 or newer. Check your version:

\`\`\`bash
node --version
# Should print v18.x.x or higher
\`\`\`

If Node.js is not installed, download it from [nodejs.org](https://nodejs.org) (choose the LTS version).

## Installation

Install Claude Code globally so the \`claude\` command is available everywhere:

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

Verify the installation:

\`\`\`bash
claude --version
# Prints something like: 1.x.x
\`\`\`

## First Launch

Navigate to your project folder and run:

\`\`\`bash
cd my-project
claude
\`\`\`

On the first run, Claude Code will ask you to authenticate. Follow the same steps as in the extension — either sign in via Claude.ai or enter your API key.

## Useful CLI Flags

\`\`\`bash
# One-off question, no interactive session
claude -p "What does this project do?"

# Pipe file content to Claude
cat README.md | claude -p "Summarize this"

# Run without any permissions prompts (automation mode)
claude --dangerously-skip-permissions -p "Run tests and fix failures"
\`\`\`

## Updating

\`\`\`bash
npm update -g @anthropic-ai/claude-code
\`\`\`

## Extension vs CLI — Quick Comparison

| Feature | Extension | CLI |
|---------|-----------|-----|
| Needs VS Code | Yes | No |
| Works in SSH | No | Yes |
| Scriptable | Limited | Full |
| File tree sidebar | Yes | No |
| Setup effort | Minimal | Minimal |

## Summary

You now have two ways to use Claude Code: the VS Code extension for daily interactive work, and the CLI tool for automation and remote sessions. Most developers use both depending on the context.
`,

  "11-3": `# What is an IDE — Explained for Beginners

Before diving deeper into Claude Code, let's make sure you understand what an IDE is and how all the pieces connect.

## IDE — Four Tools in One

IDE stands for **Integrated Development Environment**. Think of it as four separate tools merged into a single window:

\`\`\`
┌─────────────────────────────────────────┐
│  IDE                                    │
│  ┌──────────┐  ┌──────────────────────┐ │
│  │  File    │  │   Code Editor        │ │
│  │ Explorer │  │   (with syntax       │ │
│  │          │  │    highlighting)     │ │
│  └──────────┘  └──────────────────────┘ │
│  ┌──────────┐  ┌──────────────────────┐ │
│  │ Terminal │  │   AI Chat            │ │
│  │  (bash)  │  │   (Claude Code)      │ │
│  └──────────┘  └──────────────────────┘ │
└─────────────────────────────────────────┘
\`\`\`

### 1. File Explorer
The left sidebar shows your project's folder and file structure. You can create, rename, and delete files here — exactly like Windows Explorer or macOS Finder, but integrated into the editor.

### 2. Code Editor
The central area where you write code. It understands programming languages: it colors keywords, underlines errors, and suggests completions as you type.

### 3. Terminal
A command-line interface embedded in the IDE. You run programs, install packages, and execute git commands here without leaving the editor window.

### 4. AI Chat (Claude Code)
The fourth panel — and the newest one. Claude reads your files, understands your project, and makes changes directly. It replaces hours of searching documentation and copying code from Stack Overflow.

## How They Work Together

Here is a typical workflow:

1. **File Explorer** — you open your project folder
2. **Editor** — you look at the code and notice a bug
3. **AI Chat** — you tell Claude "fix the bug on line 42 in auth.ts"
4. **Terminal** — Claude runs \`npm test\` to verify the fix works
5. **Editor** — you review the changes Claude made

All four tools communicate with each other. Claude can read any file in your project, run commands in the terminal, and edit code — all from the chat panel.

## VS Code Keyboard Shortcuts to Know

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Open terminal | \`Ctrl+\`\` | \`Cmd+\`\` |
| Open file explorer | \`Ctrl+Shift+E\` | \`Cmd+Shift+E\` |
| Find file by name | \`Ctrl+P\` | \`Cmd+P\` |
| Open AI chat | Click Claude icon | Click Claude icon |
| Command palette | \`Ctrl+Shift+P\` | \`Cmd+Shift+P\` |

## Summary

An IDE is not just a text editor — it is a complete workstation. For vibe coding with Claude Code, VS Code serves as the environment where all the magic happens: you describe what you want, and Claude uses the editor and terminal to make it real.
`,

  "11-4": `# Terminal vs Extension — Which One to Choose

You have two ways to run Claude Code. This lesson helps you decide which one to use and when.

## The Core Difference

The **VS Code extension** adds a chat panel inside the editor. The **CLI tool** (terminal) is a standalone program you run from the command line. Both connect to the same Claude model and have identical capabilities — the difference is in where and how you interact.

## VS Code Extension — Best For

**Daily interactive development:**

- You are actively writing or refactoring code
- You want to see file changes highlighted in the editor as Claude makes them
- You need to review diffs before accepting
- You work on a single machine with a graphical interface

**Typical session:**
\`\`\`
1. Open project in VS Code
2. Click Claude icon in sidebar
3. Chat: "Add input validation to the registration form"
4. Review the diff in the editor
5. Accept or reject changes
\`\`\`

## Terminal (CLI) — Best For

**Automation and remote work:**

- Running Claude from scripts or Makefiles
- SSH into a remote server (no GUI available)
- CI/CD pipelines — let Claude fix failing tests automatically
- Processing many files in batch mode
- Combining Claude with other CLI tools via pipes

**Example — automated code review in CI:**
\`\`\`bash
# In GitHub Actions or similar
claude -p "Review the changed files and report any security issues" \
  --output-format json > review.json
\`\`\`

**Example — quick one-liner:**
\`\`\`bash
claude -p "Generate a .gitignore for a Node.js project" > .gitignore
\`\`\`

## Side-by-Side Comparison

| Scenario | Extension | CLI |
|----------|-----------|-----|
| Interactive coding session | Best | Good |
| Viewing diffs visually | Yes | No |
| Remote/SSH work | No | Yes |
| Automation scripts | No | Yes |
| No VS Code installed | No | Yes |
| Pipe output to other tools | No | Yes |

## Real-World Answer

Most professional vibe coders use **both**:

- Extension during active development sessions
- CLI for automation, remote servers, and one-off tasks

Install both (from the previous two lessons), and switch naturally depending on where you are working.

## Practical Tips

- If you are new, start with the **extension** — the visual feedback makes it easier to understand what Claude is doing
- Learn the CLI flags (\`-p\`, \`--dangerously-skip-permissions\`) when you are comfortable — they unlock powerful automation patterns

## Summary

There is no wrong choice. Use the extension when you want a visual interface, use the CLI when you need automation or remote access. The skill is knowing which tool fits each situation.
`,

  "11-5": `# Voice Input — Talking to the Agent Out Loud

Typing is fast, but speaking is faster — especially when you are describing complex logic or walking through a long task. Claude Code supports voice input through two methods.

## Why Voice Input Matters

- Describe a feature naturally without stopping to find the right keywords
- Dictate long CLAUDE.md instructions in seconds
- Work hands-free when your hands are busy (whiteboarding, taking notes)
- Reduce repetitive strain from typing

## Method 1 — AquaVoice (Recommended)

AquaVoice is a dedicated dictation app for macOS that integrates with any application, including VS Code and the terminal.

**Setup:**
1. Download AquaVoice from [aqua.computer/aquavoice](https://aqua.computer/aquavoice)
2. Install and grant microphone permissions
3. Set a push-to-talk shortcut (e.g. \`Right Option\` key)

**Usage:**
1. Click in the Claude Code chat input field
2. Hold your push-to-talk key
3. Speak your prompt
4. Release the key — AquaVoice transcribes and types the text

AquaVoice uses a local or cloud transcription model. It handles technical vocabulary well — "TypeScript", "async/await", "npm install" — because it is trained on developer language.

## Method 2 — Built-in Voice Mode in Terminal

When using Claude Code in the terminal, you can enable voice mode directly:

\`\`\`bash
claude --voice
\`\`\`

This activates a built-in push-to-talk mode. Press \`Space\` to start speaking, release to send.

**Requirements:**
- Node.js 20+ recommended
- Microphone access granted to the terminal application

## Method 3 — OS Built-in Dictation

Both macOS and Windows have built-in dictation that works in any text field:

- **macOS**: Press \`Fn\` twice (or \`Fn+D\` on newer keyboards) to toggle dictation
- **Windows**: Press \`Win+H\` to activate voice typing

These are less accurate for code-specific vocabulary but require no extra software.

## Tips for Better Voice Prompts

\`\`\`
Bad:  "um, so like, can you make the button blue?"
Good: "Change the Submit button background color to blue-600 in the Tailwind class"

Bad:  "fix the thing"
Good: "Fix the TypeScript error in src/lib/auth.ts on line 34"
\`\`\`

Speak as if you are writing — complete sentences with specific details.

## Voice + Vibe Coding Workflow

\`\`\`
1. Hold push-to-talk
2. "Create a REST API endpoint for user registration with email and password validation"
3. Release — Claude receives the full prompt
4. Review the code Claude generates
5. Voice: "Looks good, now add rate limiting — max 5 requests per minute per IP"
\`\`\`

## Summary

Voice input turns Claude Code into a true conversation partner. Start with your OS's built-in dictation to try it out, then switch to AquaVoice or the built-in \`--voice\` flag for a smoother experience. Once you get comfortable speaking your prompts, it becomes hard to go back to typing everything.
`,

  // ─── MODULE 12 — INTERFACE AND MODES ───

  "12-1": `# Claude Code Interface Overview

Before using the advanced modes, spend five minutes learning the interface. Knowing where everything is saves time and prevents frustration.

## The Main Chat Panel

When you open Claude Code (click the Claude icon in VS Code's Activity Bar), you see a chat panel divided into several areas:

\`\`\`
┌─────────────────────────────────────────┐
│  [Model selector]  [New conversation +] │  ← Top bar
├─────────────────────────────────────────┤
│                                         │
│   Conversation history                  │  ← Message thread
│                                         │
├─────────────────────────────────────────┤
│  [Attach file] [Voice] [Settings]       │  ← Toolbar
│  ┌───────────────────────────────────┐  │
│  │  Type a message...                │  │  ← Input field
│  └───────────────────────────────────┘  │
│  [Mode selector]              [Send ↵]  │  ← Bottom bar
└─────────────────────────────────────────┘
\`\`\`

## Top Bar

**Model selector** — click to switch between Claude models:
- **Claude Sonnet** — balanced speed and intelligence (use for most tasks)
- **Claude Opus** — most capable, slower (use for architecture decisions)
- **Claude Haiku** — fastest, cheapest (use for simple edits)

**New conversation** (+) — starts a fresh session, clearing the context window. Use this when switching to a completely different task.

## Conversation History

Each turn shows:
- Your message (right-aligned, darker background)
- Claude's response (left-aligned)
- Tool calls Claude made — file reads, edits, terminal commands — shown as collapsible blocks
- Diff view for file changes (green = added, red = removed)

Scroll up to review earlier exchanges. Long conversations can be collapsed.

## Toolbar

- **Attach file** (paperclip icon) — add a file to the context manually. Useful when Claude needs to read a file that is not in the project.
- **Voice** (microphone icon) — push-to-talk voice input (covered in lesson 11-5)
- **Settings** (gear icon) — opens Claude Code preferences

## Bottom Bar — Mode Selector

This is where you choose how Claude handles permissions. Click the mode name to cycle through options:

| Mode | What it does |
|------|-------------|
| Ask Before Edits | Asks permission before every file change |
| Edit Automatic | Edits files freely, asks before running commands |
| Bypass Permissions | Does everything without asking |

Modes are covered in detail in lessons 12-2 through 12-4.

## Account Usage Indicator

At the bottom, a small indicator shows your current usage against your plan limit. Hover for details. When you approach the limit, Claude Code will warn you.

## Status Line

When Claude is working on a multi-step task, the status line shows:
- Current action (reading file, editing, running command)
- Context window usage (tokens used / total)
- Estimated cost (on API key plans)

## Summary

Take two minutes to explore each part of the interface before moving on. Familiarity with the layout makes the rest of the module — covering the different modes — much easier to follow.
`,

  "12-2": `# Ask Before Edits Mode — Control Every Step

Ask Before Edits is Claude Code's most cautious mode. The agent proposes every action and waits for your approval before doing anything.

## How It Works

When you send a message in this mode, Claude will:

1. Analyze your request
2. Plan what it needs to do
3. Show you each proposed action — one at a time
4. Wait for you to click **Allow** or **Deny**

Example interaction:

\`\`\`
You: "Add a loading spinner to the login button"

Claude: "I'd like to read src/components/auth/LoginForm.tsx"
        [Allow] [Deny]

→ You click Allow

Claude: "I'd like to edit src/components/auth/LoginForm.tsx"
        [View diff] [Allow] [Deny]

→ You review the diff, click Allow

Claude: Done! I added a loading state with a spinner...
\`\`\`

## When to Use This Mode

**Learning and exploration:**
- When you are new to a codebase and want to see exactly what Claude changes
- When you are learning how Claude approaches certain problems
- When you want to understand the structure of an unfamiliar project

**High-stakes changes:**
- Production configurations
- Database migrations
- Security-sensitive code (authentication, authorization)
- Any change you cannot easily undo

**Code review practice:**
- Force yourself to review every diff before accepting
- Good habit for junior developers learning best practices

## Practical Example

\`\`\`
Scenario: You just opened someone else's project for the first time

Mode: Ask Before Edits
Prompt: "Understand this project and refactor the API layer to use async/await"

Claude will:
1. Ask to read package.json → you approve → understand the stack
2. Ask to read each API file → you approve → you learn the structure
3. Propose each refactored file → you review each diff carefully
4. Ask to run tests → you approve → verify nothing broke
\`\`\`

## Approving and Denying

- **Allow** — proceeds with the action
- **Deny** — skips this action; Claude adapts its plan
- **Allow All for This Session** — temporarily switches to Edit Automatic mode until you start a new conversation

## Tip: Use Ask Mode to Understand, Not Just to Approve

Most developers click Allow on autopilot and miss the learning opportunity. When Claude shows you a diff:
- Read the change
- Understand why Claude made it that way
- If it looks wrong, deny and explain in the chat what you expected instead

## Summary

Ask Before Edits is the safest mode and the best one for learning. It slows you down intentionally, which is valuable when accuracy and understanding matter more than speed.
`,

  "12-3": `# Edit Automatic Mode — Smart Autopilot

Edit Automatic is the mode most developers use for day-to-day work. Claude makes file changes freely but asks before running terminal commands.

## The Philosophy Behind This Mode

File edits are generally safe — you can always undo them with \`Ctrl+Z\` or revert with git. Terminal commands can have side effects: deleting files, publishing packages, sending emails. Edit Automatic reflects this: automate the safe things, confirm the risky ones.

## What Claude Does Without Asking

- Read any file in the project
- Create new files
- Edit existing files
- Search through the codebase (grep, find)
- Analyze code structure

## What Claude Still Asks Before Doing

- Running any terminal command (\`npm install\`, \`git push\`, \`rm\`, etc.)
- Running test suites
- Executing database migrations
- Starting or stopping servers

## Example Session

\`\`\`
You: "Rename all instances of 'userId' to 'accountId' across the codebase"

Claude: [silently reads 47 files]
        [silently edits 12 files that contained 'userId']

Claude: "I've updated 12 files. I'd also like to run the test suite
         to verify nothing broke. May I run: npm test"
        [Allow] [Deny]
\`\`\`

Notice: no permission prompts for reading and editing — only for the terminal command.

## Speed Advantage

For a typical refactoring task (renaming, restructuring, adding a feature), Edit Automatic is 3-5x faster than Ask Before Edits because you are not clicking Allow on every file read and every small edit.

## Reviewing Changes After the Fact

Since Claude edits files without asking, you should review changes using git:

\`\`\`bash
git diff
\`\`\`

Or in VS Code, open the **Source Control** panel (\`Ctrl+Shift+G\`) to see all modified files with inline diffs.

## Undoing Changes

If Claude made a change you don't like:

\`\`\`bash
# Undo all changes since last commit
git checkout .

# Undo changes to a specific file
git checkout -- src/lib/auth.ts

# Or use VS Code's undo (works for recent changes)
Ctrl+Z  (in the edited file)
\`\`\`

## Best Practice: Commit Before Starting

Before a large AI-assisted session, always commit your current state:

\`\`\`bash
git add -A && git commit -m "WIP: before Claude refactoring session"
\`\`\`

This gives you a clean restore point.

## Summary

Edit Automatic is the sweet spot for most coding tasks. Fast enough to be productive, cautious enough to prevent accidental \`rm -rf\` disasters. Use it as your default mode and switch to Ask mode when you need to learn or to Bypass mode when you need full automation.
`,

  "12-4": `# Bypass Permissions — Full Autopilot

Bypass Permissions is the most powerful mode in Claude Code. The agent executes every action — file edits, terminal commands, running scripts — without asking for confirmation.

## What "Bypass" Actually Means

In all other modes, Claude asks before running terminal commands. With Bypass Permissions enabled, Claude acts like an autonomous programmer who has full access to your machine and project:

- Reads files ✓ (no prompt)
- Edits files ✓ (no prompt)
- Runs \`npm install\` ✓ (no prompt)
- Runs \`git commit\` ✓ (no prompt)
- Runs \`npm run build\` ✓ (no prompt)
- Runs \`node scripts/migrate.ts\` ✓ (no prompt)

## Enabling Bypass Permissions

**In the VS Code extension:**
Click the mode selector at the bottom of the chat panel and select "Bypass Permissions".

**In the CLI:**
\`\`\`bash
claude --dangerously-skip-permissions
\`\`\`

The word "dangerously" in the flag name is intentional — a reminder that you are granting significant autonomy.

## When to Use It

**Best use cases:**

\`\`\`
✓ Greenfield projects — building something new from scratch
✓ Isolated branches — changes are contained, easy to discard
✓ Automated CI tasks — no human available to click Allow
✓ Repetitive batch work — generating many files, mass updates
✓ Trusted, well-defined tasks with a clear stopping condition
\`\`\`

**When NOT to use it:**

\`\`\`
✗ Production environments — risk of accidental data changes
✗ When the task is vague — Claude may go in the wrong direction
✗ When you haven't committed recent work — easy to lose changes
✗ Unfamiliar codebases — you won't know if something goes wrong
\`\`\`

## Safety Checklist Before Using Bypass Mode

\`\`\`
[ ] I have committed all important work (git commit)
[ ] I am on a feature branch, not main/master
[ ] The task has a clear, specific goal
[ ] I understand the codebase well enough to review the result
[ ] I can easily revert if something goes wrong
\`\`\`

## Example — Greenfield Project

\`\`\`bash
mkdir my-saas && cd my-saas && git init
claude --dangerously-skip-permissions

> Build a Next.js 14 SaaS boilerplate with:
> - Auth (NextAuth with Google + email)
> - Prisma + PostgreSQL
> - Stripe subscription billing
> - Dashboard with usage stats
> - Tailwind CSS + shadcn components
> Follow best practices. Create the full project structure.
\`\`\`

Claude will: create files, install packages, set up configs, run \`npx prisma generate\` — all without interruption.

## Watching Claude Work

Even in Bypass mode, you can monitor what Claude is doing. Watch the terminal output and the conversation thread — every action is logged. If something looks wrong, type \`stop\` or press \`Ctrl+C\`.

## Summary

Bypass Permissions unlocks Claude's full autonomy. Use it strategically on well-defined tasks in safe environments. The productivity gain is enormous — building a feature that takes 4 manual hours can complete in 20 minutes of supervised automation.
`,

  "12-5": `# Plan Mode — Plan First, Then Act

Plan Mode introduces a "think before you act" step. Claude drafts a complete action plan and presents it for your review before writing a single line of code.

## How Plan Mode Works

\`\`\`
Normal flow:     Prompt → Claude acts immediately
Plan Mode flow:  Prompt → Claude writes plan → You review → Claude acts
\`\`\`

When you enable Plan Mode and send a prompt, Claude responds with a structured plan:

\`\`\`
## Plan: Add user authentication to the API

1. Read current API structure (src/api/, src/middleware/)
2. Install jsonwebtoken and bcryptjs
3. Create src/lib/auth.ts — JWT signing and verification helpers
4. Create src/middleware/auth.ts — Express middleware to validate tokens
5. Create POST /api/auth/register — validate input, hash password, save user
6. Create POST /api/auth/login — verify password, return JWT
7. Protect existing routes by adding the auth middleware
8. Add integration tests in tests/auth.test.ts
9. Run tests to verify all pass

Estimated files changed: 8
Estimated time: ~3 minutes

Shall I proceed?
\`\`\`

You can then:
- **Approve** — Claude executes the plan
- **Edit the plan** — type changes, Claude adjusts before acting
- **Reject** — ask for a different approach

## Enabling Plan Mode

**In the VS Code extension:**
Click the mode selector → "Plan Mode"

**In the CLI:**
\`\`\`bash
claude --plan
\`\`\`

## Why Plan Mode Produces Better Results

When Claude plans first, it:
1. Discovers dependencies it would have missed acting immediately
2. Identifies the correct order of operations
3. Catches contradictions in your request before any code is written
4. Gives you a chance to correct misunderstandings early (cheaply)

Fixing a misunderstanding in the plan takes 10 seconds. Fixing it after 50 files have been changed takes much longer.

## Real Example — Catching a Problem Early

\`\`\`
Prompt: "Migrate our user authentication from JWT to sessions"

Plan:
1. Remove jsonwebtoken dependency
2. Install express-session and connect-pg-simple
3. Replace JWT middleware with session middleware
4. Update all route handlers that read req.user
...

You notice: "Wait, we don't have PostgreSQL — we use Redis for sessions"

You type: "Change step 2 to use connect-redis instead"

Claude updates the plan → you approve → correct implementation
\`\`\`

## Best Use Cases for Plan Mode

| Task Type | Why Plan Mode Helps |
|-----------|-------------------|
| Large features (10+ files) | Reveals the full scope before you commit |
| Unfamiliar codebase | See what Claude will touch before it touches it |
| Architectural changes | Verify the approach before deep changes |
| Teaching / explaining | The plan is itself educational |

## Summary

Plan Mode adds a valuable review step for complex tasks. The small time investment — reading a plan and possibly adjusting it — consistently produces cleaner, more correct implementations than jumping straight into execution. Use it whenever a task spans multiple files or requires architectural decisions.
`,

  "12-6": `# Thinking Mode and Fast Mode

Claude Code offers two additional modes that control how much computational effort Claude puts into each response. Understanding them helps you optimize for speed or depth depending on the task.

## Thinking Mode — Deep Reasoning

Thinking Mode (sometimes called Extended Thinking) activates a longer reasoning process before Claude responds. Under the hood, Claude uses a chain-of-thought approach: it "thinks aloud" through the problem before generating the final answer.

**How to enable:**
Click the mode selector → "Thinking" or use the command palette: \`Think carefully about this before responding\`.

In the Claude Code settings you can set the thinking budget — how many internal reasoning tokens Claude uses. Higher budget = deeper thinking = slower response.

**What it changes:**

\`\`\`
Standard mode:
  Prompt → Response (1-5 seconds)

Thinking Mode (medium budget):
  Prompt → [Claude reasons for ~10s] → Response (10-20 seconds)

Thinking Mode (high budget):
  Prompt → [Claude reasons for ~30s] → Response (30-60 seconds)
\`\`\`

**When Thinking Mode pays off:**

- Complex algorithm design (sorting, graph traversal, optimization)
- Architecture decisions with many trade-offs
- Debugging subtle race conditions or edge cases
- Security analysis — finding non-obvious vulnerabilities
- Math-heavy problems

**When it is overkill:**

- Adding a CSS class
- Renaming a variable
- Generating a standard CRUD endpoint
- Simple text transformations

## Fast Mode — Maximum Speed

Fast Mode is the opposite of Thinking Mode. It uses Claude Haiku (the fastest, most lightweight model in the Claude family) and skips extended reasoning entirely.

**Characteristics:**
- Response time: 1-3 seconds for most tasks
- Cost: ~5x cheaper than Sonnet per token
- Quality: Slightly lower for complex reasoning, equal for simple tasks

**Enable via:**
Model selector → "Haiku" or mode selector → "Fast"

**Best use cases for Fast Mode:**

\`\`\`
✓ Autocomplete-style suggestions
✓ Simple variable renames
✓ Adding missing imports
✓ Reformatting code (prettier-style)
✓ Writing docstrings for simple functions
✓ Generating boilerplate from a template
\`\`\`

## Choosing the Right Mode

\`\`\`
Task complexity:   Simple  ←───────────────────→  Complex
Recommended mode:  Fast       Sonnet (default)     Thinking
Response time:     ~2s         ~5-15s              ~15-60s
\`\`\`

## Practical Workflow

Many experienced Claude Code users switch modes within a session:

1. **Thinking Mode** — "Design the database schema for a multi-tenant SaaS"
2. **Standard (Sonnet)** — "Implement the schema in Prisma"
3. **Fast Mode** — "Add JSDoc comments to all the new functions"

This maximizes quality where it matters and speed where it doesn't.

## Summary

Thinking Mode trades speed for reasoning depth — use it for hard problems. Fast Mode trades some intelligence for near-instant responses — use it for simple, repetitive tasks. Sonnet (the default) handles the vast majority of everyday coding work optimally. Switch deliberately based on what the task actually demands.
`,

  // ─── MODULE 13 — CLAUDE.MD ───

  "13-1": `# What is CLAUDE.md and Why You Need It

Every time you start a conversation with Claude Code, the agent has no memory of previous sessions. CLAUDE.md solves this problem — it is a persistent instruction file that Claude reads automatically at the start of every conversation.

## The Core Concept

Think of CLAUDE.md as a permanent system prompt for your project. It tells Claude:
- What the project does
- How the codebase is structured
- What tech stack is being used
- What coding conventions to follow
- What to never do

\`\`\`
Without CLAUDE.md:
  Session 1: "We use TypeScript strictly, no any types"
  Session 2: Claude has forgotten — uses any types freely
  Session 3: You explain again...

With CLAUDE.md:
  Every session: Claude reads CLAUDE.md → already knows the rules
\`\`\`

## How Claude Reads CLAUDE.md

When you start a conversation in a project folder:
1. Claude Code automatically finds \`CLAUDE.md\` in the project root
2. Loads its content into the context window (before your first message)
3. Follows those instructions for the entire session

The file is always read — you never need to mention it or attach it manually.

## What Goes in CLAUDE.md

\`\`\`markdown
# Project Overview
Brief description of what this project is and what it does.

## Tech Stack
- Language, frameworks, libraries
- Database and ORM
- Key dependencies

## Project Structure
Describe the folder organization.

## Coding Conventions
Rules Claude must follow when writing code.

## Important Constraints
Things Claude must never do.

## Common Commands
Commands Claude can run (npm scripts, etc.)
\`\`\`

## A Minimal Real Example

\`\`\`markdown
# TaskFlow API

Node.js REST API for task management. Express + TypeScript + PostgreSQL.

## Stack
- Express 4, TypeScript 5 (strict mode)
- Prisma ORM, PostgreSQL
- Jest for testing

## Conventions
- All functions must be typed — no implicit any
- Use async/await, never callbacks
- Validate all inputs with Zod schemas
- Every new endpoint needs a test

## Never Do
- Never use console.log (use the logger utility from src/lib/logger.ts)
- Never hardcode credentials
- Never skip error handling
\`\`\`

## Where to Put the File

Place \`CLAUDE.md\` in the root of your project (same level as \`package.json\`):

\`\`\`
my-project/
├── CLAUDE.md          ← here
├── package.json
├── src/
└── ...
\`\`\`

## Summary

CLAUDE.md is one of the highest-leverage things you can create for AI-assisted development. Spend 15 minutes writing a good one and you will save hours of re-explaining context across future sessions. The next lesson covers exactly what to write and how to structure it for maximum effect.
`,

  "13-2": `# Building CLAUDE.md from Scratch

A well-written CLAUDE.md transforms Claude from a generic assistant into a specialist who deeply understands your project. This lesson walks through building one section by section.

## Section 1 — Project Overview

One paragraph. Answer: what does this project do, who uses it, what is the primary goal?

\`\`\`markdown
# ProjectName

[ProjectName] is a B2B invoicing SaaS for freelancers. It handles invoice
creation, PDF generation, payment tracking, and client management.
The main goal is simplicity — one screen to create and send an invoice.
\`\`\`

Keep it short. Claude doesn't need a business plan — just enough context to understand what "correct" behavior looks like.

## Section 2 — Tech Stack

List the exact technologies with versions where version matters:

\`\`\`markdown
## Tech Stack
- **Runtime**: Node.js 20, TypeScript 5.4 (strict)
- **Framework**: Next.js 14.2 (App Router)
- **Database**: PostgreSQL 16 via Prisma 5
- **Auth**: NextAuth v5 (beta)
- **Styling**: Tailwind CSS 3.4
- **Email**: Resend
- **Payments**: Stripe
\`\`\`

Version specifics matter — Next.js 14 and Next.js 15 have different APIs.

## Section 3 — Project Structure

Describe the most important directories:

\`\`\`markdown
## Project Structure
\`\`\`
src/
  app/          # Next.js pages and API routes
    (auth)/     # Login, register pages
    (app)/      # Protected pages (dashboard, etc.)
    api/        # REST API endpoints
  components/   # Reusable React components
  lib/          # Utilities, services, helpers
  store/        # Zustand state stores
prisma/
  schema.prisma # Database schema
  seed.ts       # Seed data
\`\`\`
\`\`\`

## Section 4 — Coding Conventions

This is the most valuable section. Be specific and use examples:

\`\`\`markdown
## Coding Conventions

**TypeScript**
- Strict mode is on — never use \`any\` or \`as unknown as\`
- Always type function parameters and return values explicitly
- Use \`interface\` for object shapes, \`type\` for unions/aliases

**React**
- Server Components by default; only use \`"use client"\` when needed
- Interactive pages have a \`*-client.tsx\` wrapper pattern
- No prop drilling — use context or Zustand for shared state

**API Routes**
- Every route must call \`getServerSession()\` before touching data
- Validate all inputs with a Zod schema before using them
- Return \`{ error: string }\` for errors, data directly for success

**Error Handling**
- Never swallow errors silently
- Log errors with context: \`logger.error("auth failed", { userId, reason })\`
\`\`\`

## Section 5 — Commands

Tell Claude which npm scripts exist:

\`\`\`markdown
## Available Commands
\`\`\`bash
npm run dev          # Start development server
npm run build        # Production build
npm run test         # Run Jest test suite
npm run db:push      # Apply Prisma schema changes
npm run db:seed      # Seed the database
npm run db:studio    # Open Prisma Studio
npm run lint         # ESLint check
\`\`\`
\`\`\`

## Section 6 — Constraints and Warnings

\`\`\`markdown
## Important Constraints
- **NEVER** commit .env files
- **NEVER** write raw SQL — always use Prisma
- **NEVER** add npm packages without asking first
- Path alias \`@/*\` maps to \`./src/*\`
- \`next.config.mjs\` NOT \`.ts\` — Next.js 14 doesn't support config.ts
\`\`\`

## Keeping CLAUDE.md Current

Update it whenever you:
- Add a new major dependency
- Change a naming convention
- Add a new directory or architectural pattern
- Discover something Claude keeps getting wrong

A stale CLAUDE.md is worse than none — Claude will follow outdated instructions confidently.

## Summary

A good CLAUDE.md has 6 sections: project overview, tech stack, structure, conventions, commands, and constraints. Invest 20-30 minutes writing it properly. Every future session will benefit immediately.
`,

  "13-3": `# The /init Command — Auto-Generating CLAUDE.md

Writing CLAUDE.md manually is ideal for new projects. But what about existing projects with hundreds of files? The \`/init\` command lets Claude analyze your codebase and generate the file automatically.

## What /init Does

When you run \`/init\` in a project folder, Claude Code:

1. Scans the entire project structure
2. Reads key files: \`package.json\`, \`tsconfig.json\`, \`prisma/schema.prisma\`, \`README.md\`, config files
3. Analyzes code patterns in the \`src/\` directory
4. Generates a \`CLAUDE.md\` file that describes what it found

The whole process takes 30-60 seconds for a medium-sized project.

## Running /init

In the Claude Code chat panel, type:

\`\`\`
/init
\`\`\`

Or from the terminal:

\`\`\`bash
claude
> /init
\`\`\`

Claude will show its progress and then present the generated file for review.

## What a Generated CLAUDE.md Looks Like

\`\`\`markdown
# VibeCode Academy

Next.js 14 educational platform for AI/Vibe Coding. 10 modules, 58 lessons,
user progress tracking with XP and achievements.

## Tech Stack
- Next.js 14.2.18 (App Router), TypeScript, Tailwind CSS
- Prisma ORM + SQLite (dev) / PostgreSQL (prod)
- NextAuth v5 beta.25 (Credentials + Google)
- Zustand for client state, Framer Motion for animations
- react-markdown + remark-gfm for lesson rendering

## Key Files
- \`src/lib/auth.ts\` — NextAuth configuration
- \`src/lib/prisma.ts\` — Prisma singleton
- \`src/lib/gamification.ts\` — XP, streaks, achievements
- \`prisma/schema.prisma\` — Database schema

## Project Structure
\`src/app/(auth)/\` — Login and register pages
\`src/app/(app)/\` — Protected dashboard, courses, lessons
\`src/app/api/\` — REST endpoints
\`src/components/\` — Reusable components
...
\`\`\`

The generated file is a starting point, not the final version.

## Improving the Generated Output

After \`/init\` creates the file, review and add what Claude cannot infer:

**Things Claude discovers automatically:**
- Tech stack from package.json
- File structure from directory scan
- Database schema from prisma/schema.prisma
- Available npm scripts from package.json

**Things you must add manually:**
- Business context ("this is a B2B invoicing tool for freelancers")
- Coding conventions (what Claude should and shouldn't do)
- Architectural decisions and their reasoning
- Known gotchas and constraints
- Things Claude keeps getting wrong in your experience

## Iterating on CLAUDE.md

After generating, test it:

\`\`\`
You: "Add a new endpoint to GET /api/users/:id"

[Claude creates the endpoint]

You: Review the code — did it follow your conventions?
- Used getServerSession? ✓
- Validated input with Zod? ✗ (missing)
\`\`\`

If Claude missed something, add an explicit rule to CLAUDE.md:

\`\`\`markdown
## Conventions
- Every API route MUST validate path parameters with Zod
  (example: const { id } = userIdSchema.parse(params))
\`\`\`

## /init on Different Project Types

| Project | What /init detects well |
|---------|------------------------|
| Node.js / Next.js | Very well — reads package.json, tsconfig |
| Python | Well — reads requirements.txt, setup.py |
| Go | Well — reads go.mod |
| Plain HTML/CSS | Limited — no config files to read |

## Summary

Use \`/init\` when you take over an existing project or want a head start. Review and enhance the generated file by adding business context, coding rules, and project-specific constraints. A combination of auto-generation and manual polish produces the best results.
`,

  "13-4": `# The .claude Folder — Full Agent Customization

CLAUDE.md handles project instructions, but the \`.claude\` folder lets you go further: creating custom slash commands, defining specialized sub-agents, and storing persistent settings.

## Structure of the .claude Folder

\`\`\`
.claude/
├── settings.json     # Agent behavior settings
├── agents/           # Custom sub-agent definitions
│   ├── reviewer.md
│   ├── tester.md
│   └── architect.md
└── skills/           # Custom slash commands
    ├── deploy.md
    ├── review.md
    └── test.md
\`\`\`

Place \`.claude/\` in your project root alongside CLAUDE.md.

## settings.json — Behavior Configuration

\`\`\`json
{
  "defaultMode": "editAutomatic",
  "thinking": {
    "enabled": false,
    "budgetTokens": 5000
  },
  "permissions": {
    "allowedCommands": ["npm run", "git", "npx prisma"],
    "blockedCommands": ["rm -rf", "sudo"]
  },
  "context": {
    "autoInclude": ["CLAUDE.md", "src/lib/", "prisma/schema.prisma"]
  }
}
\`\`\`

## Skills — Custom Slash Commands

A skill is a markdown file that becomes a \`/command\` you can invoke in chat.

Create \`.claude/skills/review.md\`:

\`\`\`markdown
# /review

You are a senior code reviewer. When invoked:

1. Read all files changed since the last commit (run: git diff --name-only HEAD)
2. For each changed file, analyze:
   - Type safety — no any, proper interfaces
   - Error handling — no silent catches
   - Security — no SQL injection, no hardcoded secrets
   - Performance — no N+1 queries, no blocking operations
3. Write a review report in this format:
   ## File: [filename]
   **Issues**: [list or "None"]
   **Suggestions**: [list or "None"]
4. End with an overall rating: PASS / NEEDS WORK / REJECT
\`\`\`

Now in the chat you can type \`/review\` and Claude executes these exact instructions.

More skill examples:

\`\`\`markdown
# /deploy
Run: npm run build
If build passes, run: git add -A && git commit -m "deploy" && git push
Then notify: "Deployment pushed to origin"

# /test
Run: npm test -- --coverage
Analyze failures. Fix each failing test. Rerun until all pass.
Report final coverage percentage.
\`\`\`

## Agents — Specialized Sub-Agents

Agent files define personas with specific expertise. Create \`.claude/agents/tester.md\`:

\`\`\`markdown
# Tester Agent

You are a QA engineer specializing in automated testing.

## Your Responsibilities
- Write Jest unit tests for new functions
- Write integration tests for API endpoints
- Identify untested edge cases
- Maintain 80%+ code coverage

## Your Rules
- Test behavior, not implementation
- Each test must have a clear descriptive name
- Use arrange-act-assert pattern
- Never mock the database — use test fixtures instead

## Your Stack
- Jest + ts-jest
- Supertest for API testing
- Prisma test helpers from src/test/helpers.ts
\`\`\`

You invoke a sub-agent from the main Claude session:

\`\`\`
You: "Use the tester agent to write tests for the new payment module"

Claude (as orchestrator): [spawns tester sub-agent with the agent's instructions]
[tester agent writes tests]
[main agent reports back the results]
\`\`\`

## Building Your Agent Team

A typical team for a web project:

\`\`\`
.claude/agents/
├── architect.md    # Database schema, API design, architecture decisions
├── developer.md    # Feature implementation, refactoring
├── reviewer.md     # Code review, security analysis
├── tester.md       # Test writing and coverage
└── devops.md       # CI/CD, deployment, infrastructure
\`\`\`

Each agent has a narrow, well-defined role. Narrow focus produces better results than one "do everything" agent.

## Summary

The \`.claude\` folder extends CLAUDE.md into a complete agent configuration system. Skills turn repetitive workflows into single commands. Custom agents bring specialized expertise to your project. Together with CLAUDE.md, they create an AI team that deeply understands your codebase and follows your exact standards.
`,

  // ─── MODULE 14 — CONTEXT WINDOW ───

  "14-1": `# What is the Context Window — Explained Simply

The context window is the most important concept to understand about working effectively with AI agents. It determines what Claude "knows" during a conversation and why quality can degrade over long sessions.

## The RAM Analogy

Think of the context window as Claude's working memory — like RAM in a computer:

\`\`\`
Hard drive = Claude's training knowledge (everything it learned)
RAM (context window) = what Claude can actively think about right now
\`\`\`

Just as a computer with 8 GB of RAM can only run programs that fit in that 8 GB, Claude can only reason about information that fits within its context window.

## What is a Token?

The context window is measured in **tokens**, not words or characters.

As a rough guide:
- 1 token ≈ 4 characters of English text
- 100 tokens ≈ 75 words
- 1,000 tokens ≈ 750 words ≈ 1.5 pages

Code tends to use slightly more tokens than prose because of special characters and indentation.

## Context Window Sizes

| Claude Model | Context Window |
|-------------|----------------|
| Claude Haiku 3.5 | 200,000 tokens |
| Claude Sonnet 3.7 | 200,000 tokens |
| Claude Opus 4 | 200,000 tokens |

200,000 tokens is approximately 150,000 words — roughly 600 pages of text. That sounds enormous, but it fills up faster than you'd expect in a coding session.

## What Fills the Context Window

\`\`\`
┌─────────────────────────────────────────┐
│ CONTEXT WINDOW (200k tokens)            │
│                                         │
│ [CLAUDE.md] ≈ 2,000 tokens             │
│ [Conversation history] ≈ 10,000 tokens │
│ [Files Claude read] ≈ 50,000 tokens    │
│ [Tool call results] ≈ 5,000 tokens     │
│ [Your new message] ≈ 500 tokens        │
│                                         │
│ Remaining: ≈ 132,500 tokens            │
└─────────────────────────────────────────┘
\`\`\`

## What Happens When the Context Fills Up

When the context window approaches its limit:
1. Claude Code automatically compacts older parts of the conversation
2. Important information from earlier is summarized into a shorter form
3. Very old messages may be dropped entirely
4. The file contents Claude read earliest may be removed

This is called **context compaction** and it can cause Claude to "forget" things it seemed to know earlier.

## Practical Implications

**Short sessions, fresh contexts:**
- Claude has access to everything — maximum quality

**Long sessions (many files read, long conversation):**
- Claude may forget early decisions
- May re-read files it already processed
- May give inconsistent answers to questions it answered differently before

**The fix:** Start a new conversation for each distinct task. Do not use one long conversation for an entire day of work.

## Checking Context Usage

The status line at the bottom of the Claude Code panel shows:
\`\`\`
Context: 47,382 / 200,000 tokens (24%)
\`\`\`

When this approaches 70-80%, consider starting a fresh conversation.

## Summary

The context window is Claude's working memory. It is large but finite. Everything Claude can "see" in a conversation — your messages, files it read, its own responses — occupies this space. Understanding this helps you work with Claude more effectively, which is exactly what the next two lessons cover.
`,

  "14-2": `# What Goes Into the Context and How to Control It

Now that you understand what the context window is, let's look at exactly what fills it and how to manage it deliberately for better results.

## The Six Things That Consume Context

### 1. CLAUDE.md (loaded automatically)
Every conversation starts with CLAUDE.md in the context. A typical CLAUDE.md uses 1,000–3,000 tokens. Keep it focused — every word in CLAUDE.md is paid for on every single request.

### 2. Your Messages
Each message you send is added to the context and stays there for the entire conversation. Longer, more detailed prompts use more tokens but typically produce better results — a worthwhile trade-off.

### 3. Claude's Responses
Every response Claude writes also stays in the context. Verbose responses accumulate quickly. You can ask Claude to be more concise: "Give me the code only, no explanation."

### 4. Files Claude Reads
When Claude reads a file (using the Read tool), the entire file content is added to the context. A 1,000-line TypeScript file uses roughly 5,000–8,000 tokens.

**This is usually the biggest consumer of context in coding sessions.**

### 5. Tool Call Results
Terminal command outputs, search results, and directory listings are added to the context. A \`npm install\` that prints 200 lines of output uses significant context space.

### 6. System Prompts (internal)
Claude Code adds its own instructions to every context. You cannot control this, but it typically uses 2,000–5,000 tokens.

## Strategies for Efficient Context Use

### Strategy 1 — Be Specific About Files

\`\`\`
Bad:  "Look at my codebase and find the authentication logic"
      → Claude reads 20+ files looking for it

Good: "Read src/lib/auth.ts and explain the JWT validation logic"
      → Claude reads exactly one file
\`\`\`

### Strategy 2 — One Task Per Session

\`\`\`
Bad:  One conversation for the entire day
      → Context fills with unrelated files and history

Good: New conversation for each major task
      → Each session starts clean with full 200k tokens
\`\`\`

### Strategy 3 — Ask for Concise Responses

\`\`\`
"Fix the bug. Show only the changed lines, no explanation."
"Write the function. Code only, no docstring."
"Yes/No: does this code have a memory leak?"
\`\`\`

### Strategy 4 — Avoid Reading Large Generated Files

\`\`\`
Bad:  "Read prisma/dev.db and tell me how many users there are"
      → SQLite binary file, huge and useless to read

Good: "Run: npx prisma studio" or "Run: sqlite3 prisma/dev.db 'SELECT COUNT(*) FROM User'"
      → Gets the answer with minimal context usage
\`\`\`

### Strategy 5 — Reference, Don't Repeat

\`\`\`
Bad:  Pasting the same code block in multiple messages

Good: "In the function I showed you earlier (auth.ts line 47)..."
      → Claude still has it in context from the read, no need to repeat
\`\`\`

## What to Always Keep in Context

Some files are worth the tokens because every task needs them:
- \`prisma/schema.prisma\` — Claude needs to know the data model
- \`package.json\` — versions matter for correct API usage
- The specific file being modified

## What to Keep Out

- Binary files (images, databases, compiled artifacts)
- Large log files
- Generated lock files (\`package-lock.json\` is 50,000+ tokens)
- Files unrelated to the current task

## Summary

Context is a finite, valuable resource. Spend it on information Claude actually needs for the current task. Be specific about which files to read, keep tasks focused, and start fresh conversations when context usage climbs above 60-70%. These habits compound into dramatically better AI assistance over time.
`,

  "14-3": `# Status Line and Effective Context Management Techniques

The status line is your real-time indicator of context health. This lesson covers how to read it, when to act on it, and advanced techniques for keeping context effective.

## Reading the Status Line

At the bottom of the Claude Code chat panel, the status line shows:

\`\`\`
Context: 78,450 / 200,000 (39%)  |  Model: claude-sonnet  |  Cost: $0.04
\`\`\`

**What each part means:**

| Element | Meaning |
|---------|---------|
| 78,450 | Tokens currently in context |
| 200,000 | Maximum context window size |
| 39% | Fraction used |
| Cost | Cumulative cost for API key users |

## Context Usage Guidelines

\`\`\`
0–40%    Green zone: full capability, no action needed
40–70%   Yellow zone: still effective, start thinking about a new session soon
70–90%   Orange zone: compaction may have occurred, consider starting fresh
90–100%  Red zone: aggressive compaction, quality degrades significantly
\`\`\`

## What Automatic Compaction Does

When the context reaches ~80%, Claude Code automatically compacts it:

1. Older conversation turns are summarized into a short paragraph
2. File contents that were read early are removed (Claude retains a summary)
3. The summary is placed at the top of the context

**Problem:** Summaries lose detail. Code that was precisely remembered becomes "there is an authentication function in auth.ts." The precision needed for coding tasks is partially lost.

**Solution:** Don't let it get there. Start a new session before compaction triggers.

## Manually Starting Fresh

\`\`\`
1. Click the (+) New Conversation button in the top bar
2. Or type: /clear in the chat
3. Claude Code starts fresh with a 0-token context
\`\`\`

CLAUDE.md is automatically reloaded. Your project files are not re-read until Claude needs them.

## The "Context Handoff" Technique

When you must continue work from a previous session, use a structured handoff message:

\`\`\`
I'm continuing work from a previous session. Here's the current state:

**What we completed:**
- Added JWT authentication to POST /api/auth/login
- Tests are passing in tests/auth.test.ts

**Current task:**
- Now adding Google OAuth as a second login method

**Key files:**
- src/lib/auth.ts (NextAuth config)
- src/app/api/auth/[...nextauth]/route.ts

**Important context:**
- We use NextAuth v5 beta.25 (not v4)
- Session strategy is JWT (not database sessions)
- Google client ID is in .env as GOOGLE_CLIENT_ID

Please read the two key files above and continue.
\`\`\`

This reconstructs the essential context in ~200 tokens instead of carrying thousands of tokens of conversation history.

## Using /memory to Capture State

Claude Code has a built-in \`/memory\` command that saves important facts to a persistent memory file:

\`\`\`
/memory We decided to use Redis for session storage, not PostgreSQL
/memory The API base URL in production is https://api.taskflow.io/v1
/memory Auth tokens expire in 7 days (set in src/lib/auth.ts line 34)
\`\`\`

These facts are automatically included in future conversations, even after starting a new session.

## Advanced: Context-Efficient Prompting

\`\`\`
Instead of:
  "Read all the files in src/api/ and refactor them to use error boundaries"
  → Reads 15+ files upfront

Use:
  "List the files in src/api/ without reading them"
  → Claude sees filenames only (~100 tokens)
  "Start with src/api/users.ts — refactor it, then we'll do the others"
  → Reads one file at a time as needed
\`\`\`

This "lazy loading" approach keeps context lean and focused.

## Summary

The status line tells you when to act. Keep context below 70% by starting fresh conversations for each task, using handoff messages when continuing work, and prompting lazily (read one file at a time). These habits ensure Claude always has full reasoning capability on the current task — not wasted on irrelevant history from six tasks ago.
`,

  // ─── MODULE 15 — MCP, SKILLS AND SUBAGENTS ───

  "15-1": `# What is MCP (Model Context Protocol)

Claude Code is powerful with code — but what about browsing the web, reading a database, or posting to GitHub? MCP is the protocol that connects Claude to external tools and services.

## The Problem MCP Solves

By default, Claude Code can:
- Read and write files on your computer
- Run terminal commands
- Understand code

But Claude cannot:
- Open a website and interact with it
- Query your PostgreSQL database directly
- Create a GitHub issue
- Send a Slack message
- Call an external API with authentication

MCP solves this by defining a standard way for Claude to communicate with external "tool servers."

## How MCP Works

\`\`\`
┌─────────────┐     MCP Protocol      ┌─────────────────┐
│ Claude Code │ ←──────────────────→ │  MCP Server     │
│  (client)   │   list_tools()        │  (runs locally) │
│             │   call_tool()         │                 │
└─────────────┘                      └────────┬────────┘
                                              │
                                    ┌─────────▼─────────┐
                                    │  External Service  │
                                    │  (browser, DB,     │
                                    │   GitHub, Slack...) │
                                    └───────────────────┘
\`\`\`

An MCP server is a small program that:
1. Exposes a list of "tools" (functions Claude can call)
2. Executes those tools when Claude calls them
3. Returns the results back to Claude

## Popular MCP Servers

| MCP Server | What It Gives Claude |
|------------|---------------------|
| Playwright / Puppeteer | Control a real web browser |
| PostgreSQL | Direct database queries |
| GitHub | Create issues, PRs, read code |
| Filesystem (extended) | Access files outside the project |
| Slack | Read/send messages |
| Google Drive | Read and write documents |
| Stripe | Query payment data |

## Installing an MCP Server

MCP servers are typically installed via npm:

\`\`\`bash
# Example: Playwright MCP for browser control
npm install -g @modelcontextprotocol/server-playwright

# Example: GitHub MCP
npm install -g @modelcontextprotocol/server-github
\`\`\`

## Connecting an MCP Server to Claude Code

Add the server to \`.claude/settings.json\`:

\`\`\`json
{
  "mcpServers": {
    "playwright": {
      "command": "mcp-server-playwright",
      "args": []
    },
    "github": {
      "command": "mcp-server-github",
      "args": [],
      "env": {
        "GITHUB_TOKEN": "your_token_here"
      }
    }
  }
}
\`\`\`

Restart Claude Code. The tools from each server are now available to Claude automatically.

## Using MCP Tools in a Conversation

Once connected, Claude uses MCP tools without you needing to reference them explicitly:

\`\`\`
You: "Go to our staging site at https://staging.myapp.com/login
     and test that the login form works correctly"

Claude: [opens browser via Playwright MCP]
        [navigates to the URL]
        [fills in test credentials]
        [clicks the login button]
        [reads the resulting page]
        "The login form works. After submitting valid credentials,
         the browser redirects to /dashboard. The user's name
         appears in the top navigation."
\`\`\`

## Summary

MCP extends Claude Code from a code-only assistant to a general-purpose automation agent. It can browse websites, query databases, interact with services — anything that has an MCP server. The next lesson covers one of the most powerful MCP integrations: browser control with Playwright.
`,

  "15-2": `# Connecting a Browser Through MCP

Browser control is one of the most impressive Claude Code capabilities. Through the Playwright MCP server, Claude can navigate websites, fill forms, click buttons, take screenshots, and extract data — all as part of your development workflow.

## What You Can Do With Browser MCP

\`\`\`
✓ Test your own application end-to-end
✓ Scrape data from websites (where permitted)
✓ Automate form submissions
✓ Take screenshots for documentation
✓ Check that UI changes look correct visually
✓ Log in to services and retrieve information
✓ Fill out lengthy web forms automatically
\`\`\`

## Setup

### Step 1 — Install Playwright MCP

\`\`\`bash
npm install -g @modelcontextprotocol/server-playwright
\`\`\`

### Step 2 — Install Browser Binaries

\`\`\`bash
npx playwright install chromium
\`\`\`

### Step 3 — Configure in .claude/settings.json

\`\`\`json
{
  "mcpServers": {
    "playwright": {
      "command": "mcp-server-playwright",
      "args": ["--browser", "chromium"]
    }
  }
}
\`\`\`

### Step 4 — Restart Claude Code

Close and reopen the Claude Code chat. Type \`/mcp\` to see available tools — you should see browser tools listed.

## Basic Usage Examples

**Navigate and read a page:**
\`\`\`
"Go to https://docs.stripe.com/api/charges and summarize the
key parameters for creating a charge"
\`\`\`

**Take a screenshot:**
\`\`\`
"Open http://localhost:3000/dashboard in the browser and take
a screenshot. Tell me if the layout looks correct."
\`\`\`

**Fill a form:**
\`\`\`
"Go to http://localhost:3000/register, fill in:
- Email: test@example.com
- Password: TestPassword123!
- Name: John Doe
Then click Submit and tell me what happens."
\`\`\`

## Real Workflow — End-to-End Testing

\`\`\`
You: "I just built the checkout flow. Please test it end-to-end:
     1. Go to localhost:3000
     2. Add item ID 42 to the cart
     3. Proceed to checkout
     4. Fill in the test card: 4242 4242 4242 4242, exp 12/26, CVV 123
     5. Complete the purchase
     6. Verify the confirmation page shows order number and email"

Claude: [executes all 6 steps through Playwright]
        [takes screenshots at key points]

Result: "I completed the checkout flow. Here is what happened at each step:
         1. ✓ Homepage loaded, showing 12 products
         2. ✓ Product added to cart (cart count updated to 1)
         3. ✓ Checkout page loaded with correct price ($49.99)
         4. ✓ Card details accepted (no validation errors)
         5. ✓ Purchase completed successfully
         6. ✓ Confirmation page shows order #ORD-1847 and
              'Confirmation sent to test@example.com'

         Issue found: The confirmation page takes 4.2 seconds to load
         — likely a slow database query. Consider optimizing."
\`\`\`

## Browser MCP + Code Changes

The real power is combining browser testing with code editing:

\`\`\`
You: "Test the login page. If you find any bugs, fix them in the code."

Claude: [opens browser, tests login]
        "Found a bug: the error message 'Invalid credentials' appears
         even when the email format is invalid. It should say
         'Invalid email format' before making an API call."
        [edits src/components/auth/LoginForm.tsx to add client-side
         email validation]
        [retests in browser]
        "Fixed. Now shows 'Invalid email format' immediately for
         malformed emails, no API call made."
\`\`\`

## Summary

Browser MCP transforms Claude from a code assistant into a full QA engineer. It can test features, verify UI, fill forms, and screenshot results — then fix bugs it finds, all in one session. Set it up once and use it whenever you need to verify that your UI works correctly.
`,

  "15-3": `# Skills — Creating Reusable Instructions

Skills are custom slash commands you define. Instead of typing the same detailed prompt repeatedly, you write the instructions once as a markdown file and invoke them with a short command.

## The Problem Skills Solve

\`\`\`
Without skills — repeating yourself every session:
  "Review the code I just wrote for TypeScript errors, security issues,
   missing error handling, and N+1 query problems. Format the review
   as a bullet list by file."
  [type this again tomorrow]
  [type this again next week]

With a skill:
  /review
  [done]
\`\`\`

## Creating a Skill

Skills live in \`.claude/skills/\`. Create a markdown file for each command:

\`\`\`
.claude/skills/review.md      → invoked as /review
.claude/skills/deploy.md      → invoked as /deploy
.claude/skills/test.md        → invoked as /test
.claude/skills/document.md    → invoked as /document
\`\`\`

## Anatomy of a Skill File

\`\`\`markdown
# /review

## Purpose
Comprehensive code review of recent changes.

## Steps
1. Run: git diff --name-only HEAD~1
2. For each changed file, read it and check:
   - TypeScript strictness (no any, proper types)
   - Error handling (no empty catch blocks)
   - Security (no SQL injection, no exposed secrets)
   - Performance (no N+1 queries, no synchronous file I/O in hot paths)
   - Test coverage (are edge cases covered?)
3. Output a review structured as:
   ### [filename]
   **Status**: PASS / NEEDS WORK
   **Issues**: [bulleted list or "None"]
   **Suggestions**: [bulleted list or "None"]
4. End with overall verdict and priority issues to fix.
\`\`\`

## Practical Skill Library

### /deploy — Push to production
\`\`\`markdown
# /deploy

1. Run: npm run lint — stop if errors
2. Run: npm run build — stop if errors
3. Run: npm test — stop if any tests fail
4. Run: git add -A && git commit -m "deploy: $(date)"
5. Run: git push origin main
6. Report: "Deployed successfully" or describe the error that stopped deployment
\`\`\`

### /document — Auto-generate documentation
\`\`\`markdown
# /document

For every exported function in src/lib/ that lacks a JSDoc comment:
1. Read the function implementation
2. Write a JSDoc comment that includes:
   - One-line description
   - @param for each parameter with type and meaning
   - @returns description of return value
   - @throws if the function can throw
   - @example with a realistic usage snippet
3. Insert the comment directly above the function
4. Report how many functions were documented
\`\`\`

### /security — Security audit
\`\`\`markdown
# /security

Perform a security audit of the codebase:
1. Search for hardcoded secrets: grep for "password", "secret", "key", "token" in src/
2. Check all API routes for missing authentication (getServerSession calls)
3. Check all database queries for user input that isn't parameterized
4. Check for CORS configurations that allow *
5. Check for missing rate limiting on auth endpoints
Report each finding with file, line number, and severity (HIGH/MEDIUM/LOW).
\`\`\`

## Passing Arguments to Skills

Skills can accept arguments via \`$ARGUMENTS\`:

\`\`\`markdown
# /migrate

Create a new database migration for: $ARGUMENTS

1. Design the schema change
2. Add it to prisma/schema.prisma
3. Run: npx prisma migrate dev --name $ARGUMENTS
4. Update seed data if needed
5. Run: npm run db:seed
\`\`\`

Usage: \`/migrate add-user-avatar-field\`

## Building Your Personal Skill Library

Start with these five universal skills:
1. \`/review\` — code review before commits
2. \`/test\` — run tests and fix failures
3. \`/document\` — add missing docs
4. \`/security\` — security audit
5. \`/cleanup\` — remove dead code, fix lint warnings

## Summary

Skills transform repetitive prompts into single commands. Build a library that matches your workflow — one well-written skill file saves hours of repeated prompt typing over the course of a project. The more specific and detailed your skill instructions, the more consistent and reliable the results.
`,

  "15-4": `# Subagents — Delegating Tasks

A subagent is a separate Claude instance that handles a specific subtask. Instead of one Claude doing everything, you have specialized agents that work in parallel or in sequence on different parts of a problem.

## Why Subagents?

**The problem with one agent doing everything:**
\`\`\`
Task: "Build a user authentication system"

Single agent:
  → Designs database schema
  → Writes API endpoints
  → Writes frontend components
  → Writes tests
  → Writes documentation
  → Does all of this sequentially
  → Time: 30 minutes
\`\`\`

**With subagents:**
\`\`\`
Orchestrator agent splits the work:
  → Subagent A: database schema + migration (10 min)
  → Subagent B: API endpoints (10 min)  [runs in parallel with A]
  → Subagent C: frontend form (10 min)  [runs in parallel with A+B]
  → After all complete: Subagent D: integration tests (5 min)
  → Total time: ~15 minutes
\`\`\`

Parallelism is one benefit. Specialization is the other: a subagent configured as a security expert will catch issues that a generalist agent misses.

## How Subagents Work in Claude Code

Subagents are launched by the main (orchestrator) agent using the \`Task\` tool. From your perspective, you talk to one agent — it spawns and manages the others.

\`\`\`
You: "Set up the full authentication system"

Orchestrator (Claude): "I'll coordinate this using specialized agents.

I'm launching:
 - DB Agent: design the User and Session tables
 - API Agent: implement the auth endpoints
 - Frontend Agent: build the login/register forms

[spawns three subagents, each with relevant context]
[collects results]
[assembles the final implementation]

All done. Here's a summary of what was created..."
\`\`\`

## Defining Subagents in .claude/agents/

Create a markdown file for each agent type. The orchestrator reads these when deciding which agent to use for each subtask.

\`\`\`markdown
# Database Agent
.claude/agents/database.md

You are a database architect specializing in PostgreSQL and Prisma.

## Your Responsibilities
- Design normalized database schemas
- Write Prisma schema definitions
- Create efficient indexes
- Plan migration strategies

## Your Rules
- Always prefer relations over JSON fields for structured data
- Add appropriate indexes for foreign keys and frequently queried fields
- Never use varchar without a length (use Text)
- Add createdAt and updatedAt to every table

## Your Output Format
Always provide:
1. The Prisma schema block
2. Explanation of design decisions
3. List of indexes and why they're needed
\`\`\`

## Triggering Subagents Explicitly

You can request specific subagents by name:

\`\`\`
"Use the database agent to design the schema for a multi-tenant
 SaaS with organizations, users, and subscriptions"

"Use the security agent to audit the new payment processing code"

"Use the tester agent to write comprehensive tests for auth.ts"
\`\`\`

## Subagent Communication Pattern

The orchestrator passes context to subagents via their prompts:

\`\`\`
Orchestrator → DB Agent:
  "Design a schema for user authentication.
   Stack: PostgreSQL, Prisma 5.
   Requirements: users can have multiple OAuth accounts,
   sessions expire after 7 days."

DB Agent returns:
  [Prisma schema code]
  [Explanation of design choices]

Orchestrator takes that output and passes relevant parts
to the API Agent:
  "Given this schema: [schema from DB agent],
   implement the NextAuth configuration..."
\`\`\`

## When to Use Subagents

\`\`\`
Use subagents when:
✓ Task can be clearly divided into independent parts
✓ Different parts require different expertise
✓ Parallel execution would save significant time
✓ One agent's output is clearly the input to another

Don't use subagents for:
✗ Simple, single-file changes
✗ Tasks that require constant coordination
✗ When the overhead of coordination exceeds the benefit
\`\`\`

## Summary

Subagents bring parallelism and specialization to AI-assisted development. They work best when a large task can be decomposed into parts that a specialized agent handles better than a generalist. Start with two or three well-defined agents and expand your team as you identify recurring patterns in your work.
`,

  "15-5": `# Agent Teams — Coordinated AI Development

An agent team is a group of specialized subagents with defined roles, responsibilities, and communication patterns. This is the architecture behind the most sophisticated Claude Code workflows.

## Team Structure Analogy

Think of it like a real development team:

\`\`\`
Engineering Team:
  CTO/Architect    → Makes high-level decisions, reviews architecture
  Backend Dev      → Implements API and business logic
  Frontend Dev     → Builds UI components
  QA Engineer      → Writes and runs tests
  DevOps           → Handles deployment and infrastructure

Agent Team:
  architect.md     → Designs system, makes tech decisions
  backend.md       → Implements server-side code
  frontend.md      → Builds React components
  tester.md        → Writes and runs tests
  devops.md        → CI/CD and deployment
\`\`\`

## Setting Up a Complete Agent Team

Create one file per agent in \`.claude/agents/\`:

\`\`\`markdown
# .claude/agents/architect.md

You are a senior software architect. You make high-level design decisions.

## Responsibilities
- Evaluate technical requirements and propose system design
- Choose appropriate patterns (CQRS, event sourcing, microservices vs monolith)
- Design API contracts between services
- Review other agents' work for architectural consistency

## Decision Framework
When evaluating options, consider in order:
1. Simplicity — can a simpler solution achieve the same goal?
2. Maintainability — will a new developer understand this in 6 months?
3. Performance — does it meet the required SLAs?
4. Cost — infrastructure and development cost

## Output Format
Always structure recommendations as:
- Proposed approach (1 paragraph)
- Trade-offs (pros/cons table)
- Implementation steps (numbered list)
- Open questions (if any)
\`\`\`

\`\`\`markdown
# .claude/agents/backend.md

You are a senior backend engineer. TypeScript, Node.js, PostgreSQL expert.

## Stack
- Next.js 14 API routes (App Router)
- Prisma ORM
- NextAuth v5 for authentication
- Zod for validation

## Coding Standards
- Every route: authenticate first, then validate, then execute
- All DB queries through Prisma (no raw SQL with user input)
- Return types: { data } on success, { error: string } on failure
- Log errors with context, never swallow them

## Testing
Write Jest tests for every endpoint you create.
Use supertest for HTTP-level testing.
\`\`\`

\`\`\`markdown
# .claude/agents/frontend.md

You are a senior frontend engineer. React, TypeScript, Tailwind CSS expert.

## Stack
- Next.js 14 (App Router, React Server Components)
- TypeScript strict mode
- Tailwind CSS for styling
- Framer Motion for animations
- Zustand for client state

## Patterns
- Server Components by default
- "use client" only for interactivity
- Interactive pages: server page + *-client.tsx wrapper
- No useEffect for data fetching — use server components

## Accessibility
Every interactive element needs:
- Keyboard navigation support
- aria-label if no visible text label
- Focus ring visible (never outline-none without alternative)
\`\`\`

## Orchestrating the Team

The orchestrator (main Claude session) coordinates:

\`\`\`
You: "Add a notifications feature: users can receive in-app
     notifications when someone comments on their post"

Orchestrator:
  1. Asks architect agent: "Design the notification system"
  2. Architect returns: schema design + API design + real-time strategy

  3. Asks backend agent: "Implement the notification API per this design"
  4. Backend returns: database schema + API endpoints + tests

  5. Asks frontend agent: "Build the notification bell UI"
  6. Frontend returns: NotificationBell component + NotificationList

  7. Asks tester agent: "Write end-to-end tests for the full flow"
  8. Tester returns: E2E test file

  9. Assembles everything, reports to you
\`\`\`

## Agent Team vs Single Agent — When Each Wins

| Scenario | Use Agent Team | Use Single Agent |
|----------|----------------|-----------------|
| New feature (3+ components) | Yes | |
| Quick bug fix | | Yes |
| Architecture review | Yes | |
| Rename a variable | | Yes |
| Full-stack feature with tests | Yes | |
| Fix a typo in a README | | Yes |

## Practical Tips

- Start small: 3 agents (architect, developer, tester) cover 80% of use cases
- Give each agent very specific rules — vague instructions produce vague results
- Test each agent individually before using the full team
- Update agent files when you find consistent problems with their output

## Summary

Agent teams bring the power of a full development team to solo projects. Each agent specializes deeply, produces higher quality output in its domain, and can work in parallel with others. The overhead of setting up the team is paid back quickly on any project larger than a week of work.
`,

  "15-6": `# Practice: Building a Multi-Agent System from Scratch

This is a hands-on lesson. You will build a complete agent team for a real project, run it, and see multi-agent execution in action.

## The Project

We will build a simple **Task Manager API** — a REST API with authentication, task CRUD, and tags. Simple enough to build quickly, complex enough to benefit from multiple agents.

## Step 1 — Set Up the Project

\`\`\`bash
mkdir task-manager && cd task-manager
git init
npm init -y
npm install express typescript @types/node @types/express ts-node prisma
npx tsc --init
npx prisma init
\`\`\`

## Step 2 — Create the .claude Folder Structure

\`\`\`bash
mkdir -p .claude/agents .claude/skills
\`\`\`

## Step 3 — Write CLAUDE.md

\`\`\`markdown
# Task Manager API

REST API for task management with user auth, CRUD operations, and tagging.

## Stack
- Node.js 20, TypeScript 5 (strict)
- Express 4
- Prisma + SQLite (dev)
- Jest for testing

## Conventions
- All inputs validated with Zod
- Auth via JWT (jsonwebtoken)
- Errors: { error: string, code?: string }
- Success: { data: T }

## Commands
npm run dev     — start with ts-node
npm test        — Jest
npm run build   — tsc
\`\`\`

## Step 4 — Create the Agent Team

\`\`\`markdown
# .claude/agents/schema-agent.md
You are a database architect. Design Prisma schemas.
Rules: Add createdAt/updatedAt to all models. Use relations, not JSON fields.
Output: Prisma schema block + explanation.
\`\`\`

\`\`\`markdown
# .claude/agents/api-agent.md
You are a backend engineer. Build Express + TypeScript API endpoints.
Stack: Express 4, Prisma, Zod, jsonwebtoken.
Rules: Every route validates input with Zod. Auth routes use JWT middleware.
Output: Complete TypeScript files, no TODOs.
\`\`\`

\`\`\`markdown
# .claude/agents/test-agent.md
You are a QA engineer. Write Jest tests.
Rules: Test happy path + 3 edge cases minimum per endpoint.
Use supertest for HTTP testing. Mock nothing unless unavoidable.
Output: Complete test files that pass on first run.
\`\`\`

## Step 5 — Run the Multi-Agent Build

Open Claude Code and enable Bypass Permissions mode. Then send:

\`\`\`
Build the Task Manager API using the agent team in .claude/agents/.

Phase 1 — Schema Agent:
Design the database schema for: User, Task (with status enum: TODO/IN_PROGRESS/DONE),
Tag, and a many-to-many Task-Tag relation.

Phase 2 — API Agent (after schema is ready):
Implement these endpoints:
- POST /auth/register — create user
- POST /auth/login — return JWT
- GET /tasks — list user's tasks (auth required)
- POST /tasks — create task (auth required)
- PATCH /tasks/:id — update task (auth required, must own task)
- DELETE /tasks/:id — delete task (auth required, must own task)
- POST /tasks/:id/tags — add tags to task

Phase 3 — Test Agent (after API is ready):
Write tests for all 7 endpoints. Cover: success case, unauthenticated case,
not-found case, validation error case.

Run all tests at the end and fix any failures.
\`\`\`

## What to Watch For

As Claude executes, observe:
- How it transitions between agent personas
- How schema decisions from Phase 1 influence API implementation in Phase 2
- How the test agent reads the API code to understand what to test

## Expected Output

After 5-10 minutes (in Bypass mode), you should have:
\`\`\`
task-manager/
├── CLAUDE.md
├── prisma/schema.prisma     ← from schema agent
├── src/
│   ├── lib/auth.ts          ← JWT helpers
│   ├── middleware/auth.ts   ← JWT middleware
│   ├── routes/
│   │   ├── auth.ts          ← from API agent
│   │   └── tasks.ts
│   └── app.ts
└── tests/
    ├── auth.test.ts         ← from test agent
    └── tasks.test.ts
\`\`\`

## Reviewing the Results

\`\`\`bash
npm test
\`\`\`

All tests should pass. If they don't, tell Claude: "Fix the failing tests" — it will read the output and correct the issues.

## Summary

You have built a multi-agent system that mirrors how a real team works: a specialist designs the data model, another builds the API, a third verifies correctness with tests. This pattern scales to any project size. The investment in agent files pays dividends on every future session in this codebase.
`,

  // ─── MODULE 16 — ADVANCED CLAUDE CODE TECHNIQUES ───

  "16-1": `# Git Worktree — Parallel Development in Isolated Branches

Git Worktree is a powerful but underused Git feature that becomes extraordinary when combined with Claude Code. It lets multiple agents work on different branches simultaneously — each in its own isolated directory.

## What is Git Worktree?

Normally, one Git repository = one working directory. If you want to work on branch B while branch A is checked out, you have to stash changes, switch branches, and lose your current context.

Git Worktree breaks this limitation: it lets you check out multiple branches from the same repository simultaneously, each in a separate folder.

\`\`\`bash
# Standard setup — one working directory
my-project/   ← always on one branch

# With worktrees — multiple simultaneous working directories
my-project/          ← main branch
my-project-auth/     ← feature/auth branch
my-project-billing/  ← feature/billing branch
my-project-bugfix/   ← hotfix/login-error branch
\`\`\`

All four directories share the same Git history — no duplication of repository data.

## Creating Worktrees

\`\`\`bash
# Navigate to your repo
cd my-project

# Create a worktree for a new branch
git worktree add ../my-project-auth -b feature/auth

# Create a worktree for an existing branch
git worktree add ../my-project-bugfix hotfix/login-error

# List all worktrees
git worktree list

# Remove a worktree when done
git worktree remove ../my-project-auth
\`\`\`

## Claude Code + Worktree = Parallel Agents

Here is the pattern: open multiple terminal windows, each in a different worktree, each running a separate Claude Code session.

\`\`\`
Terminal 1 (my-project-auth):
  claude → "Implement user authentication with NextAuth"
  [Claude works on auth feature]

Terminal 2 (my-project-billing):
  claude → "Add Stripe subscription billing"
  [Claude works on billing feature — simultaneously]

Terminal 3 (my-project-bugfix):
  claude → "Fix the login redirect bug reported in issue #142"
  [Claude fixes the bug — simultaneously]
\`\`\`

Three features developed in parallel. If each takes 30 minutes sequentially, parallelism completes all three in ~30 minutes total.

## Practical Workflow

### Phase 1 — Set Up Worktrees

\`\`\`bash
cd my-saas

# Create worktrees for sprint tasks
git worktree add ../my-saas-feat-notifications -b feat/notifications
git worktree add ../my-saas-feat-dark-mode -b feat/dark-mode
git worktree add ../my-saas-fix-perf -b fix/dashboard-performance
\`\`\`

### Phase 2 — Launch Claude in Each

\`\`\`bash
# Terminal 1
cd ../my-saas-feat-notifications
claude --dangerously-skip-permissions
> "Implement real-time notifications using WebSockets. See CLAUDE.md for context."

# Terminal 2
cd ../my-saas-feat-dark-mode
claude --dangerously-skip-permissions
> "Add dark mode support. Use the existing theme system in src/store/theme-store.ts."

# Terminal 3
cd ../my-saas-fix-perf
claude --dangerously-skip-permissions
> "The dashboard page loads in 4s. Profile it and fix the bottleneck."
\`\`\`

### Phase 3 — Merge When Done

\`\`\`bash
cd my-saas

git merge feat/notifications
git merge feat/dark-mode
git merge fix/dashboard-performance

# Clean up
git worktree remove ../my-saas-feat-notifications
git worktree remove ../my-saas-feat-dark-mode
git worktree remove ../my-saas-fix-perf
\`\`\`

## Handling Merge Conflicts

Since different agents worked on different features, conflicts are rare if you:
- Give each agent a clearly bounded area of the codebase
- Avoid having two agents modify the same file

If conflicts do occur, resolve them normally with \`git mergetool\` or VS Code's merge editor.

## Summary

Git Worktree + Claude Code is a multiplier. One developer directing three simultaneous agents produces the output of a team. The setup takes five minutes and the productivity gains on any multi-feature sprint are immediate. This is one of the highest-leverage techniques in the entire course.
`,

  "16-2": `# GitHub Actions — Automating Deployment

Claude Code does not have to be interactive. Combined with GitHub Actions, it becomes an autonomous CI/CD participant — reviewing code, fixing failing tests, and deploying — all triggered by a git push.

## The Core Idea

\`\`\`
Developer pushes code
         ↓
GitHub Actions triggers
         ↓
Claude Code runs in CI environment
         ↓
Claude reviews, tests, fixes, deploys
         ↓
Developer receives a report
\`\`\`

No human in the loop for routine work.

## Basic Setup

### Prerequisites
- GitHub repository
- Claude API key (not Claude.ai subscription — CI needs API access)
- Set \`ANTHROPIC_API_KEY\` in GitHub repository secrets

### Step 1 — Create the Workflow File

Create \`.github/workflows/claude-ci.yml\`:

\`\`\`yaml
name: Claude Code CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  review-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          fetch-depth: 0  # Full history for git diff

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Claude Code
        run: npm install -g @anthropic-ai/claude-code

      - name: Run tests
        run: npm test
        continue-on-error: true
        id: tests

      - name: Claude fixes failing tests
        if: steps.tests.outcome == 'failure'
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          claude --dangerously-skip-permissions -p "
            The test suite failed. Read the test output above.
            Fix the failing tests by editing the source code (not the tests).
            Run npm test again after fixing to verify.
          "

      - name: Final test run
        run: npm test
\`\`\`

### Step 2 — Add API Key to GitHub Secrets

1. Go to your repository → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: \`ANTHROPIC_API_KEY\`
4. Value: your Anthropic API key

## Advanced: Claude as Code Reviewer

Add a PR review job:

\`\`\`yaml
  code-review:
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Install Claude Code
        run: npm install -g @anthropic-ai/claude-code

      - name: Claude reviews PR
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        run: |
          # Get changed files
          CHANGED=$(git diff --name-only origin/main...HEAD)

          claude -p "
            Review these changed files for this PR: $CHANGED
            Check for: TypeScript errors, security issues, missing tests,
            performance problems, and code style violations.
            Output a markdown review. Be specific with file and line references.
          " > review.md

          # Post review as PR comment via GitHub CLI
          gh pr comment \${{ github.event.number }} --body-file review.md
\`\`\`

## Auto-Deploy on Pass

\`\`\`yaml
  deploy:
    needs: [review-and-test, code-review]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' && success()

    steps:
      - uses: actions/checkout@v4

      - name: Install Claude Code
        run: npm install -g @anthropic-ai/claude-code

      - name: Claude deploys
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
          VERCEL_TOKEN: \${{ secrets.VERCEL_TOKEN }}
        run: |
          claude --dangerously-skip-permissions -p "
            All tests passed. Deploy the application:
            1. Run: npm run build
            2. Run: npx vercel --prod --token $VERCEL_TOKEN
            3. Report the deployment URL
          "
\`\`\`

## Cost Considerations

CI runs consume Claude API credits. Estimate costs before enabling on high-traffic repos:

- A typical review job: ~$0.05-0.20 per PR
- A test-fix job: ~$0.10-0.50 per triggered run
- Set GitHub Actions concurrency limits to cap usage

## Summary

Claude Code in CI/CD creates a pipeline that is not just automated but intelligent. It fixes failures, reviews code, and deploys — triggered by developer actions but requiring no developer attention for routine work. Start with the test-fix job (most immediately valuable), then add the PR review job, then automated deployment.
`,

  "16-3": `# Tips from the Claude Code Creators

Anthropic's team has shared guidance on working effectively with Claude Code based on how the most productive users actually use the tool. These are the most impactful recommendations.

## 1. Be Generous with Context

The most common mistake is under-specifying the task:

\`\`\`
Bad:  "Fix the bug"
Good: "The login endpoint at POST /api/auth/login returns 500 when
      the user's email contains a plus sign (e.g. user+tag@gmail.com).
      The error appears to be in the email validation. Fix it."
\`\`\`

Claude cannot see what you see. Give it:
- The specific file and function
- The exact error message or unexpected behavior
- The expected behavior
- Any relevant constraints

More context upfront = fewer clarifying questions = faster results.

## 2. Use CLAUDE.md as a Force Multiplier

Anthropic's data shows that teams with well-maintained CLAUDE.md files complete tasks significantly faster than those without. The reason is simple: Claude does not waste tokens or reasoning on inferring things you could have stated directly.

Review and update your CLAUDE.md after every session where Claude got something wrong. Each correction prevents the same mistake forever.

## 3. Verify Before Trusting

Claude is highly capable but not infallible. The recommended workflow:

\`\`\`
1. Claude makes changes
2. Run tests: npm test
3. Review git diff: git diff
4. Deploy only after both pass

Never skip step 2 and 3, regardless of how confident Claude sounds.
\`\`\`

Anthropic explicitly recommends treating Claude like a very capable intern: you trust its output, but you verify before it goes to production.

## 4. Course-Correct Early

If Claude starts going in the wrong direction, stop it immediately:

\`\`\`
You: "Refactor the auth system to use database sessions"

Claude: [starts creating a full session management system from scratch]

You: "Stop. I want to keep using JWT — just add a token blacklist
     for logout functionality. Don't change the session strategy."
\`\`\`

Letting an agent continue down the wrong path for 5 minutes is much more expensive than 10 seconds of correction. Watch the first few steps of any large task.

## 5. Decompose Large Tasks

Anthropic's team found that tasks with clear stopping conditions succeed more often than open-ended tasks:

\`\`\`
Less effective:
"Build the entire authentication system"

More effective:
"Step 1: Design the database schema for users and sessions.
 Stop and show me the schema before proceeding."

[Review schema]

"Step 2: Implement the register endpoint using the schema we agreed on."

[Review implementation]

"Step 3: Implement the login endpoint."
\`\`\`

Each step has a clear deliverable you can review. Errors caught at step 1 do not cascade into steps 2 and 3.

## 6. Use Plan Mode for Architecture Decisions

Before any change that touches more than 5 files, enable Plan Mode and review the plan carefully. The plan reveals:
- Whether Claude understood the task correctly
- What files will be modified (any surprises?)
- The order of operations (are there dependency issues?)
- The estimated scope (bigger than expected?)

Fixing a misunderstanding at the plan stage is free. Fixing it after 30 files have been changed is expensive.

## 7. Keep Commands in CLAUDE.md

Every project-specific command Claude might need should be in CLAUDE.md:

\`\`\`markdown
## Commands
npm run db:push      — apply schema changes (NOT npx prisma db push)
npm run db:seed      — seed with test data
npm run dev          — start on port 3001 (not 3000 — port taken)
npm run test:watch   — run tests in watch mode
\`\`\`

Without this, Claude may run the wrong variant of a command and waste time debugging the wrong error.

## 8. Start Fresh for Each Task

One conversation per task is not just a best practice — it is the recommended workflow from Anthropic. Context contamination from previous tasks is a real source of errors. The few seconds it takes to start a new conversation pays for itself on every non-trivial task.

## 9. When Claude is Stuck, Give It More Information

If Claude loops or produces the same incorrect output repeatedly:

\`\`\`
1. Read the error message yourself
2. Find the relevant code manually
3. Tell Claude exactly what you found:
   "The error is TypeError: Cannot read property 'id' of undefined.
    It occurs in src/api/tasks.ts line 47, inside the updateTask function.
    The req.user object is undefined here. The auth middleware in
    src/middleware/auth.ts should populate it."
\`\`\`

The more you narrow the problem, the more effectively Claude solves it.

## Summary

These nine tips from Anthropic distill the patterns of the most effective Claude Code users. The common thread: treat Claude as a powerful collaborator that needs clear instructions, good context, and regular verification — not as a magic box where vague inputs produce perfect outputs.
`,

  "16-4": `# Final Practice: A Complete Project with Claude Code

This lesson brings together everything from the course: CLAUDE.md, multiple modes, Skills, MCP, Subagents, Git Worktree, and CI/CD. You will build a complete project from idea to deployed application.

## The Project: LinkVault

A personal link bookmarking tool. Users save URLs with tags and notes, search their collection, and share curated lists. Simple enough to build in one session, complex enough to exercise every technique from the course.

## Phase 1 — Setup (10 minutes)

### Initialize the project

\`\`\`bash
mkdir linkvault && cd linkvault
git init
npx create-next-app@14.2 . --typescript --tailwind --app --no-src-dir
npm install prisma @prisma/client next-auth@beta zod
npx prisma init
\`\`\`

### Write CLAUDE.md

\`\`\`markdown
# LinkVault

Personal link bookmarking SaaS. Users save URLs with tags and notes,
search their collection, and share curated lists publicly.

## Stack
- Next.js 14.2 (App Router), TypeScript strict
- Prisma + SQLite (dev), PostgreSQL (prod)
- NextAuth v5 beta with Google OAuth
- Tailwind CSS

## Conventions
- Server Components default, "use client" only for interactivity
- All API routes: authenticate → validate (Zod) → execute
- Errors: { error: string }
- Path alias @/* = ./src/*

## Commands
npm run dev         — start development server
npm run build       — production build
npm test            — Jest tests
npm run db:push     — apply schema
npm run db:seed     — seed test data
\`\`\`

### Create the Agent Team

\`\`\`
.claude/agents/schema.md    — Database architect
.claude/agents/backend.md   — API developer
.claude/agents/frontend.md  — UI developer
.claude/agents/tester.md    — QA engineer
\`\`\`

(Use the agent templates from Module 15, adapted for this stack.)

## Phase 2 — Schema and API (Subagents, 15 minutes)

Enable Bypass Permissions mode and send:

\`\`\`
Use the agent team to build LinkVault:

Schema Agent: Design tables for User, Link (url, title, description,
tags, isPublic, createdAt), Tag, and UserTag (many-to-many Link-Tag).

Backend Agent (after schema): Implement these endpoints:
- GET /api/links — user's links (auth, search + filter by tag)
- POST /api/links — save new link (auth, validate url format)
- PATCH /api/links/:id — update link (auth, own link only)
- DELETE /api/links/:id — delete link (auth, own link only)
- GET /api/links/share/:userId — public links for a user (no auth)
- GET /api/tags — user's tags with count (auth)

Tester Agent (after API): Write integration tests for all endpoints.
Run tests and fix failures before reporting done.
\`\`\`

## Phase 3 — Frontend with Git Worktree (30 minutes)

Create two parallel worktrees for UI components:

\`\`\`bash
git worktree add ../linkvault-ui-dashboard -b feat/dashboard-ui
git worktree add ../linkvault-ui-share -b feat/share-page
\`\`\`

**Terminal 1 — Dashboard UI:**
\`\`\`bash
cd ../linkvault-ui-dashboard
claude --dangerously-skip-permissions
> "Build the dashboard: link list with search, tag filter sidebar,
  add-link form, and link cards with edit/delete. Use existing API routes."
\`\`\`

**Terminal 2 — Public Share Page:**
\`\`\`bash
cd ../linkvault-ui-share
claude --dangerously-skip-permissions
> "Build the public share page at /share/[userId].
  Shows the user's public links in a clean read-only layout."
\`\`\`

After both finish, merge:
\`\`\`bash
cd linkvault
git merge feat/dashboard-ui
git merge feat/share-page
\`\`\`

## Phase 4 — CI/CD (15 minutes)

Create \`.github/workflows/ci.yml\` using the template from Module 16-2.

Configure:
- Run tests on every PR
- Claude fixes failing tests automatically
- Auto-deploy to Vercel on merge to main

## Phase 5 — Skills for Ongoing Development

Create these skills for future work:

\`\`\`
.claude/skills/add-feature.md   — scaffold new feature (component + API + test)
.claude/skills/review.md        — code review before PR
.claude/skills/deploy.md        — build, test, push to main
\`\`\`

## What You Have Built

\`\`\`
linkvault/
├── CLAUDE.md                    ← agent instructions
├── .claude/
│   ├── agents/                  ← specialized agents
│   └── skills/                  ← slash commands
├── .github/workflows/ci.yml     ← automated CI/CD
├── prisma/schema.prisma         ← database schema
└── src/
    ├── app/
    │   ├── (auth)/              ← login, register
    │   ├── (app)/dashboard/     ← main UI
    │   ├── share/[userId]/      ← public page
    │   └── api/links/           ← REST endpoints
    └── components/              ← reusable components
\`\`\`

## Reflection

Look at what you accomplished in ~70 minutes of supervised AI work:
- Full-stack Next.js application
- Authentication system
- REST API with authorization
- Complete frontend with search and filtering
- Integration tests
- Automated CI/CD pipeline
- Reusable agent team for future features

This is vibe coding at its full potential. You directed the work, made the decisions, and reviewed the output — Claude did the implementation. That division of labor is what makes modern AI-assisted development so powerful.

## What's Next

You now have all the tools: CLAUDE.md, modes, MCP, Skills, Subagents, Worktrees, and CI/CD. The most important next step is practice — take a real project you want to build and apply these techniques. Start with Module 11 patterns (install, configure), add a good CLAUDE.md, build your agent team, and let Claude help you ship faster than you ever have before.

**Welcome to the future of software development.**
`,

};
