import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe } from "@/lib/stripe";

// In production, store subscribers in a database (Supabase, PlanetScale, etc.)
// For now, this is a placeholder that logs the event.

export async function POST(request: Request) {
  const stripe = getStripe();
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const email = session.customer_details?.email;

      if (email) {
        // TODO: Save subscriber to database
        // TODO: Add to email list (Resend, Mailchimp, ConvertKit)
        console.log(`New subscriber: ${email}`);
      }
      break;
    }
    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      // TODO: Revoke access in database
      console.log(`Subscription cancelled: ${subscription.id}`);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
