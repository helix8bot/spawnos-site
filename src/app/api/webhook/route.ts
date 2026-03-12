import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PRODUCTS, getBaseUrl, type Tier } from "@/lib/commerce";
import { sendPurchaseEmail } from "@/lib/resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeKey || !webhookSecret) {
    console.warn("Stripe webhook missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET");
    return NextResponse.json({ ok: true, skipped: true });
  }

  try {
    const stripe = new Stripe(stripeKey);
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
    }

    const body = await request.text();
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const tier = (session.metadata?.tier || "starter") as Tier;
      const product = PRODUCTS[tier];
      const email = session.customer_details?.email || session.customer_email;
      const name = session.customer_details?.name;
      const siteUrl = getBaseUrl();

      console.log("SpawnOS purchase completed", {
        sessionId: session.id,
        tier,
        productName: product?.name,
        amountTotal: session.amount_total,
        email,
        name,
      });

      if (email && product) {
        await sendPurchaseEmail({
          tier,
          customerEmail: email,
          customerName: name,
          siteUrl,
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook error", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 400 });
  }
}
