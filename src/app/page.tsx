const auditUrl = "https://audit.spawnos.io";

const sectionPhotos = {
  hero: {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
    alt: "Executive operator working across a laptop and multiple screens.",
  },
  trust: {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80",
    alt: "Operations leaders reviewing systems and delivery plans together.",
  },
};

const installItems = [
  {
    title: "AI chief-of-staff layer",
    body: "A central operating layer that briefs leadership, captures context, routes next steps, and keeps execution from disappearing into chats and inboxes.",
  },
  {
    title: "Follow-up systems",
    body: "Persistent follow-up across tasks, approvals, and conversations so work keeps moving without the founder acting as the reminder engine.",
  },
  {
    title: "Reporting cadence",
    body: "Structured summaries and leadership visibility so status, blockers, and key decisions show up without someone manually assembling them every week.",
  },
  {
    title: "Delegation workflows",
    body: "Clear handoffs, task routing, recaps, and accountability loops so delegation creates throughput instead of rework.",
  },
  {
    title: "Communication triage",
    body: "Support for inbox, team, and stakeholder communication that helps surface what needs executive attention and what can stay delegated.",
  },
  {
    title: "Business memory",
    body: "Searchable institutional memory for SOPs, decisions, recurring context, and operating knowledge so the company stops depending on one person to remember everything.",
  },
];

const whoItsFor = [
  "Founder-led businesses with real revenue, cross-functional coordination, and recurring operating complexity.",
  "Leaders who are still the escalation point for approvals, updates, clarifications, and follow-through.",
  "Teams that already know AI matters, but do not want another disconnected stack of tools or another course.",
  "Operators who care about speed, continuity, governance, and execution quality—not novelty demos.",
];

const auditIncludes = [
  {
    title: "Bottleneck diagnosis",
    body: "We identify where leadership attention is still acting as the operating system: approvals, follow-up, reporting, coordination, or context recovery.",
  },
  {
    title: "AI opportunity map",
    body: "We map where an AI chief-of-staff layer and specialist support can remove drag across communication, follow-up, reporting, delegation, and retained context.",
  },
  {
    title: "Recommended AI team",
    body: "You get a practical recommendation for the operating layer, roles, and deployment path that best fit your team complexity and risk tolerance.",
  },
  {
    title: "Estimated upside",
    body: "We frame where time-saved, efficiency gains, and revenue-protection / upside opportunities are most likely to come from first.",
  },
  {
    title: "Implementation path",
    body: "If there is a fit, the audit becomes the starting point for the implementation blueprint so the same discovery work does not have to happen twice.",
  },
];

const securityPillars = [
  {
    title: "Private networking and controlled deployment",
    body: "Deployments can be structured on local or controlled infrastructure with private networking in mind, reducing unnecessary public exposure.",
  },
  {
    title: "Least-privilege access",
    body: "Systems are designed so the agent gets only the access it needs for the job rather than broad, permanent permissions by default.",
  },
  {
    title: "Allowlisted access controls",
    body: "Production access can be limited to approved users, approved channels, and tightly scoped communication surfaces.",
  },
  {
    title: "Sandboxed workers and controlled execution",
    body: "Higher-risk work can be isolated in controlled runtimes so one bad prompt or compromised worker does not automatically become full-system access.",
  },
  {
    title: "Auditability and governance",
    body: "Logging, reviews, alerts, and explicit operating policies help teams understand what the system did and keep governance visible.",
  },
  {
    title: "Production-style hardening mindset",
    body: "The posture is practical infrastructure discipline: isolate the system, restrict access, patch it, monitor it, and avoid exaggerated security claims.",
  },
];

