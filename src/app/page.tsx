"use client";

import { useState } from "react";

/* ───────── ICONS (inline SVG) ───────── */
const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5L10 12.5L15 7.5"/></svg>
);

/* ───────── NAV ───────── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-navy-dark/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white">
            <span className="text-electric">Spawn</span>OS
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#pain" className="hover:text-white transition">Why SpawnOS</a>
          <a href="#how" className="hover:text-white transition">How It Works</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </div>
        <a
          href="#join-waitlist"
          className="bg-electric hover:bg-electric-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25"
        >
          Get SpawnOS
        </a>
      </div>
    </nav>
  );
}

/* ───────── HERO ───────── */
function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green pulse-glow" />
          Production-Grade AI Team Infrastructure
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
          Stop Working Solo.
          <br />
          <span className="bg-gradient-to-r from-electric via-cyan to-green bg-clip-text text-transparent">
            Start Spawning.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Build your AI COO + 12 specialist agents this weekend. Copy the exact system
          running a <span className="text-white font-semibold">$14.2K/month business</span> — configs, templates,
          team architecture, everything.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#join-waitlist"
            className="w-full sm:w-auto bg-electric hover:bg-electric-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-electric/30 glow-electric"
          >
            Get SpawnOS — From $17
          </a>
          <a
            href="#how"
            className="w-full sm:w-auto border border-white/10 hover:border-white/20 text-white font-medium text-lg px-8 py-4 rounded-xl transition-all hover:bg-white/5"
          >
            See How It Works
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { num: "125", label: "Workspace Files" },
            { num: "12", label: "AI Specialists" },
            { num: "6+", label: "Production Crons" },
            { num: "4hr", label: "Setup Time" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white font-mono">{s.num}</div>
              <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── CREDIBILITY BAR ───────── */
function CredibilityBar() {
  return (
    <section className="py-8 bg-electric/5 border-y border-electric/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm md:text-base text-gray-300">
          <span className="text-white font-semibold">Built by the team behind Elixser Peptides</span> — managing{" "}
          <span className="text-electric font-semibold">$80K/month</span> in operations with{" "}
          <span className="text-electric font-semibold">12 autonomous AI agents</span>
        </p>
      </div>
    </section>
  );
}

/* ───────── SOCIAL PROOF BAR ───────── */
function ProofBar() {
  const proofs = [
    { icon: "💰", text: "$14.2K revenue in February 2026" },
    { icon: "📁", text: "21 marketing files generated in 4 hours" },
    { icon: "🤖", text: "12 AI agents running autonomously 24/7" },
    { icon: "⚡", text: "Complete funnel built overnight" },
  ];
  return (
    <section className="py-12 border-y border-white/5 bg-navy/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofs.map((p) => (
            <div key={p.text} className="flex items-start gap-3 text-sm">
              <span className="text-xl">{p.icon}</span>
              <span className="text-gray-300">{p.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── PAIN POINTS ───────── */
function PainPoints() {
  const pains = [
    {
      icon: "🔥",
      title: "Doing Everything Yourself",
      desc: "Working 60-80 hour weeks. CEO, CMO, COO, CFO — all one person. Revenue plateaued because YOU are the bottleneck.",
    },
    {
      icon: "💸",
      title: "Can't Afford to Hire",
      desc: "Next employee costs $50-80K + benefits + management overhead. Freelancers and VAs require more coordination than the tasks themselves.",
    },
    {
      icon: "🤯",
      title: "AI Setup Hell",
      desc: "3 weekends debugging Docker. $23 surprise API bills. Agent forgets everything overnight. You're about to Google \"OpenClaw alternative no setup.\"",
    },
    {
      icon: "📉",
      title: "Scaling Impossible",
      desc: "Turning down clients because you can't take more on. Revenue stuck at $40-120K. Every growth initiative means more hours you don't have.",
    },
  ];
  return (
    <section id="pain" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-electric text-sm font-semibold tracking-widest uppercase mb-3">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            You&apos;re Drowning. And It&apos;s Getting Worse.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Sound familiar? You&apos;re not alone. These are the top pain points from 167K+ OpenClaw community members.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {pains.map((p) => (
            <div
              key={p.title}
              className="bg-navy-light/50 border border-white/5 rounded-2xl p-8 hover:border-red/20 transition-colors"
            >
              <span className="text-3xl mb-4 block">{p.icon}</span>
              <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── HOW IT WORKS ───────── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Install the System",
      desc: "Download 125 production-tested workspace files. Follow the 4-hour setup guide. No coding required — just copy, paste, configure.",
      detail: "AGENTS.md • MEMORY.md • TEAM-CAPABILITIES.md • Config templates • Cron jobs",
    },
    {
      num: "02",
      title: "Spawn Your Team",
      desc: "Deploy your AI COO + specialized agents. Start with 3-5 specialists, scale to 12. Clear roles, delegation matrix, decision boundaries.",
      detail: "COO orchestrator • Content specialist • Research analyst • Ops manager • Finance tracker",
    },
    {
      num: "03",
      title: "Delegate & Automate",
      desc: "Hand off operations to your AI team. Daily briefings, financial reports, content production, CRM management — all running 24/7.",
      detail: "Daily research briefings • Weekly financial reports • Automated monitoring • Mission Control",
    },
    {
      num: "04",
      title: "Scale Without Hiring",
      desc: "Your AI team handles the repetitive 70%. You focus on the strategic 30%. Add agents and automation as your business grows.",
      detail: "$3/week costs • 20-30 hrs/week saved • No management overhead • Compounds over time",
    },
  ];
  return (
    <section id="how" className="py-20 md:py-32 bg-navy/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            From Solo to AI Team in One Weekend
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Not months of learning. Not theory. A proven 4-step process to production AI operations.
          </p>
        </div>
        <div className="space-y-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="relative bg-navy-light/40 border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-6 hover:border-electric/20 transition-colors group"
            >
              <div className="text-5xl font-extrabold text-electric/20 group-hover:text-electric/40 transition-colors font-mono shrink-0 md:w-24">
                {s.num}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-3">{s.desc}</p>
                <p className="text-sm font-mono text-cyan/60">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── SCREENSHOT PLACEHOLDERS ───────── */
function ScreenshotPlaceholders() {
  const screenshots = [
    { label: "Screenshot: Mission Control Dashboard — real-time agent status & task queue", icon: "🖥️" },
    { label: "Screenshot: Telegram notifications — AI agents reporting completed tasks", icon: "📱" },
    { label: "Screenshot: AI agents completing tasks in real-time workspace output", icon: "⚡" },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-electric text-sm font-semibold tracking-widest uppercase mb-3">See It In Action</p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Real Infrastructure. Real Operations.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {screenshots.map((s) => (
            <div
              key={s.label}
              className="bg-navy-light/30 border border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[220px]"
            >
              <span className="text-4xl mb-4">{s.icon}</span>
              <p className="text-sm text-gray-500 italic">[{s.label}]</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── RESULTS / SOCIAL PROOF ───────── */
function Results() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-green text-sm font-semibold tracking-widest uppercase mb-3">Real Results</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            This Isn&apos;t Theory. This Is Production.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Every number below is from a real business. Not projections. Not demos. Daily operations for 4+ months.
          </p>
        </div>

        {/* Big stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { num: "$14.2K", label: "Monthly Revenue", sub: "February 2026" },
            { num: "21", label: "Files Generated", sub: "In 4 hours" },
            { num: "87%", label: "Cost Reduction", sub: "$23/wk → $3/wk" },
            { num: "12", label: "AI Specialists", sub: "Running 24/7" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-navy-light/50 border border-white/5 rounded-2xl p-6 text-center hover:border-green/20 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white font-mono mb-1">{s.num}</div>
              <div className="text-sm font-semibold text-gray-300 mb-1">{s.label}</div>
              <div className="text-xs text-gray-500">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Before/after comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red/5 border border-red/10 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-red mb-4">❌ Without SpawnOS</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>3 weekends debugging setup</li>
              <li>$23/week surprise API bills</li>
              <li>Agent forgets context daily</li>
              <li>Solo execution — you&apos;re the bottleneck</li>
              <li>Manual monitoring, silent failures</li>
              <li>60-80 hour work weeks</li>
            </ul>
          </div>
          <div className="bg-green/5 border border-green/10 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-green mb-4">✅ With SpawnOS</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>4-hour guided setup, works first time</li>
              <li>$3/week optimized, predictable costs</li>
              <li>Memory architecture that compounds</li>
              <li>12-agent delegation — team executes</li>
              <li>Mission Control dashboard + auto-alerts</li>
              <li>Focus on strategy, 20-30 hrs saved/week</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── URGENCY BANNER ───────── */
function UrgencyBanner() {
  return (
    <div className="bg-gradient-to-r from-electric/10 via-cyan/10 to-green/10 border border-electric/20 rounded-2xl p-6 md:p-8 text-center mb-12">
      <p className="text-2xl md:text-3xl font-extrabold text-white mb-2">
        🔥 47 of 100 founding spots remaining
      </p>
      <p className="text-gray-300 text-sm md:text-base">
        First 100 founding members get <span className="text-green font-bold">lifetime access at $297</span> — then it goes to $497/year
      </p>
    </div>
  );
}

/* ───────── PRICING ───────── */
function Pricing() {
  const tiers = [
    {
      name: "Quick Start",
      tag: "Tripwire",
      price: "$17",
      desc: "The $23 → $3 Framework. Cut your OpenClaw costs 87% in one weekend.",
      features: [
        "6-pillar cost optimization system",
        "Token tracking dashboard template",
        "Model selection matrix",
        "Context optimization guide",
        "Production config file (copy-paste)",
        "Cost decision trees",
        "Lifetime updates",
      ],
      cta: "Get Quick Start — $17",
      highlight: false,
      color: "electric",
    },
    {
      name: "SpawnOS Core",
      tag: "Most Popular",
      price: "$197",
      desc: "The complete AI Team Operating System. 21 comprehensive modules + production configs + case studies.",
      features: [
        "Everything in Quick Start",
        "21 step-by-step modules",
        "125 workspace file templates",
        "12-agent team architecture",
        "Memory & delegation systems",
        "GHL, Google, e-commerce integrations",
        "Cron automation templates",
        "Mission Control dashboard",
        "3 real business case studies",
        "Discord community (3 months)",
        "30-day money-back guarantee",
      ],
      cta: "Get SpawnOS Core — $197",
      highlight: true,
      color: "electric",
      payment: "or 3 × $67/mo",
    },
    {
      name: "Speed Pack",
      tag: "Done-With-You",
      price: "$397",
      desc: "The Complete Acceleration Bundle. Skip 80% of trial-and-error. Deploy in 2 hours, not 15. Includes priority support + quarterly strategy calls.",
      features: [
        "Everything in Core",
        "MEMORY.md starter kit",
        "5 business-model team templates",
        "12 ready-to-deploy cron jobs",
        "GHL integration scripts (full CRUD)",
        "Mission Control (Vercel-ready)",
        "Cost optimization config bundle",
        "Google & e-commerce boilerplates",
        "30-minute deployment checklist",
        "Priority email support (48hr response)",
        "Quarterly group strategy call access",
      ],
      cta: "Get Speed Pack — $397",
      highlight: false,
      color: "cyan",
      payment: "or 3 × $139/mo",
    },
    {
      name: "Founding Member",
      tag: "Limited — 100 Spots",
      price: "$297",
      desc: "Lifetime access to SpawnOS + SpawnLab. Everything, forever. Normally $497/year — founding members pay once.",
      features: [
        "Everything in Speed Pack",
        "Lifetime access (never pay again)",
        "Monthly new modules & updates",
        "Live monthly Q&A sessions",
        "Quarterly advanced workshops",
        "Private Discord (lifetime access)",
        "Early access to new frameworks",
        "Partner discounts ($200+/yr value)",
        "Quarterly Show & Tell sessions",
      ],
      cta: "Claim Founding Spot — $297",
      highlight: false,
      color: "green",
      special: "🔥 Only 47 founding spots left — normally $497/year",
    },
  ];
  return (
    <section id="pricing" className="py-20 md:py-32 bg-navy/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-electric text-sm font-semibold tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Choose Your Spawning Level
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Every tier includes production-tested infrastructure. Not theory. Not demos. Real systems you can deploy this weekend.
          </p>
        </div>

        <UrgencyBanner />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                t.highlight
                  ? "bg-navy-light border-2 border-electric glow-electric"
                  : "bg-navy-light/50 border border-white/5"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-electric text-white text-xs font-bold px-4 py-1 rounded-full">
                  {t.tag}
                </div>
              )}
              {!t.highlight && (
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{t.tag}</span>
              )}
              <h3 className="text-xl font-bold text-white mb-1">{t.name}</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-extrabold text-white font-mono">{t.price}</span>
              </div>
              {t.payment && <p className="text-xs text-gray-500 mb-3">{t.payment}</p>}
              {t.special && <p className="text-xs text-green font-semibold mb-3">{t.special}</p>}
              <p className="text-sm text-gray-400 mb-6">{t.desc}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#join-waitlist"
                className={`block text-center font-semibold py-3 rounded-xl transition-all ${
                  t.highlight
                    ? "bg-electric hover:bg-electric-dark text-white hover:shadow-lg hover:shadow-electric/25"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          All plans include a 30-day money-back guarantee. If you implement the system and it doesn&apos;t work, you get a full refund.
        </p>
      </div>
    </section>
  );
}

/* ───────── WHO THIS IS FOR ───────── */
function WhoFor() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            This Probably Isn&apos;t For You
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">And that&apos;s okay. SpawnOS is powerful but it&apos;s not magic.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green/5 border border-green/10 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-green mb-5">✅ Great Fit If You...</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Are willing to invest 4 hours this weekend to set up</li>
              <li>Use tools like Notion, Zapier, or Google Workspace</li>
              <li>Want to copy working infrastructure, not build from scratch</li>
              <li>Are growth-oriented and ready to customize for your business</li>
              <li>Understand AI teams need orchestration — you&apos;re the CEO</li>
            </ul>
          </div>
          <div className="bg-red/5 border border-red/10 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-red mb-5">❌ Not For You If You...</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Want a magic button that does everything with zero effort</li>
              <li>Expect 100% hands-off from day 1</li>
              <li>Aren&apos;t willing to invest a weekend in setup</li>
              <li>Are completely uncomfortable with technology</li>
              <li>Want someone to build and manage it all for you</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── BUILT BY ───────── */
function BuiltBy() {
  return (
    <section className="py-16 md:py-24 bg-navy/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-4">From the Makers of</p>
        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Elixser Peptides</h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          SpawnOS was born inside a real business doing <span className="text-white font-semibold">$80K/month</span> in revenue.
          We built the AI team infrastructure to run operations, then packaged it so you can deploy the same system.
          12 autonomous agents. 125 production files. 4+ months in daily production. Zero theory — all battle-tested.
        </p>
        <div className="inline-flex items-center gap-3 bg-navy-light/50 border border-white/10 rounded-full px-6 py-3">
          <span className="w-2 h-2 rounded-full bg-green pulse-glow" />
          <span className="text-sm text-gray-300">Currently powering $80K/month in live operations</span>
        </div>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */
function FAQ() {
  const faqs = [
    {
      q: "I'm not technical. Can I really do this?",
      a: "If you can use Notion or Zapier, you can use SpawnOS. No coding required. We provide step-by-step guides, copy-paste configs, and community support. 80% of our users started with zero terminal experience.",
    },
    {
      q: "How is this different from ChatGPT?",
      a: "ChatGPT is one AI. SpawnOS teaches you to spawn an entire team with memory, automation, and specialized roles. One chatbot vs a 12-agent orchestra. The difference is 10x productivity vs 100x productivity.",
    },
    {
      q: "Will this work for my specific business?",
      a: "The infrastructure is universal — memory architecture, token tracking, team delegation, cron automation work for ANY business. E-commerce, services, agencies, coaches, SaaS. You customize the agents and workflows for your domain.",
    },
    {
      q: "How long until I see results?",
      a: "Week 1: Setup complete, first delegations working. Week 2-3: Operations automated, 10-20 hours saved. Month 2-3: Revenue impact from better execution. Typical ROI: 2-4 weeks to break even on investment.",
    },
    {
      q: "What if AI tools change?",
      a: "SpawnOS teaches spawning principles that work across any AI platform. Memory architecture, team delegation, cost optimization — these are system-design patterns, not tool tricks. Plus founding members get lifetime updates as tools evolve.",
    },
    {
      q: "Is this just another AI course?",
      a: "No. SpawnOS is an operating system, not a course. You're installing production infrastructure — the same configs, templates, and team architecture running a $14.2K/month business. Not watching videos about what's possible.",
    },
    {
      q: "What if something breaks?",
      a: "The system includes error monitoring (alerts when issues occur), automated recovery scripts, and troubleshooting docs. Plus community support and direct help for VIP members. Zero catastrophic failures in 4+ months of production.",
    },
    {
      q: "Can I get a refund?",
      a: "Yes. 30-day money-back guarantee on all tiers. If you implement the system and don't have a working AI team managing at least 3 operations, email us for a full refund. No questions asked. You keep the bonuses.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 bg-navy/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Questions? Answers.
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="border border-white/5 rounded-xl overflow-hidden bg-navy-light/30"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-white font-semibold pr-4">{f.q}</span>
                <span
                  className={`shrink-0 text-gray-500 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown />
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── EMAIL CAPTURE FORM ───────── */
function EmailCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, open mailto as fallback
    window.location.href = `mailto:hello@aminomastery.com?subject=SpawnOS Waitlist&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}`;
    setSubmitted(true);
  };

  return (
    <section id="join-waitlist" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric/5 rounded-full blur-[150px]" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Your AI Team Is
          <span className="bg-gradient-to-r from-electric via-cyan to-green bg-clip-text text-transparent"> One Weekend </span>
          Away
        </h2>
        <p className="text-lg text-gray-400 mb-4 max-w-xl mx-auto">
          Every week you wait is another 60-80 hour week. Another month stuck as the bottleneck.
          Copy the system. Spawn your team. Start this weekend.
        </p>

        {/* Urgency */}
        <p className="text-green font-bold text-lg mb-8">
          🔥 47 of 100 founding spots remaining — $297 lifetime access
        </p>

        {submitted ? (
          <div className="bg-green/10 border border-green/20 rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-2xl mb-2">🎉</p>
            <p className="text-white font-bold text-xl mb-2">You&apos;re on the list!</p>
            <p className="text-gray-400 text-sm">We&apos;ll be in touch with early access details.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mb-8">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-5 py-3.5 bg-navy-light border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-electric transition-colors"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3.5 bg-navy-light border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-electric transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-electric hover:bg-electric-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-electric/30 glow-electric"
            >
              Get SpawnOS Now
            </button>
          </form>
        )}

        <p className="text-sm text-gray-500">
          30-day money-back guarantee · Lifetime updates · Production-tested infrastructure
        </p>
      </div>
    </section>
  );
}

/* ───────── FOOTER ───────── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} SpawnOS. The Operating System for Spawning AI Teams.
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-300 transition">Privacy</a>
          <a href="#" className="hover:text-gray-300 transition">Terms</a>
          <a href="mailto:support@spawnos.io" className="hover:text-gray-300 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

/* ───────── PAGE ───────── */
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <CredibilityBar />
      <ProofBar />
      <PainPoints />
      <HowItWorks />
      <ScreenshotPlaceholders />
      <Results />
      <Pricing />
      <WhoFor />
      <BuiltBy />
      <FAQ />
      <EmailCapture />
      <Footer />
    </>
  );
}
