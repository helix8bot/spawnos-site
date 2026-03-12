"use client";

import { useState } from "react";
import type { Tier } from "@/lib/commerce";

const sectionPhotos = {
  hero: {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    alt: "Founder working late at a dark desk setup with a laptop and glowing screens.",
  },
  pain: {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    alt: "Operator working late at a laptop, showing the strain of running everything alone.",
  },
  mechanism: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    alt: "Clean multi-monitor workspace set up like an automation command center.",
  },
  proof: {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
    alt: "Confident operators reviewing growth metrics together on a laptop.",
  },
  pricing: {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    alt: "Modern remote work setup with a laptop in a premium coworking-style space.",
  },
  faq: {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
    alt: "Relaxed entrepreneurs having a calm conversation in a modern workspace.",
  },
  finalCta: {
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
    alt: "City skyline at sunset suggesting momentum, ambition, and a strong next chapter.",
  },
};

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LightningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
    <path d="M13 2 5 14h5l-1 8 8-12h-5l1-8Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
    <circle cx="12" cy="5" r="2.5" />
    <circle cx="6" cy="17" r="2.5" />
    <circle cx="18" cy="17" r="2.5" />
    <path d="M10.2 6.9 7.8 14.8M13.8 6.9l2.4 7.9M8.5 17h7" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="check-icon h-5 w-5">
    <path d="M4.5 10.5 8 14l7.5-8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const proofCards = [
  {
    icon: <ClockIcon />,
    title: "Reports in 3 min",
    copy: "Reports delivered in 3 minutes — so you stop waiting hours or days for insight and start making faster decisions.",
  },
  {
    icon: <LightningIcon />,
    title: "Websites built in 11 min",
    copy: "Full websites built in 11 minutes — so launches, tests, and offers stop getting stuck behind your bandwidth.",
  },
  {
    icon: <NetworkIcon />,
    title: "12 agents running 24/7",
    copy: "12 autonomous agents running 24/7 — so work keeps moving even when you are offline, asleep, or focused elsewhere.",
  },
];

const pricingTiers: Array<{
  name: string;
  price: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
  badge: string | null;
  emphasized: boolean;
  premium: boolean;
  note?: string;
  checkoutTier?: Tier;
}> = [
  {
    name: "SpawnOS Quickstart Playbook",
    price: "$17",
    description:
      "Get the standalone framework that shows you how to stop working solo and start structuring your first AI team fast.",
    bullets: [
      "Plan your AI team structure in one sitting with the exact operating model that removes you as the bottleneck.",
      "Eliminate tool chaos fast by seeing how an AI team is organized instead of guessing with random prompts.",
      "Replace scattered experimentation with a clear blueprint for roles, delegation, and execution.",
      "Create your first working AI team map today so you know what to build first and what to ignore.",
      "Start buying back operator time immediately with the simplest path to 20-30 hours/week saved.",
    ],
    cta: "Start Building Your AI Team →",
    href: "#final-cta",
    checkoutTier: "starter",
    badge: null,
    emphasized: false,
    premium: false,
  },
  {
    name: "SpawnOS Full System",
    price: "$67",
    description:
      "Install the complete methodology for spawning your AI COO and specialist team using the same production logic behind a real $100K+/month operator framework.",
    bullets: [
      "Plan your full operating system with the exact structure behind 12 autonomous agents running 24/7.",
      "Eliminate weeks of setup confusion by following a proven path instead of piecing together docs, prompts, and YouTube videos.",
      "Replace AI tool usage with AI team execution so work keeps moving without everything flowing through you.",
      "Create reports, content, websites, and workflows faster with the same system that delivers reports in 3 minutes and websites in 11 minutes.",
      "Turn one overworked operator into a leveraged operator with the exact framework built to run e-commerce brands and agencies doing $100K+ per month.",
    ],
    cta: "Install the Full System →",
    href: "#final-cta",
    checkoutTier: "system",
    badge: "Most Popular",
    emphasized: true,
    premium: false,
  },
  {
    name: "SpawnOS Bespoke Build",
    price: "$147",
    description:
      "We build it. You run it. Custom OpenClaw AI team setup for your business with white-glove onboarding and limited application-only spots.",
    bullets: [
      "Plan your custom AI team around your actual business model instead of forcing generic templates onto a unique operation.",
      "Eliminate technical setup friction with a white-glove implementation path designed to get you live faster.",
      "Replace DIY guessing with bespoke infrastructure matched to your offers, workflows, and growth bottlenecks.",
      "Create a working AI team for your business—not someone else's demo—with guided deployment and practical handoff.",
      "Skip straight to leverage so you can start operating with your team instead of spending weeks trying to piece one together.",
    ],
    cta: "Apply for Custom Build →",
    href: "https://launch.spawnos.io",
    badge: null,
    emphasized: false,
    premium: true,
    note: "Limited spots — application required",
  },
];

