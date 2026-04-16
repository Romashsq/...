"use client";

import Link from "next/link";
import {
  Zap, Trophy, ArrowRight, Star, CheckCircle2, ChevronRight,
  Sparkles, Code2, Rocket, Brain, Bot, Layers, Shield, TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LandingTicker } from "./landing-ticker";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useTranslation } from "@/hooks/use-translation";

// ============================================
// STATIC DATA
// ============================================

const tools = [
  { name: "ChatGPT", emoji: "🤖" },
  { name: "Claude", emoji: "🧠" },
  { name: "Cursor", emoji: "⚡" },
  { name: "Bolt.new", emoji: "🔥" },
  { name: "Lovable", emoji: "💜" },
  { name: "Midjourney", emoji: "🎨" },
  { name: "Make.com", emoji: "🔌" },
  { name: "Replit", emoji: "🚀" },
];

const testimonials = [
  {
    name: "Anna K.",
    role: "Marketer",
    textKey: "testimonial1",
    stars: 5,
    avatar: "A",
    avatarColor: "from-pink-500 to-rose-500",
  },
  {
    name: "Dmitry P.",
    role: "Entrepreneur",
    textKey: "testimonial2",
    stars: 5,
    avatar: "D",
    avatarColor: "from-blue-500 to-indigo-500",
  },
  {
    name: "Maria S.",
    role: "Freelancer",
    textKey: "testimonial3",
    stars: 5,
    avatar: "M",
    avatarColor: "from-emerald-500 to-teal-500",
  },
];

const testimonialTexts: Record<string, { ru: string; en: string }> = {
  testimonial1: {
    ru: "За месяц автоматизировала весь контент-маркетинг. Экономлю 15 часов в неделю. Никогда не думала, что смогу сделать это без программиста.",
    en: "In one month I automated all content marketing. Saving 15 hours a week. Never thought I could do it without a developer.",
  },
  testimonial2: {
    ru: "Собрал SaaS для HR без разработчика. Первые $500 пришли через неделю после запуска. VibeCode — лучшее вложение этого года.",
    en: "Built an HR SaaS without a developer. First $500 came a week after launch. VibeCode is the best investment this year.",
  },
  testimonial3: {
    ru: "Теперь берусь за проекты, которые раньше были недоступны. Доход вырос в 2.5 раза. Клиенты поражаются скорости.",
    en: "Now I take on projects that used to be out of reach. Income grew 2.5x. Clients are amazed at the speed.",
  },
};

const faqs: Record<string, { ru: string; en: string }> = {
  q1: { ru: "Нужны ли навыки программирования?", en: "Do I need programming skills?" },
  a1: { ru: "Нет. Курс создан именно для тех, кто не умеет программировать. Ты научишься строить продукты с помощью ИИ-инструментов.", en: "No. The course is designed for non-programmers. You'll learn to build products using AI tools." },
  q2: { ru: "Сколько времени нужно в день?", en: "How much time do I need per day?" },
  a2: { ru: "30–60 минут в день достаточно. Курс рассчитан на 4–6 недель при таком темпе.", en: "30–60 minutes a day is enough. The course is designed for 4–6 weeks at that pace." },
  q3: { ru: "Что если не понравится?", en: "What if I don't like it?" },
  a3: { ru: "Первые уроки бесплатны. Попробуй перед оплатой — регистрация занимает 30 секунд.", en: "First lessons are free. Try before you pay — sign up takes 30 seconds." },
  q4: { ru: "Как работает сертификат?", en: "How does the certificate work?" },
  a4: { ru: "После завершения всех уроков и финального проекта ты получаешь PDF-сертификат с уникальным ID.", en: "After completing all lessons and the final project you receive a PDF certificate with a unique ID." },
};

const modules: Record<string, { ru: string; en: string }> = {
  m0: { ru: "Добро пожаловать в мир ИИ", en: "Welcome to the World of AI" },
  m1: { ru: "Основы ИИ", en: "AI Fundamentals" },
  m2: { ru: "Промпт-инженерия", en: "Prompt Engineering" },
  m3: { ru: "Vibe Coding", en: "Vibe Coding" },
  m4: { ru: "API и интеграции", en: "APIs & Integrations" },
  m5: { ru: "ИИ-агенты", en: "AI Agents" },
  m6: { ru: "Дизайн с ИИ", en: "AI Design" },
  m7: { ru: "Автоматизация бизнеса", en: "Business Automation" },
  m8: { ru: "Портфолио и монетизация", en: "Portfolio & Monetization" },
  m9: { ru: "Финальный проект", en: "Final Project" },
};

