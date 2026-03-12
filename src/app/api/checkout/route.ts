import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PRODUCTS, getBaseUrl, type Tier } from "@/lib/commerce";

export async function POST(request: Request) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json(
        { error: "Checkout coming soon — email build@spawnos.io" },
        { status: 503 },
      );
    }

    const body = (await request.json()) as { tier?: Tier; email?: string };
    const tier = body?.tier;

    if (!tier || !(tier in PRODUCTS)) {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
    }

    const product = PRODUCTS[tier];
    const stripe = new Stripe(stripeKey);
    const baseUrl = getBaseUrl(request.headers.get("origin"));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/`,
      customer_creation: "always",
      billing_address_collection: "auto",
      metadata: {
        tier: product.tier,
        productName: product.name,
      },
      payment_intent_data: {
        metadata: {
          tier: product.tier,
          productName: product.name,
        },
        ...(body.email ? { receipt_email: body.email } : {}),
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.priceCents,
          },
        },
      ],
      phone_number_collection: {
        enabled: false,
      },
      consent_collection: {
        promotions: "auto",
      },
      customer_email: body.email || undefined,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Unable to create checkout session" }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error", error);
    return NextResponse.json({ error: "Unable to create checkout session" }, { status: 500 });
  }
}
