import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-[#111827] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-10">
        <p className="inline-flex rounded-full border border-[rgba(37,99,235,0.25)] bg-[rgba(37,99,235,0.12)] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#BFDBFE]">
          Audit request received
        </p>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">Thanks — your SpawnOS audit request is in.</h1>
        <p className="mt-4 text-lg text-slate-300">
          We’ll review your application and follow up with next steps if there’s a strong fit.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">What happens next</p>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-300">
            <li>We review your submission for fit, timing, and implementation readiness.</li>
            <li>If aligned, we’ll share the next step to schedule the audit conversation.</li>
            <li>You’ll leave that process with a clearer view of the bottleneck and the recommended install path.</li>
          </ol>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-3 font-semibold text-white transition hover:bg-[#1D4ED8]">
            Back to homepage
          </Link>
          <a href="https://audit.spawnos.io" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:bg-white/5">
            Return to audit
          </a>
        </div>
      </div>
    </main>
  );
}
