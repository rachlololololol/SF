import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const stripe = getStripe();
    const { priceType } = await request.json();

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    if (priceType === "monthly") {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: "SF Eats Guide — Monthly",
            description:
              "Full access to the curated SF food guide + monthly updates",
          },
          unit_amount: 500, // $5.00
          recurring: { interval: "month" },
        },
        quantity: 1,
      });
    } else {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: "SF Eats Guide — Lifetime",
            description:
              "One-time purchase for lifetime access to the SF food guide",
          },
          unit_amount: 2500, // $25.00
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: priceType === "monthly" ? "subscription" : "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/subscribe`,
      customer_creation:
        priceType === "monthly" ? undefined : "always",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
