"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { WineGlass, CoffeeCup, Star } from "@/components/illustrations";

export default function SubscribePage() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout(priceType: "monthly" | "one-time") {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceType }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="font-sans font-semibold text-xs uppercase tracking-[0.2em] text-terracotta mb-3">
            Get the full guide
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brown-dark mb-4">
            Subscribe to SF Eats
          </h1>
          <p className="text-brown-medium/70 max-w-xl mx-auto">
            Unlock every recommendation, get monthly updates with new picks, and
            never eat a bad meal in SF again.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Monthly */}
          <div className="relative bg-cream-light rounded-2xl p-8 border-2 border-terracotta/20 shadow-lg shadow-terracotta/5">
            <div className="absolute -top-3 left-6">
              <span className="bg-terracotta text-cream text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            <WineGlass className="w-10 h-14 text-terracotta/40 mb-4" />
            <h3 className="font-serif text-2xl font-bold text-brown-dark mb-1">
              Monthly
            </h3>
            <p className="text-sm text-brown-medium/60 mb-4">
              Ongoing access + monthly updates
            </p>
            <div className="mb-6">
              <span className="font-serif text-4xl font-bold text-brown-dark">
                $5
              </span>
              <span className="text-brown-medium/50 text-sm">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Full guide with 35+ picks",
                "Monthly new recommendations",
                "Seasonal favorites & updates",
                "Cancel anytime",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brown-medium/80">
                  <Star className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleCheckout("monthly")}
              disabled={loading}
              className="w-full px-6 py-3 bg-terracotta text-cream font-semibold rounded-xl hover:bg-terracotta-bright transition-colors disabled:opacity-50"
            >
              {loading ? "Loading..." : "Subscribe monthly"}
            </button>
          </div>

          {/* One-time */}
          <div className="bg-cream-light rounded-2xl p-8 border border-brown-dark/10">
            <CoffeeCup className="w-10 h-10 text-navy/30 mb-4" />
            <h3 className="font-serif text-2xl font-bold text-brown-dark mb-1">
              One-Time
            </h3>
            <p className="text-sm text-brown-medium/60 mb-4">
              Lifetime access, no recurring charge
            </p>
            <div className="mb-6">
              <span className="font-serif text-4xl font-bold text-brown-dark">
                $25
              </span>
              <span className="text-brown-medium/50 text-sm"> once</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Full guide with 35+ picks",
                "All future updates included",
                "One payment, lifetime access",
                "Support independent creators",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brown-medium/80">
                  <Star className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleCheckout("one-time")}
              disabled={loading}
              className="w-full px-6 py-3 border-2 border-navy text-navy font-semibold rounded-xl hover:bg-navy hover:text-cream transition-colors disabled:opacity-50"
            >
              {loading ? "Loading..." : "Buy once — $25"}
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto mt-20">
          <h2 className="font-serif text-2xl font-bold text-brown-dark text-center mb-8">
            Common questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What do I get with my subscription?",
                a: "Instant access to all 35+ curated restaurant, café, bar, hotel, and shop recommendations in San Francisco. Each pick includes a blurb and Google Maps link. Monthly subscribers also get new picks delivered each month.",
              },
              {
                q: "How do I access the guide after paying?",
                a: "After payment, you'll be redirected to a confirmation page. You can then access the guide anytime by entering your email on the guide page. No password needed — just your email.",
              },
              {
                q: "Can I cancel my monthly subscription?",
                a: "Yes, cancel anytime. You'll retain access through the end of your billing period. No questions asked.",
              },
              {
                q: "Are the recommendations sponsored?",
                a: "Never. Every spot is personally vetted and visited by our team. We don't accept payment from restaurants for inclusion.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-brown-dark/10 pb-6">
                <h3 className="font-semibold text-brown-dark mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-brown-medium/70 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
