import Link from "next/link";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { PRODUCTS, type Tier } from "@/lib/commerce";

export const dynamic = "force-dynamic";

type SuccessPageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    redirect("/");
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  let tier: Tier | null = null;
  let email: string | null = null;

  if (stripeKey) {
    try {
      const stripe = new Stripe(stripeKey);
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      const sessionTier = session.metadata?.tier as Tier | undefined;
      tier = sessionTier && sessionTier in PRODUCTS ? sessionTier : null;
      email = session.customer_details?.email || session.customer_email || null;
    } catch (error) {
      console.error("Unable to load Stripe session on success page", error);
    }
  }

  const product = tier ? PRODUCTS[tier] : null;

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-zinc-950 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-10">
        <p className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-red-300">
          Purchase complete
        </p>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">🚀 You&apos;re In!</h1>
        <p className="mt-4 text-lg text-zinc-300">Check your email for your SpawnOS materials.</p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">What you purchased</p>
          <p className="mt-3 text-2xl font-bold text-white">{product?.name || "SpawnOS purchase confirmed"}</p>
          <p className="mt-2 text-zinc-400">
            {product ? `${product.priceLabel} · ${product.description}` : "Your payment was successful and your delivery email is on the way."}
          </p>
          {email ? <p className="mt-3 text-sm text-zinc-500">Sent to: {email}</p> : null}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-bold text-white">What to do next:</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-zinc-300">
            <li>Open the delivery email from SpawnOS.</li>
            <li>Download your materials and save them somewhere easy to access.</li>
            <li>Start with the first setup step and ship your first delegation loop today.</li>
          </ol>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-400">
            Back to homepage
          </Link>
          <a href="https://launch.spawnos.io" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-zinc-200 transition hover:bg-white/5">
            Need a custom build?
          </a>
        </div>
      </div>
    </main>
  );
}
