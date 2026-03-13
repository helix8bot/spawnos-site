const auditUrl = "https://launch.spawnos.io";

const sectionPhotos = {
  hero: {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
    alt: "Founder working at a dark desk setup with a laptop and multiple screens.",
  },
  trust: {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80",
    alt: "Operators reviewing business metrics together in a calm office setting.",
  },
};

const installItems = [
  {
    title: "AI chief-of-staff layer",
    body: "A central operating layer that briefs the founder, coordinates moving pieces, and keeps decisions from disappearing into chat threads.",
  },
  {
    title: "Follow-up systems",
    body: "Persistent follow-up across tasks, conversations, and internal commitments so the business stops relying on whoever remembers last.",
  },
  {
    title: "Reporting cadence",
    body: "Regular summaries, status reporting, and leadership visibility so you can see what matters without manually assembling it all yourself.",
  },
  {
    title: "Delegation workflows",
    body: "Clear routing of work, recaps, handoffs, and next steps so delegation creates momentum instead of more rework.",
  },
  {
    title: "Communication triage",
    body: "Inbox, team, and client communication support that helps surface what needs founder attention and what can stay delegated.",
  },
  {
    title: "Business memory",
    body: "Searchable institutional memory for context, decisions, SOPs, and recurring knowledge so critical information stops living only in the founder’s head.",
  },
];

const whoItsFor = [
  "Founder-led businesses with real revenue, team coordination, and operational complexity.",
  "Operators who are still the escalation point for updates, approvals, and follow-through.",
  "Businesses that already know AI matters, but do not want another course, toy workflow, or disconnected stack of tools.",
  "Teams where speed, continuity, delegation, and reporting are now worth more than experimenting forever.",
];

const auditIncludes = [
  "A bottleneck review of where the founder is still acting as operator, coordinator, and QA layer.",
  "A first-pass map of where follow-up, reporting, delegation, and communication are currently breaking down.",
  "A recommendation for the highest-leverage operating layer to install first.",
  "Qualification on fit, timing, and implementation readiness.",
  "If there is a strong fit: a tailored install recommendation and rollout path.",
];