function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      <img
        src={sectionPhotos.hero.src}
        alt={sectionPhotos.hero.alt}
        className="h-full min-h-[560px] w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.12),rgba(10,10,10,0.78)_45%,rgba(10,10,10,0.96))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.2),transparent_35%)]" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 lg:p-7">
        <div className="flex h-full flex-col gap-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/35 px-4 py-3 text-sm text-zinc-300 backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Mission Control</p>
              <p className="mt-1 text-sm font-semibold text-zinc-100">AI team command center</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-300">
              <span className="h-2 w-2 rounded-full bg-red-400" /> 12 live
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="metric-tile">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Daily reporting</p>
              <p className="mt-3 text-3xl font-extrabold text-white">3 min</p>
              <p className="mt-2 text-sm text-zinc-400">Reports delivered before you open your inbox.</p>
            </div>
            <div className="metric-tile">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Build velocity</p>
              <p className="mt-3 text-3xl font-extrabold text-white">11 min</p>
              <p className="mt-2 text-sm text-zinc-400">Landing pages shipped without waiting on your bandwidth.</p>
            </div>
          </div>

          <div className="metric-tile">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Agent network</p>
                <p className="mt-1 text-lg font-semibold text-white">Roles, memory, delegation, execution</p>
              </div>
              <p className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-200">
                $14.2K on $1.5K ad spend
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["COO", "Routing live"],
                ["Content", "Queued"],
                ["Ops", "Monitoring"],
                ["Research", "Active"],
                ["Web", "Deploying"],
                ["QA", "Passed"],
              ].map(([name, status]) => (
                <div key={name} className="rounded-xl border border-white/6 bg-zinc-950/70 px-3 py-3">
                  <p className="text-sm font-semibold text-zinc-100">{name}</p>
                  <p className="mt-1 text-xs text-zinc-500">{status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">{body}</p> : null}
    </div>
  );
}

function SectionImage({ src, alt, eager = false, height = "h-[320px] sm:h-[420px]" }: { src: string; alt: string; eager?: boolean; height?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 ${height}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08),rgba(10,10,10,0.18)_45%,rgba(10,10,10,0.5))]" />
    </div>
  );
}