const modulesData = [
  { key: "m0", emoji: "🚀", lessons: 3, free: true },
  { key: "m1", emoji: "🧠", lessons: 7, free: true },
  { key: "m2", emoji: "✍️", lessons: 7, free: true },
  { key: "m3", emoji: "⚡", lessons: 6, free: false },
  { key: "m4", emoji: "🔌", lessons: 6, free: false },
  { key: "m5", emoji: "🤖", lessons: 7, free: false },
  { key: "m6", emoji: "🎨", lessons: 6, free: false },
  { key: "m7", emoji: "📊", lessons: 5, free: false },
  { key: "m8", emoji: "💼", lessons: 5, free: false },
  { key: "m9", emoji: "🏆", lessons: 6, free: false },
];

// ============================================
// COMPONENT
// ============================================

export function LandingClient() {
  const { t, locale } = useTranslation();
  const l = (key: string) => t(`landing.${key}`);
  const pick = (obj: Record<string, { ru: string; en: string }>, key: string) =>
    locale === "ru" ? obj[key].ru : obj[key].en;

  const stats = [
    { value: "58+", label: l("statLessons") },
    { value: "10", label: l("statModules") },
    { value: "1 000+", label: l("statStudents") },
    { value: "10×", label: l("statFaster") },
  ];

  const features = [
    { icon: Brain, title: locale === "ru" ? "От нуля до продукта" : "Zero to product", desc: locale === "ru" ? "Структурированный путь: от первого промпта до запущенного SaaS с реальными пользователями." : "A structured path from your first prompt to a launched SaaS with real users.", color: "from-violet-500/20 to-violet-500/5", iconColor: "text-violet-400" },
    { icon: Trophy, title: locale === "ru" ? "Геймификация" : "Gamification", desc: locale === "ru" ? "XP, стрики, достижения и таблица лидеров. Учёба превращается в игру, в которой хочется побеждать." : "XP, streaks, achievements and leaderboard. Learning becomes a game you want to win.", color: "from-amber-500/20 to-amber-500/5", iconColor: "text-amber-400" },
    { icon: Code2, title: locale === "ru" ? "Реальные проекты" : "Real projects", desc: locale === "ru" ? "Telegram-бот, SaaS-сервис, ИИ-агент — каждый проект идёт в портфолио и может зарабатывать деньги." : "Telegram bot, SaaS, AI agent — every project goes in your portfolio and can make money.", color: "from-emerald-500/20 to-emerald-500/5", iconColor: "text-emerald-400" },
    { icon: Layers, title: locale === "ru" ? "Актуальный стек" : "Current stack", desc: locale === "ru" ? "ChatGPT, Claude, Cursor, Bolt, Make.com — только инструменты, которые реально используются в 2025." : "ChatGPT, Claude, Cursor, Bolt, Make.com — only tools actually used in 2025.", color: "from-blue-500/20 to-blue-500/5", iconColor: "text-blue-400" },
    { icon: Shield, title: locale === "ru" ? "Пожизненный доступ" : "Lifetime access", desc: locale === "ru" ? "Курс постоянно обновляется. Купи один раз — получай все обновления навсегда без доплат." : "The course is constantly updated. Buy once — get all updates forever at no extra cost.", color: "from-rose-500/20 to-rose-500/5", iconColor: "text-rose-400" },
    { icon: Rocket, title: locale === "ru" ? "Сертификат" : "Certificate", desc: locale === "ru" ? "Официальный диплом промпт-инженера, который добавишь в LinkedIn и портфолио." : "An official prompt engineer certificate to add to LinkedIn and your portfolio.", color: "from-orange-500/20 to-orange-500/5", iconColor: "text-orange-400" },
  ];

  const steps = [
    { num: "01", title: l("step1Title"), desc: l("step1Desc") },
    { num: "02", title: l("step2Title"), desc: l("step2Desc") },
    { num: "03", title: l("step3Title"), desc: l("step3Desc") },
  ];

  const pricingPlans = [
    {
      name: locale === "ru" ? "Бесплатно" : "Free",
      price: "$0",
      period: l("forever"),
      description: locale === "ru" ? "Попробуй без риска" : "Try without risk",
      features: locale === "ru"
        ? ["Первые 3 урока каждого модуля", "Система XP и достижений", "Квизы и практические задания", "Таблица лидеров"]
        : ["First 3 lessons of each module", "XP and achievement system", "Quizzes and practice tasks", "Leaderboard"],
      cta: l("startFree"),
      href: "/register",
      highlighted: false,
    },
    {
      name: locale === "ru" ? "Полный доступ" : "Full Access",
      price: "$49",
      period: l("oneTime"),
      description: locale === "ru" ? "Всё включено навсегда" : "Everything included forever",
      features: locale === "ru"
        ? ["Все 58+ уроков без ограничений", "Финальные проекты с проверкой", "Сертификат промпт-инженера", "Все будущие обновления", "Приоритетная поддержка"]
        : ["All 58+ lessons unlimited", "Final projects with review", "Prompt engineer certificate", "All future updates", "Priority support"],
      cta: locale === "ru" ? "Получить полный доступ" : "Get full access",
      href: "/register",
      highlighted: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#070810] text-white overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#070810]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/30 transition-all">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-syne font-bold text-lg">VibeCode Academy</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
            <a href="#curriculum" className="hover:text-white transition-colors">{l("navCurriculum")}</a>
            <a href="#how" className="hover:text-white transition-colors">{l("navHow")}</a>
            <a href="#pricing" className="hover:text-white transition-colors">{l("navPricing")}</a>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">{l("navLogin")}</Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {l("startFree")}
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/8 rounded-full blur-[100px]" />
          <div className="absolute top-40 left-1/4 w-64 h-64 bg-violet-500/6 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-64 h-64 bg-blue-500/6 rounded-full blur-3xl" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {l("badge")}
          </div>

          <h1 className="font-syne text-5xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
            {l("heroTitle1")}{" "}
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              {l("heroTitle2")}
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {l("heroDesc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/register">
              <Button size="xl" className="gap-2 text-base px-10 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all">
                {l("startFree")}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="#curriculum">
              <Button size="xl" variant="outline" className="text-base px-8 border-white/15 hover:border-white/30">
                {l("viewCurriculum")}
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="font-syne text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="border-y border-white/5 bg-white/[0.02] py-3 overflow-hidden">
        <LandingTicker />
      </div>

      {/* ── TOOLS ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-8">{l("toolsLabel")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <div key={tool.name} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/[0.03] text-sm text-gray-400 hover:border-white/20 hover:text-white transition-all cursor-default">
                <span>{tool.emoji}</span>
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW ── */}
      <section id="how" className="py-20 px-6 border-t border-white/5 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-mono uppercase tracking-widest mb-3">{l("howLabel")}</p>
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">{l("howTitle")}</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">{l("howDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px border-t border-dashed border-white/10 z-0 -translate-x-6" />
                )}
                <div className="relative z-10 p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all group">
                  <div className="font-syne text-5xl font-bold text-white/5 mb-4 group-hover:text-emerald-500/10 transition-colors">{step.num}</div>
                  <h3 className="font-syne font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-mono uppercase tracking-widest mb-3">{l("featuresLabel")}</p>
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">{l("featuresTitle")}</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">{l("featuresDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-white/15 transition-all group">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5`}>
                    <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                  </div>
                  <h3 className="font-syne font-bold text-white mb-2 text-lg">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GAMIFICATION ── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-emerald-400 text-sm font-mono uppercase tracking-widest mb-3">{l("gamLabel")}</p>
              <h2 className="font-syne text-4xl font-bold mb-5">{l("gamTitle")}</h2>
              <p className="text-gray-400 leading-relaxed mb-8">{l("gamDesc")}</p>
              <div className="space-y-3">
                {[
                  { icon: "⚡", text: locale === "ru" ? "XP за каждый урок и квиз" : "XP for every lesson and quiz" },
                  { icon: "🔥", text: locale === "ru" ? "Стрики за ежедневное обучение" : "Streaks for daily learning" },
                  { icon: "🏆", text: locale === "ru" ? "10 уникальных достижений" : "10 unique achievements" },
                  { icon: "📊", text: locale === "ru" ? "Таблица лидеров среди студентов" : "Student leaderboard" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-gray-300">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl border border-white/10 bg-[#0c0e17] p-5 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/8">
                  <span className="font-syne font-bold text-white text-sm">
                    {locale === "ru" ? "Твой прогресс" : "Your progress"}
                  </span>
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1">
                    <Star className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400 text-xs font-semibold">2 840 XP</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span className="text-emerald-400/80">
                      {locale === "ru" ? "Ур.4 — Промпт-инженер" : "Lvl.4 — Prompt Engineer"}
                    </span>
                    <span className="text-emerald-400">2840 / 4000 XP</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 w-[71%]" />
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-orange-500/5 border border-orange-500/15">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <div className="text-orange-400 font-bold text-lg leading-none">
                      {locale === "ru" ? "12 дней" : "12 days"}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">
                      {locale === "ru" ? "стрик не прерван" : "streak intact"}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-2">
                    {locale === "ru" ? "Последние достижения" : "Recent achievements"}
                  </p>
                  <div className="flex gap-2">
                    {["🎯", "⚡", "🔥", "🧠", "🏆"].map((emoji, i) => (
                      <div key={i} className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg border ${i < 3 ? "border-emerald-500/30 bg-emerald-500/10" : "border-white/5 bg-white/[0.02] opacity-40"}`}>
                        {emoji}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-medium truncate">
                      {locale === "ru" ? "Промпты для кода — пройдено" : "Code prompts — completed"}
                    </p>
                    <p className="text-gray-500 text-[10px]">+150 XP · {locale === "ru" ? "только что" : "just now"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section id="curriculum" className="py-20 px-6 border-t border-white/5 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-emerald-400 text-sm font-mono uppercase tracking-widest mb-3">{l("curriculumLabel")}</p>
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">{l("curriculumTitle")}</h2>
            <p className="text-gray-400">{l("curriculumDesc")}</p>
          </div>
          <div className="space-y-2">
            {modulesData.map((mod, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all group cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-xl flex-shrink-0">{mod.emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-white text-sm">{pick(modules, mod.key)}</span>
                    {mod.free && <Badge variant="free" className="text-[10px]">{l("free")}</Badge>}
                  </div>
                  <span className="text-gray-600 text-xs">{mod.lessons} {l("lessons")}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
            ))}
          </div>
          <div className="text-center pt-6">
            <Link href="/register">
              <Button className="gap-2">{l("curriculumCta")} <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-emerald-400 text-sm font-mono uppercase tracking-widest mb-3">{l("testimonialsLabel")}</p>
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">{l("testimonialsTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl border border-white/8 bg-white/[0.02] flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-1">&ldquo;{pick(testimonialTexts, t.textKey)}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-20 px-6 border-t border-white/5 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-emerald-400 text-sm font-mono uppercase tracking-widest mb-3">{l("pricingLabel")}</p>
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">{l("pricingTitle")}</h2>
            <p className="text-gray-400">{l("pricingDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`p-6 rounded-2xl border transition-all relative ${plan.highlighted ? "border-emerald-500/40 bg-emerald-500/5" : "border-white/8 bg-white/[0.02]"}`}>
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-4 py-0.5 text-xs shadow-lg shadow-emerald-500/20">{l("popular")}</Badge>
                  </div>
                )}
                <h3 className="font-syne font-bold text-white text-lg mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-5">{plan.description}</p>
                <div className="mb-6">
                  <span className="font-syne text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500 text-sm ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={plan.href}>
                  <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>{plan.cta}</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-emerald-400 text-sm font-mono uppercase tracking-widest mb-3">{l("faqLabel")}</p>
            <h2 className="font-syne text-4xl font-bold mb-4">{l("faqTitle")}</h2>
          </div>
          <div className="space-y-3">
            {(["1", "2", "3", "4"] as const).map((n) => (
              <details key={n} className="group rounded-xl border border-white/8 bg-white/[0.02] overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none text-white font-medium text-sm hover:text-emerald-400 transition-colors">
                  {pick(faqs, `q${n}`)}
                  <ChevronRight className="w-4 h-4 text-gray-600 flex-shrink-0 group-open:rotate-90 transition-transform duration-200" />
                </summary>
                <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {pick(faqs, `a${n}`)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/8 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-sm mb-6">
            <Bot className="w-3.5 h-3.5" />
            {l("ctaBadge")}
          </div>
          <h2 className="font-syne text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {l("ctaTitle1")}<br />
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
              {l("ctaTitle2")}
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">{l("ctaDesc")}</p>
          <Link href="/register">
            <Button size="xl" className="gap-2 text-base px-12 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all">
              {l("startFree")}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <p className="text-gray-600 text-sm mt-5">{l("ctaNote")}</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-syne font-bold text-white">VibeCode Academy</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#curriculum" className="hover:text-white transition-colors">{l("navCurriculum")}</a>
              <a href="#pricing" className="hover:text-white transition-colors">{l("navPricing")}</a>
              <Link href="/login" className="hover:text-white transition-colors">{l("navLogin")}</Link>
              <Link href="/register" className="hover:text-white transition-colors">{l("startFree")}</Link>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 text-sm">{l("footerRights")}</p>
            <div className="flex items-center gap-1.5 text-gray-700 text-sm">
              <TrendingUp className="w-3.5 h-3.5" />
              {l("footerMade")}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