const faqItems = [
  {
    question: "What is the SpawnOS Audit?",
    answer:
      "It is a free diagnostic for founder-led businesses. We use it to diagnose bottlenecks, identify AI opportunities, recommend the right operating layer, and determine whether SpawnOS is the right implementation path.",
  },
  {
    question: "Who is the audit for?",
    answer:
      "It is best for companies with meaningful operating complexity: recurring team coordination, reporting load, follow-up risk, and a founder or operator still acting as the center of execution.",
  },
  {
    question: "What do we get if we are accepted?",
    answer:
      "You get a focused diagnosis of the bottleneck, an AI opportunity map, a recommended AI team structure, and a concrete recommendation for what to install first.",
  },
  {
    question: "What happens after the audit?",
    answer:
      "If there is a fit, the next step is an implementation blueprint and scoped rollout path. If there is not a fit, you still leave with clearer visibility into where the operating drag actually lives.",
  },
  {
    question: "How do you talk about security without overpromising?",
    answer:
      "We keep the claims narrow and factual. SpawnOS follows a hardening-minded posture informed by Johann Sathianathen’s published OpenClaw security guidance and standard least-privilege infrastructure practices—not hype about perfect security.",
  },
];

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">{body}</p> : null}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-primary)]">
      <path d="M4.5 10.5 8 14l7.5-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(11,15,20,0.82)] backdrop-blur-xl">
        <div className="section-wrap flex h-16 items-center justify-between gap-4">
          <a href="#top" className="text-sm font-extrabold uppercase tracking-[0.26em] text-[var(--color-text)]">
            <span className="text-[#94A3B8]">Spawn</span>
            <span className="text-white">OS</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[var(--color-text-muted)] md:flex">
            <a href="#problem" className="transition hover:text-[var(--color-text)]">Problem</a>
            <a href="#install" className="transition hover:text-[var(--color-text)]">What We Install</a>
            <a href="#audit" className="transition hover:text-[var(--color-text)]">Audit</a>
            <a href="#security" className="transition hover:text-[var(--color-text)]">Security</a>
            <a href="#faq" className="transition hover:text-[var(--color-text)]">FAQ</a>
          </nav>
          <a href={auditUrl} className="primary-btn text-xs sm:text-sm">Take the Audit</a>
        </div>
      </header>

      <section id="top" className="section-wrap py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] xl:gap-14">
          <div>
            <span className="eyebrow">Installed AI operating system for founder-led businesses</span>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl xl:text-7xl">
              Stop being the operating system for your business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D7DEE8] sm:text-xl">
              SpawnOS installs an <strong>AI chief-of-staff layer</strong> around the founder so follow-up, reporting,
              delegation, communication triage, and business memory stop depending on one overloaded human in the middle.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
              This is a customer-facing implementation offer for serious operators—not a course, prompt pack, or generic automation bundle.
              We diagnose the bottleneck first, then recommend the right install path for the business in front of us.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href={auditUrl} className="primary-btn">Take the Audit</a>
              <a href="#audit" className="secondary-btn">See what the audit includes</a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Delegation without more founder drag",
                "Reporting and follow-up that keep moving",
                "Institutional memory beyond one person",
              ].map((item) => (
                <div key={item} className="surface-card rounded-2xl px-4 py-4 text-sm text-[#D7DEE8]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F141B] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            <img src={sectionPhotos.hero.src} alt={sectionPhotos.hero.alt} className="h-full min-h-[560px] w-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,11,15,0.15),rgba(8,11,15,0.76)_48%,rgba(8,11,15,0.96))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_38%)]" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 lg:p-7">
              <div className="rounded-3xl border border-white/10 bg-[rgba(11,15,20,0.78)] p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-[#94A3B8]">What the business gets back</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Follow-through", "Fewer dropped balls and less manual chasing"],
                    ["Visibility", "Cleaner reporting without assembling it by hand"],
                    ["Delegation", "More work moves without routing back through leadership"],
                    ["Continuity", "Context persists across people, tasks, and time"],
                  ].map(([title, copy]) => (
                    <div key={title} className="rounded-2xl border border-white/8 bg-[rgba(15,20,27,0.9)] p-4">
                      <p className="text-sm font-semibold text-[var(--color-text)]">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="section-wrap py-12 sm:py-16 lg:py-24">
        <SectionHeading
          eyebrow="The operating problem"
          title="Growth gets expensive when the founder is still the coordinator, context holder, and QA layer."
          body="Many businesses do not have a tool problem. They have a continuity problem. Work still waits for one person to clarify, approve, remind, summarize, or reconnect the dots."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Leadership is still acting as operator",
              body: "Projects move only after someone at the top clarifies, approves, reminds, or rewrites. The business keeps looking for leverage, but execution still routes through one person.",
            },
            {
              title: "Delegation keeps boomeranging back",
              body: "Without a real operating layer, delegation creates more supervision, not more relief. Work gets handed off, then pulled back for context recovery, follow-up, or QA.",
            },
            {
              title: "Follow-up and reporting are fragile",
              body: "Critical updates, open loops, and commitments are scattered across meetings, inboxes, chats, and docs. The company compensates with human memory—until that stops scaling.",
            },
          ].map((item) => (
            <article key={item.title} className="surface-card rounded-3xl p-7 sm:p-8">
              <h3 className="text-xl font-bold text-[var(--color-text)]">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="install" className="border-y border-white/8 bg-white/[0.02] py-16 sm:py-20 lg:py-24">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="What SpawnOS installs"
            title="A practical AI chief-of-staff layer built around your operating reality."
            body="SpawnOS is designed to remove founder bottlenecks in the boring, valuable parts of the business: communication, coordination, follow-through, reporting, and retained context."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {installItems.map((item) => (
              <article key={item.title} className="surface-card rounded-3xl p-7 sm:p-8">
                <h3 className="text-xl font-bold text-[var(--color-text)]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fit" className="section-wrap py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Who it’s for"
          title="Built for serious operators with real complexity to solve."
          body="SpawnOS is best for founder-led companies where speed, continuity, governance, and delegated execution matter more than experimenting with another AI toy."
        />

        <div className="mx-auto max-w-4xl surface-card rounded-3xl p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#94A3B8]">Best fit signals</p>
          <div className="mt-6 space-y-4">
            {whoItsFor.map((item) => (
              <div key={item} className="flex items-start gap-3 text-base leading-7 text-[#D7DEE8]">
                <CheckIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="audit" className="border-y border-white/8 bg-white/[0.02] py-16 sm:py-20 lg:py-24">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="The SpawnOS Audit"
            title="A free diagnostic audit that shows where the operating bottleneck really lives."
            body="The SpawnOS Audit is the first step in designing your company’s AI operating system. It diagnoses the core drag in the business, maps where AI can help, estimates where time and efficiency upside exist, and becomes the implementation starting point if there is a fit."
          />

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="surface-card rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-[var(--color-text)]">What the SpawnOS Audit delivers</h3>
              <div className="mt-6 space-y-5">
                {auditIncludes.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 text-base leading-7 text-[#D7DEE8]">
                    <CheckIcon />
                    <div>
                      <p className="font-semibold text-[var(--color-text)]">{item.title}</p>
                      <p className="text-[var(--color-text-muted)]">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-card rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-[var(--color-text)]">Why this audit exists</h3>
              <div className="mt-6 space-y-5 text-base leading-7 text-[var(--color-text-muted)]">
                <p><strong className="text-[var(--color-text)]">What it is:</strong> a premium diagnostic focused on founder bottlenecks, workflow friction, AI opportunity mapping, and implementation fit.</p>
                <p><strong className="text-[var(--color-text)]">Who it is for:</strong> founder-led teams with enough complexity that better systems will actually move the business.</p>
                <p><strong className="text-[var(--color-text)]">What you get:</strong> bottleneck diagnosis, an AI opportunity map, a recommended AI team structure, estimated time-saved / efficiency upside framing, and a recommendation for what to install first.</p>
                <p><strong className="text-[var(--color-text)]">Why it is application-based:</strong> the audit is free, but reserved for businesses where an actual AI operating system implementation could create meaningful leverage.</p>
                <p><strong className="text-[var(--color-text)]">What happens after:</strong> if there is a fit, your audit becomes the starting point for the implementation blueprint so you do not have to repeat the same information again.</p>
              </div>
              <div className="mt-8">
                <a href={auditUrl} className="primary-btn w-full">Take the Audit</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="security" className="section-wrap py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Security and trust"
          title="Security by architecture, restraint, and hardening—not by hype."
          body="SpawnOS is positioned for businesses that want control without inflated promises. The goal is to deploy responsibly, reduce blast radius, and keep governance visible as AI becomes part of real operations."
        />

        <div className="mb-6 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F141B]">
          <img src={sectionPhotos.trust.src} alt={sectionPhotos.trust.alt} className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[360px]" loading="lazy" />
        </div>

        <div className="surface-card rounded-3xl p-8 sm:p-10">
          <p className="text-base leading-7 text-[var(--color-text-muted)]">
            SpawnOS security is grounded in standard infrastructure discipline, not marketing theater. Johann Sathianathen—a software engineer and founder who publicly describes himself as a former Cisco engineer—has published a practical OpenClaw hardening guide centered on separate-machine deployment, non-root users, private networking, allowlisted access, sandboxed subagents, and ongoing audits. That is the posture this offer aligns with: keep the system private, restrict what it can access, and treat it like real production infrastructure.
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {securityPillars.map((item) => (
            <article key={item.title} className="surface-card rounded-3xl p-7 sm:p-8">
              <h3 className="text-xl font-bold text-[var(--color-text)]">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-[rgba(148,163,184,0.22)] bg-[rgba(148,163,184,0.05)] p-6 text-sm leading-7 text-[#CBD5E1]">
          No serious operator should be promised perfect security. The credible promise is a hardened deployment posture: isolate the environment, restrict access, allowlist communication surfaces, control execution, and maintain logs and reviews over time.
        </div>
      </section>

      <section id="path" className="border-y border-white/8 bg-white/[0.02] py-16 sm:py-20 lg:py-24">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="From audit to implementation"
            title="A clear path from diagnosis to deployment."
            body="The path is intentionally simple: qualify the bottleneck, recommend the right operating layer, then implement with the appropriate scope and governance."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["1. Audit", "Diagnose the founder bottleneck, operating friction, and where the first leverage should come from."],
              ["2. Install recommendation", "Map the right operating layer, workflow scope, and deployment path based on complexity, fit, and risk posture."],
              ["3. Implementation", "Deploy the recommended SpawnOS layer with structured rollout, adoption support, and a security-aware operating posture."],
            ].map(([title, body]) => (
              <article key={title} className="surface-card rounded-3xl p-7 sm:p-8">
                <h3 className="text-xl font-bold text-[var(--color-text)]">{title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-wrap py-16 sm:py-20 lg:py-24">
        <SectionHeading eyebrow="FAQ" title="Questions serious buyers usually ask before they take the audit." />

        <div className="grid gap-6 lg:grid-cols-2">
          {faqItems.map((item) => (
            <article key={item.question} className="surface-card rounded-3xl p-7 sm:p-8">
              <h3 className="text-lg font-bold text-[var(--color-text)]">{item.question}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="final-cta" className="section-wrap py-16 sm:py-20 lg:py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(37,99,235,0.25)] bg-[#0F141B]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(37,99,235,0.18),transparent_40%)]" />
          <div className="relative z-10 px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16">
            <span className="eyebrow">Free diagnostic audit</span>
            <h2 className="mx-auto max-w-4xl text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
              If leadership is still the workflow glue, take the SpawnOS Audit.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#D7DEE8] sm:text-lg">
              You will leave with a clearer picture of the bottleneck, the AI opportunity map, the recommended team structure, and whether SpawnOS is the right implementation path for your business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={auditUrl} className="primary-btn">Take the Audit</a>
              <a href="#security" className="secondary-btn">Review security posture</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 py-10">
        <div className="section-wrap flex flex-col gap-4 text-sm text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SpawnOS. Installed AI operating systems for founder-led businesses.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#top" className="transition hover:text-[var(--color-text)]">Back to top</a>
            <a href="mailto:hello@spawnos.io" className="transition hover:text-[var(--color-text)]">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