export default function Home() {
  const [loadingTier, setLoadingTier] = useState<Tier | null>(null);

  async function startCheckout(tier: Tier) {
    try {
      setLoadingTier(tier);
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });

      const data = await response.json();

      if (!response.ok || !data?.url) {
        alert(data?.error || "Checkout coming soon — email build@spawnos.io");
        return;
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Checkout start failed", error);
      alert("Checkout coming soon — email build@spawnos.io");
    } finally {
      setLoadingTier(null);
    }
  }

  return (
    <main className="page-shell">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="section-wrap flex h-16 items-center justify-between gap-4">
          <a href="#top" className="text-sm font-extrabold uppercase tracking-[0.3em] text-zinc-100">
            <span className="text-red-400">Spawn</span>OS
          </a>
          <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <a href="#pain" className="transition hover:text-white">Why SpawnOS</a>
            <a href="#mechanism" className="transition hover:text-white">How it works</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>
          <a href="#pricing" className="primary-btn text-xs sm:text-sm">Start Spawning My AI Team</a>
        </div>
      </header>

      <section id="top" className="section-wrap py-16 sm:py-20 lg:py-28">
        <div className="hero-grid items-center gap-10 xl:gap-14">
          <div className="fade-up order-1">
            <span className="eyebrow">Install the operating system that gets you out of the middle</span>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Stop Working Solo. Start Spawning the AI Team That Runs Your Business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Install SpawnOS and copy <strong>the exact framework built to run e-commerce brands and agencies doing $100K+ per month</strong>—so you can get reports delivered in 3 minutes, full websites built in 11 minutes, and 12 autonomous agents running 24/7.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              SpawnOS is not another AI course and it&apos;s not another pile of prompts. It&apos;s the operating system built inside a live business with an AI COO and specialist agents—so you can reclaim 20-30 hours a week, scale output fast, and stop being the person every task depends on.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href="#pricing" className="primary-btn">Start Spawning My AI Team</a>
              <a href="#proof" className="secondary-btn">See the proof</a>
            </div>
            <p className="mt-4 text-sm text-zinc-500">Get instant access in minutes — no coding required.</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Reports delivered in 3 minutes",
                "Full websites built in 11 minutes",
                "12 autonomous agents running 24/7",
              ].map((item) => (
                <div key={item} className="surface-card rounded-2xl px-4 py-4 text-sm text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up order-2">
            <HeroVisual />
          </div>
        </div>
      </section>

      <section id="pain" className="section-wrap py-12 sm:py-16 lg:py-24">
        <SectionHeading
          eyebrow="The solo operator trap"
          title="Every extra week you stay the bottleneck, your growth taxes you with more admin, slower launches, and missed follow-up."
          body="You're still acting as CEO, CMO, COO, operator, and support team at the same time. That works until the business hits a ceiling—then every new sale creates more work, and growth stalls because everything still has to pass through you."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid gap-6 lg:grid-cols-1">
            {[
              {
                title: "You Are the Bottleneck",
                body: "You're still acting as CEO, CMO, COO, operator, and support team at the same time. That works until the business hits a ceiling—then every new sale creates more work, and growth stalls because everything still has to pass through you.",
              },
              {
                title: "Hiring Is Not the Smart Next Move",
                body: "A real hire costs $50-80K plus benefits, management time, training, and mistakes you pay for twice. At this stage, you don't need payroll overhead—you need leverage that gives you execution without adding another full-time dependency.",
              },
              {
                title: "AI Tools Alone Don't Execute",
                body: "You've already tried ChatGPT, Claude, or random AI tools—and what you got was help, not a team. Tools can answer prompts, but they don't replace roles, systems, memory, delegation, and follow-through unless they're structured to work like an operating system.",
              },
            ].map((item) => (
              <article key={item.title} className="surface-card rounded-3xl p-7 sm:p-8">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-400">{item.body}</p>
              </article>
            ))}
          </div>

          <SectionImage src={sectionPhotos.pain.src} alt={sectionPhotos.pain.alt} />
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#pricing" className="primary-btn">Take Me Out of the Bottleneck</a>
        </div>
      </section>

      <section id="mechanism" className="border-y border-white/5 bg-white/[0.02] py-16 sm:py-20 lg:py-24">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="Why this works"
            title="Why an AI Team Beats AI Tools, VAs, and Hiring at This Stage"
            body="This is not theory. It is a field-tested operating system built around 12 autonomous agents running 24/7, reports delivered in 3 minutes, full websites built in 11 minutes, and $14.2K generated in February 2026 on $1.5K ad spend. The unlock is not “using AI more.” The unlock is installing an AI team with clear roles, memory, delegation, and execution—so the business stops depending on one tired operator and starts moving like a coordinated company."
          />

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="surface-card rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-white">You are not buying my outcomes; you are buying the exact operating model that produced them.</h3>
              <p className="mt-5 text-base leading-7 text-zinc-400">
                ChatGPT can answer questions, but it won&apos;t run your business with memory, roles, delegation, and 24/7 execution. Hiring is expensive. Random tools create more tabs, not more output. SpawnOS gives you the operating system for spawning an AI team—so instead of asking one chatbot for help, you install a system that thinks, delegates, tracks, and executes like a real company.
              </p>
            </div>
            <div className="space-y-6">
              <div className="surface-card rounded-3xl p-8 sm:p-10">
                <h3 className="text-2xl font-bold text-white">What changes after you install it</h3>
                <div className="mt-6 space-y-5 text-sm leading-6 text-zinc-400">
                  <p>You stop opening ten tabs just to move one project forward.</p>
                  <p>You stop being the handoff point for every report, page, workflow, and follow-up.</p>
                  <p>You start operating with a team that can think in roles, retain context, and execute around the clock.</p>
                </div>
              </div>
              <SectionImage src={sectionPhotos.mechanism.src} alt={sectionPhotos.mechanism.alt} height="h-[280px] sm:h-[320px]" />
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="section-wrap py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Real results from real operations"
          title="What SpawnOS Actually Produces in the Real World"
          body="This is what happens when you stop using AI like a chatbot and start using it like infrastructure. SpawnOS gives you a production-ready operating system that turns AI from “occasionally useful” into a team that creates leverage every day."
        />

        <div className="mb-6">
          <SectionImage src={sectionPhotos.proof.src} alt={sectionPhotos.proof.alt} height="h-[260px] sm:h-[320px] lg:h-[360px]" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {proofCards.map((card) => (
            <article key={card.title} className="surface-card rounded-3xl p-8">
              <div className="stat-icon">{card.icon}</div>
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
              <p className="mt-4 text-base leading-7 text-zinc-400">{card.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="surface-card rounded-3xl p-8 sm:p-10">
            <ul className="space-y-4 text-base text-zinc-300">
              <li><strong className="text-white">$14.2K revenue in February 2026 on $1.5K ad spend (9.5x ROAS)</strong> — proof that this system supports real commercial output, not toy demos.</li>
              <li><strong className="text-white">20-30 hours saved per week</strong> — so you can shift your time back into growth, offers, creative, and decision-making.</li>
            </ul>
          </div>
          <div className="surface-card rounded-3xl p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">Why now</p>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              The operators who install leverage now will compound faster while everyone else stays trapped in manual work.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-y border-white/5 bg-white/[0.02] py-16 sm:py-20 lg:py-24">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="Choose your path"
            title="Choose How Fast You Want to Stop Being the Bottleneck."
            body="Start with the playbook, install the full system, or apply for a custom build. Every option is designed to buy back operator time faster than hiring or piecing tools together."
          />

          <div className="mb-8">
            <SectionImage src={sectionPhotos.pricing.src} alt={sectionPhotos.pricing.alt} height="h-[260px] sm:h-[320px] lg:h-[340px]" />
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article
                key={tier.name}
                className={`rounded-3xl p-8 sm:p-9 ${tier.emphasized ? "surface-card accent-ring border-red-500/40 bg-[#171717]" : "surface-card"} ${tier.premium ? "premium-ring border-orange-500/30 bg-[linear-gradient(180deg,rgba(249,115,22,0.08),rgba(20,20,20,0.95))]" : ""}`}
              >
                <div className="flex min-h-[88px] flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                    <p className="mt-3 text-4xl font-extrabold tracking-tight text-white">{tier.price}</p>
                  </div>
                  {tier.badge ? (
                    <span className="inline-flex rounded-full border border-red-400/20 bg-red-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                      {tier.badge}
                    </span>
                  ) : null}
                </div>

                <p className="mt-5 text-base leading-7 text-zinc-400">{tier.description}</p>

                <ul className="mt-6 space-y-3.5">
                  {tier.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-zinc-300">
                      <CheckIcon />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {tier.checkoutTier ? (
                    <button
                      type="button"
                      onClick={() => startCheckout(tier.checkoutTier!)}
                      disabled={loadingTier !== null}
                      className={`${tier.emphasized ? "primary-btn" : "secondary-btn"} w-full disabled:cursor-not-allowed disabled:opacity-60`}
                    >
                      {loadingTier === tier.checkoutTier ? "Redirecting..." : tier.cta}
                    </button>
                  ) : (
                    <a href={tier.href} className={tier.emphasized ? "primary-btn w-full" : tier.premium ? "secondary-btn w-full border-orange-500/35 text-orange-100 hover:bg-orange-500/10" : "secondary-btn w-full"}>
                      {tier.cta}
                    </a>
                  )}
                  {tier.note ? <p className="mt-3 text-center text-sm text-zinc-500">{tier.note}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-wrap py-16 sm:py-20 lg:py-24">
        <SectionHeading eyebrow="Common questions" title="Questions? Answers." />

        <div className="mb-8">
          <SectionImage src={sectionPhotos.faq.src} alt={sectionPhotos.faq.alt} height="h-[240px] sm:h-[280px] lg:h-[320px]" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            ["I'm not technical.", "You do not need to code from scratch—you need to follow a system built for operators, not developers."],
            ["I tried ChatGPT, it didn't work.", "ChatGPT is one tool. SpawnOS shows you how to run a team with roles, memory, delegation, and execution."],
            ["I don&apos;t have time to set this up.", "You do not have time to stay the bottleneck either—this is how you buy back 20-30 hours a week."],
            ["Is this just another AI course?", "No. SpawnOS is an operating system you install and run—not theory you watch and forget."],
            ["Do I need to be technical to use SpawnOS?", "No. SpawnOS is designed for operators who want leverage, not for developers who want another side project."],
            ["How is this different from just using ChatGPT or Claude?", "ChatGPT gives you answers. SpawnOS gives you an AI COO and specialist team with roles, memory, delegation, and execution."],
            ["How long does it take to start seeing value?", "Fast. The point is leverage quickly—reports in 3 minutes, websites in 11 minutes, and 20-30 hours/week saved."],
            ["Is SpawnOS another AI information product with hype and no proof?", "No. It is built from a live operating system, with 12 autonomous agents and $14.2K revenue on $1.5K ad spend."],
          ].map(([question, answer]) => (
            <article key={question} className="surface-card rounded-3xl p-7 sm:p-8">
              <h3 className="text-lg font-bold text-white">{question}</h3>
              <p className="mt-4 text-base leading-7 text-zinc-400">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="final-cta" className="section-wrap py-16 sm:py-20 lg:py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-red-500/20 bg-zinc-950">
          <img
            src={sectionPhotos.finalCta.src}
            alt={sectionPhotos.finalCta.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.4),rgba(10,10,10,0.82)_45%,rgba(10,10,10,0.95))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(239,68,68,0.22),transparent_40%)]" />

          <div className="surface-card accent-ring relative z-10 rounded-[2rem] bg-black/25 px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-16">
            <span className="eyebrow">Ready to install your AI team?</span>
            <h2 className="mx-auto max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Every week you wait is another 20-30 hours lost to tasks your AI team could already be handling.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              Start spawning your AI team now—or apply for a guided build if you want personalized implementation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#pricing" className="primary-btn">Install the System That Buys Back My Time</a>
              <a href="https://launch.spawnos.io" className="secondary-btn border-orange-500/35 text-orange-100 hover:bg-orange-500/10">Apply for Custom Build →</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10">
        <div className="section-wrap flex flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SpawnOS. Stop working solo. Start spawning.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#top" className="transition hover:text-zinc-300">Back to top</a>
            <a href="mailto:support@spawnos.io" className="transition hover:text-zinc-300">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