const faqItems = [
  {
    question: "Is SpawnOS a course or info product?",
    answer:
      "No. The core offer is an installed operating system and implementation path. Existing playbooks and PDFs can support the sale, but they are positioned as goodwill assets—not the main product.",
  },
  {
    question: "Who is the audit for?",
    answer:
      "Founder-led businesses with real operational load. If you are still the person every update, approval, and follow-up has to pass through, the audit is designed for that situation.",
  },
  {
    question: "What happens after the audit?",
    answer:
      "If there is a fit, you receive an install recommendation: what to deploy first, where the leverage is, and what implementation path makes sense from there.",
  },
  {
    question: "Is this meant to replace a team?",
    answer:
      "No. The positioning is leverage, continuity, and execution support—not fantasy replacement claims. SpawnOS is meant to reduce founder bottlenecks and strengthen the operating layer around a business.",
  },
  {
    question: "What about security?",
    answer:
      "SpawnOS is positioned with a security-first installation approach informed by Johann’s OpenClaw security guidance. This page intentionally avoids overclaiming beyond what has been formally documented. A deeper security research block can be expanded as that deliverable is finalized.",
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
          <a href="#top" className="text-sm font-extrabold uppercase tracking-[0.3em] text-[var(--color-text)]">
            SpawnOS
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[var(--color-text-muted)] md:flex">
            <a href="#problem" className="transition hover:text-[var(--color-text)]">Problem</a>
            <a href="#install" className="transition hover:text-[var(--color-text)]">What we install</a>
            <a href="#audit" className="transition hover:text-[var(--color-text)]">Audit</a>
            <a href="#faq" className="transition hover:text-[var(--color-text)]">FAQ</a>
          </nav>
          <a href={auditUrl} className="primary-btn text-xs sm:text-sm">Book Your SpawnOS Audit</a>
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
              SpawnOS installs an <strong>AI chief-of-staff layer</strong> around the founder so delegation, follow-up, reporting,
              communication triage, and business memory stop depending on one overloaded human in the middle.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
              This is not another AI course, prompt pack, or generic automation setup. It is a high-ticket installed operating layer for
              businesses that have real revenue, real complexity, and a founder who should not still be acting as operator, coordinator,
              and QA for everything.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href={auditUrl} className="primary-btn">Book Your SpawnOS Audit</a>
              <a href="#install" className="secondary-btn">See what SpawnOS installs</a>
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
                <p className="text-xs uppercase tracking-[0.24em] text-[#94A3B8]">What the founder gets back</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Follow-through", "Fewer dropped balls and less manual chasing"],
                    ["Visibility", "Cleaner reporting without assembling it by hand"],
                    ["Delegation", "More work moves without routing back through you"],
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
          eyebrow="The real bottleneck"
          title="Many founder-led businesses do not have a tool problem. They have an operating-system problem."
          body="The founder is still the coordinator, the follow-up layer, the escalation point, the context-holder, and the quality-control backstop. That is manageable for a while. Then growth turns into drag."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "You are still acting as operator",
              body: "Projects move only after you clarify, approve, remind, or rewrite. The business keeps looking for leverage, but execution still routes through you.",
            },
            {
              title: "Delegation keeps boomeranging back",
              body: "Without a proper operating layer, delegation creates rework. You hand work off, then get pulled back in to fill gaps, restore context, or QA what should have been handled.",
            },
            {
              title: "Follow-up and reporting are too fragile",
              body: "Critical updates, tasks, and commitments are spread across inboxes, meetings, chats, and documents. You compensate with your attention—until that stops scaling.",
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
          title="Built for founder-led businesses with real revenue and real operational complexity."
          body="The main page stays broad enough for qualified founder-led businesses, while still speaking directly to the founder bottleneck. This is not aimed at hobby projects or companies looking for cheap AI novelty."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div className="surface-card rounded-3xl p-8 sm:p-10">
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

          <div className="surface-card rounded-3xl p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#94A3B8]">Not the right frame</p>
            <div className="mt-6 space-y-5 text-base leading-7 text-[var(--color-text-muted)]">
              <p>SpawnOS is not positioned as a budget course, a $17 / $67 / $147 pricing ladder, or a one-click shortcut for people who do not yet have meaningful operating complexity.</p>
              <p>It is for founders who want an installed system that makes the business run with more continuity, faster follow-through, and less dependence on the founder being the human API for the company.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="audit" className="border-y border-white/8 bg-white/[0.02] py-16 sm:py-20 lg:py-24">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="The entry point"
            title="The SpawnOS Audit is a free qualification audit for serious operators."
            body="The goal is not to sell everyone. The goal is to determine fit, identify the bottleneck, and map the highest-leverage install path."
          />

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="surface-card rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-[var(--color-text)]">What the audit includes</h3>
              <div className="mt-6 space-y-4">
                {auditIncludes.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-base leading-7 text-[#D7DEE8]">
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-card rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-[var(--color-text)]">How it is framed</h3>
              <div className="mt-6 space-y-5 text-base leading-7 text-[var(--color-text-muted)]">
                <p>The audit is positioned as an application and qualification step, not a mass-market giveaway.</p>
                <p>That keeps the offer premium and ensures the next conversation is about implementation readiness, not bargain hunting.</p>
                <p>If there is not a fit, the business still leaves with more clarity on where the founder bottleneck actually lives.</p>
              </div>
              <div className="mt-8">
                <a href={auditUrl} className="primary-btn w-full">Book Your SpawnOS Audit</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="trust" className="section-wrap py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Proof and trust"
          title="Positioned with restraint, operational credibility, and security-first framing."
          body="This page avoids fake certainty, inflated credentials, and hype-heavy claims. The trust case is built from legitimate operating proof, disciplined positioning, and a credible implementation posture."
        />

        <div className="mb-6 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F141B]">
          <img src={sectionPhotos.trust.src} alt={sectionPhotos.trust.alt} className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[360px]" loading="lazy" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="surface-card rounded-3xl p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#94A3B8]">Current trust anchors</p>
            <div className="mt-6 space-y-5 text-base leading-7 text-[var(--color-text-muted)]">
              <p>SpawnOS is now framed as an installed operating layer, not a pile of low-ticket education products.</p>
              <p>Existing playbooks and PDFs can still be used—but as free goodwill assets that demonstrate thoughtfulness and operating depth.</p>
              <p>The promise stays grounded: better delegation, stronger follow-up, cleaner reporting, improved continuity, and less founder drag.</p>
            </div>
          </article>

          <article className="surface-card rounded-3xl p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#94A3B8]">Security and implementation posture</p>
            <div className="mt-6 space-y-5 text-base leading-7 text-[var(--color-text-muted)]">
              <p>SpawnOS is installed with a security-first approach informed by Johann’s OpenClaw security guidance.</p>
              <p>That means the site can credibly signal caution, governance, and implementation discipline without inventing certifications or overclaiming beyond what has been formally documented.</p>
              <div className="rounded-2xl border border-dashed border-[rgba(148,163,184,0.35)] bg-[rgba(148,163,184,0.06)] p-4 text-sm text-[#CBD5E1]">
                Placeholder: expand this block with finalized security research copy and any approved implementation specifics once the research deliverable is ready.
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="path" className="border-y border-white/8 bg-white/[0.02] py-16 sm:py-20 lg:py-24">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="Offer path"
            title="A clear path from diagnosis to implementation."
            body="The conversion path is intentionally simple: qualify the bottleneck, recommend the right install, then implement with the appropriate level of scope and support."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["1. Audit", "Understand the founder bottleneck, operating friction, and where the first leverage should come from."],
              ["2. Install recommendation", "Map the right operating layer, workflow scope, and implementation path based on business complexity and fit."],
              ["3. Implementation", "Deploy the recommended SpawnOS layer with a premium, structured, security-aware approach."],
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
        <SectionHeading eyebrow="FAQ" title="Questions serious buyers are likely to ask." />

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
            <span className="eyebrow">Qualified founder-led businesses only</span>
            <h2 className="mx-auto max-w-4xl text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
              If you are tired of being the person everything has to pass through, book your SpawnOS Audit.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#D7DEE8] sm:text-lg">
              Get a clear view of the bottleneck, the highest-leverage install path, and whether SpawnOS is the right operating layer for your business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={auditUrl} className="primary-btn">Book Your SpawnOS Audit</a>
              <a href="#trust" className="secondary-btn">Review trust + security framing</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 py-10">
        <div className="section-wrap flex flex-col gap-4 text-sm text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SpawnOS. Installed AI operating systems for founder-led businesses.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#top" className="transition hover:text-[var(--color-text)]">Back to top</a>
            <a href="mailto:support@spawnos.io" className="transition hover:text-[var(--color-text)]">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
